var wc = Object.defineProperty;
var Tc = (e, a, t) =>
  a in e
    ? wc(e, a, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[a] = t);
var vr = (e, a, t) => Tc(e, typeof a != "symbol" ? a + "" : a, t);
import {
  j as g,
  s as Vt,
  B as At,
  c as uo,
  u as Ia,
  d as Ec,
} from "./index-BZzvAVnT.js";
import { r as Be, c as kc, g as Ac } from "./vendor-BgR6OOld.js";
import { d as bc, a as Cc } from "./router-D2JcpG7e.js";
import {
  C as Ke,
  b as Lt,
  c as Mt,
  a as lt,
  d as yr,
} from "./card-DCmFy9yX.js";
import { m as Sn } from "./mockReports-3cW05Ka2.js";
import { a as yc } from "./useReports-z4fPyFcR.js";
import { A as Fc } from "./AISidebar-Nt5highz.js";
import { u as Dc } from "./useQuery-fq0IAKu-.js";
import { A as Qn, a as es } from "./alert-D4BI-VHt.js";
import { B as Fr } from "./badge-DMGJasfj.js";
import {
  L as sn,
  e as ho,
  d as xo,
  a as Gr,
  T as ts,
  U as Nc,
  x as Bc,
  G as as,
  F as rs,
  y as Ic,
  p as ns,
  z as Rc,
  B as Pc,
  H as Da,
  I as wn,
  J as Oc,
  K as Lc,
  s as Mc,
  Z as on,
  N as Uc,
  O as jc,
  E as Hc,
  Q as ss,
  q as Gc,
} from "./utils-C25gojUd.js";
import { I as cn } from "./input-BnDZujQi.js";
import { L as za } from "./label-DNWlrZfM.js";
import { T as vo } from "./textarea-BnFcy4sU.js";
import {
  S as Vc,
  a as Wc,
  b as zc,
  c as Xc,
  d as Ta,
} from "./select-BPvc3et1.js";
import { D as go, a as $c } from "./DiagnosticSection-DZ2La2mX.js";
import { P as Kc } from "./PriorityCard-BWrVvT5h.js";
import "./index-Cda9Zv0V.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./PieChart-B46FBJBd.js";
class Xa extends Error {
  constructor(t, r = "UNKNOWN_ERROR", n) {
    super(t);
    vr(this, "code");
    vr(this, "originalError");
    ((this.name = "AppError"),
      (this.code = r),
      (this.originalError = n),
      Object.setPrototypeOf(this, Xa.prototype));
  }
  static fromError(t) {
    if (t instanceof Xa) return t;
    const r = t instanceof Error ? t.message : "An unexpected error occurred";
    return new Xa(r, "UNKNOWN_ERROR", t);
  }
}
class Dr extends Xa {
  constructor(t, r, n) {
    super(t, "API_ERROR", n);
    vr(this, "status");
    ((this.name = "ApiError"),
      (this.status = r),
      Object.setPrototypeOf(this, Dr.prototype));
  }
}
const Yc = "/api/gemini",
  qc = 5 * 60 * 1e3,
  os = new Map(),
  is = new Map();
function _o(e, a) {
  const t = a + JSON.stringify(e.slice(0, 50));
  let r = 5381;
  for (let n = 0; n < t.length; n++) r = (r * 33) ^ t.charCodeAt(n);
  return (r >>> 0).toString(36);
}
function So(e, a) {
  const t = e.get(a);
  return t ? (Date.now() > t.expiresAt ? (e.delete(a), null) : t.result) : null;
}
function wo(e, a, t) {
  e.set(a, { result: t, expiresAt: Date.now() + qc });
}
async function Jc(e, a, t = 3) {
  let r = null;
  for (let n = 0; n < t; n++) {
    try {
      const s = await fetch(e, a);
      if (s.ok || (s.status >= 400 && s.status < 500 && s.status !== 429))
        return s;
      r = new Error(`HTTP ${s.status}`);
    } catch (s) {
      r = s instanceof Error ? s : new Error("Network error");
    }
    if (n < t - 1) {
      const s = Math.pow(2, n) * 500;
      await new Promise((o) => setTimeout(o, s));
    }
  }
  throw r ?? new Error("Request failed after retries");
}
function Zc(e, a) {
  return `
Aja como um especialista em análise de dados para PMEs.
Sua tarefa é analisar os dados fornecidos e gerar um resumo executivo com blocos de visualização estratégica.

CONTEXTO: ${a || "Negócio em geral"}
DADOS: ${JSON.stringify(e.slice(0, 100))}

Sua resposta DEVE ser um objeto JSON puro, sem markdown ou explicações extras:
{
  "summary": "Resumo executivo dos dados em 2-3 frases, com os insights mais importantes",
  "blocks": [
    {
      "type": "KPI_GRID",
      "title": "Principais Métricas",
      "description": "Métricas estratégicas mais relevantes",
      "data": { "metrics": [] },
      "settings": {}
    }
  ]
}
  `.trim();
}
function Qc(e, a) {
  return `
Aja como um Consultor Estratégico Sênior especializado em PMEs.
Analise os dados e identifique o problema MAIS CRÍTICO (Diagnóstico) e sugira a ação MAIS IMPORTANTE (Prioridade).

CONTEXTO: ${a || "Negócio em geral"}
DADOS: ${JSON.stringify(e.slice(0, 100))}

Sua resposta DEVE ser um objeto JSON puro, sem markdown ou explicações extras:
{
  "diagnostic": {
    "title": "Título curto do problema",
    "description": "Explicação detalhada baseada nos dados",
    "causes": ["Causa 1", "Causa 2"],
    "implications": ["Impacto 1", "Impacto 2"]
  },
  "suggestedPriority": {
    "title": "O que deve ser feito agora",
    "explanation": "Por que isso é a prioridade número 1",
    "level": "high",
    "score": {
      "impact": 8,
      "urgency": 9,
      "effort": 5,
      "confidence": 7,
      "calculatedValue": 10.08
    }
  }
}
  `.trim();
}
async function To(e) {
  var n, s, o, i, l, c;
  const a = await Jc(Yc, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: e }] }],
        generationConfig: {
          temperature: 0.1,
          response_mime_type: "application/json",
        },
      }),
    }),
    t = await a.json();
  if (!a.ok || t.error)
    throw new Dr(
      ((n = t.error) == null ? void 0 : n.message) || "Erro na API de IA",
      a.status,
    );
  const r =
    (c =
      (l =
        (i =
          (o =
            (s = t == null ? void 0 : t.candidates) == null ? void 0 : s[0]) ==
          null
            ? void 0
            : o.content) == null
          ? void 0
          : i.parts) == null
        ? void 0
        : l[0]) == null
      ? void 0
      : c.text;
  if (!r) throw new Dr("Resposta inválida da API de IA");
  return r;
}
const e0 = async (e, a) => {
    const t = _o(e, `analysis:${a}`),
      r = So(os, t);
    if (r) return r;
    const n = Zc(e, a);
    try {
      const s = await To(n),
        o = JSON.parse(s);
      return (wo(os, t, o), o);
    } catch (s) {
      throw (console.error("[aiService] Erro ao analisar dados:", s), s);
    }
  },
  t0 = async (e, a) => {
    const t = _o(e, `diagnostic:${a}`),
      r = So(is, t);
    if (r) return r;
    const n = Qc(e, a);
    try {
      const s = await To(n),
        o = JSON.parse(s);
      return (wo(is, t, o), o);
    } catch (s) {
      throw (console.error("[aiService] Erro ao gerar diagnóstico:", s), s);
    }
  },
  cs = {
    "margem líquida": "NET_MARGIN",
    "margem bruta": "GROSS_MARGIN",
    "margem de contribuição": "CONTRIB_MARGIN",
    markup: "MARKUP",
    caixa: "CASH_FLOW",
    "fluxo de caixa": "CASH_FLOW",
    "prazo médio de recebimento": "RECEIVABLES_DAYS",
    pmr: "RECEIVABLES_DAYS",
    dso: "RECEIVABLES_DAYS",
    "custo de aquisição": "CUSTOMER_ACQ_COST",
    cac: "CUSTOMER_ACQ_COST",
    "ticket médio": "AVG_TICKET",
    gmv: "GMV",
    "taxa de conversão": "SALES_CONVERSION",
    conversão: "SALES_CONVERSION",
    churn: "CHURN_RATE",
    "taxa de churn": "CHURN_RATE",
    retenção: "RETENTION_RATE",
    ltv: "LTV",
    "lifetime value": "LTV",
    "giro de estoque": "INVENTORY_TURNOVER",
    produtividade: "REVENUE_PER_EMP",
    "despesas fixas": "FIXED_COSTS",
    "custo fixo": "FIXED_COSTS",
    turnover: "EMPLOYEE_TURNOVER",
    "receita por funcionário": "REVENUE_PER_EMP",
  },
  a0 = (e, a = {}) => {
    const { minConfidence: t = 0.6 } = a,
      r = [];
    return e != null && e.blocks
      ? (e.blocks.forEach((s, o) => {
          if (s.data && Array.isArray(s.data)) {
            const i = r0(s.data, o);
            r.push(...i);
          }
          if (s.description) {
            const i = ls(s.description, o);
            r.push(...i);
          }
          if (s.title) {
            const i = ls(s.title, o);
            r.push(...i);
          }
        }),
        s0(r).filter((s) => s.confidence >= t))
      : r;
  },
  r0 = (e, a) => {
    const t = [];
    if (!e.length) return t;
    const r = e[0],
      n = Object.keys(r);
    return (
      n.forEach((s) => {
        const o = s.toLowerCase(),
          i = Eo(o);
        i &&
          e.forEach((l, c) => {
            const p = ba(l[s]);
            if (p !== null && !isNaN(p)) {
              const m = n.find(
                  (d) =>
                    d.toLowerCase().includes("benchmark") ||
                    d.toLowerCase().includes("meta") ||
                    d.toLowerCase().includes("referência"),
                ),
                f = m ? ba(l[m]) : void 0,
                h = n.find(
                  (d) =>
                    d.toLowerCase().includes("variação") ||
                    d.toLowerCase().includes("delta") ||
                    d.toLowerCase().includes("trend"),
                ),
                x = h ? ba(l[h]) : void 0;
              t.push({
                code: i,
                value: p,
                unit: n0(o, p),
                benchmarkValue: f || void 0,
                deltaPercentage: x,
                confidence: 0.85,
                source: "table",
                sourceBlockIndex: a,
              });
            }
          });
      }),
      t
    );
  },
  ls = (e, a) => {
    const t = [];
    if (!e) return t;
    const r = e.toLowerCase();
    return (
      [
        {
          regex:
            /(margem líquida|margem bruta|markup|churn|cac|ticket médio).*?de\s+([\d.,]+)\s*%?/i,
          unit: "percentage",
          confidence: 0.75,
        },
        {
          regex: /([\d.,]+)\s*%\s+de\s+(margem|churn|retenção|conversão)/i,
          unit: "percentage",
          confidence: 0.7,
        },
        {
          regex: /r?\$\s*([\d.,]+)\s*(mil|k|milhões?|mi|bilhões?|bi)?/i,
          unit: "monetary",
          confidence: 0.65,
        },
        { regex: /(\d+)\s+dias?/i, unit: "days", confidence: 0.6 },
        {
          regex:
            /(aumento|crescimento|subiu|cresceu|variação)\s+(de\s+)?([\d.,]+)\s*%/i,
          unit: "percentage",
          confidence: 0.6,
          isDelta: !0,
        },
        {
          regex:
            /(queda|diminuição|redução|caiu|diminuiu)\s+(de\s+)?([\d.,]+)\s*%/i,
          unit: "percentage",
          confidence: 0.6,
          isDelta: !0,
          isNegative: !0,
        },
      ].forEach((s) => {
        const o = r.match(s.regex);
        if (o) {
          const i = ba(o[2] || o[3] || o[1]);
          if (i !== null) {
            const l = r.substring(
                Math.max(0, r.indexOf(o[0]) - 50),
                Math.min(r.length, r.indexOf(o[0]) + o[0].length + 50),
              ),
              c = Eo(l) || "UNKNOWN";
            let p = i,
              m;
            if (s.isDelta) {
              m = s.isNegative ? -i : i;
              const f = l.match(/(\d+[.,]?\d*)\s*%/);
              f && ba(f[1]) !== i && (p = ba(f[1]) || i);
            }
            c !== "UNKNOWN" &&
              t.push({
                code: c,
                value: p,
                unit: s.unit,
                deltaPercentage: m,
                confidence: s.confidence,
                source: "text",
                sourceBlockIndex: a,
              });
          }
        }
      }),
      t
    );
  },
  Eo = (e) => {
    const a = e.toLowerCase();
    for (const [t, r] of Object.entries(cs)) if (a.includes(t)) return r;
    for (const [t, r] of Object.entries(cs)) {
      const n = t.split(" ");
      if (n.filter((o) => a.includes(o)).length >= Math.ceil(n.length * 0.7))
        return r;
    }
    return null;
  },
  ba = (e) => {
    if (e == null) return null;
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const a = e
          .replace(/r?\$\s*/gi, "")
          .replace(/%/g, "")
          .replace(/\s+/g, "")
          .replace(/\./g, "")
          .replace(/,/g, ".")
          .trim(),
        t = parseFloat(a);
      return isNaN(t) ? null : t;
    }
    return null;
  },
  n0 = (e, a) => {
    const t = e.toLowerCase();
    return t.includes("%") ||
      t.includes("percent") ||
      t.includes("margem") ||
      t.includes("taxa")
      ? "percentage"
      : t.includes("dia") || t.includes("day") || t.includes("prazo")
        ? "days"
        : t.includes("custo") ||
            t.includes("valor") ||
            t.includes("receita") ||
            t.includes("faturamento")
          ? a < 100
            ? "ratio"
            : a < 1e3
              ? "monetary"
              : "currency"
          : t.includes("quantidade") ||
              t.includes("count") ||
              t.includes("número")
            ? "count"
            : a >= 0 && a <= 100 && !t.includes("valor")
              ? "percentage"
              : a > 365
                ? "currency"
                : "ratio";
  },
  s0 = (e) => {
    const a = new Map();
    return (
      e.forEach((t) => {
        const r = a.get(t.code);
        (!r || t.confidence > r.confidence) && a.set(t.code, t);
      }),
      Array.from(a.values())
    );
  },
  o0 = (e) => {
    var m, f;
    const a =
        ((m = e == null ? void 0 : e.title) == null
          ? void 0
          : m.toLowerCase()) || "",
      t =
        ((f = e == null ? void 0 : e.description) == null
          ? void 0
          : f.toLowerCase()) || "",
      r = `${a} ${t}`,
      n = {
        caixa: { code: "CASH_SHORTAGE", severity: "critical" },
        dinheiro: { code: "CASH_SHORTAGE", severity: "critical" },
        margem: { code: "LOW_PROFITABILITY", severity: "high" },
        lucro: { code: "LOW_PROFITABILITY", severity: "high" },
        churn: { code: "CUSTOMER_LOSS", severity: "high" },
        cancelamento: { code: "CUSTOMER_LOSS", severity: "high" },
        conversão: { code: "LOW_SALES_CONVERSION", severity: "medium" },
        vendas: { code: "LOW_SALES_CONVERSION", severity: "medium" },
        estoque: { code: "STOCK_STAGNATION", severity: "medium" },
        despesa: { code: "HIGH_FIXED_COSTS", severity: "medium" },
        "custo fixo": { code: "HIGH_FIXED_COSTS", severity: "medium" },
        recebimento: { code: "LATE_RECEIVABLES", severity: "medium" },
        cac: { code: "HIGH_ACQUISITION_COST", severity: "medium" },
        aquisição: { code: "HIGH_ACQUISITION_COST", severity: "medium" },
        demora: { code: "DELIVERY_DELAY", severity: "low" },
        prazo: { code: "DELIVERY_DELAY", severity: "low" },
      };
    let s = null,
      o = 0;
    for (const [h, x] of Object.entries(n)) {
      const d = (r.match(new RegExp(h, "gi")) || []).length;
      d > o && ((o = d), (s = x));
    }
    const i = {
        CASH_SHORTAGE: "LEV_CASH_CYCLE",
        LOW_PROFITABILITY: "LEV_PRICE",
        CUSTOMER_LOSS: "LEV_RETENTION",
        LOW_SALES_CONVERSION: "LEV_CONVERSION",
        STOCK_STAGNATION: "LEV_STOCK_TURN",
        HIGH_FIXED_COSTS: "LEV_FIXED_COST",
        LATE_RECEIVABLES: "LEV_CASH_CYCLE",
        HIGH_ACQUISITION_COST: "LEV_ACQ_EFF",
        DELIVERY_DELAY: "LEV_WASTE",
      },
      l = (s == null ? void 0 : s.code) || "LOW_PROFITABILITY",
      c = (s == null ? void 0 : s.severity) || "medium",
      p = i[l];
    return { challenge_code: l, suggested_lever_code: p, severity: c };
  },
  ko = Be.createContext(void 0),
  i0 = ({ children: e }) => {
    const [a, t] = Be.useState(1),
      [r, n] = Be.useState(""),
      [s, o] = Be.useState({
        title: "",
        description: "",
        category: "",
        dataSource: "upload",
      }),
      [i, l] = Be.useState(null),
      [c, p] = Be.useState(""),
      [m, f] = Be.useState(""),
      [h, x] = Be.useState(!1),
      [d, u] = Be.useState(!1),
      [A, B] = Be.useState(null),
      [w, M] = Be.useState(null),
      [H, U] = Be.useState(null),
      [k, S] = Be.useState(null),
      [_, I] = Be.useState([]),
      [R, N] = Be.useState([]),
      [X, ae] = Be.useState([]),
      [ee, ie] = Be.useState(null),
      Z = Be.useCallback(async () => {
        if (!A && !c && !m) {
          S("Nenhum dado fornecido para análise.");
          return;
        }
        (x(!0), S(null));
        try {
          const xe = A ? A.rows : [{ content: c || m }],
            j = `Objetivo: ${s.description}. Categoria: ${s.category}. Template: ${r}`,
            [fe, ne] = await Promise.all([e0(xe, j), t0(xe, j)]),
            b = a0(fe);
          ae(b);
          const O = { ...ne, ...o0(ne.diagnostic) };
          ie(O);
          const L = {
            id: crypto.randomUUID(),
            name: (i == null ? void 0 : i.name) || s.title || "Fonte de Dados",
            type: i ? "file" : m ? "url" : "raw_text",
            createdAt: new Date().toISOString(),
            metadata: {
              size: i == null ? void 0 : i.size,
              extension: i == null ? void 0 : i.name.split(".").pop(),
            },
          };
          N((K) => [...K, L]);
          const P = fe.blocks.map((K) => ({
            id: crypto.randomUUID(),
            type: K.type,
            layout: { w: 12 },
            content: {
              title: K.title,
              description: K.description,
              data: K.data,
              settings: K.settings || {},
            },
          }));
          I(P);
        } catch (xe) {
          (console.error("Erro na análise da IA:", xe),
            S(xe.message || "Erro ao processar dados com IA."));
        } finally {
          x(!1);
        }
      }, [A, c, m, s, r]);
    return g.jsx(ko.Provider, {
      "data-lov-id": "src\\contexts\\ReportBuilderContext.tsx:146:4",
      "data-lov-name": "ReportBuilderContext.Provider",
      "data-component-path": "src\\contexts\\ReportBuilderContext.tsx",
      "data-component-line": "146",
      "data-component-file": "ReportBuilderContext.tsx",
      "data-component-name": "ReportBuilderContext.Provider",
      "data-component-content": "%7B%7D",
      value: {
        step: a,
        setStep: t,
        selectedTemplate: r,
        setSelectedTemplate: n,
        formData: s,
        setFormData: o,
        file: i,
        setFile: l,
        textData: c,
        setTextData: p,
        urlData: m,
        setUrlData: f,
        loading: h,
        setLoading: x,
        aiSuggestionsOpen: d,
        setAiSuggestionsOpen: u,
        parsedData: A,
        setParsedData: B,
        aiResult: w,
        setAiResult: M,
        diagnosticResult: H,
        setDiagnosticResult: U,
        analysisError: k,
        setAnalysisError: S,
        blocks: _,
        setBlocks: I,
        dataSources: R,
        setDataSources: N,
        runAIAnalysis: Z,
        extractedKPIs: X,
        setExtractedKPIs: ae,
        enrichedDiagnostic: ee,
        setEnrichedDiagnostic: ie,
      },
      children: e,
    });
  },
  Ra = () => {
    const e = Be.useContext(ko);
    if (!e)
      throw new Error(
        "useReportBuilderContext must be used within a ReportBuilderProvider",
      );
    return e;
  },
  c0 = async (e, a, t, r) => {
    const { data: n, error: s } = await Vt.from("organization_members")
      .select("organization_id")
      .eq("user_id", r)
      .single();
    if (s || !(n != null && n.organization_id))
      throw new Error("Usuário não está associado a uma organização");
    const o = n.organization_id,
      { data: i, error: l } = await Vt.from("reports")
        .insert({
          user_id: r,
          title: e.title,
          description: e.description,
          category: e.category,
          template_id: e.template_id,
          blocks: e.blocks,
          status: e.status || "completed",
          data_json: { ...e.data_json, diagnostic: t, extracted_kpis: a },
        })
        .select()
        .single();
    if (l)
      throw (
        console.error("Erro ao salvar relatório:", l),
        new Error(`Erro ao salvar relatório: ${l.message}`)
      );
    let c = 0;
    if (a.length > 0) {
      const f = a.map((x) => ({
          organization_id: o,
          report_id: i.id,
          kpi_code: x.code,
          value: x.value,
          unit: x.unit,
          benchmark_value: x.benchmarkValue,
          delta_percentage: x.deltaPercentage,
          extracted_confidence: x.confidence,
          source_block_index: x.sourceBlockIndex,
          reference_period: l0(),
        })),
        { error: h } = await Vt.from("user_metrics").insert(f);
      h ? console.error("Erro ao salvar métricas:", h) : (c = a.length);
    }
    let p = !1,
      m;
    try {
      const { data: f } = await Vt.from("user_challenges")
        .select("id, status")
        .eq("organization_id", o)
        .eq("challenge_code", t.challenge_code)
        .in("status", ["detected", "acknowledged", "in_progress"])
        .maybeSingle();
      if (f) {
        const { data: h, error: x } = await Vt.from("user_challenges")
          .update({
            detected_in_report_id: i.id,
            detected_at: new Date().toISOString(),
            confidence_score: t.confidence || 0.8,
            ai_diagnostic_data: t,
            updated_at: new Date().toISOString(),
          })
          .eq("id", f.id)
          .select()
          .single();
        x || ((m = h == null ? void 0 : h.id), (p = !0));
      } else {
        const { data: h, error: x } = await Vt.from("user_challenges")
          .insert({
            organization_id: o,
            challenge_code: t.challenge_code,
            title: t.title,
            description: t.description,
            severity: t.severity,
            status: "detected",
            detected_in_report_id: i.id,
            suggested_lever_code: t.suggested_lever_code,
            confidence_score: t.confidence || 0.8,
            ai_diagnostic_data: t,
            expected_resolution_days: 30,
          })
          .select()
          .single();
        x
          ? console.error("Erro ao criar desafio:", x)
          : ((m = h == null ? void 0 : h.id), (p = !0));
      }
    } catch (f) {
      console.error("Erro ao processar desafio:", f);
    }
    return { report: i, metricsCount: c, challengeCreated: p, challengeId: m };
  },
  l0 = () => {
    const e = new Date();
    return `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
  },
  p0 = ({ fileData: e, onTemplateSelected: a }) => {
    const [t, r] = Be.useState(null),
      [n, s] = Be.useState(!1),
      { data: o = [] } = Dc({
        queryKey: ["strategic-templates"],
        queryFn: async () => {
          const { data: d } = await Vt.rpc("find_best_template", {
            p_file_structure: {
              columns: e.headers.map((u) => ({ name: u, type: l(u, e.rows) })),
              row_count: e.rows.length,
            },
            p_industry: null,
            p_category: null,
          });
          return d || [];
        },
      }),
      i = Be.useCallback(async () => {
        s(!0);
        try {
          const d = c(e.headers),
            u = p(e.headers),
            { data: A } = await Vt.rpc("find_best_template", {
              p_file_structure: {
                columns: e.headers.map((B) => ({
                  name: B,
                  type: l(B, e.rows),
                })),
                row_count: e.rows.length,
              },
              p_industry: d,
              p_category: u,
            });
          if (A && A.length > 0) {
            const B = A[0],
              w = m(e, B);
            r({
              isValid: w.length === 0,
              template: B,
              errors: w,
              warnings: f(e, B),
              suggestions: h(e, B),
            });
          } else
            r({
              isValid: !1,
              errors: ["Nenhum template compatível encontrado"],
              suggestions: [
                "Verifique se os nomes das colunas estão corretos",
                "Considere criar um template personalizado",
                "Entre em contato com o suporte para ajuda",
              ],
            });
        } catch (d) {
          (console.error("Error validating file:", d),
            r({
              isValid: !1,
              errors: ["Erro ao validar arquivo. Tente novamente."],
              suggestions: ["Verifique o formato do arquivo e tente novamente"],
            }));
        } finally {
          s(!1);
        }
      }, [e, o]),
      l = (d, u) => {
        const A = u
          .slice(0, 10)
          .map((M) => M[d])
          .filter((M) => M != null);
        if (A.length === 0) return "string";
        const B = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
        if (A.every((M) => B.test(M))) return "date";
        const w = /^-?\d+\.?\d*$/;
        return A.every((M) => w.test(M.toString()))
          ? "number"
          : A.every((M) =>
                ["true", "false", "sim", "não", "yes", "no", "1", "0"].includes(
                  M.toString().toLowerCase(),
                ),
              )
            ? "boolean"
            : "string";
      },
      c = (d) => {
        const u = d.join(" ").toLowerCase();
        return u.includes("fatura") ||
          u.includes("nota fiscal") ||
          u.includes("cnpj")
          ? "varejo"
          : u.includes("paciente") ||
              u.includes("médico") ||
              u.includes("consulta")
            ? "saude"
            : u.includes("aluno") ||
                u.includes("turma") ||
                u.includes("disciplina")
              ? "educacao"
              : u.includes("matéria-prima") ||
                  u.includes("produção") ||
                  u.includes("estoque")
                ? "manufatura"
                : u.includes("cliente") ||
                    u.includes("venda") ||
                    u.includes("produto")
                  ? "varejo"
                  : "general";
      },
      p = (d) => {
        const u = d.join(" ").toLowerCase();
        return u.includes("fluxo") ||
          u.includes("caixa") ||
          u.includes("entrada") ||
          u.includes("saída") ||
          u.includes("dre") ||
          u.includes("receita") ||
          u.includes("lucro") ||
          u.includes("margem")
          ? "financeiro"
          : u.includes("venda") ||
              u.includes("cliente") ||
              u.includes("produto")
            ? "vendas"
            : u.includes("conta") ||
                u.includes("pagar") ||
                u.includes("receber")
              ? "financeiro"
              : u.includes("funcionário") ||
                  u.includes("salário") ||
                  u.includes("rh")
                ? "rh"
                : "financeiro";
      },
      m = (d, u) => {
        var k, S, _, I;
        const A = [],
          B =
            ((k = u.file_structure) == null ? void 0 : k.required_columns) ||
            [],
          w = d.headers.map((R) => R.toLowerCase().trim());
        B.forEach((R) => {
          w.includes(R.name.toLowerCase().trim()) ||
            A.push(`Coluna obrigatória ausente: ${R.name}`);
        });
        const M = ((S = u.file_structure) == null ? void 0 : S.min_rows) || 1;
        d.rows.length < M &&
          A.push(
            `Arquivo precisa ter pelo menos ${M} linhas (tem ${d.rows.length})`,
          );
        const H =
          ((_ = u.file_structure) == null ? void 0 : _.max_rows) || 1 / 0;
        d.rows.length > H &&
          A.push(`Arquivo tem muitas linhas. Máximo permitido: ${H}`);
        const U =
          ((I = u.file_structure) == null ? void 0 : I.file_types) || [];
        return (
          U.length > 0 &&
            !U.includes(d.fileType) &&
            A.push(
              `Tipo de arquivo não permitido. Tipos aceitos: ${U.join(", ")}`,
            ),
          A
        );
      },
      f = (d, u) => {
        var H, U;
        const A = [],
          B = [
            ...(((H = u.file_structure) == null
              ? void 0
              : H.required_columns) || []),
            ...(((U = u.file_structure) == null
              ? void 0
              : U.optional_columns) || []),
          ].map((k) => k.name.toLowerCase()),
          w = d.headers.filter((k) => !B.includes(k.toLowerCase()));
        w.length > 0 &&
          A.push(`Colunas não mapeadas serão ignoradas: ${w.join(", ")}`);
        const M = d.rows.filter((k) =>
          k.every((S) => !S || S.toString().trim() === ""),
        );
        return (
          M.length > d.rows.length * 0.1 &&
            A.push(
              `${M.length} linhas vazias detectadas (${((M.length / d.rows.length) * 100).toFixed(1)}%)`,
            ),
          A
        );
      },
      h = (d, u) => {
        const A = [];
        (u.match_score < 80 &&
          A.push("Considere renomear algumas colunas para melhorar o matching"),
          d.rows.length < 50 &&
            A.push("Com mais dados, a análise será mais precisa"));
        const B = u.code;
        return (
          B.includes("FLUXO_CAIXA") &&
            A.push("Adicione categorias para análise mais detalhada"),
          B.includes("DRE") &&
            A.push("Inclua dados comparativos do período anterior"),
          B.includes("VENDAS") &&
            A.push(
              "Adicione informações de região e vendedor para análise geográfica",
            ),
          A
        );
      },
      x = () => {
        t != null &&
          t.template &&
          a &&
          (Vt.rpc("increment_template_usage", { p_template_id: t.template.id }),
          a(t.template));
      };
    return g.jsxs("div", {
      "data-lov-id": "src\\components\\templates\\TemplateMatching.tsx:287:4",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\templates\\TemplateMatching.tsx",
      "data-component-line": "287",
      "data-component-file": "TemplateMatching.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
      className: "space-y-4",
      children: [
        g.jsx("div", {
          "data-lov-id":
            "src\\components\\templates\\TemplateMatching.tsx:289:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\templates\\TemplateMatching.tsx",
          "data-component-line": "289",
          "data-component-file": "TemplateMatching.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20justify-center%22%7D",
          className: "flex justify-center",
          children: g.jsx(At, {
            "data-lov-id":
              "src\\components\\templates\\TemplateMatching.tsx:290:8",
            "data-lov-name": "Button",
            "data-component-path":
              "src\\components\\templates\\TemplateMatching.tsx",
            "data-component-line": "290",
            "data-component-file": "TemplateMatching.tsx",
            "data-component-name": "Button",
            "data-component-content":
              "%7B%22className%22%3A%22w-full%20max-w-md%22%7D",
            onClick: i,
            disabled: n,
            className: "w-full max-w-md",
            children: n
              ? g.jsxs(g.Fragment, {
                  children: [
                    g.jsx("div", {
                      "data-lov-id":
                        "src\\components\\templates\\TemplateMatching.tsx:297:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\templates\\TemplateMatching.tsx",
                      "data-component-line": "297",
                      "data-component-file": "TemplateMatching.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22animate-spin%20rounded-full%20h-4%20w-4%20border-b-2%20border-white%20mr-2%22%7D",
                      className:
                        "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
                    }),
                    "Validando Estrutura...",
                  ],
                })
              : g.jsxs(g.Fragment, {
                  children: [
                    g.jsx(sn, {
                      "data-lov-id":
                        "src\\components\\templates\\TemplateMatching.tsx:302:14",
                      "data-lov-name": "Lightbulb",
                      "data-component-path":
                        "src\\components\\templates\\TemplateMatching.tsx",
                      "data-component-line": "302",
                      "data-component-file": "TemplateMatching.tsx",
                      "data-component-name": "Lightbulb",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                      className: "w-4 h-4 mr-2",
                    }),
                    "Validar e Sugerir Template",
                  ],
                }),
          }),
        }),
        t &&
          g.jsxs(Ke, {
            "data-lov-id":
              "src\\components\\templates\\TemplateMatching.tsx:311:8",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\components\\templates\\TemplateMatching.tsx",
            "data-component-line": "311",
            "data-component-file": "TemplateMatching.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: [
              g.jsxs(Lt, {
                "data-lov-id":
                  "src\\components\\templates\\TemplateMatching.tsx:312:10",
                "data-lov-name": "CardHeader",
                "data-component-path":
                  "src\\components\\templates\\TemplateMatching.tsx",
                "data-component-line": "312",
                "data-component-file": "TemplateMatching.tsx",
                "data-component-name": "CardHeader",
                "data-component-content": "%7B%7D",
                children: [
                  g.jsxs(Mt, {
                    "data-lov-id":
                      "src\\components\\templates\\TemplateMatching.tsx:313:12",
                    "data-lov-name": "CardTitle",
                    "data-component-path":
                      "src\\components\\templates\\TemplateMatching.tsx",
                    "data-component-line": "313",
                    "data-component-file": "TemplateMatching.tsx",
                    "data-component-name": "CardTitle",
                    "data-component-content":
                      "%7B%22text%22%3A%22An%C3%A1lise%20do%20Arquivo%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      g.jsx(ho, {
                        "data-lov-id":
                          "src\\components\\templates\\TemplateMatching.tsx:314:14",
                        "data-lov-name": "FileText",
                        "data-component-path":
                          "src\\components\\templates\\TemplateMatching.tsx",
                        "data-component-line": "314",
                        "data-component-file": "TemplateMatching.tsx",
                        "data-component-name": "FileText",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                        className: "w-5 h-5",
                      }),
                      "Análise do Arquivo",
                    ],
                  }),
                  g.jsx(Fr, {
                    "data-lov-id":
                      "src\\components\\templates\\TemplateMatching.tsx:317:12",
                    "data-lov-name": "Badge",
                    "data-component-path":
                      "src\\components\\templates\\TemplateMatching.tsx",
                    "data-component-line": "317",
                    "data-component-file": "TemplateMatching.tsx",
                    "data-component-name": "Badge",
                    "data-component-content": "%7B%7D",
                    variant: t.isValid ? "default" : "destructive",
                    className: t.isValid ? "bg-green-100 text-green-800" : "",
                    children: t.isValid ? "Válido" : "Inválido",
                  }),
                ],
              }),
              g.jsxs(lt, {
                "data-lov-id":
                  "src\\components\\templates\\TemplateMatching.tsx:325:10",
                "data-lov-name": "CardContent",
                "data-component-path":
                  "src\\components\\templates\\TemplateMatching.tsx",
                "data-component-line": "325",
                "data-component-file": "TemplateMatching.tsx",
                "data-component-name": "CardContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-6%22%7D",
                className: "space-y-6",
                children: [
                  t.template &&
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\components\\templates\\TemplateMatching.tsx:328:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\templates\\TemplateMatching.tsx",
                      "data-component-line": "328",
                      "data-component-file": "TemplateMatching.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-4%22%7D",
                      className: "space-y-4",
                      children: [
                        g.jsxs("div", {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:329:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "329",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                          className: "flex items-center gap-4",
                          children: [
                            g.jsx("h4", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:330:18",
                              "data-lov-name": "h4",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "330",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "h4",
                              "data-component-content":
                                "%7B%22text%22%3A%22Template%20Sugerido%22%2C%22className%22%3A%22text-lg%20font-semibold%22%7D",
                              className: "text-lg font-semibold",
                              children: "Template Sugerido",
                            }),
                            g.jsxs("div", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:331:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "331",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                              className: "flex items-center gap-2",
                              children: [
                                g.jsxs(Fr, {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:332:20",
                                  "data-lov-name": "Badge",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "332",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "Badge",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Score%3A%20%25%22%7D",
                                  variant: "outline",
                                  children: [
                                    "Score: ",
                                    t.template.match_score,
                                    "%",
                                  ],
                                }),
                                g.jsx(xo, {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:335:20",
                                  "data-lov-name": "TrendingUp",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "335",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "TrendingUp",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20text-green-600%22%7D",
                                  className: "w-4 h-4 text-green-600",
                                }),
                              ],
                            }),
                          ],
                        }),
                        g.jsxs("div", {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:339:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "339",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22bg-blue-50%20p-4%20rounded-lg%20border%20border-blue-200%22%7D",
                          className:
                            "bg-blue-50 p-4 rounded-lg border border-blue-200",
                          children: [
                            g.jsxs("div", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:340:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "340",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-start%20justify-between%20mb-3%22%7D",
                              className:
                                "flex items-start justify-between mb-3",
                              children: [
                                g.jsxs("div", {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:341:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "341",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  children: [
                                    g.jsx("h5", {
                                      "data-lov-id":
                                        "src\\components\\templates\\TemplateMatching.tsx:342:22",
                                      "data-lov-name": "h5",
                                      "data-component-path":
                                        "src\\components\\templates\\TemplateMatching.tsx",
                                      "data-component-line": "342",
                                      "data-component-file":
                                        "TemplateMatching.tsx",
                                      "data-component-name": "h5",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22font-semibold%20text-blue-900%22%7D",
                                      className: "font-semibold text-blue-900",
                                      children: t.template.name,
                                    }),
                                    g.jsx("p", {
                                      "data-lov-id":
                                        "src\\components\\templates\\TemplateMatching.tsx:343:22",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\components\\templates\\TemplateMatching.tsx",
                                      "data-component-line": "343",
                                      "data-component-file":
                                        "TemplateMatching.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-sm%20text-blue-700%20mt-1%22%7D",
                                      className: "text-sm text-blue-700 mt-1",
                                      children: t.template.description,
                                    }),
                                  ],
                                }),
                                g.jsx(At, {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:345:20",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "345",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Usar%20este%20Template%22%7D",
                                  size: "sm",
                                  onClick: x,
                                  disabled: !t.isValid,
                                  children: "Usar este Template",
                                }),
                              ],
                            }),
                            g.jsxs("div", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:354:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "354",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-sm%20text-blue-800%22%7D",
                              className: "text-sm text-blue-800",
                              children: [
                                g.jsx("strong", {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:355:20",
                                  "data-lov-name": "strong",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "355",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "strong",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22C%C3%B3digo%3A%22%7D",
                                  children: "Código:",
                                }),
                                " ",
                                t.template.code,
                                g.jsx("br", {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:355:71",
                                  "data-lov-name": "br",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "355",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "br",
                                  "data-component-content": "%7B%7D",
                                }),
                                g.jsx("strong", {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:356:20",
                                  "data-lov-name": "strong",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "356",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "strong",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Ind%C3%BAstria%3A%22%7D",
                                  children: "Indústria:",
                                }),
                                " ",
                                t.template.industry,
                                g.jsx("br", {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:356:78",
                                  "data-lov-name": "br",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "356",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "br",
                                  "data-component-content": "%7B%7D",
                                }),
                                g.jsx("strong", {
                                  "data-lov-id":
                                    "src\\components\\templates\\TemplateMatching.tsx:357:20",
                                  "data-lov-name": "strong",
                                  "data-component-path":
                                    "src\\components\\templates\\TemplateMatching.tsx",
                                  "data-component-line": "357",
                                  "data-component-file": "TemplateMatching.tsx",
                                  "data-component-name": "strong",
                                  "data-component-content":
                                    "%7B%22text%22%3A%22Categoria%3A%22%7D",
                                  children: "Categoria:",
                                }),
                                " ",
                                t.template.category,
                              ],
                            }),
                            t.template.match_reasons.length > 0 &&
                              g.jsxs("div", {
                                "data-lov-id":
                                  "src\\components\\templates\\TemplateMatching.tsx:361:20",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\components\\templates\\TemplateMatching.tsx",
                                "data-component-line": "361",
                                "data-component-file": "TemplateMatching.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22mt-3%20pt-3%20border-t%20border-blue-200%22%7D",
                                className: "mt-3 pt-3 border-t border-blue-200",
                                children: [
                                  g.jsx("strong", {
                                    "data-lov-id":
                                      "src\\components\\templates\\TemplateMatching.tsx:362:22",
                                    "data-lov-name": "strong",
                                    "data-component-path":
                                      "src\\components\\templates\\TemplateMatching.tsx",
                                    "data-component-line": "362",
                                    "data-component-file":
                                      "TemplateMatching.tsx",
                                    "data-component-name": "strong",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22Motivos%20do%20matching%3A%22%2C%22className%22%3A%22text-sm%22%7D",
                                    className: "text-sm",
                                    children: "Motivos do matching:",
                                  }),
                                  g.jsx("ul", {
                                    "data-lov-id":
                                      "src\\components\\templates\\TemplateMatching.tsx:363:22",
                                    "data-lov-name": "ul",
                                    "data-component-path":
                                      "src\\components\\templates\\TemplateMatching.tsx",
                                    "data-component-line": "363",
                                    "data-component-file":
                                      "TemplateMatching.tsx",
                                    "data-component-name": "ul",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22mt-2%20space-y-1%20text-sm%22%7D",
                                    className: "mt-2 space-y-1 text-sm",
                                    children: t.template.match_reasons.map(
                                      (d, u) =>
                                        g.jsxs(
                                          "li",
                                          {
                                            "data-lov-id":
                                              "src\\components\\templates\\TemplateMatching.tsx:365:26",
                                            "data-lov-name": "li",
                                            "data-component-path":
                                              "src\\components\\templates\\TemplateMatching.tsx",
                                            "data-component-line": "365",
                                            "data-component-file":
                                              "TemplateMatching.tsx",
                                            "data-component-name": "li",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              g.jsx(Gr, {
                                                "data-lov-id":
                                                  "src\\components\\templates\\TemplateMatching.tsx:366:28",
                                                "data-lov-name": "CheckCircle",
                                                "data-component-path":
                                                  "src\\components\\templates\\TemplateMatching.tsx",
                                                "data-component-line": "366",
                                                "data-component-file":
                                                  "TemplateMatching.tsx",
                                                "data-component-name":
                                                  "CheckCircle",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22w-3%20h-3%20text-green-600%22%7D",
                                                className:
                                                  "w-3 h-3 text-green-600",
                                              }),
                                              d,
                                            ],
                                          },
                                          u,
                                        ),
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  t.errors &&
                    t.errors.length > 0 &&
                    g.jsxs(Qn, {
                      "data-lov-id":
                        "src\\components\\templates\\TemplateMatching.tsx:379:14",
                      "data-lov-name": "Alert",
                      "data-component-path":
                        "src\\components\\templates\\TemplateMatching.tsx",
                      "data-component-line": "379",
                      "data-component-file": "TemplateMatching.tsx",
                      "data-component-name": "Alert",
                      "data-component-content":
                        "%7B%22className%22%3A%22border-red-200%20bg-red-50%22%7D",
                      className: "border-red-200 bg-red-50",
                      children: [
                        g.jsx(ts, {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:380:16",
                          "data-lov-name": "AlertTriangle",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "380",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "AlertTriangle",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%20text-red-600%22%7D",
                          className: "h-4 w-4 text-red-600",
                        }),
                        g.jsxs(es, {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:381:16",
                          "data-lov-name": "AlertDescription",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "381",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "AlertDescription",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-red-800%22%7D",
                          className: "text-red-800",
                          children: [
                            g.jsx("div", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:382:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "382",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22text%22%3A%22Erros%20encontrados%3A%22%2C%22className%22%3A%22font-medium%20mb-2%22%7D",
                              className: "font-medium mb-2",
                              children: "Erros encontrados:",
                            }),
                            g.jsx("ul", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:383:18",
                              "data-lov-name": "ul",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "383",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "ul",
                              "data-component-content":
                                "%7B%22className%22%3A%22space-y-1%20text-sm%22%7D",
                              className: "space-y-1 text-sm",
                              children: t.errors.map((d, u) =>
                                g.jsxs(
                                  "li",
                                  {
                                    "data-lov-id":
                                      "src\\components\\templates\\TemplateMatching.tsx:385:22",
                                    "data-lov-name": "li",
                                    "data-component-path":
                                      "src\\components\\templates\\TemplateMatching.tsx",
                                    "data-component-line": "385",
                                    "data-component-file":
                                      "TemplateMatching.tsx",
                                    "data-component-name": "li",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D",
                                    className: "flex items-start gap-2",
                                    children: [
                                      g.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\templates\\TemplateMatching.tsx:386:24",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\templates\\TemplateMatching.tsx",
                                        "data-component-line": "386",
                                        "data-component-file":
                                          "TemplateMatching.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-red-600%20mt-0.5%22%7D",
                                        className: "text-red-600 mt-0.5",
                                        children: "•",
                                      }),
                                      d,
                                    ],
                                  },
                                  u,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  t.warnings &&
                    t.warnings.length > 0 &&
                    g.jsxs(Qn, {
                      "data-lov-id":
                        "src\\components\\templates\\TemplateMatching.tsx:397:14",
                      "data-lov-name": "Alert",
                      "data-component-path":
                        "src\\components\\templates\\TemplateMatching.tsx",
                      "data-component-line": "397",
                      "data-component-file": "TemplateMatching.tsx",
                      "data-component-name": "Alert",
                      "data-component-content":
                        "%7B%22className%22%3A%22border-yellow-200%20bg-yellow-50%22%7D",
                      className: "border-yellow-200 bg-yellow-50",
                      children: [
                        g.jsx(ts, {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:398:16",
                          "data-lov-name": "AlertTriangle",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "398",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "AlertTriangle",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%20text-yellow-600%22%7D",
                          className: "h-4 w-4 text-yellow-600",
                        }),
                        g.jsxs(es, {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:399:16",
                          "data-lov-name": "AlertDescription",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "399",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "AlertDescription",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-yellow-800%22%7D",
                          className: "text-yellow-800",
                          children: [
                            g.jsx("div", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:400:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "400",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22text%22%3A%22Avisos%3A%22%2C%22className%22%3A%22font-medium%20mb-2%22%7D",
                              className: "font-medium mb-2",
                              children: "Avisos:",
                            }),
                            g.jsx("ul", {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:401:18",
                              "data-lov-name": "ul",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "401",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "ul",
                              "data-component-content":
                                "%7B%22className%22%3A%22space-y-1%20text-sm%22%7D",
                              className: "space-y-1 text-sm",
                              children: t.warnings.map((d, u) =>
                                g.jsxs(
                                  "li",
                                  {
                                    "data-lov-id":
                                      "src\\components\\templates\\TemplateMatching.tsx:403:22",
                                    "data-lov-name": "li",
                                    "data-component-path":
                                      "src\\components\\templates\\TemplateMatching.tsx",
                                    "data-component-line": "403",
                                    "data-component-file":
                                      "TemplateMatching.tsx",
                                    "data-component-name": "li",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D",
                                    className: "flex items-start gap-2",
                                    children: [
                                      g.jsx("span", {
                                        "data-lov-id":
                                          "src\\components\\templates\\TemplateMatching.tsx:404:24",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\components\\templates\\TemplateMatching.tsx",
                                        "data-component-line": "404",
                                        "data-component-file":
                                          "TemplateMatching.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-yellow-600%20mt-0.5%22%7D",
                                        className: "text-yellow-600 mt-0.5",
                                        children: "•",
                                      }),
                                      d,
                                    ],
                                  },
                                  u,
                                ),
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  t.suggestions &&
                    t.suggestions.length > 0 &&
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\components\\templates\\TemplateMatching.tsx:415:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\templates\\TemplateMatching.tsx",
                      "data-component-line": "415",
                      "data-component-file": "TemplateMatching.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22bg-gray-50%20p-4%20rounded-lg%22%7D",
                      className: "bg-gray-50 p-4 rounded-lg",
                      children: [
                        g.jsxs("h4", {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:416:16",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "416",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22text%22%3A%22Sugest%C3%B5es%20para%20Melhorar%22%2C%22className%22%3A%22font-medium%20mb-3%20flex%20items-center%20gap-2%22%7D",
                          className: "font-medium mb-3 flex items-center gap-2",
                          children: [
                            g.jsx(sn, {
                              "data-lov-id":
                                "src\\components\\templates\\TemplateMatching.tsx:417:18",
                              "data-lov-name": "Lightbulb",
                              "data-component-path":
                                "src\\components\\templates\\TemplateMatching.tsx",
                              "data-component-line": "417",
                              "data-component-file": "TemplateMatching.tsx",
                              "data-component-name": "Lightbulb",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20text-gray-600%22%7D",
                              className: "w-4 h-4 text-gray-600",
                            }),
                            "Sugestões para Melhorar",
                          ],
                        }),
                        g.jsx("ul", {
                          "data-lov-id":
                            "src\\components\\templates\\TemplateMatching.tsx:420:16",
                          "data-lov-name": "ul",
                          "data-component-path":
                            "src\\components\\templates\\TemplateMatching.tsx",
                          "data-component-line": "420",
                          "data-component-file": "TemplateMatching.tsx",
                          "data-component-name": "ul",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-2%20text-sm%22%7D",
                          className: "space-y-2 text-sm",
                          children: t.suggestions.map((d, u) =>
                            g.jsxs(
                              "li",
                              {
                                "data-lov-id":
                                  "src\\components\\templates\\TemplateMatching.tsx:422:20",
                                "data-lov-name": "li",
                                "data-component-path":
                                  "src\\components\\templates\\TemplateMatching.tsx",
                                "data-component-line": "422",
                                "data-component-file": "TemplateMatching.tsx",
                                "data-component-name": "li",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20items-start%20gap-2%22%7D",
                                className: "flex items-start gap-2",
                                children: [
                                  g.jsx("span", {
                                    "data-lov-id":
                                      "src\\components\\templates\\TemplateMatching.tsx:423:22",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\components\\templates\\TemplateMatching.tsx",
                                    "data-component-line": "423",
                                    "data-component-file":
                                      "TemplateMatching.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-gray-600%20mt-0.5%22%7D",
                                    className: "text-gray-600 mt-0.5",
                                    children: "•",
                                  }),
                                  d,
                                ],
                              },
                              u,
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
  };
var Ao = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ (function (e, a) {
  ((t, r) => {
    e.exports = r();
  })(kc, function t() {
    var r =
        typeof self < "u"
          ? self
          : typeof window < "u"
            ? window
            : r !== void 0
              ? r
              : {},
      n,
      s = !r.document && !!r.postMessage,
      o = r.IS_PAPA_WORKER || !1,
      i = {},
      l = 0,
      c = {};
    function p(S) {
      ((this._handle = null),
        (this._finished = !1),
        (this._completed = !1),
        (this._halted = !1),
        (this._input = null),
        (this._baseIndex = 0),
        (this._partialLine = ""),
        (this._rowCount = 0),
        (this._start = 0),
        (this._nextChunk = null),
        (this.isFirstChunk = !0),
        (this._completeResults = { data: [], errors: [], meta: {} }),
        function (_) {
          var I = H(_);
          ((I.chunkSize = parseInt(I.chunkSize)),
            _.step || _.chunk || (I.chunkSize = null),
            (this._handle = new d(I)),
            ((this._handle.streamer = this)._config = I));
        }.call(this, S),
        (this.parseChunk = function (_, I) {
          var R = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < R) {
            let X = this._config.newline;
            (X ||
              ((N = this._config.quoteChar || '"'),
              (X = this._handle.guessLineEndings(_, N))),
              (_ = [..._.split(X).slice(R)].join(X)));
          }
          (this.isFirstChunk &&
            k(this._config.beforeFirstChunk) &&
            (N = this._config.beforeFirstChunk(_)) !== void 0 &&
            (_ = N),
            (this.isFirstChunk = !1),
            (this._halted = !1));
          var R = this._partialLine + _,
            N =
              ((this._partialLine = ""),
              this._handle.parse(R, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (
              ((_ = N.meta.cursor),
              (R =
                (this._finished ||
                  ((this._partialLine = R.substring(_ - this._baseIndex)),
                  (this._baseIndex = _)),
                N && N.data && (this._rowCount += N.data.length),
                this._finished ||
                  (this._config.preview &&
                    this._rowCount >= this._config.preview))),
              o)
            )
              r.postMessage({ results: N, workerId: c.WORKER_ID, finished: R });
            else if (k(this._config.chunk) && !I) {
              if (
                (this._config.chunk(N, this._handle),
                this._handle.paused() || this._handle.aborted())
              )
                return void (this._halted = !0);
              this._completeResults = N = void 0;
            }
            return (
              this._config.step ||
                this._config.chunk ||
                ((this._completeResults.data =
                  this._completeResults.data.concat(N.data)),
                (this._completeResults.errors =
                  this._completeResults.errors.concat(N.errors)),
                (this._completeResults.meta = N.meta)),
              this._completed ||
                !R ||
                !k(this._config.complete) ||
                (N && N.meta.aborted) ||
                (this._config.complete(this._completeResults, this._input),
                (this._completed = !0)),
              R || (N && N.meta.paused) || this._nextChunk(),
              N
            );
          }
          this._halted = !0;
        }),
        (this._sendError = function (_) {
          k(this._config.error)
            ? this._config.error(_)
            : o &&
              this._config.error &&
              r.postMessage({ workerId: c.WORKER_ID, error: _, finished: !1 });
        }));
    }
    function m(S) {
      var _;
      ((S = S || {}).chunkSize || (S.chunkSize = c.RemoteChunkSize),
        p.call(this, S),
        (this._nextChunk = s
          ? function () {
              (this._readChunk(), this._chunkLoaded());
            }
          : function () {
              this._readChunk();
            }),
        (this.stream = function (I) {
          ((this._input = I), this._nextChunk());
        }),
        (this._readChunk = function () {
          if (this._finished) this._chunkLoaded();
          else {
            if (
              ((_ = new XMLHttpRequest()),
              this._config.withCredentials &&
                (_.withCredentials = this._config.withCredentials),
              s ||
                ((_.onload = U(this._chunkLoaded, this)),
                (_.onerror = U(this._chunkError, this))),
              _.open(
                this._config.downloadRequestBody ? "POST" : "GET",
                this._input,
                !s,
              ),
              this._config.downloadRequestHeaders)
            ) {
              var I,
                R = this._config.downloadRequestHeaders;
              for (I in R) _.setRequestHeader(I, R[I]);
            }
            var N;
            this._config.chunkSize &&
              ((N = this._start + this._config.chunkSize - 1),
              _.setRequestHeader("Range", "bytes=" + this._start + "-" + N));
            try {
              _.send(this._config.downloadRequestBody);
            } catch (X) {
              this._chunkError(X.message);
            }
            s && _.status === 0 && this._chunkError();
          }
        }),
        (this._chunkLoaded = function () {
          _.readyState === 4 &&
            (_.status < 200 || 400 <= _.status
              ? this._chunkError()
              : ((this._start +=
                  this._config.chunkSize || _.responseText.length),
                (this._finished =
                  !this._config.chunkSize ||
                  this._start >=
                    ((I) =>
                      (I = I.getResponseHeader("Content-Range")) !== null
                        ? parseInt(I.substring(I.lastIndexOf("/") + 1))
                        : -1)(_)),
                this.parseChunk(_.responseText)));
        }),
        (this._chunkError = function (I) {
          ((I = _.statusText || I), this._sendError(new Error(I)));
        }));
    }
    function f(S) {
      ((S = S || {}).chunkSize || (S.chunkSize = c.LocalChunkSize),
        p.call(this, S));
      var _,
        I,
        R = typeof FileReader < "u";
      ((this.stream = function (N) {
        ((this._input = N),
          (I = N.slice || N.webkitSlice || N.mozSlice),
          R
            ? (((_ = new FileReader()).onload = U(this._chunkLoaded, this)),
              (_.onerror = U(this._chunkError, this)))
            : (_ = new FileReaderSync()),
          this._nextChunk());
      }),
        (this._nextChunk = function () {
          this._finished ||
            (this._config.preview &&
              !(this._rowCount < this._config.preview)) ||
            this._readChunk();
        }),
        (this._readChunk = function () {
          var N = this._input,
            X =
              (this._config.chunkSize &&
                ((X = Math.min(
                  this._start + this._config.chunkSize,
                  this._input.size,
                )),
                (N = I.call(N, this._start, X))),
              _.readAsText(N, this._config.encoding));
          R || this._chunkLoaded({ target: { result: X } });
        }),
        (this._chunkLoaded = function (N) {
          ((this._start += this._config.chunkSize),
            (this._finished =
              !this._config.chunkSize || this._start >= this._input.size),
            this.parseChunk(N.target.result));
        }),
        (this._chunkError = function () {
          this._sendError(_.error);
        }));
    }
    function h(S) {
      var _;
      (p.call(this, (S = S || {})),
        (this.stream = function (I) {
          return ((_ = I), this._nextChunk());
        }),
        (this._nextChunk = function () {
          var I, R;
          if (!this._finished)
            return (
              (I = this._config.chunkSize),
              (_ = I
                ? ((R = _.substring(0, I)), _.substring(I))
                : ((R = _), "")),
              (this._finished = !_),
              this.parseChunk(R)
            );
        }));
    }
    function x(S) {
      p.call(this, (S = S || {}));
      var _ = [],
        I = !0,
        R = !1;
      ((this.pause = function () {
        (p.prototype.pause.apply(this, arguments), this._input.pause());
      }),
        (this.resume = function () {
          (p.prototype.resume.apply(this, arguments), this._input.resume());
        }),
        (this.stream = function (N) {
          ((this._input = N),
            this._input.on("data", this._streamData),
            this._input.on("end", this._streamEnd),
            this._input.on("error", this._streamError));
        }),
        (this._checkIsFinished = function () {
          R && _.length === 1 && (this._finished = !0);
        }),
        (this._nextChunk = function () {
          (this._checkIsFinished(),
            _.length ? this.parseChunk(_.shift()) : (I = !0));
        }),
        (this._streamData = U(function (N) {
          try {
            (_.push(
              typeof N == "string" ? N : N.toString(this._config.encoding),
            ),
              I &&
                ((I = !1),
                this._checkIsFinished(),
                this.parseChunk(_.shift())));
          } catch (X) {
            this._streamError(X);
          }
        }, this)),
        (this._streamError = U(function (N) {
          (this._streamCleanUp(), this._sendError(N));
        }, this)),
        (this._streamEnd = U(function () {
          (this._streamCleanUp(), (R = !0), this._streamData(""));
        }, this)),
        (this._streamCleanUp = U(function () {
          (this._input.removeListener("data", this._streamData),
            this._input.removeListener("end", this._streamEnd),
            this._input.removeListener("error", this._streamError));
        }, this)));
    }
    function d(S) {
      var _,
        I,
        R,
        N,
        X = Math.pow(2, 53),
        ae = -X,
        ee = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
        ie =
          /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
        Z = this,
        xe = 0,
        j = 0,
        fe = !1,
        ne = !1,
        b = [],
        O = { data: [], errors: [], meta: {} };
      function L(Q) {
        return S.skipEmptyLines === "greedy"
          ? Q.join("").trim() === ""
          : Q.length === 1 && Q[0].length === 0;
      }
      function P() {
        if (
          (O &&
            R &&
            (re(
              "Delimiter",
              "UndetectableDelimiter",
              "Unable to auto-detect delimiting character; defaulted to '" +
                c.DefaultDelimiter +
                "'",
            ),
            (R = !1)),
          S.skipEmptyLines &&
            (O.data = O.data.filter(function (ce) {
              return !L(ce);
            })),
          K())
        ) {
          let ce = function (F, Te) {
            (k(S.transformHeader) && (F = S.transformHeader(F, Te)), b.push(F));
          };
          if (O)
            if (Array.isArray(O.data[0])) {
              for (var Q = 0; K() && Q < O.data.length; Q++)
                O.data[Q].forEach(ce);
              O.data.splice(0, 1);
            } else O.data.forEach(ce);
        }
        function J(ce, F) {
          for (var Te = S.header ? {} : [], he = 0; he < ce.length; he++) {
            var ve = he,
              pe = ce[he],
              pe = ((oe, ue) =>
                ((ke) => (
                  S.dynamicTypingFunction &&
                    S.dynamicTyping[ke] === void 0 &&
                    (S.dynamicTyping[ke] = S.dynamicTypingFunction(ke)),
                  (S.dynamicTyping[ke] || S.dynamicTyping) === !0
                ))(oe)
                  ? ue === "true" ||
                    ue === "TRUE" ||
                    (ue !== "false" &&
                      ue !== "FALSE" &&
                      (((ke) => {
                        if (
                          ee.test(ke) &&
                          ((ke = parseFloat(ke)), ae < ke && ke < X)
                        )
                          return 1;
                      })(ue)
                        ? parseFloat(ue)
                        : ie.test(ue)
                          ? new Date(ue)
                          : ue === ""
                            ? null
                            : ue))
                  : ue)(
                (ve = S.header
                  ? he >= b.length
                    ? "__parsed_extra"
                    : b[he]
                  : ve),
                (pe = S.transform ? S.transform(pe, ve) : pe),
              );
            ve === "__parsed_extra"
              ? ((Te[ve] = Te[ve] || []), Te[ve].push(pe))
              : (Te[ve] = pe);
          }
          return (
            S.header &&
              (he > b.length
                ? re(
                    "FieldMismatch",
                    "TooManyFields",
                    "Too many fields: expected " +
                      b.length +
                      " fields but parsed " +
                      he,
                    j + F,
                  )
                : he < b.length &&
                  re(
                    "FieldMismatch",
                    "TooFewFields",
                    "Too few fields: expected " +
                      b.length +
                      " fields but parsed " +
                      he,
                    j + F,
                  )),
            Te
          );
        }
        var q;
        O &&
          (S.header || S.dynamicTyping || S.transform) &&
          ((q = 1),
          !O.data.length || Array.isArray(O.data[0])
            ? ((O.data = O.data.map(J)), (q = O.data.length))
            : (O.data = J(O.data, 0)),
          S.header && O.meta && (O.meta.fields = b),
          (j += q));
      }
      function K() {
        return S.header && b.length === 0;
      }
      function re(Q, J, q, ce) {
        ((Q = { type: Q, code: J, message: q }),
          ce !== void 0 && (Q.row = ce),
          O.errors.push(Q));
      }
      (k(S.step) &&
        ((N = S.step),
        (S.step = function (Q) {
          ((O = Q),
            K()
              ? P()
              : (P(),
                O.data.length !== 0 &&
                  ((xe += Q.data.length),
                  S.preview && xe > S.preview
                    ? I.abort()
                    : ((O.data = O.data[0]), N(O, Z)))));
        })),
        (this.parse = function (Q, J, q) {
          var ce = S.quoteChar || '"',
            ce =
              (S.newline || (S.newline = this.guessLineEndings(Q, ce)),
              (R = !1),
              S.delimiter
                ? k(S.delimiter) &&
                  ((S.delimiter = S.delimiter(Q)),
                  (O.meta.delimiter = S.delimiter))
                : ((ce = ((F, Te, he, ve, pe) => {
                    var oe, ue, ke, Ye;
                    pe = pe || [",", "	", "|", ";", c.RECORD_SEP, c.UNIT_SEP];
                    for (var nt = 0; nt < pe.length; nt++) {
                      for (
                        var st,
                          St = pe[nt],
                          Fe = 0,
                          Ve = 0,
                          Ne = 0,
                          We =
                            ((ke = void 0),
                            new A({
                              comments: ve,
                              delimiter: St,
                              newline: Te,
                              preview: 10,
                            }).parse(F)),
                          Re = 0;
                        Re < We.data.length;
                        Re++
                      )
                        he && L(We.data[Re])
                          ? Ne++
                          : ((st = We.data[Re].length),
                            (Ve += st),
                            ke === void 0
                              ? (ke = st)
                              : 0 < st &&
                                ((Fe += Math.abs(st - ke)), (ke = st)));
                      (0 < We.data.length && (Ve /= We.data.length - Ne),
                        (ue === void 0 || Fe <= ue) &&
                          (Ye === void 0 || Ye < Ve) &&
                          1.99 < Ve &&
                          ((ue = Fe), (oe = St), (Ye = Ve)));
                    }
                    return {
                      successful: !!(S.delimiter = oe),
                      bestDelimiter: oe,
                    };
                  })(
                    Q,
                    S.newline,
                    S.skipEmptyLines,
                    S.comments,
                    S.delimitersToGuess,
                  )).successful
                    ? (S.delimiter = ce.bestDelimiter)
                    : ((R = !0), (S.delimiter = c.DefaultDelimiter)),
                  (O.meta.delimiter = S.delimiter)),
              H(S));
          return (
            S.preview && S.header && ce.preview++,
            (_ = Q),
            (I = new A(ce)),
            (O = I.parse(_, J, q)),
            P(),
            fe ? { meta: { paused: !0 } } : O || { meta: { paused: !1 } }
          );
        }),
        (this.paused = function () {
          return fe;
        }),
        (this.pause = function () {
          ((fe = !0),
            I.abort(),
            (_ = k(S.chunk) ? "" : _.substring(I.getCharIndex())));
        }),
        (this.resume = function () {
          Z.streamer._halted
            ? ((fe = !1), Z.streamer.parseChunk(_, !0))
            : setTimeout(Z.resume, 3);
        }),
        (this.aborted = function () {
          return ne;
        }),
        (this.abort = function () {
          ((ne = !0),
            I.abort(),
            (O.meta.aborted = !0),
            k(S.complete) && S.complete(O),
            (_ = ""));
        }),
        (this.guessLineEndings = function (F, ce) {
          F = F.substring(0, 1048576);
          var ce = new RegExp(u(ce) + "([^]*?)" + u(ce), "gm"),
            q = (F = F.replace(ce, "")).split("\r"),
            ce = F.split(`
`),
            F = 1 < ce.length && ce[0].length < q[0].length;
          if (q.length === 1 || F)
            return `
`;
          for (var Te = 0, he = 0; he < q.length; he++)
            q[he][0] ===
              `
` && Te++;
          return Te >= q.length / 2
            ? `\r
`
            : "\r";
        }));
    }
    function u(S) {
      return S.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function A(S) {
      var _ = (S = S || {}).delimiter,
        I = S.newline,
        R = S.comments,
        N = S.step,
        X = S.preview,
        ae = S.fastMode,
        ee = null,
        ie = !1,
        Z = S.quoteChar == null ? '"' : S.quoteChar,
        xe = Z;
      if (
        (S.escapeChar !== void 0 && (xe = S.escapeChar),
        (typeof _ != "string" || -1 < c.BAD_DELIMITERS.indexOf(_)) && (_ = ","),
        R === _)
      )
        throw new Error("Comment character same as delimiter");
      (R === !0
        ? (R = "#")
        : (typeof R != "string" || -1 < c.BAD_DELIMITERS.indexOf(R)) &&
          (R = !1),
        I !==
          `
` &&
          I !== "\r" &&
          I !==
            `\r
` &&
          (I = `
`));
      var j = 0,
        fe = !1;
      ((this.parse = function (ne, b, O) {
        if (typeof ne != "string") throw new Error("Input must be a string");
        var L = ne.length,
          P = _.length,
          K = I.length,
          re = R.length,
          Q = k(N),
          J = [],
          q = [],
          ce = [],
          F = (j = 0);
        if (!ne) return Fe();
        if (ae || (ae !== !1 && ne.indexOf(Z) === -1)) {
          for (var Te = ne.split(I), he = 0; he < Te.length; he++) {
            if (((ce = Te[he]), (j += ce.length), he !== Te.length - 1))
              j += I.length;
            else if (O) return Fe();
            if (!R || ce.substring(0, re) !== R) {
              if (Q) {
                if (((J = []), Ye(ce.split(_)), Ve(), fe)) return Fe();
              } else Ye(ce.split(_));
              if (X && X <= he) return ((J = J.slice(0, X)), Fe(!0));
            }
          }
          return Fe();
        }
        for (
          var ve = ne.indexOf(_, j),
            pe = ne.indexOf(I, j),
            oe = new RegExp(u(xe) + u(Z), "g"),
            ue = ne.indexOf(Z, j);
          ;
        )
          if (ne[j] === Z)
            for (ue = j, j++; ; ) {
              if ((ue = ne.indexOf(Z, ue + 1)) === -1)
                return (
                  O ||
                    q.push({
                      type: "Quotes",
                      code: "MissingQuotes",
                      message: "Quoted field unterminated",
                      row: J.length,
                      index: j,
                    }),
                  st()
                );
              if (ue === L - 1) return st(ne.substring(j, ue).replace(oe, Z));
              if (Z === xe && ne[ue + 1] === xe) ue++;
              else if (Z === xe || ue === 0 || ne[ue - 1] !== xe) {
                ve !== -1 && ve < ue + 1 && (ve = ne.indexOf(_, ue + 1));
                var ke = nt(
                  (pe =
                    pe !== -1 && pe < ue + 1 ? ne.indexOf(I, ue + 1) : pe) ===
                    -1
                    ? ve
                    : Math.min(ve, pe),
                );
                if (ne.substr(ue + 1 + ke, P) === _) {
                  (ce.push(ne.substring(j, ue).replace(oe, Z)),
                    ne[(j = ue + 1 + ke + P)] !== Z && (ue = ne.indexOf(Z, j)),
                    (ve = ne.indexOf(_, j)),
                    (pe = ne.indexOf(I, j)));
                  break;
                }
                if (
                  ((ke = nt(pe)),
                  ne.substring(ue + 1 + ke, ue + 1 + ke + K) === I)
                ) {
                  if (
                    (ce.push(ne.substring(j, ue).replace(oe, Z)),
                    St(ue + 1 + ke + K),
                    (ve = ne.indexOf(_, j)),
                    (ue = ne.indexOf(Z, j)),
                    Q && (Ve(), fe))
                  )
                    return Fe();
                  if (X && J.length >= X) return Fe(!0);
                  break;
                }
                (q.push({
                  type: "Quotes",
                  code: "InvalidQuotes",
                  message: "Trailing quote on quoted field is malformed",
                  row: J.length,
                  index: j,
                }),
                  ue++);
              }
            }
          else if (R && ce.length === 0 && ne.substring(j, j + re) === R) {
            if (pe === -1) return Fe();
            ((j = pe + K), (pe = ne.indexOf(I, j)), (ve = ne.indexOf(_, j)));
          } else if (ve !== -1 && (ve < pe || pe === -1))
            (ce.push(ne.substring(j, ve)),
              (j = ve + P),
              (ve = ne.indexOf(_, j)));
          else {
            if (pe === -1) break;
            if ((ce.push(ne.substring(j, pe)), St(pe + K), Q && (Ve(), fe)))
              return Fe();
            if (X && J.length >= X) return Fe(!0);
          }
        return st();
        function Ye(Ne) {
          (J.push(Ne), (F = j));
        }
        function nt(Ne) {
          var We = 0;
          return (We =
            Ne !== -1 && (Ne = ne.substring(ue + 1, Ne)) && Ne.trim() === ""
              ? Ne.length
              : We);
        }
        function st(Ne) {
          return (
            O ||
              (Ne === void 0 && (Ne = ne.substring(j)),
              ce.push(Ne),
              (j = L),
              Ye(ce),
              Q && Ve()),
            Fe()
          );
        }
        function St(Ne) {
          ((j = Ne), Ye(ce), (ce = []), (pe = ne.indexOf(I, j)));
        }
        function Fe(Ne) {
          if (S.header && !b && J.length && !ie) {
            var We = J[0],
              Re = Object.create(null),
              wt = new Set(We);
            let Ee = !1;
            for (let De = 0; De < We.length; De++) {
              let Le = We[De];
              if (
                Re[(Le = k(S.transformHeader) ? S.transformHeader(Le, De) : Le)]
              ) {
                let Pe,
                  jt = Re[Le];
                for (; (Pe = Le + "_" + jt), jt++, wt.has(Pe); );
                (wt.add(Pe),
                  (We[De] = Pe),
                  Re[Le]++,
                  (Ee = !0),
                  ((ee = ee === null ? {} : ee)[Pe] = Le));
              } else ((Re[Le] = 1), (We[De] = Le));
              wt.add(Le);
            }
            (Ee && console.warn("Duplicate headers found and renamed."),
              (ie = !0));
          }
          return {
            data: J,
            errors: q,
            meta: {
              delimiter: _,
              linebreak: I,
              aborted: fe,
              truncated: !!Ne,
              cursor: F + (b || 0),
              renamedHeaders: ee,
            },
          };
        }
        function Ve() {
          (N(Fe()), (J = []), (q = []));
        }
      }),
        (this.abort = function () {
          fe = !0;
        }),
        (this.getCharIndex = function () {
          return j;
        }));
    }
    function B(S) {
      var _ = S.data,
        I = i[_.workerId],
        R = !1;
      if (_.error) I.userError(_.error, _.file);
      else if (_.results && _.results.data) {
        var N = {
          abort: function () {
            ((R = !0),
              w(_.workerId, { data: [], errors: [], meta: { aborted: !0 } }));
          },
          pause: M,
          resume: M,
        };
        if (k(I.userStep)) {
          for (
            var X = 0;
            X < _.results.data.length &&
            (I.userStep(
              {
                data: _.results.data[X],
                errors: _.results.errors,
                meta: _.results.meta,
              },
              N,
            ),
            !R);
            X++
          );
          delete _.results;
        } else
          k(I.userChunk) &&
            (I.userChunk(_.results, N, _.file), delete _.results);
      }
      _.finished && !R && w(_.workerId, _.results);
    }
    function w(S, _) {
      var I = i[S];
      (k(I.userComplete) && I.userComplete(_), I.terminate(), delete i[S]);
    }
    function M() {
      throw new Error("Not implemented.");
    }
    function H(S) {
      if (typeof S != "object" || S === null) return S;
      var _,
        I = Array.isArray(S) ? [] : {};
      for (_ in S) I[_] = H(S[_]);
      return I;
    }
    function U(S, _) {
      return function () {
        S.apply(_, arguments);
      };
    }
    function k(S) {
      return typeof S == "function";
    }
    return (
      (c.parse = function (S, _) {
        var I = (_ = _ || {}).dynamicTyping || !1;
        if (
          (k(I) && ((_.dynamicTypingFunction = I), (I = {})),
          (_.dynamicTyping = I),
          (_.transform = !!k(_.transform) && _.transform),
          !_.worker || !c.WORKERS_SUPPORTED)
        )
          return (
            (I = null),
            c.NODE_STREAM_INPUT,
            typeof S == "string"
              ? ((S = ((R) => (R.charCodeAt(0) !== 65279 ? R : R.slice(1)))(S)),
                (I = new (_.download ? m : h)(_)))
              : S.readable === !0 && k(S.read) && k(S.on)
                ? (I = new x(_))
                : ((r.File && S instanceof File) || S instanceof Object) &&
                  (I = new f(_)),
            I.stream(S)
          );
        (((I = (() => {
          var R;
          return (
            !!c.WORKERS_SUPPORTED &&
            ((R = (() => {
              var N = r.URL || r.webkitURL || null,
                X = t.toString();
              return (
                c.BLOB_URL ||
                (c.BLOB_URL = N.createObjectURL(
                  new Blob(
                    [
                      "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                      "(",
                      X,
                      ")();",
                    ],
                    { type: "text/javascript" },
                  ),
                ))
              );
            })()),
            ((R = new r.Worker(R)).onmessage = B),
            (R.id = l++),
            (i[R.id] = R))
          );
        })()).userStep = _.step),
          (I.userChunk = _.chunk),
          (I.userComplete = _.complete),
          (I.userError = _.error),
          (_.step = k(_.step)),
          (_.chunk = k(_.chunk)),
          (_.complete = k(_.complete)),
          (_.error = k(_.error)),
          delete _.worker,
          I.postMessage({ input: S, config: _, workerId: I.id }));
      }),
      (c.unparse = function (S, _) {
        var I = !1,
          R = !0,
          N = ",",
          X = `\r
`,
          ae = '"',
          ee = ae + ae,
          ie = !1,
          Z = null,
          xe = !1,
          j =
            ((() => {
              if (typeof _ == "object") {
                if (
                  (typeof _.delimiter != "string" ||
                    c.BAD_DELIMITERS.filter(function (b) {
                      return _.delimiter.indexOf(b) !== -1;
                    }).length ||
                    (N = _.delimiter),
                  (typeof _.quotes != "boolean" &&
                    typeof _.quotes != "function" &&
                    !Array.isArray(_.quotes)) ||
                    (I = _.quotes),
                  (typeof _.skipEmptyLines != "boolean" &&
                    typeof _.skipEmptyLines != "string") ||
                    (ie = _.skipEmptyLines),
                  typeof _.newline == "string" && (X = _.newline),
                  typeof _.quoteChar == "string" && (ae = _.quoteChar),
                  typeof _.header == "boolean" && (R = _.header),
                  Array.isArray(_.columns))
                ) {
                  if (_.columns.length === 0)
                    throw new Error("Option columns is empty");
                  Z = _.columns;
                }
                (_.escapeChar !== void 0 && (ee = _.escapeChar + ae),
                  _.escapeFormulae instanceof RegExp
                    ? (xe = _.escapeFormulae)
                    : typeof _.escapeFormulae == "boolean" &&
                      _.escapeFormulae &&
                      (xe = /^[=+\-@\t\r].*$/));
              }
            })(),
            new RegExp(u(ae), "g"));
        if ((typeof S == "string" && (S = JSON.parse(S)), Array.isArray(S))) {
          if (!S.length || Array.isArray(S[0])) return fe(null, S, ie);
          if (typeof S[0] == "object") return fe(Z || Object.keys(S[0]), S, ie);
        } else if (typeof S == "object")
          return (
            typeof S.data == "string" && (S.data = JSON.parse(S.data)),
            Array.isArray(S.data) &&
              (S.fields || (S.fields = (S.meta && S.meta.fields) || Z),
              S.fields ||
                (S.fields = Array.isArray(S.data[0])
                  ? S.fields
                  : typeof S.data[0] == "object"
                    ? Object.keys(S.data[0])
                    : []),
              Array.isArray(S.data[0]) ||
                typeof S.data[0] == "object" ||
                (S.data = [S.data])),
            fe(S.fields || [], S.data || [], ie)
          );
        throw new Error("Unable to serialize unrecognized input");
        function fe(b, O, L) {
          var P = "",
            K =
              (typeof b == "string" && (b = JSON.parse(b)),
              typeof O == "string" && (O = JSON.parse(O)),
              Array.isArray(b) && 0 < b.length),
            re = !Array.isArray(O[0]);
          if (K && R) {
            for (var Q = 0; Q < b.length; Q++)
              (0 < Q && (P += N), (P += ne(b[Q], Q)));
            0 < O.length && (P += X);
          }
          for (var J = 0; J < O.length; J++) {
            var q = (K ? b : O[J]).length,
              ce = !1,
              F = K ? Object.keys(O[J]).length === 0 : O[J].length === 0;
            if (
              (L &&
                !K &&
                (ce =
                  L === "greedy"
                    ? O[J].join("").trim() === ""
                    : O[J].length === 1 && O[J][0].length === 0),
              L === "greedy" && K)
            ) {
              for (var Te = [], he = 0; he < q; he++) {
                var ve = re ? b[he] : he;
                Te.push(O[J][ve]);
              }
              ce = Te.join("").trim() === "";
            }
            if (!ce) {
              for (var pe = 0; pe < q; pe++) {
                0 < pe && !F && (P += N);
                var oe = K && re ? b[pe] : pe;
                P += ne(O[J][oe], pe);
              }
              J < O.length - 1 && (!L || (0 < q && !F)) && (P += X);
            }
          }
          return P;
        }
        function ne(b, O) {
          var L, P;
          return b == null
            ? ""
            : b.constructor === Date
              ? JSON.stringify(b).slice(1, 25)
              : ((P = !1),
                xe &&
                  typeof b == "string" &&
                  xe.test(b) &&
                  ((b = "'" + b), (P = !0)),
                (L = b.toString().replace(j, ee)),
                (P =
                  P ||
                  I === !0 ||
                  (typeof I == "function" && I(b, O)) ||
                  (Array.isArray(I) && I[O]) ||
                  ((K, re) => {
                    for (var Q = 0; Q < re.length; Q++)
                      if (-1 < K.indexOf(re[Q])) return !0;
                    return !1;
                  })(L, c.BAD_DELIMITERS) ||
                  -1 < L.indexOf(N) ||
                  L.charAt(0) === " " ||
                  L.charAt(L.length - 1) === " ")
                  ? ae + L + ae
                  : L);
        }
      }),
      (c.RECORD_SEP = ""),
      (c.UNIT_SEP = ""),
      (c.BYTE_ORDER_MARK = "\uFEFF"),
      (c.BAD_DELIMITERS = [
        "\r",
        `
`,
        '"',
        c.BYTE_ORDER_MARK,
      ]),
      (c.WORKERS_SUPPORTED = !s && !!r.Worker),
      (c.NODE_STREAM_INPUT = 1),
      (c.LocalChunkSize = 10485760),
      (c.RemoteChunkSize = 5242880),
      (c.DefaultDelimiter = ","),
      (c.Parser = A),
      (c.ParserHandle = d),
      (c.NetworkStreamer = m),
      (c.FileStreamer = f),
      (c.StringStreamer = h),
      (c.ReadableStreamStreamer = x),
      r.jQuery &&
        ((n = r.jQuery).fn.parse = function (S) {
          var _ = S.config || {},
            I = [];
          return (
            this.each(function (X) {
              if (
                !(
                  n(this).prop("tagName").toUpperCase() === "INPUT" &&
                  n(this).attr("type").toLowerCase() === "file" &&
                  r.FileReader
                ) ||
                !this.files ||
                this.files.length === 0
              )
                return !0;
              for (var ae = 0; ae < this.files.length; ae++)
                I.push({
                  file: this.files[ae],
                  inputElem: this,
                  instanceConfig: n.extend({}, _),
                });
            }),
            R(),
            this
          );
          function R() {
            if (I.length === 0) k(S.complete) && S.complete();
            else {
              var X,
                ae,
                ee,
                ie,
                Z = I[0];
              if (k(S.before)) {
                var xe = S.before(Z.file, Z.inputElem);
                if (typeof xe == "object") {
                  if (xe.action === "abort")
                    return (
                      (X = "AbortError"),
                      (ae = Z.file),
                      (ee = Z.inputElem),
                      (ie = xe.reason),
                      void (k(S.error) && S.error({ name: X }, ae, ee, ie))
                    );
                  if (xe.action === "skip") return void N();
                  typeof xe.config == "object" &&
                    (Z.instanceConfig = n.extend(Z.instanceConfig, xe.config));
                } else if (xe === "skip") return void N();
              }
              var j = Z.instanceConfig.complete;
              ((Z.instanceConfig.complete = function (fe) {
                (k(j) && j(fe, Z.file, Z.inputElem), N());
              }),
                c.parse(Z.file, Z.instanceConfig));
            }
          }
          function N() {
            (I.splice(0, 1), R());
          }
        }),
      o &&
        (r.onmessage = function (S) {
          ((S = S.data),
            c.WORKER_ID === void 0 && S && (c.WORKER_ID = S.workerId),
            typeof S.input == "string"
              ? r.postMessage({
                  workerId: c.WORKER_ID,
                  results: c.parse(S.input, S.config),
                  finished: !0,
                })
              : ((r.File && S.input instanceof File) ||
                  S.input instanceof Object) &&
                (S = c.parse(S.input, S.config)) &&
                r.postMessage({
                  workerId: c.WORKER_ID,
                  results: S,
                  finished: !0,
                }));
        }),
      ((m.prototype = Object.create(p.prototype)).constructor = m),
      ((f.prototype = Object.create(p.prototype)).constructor = f),
      ((h.prototype = Object.create(h.prototype)).constructor = h),
      ((x.prototype = Object.create(p.prototype)).constructor = x),
      c
    );
  });
})(Ao);
var d0 = Ao.exports;
const f0 = Ac(d0);
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */ var bo = 1252,
  m0 = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  Tn = {
    0: 1252,
    1: 65001,
    2: 65001,
    77: 1e4,
    128: 932,
    129: 949,
    130: 1361,
    134: 936,
    136: 950,
    161: 1253,
    162: 1254,
    163: 1258,
    177: 1255,
    178: 1256,
    186: 1257,
    204: 1251,
    222: 874,
    238: 1250,
    255: 1252,
    69: 6969,
  },
  En = function (e) {
    m0.indexOf(e) != -1 && (bo = Tn[0] = e);
  };
function u0() {
  En(1252);
}
var Pt = function (e) {
  En(e);
};
function Co() {
  (Pt(1200), u0());
}
function ps(e) {
  for (var a = [], t = 0, r = e.length; t < r; ++t) a[t] = e.charCodeAt(t);
  return a;
}
function h0(e) {
  for (var a = [], t = 0; t < e.length >> 1; ++t)
    a[t] = String.fromCharCode(
      e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8),
    );
  return a.join("");
}
function yo(e) {
  for (var a = [], t = 0; t < e.length >> 1; ++t)
    a[t] = String.fromCharCode(
      e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8),
    );
  return a.join("");
}
var Ha = function (e) {
    var a = e.charCodeAt(0),
      t = e.charCodeAt(1);
    return a == 255 && t == 254
      ? h0(e.slice(2))
      : a == 254 && t == 255
        ? yo(e.slice(2))
        : a == 65279
          ? e.slice(1)
          : e;
  },
  gr = function (a) {
    return String.fromCharCode(a);
  },
  ds = function (a) {
    return String.fromCharCode(a);
  },
  ea,
  aa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function fs(e) {
  for (
    var a = "", t = 0, r = 0, n = 0, s = 0, o = 0, i = 0, l = 0, c = 0;
    c < e.length;
  )
    ((t = e.charCodeAt(c++)),
      (s = t >> 2),
      (r = e.charCodeAt(c++)),
      (o = ((t & 3) << 4) | (r >> 4)),
      (n = e.charCodeAt(c++)),
      (i = ((r & 15) << 2) | (n >> 6)),
      (l = n & 63),
      isNaN(r) ? (i = l = 64) : isNaN(n) && (l = 64),
      (a += aa.charAt(s) + aa.charAt(o) + aa.charAt(i) + aa.charAt(l)));
  return a;
}
function bt(e) {
  var a = "",
    t = 0,
    r = 0,
    n = 0,
    s = 0,
    o = 0,
    i = 0,
    l = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var c = 0; c < e.length; )
    ((s = aa.indexOf(e.charAt(c++))),
      (o = aa.indexOf(e.charAt(c++))),
      (t = (s << 2) | (o >> 4)),
      (a += String.fromCharCode(t)),
      (i = aa.indexOf(e.charAt(c++))),
      (r = ((o & 15) << 4) | (i >> 2)),
      i !== 64 && (a += String.fromCharCode(r)),
      (l = aa.indexOf(e.charAt(c++))),
      (n = ((i & 3) << 6) | l),
      l !== 64 && (a += String.fromCharCode(n)));
  return a;
}
var Ae = (function () {
    return (
      typeof Buffer < "u" &&
      typeof process < "u" &&
      typeof process.versions < "u" &&
      !!process.versions.node
    );
  })(),
  xa = (function () {
    if (typeof Buffer < "u") {
      var e = !Buffer.from;
      if (!e)
        try {
          Buffer.from("foo", "utf8");
        } catch {
          e = !0;
        }
      return e
        ? function (a, t) {
            return t ? new Buffer(a, t) : new Buffer(a);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function sa(e) {
  return Ae
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < "u"
      ? new Uint8Array(e)
      : new Array(e);
}
function ms(e) {
  return Ae
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < "u"
      ? new Uint8Array(e)
      : new Array(e);
}
var Rt = function (a) {
  return Ae
    ? xa(a, "binary")
    : a.split("").map(function (t) {
        return t.charCodeAt(0) & 255;
      });
};
function va(e) {
  if (Array.isArray(e))
    return e
      .map(function (r) {
        return String.fromCharCode(r);
      })
      .join("");
  for (var a = [], t = 0; t < e.length; ++t) a[t] = String.fromCharCode(e[t]);
  return a.join("");
}
function kn(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return kn(new Uint8Array(e));
  for (var a = new Array(e.length), t = 0; t < e.length; ++t) a[t] = e[t];
  return a;
}
var ta = Ae
  ? function (e) {
      return Buffer.concat(
        e.map(function (a) {
          return Buffer.isBuffer(a) ? a : xa(a);
        }),
      );
    }
  : function (e) {
      if (typeof Uint8Array < "u") {
        var a = 0,
          t = 0;
        for (a = 0; a < e.length; ++a) t += e[a].length;
        var r = new Uint8Array(t),
          n = 0;
        for (a = 0, t = 0; a < e.length; t += n, ++a)
          if (((n = e[a].length), e[a] instanceof Uint8Array)) r.set(e[a], t);
          else {
            if (typeof e[a] == "string") throw "wtf";
            r.set(new Uint8Array(e[a]), t);
          }
        return r;
      }
      return [].concat.apply(
        [],
        e.map(function (s) {
          return Array.isArray(s) ? s : [].slice.call(s);
        }),
      );
    };
function x0(e) {
  for (
    var a = [], t = 0, r = e.length + 250, n = sa(e.length + 255), s = 0;
    s < e.length;
    ++s
  ) {
    var o = e.charCodeAt(s);
    if (o < 128) n[t++] = o;
    else if (o < 2048)
      ((n[t++] = 192 | ((o >> 6) & 31)), (n[t++] = 128 | (o & 63)));
    else if (o >= 55296 && o < 57344) {
      o = (o & 1023) + 64;
      var i = e.charCodeAt(++s) & 1023;
      ((n[t++] = 240 | ((o >> 8) & 7)),
        (n[t++] = 128 | ((o >> 2) & 63)),
        (n[t++] = 128 | ((i >> 6) & 15) | ((o & 3) << 4)),
        (n[t++] = 128 | (i & 63)));
    } else
      ((n[t++] = 224 | ((o >> 12) & 15)),
        (n[t++] = 128 | ((o >> 6) & 63)),
        (n[t++] = 128 | (o & 63)));
    t > r && (a.push(n.slice(0, t)), (t = 0), (n = sa(65535)), (r = 65530));
  }
  return (a.push(n.slice(0, t)), ta(a));
}
var gt = /\u0000/g,
  Ga = /[\u0001-\u0006]/g;
function Ca(e) {
  for (var a = "", t = e.length - 1; t >= 0; ) a += e.charAt(t--);
  return a;
}
function Ot(e, a) {
  var t = "" + e;
  return t.length >= a ? t : je("0", a - t.length) + t;
}
function An(e, a) {
  var t = "" + e;
  return t.length >= a ? t : je(" ", a - t.length) + t;
}
function Nr(e, a) {
  var t = "" + e;
  return t.length >= a ? t : t + je(" ", a - t.length);
}
function v0(e, a) {
  var t = "" + Math.round(e);
  return t.length >= a ? t : je("0", a - t.length) + t;
}
function g0(e, a) {
  var t = "" + e;
  return t.length >= a ? t : je("0", a - t.length) + t;
}
var us = Math.pow(2, 32);
function Ea(e, a) {
  if (e > us || e < -us) return v0(e, a);
  var t = Math.round(e);
  return g0(t, a);
}
function Br(e, a) {
  return (
    (a = a || 0),
    e.length >= 7 + a &&
      (e.charCodeAt(a) | 32) === 103 &&
      (e.charCodeAt(a + 1) | 32) === 101 &&
      (e.charCodeAt(a + 2) | 32) === 110 &&
      (e.charCodeAt(a + 3) | 32) === 101 &&
      (e.charCodeAt(a + 4) | 32) === 114 &&
      (e.charCodeAt(a + 5) | 32) === 97 &&
      (e.charCodeAt(a + 6) | 32) === 108
  );
}
var hs = [
    ["Sun", "Sunday"],
    ["Mon", "Monday"],
    ["Tue", "Tuesday"],
    ["Wed", "Wednesday"],
    ["Thu", "Thursday"],
    ["Fri", "Friday"],
    ["Sat", "Saturday"],
  ],
  Yr = [
    ["J", "Jan", "January"],
    ["F", "Feb", "February"],
    ["M", "Mar", "March"],
    ["A", "Apr", "April"],
    ["M", "May", "May"],
    ["J", "Jun", "June"],
    ["J", "Jul", "July"],
    ["A", "Aug", "August"],
    ["S", "Sep", "September"],
    ["O", "Oct", "October"],
    ["N", "Nov", "November"],
    ["D", "Dec", "December"],
  ];
function _0(e) {
  return (
    e || (e = {}),
    (e[0] = "General"),
    (e[1] = "0"),
    (e[2] = "0.00"),
    (e[3] = "#,##0"),
    (e[4] = "#,##0.00"),
    (e[9] = "0%"),
    (e[10] = "0.00%"),
    (e[11] = "0.00E+00"),
    (e[12] = "# ?/?"),
    (e[13] = "# ??/??"),
    (e[14] = "m/d/yy"),
    (e[15] = "d-mmm-yy"),
    (e[16] = "d-mmm"),
    (e[17] = "mmm-yy"),
    (e[18] = "h:mm AM/PM"),
    (e[19] = "h:mm:ss AM/PM"),
    (e[20] = "h:mm"),
    (e[21] = "h:mm:ss"),
    (e[22] = "m/d/yy h:mm"),
    (e[37] = "#,##0 ;(#,##0)"),
    (e[38] = "#,##0 ;[Red](#,##0)"),
    (e[39] = "#,##0.00;(#,##0.00)"),
    (e[40] = "#,##0.00;[Red](#,##0.00)"),
    (e[45] = "mm:ss"),
    (e[46] = "[h]:mm:ss"),
    (e[47] = "mmss.0"),
    (e[48] = "##0.0E+0"),
    (e[49] = "@"),
    (e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "'),
    e
  );
}
var we = {
    0: "General",
    1: "0",
    2: "0.00",
    3: "#,##0",
    4: "#,##0.00",
    9: "0%",
    10: "0.00%",
    11: "0.00E+00",
    12: "# ?/?",
    13: "# ??/??",
    14: "m/d/yy",
    15: "d-mmm-yy",
    16: "d-mmm",
    17: "mmm-yy",
    18: "h:mm AM/PM",
    19: "h:mm:ss AM/PM",
    20: "h:mm",
    21: "h:mm:ss",
    22: "m/d/yy h:mm",
    37: "#,##0 ;(#,##0)",
    38: "#,##0 ;[Red](#,##0)",
    39: "#,##0.00;(#,##0.00)",
    40: "#,##0.00;[Red](#,##0.00)",
    45: "mm:ss",
    46: "[h]:mm:ss",
    47: "mmss.0",
    48: "##0.0E+0",
    49: "@",
    56: '"上午/下午 "hh"時"mm"分"ss"秒 "',
  },
  xs = {
    5: 37,
    6: 38,
    7: 39,
    8: 40,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 14,
    28: 14,
    29: 14,
    30: 14,
    31: 14,
    50: 14,
    51: 14,
    52: 14,
    53: 14,
    54: 14,
    55: 14,
    56: 14,
    57: 14,
    58: 14,
    59: 1,
    60: 2,
    61: 3,
    62: 4,
    67: 9,
    68: 10,
    69: 12,
    70: 13,
    71: 14,
    72: 14,
    73: 15,
    74: 16,
    75: 17,
    76: 20,
    77: 21,
    78: 22,
    79: 45,
    80: 46,
    81: 47,
    82: 0,
  },
  S0 = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
  };
function Ir(e, a, t) {
  for (
    var r = e < 0 ? -1 : 1,
      n = e * r,
      s = 0,
      o = 1,
      i = 0,
      l = 1,
      c = 0,
      p = 0,
      m = Math.floor(n);
    c < a &&
    ((m = Math.floor(n)), (i = m * o + s), (p = m * c + l), !(n - m < 5e-8));
  )
    ((n = 1 / (n - m)), (s = o), (o = i), (l = c), (c = p));
  if ((p > a && (c > a ? ((p = l), (i = s)) : ((p = c), (i = o))), !t))
    return [0, r * i, p];
  var f = Math.floor((r * i) / p);
  return [f, r * i - f * p, p];
}
function pa(e, a, t) {
  if (e > 2958465 || e < 0) return null;
  var r = e | 0,
    n = Math.floor(86400 * (e - r)),
    s = 0,
    o = [],
    i = {
      D: r,
      T: n,
      u: 86400 * (e - r) - n,
      y: 0,
      m: 0,
      d: 0,
      H: 0,
      M: 0,
      S: 0,
      q: 0,
    };
  if (
    (Math.abs(i.u) < 1e-6 && (i.u = 0),
    a && a.date1904 && (r += 1462),
    i.u > 0.9999 && ((i.u = 0), ++n == 86400 && ((i.T = n = 0), ++r, ++i.D)),
    r === 60)
  )
    ((o = t ? [1317, 10, 29] : [1900, 2, 29]), (s = 3));
  else if (r === 0) ((o = t ? [1317, 8, 29] : [1900, 1, 0]), (s = 6));
  else {
    r > 60 && --r;
    var l = new Date(1900, 0, 1);
    (l.setDate(l.getDate() + r - 1),
      (o = [l.getFullYear(), l.getMonth() + 1, l.getDate()]),
      (s = l.getDay()),
      r < 60 && (s = (s + 6) % 7),
      t && (s = b0(l, o)));
  }
  return (
    (i.y = o[0]),
    (i.m = o[1]),
    (i.d = o[2]),
    (i.S = n % 60),
    (n = Math.floor(n / 60)),
    (i.M = n % 60),
    (n = Math.floor(n / 60)),
    (i.H = n),
    (i.q = s),
    i
  );
}
var Fo = new Date(1899, 11, 31, 0, 0, 0),
  w0 = Fo.getTime(),
  T0 = new Date(1900, 2, 1, 0, 0, 0);
function Do(e, a) {
  var t = e.getTime();
  return (
    a ? (t -= 1461 * 24 * 60 * 60 * 1e3) : e >= T0 && (t += 24 * 60 * 60 * 1e3),
    (t - (w0 + (e.getTimezoneOffset() - Fo.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function bn(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function E0(e) {
  return e.indexOf("E") == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E")
        .replace(/(E[+-])(\d)$/, "$10$2");
}
function k0(e) {
  var a = e < 0 ? 12 : 11,
    t = bn(e.toFixed(12));
  return t.length <= a || ((t = e.toPrecision(10)), t.length <= a)
    ? t
    : e.toExponential(5);
}
function A0(e) {
  var a = bn(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0"
    ? e.toPrecision(6)
    : a;
}
function ar(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    t;
  return (
    a >= -4 && a <= -1
      ? (t = e.toPrecision(10 + a))
      : Math.abs(a) <= 9
        ? (t = k0(e))
        : a === 10
          ? (t = e.toFixed(10).substr(0, 12))
          : (t = A0(e)),
    bn(E0(t.toUpperCase()))
  );
}
function ma(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : ar(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Dt(14, Do(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function b0(e, a) {
  a[0] -= 581;
  var t = e.getDay();
  return (e < 60 && (t = (t + 6) % 7), t);
}
function C0(e, a, t, r) {
  var n = "",
    s = 0,
    o = 0,
    i = t.y,
    l,
    c = 0;
  switch (e) {
    case 98:
      i = t.y + 543;
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          ((l = i % 100), (c = 2));
          break;
        default:
          ((l = i % 1e4), (c = 4));
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          ((l = t.m), (c = a.length));
          break;
        case 3:
          return Yr[t.m - 1][1];
        case 5:
          return Yr[t.m - 1][0];
        default:
          return Yr[t.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          ((l = t.d), (c = a.length));
          break;
        case 3:
          return hs[t.q][0];
        default:
          return hs[t.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          ((l = 1 + ((t.H + 11) % 12)), (c = a.length));
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          ((l = t.H), (c = a.length));
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          ((l = t.M), (c = a.length));
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000")
        throw "bad second format: " + a;
      return t.u === 0 && (a == "s" || a == "ss")
        ? Ot(t.S, a.length)
        : (r >= 2 ? (o = r === 3 ? 1e3 : 100) : (o = r === 1 ? 10 : 1),
          (s = Math.round(o * (t.S + t.u))),
          s >= 60 * o && (s = 0),
          a === "s"
            ? s === 0
              ? "0"
              : "" + s / o
            : ((n = Ot(s, 2 + r)),
              a === "ss" ? n.substr(0, 2) : "." + n.substr(2, a.length - 1)));
    case 90:
      switch (a) {
        case "[h]":
        case "[hh]":
          l = t.D * 24 + t.H;
          break;
        case "[m]":
        case "[mm]":
          l = (t.D * 24 + t.H) * 60 + t.M;
          break;
        case "[s]":
        case "[ss]":
          l = ((t.D * 24 + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
          break;
        default:
          throw "bad abstime format: " + a;
      }
      c = a.length === 3 ? 1 : 2;
      break;
    case 101:
      ((l = i), (c = 1));
      break;
  }
  var p = c > 0 ? Ot(l, c) : "";
  return p;
}
function ra(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var t = e.length % a, r = e.substr(0, t); t != e.length; t += a)
    r += (r.length > 0 ? "," : "") + e.substr(t, a);
  return r;
}
var No = /%/g;
function y0(e, a, t) {
  var r = a.replace(No, ""),
    n = a.length - r.length;
  return Yt(e, r, t * Math.pow(10, 2 * n)) + je("%", n);
}
function F0(e, a, t) {
  for (var r = a.length - 1; a.charCodeAt(r - 1) === 44; ) --r;
  return Yt(e, a.substr(0, r), t / Math.pow(10, 3 * (a.length - r)));
}
function Bo(e, a) {
  var t,
    r = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Bo(e, -a);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % n;
    if (
      (s < 0 && (s += n),
      (t = (a / Math.pow(10, s)).toPrecision(r + 1 + ((n + s) % n))),
      t.indexOf("e") === -1)
    ) {
      var o = Math.floor(Math.log(a) * Math.LOG10E);
      for (
        t.indexOf(".") === -1
          ? (t = t.charAt(0) + "." + t.substr(1) + "E+" + (o - t.length + s))
          : (t += "E+" + (o - s));
        t.substr(0, 2) === "0.";
      )
        ((t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n)),
          (t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.")));
      t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (i, l, c, p) {
      return l + c + p.substr(0, (n + s) % n) + "." + p.substr(s) + "E";
    });
  } else t = a.toExponential(r);
  return (
    e.match(/E\+00$/) &&
      t.match(/e[+-]\d$/) &&
      (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)),
    e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")),
    t.replace("e", "E")
  );
}
var Io = /# (\?+)( ?)\/( ?)(\d+)/;
function D0(e, a, t) {
  var r = parseInt(e[4], 10),
    n = Math.round(a * r),
    s = Math.floor(n / r),
    o = n - s * r,
    i = r;
  return (
    t +
    (s === 0 ? "" : "" + s) +
    " " +
    (o === 0
      ? je(" ", e[1].length + 1 + e[4].length)
      : An(o, e[1].length) + e[2] + "/" + e[3] + Ot(i, e[4].length))
  );
}
function N0(e, a, t) {
  return t + (a === 0 ? "" : "" + a) + je(" ", e[1].length + 2 + e[4].length);
}
var Ro = /^#*0*\.([0#]+)/,
  Po = /\).*[0#]/,
  Oo = /\(###\) ###\\?-####/;
function ht(e) {
  for (var a = "", t, r = 0; r != e.length; ++r)
    switch ((t = e.charCodeAt(r))) {
      case 35:
        break;
      case 63:
        a += " ";
        break;
      case 48:
        a += "0";
        break;
      default:
        a += String.fromCharCode(t);
    }
  return a;
}
function vs(e, a) {
  var t = Math.pow(10, a);
  return "" + Math.round(e * t) / t;
}
function gs(e, a) {
  var t = e - Math.floor(e),
    r = Math.pow(10, a);
  return a < ("" + Math.round(t * r)).length ? 0 : Math.round(t * r);
}
function B0(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length
    ? 1
    : 0;
}
function I0(e) {
  return e < 2147483647 && e > -2147483648
    ? "" + (e >= 0 ? e | 0 : (e - 1) | 0)
    : "" + Math.floor(e);
}
function yt(e, a, t) {
  if (e.charCodeAt(0) === 40 && !a.match(Po)) {
    var r = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? yt("n", r, t) : "(" + yt("n", r, -t) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return F0(e, a, t);
  if (a.indexOf("%") !== -1) return y0(e, a, t);
  if (a.indexOf("E") !== -1) return Bo(a, t);
  if (a.charCodeAt(0) === 36)
    return "$" + yt(e, a.substr(a.charAt(1) == " " ? 2 : 1), t);
  var n,
    s,
    o,
    i,
    l = Math.abs(t),
    c = t < 0 ? "-" : "";
  if (a.match(/^00+$/)) return c + Ea(l, a.length);
  if (a.match(/^[#?]+$/))
    return (
      (n = Ea(t, 0)),
      n === "0" && (n = ""),
      n.length > a.length ? n : ht(a.substr(0, a.length - n.length)) + n
    );
  if ((s = a.match(Io))) return D0(s, l, c);
  if (a.match(/^#+0+$/)) return c + Ea(l, a.length - a.indexOf("0"));
  if ((s = a.match(Ro)))
    return (
      (n = vs(t, s[1].length)
        .replace(/^([^\.]+)$/, "$1." + ht(s[1]))
        .replace(/\.$/, "." + ht(s[1]))
        .replace(/\.(\d*)$/, function (x, d) {
          return "." + d + je("0", ht(s[1]).length - d.length);
        })),
      a.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".")
    );
  if (((a = a.replace(/^#+([0.])/, "$1")), (s = a.match(/^(0*)\.(#*)$/))))
    return (
      c +
      vs(l, s[2].length)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, s[1].length ? "0." : ".")
    );
  if ((s = a.match(/^#{1,3},##0(\.?)$/))) return c + ra(Ea(l, 0));
  if ((s = a.match(/^#,##0\.([#0]*0)$/)))
    return t < 0
      ? "-" + yt(e, a, -t)
      : ra("" + (Math.floor(t) + B0(t, s[1].length))) +
          "." +
          Ot(gs(t, s[1].length), s[1].length);
  if ((s = a.match(/^#,#*,#0/))) return yt(e, a.replace(/^#,#*,/, ""), t);
  if ((s = a.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (n = Ca(yt(e, a.replace(/[\\-]/g, ""), t))),
      (o = 0),
      Ca(
        Ca(a.replace(/\\/g, "")).replace(/[0#]/g, function (x) {
          return o < n.length ? n.charAt(o++) : x === "0" ? "0" : "";
        }),
      )
    );
  if (a.match(Oo))
    return (
      (n = yt(e, "##########", t)),
      "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6)
    );
  var p = "";
  if ((s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(s[4].length, 7)),
      (i = Ir(l, Math.pow(10, o) - 1, !1)),
      (n = "" + c),
      (p = Yt("n", s[1], i[1])),
      p.charAt(p.length - 1) == " " && (p = p.substr(0, p.length - 1) + "0"),
      (n += p + s[2] + "/" + s[3]),
      (p = Nr(i[2], o)),
      p.length < s[4].length &&
        (p = ht(s[4].substr(s[4].length - p.length)) + p),
      (n += p),
      n
    );
  if ((s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(Math.max(s[1].length, s[4].length), 7)),
      (i = Ir(l, Math.pow(10, o) - 1, !0)),
      c +
        (i[0] || (i[1] ? "" : "0")) +
        " " +
        (i[1]
          ? An(i[1], o) + s[2] + "/" + s[3] + Nr(i[2], o)
          : je(" ", 2 * o + 1 + s[2].length + s[3].length))
    );
  if ((s = a.match(/^[#0?]+$/)))
    return (
      (n = Ea(t, 0)),
      a.length <= n.length ? n : ht(a.substr(0, a.length - n.length)) + n
    );
  if ((s = a.match(/^([#0?]+)\.([#0]+)$/))) {
    ((n = "" + t.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1")),
      (o = n.indexOf(".")));
    var m = a.indexOf(".") - o,
      f = a.length - n.length - m;
    return ht(a.substr(0, m) + n + a.substr(a.length - f));
  }
  if ((s = a.match(/^00,000\.([#0]*0)$/)))
    return (
      (o = gs(t, s[1].length)),
      t < 0
        ? "-" + yt(e, a, -t)
        : ra(I0(t))
            .replace(/^\d,\d{3}$/, "0$&")
            .replace(/^\d*$/, function (x) {
              return "00," + (x.length < 3 ? Ot(0, 3 - x.length) : "") + x;
            }) +
          "." +
          Ot(o, s[1].length)
    );
  switch (a) {
    case "###,##0.00":
      return yt(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var h = ra(Ea(l, 0));
      return h !== "0" ? c + h : "";
    case "###,###.00":
      return yt(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return yt(e, "#,##0.00", t).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function R0(e, a, t) {
  for (var r = a.length - 1; a.charCodeAt(r - 1) === 44; ) --r;
  return Yt(e, a.substr(0, r), t / Math.pow(10, 3 * (a.length - r)));
}
function P0(e, a, t) {
  var r = a.replace(No, ""),
    n = a.length - r.length;
  return Yt(e, r, t * Math.pow(10, 2 * n)) + je("%", n);
}
function Lo(e, a) {
  var t,
    r = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Lo(e, -a);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % n;
    if (
      (s < 0 && (s += n),
      (t = (a / Math.pow(10, s)).toPrecision(r + 1 + ((n + s) % n))),
      !t.match(/[Ee]/))
    ) {
      var o = Math.floor(Math.log(a) * Math.LOG10E);
      (t.indexOf(".") === -1
        ? (t = t.charAt(0) + "." + t.substr(1) + "E+" + (o - t.length + s))
        : (t += "E+" + (o - s)),
        (t = t.replace(/\+-/, "-")));
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (i, l, c, p) {
      return l + c + p.substr(0, (n + s) % n) + "." + p.substr(s) + "E";
    });
  } else t = a.toExponential(r);
  return (
    e.match(/E\+00$/) &&
      t.match(/e[+-]\d$/) &&
      (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)),
    e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")),
    t.replace("e", "E")
  );
}
function Gt(e, a, t) {
  if (e.charCodeAt(0) === 40 && !a.match(Po)) {
    var r = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? Gt("n", r, t) : "(" + Gt("n", r, -t) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return R0(e, a, t);
  if (a.indexOf("%") !== -1) return P0(e, a, t);
  if (a.indexOf("E") !== -1) return Lo(a, t);
  if (a.charCodeAt(0) === 36)
    return "$" + Gt(e, a.substr(a.charAt(1) == " " ? 2 : 1), t);
  var n,
    s,
    o,
    i,
    l = Math.abs(t),
    c = t < 0 ? "-" : "";
  if (a.match(/^00+$/)) return c + Ot(l, a.length);
  if (a.match(/^[#?]+$/))
    return (
      (n = "" + t),
      t === 0 && (n = ""),
      n.length > a.length ? n : ht(a.substr(0, a.length - n.length)) + n
    );
  if ((s = a.match(Io))) return N0(s, l, c);
  if (a.match(/^#+0+$/)) return c + Ot(l, a.length - a.indexOf("0"));
  if ((s = a.match(Ro)))
    return (
      (n = ("" + t)
        .replace(/^([^\.]+)$/, "$1." + ht(s[1]))
        .replace(/\.$/, "." + ht(s[1]))),
      (n = n.replace(/\.(\d*)$/, function (x, d) {
        return "." + d + je("0", ht(s[1]).length - d.length);
      })),
      a.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".")
    );
  if (((a = a.replace(/^#+([0.])/, "$1")), (s = a.match(/^(0*)\.(#*)$/))))
    return (
      c +
      ("" + l)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, s[1].length ? "0." : ".")
    );
  if ((s = a.match(/^#{1,3},##0(\.?)$/))) return c + ra("" + l);
  if ((s = a.match(/^#,##0\.([#0]*0)$/)))
    return t < 0 ? "-" + Gt(e, a, -t) : ra("" + t) + "." + je("0", s[1].length);
  if ((s = a.match(/^#,#*,#0/))) return Gt(e, a.replace(/^#,#*,/, ""), t);
  if ((s = a.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (n = Ca(Gt(e, a.replace(/[\\-]/g, ""), t))),
      (o = 0),
      Ca(
        Ca(a.replace(/\\/g, "")).replace(/[0#]/g, function (x) {
          return o < n.length ? n.charAt(o++) : x === "0" ? "0" : "";
        }),
      )
    );
  if (a.match(Oo))
    return (
      (n = Gt(e, "##########", t)),
      "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6)
    );
  var p = "";
  if ((s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(s[4].length, 7)),
      (i = Ir(l, Math.pow(10, o) - 1, !1)),
      (n = "" + c),
      (p = Yt("n", s[1], i[1])),
      p.charAt(p.length - 1) == " " && (p = p.substr(0, p.length - 1) + "0"),
      (n += p + s[2] + "/" + s[3]),
      (p = Nr(i[2], o)),
      p.length < s[4].length &&
        (p = ht(s[4].substr(s[4].length - p.length)) + p),
      (n += p),
      n
    );
  if ((s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(Math.max(s[1].length, s[4].length), 7)),
      (i = Ir(l, Math.pow(10, o) - 1, !0)),
      c +
        (i[0] || (i[1] ? "" : "0")) +
        " " +
        (i[1]
          ? An(i[1], o) + s[2] + "/" + s[3] + Nr(i[2], o)
          : je(" ", 2 * o + 1 + s[2].length + s[3].length))
    );
  if ((s = a.match(/^[#0?]+$/)))
    return (
      (n = "" + t),
      a.length <= n.length ? n : ht(a.substr(0, a.length - n.length)) + n
    );
  if ((s = a.match(/^([#0]+)\.([#0]+)$/))) {
    ((n = "" + t.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1")),
      (o = n.indexOf(".")));
    var m = a.indexOf(".") - o,
      f = a.length - n.length - m;
    return ht(a.substr(0, m) + n + a.substr(a.length - f));
  }
  if ((s = a.match(/^00,000\.([#0]*0)$/)))
    return t < 0
      ? "-" + Gt(e, a, -t)
      : ra("" + t)
          .replace(/^\d,\d{3}$/, "0$&")
          .replace(/^\d*$/, function (x) {
            return "00," + (x.length < 3 ? Ot(0, 3 - x.length) : "") + x;
          }) +
          "." +
          Ot(0, s[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var h = ra("" + l);
      return h !== "0" ? c + h : "";
    default:
      if (a.match(/\.[0#?]*$/))
        return (
          Gt(e, a.slice(0, a.lastIndexOf(".")), t) +
          ht(a.slice(a.lastIndexOf(".")))
        );
  }
  throw new Error("unsupported format |" + a + "|");
}
function Yt(e, a, t) {
  return (t | 0) === t ? Gt(e, a, t) : yt(e, a, t);
}
function O0(e) {
  for (var a = [], t = !1, r = 0, n = 0; r < e.length; ++r)
    switch (e.charCodeAt(r)) {
      case 34:
        t = !t;
        break;
      case 95:
      case 42:
      case 92:
        ++r;
        break;
      case 59:
        ((a[a.length] = e.substr(n, r - n)), (n = r + 1));
    }
  if (((a[a.length] = e.substr(n)), t === !0))
    throw new Error("Format |" + e + "| unterminated string ");
  return a;
}
var Mo = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Pa(e) {
  for (var a = 0, t = "", r = ""; a < e.length; )
    switch ((t = e.charAt(a))) {
      case "G":
        (Br(e, a) && (a += 6), a++);
        break;
      case '"':
        for (; e.charCodeAt(++a) !== 34 && a < e.length; );
        ++a;
        break;
      case "\\":
        a += 2;
        break;
      case "_":
        a += 2;
        break;
      case "@":
        ++a;
        break;
      case "B":
      case "b":
        if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2") return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (
          e.substr(a, 3).toUpperCase() === "A/P" ||
          e.substr(a, 5).toUpperCase() === "AM/PM" ||
          e.substr(a, 5).toUpperCase() === "上午/下午"
        )
          return !0;
        ++a;
        break;
      case "[":
        for (r = t; e.charAt(a++) !== "]" && a < e.length; ) r += e.charAt(a);
        if (r.match(Mo)) return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (
          ;
          a < e.length &&
          ("0#?.,E+-%".indexOf((t = e.charAt(++a))) > -1 ||
            (t == "\\" &&
              e.charAt(a + 1) == "-" &&
              "0#".indexOf(e.charAt(a + 2)) > -1));
        );
        break;
      case "?":
        for (; e.charAt(++a) === t; );
        break;
      case "*":
        (++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a);
        break;
      case "(":
      case ")":
        ++a;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; );
        break;
      case " ":
        ++a;
        break;
      default:
        ++a;
        break;
    }
  return !1;
}
function L0(e, a, t, r) {
  for (
    var n = [], s = "", o = 0, i = "", l = "t", c, p, m, f = "H";
    o < e.length;
  )
    switch ((i = e.charAt(o))) {
      case "G":
        if (!Br(e, o))
          throw new Error("unrecognized character " + i + " in " + e);
        ((n[n.length] = { t: "G", v: "General" }), (o += 7));
        break;
      case '"':
        for (s = ""; (m = e.charCodeAt(++o)) !== 34 && o < e.length; )
          s += String.fromCharCode(m);
        ((n[n.length] = { t: "t", v: s }), ++o);
        break;
      case "\\":
        var h = e.charAt(++o),
          x = h === "(" || h === ")" ? h : "t";
        ((n[n.length] = { t: x, v: h }), ++o);
        break;
      case "_":
        ((n[n.length] = { t: "t", v: " " }), (o += 2));
        break;
      case "@":
        ((n[n.length] = { t: "T", v: a }), ++o);
        break;
      case "B":
      case "b":
        if (e.charAt(o + 1) === "1" || e.charAt(o + 1) === "2") {
          if (c == null && ((c = pa(a, t, e.charAt(o + 1) === "2")), c == null))
            return "";
          ((n[n.length] = { t: "X", v: e.substr(o, 2) }), (l = i), (o += 2));
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        i = i.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (a < 0 || (c == null && ((c = pa(a, t)), c == null))) return "";
        for (s = i; ++o < e.length && e.charAt(o).toLowerCase() === i; ) s += i;
        (i === "m" && l.toLowerCase() === "h" && (i = "M"),
          i === "h" && (i = f),
          (n[n.length] = { t: i, v: s }),
          (l = i));
        break;
      case "A":
      case "a":
      case "上":
        var d = { t: i, v: i };
        if (
          (c == null && (c = pa(a, t)),
          e.substr(o, 3).toUpperCase() === "A/P"
            ? (c != null && (d.v = c.H >= 12 ? "P" : "A"),
              (d.t = "T"),
              (f = "h"),
              (o += 3))
            : e.substr(o, 5).toUpperCase() === "AM/PM"
              ? (c != null && (d.v = c.H >= 12 ? "PM" : "AM"),
                (d.t = "T"),
                (o += 5),
                (f = "h"))
              : e.substr(o, 5).toUpperCase() === "上午/下午"
                ? (c != null && (d.v = c.H >= 12 ? "下午" : "上午"),
                  (d.t = "T"),
                  (o += 5),
                  (f = "h"))
                : ((d.t = "t"), ++o),
          c == null && d.t === "T")
        )
          return "";
        ((n[n.length] = d), (l = i));
        break;
      case "[":
        for (s = i; e.charAt(o++) !== "]" && o < e.length; ) s += e.charAt(o);
        if (s.slice(-1) !== "]") throw 'unterminated "[" block: |' + s + "|";
        if (s.match(Mo)) {
          if (c == null && ((c = pa(a, t)), c == null)) return "";
          ((n[n.length] = { t: "Z", v: s.toLowerCase() }), (l = s.charAt(1)));
        } else
          s.indexOf("$") > -1 &&
            ((s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
            Pa(e) || (n[n.length] = { t: "t", v: s }));
        break;
      case ".":
        if (c != null) {
          for (s = i; ++o < e.length && (i = e.charAt(o)) === "0"; ) s += i;
          n[n.length] = { t: "s", v: s };
          break;
        }
      case "0":
      case "#":
        for (
          s = i;
          ++o < e.length && "0#?.,E+-%".indexOf((i = e.charAt(o))) > -1;
        )
          s += i;
        n[n.length] = { t: "n", v: s };
        break;
      case "?":
        for (s = i; e.charAt(++o) === i; ) s += i;
        ((n[n.length] = { t: i, v: s }), (l = i));
        break;
      case "*":
        (++o, (e.charAt(o) == " " || e.charAt(o) == "*") && ++o);
        break;
      case "(":
      case ")":
        ((n[n.length] = { t: r === 1 ? "t" : i, v: i }), ++o);
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (s = i; o < e.length && "0123456789".indexOf(e.charAt(++o)) > -1; )
          s += e.charAt(o);
        n[n.length] = { t: "D", v: s };
        break;
      case " ":
        ((n[n.length] = { t: i, v: i }), ++o);
        break;
      case "$":
        ((n[n.length] = { t: "t", v: "$" }), ++o);
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(i) === -1)
          throw new Error("unrecognized character " + i + " in " + e);
        ((n[n.length] = { t: "t", v: i }), ++o);
        break;
    }
  var u = 0,
    A = 0,
    B;
  for (o = n.length - 1, l = "t"; o >= 0; --o)
    switch (n[o].t) {
      case "h":
      case "H":
        ((n[o].t = f), (l = "h"), u < 1 && (u = 1));
        break;
      case "s":
        ((B = n[o].v.match(/\.0+$/)) && (A = Math.max(A, B[0].length - 1)),
          u < 3 && (u = 3));
      case "d":
      case "y":
      case "M":
      case "e":
        l = n[o].t;
        break;
      case "m":
        l === "s" && ((n[o].t = "M"), u < 2 && (u = 2));
        break;
      case "X":
        break;
      case "Z":
        (u < 1 && n[o].v.match(/[Hh]/) && (u = 1),
          u < 2 && n[o].v.match(/[Mm]/) && (u = 2),
          u < 3 && n[o].v.match(/[Ss]/) && (u = 3));
    }
  switch (u) {
    case 0:
      break;
    case 1:
      (c.u >= 0.5 && ((c.u = 0), ++c.S),
        c.S >= 60 && ((c.S = 0), ++c.M),
        c.M >= 60 && ((c.M = 0), ++c.H));
      break;
    case 2:
      (c.u >= 0.5 && ((c.u = 0), ++c.S), c.S >= 60 && ((c.S = 0), ++c.M));
      break;
  }
  var w = "",
    M;
  for (o = 0; o < n.length; ++o)
    switch (n[o].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        ((n[o].v = ""), (n[o].t = ";"));
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        ((n[o].v = C0(n[o].t.charCodeAt(0), n[o].v, c, A)), (n[o].t = "t"));
        break;
      case "n":
      case "?":
        for (
          M = o + 1;
          n[M] != null &&
          ((i = n[M].t) === "?" ||
            i === "D" ||
            ((i === " " || i === "t") &&
              n[M + 1] != null &&
              (n[M + 1].t === "?" ||
                (n[M + 1].t === "t" && n[M + 1].v === "/"))) ||
            (n[o].t === "(" && (i === " " || i === "n" || i === ")")) ||
            (i === "t" &&
              (n[M].v === "/" ||
                (n[M].v === " " && n[M + 1] != null && n[M + 1].t == "?"))));
        )
          ((n[o].v += n[M].v), (n[M] = { v: "", t: ";" }), ++M);
        ((w += n[o].v), (o = M - 1));
        break;
      case "G":
        ((n[o].t = "t"), (n[o].v = ma(a, t)));
        break;
    }
  var H = "",
    U,
    k;
  if (w.length > 0) {
    (w.charCodeAt(0) == 40
      ? ((U = a < 0 && w.charCodeAt(0) === 45 ? -a : a), (k = Yt("n", w, U)))
      : ((U = a < 0 && r > 1 ? -a : a),
        (k = Yt("n", w, U)),
        U < 0 &&
          n[0] &&
          n[0].t == "t" &&
          ((k = k.substr(1)), (n[0].v = "-" + n[0].v))),
      (M = k.length - 1));
    var S = n.length;
    for (o = 0; o < n.length; ++o)
      if (n[o] != null && n[o].t != "t" && n[o].v.indexOf(".") > -1) {
        S = o;
        break;
      }
    var _ = n.length;
    if (S === n.length && k.indexOf("E") === -1) {
      for (o = n.length - 1; o >= 0; --o)
        n[o] == null ||
          "n?".indexOf(n[o].t) === -1 ||
          (M >= n[o].v.length - 1
            ? ((M -= n[o].v.length), (n[o].v = k.substr(M + 1, n[o].v.length)))
            : M < 0
              ? (n[o].v = "")
              : ((n[o].v = k.substr(0, M + 1)), (M = -1)),
          (n[o].t = "t"),
          (_ = o));
      M >= 0 && _ < n.length && (n[_].v = k.substr(0, M + 1) + n[_].v);
    } else if (S !== n.length && k.indexOf("E") === -1) {
      for (M = k.indexOf(".") - 1, o = S; o >= 0; --o)
        if (!(n[o] == null || "n?".indexOf(n[o].t) === -1)) {
          for (
            p =
              n[o].v.indexOf(".") > -1 && o === S
                ? n[o].v.indexOf(".") - 1
                : n[o].v.length - 1,
              H = n[o].v.substr(p + 1);
            p >= 0;
            --p
          )
            M >= 0 &&
              (n[o].v.charAt(p) === "0" || n[o].v.charAt(p) === "#") &&
              (H = k.charAt(M--) + H);
          ((n[o].v = H), (n[o].t = "t"), (_ = o));
        }
      for (
        M >= 0 && _ < n.length && (n[_].v = k.substr(0, M + 1) + n[_].v),
          M = k.indexOf(".") + 1,
          o = S;
        o < n.length;
        ++o
      )
        if (!(n[o] == null || ("n?(".indexOf(n[o].t) === -1 && o !== S))) {
          for (
            p =
              n[o].v.indexOf(".") > -1 && o === S ? n[o].v.indexOf(".") + 1 : 0,
              H = n[o].v.substr(0, p);
            p < n[o].v.length;
            ++p
          )
            M < k.length && (H += k.charAt(M++));
          ((n[o].v = H), (n[o].t = "t"), (_ = o));
        }
    }
  }
  for (o = 0; o < n.length; ++o)
    n[o] != null &&
      "n?".indexOf(n[o].t) > -1 &&
      ((U = r > 1 && a < 0 && o > 0 && n[o - 1].v === "-" ? -a : a),
      (n[o].v = Yt(n[o].t, n[o].v, U)),
      (n[o].t = "t"));
  var I = "";
  for (o = 0; o !== n.length; ++o) n[o] != null && (I += n[o].v);
  return I;
}
var _s = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Ss(e, a) {
  if (a == null) return !1;
  var t = parseFloat(a[2]);
  switch (a[1]) {
    case "=":
      if (e == t) return !0;
      break;
    case ">":
      if (e > t) return !0;
      break;
    case "<":
      if (e < t) return !0;
      break;
    case "<>":
      if (e != t) return !0;
      break;
    case ">=":
      if (e >= t) return !0;
      break;
    case "<=":
      if (e <= t) return !0;
      break;
  }
  return !1;
}
function M0(e, a) {
  var t = O0(e),
    r = t.length,
    n = t[r - 1].indexOf("@");
  if ((r < 4 && n > -1 && --r, t.length > 4))
    throw new Error("cannot find right format for |" + t.join("|") + "|");
  if (typeof a != "number")
    return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];
  switch (t.length) {
    case 1:
      t =
        n > -1
          ? ["General", "General", "General", t[0]]
          : [t[0], t[0], t[0], "@"];
      break;
    case 2:
      t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
      break;
    case 3:
      t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
      break;
  }
  var s = a > 0 ? t[0] : a < 0 ? t[1] : t[2];
  if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [r, s];
  if (t[0].match(/\[[=<>]/) != null || t[1].match(/\[[=<>]/) != null) {
    var o = t[0].match(_s),
      i = t[1].match(_s);
    return Ss(a, o)
      ? [r, t[0]]
      : Ss(a, i)
        ? [r, t[1]]
        : [r, t[o != null && i != null ? 2 : 1]];
  }
  return [r, s];
}
function Dt(e, a, t) {
  t == null && (t = {});
  var r = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? (r = t.dateNF) : (r = e);
      break;
    case "number":
      (e == 14 && t.dateNF
        ? (r = t.dateNF)
        : (r = (t.table != null ? t.table : we)[e]),
        r == null && (r = (t.table && t.table[xs[e]]) || we[xs[e]]),
        r == null && (r = S0[e] || "General"));
      break;
  }
  if (Br(r, 0)) return ma(a, t);
  a instanceof Date && (a = Do(a, t.date1904));
  var n = M0(r, a);
  if (Br(n[1])) return ma(a, t);
  if (a === !0) a = "TRUE";
  else if (a === !1) a = "FALSE";
  else if (a === "" || a == null) return "";
  return L0(n[1], a, t, n[0]);
}
function da(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var t = 0; t < 392; ++t) {
      if (we[t] == null) {
        a < 0 && (a = t);
        continue;
      }
      if (we[t] == e) {
        a = t;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return ((we[a] = e), a);
}
function Uo() {
  we = _0();
}
var U0 = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    23: "General",
    24: "General",
    25: "General",
    26: "General",
    27: "m/d/yy",
    28: "m/d/yy",
    29: "m/d/yy",
    30: "m/d/yy",
    31: "m/d/yy",
    32: "h:mm:ss",
    33: "h:mm:ss",
    34: "h:mm:ss",
    35: "h:mm:ss",
    36: "m/d/yy",
    41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
    50: "m/d/yy",
    51: "m/d/yy",
    52: "m/d/yy",
    53: "m/d/yy",
    54: "m/d/yy",
    55: "m/d/yy",
    56: "m/d/yy",
    57: "m/d/yy",
    58: "m/d/yy",
    59: "0",
    60: "0.00",
    61: "#,##0",
    62: "#,##0.00",
    63: '"$"#,##0_);\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    67: "0%",
    68: "0.00%",
    69: "# ?/?",
    70: "# ??/??",
    71: "m/d/yy",
    72: "m/d/yy",
    73: "d-mmm-yy",
    74: "d-mmm",
    75: "mmm-yy",
    76: "h:mm",
    77: "h:mm:ss",
    78: "m/d/yy h:mm",
    79: "mm:ss",
    80: "[h]:mm:ss",
    81: "mmss.0",
  },
  jo = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function j0(e) {
  var a = typeof e == "number" ? we[e] : e;
  return ((a = a.replace(jo, "(\\d+)")), new RegExp("^" + a + "$"));
}
function H0(e, a, t) {
  var r = -1,
    n = -1,
    s = -1,
    o = -1,
    i = -1,
    l = -1;
  ((a.match(jo) || []).forEach(function (m, f) {
    var h = parseInt(t[f + 1], 10);
    switch (m.toLowerCase().charAt(0)) {
      case "y":
        r = h;
        break;
      case "d":
        s = h;
        break;
      case "h":
        o = h;
        break;
      case "s":
        l = h;
        break;
      case "m":
        o >= 0 ? (i = h) : (n = h);
        break;
    }
  }),
    l >= 0 && i == -1 && n >= 0 && ((i = n), (n = -1)));
  var c =
    ("" + (r >= 0 ? r : new Date().getFullYear())).slice(-4) +
    "-" +
    ("00" + (n >= 1 ? n : 1)).slice(-2) +
    "-" +
    ("00" + (s >= 1 ? s : 1)).slice(-2);
  (c.length == 7 && (c = "0" + c), c.length == 8 && (c = "20" + c));
  var p =
    ("00" + (o >= 0 ? o : 0)).slice(-2) +
    ":" +
    ("00" + (i >= 0 ? i : 0)).slice(-2) +
    ":" +
    ("00" + (l >= 0 ? l : 0)).slice(-2);
  return o == -1 && i == -1 && l == -1
    ? c
    : r == -1 && n == -1 && s == -1
      ? p
      : c + "T" + p;
}
var G0 = (function () {
    var e = {};
    e.version = "1.2.0";
    function a() {
      for (var k = 0, S = new Array(256), _ = 0; _ != 256; ++_)
        ((k = _),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (k = k & 1 ? -306674912 ^ (k >>> 1) : k >>> 1),
          (S[_] = k));
      return typeof Int32Array < "u" ? new Int32Array(S) : S;
    }
    var t = a();
    function r(k) {
      var S = 0,
        _ = 0,
        I = 0,
        R = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (I = 0; I != 256; ++I) R[I] = k[I];
      for (I = 0; I != 256; ++I)
        for (_ = k[I], S = 256 + I; S < 4096; S += 256)
          _ = R[S] = (_ >>> 8) ^ k[_ & 255];
      var N = [];
      for (I = 1; I != 16; ++I)
        N[I - 1] =
          typeof Int32Array < "u"
            ? R.subarray(I * 256, I * 256 + 256)
            : R.slice(I * 256, I * 256 + 256);
      return N;
    }
    var n = r(t),
      s = n[0],
      o = n[1],
      i = n[2],
      l = n[3],
      c = n[4],
      p = n[5],
      m = n[6],
      f = n[7],
      h = n[8],
      x = n[9],
      d = n[10],
      u = n[11],
      A = n[12],
      B = n[13],
      w = n[14];
    function M(k, S) {
      for (var _ = S ^ -1, I = 0, R = k.length; I < R; )
        _ = (_ >>> 8) ^ t[(_ ^ k.charCodeAt(I++)) & 255];
      return ~_;
    }
    function H(k, S) {
      for (var _ = S ^ -1, I = k.length - 15, R = 0; R < I; )
        _ =
          w[k[R++] ^ (_ & 255)] ^
          B[k[R++] ^ ((_ >> 8) & 255)] ^
          A[k[R++] ^ ((_ >> 16) & 255)] ^
          u[k[R++] ^ (_ >>> 24)] ^
          d[k[R++]] ^
          x[k[R++]] ^
          h[k[R++]] ^
          f[k[R++]] ^
          m[k[R++]] ^
          p[k[R++]] ^
          c[k[R++]] ^
          l[k[R++]] ^
          i[k[R++]] ^
          o[k[R++]] ^
          s[k[R++]] ^
          t[k[R++]];
      for (I += 15; R < I; ) _ = (_ >>> 8) ^ t[(_ ^ k[R++]) & 255];
      return ~_;
    }
    function U(k, S) {
      for (var _ = S ^ -1, I = 0, R = k.length, N = 0, X = 0; I < R; )
        ((N = k.charCodeAt(I++)),
          N < 128
            ? (_ = (_ >>> 8) ^ t[(_ ^ N) & 255])
            : N < 2048
              ? ((_ = (_ >>> 8) ^ t[(_ ^ (192 | ((N >> 6) & 31))) & 255]),
                (_ = (_ >>> 8) ^ t[(_ ^ (128 | (N & 63))) & 255]))
              : N >= 55296 && N < 57344
                ? ((N = (N & 1023) + 64),
                  (X = k.charCodeAt(I++) & 1023),
                  (_ = (_ >>> 8) ^ t[(_ ^ (240 | ((N >> 8) & 7))) & 255]),
                  (_ = (_ >>> 8) ^ t[(_ ^ (128 | ((N >> 2) & 63))) & 255]),
                  (_ =
                    (_ >>> 8) ^
                    t[(_ ^ (128 | ((X >> 6) & 15) | ((N & 3) << 4))) & 255]),
                  (_ = (_ >>> 8) ^ t[(_ ^ (128 | (X & 63))) & 255]))
                : ((_ = (_ >>> 8) ^ t[(_ ^ (224 | ((N >> 12) & 15))) & 255]),
                  (_ = (_ >>> 8) ^ t[(_ ^ (128 | ((N >> 6) & 63))) & 255]),
                  (_ = (_ >>> 8) ^ t[(_ ^ (128 | (N & 63))) & 255])));
      return ~_;
    }
    return ((e.table = t), (e.bstr = M), (e.buf = H), (e.str = U), e);
  })(),
  be = (function () {
    var a = {};
    a.version = "1.2.1";
    function t(v, C) {
      for (
        var T = v.split("/"),
          E = C.split("/"),
          y = 0,
          D = 0,
          V = Math.min(T.length, E.length);
        y < V;
        ++y
      ) {
        if ((D = T[y].length - E[y].length)) return D;
        if (T[y] != E[y]) return T[y] < E[y] ? -1 : 1;
      }
      return T.length - E.length;
    }
    function r(v) {
      if (v.charAt(v.length - 1) == "/")
        return v.slice(0, -1).indexOf("/") === -1 ? v : r(v.slice(0, -1));
      var C = v.lastIndexOf("/");
      return C === -1 ? v : v.slice(0, C + 1);
    }
    function n(v) {
      if (v.charAt(v.length - 1) == "/") return n(v.slice(0, -1));
      var C = v.lastIndexOf("/");
      return C === -1 ? v : v.slice(C + 1);
    }
    function s(v, C) {
      typeof C == "string" && (C = new Date(C));
      var T = C.getHours();
      ((T = (T << 6) | C.getMinutes()),
        (T = (T << 5) | (C.getSeconds() >>> 1)),
        v.write_shift(2, T));
      var E = C.getFullYear() - 1980;
      ((E = (E << 4) | (C.getMonth() + 1)),
        (E = (E << 5) | C.getDate()),
        v.write_shift(2, E));
    }
    function o(v) {
      var C = v.read_shift(2) & 65535,
        T = v.read_shift(2) & 65535,
        E = new Date(),
        y = T & 31;
      T >>>= 5;
      var D = T & 15;
      ((T >>>= 4),
        E.setMilliseconds(0),
        E.setFullYear(T + 1980),
        E.setMonth(D - 1),
        E.setDate(y));
      var V = C & 31;
      C >>>= 5;
      var Y = C & 63;
      return (
        (C >>>= 6),
        E.setHours(C),
        E.setMinutes(Y),
        E.setSeconds(V << 1),
        E
      );
    }
    function i(v) {
      tt(v, 0);
      for (var C = {}, T = 0; v.l <= v.length - 4; ) {
        var E = v.read_shift(2),
          y = v.read_shift(2),
          D = v.l + y,
          V = {};
        switch (E) {
          case 21589:
            ((T = v.read_shift(1)),
              T & 1 && (V.mtime = v.read_shift(4)),
              y > 5 &&
                (T & 2 && (V.atime = v.read_shift(4)),
                T & 4 && (V.ctime = v.read_shift(4))),
              V.mtime && (V.mt = new Date(V.mtime * 1e3)));
            break;
        }
        ((v.l = D), (C[E] = V));
      }
      return C;
    }
    var l;
    function c() {
      return l || (l = {});
    }
    function p(v, C) {
      if (v[0] == 80 && v[1] == 75) return Zn(v, C);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return hc(v, C);
      if (v.length < 512)
        throw new Error("CFB file size " + v.length + " < 512");
      var T = 3,
        E = 512,
        y = 0,
        D = 0,
        V = 0,
        Y = 0,
        G = 0,
        W = [],
        z = v.slice(0, 512);
      tt(z, 0);
      var te = m(z);
      switch (((T = te[0]), T)) {
        case 3:
          E = 512;
          break;
        case 4:
          E = 4096;
          break;
        case 0:
          if (te[1] == 0) return Zn(v, C);
        default:
          throw new Error("Major Version: Expected 3 or 4 saw " + T);
      }
      E !== 512 && ((z = v.slice(0, E)), tt(z, 28));
      var le = v.slice(0, E);
      f(z, T);
      var me = z.read_shift(4, "i");
      if (T === 3 && me !== 0)
        throw new Error("# Directory Sectors: Expected 0 saw " + me);
      ((z.l += 4),
        (V = z.read_shift(4, "i")),
        (z.l += 4),
        z.chk("00100000", "Mini Stream Cutoff Size: "),
        (Y = z.read_shift(4, "i")),
        (y = z.read_shift(4, "i")),
        (G = z.read_shift(4, "i")),
        (D = z.read_shift(4, "i")));
      for (
        var se = -1, de = 0;
        de < 109 && ((se = z.read_shift(4, "i")), !(se < 0));
        ++de
      )
        W[de] = se;
      var Se = h(v, E);
      u(G, D, Se, E, W);
      var Me = B(Se, V, W, E);
      ((Me[V].name = "!Directory"),
        y > 0 && Y !== X && (Me[Y].name = "!MiniFAT"),
        (Me[W[0]].name = "!FAT"),
        (Me.fat_addrs = W),
        (Me.ssz = E));
      var Ue = {},
        ot = [],
        Ma = [],
        Ua = [];
      (w(V, Me, Se, ot, y, Ue, Ma, Y), x(Ma, Ua, ot), ot.shift());
      var ja = { FileIndex: Ma, FullPaths: Ua };
      return (C && C.raw && (ja.raw = { header: le, sectors: Se }), ja);
    }
    function m(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      (v.chk(ae, "Header Signature: "), (v.l += 16));
      var C = v.read_shift(2, "u");
      return [v.read_shift(2, "u"), C];
    }
    function f(v, C) {
      var T = 9;
      switch (((v.l += 2), (T = v.read_shift(2)))) {
        case 9:
          if (C != 3) throw new Error("Sector Shift: Expected 9 saw " + T);
          break;
        case 12:
          if (C != 4) throw new Error("Sector Shift: Expected 12 saw " + T);
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + T);
      }
      (v.chk("0600", "Mini Sector Shift: "),
        v.chk("000000000000", "Reserved: "));
    }
    function h(v, C) {
      for (var T = Math.ceil(v.length / C) - 1, E = [], y = 1; y < T; ++y)
        E[y - 1] = v.slice(y * C, (y + 1) * C);
      return ((E[T - 1] = v.slice(T * C)), E);
    }
    function x(v, C, T) {
      for (
        var E = 0, y = 0, D = 0, V = 0, Y = 0, G = T.length, W = [], z = [];
        E < G;
        ++E
      )
        ((W[E] = z[E] = E), (C[E] = T[E]));
      for (; Y < z.length; ++Y)
        ((E = z[Y]),
          (y = v[E].L),
          (D = v[E].R),
          (V = v[E].C),
          W[E] === E &&
            (y !== -1 && W[y] !== y && (W[E] = W[y]),
            D !== -1 && W[D] !== D && (W[E] = W[D])),
          V !== -1 && (W[V] = E),
          y !== -1 &&
            E != W[E] &&
            ((W[y] = W[E]), z.lastIndexOf(y) < Y && z.push(y)),
          D !== -1 &&
            E != W[E] &&
            ((W[D] = W[E]), z.lastIndexOf(D) < Y && z.push(D)));
      for (E = 1; E < G; ++E)
        W[E] === E &&
          (D !== -1 && W[D] !== D
            ? (W[E] = W[D])
            : y !== -1 && W[y] !== y && (W[E] = W[y]));
      for (E = 1; E < G; ++E)
        if (v[E].type !== 0) {
          if (((Y = E), Y != W[Y]))
            do ((Y = W[Y]), (C[E] = C[Y] + "/" + C[E]));
            while (Y !== 0 && W[Y] !== -1 && Y != W[Y]);
          W[E] = -1;
        }
      for (C[0] += "/", E = 1; E < G; ++E) v[E].type !== 2 && (C[E] += "/");
    }
    function d(v, C, T) {
      for (var E = v.start, y = v.size, D = [], V = E; T && y > 0 && V >= 0; )
        (D.push(C.slice(V * N, V * N + N)), (y -= N), (V = la(T, V * 4)));
      return D.length === 0 ? qe(0) : ta(D).slice(0, v.size);
    }
    function u(v, C, T, E, y) {
      var D = X;
      if (v === X) {
        if (C !== 0) throw new Error("DIFAT chain shorter than expected");
      } else if (v !== -1) {
        var V = T[v],
          Y = (E >>> 2) - 1;
        if (!V) return;
        for (var G = 0; G < Y && (D = la(V, G * 4)) !== X; ++G) y.push(D);
        u(la(V, E - 4), C - 1, T, E, y);
      }
    }
    function A(v, C, T, E, y) {
      var D = [],
        V = [];
      y || (y = []);
      var Y = E - 1,
        G = 0,
        W = 0;
      for (G = C; G >= 0; ) {
        ((y[G] = !0), (D[D.length] = G), V.push(v[G]));
        var z = T[Math.floor((G * 4) / E)];
        if (((W = (G * 4) & Y), E < 4 + W))
          throw new Error("FAT boundary crossed: " + G + " 4 " + E);
        if (!v[z]) break;
        G = la(v[z], W);
      }
      return { nodes: D, data: Ds([V]) };
    }
    function B(v, C, T, E) {
      var y = v.length,
        D = [],
        V = [],
        Y = [],
        G = [],
        W = E - 1,
        z = 0,
        te = 0,
        le = 0,
        me = 0;
      for (z = 0; z < y; ++z)
        if (((Y = []), (le = z + C), le >= y && (le -= y), !V[le])) {
          G = [];
          var se = [];
          for (te = le; te >= 0; ) {
            ((se[te] = !0), (V[te] = !0), (Y[Y.length] = te), G.push(v[te]));
            var de = T[Math.floor((te * 4) / E)];
            if (((me = (te * 4) & W), E < 4 + me))
              throw new Error("FAT boundary crossed: " + te + " 4 " + E);
            if (!v[de] || ((te = la(v[de], me)), se[te])) break;
          }
          D[le] = { nodes: Y, data: Ds([G]) };
        }
      return D;
    }
    function w(v, C, T, E, y, D, V, Y) {
      for (
        var G = 0, W = E.length ? 2 : 0, z = C[v].data, te = 0, le = 0, me;
        te < z.length;
        te += 128
      ) {
        var se = z.slice(te, te + 128);
        (tt(se, 64),
          (le = se.read_shift(2)),
          (me = Nn(se, 0, le - W)),
          E.push(me));
        var de = {
            name: me,
            type: se.read_shift(1),
            color: se.read_shift(1),
            L: se.read_shift(4, "i"),
            R: se.read_shift(4, "i"),
            C: se.read_shift(4, "i"),
            clsid: se.read_shift(16),
            state: se.read_shift(4, "i"),
            start: 0,
            size: 0,
          },
          Se =
            se.read_shift(2) +
            se.read_shift(2) +
            se.read_shift(2) +
            se.read_shift(2);
        Se !== 0 && (de.ct = M(se, se.l - 8));
        var Me =
          se.read_shift(2) +
          se.read_shift(2) +
          se.read_shift(2) +
          se.read_shift(2);
        (Me !== 0 && (de.mt = M(se, se.l - 8)),
          (de.start = se.read_shift(4, "i")),
          (de.size = se.read_shift(4, "i")),
          de.size < 0 &&
            de.start < 0 &&
            ((de.size = de.type = 0), (de.start = X), (de.name = "")),
          de.type === 5
            ? ((G = de.start), y > 0 && G !== X && (C[G].name = "!StreamData"))
            : de.size >= 4096
              ? ((de.storage = "fat"),
                C[de.start] === void 0 &&
                  (C[de.start] = A(T, de.start, C.fat_addrs, C.ssz)),
                (C[de.start].name = de.name),
                (de.content = C[de.start].data.slice(0, de.size)))
              : ((de.storage = "minifat"),
                de.size < 0
                  ? (de.size = 0)
                  : G !== X &&
                    de.start !== X &&
                    C[G] &&
                    (de.content = d(de, C[G].data, (C[Y] || {}).data))),
          de.content && tt(de.content, 0),
          (D[me] = de),
          V.push(de));
      }
    }
    function M(v, C) {
      return new Date(
        ((Et(v, C + 4) / 1e7) * Math.pow(2, 32) +
          Et(v, C) / 1e7 -
          11644473600) *
          1e3,
      );
    }
    function H(v, C) {
      return (c(), p(l.readFileSync(v), C));
    }
    function U(v, C) {
      var T = C && C.type;
      switch (
        (T || (Ae && Buffer.isBuffer(v) && (T = "buffer")), T || "base64")
      ) {
        case "file":
          return H(v, C);
        case "base64":
          return p(Rt(bt(v)), C);
        case "binary":
          return p(Rt(v), C);
      }
      return p(v, C);
    }
    function k(v, C) {
      var T = C || {},
        E = T.root || "Root Entry";
      if (
        (v.FullPaths || (v.FullPaths = []),
        v.FileIndex || (v.FileIndex = []),
        v.FullPaths.length !== v.FileIndex.length)
      )
        throw new Error("inconsistent CFB structure");
      (v.FullPaths.length === 0 &&
        ((v.FullPaths[0] = E + "/"), (v.FileIndex[0] = { name: E, type: 5 })),
        T.CLSID && (v.FileIndex[0].clsid = T.CLSID),
        S(v));
    }
    function S(v) {
      var C = "Sh33tJ5";
      if (!be.find(v, "/" + C)) {
        var T = qe(4);
        ((T[0] = 55),
          (T[1] = T[3] = 50),
          (T[2] = 54),
          v.FileIndex.push({
            name: C,
            type: 2,
            content: T,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          v.FullPaths.push(v.FullPaths[0] + C),
          _(v));
      }
    }
    function _(v, C) {
      k(v);
      for (var T = !1, E = !1, y = v.FullPaths.length - 1; y >= 0; --y) {
        var D = v.FileIndex[y];
        switch (D.type) {
          case 0:
            E ? (T = !0) : (v.FileIndex.pop(), v.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            ((E = !0),
              isNaN(D.R * D.L * D.C) && (T = !0),
              D.R > -1 && D.L > -1 && D.R == D.L && (T = !0));
            break;
          default:
            T = !0;
            break;
        }
      }
      if (!(!T && !C)) {
        var V = new Date(1987, 1, 19),
          Y = 0,
          G = Object.create ? Object.create(null) : {},
          W = [];
        for (y = 0; y < v.FullPaths.length; ++y)
          ((G[v.FullPaths[y]] = !0),
            v.FileIndex[y].type !== 0 &&
              W.push([v.FullPaths[y], v.FileIndex[y]]));
        for (y = 0; y < W.length; ++y) {
          var z = r(W[y][0]);
          ((E = G[z]),
            E ||
              (W.push([
                z,
                {
                  name: n(z).replace("/", ""),
                  type: 1,
                  clsid: ie,
                  ct: V,
                  mt: V,
                  content: null,
                },
              ]),
              (G[z] = !0)));
        }
        for (
          W.sort(function (me, se) {
            return t(me[0], se[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            y = 0;
          y < W.length;
          ++y
        )
          ((v.FullPaths[y] = W[y][0]), (v.FileIndex[y] = W[y][1]));
        for (y = 0; y < W.length; ++y) {
          var te = v.FileIndex[y],
            le = v.FullPaths[y];
          if (
            ((te.name = n(le).replace("/", "")),
            (te.L = te.R = te.C = -(te.color = 1)),
            (te.size = te.content ? te.content.length : 0),
            (te.start = 0),
            (te.clsid = te.clsid || ie),
            y === 0)
          )
            ((te.C = W.length > 1 ? 1 : -1), (te.size = 0), (te.type = 5));
          else if (le.slice(-1) == "/") {
            for (Y = y + 1; Y < W.length && r(v.FullPaths[Y]) != le; ++Y);
            for (
              te.C = Y >= W.length ? -1 : Y, Y = y + 1;
              Y < W.length && r(v.FullPaths[Y]) != r(le);
              ++Y
            );
            ((te.R = Y >= W.length ? -1 : Y), (te.type = 1));
          } else
            (r(v.FullPaths[y + 1] || "") == r(le) && (te.R = y + 1),
              (te.type = 2));
        }
      }
    }
    function I(v, C) {
      var T = C || {};
      if (T.fileType == "mad") return xc(v, T);
      switch ((_(v), T.fileType)) {
        case "zip":
          return lc(v, T);
      }
      var E = (function (me) {
          for (var se = 0, de = 0, Se = 0; Se < me.FileIndex.length; ++Se) {
            var Me = me.FileIndex[Se];
            if (Me.content) {
              var Ue = Me.content.length;
              Ue > 0 &&
                (Ue < 4096 ? (se += (Ue + 63) >> 6) : (de += (Ue + 511) >> 9));
            }
          }
          for (
            var ot = (me.FullPaths.length + 3) >> 2,
              Ma = (se + 7) >> 3,
              Ua = (se + 127) >> 7,
              ja = Ma + de + ot + Ua,
              ca = (ja + 127) >> 7,
              Kr = ca <= 109 ? 0 : Math.ceil((ca - 109) / 127);
            (ja + ca + Kr + 127) >> 7 > ca;
          )
            Kr = ++ca <= 109 ? 0 : Math.ceil((ca - 109) / 127);
          var $t = [1, Kr, ca, Ua, ot, de, se, 0];
          return (
            (me.FileIndex[0].size = se << 6),
            ($t[7] =
              (me.FileIndex[0].start =
                $t[0] + $t[1] + $t[2] + $t[3] + $t[4] + $t[5]) +
              (($t[6] + 7) >> 3)),
            $t
          );
        })(v),
        y = qe(E[7] << 9),
        D = 0,
        V = 0;
      {
        for (D = 0; D < 8; ++D) y.write_shift(1, ee[D]);
        for (D = 0; D < 8; ++D) y.write_shift(2, 0);
        for (
          y.write_shift(2, 62),
            y.write_shift(2, 3),
            y.write_shift(2, 65534),
            y.write_shift(2, 9),
            y.write_shift(2, 6),
            D = 0;
          D < 3;
          ++D
        )
          y.write_shift(2, 0);
        for (
          y.write_shift(4, 0),
            y.write_shift(4, E[2]),
            y.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1),
            y.write_shift(4, 0),
            y.write_shift(4, 4096),
            y.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : X),
            y.write_shift(4, E[3]),
            y.write_shift(-4, E[1] ? E[0] - 1 : X),
            y.write_shift(4, E[1]),
            D = 0;
          D < 109;
          ++D
        )
          y.write_shift(-4, D < E[2] ? E[1] + D : -1);
      }
      if (E[1])
        for (V = 0; V < E[1]; ++V) {
          for (; D < 236 + V * 127; ++D)
            y.write_shift(-4, D < E[2] ? E[1] + D : -1);
          y.write_shift(-4, V === E[1] - 1 ? X : V + 1);
        }
      var Y = function (me) {
        for (V += me; D < V - 1; ++D) y.write_shift(-4, D + 1);
        me && (++D, y.write_shift(-4, X));
      };
      for (V = D = 0, V += E[1]; D < V; ++D) y.write_shift(-4, Z.DIFSECT);
      for (V += E[2]; D < V; ++D) y.write_shift(-4, Z.FATSECT);
      (Y(E[3]), Y(E[4]));
      for (var G = 0, W = 0, z = v.FileIndex[0]; G < v.FileIndex.length; ++G)
        ((z = v.FileIndex[G]),
          z.content &&
            ((W = z.content.length),
            !(W < 4096) && ((z.start = V), Y((W + 511) >> 9))));
      for (Y((E[6] + 7) >> 3); y.l & 511; ) y.write_shift(-4, Z.ENDOFCHAIN);
      for (V = D = 0, G = 0; G < v.FileIndex.length; ++G)
        ((z = v.FileIndex[G]),
          z.content &&
            ((W = z.content.length),
            !(!W || W >= 4096) && ((z.start = V), Y((W + 63) >> 6))));
      for (; y.l & 511; ) y.write_shift(-4, Z.ENDOFCHAIN);
      for (D = 0; D < E[4] << 2; ++D) {
        var te = v.FullPaths[D];
        if (!te || te.length === 0) {
          for (G = 0; G < 17; ++G) y.write_shift(4, 0);
          for (G = 0; G < 3; ++G) y.write_shift(4, -1);
          for (G = 0; G < 12; ++G) y.write_shift(4, 0);
          continue;
        }
        ((z = v.FileIndex[D]), D === 0 && (z.start = z.size ? z.start - 1 : X));
        var le = (D === 0 && T.root) || z.name;
        if (
          ((W = 2 * (le.length + 1)),
          y.write_shift(64, le, "utf16le"),
          y.write_shift(2, W),
          y.write_shift(1, z.type),
          y.write_shift(1, z.color),
          y.write_shift(-4, z.L),
          y.write_shift(-4, z.R),
          y.write_shift(-4, z.C),
          z.clsid)
        )
          y.write_shift(16, z.clsid, "hex");
        else for (G = 0; G < 4; ++G) y.write_shift(4, 0);
        (y.write_shift(4, z.state || 0),
          y.write_shift(4, 0),
          y.write_shift(4, 0),
          y.write_shift(4, 0),
          y.write_shift(4, 0),
          y.write_shift(4, z.start),
          y.write_shift(4, z.size),
          y.write_shift(4, 0));
      }
      for (D = 1; D < v.FileIndex.length; ++D)
        if (((z = v.FileIndex[D]), z.size >= 4096))
          if (((y.l = (z.start + 1) << 9), Ae && Buffer.isBuffer(z.content)))
            (z.content.copy(y, y.l, 0, z.size), (y.l += (z.size + 511) & -512));
          else {
            for (G = 0; G < z.size; ++G) y.write_shift(1, z.content[G]);
            for (; G & 511; ++G) y.write_shift(1, 0);
          }
      for (D = 1; D < v.FileIndex.length; ++D)
        if (((z = v.FileIndex[D]), z.size > 0 && z.size < 4096))
          if (Ae && Buffer.isBuffer(z.content))
            (z.content.copy(y, y.l, 0, z.size), (y.l += (z.size + 63) & -64));
          else {
            for (G = 0; G < z.size; ++G) y.write_shift(1, z.content[G]);
            for (; G & 63; ++G) y.write_shift(1, 0);
          }
      if (Ae) y.l = y.length;
      else for (; y.l < y.length; ) y.write_shift(1, 0);
      return y;
    }
    function R(v, C) {
      var T = v.FullPaths.map(function (G) {
          return G.toUpperCase();
        }),
        E = T.map(function (G) {
          var W = G.split("/");
          return W[W.length - (G.slice(-1) == "/" ? 2 : 1)];
        }),
        y = !1;
      C.charCodeAt(0) === 47
        ? ((y = !0), (C = T[0].slice(0, -1) + C))
        : (y = C.indexOf("/") !== -1);
      var D = C.toUpperCase(),
        V = y === !0 ? T.indexOf(D) : E.indexOf(D);
      if (V !== -1) return v.FileIndex[V];
      var Y = !D.match(Ga);
      for (
        D = D.replace(gt, ""), Y && (D = D.replace(Ga, "!")), V = 0;
        V < T.length;
        ++V
      )
        if (
          (Y ? T[V].replace(Ga, "!") : T[V]).replace(gt, "") == D ||
          (Y ? E[V].replace(Ga, "!") : E[V]).replace(gt, "") == D
        )
          return v.FileIndex[V];
      return null;
    }
    var N = 64,
      X = -2,
      ae = "d0cf11e0a1b11ae1",
      ee = [208, 207, 17, 224, 161, 177, 26, 225],
      ie = "00000000000000000000000000000000",
      Z = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: X,
        FREESECT: -1,
        HEADER_SIGNATURE: ae,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: ie,
        EntryTypes: [
          "unknown",
          "storage",
          "stream",
          "lockbytes",
          "property",
          "root",
        ],
      };
    function xe(v, C, T) {
      c();
      var E = I(v, T);
      l.writeFileSync(C, E);
    }
    function j(v) {
      for (var C = new Array(v.length), T = 0; T < v.length; ++T)
        C[T] = String.fromCharCode(v[T]);
      return C.join("");
    }
    function fe(v, C) {
      var T = I(v, C);
      switch ((C && C.type) || "buffer") {
        case "file":
          return (c(), l.writeFileSync(C.filename, T), T);
        case "binary":
          return typeof T == "string" ? T : j(T);
        case "base64":
          return fs(typeof T == "string" ? T : j(T));
        case "buffer":
          if (Ae) return Buffer.isBuffer(T) ? T : xa(T);
        case "array":
          return typeof T == "string" ? Rt(T) : T;
      }
      return T;
    }
    var ne;
    function b(v) {
      try {
        var C = v.InflateRaw,
          T = new C();
        if (
          (T._processChunk(new Uint8Array([3, 0]), T._finishFlushFlag),
          T.bytesRead)
        )
          ne = v;
        else throw new Error("zlib does not expose bytesRead");
      } catch (E) {
        console.error("cannot use native zlib: " + (E.message || E));
      }
    }
    function O(v, C) {
      if (!ne) return qn(v, C);
      var T = ne.InflateRaw,
        E = new T(),
        y = E._processChunk(v.slice(v.l), E._finishFlushFlag);
      return ((v.l += E.bytesRead), y);
    }
    function L(v) {
      return ne ? ne.deflateRawSync(v) : Ee(v);
    }
    var P = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      K = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      re = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function Q(v) {
      var C =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((C >> 16) | (C >> 8) | C) & 255;
    }
    for (
      var J = typeof Uint8Array < "u", q = J ? new Uint8Array(256) : [], ce = 0;
      ce < 256;
      ++ce
    )
      q[ce] = Q(ce);
    function F(v, C) {
      var T = q[v & 255];
      return C <= 8
        ? T >>> (8 - C)
        : ((T = (T << 8) | q[(v >> 8) & 255]),
          C <= 16
            ? T >>> (16 - C)
            : ((T = (T << 8) | q[(v >> 16) & 255]), T >>> (24 - C)));
    }
    function Te(v, C) {
      var T = C & 7,
        E = C >>> 3;
      return ((v[E] | (T <= 6 ? 0 : v[E + 1] << 8)) >>> T) & 3;
    }
    function he(v, C) {
      var T = C & 7,
        E = C >>> 3;
      return ((v[E] | (T <= 5 ? 0 : v[E + 1] << 8)) >>> T) & 7;
    }
    function ve(v, C) {
      var T = C & 7,
        E = C >>> 3;
      return ((v[E] | (T <= 4 ? 0 : v[E + 1] << 8)) >>> T) & 15;
    }
    function pe(v, C) {
      var T = C & 7,
        E = C >>> 3;
      return ((v[E] | (T <= 3 ? 0 : v[E + 1] << 8)) >>> T) & 31;
    }
    function oe(v, C) {
      var T = C & 7,
        E = C >>> 3;
      return ((v[E] | (T <= 1 ? 0 : v[E + 1] << 8)) >>> T) & 127;
    }
    function ue(v, C, T) {
      var E = C & 7,
        y = C >>> 3,
        D = (1 << T) - 1,
        V = v[y] >>> E;
      return (
        T < 8 - E ||
          ((V |= v[y + 1] << (8 - E)), T < 16 - E) ||
          ((V |= v[y + 2] << (16 - E)), T < 24 - E) ||
          (V |= v[y + 3] << (24 - E)),
        V & D
      );
    }
    function ke(v, C, T) {
      var E = C & 7,
        y = C >>> 3;
      return (
        E <= 5
          ? (v[y] |= (T & 7) << E)
          : ((v[y] |= (T << E) & 255), (v[y + 1] = (T & 7) >> (8 - E))),
        C + 3
      );
    }
    function Ye(v, C, T) {
      var E = C & 7,
        y = C >>> 3;
      return ((T = (T & 1) << E), (v[y] |= T), C + 1);
    }
    function nt(v, C, T) {
      var E = C & 7,
        y = C >>> 3;
      return ((T <<= E), (v[y] |= T & 255), (T >>>= 8), (v[y + 1] = T), C + 8);
    }
    function st(v, C, T) {
      var E = C & 7,
        y = C >>> 3;
      return (
        (T <<= E),
        (v[y] |= T & 255),
        (T >>>= 8),
        (v[y + 1] = T & 255),
        (v[y + 2] = T >>> 8),
        C + 16
      );
    }
    function St(v, C) {
      var T = v.length,
        E = 2 * T > C ? 2 * T : C + 5,
        y = 0;
      if (T >= C) return v;
      if (Ae) {
        var D = ms(E);
        if (v.copy) v.copy(D);
        else for (; y < v.length; ++y) D[y] = v[y];
        return D;
      } else if (J) {
        var V = new Uint8Array(E);
        if (V.set) V.set(v);
        else for (; y < T; ++y) V[y] = v[y];
        return V;
      }
      return ((v.length = E), v);
    }
    function Fe(v) {
      for (var C = new Array(v), T = 0; T < v; ++T) C[T] = 0;
      return C;
    }
    function Ve(v, C, T) {
      var E = 1,
        y = 0,
        D = 0,
        V = 0,
        Y = 0,
        G = v.length,
        W = J ? new Uint16Array(32) : Fe(32);
      for (D = 0; D < 32; ++D) W[D] = 0;
      for (D = G; D < T; ++D) v[D] = 0;
      G = v.length;
      var z = J ? new Uint16Array(G) : Fe(G);
      for (D = 0; D < G; ++D) (W[(y = v[D])]++, E < y && (E = y), (z[D] = 0));
      for (W[0] = 0, D = 1; D <= E; ++D) W[D + 16] = Y = (Y + W[D - 1]) << 1;
      for (D = 0; D < G; ++D) ((Y = v[D]), Y != 0 && (z[D] = W[Y + 16]++));
      var te = 0;
      for (D = 0; D < G; ++D)
        if (((te = v[D]), te != 0))
          for (
            Y = F(z[D], E) >> (E - te), V = (1 << (E + 4 - te)) - 1;
            V >= 0;
            --V
          )
            C[Y | (V << te)] = (te & 15) | (D << 4);
      return E;
    }
    var Ne = J ? new Uint16Array(512) : Fe(512),
      We = J ? new Uint16Array(32) : Fe(32);
    if (!J) {
      for (var Re = 0; Re < 512; ++Re) Ne[Re] = 0;
      for (Re = 0; Re < 32; ++Re) We[Re] = 0;
    }
    (function () {
      for (var v = [], C = 0; C < 32; C++) v.push(5);
      Ve(v, We, 32);
      var T = [];
      for (C = 0; C <= 143; C++) T.push(8);
      for (; C <= 255; C++) T.push(9);
      for (; C <= 279; C++) T.push(7);
      for (; C <= 287; C++) T.push(8);
      Ve(T, Ne, 288);
    })();
    var wt = (function () {
      for (
        var C = J ? new Uint8Array(32768) : [], T = 0, E = 0;
        T < re.length - 1;
        ++T
      )
        for (; E < re[T + 1]; ++E) C[E] = T;
      for (; E < 32768; ++E) C[E] = 29;
      var y = J ? new Uint8Array(259) : [];
      for (T = 0, E = 0; T < K.length - 1; ++T)
        for (; E < K[T + 1]; ++E) y[E] = T;
      function D(Y, G) {
        for (var W = 0; W < Y.length; ) {
          var z = Math.min(65535, Y.length - W),
            te = W + z == Y.length;
          for (
            G.write_shift(1, +te),
              G.write_shift(2, z),
              G.write_shift(2, ~z & 65535);
            z-- > 0;
          )
            G[G.l++] = Y[W++];
        }
        return G.l;
      }
      function V(Y, G) {
        for (
          var W = 0, z = 0, te = J ? new Uint16Array(32768) : [];
          z < Y.length;
        ) {
          var le = Math.min(65535, Y.length - z);
          if (le < 10) {
            for (
              W = ke(G, W, +(z + le == Y.length)),
                W & 7 && (W += 8 - (W & 7)),
                G.l = (W / 8) | 0,
                G.write_shift(2, le),
                G.write_shift(2, ~le & 65535);
              le-- > 0;
            )
              G[G.l++] = Y[z++];
            W = G.l * 8;
            continue;
          }
          W = ke(G, W, +(z + le == Y.length) + 2);
          for (var me = 0; le-- > 0; ) {
            var se = Y[z];
            me = ((me << 5) ^ se) & 32767;
            var de = -1,
              Se = 0;
            if (
              (de = te[me]) &&
              ((de |= z & -32768), de > z && (de -= 32768), de < z)
            )
              for (; Y[de + Se] == Y[z + Se] && Se < 250; ) ++Se;
            if (Se > 2) {
              ((se = y[Se]),
                se <= 22
                  ? (W = nt(G, W, q[se + 1] >> 1) - 1)
                  : (nt(G, W, 3),
                    (W += 5),
                    nt(G, W, q[se - 23] >> 5),
                    (W += 3)));
              var Me = se < 8 ? 0 : (se - 4) >> 2;
              (Me > 0 && (st(G, W, Se - K[se]), (W += Me)),
                (se = C[z - de]),
                (W = nt(G, W, q[se] >> 3)),
                (W -= 3));
              var Ue = se < 4 ? 0 : (se - 2) >> 1;
              Ue > 0 && (st(G, W, z - de - re[se]), (W += Ue));
              for (var ot = 0; ot < Se; ++ot)
                ((te[me] = z & 32767), (me = ((me << 5) ^ Y[z]) & 32767), ++z);
              le -= Se - 1;
            } else
              (se <= 143 ? (se = se + 48) : (W = Ye(G, W, 1)),
                (W = nt(G, W, q[se])),
                (te[me] = z & 32767),
                ++z);
          }
          W = nt(G, W, 0) - 1;
        }
        return ((G.l = ((W + 7) / 8) | 0), G.l);
      }
      return function (G, W) {
        return G.length < 8 ? D(G, W) : V(G, W);
      };
    })();
    function Ee(v) {
      var C = qe(50 + Math.floor(v.length * 1.1)),
        T = wt(v, C);
      return C.slice(0, T);
    }
    var De = J ? new Uint16Array(32768) : Fe(32768),
      Le = J ? new Uint16Array(32768) : Fe(32768),
      Pe = J ? new Uint16Array(128) : Fe(128),
      jt = 1,
      Yn = 1;
    function oc(v, C) {
      var T = pe(v, C) + 257;
      C += 5;
      var E = pe(v, C) + 1;
      C += 5;
      var y = ve(v, C) + 4;
      C += 4;
      for (
        var D = 0,
          V = J ? new Uint8Array(19) : Fe(19),
          Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          G = 1,
          W = J ? new Uint8Array(8) : Fe(8),
          z = J ? new Uint8Array(8) : Fe(8),
          te = V.length,
          le = 0;
        le < y;
        ++le
      )
        ((V[P[le]] = D = he(v, C)), G < D && (G = D), W[D]++, (C += 3));
      var me = 0;
      for (W[0] = 0, le = 1; le <= G; ++le) z[le] = me = (me + W[le - 1]) << 1;
      for (le = 0; le < te; ++le) (me = V[le]) != 0 && (Y[le] = z[me]++);
      var se = 0;
      for (le = 0; le < te; ++le)
        if (((se = V[le]), se != 0)) {
          me = q[Y[le]] >> (8 - se);
          for (var de = (1 << (7 - se)) - 1; de >= 0; --de)
            Pe[me | (de << se)] = (se & 7) | (le << 3);
        }
      var Se = [];
      for (G = 1; Se.length < T + E; )
        switch (((me = Pe[oe(v, C)]), (C += me & 7), (me >>>= 3))) {
          case 16:
            for (D = 3 + Te(v, C), C += 2, me = Se[Se.length - 1]; D-- > 0; )
              Se.push(me);
            break;
          case 17:
            for (D = 3 + he(v, C), C += 3; D-- > 0; ) Se.push(0);
            break;
          case 18:
            for (D = 11 + oe(v, C), C += 7; D-- > 0; ) Se.push(0);
            break;
          default:
            (Se.push(me), G < me && (G = me));
            break;
        }
      var Me = Se.slice(0, T),
        Ue = Se.slice(T);
      for (le = T; le < 286; ++le) Me[le] = 0;
      for (le = E; le < 30; ++le) Ue[le] = 0;
      return ((jt = Ve(Me, De, 286)), (Yn = Ve(Ue, Le, 30)), C);
    }
    function ic(v, C) {
      if (v[0] == 3 && !(v[1] & 3)) return [sa(C), 2];
      for (
        var T = 0,
          E = 0,
          y = ms(C || 1 << 18),
          D = 0,
          V = y.length >>> 0,
          Y = 0,
          G = 0;
        !(E & 1);
      ) {
        if (((E = he(v, T)), (T += 3), E >>> 1))
          E >> 1 == 1
            ? ((Y = 9), (G = 5))
            : ((T = oc(v, T)), (Y = jt), (G = Yn));
        else {
          T & 7 && (T += 8 - (T & 7));
          var W = v[T >>> 3] | (v[(T >>> 3) + 1] << 8);
          if (((T += 32), W > 0))
            for (
              !C && V < D + W && ((y = St(y, D + W)), (V = y.length));
              W-- > 0;
            )
              ((y[D++] = v[T >>> 3]), (T += 8));
          continue;
        }
        for (;;) {
          !C && V < D + 32767 && ((y = St(y, D + 32767)), (V = y.length));
          var z = ue(v, T, Y),
            te = E >>> 1 == 1 ? Ne[z] : De[z];
          if (((T += te & 15), (te >>>= 4), !((te >>> 8) & 255))) y[D++] = te;
          else {
            if (te == 256) break;
            te -= 257;
            var le = te < 8 ? 0 : (te - 4) >> 2;
            le > 5 && (le = 0);
            var me = D + K[te];
            (le > 0 && ((me += ue(v, T, le)), (T += le)),
              (z = ue(v, T, G)),
              (te = E >>> 1 == 1 ? We[z] : Le[z]),
              (T += te & 15),
              (te >>>= 4));
            var se = te < 4 ? 0 : (te - 2) >> 1,
              de = re[te];
            for (
              se > 0 && ((de += ue(v, T, se)), (T += se)),
                !C && V < me && ((y = St(y, me + 100)), (V = y.length));
              D < me;
            )
              ((y[D] = y[D - de]), ++D);
          }
        }
      }
      return C ? [y, (T + 7) >>> 3] : [y.slice(0, D), (T + 7) >>> 3];
    }
    function qn(v, C) {
      var T = v.slice(v.l || 0),
        E = ic(T, C);
      return ((v.l += E[1]), E[0]);
    }
    function Jn(v, C) {
      if (v) typeof console < "u" && console.error(C);
      else throw new Error(C);
    }
    function Zn(v, C) {
      var T = v;
      tt(T, 0);
      var E = [],
        y = [],
        D = { FileIndex: E, FullPaths: y };
      k(D, { root: C.root });
      for (
        var V = T.length - 4;
        (T[V] != 80 || T[V + 1] != 75 || T[V + 2] != 5 || T[V + 3] != 6) &&
        V >= 0;
      )
        --V;
      ((T.l = V + 4), (T.l += 4));
      var Y = T.read_shift(2);
      T.l += 6;
      var G = T.read_shift(4);
      for (T.l = G, V = 0; V < Y; ++V) {
        T.l += 20;
        var W = T.read_shift(4),
          z = T.read_shift(4),
          te = T.read_shift(2),
          le = T.read_shift(2),
          me = T.read_shift(2);
        T.l += 8;
        var se = T.read_shift(4),
          de = i(T.slice(T.l + te, T.l + te + le));
        T.l += te + le + me;
        var Se = T.l;
        ((T.l = se + 4), cc(T, W, z, D, de), (T.l = Se));
      }
      return D;
    }
    function cc(v, C, T, E, y) {
      v.l += 2;
      var D = v.read_shift(2),
        V = v.read_shift(2),
        Y = o(v);
      if (D & 8257) throw new Error("Unsupported ZIP encryption");
      for (
        var G = v.read_shift(4),
          W = v.read_shift(4),
          z = v.read_shift(4),
          te = v.read_shift(2),
          le = v.read_shift(2),
          me = "",
          se = 0;
        se < te;
        ++se
      )
        me += String.fromCharCode(v[v.l++]);
      if (le) {
        var de = i(v.slice(v.l, v.l + le));
        ((de[21589] || {}).mt && (Y = de[21589].mt),
          ((y || {})[21589] || {}).mt && (Y = y[21589].mt));
      }
      v.l += le;
      var Se = v.slice(v.l, v.l + W);
      switch (V) {
        case 8:
          Se = O(v, z);
          break;
        case 0:
          break;
        default:
          throw new Error("Unsupported ZIP Compression method " + V);
      }
      var Me = !1;
      (D & 8 &&
        ((G = v.read_shift(4)),
        G == 134695760 && ((G = v.read_shift(4)), (Me = !0)),
        (W = v.read_shift(4)),
        (z = v.read_shift(4))),
        W != C && Jn(Me, "Bad compressed size: " + C + " != " + W),
        z != T && Jn(Me, "Bad uncompressed size: " + T + " != " + z),
        $r(E, me, Se, { unsafe: !0, mt: Y }));
    }
    function lc(v, C) {
      var T = C || {},
        E = [],
        y = [],
        D = qe(1),
        V = T.compression ? 8 : 0,
        Y = 0,
        G = 0,
        W = 0,
        z = 0,
        te = 0,
        le = v.FullPaths[0],
        me = le,
        se = v.FileIndex[0],
        de = [],
        Se = 0;
      for (G = 1; G < v.FullPaths.length; ++G)
        if (
          ((me = v.FullPaths[G].slice(le.length)),
          (se = v.FileIndex[G]),
          !(!se.size || !se.content || me == "Sh33tJ5"))
        ) {
          var Me = z,
            Ue = qe(me.length);
          for (W = 0; W < me.length; ++W)
            Ue.write_shift(1, me.charCodeAt(W) & 127);
          ((Ue = Ue.slice(0, Ue.l)), (de[te] = G0.buf(se.content, 0)));
          var ot = se.content;
          (V == 8 && (ot = L(ot)),
            (D = qe(30)),
            D.write_shift(4, 67324752),
            D.write_shift(2, 20),
            D.write_shift(2, Y),
            D.write_shift(2, V),
            se.mt ? s(D, se.mt) : D.write_shift(4, 0),
            D.write_shift(-4, de[te]),
            D.write_shift(4, ot.length),
            D.write_shift(4, se.content.length),
            D.write_shift(2, Ue.length),
            D.write_shift(2, 0),
            (z += D.length),
            E.push(D),
            (z += Ue.length),
            E.push(Ue),
            (z += ot.length),
            E.push(ot),
            (D = qe(46)),
            D.write_shift(4, 33639248),
            D.write_shift(2, 0),
            D.write_shift(2, 20),
            D.write_shift(2, Y),
            D.write_shift(2, V),
            D.write_shift(4, 0),
            D.write_shift(-4, de[te]),
            D.write_shift(4, ot.length),
            D.write_shift(4, se.content.length),
            D.write_shift(2, Ue.length),
            D.write_shift(2, 0),
            D.write_shift(2, 0),
            D.write_shift(2, 0),
            D.write_shift(2, 0),
            D.write_shift(4, 0),
            D.write_shift(4, Me),
            (Se += D.l),
            y.push(D),
            (Se += Ue.length),
            y.push(Ue),
            ++te);
        }
      return (
        (D = qe(22)),
        D.write_shift(4, 101010256),
        D.write_shift(2, 0),
        D.write_shift(2, 0),
        D.write_shift(2, te),
        D.write_shift(2, te),
        D.write_shift(4, Se),
        D.write_shift(4, z),
        D.write_shift(2, 0),
        ta([ta(E), ta(y), D])
      );
    }
    var xr = {
      htm: "text/html",
      xml: "text/xml",
      gif: "image/gif",
      jpg: "image/jpeg",
      png: "image/png",
      mso: "application/x-mso",
      thmx: "application/vnd.ms-officetheme",
      sh33tj5: "application/octet-stream",
    };
    function pc(v, C) {
      if (v.ctype) return v.ctype;
      var T = v.name || "",
        E = T.match(/\.([^\.]+)$/);
      return (E && xr[E[1]]) ||
        (C && ((E = (T = C).match(/[\.\\]([^\.\\])+$/)), E && xr[E[1]]))
        ? xr[E[1]]
        : "application/octet-stream";
    }
    function dc(v) {
      for (var C = fs(v), T = [], E = 0; E < C.length; E += 76)
        T.push(C.slice(E, E + 76));
      return (
        T.join(`\r
`) +
        `\r
`
      );
    }
    function fc(v) {
      var C = v.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (W) {
          var z = W.charCodeAt(0).toString(16).toUpperCase();
          return "=" + (z.length == 1 ? "0" + z : z);
        },
      );
      ((C = C.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")),
        C.charAt(0) ==
          `
` && (C = "=0D" + C.slice(1)),
        (C = C.replace(/\r(?!\n)/gm, "=0D")
          .replace(
            /\n\n/gm,
            `
=0A`,
          )
          .replace(/([^\r\n])\n/gm, "$1=0A")));
      for (
        var T = [],
          E = C.split(`\r
`),
          y = 0;
        y < E.length;
        ++y
      ) {
        var D = E[y];
        if (D.length == 0) {
          T.push("");
          continue;
        }
        for (var V = 0; V < D.length; ) {
          var Y = 76,
            G = D.slice(V, V + Y);
          (G.charAt(Y - 1) == "="
            ? Y--
            : G.charAt(Y - 2) == "="
              ? (Y -= 2)
              : G.charAt(Y - 3) == "=" && (Y -= 3),
            (G = D.slice(V, V + Y)),
            (V += Y),
            V < D.length && (G += "="),
            T.push(G));
        }
      }
      return T.join(`\r
`);
    }
    function mc(v) {
      for (var C = [], T = 0; T < v.length; ++T) {
        for (var E = v[T]; T <= v.length && E.charAt(E.length - 1) == "="; )
          E = E.slice(0, E.length - 1) + v[++T];
        C.push(E);
      }
      for (var y = 0; y < C.length; ++y)
        C[y] = C[y].replace(/[=][0-9A-Fa-f]{2}/g, function (D) {
          return String.fromCharCode(parseInt(D.slice(1), 16));
        });
      return Rt(
        C.join(`\r
`),
      );
    }
    function uc(v, C, T) {
      for (var E = "", y = "", D = "", V, Y = 0; Y < 10; ++Y) {
        var G = C[Y];
        if (!G || G.match(/^\s*$/)) break;
        var W = G.match(/^(.*?):\s*([^\s].*)$/);
        if (W)
          switch (W[1].toLowerCase()) {
            case "content-location":
              E = W[2].trim();
              break;
            case "content-type":
              D = W[2].trim();
              break;
            case "content-transfer-encoding":
              y = W[2].trim();
              break;
          }
      }
      switch ((++Y, y.toLowerCase())) {
        case "base64":
          V = Rt(bt(C.slice(Y).join("")));
          break;
        case "quoted-printable":
          V = mc(C.slice(Y));
          break;
        default:
          throw new Error("Unsupported Content-Transfer-Encoding " + y);
      }
      var z = $r(v, E.slice(T.length), V, { unsafe: !0 });
      D && (z.ctype = D);
    }
    function hc(v, C) {
      if (j(v.slice(0, 13)).toLowerCase() != "mime-version:")
        throw new Error("Unsupported MAD header");
      var T = (C && C.root) || "",
        E = (Ae && Buffer.isBuffer(v) ? v.toString("binary") : j(v)).split(`\r
`),
        y = 0,
        D = "";
      for (y = 0; y < E.length; ++y)
        if (
          ((D = E[y]),
          !!/^Content-Location:/i.test(D) &&
            ((D = D.slice(D.indexOf("file"))),
            T || (T = D.slice(0, D.lastIndexOf("/") + 1)),
            D.slice(0, T.length) != T))
        )
          for (
            ;
            T.length > 0 &&
            ((T = T.slice(0, T.length - 1)),
            (T = T.slice(0, T.lastIndexOf("/") + 1)),
            D.slice(0, T.length) != T);
          );
      var V = (E[1] || "").match(/boundary="(.*?)"/);
      if (!V) throw new Error("MAD cannot find boundary");
      var Y = "--" + (V[1] || ""),
        G = [],
        W = [],
        z = { FileIndex: G, FullPaths: W };
      k(z);
      var te,
        le = 0;
      for (y = 0; y < E.length; ++y) {
        var me = E[y];
        (me !== Y && me !== Y + "--") ||
          (le++ && uc(z, E.slice(te, y), T), (te = y));
      }
      return z;
    }
    function xc(v, C) {
      var T = C || {},
        E = T.boundary || "SheetJS";
      E = "------=" + E;
      for (
        var y = [
            "MIME-Version: 1.0",
            'Content-Type: multipart/related; boundary="' + E.slice(2) + '"',
            "",
            "",
            "",
          ],
          D = v.FullPaths[0],
          V = D,
          Y = v.FileIndex[0],
          G = 1;
        G < v.FullPaths.length;
        ++G
      )
        if (
          ((V = v.FullPaths[G].slice(D.length)),
          (Y = v.FileIndex[G]),
          !(!Y.size || !Y.content || V == "Sh33tJ5"))
        ) {
          V = V.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (Se) {
              return "_x" + Se.charCodeAt(0).toString(16) + "_";
            },
          ).replace(/[\u0080-\uFFFF]/g, function (Se) {
            return "_u" + Se.charCodeAt(0).toString(16) + "_";
          });
          for (
            var W = Y.content,
              z = Ae && Buffer.isBuffer(W) ? W.toString("binary") : j(W),
              te = 0,
              le = Math.min(1024, z.length),
              me = 0,
              se = 0;
            se <= le;
            ++se
          )
            (me = z.charCodeAt(se)) >= 32 && me < 128 && ++te;
          var de = te >= (le * 4) / 5;
          (y.push(E),
            y.push(
              "Content-Location: " + (T.root || "file:///C:/SheetJS/") + V,
            ),
            y.push(
              "Content-Transfer-Encoding: " +
                (de ? "quoted-printable" : "base64"),
            ),
            y.push("Content-Type: " + pc(Y, V)),
            y.push(""),
            y.push(de ? fc(z) : dc(z)));
        }
      return (
        y.push(
          E +
            `--\r
`,
        ),
        y.join(`\r
`)
      );
    }
    function vc(v) {
      var C = {};
      return (k(C, v), C);
    }
    function $r(v, C, T, E) {
      var y = E && E.unsafe;
      y || k(v);
      var D = !y && be.find(v, C);
      if (!D) {
        var V = v.FullPaths[0];
        (C.slice(0, V.length) == V
          ? (V = C)
          : (V.slice(-1) != "/" && (V += "/"),
            (V = (V + C).replace("//", "/"))),
          (D = { name: n(C), type: 2 }),
          v.FileIndex.push(D),
          v.FullPaths.push(V),
          y || be.utils.cfb_gc(v));
      }
      return (
        (D.content = T),
        (D.size = T ? T.length : 0),
        E &&
          (E.CLSID && (D.clsid = E.CLSID),
          E.mt && (D.mt = E.mt),
          E.ct && (D.ct = E.ct)),
        D
      );
    }
    function gc(v, C) {
      k(v);
      var T = be.find(v, C);
      if (T) {
        for (var E = 0; E < v.FileIndex.length; ++E)
          if (v.FileIndex[E] == T)
            return (v.FileIndex.splice(E, 1), v.FullPaths.splice(E, 1), !0);
      }
      return !1;
    }
    function _c(v, C, T) {
      k(v);
      var E = be.find(v, C);
      if (E) {
        for (var y = 0; y < v.FileIndex.length; ++y)
          if (v.FileIndex[y] == E)
            return ((v.FileIndex[y].name = n(T)), (v.FullPaths[y] = T), !0);
      }
      return !1;
    }
    function Sc(v) {
      _(v, !0);
    }
    return (
      (a.find = R),
      (a.read = U),
      (a.parse = p),
      (a.write = fe),
      (a.writeFile = xe),
      (a.utils = {
        cfb_new: vc,
        cfb_add: $r,
        cfb_del: gc,
        cfb_mov: _c,
        cfb_gc: Sc,
        ReadShift: $a,
        CheckField: ci,
        prep_blob: tt,
        bconcat: ta,
        use_zlib: b,
        _deflateRaw: Ee,
        _inflateRaw: qn,
        consts: Z,
      }),
      a
    );
  })();
function V0(e) {
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var a = File(e);
      (a.open("r"), (a.encoding = "binary"));
      var t = a.read();
      return (a.close(), t);
    } catch (r) {
      if (!r.message || !r.message.match(/onstruct/)) throw r;
    }
  throw new Error("Cannot access file " + e);
}
function Wt(e) {
  for (var a = Object.keys(e), t = [], r = 0; r < a.length; ++r)
    Object.prototype.hasOwnProperty.call(e, a[r]) && t.push(a[r]);
  return t;
}
function Cn(e) {
  for (var a = [], t = Wt(e), r = 0; r !== t.length; ++r) a[e[t[r]]] = t[r];
  return a;
}
var Rr = new Date(1899, 11, 30, 0, 0, 0);
function _t(e, a) {
  var t = e.getTime(),
    r = Rr.getTime() + (e.getTimezoneOffset() - Rr.getTimezoneOffset()) * 6e4;
  return (t - r) / (24 * 60 * 60 * 1e3);
}
var Ho = new Date(),
  W0 = Rr.getTime() + (Ho.getTimezoneOffset() - Rr.getTimezoneOffset()) * 6e4,
  ws = Ho.getTimezoneOffset();
function Vr(e) {
  var a = new Date();
  return (
    a.setTime(e * 24 * 60 * 60 * 1e3 + W0),
    a.getTimezoneOffset() !== ws &&
      a.setTime(a.getTime() + (a.getTimezoneOffset() - ws) * 6e4),
    a
  );
}
function z0(e) {
  var a = 0,
    t = 0,
    r = !1,
    n = e.match(
      /P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/,
    );
  if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var s = 1; s != n.length; ++s)
    if (n[s]) {
      switch (((t = 1), s > 3 && (r = !0), n[s].slice(n[s].length - 1))) {
        case "Y":
          throw new Error(
            "Unsupported ISO Duration Field: " + n[s].slice(n[s].length - 1),
          );
        case "D":
          t *= 24;
        case "H":
          t *= 60;
        case "M":
          if (r) t *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
      }
      a += t * parseInt(n[s], 10);
    }
  return a;
}
var Ts = new Date("2017-02-19T19:06:09.000Z"),
  Go = isNaN(Ts.getFullYear()) ? new Date("2/19/17") : Ts,
  X0 = Go.getFullYear() == 2017;
function et(e, a) {
  var t = new Date(e);
  if (X0)
    return (
      a > 0
        ? t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3)
        : a < 0 && t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3),
      t
    );
  if (e instanceof Date) return e;
  if (Go.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
    var r = t.getFullYear();
    return (e.indexOf("" + r) > -1 || t.setFullYear(t.getFullYear() + 100), t);
  }
  var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
    s = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  return (
    e.indexOf("Z") > -1 &&
      (s = new Date(s.getTime() - s.getTimezoneOffset() * 60 * 1e3)),
    s
  );
}
function ua(e, a) {
  if (Ae && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Wa(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return Wa(yo(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (a) {
        if (e[0] == 255 && e[1] == 254)
          return Wa(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return Wa(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var t = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        ˆ: "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: "",
      };
      return (
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder("latin1")
          .decode(e)
          .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (s) {
            return t[s] || s;
          })
      );
    } catch {}
  for (var r = [], n = 0; n != e.length; ++n) r.push(String.fromCharCode(e[n]));
  return r.join("");
}
function at(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var a = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (a[t] = at(e[t]));
  return a;
}
function je(e, a) {
  for (var t = ""; t.length < a; ) t += e;
  return t;
}
function Ut(e) {
  var a = Number(e);
  if (!isNaN(a)) return isFinite(a) ? a : NaN;
  if (!/\d/.test(e)) return a;
  var t = 1,
    r = e
      .replace(/([\d]),([\d])/g, "$1$2")
      .replace(/[$]/g, "")
      .replace(/[%]/g, function () {
        return ((t *= 100), "");
      });
  return !isNaN((a = Number(r))) ||
    ((r = r.replace(/[(](.*)[)]/, function (n, s) {
      return ((t = -t), s);
    })),
    !isNaN((a = Number(r))))
    ? a / t
    : a;
}
var $0 = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
function Na(e) {
  var a = new Date(e),
    t = new Date(NaN),
    r = a.getYear(),
    n = a.getMonth(),
    s = a.getDate();
  if (isNaN(s)) return t;
  var o = e.toLowerCase();
  if (o.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((o = o.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")),
      o.length > 3 && $0.indexOf(o) == -1)
    )
      return t;
  } else if (o.match(/[a-z]/)) return t;
  return r < 0 || r > 8099
    ? t
    : (n > 0 || s > 1) && r != 101
      ? a
      : e.match(/[^-0-9:,\/\\]/)
        ? t
        : a;
}
var K0 = (function () {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function (t, r, n) {
    if (e || typeof r == "string") return t.split(r);
    for (var s = t.split(r), o = [s[0]], i = 1; i < s.length; ++i)
      (o.push(n), o.push(s[i]));
    return o;
  };
})();
function Vo(e) {
  return e
    ? e.content && e.type
      ? ua(e.content, !0)
      : e.data
        ? Ha(e.data)
        : e.asNodeBuffer && Ae
          ? Ha(e.asNodeBuffer().toString("binary"))
          : e.asBinary
            ? Ha(e.asBinary())
            : e._data && e._data.getContent
              ? Ha(ua(Array.prototype.slice.call(e._data.getContent(), 0)))
              : null
    : null;
}
function Wo(e) {
  if (!e) return null;
  if (e.data) return ps(e.data);
  if (e.asNodeBuffer && Ae) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? ps(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function Y0(e) {
  return e && e.name.slice(-4) === ".bin" ? Wo(e) : Vo(e);
}
function Ft(e, a) {
  for (
    var t = e.FullPaths || Wt(e.files),
      r = a.toLowerCase().replace(/[\/]/g, "\\"),
      n = r.replace(/\\/g, "/"),
      s = 0;
    s < t.length;
    ++s
  ) {
    var o = t[s].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (r == o || n == o) return e.files ? e.files[t[s]] : e.FileIndex[s];
  }
  return null;
}
function yn(e, a) {
  var t = Ft(e, a);
  if (t == null) throw new Error("Cannot find file " + a + " in zip");
  return t;
}
function Xe(e, a, t) {
  if (!t) return Y0(yn(e, a));
  if (!a) return null;
  try {
    return Xe(e, a);
  } catch {
    return null;
  }
}
function kt(e, a, t) {
  if (!t) return Vo(yn(e, a));
  if (!a) return null;
  try {
    return kt(e, a);
  } catch {
    return null;
  }
}
function q0(e, a, t) {
  return Wo(yn(e, a));
}
function Es(e) {
  for (var a = e.FullPaths || Wt(e.files), t = [], r = 0; r < a.length; ++r)
    a[r].slice(-1) != "/" && t.push(a[r].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function J0(e, a, t) {
  if (e.FullPaths) {
    if (typeof t == "string") {
      var r;
      return (Ae ? (r = xa(t)) : (r = x0(t)), be.utils.cfb_add(e, a, r));
    }
    be.utils.cfb_add(e, a, t);
  } else e.file(a, t);
}
function zo(e, a) {
  switch (a.type) {
    case "base64":
      return be.read(e, { type: "base64" });
    case "binary":
      return be.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return be.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Va(e, a) {
  if (e.charAt(0) == "/") return e.slice(1);
  var t = a.split("/");
  a.slice(-1) != "/" && t.pop();
  for (var r = e.split("/"); r.length !== 0; ) {
    var n = r.shift();
    n === ".." ? t.pop() : n !== "." && t.push(n);
  }
  return t.join("/");
}
var Xo = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  Z0 = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
  ks =
    /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm,
  Q0 = /<[^>]*>/g,
  ut = Xo.match(ks) ? ks : Q0,
  el = /<\w*:/,
  tl = /<(\/?)\w+:/;
function ge(e, a, t) {
  for (
    var r = {}, n = 0, s = 0;
    n !== e.length && !((s = e.charCodeAt(n)) === 32 || s === 10 || s === 13);
    ++n
  );
  if ((a || (r[0] = e.slice(0, n)), n === e.length)) return r;
  var o = e.match(Z0),
    i = 0,
    l = "",
    c = 0,
    p = "",
    m = "",
    f = 1;
  if (o)
    for (c = 0; c != o.length; ++c) {
      for (m = o[c], s = 0; s != m.length && m.charCodeAt(s) !== 61; ++s);
      for (p = m.slice(0, s).trim(); m.charCodeAt(s + 1) == 32; ) ++s;
      for (
        f = (n = m.charCodeAt(s + 1)) == 34 || n == 39 ? 1 : 0,
          l = m.slice(s + 1 + f, m.length - f),
          i = 0;
        i != p.length && p.charCodeAt(i) !== 58;
        ++i
      );
      if (i === p.length)
        (p.indexOf("_") > 0 && (p = p.slice(0, p.indexOf("_"))),
          (r[p] = l),
          (r[p.toLowerCase()] = l));
      else {
        var h =
          (i === 5 && p.slice(0, 5) === "xmlns" ? "xmlns" : "") +
          p.slice(i + 1);
        if (r[h] && p.slice(i - 3, i) == "ext") continue;
        ((r[h] = l), (r[h.toLowerCase()] = l));
      }
    }
  return r;
}
function zt(e) {
  return e.replace(tl, "<$1");
}
var $o = {
    "&quot;": '"',
    "&apos;": "'",
    "&gt;": ">",
    "&lt;": "<",
    "&amp;": "&",
  },
  al = Cn($o),
  ye = (function () {
    var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi,
      a = /_x([\da-fA-F]{4})_/gi;
    return function t(r) {
      var n = r + "",
        s = n.indexOf("<![CDATA[");
      if (s == -1)
        return n
          .replace(e, function (i, l) {
            return (
              $o[i] ||
              String.fromCharCode(parseInt(l, i.indexOf("x") > -1 ? 16 : 10)) ||
              i
            );
          })
          .replace(a, function (i, l) {
            return String.fromCharCode(parseInt(l, 16));
          });
      var o = n.indexOf("]]>");
      return t(n.slice(0, s)) + n.slice(s + 9, o) + t(n.slice(o + 3));
    };
  })(),
  rl = /[&<>'"]/g,
  nl = /[\u0000-\u001f]/g;
function Fn(e) {
  var a = e + "";
  return a
    .replace(rl, function (t) {
      return al[t];
    })
    .replace(/\n/g, "<br/>")
    .replace(nl, function (t) {
      return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
    });
}
var As = (function () {
  var e = /&#(\d+);/g;
  function a(t, r) {
    return String.fromCharCode(parseInt(r, 10));
  }
  return function (r) {
    return r.replace(e, a);
  };
})();
function Oe(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function qr(e) {
  for (var a = "", t = 0, r = 0, n = 0, s = 0, o = 0, i = 0; t < e.length; ) {
    if (((r = e.charCodeAt(t++)), r < 128)) {
      a += String.fromCharCode(r);
      continue;
    }
    if (((n = e.charCodeAt(t++)), r > 191 && r < 224)) {
      ((o = (r & 31) << 6), (o |= n & 63), (a += String.fromCharCode(o)));
      continue;
    }
    if (((s = e.charCodeAt(t++)), r < 240)) {
      a += String.fromCharCode(((r & 15) << 12) | ((n & 63) << 6) | (s & 63));
      continue;
    }
    ((o = e.charCodeAt(t++)),
      (i =
        (((r & 7) << 18) | ((n & 63) << 12) | ((s & 63) << 6) | (o & 63)) -
        65536),
      (a += String.fromCharCode(55296 + ((i >>> 10) & 1023))),
      (a += String.fromCharCode(56320 + (i & 1023))));
  }
  return a;
}
function bs(e) {
  var a = sa(2 * e.length),
    t,
    r,
    n = 1,
    s = 0,
    o = 0,
    i;
  for (r = 0; r < e.length; r += n)
    ((n = 1),
      (i = e.charCodeAt(r)) < 128
        ? (t = i)
        : i < 224
          ? ((t = (i & 31) * 64 + (e.charCodeAt(r + 1) & 63)), (n = 2))
          : i < 240
            ? ((t =
                (i & 15) * 4096 +
                (e.charCodeAt(r + 1) & 63) * 64 +
                (e.charCodeAt(r + 2) & 63)),
              (n = 3))
            : ((n = 4),
              (t =
                (i & 7) * 262144 +
                (e.charCodeAt(r + 1) & 63) * 4096 +
                (e.charCodeAt(r + 2) & 63) * 64 +
                (e.charCodeAt(r + 3) & 63)),
              (t -= 65536),
              (o = 55296 + ((t >>> 10) & 1023)),
              (t = 56320 + (t & 1023))),
      o !== 0 && ((a[s++] = o & 255), (a[s++] = o >>> 8), (o = 0)),
      (a[s++] = t % 256),
      (a[s++] = t >>> 8));
  return a.slice(0, s).toString("ucs2");
}
function Cs(e) {
  return xa(e, "binary").toString("utf8");
}
var _r = "foo bar bazâð£",
  Ie = (Ae && ((Cs(_r) == qr(_r) && Cs) || (bs(_r) == qr(_r) && bs))) || qr,
  Wa = Ae
    ? function (e) {
        return xa(e, "utf8").toString("binary");
      }
    : function (e) {
        for (var a = [], t = 0, r = 0, n = 0; t < e.length; )
          switch (((r = e.charCodeAt(t++)), !0)) {
            case r < 128:
              a.push(String.fromCharCode(r));
              break;
            case r < 2048:
              (a.push(String.fromCharCode(192 + (r >> 6))),
                a.push(String.fromCharCode(128 + (r & 63))));
              break;
            case r >= 55296 && r < 57344:
              ((r -= 55296),
                (n = e.charCodeAt(t++) - 56320 + (r << 10)),
                a.push(String.fromCharCode(240 + ((n >> 18) & 7))),
                a.push(String.fromCharCode(144 + ((n >> 12) & 63))),
                a.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                a.push(String.fromCharCode(128 + (n & 63))));
              break;
            default:
              (a.push(String.fromCharCode(224 + (r >> 12))),
                a.push(String.fromCharCode(128 + ((r >> 6) & 63))),
                a.push(String.fromCharCode(128 + (r & 63))));
          }
        return a.join("");
      },
  rr = (function () {
    var e = {};
    return function (t, r) {
      var n = t + "|" + (r || "");
      return e[n]
        ? e[n]
        : (e[n] = new RegExp(
            "<(?:\\w+:)?" +
              t +
              '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' +
              t +
              ">",
            r || "",
          ));
    };
  })(),
  Ko = (function () {
    var e = [
      ["nbsp", " "],
      ["middot", "·"],
      ["quot", '"'],
      ["apos", "'"],
      ["gt", ">"],
      ["lt", "<"],
      ["amp", "&"],
    ].map(function (a) {
      return [new RegExp("&" + a[0] + ";", "ig"), a[1]];
    });
    return function (t) {
      for (
        var r = t
            .replace(/^[\t\n\r ]+/, "")
            .replace(/[\t\n\r ]+$/, "")
            .replace(/>\s+/g, ">")
            .replace(/\s+</g, "<")
            .replace(/[\t\n\r ]+/g, " ")
            .replace(
              /<\s*[bB][rR]\s*\/?>/g,
              `
`,
            )
            .replace(/<[^>]*>/g, ""),
          n = 0;
        n < e.length;
        ++n
      )
        r = r.replace(e[n][0], e[n][1]);
      return r;
    };
  })(),
  sl = (function () {
    var e = {};
    return function (t) {
      return e[t] !== void 0
        ? e[t]
        : (e[t] = new RegExp(
            "<(?:vt:)?" + t + ">([\\s\\S]*?)</(?:vt:)?" + t + ">",
            "g",
          ));
    };
  })(),
  ol = /<\/?(?:vt:)?variant>/g,
  il = /<(?:vt:)([^>]*)>([\s\S]*)</;
function ys(e, a) {
  var t = ge(e),
    r = e.match(sl(t.baseType)) || [],
    n = [];
  if (r.length != t.size) {
    if (a.WTF)
      throw new Error("unexpected vector length " + r.length + " != " + t.size);
    return n;
  }
  return (
    r.forEach(function (s) {
      var o = s.replace(ol, "").match(il);
      o && n.push({ v: Ie(o[2]), t: o[1] });
    }),
    n
  );
}
var cl = /(^\s|\s$|\n)/;
function ll(e) {
  return Wt(e)
    .map(function (a) {
      return " " + a + '="' + e[a] + '"';
    })
    .join("");
}
function pl(e, a, t) {
  return (
    "<" +
    e +
    (t != null ? ll(t) : "") +
    (a != null
      ? (a.match(cl) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e
      : "/") +
    ">"
  );
}
function Dn(e) {
  if (Ae && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Ie(va(kn(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var nr = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm,
  dl = {
    CORE_PROPS:
      "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    CUST_PROPS:
      "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
    EXT_PROPS:
      "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    CT: "http://schemas.openxmlformats.org/package/2006/content-types",
    RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
    TCMNT:
      "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
    dc: "http://purl.org/dc/elements/1.1/",
    dcterms: "http://purl.org/dc/terms/",
    dcmitype: "http://purl.org/dc/dcmitype/",
    mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
    vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
    xsd: "http://www.w3.org/2001/XMLSchema",
  },
  fl = [
    "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "http://purl.oclc.org/ooxml/spreadsheetml/main",
    "http://schemas.microsoft.com/office/excel/2006/main",
    "http://schemas.microsoft.com/office/excel/2006/2",
  ];
function ml(e, a) {
  for (
    var t = 1 - 2 * (e[a + 7] >>> 7),
      r = ((e[a + 7] & 127) << 4) + ((e[a + 6] >>> 4) & 15),
      n = e[a + 6] & 15,
      s = 5;
    s >= 0;
    --s
  )
    n = n * 256 + e[a + s];
  return r == 2047
    ? n == 0
      ? t * (1 / 0)
      : NaN
    : (r == 0 ? (r = -1022) : ((r -= 1023), (n += Math.pow(2, 52))),
      t * Math.pow(2, r - 52) * n);
}
function ul(e, a, t) {
  var r = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7,
    n = 0,
    s = 0,
    o = r ? -a : a;
  isFinite(o)
    ? o == 0
      ? (n = s = 0)
      : ((n = Math.floor(Math.log(o) / Math.LN2)),
        (s = o * Math.pow(2, 52 - n)),
        n <= -1023 && (!isFinite(s) || s < Math.pow(2, 52))
          ? (n = -1022)
          : ((s -= Math.pow(2, 52)), (n += 1023)))
    : ((n = 2047), (s = isNaN(a) ? 26985 : 0));
  for (var i = 0; i <= 5; ++i, s /= 256) e[t + i] = s & 255;
  ((e[t + 6] = ((n & 15) << 4) | (s & 15)), (e[t + 7] = (n >> 4) | r));
}
var Fs = function (e) {
    for (var a = [], t = 10240, r = 0; r < e[0].length; ++r)
      if (e[0][r])
        for (var n = 0, s = e[0][r].length; n < s; n += t)
          a.push.apply(a, e[0][r].slice(n, n + t));
    return a;
  },
  Ds = Ae
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (a) {
                return Buffer.isBuffer(a) ? a : xa(a);
              }),
            )
          : Fs(e);
      }
    : Fs,
  Ns = function (e, a, t) {
    for (var r = [], n = a; n < t; n += 2)
      r.push(String.fromCharCode(Kt(e, n)));
    return r.join("").replace(gt, "");
  },
  Nn = Ae
    ? function (e, a, t) {
        return Buffer.isBuffer(e)
          ? e.toString("utf16le", a, t).replace(gt, "")
          : Ns(e, a, t);
      }
    : Ns,
  Bs = function (e, a, t) {
    for (var r = [], n = a; n < a + t; ++n)
      r.push(("0" + e[n].toString(16)).slice(-2));
    return r.join("");
  },
  Yo = Ae
    ? function (e, a, t) {
        return Buffer.isBuffer(e) ? e.toString("hex", a, a + t) : Bs(e, a, t);
      }
    : Bs,
  Is = function (e, a, t) {
    for (var r = [], n = a; n < t; n++) r.push(String.fromCharCode(ka(e, n)));
    return r.join("");
  },
  pr = Ae
    ? function (a, t, r) {
        return Buffer.isBuffer(a) ? a.toString("utf8", t, r) : Is(a, t, r);
      }
    : Is,
  qo = function (e, a) {
    var t = Et(e, a);
    return t > 0 ? pr(e, a + 4, a + 4 + t - 1) : "";
  },
  Jo = qo,
  Zo = function (e, a) {
    var t = Et(e, a);
    return t > 0 ? pr(e, a + 4, a + 4 + t - 1) : "";
  },
  Qo = Zo,
  ei = function (e, a) {
    var t = 2 * Et(e, a);
    return t > 0 ? pr(e, a + 4, a + 4 + t - 1) : "";
  },
  ti = ei,
  ai = function (a, t) {
    var r = Et(a, t);
    return r > 0 ? Nn(a, t + 4, t + 4 + r) : "";
  },
  ri = ai,
  ni = function (e, a) {
    var t = Et(e, a);
    return t > 0 ? pr(e, a + 4, a + 4 + t) : "";
  },
  si = ni,
  oi = function (e, a) {
    return ml(e, a);
  },
  Pr = oi,
  ii = function (a) {
    return (
      Array.isArray(a) || (typeof Uint8Array < "u" && a instanceof Uint8Array)
    );
  };
Ae &&
  ((Jo = function (a, t) {
    if (!Buffer.isBuffer(a)) return qo(a, t);
    var r = a.readUInt32LE(t);
    return r > 0 ? a.toString("utf8", t + 4, t + 4 + r - 1) : "";
  }),
  (Qo = function (a, t) {
    if (!Buffer.isBuffer(a)) return Zo(a, t);
    var r = a.readUInt32LE(t);
    return r > 0 ? a.toString("utf8", t + 4, t + 4 + r - 1) : "";
  }),
  (ti = function (a, t) {
    if (!Buffer.isBuffer(a)) return ei(a, t);
    var r = 2 * a.readUInt32LE(t);
    return a.toString("utf16le", t + 4, t + 4 + r - 1);
  }),
  (ri = function (a, t) {
    if (!Buffer.isBuffer(a)) return ai(a, t);
    var r = a.readUInt32LE(t);
    return a.toString("utf16le", t + 4, t + 4 + r);
  }),
  (si = function (a, t) {
    if (!Buffer.isBuffer(a)) return ni(a, t);
    var r = a.readUInt32LE(t);
    return a.toString("utf8", t + 4, t + 4 + r);
  }),
  (Pr = function (a, t) {
    return Buffer.isBuffer(a) ? a.readDoubleLE(t) : oi(a, t);
  }),
  (ii = function (a) {
    return (
      Buffer.isBuffer(a) ||
      Array.isArray(a) ||
      (typeof Uint8Array < "u" && a instanceof Uint8Array)
    );
  }));
var ka = function (e, a) {
    return e[a];
  },
  Kt = function (e, a) {
    return e[a + 1] * 256 + e[a];
  },
  hl = function (e, a) {
    var t = e[a + 1] * 256 + e[a];
    return t < 32768 ? t : (65535 - t + 1) * -1;
  },
  Et = function (e, a) {
    return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
  },
  la = function (e, a) {
    return (e[a + 3] << 24) | (e[a + 2] << 16) | (e[a + 1] << 8) | e[a];
  },
  xl = function (e, a) {
    return (e[a] << 24) | (e[a + 1] << 16) | (e[a + 2] << 8) | e[a + 3];
  };
function $a(e, a) {
  var t = "",
    r,
    n,
    s = [],
    o,
    i,
    l,
    c;
  switch (a) {
    case "dbcs":
      if (((c = this.l), Ae && Buffer.isBuffer(this)))
        t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (l = 0; l < e; ++l)
          ((t += String.fromCharCode(Kt(this, c))), (c += 2));
      e *= 2;
      break;
    case "utf8":
      t = pr(this, this.l, this.l + e);
      break;
    case "utf16le":
      ((e *= 2), (t = Nn(this, this.l, this.l + e)));
      break;
    case "wstr":
      return $a.call(this, e, "dbcs");
    case "lpstr-ansi":
      ((t = Jo(this, this.l)), (e = 4 + Et(this, this.l)));
      break;
    case "lpstr-cp":
      ((t = Qo(this, this.l)), (e = 4 + Et(this, this.l)));
      break;
    case "lpwstr":
      ((t = ti(this, this.l)), (e = 4 + 2 * Et(this, this.l)));
      break;
    case "lpp4":
      ((e = 4 + Et(this, this.l)), (t = ri(this, this.l)), e & 2 && (e += 2));
      break;
    case "8lpp4":
      ((e = 4 + Et(this, this.l)),
        (t = si(this, this.l)),
        e & 3 && (e += 4 - (e & 3)));
      break;
    case "cstr":
      for (e = 0, t = ""; (o = ka(this, this.l + e++)) !== 0; ) s.push(gr(o));
      t = s.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (o = Kt(this, this.l + e)) !== 0; )
        (s.push(gr(o)), (e += 2));
      ((e += 2), (t = s.join("")));
      break;
    case "dbcs-cont":
      for (t = "", c = this.l, l = 0; l < e; ++l) {
        if (this.lens && this.lens.indexOf(c) !== -1)
          return (
            (o = ka(this, c)),
            (this.l = c + 1),
            (i = $a.call(this, e - l, o ? "dbcs-cont" : "sbcs-cont")),
            s.join("") + i
          );
        (s.push(gr(Kt(this, c))), (c += 2));
      }
      ((t = s.join("")), (e *= 2));
      break;
    case "cpstr":
    case "sbcs-cont":
      for (t = "", c = this.l, l = 0; l != e; ++l) {
        if (this.lens && this.lens.indexOf(c) !== -1)
          return (
            (o = ka(this, c)),
            (this.l = c + 1),
            (i = $a.call(this, e - l, o ? "dbcs-cont" : "sbcs-cont")),
            s.join("") + i
          );
        (s.push(gr(ka(this, c))), (c += 1));
      }
      t = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          return ((r = ka(this, this.l)), this.l++, r);
        case 2:
          return ((r = (a === "i" ? hl : Kt)(this, this.l)), (this.l += 2), r);
        case 4:
        case -4:
          return a === "i" || !(this[this.l + 3] & 128)
            ? ((r = (e > 0 ? la : xl)(this, this.l)), (this.l += 4), r)
            : ((n = Et(this, this.l)), (this.l += 4), n);
        case 8:
        case -8:
          if (a === "f")
            return (
              e == 8
                ? (n = Pr(this, this.l))
                : (n = Pr(
                    [
                      this[this.l + 7],
                      this[this.l + 6],
                      this[this.l + 5],
                      this[this.l + 4],
                      this[this.l + 3],
                      this[this.l + 2],
                      this[this.l + 1],
                      this[this.l + 0],
                    ],
                    0,
                  )),
              (this.l += 8),
              n
            );
          e = 8;
        case 16:
          t = Yo(this, this.l, e);
          break;
      }
  }
  return ((this.l += e), t);
}
var vl = function (e, a, t) {
    ((e[t] = a & 255),
      (e[t + 1] = (a >>> 8) & 255),
      (e[t + 2] = (a >>> 16) & 255),
      (e[t + 3] = (a >>> 24) & 255));
  },
  gl = function (e, a, t) {
    ((e[t] = a & 255),
      (e[t + 1] = (a >> 8) & 255),
      (e[t + 2] = (a >> 16) & 255),
      (e[t + 3] = (a >> 24) & 255));
  },
  _l = function (e, a, t) {
    ((e[t] = a & 255), (e[t + 1] = (a >>> 8) & 255));
  };
function Sl(e, a, t) {
  var r = 0,
    n = 0;
  if (t === "dbcs") {
    for (n = 0; n != a.length; ++n) _l(this, a.charCodeAt(n), this.l + 2 * n);
    r = 2 * a.length;
  } else if (t === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != a.length; ++n)
      this[this.l + n] = a.charCodeAt(n) & 255;
    r = a.length;
  } else if (t === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(a.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (t === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(a.length, e); ++n) {
      var o = a.charCodeAt(n);
      ((this[this.l++] = o & 255), (this[this.l++] = o >> 8));
    }
    for (; this.l < s; ) this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        ((r = 1), (this[this.l] = a & 255));
        break;
      case 2:
        ((r = 2),
          (this[this.l] = a & 255),
          (a >>>= 8),
          (this[this.l + 1] = a & 255));
        break;
      case 3:
        ((r = 3),
          (this[this.l] = a & 255),
          (a >>>= 8),
          (this[this.l + 1] = a & 255),
          (a >>>= 8),
          (this[this.l + 2] = a & 255));
        break;
      case 4:
        ((r = 4), vl(this, a, this.l));
        break;
      case 8:
        if (((r = 8), t === "f")) {
          ul(this, a, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        ((r = 4), gl(this, a, this.l));
        break;
    }
  return ((this.l += r), this);
}
function ci(e, a) {
  var t = Yo(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(a + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function tt(e, a) {
  ((e.l = a), (e.read_shift = $a), (e.chk = ci), (e.write_shift = Sl));
}
function mt(e, a) {
  e.l += a;
}
function qe(e) {
  var a = sa(e);
  return (tt(a, 0), a);
}
function Zt(e, a, t) {
  if (e) {
    var r, n, s;
    tt(e, e.l || 0);
    for (var o = e.length, i = 0, l = 0; e.l < o; ) {
      ((i = e.read_shift(1)),
        i & 128 && (i = (i & 127) + ((e.read_shift(1) & 127) << 7)));
      var c = Hr[i] || Hr[65535];
      for (r = e.read_shift(1), s = r & 127, n = 1; n < 4 && r & 128; ++n)
        s += ((r = e.read_shift(1)) & 127) << (7 * n);
      l = e.l + s;
      var p = c.f && c.f(e, s, t);
      if (((e.l = l), a(p, c, i))) return;
    }
  }
}
function ln() {
  var e = [],
    a = Ae ? 256 : 2048,
    t = function (c) {
      var p = qe(c);
      return (tt(p, 0), p);
    },
    r = t(a),
    n = function () {
      r &&
        (r.length > r.l && ((r = r.slice(0, r.l)), (r.l = r.length)),
        r.length > 0 && e.push(r),
        (r = null));
    },
    s = function (c) {
      return r && c < r.length - r.l ? r : (n(), (r = t(Math.max(c + 1, a))));
    },
    o = function () {
      return (n(), ta(e));
    },
    i = function (c) {
      (n(), (r = c), r.l == null && (r.l = r.length), s(a));
    };
  return { next: s, push: i, end: o, _bufs: e };
}
function Ka(e, a, t) {
  var r = at(e);
  if (
    (a.s
      ? (r.cRel && (r.c += a.s.c), r.rRel && (r.r += a.s.r))
      : (r.cRel && (r.c += a.c), r.rRel && (r.r += a.r)),
    !t || t.biff < 12)
  ) {
    for (; r.c >= 256; ) r.c -= 256;
    for (; r.r >= 65536; ) r.r -= 65536;
  }
  return r;
}
function Rs(e, a, t) {
  var r = at(e);
  return ((r.s = Ka(r.s, a.s, t)), (r.e = Ka(r.e, a.s, t)), r);
}
function Ya(e, a) {
  if (e.cRel && e.c < 0) for (e = at(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = at(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var t = _e(e);
  return (
    !e.cRel && e.cRel != null && (t = El(t)),
    !e.rRel && e.rRel != null && (t = wl(t)),
    t
  );
}
function Jr(e, a) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? "" : "$") +
        Je(e.s.c) +
        ":" +
        (e.e.cRel ? "" : "$") +
        Je(e.e.c)
    : e.s.c == 0 &&
        !e.s.cRel &&
        e.e.c == (a.biff >= 12 ? 16383 : 255) &&
        !e.e.cRel
      ? (e.s.rRel ? "" : "$") +
        rt(e.s.r) +
        ":" +
        (e.e.rRel ? "" : "$") +
        rt(e.e.r)
      : Ya(e.s, a.biff) + ":" + Ya(e.e, a.biff);
}
function Bn(e) {
  return parseInt(Tl(e), 10) - 1;
}
function rt(e) {
  return "" + (e + 1);
}
function wl(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Tl(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function In(e) {
  for (var a = kl(e), t = 0, r = 0; r !== a.length; ++r)
    t = 26 * t + a.charCodeAt(r) - 64;
  return t - 1;
}
function Je(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    a = String.fromCharCode(((e - 1) % 26) + 65) + a;
  return a;
}
function El(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function kl(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Al(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function vt(e) {
  for (var a = 0, t = 0, r = 0; r < e.length; ++r) {
    var n = e.charCodeAt(r);
    n >= 48 && n <= 57
      ? (a = 10 * a + (n - 48))
      : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
  }
  return { c: t - 1, r: a - 1 };
}
function _e(e) {
  for (var a = e.c + 1, t = ""; a; a = ((a - 1) / 26) | 0)
    t = String.fromCharCode(((a - 1) % 26) + 65) + t;
  return t + (e.r + 1);
}
function Oa(e) {
  var a = e.indexOf(":");
  return a == -1
    ? { s: vt(e), e: vt(e) }
    : { s: vt(e.slice(0, a)), e: vt(e.slice(a + 1)) };
}
function Ce(e, a) {
  return typeof a > "u" || typeof a == "number"
    ? Ce(e.s, e.e)
    : (typeof e != "string" && (e = _e(e)),
      typeof a != "string" && (a = _e(a)),
      e == a ? e : e + ":" + a);
}
function He(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    t = 0,
    r = 0,
    n = 0,
    s = e.length;
  for (t = 0; r < s && !((n = e.charCodeAt(r) - 64) < 1 || n > 26); ++r)
    t = 26 * t + n;
  for (
    a.s.c = --t, t = 0;
    r < s && !((n = e.charCodeAt(r) - 48) < 0 || n > 9);
    ++r
  )
    t = 10 * t + n;
  if (((a.s.r = --t), r === s || n != 10))
    return ((a.e.c = a.s.c), (a.e.r = a.s.r), a);
  for (++r, t = 0; r != s && !((n = e.charCodeAt(r) - 64) < 1 || n > 26); ++r)
    t = 26 * t + n;
  for (
    a.e.c = --t, t = 0;
    r != s && !((n = e.charCodeAt(r) - 48) < 0 || n > 9);
    ++r
  )
    t = 10 * t + n;
  return ((a.e.r = --t), a);
}
function Ps(e, a) {
  var t = e.t == "d" && a instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Dt(e.z, t ? _t(a) : a));
    } catch {}
  try {
    return (e.w = Dt((e.XF || {}).numFmtId || (t ? 14 : 0), t ? _t(a) : a));
  } catch {
    return "" + a;
  }
}
function Jt(e, a, t) {
  return e == null || e.t == null || e.t == "z"
    ? ""
    : e.w !== void 0
      ? e.w
      : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF),
        e.t == "e" ? Sa[e.v] || e.v : a == null ? Ps(e, e.v) : Ps(e, a));
}
function ia(e, a) {
  var t = a && a.sheet ? a.sheet : "Sheet1",
    r = {};
  return ((r[t] = e), { SheetNames: [t], Sheets: r });
}
function li(e, a, t) {
  var r = t || {},
    n = e ? Array.isArray(e) : r.dense,
    s = e || (n ? [] : {}),
    o = 0,
    i = 0;
  if (s && r.origin != null) {
    if (typeof r.origin == "number") o = r.origin;
    else {
      var l = typeof r.origin == "string" ? vt(r.origin) : r.origin;
      ((o = l.r), (i = l.c));
    }
    s["!ref"] || (s["!ref"] = "A1:A1");
  }
  var c = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (s["!ref"]) {
    var p = He(s["!ref"]);
    ((c.s.c = p.s.c),
      (c.s.r = p.s.r),
      (c.e.c = Math.max(c.e.c, p.e.c)),
      (c.e.r = Math.max(c.e.r, p.e.r)),
      o == -1 && (c.e.r = o = p.e.r + 1));
  }
  for (var m = 0; m != a.length; ++m)
    if (a[m]) {
      if (!Array.isArray(a[m]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var f = 0; f != a[m].length; ++f)
        if (!(typeof a[m][f] > "u")) {
          var h = { v: a[m][f] },
            x = o + m,
            d = i + f;
          if (
            (c.s.r > x && (c.s.r = x),
            c.s.c > d && (c.s.c = d),
            c.e.r < x && (c.e.r = x),
            c.e.c < d && (c.e.c = d),
            a[m][f] &&
              typeof a[m][f] == "object" &&
              !Array.isArray(a[m][f]) &&
              !(a[m][f] instanceof Date))
          )
            h = a[m][f];
          else if (
            (Array.isArray(h.v) && ((h.f = a[m][f][1]), (h.v = h.v[0])),
            h.v === null)
          )
            if (h.f) h.t = "n";
            else if (r.nullError) ((h.t = "e"), (h.v = 0));
            else if (r.sheetStubs) h.t = "z";
            else continue;
          else
            typeof h.v == "number"
              ? (h.t = "n")
              : typeof h.v == "boolean"
                ? (h.t = "b")
                : h.v instanceof Date
                  ? ((h.z = r.dateNF || we[14]),
                    r.cellDates
                      ? ((h.t = "d"), (h.w = Dt(h.z, _t(h.v))))
                      : ((h.t = "n"), (h.v = _t(h.v)), (h.w = Dt(h.z, h.v))))
                  : (h.t = "s");
          if (n)
            (s[x] || (s[x] = []),
              s[x][d] && s[x][d].z && (h.z = s[x][d].z),
              (s[x][d] = h));
          else {
            var u = _e({ c: d, r: x });
            (s[u] && s[u].z && (h.z = s[u].z), (s[u] = h));
          }
        }
    }
  return (c.s.c < 1e7 && (s["!ref"] = Ce(c)), s);
}
function La(e, a) {
  return li(null, e, a);
}
function bl(e) {
  return e.read_shift(4, "i");
}
function ft(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function Cl(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Rn(e, a) {
  var t = e.l,
    r = e.read_shift(1),
    n = ft(e),
    s = [],
    o = { t: n, h: n };
  if (r & 1) {
    for (var i = e.read_shift(4), l = 0; l != i; ++l) s.push(Cl(e));
    o.r = s;
  } else o.r = [{ ich: 0, ifnt: 0 }];
  return ((e.l = t + a), o);
}
var yl = Rn;
function Nt(e) {
  var a = e.read_shift(4),
    t = e.read_shift(2);
  return ((t += e.read_shift(1) << 16), e.l++, { c: a, iStyleRef: t });
}
function ga(e) {
  var a = e.read_shift(2);
  return ((a += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: a });
}
var Fl = ft;
function Pn(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var Dl = ft,
  pn = Pn;
function On(e) {
  var a = e.slice(e.l, e.l + 4),
    t = a[0] & 1,
    r = a[0] & 2;
  e.l += 4;
  var n =
    r === 0 ? Pr([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : la(a, 0) >> 2;
  return t ? n / 100 : n;
}
function pi(e) {
  var a = { s: {}, e: {} };
  return (
    (a.s.r = e.read_shift(4)),
    (a.e.r = e.read_shift(4)),
    (a.s.c = e.read_shift(4)),
    (a.e.c = e.read_shift(4)),
    a
  );
}
var _a = pi;
function pt(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Nl(e) {
  var a = {},
    t = e.read_shift(1),
    r = t >>> 1,
    n = e.read_shift(1),
    s = e.read_shift(2, "i"),
    o = e.read_shift(1),
    i = e.read_shift(1),
    l = e.read_shift(1);
  switch ((e.l++, r)) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = n;
      var c = fa[n];
      c && (a.rgb = or(c));
      break;
    case 2:
      a.rgb = or([o, i, l]);
      break;
    case 3:
      a.theme = n;
      break;
  }
  return (s != 0 && (a.tint = s > 0 ? s / 32767 : s / 32768), a);
}
function Bl(e) {
  var a = e.read_shift(1);
  e.l++;
  var t = {
    fBold: a & 1,
    fItalic: a & 2,
    fUnderline: a & 4,
    fStrikeout: a & 8,
    fOutline: a & 16,
    fShadow: a & 32,
    fCondense: a & 64,
    fExtend: a & 128,
  };
  return t;
}
function di(e, a) {
  var t = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" },
    r = e.read_shift(4);
  switch (r) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return t[e.read_shift(4)] || "";
  }
  if (r > 400) throw new Error("Unsupported Clipboard: " + r.toString(16));
  return ((e.l -= 4), e.read_shift(0, a == 1 ? "lpstr" : "lpwstr"));
}
function Il(e) {
  return di(e, 1);
}
function Rl(e) {
  return di(e, 2);
}
var Ln = 2,
  Tt = 3,
  Sr = 11,
  Os = 12,
  Or = 19,
  wr = 64,
  Pl = 65,
  Ol = 71,
  Ll = 4108,
  Ml = 4126,
  Qe = 80,
  fi = 81,
  Ul = [Qe, fi],
  jl = {
    1: { n: "CodePage", t: Ln },
    2: { n: "Category", t: Qe },
    3: { n: "PresentationFormat", t: Qe },
    4: { n: "ByteCount", t: Tt },
    5: { n: "LineCount", t: Tt },
    6: { n: "ParagraphCount", t: Tt },
    7: { n: "SlideCount", t: Tt },
    8: { n: "NoteCount", t: Tt },
    9: { n: "HiddenCount", t: Tt },
    10: { n: "MultimediaClipCount", t: Tt },
    11: { n: "ScaleCrop", t: Sr },
    12: { n: "HeadingPairs", t: Ll },
    13: { n: "TitlesOfParts", t: Ml },
    14: { n: "Manager", t: Qe },
    15: { n: "Company", t: Qe },
    16: { n: "LinksUpToDate", t: Sr },
    17: { n: "CharacterCount", t: Tt },
    19: { n: "SharedDoc", t: Sr },
    22: { n: "HyperlinksChanged", t: Sr },
    23: { n: "AppVersion", t: Tt, p: "version" },
    24: { n: "DigSig", t: Pl },
    26: { n: "ContentType", t: Qe },
    27: { n: "ContentStatus", t: Qe },
    28: { n: "Language", t: Qe },
    29: { n: "Version", t: Qe },
    255: {},
    2147483648: { n: "Locale", t: Or },
    2147483651: { n: "Behavior", t: Or },
    1919054434: {},
  },
  Hl = {
    1: { n: "CodePage", t: Ln },
    2: { n: "Title", t: Qe },
    3: { n: "Subject", t: Qe },
    4: { n: "Author", t: Qe },
    5: { n: "Keywords", t: Qe },
    6: { n: "Comments", t: Qe },
    7: { n: "Template", t: Qe },
    8: { n: "LastAuthor", t: Qe },
    9: { n: "RevNumber", t: Qe },
    10: { n: "EditTime", t: wr },
    11: { n: "LastPrinted", t: wr },
    12: { n: "CreatedDate", t: wr },
    13: { n: "ModifiedDate", t: wr },
    14: { n: "PageCount", t: Tt },
    15: { n: "WordCount", t: Tt },
    16: { n: "CharCount", t: Tt },
    17: { n: "Thumbnail", t: Ol },
    18: { n: "Application", t: Qe },
    19: { n: "DocSecurity", t: Tt },
    255: {},
    2147483648: { n: "Locale", t: Or },
    2147483651: { n: "Behavior", t: Or },
    1919054434: {},
  },
  Ls = {
    1: "US",
    2: "CA",
    3: "",
    7: "RU",
    20: "EG",
    30: "GR",
    31: "NL",
    32: "BE",
    33: "FR",
    34: "ES",
    36: "HU",
    39: "IT",
    41: "CH",
    43: "AT",
    44: "GB",
    45: "DK",
    46: "SE",
    47: "NO",
    48: "PL",
    49: "DE",
    52: "MX",
    55: "BR",
    61: "AU",
    64: "NZ",
    66: "TH",
    81: "JP",
    82: "KR",
    84: "VN",
    86: "CN",
    90: "TR",
    105: "JS",
    213: "DZ",
    216: "MA",
    218: "LY",
    351: "PT",
    354: "IS",
    358: "FI",
    420: "CZ",
    886: "TW",
    961: "LB",
    962: "JO",
    963: "SY",
    964: "IQ",
    965: "KW",
    966: "SA",
    971: "AE",
    972: "IL",
    974: "QA",
    981: "IR",
    65535: "US",
  },
  Gl = [
    null,
    "solid",
    "mediumGray",
    "darkGray",
    "lightGray",
    "darkHorizontal",
    "darkVertical",
    "darkDown",
    "darkUp",
    "darkGrid",
    "darkTrellis",
    "lightHorizontal",
    "lightVertical",
    "lightDown",
    "lightUp",
    "lightGrid",
    "lightTrellis",
    "gray125",
    "gray0625",
  ];
function Vl(e) {
  return e.map(function (a) {
    return [(a >> 16) & 255, (a >> 8) & 255, a & 255];
  });
}
var Wl = Vl([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215,
    16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128,
    8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164,
    13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960,
    65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113,
    10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232,
    16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056,
    3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  fa = at(Wl),
  Sa = {
    0: "#NULL!",
    7: "#DIV/0!",
    15: "#VALUE!",
    23: "#REF!",
    29: "#NAME?",
    36: "#NUM!",
    42: "#N/A",
    43: "#GETTING_DATA",
    255: "#WTF?",
  },
  mi = {
    "#NULL!": 0,
    "#DIV/0!": 7,
    "#VALUE!": 15,
    "#REF!": 23,
    "#NAME?": 29,
    "#NUM!": 36,
    "#N/A": 42,
    "#GETTING_DATA": 43,
    "#WTF?": 255,
  },
  Ms = {
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
      "workbooks",
    "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
    "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
      "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
      "sheets",
    "application/vnd.ms-excel.worksheet": "sheets",
    "application/vnd.ms-excel.binIndexWs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
      "charts",
    "application/vnd.ms-excel.chartsheet": "charts",
    "application/vnd.ms-excel.macrosheet+xml": "macros",
    "application/vnd.ms-excel.macrosheet": "macros",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
      "dialogs",
    "application/vnd.ms-excel.dialogsheet": "dialogs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":
      "strs",
    "application/vnd.ms-excel.sharedStrings": "strs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":
      "styles",
    "application/vnd.ms-excel.styles": "styles",
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml":
      "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml":
      "extprops",
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
      "comments",
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
    "application/vnd.ms-excel.person+xml": "people",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
      "metadata",
    "application/vnd.ms-excel.sheetMetadata": "metadata",
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
    "application/vnd.ms-office.chartstyle+xml": "TODO",
    "application/vnd.ms-office.chartex+xml": "TODO",
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
      "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
      "TODO",
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",
    "application/vnd.ms-excel.attachedToolbars": "TODO",
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
      "TODO",
    "application/vnd.ms-excel.externalLink": "links",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
      "links",
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
      "TODO",
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
      "TODO",
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
      "TODO",
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
      "TODO",
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",
    "application/vnd.ms-excel.wsSortMap": "TODO",
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
    "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
    "application/vnd.ms-excel.Timeline+xml": "TODO",
    "application/vnd.ms-excel.TimelineCache+xml": "TODO",
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "TODO",
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
      "TODO",
    "application/vnd.ms-excel.controlproperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",
    "application/vnd.ms-excel.Survey+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
    "image/png": "TODO",
    sheet: "js",
  };
function zl() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: "",
  };
}
function Xl(e) {
  var a = zl();
  if (!e || !e.match) return a;
  var t = {};
  if (
    ((e.match(ut) || []).forEach(function (r) {
      var n = ge(r);
      switch (n[0].replace(el, "<")) {
        case "<?xml":
          break;
        case "<Types":
          a.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
          break;
        case "<Default":
          t[n.Extension] = n.ContentType;
          break;
        case "<Override":
          a[Ms[n.ContentType]] !== void 0 &&
            a[Ms[n.ContentType]].push(n.PartName);
          break;
      }
    }),
    a.xmlns !== dl.CT)
  )
    throw new Error("Unknown Namespace: " + a.xmlns);
  return (
    (a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : ""),
    (a.sst = a.strs.length > 0 ? a.strs[0] : ""),
    (a.style = a.styles.length > 0 ? a.styles[0] : ""),
    (a.defaults = t),
    delete a.calcchains,
    a
  );
}
var Aa = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET:
    "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS:
    "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS:
    "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT:
    "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
};
function dn(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function qa(e, a) {
  var t = { "!id": {} };
  if (!e) return t;
  a.charAt(0) !== "/" && (a = "/" + a);
  var r = {};
  return (
    (e.match(ut) || []).forEach(function (n) {
      var s = ge(n);
      if (s[0] === "<Relationship") {
        var o = {};
        ((o.Type = s.Type),
          (o.Target = s.Target),
          (o.Id = s.Id),
          s.TargetMode && (o.TargetMode = s.TargetMode));
        var i = s.TargetMode === "External" ? s.Target : Va(s.Target, a);
        ((t[i] = o), (r[s.Id] = o));
      }
    }),
    (t["!id"] = r),
    t
  );
}
var $l = "application/vnd.oasis.opendocument.spreadsheet";
function Kl(e, a) {
  for (var t = Dn(e), r, n; (r = nr.exec(t)); )
    switch (r[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (((n = ge(r[0], !1)), n.path == "/" && n.type !== $l))
          throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (a && a.WTF) throw r;
    }
}
var Ja = [
    ["cp:category", "Category"],
    ["cp:contentStatus", "ContentStatus"],
    ["cp:keywords", "Keywords"],
    ["cp:lastModifiedBy", "LastAuthor"],
    ["cp:lastPrinted", "LastPrinted"],
    ["cp:revision", "RevNumber"],
    ["cp:version", "Version"],
    ["dc:creator", "Author"],
    ["dc:description", "Comments"],
    ["dc:identifier", "Identifier"],
    ["dc:language", "Language"],
    ["dc:subject", "Subject"],
    ["dc:title", "Title"],
    ["dcterms:created", "CreatedDate", "date"],
    ["dcterms:modified", "ModifiedDate", "date"],
  ],
  Yl = (function () {
    for (var e = new Array(Ja.length), a = 0; a < Ja.length; ++a) {
      var t = Ja[a],
        r =
          "(?:" +
          t[0].slice(0, t[0].indexOf(":")) +
          ":)" +
          t[0].slice(t[0].indexOf(":") + 1);
      e[a] = new RegExp("<" + r + "[^>]*>([\\s\\S]*?)</" + r + ">");
    }
    return e;
  })();
function ui(e) {
  var a = {};
  e = Ie(e);
  for (var t = 0; t < Ja.length; ++t) {
    var r = Ja[t],
      n = e.match(Yl[t]);
    (n != null && n.length > 0 && (a[r[1]] = ye(n[1])),
      r[2] === "date" && a[r[1]] && (a[r[1]] = et(a[r[1]])));
  }
  return a;
}
var ql = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"],
];
function hi(e, a, t, r) {
  var n = [];
  if (typeof e == "string") n = ys(e, r);
  else
    for (var s = 0; s < e.length; ++s)
      n = n.concat(
        e[s].map(function (p) {
          return { v: p };
        }),
      );
  var o =
      typeof a == "string"
        ? ys(a, r).map(function (p) {
            return p.v;
          })
        : a,
    i = 0,
    l = 0;
  if (o.length > 0)
    for (var c = 0; c !== n.length; c += 2) {
      switch (((l = +n[c + 1].v), n[c].v)) {
        case "Worksheets":
        case "工作表":
        case "Листы":
        case "أوراق العمل":
        case "ワークシート":
        case "גליונות עבודה":
        case "Arbeitsblätter":
        case "Çalışma Sayfaları":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de cálculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de cálculo":
        case "Werkbladen":
          ((t.Worksheets = l), (t.SheetNames = o.slice(i, i + l)));
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          ((t.NamedRanges = l), (t.DefinedNames = o.slice(i, i + l)));
          break;
        case "Charts":
        case "Diagramme":
          ((t.Chartsheets = l), (t.ChartNames = o.slice(i, i + l)));
          break;
      }
      i += l;
    }
}
function Jl(e, a, t) {
  var r = {};
  return (
    a || (a = {}),
    (e = Ie(e)),
    ql.forEach(function (n) {
      var s = (e.match(rr(n[0])) || [])[1];
      switch (n[2]) {
        case "string":
          s && (a[n[1]] = ye(s));
          break;
        case "bool":
          a[n[1]] = s === "true";
          break;
        case "raw":
          var o = e.match(
            new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">"),
          );
          o && o.length > 0 && (r[n[1]] = o[1]);
          break;
      }
    }),
    r.HeadingPairs &&
      r.TitlesOfParts &&
      hi(r.HeadingPairs, r.TitlesOfParts, a, t),
    a
  );
}
var Zl = /<[^>]+>[^<]*/g;
function Ql(e, a) {
  var t = {},
    r = "",
    n = e.match(Zl);
  if (n)
    for (var s = 0; s != n.length; ++s) {
      var o = n[s],
        i = ge(o);
      switch (i[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          r = ye(i.name);
          break;
        case "</property>":
          r = null;
          break;
        default:
          if (o.indexOf("<vt:") === 0) {
            var l = o.split(">"),
              c = l[0].slice(4),
              p = l[1];
            switch (c) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                t[r] = ye(p);
                break;
              case "bool":
                t[r] = Oe(p);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                t[r] = parseInt(p, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                t[r] = parseFloat(p);
                break;
              case "filetime":
              case "date":
                t[r] = et(p);
                break;
              case "cy":
              case "error":
                t[r] = ye(p);
                break;
              default:
                if (c.slice(-1) == "/") break;
                a.WTF &&
                  typeof console < "u" &&
                  console.warn("Unexpected", o, c, l);
            }
          } else if (o.slice(0, 2) !== "</") {
            if (a.WTF) throw new Error(o);
          }
      }
    }
  return t;
}
var ep = {
    Title: "Title",
    Subject: "Subject",
    Author: "Author",
    Keywords: "Keywords",
    Comments: "Description",
    LastAuthor: "LastAuthor",
    RevNumber: "Revision",
    Application: "AppName",
    LastPrinted: "LastPrinted",
    CreatedDate: "Created",
    ModifiedDate: "LastSaved",
    Category: "Category",
    Manager: "Manager",
    Company: "Company",
    AppVersion: "Version",
    ContentStatus: "ContentStatus",
    Identifier: "Identifier",
    Language: "Language",
  },
  Zr;
function tp(e, a, t) {
  (Zr || (Zr = Cn(ep)), (a = Zr[a] || a), (e[a] = t));
}
function Mn(e) {
  var a = e.read_shift(4),
    t = e.read_shift(4);
  return new Date(((t / 1e7) * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3)
    .toISOString()
    .replace(/\.000/, "");
}
function xi(e, a, t) {
  var r = e.l,
    n = e.read_shift(0, "lpstr-cp");
  if (t) for (; (e.l - r) & 3; ) ++e.l;
  return n;
}
function vi(e, a, t) {
  var r = e.read_shift(0, "lpwstr");
  return r;
}
function gi(e, a, t) {
  return a === 31 ? vi(e) : xi(e, a, t);
}
function fn(e, a, t) {
  return gi(e, a, t === !1 ? 0 : 4);
}
function ap(e, a) {
  if (!a) throw new Error("VtUnalignedString must have positive length");
  return gi(e, a, 0);
}
function rp(e) {
  for (var a = e.read_shift(4), t = [], r = 0; r != a; ++r) {
    var n = e.l;
    ((t[r] = e.read_shift(0, "lpwstr").replace(gt, "")),
      (e.l - n) & 2 && (e.l += 2));
  }
  return t;
}
function np(e) {
  for (var a = e.read_shift(4), t = [], r = 0; r != a; ++r)
    t[r] = e.read_shift(0, "lpstr-cp").replace(gt, "");
  return t;
}
function sp(e) {
  var a = e.l,
    t = Lr(e, fi);
  e[e.l] == 0 && e[e.l + 1] == 0 && (e.l - a) & 2 && (e.l += 2);
  var r = Lr(e, Tt);
  return [t, r];
}
function op(e) {
  for (var a = e.read_shift(4), t = [], r = 0; r < a / 2; ++r) t.push(sp(e));
  return t;
}
function Us(e, a) {
  for (var t = e.read_shift(4), r = {}, n = 0; n != t; ++n) {
    var s = e.read_shift(4),
      o = e.read_shift(4);
    ((r[s] = e
      .read_shift(o, a === 1200 ? "utf16le" : "utf8")
      .replace(gt, "")
      .replace(Ga, "!")),
      a === 1200 && o % 2 && (e.l += 2));
  }
  return (e.l & 3 && (e.l = (e.l >> 3) << 2), r);
}
function _i(e) {
  var a = e.read_shift(4),
    t = e.slice(e.l, e.l + a);
  return ((e.l += a), (a & 3) > 0 && (e.l += (4 - (a & 3)) & 3), t);
}
function ip(e) {
  var a = {};
  return (
    (a.Size = e.read_shift(4)),
    (e.l += a.Size + 3 - ((a.Size - 1) % 4)),
    a
  );
}
function Lr(e, a, t) {
  var r = e.read_shift(2),
    n,
    s = t || {};
  if (
    ((e.l += 2),
    a !== Os &&
      r !== a &&
      Ul.indexOf(a) === -1 &&
      !((a & 65534) == 4126 && (r & 65534) == 4126))
  )
    throw new Error("Expected type " + a + " saw " + r);
  switch (a === Os ? r : a) {
    case 2:
      return ((n = e.read_shift(2, "i")), s.raw || (e.l += 2), n);
    case 3:
      return ((n = e.read_shift(4, "i")), n);
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return ((n = e.read_shift(4)), n);
    case 30:
      return xi(e, r, 4).replace(gt, "");
    case 31:
      return vi(e);
    case 64:
      return Mn(e);
    case 65:
      return _i(e);
    case 71:
      return ip(e);
    case 80:
      return fn(e, r, !s.raw).replace(gt, "");
    case 81:
      return ap(e, r).replace(gt, "");
    case 4108:
      return op(e);
    case 4126:
    case 4127:
      return r == 4127 ? rp(e) : np(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + r);
  }
}
function js(e, a) {
  var t = e.l,
    r = e.read_shift(4),
    n = e.read_shift(4),
    s = [],
    o = 0,
    i = 0,
    l = -1,
    c = {};
  for (o = 0; o != n; ++o) {
    var p = e.read_shift(4),
      m = e.read_shift(4);
    s[o] = [p, m + t];
  }
  s.sort(function (B, w) {
    return B[1] - w[1];
  });
  var f = {};
  for (o = 0; o != n; ++o) {
    if (e.l !== s[o][1]) {
      var h = !0;
      if (o > 0 && a)
        switch (a[s[o - 1][0]].t) {
          case 2:
            e.l + 2 === s[o][1] && ((e.l += 2), (h = !1));
            break;
          case 80:
            e.l <= s[o][1] && ((e.l = s[o][1]), (h = !1));
            break;
          case 4108:
            e.l <= s[o][1] && ((e.l = s[o][1]), (h = !1));
            break;
        }
      if (((!a || o == 0) && e.l <= s[o][1] && ((h = !1), (e.l = s[o][1])), h))
        throw new Error(
          "Read Error: Expected address " + s[o][1] + " at " + e.l + " :" + o,
        );
    }
    if (a) {
      var x = a[s[o][0]];
      if (
        ((f[x.n] = Lr(e, x.t, { raw: !0 })),
        x.p === "version" &&
          (f[x.n] =
            String(f[x.n] >> 16) +
            "." +
            ("0000" + String(f[x.n] & 65535)).slice(-4)),
        x.n == "CodePage")
      )
        switch (f[x.n]) {
          case 0:
            f[x.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            Pt((i = (f[x.n] >>> 0) & 65535));
            break;
          default:
            throw new Error("Unsupported CodePage: " + f[x.n]);
        }
    } else if (s[o][0] === 1) {
      if (((i = f.CodePage = Lr(e, Ln)), Pt(i), l !== -1)) {
        var d = e.l;
        ((e.l = s[l][1]), (c = Us(e, i)), (e.l = d));
      }
    } else if (s[o][0] === 0) {
      if (i === 0) {
        ((l = o), (e.l = s[o + 1][1]));
        continue;
      }
      c = Us(e, i);
    } else {
      var u = c[s[o][0]],
        A;
      switch (e[e.l]) {
        case 65:
          ((e.l += 4), (A = _i(e)));
          break;
        case 30:
          ((e.l += 4), (A = fn(e, e[e.l - 4]).replace(/\u0000+$/, "")));
          break;
        case 31:
          ((e.l += 4), (A = fn(e, e[e.l - 4]).replace(/\u0000+$/, "")));
          break;
        case 3:
          ((e.l += 4), (A = e.read_shift(4, "i")));
          break;
        case 19:
          ((e.l += 4), (A = e.read_shift(4)));
          break;
        case 5:
          ((e.l += 4), (A = e.read_shift(8, "f")));
          break;
        case 11:
          ((e.l += 4), (A = Ge(e, 4)));
          break;
        case 64:
          ((e.l += 4), (A = et(Mn(e))));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      f[u] = A;
    }
  }
  return ((e.l = t + r), f);
}
function Hs(e, a, t) {
  var r = e.content;
  if (!r) return {};
  tt(r, 0);
  var n,
    s,
    o,
    i,
    l = 0;
  (r.chk("feff", "Byte Order: "), r.read_shift(2));
  var c = r.read_shift(4),
    p = r.read_shift(16);
  if (p !== be.utils.consts.HEADER_CLSID && p !== t)
    throw new Error("Bad PropertySet CLSID " + p);
  if (((n = r.read_shift(4)), n !== 1 && n !== 2))
    throw new Error("Unrecognized #Sets: " + n);
  if (((s = r.read_shift(16)), (i = r.read_shift(4)), n === 1 && i !== r.l))
    throw new Error("Length mismatch: " + i + " !== " + r.l);
  n === 2 && ((o = r.read_shift(16)), (l = r.read_shift(4)));
  var m = js(r, a),
    f = { SystemIdentifier: c };
  for (var h in m) f[h] = m[h];
  if (((f.FMTID = s), n === 1)) return f;
  if ((l - r.l == 2 && (r.l += 2), r.l !== l))
    throw new Error("Length mismatch 2: " + r.l + " !== " + l);
  var x;
  try {
    x = js(r, null);
  } catch {}
  for (h in x) f[h] = x[h];
  return ((f.FMTID = [s, o]), f);
}
function Qt(e, a) {
  return (e.read_shift(a), null);
}
function cp(e, a, t) {
  for (var r = [], n = e.l + a; e.l < n; ) r.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return r;
}
function Ge(e, a) {
  return e.read_shift(a) === 1;
}
function $e(e) {
  return e.read_shift(2, "u");
}
function Si(e, a) {
  return cp(e, a, $e);
}
function lp(e) {
  var a = e.read_shift(1),
    t = e.read_shift(1);
  return t === 1 ? a : a === 1;
}
function dr(e, a, t) {
  var r = e.read_shift(t && t.biff >= 12 ? 2 : 1),
    n = "sbcs-cont";
  if ((t && t.biff >= 8, !t || t.biff == 8)) {
    var s = e.read_shift(1);
    s && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var o = r ? e.read_shift(r, n) : "";
  return o;
}
function pp(e) {
  var a = e.read_shift(2),
    t = e.read_shift(1),
    r = t & 4,
    n = t & 8,
    s = 1 + (t & 1),
    o = 0,
    i,
    l = {};
  (n && (o = e.read_shift(2)), r && (i = e.read_shift(4)));
  var c = s == 2 ? "dbcs-cont" : "sbcs-cont",
    p = a === 0 ? "" : e.read_shift(a, c);
  return (
    n && (e.l += 4 * o),
    r && (e.l += i),
    (l.t = p),
    n || ((l.raw = "<t>" + l.t + "</t>"), (l.r = l.t)),
    l
  );
}
function ha(e, a, t) {
  var r;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(a, "cpstr");
    if (t.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return (
    n === 0
      ? (r = e.read_shift(a, "sbcs-cont"))
      : (r = e.read_shift(a, "dbcs-cont")),
    r
  );
}
function fr(e, a, t) {
  var r = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return r === 0 ? (e.l++, "") : ha(e, r, t);
}
function wa(e, a, t) {
  if (t.biff > 5) return fr(e, a, t);
  var r = e.read_shift(1);
  return r === 0
    ? (e.l++, "")
    : e.read_shift(r, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function dp(e) {
  var a = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return ((e.l += 2), [a, t]);
}
function fp(e) {
  var a = e.read_shift(4),
    t = e.l,
    r = !1;
  a > 24 &&
    ((e.l += a - 24),
    e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (r = !0),
    (e.l = t));
  var n = e.read_shift((r ? a - 24 : a) >> 1, "utf16le").replace(gt, "");
  return (r && (e.l += 24), n);
}
function mp(e) {
  for (var a = e.read_shift(2), t = ""; a-- > 0; ) t += "../";
  var r = e.read_shift(0, "lpstr-ansi");
  if (((e.l += 2), e.read_shift(2) != 57005))
    throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0) return t + r.replace(/\\/g, "/");
  var s = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var o = e.read_shift(s >> 1, "utf16le").replace(gt, "");
  return t + o;
}
function up(e, a) {
  var t = e.read_shift(16);
  switch (t) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return fp(e);
    case "0303000000000000c000000000000046":
      return mp(e);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function Tr(e) {
  var a = e.read_shift(4),
    t = a > 0 ? e.read_shift(a, "utf16le").replace(gt, "") : "";
  return t;
}
function hp(e, a) {
  var t = e.l + a,
    r = e.read_shift(4);
  if (r !== 2) throw new Error("Unrecognized streamVersion: " + r);
  var n = e.read_shift(2);
  e.l += 2;
  var s,
    o,
    i,
    l,
    c = "",
    p,
    m;
  (n & 16 && (s = Tr(e, t - e.l)),
    n & 128 && (o = Tr(e, t - e.l)),
    (n & 257) === 257 && (i = Tr(e, t - e.l)),
    (n & 257) === 1 && (l = up(e, t - e.l)),
    n & 8 && (c = Tr(e, t - e.l)),
    n & 32 && (p = e.read_shift(16)),
    n & 64 && (m = Mn(e)),
    (e.l = t));
  var f = o || i || l || "";
  (f && c && (f += "#" + c),
    f || (f = "#" + c),
    n & 2 && f.charAt(0) == "/" && f.charAt(1) != "/" && (f = "file://" + f));
  var h = { Target: f };
  return (p && (h.guid = p), m && (h.time = m), s && (h.Tooltip = s), h);
}
function wi(e) {
  var a = e.read_shift(1),
    t = e.read_shift(1),
    r = e.read_shift(1),
    n = e.read_shift(1);
  return [a, t, r, n];
}
function Ti(e, a) {
  var t = wi(e);
  return ((t[3] = 0), t);
}
function Xt(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(2);
  return { r: a, c: t, ixfe: r };
}
function xp(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2);
  return ((e.l += 8), { type: a, flags: t });
}
function vp(e, a, t) {
  return a === 0 ? "" : wa(e, a, t);
}
function gp(e, a, t) {
  var r = t.biff > 8 ? 4 : 2,
    n = e.read_shift(r),
    s = e.read_shift(r, "i"),
    o = e.read_shift(r, "i");
  return [n, s, o];
}
function Ei(e) {
  var a = e.read_shift(2),
    t = On(e);
  return [a, t];
}
function _p(e, a, t) {
  ((e.l += 4), (a -= 4));
  var r = e.l + a,
    n = dr(e, a, t),
    s = e.read_shift(2);
  if (((r -= e.l), s !== r))
    throw new Error("Malformed AddinUdf: padding = " + r + " != " + s);
  return ((e.l += s), n);
}
function Wr(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2);
  return { s: { c: r, r: a }, e: { c: n, r: t } };
}
function ki(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(1),
    n = e.read_shift(1);
  return { s: { c: r, r: a }, e: { c: n, r: t } };
}
var Sp = ki;
function Ai(e) {
  e.l += 4;
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(2);
  return ((e.l += 12), [t, a, r]);
}
function wp(e) {
  var a = {};
  return (
    (e.l += 4),
    (e.l += 16),
    (a.fSharedNote = e.read_shift(2)),
    (e.l += 4),
    a
  );
}
function Tp(e) {
  var a = {};
  return ((e.l += 4), (e.cf = e.read_shift(2)), a);
}
function it(e) {
  ((e.l += 2), (e.l += e.read_shift(2)));
}
var Ep = {
  0: it,
  4: it,
  5: it,
  6: it,
  7: Tp,
  8: it,
  9: it,
  10: it,
  11: it,
  12: it,
  13: wp,
  14: it,
  15: it,
  16: it,
  17: it,
  18: it,
  19: it,
  20: it,
  21: Ai,
};
function kp(e, a) {
  for (var t = e.l + a, r = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      r.push(Ep[n](e, t - e.l));
    } catch {
      return ((e.l = t), r);
    }
  }
  return (e.l != t && (e.l = t), r);
}
function Er(e, a) {
  var t = { BIFFVer: 0, dt: 0 };
  switch (
    ((t.BIFFVer = e.read_shift(2)),
    (a -= 2),
    a >= 2 && ((t.dt = e.read_shift(2)), (e.l -= 2)),
    t.BIFFVer)
  ) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (a > 6) throw new Error("Unexpected BIFF Ver " + t.BIFFVer);
  }
  return (e.read_shift(a), t);
}
function Ap(e, a) {
  return (a === 0 || e.read_shift(2), 1200);
}
function bp(e, a, t) {
  if (t.enc) return ((e.l += a), "");
  var r = e.l,
    n = wa(e, 0, t);
  return (e.read_shift(a + r - e.l), n);
}
function Cp(e, a, t) {
  var r = (t && t.biff == 8) || a == 2 ? e.read_shift(2) : ((e.l += a), 0);
  return { fDialog: r & 16, fBelow: r & 64, fRight: r & 128 };
}
function yp(e, a, t) {
  var r = e.read_shift(4),
    n = e.read_shift(1) & 3,
    s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  var o = dr(e, 0, t);
  return (o.length === 0 && (o = "Sheet1"), { pos: r, hs: n, dt: s, name: o });
}
function Fp(e, a) {
  for (
    var t = e.l + a, r = e.read_shift(4), n = e.read_shift(4), s = [], o = 0;
    o != n && e.l < t;
    ++o
  )
    s.push(pp(e));
  return ((s.Count = r), (s.Unique = n), s);
}
function Dp(e, a) {
  var t = {};
  return ((t.dsst = e.read_shift(2)), (e.l += a - 2), t);
}
function Np(e) {
  var a = {};
  ((a.r = e.read_shift(2)),
    (a.c = e.read_shift(2)),
    (a.cnt = e.read_shift(2) - a.c));
  var t = e.read_shift(2);
  e.l += 4;
  var r = e.read_shift(1);
  return (
    (e.l += 3),
    r & 7 && (a.level = r & 7),
    r & 32 && (a.hidden = !0),
    r & 64 && (a.hpt = t / 20),
    a
  );
}
function Bp(e) {
  var a = xp(e);
  if (a.type != 2211) throw new Error("Invalid Future Record " + a.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function Ip(e) {
  return (e.read_shift(2), e.read_shift(4));
}
function Gs(e, a, t) {
  var r = 0;
  (t && t.biff == 2) || (r = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && ((r = 1 - (n >> 15)), (n &= 32767));
  var s = {
    Unsynced: r & 1,
    DyZero: (r & 2) >> 1,
    ExAsc: (r & 4) >> 2,
    ExDsc: (r & 8) >> 3,
  };
  return [s, n];
}
function Rp(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(2),
    n = e.read_shift(2),
    s = e.read_shift(2),
    o = e.read_shift(2),
    i = e.read_shift(2),
    l = e.read_shift(2),
    c = e.read_shift(2);
  return {
    Pos: [a, t],
    Dim: [r, n],
    Flags: s,
    CurTab: o,
    FirstTab: i,
    Selected: l,
    TabRatio: c,
  };
}
function Pp(e, a, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var r = e.read_shift(2);
  return { RTL: r & 64 };
}
function Op() {}
function Lp(e, a, t) {
  var r = { dyHeight: e.read_shift(2), fl: e.read_shift(2) };
  switch ((t && t.biff) || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return ((r.name = dr(e, 0, t)), r);
}
function Mp(e) {
  var a = Xt(e);
  return ((a.isst = e.read_shift(4)), a);
}
function Up(e, a, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var r = e.l + a,
    n = Xt(e);
  t.biff == 2 && e.l++;
  var s = fr(e, r - e.l, t);
  return ((n.val = s), n);
}
function jp(e, a, t) {
  var r = e.read_shift(2),
    n = wa(e, 0, t);
  return [r, n];
}
var Hp = wa;
function Vs(e, a, t) {
  var r = e.l + a,
    n = t.biff == 8 || !t.biff ? 4 : 2,
    s = e.read_shift(n),
    o = e.read_shift(n),
    i = e.read_shift(2),
    l = e.read_shift(2);
  return ((e.l = r), { s: { r: s, c: i }, e: { r: o, c: l } });
}
function Gp(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = Ei(e);
  return { r: a, c: t, ixfe: r[0], rknum: r[1] };
}
function Vp(e, a) {
  for (
    var t = e.l + a - 2, r = e.read_shift(2), n = e.read_shift(2), s = [];
    e.l < t;
  )
    s.push(Ei(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var o = e.read_shift(2);
  if (s.length != o - n + 1) throw new Error("MulRK length mismatch");
  return { r, c: n, C: o, rkrec: s };
}
function Wp(e, a) {
  for (
    var t = e.l + a - 2, r = e.read_shift(2), n = e.read_shift(2), s = [];
    e.l < t;
  )
    s.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var o = e.read_shift(2);
  if (s.length != o - n + 1) throw new Error("MulBlank length mismatch");
  return { r, c: n, C: o, ixfe: s };
}
function zp(e, a, t, r) {
  var n = {},
    s = e.read_shift(4),
    o = e.read_shift(4),
    i = e.read_shift(4),
    l = e.read_shift(2);
  return (
    (n.patternType = Gl[i >> 26]),
    r.cellStyles &&
      ((n.alc = s & 7),
      (n.fWrap = (s >> 3) & 1),
      (n.alcV = (s >> 4) & 7),
      (n.fJustLast = (s >> 7) & 1),
      (n.trot = (s >> 8) & 255),
      (n.cIndent = (s >> 16) & 15),
      (n.fShrinkToFit = (s >> 20) & 1),
      (n.iReadOrder = (s >> 22) & 2),
      (n.fAtrNum = (s >> 26) & 1),
      (n.fAtrFnt = (s >> 27) & 1),
      (n.fAtrAlc = (s >> 28) & 1),
      (n.fAtrBdr = (s >> 29) & 1),
      (n.fAtrPat = (s >> 30) & 1),
      (n.fAtrProt = (s >> 31) & 1),
      (n.dgLeft = o & 15),
      (n.dgRight = (o >> 4) & 15),
      (n.dgTop = (o >> 8) & 15),
      (n.dgBottom = (o >> 12) & 15),
      (n.icvLeft = (o >> 16) & 127),
      (n.icvRight = (o >> 23) & 127),
      (n.grbitDiag = (o >> 30) & 3),
      (n.icvTop = i & 127),
      (n.icvBottom = (i >> 7) & 127),
      (n.icvDiag = (i >> 14) & 127),
      (n.dgDiag = (i >> 21) & 15),
      (n.icvFore = l & 127),
      (n.icvBack = (l >> 7) & 127),
      (n.fsxButton = (l >> 14) & 1)),
    n
  );
}
function Xp(e, a, t) {
  var r = {};
  return (
    (r.ifnt = e.read_shift(2)),
    (r.numFmtId = e.read_shift(2)),
    (r.flags = e.read_shift(2)),
    (r.fStyle = (r.flags >> 2) & 1),
    (a -= 6),
    (r.data = zp(e, a, r.fStyle, t)),
    r
  );
}
function $p(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if ((a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7))
    throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function Ws(e, a, t) {
  var r = Xt(e);
  (t.biff == 2 || a == 9) && ++e.l;
  var n = lp(e);
  return ((r.val = n), (r.t = n === !0 || n === !1 ? "b" : "e"), r);
}
function Kp(e, a, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var r = Xt(e),
    n = pt(e);
  return ((r.val = n), r);
}
var zs = vp;
function Yp(e, a, t) {
  var r = e.l + a,
    n = e.read_shift(2),
    s = e.read_shift(2);
  if (((t.sbcch = s), s == 1025 || s == 14849)) return [s, n];
  if (s < 1 || s > 255) throw new Error("Unexpected SupBook type: " + s);
  for (var o = ha(e, s), i = []; r > e.l; ) i.push(fr(e));
  return [s, n, o, i];
}
function Xs(e, a, t) {
  var r = e.read_shift(2),
    n,
    s = {
      fBuiltIn: r & 1,
      fWantAdvise: (r >>> 1) & 1,
      fWantPict: (r >>> 2) & 1,
      fOle: (r >>> 3) & 1,
      fOleLink: (r >>> 4) & 1,
      cf: (r >>> 5) & 1023,
      fIcon: (r >>> 15) & 1,
    };
  return (
    t.sbcch === 14849 && (n = _p(e, a - 2, t)),
    (s.body = n || e.read_shift(a - 2)),
    typeof n == "string" && (s.Name = n),
    s
  );
}
var qp = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase",
];
function $s(e, a, t) {
  var r = e.l + a,
    n = e.read_shift(2),
    s = e.read_shift(1),
    o = e.read_shift(1),
    i = e.read_shift(t && t.biff == 2 ? 1 : 2),
    l = 0;
  (!t || t.biff >= 5) &&
    (t.biff != 5 && (e.l += 2),
    (l = e.read_shift(2)),
    t.biff == 5 && (e.l += 2),
    (e.l += 4));
  var c = ha(e, o, t);
  n & 32 && (c = qp[c.charCodeAt(0)]);
  var p = r - e.l;
  t && t.biff == 2 && --p;
  var m = r == e.l || i === 0 || !(p > 0) ? [] : Bu(e, p, t, i);
  return { chKey: s, Name: c, itab: l, rgce: m };
}
function bi(e, a, t) {
  if (t.biff < 8) return Jp(e, a, t);
  for (
    var r = [], n = e.l + a, s = e.read_shift(t.biff > 8 ? 4 : 2);
    s-- !== 0;
  )
    r.push(gp(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return r;
}
function Jp(e, a, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var r = dr(e, a, t);
  return r.charCodeAt(0) == 3 ? r.slice(1) : r;
}
function Zp(e, a, t) {
  if (t.biff < 8) {
    e.l += a;
    return;
  }
  var r = e.read_shift(2),
    n = e.read_shift(2),
    s = ha(e, r, t),
    o = ha(e, n, t);
  return [s, o];
}
function Qp(e, a, t) {
  var r = ki(e);
  e.l++;
  var n = e.read_shift(1);
  return ((a -= 8), [Iu(e, a, t), n, r]);
}
function Ks(e, a, t) {
  var r = Sp(e);
  switch (t.biff) {
    case 2:
      (e.l++, (a -= 7));
      break;
    case 3:
    case 4:
      ((e.l += 2), (a -= 8));
      break;
    default:
      ((e.l += 6), (a -= 12));
  }
  return [r, Du(e, a, t)];
}
function ed(e) {
  var a = e.read_shift(4) !== 0,
    t = e.read_shift(4) !== 0,
    r = e.read_shift(4);
  return [a, t, r];
}
function td(e, a, t) {
  if (!(t.biff < 8)) {
    var r = e.read_shift(2),
      n = e.read_shift(2),
      s = e.read_shift(2),
      o = e.read_shift(2),
      i = wa(e, 0, t);
    return (t.biff < 8 && e.read_shift(1), [{ r, c: n }, i, o, s]);
  }
}
function ad(e, a, t) {
  return td(e, a, t);
}
function rd(e, a) {
  for (var t = [], r = e.read_shift(2); r--; ) t.push(Wr(e));
  return t;
}
function nd(e, a, t) {
  if (t && t.biff < 8) return od(e, a, t);
  var r = Ai(e),
    n = kp(e, a - 22, r[1]);
  return { cmo: r, ft: n };
}
var sd = {
  8: function (e, a) {
    var t = e.l + a;
    e.l += 10;
    var r = e.read_shift(2);
    ((e.l += 4), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 4));
    var n = e.read_shift(1);
    return ((e.l += n), (e.l = t), { fmt: r });
  },
};
function od(e, a, t) {
  e.l += 4;
  var r = e.read_shift(2),
    n = e.read_shift(2),
    s = e.read_shift(2);
  ((e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 6),
    (a -= 36));
  var o = [];
  return (o.push((sd[r] || mt)(e, a, t)), { cmo: [n, r, s], ft: o });
}
function id(e, a, t) {
  var r = e.l,
    n = "";
  try {
    e.l += 4;
    var s = (t.lastobj || { cmo: [0, 0] }).cmo[1],
      o;
    [0, 5, 7, 11, 12, 14].indexOf(s) == -1 ? (e.l += 6) : (o = dp(e, 6, t));
    var i = e.read_shift(2);
    (e.read_shift(2), $e(e, 2));
    var l = e.read_shift(2);
    e.l += l;
    for (var c = 1; c < e.lens.length - 1; ++c) {
      if (e.l - r != e.lens[c]) throw new Error("TxO: bad continue record");
      var p = e[e.l],
        m = ha(e, e.lens[c + 1] - e.lens[c] - 1);
      if (((n += m), n.length >= (p ? i : 2 * i))) break;
    }
    if (n.length !== i && n.length !== i * 2)
      throw new Error("cchText: " + i + " != " + n.length);
    return ((e.l = r + a), { t: n });
  } catch {
    return ((e.l = r + a), { t: n });
  }
}
function cd(e, a) {
  var t = Wr(e);
  e.l += 16;
  var r = hp(e, a - 24);
  return [t, r];
}
function ld(e, a) {
  e.read_shift(2);
  var t = Wr(e),
    r = e.read_shift((a - 10) / 2, "dbcs-cont");
  return ((r = r.replace(gt, "")), [t, r]);
}
function pd(e) {
  var a = [0, 0],
    t;
  return (
    (t = e.read_shift(2)),
    (a[0] = Ls[t] || t),
    (t = e.read_shift(2)),
    (a[1] = Ls[t] || t),
    a
  );
}
function dd(e) {
  for (var a = e.read_shift(2), t = []; a-- > 0; ) t.push(Ti(e));
  return t;
}
function fd(e) {
  for (var a = e.read_shift(2), t = []; a-- > 0; ) t.push(Ti(e));
  return t;
}
function md(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return ((a.cxfs = e.read_shift(2)), (a.crc = e.read_shift(4)), a);
}
function Ci(e, a, t) {
  if (!t.cellStyles) return mt(e, a);
  var r = t && t.biff >= 12 ? 4 : 2,
    n = e.read_shift(r),
    s = e.read_shift(r),
    o = e.read_shift(r),
    i = e.read_shift(r),
    l = e.read_shift(2);
  r == 2 && (e.l += 2);
  var c = { s: n, e: s, w: o, ixfe: i, flags: l };
  return ((t.biff >= 5 || !t.biff) && (c.level = (l >> 8) & 7), c);
}
function ud(e, a) {
  var t = {};
  return (
    a < 32 || ((e.l += 16), (t.header = pt(e)), (t.footer = pt(e)), (e.l += 2)),
    t
  );
}
function hd(e, a, t) {
  var r = { area: !1 };
  if (t.biff != 5) return ((e.l += a), r);
  var n = e.read_shift(1);
  return ((e.l += 3), n & 16 && (r.area = !0), r);
}
var xd = Xt,
  vd = Si,
  gd = fr;
function _d(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(4),
    n = { fmt: a, env: t, len: r, data: e.slice(e.l, e.l + r) };
  return ((e.l += r), n);
}
function Sd(e, a, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var r = Xt(e);
  ++e.l;
  var n = wa(e, a - 7, t);
  return ((r.t = "str"), (r.val = n), r);
}
function wd(e) {
  var a = Xt(e);
  ++e.l;
  var t = pt(e);
  return ((a.t = "n"), (a.val = t), a);
}
function Td(e) {
  var a = Xt(e);
  ++e.l;
  var t = e.read_shift(2);
  return ((a.t = "n"), (a.val = t), a);
}
function Ed(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function kd(e, a) {
  ((e.l += 6), (e.l += 2), (e.l += 1), (e.l += 3), (e.l += 1), (e.l += a - 13));
}
function Ad(e, a, t) {
  var r = e.l + a,
    n = Xt(e),
    s = e.read_shift(2),
    o = ha(e, s, t);
  return ((e.l = r), (n.t = "str"), (n.val = o), n);
}
var bd = [2, 3, 48, 49, 131, 139, 140, 245],
  Ys = (function () {
    var e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969,
      },
      a = Cn({
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
      });
    function t(i, l) {
      var c = [],
        p = sa(1);
      switch (l.type) {
        case "base64":
          p = Rt(bt(i));
          break;
        case "binary":
          p = Rt(i);
          break;
        case "buffer":
        case "array":
          p = i;
          break;
      }
      tt(p, 0);
      var m = p.read_shift(1),
        f = !!(m & 136),
        h = !1,
        x = !1;
      switch (m) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          ((h = !0), (f = !0));
          break;
        case 49:
          ((h = !0), (f = !0));
          break;
        case 131:
          break;
        case 139:
          break;
        case 140:
          x = !0;
          break;
        case 245:
          break;
        default:
          throw new Error("DBF Unsupported Version: " + m.toString(16));
      }
      var d = 0,
        u = 521;
      (m == 2 && (d = p.read_shift(2)),
        (p.l += 3),
        m != 2 && (d = p.read_shift(4)),
        d > 1048576 && (d = 1e6),
        m != 2 && (u = p.read_shift(2)));
      var A = p.read_shift(2),
        B = l.codepage || 1252;
      (m != 2 &&
        ((p.l += 16),
        p.read_shift(1),
        p[p.l] !== 0 && (B = e[p[p.l]]),
        (p.l += 1),
        (p.l += 2)),
        x && (p.l += 36));
      for (
        var w = [],
          M = {},
          H = Math.min(p.length, m == 2 ? 521 : u - 10 - (h ? 264 : 0)),
          U = x ? 32 : 11;
        p.l < H && p[p.l] != 13;
      )
        switch (
          ((M = {}),
          (M.name = ea.utils
            .decode(B, p.slice(p.l, p.l + U))
            .replace(/[\u0000\r\n].*$/g, "")),
          (p.l += U),
          (M.type = String.fromCharCode(p.read_shift(1))),
          m != 2 && !x && (M.offset = p.read_shift(4)),
          (M.len = p.read_shift(1)),
          m == 2 && (M.offset = p.read_shift(2)),
          (M.dec = p.read_shift(1)),
          M.name.length && w.push(M),
          m != 2 && (p.l += x ? 13 : 14),
          M.type)
        ) {
          case "B":
            (!h || M.len != 8) &&
              l.WTF &&
              console.log("Skipping " + M.name + ":" + M.type);
            break;
          case "G":
          case "P":
            l.WTF && console.log("Skipping " + M.name + ":" + M.type);
            break;
          case "+":
          case "0":
          case "@":
          case "C":
          case "D":
          case "F":
          case "I":
          case "L":
          case "M":
          case "N":
          case "O":
          case "T":
          case "Y":
            break;
          default:
            throw new Error("Unknown Field Type: " + M.type);
        }
      if ((p[p.l] !== 13 && (p.l = u - 1), p.read_shift(1) !== 13))
        throw new Error("DBF Terminator not found " + p.l + " " + p[p.l]);
      p.l = u;
      var k = 0,
        S = 0;
      for (c[0] = [], S = 0; S != w.length; ++S) c[0][S] = w[S].name;
      for (; d-- > 0; ) {
        if (p[p.l] === 42) {
          p.l += A;
          continue;
        }
        for (++p.l, c[++k] = [], S = 0, S = 0; S != w.length; ++S) {
          var _ = p.slice(p.l, p.l + w[S].len);
          ((p.l += w[S].len), tt(_, 0));
          var I = ea.utils.decode(B, _);
          switch (w[S].type) {
            case "C":
              I.trim().length && (c[k][S] = I.replace(/\s+$/, ""));
              break;
            case "D":
              I.length === 8
                ? (c[k][S] = new Date(
                    +I.slice(0, 4),
                    +I.slice(4, 6) - 1,
                    +I.slice(6, 8),
                  ))
                : (c[k][S] = I);
              break;
            case "F":
              c[k][S] = parseFloat(I.trim());
              break;
            case "+":
            case "I":
              c[k][S] = x
                ? _.read_shift(-4, "i") ^ 2147483648
                : _.read_shift(4, "i");
              break;
            case "L":
              switch (I.trim().toUpperCase()) {
                case "Y":
                case "T":
                  c[k][S] = !0;
                  break;
                case "N":
                case "F":
                  c[k][S] = !1;
                  break;
                case "":
                case "?":
                  break;
                default:
                  throw new Error("DBF Unrecognized L:|" + I + "|");
              }
              break;
            case "M":
              if (!f)
                throw new Error(
                  "DBF Unexpected MEMO for type " + m.toString(16),
                );
              c[k][S] =
                "##MEMO##" + (x ? parseInt(I.trim(), 10) : _.read_shift(4));
              break;
            case "N":
              ((I = I.replace(/\u0000/g, "").trim()),
                I && I != "." && (c[k][S] = +I || 0));
              break;
            case "@":
              c[k][S] = new Date(_.read_shift(-8, "f") - 621356832e5);
              break;
            case "T":
              c[k][S] = new Date(
                (_.read_shift(4) - 2440588) * 864e5 + _.read_shift(4),
              );
              break;
            case "Y":
              c[k][S] =
                _.read_shift(4, "i") / 1e4 +
                (_.read_shift(4, "i") / 1e4) * Math.pow(2, 32);
              break;
            case "O":
              c[k][S] = -_.read_shift(-8, "f");
              break;
            case "B":
              if (h && w[S].len == 8) {
                c[k][S] = _.read_shift(8, "f");
                break;
              }
            case "G":
            case "P":
              _.l += w[S].len;
              break;
            case "0":
              if (w[S].name === "_NullFlags") break;
            default:
              throw new Error("DBF Unsupported data type " + w[S].type);
          }
        }
      }
      if (m != 2 && p.l < p.length && p[p.l++] != 26)
        throw new Error(
          "DBF EOF Marker missing " +
            (p.l - 1) +
            " of " +
            p.length +
            " " +
            p[p.l - 1].toString(16),
        );
      return (
        l && l.sheetRows && (c = c.slice(0, l.sheetRows)),
        (l.DBF = w),
        c
      );
    }
    function r(i, l) {
      var c = l || {};
      c.dateNF || (c.dateNF = "yyyymmdd");
      var p = La(t(i, c), c);
      return (
        (p["!cols"] = c.DBF.map(function (m) {
          return { wch: m.len, DBF: m };
        })),
        delete c.DBF,
        p
      );
    }
    function n(i, l) {
      try {
        return ia(r(i, l), l);
      } catch (c) {
        if (l && l.WTF) throw c;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var s = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
    function o(i, l) {
      var c = l || {};
      if ((+c.codepage >= 0 && Pt(+c.codepage), c.type == "string"))
        throw new Error("Cannot write DBF to JS string");
      var p = ln(),
        m = _n(i, { header: 1, raw: !0, cellDates: !0 }),
        f = m[0],
        h = m.slice(1),
        x = i["!cols"] || [],
        d = 0,
        u = 0,
        A = 0,
        B = 1;
      for (d = 0; d < f.length; ++d) {
        if (((x[d] || {}).DBF || {}).name) {
          ((f[d] = x[d].DBF.name), ++A);
          continue;
        }
        if (f[d] != null) {
          if (
            (++A,
            typeof f[d] == "number" && (f[d] = f[d].toString(10)),
            typeof f[d] != "string")
          )
            throw new Error(
              "DBF Invalid column name " + f[d] + " |" + typeof f[d] + "|",
            );
          if (f.indexOf(f[d]) !== d) {
            for (u = 0; u < 1024; ++u)
              if (f.indexOf(f[d] + "_" + u) == -1) {
                f[d] += "_" + u;
                break;
              }
          }
        }
      }
      var w = He(i["!ref"]),
        M = [],
        H = [],
        U = [];
      for (d = 0; d <= w.e.c - w.s.c; ++d) {
        var k = "",
          S = "",
          _ = 0,
          I = [];
        for (u = 0; u < h.length; ++u) h[u][d] != null && I.push(h[u][d]);
        if (I.length == 0 || f[d] == null) {
          M[d] = "?";
          continue;
        }
        for (u = 0; u < I.length; ++u) {
          switch (typeof I[u]) {
            case "number":
              S = "B";
              break;
            case "string":
              S = "C";
              break;
            case "boolean":
              S = "L";
              break;
            case "object":
              S = I[u] instanceof Date ? "D" : "C";
              break;
            default:
              S = "C";
          }
          ((_ = Math.max(_, String(I[u]).length)), (k = k && k != S ? "C" : S));
        }
        (_ > 250 && (_ = 250),
          (S = ((x[d] || {}).DBF || {}).type),
          S == "C" && x[d].DBF.len > _ && (_ = x[d].DBF.len),
          k == "B" &&
            S == "N" &&
            ((k = "N"), (U[d] = x[d].DBF.dec), (_ = x[d].DBF.len)),
          (H[d] = k == "C" || S == "N" ? _ : s[k] || 0),
          (B += H[d]),
          (M[d] = k));
      }
      var R = p.next(32);
      for (
        R.write_shift(4, 318902576),
          R.write_shift(4, h.length),
          R.write_shift(2, 296 + 32 * A),
          R.write_shift(2, B),
          d = 0;
        d < 4;
        ++d
      )
        R.write_shift(4, 0);
      for (
        R.write_shift(4, 0 | ((+a[bo] || 3) << 8)), d = 0, u = 0;
        d < f.length;
        ++d
      )
        if (f[d] != null) {
          var N = p.next(32),
            X = (f[d].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
          (N.write_shift(1, X, "sbcs"),
            N.write_shift(1, M[d] == "?" ? "C" : M[d], "sbcs"),
            N.write_shift(4, u),
            N.write_shift(1, H[d] || s[M[d]] || 0),
            N.write_shift(1, U[d] || 0),
            N.write_shift(1, 2),
            N.write_shift(4, 0),
            N.write_shift(1, 0),
            N.write_shift(4, 0),
            N.write_shift(4, 0),
            (u += H[d] || s[M[d]] || 0));
        }
      var ae = p.next(264);
      for (ae.write_shift(4, 13), d = 0; d < 65; ++d) ae.write_shift(4, 0);
      for (d = 0; d < h.length; ++d) {
        var ee = p.next(B);
        for (ee.write_shift(1, 0), u = 0; u < f.length; ++u)
          if (f[u] != null)
            switch (M[u]) {
              case "L":
                ee.write_shift(1, h[d][u] == null ? 63 : h[d][u] ? 84 : 70);
                break;
              case "B":
                ee.write_shift(8, h[d][u] || 0, "f");
                break;
              case "N":
                var ie = "0";
                for (
                  typeof h[d][u] == "number" &&
                    (ie = h[d][u].toFixed(U[u] || 0)),
                    A = 0;
                  A < H[u] - ie.length;
                  ++A
                )
                  ee.write_shift(1, 32);
                ee.write_shift(1, ie, "sbcs");
                break;
              case "D":
                h[d][u]
                  ? (ee.write_shift(
                      4,
                      ("0000" + h[d][u].getFullYear()).slice(-4),
                      "sbcs",
                    ),
                    ee.write_shift(
                      2,
                      ("00" + (h[d][u].getMonth() + 1)).slice(-2),
                      "sbcs",
                    ),
                    ee.write_shift(
                      2,
                      ("00" + h[d][u].getDate()).slice(-2),
                      "sbcs",
                    ))
                  : ee.write_shift(8, "00000000", "sbcs");
                break;
              case "C":
                var Z = String(h[d][u] != null ? h[d][u] : "").slice(0, H[u]);
                for (
                  ee.write_shift(1, Z, "sbcs"), A = 0;
                  A < H[u] - Z.length;
                  ++A
                )
                  ee.write_shift(1, 32);
                break;
            }
      }
      return (p.next(1).write_shift(1, 26), p.end());
    }
    return { to_workbook: n, to_sheet: r, from_sheet: o };
  })(),
  Cd = (function () {
    var e = {
        AA: "À",
        BA: "Á",
        CA: "Â",
        DA: 195,
        HA: "Ä",
        JA: 197,
        AE: "È",
        BE: "É",
        CE: "Ê",
        HE: "Ë",
        AI: "Ì",
        BI: "Í",
        CI: "Î",
        HI: "Ï",
        AO: "Ò",
        BO: "Ó",
        CO: "Ô",
        DO: 213,
        HO: "Ö",
        AU: "Ù",
        BU: "Ú",
        CU: "Û",
        HU: "Ü",
        Aa: "à",
        Ba: "á",
        Ca: "â",
        Da: 227,
        Ha: "ä",
        Ja: 229,
        Ae: "è",
        Be: "é",
        Ce: "ê",
        He: "ë",
        Ai: "ì",
        Bi: "í",
        Ci: "î",
        Hi: "ï",
        Ao: "ò",
        Bo: "ó",
        Co: "ô",
        Do: 245,
        Ho: "ö",
        Au: "ù",
        Bu: "ú",
        Cu: "û",
        Hu: "ü",
        KC: "Ç",
        Kc: "ç",
        q: "æ",
        z: "œ",
        a: "Æ",
        j: "Œ",
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        "B ": 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        "!": 161,
        '"': 162,
        "#": 163,
        "(": 164,
        "%": 165,
        "'": 167,
        "H ": 168,
        "+": 171,
        ";": 187,
        "<": 188,
        "=": 189,
        ">": 190,
        "?": 191,
        "{": 223,
      },
      a = new RegExp(
        "\x1BN(" +
          Wt(e)
            .join("|")
            .replace(/\|\|\|/, "|\\||")
            .replace(/([?()+])/g, "\\$1") +
          "|\\|)",
        "gm",
      ),
      t = function (f, h) {
        var x = e[h];
        return typeof x == "number" ? ds(x) : x;
      },
      r = function (f, h, x) {
        var d = ((h.charCodeAt(0) - 32) << 4) | (x.charCodeAt(0) - 48);
        return d == 59 ? f : ds(d);
      };
    e["|"] = 254;
    function n(f, h) {
      switch (h.type) {
        case "base64":
          return s(bt(f), h);
        case "binary":
          return s(f, h);
        case "buffer":
          return s(Ae && Buffer.isBuffer(f) ? f.toString("binary") : va(f), h);
        case "array":
          return s(ua(f), h);
      }
      throw new Error("Unrecognized type " + h.type);
    }
    function s(f, h) {
      var x = f.split(/[\n\r]+/),
        d = -1,
        u = -1,
        A = 0,
        B = 0,
        w = [],
        M = [],
        H = null,
        U = {},
        k = [],
        S = [],
        _ = [],
        I = 0,
        R;
      for (+h.codepage >= 0 && Pt(+h.codepage); A !== x.length; ++A) {
        I = 0;
        var N = x[A].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, r)
            .replace(a, t),
          X = N.replace(/;;/g, "\0")
            .split(";")
            .map(function (P) {
              return P.replace(/\u0000/g, ";");
            }),
          ae = X[0],
          ee;
        if (N.length > 0)
          switch (ae) {
            case "ID":
              break;
            case "E":
              break;
            case "B":
              break;
            case "O":
              break;
            case "W":
              break;
            case "P":
              X[1].charAt(0) == "P" && M.push(N.slice(3).replace(/;;/g, ";"));
              break;
            case "C":
              var ie = !1,
                Z = !1,
                xe = !1,
                j = !1,
                fe = -1,
                ne = -1;
              for (B = 1; B < X.length; ++B)
                switch (X[B].charAt(0)) {
                  case "A":
                    break;
                  case "X":
                    ((u = parseInt(X[B].slice(1)) - 1), (Z = !0));
                    break;
                  case "Y":
                    for (
                      d = parseInt(X[B].slice(1)) - 1,
                        Z || (u = 0),
                        R = w.length;
                      R <= d;
                      ++R
                    )
                      w[R] = [];
                    break;
                  case "K":
                    ((ee = X[B].slice(1)),
                      ee.charAt(0) === '"'
                        ? (ee = ee.slice(1, ee.length - 1))
                        : ee === "TRUE"
                          ? (ee = !0)
                          : ee === "FALSE"
                            ? (ee = !1)
                            : isNaN(Ut(ee))
                              ? isNaN(Na(ee).getDate()) || (ee = et(ee))
                              : ((ee = Ut(ee)),
                                H !== null && Pa(H) && (ee = Vr(ee))),
                      (ie = !0));
                    break;
                  case "E":
                    j = !0;
                    var b = ya(X[B].slice(1), { r: d, c: u });
                    w[d][u] = [w[d][u], b];
                    break;
                  case "S":
                    ((xe = !0), (w[d][u] = [w[d][u], "S5S"]));
                    break;
                  case "G":
                    break;
                  case "R":
                    fe = parseInt(X[B].slice(1)) - 1;
                    break;
                  case "C":
                    ne = parseInt(X[B].slice(1)) - 1;
                    break;
                  default:
                    if (h && h.WTF) throw new Error("SYLK bad record " + N);
                }
              if (
                (ie &&
                  (w[d][u] && w[d][u].length == 2
                    ? (w[d][u][0] = ee)
                    : (w[d][u] = ee),
                  (H = null)),
                xe)
              ) {
                if (j)
                  throw new Error(
                    "SYLK shared formula cannot have own formula",
                  );
                var O = fe > -1 && w[fe][ne];
                if (!O || !O[1])
                  throw new Error("SYLK shared formula cannot find base");
                w[d][u][1] = Li(O[1], { r: d - fe, c: u - ne });
              }
              break;
            case "F":
              var L = 0;
              for (B = 1; B < X.length; ++B)
                switch (X[B].charAt(0)) {
                  case "X":
                    ((u = parseInt(X[B].slice(1)) - 1), ++L);
                    break;
                  case "Y":
                    for (
                      d = parseInt(X[B].slice(1)) - 1, R = w.length;
                      R <= d;
                      ++R
                    )
                      w[R] = [];
                    break;
                  case "M":
                    I = parseInt(X[B].slice(1)) / 20;
                    break;
                  case "F":
                    break;
                  case "G":
                    break;
                  case "P":
                    H = M[parseInt(X[B].slice(1))];
                    break;
                  case "S":
                    break;
                  case "D":
                    break;
                  case "N":
                    break;
                  case "W":
                    for (
                      _ = X[B].slice(1).split(" "), R = parseInt(_[0], 10);
                      R <= parseInt(_[1], 10);
                      ++R
                    )
                      ((I = parseInt(_[2], 10)),
                        (S[R - 1] = I === 0 ? { hidden: !0 } : { wch: I }),
                        Ba(S[R - 1]));
                    break;
                  case "C":
                    ((u = parseInt(X[B].slice(1)) - 1), S[u] || (S[u] = {}));
                    break;
                  case "R":
                    ((d = parseInt(X[B].slice(1)) - 1),
                      k[d] || (k[d] = {}),
                      I > 0
                        ? ((k[d].hpt = I), (k[d].hpx = ir(I)))
                        : I === 0 && (k[d].hidden = !0));
                    break;
                  default:
                    if (h && h.WTF) throw new Error("SYLK bad record " + N);
                }
              L < 1 && (H = null);
              break;
            default:
              if (h && h.WTF) throw new Error("SYLK bad record " + N);
          }
      }
      return (
        k.length > 0 && (U["!rows"] = k),
        S.length > 0 && (U["!cols"] = S),
        h && h.sheetRows && (w = w.slice(0, h.sheetRows)),
        [w, U]
      );
    }
    function o(f, h) {
      var x = n(f, h),
        d = x[0],
        u = x[1],
        A = La(d, h);
      return (
        Wt(u).forEach(function (B) {
          A[B] = u[B];
        }),
        A
      );
    }
    function i(f, h) {
      return ia(o(f, h), h);
    }
    function l(f, h, x, d) {
      var u = "C;Y" + (x + 1) + ";X" + (d + 1) + ";K";
      switch (f.t) {
        case "n":
          ((u += f.v || 0),
            f.f && !f.F && (u += ";E" + um(f.f, { r: x, c: d })));
          break;
        case "b":
          u += f.v ? "TRUE" : "FALSE";
          break;
        case "e":
          u += f.w || f.v;
          break;
        case "d":
          u += '"' + (f.w || f.v) + '"';
          break;
        case "s":
          u += '"' + f.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
          break;
      }
      return u;
    }
    function c(f, h) {
      h.forEach(function (x, d) {
        var u = "F;W" + (d + 1) + " " + (d + 1) + " ";
        (x.hidden
          ? (u += "0")
          : (typeof x.width == "number" && !x.wpx && (x.wpx = Ur(x.width)),
            typeof x.wpx == "number" && !x.wch && (x.wch = jr(x.wpx)),
            typeof x.wch == "number" && (u += Math.round(x.wch))),
          u.charAt(u.length - 1) != " " && f.push(u));
      });
    }
    function p(f, h) {
      h.forEach(function (x, d) {
        var u = "F;";
        (x.hidden
          ? (u += "M0;")
          : x.hpt
            ? (u += "M" + 20 * x.hpt + ";")
            : x.hpx && (u += "M" + 20 * Ri(x.hpx) + ";"),
          u.length > 2 && f.push(u + "R" + (d + 1)));
      });
    }
    function m(f, h) {
      var x = ["ID;PWXL;N;E"],
        d = [],
        u = He(f["!ref"]),
        A,
        B = Array.isArray(f),
        w = `\r
`;
      (x.push("P;PGeneral"),
        x.push("F;P0;DG0G8;M255"),
        f["!cols"] && c(x, f["!cols"]),
        f["!rows"] && p(x, f["!rows"]),
        x.push(
          "B;Y" +
            (u.e.r - u.s.r + 1) +
            ";X" +
            (u.e.c - u.s.c + 1) +
            ";D" +
            [u.s.c, u.s.r, u.e.c, u.e.r].join(" "),
        ));
      for (var M = u.s.r; M <= u.e.r; ++M)
        for (var H = u.s.c; H <= u.e.c; ++H) {
          var U = _e({ r: M, c: H });
          ((A = B ? (f[M] || [])[H] : f[U]),
            !(!A || (A.v == null && (!A.f || A.F))) && d.push(l(A, f, M, H)));
        }
      return x.join(w) + w + d.join(w) + w + "E" + w;
    }
    return { to_workbook: i, to_sheet: o, from_sheet: m };
  })(),
  yd = (function () {
    function e(s, o) {
      switch (o.type) {
        case "base64":
          return a(bt(s), o);
        case "binary":
          return a(s, o);
        case "buffer":
          return a(Ae && Buffer.isBuffer(s) ? s.toString("binary") : va(s), o);
        case "array":
          return a(ua(s), o);
      }
      throw new Error("Unrecognized type " + o.type);
    }
    function a(s, o) {
      for (
        var i = s.split(`
`),
          l = -1,
          c = -1,
          p = 0,
          m = [];
        p !== i.length;
        ++p
      ) {
        if (i[p].trim() === "BOT") {
          ((m[++l] = []), (c = 0));
          continue;
        }
        if (!(l < 0)) {
          var f = i[p].trim().split(","),
            h = f[0],
            x = f[1];
          ++p;
          for (
            var d = i[p] || "";
            (d.match(/["]/g) || []).length & 1 && p < i.length - 1;
          )
            d +=
              `
` + i[++p];
          switch (((d = d.trim()), +h)) {
            case -1:
              if (d === "BOT") {
                ((m[++l] = []), (c = 0));
                continue;
              } else if (d !== "EOD")
                throw new Error("Unrecognized DIF special command " + d);
              break;
            case 0:
              (d === "TRUE"
                ? (m[l][c] = !0)
                : d === "FALSE"
                  ? (m[l][c] = !1)
                  : isNaN(Ut(x))
                    ? isNaN(Na(x).getDate())
                      ? (m[l][c] = x)
                      : (m[l][c] = et(x))
                    : (m[l][c] = Ut(x)),
                ++c);
              break;
            case 1:
              ((d = d.slice(1, d.length - 1)),
                (d = d.replace(/""/g, '"')),
                d && d.match(/^=".*"$/) && (d = d.slice(2, -1)),
                (m[l][c++] = d !== "" ? d : null));
              break;
          }
          if (d === "EOD") break;
        }
      }
      return (o && o.sheetRows && (m = m.slice(0, o.sheetRows)), m);
    }
    function t(s, o) {
      return La(e(s, o), o);
    }
    function r(s, o) {
      return ia(t(s, o), o);
    }
    var n = (function () {
      var s = function (l, c, p, m, f) {
          (l.push(c),
            l.push(p + "," + m),
            l.push('"' + f.replace(/"/g, '""') + '"'));
        },
        o = function (l, c, p, m) {
          (l.push(c + "," + p),
            l.push(c == 1 ? '"' + m.replace(/"/g, '""') + '"' : m));
        };
      return function (l) {
        var c = [],
          p = He(l["!ref"]),
          m,
          f = Array.isArray(l);
        (s(c, "TABLE", 0, 1, "sheetjs"),
          s(c, "VECTORS", 0, p.e.r - p.s.r + 1, ""),
          s(c, "TUPLES", 0, p.e.c - p.s.c + 1, ""),
          s(c, "DATA", 0, 0, ""));
        for (var h = p.s.r; h <= p.e.r; ++h) {
          o(c, -1, 0, "BOT");
          for (var x = p.s.c; x <= p.e.c; ++x) {
            var d = _e({ r: h, c: x });
            if (((m = f ? (l[h] || [])[x] : l[d]), !m)) {
              o(c, 1, 0, "");
              continue;
            }
            switch (m.t) {
              case "n":
                var u = m.w;
                (!u && m.v != null && (u = m.v),
                  u == null
                    ? m.f && !m.F
                      ? o(c, 1, 0, "=" + m.f)
                      : o(c, 1, 0, "")
                    : o(c, 0, u, "V"));
                break;
              case "b":
                o(c, 0, m.v ? 1 : 0, m.v ? "TRUE" : "FALSE");
                break;
              case "s":
                o(c, 1, 0, isNaN(m.v) ? m.v : '="' + m.v + '"');
                break;
              case "d":
                (m.w || (m.w = Dt(m.z || we[14], _t(et(m.v)))),
                  o(c, 0, m.w, "V"));
                break;
              default:
                o(c, 1, 0, "");
            }
          }
        }
        o(c, -1, 0, "EOD");
        var A = `\r
`,
          B = c.join(A);
        return B;
      };
    })();
    return { to_workbook: r, to_sheet: t, from_sheet: n };
  })(),
  Fd = (function () {
    function e(m) {
      return m
        .replace(/\\b/g, "\\")
        .replace(/\\c/g, ":")
        .replace(
          /\\n/g,
          `
`,
        );
    }
    function a(m) {
      return m.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
    }
    function t(m, f) {
      for (
        var h = m.split(`
`),
          x = -1,
          d = -1,
          u = 0,
          A = [];
        u !== h.length;
        ++u
      ) {
        var B = h[u].trim().split(":");
        if (B[0] === "cell") {
          var w = vt(B[1]);
          if (A.length <= w.r)
            for (x = A.length; x <= w.r; ++x) A[x] || (A[x] = []);
          switch (((x = w.r), (d = w.c), B[2])) {
            case "t":
              A[x][d] = e(B[3]);
              break;
            case "v":
              A[x][d] = +B[3];
              break;
            case "vtf":
              var M = B[B.length - 1];
            case "vtc":
              switch (B[3]) {
                case "nl":
                  A[x][d] = !!+B[4];
                  break;
                default:
                  A[x][d] = +B[4];
                  break;
              }
              B[2] == "vtf" && (A[x][d] = [A[x][d], M]);
          }
        }
      }
      return (f && f.sheetRows && (A = A.slice(0, f.sheetRows)), A);
    }
    function r(m, f) {
      return La(t(m, f), f);
    }
    function n(m, f) {
      return ia(r(m, f), f);
    }
    var s = [
        "socialcalc:version:1.5",
        "MIME-Version: 1.0",
        "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
      ].join(`
`),
      o =
        [
          "--SocialCalcSpreadsheetControlSave",
          "Content-type: text/plain; charset=UTF-8",
        ].join(`
`) +
        `
`,
      i = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`),
      l = "--SocialCalcSpreadsheetControlSave--";
    function c(m) {
      if (!m || !m["!ref"]) return "";
      for (
        var f = [],
          h = [],
          x,
          d = "",
          u = Oa(m["!ref"]),
          A = Array.isArray(m),
          B = u.s.r;
        B <= u.e.r;
        ++B
      )
        for (var w = u.s.c; w <= u.e.c; ++w)
          if (
            ((d = _e({ r: B, c: w })),
            (x = A ? (m[B] || [])[w] : m[d]),
            !(!x || x.v == null || x.t === "z"))
          ) {
            switch (((h = ["cell", d, "t"]), x.t)) {
              case "s":
              case "str":
                h.push(a(x.v));
                break;
              case "n":
                x.f
                  ? ((h[2] = "vtf"),
                    (h[3] = "n"),
                    (h[4] = x.v),
                    (h[5] = a(x.f)))
                  : ((h[2] = "v"), (h[3] = x.v));
                break;
              case "b":
                ((h[2] = "vt" + (x.f ? "f" : "c")),
                  (h[3] = "nl"),
                  (h[4] = x.v ? "1" : "0"),
                  (h[5] = a(x.f || (x.v ? "TRUE" : "FALSE"))));
                break;
              case "d":
                var M = _t(et(x.v));
                ((h[2] = "vtc"),
                  (h[3] = "nd"),
                  (h[4] = "" + M),
                  (h[5] = x.w || Dt(x.z || we[14], M)));
                break;
              case "e":
                continue;
            }
            f.push(h.join(":"));
          }
      return (
        f.push(
          "sheet:c:" +
            (u.e.c - u.s.c + 1) +
            ":r:" +
            (u.e.r - u.s.r + 1) +
            ":tvf:1",
        ),
        f.push("valueformat:1:text-wiki"),
        f.join(`
`)
      );
    }
    function p(m) {
      return [s, o, i, o, c(m), l].join(`
`);
    }
    return { to_workbook: n, to_sheet: r, from_sheet: p };
  })(),
  sr = (function () {
    function e(p, m, f, h, x) {
      x.raw
        ? (m[f][h] = p)
        : p === "" ||
          (p === "TRUE"
            ? (m[f][h] = !0)
            : p === "FALSE"
              ? (m[f][h] = !1)
              : isNaN(Ut(p))
                ? isNaN(Na(p).getDate())
                  ? (m[f][h] = p)
                  : (m[f][h] = et(p))
                : (m[f][h] = Ut(p)));
    }
    function a(p, m) {
      var f = m || {},
        h = [];
      if (!p || p.length === 0) return h;
      for (
        var x = p.split(/[\r\n]/), d = x.length - 1;
        d >= 0 && x[d].length === 0;
      )
        --d;
      for (var u = 10, A = 0, B = 0; B <= d; ++B)
        ((A = x[B].indexOf(" ")),
          A == -1 ? (A = x[B].length) : A++,
          (u = Math.max(u, A)));
      for (B = 0; B <= d; ++B) {
        h[B] = [];
        var w = 0;
        for (
          e(x[B].slice(0, u).trim(), h, B, w, f), w = 1;
          w <= (x[B].length - u) / 10 + 1;
          ++w
        )
          e(x[B].slice(u + (w - 1) * 10, u + w * 10).trim(), h, B, w, f);
      }
      return (f.sheetRows && (h = h.slice(0, f.sheetRows)), h);
    }
    var t = { 44: ",", 9: "	", 59: ";", 124: "|" },
      r = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function n(p) {
      for (var m = {}, f = !1, h = 0, x = 0; h < p.length; ++h)
        (x = p.charCodeAt(h)) == 34
          ? (f = !f)
          : !f && x in t && (m[x] = (m[x] || 0) + 1);
      x = [];
      for (h in m)
        Object.prototype.hasOwnProperty.call(m, h) && x.push([m[h], h]);
      if (!x.length) {
        m = r;
        for (h in m)
          Object.prototype.hasOwnProperty.call(m, h) && x.push([m[h], h]);
      }
      return (
        x.sort(function (d, u) {
          return d[0] - u[0] || r[d[1]] - r[u[1]];
        }),
        t[x.pop()[1]] || 44
      );
    }
    function s(p, m) {
      var f = m || {},
        h = "",
        x = f.dense ? [] : {},
        d = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      p.slice(0, 4) == "sep="
        ? p.charCodeAt(5) == 13 && p.charCodeAt(6) == 10
          ? ((h = p.charAt(4)), (p = p.slice(7)))
          : p.charCodeAt(5) == 13 || p.charCodeAt(5) == 10
            ? ((h = p.charAt(4)), (p = p.slice(6)))
            : (h = n(p.slice(0, 1024)))
        : f && f.FS
          ? (h = f.FS)
          : (h = n(p.slice(0, 1024)));
      var u = 0,
        A = 0,
        B = 0,
        w = 0,
        M = 0,
        H = h.charCodeAt(0),
        U = !1,
        k = 0,
        S = p.charCodeAt(0);
      p = p.replace(
        /\r\n/gm,
        `
`,
      );
      var _ = f.dateNF != null ? j0(f.dateNF) : null;
      function I() {
        var R = p.slice(w, M),
          N = {};
        if (
          (R.charAt(0) == '"' &&
            R.charAt(R.length - 1) == '"' &&
            (R = R.slice(1, -1).replace(/""/g, '"')),
          R.length === 0)
        )
          N.t = "z";
        else if (f.raw) ((N.t = "s"), (N.v = R));
        else if (R.trim().length === 0) ((N.t = "s"), (N.v = R));
        else if (R.charCodeAt(0) == 61)
          R.charCodeAt(1) == 34 && R.charCodeAt(R.length - 1) == 34
            ? ((N.t = "s"), (N.v = R.slice(2, -1).replace(/""/g, '"')))
            : xm(R)
              ? ((N.t = "n"), (N.f = R.slice(1)))
              : ((N.t = "s"), (N.v = R));
        else if (R == "TRUE") ((N.t = "b"), (N.v = !0));
        else if (R == "FALSE") ((N.t = "b"), (N.v = !1));
        else if (!isNaN((B = Ut(R))))
          ((N.t = "n"), f.cellText !== !1 && (N.w = R), (N.v = B));
        else if (!isNaN(Na(R).getDate()) || (_ && R.match(_))) {
          N.z = f.dateNF || we[14];
          var X = 0;
          (_ &&
            R.match(_) &&
            ((R = H0(R, f.dateNF, R.match(_) || [])), (X = 1)),
            f.cellDates
              ? ((N.t = "d"), (N.v = et(R, X)))
              : ((N.t = "n"), (N.v = _t(et(R, X)))),
            f.cellText !== !1 &&
              (N.w = Dt(N.z, N.v instanceof Date ? _t(N.v) : N.v)),
            f.cellNF || delete N.z);
        } else ((N.t = "s"), (N.v = R));
        if (
          (N.t == "z" ||
            (f.dense
              ? (x[u] || (x[u] = []), (x[u][A] = N))
              : (x[_e({ c: A, r: u })] = N)),
          (w = M + 1),
          (S = p.charCodeAt(w)),
          d.e.c < A && (d.e.c = A),
          d.e.r < u && (d.e.r = u),
          k == H)
        )
          ++A;
        else if (((A = 0), ++u, f.sheetRows && f.sheetRows <= u)) return !0;
      }
      e: for (; M < p.length; ++M)
        switch ((k = p.charCodeAt(M))) {
          case 34:
            S === 34 && (U = !U);
            break;
          case H:
          case 10:
          case 13:
            if (!U && I()) break e;
            break;
        }
      return (M - w > 0 && I(), (x["!ref"] = Ce(d)), x);
    }
    function o(p, m) {
      return !(m && m.PRN) ||
        m.FS ||
        p.slice(0, 4) == "sep=" ||
        p.indexOf("	") >= 0 ||
        p.indexOf(",") >= 0 ||
        p.indexOf(";") >= 0
        ? s(p, m)
        : La(a(p, m), m);
    }
    function i(p, m) {
      var f = "",
        h = m.type == "string" ? [0, 0, 0, 0] : Xn(p, m);
      switch (m.type) {
        case "base64":
          f = bt(p);
          break;
        case "binary":
          f = p;
          break;
        case "buffer":
          m.codepage == 65001
            ? (f = p.toString("utf8"))
            : m.codepage && typeof ea < "u"
              ? (f = ea.utils.decode(m.codepage, p))
              : (f = Ae && Buffer.isBuffer(p) ? p.toString("binary") : va(p));
          break;
        case "array":
          f = ua(p);
          break;
        case "string":
          f = p;
          break;
        default:
          throw new Error("Unrecognized type " + m.type);
      }
      return (
        h[0] == 239 && h[1] == 187 && h[2] == 191
          ? (f = Ie(f.slice(3)))
          : m.type != "string" && m.type != "buffer" && m.codepage == 65001
            ? (f = Ie(f))
            : m.type == "binary" &&
              typeof ea < "u" &&
              m.codepage &&
              (f = ea.utils.decode(m.codepage, ea.utils.encode(28591, f))),
        f.slice(0, 19) == "socialcalc:version:"
          ? Fd.to_sheet(m.type == "string" ? f : Ie(f), m)
          : o(f, m)
      );
    }
    function l(p, m) {
      return ia(i(p, m), m);
    }
    function c(p) {
      for (
        var m = [], f = He(p["!ref"]), h, x = Array.isArray(p), d = f.s.r;
        d <= f.e.r;
        ++d
      ) {
        for (var u = [], A = f.s.c; A <= f.e.c; ++A) {
          var B = _e({ r: d, c: A });
          if (((h = x ? (p[d] || [])[A] : p[B]), !h || h.v == null)) {
            u.push("          ");
            continue;
          }
          for (
            var w = (h.w || (Jt(h), h.w) || "").slice(0, 10);
            w.length < 10;
          )
            w += " ";
          u.push(w + (A === 0 ? " " : ""));
        }
        m.push(u.join(""));
      }
      return m.join(`
`);
    }
    return { to_workbook: l, to_sheet: i, from_sheet: c };
  })();
function Dd(e, a) {
  var t = a || {},
    r = !!t.WTF;
  t.WTF = !0;
  try {
    var n = Cd.to_workbook(e, t);
    return ((t.WTF = r), n);
  } catch (s) {
    if (((t.WTF = r), !s.message.match(/SYLK bad record ID/) && r)) throw s;
    return sr.to_workbook(e, a);
  }
}
var Za = (function () {
  function e(b, O, L) {
    if (b) {
      tt(b, b.l || 0);
      for (var P = L.Enum || fe; b.l < b.length; ) {
        var K = b.read_shift(2),
          re = P[K] || P[65535],
          Q = b.read_shift(2),
          J = b.l + Q,
          q = re.f && re.f(b, Q, L);
        if (((b.l = J), O(q, re, K))) return;
      }
    }
  }
  function a(b, O) {
    switch (O.type) {
      case "base64":
        return t(Rt(bt(b)), O);
      case "binary":
        return t(Rt(b), O);
      case "buffer":
      case "array":
        return t(b, O);
    }
    throw "Unsupported type " + O.type;
  }
  function t(b, O) {
    if (!b) return b;
    var L = O || {},
      P = L.dense ? [] : {},
      K = "Sheet1",
      re = "",
      Q = 0,
      J = {},
      q = [],
      ce = [],
      F = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
      Te = L.sheetRows || 0;
    if (
      b[2] == 0 &&
      (b[3] == 8 || b[3] == 9) &&
      b.length >= 16 &&
      b[14] == 5 &&
      b[15] === 108
    )
      throw new Error("Unsupported Works 3 for Mac file");
    if (b[2] == 2)
      ((L.Enum = fe),
        e(
          b,
          function (oe, ue, ke) {
            switch (ke) {
              case 0:
                ((L.vers = oe), oe >= 4096 && (L.qpro = !0));
                break;
              case 6:
                F = oe;
                break;
              case 204:
                oe && (re = oe);
                break;
              case 222:
                re = oe;
                break;
              case 15:
              case 51:
                L.qpro || (oe[1].v = oe[1].v.slice(1));
              case 13:
              case 14:
              case 16:
                (ke == 14 &&
                  (oe[2] & 112) == 112 &&
                  (oe[2] & 15) > 1 &&
                  (oe[2] & 15) < 15 &&
                  ((oe[1].z = L.dateNF || we[14]),
                  L.cellDates && ((oe[1].t = "d"), (oe[1].v = Vr(oe[1].v)))),
                  L.qpro &&
                    oe[3] > Q &&
                    ((P["!ref"] = Ce(F)),
                    (J[K] = P),
                    q.push(K),
                    (P = L.dense ? [] : {}),
                    (F = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                    (Q = oe[3]),
                    (K = re || "Sheet" + (Q + 1)),
                    (re = "")));
                var Ye = L.dense ? (P[oe[0].r] || [])[oe[0].c] : P[_e(oe[0])];
                if (Ye) {
                  ((Ye.t = oe[1].t),
                    (Ye.v = oe[1].v),
                    oe[1].z != null && (Ye.z = oe[1].z),
                    oe[1].f != null && (Ye.f = oe[1].f));
                  break;
                }
                L.dense
                  ? (P[oe[0].r] || (P[oe[0].r] = []),
                    (P[oe[0].r][oe[0].c] = oe[1]))
                  : (P[_e(oe[0])] = oe[1]);
                break;
            }
          },
          L,
        ));
    else if (b[2] == 26 || b[2] == 14)
      ((L.Enum = ne),
        b[2] == 14 && ((L.qpro = !0), (b.l = 0)),
        e(
          b,
          function (oe, ue, ke) {
            switch (ke) {
              case 204:
                K = oe;
                break;
              case 22:
                oe[1].v = oe[1].v.slice(1);
              case 23:
              case 24:
              case 25:
              case 37:
              case 39:
              case 40:
                if (
                  (oe[3] > Q &&
                    ((P["!ref"] = Ce(F)),
                    (J[K] = P),
                    q.push(K),
                    (P = L.dense ? [] : {}),
                    (F = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                    (Q = oe[3]),
                    (K = "Sheet" + (Q + 1))),
                  Te > 0 && oe[0].r >= Te)
                )
                  break;
                (L.dense
                  ? (P[oe[0].r] || (P[oe[0].r] = []),
                    (P[oe[0].r][oe[0].c] = oe[1]))
                  : (P[_e(oe[0])] = oe[1]),
                  F.e.c < oe[0].c && (F.e.c = oe[0].c),
                  F.e.r < oe[0].r && (F.e.r = oe[0].r));
                break;
              case 27:
                oe[14e3] && (ce[oe[14e3][0]] = oe[14e3][1]);
                break;
              case 1537:
                ((ce[oe[0]] = oe[1]), oe[0] == Q && (K = oe[1]));
                break;
            }
          },
          L,
        ));
    else throw new Error("Unrecognized LOTUS BOF " + b[2]);
    if (((P["!ref"] = Ce(F)), (J[re || K] = P), q.push(re || K), !ce.length))
      return { SheetNames: q, Sheets: J };
    for (var he = {}, ve = [], pe = 0; pe < ce.length; ++pe)
      J[q[pe]]
        ? (ve.push(ce[pe] || q[pe]), (he[ce[pe]] = J[ce[pe]] || J[q[pe]]))
        : (ve.push(ce[pe]), (he[ce[pe]] = { "!ref": "A1" }));
    return { SheetNames: ve, Sheets: he };
  }
  function r(b, O) {
    var L = O || {};
    if ((+L.codepage >= 0 && Pt(+L.codepage), L.type == "string"))
      throw new Error("Cannot write WK1 to JS string");
    var P = ln(),
      K = He(b["!ref"]),
      re = Array.isArray(b),
      Q = [];
    (It(P, 0, s(1030)), It(P, 6, l(K)));
    for (var J = Math.min(K.e.r, 8191), q = K.s.r; q <= J; ++q)
      for (var ce = rt(q), F = K.s.c; F <= K.e.c; ++F) {
        q === K.s.r && (Q[F] = Je(F));
        var Te = Q[F] + ce,
          he = re ? (b[q] || [])[F] : b[Te];
        if (!(!he || he.t == "z"))
          if (he.t == "n")
            (he.v | 0) == he.v && he.v >= -32768 && he.v <= 32767
              ? It(P, 13, h(q, F, he.v))
              : It(P, 14, d(q, F, he.v));
          else {
            var ve = Jt(he);
            It(P, 15, m(q, F, ve.slice(0, 239)));
          }
      }
    return (It(P, 1), P.end());
  }
  function n(b, O) {
    var L = O || {};
    if ((+L.codepage >= 0 && Pt(+L.codepage), L.type == "string"))
      throw new Error("Cannot write WK3 to JS string");
    var P = ln();
    It(P, 0, o(b));
    for (var K = 0, re = 0; K < b.SheetNames.length; ++K)
      (b.Sheets[b.SheetNames[K]] || {})["!ref"] &&
        It(P, 27, j(b.SheetNames[K], re++));
    var Q = 0;
    for (K = 0; K < b.SheetNames.length; ++K) {
      var J = b.Sheets[b.SheetNames[K]];
      if (!(!J || !J["!ref"])) {
        for (
          var q = He(J["!ref"]),
            ce = Array.isArray(J),
            F = [],
            Te = Math.min(q.e.r, 8191),
            he = q.s.r;
          he <= Te;
          ++he
        )
          for (var ve = rt(he), pe = q.s.c; pe <= q.e.c; ++pe) {
            he === q.s.r && (F[pe] = Je(pe));
            var oe = F[pe] + ve,
              ue = ce ? (J[he] || [])[pe] : J[oe];
            if (!(!ue || ue.t == "z"))
              if (ue.t == "n") It(P, 23, I(he, pe, Q, ue.v));
              else {
                var ke = Jt(ue);
                It(P, 22, k(he, pe, Q, ke.slice(0, 239)));
              }
          }
        ++Q;
      }
    }
    return (It(P, 1), P.end());
  }
  function s(b) {
    var O = qe(2);
    return (O.write_shift(2, b), O);
  }
  function o(b) {
    var O = qe(26);
    (O.write_shift(2, 4096), O.write_shift(2, 4), O.write_shift(4, 0));
    for (var L = 0, P = 0, K = 0, re = 0; re < b.SheetNames.length; ++re) {
      var Q = b.SheetNames[re],
        J = b.Sheets[Q];
      if (!(!J || !J["!ref"])) {
        ++K;
        var q = Oa(J["!ref"]);
        (L < q.e.r && (L = q.e.r), P < q.e.c && (P = q.e.c));
      }
    }
    return (
      L > 8191 && (L = 8191),
      O.write_shift(2, L),
      O.write_shift(1, K),
      O.write_shift(1, P),
      O.write_shift(2, 0),
      O.write_shift(2, 0),
      O.write_shift(1, 1),
      O.write_shift(1, 2),
      O.write_shift(4, 0),
      O.write_shift(4, 0),
      O
    );
  }
  function i(b, O, L) {
    var P = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return O == 8 && L.qpro
      ? ((P.s.c = b.read_shift(1)),
        b.l++,
        (P.s.r = b.read_shift(2)),
        (P.e.c = b.read_shift(1)),
        b.l++,
        (P.e.r = b.read_shift(2)),
        P)
      : ((P.s.c = b.read_shift(2)),
        (P.s.r = b.read_shift(2)),
        O == 12 && L.qpro && (b.l += 2),
        (P.e.c = b.read_shift(2)),
        (P.e.r = b.read_shift(2)),
        O == 12 && L.qpro && (b.l += 2),
        P.s.c == 65535 && (P.s.c = P.e.c = P.s.r = P.e.r = 0),
        P);
  }
  function l(b) {
    var O = qe(8);
    return (
      O.write_shift(2, b.s.c),
      O.write_shift(2, b.s.r),
      O.write_shift(2, b.e.c),
      O.write_shift(2, b.e.r),
      O
    );
  }
  function c(b, O, L) {
    var P = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return (
      L.qpro && L.vers != 20768
        ? ((P[0].c = b.read_shift(1)),
          (P[3] = b.read_shift(1)),
          (P[0].r = b.read_shift(2)),
          (b.l += 2))
        : ((P[2] = b.read_shift(1)),
          (P[0].c = b.read_shift(2)),
          (P[0].r = b.read_shift(2))),
      P
    );
  }
  function p(b, O, L) {
    var P = b.l + O,
      K = c(b, O, L);
    if (((K[1].t = "s"), L.vers == 20768)) {
      b.l++;
      var re = b.read_shift(1);
      return ((K[1].v = b.read_shift(re, "utf8")), K);
    }
    return (L.qpro && b.l++, (K[1].v = b.read_shift(P - b.l, "cstr")), K);
  }
  function m(b, O, L) {
    var P = qe(7 + L.length);
    (P.write_shift(1, 255),
      P.write_shift(2, O),
      P.write_shift(2, b),
      P.write_shift(1, 39));
    for (var K = 0; K < P.length; ++K) {
      var re = L.charCodeAt(K);
      P.write_shift(1, re >= 128 ? 95 : re);
    }
    return (P.write_shift(1, 0), P);
  }
  function f(b, O, L) {
    var P = c(b, O, L);
    return ((P[1].v = b.read_shift(2, "i")), P);
  }
  function h(b, O, L) {
    var P = qe(7);
    return (
      P.write_shift(1, 255),
      P.write_shift(2, O),
      P.write_shift(2, b),
      P.write_shift(2, L, "i"),
      P
    );
  }
  function x(b, O, L) {
    var P = c(b, O, L);
    return ((P[1].v = b.read_shift(8, "f")), P);
  }
  function d(b, O, L) {
    var P = qe(13);
    return (
      P.write_shift(1, 255),
      P.write_shift(2, O),
      P.write_shift(2, b),
      P.write_shift(8, L, "f"),
      P
    );
  }
  function u(b, O, L) {
    var P = b.l + O,
      K = c(b, O, L);
    if (((K[1].v = b.read_shift(8, "f")), L.qpro)) b.l = P;
    else {
      var re = b.read_shift(2);
      (M(b.slice(b.l, b.l + re), K), (b.l += re));
    }
    return K;
  }
  function A(b, O, L) {
    var P = O & 32768;
    return (
      (O &= -32769),
      (O = (P ? b : 0) + (O >= 8192 ? O - 16384 : O)),
      (P ? "" : "$") + (L ? Je(O) : rt(O))
    );
  }
  var B = {
      51: ["FALSE", 0],
      52: ["TRUE", 0],
      70: ["LEN", 1],
      80: ["SUM", 69],
      81: ["AVERAGEA", 69],
      82: ["COUNTA", 69],
      83: ["MINA", 69],
      84: ["MAXA", 69],
      111: ["T", 1],
    },
    w = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "+",
      "-",
      "*",
      "/",
      "^",
      "=",
      "<>",
      "<=",
      ">=",
      "<",
      ">",
      "",
      "",
      "",
      "",
      "&",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  function M(b, O) {
    tt(b, 0);
    for (var L = [], P = 0, K = "", re = "", Q = "", J = ""; b.l < b.length; ) {
      var q = b[b.l++];
      switch (q) {
        case 0:
          L.push(b.read_shift(8, "f"));
          break;
        case 1:
          ((re = A(O[0].c, b.read_shift(2), !0)),
            (K = A(O[0].r, b.read_shift(2), !1)),
            L.push(re + K));
          break;
        case 2:
          {
            var ce = A(O[0].c, b.read_shift(2), !0),
              F = A(O[0].r, b.read_shift(2), !1);
            ((re = A(O[0].c, b.read_shift(2), !0)),
              (K = A(O[0].r, b.read_shift(2), !1)),
              L.push(ce + F + ":" + re + K));
          }
          break;
        case 3:
          if (b.l < b.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          L.push("(" + L.pop() + ")");
          break;
        case 5:
          L.push(b.read_shift(2));
          break;
        case 6:
          {
            for (var Te = ""; (q = b[b.l++]); ) Te += String.fromCharCode(q);
            L.push('"' + Te.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          L.push("-" + L.pop());
          break;
        case 23:
          L.push("+" + L.pop());
          break;
        case 22:
          L.push("NOT(" + L.pop() + ")");
          break;
        case 20:
        case 21:
          ((J = L.pop()),
            (Q = L.pop()),
            L.push(["AND", "OR"][q - 20] + "(" + Q + "," + J + ")"));
          break;
        default:
          if (q < 32 && w[q])
            ((J = L.pop()), (Q = L.pop()), L.push(Q + w[q] + J));
          else if (B[q]) {
            if (((P = B[q][1]), P == 69 && (P = b[b.l++]), P > L.length)) {
              console.error(
                "WK1 bad formula parse 0x" +
                  q.toString(16) +
                  ":|" +
                  L.join("|") +
                  "|",
              );
              return;
            }
            var he = L.slice(-P);
            ((L.length -= P), L.push(B[q][0] + "(" + he.join(",") + ")"));
          } else
            return q <= 7
              ? console.error("WK1 invalid opcode " + q.toString(16))
              : q <= 24
                ? console.error("WK1 unsupported op " + q.toString(16))
                : q <= 30
                  ? console.error("WK1 invalid opcode " + q.toString(16))
                  : q <= 115
                    ? console.error(
                        "WK1 unsupported function opcode " + q.toString(16),
                      )
                    : console.error(
                        "WK1 unrecognized opcode " + q.toString(16),
                      );
      }
    }
    L.length == 1
      ? (O[1].f = "" + L[0])
      : console.error("WK1 bad formula parse |" + L.join("|") + "|");
  }
  function H(b) {
    var O = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return (
      (O[0].r = b.read_shift(2)),
      (O[3] = b[b.l++]),
      (O[0].c = b[b.l++]),
      O
    );
  }
  function U(b, O) {
    var L = H(b);
    return ((L[1].t = "s"), (L[1].v = b.read_shift(O - 4, "cstr")), L);
  }
  function k(b, O, L, P) {
    var K = qe(6 + P.length);
    (K.write_shift(2, b),
      K.write_shift(1, L),
      K.write_shift(1, O),
      K.write_shift(1, 39));
    for (var re = 0; re < P.length; ++re) {
      var Q = P.charCodeAt(re);
      K.write_shift(1, Q >= 128 ? 95 : Q);
    }
    return (K.write_shift(1, 0), K);
  }
  function S(b, O) {
    var L = H(b);
    L[1].v = b.read_shift(2);
    var P = L[1].v >> 1;
    if (L[1].v & 1)
      switch (P & 7) {
        case 0:
          P = (P >> 3) * 5e3;
          break;
        case 1:
          P = (P >> 3) * 500;
          break;
        case 2:
          P = (P >> 3) / 20;
          break;
        case 3:
          P = (P >> 3) / 200;
          break;
        case 4:
          P = (P >> 3) / 2e3;
          break;
        case 5:
          P = (P >> 3) / 2e4;
          break;
        case 6:
          P = (P >> 3) / 16;
          break;
        case 7:
          P = (P >> 3) / 64;
          break;
      }
    return ((L[1].v = P), L);
  }
  function _(b, O) {
    var L = H(b),
      P = b.read_shift(4),
      K = b.read_shift(4),
      re = b.read_shift(2);
    if (re == 65535)
      return (
        P === 0 && K === 3221225472
          ? ((L[1].t = "e"), (L[1].v = 15))
          : P === 0 && K === 3489660928
            ? ((L[1].t = "e"), (L[1].v = 42))
            : (L[1].v = 0),
        L
      );
    var Q = re & 32768;
    return (
      (re = (re & 32767) - 16446),
      (L[1].v = (1 - Q * 2) * (K * Math.pow(2, re + 32) + P * Math.pow(2, re))),
      L
    );
  }
  function I(b, O, L, P) {
    var K = qe(14);
    if ((K.write_shift(2, b), K.write_shift(1, L), K.write_shift(1, O), P == 0))
      return (
        K.write_shift(4, 0),
        K.write_shift(4, 0),
        K.write_shift(2, 65535),
        K
      );
    var re = 0,
      Q = 0,
      J = 0,
      q = 0;
    return (
      P < 0 && ((re = 1), (P = -P)),
      (Q = Math.log2(P) | 0),
      (P /= Math.pow(2, Q - 31)),
      (q = P >>> 0),
      q & 2147483648 || ((P /= 2), ++Q, (q = P >>> 0)),
      (P -= q),
      (q |= 2147483648),
      (q >>>= 0),
      (P *= Math.pow(2, 32)),
      (J = P >>> 0),
      K.write_shift(4, J),
      K.write_shift(4, q),
      (Q += 16383 + (re ? 32768 : 0)),
      K.write_shift(2, Q),
      K
    );
  }
  function R(b, O) {
    var L = _(b);
    return ((b.l += O - 14), L);
  }
  function N(b, O) {
    var L = H(b),
      P = b.read_shift(4);
    return ((L[1].v = P >> 6), L);
  }
  function X(b, O) {
    var L = H(b),
      P = b.read_shift(8, "f");
    return ((L[1].v = P), L);
  }
  function ae(b, O) {
    var L = X(b);
    return ((b.l += O - 10), L);
  }
  function ee(b, O) {
    return b[b.l + O - 1] == 0 ? b.read_shift(O, "cstr") : "";
  }
  function ie(b, O) {
    var L = b[b.l++];
    L > O - 1 && (L = O - 1);
    for (var P = ""; P.length < L; ) P += String.fromCharCode(b[b.l++]);
    return P;
  }
  function Z(b, O, L) {
    if (!(!L.qpro || O < 21)) {
      var P = b.read_shift(1);
      ((b.l += 17), (b.l += 1), (b.l += 2));
      var K = b.read_shift(O - 21, "cstr");
      return [P, K];
    }
  }
  function xe(b, O) {
    for (var L = {}, P = b.l + O; b.l < P; ) {
      var K = b.read_shift(2);
      if (K == 14e3) {
        for (L[K] = [0, ""], L[K][0] = b.read_shift(2); b[b.l]; )
          ((L[K][1] += String.fromCharCode(b[b.l])), b.l++);
        b.l++;
      }
    }
    return L;
  }
  function j(b, O) {
    var L = qe(5 + b.length);
    (L.write_shift(2, 14e3), L.write_shift(2, O));
    for (var P = 0; P < b.length; ++P) {
      var K = b.charCodeAt(P);
      L[L.l++] = K > 127 ? 95 : K;
    }
    return ((L[L.l++] = 0), L);
  }
  var fe = {
      0: { n: "BOF", f: $e },
      1: { n: "EOF" },
      2: { n: "CALCMODE" },
      3: { n: "CALCORDER" },
      4: { n: "SPLIT" },
      5: { n: "SYNC" },
      6: { n: "RANGE", f: i },
      7: { n: "WINDOW1" },
      8: { n: "COLW1" },
      9: { n: "WINTWO" },
      10: { n: "COLW2" },
      11: { n: "NAME" },
      12: { n: "BLANK" },
      13: { n: "INTEGER", f },
      14: { n: "NUMBER", f: x },
      15: { n: "LABEL", f: p },
      16: { n: "FORMULA", f: u },
      24: { n: "TABLE" },
      25: { n: "ORANGE" },
      26: { n: "PRANGE" },
      27: { n: "SRANGE" },
      28: { n: "FRANGE" },
      29: { n: "KRANGE1" },
      32: { n: "HRANGE" },
      35: { n: "KRANGE2" },
      36: { n: "PROTEC" },
      37: { n: "FOOTER" },
      38: { n: "HEADER" },
      39: { n: "SETUP" },
      40: { n: "MARGINS" },
      41: { n: "LABELFMT" },
      42: { n: "TITLES" },
      43: { n: "SHEETJS" },
      45: { n: "GRAPH" },
      46: { n: "NGRAPH" },
      47: { n: "CALCCOUNT" },
      48: { n: "UNFORMATTED" },
      49: { n: "CURSORW12" },
      50: { n: "WINDOW" },
      51: { n: "STRING", f: p },
      55: { n: "PASSWORD" },
      56: { n: "LOCKED" },
      60: { n: "QUERY" },
      61: { n: "QUERYNAME" },
      62: { n: "PRINT" },
      63: { n: "PRINTNAME" },
      64: { n: "GRAPH2" },
      65: { n: "GRAPHNAME" },
      66: { n: "ZOOM" },
      67: { n: "SYMSPLIT" },
      68: { n: "NSROWS" },
      69: { n: "NSCOLS" },
      70: { n: "RULER" },
      71: { n: "NNAME" },
      72: { n: "ACOMM" },
      73: { n: "AMACRO" },
      74: { n: "PARSE" },
      102: { n: "PRANGES??" },
      103: { n: "RRANGES??" },
      104: { n: "FNAME??" },
      105: { n: "MRANGES??" },
      204: { n: "SHEETNAMECS", f: ee },
      222: { n: "SHEETNAMELP", f: ie },
      65535: { n: "" },
    },
    ne = {
      0: { n: "BOF" },
      1: { n: "EOF" },
      2: { n: "PASSWORD" },
      3: { n: "CALCSET" },
      4: { n: "WINDOWSET" },
      5: { n: "SHEETCELLPTR" },
      6: { n: "SHEETLAYOUT" },
      7: { n: "COLUMNWIDTH" },
      8: { n: "HIDDENCOLUMN" },
      9: { n: "USERRANGE" },
      10: { n: "SYSTEMRANGE" },
      11: { n: "ZEROFORCE" },
      12: { n: "SORTKEYDIR" },
      13: { n: "FILESEAL" },
      14: { n: "DATAFILLNUMS" },
      15: { n: "PRINTMAIN" },
      16: { n: "PRINTSTRING" },
      17: { n: "GRAPHMAIN" },
      18: { n: "GRAPHSTRING" },
      19: { n: "??" },
      20: { n: "ERRCELL" },
      21: { n: "NACELL" },
      22: { n: "LABEL16", f: U },
      23: { n: "NUMBER17", f: _ },
      24: { n: "NUMBER18", f: S },
      25: { n: "FORMULA19", f: R },
      26: { n: "FORMULA1A" },
      27: { n: "XFORMAT", f: xe },
      28: { n: "DTLABELMISC" },
      29: { n: "DTLABELCELL" },
      30: { n: "GRAPHWINDOW" },
      31: { n: "CPA" },
      32: { n: "LPLAUTO" },
      33: { n: "QUERY" },
      34: { n: "HIDDENSHEET" },
      35: { n: "??" },
      37: { n: "NUMBER25", f: N },
      38: { n: "??" },
      39: { n: "NUMBER27", f: X },
      40: { n: "FORMULA28", f: ae },
      142: { n: "??" },
      147: { n: "??" },
      150: { n: "??" },
      151: { n: "??" },
      152: { n: "??" },
      153: { n: "??" },
      154: { n: "??" },
      155: { n: "??" },
      156: { n: "??" },
      163: { n: "??" },
      174: { n: "??" },
      175: { n: "??" },
      176: { n: "??" },
      177: { n: "??" },
      184: { n: "??" },
      185: { n: "??" },
      186: { n: "??" },
      187: { n: "??" },
      188: { n: "??" },
      195: { n: "??" },
      201: { n: "??" },
      204: { n: "SHEETNAMECS", f: ee },
      205: { n: "??" },
      206: { n: "??" },
      207: { n: "??" },
      208: { n: "??" },
      256: { n: "??" },
      259: { n: "??" },
      260: { n: "??" },
      261: { n: "??" },
      262: { n: "??" },
      263: { n: "??" },
      265: { n: "??" },
      266: { n: "??" },
      267: { n: "??" },
      268: { n: "??" },
      270: { n: "??" },
      271: { n: "??" },
      384: { n: "??" },
      389: { n: "??" },
      390: { n: "??" },
      393: { n: "??" },
      396: { n: "??" },
      512: { n: "??" },
      514: { n: "??" },
      513: { n: "??" },
      516: { n: "??" },
      517: { n: "??" },
      640: { n: "??" },
      641: { n: "??" },
      642: { n: "??" },
      643: { n: "??" },
      644: { n: "??" },
      645: { n: "??" },
      646: { n: "??" },
      647: { n: "??" },
      648: { n: "??" },
      658: { n: "??" },
      659: { n: "??" },
      660: { n: "??" },
      661: { n: "??" },
      662: { n: "??" },
      665: { n: "??" },
      666: { n: "??" },
      768: { n: "??" },
      772: { n: "??" },
      1537: { n: "SHEETINFOQP", f: Z },
      1600: { n: "??" },
      1602: { n: "??" },
      1793: { n: "??" },
      1794: { n: "??" },
      1795: { n: "??" },
      1796: { n: "??" },
      1920: { n: "??" },
      2048: { n: "??" },
      2049: { n: "??" },
      2052: { n: "??" },
      2688: { n: "??" },
      10998: { n: "??" },
      12849: { n: "??" },
      28233: { n: "??" },
      28484: { n: "??" },
      65535: { n: "" },
    };
  return { sheet_to_wk1: r, book_to_wk3: n, to_workbook: a };
})();
function Nd(e) {
  var a = {},
    t = e.match(ut),
    r = 0,
    n = !1;
  if (t)
    for (; r != t.length; ++r) {
      var s = ge(t[r]);
      switch (s[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!s.val) break;
        case "<shadow>":
        case "<shadow/>":
          a.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (s.val == "1") break;
          a.cp = Tn[parseInt(s.val, 10)];
          break;
        case "<outline":
          if (!s.val) break;
        case "<outline>":
        case "<outline/>":
          a.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          a.name = s.val;
          break;
        case "<sz":
          a.sz = s.val;
          break;
        case "<strike":
          if (!s.val) break;
        case "<strike>":
        case "<strike/>":
          a.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!s.val) break;
          switch (s.val) {
            case "double":
              a.uval = "double";
              break;
            case "singleAccounting":
              a.uval = "single-accounting";
              break;
            case "doubleAccounting":
              a.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          a.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (s.val == "0") break;
        case "<b>":
        case "<b/>":
          a.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (s.val == "0") break;
        case "<i>":
        case "<i/>":
          a.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          s.rgb && (a.color = s.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          a.family = s.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          a.valign = s.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (s[0].charCodeAt(1) !== 47 && !n)
            throw new Error("Unrecognized rich format " + s[0]);
      }
    }
  return a;
}
var Bd = (function () {
    var e = rr("t"),
      a = rr("rPr");
    function t(s) {
      var o = s.match(e);
      if (!o) return { t: "s", v: "" };
      var i = { t: "s", v: ye(o[1]) },
        l = s.match(a);
      return (l && (i.s = Nd(l[1])), i);
    }
    var r = /<(?:\w+:)?r>/g,
      n = /<\/(?:\w+:)?r>/;
    return function (o) {
      return o
        .replace(r, "")
        .split(n)
        .map(t)
        .filter(function (i) {
          return i.v;
        });
    };
  })(),
  Id = (function () {
    var a = /(\r\n|\n)/g;
    function t(n, s, o) {
      var i = [];
      (n.u && i.push("text-decoration: underline;"),
        n.uval && i.push("text-underline-style:" + n.uval + ";"),
        n.sz && i.push("font-size:" + n.sz + "pt;"),
        n.outline && i.push("text-effect: outline;"),
        n.shadow && i.push("text-shadow: auto;"),
        s.push('<span style="' + i.join("") + '">'),
        n.b && (s.push("<b>"), o.push("</b>")),
        n.i && (s.push("<i>"), o.push("</i>")),
        n.strike && (s.push("<s>"), o.push("</s>")));
      var l = n.valign || "";
      return (
        l == "superscript" || l == "super"
          ? (l = "sup")
          : l == "subscript" && (l = "sub"),
        l != "" && (s.push("<" + l + ">"), o.push("</" + l + ">")),
        o.push("</span>"),
        n
      );
    }
    function r(n) {
      var s = [[], n.v, []];
      return n.v
        ? (n.s && t(n.s, s[0], s[2]),
          s[0].join("") + s[1].replace(a, "<br/>") + s[2].join(""))
        : "";
    }
    return function (s) {
      return s.map(r).join("");
    };
  })(),
  Rd = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
  Pd = /<(?:\w+:)?r>/,
  Od = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function Un(e, a) {
  var t = a ? a.cellHTML : !0,
    r = {};
  return e
    ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/)
        ? ((r.t = ye(
            Ie(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""),
          )),
          (r.r = Ie(e)),
          t && (r.h = Fn(r.t)))
        : e.match(Pd) &&
          ((r.r = Ie(e)),
          (r.t = ye(
            Ie((e.replace(Od, "").match(Rd) || []).join("").replace(ut, "")),
          )),
          t && (r.h = Id(Bd(r.r)))),
      r)
    : { t: "" };
}
var Ld = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
  Md = /<(?:\w+:)?(?:si|sstItem)>/g,
  Ud = /<\/(?:\w+:)?(?:si|sstItem)>/;
function jd(e, a) {
  var t = [],
    r = "";
  if (!e) return t;
  var n = e.match(Ld);
  if (n) {
    r = n[2].replace(Md, "").split(Ud);
    for (var s = 0; s != r.length; ++s) {
      var o = Un(r[s].trim(), a);
      o != null && (t[t.length] = o);
    }
    ((n = ge(n[1])), (t.Count = n.count), (t.Unique = n.uniqueCount));
  }
  return t;
}
function Hd(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Gd(e, a) {
  var t = [],
    r = !1;
  return (
    Zt(e, function (s, o, i) {
      switch (i) {
        case 159:
          ((t.Count = s[0]), (t.Unique = s[1]));
          break;
        case 19:
          t.push(s);
          break;
        case 160:
          return !0;
        case 35:
          r = !0;
          break;
        case 36:
          r = !1;
          break;
        default:
          if ((o.T, !r || a.WTF))
            throw new Error("Unexpected record 0x" + i.toString(16));
      }
    }),
    t
  );
}
function yi(e) {
  for (var a = [], t = e.split(""), r = 0; r < t.length; ++r)
    a[r] = t[r].charCodeAt(0);
  return a;
}
function qt(e, a) {
  var t = {};
  return (
    (t.Major = e.read_shift(2)),
    (t.Minor = e.read_shift(2)),
    a >= 4 && (e.l += a - 4),
    t
  );
}
function Vd(e) {
  var a = {};
  return (
    (a.id = e.read_shift(0, "lpp4")),
    (a.R = qt(e, 4)),
    (a.U = qt(e, 4)),
    (a.W = qt(e, 4)),
    a
  );
}
function Wd(e) {
  for (
    var a = e.read_shift(4),
      t = e.l + a - 4,
      r = {},
      n = e.read_shift(4),
      s = [];
    n-- > 0;
  )
    s.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (((r.name = e.read_shift(0, "lpp4")), (r.comps = s), e.l != t))
    throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return r;
}
function zd(e) {
  var a = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) a.push(Wd(e));
  return a;
}
function Xd(e) {
  var a = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function $d(e) {
  var a = {};
  return (
    e.read_shift(4),
    (e.l += 4),
    (a.id = e.read_shift(0, "lpp4")),
    (a.name = e.read_shift(0, "lpp4")),
    (a.R = qt(e, 4)),
    (a.U = qt(e, 4)),
    (a.W = qt(e, 4)),
    a
  );
}
function Kd(e) {
  var a = $d(e);
  if (
    ((a.ename = e.read_shift(0, "8lpp4")),
    (a.blksz = e.read_shift(4)),
    (a.cmode = e.read_shift(4)),
    e.read_shift(4) != 4)
  )
    throw new Error("Bad !Primary record");
  return a;
}
function Fi(e, a) {
  var t = e.l + a,
    r = {};
  ((r.Flags = e.read_shift(4) & 63), (e.l += 4), (r.AlgID = e.read_shift(4)));
  var n = !1;
  switch (r.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = r.Flags == 36;
      break;
    case 26625:
      n = r.Flags == 4;
      break;
    case 0:
      n = r.Flags == 16 || r.Flags == 4 || r.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + r.AlgID;
  }
  if (!n) throw new Error("Encryption Flags/AlgID mismatch");
  return (
    (r.AlgIDHash = e.read_shift(4)),
    (r.KeySize = e.read_shift(4)),
    (r.ProviderType = e.read_shift(4)),
    (e.l += 8),
    (r.CSPName = e.read_shift((t - e.l) >> 1, "utf16le")),
    (e.l = t),
    r
  );
}
function Di(e, a) {
  var t = {},
    r = e.l + a;
  return (
    (e.l += 4),
    (t.Salt = e.slice(e.l, e.l + 16)),
    (e.l += 16),
    (t.Verifier = e.slice(e.l, e.l + 16)),
    (e.l += 16),
    e.read_shift(4),
    (t.VerifierHash = e.slice(e.l, r)),
    (e.l = r),
    t
  );
}
function Yd(e) {
  var a = qt(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, qd(e)];
    case 3:
      return [a.Minor, Jd()];
    case 4:
      return [a.Minor, Zd(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function qd(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4),
    r = Fi(e, t),
    n = Di(e, e.length - e.l);
  return { t: "Std", h: r, v: n };
}
function Jd() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function Zd(e) {
  var a = [
    "saltSize",
    "blockSize",
    "keyBits",
    "hashSize",
    "cipherAlgorithm",
    "cipherChaining",
    "hashAlgorithm",
    "saltValue",
  ];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"),
    r = {};
  return (
    t.replace(ut, function (s) {
      var o = ge(s);
      switch (zt(o[0])) {
        case "<?xml":
          break;
        case "<encryption":
        case "</encryption>":
          break;
        case "<keyData":
          a.forEach(function (i) {
            r[i] = o[i];
          });
          break;
        case "<dataIntegrity":
          ((r.encryptedHmacKey = o.encryptedHmacKey),
            (r.encryptedHmacValue = o.encryptedHmacValue));
          break;
        case "<keyEncryptors>":
        case "<keyEncryptors":
          r.encs = [];
          break;
        case "</keyEncryptors>":
          break;
        case "<keyEncryptor":
          r.uri = o.uri;
          break;
        case "</keyEncryptor>":
          break;
        case "<encryptedKey":
          r.encs.push(o);
          break;
        default:
          throw o[0];
      }
    }),
    r
  );
}
function Qd(e, a) {
  var t = {},
    r = (t.EncryptionVersionInfo = qt(e, 4));
  if (((a -= 4), r.Minor != 2))
    throw new Error("unrecognized minor version code: " + r.Minor);
  if (r.Major > 4 || r.Major < 2)
    throw new Error("unrecognized major version code: " + r.Major);
  ((t.Flags = e.read_shift(4)), (a -= 4));
  var n = e.read_shift(4);
  return (
    (a -= 4),
    (t.EncryptionHeader = Fi(e, n)),
    (a -= n),
    (t.EncryptionVerifier = Di(e, a)),
    t
  );
}
function ef(e) {
  var a = {},
    t = (a.EncryptionVersionInfo = qt(e, 4));
  if (t.Major != 1 || t.Minor != 1)
    throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return (
    (a.Salt = e.read_shift(16)),
    (a.EncryptedVerifier = e.read_shift(16)),
    (a.EncryptedVerifierHash = e.read_shift(16)),
    a
  );
}
function tf(e) {
  var a = 0,
    t,
    r = yi(e),
    n = r.length + 1,
    s,
    o,
    i,
    l,
    c;
  for (t = sa(n), t[0] = r.length, s = 1; s != n; ++s) t[s] = r[s - 1];
  for (s = n - 1; s >= 0; --s)
    ((o = t[s]),
      (i = a & 16384 ? 1 : 0),
      (l = (a << 1) & 32767),
      (c = i | l),
      (a = c ^ o));
  return a ^ 52811;
}
var Ni = (function () {
    var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0],
      a = [
        57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287,
        34041, 10252, 43370, 20163,
      ],
      t = [
        44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933,
        60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624,
        23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807,
        41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605,
        29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774,
        3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203,
        28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601,
        17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079,
        14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105,
        26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657,
        9314, 18628,
      ],
      r = function (o) {
        return ((o / 2) | (o * 128)) & 255;
      },
      n = function (o, i) {
        return r(o ^ i);
      },
      s = function (o) {
        for (var i = a[o.length - 1], l = 104, c = o.length - 1; c >= 0; --c)
          for (var p = o[c], m = 0; m != 7; ++m)
            (p & 64 && (i ^= t[l]), (p *= 2), --l);
        return i;
      };
    return function (o) {
      for (
        var i = yi(o), l = s(i), c = i.length, p = sa(16), m = 0;
        m != 16;
        ++m
      )
        p[m] = 0;
      var f, h, x;
      for (
        (c & 1) === 1 &&
        ((f = l >> 8),
        (p[c] = n(e[0], f)),
        --c,
        (f = l & 255),
        (h = i[i.length - 1]),
        (p[c] = n(h, f)));
        c > 0;
      )
        (--c,
          (f = l >> 8),
          (p[c] = n(i[c], f)),
          --c,
          (f = l & 255),
          (p[c] = n(i[c], f)));
      for (c = 15, x = 15 - i.length; x > 0; )
        ((f = l >> 8),
          (p[c] = n(e[x], f)),
          --c,
          --x,
          (f = l & 255),
          (p[c] = n(i[c], f)),
          --c,
          --x);
      return p;
    };
  })(),
  af = function (e, a, t, r, n) {
    (n || (n = a), r || (r = Ni(e)));
    var s, o;
    for (s = 0; s != a.length; ++s)
      ((o = a[s]),
        (o ^= r[t]),
        (o = ((o >> 5) | (o << 3)) & 255),
        (n[s] = o),
        ++t);
    return [n, t, r];
  },
  rf = function (e) {
    var a = 0,
      t = Ni(e);
    return function (r) {
      var n = af("", r, a, t);
      return ((a = n[1]), n[0]);
    };
  };
function nf(e, a, t, r) {
  var n = { key: $e(e), verificationBytes: $e(e) };
  return (
    t.password && (n.verifier = tf(t.password)),
    (r.valid = n.verificationBytes === n.verifier),
    r.valid && (r.insitu = rf(t.password)),
    n
  );
}
function sf(e, a, t) {
  var r = t || {};
  return (
    (r.Info = e.read_shift(2)),
    (e.l -= 2),
    r.Info === 1 ? (r.Data = ef(e)) : (r.Data = Qd(e, a)),
    r
  );
}
function of(e, a, t) {
  var r = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return (r.Type ? sf(e, a - 2, r) : nf(e, t.biff >= 8 ? a : a - 2, t, r), r);
}
var cf = (function () {
  function e(n, s) {
    switch (s.type) {
      case "base64":
        return a(bt(n), s);
      case "binary":
        return a(n, s);
      case "buffer":
        return a(Ae && Buffer.isBuffer(n) ? n.toString("binary") : va(n), s);
      case "array":
        return a(ua(n), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function a(n, s) {
    var o = s || {},
      i = o.dense ? [] : {},
      l = n.match(/\\trowd.*?\\row\b/g);
    if (!l.length) throw new Error("RTF missing table");
    var c = { s: { c: 0, r: 0 }, e: { c: 0, r: l.length - 1 } };
    return (
      l.forEach(function (p, m) {
        Array.isArray(i) && (i[m] = []);
        for (var f = /\\\w+\b/g, h = 0, x, d = -1; (x = f.exec(p)); ) {
          switch (x[0]) {
            case "\\cell":
              var u = p.slice(h, f.lastIndex - x[0].length);
              if ((u[0] == " " && (u = u.slice(1)), ++d, u.length)) {
                var A = { v: u, t: "s" };
                Array.isArray(i) ? (i[m][d] = A) : (i[_e({ r: m, c: d })] = A);
              }
              break;
          }
          h = f.lastIndex;
        }
        d > c.e.c && (c.e.c = d);
      }),
      (i["!ref"] = Ce(c)),
      i
    );
  }
  function t(n, s) {
    return ia(e(n, s), s);
  }
  function r(n) {
    for (
      var s = ["{\\rtf1\\ansi"],
        o = He(n["!ref"]),
        i,
        l = Array.isArray(n),
        c = o.s.r;
      c <= o.e.r;
      ++c
    ) {
      s.push("\\trowd\\trautofit1");
      for (var p = o.s.c; p <= o.e.c; ++p) s.push("\\cellx" + (p + 1));
      for (s.push("\\pard\\intbl"), p = o.s.c; p <= o.e.c; ++p) {
        var m = _e({ r: c, c: p });
        ((i = l ? (n[c] || [])[p] : n[m]),
          !(!i || (i.v == null && (!i.f || i.F))) &&
            (s.push(" " + (i.w || (Jt(i), i.w))), s.push("\\cell")));
      }
      s.push("\\pard\\intbl\\row");
    }
    return s.join("") + "}";
  }
  return { to_workbook: t, to_sheet: e, from_sheet: r };
})();
function lf(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [
    parseInt(a.slice(0, 2), 16),
    parseInt(a.slice(2, 4), 16),
    parseInt(a.slice(4, 6), 16),
  ];
}
function or(e) {
  for (var a = 0, t = 1; a != 3; ++a)
    t = t * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return t.toString(16).toUpperCase().slice(1);
}
function pf(e) {
  var a = e[0] / 255,
    t = e[1] / 255,
    r = e[2] / 255,
    n = Math.max(a, t, r),
    s = Math.min(a, t, r),
    o = n - s;
  if (o === 0) return [0, 0, a];
  var i = 0,
    l = 0,
    c = n + s;
  switch (((l = o / (c > 1 ? 2 - c : c)), n)) {
    case a:
      i = ((t - r) / o + 6) % 6;
      break;
    case t:
      i = (r - a) / o + 2;
      break;
    case r:
      i = (a - t) / o + 4;
      break;
  }
  return [i / 6, l, c / 2];
}
function df(e) {
  var a = e[0],
    t = e[1],
    r = e[2],
    n = t * 2 * (r < 0.5 ? r : 1 - r),
    s = r - n / 2,
    o = [s, s, s],
    i = 6 * a,
    l;
  if (t !== 0)
    switch (i | 0) {
      case 0:
      case 6:
        ((l = n * i), (o[0] += n), (o[1] += l));
        break;
      case 1:
        ((l = n * (2 - i)), (o[0] += l), (o[1] += n));
        break;
      case 2:
        ((l = n * (i - 2)), (o[1] += n), (o[2] += l));
        break;
      case 3:
        ((l = n * (4 - i)), (o[1] += l), (o[2] += n));
        break;
      case 4:
        ((l = n * (i - 4)), (o[2] += n), (o[0] += l));
        break;
      case 5:
        ((l = n * (6 - i)), (o[2] += l), (o[0] += n));
        break;
    }
  for (var c = 0; c != 3; ++c) o[c] = Math.round(o[c] * 255);
  return o;
}
function Mr(e, a) {
  if (a === 0) return e;
  var t = pf(lf(e));
  return (
    a < 0 ? (t[2] = t[2] * (1 + a)) : (t[2] = 1 - (1 - t[2]) * (1 - a)),
    or(df(t))
  );
}
var Bi = 6,
  ff = 15,
  mf = 1,
  xt = Bi;
function Ur(e) {
  return Math.floor((e + Math.round(128 / xt) / 256) * xt);
}
function jr(e) {
  return Math.floor(((e - 5) / xt) * 100 + 0.5) / 100;
}
function mn(e) {
  return Math.round(((e * xt + 5) / xt) * 256) / 256;
}
function Qr(e) {
  return mn(jr(Ur(e)));
}
function jn(e) {
  var a = Math.abs(e - Qr(e)),
    t = xt;
  if (a > 0.005)
    for (xt = mf; xt < ff; ++xt)
      Math.abs(e - Qr(e)) <= a && ((a = Math.abs(e - Qr(e))), (t = xt));
  xt = t;
}
function Ba(e) {
  (e.width
    ? ((e.wpx = Ur(e.width)), (e.wch = jr(e.wpx)), (e.MDW = xt))
    : e.wpx
      ? ((e.wch = jr(e.wpx)), (e.width = mn(e.wch)), (e.MDW = xt))
      : typeof e.wch == "number" &&
        ((e.width = mn(e.wch)), (e.wpx = Ur(e.width)), (e.MDW = xt)),
    e.customWidth && delete e.customWidth);
}
var uf = 96,
  Ii = uf;
function Ri(e) {
  return (e * 96) / Ii;
}
function ir(e) {
  return (e * Ii) / 96;
}
var hf = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid",
};
function xf(e, a, t, r) {
  a.Borders = [];
  var n = {},
    s = !1;
  (e[0].match(ut) || []).forEach(function (o) {
    var i = ge(o);
    switch (zt(i[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        ((n = {}),
          i.diagonalUp && (n.diagonalUp = Oe(i.diagonalUp)),
          i.diagonalDown && (n.diagonalDown = Oe(i.diagonalDown)),
          a.Borders.push(n));
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (r && r.WTF && !s)
          throw new Error("unrecognized " + i[0] + " in borders");
    }
  });
}
function vf(e, a, t, r) {
  a.Fills = [];
  var n = {},
    s = !1;
  (e[0].match(ut) || []).forEach(function (o) {
    var i = ge(o);
    switch (zt(i[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        ((n = {}), a.Fills.push(n));
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        (a.Fills.push(n), (n = {}));
        break;
      case "<patternFill":
      case "<patternFill>":
        i.patternType && (n.patternType = i.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        (n.bgColor || (n.bgColor = {}),
          i.indexed && (n.bgColor.indexed = parseInt(i.indexed, 10)),
          i.theme && (n.bgColor.theme = parseInt(i.theme, 10)),
          i.tint && (n.bgColor.tint = parseFloat(i.tint)),
          i.rgb && (n.bgColor.rgb = i.rgb.slice(-6)));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        (n.fgColor || (n.fgColor = {}),
          i.theme && (n.fgColor.theme = parseInt(i.theme, 10)),
          i.tint && (n.fgColor.tint = parseFloat(i.tint)),
          i.rgb != null && (n.fgColor.rgb = i.rgb.slice(-6)));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (r && r.WTF && !s)
          throw new Error("unrecognized " + i[0] + " in fills");
    }
  });
}
function gf(e, a, t, r) {
  a.Fonts = [];
  var n = {},
    s = !1;
  (e[0].match(ut) || []).forEach(function (o) {
    var i = ge(o);
    switch (zt(i[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        (a.Fonts.push(n), (n = {}));
        break;
      case "<name":
        i.val && (n.name = Ie(i.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = i.val ? Oe(i.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "<i":
        n.italic = i.val ? Oe(i.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "<u":
        switch (i.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "<strike":
        n.strike = i.val ? Oe(i.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "<outline":
        n.outline = i.val ? Oe(i.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "<shadow":
        n.shadow = i.val ? Oe(i.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "<condense":
        n.condense = i.val ? Oe(i.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "<extend":
        n.extend = i.val ? Oe(i.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "<sz":
        i.val && (n.sz = +i.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        i.val && (n.vertAlign = i.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        i.val && (n.family = parseInt(i.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        i.val && (n.scheme = i.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (i.val == "1") break;
        i.codepage = Tn[parseInt(i.val, 10)];
        break;
      case "<color":
        if (
          (n.color || (n.color = {}),
          i.auto && (n.color.auto = Oe(i.auto)),
          i.rgb)
        )
          n.color.rgb = i.rgb.slice(-6);
        else if (i.indexed) {
          n.color.index = parseInt(i.indexed, 10);
          var l = fa[n.color.index];
          (n.color.index == 81 && (l = fa[1]),
            l || (l = fa[1]),
            (n.color.rgb =
              l[0].toString(16) + l[1].toString(16) + l[2].toString(16)));
        } else
          i.theme &&
            ((n.color.theme = parseInt(i.theme, 10)),
            i.tint && (n.color.tint = parseFloat(i.tint)),
            i.theme &&
              t.themeElements &&
              t.themeElements.clrScheme &&
              (n.color.rgb = Mr(
                t.themeElements.clrScheme[n.color.theme].rgb,
                n.color.tint || 0,
              )));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        s = !0;
        break;
      case "</AlternateContent>":
        s = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (r && r.WTF && !s)
          throw new Error("unrecognized " + i[0] + " in fonts");
    }
  });
}
function _f(e, a, t) {
  a.NumberFmt = [];
  for (var r = Wt(we), n = 0; n < r.length; ++n) a.NumberFmt[r[n]] = we[r[n]];
  var s = e[0].match(ut);
  if (s)
    for (n = 0; n < s.length; ++n) {
      var o = ge(s[n]);
      switch (zt(o[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var i = ye(Ie(o.formatCode)),
              l = parseInt(o.numFmtId, 10);
            if (((a.NumberFmt[l] = i), l > 0)) {
              if (l > 392) {
                for (l = 392; l > 60 && a.NumberFmt[l] != null; --l);
                a.NumberFmt[l] = i;
              }
              da(i, l);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (t.WTF) throw new Error("unrecognized " + o[0] + " in numFmts");
      }
    }
}
var kr = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
  Ar = [
    "applyAlignment",
    "applyBorder",
    "applyFill",
    "applyFont",
    "applyNumberFormat",
    "applyProtection",
    "pivotButton",
    "quotePrefix",
  ];
function Sf(e, a, t) {
  a.CellXf = [];
  var r,
    n = !1;
  (e[0].match(ut) || []).forEach(function (s) {
    var o = ge(s),
      i = 0;
    switch (zt(o[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (r = o, delete r[0], i = 0; i < kr.length; ++i)
          r[kr[i]] && (r[kr[i]] = parseInt(r[kr[i]], 10));
        for (i = 0; i < Ar.length; ++i) r[Ar[i]] && (r[Ar[i]] = Oe(r[Ar[i]]));
        if (a.NumberFmt && r.numFmtId > 392) {
          for (i = 392; i > 60; --i)
            if (a.NumberFmt[r.numFmtId] == a.NumberFmt[i]) {
              r.numFmtId = i;
              break;
            }
        }
        a.CellXf.push(r);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var l = {};
        (o.vertical && (l.vertical = o.vertical),
          o.horizontal && (l.horizontal = o.horizontal),
          o.textRotation != null && (l.textRotation = o.textRotation),
          o.indent && (l.indent = o.indent),
          o.wrapText && (l.wrapText = Oe(o.wrapText)),
          (r.alignment = l));
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (t && t.WTF && !n)
          throw new Error("unrecognized " + o[0] + " in cellXfs");
    }
  });
}
var wf = (function () {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,
    t = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,
    r = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,
    n = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,
    s = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function (i, l, c) {
    var p = {};
    if (!i) return p;
    i = i
      .replace(/<!--([\s\S]*?)-->/gm, "")
      .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var m;
    return (
      (m = i.match(a)) && _f(m, p, c),
      (m = i.match(n)) && gf(m, p, l, c),
      (m = i.match(r)) && vf(m, p, l, c),
      (m = i.match(s)) && xf(m, p, l, c),
      (m = i.match(t)) && Sf(m, p, c),
      p
    );
  };
})();
function Tf(e, a) {
  var t = e.read_shift(2),
    r = ft(e);
  return [t, r];
}
function Ef(e, a, t) {
  var r = {};
  r.sz = e.read_shift(2) / 20;
  var n = Bl(e);
  (n.fItalic && (r.italic = 1),
    n.fCondense && (r.condense = 1),
    n.fExtend && (r.extend = 1),
    n.fShadow && (r.shadow = 1),
    n.fOutline && (r.outline = 1),
    n.fStrikeout && (r.strike = 1));
  var s = e.read_shift(2);
  switch ((s === 700 && (r.bold = 1), e.read_shift(2))) {
    case 1:
      r.vertAlign = "superscript";
      break;
    case 2:
      r.vertAlign = "subscript";
      break;
  }
  var o = e.read_shift(1);
  o != 0 && (r.underline = o);
  var i = e.read_shift(1);
  i > 0 && (r.family = i);
  var l = e.read_shift(1);
  switch (
    (l > 0 && (r.charset = l), e.l++, (r.color = Nl(e)), e.read_shift(1))
  ) {
    case 1:
      r.scheme = "major";
      break;
    case 2:
      r.scheme = "minor";
      break;
  }
  return ((r.name = ft(e)), r);
}
var kf = mt;
function Af(e, a) {
  var t = e.l + a,
    r = e.read_shift(2),
    n = e.read_shift(2);
  return ((e.l = t), { ixfe: r, numFmtId: n });
}
var bf = mt;
function Cf(e, a, t) {
  var r = {};
  r.NumberFmt = [];
  for (var n in we) r.NumberFmt[n] = we[n];
  ((r.CellXf = []), (r.Fonts = []));
  var s = [],
    o = !1;
  return (
    Zt(e, function (l, c, p) {
      switch (p) {
        case 44:
          ((r.NumberFmt[l[0]] = l[1]), da(l[1], l[0]));
          break;
        case 43:
          (r.Fonts.push(l),
            l.color.theme != null &&
              a &&
              a.themeElements &&
              a.themeElements.clrScheme &&
              (l.color.rgb = Mr(
                a.themeElements.clrScheme[l.color.theme].rgb,
                l.color.tint || 0,
              )));
          break;
        case 1025:
          break;
        case 45:
          break;
        case 46:
          break;
        case 47:
          s[s.length - 1] == 617 && r.CellXf.push(l);
          break;
        case 48:
        case 507:
        case 572:
        case 475:
          break;
        case 1171:
        case 2102:
        case 1130:
        case 512:
        case 2095:
        case 3072:
          break;
        case 35:
          o = !0;
          break;
        case 36:
          o = !1;
          break;
        case 37:
          (s.push(p), (o = !0));
          break;
        case 38:
          (s.pop(), (o = !1));
          break;
        default:
          if (c.T > 0) s.push(p);
          else if (c.T < 0) s.pop();
          else if (!o || (t.WTF && s[s.length - 1] != 37))
            throw new Error("Unexpected record 0x" + p.toString(16));
      }
    }),
    r
  );
}
var yf = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>",
];
function Ff(e, a, t) {
  a.themeElements.clrScheme = [];
  var r = {};
  (e[0].match(ut) || []).forEach(function (n) {
    var s = ge(n);
    switch (s[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        r.rgb = s.val;
        break;
      case "<a:sysClr":
        r.rgb = s.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        s[0].charAt(1) === "/"
          ? ((a.themeElements.clrScheme[yf.indexOf(s[0])] = r), (r = {}))
          : (r.name = s[0].slice(3, s[0].length - 1));
        break;
      default:
        if (t && t.WTF)
          throw new Error("Unrecognized " + s[0] + " in clrScheme");
    }
  });
}
function Df() {}
function Nf() {}
var Bf = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
  If = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
  Rf = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function Pf(e, a, t) {
  a.themeElements = {};
  var r;
  [
    ["clrScheme", Bf, Ff],
    ["fontScheme", If, Df],
    ["fmtScheme", Rf, Nf],
  ].forEach(function (n) {
    if (!(r = e.match(n[1])))
      throw new Error(n[0] + " not found in themeElements");
    n[2](r, a, t);
  });
}
var Of = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function Pi(e, a) {
  (!e || e.length === 0) && (e = Lf());
  var t,
    r = {};
  if (!(t = e.match(Of))) throw new Error("themeElements not found in theme");
  return (Pf(t[0], r, a), (r.raw = e), r);
}
function Lf(e, a) {
  var t = [Xo];
  return (
    (t[t.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (t[t.length] = "<a:themeElements>"),
    (t[t.length] = '<a:clrScheme name="Office">'),
    (t[t.length] =
      '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (t[t.length] = "</a:clrScheme>"),
    (t[t.length] = '<a:fontScheme name="Office">'),
    (t[t.length] = "<a:majorFont>"),
    (t[t.length] = '<a:latin typeface="Cambria"/>'),
    (t[t.length] = '<a:ea typeface=""/>'),
    (t[t.length] = '<a:cs typeface=""/>'),
    (t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (t[t.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (t[t.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (t[t.length] = "</a:majorFont>"),
    (t[t.length] = "<a:minorFont>"),
    (t[t.length] = '<a:latin typeface="Calibri"/>'),
    (t[t.length] = '<a:ea typeface=""/>'),
    (t[t.length] = '<a:cs typeface=""/>'),
    (t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>'),
    (t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>'),
    (t[t.length] = '<a:font script="Hans" typeface="宋体"/>'),
    (t[t.length] = '<a:font script="Hant" typeface="新細明體"/>'),
    (t[t.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (t[t.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (t[t.length] = "</a:minorFont>"),
    (t[t.length] = "</a:fontScheme>"),
    (t[t.length] = '<a:fmtScheme name="Office">'),
    (t[t.length] = "<a:fillStyleLst>"),
    (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = "</a:fillStyleLst>"),
    (t[t.length] = "<a:lnStyleLst>"),
    (t[t.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] = "</a:lnStyleLst>"),
    (t[t.length] = "<a:effectStyleLst>"),
    (t[t.length] = "<a:effectStyle>"),
    (t[t.length] = "<a:effectLst>"),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = "</a:effectLst>"),
    (t[t.length] = "</a:effectStyle>"),
    (t[t.length] = "<a:effectStyle>"),
    (t[t.length] = "<a:effectLst>"),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = "</a:effectLst>"),
    (t[t.length] = "</a:effectStyle>"),
    (t[t.length] = "<a:effectStyle>"),
    (t[t.length] = "<a:effectLst>"),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = "</a:effectLst>"),
    (t[t.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (t[t.length] = "</a:effectStyle>"),
    (t[t.length] = "</a:effectStyleLst>"),
    (t[t.length] = "<a:bgFillStyleLst>"),
    (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = "</a:bgFillStyleLst>"),
    (t[t.length] = "</a:fmtScheme>"),
    (t[t.length] = "</a:themeElements>"),
    (t[t.length] = "<a:objectDefaults>"),
    (t[t.length] = "<a:spDef>"),
    (t[t.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (t[t.length] = "</a:spDef>"),
    (t[t.length] = "<a:lnDef>"),
    (t[t.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (t[t.length] = "</a:lnDef>"),
    (t[t.length] = "</a:objectDefaults>"),
    (t[t.length] = "<a:extraClrSchemeLst/>"),
    (t[t.length] = "</a:theme>"),
    t.join("")
  );
}
function Mf(e, a, t) {
  var r = e.l + a,
    n = e.read_shift(4);
  if (n !== 124226) {
    if (!t.cellStyles) {
      e.l = r;
      return;
    }
    var s = e.slice(e.l);
    e.l = r;
    var o;
    try {
      o = zo(s, { type: "array" });
    } catch {
      return;
    }
    var i = kt(o, "theme/theme/theme1.xml", !0);
    if (i) return Pi(i, t);
  }
}
function Uf(e) {
  return e.read_shift(4);
}
function jf(e) {
  var a = {};
  switch (
    ((a.xclrType = e.read_shift(2)),
    (a.nTintShade = e.read_shift(2)),
    a.xclrType)
  ) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = Hf(e, 4);
      break;
    case 2:
      a.xclrValue = wi(e);
      break;
    case 3:
      a.xclrValue = Uf(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return ((e.l += 8), a);
}
function Hf(e, a) {
  return mt(e, a);
}
function Gf(e, a) {
  return mt(e, a);
}
function Vf(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2) - 4,
    r = [a];
  switch (a) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      r[1] = jf(e);
      break;
    case 6:
      r[1] = Gf(e, t);
      break;
    case 14:
    case 15:
      r[1] = e.read_shift(t === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + a + " " + t);
  }
  return r;
}
function Wf(e, a) {
  var t = e.l + a;
  e.l += 2;
  var r = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), s = []; n-- > 0; ) s.push(Vf(e, t - e.l));
  return { ixfe: r, ext: s };
}
function zf(e, a) {
  a.forEach(function (t) {
    switch (t[0]) {
    }
  });
}
function Xf(e, a) {
  return { flags: e.read_shift(4), version: e.read_shift(4), name: ft(e) };
}
function $f(e) {
  for (var a = [], t = e.read_shift(4); t-- > 0; )
    a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function Kf(e) {
  return ((e.l += 4), e.read_shift(4) != 0);
}
function Yf(e, a, t) {
  var r = { Types: [], Cell: [], Value: [] },
    n = t || {},
    s = [],
    o = !1,
    i = 2;
  return (
    Zt(e, function (l, c, p) {
      switch (p) {
        case 335:
          r.Types.push({ name: l.name });
          break;
        case 51:
          l.forEach(function (m) {
            i == 1
              ? r.Cell.push({ type: r.Types[m[0] - 1].name, index: m[1] })
              : i == 0 &&
                r.Value.push({ type: r.Types[m[0] - 1].name, index: m[1] });
          });
          break;
        case 337:
          i = l ? 1 : 0;
          break;
        case 338:
          i = 2;
          break;
        case 35:
          (s.push(p), (o = !0));
          break;
        case 36:
          (s.pop(), (o = !1));
          break;
        default:
          if (!c.T) {
            if (!o || (n.WTF && s[s.length - 1] != 35))
              throw new Error("Unexpected record 0x" + p.toString(16));
          }
      }
    }),
    r
  );
}
function qf(e, a, t) {
  var r = { Types: [], Cell: [], Value: [] };
  if (!e) return r;
  var n = !1,
    s = 2,
    o;
  return (
    e.replace(ut, function (i) {
      var l = ge(i);
      switch (zt(l[0])) {
        case "<?xml":
          break;
        case "<metadata":
        case "</metadata>":
          break;
        case "<metadataTypes":
        case "</metadataTypes>":
          break;
        case "<metadataType":
          r.Types.push({ name: l.name });
          break;
        case "</metadataType>":
          break;
        case "<futureMetadata":
          for (var c = 0; c < r.Types.length; ++c)
            r.Types[c].name == l.name && (o = r.Types[c]);
          break;
        case "</futureMetadata>":
          break;
        case "<bk>":
          break;
        case "</bk>":
          break;
        case "<rc":
          s == 1
            ? r.Cell.push({ type: r.Types[l.t - 1].name, index: +l.v })
            : s == 0 &&
              r.Value.push({ type: r.Types[l.t - 1].name, index: +l.v });
          break;
        case "</rc>":
          break;
        case "<cellMetadata":
          s = 1;
          break;
        case "</cellMetadata>":
          s = 2;
          break;
        case "<valueMetadata":
          s = 0;
          break;
        case "</valueMetadata>":
          s = 2;
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        case "<rvb":
          if (!o) break;
          (o.offsets || (o.offsets = []), o.offsets.push(+l.i));
          break;
        default:
          if (!n && t.WTF)
            throw new Error("unrecognized " + l[0] + " in metadata");
      }
      return i;
    }),
    r
  );
}
function Jf(e) {
  var a = [];
  if (!e) return a;
  var t = 1;
  return (
    (e.match(ut) || []).forEach(function (r) {
      var n = ge(r);
      switch (n[0]) {
        case "<?xml":
          break;
        case "<calcChain":
        case "<calcChain>":
        case "</calcChain>":
          break;
        case "<c":
          (delete n[0], n.i ? (t = n.i) : (n.i = t), a.push(n));
          break;
      }
    }),
    a
  );
}
function Zf(e) {
  var a = {};
  a.i = e.read_shift(4);
  var t = {};
  ((t.r = e.read_shift(4)), (t.c = e.read_shift(4)), (a.r = _e(t)));
  var r = e.read_shift(1);
  return (r & 2 && (a.l = "1"), r & 8 && (a.a = "1"), a);
}
function Qf(e, a, t) {
  var r = [];
  return (
    Zt(e, function (s, o, i) {
      switch (i) {
        case 63:
          r.push(s);
          break;
        default:
          if (!o.T) throw new Error("Unexpected record 0x" + i.toString(16));
      }
    }),
    r
  );
}
function em(e, a, t, r) {
  if (!e) return e;
  var n = r || {},
    s = !1;
  Zt(
    e,
    function (i, l, c) {
      switch (c) {
        case 359:
        case 363:
        case 364:
        case 366:
        case 367:
        case 368:
        case 369:
        case 370:
        case 371:
        case 472:
        case 577:
        case 578:
        case 579:
        case 580:
        case 581:
        case 582:
        case 583:
        case 584:
        case 585:
        case 586:
        case 587:
          break;
        case 35:
          s = !0;
          break;
        case 36:
          s = !1;
          break;
        default:
          if (!l.T) {
            if (!s || n.WTF)
              throw new Error("Unexpected record 0x" + c.toString(16));
          }
      }
    },
    n,
  );
}
function tm(e, a) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][t].Target;
}
function qs(e, a, t, r) {
  var n = Array.isArray(e),
    s;
  a.forEach(function (o) {
    var i = vt(o.ref);
    if (
      (n ? (e[i.r] || (e[i.r] = []), (s = e[i.r][i.c])) : (s = e[o.ref]), !s)
    ) {
      ((s = { t: "z" }), n ? (e[i.r][i.c] = s) : (e[o.ref] = s));
      var l = He(e["!ref"] || "BDWGO1000001:A1");
      (l.s.r > i.r && (l.s.r = i.r),
        l.e.r < i.r && (l.e.r = i.r),
        l.s.c > i.c && (l.s.c = i.c),
        l.e.c < i.c && (l.e.c = i.c));
      var c = Ce(l);
      c !== e["!ref"] && (e["!ref"] = c);
    }
    s.c || (s.c = []);
    var p = { a: o.author, t: o.t, r: o.r, T: t };
    o.h && (p.h = o.h);
    for (var m = s.c.length - 1; m >= 0; --m) {
      if (!t && s.c[m].T) return;
      t && !s.c[m].T && s.c.splice(m, 1);
    }
    if (t && r) {
      for (m = 0; m < r.length; ++m)
        if (p.a == r[m].id) {
          p.a = r[m].name || p.a;
          break;
        }
    }
    s.c.push(p);
  });
}
function am(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var t = [],
    r = [],
    n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  n &&
    n[1] &&
    n[1].split(/<\/\w*:?author>/).forEach(function (o) {
      if (!(o === "" || o.trim() === "")) {
        var i = o.match(/<(?:\w+:)?author[^>]*>(.*)/);
        i && t.push(i[1]);
      }
    });
  var s = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return (
    s &&
      s[1] &&
      s[1].split(/<\/\w*:?comment>/).forEach(function (o) {
        if (!(o === "" || o.trim() === "")) {
          var i = o.match(/<(?:\w+:)?comment[^>]*>/);
          if (i) {
            var l = ge(i[0]),
              c = {
                author: (l.authorId && t[l.authorId]) || "sheetjsghost",
                ref: l.ref,
                guid: l.guid,
              },
              p = vt(l.ref);
            if (!(a.sheetRows && a.sheetRows <= p.r)) {
              var m = o.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),
                f = (!!m && !!m[1] && Un(m[1])) || { r: "", t: "", h: "" };
              ((c.r = f.r),
                f.r == "<t></t>" && (f.t = f.h = ""),
                (c.t = (f.t || "")
                  .replace(
                    /\r\n/g,
                    `
`,
                  )
                  .replace(
                    /\r/g,
                    `
`,
                  )),
                a.cellHTML && (c.h = f.h),
                r.push(c));
            }
          }
        }
      }),
    r
  );
}
function rm(e, a) {
  var t = [],
    r = !1,
    n = {},
    s = 0;
  return (
    e.replace(ut, function (i, l) {
      var c = ge(i);
      switch (zt(c[0])) {
        case "<?xml":
          break;
        case "<ThreadedComments":
          break;
        case "</ThreadedComments>":
          break;
        case "<threadedComment":
          n = { author: c.personId, guid: c.id, ref: c.ref, T: 1 };
          break;
        case "</threadedComment>":
          n.t != null && t.push(n);
          break;
        case "<text>":
        case "<text":
          s = l + i.length;
          break;
        case "</text>":
          n.t = e
            .slice(s, l)
            .replace(
              /\r\n/g,
              `
`,
            )
            .replace(
              /\r/g,
              `
`,
            );
          break;
        case "<mentions":
        case "<mentions>":
          r = !0;
          break;
        case "</mentions>":
          r = !1;
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          r = !0;
          break;
        case "</ext>":
          r = !1;
          break;
        default:
          if (!r && a.WTF)
            throw new Error("unrecognized " + c[0] + " in threaded comments");
      }
      return i;
    }),
    t
  );
}
function nm(e, a) {
  var t = [],
    r = !1;
  return (
    e.replace(ut, function (s) {
      var o = ge(s);
      switch (zt(o[0])) {
        case "<?xml":
          break;
        case "<personList":
          break;
        case "</personList>":
          break;
        case "<person":
          t.push({ name: o.displayname, id: o.id });
          break;
        case "</person>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          r = !0;
          break;
        case "</ext>":
          r = !1;
          break;
        default:
          if (!r && a.WTF)
            throw new Error("unrecognized " + o[0] + " in threaded comments");
      }
      return s;
    }),
    t
  );
}
function sm(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var t = _a(e);
  return ((a.rfx = t.s), (a.ref = _e(t.s)), (e.l += 16), a);
}
var om = ft;
function im(e, a) {
  var t = [],
    r = [],
    n = {},
    s = !1;
  return (
    Zt(e, function (i, l, c) {
      switch (c) {
        case 632:
          r.push(i);
          break;
        case 635:
          n = i;
          break;
        case 637:
          ((n.t = i.t), (n.h = i.h), (n.r = i.r));
          break;
        case 636:
          if (
            ((n.author = r[n.iauthor]),
            delete n.iauthor,
            a.sheetRows && n.rfx && a.sheetRows <= n.rfx.r)
          )
            break;
          (n.t || (n.t = ""), delete n.rfx, t.push(n));
          break;
        case 3072:
          break;
        case 35:
          s = !0;
          break;
        case 36:
          s = !1;
          break;
        case 37:
          break;
        case 38:
          break;
        default:
          if (!l.T) {
            if (!s || a.WTF)
              throw new Error("Unexpected record 0x" + c.toString(16));
          }
      }
    }),
    t
  );
}
var cm = "application/vnd.ms-office.vbaProject";
function lm(e) {
  var a = be.utils.cfb_new({ root: "R" });
  return (
    e.FullPaths.forEach(function (t, r) {
      if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
        var n = t
          .replace(/^[^\/]*/, "R")
          .replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
        be.utils.cfb_add(a, n, e.FileIndex[r].content);
      }
    }),
    be.write(a)
  );
}
function pm() {
  return { "!type": "dialog" };
}
function dm() {
  return { "!type": "dialog" };
}
function fm() {
  return { "!type": "macro" };
}
function mm() {
  return { "!type": "macro" };
}
var ya = (function () {
    var e =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      a = { r: 0, c: 0 };
    function t(r, n, s, o) {
      var i = !1,
        l = !1;
      (s.length == 0
        ? (l = !0)
        : s.charAt(0) == "[" && ((l = !0), (s = s.slice(1, -1))),
        o.length == 0
          ? (i = !0)
          : o.charAt(0) == "[" && ((i = !0), (o = o.slice(1, -1))));
      var c = s.length > 0 ? parseInt(s, 10) | 0 : 0,
        p = o.length > 0 ? parseInt(o, 10) | 0 : 0;
      return (
        i ? (p += a.c) : --p,
        l ? (c += a.r) : --c,
        n + (i ? "" : "$") + Je(p) + (l ? "" : "$") + rt(c)
      );
    }
    return function (n, s) {
      return ((a = s), n.replace(e, t));
    };
  })(),
  Oi =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  um = (function () {
    return function (a, t) {
      return a.replace(Oi, function (r, n, s, o, i, l) {
        var c = In(o) - (s ? 0 : t.c),
          p = Bn(l) - (i ? 0 : t.r),
          m = p == 0 ? "" : i ? p + 1 : "[" + p + "]",
          f = c == 0 ? "" : s ? c + 1 : "[" + c + "]";
        return n + "R" + m + "C" + f;
      });
    };
  })();
function Li(e, a) {
  return e.replace(Oi, function (t, r, n, s, o, i) {
    return (
      r +
      (n == "$" ? n + s : Je(In(s) + a.c)) +
      (o == "$" ? o + i : rt(Bn(i) + a.r))
    );
  });
}
function hm(e, a, t) {
  var r = Oa(a),
    n = r.s,
    s = vt(t),
    o = { r: s.r - n.r, c: s.c - n.c };
  return Li(e, o);
}
function xm(e) {
  return e.length != 1;
}
function Js(e) {
  return e.replace(/_xlfn\./g, "");
}
function ze(e) {
  e.l += 1;
}
function oa(e, a) {
  var t = e.read_shift(2);
  return [t & 16383, (t >> 14) & 1, (t >> 15) & 1];
}
function Mi(e, a, t) {
  var r = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return Ui(e);
    t.biff == 12 && (r = 4);
  }
  var n = e.read_shift(r),
    s = e.read_shift(r),
    o = oa(e),
    i = oa(e);
  return {
    s: { r: n, c: o[0], cRel: o[1], rRel: o[2] },
    e: { r: s, c: i[0], cRel: i[1], rRel: i[2] },
  };
}
function Ui(e) {
  var a = oa(e),
    t = oa(e),
    r = e.read_shift(1),
    n = e.read_shift(1);
  return {
    s: { r: a[0], c: r, cRel: a[1], rRel: a[2] },
    e: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
  };
}
function vm(e, a, t) {
  if (t.biff < 8) return Ui(e);
  var r = e.read_shift(t.biff == 12 ? 4 : 2),
    n = e.read_shift(t.biff == 12 ? 4 : 2),
    s = oa(e),
    o = oa(e);
  return {
    s: { r, c: s[0], cRel: s[1], rRel: s[2] },
    e: { r: n, c: o[0], cRel: o[1], rRel: o[2] },
  };
}
function ji(e, a, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return gm(e);
  var r = e.read_shift(t && t.biff == 12 ? 4 : 2),
    n = oa(e);
  return { r, c: n[0], cRel: n[1], rRel: n[2] };
}
function gm(e) {
  var a = oa(e),
    t = e.read_shift(1);
  return { r: a[0], c: t, cRel: a[1], rRel: a[2] };
}
function _m(e) {
  var a = e.read_shift(2),
    t = e.read_shift(2);
  return {
    r: a,
    c: t & 255,
    fQuoted: !!(t & 16384),
    cRel: t >> 15,
    rRel: t >> 15,
  };
}
function Sm(e, a, t) {
  var r = t && t.biff ? t.biff : 8;
  if (r >= 2 && r <= 5) return wm(e);
  var n = e.read_shift(r >= 12 ? 4 : 2),
    s = e.read_shift(2),
    o = (s & 16384) >> 14,
    i = (s & 32768) >> 15;
  if (((s &= 16383), i == 1)) for (; n > 524287; ) n -= 1048576;
  if (o == 1) for (; s > 8191; ) s = s - 16384;
  return { r: n, c: s, cRel: o, rRel: i };
}
function wm(e) {
  var a = e.read_shift(2),
    t = e.read_shift(1),
    r = (a & 32768) >> 15,
    n = (a & 16384) >> 14;
  return (
    (a &= 16383),
    r == 1 && a >= 8192 && (a = a - 16384),
    n == 1 && t >= 128 && (t = t - 256),
    { r: a, c: t, cRel: n, rRel: r }
  );
}
function Tm(e, a, t) {
  var r = (e[e.l++] & 96) >> 5,
    n = Mi(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [r, n];
}
function Em(e, a, t) {
  var r = (e[e.l++] & 96) >> 5,
    n = e.read_shift(2, "i"),
    s = 8;
  if (t)
    switch (t.biff) {
      case 5:
        ((e.l += 12), (s = 6));
        break;
      case 12:
        s = 12;
        break;
    }
  var o = Mi(e, s, t);
  return [r, n, o];
}
function km(e, a, t) {
  var r = (e[e.l++] & 96) >> 5;
  return ((e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8), [r]);
}
function Am(e, a, t) {
  var r = (e[e.l++] & 96) >> 5,
    n = e.read_shift(2),
    s = 8;
  if (t)
    switch (t.biff) {
      case 5:
        ((e.l += 12), (s = 6));
        break;
      case 12:
        s = 12;
        break;
    }
  return ((e.l += s), [r, n]);
}
function bm(e, a, t) {
  var r = (e[e.l++] & 96) >> 5,
    n = vm(e, a - 1, t);
  return [r, n];
}
function Cm(e, a, t) {
  var r = (e[e.l++] & 96) >> 5;
  return ((e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7), [r]);
}
function Zs(e) {
  var a = e[e.l + 1] & 1,
    t = 1;
  return ((e.l += 4), [a, t]);
}
function ym(e, a, t) {
  e.l += 2;
  for (
    var r = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], s = 0;
    s <= r;
    ++s
  )
    n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function Fm(e, a, t) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return ((e.l += 2), [r, e.read_shift(t && t.biff == 2 ? 1 : 2)]);
}
function Dm(e, a, t) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return ((e.l += 2), [r, e.read_shift(t && t.biff == 2 ? 1 : 2)]);
}
function Nm(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return ((e.l += 2), [a, e.read_shift(2)]);
}
function Bm(e, a, t) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return ((e.l += t && t.biff == 2 ? 3 : 4), [r]);
}
function Hi(e) {
  var a = e.read_shift(1),
    t = e.read_shift(1);
  return [a, t];
}
function Im(e) {
  return (e.read_shift(2), Hi(e));
}
function Rm(e) {
  return (e.read_shift(2), Hi(e));
}
function Pm(e, a, t) {
  var r = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = ji(e, 0, t);
  return [r, n];
}
function Om(e, a, t) {
  var r = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Sm(e, 0, t);
  return [r, n];
}
function Lm(e, a, t) {
  var r = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var s = ji(e, 0, t);
  return [r, n, s];
}
function Mm(e, a, t) {
  var r = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [Uu[n], Wi[n], r];
}
function Um(e, a, t) {
  var r = e[e.l++],
    n = e.read_shift(1),
    s = t && t.biff <= 3 ? [r == 88 ? -1 : 0, e.read_shift(1)] : jm(e);
  return [n, (s[0] === 0 ? Wi : Mu)[s[1]]];
}
function jm(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function Hm(e, a, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function Gm(e, a, t) {
  if ((e.l++, t && t.biff == 12)) return [e.read_shift(4, "i"), 0];
  var r = e.read_shift(2),
    n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [r, n];
}
function Vm(e) {
  return (e.l++, Sa[e.read_shift(1)]);
}
function Wm(e) {
  return (e.l++, e.read_shift(2));
}
function zm(e) {
  return (e.l++, e.read_shift(1) !== 0);
}
function Xm(e) {
  return (e.l++, pt(e));
}
function $m(e, a, t) {
  return (e.l++, dr(e, a - 1, t));
}
function Km(e, a) {
  var t = [e.read_shift(1)];
  if (a == 12)
    switch (t[0]) {
      case 2:
        t[0] = 4;
        break;
      case 4:
        t[0] = 16;
        break;
      case 0:
        t[0] = 1;
        break;
      case 1:
        t[0] = 2;
        break;
    }
  switch (t[0]) {
    case 4:
      ((t[1] = Ge(e, 1) ? "TRUE" : "FALSE"), a != 12 && (e.l += 7));
      break;
    case 37:
    case 16:
      ((t[1] = Sa[e[e.l]]), (e.l += a == 12 ? 4 : 8));
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = pt(e);
      break;
    case 2:
      t[1] = wa(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function Ym(e, a, t) {
  for (var r = e.read_shift(t.biff == 12 ? 4 : 2), n = [], s = 0; s != r; ++s)
    n.push((t.biff == 12 ? _a : Wr)(e));
  return n;
}
function qm(e, a, t) {
  var r = 0,
    n = 0;
  (t.biff == 12
    ? ((r = e.read_shift(4)), (n = e.read_shift(4)))
    : ((n = 1 + e.read_shift(1)), (r = 1 + e.read_shift(2))),
    t.biff >= 2 && t.biff < 8 && (--r, --n == 0 && (n = 256)));
  for (var s = 0, o = []; s != r && (o[s] = []); ++s)
    for (var i = 0; i != n; ++i) o[s][i] = Km(e, t.biff);
  return o;
}
function Jm(e, a, t) {
  var r = (e.read_shift(1) >>> 5) & 3,
    n = !t || t.biff >= 8 ? 4 : 2,
    s = e.read_shift(n);
  switch (t.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [r, 0, s];
}
function Zm(e, a, t) {
  if (t.biff == 5) return Qm(e);
  var r = (e.read_shift(1) >>> 5) & 3,
    n = e.read_shift(2),
    s = e.read_shift(4);
  return [r, n, s];
}
function Qm(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2, "i");
  e.l += 8;
  var r = e.read_shift(2);
  return ((e.l += 12), [a, t, r]);
}
function eu(e, a, t) {
  var r = (e.read_shift(1) >>> 5) & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [r, n];
}
function tu(e, a, t) {
  var r = (e.read_shift(1) >>> 5) & 3,
    n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [r, n];
}
function au(e, a, t) {
  var r = (e.read_shift(1) >>> 5) & 3;
  return ((e.l += 4), t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [r]);
}
function ru(e, a, t) {
  var r = (e[e.l++] & 96) >> 5,
    n = e.read_shift(2),
    s = 4;
  if (t)
    switch (t.biff) {
      case 5:
        s = 15;
        break;
      case 12:
        s = 6;
        break;
    }
  return ((e.l += s), [r, n]);
}
var nu = mt,
  su = mt,
  ou = mt;
function mr(e, a, t) {
  return ((e.l += 2), [_m(e)]);
}
function Hn(e) {
  return ((e.l += 6), []);
}
var iu = mr,
  cu = Hn,
  lu = Hn,
  pu = mr;
function Gi(e) {
  return ((e.l += 2), [$e(e), e.read_shift(2) & 1]);
}
var du = mr,
  fu = Gi,
  mu = Hn,
  uu = mr,
  hu = mr,
  xu = [
    "Data",
    "All",
    "Headers",
    "??",
    "?Data2",
    "??",
    "?DataHeaders",
    "??",
    "Totals",
    "??",
    "??",
    "??",
    "?DataTotals",
    "??",
    "??",
    "??",
    "?Current",
  ];
function vu(e) {
  e.l += 2;
  var a = e.read_shift(2),
    t = e.read_shift(2),
    r = e.read_shift(4),
    n = e.read_shift(2),
    s = e.read_shift(2),
    o = xu[(t >> 2) & 31];
  return { ixti: a, coltype: t & 3, rt: o, idx: r, c: n, C: s };
}
function gu(e) {
  return ((e.l += 2), [e.read_shift(4)]);
}
function _u(e, a, t) {
  return ((e.l += 5), (e.l += 2), (e.l += t.biff == 2 ? 1 : 4), ["PTGSHEET"]);
}
function Su(e, a, t) {
  return ((e.l += t.biff == 2 ? 4 : 5), ["PTGENDSHEET"]);
}
function wu(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [a, t];
}
function Tu(e) {
  var a = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [a, t];
}
function Eu(e) {
  return ((e.l += 4), [0, 0]);
}
var Qs = {
    1: { n: "PtgExp", f: Gm },
    2: { n: "PtgTbl", f: ou },
    3: { n: "PtgAdd", f: ze },
    4: { n: "PtgSub", f: ze },
    5: { n: "PtgMul", f: ze },
    6: { n: "PtgDiv", f: ze },
    7: { n: "PtgPower", f: ze },
    8: { n: "PtgConcat", f: ze },
    9: { n: "PtgLt", f: ze },
    10: { n: "PtgLe", f: ze },
    11: { n: "PtgEq", f: ze },
    12: { n: "PtgGe", f: ze },
    13: { n: "PtgGt", f: ze },
    14: { n: "PtgNe", f: ze },
    15: { n: "PtgIsect", f: ze },
    16: { n: "PtgUnion", f: ze },
    17: { n: "PtgRange", f: ze },
    18: { n: "PtgUplus", f: ze },
    19: { n: "PtgUminus", f: ze },
    20: { n: "PtgPercent", f: ze },
    21: { n: "PtgParen", f: ze },
    22: { n: "PtgMissArg", f: ze },
    23: { n: "PtgStr", f: $m },
    26: { n: "PtgSheet", f: _u },
    27: { n: "PtgEndSheet", f: Su },
    28: { n: "PtgErr", f: Vm },
    29: { n: "PtgBool", f: zm },
    30: { n: "PtgInt", f: Wm },
    31: { n: "PtgNum", f: Xm },
    32: { n: "PtgArray", f: Cm },
    33: { n: "PtgFunc", f: Mm },
    34: { n: "PtgFuncVar", f: Um },
    35: { n: "PtgName", f: Jm },
    36: { n: "PtgRef", f: Pm },
    37: { n: "PtgArea", f: Tm },
    38: { n: "PtgMemArea", f: eu },
    39: { n: "PtgMemErr", f: nu },
    40: { n: "PtgMemNoMem", f: su },
    41: { n: "PtgMemFunc", f: tu },
    42: { n: "PtgRefErr", f: au },
    43: { n: "PtgAreaErr", f: km },
    44: { n: "PtgRefN", f: Om },
    45: { n: "PtgAreaN", f: bm },
    46: { n: "PtgMemAreaN", f: wu },
    47: { n: "PtgMemNoMemN", f: Tu },
    57: { n: "PtgNameX", f: Zm },
    58: { n: "PtgRef3d", f: Lm },
    59: { n: "PtgArea3d", f: Em },
    60: { n: "PtgRefErr3d", f: ru },
    61: { n: "PtgAreaErr3d", f: Am },
    255: {},
  },
  ku = {
    64: 32,
    96: 32,
    65: 33,
    97: 33,
    66: 34,
    98: 34,
    67: 35,
    99: 35,
    68: 36,
    100: 36,
    69: 37,
    101: 37,
    70: 38,
    102: 38,
    71: 39,
    103: 39,
    72: 40,
    104: 40,
    73: 41,
    105: 41,
    74: 42,
    106: 42,
    75: 43,
    107: 43,
    76: 44,
    108: 44,
    77: 45,
    109: 45,
    78: 46,
    110: 46,
    79: 47,
    111: 47,
    88: 34,
    120: 34,
    89: 57,
    121: 57,
    90: 58,
    122: 58,
    91: 59,
    123: 59,
    92: 60,
    124: 60,
    93: 61,
    125: 61,
  },
  Au = {
    1: { n: "PtgElfLel", f: Gi },
    2: { n: "PtgElfRw", f: uu },
    3: { n: "PtgElfCol", f: iu },
    6: { n: "PtgElfRwV", f: hu },
    7: { n: "PtgElfColV", f: pu },
    10: { n: "PtgElfRadical", f: du },
    11: { n: "PtgElfRadicalS", f: mu },
    13: { n: "PtgElfColS", f: cu },
    15: { n: "PtgElfColSV", f: lu },
    16: { n: "PtgElfRadicalLel", f: fu },
    25: { n: "PtgList", f: vu },
    29: { n: "PtgSxName", f: gu },
    255: {},
  },
  bu = {
    0: { n: "PtgAttrNoop", f: Eu },
    1: { n: "PtgAttrSemi", f: Bm },
    2: { n: "PtgAttrIf", f: Dm },
    4: { n: "PtgAttrChoose", f: ym },
    8: { n: "PtgAttrGoto", f: Fm },
    16: { n: "PtgAttrSum", f: Hm },
    32: { n: "PtgAttrBaxcel", f: Zs },
    33: { n: "PtgAttrBaxcel", f: Zs },
    64: { n: "PtgAttrSpace", f: Im },
    65: { n: "PtgAttrSpaceSemi", f: Rm },
    128: { n: "PtgAttrIfError", f: Nm },
    255: {},
  };
function ur(e, a, t, r) {
  if (r.biff < 8) return mt(e, a);
  for (var n = e.l + a, s = [], o = 0; o !== t.length; ++o)
    switch (t[o][0]) {
      case "PtgArray":
        ((t[o][1] = qm(e, 0, r)), s.push(t[o][1]));
        break;
      case "PtgMemArea":
        ((t[o][2] = Ym(e, t[o][1], r)), s.push(t[o][2]));
        break;
      case "PtgExp":
        r && r.biff == 12 && ((t[o][1][1] = e.read_shift(4)), s.push(t[o][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + t[o][0];
    }
  return ((a = n - e.l), a !== 0 && s.push(mt(e, a)), s);
}
function hr(e, a, t) {
  for (var r = e.l + a, n, s, o = []; r != e.l; )
    ((a = r - e.l),
      (s = e[e.l]),
      (n = Qs[s] || Qs[ku[s]]),
      (s === 24 || s === 25) && (n = (s === 24 ? Au : bu)[e[e.l + 1]]),
      !n || !n.f ? mt(e, a) : o.push([n.n, n.f(e, a, t)]));
  return o;
}
function Cu(e) {
  for (var a = [], t = 0; t < e.length; ++t) {
    for (var r = e[t], n = [], s = 0; s < r.length; ++s) {
      var o = r[s];
      if (o)
        switch (o[0]) {
          case 2:
            n.push('"' + o[1].replace(/"/g, '""') + '"');
            break;
          default:
            n.push(o[1]);
        }
      else n.push("");
    }
    a.push(n.join(","));
  }
  return a.join(";");
}
var yu = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-",
};
function Fu(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Vi(e, a, t) {
  if (!e) return "SH33TJSERR0";
  if (t.biff > 8 && (!e.XTI || !e.XTI[a])) return e.SheetNames[a];
  if (!e.XTI) return "SH33TJSERR6";
  var r = e.XTI[a];
  if (t.biff < 8)
    return (
      a > 1e4 && (a -= 65536),
      a < 0 && (a = -a),
      a == 0 ? "" : e.XTI[a - 1]
    );
  if (!r) return "SH33TJSERR1";
  var n = "";
  if (t.biff > 8)
    switch (e[r[0]][0]) {
      case 357:
        return (
          (n = r[1] == -1 ? "#REF" : e.SheetNames[r[1]]),
          r[1] == r[2] ? n : n + ":" + e.SheetNames[r[2]]
        );
      case 358:
        return t.SID != null ? e.SheetNames[t.SID] : "SH33TJSSAME" + e[r[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[r[0]][0];
    }
  switch (e[r[0]][0][0]) {
    case 1025:
      return (
        (n = r[1] == -1 ? "#REF" : e.SheetNames[r[1]] || "SH33TJSERR3"),
        r[1] == r[2] ? n : n + ":" + e.SheetNames[r[2]]
      );
    case 14849:
      return e[r[0]]
        .slice(1)
        .map(function (s) {
          return s.Name;
        })
        .join(";;");
    default:
      return e[r[0]][0][3]
        ? ((n = r[1] == -1 ? "#REF" : e[r[0]][0][3][r[1]] || "SH33TJSERR4"),
          r[1] == r[2] ? n : n + ":" + e[r[0]][0][3][r[2]])
        : "SH33TJSERR2";
  }
}
function eo(e, a, t) {
  var r = Vi(e, a, t);
  return r == "#REF" ? r : Fu(r, t);
}
function ct(e, a, t, r, n) {
  var s = (n && n.biff) || 8,
    o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    i = [],
    l,
    c,
    p,
    m = 0,
    f = 0,
    h,
    x = "";
  if (!e[0] || !e[0][0]) return "";
  for (var d = -1, u = "", A = 0, B = e[0].length; A < B; ++A) {
    var w = e[0][A];
    switch (w[0]) {
      case "PtgUminus":
        i.push("-" + i.pop());
        break;
      case "PtgUplus":
        i.push("+" + i.pop());
        break;
      case "PtgPercent":
        i.push(i.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (((l = i.pop()), (c = i.pop()), d >= 0)) {
          switch (e[0][d][1][0]) {
            case 0:
              u = je(" ", e[0][d][1][1]);
              break;
            case 1:
              u = je("\r", e[0][d][1][1]);
              break;
            default:
              if (((u = ""), n.WTF))
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][d][1][0]);
          }
          ((c = c + u), (d = -1));
        }
        i.push(c + yu[w[0]] + l);
        break;
      case "PtgIsect":
        ((l = i.pop()), (c = i.pop()), i.push(c + " " + l));
        break;
      case "PtgUnion":
        ((l = i.pop()), (c = i.pop()), i.push(c + "," + l));
        break;
      case "PtgRange":
        ((l = i.pop()), (c = i.pop()), i.push(c + ":" + l));
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        ((p = Ka(w[1][1], o, n)), i.push(Ya(p, s)));
        break;
      case "PtgRefN":
        ((p = t ? Ka(w[1][1], t, n) : w[1][1]), i.push(Ya(p, s)));
        break;
      case "PtgRef3d":
        ((m = w[1][1]),
          (p = Ka(w[1][2], o, n)),
          (x = eo(r, m, n)),
          i.push(x + "!" + Ya(p, s)));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var M = w[1][0],
          H = w[1][1];
        (M || (M = 0), (M &= 127));
        var U = M == 0 ? [] : i.slice(-M);
        ((i.length -= M),
          H === "User" && (H = U.shift()),
          i.push(H + "(" + U.join(",") + ")"));
        break;
      case "PtgBool":
        i.push(w[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        i.push(w[1]);
        break;
      case "PtgNum":
        i.push(String(w[1]));
        break;
      case "PtgStr":
        i.push('"' + w[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        i.push(w[1]);
        break;
      case "PtgAreaN":
        ((h = Rs(w[1][1], t ? { s: t } : o, n)), i.push(Jr(h, n)));
        break;
      case "PtgArea":
        ((h = Rs(w[1][1], o, n)), i.push(Jr(h, n)));
        break;
      case "PtgArea3d":
        ((m = w[1][1]),
          (h = w[1][2]),
          (x = eo(r, m, n)),
          i.push(x + "!" + Jr(h, n)));
        break;
      case "PtgAttrSum":
        i.push("SUM(" + i.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        f = w[1][2];
        var k = (r.names || [])[f - 1] || (r[0] || [])[f],
          S = k ? k.Name : "SH33TJSNAME" + String(f);
        (S && S.slice(0, 6) == "_xlfn." && !n.xlfn && (S = S.slice(6)),
          i.push(S));
        break;
      case "PtgNameX":
        var _ = w[1][1];
        f = w[1][2];
        var I;
        if (n.biff <= 5) (_ < 0 && (_ = -_), r[_] && (I = r[_][f]));
        else {
          var R = "";
          if (
            (((r[_] || [])[0] || [])[0] == 14849 ||
              (((r[_] || [])[0] || [])[0] == 1025
                ? r[_][f] &&
                  r[_][f].itab > 0 &&
                  (R = r.SheetNames[r[_][f].itab - 1] + "!")
                : (R = r.SheetNames[f - 1] + "!")),
            r[_] && r[_][f])
          )
            R += r[_][f].Name;
          else if (r[0] && r[0][f]) R += r[0][f].Name;
          else {
            var N = (Vi(r, _, n) || "").split(";;");
            N[f - 1] ? (R = N[f - 1]) : (R += "SH33TJSERRX");
          }
          i.push(R);
          break;
        }
        (I || (I = { Name: "SH33TJSERRY" }), i.push(I.Name));
        break;
      case "PtgParen":
        var X = "(",
          ae = ")";
        if (d >= 0) {
          switch (((u = ""), e[0][d][1][0])) {
            case 2:
              X = je(" ", e[0][d][1][1]) + X;
              break;
            case 3:
              X = je("\r", e[0][d][1][1]) + X;
              break;
            case 4:
              ae = je(" ", e[0][d][1][1]) + ae;
              break;
            case 5:
              ae = je("\r", e[0][d][1][1]) + ae;
              break;
            default:
              if (n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][d][1][0]);
          }
          d = -1;
        }
        i.push(X + i.pop() + ae);
        break;
      case "PtgRefErr":
        i.push("#REF!");
        break;
      case "PtgRefErr3d":
        i.push("#REF!");
        break;
      case "PtgExp":
        p = { c: w[1][1], r: w[1][0] };
        var ee = { c: t.c, r: t.r };
        if (r.sharedf[_e(p)]) {
          var ie = r.sharedf[_e(p)];
          i.push(ct(ie, o, ee, r, n));
        } else {
          var Z = !1;
          for (l = 0; l != r.arrayf.length; ++l)
            if (
              ((c = r.arrayf[l]),
              !(p.c < c[0].s.c || p.c > c[0].e.c) &&
                !(p.r < c[0].s.r || p.r > c[0].e.r))
            ) {
              (i.push(ct(c[1], o, ee, r, n)), (Z = !0));
              break;
            }
          Z || i.push(w[1]);
        }
        break;
      case "PtgArray":
        i.push("{" + Cu(w[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        d = A;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        i.push("");
        break;
      case "PtgAreaErr":
        i.push("#REF!");
        break;
      case "PtgAreaErr3d":
        i.push("#REF!");
        break;
      case "PtgList":
        i.push("Table" + w[1].idx + "[#" + w[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(w));
      default:
        throw new Error("Unrecognized Formula Token: " + String(w));
    }
    var xe = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && d >= 0 && xe.indexOf(e[0][A][0]) == -1) {
      w = e[0][d];
      var j = !0;
      switch (w[1][0]) {
        case 4:
          j = !1;
        case 0:
          u = je(" ", w[1][1]);
          break;
        case 5:
          j = !1;
        case 1:
          u = je("\r", w[1][1]);
          break;
        default:
          if (((u = ""), n.WTF))
            throw new Error("Unexpected PtgAttrSpaceType " + w[1][0]);
      }
      (i.push((j ? u : "") + i.pop() + (j ? "" : u)), (d = -1));
    }
  }
  if (i.length > 1 && n.WTF) throw new Error("bad formula stack");
  return i[0];
}
function Du(e, a, t) {
  var r = e.l + a,
    n = t.biff == 2 ? 1 : 2,
    s,
    o = e.read_shift(n);
  if (o == 65535) return [[], mt(e, a - 2)];
  var i = hr(e, o, t);
  return (a !== o + n && (s = ur(e, a - o - n, i, t)), (e.l = r), [i, s]);
}
function Nu(e, a, t) {
  var r = e.l + a,
    n = t.biff == 2 ? 1 : 2,
    s,
    o = e.read_shift(n);
  if (o == 65535) return [[], mt(e, a - 2)];
  var i = hr(e, o, t);
  return (a !== o + n && (s = ur(e, a - o - n, i, t)), (e.l = r), [i, s]);
}
function Bu(e, a, t, r) {
  var n = e.l + a,
    s = hr(e, r, t),
    o;
  return (n !== e.l && (o = ur(e, n - e.l, s, t)), [s, o]);
}
function Iu(e, a, t) {
  var r = e.l + a,
    n,
    s = e.read_shift(2),
    o = hr(e, s, t);
  return s == 65535
    ? [[], mt(e, a - 2)]
    : (a !== s + 2 && (n = ur(e, r - s - 2, o, t)), [o, n]);
}
function Ru(e) {
  var a;
  if (Kt(e, e.l + 6) !== 65535) return [pt(e), "n"];
  switch (e[e.l]) {
    case 0:
      return ((e.l += 8), ["String", "s"]);
    case 1:
      return ((a = e[e.l + 2] === 1), (e.l += 8), [a, "b"]);
    case 2:
      return ((a = e[e.l + 2]), (e.l += 8), [a, "e"]);
    case 3:
      return ((e.l += 8), ["", "s"]);
  }
  return [];
}
function en(e, a, t) {
  var r = e.l + a,
    n = Xt(e);
  t.biff == 2 && ++e.l;
  var s = Ru(e),
    o = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var i = Nu(e, r - e.l, t);
  return { cell: n, val: s[0], formula: i, shared: (o >> 3) & 1, tt: s[1] };
}
function zr(e, a, t) {
  var r = e.read_shift(4),
    n = hr(e, r, t),
    s = e.read_shift(4),
    o = s > 0 ? ur(e, s, n, t) : null;
  return [n, o];
}
var Pu = zr,
  Xr = zr,
  Ou = zr,
  Lu = zr,
  Mu = {
    0: "BEEP",
    1: "OPEN",
    2: "OPEN.LINKS",
    3: "CLOSE.ALL",
    4: "SAVE",
    5: "SAVE.AS",
    6: "FILE.DELETE",
    7: "PAGE.SETUP",
    8: "PRINT",
    9: "PRINTER.SETUP",
    10: "QUIT",
    11: "NEW.WINDOW",
    12: "ARRANGE.ALL",
    13: "WINDOW.SIZE",
    14: "WINDOW.MOVE",
    15: "FULL",
    16: "CLOSE",
    17: "RUN",
    22: "SET.PRINT.AREA",
    23: "SET.PRINT.TITLES",
    24: "SET.PAGE.BREAK",
    25: "REMOVE.PAGE.BREAK",
    26: "FONT",
    27: "DISPLAY",
    28: "PROTECT.DOCUMENT",
    29: "PRECISION",
    30: "A1.R1C1",
    31: "CALCULATE.NOW",
    32: "CALCULATION",
    34: "DATA.FIND",
    35: "EXTRACT",
    36: "DATA.DELETE",
    37: "SET.DATABASE",
    38: "SET.CRITERIA",
    39: "SORT",
    40: "DATA.SERIES",
    41: "TABLE",
    42: "FORMAT.NUMBER",
    43: "ALIGNMENT",
    44: "STYLE",
    45: "BORDER",
    46: "CELL.PROTECTION",
    47: "COLUMN.WIDTH",
    48: "UNDO",
    49: "CUT",
    50: "COPY",
    51: "PASTE",
    52: "CLEAR",
    53: "PASTE.SPECIAL",
    54: "EDIT.DELETE",
    55: "INSERT",
    56: "FILL.RIGHT",
    57: "FILL.DOWN",
    61: "DEFINE.NAME",
    62: "CREATE.NAMES",
    63: "FORMULA.GOTO",
    64: "FORMULA.FIND",
    65: "SELECT.LAST.CELL",
    66: "SHOW.ACTIVE.CELL",
    67: "GALLERY.AREA",
    68: "GALLERY.BAR",
    69: "GALLERY.COLUMN",
    70: "GALLERY.LINE",
    71: "GALLERY.PIE",
    72: "GALLERY.SCATTER",
    73: "COMBINATION",
    74: "PREFERRED",
    75: "ADD.OVERLAY",
    76: "GRIDLINES",
    77: "SET.PREFERRED",
    78: "AXES",
    79: "LEGEND",
    80: "ATTACH.TEXT",
    81: "ADD.ARROW",
    82: "SELECT.CHART",
    83: "SELECT.PLOT.AREA",
    84: "PATTERNS",
    85: "MAIN.CHART",
    86: "OVERLAY",
    87: "SCALE",
    88: "FORMAT.LEGEND",
    89: "FORMAT.TEXT",
    90: "EDIT.REPEAT",
    91: "PARSE",
    92: "JUSTIFY",
    93: "HIDE",
    94: "UNHIDE",
    95: "WORKSPACE",
    96: "FORMULA",
    97: "FORMULA.FILL",
    98: "FORMULA.ARRAY",
    99: "DATA.FIND.NEXT",
    100: "DATA.FIND.PREV",
    101: "FORMULA.FIND.NEXT",
    102: "FORMULA.FIND.PREV",
    103: "ACTIVATE",
    104: "ACTIVATE.NEXT",
    105: "ACTIVATE.PREV",
    106: "UNLOCKED.NEXT",
    107: "UNLOCKED.PREV",
    108: "COPY.PICTURE",
    109: "SELECT",
    110: "DELETE.NAME",
    111: "DELETE.FORMAT",
    112: "VLINE",
    113: "HLINE",
    114: "VPAGE",
    115: "HPAGE",
    116: "VSCROLL",
    117: "HSCROLL",
    118: "ALERT",
    119: "NEW",
    120: "CANCEL.COPY",
    121: "SHOW.CLIPBOARD",
    122: "MESSAGE",
    124: "PASTE.LINK",
    125: "APP.ACTIVATE",
    126: "DELETE.ARROW",
    127: "ROW.HEIGHT",
    128: "FORMAT.MOVE",
    129: "FORMAT.SIZE",
    130: "FORMULA.REPLACE",
    131: "SEND.KEYS",
    132: "SELECT.SPECIAL",
    133: "APPLY.NAMES",
    134: "REPLACE.FONT",
    135: "FREEZE.PANES",
    136: "SHOW.INFO",
    137: "SPLIT",
    138: "ON.WINDOW",
    139: "ON.DATA",
    140: "DISABLE.INPUT",
    142: "OUTLINE",
    143: "LIST.NAMES",
    144: "FILE.CLOSE",
    145: "SAVE.WORKBOOK",
    146: "DATA.FORM",
    147: "COPY.CHART",
    148: "ON.TIME",
    149: "WAIT",
    150: "FORMAT.FONT",
    151: "FILL.UP",
    152: "FILL.LEFT",
    153: "DELETE.OVERLAY",
    155: "SHORT.MENUS",
    159: "SET.UPDATE.STATUS",
    161: "COLOR.PALETTE",
    162: "DELETE.STYLE",
    163: "WINDOW.RESTORE",
    164: "WINDOW.MAXIMIZE",
    166: "CHANGE.LINK",
    167: "CALCULATE.DOCUMENT",
    168: "ON.KEY",
    169: "APP.RESTORE",
    170: "APP.MOVE",
    171: "APP.SIZE",
    172: "APP.MINIMIZE",
    173: "APP.MAXIMIZE",
    174: "BRING.TO.FRONT",
    175: "SEND.TO.BACK",
    185: "MAIN.CHART.TYPE",
    186: "OVERLAY.CHART.TYPE",
    187: "SELECT.END",
    188: "OPEN.MAIL",
    189: "SEND.MAIL",
    190: "STANDARD.FONT",
    191: "CONSOLIDATE",
    192: "SORT.SPECIAL",
    193: "GALLERY.3D.AREA",
    194: "GALLERY.3D.COLUMN",
    195: "GALLERY.3D.LINE",
    196: "GALLERY.3D.PIE",
    197: "VIEW.3D",
    198: "GOAL.SEEK",
    199: "WORKGROUP",
    200: "FILL.GROUP",
    201: "UPDATE.LINK",
    202: "PROMOTE",
    203: "DEMOTE",
    204: "SHOW.DETAIL",
    206: "UNGROUP",
    207: "OBJECT.PROPERTIES",
    208: "SAVE.NEW.OBJECT",
    209: "SHARE",
    210: "SHARE.NAME",
    211: "DUPLICATE",
    212: "APPLY.STYLE",
    213: "ASSIGN.TO.OBJECT",
    214: "OBJECT.PROTECTION",
    215: "HIDE.OBJECT",
    216: "SET.EXTRACT",
    217: "CREATE.PUBLISHER",
    218: "SUBSCRIBE.TO",
    219: "ATTRIBUTES",
    220: "SHOW.TOOLBAR",
    222: "PRINT.PREVIEW",
    223: "EDIT.COLOR",
    224: "SHOW.LEVELS",
    225: "FORMAT.MAIN",
    226: "FORMAT.OVERLAY",
    227: "ON.RECALC",
    228: "EDIT.SERIES",
    229: "DEFINE.STYLE",
    240: "LINE.PRINT",
    243: "ENTER.DATA",
    249: "GALLERY.RADAR",
    250: "MERGE.STYLES",
    251: "EDITION.OPTIONS",
    252: "PASTE.PICTURE",
    253: "PASTE.PICTURE.LINK",
    254: "SPELLING",
    256: "ZOOM",
    259: "INSERT.OBJECT",
    260: "WINDOW.MINIMIZE",
    265: "SOUND.NOTE",
    266: "SOUND.PLAY",
    267: "FORMAT.SHAPE",
    268: "EXTEND.POLYGON",
    269: "FORMAT.AUTO",
    272: "GALLERY.3D.BAR",
    273: "GALLERY.3D.SURFACE",
    274: "FILL.AUTO",
    276: "CUSTOMIZE.TOOLBAR",
    277: "ADD.TOOL",
    278: "EDIT.OBJECT",
    279: "ON.DOUBLECLICK",
    280: "ON.ENTRY",
    281: "WORKBOOK.ADD",
    282: "WORKBOOK.MOVE",
    283: "WORKBOOK.COPY",
    284: "WORKBOOK.OPTIONS",
    285: "SAVE.WORKSPACE",
    288: "CHART.WIZARD",
    289: "DELETE.TOOL",
    290: "MOVE.TOOL",
    291: "WORKBOOK.SELECT",
    292: "WORKBOOK.ACTIVATE",
    293: "ASSIGN.TO.TOOL",
    295: "COPY.TOOL",
    296: "RESET.TOOL",
    297: "CONSTRAIN.NUMERIC",
    298: "PASTE.TOOL",
    302: "WORKBOOK.NEW",
    305: "SCENARIO.CELLS",
    306: "SCENARIO.DELETE",
    307: "SCENARIO.ADD",
    308: "SCENARIO.EDIT",
    309: "SCENARIO.SHOW",
    310: "SCENARIO.SHOW.NEXT",
    311: "SCENARIO.SUMMARY",
    312: "PIVOT.TABLE.WIZARD",
    313: "PIVOT.FIELD.PROPERTIES",
    314: "PIVOT.FIELD",
    315: "PIVOT.ITEM",
    316: "PIVOT.ADD.FIELDS",
    318: "OPTIONS.CALCULATION",
    319: "OPTIONS.EDIT",
    320: "OPTIONS.VIEW",
    321: "ADDIN.MANAGER",
    322: "MENU.EDITOR",
    323: "ATTACH.TOOLBARS",
    324: "VBAActivate",
    325: "OPTIONS.CHART",
    328: "VBA.INSERT.FILE",
    330: "VBA.PROCEDURE.DEFINITION",
    336: "ROUTING.SLIP",
    338: "ROUTE.DOCUMENT",
    339: "MAIL.LOGON",
    342: "INSERT.PICTURE",
    343: "EDIT.TOOL",
    344: "GALLERY.DOUGHNUT",
    350: "CHART.TREND",
    352: "PIVOT.ITEM.PROPERTIES",
    354: "WORKBOOK.INSERT",
    355: "OPTIONS.TRANSITION",
    356: "OPTIONS.GENERAL",
    370: "FILTER.ADVANCED",
    373: "MAIL.ADD.MAILER",
    374: "MAIL.DELETE.MAILER",
    375: "MAIL.REPLY",
    376: "MAIL.REPLY.ALL",
    377: "MAIL.FORWARD",
    378: "MAIL.NEXT.LETTER",
    379: "DATA.LABEL",
    380: "INSERT.TITLE",
    381: "FONT.PROPERTIES",
    382: "MACRO.OPTIONS",
    383: "WORKBOOK.HIDE",
    384: "WORKBOOK.UNHIDE",
    385: "WORKBOOK.DELETE",
    386: "WORKBOOK.NAME",
    388: "GALLERY.CUSTOM",
    390: "ADD.CHART.AUTOFORMAT",
    391: "DELETE.CHART.AUTOFORMAT",
    392: "CHART.ADD.DATA",
    393: "AUTO.OUTLINE",
    394: "TAB.ORDER",
    395: "SHOW.DIALOG",
    396: "SELECT.ALL",
    397: "UNGROUP.SHEETS",
    398: "SUBTOTAL.CREATE",
    399: "SUBTOTAL.REMOVE",
    400: "RENAME.OBJECT",
    412: "WORKBOOK.SCROLL",
    413: "WORKBOOK.NEXT",
    414: "WORKBOOK.PREV",
    415: "WORKBOOK.TAB.SPLIT",
    416: "FULL.SCREEN",
    417: "WORKBOOK.PROTECT",
    420: "SCROLLBAR.PROPERTIES",
    421: "PIVOT.SHOW.PAGES",
    422: "TEXT.TO.COLUMNS",
    423: "FORMAT.CHARTTYPE",
    424: "LINK.FORMAT",
    425: "TRACER.DISPLAY",
    430: "TRACER.NAVIGATE",
    431: "TRACER.CLEAR",
    432: "TRACER.ERROR",
    433: "PIVOT.FIELD.GROUP",
    434: "PIVOT.FIELD.UNGROUP",
    435: "CHECKBOX.PROPERTIES",
    436: "LABEL.PROPERTIES",
    437: "LISTBOX.PROPERTIES",
    438: "EDITBOX.PROPERTIES",
    439: "PIVOT.REFRESH",
    440: "LINK.COMBO",
    441: "OPEN.TEXT",
    442: "HIDE.DIALOG",
    443: "SET.DIALOG.FOCUS",
    444: "ENABLE.OBJECT",
    445: "PUSHBUTTON.PROPERTIES",
    446: "SET.DIALOG.DEFAULT",
    447: "FILTER",
    448: "FILTER.SHOW.ALL",
    449: "CLEAR.OUTLINE",
    450: "FUNCTION.WIZARD",
    451: "ADD.LIST.ITEM",
    452: "SET.LIST.ITEM",
    453: "REMOVE.LIST.ITEM",
    454: "SELECT.LIST.ITEM",
    455: "SET.CONTROL.VALUE",
    456: "SAVE.COPY.AS",
    458: "OPTIONS.LISTS.ADD",
    459: "OPTIONS.LISTS.DELETE",
    460: "SERIES.AXES",
    461: "SERIES.X",
    462: "SERIES.Y",
    463: "ERRORBAR.X",
    464: "ERRORBAR.Y",
    465: "FORMAT.CHART",
    466: "SERIES.ORDER",
    467: "MAIL.LOGOFF",
    468: "CLEAR.ROUTING.SLIP",
    469: "APP.ACTIVATE.MICROSOFT",
    470: "MAIL.EDIT.MAILER",
    471: "ON.SHEET",
    472: "STANDARD.WIDTH",
    473: "SCENARIO.MERGE",
    474: "SUMMARY.INFO",
    475: "FIND.FILE",
    476: "ACTIVE.CELL.FONT",
    477: "ENABLE.TIPWIZARD",
    478: "VBA.MAKE.ADDIN",
    480: "INSERTDATATABLE",
    481: "WORKGROUP.OPTIONS",
    482: "MAIL.SEND.MAILER",
    485: "AUTOCORRECT",
    489: "POST.DOCUMENT",
    491: "PICKLIST",
    493: "VIEW.SHOW",
    494: "VIEW.DEFINE",
    495: "VIEW.DELETE",
    509: "SHEET.BACKGROUND",
    510: "INSERT.MAP.OBJECT",
    511: "OPTIONS.MENONO",
    517: "MSOCHECKS",
    518: "NORMAL",
    519: "LAYOUT",
    520: "RM.PRINT.AREA",
    521: "CLEAR.PRINT.AREA",
    522: "ADD.PRINT.AREA",
    523: "MOVE.BRK",
    545: "HIDECURR.NOTE",
    546: "HIDEALL.NOTES",
    547: "DELETE.NOTE",
    548: "TRAVERSE.NOTES",
    549: "ACTIVATE.NOTES",
    620: "PROTECT.REVISIONS",
    621: "UNPROTECT.REVISIONS",
    647: "OPTIONS.ME",
    653: "WEB.PUBLISH",
    667: "NEWWEBQUERY",
    673: "PIVOT.TABLE.CHART",
    753: "OPTIONS.SAVE",
    755: "OPTIONS.SPELL",
    808: "HIDEALL.INKANNOTS",
  },
  Wi = {
    0: "COUNT",
    1: "IF",
    2: "ISNA",
    3: "ISERROR",
    4: "SUM",
    5: "AVERAGE",
    6: "MIN",
    7: "MAX",
    8: "ROW",
    9: "COLUMN",
    10: "NA",
    11: "NPV",
    12: "STDEV",
    13: "DOLLAR",
    14: "FIXED",
    15: "SIN",
    16: "COS",
    17: "TAN",
    18: "ATAN",
    19: "PI",
    20: "SQRT",
    21: "EXP",
    22: "LN",
    23: "LOG10",
    24: "ABS",
    25: "INT",
    26: "SIGN",
    27: "ROUND",
    28: "LOOKUP",
    29: "INDEX",
    30: "REPT",
    31: "MID",
    32: "LEN",
    33: "VALUE",
    34: "TRUE",
    35: "FALSE",
    36: "AND",
    37: "OR",
    38: "NOT",
    39: "MOD",
    40: "DCOUNT",
    41: "DSUM",
    42: "DAVERAGE",
    43: "DMIN",
    44: "DMAX",
    45: "DSTDEV",
    46: "VAR",
    47: "DVAR",
    48: "TEXT",
    49: "LINEST",
    50: "TREND",
    51: "LOGEST",
    52: "GROWTH",
    53: "GOTO",
    54: "HALT",
    55: "RETURN",
    56: "PV",
    57: "FV",
    58: "NPER",
    59: "PMT",
    60: "RATE",
    61: "MIRR",
    62: "IRR",
    63: "RAND",
    64: "MATCH",
    65: "DATE",
    66: "TIME",
    67: "DAY",
    68: "MONTH",
    69: "YEAR",
    70: "WEEKDAY",
    71: "HOUR",
    72: "MINUTE",
    73: "SECOND",
    74: "NOW",
    75: "AREAS",
    76: "ROWS",
    77: "COLUMNS",
    78: "OFFSET",
    79: "ABSREF",
    80: "RELREF",
    81: "ARGUMENT",
    82: "SEARCH",
    83: "TRANSPOSE",
    84: "ERROR",
    85: "STEP",
    86: "TYPE",
    87: "ECHO",
    88: "SET.NAME",
    89: "CALLER",
    90: "DEREF",
    91: "WINDOWS",
    92: "SERIES",
    93: "DOCUMENTS",
    94: "ACTIVE.CELL",
    95: "SELECTION",
    96: "RESULT",
    97: "ATAN2",
    98: "ASIN",
    99: "ACOS",
    100: "CHOOSE",
    101: "HLOOKUP",
    102: "VLOOKUP",
    103: "LINKS",
    104: "INPUT",
    105: "ISREF",
    106: "GET.FORMULA",
    107: "GET.NAME",
    108: "SET.VALUE",
    109: "LOG",
    110: "EXEC",
    111: "CHAR",
    112: "LOWER",
    113: "UPPER",
    114: "PROPER",
    115: "LEFT",
    116: "RIGHT",
    117: "EXACT",
    118: "TRIM",
    119: "REPLACE",
    120: "SUBSTITUTE",
    121: "CODE",
    122: "NAMES",
    123: "DIRECTORY",
    124: "FIND",
    125: "CELL",
    126: "ISERR",
    127: "ISTEXT",
    128: "ISNUMBER",
    129: "ISBLANK",
    130: "T",
    131: "N",
    132: "FOPEN",
    133: "FCLOSE",
    134: "FSIZE",
    135: "FREADLN",
    136: "FREAD",
    137: "FWRITELN",
    138: "FWRITE",
    139: "FPOS",
    140: "DATEVALUE",
    141: "TIMEVALUE",
    142: "SLN",
    143: "SYD",
    144: "DDB",
    145: "GET.DEF",
    146: "REFTEXT",
    147: "TEXTREF",
    148: "INDIRECT",
    149: "REGISTER",
    150: "CALL",
    151: "ADD.BAR",
    152: "ADD.MENU",
    153: "ADD.COMMAND",
    154: "ENABLE.COMMAND",
    155: "CHECK.COMMAND",
    156: "RENAME.COMMAND",
    157: "SHOW.BAR",
    158: "DELETE.MENU",
    159: "DELETE.COMMAND",
    160: "GET.CHART.ITEM",
    161: "DIALOG.BOX",
    162: "CLEAN",
    163: "MDETERM",
    164: "MINVERSE",
    165: "MMULT",
    166: "FILES",
    167: "IPMT",
    168: "PPMT",
    169: "COUNTA",
    170: "CANCEL.KEY",
    171: "FOR",
    172: "WHILE",
    173: "BREAK",
    174: "NEXT",
    175: "INITIATE",
    176: "REQUEST",
    177: "POKE",
    178: "EXECUTE",
    179: "TERMINATE",
    180: "RESTART",
    181: "HELP",
    182: "GET.BAR",
    183: "PRODUCT",
    184: "FACT",
    185: "GET.CELL",
    186: "GET.WORKSPACE",
    187: "GET.WINDOW",
    188: "GET.DOCUMENT",
    189: "DPRODUCT",
    190: "ISNONTEXT",
    191: "GET.NOTE",
    192: "NOTE",
    193: "STDEVP",
    194: "VARP",
    195: "DSTDEVP",
    196: "DVARP",
    197: "TRUNC",
    198: "ISLOGICAL",
    199: "DCOUNTA",
    200: "DELETE.BAR",
    201: "UNREGISTER",
    204: "USDOLLAR",
    205: "FINDB",
    206: "SEARCHB",
    207: "REPLACEB",
    208: "LEFTB",
    209: "RIGHTB",
    210: "MIDB",
    211: "LENB",
    212: "ROUNDUP",
    213: "ROUNDDOWN",
    214: "ASC",
    215: "DBCS",
    216: "RANK",
    219: "ADDRESS",
    220: "DAYS360",
    221: "TODAY",
    222: "VDB",
    223: "ELSE",
    224: "ELSE.IF",
    225: "END.IF",
    226: "FOR.CELL",
    227: "MEDIAN",
    228: "SUMPRODUCT",
    229: "SINH",
    230: "COSH",
    231: "TANH",
    232: "ASINH",
    233: "ACOSH",
    234: "ATANH",
    235: "DGET",
    236: "CREATE.OBJECT",
    237: "VOLATILE",
    238: "LAST.ERROR",
    239: "CUSTOM.UNDO",
    240: "CUSTOM.REPEAT",
    241: "FORMULA.CONVERT",
    242: "GET.LINK.INFO",
    243: "TEXT.BOX",
    244: "INFO",
    245: "GROUP",
    246: "GET.OBJECT",
    247: "DB",
    248: "PAUSE",
    251: "RESUME",
    252: "FREQUENCY",
    253: "ADD.TOOLBAR",
    254: "DELETE.TOOLBAR",
    255: "User",
    256: "RESET.TOOLBAR",
    257: "EVALUATE",
    258: "GET.TOOLBAR",
    259: "GET.TOOL",
    260: "SPELLING.CHECK",
    261: "ERROR.TYPE",
    262: "APP.TITLE",
    263: "WINDOW.TITLE",
    264: "SAVE.TOOLBAR",
    265: "ENABLE.TOOL",
    266: "PRESS.TOOL",
    267: "REGISTER.ID",
    268: "GET.WORKBOOK",
    269: "AVEDEV",
    270: "BETADIST",
    271: "GAMMALN",
    272: "BETAINV",
    273: "BINOMDIST",
    274: "CHIDIST",
    275: "CHIINV",
    276: "COMBIN",
    277: "CONFIDENCE",
    278: "CRITBINOM",
    279: "EVEN",
    280: "EXPONDIST",
    281: "FDIST",
    282: "FINV",
    283: "FISHER",
    284: "FISHERINV",
    285: "FLOOR",
    286: "GAMMADIST",
    287: "GAMMAINV",
    288: "CEILING",
    289: "HYPGEOMDIST",
    290: "LOGNORMDIST",
    291: "LOGINV",
    292: "NEGBINOMDIST",
    293: "NORMDIST",
    294: "NORMSDIST",
    295: "NORMINV",
    296: "NORMSINV",
    297: "STANDARDIZE",
    298: "ODD",
    299: "PERMUT",
    300: "POISSON",
    301: "TDIST",
    302: "WEIBULL",
    303: "SUMXMY2",
    304: "SUMX2MY2",
    305: "SUMX2PY2",
    306: "CHITEST",
    307: "CORREL",
    308: "COVAR",
    309: "FORECAST",
    310: "FTEST",
    311: "INTERCEPT",
    312: "PEARSON",
    313: "RSQ",
    314: "STEYX",
    315: "SLOPE",
    316: "TTEST",
    317: "PROB",
    318: "DEVSQ",
    319: "GEOMEAN",
    320: "HARMEAN",
    321: "SUMSQ",
    322: "KURT",
    323: "SKEW",
    324: "ZTEST",
    325: "LARGE",
    326: "SMALL",
    327: "QUARTILE",
    328: "PERCENTILE",
    329: "PERCENTRANK",
    330: "MODE",
    331: "TRIMMEAN",
    332: "TINV",
    334: "MOVIE.COMMAND",
    335: "GET.MOVIE",
    336: "CONCATENATE",
    337: "POWER",
    338: "PIVOT.ADD.DATA",
    339: "GET.PIVOT.TABLE",
    340: "GET.PIVOT.FIELD",
    341: "GET.PIVOT.ITEM",
    342: "RADIANS",
    343: "DEGREES",
    344: "SUBTOTAL",
    345: "SUMIF",
    346: "COUNTIF",
    347: "COUNTBLANK",
    348: "SCENARIO.GET",
    349: "OPTIONS.LISTS.GET",
    350: "ISPMT",
    351: "DATEDIF",
    352: "DATESTRING",
    353: "NUMBERSTRING",
    354: "ROMAN",
    355: "OPEN.DIALOG",
    356: "SAVE.DIALOG",
    357: "VIEW.GET",
    358: "GETPIVOTDATA",
    359: "HYPERLINK",
    360: "PHONETIC",
    361: "AVERAGEA",
    362: "MAXA",
    363: "MINA",
    364: "STDEVPA",
    365: "VARPA",
    366: "STDEVA",
    367: "VARA",
    368: "BAHTTEXT",
    369: "THAIDAYOFWEEK",
    370: "THAIDIGIT",
    371: "THAIMONTHOFYEAR",
    372: "THAINUMSOUND",
    373: "THAINUMSTRING",
    374: "THAISTRINGLENGTH",
    375: "ISTHAIDIGIT",
    376: "ROUNDBAHTDOWN",
    377: "ROUNDBAHTUP",
    378: "THAIYEAR",
    379: "RTD",
    380: "CUBEVALUE",
    381: "CUBEMEMBER",
    382: "CUBEMEMBERPROPERTY",
    383: "CUBERANKEDMEMBER",
    384: "HEX2BIN",
    385: "HEX2DEC",
    386: "HEX2OCT",
    387: "DEC2BIN",
    388: "DEC2HEX",
    389: "DEC2OCT",
    390: "OCT2BIN",
    391: "OCT2HEX",
    392: "OCT2DEC",
    393: "BIN2DEC",
    394: "BIN2OCT",
    395: "BIN2HEX",
    396: "IMSUB",
    397: "IMDIV",
    398: "IMPOWER",
    399: "IMABS",
    400: "IMSQRT",
    401: "IMLN",
    402: "IMLOG2",
    403: "IMLOG10",
    404: "IMSIN",
    405: "IMCOS",
    406: "IMEXP",
    407: "IMARGUMENT",
    408: "IMCONJUGATE",
    409: "IMAGINARY",
    410: "IMREAL",
    411: "COMPLEX",
    412: "IMSUM",
    413: "IMPRODUCT",
    414: "SERIESSUM",
    415: "FACTDOUBLE",
    416: "SQRTPI",
    417: "QUOTIENT",
    418: "DELTA",
    419: "GESTEP",
    420: "ISEVEN",
    421: "ISODD",
    422: "MROUND",
    423: "ERF",
    424: "ERFC",
    425: "BESSELJ",
    426: "BESSELK",
    427: "BESSELY",
    428: "BESSELI",
    429: "XIRR",
    430: "XNPV",
    431: "PRICEMAT",
    432: "YIELDMAT",
    433: "INTRATE",
    434: "RECEIVED",
    435: "DISC",
    436: "PRICEDISC",
    437: "YIELDDISC",
    438: "TBILLEQ",
    439: "TBILLPRICE",
    440: "TBILLYIELD",
    441: "PRICE",
    442: "YIELD",
    443: "DOLLARDE",
    444: "DOLLARFR",
    445: "NOMINAL",
    446: "EFFECT",
    447: "CUMPRINC",
    448: "CUMIPMT",
    449: "EDATE",
    450: "EOMONTH",
    451: "YEARFRAC",
    452: "COUPDAYBS",
    453: "COUPDAYS",
    454: "COUPDAYSNC",
    455: "COUPNCD",
    456: "COUPNUM",
    457: "COUPPCD",
    458: "DURATION",
    459: "MDURATION",
    460: "ODDLPRICE",
    461: "ODDLYIELD",
    462: "ODDFPRICE",
    463: "ODDFYIELD",
    464: "RANDBETWEEN",
    465: "WEEKNUM",
    466: "AMORDEGRC",
    467: "AMORLINC",
    468: "CONVERT",
    724: "SHEETJS",
    469: "ACCRINT",
    470: "ACCRINTM",
    471: "WORKDAY",
    472: "NETWORKDAYS",
    473: "GCD",
    474: "MULTINOMIAL",
    475: "LCM",
    476: "FVSCHEDULE",
    477: "CUBEKPIMEMBER",
    478: "CUBESET",
    479: "CUBESETCOUNT",
    480: "IFERROR",
    481: "COUNTIFS",
    482: "SUMIFS",
    483: "AVERAGEIF",
    484: "AVERAGEIFS",
  },
  Uu = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0,
  };
function to(e) {
  return (
    e.slice(0, 3) == "of:" && (e = e.slice(3)),
    e.charCodeAt(0) == 61 &&
      ((e = e.slice(1)), e.charCodeAt(0) == 61 && (e = e.slice(1))),
    (e = e.replace(/COM\.MICROSOFT\./g, "")),
    (e = e.replace(
      /\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,
      function (a, t) {
        return t.replace(/\./g, "");
      },
    )),
    (e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1")),
    e.replace(/[;~]/g, ",").replace(/\|/g, ";")
  );
}
function tn(e) {
  var a = e.split(":"),
    t = a[0].split(".")[0];
  return [
    t,
    a[0].split(".")[1] +
      (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : ""),
  ];
}
var Qa = {},
  Fa = {};
function er(e, a) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    (a == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]),
      e.left == null && (e.left = t[0]),
      e.right == null && (e.right = t[1]),
      e.top == null && (e.top = t[2]),
      e.bottom == null && (e.bottom = t[3]),
      e.header == null && (e.header = t[4]),
      e.footer == null && (e.footer = t[5]));
  }
}
function zi(e, a, t, r, n, s) {
  try {
    r.cellNF && (e.z = we[a]);
  } catch (i) {
    if (r.WTF) throw i;
  }
  if (!(e.t === "z" && !r.cellStyles)) {
    if (
      (e.t === "d" && typeof e.v == "string" && (e.v = et(e.v)),
      (!r || r.cellText !== !1) && e.t !== "z")
    )
      try {
        if ((we[a] == null && da(U0[a] || "General", a), e.t === "e"))
          e.w = e.w || Sa[e.v];
        else if (a === 0)
          if (e.t === "n")
            (e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = ar(e.v));
          else if (e.t === "d") {
            var o = _t(e.v);
            (o | 0) === o ? (e.w = o.toString(10)) : (e.w = ar(o));
          } else {
            if (e.v === void 0) return "";
            e.w = ma(e.v, Fa);
          }
        else e.t === "d" ? (e.w = Dt(a, _t(e.v), Fa)) : (e.w = Dt(a, e.v, Fa));
      } catch (i) {
        if (r.WTF) throw i;
      }
    if (r.cellStyles && t != null)
      try {
        ((e.s = s.Fills[t]),
          e.s.fgColor &&
            e.s.fgColor.theme &&
            !e.s.fgColor.rgb &&
            ((e.s.fgColor.rgb = Mr(
              n.themeElements.clrScheme[e.s.fgColor.theme].rgb,
              e.s.fgColor.tint || 0,
            )),
            r.WTF &&
              (e.s.fgColor.raw_rgb =
                n.themeElements.clrScheme[e.s.fgColor.theme].rgb)),
          e.s.bgColor &&
            e.s.bgColor.theme &&
            ((e.s.bgColor.rgb = Mr(
              n.themeElements.clrScheme[e.s.bgColor.theme].rgb,
              e.s.bgColor.tint || 0,
            )),
            r.WTF &&
              (e.s.bgColor.raw_rgb =
                n.themeElements.clrScheme[e.s.bgColor.theme].rgb)));
      } catch (i) {
        if (r.WTF && s.Fills) throw i;
      }
  }
}
function ju(e, a) {
  var t = He(a);
  t.s.r <= t.e.r &&
    t.s.c <= t.e.c &&
    t.s.r >= 0 &&
    t.s.c >= 0 &&
    (e["!ref"] = Ce(t));
}
var Hu = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
  Gu = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,
  Vu = /<(?:\w:)?hyperlink [^>]*>/gm,
  Wu = /"(\w*:\w*)"/,
  zu = /<(?:\w:)?col\b[^>]*[\/]?>/g,
  Xu = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
  $u = /<(?:\w:)?pageMargins[^>]*\/>/g,
  Xi = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
  Ku = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,
  Yu = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function qu(e, a, t, r, n, s, o) {
  if (!e) return e;
  r || (r = { "!id": {} });
  var i = a.dense ? [] : {},
    l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    c = "",
    p = "",
    m = e.match(Gu);
  m
    ? ((c = e.slice(0, m.index)), (p = e.slice(m.index + m[0].length)))
    : (c = p = e);
  var f = c.match(Xi);
  f ? Gn(f[0], i, n, t) : (f = c.match(Ku)) && Ju(f[0], f[1] || "", i, n, t);
  var h = (c.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (h > 0) {
    var x = c.slice(h, h + 50).match(Wu);
    x && ju(i, x[1]);
  }
  var d = c.match(Yu);
  d && d[1] && r2(d[1], n);
  var u = [];
  if (a.cellStyles) {
    var A = c.match(zu);
    A && e2(u, A);
  }
  m && n2(m[1], i, a, l, s, o);
  var B = p.match(Xu);
  B && (i["!autofilter"] = t2(B[0]));
  var w = [],
    M = p.match(Hu);
  if (M)
    for (h = 0; h != M.length; ++h)
      w[h] = He(M[h].slice(M[h].indexOf('"') + 1));
  var H = p.match(Vu);
  H && Zu(i, H, r);
  var U = p.match($u);
  if (
    (U && (i["!margins"] = Qu(ge(U[0]))),
    !i["!ref"] && l.e.c >= l.s.c && l.e.r >= l.s.r && (i["!ref"] = Ce(l)),
    a.sheetRows > 0 && i["!ref"])
  ) {
    var k = He(i["!ref"]);
    a.sheetRows <= +k.e.r &&
      ((k.e.r = a.sheetRows - 1),
      k.e.r > l.e.r && (k.e.r = l.e.r),
      k.e.r < k.s.r && (k.s.r = k.e.r),
      k.e.c > l.e.c && (k.e.c = l.e.c),
      k.e.c < k.s.c && (k.s.c = k.e.c),
      (i["!fullref"] = i["!ref"]),
      (i["!ref"] = Ce(k)));
  }
  return (
    u.length > 0 && (i["!cols"] = u),
    w.length > 0 && (i["!merges"] = w),
    i
  );
}
function Gn(e, a, t, r) {
  var n = ge(e);
  (t.Sheets[r] || (t.Sheets[r] = {}),
    n.codeName && (t.Sheets[r].CodeName = ye(Ie(n.codeName))));
}
function Ju(e, a, t, r, n) {
  Gn(e.slice(0, e.indexOf(">")), t, r, n);
}
function Zu(e, a, t) {
  for (var r = Array.isArray(e), n = 0; n != a.length; ++n) {
    var s = ge(Ie(a[n]), !0);
    if (!s.ref) return;
    var o = ((t || {})["!id"] || [])[s.id];
    (o
      ? ((s.Target = o.Target),
        s.location && (s.Target += "#" + ye(s.location)))
      : ((s.Target = "#" + ye(s.location)),
        (o = { Target: s.Target, TargetMode: "Internal" })),
      (s.Rel = o),
      s.tooltip && ((s.Tooltip = s.tooltip), delete s.tooltip));
    for (var i = He(s.ref), l = i.s.r; l <= i.e.r; ++l)
      for (var c = i.s.c; c <= i.e.c; ++c) {
        var p = _e({ c, r: l });
        r
          ? (e[l] || (e[l] = []),
            e[l][c] || (e[l][c] = { t: "z", v: void 0 }),
            (e[l][c].l = s))
          : (e[p] || (e[p] = { t: "z", v: void 0 }), (e[p].l = s));
      }
  }
}
function Qu(e) {
  var a = {};
  return (
    ["left", "right", "top", "bottom", "header", "footer"].forEach(
      function (t) {
        e[t] && (a[t] = parseFloat(e[t]));
      },
    ),
    a
  );
}
function e2(e, a) {
  for (var t = !1, r = 0; r != a.length; ++r) {
    var n = ge(a[r], !0);
    n.hidden && (n.hidden = Oe(n.hidden));
    var s = parseInt(n.min, 10) - 1,
      o = parseInt(n.max, 10) - 1;
    for (
      n.outlineLevel && (n.level = +n.outlineLevel || 0),
        delete n.min,
        delete n.max,
        n.width = +n.width,
        !t && n.width && ((t = !0), jn(n.width)),
        Ba(n);
      s <= o;
    )
      e[s++] = at(n);
  }
}
function t2(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var a2 = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function r2(e, a) {
  (a.Views || (a.Views = [{}]),
    (e.match(a2) || []).forEach(function (t, r) {
      var n = ge(t);
      (a.Views[r] || (a.Views[r] = {}),
        +n.zoomScale && (a.Views[r].zoom = +n.zoomScale),
        Oe(n.rightToLeft) && (a.Views[r].RTL = !0));
    }));
}
var n2 = (function () {
  var e = /<(?:\w+:)?c[ \/>]/,
    a = /<\/(?:\w+:)?row>/,
    t = /r=["']([^"']*)["']/,
    r = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,
    n = /ref=["']([^"']*)["']/,
    s = rr("v"),
    o = rr("f");
  return function (l, c, p, m, f, h) {
    for (
      var x = 0,
        d = "",
        u = [],
        A = [],
        B = 0,
        w = 0,
        M = 0,
        H = "",
        U,
        k,
        S = 0,
        _ = 0,
        I,
        R,
        N = 0,
        X = 0,
        ae = Array.isArray(h.CellXf),
        ee,
        ie = [],
        Z = [],
        xe = Array.isArray(c),
        j = [],
        fe = {},
        ne = !1,
        b = !!p.sheetStubs,
        O = l.split(a),
        L = 0,
        P = O.length;
      L != P;
      ++L
    ) {
      d = O[L].trim();
      var K = d.length;
      if (K !== 0) {
        var re = 0;
        e: for (x = 0; x < K; ++x)
          switch (d[x]) {
            case ">":
              if (d[x - 1] != "/") {
                ++x;
                break e;
              }
              if (p && p.cellStyles) {
                if (
                  ((k = ge(d.slice(re, x), !0)),
                  (S = k.r != null ? parseInt(k.r, 10) : S + 1),
                  (_ = -1),
                  p.sheetRows && p.sheetRows < S)
                )
                  continue;
                ((fe = {}),
                  (ne = !1),
                  k.ht &&
                    ((ne = !0),
                    (fe.hpt = parseFloat(k.ht)),
                    (fe.hpx = ir(fe.hpt))),
                  k.hidden == "1" && ((ne = !0), (fe.hidden = !0)),
                  k.outlineLevel != null &&
                    ((ne = !0), (fe.level = +k.outlineLevel)),
                  ne && (j[S - 1] = fe));
              }
              break;
            case "<":
              re = x;
              break;
          }
        if (re >= x) break;
        if (
          ((k = ge(d.slice(re, x), !0)),
          (S = k.r != null ? parseInt(k.r, 10) : S + 1),
          (_ = -1),
          !(p.sheetRows && p.sheetRows < S))
        ) {
          (m.s.r > S - 1 && (m.s.r = S - 1),
            m.e.r < S - 1 && (m.e.r = S - 1),
            p &&
              p.cellStyles &&
              ((fe = {}),
              (ne = !1),
              k.ht &&
                ((ne = !0), (fe.hpt = parseFloat(k.ht)), (fe.hpx = ir(fe.hpt))),
              k.hidden == "1" && ((ne = !0), (fe.hidden = !0)),
              k.outlineLevel != null &&
                ((ne = !0), (fe.level = +k.outlineLevel)),
              ne && (j[S - 1] = fe)),
            (u = d.slice(x).split(e)));
          for (var Q = 0; Q != u.length && u[Q].trim().charAt(0) == "<"; ++Q);
          for (u = u.slice(Q), x = 0; x != u.length; ++x)
            if (((d = u[x].trim()), d.length !== 0)) {
              if (
                ((A = d.match(t)),
                (B = x),
                (w = 0),
                (M = 0),
                (d = "<c " + (d.slice(0, 1) == "<" ? ">" : "") + d),
                A != null && A.length === 2)
              ) {
                for (
                  B = 0, H = A[1], w = 0;
                  w != H.length && !((M = H.charCodeAt(w) - 64) < 1 || M > 26);
                  ++w
                )
                  B = 26 * B + M;
                (--B, (_ = B));
              } else ++_;
              for (w = 0; w != d.length && d.charCodeAt(w) !== 62; ++w);
              if (
                (++w,
                (k = ge(d.slice(0, w), !0)),
                k.r || (k.r = _e({ r: S - 1, c: _ })),
                (H = d.slice(w)),
                (U = { t: "" }),
                (A = H.match(s)) != null && A[1] !== "" && (U.v = ye(A[1])),
                p.cellFormula)
              ) {
                if ((A = H.match(o)) != null && A[1] !== "") {
                  if (
                    ((U.f = ye(Ie(A[1])).replace(
                      /\r\n/g,
                      `
`,
                    )),
                    p.xlfn || (U.f = Js(U.f)),
                    A[0].indexOf('t="array"') > -1)
                  )
                    ((U.F = (H.match(n) || [])[1]),
                      U.F.indexOf(":") > -1 && ie.push([He(U.F), U.F]));
                  else if (A[0].indexOf('t="shared"') > -1) {
                    R = ge(A[0]);
                    var J = ye(Ie(A[1]));
                    (p.xlfn || (J = Js(J)),
                      (Z[parseInt(R.si, 10)] = [R, J, k.r]));
                  }
                } else
                  (A = H.match(/<f[^>]*\/>/)) &&
                    ((R = ge(A[0])),
                    Z[R.si] && (U.f = hm(Z[R.si][1], Z[R.si][2], k.r)));
                var q = vt(k.r);
                for (w = 0; w < ie.length; ++w)
                  q.r >= ie[w][0].s.r &&
                    q.r <= ie[w][0].e.r &&
                    q.c >= ie[w][0].s.c &&
                    q.c <= ie[w][0].e.c &&
                    (U.F = ie[w][1]);
              }
              if (k.t == null && U.v === void 0)
                if (U.f || U.F) ((U.v = 0), (U.t = "n"));
                else if (b) U.t = "z";
                else continue;
              else U.t = k.t || "n";
              switch (
                (m.s.c > _ && (m.s.c = _), m.e.c < _ && (m.e.c = _), U.t)
              ) {
                case "n":
                  if (U.v == "" || U.v == null) {
                    if (!b) continue;
                    U.t = "z";
                  } else U.v = parseFloat(U.v);
                  break;
                case "s":
                  if (typeof U.v > "u") {
                    if (!b) continue;
                    U.t = "z";
                  } else
                    ((I = Qa[parseInt(U.v, 10)]),
                      (U.v = I.t),
                      (U.r = I.r),
                      p.cellHTML && (U.h = I.h));
                  break;
                case "str":
                  ((U.t = "s"),
                    (U.v = U.v != null ? Ie(U.v) : ""),
                    p.cellHTML && (U.h = Fn(U.v)));
                  break;
                case "inlineStr":
                  ((A = H.match(r)),
                    (U.t = "s"),
                    A != null && (I = Un(A[1]))
                      ? ((U.v = I.t), p.cellHTML && (U.h = I.h))
                      : (U.v = ""));
                  break;
                case "b":
                  U.v = Oe(U.v);
                  break;
                case "d":
                  p.cellDates
                    ? (U.v = et(U.v, 1))
                    : ((U.v = _t(et(U.v, 1))), (U.t = "n"));
                  break;
                case "e":
                  ((!p || p.cellText !== !1) && (U.w = U.v), (U.v = mi[U.v]));
                  break;
              }
              if (
                ((N = X = 0),
                (ee = null),
                ae &&
                  k.s !== void 0 &&
                  ((ee = h.CellXf[k.s]),
                  ee != null &&
                    (ee.numFmtId != null && (N = ee.numFmtId),
                    p.cellStyles && ee.fillId != null && (X = ee.fillId))),
                zi(U, N, X, p, f, h),
                p.cellDates &&
                  ae &&
                  U.t == "n" &&
                  Pa(we[N]) &&
                  ((U.t = "d"), (U.v = Vr(U.v))),
                k.cm && p.xlmeta)
              ) {
                var ce = (p.xlmeta.Cell || [])[+k.cm - 1];
                ce && ce.type == "XLDAPR" && (U.D = !0);
              }
              if (xe) {
                var F = vt(k.r);
                (c[F.r] || (c[F.r] = []), (c[F.r][F.c] = U));
              } else c[k.r] = U;
            }
        }
      }
    }
    j.length > 0 && (c["!rows"] = j);
  };
})();
function s2(e, a) {
  var t = {},
    r = e.l + a;
  ((t.r = e.read_shift(4)), (e.l += 4));
  var n = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  return (
    (e.l = r),
    s & 7 && (t.level = s & 7),
    s & 16 && (t.hidden = !0),
    s & 32 && (t.hpt = n / 20),
    t
  );
}
var o2 = _a;
function i2() {}
function c2(e, a) {
  var t = {},
    r = e[e.l];
  return (
    ++e.l,
    (t.above = !(r & 64)),
    (t.left = !(r & 128)),
    (e.l += 18),
    (t.name = Fl(e)),
    t
  );
}
function l2(e) {
  var a = Nt(e);
  return [a];
}
function p2(e) {
  var a = ga(e);
  return [a];
}
function d2(e) {
  var a = Nt(e),
    t = e.read_shift(1);
  return [a, t, "b"];
}
function f2(e) {
  var a = ga(e),
    t = e.read_shift(1);
  return [a, t, "b"];
}
function m2(e) {
  var a = Nt(e),
    t = e.read_shift(1);
  return [a, t, "e"];
}
function u2(e) {
  var a = ga(e),
    t = e.read_shift(1);
  return [a, t, "e"];
}
function h2(e) {
  var a = Nt(e),
    t = e.read_shift(4);
  return [a, t, "s"];
}
function x2(e) {
  var a = ga(e),
    t = e.read_shift(4);
  return [a, t, "s"];
}
function v2(e) {
  var a = Nt(e),
    t = pt(e);
  return [a, t, "n"];
}
function $i(e) {
  var a = ga(e),
    t = pt(e);
  return [a, t, "n"];
}
function g2(e) {
  var a = Nt(e),
    t = On(e);
  return [a, t, "n"];
}
function _2(e) {
  var a = ga(e),
    t = On(e);
  return [a, t, "n"];
}
function S2(e) {
  var a = Nt(e),
    t = Rn(e);
  return [a, t, "is"];
}
function w2(e) {
  var a = Nt(e),
    t = ft(e);
  return [a, t, "str"];
}
function T2(e) {
  var a = ga(e),
    t = ft(e);
  return [a, t, "str"];
}
function E2(e, a, t) {
  var r = e.l + a,
    n = Nt(e);
  n.r = t["!row"];
  var s = e.read_shift(1),
    o = [n, s, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var i = Xr(e, r - e.l, t);
    o[3] = ct(i, null, n, t.supbooks, t);
  } else e.l = r;
  return o;
}
function k2(e, a, t) {
  var r = e.l + a,
    n = Nt(e);
  n.r = t["!row"];
  var s = e.read_shift(1),
    o = [n, s, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var i = Xr(e, r - e.l, t);
    o[3] = ct(i, null, n, t.supbooks, t);
  } else e.l = r;
  return o;
}
function A2(e, a, t) {
  var r = e.l + a,
    n = Nt(e);
  n.r = t["!row"];
  var s = pt(e),
    o = [n, s, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var i = Xr(e, r - e.l, t);
    o[3] = ct(i, null, n, t.supbooks, t);
  } else e.l = r;
  return o;
}
function b2(e, a, t) {
  var r = e.l + a,
    n = Nt(e);
  n.r = t["!row"];
  var s = ft(e),
    o = [n, s, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var i = Xr(e, r - e.l, t);
    o[3] = ct(i, null, n, t.supbooks, t);
  } else e.l = r;
  return o;
}
var C2 = _a;
function y2(e, a) {
  var t = e.l + a,
    r = _a(e),
    n = Pn(e),
    s = ft(e),
    o = ft(e),
    i = ft(e);
  e.l = t;
  var l = { rfx: r, relId: n, loc: s, display: i };
  return (o && (l.Tooltip = o), l);
}
function F2() {}
function D2(e, a, t) {
  var r = e.l + a,
    n = pi(e),
    s = e.read_shift(1),
    o = [n];
  if (((o[2] = s), t.cellFormula)) {
    var i = Pu(e, r - e.l, t);
    o[1] = i;
  } else e.l = r;
  return o;
}
function N2(e, a, t) {
  var r = e.l + a,
    n = _a(e),
    s = [n];
  if (t.cellFormula) {
    var o = Lu(e, r - e.l, t);
    ((s[1] = o), (e.l = r));
  } else e.l = r;
  return s;
}
var B2 = ["left", "right", "top", "bottom", "header", "footer"];
function I2(e) {
  var a = {};
  return (
    B2.forEach(function (t) {
      a[t] = pt(e);
    }),
    a
  );
}
function R2(e) {
  var a = e.read_shift(2);
  return ((e.l += 28), { RTL: a & 32 });
}
function P2() {}
function O2() {}
function L2(e, a, t, r, n, s, o) {
  if (!e) return e;
  var i = a || {};
  r || (r = { "!id": {} });
  var l = i.dense ? [] : {},
    c,
    p = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    m = !1,
    f = !1,
    h,
    x,
    d,
    u,
    A,
    B,
    w,
    M,
    H,
    U = [];
  ((i.biff = 12), (i["!row"] = 0));
  var k = 0,
    S = !1,
    _ = [],
    I = {},
    R = i.supbooks || n.supbooks || [[]];
  if (
    ((R.sharedf = I),
    (R.arrayf = _),
    (R.SheetNames =
      n.SheetNames ||
      n.Sheets.map(function (xe) {
        return xe.name;
      })),
    !i.supbooks && ((i.supbooks = R), n.Names))
  )
    for (var N = 0; N < n.Names.length; ++N) R[0][N + 1] = n.Names[N];
  var X = [],
    ae = [],
    ee = !1;
  Hr[16] = { n: "BrtShortReal", f: $i };
  var ie;
  if (
    (Zt(
      e,
      function (j, fe, ne) {
        if (!f)
          switch (ne) {
            case 148:
              c = j;
              break;
            case 0:
              ((h = j),
                i.sheetRows && i.sheetRows <= h.r && (f = !0),
                (M = rt((u = h.r))),
                (i["!row"] = h.r),
                (j.hidden || j.hpt || j.level != null) &&
                  (j.hpt && (j.hpx = ir(j.hpt)), (ae[j.r] = j)));
              break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 62:
              switch (((x = { t: j[2] }), j[2])) {
                case "n":
                  x.v = j[1];
                  break;
                case "s":
                  ((w = Qa[j[1]]), (x.v = w.t), (x.r = w.r));
                  break;
                case "b":
                  x.v = !!j[1];
                  break;
                case "e":
                  ((x.v = j[1]), i.cellText !== !1 && (x.w = Sa[x.v]));
                  break;
                case "str":
                  ((x.t = "s"), (x.v = j[1]));
                  break;
                case "is":
                  ((x.t = "s"), (x.v = j[1].t));
                  break;
              }
              if (
                ((d = o.CellXf[j[0].iStyleRef]) &&
                  zi(x, d.numFmtId, null, i, s, o),
                (A = j[0].c == -1 ? A + 1 : j[0].c),
                i.dense
                  ? (l[u] || (l[u] = []), (l[u][A] = x))
                  : (l[Je(A) + M] = x),
                i.cellFormula)
              ) {
                for (S = !1, k = 0; k < _.length; ++k) {
                  var b = _[k];
                  h.r >= b[0].s.r &&
                    h.r <= b[0].e.r &&
                    A >= b[0].s.c &&
                    A <= b[0].e.c &&
                    ((x.F = Ce(b[0])), (S = !0));
                }
                !S && j.length > 3 && (x.f = j[3]);
              }
              if (
                (p.s.r > h.r && (p.s.r = h.r),
                p.s.c > A && (p.s.c = A),
                p.e.r < h.r && (p.e.r = h.r),
                p.e.c < A && (p.e.c = A),
                i.cellDates && d && x.t == "n" && Pa(we[d.numFmtId]))
              ) {
                var O = pa(x.v);
                O &&
                  ((x.t = "d"),
                  (x.v = new Date(O.y, O.m - 1, O.d, O.H, O.M, O.S, O.u)));
              }
              ie && (ie.type == "XLDAPR" && (x.D = !0), (ie = void 0));
              break;
            case 1:
            case 12:
              if (!i.sheetStubs || m) break;
              ((x = { t: "z", v: void 0 }),
                (A = j[0].c == -1 ? A + 1 : j[0].c),
                i.dense
                  ? (l[u] || (l[u] = []), (l[u][A] = x))
                  : (l[Je(A) + M] = x),
                p.s.r > h.r && (p.s.r = h.r),
                p.s.c > A && (p.s.c = A),
                p.e.r < h.r && (p.e.r = h.r),
                p.e.c < A && (p.e.c = A),
                ie && (ie.type == "XLDAPR" && (x.D = !0), (ie = void 0)));
              break;
            case 176:
              U.push(j);
              break;
            case 49:
              ie = ((i.xlmeta || {}).Cell || [])[j - 1];
              break;
            case 494:
              var L = r["!id"][j.relId];
              for (
                L
                  ? ((j.Target = L.Target),
                    j.loc && (j.Target += "#" + j.loc),
                    (j.Rel = L))
                  : j.relId == "" && (j.Target = "#" + j.loc),
                  u = j.rfx.s.r;
                u <= j.rfx.e.r;
                ++u
              )
                for (A = j.rfx.s.c; A <= j.rfx.e.c; ++A)
                  i.dense
                    ? (l[u] || (l[u] = []),
                      l[u][A] || (l[u][A] = { t: "z", v: void 0 }),
                      (l[u][A].l = j))
                    : ((B = _e({ c: A, r: u })),
                      l[B] || (l[B] = { t: "z", v: void 0 }),
                      (l[B].l = j));
              break;
            case 426:
              if (!i.cellFormula) break;
              (_.push(j),
                (H = i.dense ? l[u][A] : l[Je(A) + M]),
                (H.f = ct(j[1], p, { r: h.r, c: A }, R, i)),
                (H.F = Ce(j[0])));
              break;
            case 427:
              if (!i.cellFormula) break;
              ((I[_e(j[0].s)] = j[1]),
                (H = i.dense ? l[u][A] : l[Je(A) + M]),
                (H.f = ct(j[1], p, { r: h.r, c: A }, R, i)));
              break;
            case 60:
              if (!i.cellStyles) break;
              for (; j.e >= j.s; )
                ((X[j.e--] = {
                  width: j.w / 256,
                  hidden: !!(j.flags & 1),
                  level: j.level,
                }),
                  ee || ((ee = !0), jn(j.w / 256)),
                  Ba(X[j.e + 1]));
              break;
            case 161:
              l["!autofilter"] = { ref: Ce(j) };
              break;
            case 476:
              l["!margins"] = j;
              break;
            case 147:
              (n.Sheets[t] || (n.Sheets[t] = {}),
                j.name && (n.Sheets[t].CodeName = j.name),
                (j.above || j.left) &&
                  (l["!outline"] = { above: j.above, left: j.left }));
              break;
            case 137:
              (n.Views || (n.Views = [{}]),
                n.Views[0] || (n.Views[0] = {}),
                j.RTL && (n.Views[0].RTL = !0));
              break;
            case 485:
              break;
            case 64:
            case 1053:
              break;
            case 151:
              break;
            case 152:
            case 175:
            case 644:
            case 625:
            case 562:
            case 396:
            case 1112:
            case 1146:
            case 471:
            case 1050:
            case 649:
            case 1105:
            case 589:
            case 607:
            case 564:
            case 1055:
            case 168:
            case 174:
            case 1180:
            case 499:
            case 507:
            case 550:
            case 171:
            case 167:
            case 1177:
            case 169:
            case 1181:
            case 551:
            case 552:
            case 661:
            case 639:
            case 478:
            case 537:
            case 477:
            case 536:
            case 1103:
            case 680:
            case 1104:
            case 1024:
            case 663:
            case 535:
            case 678:
            case 504:
            case 1043:
            case 428:
            case 170:
            case 3072:
            case 50:
            case 2070:
            case 1045:
              break;
            case 35:
              m = !0;
              break;
            case 36:
              m = !1;
              break;
            case 37:
              m = !0;
              break;
            case 38:
              m = !1;
              break;
            default:
              if (!fe.T) {
                if (!m || i.WTF)
                  throw new Error("Unexpected record 0x" + ne.toString(16));
              }
          }
      },
      i,
    ),
    delete i.supbooks,
    delete i["!row"],
    !l["!ref"] &&
      (p.s.r < 2e6 ||
        (c && (c.e.r > 0 || c.e.c > 0 || c.s.r > 0 || c.s.c > 0))) &&
      (l["!ref"] = Ce(c || p)),
    i.sheetRows && l["!ref"])
  ) {
    var Z = He(l["!ref"]);
    i.sheetRows <= +Z.e.r &&
      ((Z.e.r = i.sheetRows - 1),
      Z.e.r > p.e.r && (Z.e.r = p.e.r),
      Z.e.r < Z.s.r && (Z.s.r = Z.e.r),
      Z.e.c > p.e.c && (Z.e.c = p.e.c),
      Z.e.c < Z.s.c && (Z.s.c = Z.e.c),
      (l["!fullref"] = l["!ref"]),
      (l["!ref"] = Ce(Z)));
  }
  return (
    U.length > 0 && (l["!merges"] = U),
    X.length > 0 && (l["!cols"] = X),
    ae.length > 0 && (l["!rows"] = ae),
    l
  );
}
function M2(e) {
  var a = [],
    t = e.match(/^<c:numCache>/),
    r;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (s) {
    var o = s.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    o && (a[+o[1]] = t ? +o[2] : o[2]);
  });
  var n = ye(
    (e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1],
  );
  return (
    (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (s) {
      r = s.replace(/<.*?>/g, "");
    }),
    [a, n, r]
  );
}
function U2(e, a, t, r, n, s) {
  var o = s || { "!type": "chart" };
  if (!e) return s;
  var i = 0,
    l = 0,
    c = "A",
    p = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (
    (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(
      function (m) {
        var f = M2(m);
        ((p.s.r = p.s.c = 0),
          (p.e.c = i),
          (c = Je(i)),
          f[0].forEach(function (h, x) {
            ((o[c + rt(x)] = { t: "n", v: h, z: f[1] }), (l = x));
          }),
          p.e.r < l && (p.e.r = l),
          ++i);
      },
    ),
    i > 0 && (o["!ref"] = Ce(p)),
    o
  );
}
function j2(e, a, t, r, n) {
  if (!e) return e;
  r || (r = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" },
    o,
    i = e.match(Xi);
  return (
    i && Gn(i[0], s, n, t),
    (o = e.match(/drawing r:id="(.*?)"/)) && (s["!rel"] = o[1]),
    r["!id"][s["!rel"]] && (s["!drawel"] = r["!id"][s["!rel"]]),
    s
  );
}
function H2(e, a) {
  e.l += 10;
  var t = ft(e);
  return { name: t };
}
function G2(e, a, t, r, n) {
  if (!e) return e;
  r || (r = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" },
    o = !1;
  return (
    Zt(
      e,
      function (l, c, p) {
        switch (p) {
          case 550:
            s["!rel"] = l;
            break;
          case 651:
            (n.Sheets[t] || (n.Sheets[t] = {}),
              l.name && (n.Sheets[t].CodeName = l.name));
            break;
          case 562:
          case 652:
          case 669:
          case 679:
          case 551:
          case 552:
          case 476:
          case 3072:
            break;
          case 35:
            o = !0;
            break;
          case 36:
            o = !1;
            break;
          case 37:
            break;
          case 38:
            break;
          default:
            if (!(c.T > 0)) {
              if (!(c.T < 0)) {
                if (!o || a.WTF)
                  throw new Error("Unexpected record 0x" + p.toString(16));
              }
            }
        }
      },
      a,
    ),
    r["!id"][s["!rel"]] && (s["!drawel"] = r["!id"][s["!rel"]]),
    s
  );
}
var Ki = [
    ["allowRefreshQuery", !1, "bool"],
    ["autoCompressPictures", !0, "bool"],
    ["backupFile", !1, "bool"],
    ["checkCompatibility", !1, "bool"],
    ["CodeName", ""],
    ["date1904", !1, "bool"],
    ["defaultThemeVersion", 0, "int"],
    ["filterPrivacy", !1, "bool"],
    ["hidePivotFieldList", !1, "bool"],
    ["promptedSolutions", !1, "bool"],
    ["publishItems", !1, "bool"],
    ["refreshAllConnections", !1, "bool"],
    ["saveExternalLinkValues", !0, "bool"],
    ["showBorderUnselectedTables", !0, "bool"],
    ["showInkAnnotation", !0, "bool"],
    ["showObjects", "all"],
    ["showPivotChartFilter", !1, "bool"],
    ["updateLinks", "userSet"],
  ],
  V2 = [
    ["activeTab", 0, "int"],
    ["autoFilterDateGrouping", !0, "bool"],
    ["firstSheet", 0, "int"],
    ["minimized", !1, "bool"],
    ["showHorizontalScroll", !0, "bool"],
    ["showSheetTabs", !0, "bool"],
    ["showVerticalScroll", !0, "bool"],
    ["tabRatio", 600, "int"],
    ["visibility", "visible"],
  ],
  W2 = [],
  z2 = [
    ["calcCompleted", "true"],
    ["calcMode", "auto"],
    ["calcOnSave", "true"],
    ["concurrentCalc", "true"],
    ["fullCalcOnLoad", "false"],
    ["fullPrecision", "true"],
    ["iterate", "false"],
    ["iterateCount", "100"],
    ["iterateDelta", "0.001"],
    ["refMode", "A1"],
  ];
function ao(e, a) {
  for (var t = 0; t != e.length; ++t)
    for (var r = e[t], n = 0; n != a.length; ++n) {
      var s = a[n];
      if (r[s[0]] == null) r[s[0]] = s[1];
      else
        switch (s[2]) {
          case "bool":
            typeof r[s[0]] == "string" && (r[s[0]] = Oe(r[s[0]]));
            break;
          case "int":
            typeof r[s[0]] == "string" && (r[s[0]] = parseInt(r[s[0]], 10));
            break;
        }
    }
}
function ro(e, a) {
  for (var t = 0; t != a.length; ++t) {
    var r = a[t];
    if (e[r[0]] == null) e[r[0]] = r[1];
    else
      switch (r[2]) {
        case "bool":
          typeof e[r[0]] == "string" && (e[r[0]] = Oe(e[r[0]]));
          break;
        case "int":
          typeof e[r[0]] == "string" && (e[r[0]] = parseInt(e[r[0]], 10));
          break;
      }
  }
}
function Yi(e) {
  (ro(e.WBProps, Ki),
    ro(e.CalcPr, z2),
    ao(e.WBView, V2),
    ao(e.Sheets, W2),
    (Fa.date1904 = Oe(e.WBProps.date1904)));
}
var X2 = "][*?/\\".split("");
function $2(e, a) {
  if (e.length > 31) throw new Error("Sheet names cannot exceed 31 chars");
  var t = !0;
  return (
    X2.forEach(function (r) {
      if (e.indexOf(r) != -1)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
    }),
    t
  );
}
var K2 = /<\w+:workbook/;
function Y2(e, a) {
  if (!e) throw new Error("Could not find file");
  var t = {
      AppVersion: {},
      WBProps: {},
      WBView: [],
      Sheets: [],
      CalcPr: {},
      Names: [],
      xmlns: "",
    },
    r = !1,
    n = "xmlns",
    s = {},
    o = 0;
  if (
    (e.replace(ut, function (l, c) {
      var p = ge(l);
      switch (zt(p[0])) {
        case "<?xml":
          break;
        case "<workbook":
          (l.match(K2) && (n = "xmlns" + l.match(/<(\w+):/)[1]),
            (t.xmlns = p[n]));
          break;
        case "</workbook>":
          break;
        case "<fileVersion":
          (delete p[0], (t.AppVersion = p));
          break;
        case "<fileVersion/>":
        case "</fileVersion>":
          break;
        case "<fileSharing":
          break;
        case "<fileSharing/>":
          break;
        case "<workbookPr":
        case "<workbookPr/>":
          (Ki.forEach(function (m) {
            if (p[m[0]] != null)
              switch (m[2]) {
                case "bool":
                  t.WBProps[m[0]] = Oe(p[m[0]]);
                  break;
                case "int":
                  t.WBProps[m[0]] = parseInt(p[m[0]], 10);
                  break;
                default:
                  t.WBProps[m[0]] = p[m[0]];
              }
          }),
            p.codeName && (t.WBProps.CodeName = Ie(p.codeName)));
          break;
        case "</workbookPr>":
          break;
        case "<workbookProtection":
          break;
        case "<workbookProtection/>":
          break;
        case "<bookViews":
        case "<bookViews>":
        case "</bookViews>":
          break;
        case "<workbookView":
        case "<workbookView/>":
          (delete p[0], t.WBView.push(p));
          break;
        case "</workbookView>":
          break;
        case "<sheets":
        case "<sheets>":
        case "</sheets>":
          break;
        case "<sheet":
          switch (p.state) {
            case "hidden":
              p.Hidden = 1;
              break;
            case "veryHidden":
              p.Hidden = 2;
              break;
            default:
              p.Hidden = 0;
          }
          (delete p.state,
            (p.name = ye(Ie(p.name))),
            delete p[0],
            t.Sheets.push(p));
          break;
        case "</sheet>":
          break;
        case "<functionGroups":
        case "<functionGroups/>":
          break;
        case "<functionGroup":
          break;
        case "<externalReferences":
        case "</externalReferences>":
        case "<externalReferences>":
          break;
        case "<externalReference":
          break;
        case "<definedNames/>":
          break;
        case "<definedNames>":
        case "<definedNames":
          r = !0;
          break;
        case "</definedNames>":
          r = !1;
          break;
        case "<definedName":
          ((s = {}),
            (s.Name = Ie(p.name)),
            p.comment && (s.Comment = p.comment),
            p.localSheetId && (s.Sheet = +p.localSheetId),
            Oe(p.hidden || "0") && (s.Hidden = !0),
            (o = c + l.length));
          break;
        case "</definedName>":
          ((s.Ref = ye(Ie(e.slice(o, c)))), t.Names.push(s));
          break;
        case "<definedName/>":
          break;
        case "<calcPr":
          (delete p[0], (t.CalcPr = p));
          break;
        case "<calcPr/>":
          (delete p[0], (t.CalcPr = p));
          break;
        case "</calcPr>":
          break;
        case "<oleSize":
          break;
        case "<customWorkbookViews>":
        case "</customWorkbookViews>":
        case "<customWorkbookViews":
          break;
        case "<customWorkbookView":
        case "</customWorkbookView>":
          break;
        case "<pivotCaches>":
        case "</pivotCaches>":
        case "<pivotCaches":
          break;
        case "<pivotCache":
          break;
        case "<smartTagPr":
        case "<smartTagPr/>":
          break;
        case "<smartTagTypes":
        case "<smartTagTypes>":
        case "</smartTagTypes>":
          break;
        case "<smartTagType":
          break;
        case "<webPublishing":
        case "<webPublishing/>":
          break;
        case "<fileRecoveryPr":
        case "<fileRecoveryPr/>":
          break;
        case "<webPublishObjects>":
        case "<webPublishObjects":
        case "</webPublishObjects>":
          break;
        case "<webPublishObject":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          r = !0;
          break;
        case "</ext>":
          r = !1;
          break;
        case "<ArchID":
          break;
        case "<AlternateContent":
        case "<AlternateContent>":
          r = !0;
          break;
        case "</AlternateContent>":
          r = !1;
          break;
        case "<revisionPtr":
          break;
        default:
          if (!r && a.WTF)
            throw new Error("unrecognized " + p[0] + " in workbook");
      }
      return l;
    }),
    fl.indexOf(t.xmlns) === -1)
  )
    throw new Error("Unknown Namespace: " + t.xmlns);
  return (Yi(t), t);
}
function q2(e, a) {
  var t = {};
  return (
    (t.Hidden = e.read_shift(4)),
    (t.iTabID = e.read_shift(4)),
    (t.strRelID = pn(e)),
    (t.name = ft(e)),
    t
  );
}
function J2(e, a) {
  var t = {},
    r = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = a > 8 ? ft(e) : "";
  return (
    n.length > 0 && (t.CodeName = n),
    (t.autoCompressPictures = !!(r & 65536)),
    (t.backupFile = !!(r & 64)),
    (t.checkCompatibility = !!(r & 4096)),
    (t.date1904 = !!(r & 1)),
    (t.filterPrivacy = !!(r & 8)),
    (t.hidePivotFieldList = !!(r & 1024)),
    (t.promptedSolutions = !!(r & 16)),
    (t.publishItems = !!(r & 2048)),
    (t.refreshAllConnections = !!(r & 262144)),
    (t.saveExternalLinkValues = !!(r & 128)),
    (t.showBorderUnselectedTables = !!(r & 4)),
    (t.showInkAnnotation = !!(r & 32)),
    (t.showObjects = ["all", "placeholders", "none"][(r >> 13) & 3]),
    (t.showPivotChartFilter = !!(r & 32768)),
    (t.updateLinks = ["userSet", "never", "always"][(r >> 8) & 3]),
    t
  );
}
function Z2(e, a) {
  var t = {};
  return (e.read_shift(4), (t.ArchID = e.read_shift(4)), (e.l += a - 8), t);
}
function Q2(e, a, t) {
  var r = e.l + a;
  ((e.l += 4), (e.l += 1));
  var n = e.read_shift(4),
    s = Dl(e),
    o = Ou(e, 0, t),
    i = Pn(e);
  e.l = r;
  var l = { Name: s, Ptg: o };
  return (n < 268435455 && (l.Sheet = n), i && (l.Comment = i), l);
}
function eh(e, a) {
  var t = {
      AppVersion: {},
      WBProps: {},
      WBView: [],
      Sheets: [],
      CalcPr: {},
      xmlns: "",
    },
    r = [],
    n = !1;
  (a || (a = {}), (a.biff = 12));
  var s = [],
    o = [[]];
  return (
    (o.SheetNames = []),
    (o.XTI = []),
    (Hr[16] = { n: "BrtFRTArchID$", f: Z2 }),
    Zt(
      e,
      function (l, c, p) {
        switch (p) {
          case 156:
            (o.SheetNames.push(l.name), t.Sheets.push(l));
            break;
          case 153:
            t.WBProps = l;
            break;
          case 39:
            (l.Sheet != null && (a.SID = l.Sheet),
              (l.Ref = ct(l.Ptg, null, null, o, a)),
              delete a.SID,
              delete l.Ptg,
              s.push(l));
            break;
          case 1036:
            break;
          case 357:
          case 358:
          case 355:
          case 667:
            (o[0].length ? o.push([p, l]) : (o[0] = [p, l]),
              (o[o.length - 1].XTI = []));
            break;
          case 362:
            (o.length === 0 && ((o[0] = []), (o[0].XTI = [])),
              (o[o.length - 1].XTI = o[o.length - 1].XTI.concat(l)),
              (o.XTI = o.XTI.concat(l)));
            break;
          case 361:
            break;
          case 2071:
          case 158:
          case 143:
          case 664:
          case 353:
            break;
          case 3072:
          case 3073:
          case 534:
          case 677:
          case 157:
          case 610:
          case 2050:
          case 155:
          case 548:
          case 676:
          case 128:
          case 665:
          case 2128:
          case 2125:
          case 549:
          case 2053:
          case 596:
          case 2076:
          case 2075:
          case 2082:
          case 397:
          case 154:
          case 1117:
          case 553:
          case 2091:
            break;
          case 35:
            (r.push(p), (n = !0));
            break;
          case 36:
            (r.pop(), (n = !1));
            break;
          case 37:
            (r.push(p), (n = !0));
            break;
          case 38:
            (r.pop(), (n = !1));
            break;
          case 16:
            break;
          default:
            if (!c.T) {
              if (
                !n ||
                (a.WTF && r[r.length - 1] != 37 && r[r.length - 1] != 35)
              )
                throw new Error("Unexpected record 0x" + p.toString(16));
            }
        }
      },
      a,
    ),
    Yi(t),
    (t.Names = s),
    (t.supbooks = o),
    t
  );
}
function th(e, a, t) {
  return a.slice(-4) === ".bin" ? eh(e, t) : Y2(e, t);
}
function ah(e, a, t, r, n, s, o, i) {
  return a.slice(-4) === ".bin"
    ? L2(e, r, t, n, s, o, i)
    : qu(e, r, t, n, s, o, i);
}
function rh(e, a, t, r, n, s, o, i) {
  return a.slice(-4) === ".bin" ? G2(e, r, t, n, s) : j2(e, r, t, n, s);
}
function nh(e, a, t, r, n, s, o, i) {
  return a.slice(-4) === ".bin" ? fm() : mm();
}
function sh(e, a, t, r, n, s, o, i) {
  return a.slice(-4) === ".bin" ? pm() : dm();
}
function oh(e, a, t, r) {
  return a.slice(-4) === ".bin" ? Cf(e, t, r) : wf(e, t, r);
}
function ih(e, a, t) {
  return Pi(e, t);
}
function ch(e, a, t) {
  return a.slice(-4) === ".bin" ? Gd(e, t) : jd(e, t);
}
function lh(e, a, t) {
  return a.slice(-4) === ".bin" ? im(e, t) : am(e, t);
}
function ph(e, a, t) {
  return a.slice(-4) === ".bin" ? Qf(e) : Jf(e);
}
function dh(e, a, t, r) {
  return t.slice(-4) === ".bin" ? em(e, a, t, r) : void 0;
}
function fh(e, a, t) {
  return a.slice(-4) === ".bin" ? Yf(e, a, t) : qf(e, a, t);
}
var qi = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
  Ji = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Bt(e, a) {
  var t = e.split(/\s+/),
    r = [];
  if (((r[0] = t[0]), t.length === 1)) return r;
  var n = e.match(qi),
    s,
    o,
    i,
    l;
  if (n)
    for (l = 0; l != n.length; ++l)
      ((s = n[l].match(Ji)),
        (o = s[1].indexOf(":")) === -1
          ? (r[s[1]] = s[2].slice(1, s[2].length - 1))
          : (s[1].slice(0, 6) === "xmlns:"
              ? (i = "xmlns" + s[1].slice(6))
              : (i = s[1].slice(o + 1)),
            (r[i] = s[2].slice(1, s[2].length - 1))));
  return r;
}
function mh(e) {
  var a = e.split(/\s+/),
    t = {};
  if (a.length === 1) return t;
  var r = e.match(qi),
    n,
    s,
    o,
    i;
  if (r)
    for (i = 0; i != r.length; ++i)
      ((n = r[i].match(Ji)),
        (s = n[1].indexOf(":")) === -1
          ? (t[n[1]] = n[2].slice(1, n[2].length - 1))
          : (n[1].slice(0, 6) === "xmlns:"
              ? (o = "xmlns" + n[1].slice(6))
              : (o = n[1].slice(s + 1)),
            (t[o] = n[2].slice(1, n[2].length - 1))));
  return t;
}
var tr;
function uh(e, a) {
  var t = tr[e] || ye(e);
  return t === "General" ? ma(a) : Dt(t, a);
}
function hh(e, a, t, r) {
  var n = r;
  switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = Oe(r);
      break;
    case "i2":
    case "int":
      n = parseInt(r, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(r);
      break;
    case "date":
    case "dateTime.tz":
      n = et(r);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + t[0]);
  }
  e[ye(a)] = n;
}
function xh(e, a, t) {
  if (e.t !== "z") {
    if (!t || t.cellText !== !1)
      try {
        e.t === "e"
          ? (e.w = e.w || Sa[e.v])
          : a === "General"
            ? e.t === "n"
              ? (e.v | 0) === e.v
                ? (e.w = e.v.toString(10))
                : (e.w = ar(e.v))
              : (e.w = ma(e.v))
            : (e.w = uh(a || "General", e.v));
      } catch (s) {
        if (t.WTF) throw s;
      }
    try {
      var r = tr[a] || a || "General";
      if ((t.cellNF && (e.z = r), t.cellDates && e.t == "n" && Pa(r))) {
        var n = pa(e.v);
        n &&
          ((e.t = "d"),
          (e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
      }
    } catch (s) {
      if (t.WTF) throw s;
    }
  }
}
function vh(e, a, t) {
  if (t.cellStyles && a.Interior) {
    var r = a.Interior;
    r.Pattern && (r.patternType = hf[r.Pattern] || r.Pattern);
  }
  e[a.ID] = a;
}
function gh(e, a, t, r, n, s, o, i, l, c) {
  var p = "General",
    m = r.StyleID,
    f = {};
  c = c || {};
  var h = [],
    x = 0;
  for (
    m === void 0 && i && (m = i.StyleID), m === void 0 && o && (m = o.StyleID);
    s[m] !== void 0 &&
    (s[m].nf && (p = s[m].nf),
    s[m].Interior && h.push(s[m].Interior),
    !!s[m].Parent);
  )
    m = s[m].Parent;
  switch (t.Type) {
    case "Boolean":
      ((r.t = "b"), (r.v = Oe(e)));
      break;
    case "String":
      ((r.t = "s"),
        (r.r = As(ye(e))),
        (r.v = e.indexOf("<") > -1 ? ye(a || e).replace(/<.*?>/g, "") : r.r));
      break;
    case "DateTime":
      (e.slice(-1) != "Z" && (e += "Z"),
        (r.v =
          (et(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3)),
        r.v !== r.v ? (r.v = ye(e)) : r.v < 60 && (r.v = r.v - 1),
        (!p || p == "General") && (p = "yyyy-mm-dd"));
    case "Number":
      (r.v === void 0 && (r.v = +e), r.t || (r.t = "n"));
      break;
    case "Error":
      ((r.t = "e"), (r.v = mi[e]), c.cellText !== !1 && (r.w = e));
      break;
    default:
      e == "" && a == "" ? (r.t = "z") : ((r.t = "s"), (r.v = As(a || e)));
      break;
  }
  if ((xh(r, p, c), c.cellFormula !== !1))
    if (r.Formula) {
      var d = ye(r.Formula);
      (d.charCodeAt(0) == 61 && (d = d.slice(1)),
        (r.f = ya(d, n)),
        delete r.Formula,
        r.ArrayRange == "RC"
          ? (r.F = ya("RC:RC", n))
          : r.ArrayRange &&
            ((r.F = ya(r.ArrayRange, n)), l.push([He(r.F), r.F])));
    } else
      for (x = 0; x < l.length; ++x)
        n.r >= l[x][0].s.r &&
          n.r <= l[x][0].e.r &&
          n.c >= l[x][0].s.c &&
          n.c <= l[x][0].e.c &&
          (r.F = l[x][1]);
  (c.cellStyles &&
    (h.forEach(function (u) {
      !f.patternType && u.patternType && (f.patternType = u.patternType);
    }),
    (r.s = f)),
    r.StyleID !== void 0 && (r.ixfe = r.StyleID));
}
function _h(e) {
  ((e.t = e.v || ""),
    (e.t = e.t
      .replace(
        /\r\n/g,
        `
`,
      )
      .replace(
        /\r/g,
        `
`,
      )),
    (e.v = e.w = e.ixfe = void 0));
}
function an(e, a) {
  var t = a || {};
  Uo();
  var r = Ha(Dn(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") &&
    (r = Ie(r));
  var n = r.slice(0, 1024).toLowerCase(),
    s = !1;
  if (
    ((n = n.replace(/".*?"/g, "")),
    (n.indexOf(">") & 1023) >
      Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023))
  ) {
    var o = at(t);
    return ((o.type = "string"), sr.to_workbook(r, o));
  }
  if (
    (n.indexOf("<?xml") == -1 &&
      ["html", "table", "head", "meta", "script", "style", "div"].forEach(
        function (ue) {
          n.indexOf("<" + ue) >= 0 && (s = !0);
        },
      ),
    s)
  )
    return yh(r, t);
  tr = {
    "General Number": "General",
    "General Date": we[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": we[15],
    "Short Date": we[14],
    "Long Time": we[19],
    "Medium Time": we[18],
    "Short Time": we[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: we[2],
    Standard: we[4],
    Percent: we[10],
    Scientific: we[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@',
  };
  var i,
    l = [],
    c,
    p = {},
    m = [],
    f = t.dense ? [] : {},
    h = "",
    x = {},
    d = {},
    u = Bt('<Data ss:Type="String">'),
    A = 0,
    B = 0,
    w = 0,
    M = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    H = {},
    U = {},
    k = "",
    S = 0,
    _ = [],
    I = {},
    R = {},
    N = 0,
    X = [],
    ae = [],
    ee = {},
    ie = [],
    Z,
    xe = !1,
    j = [],
    fe = [],
    ne = {},
    b = 0,
    O = 0,
    L = { Sheets: [], WBProps: { date1904: !1 } },
    P = {};
  ((nr.lastIndex = 0), (r = r.replace(/<!--([\s\S]*?)-->/gm, "")));
  for (var K = ""; (i = nr.exec(r)); )
    switch ((i[3] = (K = i[3]).toLowerCase())) {
      case "data":
        if (K == "data") {
          if (i[1] === "/") {
            if ((c = l.pop())[0] !== i[3])
              throw new Error("Bad state: " + c.join("|"));
          } else i[0].charAt(i[0].length - 2) !== "/" && l.push([i[3], !0]);
          break;
        }
        if (l[l.length - 1][1]) break;
        i[1] === "/"
          ? gh(
              r.slice(A, i.index),
              k,
              u,
              l[l.length - 1][0] == "comment" ? ee : x,
              { c: B, r: w },
              H,
              ie[B],
              d,
              j,
              t,
            )
          : ((k = ""), (u = Bt(i[0])), (A = i.index + i[0].length));
        break;
      case "cell":
        if (i[1] === "/")
          if (
            (ae.length > 0 && (x.c = ae),
            (!t.sheetRows || t.sheetRows > w) &&
              x.v !== void 0 &&
              (t.dense
                ? (f[w] || (f[w] = []), (f[w][B] = x))
                : (f[Je(B) + rt(w)] = x)),
            x.HRef &&
              ((x.l = { Target: ye(x.HRef) }),
              x.HRefScreenTip && (x.l.Tooltip = x.HRefScreenTip),
              delete x.HRef,
              delete x.HRefScreenTip),
            (x.MergeAcross || x.MergeDown) &&
              ((b = B + (parseInt(x.MergeAcross, 10) | 0)),
              (O = w + (parseInt(x.MergeDown, 10) | 0)),
              _.push({ s: { c: B, r: w }, e: { c: b, r: O } })),
            !t.sheetStubs)
          )
            x.MergeAcross ? (B = b + 1) : ++B;
          else if (x.MergeAcross || x.MergeDown) {
            for (var re = B; re <= b; ++re)
              for (var Q = w; Q <= O; ++Q)
                (re > B || Q > w) &&
                  (t.dense
                    ? (f[Q] || (f[Q] = []), (f[Q][re] = { t: "z" }))
                    : (f[Je(re) + rt(Q)] = { t: "z" }));
            B = b + 1;
          } else ++B;
        else
          ((x = mh(i[0])),
            x.Index && (B = +x.Index - 1),
            B < M.s.c && (M.s.c = B),
            B > M.e.c && (M.e.c = B),
            i[0].slice(-2) === "/>" && ++B,
            (ae = []));
        break;
      case "row":
        i[1] === "/" || i[0].slice(-2) === "/>"
          ? (w < M.s.r && (M.s.r = w),
            w > M.e.r && (M.e.r = w),
            i[0].slice(-2) === "/>" &&
              ((d = Bt(i[0])), d.Index && (w = +d.Index - 1)),
            (B = 0),
            ++w)
          : ((d = Bt(i[0])),
            d.Index && (w = +d.Index - 1),
            (ne = {}),
            (d.AutoFitHeight == "0" || d.Height) &&
              ((ne.hpx = parseInt(d.Height, 10)),
              (ne.hpt = Ri(ne.hpx)),
              (fe[w] = ne)),
            d.Hidden == "1" && ((ne.hidden = !0), (fe[w] = ne)));
        break;
      case "worksheet":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
          (m.push(h),
            M.s.r <= M.e.r &&
              M.s.c <= M.e.c &&
              ((f["!ref"] = Ce(M)),
              t.sheetRows &&
                t.sheetRows <= M.e.r &&
                ((f["!fullref"] = f["!ref"]),
                (M.e.r = t.sheetRows - 1),
                (f["!ref"] = Ce(M)))),
            _.length && (f["!merges"] = _),
            ie.length > 0 && (f["!cols"] = ie),
            fe.length > 0 && (f["!rows"] = fe),
            (p[h] = f));
        } else
          ((M = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }),
            (w = B = 0),
            l.push([i[3], !1]),
            (c = Bt(i[0])),
            (h = ye(c.Name)),
            (f = t.dense ? [] : {}),
            (_ = []),
            (j = []),
            (fe = []),
            (P = { name: h, Hidden: 0 }),
            L.Sheets.push(P));
        break;
      case "table":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
        } else {
          if (i[0].slice(-2) == "/>") break;
          (l.push([i[3], !1]), (ie = []), (xe = !1));
        }
        break;
      case "style":
        i[1] === "/" ? vh(H, U, t) : (U = Bt(i[0]));
        break;
      case "numberformat":
        ((U.nf = ye(Bt(i[0]).Format || "General")),
          tr[U.nf] && (U.nf = tr[U.nf]));
        for (var J = 0; J != 392 && we[J] != U.nf; ++J);
        if (J == 392) {
          for (J = 57; J != 392; ++J)
            if (we[J] == null) {
              da(U.nf, J);
              break;
            }
        }
        break;
      case "column":
        if (l[l.length - 1][0] !== "table") break;
        if (
          ((Z = Bt(i[0])),
          Z.Hidden && ((Z.hidden = !0), delete Z.Hidden),
          Z.Width && (Z.wpx = parseInt(Z.Width, 10)),
          !xe && Z.wpx > 10)
        ) {
          ((xe = !0), (xt = Bi));
          for (var q = 0; q < ie.length; ++q) ie[q] && Ba(ie[q]);
        }
        (xe && Ba(Z), (ie[Z.Index - 1 || ie.length] = Z));
        for (var ce = 0; ce < +Z.Span; ++ce) ie[ie.length] = at(Z);
        break;
      case "namedrange":
        if (i[1] === "/") break;
        L.Names || (L.Names = []);
        var F = ge(i[0]),
          Te = { Name: F.Name, Ref: ya(F.RefersTo.slice(1), { r: 0, c: 0 }) };
        (L.Sheets.length > 0 && (Te.Sheet = L.Sheets.length - 1),
          L.Names.push(Te));
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (i[0].slice(-2) === "/>") break;
        i[1] === "/" ? (k += r.slice(S, i.index)) : (S = i.index + i[0].length);
        break;
      case "interior":
        if (!t.cellStyles) break;
        U.Interior = Bt(i[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (i[0].slice(-2) === "/>") break;
        i[1] === "/"
          ? tp(I, K, r.slice(N, i.index))
          : (N = i.index + i[0].length);
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
        } else l.push([i[3], !1]);
        break;
      case "comment":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
          (_h(ee), ae.push(ee));
        } else (l.push([i[3], !1]), (c = Bt(i[0])), (ee = { a: c.Author }));
        break;
      case "autofilter":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
        } else if (i[0].charAt(i[0].length - 2) !== "/") {
          var he = Bt(i[0]);
          ((f["!autofilter"] = { ref: ya(he.Range).replace(/\$/g, "") }),
            l.push([i[3], !0]));
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
        } else i[0].charAt(i[0].length - 2) !== "/" && l.push([i[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (i[1] === "/") {
          if ((c = l.pop())[0] !== i[3])
            throw new Error("Bad state: " + c.join("|"));
        } else i[0].charAt(i[0].length - 2) !== "/" && l.push([i[3], !0]);
        break;
      case "null":
        break;
      default:
        if (
          (l.length == 0 && i[3] == "document") ||
          (l.length == 0 && i[3] == "uof")
        )
          return lo(r, t);
        var ve = !0;
        switch (l[l.length - 1][0]) {
          case "officedocumentsettings":
            switch (i[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                ve = !1;
            }
            break;
          case "componentoptions":
            switch (i[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                ve = !1;
            }
            break;
          case "excelworkbook":
            switch (i[3]) {
              case "date1904":
                L.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                ve = !1;
            }
            break;
          case "workbookoptions":
            switch (i[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                ve = !1;
            }
            break;
          case "worksheetoptions":
            switch (i[3]) {
              case "visible":
                if (i[0].slice(-2) !== "/>")
                  if (i[1] === "/")
                    switch (r.slice(N, i.index)) {
                      case "SheetHidden":
                        P.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        P.Hidden = 2;
                        break;
                    }
                  else N = i.index + i[0].length;
                break;
              case "header":
                (f["!margins"] || er((f["!margins"] = {}), "xlml"),
                  isNaN(+ge(i[0]).Margin) ||
                    (f["!margins"].header = +ge(i[0]).Margin));
                break;
              case "footer":
                (f["!margins"] || er((f["!margins"] = {}), "xlml"),
                  isNaN(+ge(i[0]).Margin) ||
                    (f["!margins"].footer = +ge(i[0]).Margin));
                break;
              case "pagemargins":
                var pe = ge(i[0]);
                (f["!margins"] || er((f["!margins"] = {}), "xlml"),
                  isNaN(+pe.Top) || (f["!margins"].top = +pe.Top),
                  isNaN(+pe.Left) || (f["!margins"].left = +pe.Left),
                  isNaN(+pe.Right) || (f["!margins"].right = +pe.Right),
                  isNaN(+pe.Bottom) || (f["!margins"].bottom = +pe.Bottom));
                break;
              case "displayrighttoleft":
                (L.Views || (L.Views = []),
                  L.Views[0] || (L.Views[0] = {}),
                  (L.Views[0].RTL = !0));
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                (f["!outline"] || (f["!outline"] = {}),
                  (f["!outline"].above = !0));
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                (f["!outline"] || (f["!outline"] = {}),
                  (f["!outline"].left = !0));
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                ve = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (i[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                ve = !1;
            }
            break;
          case "pagebreaks":
            switch (i[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                ve = !1;
            }
            break;
          case "autofilter":
            switch (i[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                ve = !1;
            }
            break;
          case "querytable":
            switch (i[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                ve = !1;
            }
            break;
          case "datavalidation":
            switch (i[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                ve = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (i[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                ve = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (i[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                ve = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            ve = !1;
            break;
        }
        if (ve || i[3].match(/!\[CDATA/)) break;
        if (!l[l.length - 1][1])
          throw "Unrecognized tag: " + i[3] + "|" + l.join("|");
        if (l[l.length - 1][0] === "customdocumentproperties") {
          if (i[0].slice(-2) === "/>") break;
          i[1] === "/"
            ? hh(R, K, X, r.slice(N, i.index))
            : ((X = i), (N = i.index + i[0].length));
          break;
        }
        if (t.WTF) throw "Unrecognized tag: " + i[3] + "|" + l.join("|");
    }
  var oe = {};
  return (
    !t.bookSheets && !t.bookProps && (oe.Sheets = p),
    (oe.SheetNames = m),
    (oe.Workbook = L),
    (oe.SSF = at(we)),
    (oe.Props = I),
    (oe.Custprops = R),
    oe
  );
}
function un(e, a) {
  switch ((zn((a = a || {})), a.type || "base64")) {
    case "base64":
      return an(bt(e), a);
    case "binary":
    case "buffer":
    case "file":
      return an(e, a);
    case "array":
      return an(va(e), a);
  }
}
function Sh(e) {
  var a = {},
    t = e.content;
  if (
    ((t.l = 28),
    (a.AnsiUserType = t.read_shift(0, "lpstr-ansi")),
    (a.AnsiClipboardFormat = Il(t)),
    t.length - t.l <= 4)
  )
    return a;
  var r = t.read_shift(4);
  if (
    r == 0 ||
    r > 40 ||
    ((t.l -= 4),
    (a.Reserved1 = t.read_shift(0, "lpstr-ansi")),
    t.length - t.l <= 4) ||
    ((r = t.read_shift(4)), r !== 1907505652) ||
    ((a.UnicodeClipboardFormat = Rl(t)),
    (r = t.read_shift(4)),
    r == 0 || r > 40)
  )
    return a;
  ((t.l -= 4), (a.Reserved2 = t.read_shift(0, "lpwstr")));
}
var wh = [60, 1084, 2066, 2165, 2175];
function Th(e, a, t, r, n) {
  var s = r,
    o = [],
    i = t.slice(t.l, t.l + s);
  if (n && n.enc && n.enc.insitu && i.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        n.enc.insitu(i);
    }
  (o.push(i), (t.l += s));
  for (var l = Kt(t, t.l), c = hn[l], p = 0; c != null && wh.indexOf(l) > -1; )
    ((s = Kt(t, t.l + 2)),
      (p = t.l + 4),
      l == 2066 ? (p += 4) : (l == 2165 || l == 2175) && (p += 12),
      (i = t.slice(p, t.l + 4 + s)),
      o.push(i),
      (t.l += 4 + s),
      (c = hn[(l = Kt(t, t.l))]));
  var m = ta(o);
  tt(m, 0);
  var f = 0;
  m.lens = [];
  for (var h = 0; h < o.length; ++h) (m.lens.push(f), (f += o[h].length));
  if (m.length < r)
    throw (
      "XLS Record 0x" + e.toString(16) + " Truncated: " + m.length + " < " + r
    );
  return a.f(m, m.length, n);
}
function Ht(e, a, t) {
  if (e.t !== "z" && e.XF) {
    var r = 0;
    try {
      ((r = e.z || e.XF.numFmtId || 0), a.cellNF && (e.z = we[r]));
    } catch (s) {
      if (a.WTF) throw s;
    }
    if (!a || a.cellText !== !1)
      try {
        e.t === "e"
          ? (e.w = e.w || Sa[e.v])
          : r === 0 || r == "General"
            ? e.t === "n"
              ? (e.v | 0) === e.v
                ? (e.w = e.v.toString(10))
                : (e.w = ar(e.v))
              : (e.w = ma(e.v))
            : (e.w = Dt(r, e.v, { date1904: !!t, dateNF: a && a.dateNF }));
      } catch (s) {
        if (a.WTF) throw s;
      }
    if (a.cellDates && r && e.t == "n" && Pa(we[r] || String(r))) {
      var n = pa(e.v);
      n &&
        ((e.t = "d"), (e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function br(e, a, t) {
  return { v: e, ixfe: a, t };
}
function Eh(e, a) {
  var t = { opts: {} },
    r = {},
    n = a.dense ? [] : {},
    s = {},
    o = {},
    i = null,
    l = [],
    c = "",
    p = {},
    m,
    f = "",
    h,
    x,
    d,
    u,
    A = {},
    B = [],
    w,
    M,
    H = [],
    U = [],
    k = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] },
    S = {},
    _ = function (Ee) {
      return Ee < 8 ? fa[Ee] : (Ee < 64 && U[Ee - 8]) || fa[Ee];
    },
    I = function (Ee, De, Le) {
      var Pe = De.XF.data;
      if (!(!Pe || !Pe.patternType || !Le || !Le.cellStyles)) {
        ((De.s = {}), (De.s.patternType = Pe.patternType));
        var jt;
        ((jt = or(_(Pe.icvFore))) && (De.s.fgColor = { rgb: jt }),
          (jt = or(_(Pe.icvBack))) && (De.s.bgColor = { rgb: jt }));
      }
    },
    R = function (Ee, De, Le) {
      if (!(ne > 1) && !(Le.sheetRows && Ee.r >= Le.sheetRows)) {
        if (
          (Le.cellStyles && De.XF && De.XF.data && I(Ee, De, Le),
          delete De.ixfe,
          delete De.XF,
          (m = Ee),
          (f = _e(Ee)),
          (!o || !o.s || !o.e) &&
            (o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
          Ee.r < o.s.r && (o.s.r = Ee.r),
          Ee.c < o.s.c && (o.s.c = Ee.c),
          Ee.r + 1 > o.e.r && (o.e.r = Ee.r + 1),
          Ee.c + 1 > o.e.c && (o.e.c = Ee.c + 1),
          Le.cellFormula && De.f)
        ) {
          for (var Pe = 0; Pe < B.length; ++Pe)
            if (
              !(B[Pe][0].s.c > Ee.c || B[Pe][0].s.r > Ee.r) &&
              !(B[Pe][0].e.c < Ee.c || B[Pe][0].e.r < Ee.r)
            ) {
              ((De.F = Ce(B[Pe][0])),
                (B[Pe][0].s.c != Ee.c || B[Pe][0].s.r != Ee.r) && delete De.f,
                De.f && (De.f = "" + ct(B[Pe][1], o, Ee, j, N)));
              break;
            }
        }
        Le.dense
          ? (n[Ee.r] || (n[Ee.r] = []), (n[Ee.r][Ee.c] = De))
          : (n[f] = De);
      }
    },
    N = {
      enc: !1,
      sbcch: 0,
      snames: [],
      sharedf: A,
      arrayf: B,
      rrtabid: [],
      lastuser: "",
      biff: 8,
      codepage: 0,
      winlocked: 0,
      cellStyles: !!a && !!a.cellStyles,
      WTF: !!a && !!a.wtf,
    };
  a.password && (N.password = a.password);
  var X,
    ae = [],
    ee = [],
    ie = [],
    Z = [],
    xe = !1,
    j = [];
  ((j.SheetNames = N.snames),
    (j.sharedf = N.sharedf),
    (j.arrayf = N.arrayf),
    (j.names = []),
    (j.XTI = []));
  var fe = 0,
    ne = 0,
    b = 0,
    O = [],
    L = [],
    P;
  ((N.codepage = 1200), Pt(1200));
  for (var K = !1; e.l < e.length - 1; ) {
    var re = e.l,
      Q = e.read_shift(2);
    if (Q === 0 && fe === 10) break;
    var J = e.l === e.length ? 0 : e.read_shift(2),
      q = hn[Q];
    if (q && q.f) {
      if (a.bookSheets && fe === 133 && Q !== 133) break;
      if (((fe = Q), q.r === 2 || q.r == 12)) {
        var ce = e.read_shift(2);
        if (
          ((J -= 2),
          !N.enc && ce !== Q && (((ce & 255) << 8) | (ce >> 8)) !== Q)
        )
          throw new Error("rt mismatch: " + ce + "!=" + Q);
        q.r == 12 && ((e.l += 10), (J -= 10));
      }
      var F = {};
      if (
        (Q === 10 ? (F = q.f(e, J, N)) : (F = Th(Q, q, e, J, N)),
        ne == 0 && [9, 521, 1033, 2057].indexOf(fe) === -1)
      )
        continue;
      switch (Q) {
        case 34:
          t.opts.Date1904 = k.WBProps.date1904 = F;
          break;
        case 134:
          t.opts.WriteProtect = !0;
          break;
        case 47:
          if ((N.enc || (e.l = 0), (N.enc = F), !a.password))
            throw new Error("File is password-protected");
          if (F.valid == null) throw new Error("Encryption scheme unsupported");
          if (!F.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          N.lastuser = F;
          break;
        case 66:
          var Te = Number(F);
          switch (Te) {
            case 21010:
              Te = 1200;
              break;
            case 32768:
              Te = 1e4;
              break;
            case 32769:
              Te = 1252;
              break;
          }
          (Pt((N.codepage = Te)), (K = !0));
          break;
        case 317:
          N.rrtabid = F;
          break;
        case 25:
          N.winlocked = F;
          break;
        case 439:
          t.opts.RefreshAll = F;
          break;
        case 12:
          t.opts.CalcCount = F;
          break;
        case 16:
          t.opts.CalcDelta = F;
          break;
        case 17:
          t.opts.CalcIter = F;
          break;
        case 13:
          t.opts.CalcMode = F;
          break;
        case 14:
          t.opts.CalcPrecision = F;
          break;
        case 95:
          t.opts.CalcSaveRecalc = F;
          break;
        case 15:
          N.CalcRefMode = F;
          break;
        case 2211:
          t.opts.FullCalc = F;
          break;
        case 129:
          (F.fDialog && (n["!type"] = "dialog"),
            F.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = !0),
            F.fRight || ((n["!outline"] || (n["!outline"] = {})).left = !0));
          break;
        case 224:
          H.push(F);
          break;
        case 430:
          (j.push([F]), (j[j.length - 1].XTI = []));
          break;
        case 35:
        case 547:
          j[j.length - 1].push(F);
          break;
        case 24:
        case 536:
          ((P = { Name: F.Name, Ref: ct(F.rgce, o, null, j, N) }),
            F.itab > 0 && (P.Sheet = F.itab - 1),
            j.names.push(P),
            j[0] || ((j[0] = []), (j[0].XTI = [])),
            j[j.length - 1].push(F),
            F.Name == "_xlnm._FilterDatabase" &&
              F.itab > 0 &&
              F.rgce &&
              F.rgce[0] &&
              F.rgce[0][0] &&
              F.rgce[0][0][0] == "PtgArea3d" &&
              (L[F.itab - 1] = { ref: Ce(F.rgce[0][0][1][2]) }));
          break;
        case 22:
          N.ExternCount = F;
          break;
        case 23:
          (j.length == 0 && ((j[0] = []), (j[0].XTI = [])),
            (j[j.length - 1].XTI = j[j.length - 1].XTI.concat(F)),
            (j.XTI = j.XTI.concat(F)));
          break;
        case 2196:
          if (N.biff < 8) break;
          P != null && (P.Comment = F[1]);
          break;
        case 18:
          n["!protect"] = F;
          break;
        case 19:
          F !== 0 && N.WTF && console.error("Password verifier: " + F);
          break;
        case 133:
          ((s[F.pos] = F), N.snames.push(F.name));
          break;
        case 10:
          {
            if (--ne) break;
            if (o.e) {
              if (o.e.r > 0 && o.e.c > 0) {
                if (
                  (o.e.r--,
                  o.e.c--,
                  (n["!ref"] = Ce(o)),
                  a.sheetRows && a.sheetRows <= o.e.r)
                ) {
                  var he = o.e.r;
                  ((o.e.r = a.sheetRows - 1),
                    (n["!fullref"] = n["!ref"]),
                    (n["!ref"] = Ce(o)),
                    (o.e.r = he));
                }
                (o.e.r++, o.e.c++);
              }
              (ae.length > 0 && (n["!merges"] = ae),
                ee.length > 0 && (n["!objects"] = ee),
                ie.length > 0 && (n["!cols"] = ie),
                Z.length > 0 && (n["!rows"] = Z),
                k.Sheets.push(S));
            }
            (c === "" ? (p = n) : (r[c] = n), (n = a.dense ? [] : {}));
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (
              (N.biff === 8 &&
                (N.biff =
                  { 9: 2, 521: 3, 1033: 4 }[Q] ||
                  { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[
                    F.BIFFVer
                  ] ||
                  8),
              (N.biffguess = F.BIFFVer == 0),
              F.BIFFVer == 0 &&
                F.dt == 4096 &&
                ((N.biff = 5), (K = !0), Pt((N.codepage = 28591))),
              N.biff == 8 && F.BIFFVer == 0 && F.dt == 16 && (N.biff = 2),
              ne++)
            )
              break;
            if (
              ((n = a.dense ? [] : {}),
              N.biff < 8 &&
                !K &&
                ((K = !0), Pt((N.codepage = a.codepage || 1252))),
              N.biff < 5 || (F.BIFFVer == 0 && F.dt == 4096))
            ) {
              (c === "" && (c = "Sheet1"),
                (o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }));
              var ve = { pos: e.l - J, name: c };
              ((s[ve.pos] = ve), N.snames.push(c));
            } else c = (s[re] || { name: "" }).name;
            (F.dt == 32 && (n["!type"] = "chart"),
              F.dt == 64 && (n["!type"] = "macro"),
              (ae = []),
              (ee = []),
              (N.arrayf = B = []),
              (ie = []),
              (Z = []),
              (xe = !1),
              (S = { Hidden: (s[re] || { hs: 0 }).hs, name: c }));
          }
          break;
        case 515:
        case 3:
        case 2:
          (n["!type"] == "chart" &&
            (a.dense ? (n[F.r] || [])[F.c] : n[_e({ c: F.c, r: F.r })]) &&
            ++F.c,
            (w = { ixfe: F.ixfe, XF: H[F.ixfe] || {}, v: F.val, t: "n" }),
            b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
            Ht(w, a, t.opts.Date1904),
            R({ c: F.c, r: F.r }, w, a));
          break;
        case 5:
        case 517:
          ((w = { ixfe: F.ixfe, XF: H[F.ixfe], v: F.val, t: F.t }),
            b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
            Ht(w, a, t.opts.Date1904),
            R({ c: F.c, r: F.r }, w, a));
          break;
        case 638:
          ((w = { ixfe: F.ixfe, XF: H[F.ixfe], v: F.rknum, t: "n" }),
            b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
            Ht(w, a, t.opts.Date1904),
            R({ c: F.c, r: F.r }, w, a));
          break;
        case 189:
          for (var pe = F.c; pe <= F.C; ++pe) {
            var oe = F.rkrec[pe - F.c][0];
            ((w = { ixfe: oe, XF: H[oe], v: F.rkrec[pe - F.c][1], t: "n" }),
              b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
              Ht(w, a, t.opts.Date1904),
              R({ c: pe, r: F.r }, w, a));
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (F.val == "String") {
              i = F;
              break;
            }
            if (
              ((w = br(F.val, F.cell.ixfe, F.tt)),
              (w.XF = H[w.ixfe]),
              a.cellFormula)
            ) {
              var ue = F.formula;
              if (ue && ue[0] && ue[0][0] && ue[0][0][0] == "PtgExp") {
                var ke = ue[0][0][1][0],
                  Ye = ue[0][0][1][1],
                  nt = _e({ r: ke, c: Ye });
                A[nt]
                  ? (w.f = "" + ct(F.formula, o, F.cell, j, N))
                  : (w.F = ((a.dense ? (n[ke] || [])[Ye] : n[nt]) || {}).F);
              } else w.f = "" + ct(F.formula, o, F.cell, j, N);
            }
            (b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
              Ht(w, a, t.opts.Date1904),
              R(F.cell, w, a),
              (i = F));
          }
          break;
        case 7:
        case 519:
          if (i)
            ((i.val = F),
              (w = br(F, i.cell.ixfe, "s")),
              (w.XF = H[w.ixfe]),
              a.cellFormula && (w.f = "" + ct(i.formula, o, i.cell, j, N)),
              b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
              Ht(w, a, t.opts.Date1904),
              R(i.cell, w, a),
              (i = null));
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            B.push(F);
            var st = _e(F[0].s);
            if (
              ((h = a.dense ? (n[F[0].s.r] || [])[F[0].s.c] : n[st]),
              a.cellFormula && h)
            ) {
              if (!i || !st || !h) break;
              ((h.f = "" + ct(F[1], o, F[0], j, N)), (h.F = Ce(F[0])));
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (f) {
              if (!i) break;
              ((A[_e(i.cell)] = F[0]),
                (h = a.dense ? (n[i.cell.r] || [])[i.cell.c] : n[_e(i.cell)]),
                ((h || {}).f = "" + ct(F[0], o, m, j, N)));
            }
          }
          break;
        case 253:
          ((w = br(l[F.isst].t, F.ixfe, "s")),
            l[F.isst].h && (w.h = l[F.isst].h),
            (w.XF = H[w.ixfe]),
            b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
            Ht(w, a, t.opts.Date1904),
            R({ c: F.c, r: F.r }, w, a));
          break;
        case 513:
          a.sheetStubs &&
            ((w = { ixfe: F.ixfe, XF: H[F.ixfe], t: "z" }),
            b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
            Ht(w, a, t.opts.Date1904),
            R({ c: F.c, r: F.r }, w, a));
          break;
        case 190:
          if (a.sheetStubs)
            for (var St = F.c; St <= F.C; ++St) {
              var Fe = F.ixfe[St - F.c];
              ((w = { ixfe: Fe, XF: H[Fe], t: "z" }),
                b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
                Ht(w, a, t.opts.Date1904),
                R({ c: St, r: F.r }, w, a));
            }
          break;
        case 214:
        case 516:
        case 4:
          ((w = br(F.val, F.ixfe, "s")),
            (w.XF = H[w.ixfe]),
            b > 0 && (w.z = O[(w.ixfe >> 8) & 63]),
            Ht(w, a, t.opts.Date1904),
            R({ c: F.c, r: F.r }, w, a));
          break;
        case 0:
        case 512:
          ne === 1 && (o = F);
          break;
        case 252:
          l = F;
          break;
        case 1054:
          if (N.biff == 4) {
            O[b++] = F[1];
            for (var Ve = 0; Ve < b + 163 && we[Ve] != F[1]; ++Ve);
            Ve >= 163 && da(F[1], b + 163);
          } else da(F[1], F[0]);
          break;
        case 30:
          {
            O[b++] = F;
            for (var Ne = 0; Ne < b + 163 && we[Ne] != F; ++Ne);
            Ne >= 163 && da(F, b + 163);
          }
          break;
        case 229:
          ae = ae.concat(F);
          break;
        case 93:
          ee[F.cmo[0]] = N.lastobj = F;
          break;
        case 438:
          N.lastobj.TxO = F;
          break;
        case 127:
          N.lastobj.ImData = F;
          break;
        case 440:
          for (u = F[0].s.r; u <= F[0].e.r; ++u)
            for (d = F[0].s.c; d <= F[0].e.c; ++d)
              ((h = a.dense ? (n[u] || [])[d] : n[_e({ c: d, r: u })]),
                h && (h.l = F[1]));
          break;
        case 2048:
          for (u = F[0].s.r; u <= F[0].e.r; ++u)
            for (d = F[0].s.c; d <= F[0].e.c; ++d)
              ((h = a.dense ? (n[u] || [])[d] : n[_e({ c: d, r: u })]),
                h && h.l && (h.l.Tooltip = F[1]));
          break;
        case 28:
          {
            if (N.biff <= 5 && N.biff >= 2) break;
            h = a.dense ? (n[F[0].r] || [])[F[0].c] : n[_e(F[0])];
            var We = ee[F[2]];
            (h ||
              (a.dense
                ? (n[F[0].r] || (n[F[0].r] = []),
                  (h = n[F[0].r][F[0].c] = { t: "z" }))
                : (h = n[_e(F[0])] = { t: "z" }),
              (o.e.r = Math.max(o.e.r, F[0].r)),
              (o.s.r = Math.min(o.s.r, F[0].r)),
              (o.e.c = Math.max(o.e.c, F[0].c)),
              (o.s.c = Math.min(o.s.c, F[0].c))),
              h.c || (h.c = []),
              (x = { a: F[1], t: We.TxO.t }),
              h.c.push(x));
          }
          break;
        case 2173:
          zf(H[F.ixfe], F.ext);
          break;
        case 125:
          {
            if (!N.cellStyles) break;
            for (; F.e >= F.s; )
              ((ie[F.e--] = {
                width: F.w / 256,
                level: F.level || 0,
                hidden: !!(F.flags & 1),
              }),
                xe || ((xe = !0), jn(F.w / 256)),
                Ba(ie[F.e + 1]));
          }
          break;
        case 520:
          {
            var Re = {};
            (F.level != null && ((Z[F.r] = Re), (Re.level = F.level)),
              F.hidden && ((Z[F.r] = Re), (Re.hidden = !0)),
              F.hpt && ((Z[F.r] = Re), (Re.hpt = F.hpt), (Re.hpx = ir(F.hpt))));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          (n["!margins"] || er((n["!margins"] = {})),
            (n["!margins"][
              { 38: "left", 39: "right", 40: "top", 41: "bottom" }[Q]
            ] = F));
          break;
        case 161:
          (n["!margins"] || er((n["!margins"] = {})),
            (n["!margins"].header = F.header),
            (n["!margins"].footer = F.footer));
          break;
        case 574:
          F.RTL && (k.Views[0].RTL = !0);
          break;
        case 146:
          U = F;
          break;
        case 2198:
          X = F;
          break;
        case 140:
          M = F;
          break;
        case 442:
          c
            ? (S.CodeName = F || S.name)
            : (k.WBProps.CodeName = F || "ThisWorkbook");
          break;
      }
    } else
      (q || console.error("Missing Info for XLS Record 0x" + Q.toString(16)),
        (e.l += J));
  }
  return (
    (t.SheetNames = Wt(s)
      .sort(function (wt, Ee) {
        return Number(wt) - Number(Ee);
      })
      .map(function (wt) {
        return s[wt].name;
      })),
    a.bookSheets || (t.Sheets = r),
    !t.SheetNames.length && p["!ref"]
      ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = p))
      : (t.Preamble = p),
    t.Sheets &&
      L.forEach(function (wt, Ee) {
        t.Sheets[t.SheetNames[Ee]]["!autofilter"] = wt;
      }),
    (t.Strings = l),
    (t.SSF = at(we)),
    N.enc && (t.Encryption = N.enc),
    X && (t.Themes = X),
    (t.Metadata = {}),
    M !== void 0 && (t.Metadata.Country = M),
    j.names.length > 0 && (k.Names = j.names),
    (t.Workbook = k),
    t
  );
}
var no = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae",
};
function kh(e, a, t) {
  var r = be.find(e, "/!DocumentSummaryInformation");
  if (r && r.size > 0)
    try {
      var n = Hs(r, jl, no.DSI);
      for (var s in n) a[s] = n[s];
    } catch (c) {
      if (t.WTF) throw c;
    }
  var o = be.find(e, "/!SummaryInformation");
  if (o && o.size > 0)
    try {
      var i = Hs(o, Hl, no.SI);
      for (var l in i) a[l] == null && (a[l] = i[l]);
    } catch (c) {
      if (t.WTF) throw c;
    }
  a.HeadingPairs &&
    a.TitlesOfParts &&
    (hi(a.HeadingPairs, a.TitlesOfParts, a, t),
    delete a.HeadingPairs,
    delete a.TitlesOfParts);
}
function Zi(e, a) {
  (a || (a = {}), zn(a), Co(), a.codepage && En(a.codepage));
  var t, r;
  if (e.FullPaths) {
    if (be.find(e, "/encryption"))
      throw new Error("File is password-protected");
    ((t = be.find(e, "!CompObj")),
      (r = be.find(e, "/Workbook") || be.find(e, "/Book")));
  } else {
    switch (a.type) {
      case "base64":
        e = Rt(bt(e));
        break;
      case "binary":
        e = Rt(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    (tt(e, 0), (r = { content: e }));
  }
  var n, s;
  if ((t && Sh(t), a.bookProps && !a.bookSheets)) n = {};
  else {
    var o = Ae ? "buffer" : "array";
    if (r && r.content) n = Eh(r.content, a);
    else if ((s = be.find(e, "PerfectOffice_MAIN")) && s.content)
      n = Za.to_workbook(s.content, ((a.type = o), a));
    else if ((s = be.find(e, "NativeContent_MAIN")) && s.content)
      n = Za.to_workbook(s.content, ((a.type = o), a));
    else
      throw (s = be.find(e, "MN0")) && s.content
        ? new Error("Unsupported Works 4 for Mac file")
        : new Error("Cannot find Workbook stream");
    a.bookVBA &&
      e.FullPaths &&
      be.find(e, "/_VBA_PROJECT_CUR/VBA/dir") &&
      (n.vbaraw = lm(e));
  }
  var i = {};
  return (
    e.FullPaths && kh(e, i, a),
    (n.Props = n.Custprops = i),
    a.bookFiles && (n.cfb = e),
    n
  );
}
var Hr = {
    0: { f: s2 },
    1: { f: l2 },
    2: { f: g2 },
    3: { f: m2 },
    4: { f: d2 },
    5: { f: v2 },
    6: { f: w2 },
    7: { f: h2 },
    8: { f: b2 },
    9: { f: A2 },
    10: { f: E2 },
    11: { f: k2 },
    12: { f: p2 },
    13: { f: _2 },
    14: { f: u2 },
    15: { f: f2 },
    16: { f: $i },
    17: { f: T2 },
    18: { f: x2 },
    19: { f: Rn },
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: { T: 1 },
    36: { T: -1 },
    37: { T: 1 },
    38: { T: -1 },
    39: { f: Q2 },
    40: {},
    42: {},
    43: { f: Ef },
    44: { f: Tf },
    45: { f: kf },
    46: { f: bf },
    47: { f: Af },
    48: {},
    49: { f: bl },
    50: {},
    51: { f: $f },
    52: { T: 1 },
    53: { T: -1 },
    54: { T: 1 },
    55: { T: -1 },
    56: { T: 1 },
    57: { T: -1 },
    58: {},
    59: {},
    60: { f: Ci },
    62: { f: S2 },
    63: { f: Zf },
    64: { f: P2 },
    65: {},
    66: {},
    67: {},
    68: {},
    69: {},
    70: {},
    128: {},
    129: { T: 1 },
    130: { T: -1 },
    131: { T: 1, f: mt, p: 0 },
    132: { T: -1 },
    133: { T: 1 },
    134: { T: -1 },
    135: { T: 1 },
    136: { T: -1 },
    137: { T: 1, f: R2 },
    138: { T: -1 },
    139: { T: 1 },
    140: { T: -1 },
    141: { T: 1 },
    142: { T: -1 },
    143: { T: 1 },
    144: { T: -1 },
    145: { T: 1 },
    146: { T: -1 },
    147: { f: c2 },
    148: { f: o2, p: 16 },
    151: { f: F2 },
    152: {},
    153: { f: J2 },
    154: {},
    155: {},
    156: { f: q2 },
    157: {},
    158: {},
    159: { T: 1, f: Hd },
    160: { T: -1 },
    161: { T: 1, f: _a },
    162: { T: -1 },
    163: { T: 1 },
    164: { T: -1 },
    165: { T: 1 },
    166: { T: -1 },
    167: {},
    168: {},
    169: {},
    170: {},
    171: {},
    172: { T: 1 },
    173: { T: -1 },
    174: {},
    175: {},
    176: { f: C2 },
    177: { T: 1 },
    178: { T: -1 },
    179: { T: 1 },
    180: { T: -1 },
    181: { T: 1 },
    182: { T: -1 },
    183: { T: 1 },
    184: { T: -1 },
    185: { T: 1 },
    186: { T: -1 },
    187: { T: 1 },
    188: { T: -1 },
    189: { T: 1 },
    190: { T: -1 },
    191: { T: 1 },
    192: { T: -1 },
    193: { T: 1 },
    194: { T: -1 },
    195: { T: 1 },
    196: { T: -1 },
    197: { T: 1 },
    198: { T: -1 },
    199: { T: 1 },
    200: { T: -1 },
    201: { T: 1 },
    202: { T: -1 },
    203: { T: 1 },
    204: { T: -1 },
    205: { T: 1 },
    206: { T: -1 },
    207: { T: 1 },
    208: { T: -1 },
    209: { T: 1 },
    210: { T: -1 },
    211: { T: 1 },
    212: { T: -1 },
    213: { T: 1 },
    214: { T: -1 },
    215: { T: 1 },
    216: { T: -1 },
    217: { T: 1 },
    218: { T: -1 },
    219: { T: 1 },
    220: { T: -1 },
    221: { T: 1 },
    222: { T: -1 },
    223: { T: 1 },
    224: { T: -1 },
    225: { T: 1 },
    226: { T: -1 },
    227: { T: 1 },
    228: { T: -1 },
    229: { T: 1 },
    230: { T: -1 },
    231: { T: 1 },
    232: { T: -1 },
    233: { T: 1 },
    234: { T: -1 },
    235: { T: 1 },
    236: { T: -1 },
    237: { T: 1 },
    238: { T: -1 },
    239: { T: 1 },
    240: { T: -1 },
    241: { T: 1 },
    242: { T: -1 },
    243: { T: 1 },
    244: { T: -1 },
    245: { T: 1 },
    246: { T: -1 },
    247: { T: 1 },
    248: { T: -1 },
    249: { T: 1 },
    250: { T: -1 },
    251: { T: 1 },
    252: { T: -1 },
    253: { T: 1 },
    254: { T: -1 },
    255: { T: 1 },
    256: { T: -1 },
    257: { T: 1 },
    258: { T: -1 },
    259: { T: 1 },
    260: { T: -1 },
    261: { T: 1 },
    262: { T: -1 },
    263: { T: 1 },
    264: { T: -1 },
    265: { T: 1 },
    266: { T: -1 },
    267: { T: 1 },
    268: { T: -1 },
    269: { T: 1 },
    270: { T: -1 },
    271: { T: 1 },
    272: { T: -1 },
    273: { T: 1 },
    274: { T: -1 },
    275: { T: 1 },
    276: { T: -1 },
    277: {},
    278: { T: 1 },
    279: { T: -1 },
    280: { T: 1 },
    281: { T: -1 },
    282: { T: 1 },
    283: { T: 1 },
    284: { T: -1 },
    285: { T: 1 },
    286: { T: -1 },
    287: { T: 1 },
    288: { T: -1 },
    289: { T: 1 },
    290: { T: -1 },
    291: { T: 1 },
    292: { T: -1 },
    293: { T: 1 },
    294: { T: -1 },
    295: { T: 1 },
    296: { T: -1 },
    297: { T: 1 },
    298: { T: -1 },
    299: { T: 1 },
    300: { T: -1 },
    301: { T: 1 },
    302: { T: -1 },
    303: { T: 1 },
    304: { T: -1 },
    305: { T: 1 },
    306: { T: -1 },
    307: { T: 1 },
    308: { T: -1 },
    309: { T: 1 },
    310: { T: -1 },
    311: { T: 1 },
    312: { T: -1 },
    313: { T: -1 },
    314: { T: 1 },
    315: { T: -1 },
    316: { T: 1 },
    317: { T: -1 },
    318: { T: 1 },
    319: { T: -1 },
    320: { T: 1 },
    321: { T: -1 },
    322: { T: 1 },
    323: { T: -1 },
    324: { T: 1 },
    325: { T: -1 },
    326: { T: 1 },
    327: { T: -1 },
    328: { T: 1 },
    329: { T: -1 },
    330: { T: 1 },
    331: { T: -1 },
    332: { T: 1 },
    333: { T: -1 },
    334: { T: 1 },
    335: { f: Xf },
    336: { T: -1 },
    337: { f: Kf, T: 1 },
    338: { T: -1 },
    339: { T: 1 },
    340: { T: -1 },
    341: { T: 1 },
    342: { T: -1 },
    343: { T: 1 },
    344: { T: -1 },
    345: { T: 1 },
    346: { T: -1 },
    347: { T: 1 },
    348: { T: -1 },
    349: { T: 1 },
    350: { T: -1 },
    351: {},
    352: {},
    353: { T: 1 },
    354: { T: -1 },
    355: { f: pn },
    357: {},
    358: {},
    359: {},
    360: { T: 1 },
    361: {},
    362: { f: bi },
    363: {},
    364: {},
    366: {},
    367: {},
    368: {},
    369: {},
    370: {},
    371: {},
    372: { T: 1 },
    373: { T: -1 },
    374: { T: 1 },
    375: { T: -1 },
    376: { T: 1 },
    377: { T: -1 },
    378: { T: 1 },
    379: { T: -1 },
    380: { T: 1 },
    381: { T: -1 },
    382: { T: 1 },
    383: { T: -1 },
    384: { T: 1 },
    385: { T: -1 },
    386: { T: 1 },
    387: { T: -1 },
    388: { T: 1 },
    389: { T: -1 },
    390: { T: 1 },
    391: { T: -1 },
    392: { T: 1 },
    393: { T: -1 },
    394: { T: 1 },
    395: { T: -1 },
    396: {},
    397: {},
    398: {},
    399: {},
    400: {},
    401: { T: 1 },
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    409: {},
    410: {},
    411: {},
    412: {},
    413: {},
    414: {},
    415: {},
    416: {},
    417: {},
    418: {},
    419: {},
    420: {},
    421: {},
    422: { T: 1 },
    423: { T: 1 },
    424: { T: -1 },
    425: { T: -1 },
    426: { f: D2 },
    427: { f: N2 },
    428: {},
    429: { T: 1 },
    430: { T: -1 },
    431: { T: 1 },
    432: { T: -1 },
    433: { T: 1 },
    434: { T: -1 },
    435: { T: 1 },
    436: { T: -1 },
    437: { T: 1 },
    438: { T: -1 },
    439: { T: 1 },
    440: { T: -1 },
    441: { T: 1 },
    442: { T: -1 },
    443: { T: 1 },
    444: { T: -1 },
    445: { T: 1 },
    446: { T: -1 },
    447: { T: 1 },
    448: { T: -1 },
    449: { T: 1 },
    450: { T: -1 },
    451: { T: 1 },
    452: { T: -1 },
    453: { T: 1 },
    454: { T: -1 },
    455: { T: 1 },
    456: { T: -1 },
    457: { T: 1 },
    458: { T: -1 },
    459: { T: 1 },
    460: { T: -1 },
    461: { T: 1 },
    462: { T: -1 },
    463: { T: 1 },
    464: { T: -1 },
    465: { T: 1 },
    466: { T: -1 },
    467: { T: 1 },
    468: { T: -1 },
    469: { T: 1 },
    470: { T: -1 },
    471: {},
    472: {},
    473: { T: 1 },
    474: { T: -1 },
    475: {},
    476: { f: I2 },
    477: {},
    478: {},
    479: { T: 1 },
    480: { T: -1 },
    481: { T: 1 },
    482: { T: -1 },
    483: { T: 1 },
    484: { T: -1 },
    485: { f: i2 },
    486: { T: 1 },
    487: { T: -1 },
    488: { T: 1 },
    489: { T: -1 },
    490: { T: 1 },
    491: { T: -1 },
    492: { T: 1 },
    493: { T: -1 },
    494: { f: y2 },
    495: { T: 1 },
    496: { T: -1 },
    497: { T: 1 },
    498: { T: -1 },
    499: {},
    500: { T: 1 },
    501: { T: -1 },
    502: { T: 1 },
    503: { T: -1 },
    504: {},
    505: { T: 1 },
    506: { T: -1 },
    507: {},
    508: { T: 1 },
    509: { T: -1 },
    510: { T: 1 },
    511: { T: -1 },
    512: {},
    513: {},
    514: { T: 1 },
    515: { T: -1 },
    516: { T: 1 },
    517: { T: -1 },
    518: { T: 1 },
    519: { T: -1 },
    520: { T: 1 },
    521: { T: -1 },
    522: {},
    523: {},
    524: {},
    525: {},
    526: {},
    527: {},
    528: { T: 1 },
    529: { T: -1 },
    530: { T: 1 },
    531: { T: -1 },
    532: { T: 1 },
    533: { T: -1 },
    534: {},
    535: {},
    536: {},
    537: {},
    538: { T: 1 },
    539: { T: -1 },
    540: { T: 1 },
    541: { T: -1 },
    542: { T: 1 },
    548: {},
    549: {},
    550: { f: pn },
    551: {},
    552: {},
    553: {},
    554: { T: 1 },
    555: { T: -1 },
    556: { T: 1 },
    557: { T: -1 },
    558: { T: 1 },
    559: { T: -1 },
    560: { T: 1 },
    561: { T: -1 },
    562: {},
    564: {},
    565: { T: 1 },
    566: { T: -1 },
    569: { T: 1 },
    570: { T: -1 },
    572: {},
    573: { T: 1 },
    574: { T: -1 },
    577: {},
    578: {},
    579: {},
    580: {},
    581: {},
    582: {},
    583: {},
    584: {},
    585: {},
    586: {},
    587: {},
    588: { T: -1 },
    589: {},
    590: { T: 1 },
    591: { T: -1 },
    592: { T: 1 },
    593: { T: -1 },
    594: { T: 1 },
    595: { T: -1 },
    596: {},
    597: { T: 1 },
    598: { T: -1 },
    599: { T: 1 },
    600: { T: -1 },
    601: { T: 1 },
    602: { T: -1 },
    603: { T: 1 },
    604: { T: -1 },
    605: { T: 1 },
    606: { T: -1 },
    607: {},
    608: { T: 1 },
    609: { T: -1 },
    610: {},
    611: { T: 1 },
    612: { T: -1 },
    613: { T: 1 },
    614: { T: -1 },
    615: { T: 1 },
    616: { T: -1 },
    617: { T: 1 },
    618: { T: -1 },
    619: { T: 1 },
    620: { T: -1 },
    625: {},
    626: { T: 1 },
    627: { T: -1 },
    628: { T: 1 },
    629: { T: -1 },
    630: { T: 1 },
    631: { T: -1 },
    632: { f: om },
    633: { T: 1 },
    634: { T: -1 },
    635: { T: 1, f: sm },
    636: { T: -1 },
    637: { f: yl },
    638: { T: 1 },
    639: {},
    640: { T: -1 },
    641: { T: 1 },
    642: { T: -1 },
    643: { T: 1 },
    644: {},
    645: { T: -1 },
    646: { T: 1 },
    648: { T: 1 },
    649: {},
    650: { T: -1 },
    651: { f: H2 },
    652: {},
    653: { T: 1 },
    654: { T: -1 },
    655: { T: 1 },
    656: { T: -1 },
    657: { T: 1 },
    658: { T: -1 },
    659: {},
    660: { T: 1 },
    661: {},
    662: { T: -1 },
    663: {},
    664: { T: 1 },
    665: {},
    666: { T: -1 },
    667: {},
    668: {},
    669: {},
    671: { T: 1 },
    672: { T: -1 },
    673: { T: 1 },
    674: { T: -1 },
    675: {},
    676: {},
    677: {},
    678: {},
    679: {},
    680: {},
    681: {},
    1024: {},
    1025: {},
    1026: { T: 1 },
    1027: { T: -1 },
    1028: { T: 1 },
    1029: { T: -1 },
    1030: {},
    1031: { T: 1 },
    1032: { T: -1 },
    1033: { T: 1 },
    1034: { T: -1 },
    1035: {},
    1036: {},
    1037: {},
    1038: { T: 1 },
    1039: { T: -1 },
    1040: {},
    1041: { T: 1 },
    1042: { T: -1 },
    1043: {},
    1044: {},
    1045: {},
    1046: { T: 1 },
    1047: { T: -1 },
    1048: { T: 1 },
    1049: { T: -1 },
    1050: {},
    1051: { T: 1 },
    1052: { T: 1 },
    1053: { f: O2 },
    1054: { T: 1 },
    1055: {},
    1056: { T: 1 },
    1057: { T: -1 },
    1058: { T: 1 },
    1059: { T: -1 },
    1061: {},
    1062: { T: 1 },
    1063: { T: -1 },
    1064: { T: 1 },
    1065: { T: -1 },
    1066: { T: 1 },
    1067: { T: -1 },
    1068: { T: 1 },
    1069: { T: -1 },
    1070: { T: 1 },
    1071: { T: -1 },
    1072: { T: 1 },
    1073: { T: -1 },
    1075: { T: 1 },
    1076: { T: -1 },
    1077: { T: 1 },
    1078: { T: -1 },
    1079: { T: 1 },
    1080: { T: -1 },
    1081: { T: 1 },
    1082: { T: -1 },
    1083: { T: 1 },
    1084: { T: -1 },
    1085: {},
    1086: { T: 1 },
    1087: { T: -1 },
    1088: { T: 1 },
    1089: { T: -1 },
    1090: { T: 1 },
    1091: { T: -1 },
    1092: { T: 1 },
    1093: { T: -1 },
    1094: { T: 1 },
    1095: { T: -1 },
    1096: {},
    1097: { T: 1 },
    1098: {},
    1099: { T: -1 },
    1100: { T: 1 },
    1101: { T: -1 },
    1102: {},
    1103: {},
    1104: {},
    1105: {},
    1111: {},
    1112: {},
    1113: { T: 1 },
    1114: { T: -1 },
    1115: { T: 1 },
    1116: { T: -1 },
    1117: {},
    1118: { T: 1 },
    1119: { T: -1 },
    1120: { T: 1 },
    1121: { T: -1 },
    1122: { T: 1 },
    1123: { T: -1 },
    1124: { T: 1 },
    1125: { T: -1 },
    1126: {},
    1128: { T: 1 },
    1129: { T: -1 },
    1130: {},
    1131: { T: 1 },
    1132: { T: -1 },
    1133: { T: 1 },
    1134: { T: -1 },
    1135: { T: 1 },
    1136: { T: -1 },
    1137: { T: 1 },
    1138: { T: -1 },
    1139: { T: 1 },
    1140: { T: -1 },
    1141: {},
    1142: { T: 1 },
    1143: { T: -1 },
    1144: { T: 1 },
    1145: { T: -1 },
    1146: {},
    1147: { T: 1 },
    1148: { T: -1 },
    1149: { T: 1 },
    1150: { T: -1 },
    1152: { T: 1 },
    1153: { T: -1 },
    1154: { T: -1 },
    1155: { T: -1 },
    1156: { T: -1 },
    1157: { T: 1 },
    1158: { T: -1 },
    1159: { T: 1 },
    1160: { T: -1 },
    1161: { T: 1 },
    1162: { T: -1 },
    1163: { T: 1 },
    1164: { T: -1 },
    1165: { T: 1 },
    1166: { T: -1 },
    1167: { T: 1 },
    1168: { T: -1 },
    1169: { T: 1 },
    1170: { T: -1 },
    1171: {},
    1172: { T: 1 },
    1173: { T: -1 },
    1177: {},
    1178: { T: 1 },
    1180: {},
    1181: {},
    1182: {},
    2048: { T: 1 },
    2049: { T: -1 },
    2050: {},
    2051: { T: 1 },
    2052: { T: -1 },
    2053: {},
    2054: {},
    2055: { T: 1 },
    2056: { T: -1 },
    2057: { T: 1 },
    2058: { T: -1 },
    2060: {},
    2067: {},
    2068: { T: 1 },
    2069: { T: -1 },
    2070: {},
    2071: {},
    2072: { T: 1 },
    2073: { T: -1 },
    2075: {},
    2076: {},
    2077: { T: 1 },
    2078: { T: -1 },
    2079: {},
    2080: { T: 1 },
    2081: { T: -1 },
    2082: {},
    2083: { T: 1 },
    2084: { T: -1 },
    2085: { T: 1 },
    2086: { T: -1 },
    2087: { T: 1 },
    2088: { T: -1 },
    2089: { T: 1 },
    2090: { T: -1 },
    2091: {},
    2092: {},
    2093: { T: 1 },
    2094: { T: -1 },
    2095: {},
    2096: { T: 1 },
    2097: { T: -1 },
    2098: { T: 1 },
    2099: { T: -1 },
    2100: { T: 1 },
    2101: { T: -1 },
    2102: {},
    2103: { T: 1 },
    2104: { T: -1 },
    2105: {},
    2106: { T: 1 },
    2107: { T: -1 },
    2108: {},
    2109: { T: 1 },
    2110: { T: -1 },
    2111: { T: 1 },
    2112: { T: -1 },
    2113: { T: 1 },
    2114: { T: -1 },
    2115: {},
    2116: {},
    2117: {},
    2118: { T: 1 },
    2119: { T: -1 },
    2120: {},
    2121: { T: 1 },
    2122: { T: -1 },
    2123: { T: 1 },
    2124: { T: -1 },
    2125: {},
    2126: { T: 1 },
    2127: { T: -1 },
    2128: {},
    2129: { T: 1 },
    2130: { T: -1 },
    2131: { T: 1 },
    2132: { T: -1 },
    2133: { T: 1 },
    2134: {},
    2135: {},
    2136: {},
    2137: { T: 1 },
    2138: { T: -1 },
    2139: { T: 1 },
    2140: { T: -1 },
    2141: {},
    3072: {},
    3073: {},
    4096: { T: 1 },
    4097: { T: -1 },
    5002: { T: 1 },
    5003: { T: -1 },
    5081: { T: 1 },
    5082: { T: -1 },
    5083: {},
    5084: { T: 1 },
    5085: { T: -1 },
    5086: { T: 1 },
    5087: { T: -1 },
    5088: {},
    5089: {},
    5090: {},
    5092: { T: 1 },
    5093: { T: -1 },
    5094: {},
    5095: { T: 1 },
    5096: { T: -1 },
    5097: {},
    5099: {},
    65535: { n: "" },
  },
  hn = {
    6: { f: en },
    10: { f: Qt },
    12: { f: $e },
    13: { f: $e },
    14: { f: Ge },
    15: { f: Ge },
    16: { f: pt },
    17: { f: Ge },
    18: { f: Ge },
    19: { f: $e },
    20: { f: zs },
    21: { f: zs },
    23: { f: bi },
    24: { f: $s },
    25: { f: Ge },
    26: {},
    27: {},
    28: { f: ad },
    29: {},
    34: { f: Ge },
    35: { f: Xs },
    38: { f: pt },
    39: { f: pt },
    40: { f: pt },
    41: { f: pt },
    42: { f: Ge },
    43: { f: Ge },
    47: { f: of },
    49: { f: Lp },
    51: { f: $e },
    60: {},
    61: { f: Rp },
    64: { f: Ge },
    65: { f: Op },
    66: { f: $e },
    77: {},
    80: {},
    81: {},
    82: {},
    85: { f: $e },
    89: {},
    90: {},
    91: {},
    92: { f: bp },
    93: { f: nd },
    94: {},
    95: { f: Ge },
    96: {},
    97: {},
    99: { f: Ge },
    125: { f: Ci },
    128: { f: $p },
    129: { f: Cp },
    130: { f: $e },
    131: { f: Ge },
    132: { f: Ge },
    133: { f: yp },
    134: {},
    140: { f: pd },
    141: { f: $e },
    144: {},
    146: { f: fd },
    151: {},
    152: {},
    153: {},
    154: {},
    155: {},
    156: { f: $e },
    157: {},
    158: {},
    160: { f: vd },
    161: { f: ud },
    174: {},
    175: {},
    176: {},
    177: {},
    178: {},
    180: {},
    181: {},
    182: {},
    184: {},
    185: {},
    189: { f: Vp },
    190: { f: Wp },
    193: { f: Qt },
    197: {},
    198: {},
    199: {},
    200: {},
    201: {},
    202: { f: Ge },
    203: {},
    204: {},
    205: {},
    206: {},
    207: {},
    208: {},
    209: {},
    210: {},
    211: {},
    213: {},
    215: {},
    216: {},
    217: {},
    218: { f: $e },
    220: {},
    221: { f: Ge },
    222: {},
    224: { f: Xp },
    225: { f: Ap },
    226: { f: Qt },
    227: {},
    229: { f: rd },
    233: {},
    235: {},
    236: {},
    237: {},
    239: {},
    240: {},
    241: {},
    242: {},
    244: {},
    245: {},
    246: {},
    247: {},
    248: {},
    249: {},
    251: {},
    252: { f: Fp },
    253: { f: Mp },
    255: { f: Dp },
    256: {},
    259: {},
    290: {},
    311: {},
    312: {},
    315: {},
    317: { f: Si },
    318: {},
    319: {},
    320: {},
    330: {},
    331: {},
    333: {},
    334: {},
    335: {},
    336: {},
    337: {},
    338: {},
    339: {},
    340: {},
    351: {},
    352: { f: Ge },
    353: { f: Qt },
    401: {},
    402: {},
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    425: {},
    426: {},
    427: {},
    428: {},
    429: {},
    430: { f: Yp },
    431: { f: Ge },
    432: {},
    433: {},
    434: {},
    437: {},
    438: { f: id },
    439: { f: Ge },
    440: { f: cd },
    441: {},
    442: { f: fr },
    443: {},
    444: { f: $e },
    445: {},
    446: {},
    448: { f: Qt },
    449: { f: Ip, r: 2 },
    450: { f: Qt },
    512: { f: Vs },
    513: { f: xd },
    515: { f: Kp },
    516: { f: Up },
    517: { f: Ws },
    519: { f: gd },
    520: { f: Np },
    523: {},
    545: { f: Ks },
    549: { f: Gs },
    566: {},
    574: { f: Pp },
    638: { f: Gp },
    659: {},
    1048: {},
    1054: { f: jp },
    1084: {},
    1212: { f: Qp },
    2048: { f: ld },
    2049: {},
    2050: {},
    2051: {},
    2052: {},
    2053: {},
    2054: {},
    2055: {},
    2056: {},
    2057: { f: Er },
    2058: {},
    2059: {},
    2060: {},
    2061: {},
    2062: {},
    2063: {},
    2064: {},
    2066: {},
    2067: {},
    2128: {},
    2129: {},
    2130: {},
    2131: {},
    2132: {},
    2133: {},
    2134: {},
    2135: {},
    2136: {},
    2137: {},
    2138: {},
    2146: {},
    2147: { r: 12 },
    2148: {},
    2149: {},
    2150: {},
    2151: { f: Qt },
    2152: {},
    2154: {},
    2155: {},
    2156: {},
    2161: {},
    2162: {},
    2164: {},
    2165: {},
    2166: {},
    2167: {},
    2168: {},
    2169: {},
    2170: {},
    2171: {},
    2172: { f: md, r: 12 },
    2173: { f: Wf, r: 12 },
    2174: {},
    2175: {},
    2180: {},
    2181: {},
    2182: {},
    2183: {},
    2184: {},
    2185: {},
    2186: {},
    2187: {},
    2188: { f: Ge, r: 12 },
    2189: {},
    2190: { r: 12 },
    2191: {},
    2192: {},
    2194: {},
    2195: {},
    2196: { f: Zp, r: 12 },
    2197: {},
    2198: { f: Mf, r: 12 },
    2199: {},
    2200: {},
    2201: {},
    2202: { f: ed, r: 12 },
    2203: { f: Qt },
    2204: {},
    2205: {},
    2206: {},
    2207: {},
    2211: { f: Bp },
    2212: {},
    2213: {},
    2214: {},
    2215: {},
    4097: {},
    4098: {},
    4099: {},
    4102: {},
    4103: {},
    4105: {},
    4106: {},
    4107: {},
    4108: {},
    4109: {},
    4116: {},
    4117: {},
    4118: {},
    4119: {},
    4120: {},
    4121: {},
    4122: {},
    4123: {},
    4124: {},
    4125: {},
    4126: {},
    4127: {},
    4128: {},
    4129: {},
    4130: {},
    4132: {},
    4133: {},
    4134: { f: $e },
    4135: {},
    4146: {},
    4147: {},
    4148: {},
    4149: {},
    4154: {},
    4156: {},
    4157: {},
    4158: {},
    4159: {},
    4160: {},
    4161: {},
    4163: {},
    4164: { f: hd },
    4165: {},
    4166: {},
    4168: {},
    4170: {},
    4171: {},
    4174: {},
    4175: {},
    4176: {},
    4177: {},
    4187: {},
    4188: { f: dd },
    4189: {},
    4191: {},
    4192: {},
    4193: {},
    4194: {},
    4195: {},
    4196: {},
    4197: {},
    4198: {},
    4199: {},
    4200: {},
    0: { f: Vs },
    1: {},
    2: { f: Td },
    3: { f: wd },
    4: { f: Sd },
    5: { f: Ws },
    7: { f: Ed },
    8: {},
    9: { f: Er },
    11: {},
    22: { f: $e },
    30: { f: Hp },
    31: {},
    32: {},
    33: { f: Ks },
    36: {},
    37: { f: Gs },
    50: { f: kd },
    62: {},
    52: {},
    67: {},
    68: { f: $e },
    69: {},
    86: {},
    126: {},
    127: { f: _d },
    135: {},
    136: {},
    137: {},
    145: {},
    148: {},
    149: {},
    150: {},
    169: {},
    171: {},
    188: {},
    191: {},
    192: {},
    194: {},
    195: {},
    214: { f: Ad },
    223: {},
    234: {},
    354: {},
    421: {},
    518: { f: en },
    521: { f: Er },
    536: { f: $s },
    547: { f: Xs },
    561: {},
    579: {},
    1030: { f: en },
    1033: { f: Er },
    1091: {},
    2157: {},
    2163: {},
    2177: {},
    2240: {},
    2241: {},
    2242: {},
    2243: {},
    2244: {},
    2245: {},
    2246: {},
    2247: {},
    2248: {},
    2249: {},
    2250: {},
    2251: {},
    2262: { r: 12 },
    29282: {},
  };
function It(e, a, t, r) {
  var n = a;
  if (!isNaN(n)) {
    var s = (t || []).length || 0,
      o = e.next(4);
    (o.write_shift(2, n), o.write_shift(2, s), s > 0 && ii(t) && e.push(t));
  }
}
function so(e, a) {
  var t = a || {},
    r = t.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var n = e.match(/<table/i);
  if (!n) throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i),
    o = n.index,
    i = (s && s.index) || e.length,
    l = K0(e.slice(o, i), /(:?<tr[^>]*>)/i, "<tr>"),
    c = -1,
    p = 0,
    m = 0,
    f = 0,
    h = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } },
    x = [];
  for (o = 0; o < l.length; ++o) {
    var d = l[o].trim(),
      u = d.slice(0, 3).toLowerCase();
    if (u == "<tr") {
      if ((++c, t.sheetRows && t.sheetRows <= c)) {
        --c;
        break;
      }
      p = 0;
      continue;
    }
    if (!(u != "<td" && u != "<th")) {
      var A = d.split(/<\/t[dh]>/i);
      for (i = 0; i < A.length; ++i) {
        var B = A[i].trim();
        if (B.match(/<t[dh]/i)) {
          for (
            var w = B, M = 0;
            w.charAt(0) == "<" && (M = w.indexOf(">")) > -1;
          )
            w = w.slice(M + 1);
          for (var H = 0; H < x.length; ++H) {
            var U = x[H];
            U.s.c == p &&
              U.s.r < c &&
              c <= U.e.r &&
              ((p = U.e.c + 1), (H = -1));
          }
          var k = ge(B.slice(0, B.indexOf(">")));
          ((f = k.colspan ? +k.colspan : 1),
            ((m = +k.rowspan) > 1 || f > 1) &&
              x.push({
                s: { r: c, c: p },
                e: { r: c + (m || 1) - 1, c: p + f - 1 },
              }));
          var S = k.t || k["data-t"] || "";
          if (!w.length) {
            p += f;
            continue;
          }
          if (
            ((w = Ko(w)),
            h.s.r > c && (h.s.r = c),
            h.e.r < c && (h.e.r = c),
            h.s.c > p && (h.s.c = p),
            h.e.c < p && (h.e.c = p),
            !w.length)
          ) {
            p += f;
            continue;
          }
          var _ = { t: "s", v: w };
          (t.raw ||
            !w.trim().length ||
            S == "s" ||
            (w === "TRUE"
              ? (_ = { t: "b", v: !0 })
              : w === "FALSE"
                ? (_ = { t: "b", v: !1 })
                : isNaN(Ut(w))
                  ? isNaN(Na(w).getDate()) ||
                    ((_ = { t: "d", v: et(w) }),
                    t.cellDates || (_ = { t: "n", v: _t(_.v) }),
                    (_.z = t.dateNF || we[14]))
                  : (_ = { t: "n", v: Ut(w) })),
            t.dense
              ? (r[c] || (r[c] = []), (r[c][p] = _))
              : (r[_e({ r: c, c: p })] = _),
            (p += f));
        }
      }
    }
  }
  return ((r["!ref"] = Ce(h)), x.length && (r["!merges"] = x), r);
}
function Ah(e, a, t, r) {
  for (var n = e["!merges"] || [], s = [], o = a.s.c; o <= a.e.c; ++o) {
    for (var i = 0, l = 0, c = 0; c < n.length; ++c)
      if (!(n[c].s.r > t || n[c].s.c > o) && !(n[c].e.r < t || n[c].e.c < o)) {
        if (n[c].s.r < t || n[c].s.c < o) {
          i = -1;
          break;
        }
        ((i = n[c].e.r - n[c].s.r + 1), (l = n[c].e.c - n[c].s.c + 1));
        break;
      }
    if (!(i < 0)) {
      var p = _e({ r: t, c: o }),
        m = r.dense ? (e[t] || [])[o] : e[p],
        f = (m && m.v != null && (m.h || Fn(m.w || (Jt(m), m.w) || ""))) || "",
        h = {};
      (i > 1 && (h.rowspan = i),
        l > 1 && (h.colspan = l),
        r.editable
          ? (f = '<span contenteditable="true">' + f + "</span>")
          : m &&
            ((h["data-t"] = (m && m.t) || "z"),
            m.v != null && (h["data-v"] = m.v),
            m.z != null && (h["data-z"] = m.z),
            m.l &&
              (m.l.Target || "#").charAt(0) != "#" &&
              (f = '<a href="' + m.l.Target + '">' + f + "</a>")),
        (h.id = (r.id || "sjs") + "-" + p),
        s.push(pl("td", f, h)));
    }
  }
  var x = "<tr>";
  return x + s.join("") + "</tr>";
}
var bh =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  Ch = "</body></html>";
function yh(e, a) {
  var t = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!t || t.length == 0)
    throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) return ia(so(t[0], a), a);
  var r = $n();
  return (
    t.forEach(function (n, s) {
      Kn(r, so(n, a), "Sheet" + (s + 1));
    }),
    r
  );
}
function Fh(e, a, t) {
  var r = [];
  return r.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function Dh(e, a) {
  var t = a || {},
    r = t.header != null ? t.header : bh,
    n = t.footer != null ? t.footer : Ch,
    s = [r],
    o = Oa(e["!ref"]);
  ((t.dense = Array.isArray(e)), s.push(Fh(e, o, t)));
  for (var i = o.s.r; i <= o.e.r; ++i) s.push(Ah(e, o, i, t));
  return (s.push("</table>" + n), s.join(""));
}
function Qi(e, a, t) {
  var r = t || {},
    n = 0,
    s = 0;
  if (r.origin != null)
    if (typeof r.origin == "number") n = r.origin;
    else {
      var o = typeof r.origin == "string" ? vt(r.origin) : r.origin;
      ((n = o.r), (s = o.c));
    }
  var i = a.getElementsByTagName("tr"),
    l = Math.min(r.sheetRows || 1e7, i.length),
    c = { s: { r: 0, c: 0 }, e: { r: n, c: s } };
  if (e["!ref"]) {
    var p = Oa(e["!ref"]);
    ((c.s.r = Math.min(c.s.r, p.s.r)),
      (c.s.c = Math.min(c.s.c, p.s.c)),
      (c.e.r = Math.max(c.e.r, p.e.r)),
      (c.e.c = Math.max(c.e.c, p.e.c)),
      n == -1 && (c.e.r = n = p.e.r + 1));
  }
  var m = [],
    f = 0,
    h = e["!rows"] || (e["!rows"] = []),
    x = 0,
    d = 0,
    u = 0,
    A = 0,
    B = 0,
    w = 0;
  for (e["!cols"] || (e["!cols"] = []); x < i.length && d < l; ++x) {
    var M = i[x];
    if (oo(M)) {
      if (r.display) continue;
      h[d] = { hidden: !0 };
    }
    var H = M.children;
    for (u = A = 0; u < H.length; ++u) {
      var U = H[u];
      if (!(r.display && oo(U))) {
        var k = U.hasAttribute("data-v")
            ? U.getAttribute("data-v")
            : U.hasAttribute("v")
              ? U.getAttribute("v")
              : Ko(U.innerHTML),
          S = U.getAttribute("data-z") || U.getAttribute("z");
        for (f = 0; f < m.length; ++f) {
          var _ = m[f];
          _.s.c == A + s &&
            _.s.r < d + n &&
            d + n <= _.e.r &&
            ((A = _.e.c + 1 - s), (f = -1));
        }
        ((w = +U.getAttribute("colspan") || 1),
          ((B = +U.getAttribute("rowspan") || 1) > 1 || w > 1) &&
            m.push({
              s: { r: d + n, c: A + s },
              e: { r: d + n + (B || 1) - 1, c: A + s + (w || 1) - 1 },
            }));
        var I = { t: "s", v: k },
          R = U.getAttribute("data-t") || U.getAttribute("t") || "";
        (k != null &&
          (k.length == 0
            ? (I.t = R || "z")
            : r.raw ||
              k.trim().length == 0 ||
              R == "s" ||
              (k === "TRUE"
                ? (I = { t: "b", v: !0 })
                : k === "FALSE"
                  ? (I = { t: "b", v: !1 })
                  : isNaN(Ut(k))
                    ? isNaN(Na(k).getDate()) ||
                      ((I = { t: "d", v: et(k) }),
                      r.cellDates || (I = { t: "n", v: _t(I.v) }),
                      (I.z = r.dateNF || we[14]))
                    : (I = { t: "n", v: Ut(k) }))),
          I.z === void 0 && S != null && (I.z = S));
        var N = "",
          X = U.getElementsByTagName("A");
        if (X && X.length)
          for (
            var ae = 0;
            ae < X.length &&
            !(
              X[ae].hasAttribute("href") &&
              ((N = X[ae].getAttribute("href")), N.charAt(0) != "#")
            );
            ++ae
          );
        (N && N.charAt(0) != "#" && (I.l = { Target: N }),
          r.dense
            ? (e[d + n] || (e[d + n] = []), (e[d + n][A + s] = I))
            : (e[_e({ c: A + s, r: d + n })] = I),
          c.e.c < A + s && (c.e.c = A + s),
          (A += w));
      }
    }
    ++d;
  }
  return (
    m.length && (e["!merges"] = (e["!merges"] || []).concat(m)),
    (c.e.r = Math.max(c.e.r, d - 1 + n)),
    (e["!ref"] = Ce(c)),
    d >= l && (e["!fullref"] = Ce(((c.e.r = i.length - x + d - 1 + n), c))),
    e
  );
}
function ec(e, a) {
  var t = a || {},
    r = t.dense ? [] : {};
  return Qi(r, e, a);
}
function Nh(e, a) {
  return ia(ec(e, a), a);
}
function oo(e) {
  var a = "",
    t = Bh(e);
  return (
    t && (a = t(e).getPropertyValue("display")),
    a || (a = e.style && e.style.display),
    a === "none"
  );
}
function Bh(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == "function"
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == "function"
      ? getComputedStyle
      : null;
}
function Ih(e) {
  var a = e
      .replace(/[\t\r\n]/g, " ")
      .trim()
      .replace(/ +/g, " ")
      .replace(/<text:s\/>/g, " ")
      .replace(/<text:s text:c="(\d+)"\/>/g, function (r, n) {
        return Array(parseInt(n, 10) + 1).join(" ");
      })
      .replace(/<text:tab[^>]*\/>/g, "	")
      .replace(
        /<text:line-break\/>/g,
        `
`,
      ),
    t = ye(a.replace(/<[^>]*>/g, ""));
  return [t];
}
var io = {
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  quarter: ["\\Qm", 'm\\"th quarter"'],
};
function tc(e, a) {
  var t = a || {},
    r = Dn(e),
    n = [],
    s,
    o,
    i = { name: "" },
    l = "",
    c = 0,
    p,
    m,
    f = {},
    h = [],
    x = t.dense ? [] : {},
    d,
    u,
    A = { value: "" },
    B = "",
    w = 0,
    M = [],
    H = -1,
    U = -1,
    k = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } },
    S = 0,
    _ = {},
    I = [],
    R = {},
    N = 0,
    X = 0,
    ae = [],
    ee = 1,
    ie = 1,
    Z = [],
    xe = { Names: [] },
    j = {},
    fe = ["", ""],
    ne = [],
    b = {},
    O = "",
    L = 0,
    P = !1,
    K = !1,
    re = 0;
  for (
    nr.lastIndex = 0,
      r = r
        .replace(/<!--([\s\S]*?)-->/gm, "")
        .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    (d = nr.exec(r));
  )
    switch ((d[3] = d[3].replace(/_.*$/, ""))) {
      case "table":
      case "工作表":
        d[1] === "/"
          ? (k.e.c >= k.s.c && k.e.r >= k.s.r
              ? (x["!ref"] = Ce(k))
              : (x["!ref"] = "A1:A1"),
            t.sheetRows > 0 &&
              t.sheetRows <= k.e.r &&
              ((x["!fullref"] = x["!ref"]),
              (k.e.r = t.sheetRows - 1),
              (x["!ref"] = Ce(k))),
            I.length && (x["!merges"] = I),
            ae.length && (x["!rows"] = ae),
            (p.name = p.名称 || p.name),
            typeof JSON < "u" && JSON.stringify(p),
            h.push(p.name),
            (f[p.name] = x),
            (K = !1))
          : d[0].charAt(d[0].length - 2) !== "/" &&
            ((p = ge(d[0], !1)),
            (H = U = -1),
            (k.s.r = k.s.c = 1e7),
            (k.e.r = k.e.c = 0),
            (x = t.dense ? [] : {}),
            (I = []),
            (ae = []),
            (K = !0));
        break;
      case "table-row-group":
        d[1] === "/" ? --S : ++S;
        break;
      case "table-row":
      case "行":
        if (d[1] === "/") {
          ((H += ee), (ee = 1));
          break;
        }
        if (
          ((m = ge(d[0], !1)),
          m.行号 ? (H = m.行号 - 1) : H == -1 && (H = 0),
          (ee = +m["number-rows-repeated"] || 1),
          ee < 10)
        )
          for (re = 0; re < ee; ++re) S > 0 && (ae[H + re] = { level: S });
        U = -1;
        break;
      case "covered-table-cell":
        (d[1] !== "/" && ++U,
          t.sheetStubs &&
            (t.dense
              ? (x[H] || (x[H] = []), (x[H][U] = { t: "z" }))
              : (x[_e({ r: H, c: U })] = { t: "z" })),
          (B = ""),
          (M = []));
        break;
      case "table-cell":
      case "数据":
        if (d[0].charAt(d[0].length - 2) === "/")
          (++U,
            (A = ge(d[0], !1)),
            (ie = parseInt(A["number-columns-repeated"] || "1", 10)),
            (u = { t: "z", v: null }),
            A.formula && t.cellFormula != !1 && (u.f = to(ye(A.formula))),
            (A.数据类型 || A["value-type"]) == "string" &&
              ((u.t = "s"),
              (u.v = ye(A["string-value"] || "")),
              t.dense
                ? (x[H] || (x[H] = []), (x[H][U] = u))
                : (x[_e({ r: H, c: U })] = u)),
            (U += ie - 1));
        else if (d[1] !== "/") {
          (++U, (B = ""), (w = 0), (M = []), (ie = 1));
          var Q = ee ? H + ee - 1 : H;
          if (
            (U > k.e.c && (k.e.c = U),
            U < k.s.c && (k.s.c = U),
            H < k.s.r && (k.s.r = H),
            Q > k.e.r && (k.e.r = Q),
            (A = ge(d[0], !1)),
            (ne = []),
            (b = {}),
            (u = { t: A.数据类型 || A["value-type"], v: null }),
            t.cellFormula)
          )
            if (
              (A.formula && (A.formula = ye(A.formula)),
              A["number-matrix-columns-spanned"] &&
                A["number-matrix-rows-spanned"] &&
                ((N = parseInt(A["number-matrix-rows-spanned"], 10) || 0),
                (X = parseInt(A["number-matrix-columns-spanned"], 10) || 0),
                (R = { s: { r: H, c: U }, e: { r: H + N - 1, c: U + X - 1 } }),
                (u.F = Ce(R)),
                Z.push([R, u.F])),
              A.formula)
            )
              u.f = to(A.formula);
            else
              for (re = 0; re < Z.length; ++re)
                H >= Z[re][0].s.r &&
                  H <= Z[re][0].e.r &&
                  U >= Z[re][0].s.c &&
                  U <= Z[re][0].e.c &&
                  (u.F = Z[re][1]);
          switch (
            ((A["number-columns-spanned"] || A["number-rows-spanned"]) &&
              ((N = parseInt(A["number-rows-spanned"], 10) || 0),
              (X = parseInt(A["number-columns-spanned"], 10) || 0),
              (R = { s: { r: H, c: U }, e: { r: H + N - 1, c: U + X - 1 } }),
              I.push(R)),
            A["number-columns-repeated"] &&
              (ie = parseInt(A["number-columns-repeated"], 10)),
            u.t)
          ) {
            case "boolean":
              ((u.t = "b"), (u.v = Oe(A["boolean-value"])));
              break;
            case "float":
              ((u.t = "n"), (u.v = parseFloat(A.value)));
              break;
            case "percentage":
              ((u.t = "n"), (u.v = parseFloat(A.value)));
              break;
            case "currency":
              ((u.t = "n"), (u.v = parseFloat(A.value)));
              break;
            case "date":
              ((u.t = "d"),
                (u.v = et(A["date-value"])),
                t.cellDates || ((u.t = "n"), (u.v = _t(u.v))),
                (u.z = "m/d/yy"));
              break;
            case "time":
              ((u.t = "n"),
                (u.v = z0(A["time-value"]) / 86400),
                t.cellDates && ((u.t = "d"), (u.v = Vr(u.v))),
                (u.z = "HH:MM:SS"));
              break;
            case "number":
              ((u.t = "n"), (u.v = parseFloat(A.数据数值)));
              break;
            default:
              if (u.t === "string" || u.t === "text" || !u.t)
                ((u.t = "s"),
                  A["string-value"] != null &&
                    ((B = ye(A["string-value"])), (M = [])));
              else throw new Error("Unsupported value type " + u.t);
          }
        } else {
          if (
            ((P = !1),
            u.t === "s" &&
              ((u.v = B || ""), M.length && (u.R = M), (P = w == 0)),
            j.Target && (u.l = j),
            ne.length > 0 && ((u.c = ne), (ne = [])),
            B && t.cellText !== !1 && (u.w = B),
            P && ((u.t = "z"), delete u.v),
            (!P || t.sheetStubs) && !(t.sheetRows && t.sheetRows <= H))
          )
            for (var J = 0; J < ee; ++J) {
              if (
                ((ie = parseInt(A["number-columns-repeated"] || "1", 10)),
                t.dense)
              )
                for (
                  x[H + J] || (x[H + J] = []), x[H + J][U] = J == 0 ? u : at(u);
                  --ie > 0;
                )
                  x[H + J][U + ie] = at(u);
              else
                for (x[_e({ r: H + J, c: U })] = u; --ie > 0; )
                  x[_e({ r: H + J, c: U + ie })] = at(u);
              k.e.c <= U && (k.e.c = U);
            }
          ((ie = parseInt(A["number-columns-repeated"] || "1", 10)),
            (U += ie - 1),
            (ie = 0),
            (u = {}),
            (B = ""),
            (M = []));
        }
        j = {};
        break;
      case "document":
      case "document-content":
      case "电子表格文档":
      case "spreadsheet":
      case "主体":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (d[1] === "/") {
          if ((s = n.pop())[0] !== d[3]) throw "Bad state: " + s;
        } else d[0].charAt(d[0].length - 2) !== "/" && n.push([d[3], !0]);
        break;
      case "annotation":
        if (d[1] === "/") {
          if ((s = n.pop())[0] !== d[3]) throw "Bad state: " + s;
          ((b.t = B), M.length && (b.R = M), (b.a = O), ne.push(b));
        } else d[0].charAt(d[0].length - 2) !== "/" && n.push([d[3], !1]);
        ((O = ""), (L = 0), (B = ""), (w = 0), (M = []));
        break;
      case "creator":
        d[1] === "/" ? (O = r.slice(L, d.index)) : (L = d.index + d[0].length);
        break;
      case "meta":
      case "元数据":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (d[1] === "/") {
          if ((s = n.pop())[0] !== d[3]) throw "Bad state: " + s;
        } else d[0].charAt(d[0].length - 2) !== "/" && n.push([d[3], !1]);
        ((B = ""), (w = 0), (M = []));
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (d[1] === "/") {
          if (((_[i.name] = l), (s = n.pop())[0] !== d[3]))
            throw "Bad state: " + s;
        } else
          d[0].charAt(d[0].length - 2) !== "/" &&
            ((l = ""), (i = ge(d[0], !1)), n.push([d[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            ((o = ge(d[0], !1)), (l += io[d[3]][o.style === "long" ? 1 : 0]));
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            ((o = ge(d[0], !1)), (l += io[d[3]][o.style === "long" ? 1 : 0]));
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (d[0].slice(-2) === "/>") break;
        if (d[1] === "/")
          switch (n[n.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              l += r.slice(c, d.index);
              break;
          }
        else c = d.index + d[0].length;
        break;
      case "named-range":
        ((o = ge(d[0], !1)), (fe = tn(o["cell-range-address"])));
        var q = { Name: o.name, Ref: fe[0] + "!" + fe[1] };
        (K && (q.Sheet = h.length), xe.Names.push(q));
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "电子表格":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "文本串":
        if (["master-styles"].indexOf(n[n.length - 1][0]) > -1) break;
        if (d[1] === "/" && (!A || !A["string-value"])) {
          var ce = Ih(r.slice(w, d.index));
          B =
            (B.length > 0
              ? B +
                `
`
              : "") + ce[0];
        } else (ge(d[0], !1), (w = d.index + d[0].length));
        break;
      case "s":
        break;
      case "database-range":
        if (d[1] === "/") break;
        try {
          ((fe = tn(ge(d[0])["target-range-address"])),
            (f[fe[0]]["!autofilter"] = { ref: fe[1] }));
        } catch {}
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "标题":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (d[1] !== "/") {
          if (((j = ge(d[0], !1)), !j.href)) break;
          ((j.Target = ye(j.href)),
            delete j.href,
            j.Target.charAt(0) == "#" && j.Target.indexOf(".") > -1
              ? ((fe = tn(j.Target.slice(1))),
                (j.Target = "#" + fe[0] + "!" + fe[1]))
              : j.Target.match(/^\.\.[\\\/]/) &&
                (j.Target = j.Target.slice(3)));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (d[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "表:":
          case "字:":
            break;
          default:
            if (t.WTF) throw new Error(d);
        }
    }
  var F = { Sheets: f, SheetNames: h, Workbook: xe };
  return (t.bookSheets && delete F.Sheets, F);
}
function co(e, a) {
  ((a = a || {}),
    Ft(e, "META-INF/manifest.xml") && Kl(Xe(e, "META-INF/manifest.xml"), a));
  var t = kt(e, "content.xml");
  if (!t) throw new Error("Missing content.xml in ODS / UOF file");
  var r = tc(Ie(t), a);
  return (Ft(e, "meta.xml") && (r.Props = ui(Xe(e, "meta.xml"))), r);
}
function lo(e, a) {
  return tc(e, a);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */ function Vn(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function xn(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Ie(va(e));
}
function vn(e) {
  var a = e.reduce(function (n, s) {
      return n + s.length;
    }, 0),
    t = new Uint8Array(a),
    r = 0;
  return (
    e.forEach(function (n) {
      (t.set(n, r), (r += n.length));
    }),
    t
  );
}
function po(e) {
  return (
    (e -= (e >> 1) & 1431655765),
    (e = (e & 858993459) + ((e >> 2) & 858993459)),
    (((e + (e >> 4)) & 252645135) * 16843009) >>> 24
  );
}
function Rh(e, a) {
  for (
    var t = ((e[a + 15] & 127) << 7) | (e[a + 14] >> 1),
      r = e[a + 14] & 1,
      n = a + 13;
    n >= a;
    --n
  )
    r = r * 256 + e[n];
  return (e[a + 15] & 128 ? -r : r) * Math.pow(10, t - 6176);
}
function cr(e, a) {
  var t = a ? a[0] : 0,
    r = e[t] & 127;
  e: if (
    e[t++] >= 128 &&
    ((r |= (e[t] & 127) << 7),
    e[t++] < 128 ||
      ((r |= (e[t] & 127) << 14), e[t++] < 128) ||
      ((r |= (e[t] & 127) << 21), e[t++] < 128) ||
      ((r += (e[t] & 127) * Math.pow(2, 28)), ++t, e[t++] < 128) ||
      ((r += (e[t] & 127) * Math.pow(2, 35)), ++t, e[t++] < 128) ||
      ((r += (e[t] & 127) * Math.pow(2, 42)), ++t, e[t++] < 128))
  )
    break e;
  return (a && (a[0] = t), r);
}
function Ze(e) {
  var a = 0,
    t = e[a] & 127;
  e: if (e[a++] >= 128) {
    if (
      ((t |= (e[a] & 127) << 7),
      e[a++] < 128 ||
        ((t |= (e[a] & 127) << 14), e[a++] < 128) ||
        ((t |= (e[a] & 127) << 21), e[a++] < 128))
    )
      break e;
    t |= (e[a] & 127) << 28;
  }
  return t;
}
function dt(e) {
  for (var a = [], t = [0]; t[0] < e.length; ) {
    var r = t[0],
      n = cr(e, t),
      s = n & 7;
    n = Math.floor(n / 8);
    var o = 0,
      i;
    if (n == 0) break;
    switch (s) {
      case 0:
        {
          for (var l = t[0]; e[t[0]++] >= 128; );
          i = e.slice(l, t[0]);
        }
        break;
      case 5:
        ((o = 4), (i = e.slice(t[0], t[0] + o)), (t[0] += o));
        break;
      case 1:
        ((o = 8), (i = e.slice(t[0], t[0] + o)), (t[0] += o));
        break;
      case 2:
        ((o = cr(e, t)), (i = e.slice(t[0], t[0] + o)), (t[0] += o));
        break;
      case 3:
      case 4:
      default:
        throw new Error(
          "PB Type "
            .concat(s, " for Field ")
            .concat(n, " at offset ")
            .concat(r),
        );
    }
    var c = { data: i, type: s };
    a[n] == null ? (a[n] = [c]) : a[n].push(c);
  }
  return a;
}
function Wn(e, a) {
  return (
    (e == null
      ? void 0
      : e.map(function (t) {
          return a(t.data);
        })) || []
  );
}
function Ph(e) {
  for (var a, t = [], r = [0]; r[0] < e.length; ) {
    var n = cr(e, r),
      s = dt(e.slice(r[0], r[0] + n));
    r[0] += n;
    var o = { id: Ze(s[1][0].data), messages: [] };
    (s[2].forEach(function (i) {
      var l = dt(i.data),
        c = Ze(l[3][0].data);
      (o.messages.push({ meta: l, data: e.slice(r[0], r[0] + c) }),
        (r[0] += c));
    }),
      (a = s[3]) != null && a[0] && (o.merge = Ze(s[3][0].data) >>> 0 > 0),
      t.push(o));
  }
  return t;
}
function Oh(e, a) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = [0], r = cr(a, t), n = []; t[0] < a.length; ) {
    var s = a[t[0]] & 3;
    if (s == 0) {
      var o = a[t[0]++] >> 2;
      if (o < 60) ++o;
      else {
        var i = o - 59;
        ((o = a[t[0]]),
          i > 1 && (o |= a[t[0] + 1] << 8),
          i > 2 && (o |= a[t[0] + 2] << 16),
          i > 3 && (o |= a[t[0] + 3] << 24),
          (o >>>= 0),
          o++,
          (t[0] += i));
      }
      (n.push(a.slice(t[0], t[0] + o)), (t[0] += o));
      continue;
    } else {
      var l = 0,
        c = 0;
      if (
        (s == 1
          ? ((c = ((a[t[0]] >> 2) & 7) + 4),
            (l = (a[t[0]++] & 224) << 3),
            (l |= a[t[0]++]))
          : ((c = (a[t[0]++] >> 2) + 1),
            s == 2
              ? ((l = a[t[0]] | (a[t[0] + 1] << 8)), (t[0] += 2))
              : ((l =
                  (a[t[0]] |
                    (a[t[0] + 1] << 8) |
                    (a[t[0] + 2] << 16) |
                    (a[t[0] + 3] << 24)) >>>
                  0),
                (t[0] += 4))),
        (n = [vn(n)]),
        l == 0)
      )
        throw new Error("Invalid offset 0");
      if (l > n[0].length) throw new Error("Invalid offset beyond length");
      if (c >= l)
        for (n.push(n[0].slice(-l)), c -= l; c >= n[n.length - 1].length; )
          (n.push(n[n.length - 1]), (c -= n[n.length - 1].length));
      n.push(n[0].slice(-l, -l + c));
    }
  }
  var p = vn(n);
  if (p.length != r)
    throw new Error("Unexpected length: ".concat(p.length, " != ").concat(r));
  return p;
}
function Lh(e) {
  for (var a = [], t = 0; t < e.length; ) {
    var r = e[t++],
      n = e[t] | (e[t + 1] << 8) | (e[t + 2] << 16);
    ((t += 3), a.push(Oh(r, e.slice(t, t + n))), (t += n));
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return vn(a);
}
function Mh(e, a, t, r) {
  var n = Vn(e),
    s = n.getUint32(4, !0),
    o = (r > 1 ? 12 : 8) + po(s & (r > 1 ? 3470 : 398)) * 4,
    i = -1,
    l = -1,
    c = NaN,
    p = new Date(2001, 0, 1);
  (s & 512 && ((i = n.getUint32(o, !0)), (o += 4)),
    (o += po(s & (r > 1 ? 12288 : 4096)) * 4),
    s & 16 && ((l = n.getUint32(o, !0)), (o += 4)),
    s & 32 && ((c = n.getFloat64(o, !0)), (o += 8)),
    s & 64 && (p.setTime(p.getTime() + n.getFloat64(o, !0) * 1e3), (o += 8)));
  var m;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      m = { t: "n", v: c };
      break;
    case 3:
      m = { t: "s", v: a[l] };
      break;
    case 5:
      m = { t: "d", v: p };
      break;
    case 6:
      m = { t: "b", v: c > 0 };
      break;
    case 7:
      m = { t: "n", v: c / 86400 };
      break;
    case 8:
      m = { t: "e", v: 0 };
      break;
    case 9:
      if (i > -1) m = { t: "s", v: t[i] };
      else if (l > -1) m = { t: "s", v: a[l] };
      else if (!isNaN(c)) m = { t: "n", v: c };
      else throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return m;
}
function Uh(e, a, t) {
  var r = Vn(e),
    n = r.getUint32(8, !0),
    s = 12,
    o = -1,
    i = -1,
    l = NaN,
    c = NaN,
    p = new Date(2001, 0, 1);
  (n & 1 && ((l = Rh(e, s)), (s += 16)),
    n & 2 && ((c = r.getFloat64(s, !0)), (s += 8)),
    n & 4 && (p.setTime(p.getTime() + r.getFloat64(s, !0) * 1e3), (s += 8)),
    n & 8 && ((i = r.getUint32(s, !0)), (s += 4)),
    n & 16 && ((o = r.getUint32(s, !0)), (s += 4)));
  var m;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      m = { t: "n", v: l };
      break;
    case 3:
      m = { t: "s", v: a[i] };
      break;
    case 5:
      m = { t: "d", v: p };
      break;
    case 6:
      m = { t: "b", v: c > 0 };
      break;
    case 7:
      m = { t: "n", v: c / 86400 };
      break;
    case 8:
      m = { t: "e", v: 0 };
      break;
    case 9:
      if (o > -1) m = { t: "s", v: t[o] };
      else
        throw new Error(
          "Unsupported cell type "
            .concat(e[1], " : ")
            .concat(n & 31, " : ")
            .concat(e.slice(0, 4)),
        );
      break;
    case 10:
      m = { t: "n", v: l };
      break;
    default:
      throw new Error(
        "Unsupported cell type "
          .concat(e[1], " : ")
          .concat(n & 31, " : ")
          .concat(e.slice(0, 4)),
      );
  }
  return m;
}
function jh(e, a, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return Mh(e, a, t, e[0]);
    case 5:
      return Uh(e, a, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function na(e) {
  var a = dt(e);
  return cr(a[1][0].data);
}
function fo(e, a) {
  var t = dt(a.data),
    r = Ze(t[1][0].data),
    n = t[3],
    s = [];
  return (
    (n || []).forEach(function (o) {
      var i = dt(o.data),
        l = Ze(i[1][0].data) >>> 0;
      switch (r) {
        case 1:
          s[l] = xn(i[3][0].data);
          break;
        case 8:
          {
            var c = e[na(i[9][0].data)][0],
              p = dt(c.data),
              m = e[na(p[1][0].data)][0],
              f = Ze(m.meta[1][0].data);
            if (f != 2001)
              throw new Error("2000 unexpected reference to ".concat(f));
            var h = dt(m.data);
            s[l] = h[3]
              .map(function (x) {
                return xn(x.data);
              })
              .join("");
          }
          break;
      }
    }),
    s
  );
}
function Hh(e, a) {
  var t,
    r,
    n,
    s,
    o,
    i,
    l,
    c,
    p,
    m,
    f,
    h,
    x,
    d,
    u = dt(e),
    A = Ze(u[1][0].data) >>> 0,
    B = Ze(u[2][0].data) >>> 0,
    w =
      (((r = (t = u[8]) == null ? void 0 : t[0]) == null ? void 0 : r.data) &&
        Ze(u[8][0].data) > 0) ||
      !1,
    M,
    H;
  if ((s = (n = u[7]) == null ? void 0 : n[0]) != null && s.data && a != 0)
    ((M = (i = (o = u[7]) == null ? void 0 : o[0]) == null ? void 0 : i.data),
      (H = (c = (l = u[6]) == null ? void 0 : l[0]) == null ? void 0 : c.data));
  else if ((m = (p = u[4]) == null ? void 0 : p[0]) != null && m.data && a != 1)
    ((M = (h = (f = u[4]) == null ? void 0 : f[0]) == null ? void 0 : h.data),
      (H = (d = (x = u[3]) == null ? void 0 : x[0]) == null ? void 0 : d.data));
  else throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var U = w ? 4 : 1, k = Vn(M), S = [], _ = 0; _ < M.length / 2; ++_) {
    var I = k.getUint16(_ * 2, !0);
    I < 65535 && S.push([_, I]);
  }
  if (S.length != B)
    throw "Expected ".concat(B, " cells, found ").concat(S.length);
  var R = [];
  for (_ = 0; _ < S.length - 1; ++_)
    R[S[_][0]] = H.subarray(S[_][1] * U, S[_ + 1][1] * U);
  return (
    S.length >= 1 &&
      (R[S[S.length - 1][0]] = H.subarray(S[S.length - 1][1] * U)),
    { R: A, cells: R }
  );
}
function Gh(e, a) {
  var t,
    r = dt(a.data),
    n =
      (t = r == null ? void 0 : r[7]) != null && t[0]
        ? Ze(r[7][0].data) >>> 0 > 0
          ? 1
          : 0
        : -1,
    s = Wn(r[5], function (o) {
      return Hh(o, n);
    });
  return {
    nrows: Ze(r[4][0].data) >>> 0,
    data: s.reduce(function (o, i) {
      return (
        o[i.R] || (o[i.R] = []),
        i.cells.forEach(function (l, c) {
          if (o[i.R][c])
            throw new Error("Duplicate cell r=".concat(i.R, " c=").concat(c));
          o[i.R][c] = l;
        }),
        o
      );
    }, []),
  };
}
function Vh(e, a, t) {
  var r,
    n = dt(a.data),
    s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (((s.e.r = (Ze(n[6][0].data) >>> 0) - 1), s.e.r < 0))
    throw new Error("Invalid row varint ".concat(n[6][0].data));
  if (((s.e.c = (Ze(n[7][0].data) >>> 0) - 1), s.e.c < 0))
    throw new Error("Invalid col varint ".concat(n[7][0].data));
  t["!ref"] = Ce(s);
  var o = dt(n[4][0].data),
    i = fo(e, e[na(o[4][0].data)][0]),
    l = (r = o[17]) != null && r[0] ? fo(e, e[na(o[17][0].data)][0]) : [],
    c = dt(o[3][0].data),
    p = 0;
  c[1].forEach(function (m) {
    var f = dt(m.data),
      h = e[na(f[2][0].data)][0],
      x = Ze(h.meta[1][0].data);
    if (x != 6002) throw new Error("6001 unexpected reference to ".concat(x));
    var d = Gh(e, h);
    (d.data.forEach(function (u, A) {
      u.forEach(function (B, w) {
        var M = _e({ r: p + A, c: w }),
          H = jh(B, i, l);
        H && (t[M] = H);
      });
    }),
      (p += d.nrows));
  });
}
function Wh(e, a) {
  var t = dt(a.data),
    r = { "!ref": "A1" },
    n = e[na(t[2][0].data)],
    s = Ze(n[0].meta[1][0].data);
  if (s != 6001) throw new Error("6000 unexpected reference to ".concat(s));
  return (Vh(e, n[0], r), r);
}
function zh(e, a) {
  var t,
    r = dt(a.data),
    n = {
      name: (t = r[1]) != null && t[0] ? xn(r[1][0].data) : "",
      sheets: [],
    },
    s = Wn(r[2], na);
  return (
    s.forEach(function (o) {
      e[o].forEach(function (i) {
        var l = Ze(i.meta[1][0].data);
        l == 6e3 && n.sheets.push(Wh(e, i));
      });
    }),
    n
  );
}
function Xh(e, a) {
  var t = $n(),
    r = dt(a.data),
    n = Wn(r[1], na);
  if (
    (n.forEach(function (s) {
      e[s].forEach(function (o) {
        var i = Ze(o.meta[1][0].data);
        if (i == 2) {
          var l = zh(e, o);
          l.sheets.forEach(function (c, p) {
            Kn(t, c, p == 0 ? l.name : l.name + "_" + p, !0);
          });
        }
      });
    }),
    t.SheetNames.length == 0)
  )
    throw new Error("Empty NUMBERS file");
  return t;
}
function rn(e) {
  var a,
    t,
    r,
    n,
    s = {},
    o = [];
  if (
    (e.FullPaths.forEach(function (l) {
      if (l.match(/\.iwpv2/))
        throw new Error("Unsupported password protection");
    }),
    e.FileIndex.forEach(function (l) {
      if (l.name.match(/\.iwa$/)) {
        var c;
        try {
          c = Lh(l.content);
        } catch (m) {
          return console.log("?? " + l.content.length + " " + (m.message || m));
        }
        var p;
        try {
          p = Ph(c);
        } catch (m) {
          return console.log("## " + (m.message || m));
        }
        p.forEach(function (m) {
          ((s[m.id] = m.messages), o.push(m.id));
        });
      }
    }),
    !o.length)
  )
    throw new Error("File has no messages");
  var i =
    ((n =
      (r =
        (t = (a = s == null ? void 0 : s[1]) == null ? void 0 : a[0]) == null
          ? void 0
          : t.meta) == null
        ? void 0
        : r[1]) == null
      ? void 0
      : n[0].data) &&
    Ze(s[1][0].meta[1][0].data) == 1 &&
    s[1][0];
  if (
    (i ||
      o.forEach(function (l) {
        s[l].forEach(function (c) {
          var p = Ze(c.meta[1][0].data) >>> 0;
          if (p == 1)
            if (!i) i = c;
            else throw new Error("Document has multiple roots");
        });
      }),
    !i)
  )
    throw new Error("Cannot find Document root");
  return Xh(s, i);
}
function $h(e) {
  return function (t) {
    for (var r = 0; r != e.length; ++r) {
      var n = e[r];
      (t[n[0]] === void 0 && (t[n[0]] = n[1]),
        n[2] === "n" && (t[n[0]] = Number(t[n[0]])));
    }
  };
}
function zn(e) {
  $h([
    ["cellNF", !1],
    ["cellHTML", !0],
    ["cellFormula", !0],
    ["cellStyles", !1],
    ["cellText", !0],
    ["cellDates", !1],
    ["sheetStubs", !1],
    ["sheetRows", 0, "n"],
    ["bookDeps", !1],
    ["bookSheets", !1],
    ["bookProps", !1],
    ["bookFiles", !1],
    ["bookVBA", !1],
    ["password", ""],
    ["WTF", !1],
  ])(e);
}
function Kh(e) {
  return Aa.WS.indexOf(e) > -1
    ? "sheet"
    : e == Aa.CS
      ? "chart"
      : e == Aa.DS
        ? "dialog"
        : e == Aa.MS
          ? "macro"
          : e && e.length
            ? e
            : "sheet";
}
function Yh(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function (r) {
      return (
        r.id || (r.id = r.strRelID),
        [r.name, e["!id"][r.id].Target, Kh(e["!id"][r.id].Type)]
      );
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function qh(e, a, t, r, n, s, o, i, l, c, p, m) {
  try {
    s[r] = qa(kt(e, t, !0), a);
    var f = Xe(e, a),
      h;
    switch (i) {
      case "sheet":
        h = ah(f, a, n, l, s[r], c, p, m);
        break;
      case "chart":
        if (((h = rh(f, a, n, l, s[r], c, p, m)), !h || !h["!drawel"])) break;
        var x = Va(h["!drawel"].Target, a),
          d = dn(x),
          u = tm(kt(e, x, !0), qa(kt(e, d, !0), x)),
          A = Va(u, x),
          B = dn(A);
        h = U2(kt(e, A, !0), A, l, qa(kt(e, B, !0), A), c, h);
        break;
      case "macro":
        h = nh(f, a, n, l, s[r], c, p, m);
        break;
      case "dialog":
        h = sh(f, a, n, l, s[r], c, p, m);
        break;
      default:
        throw new Error("Unrecognized sheet type " + i);
    }
    o[r] = h;
    var w = [];
    (s &&
      s[r] &&
      Wt(s[r]).forEach(function (M) {
        var H = "";
        if (s[r][M].Type == Aa.CMNT) {
          H = Va(s[r][M].Target, a);
          var U = lh(Xe(e, H, !0), H, l);
          if (!U || !U.length) return;
          qs(h, U, !1);
        }
        s[r][M].Type == Aa.TCMNT &&
          ((H = Va(s[r][M].Target, a)), (w = w.concat(rm(Xe(e, H, !0), l))));
      }),
      w && w.length && qs(h, w, !0, l.people || []));
  } catch (M) {
    if (l.WTF) throw M;
  }
}
function Ct(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function Jh(e, a) {
  if (
    (Uo(),
    (a = a || {}),
    zn(a),
    Ft(e, "META-INF/manifest.xml") || Ft(e, "objectdata.xml"))
  )
    return co(e, a);
  if (Ft(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u")
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof rn < "u") {
      if (e.FileIndex) return rn(e);
      var t = be.utils.cfb_new();
      return (
        Es(e).forEach(function (ae) {
          J0(t, ae, q0(e, ae));
        }),
        rn(t)
      );
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!Ft(e, "[Content_Types].xml"))
    throw Ft(e, "index.xml.gz")
      ? new Error("Unsupported NUMBERS 08 file")
      : Ft(e, "index.xml")
        ? new Error("Unsupported NUMBERS 09 file")
        : new Error("Unsupported ZIP file");
  var r = Es(e),
    n = Xl(kt(e, "[Content_Types].xml")),
    s = !1,
    o,
    i;
  if (
    (n.workbooks.length === 0 &&
      ((i = "xl/workbook.xml"), Xe(e, i, !0) && n.workbooks.push(i)),
    n.workbooks.length === 0)
  ) {
    if (((i = "xl/workbook.bin"), !Xe(e, i, !0)))
      throw new Error("Could not find workbook");
    (n.workbooks.push(i), (s = !0));
  }
  n.workbooks[0].slice(-3) == "bin" && (s = !0);
  var l = {},
    c = {};
  if (!a.bookSheets && !a.bookProps) {
    if (((Qa = []), n.sst))
      try {
        Qa = ch(Xe(e, Ct(n.sst)), n.sst, a);
      } catch (ae) {
        if (a.WTF) throw ae;
      }
    (a.cellStyles &&
      n.themes.length &&
      (l = ih(kt(e, n.themes[0].replace(/^\//, ""), !0) || "", n.themes[0], a)),
      n.style && (c = oh(Xe(e, Ct(n.style)), n.style, l, a)));
  }
  n.links.map(function (ae) {
    try {
      var ee = qa(kt(e, dn(Ct(ae))), ae);
      return dh(Xe(e, Ct(ae)), ee, ae, a);
    } catch {}
  });
  var p = th(Xe(e, Ct(n.workbooks[0])), n.workbooks[0], a),
    m = {},
    f = "";
  n.coreprops.length &&
    ((f = Xe(e, Ct(n.coreprops[0]), !0)),
    f && (m = ui(f)),
    n.extprops.length !== 0 &&
      ((f = Xe(e, Ct(n.extprops[0]), !0)), f && Jl(f, m, a)));
  var h = {};
  (!a.bookSheets || a.bookProps) &&
    n.custprops.length !== 0 &&
    ((f = kt(e, Ct(n.custprops[0]), !0)), f && (h = Ql(f, a)));
  var x = {};
  if (
    (a.bookSheets || a.bookProps) &&
    (p.Sheets
      ? (o = p.Sheets.map(function (ee) {
          return ee.name;
        }))
      : m.Worksheets && m.SheetNames.length > 0 && (o = m.SheetNames),
    a.bookProps && ((x.Props = m), (x.Custprops = h)),
    a.bookSheets && typeof o < "u" && (x.SheetNames = o),
    a.bookSheets ? x.SheetNames : a.bookProps)
  )
    return x;
  o = {};
  var d = {};
  a.bookDeps && n.calcchain && (d = ph(Xe(e, Ct(n.calcchain)), n.calcchain));
  var u = 0,
    A = {},
    B,
    w;
  {
    var M = p.Sheets;
    ((m.Worksheets = M.length), (m.SheetNames = []));
    for (var H = 0; H != M.length; ++H) m.SheetNames[H] = M[H].name;
  }
  var U = s ? "bin" : "xml",
    k = n.workbooks[0].lastIndexOf("/"),
    S = (
      n.workbooks[0].slice(0, k + 1) +
      "_rels/" +
      n.workbooks[0].slice(k + 1) +
      ".rels"
    ).replace(/^\//, "");
  Ft(e, S) || (S = "xl/_rels/workbook." + U + ".rels");
  var _ = qa(kt(e, S, !0), S.replace(/_rels.*/, "s5s"));
  ((n.metadata || []).length >= 1 &&
    (a.xlmeta = fh(Xe(e, Ct(n.metadata[0])), n.metadata[0], a)),
    (n.people || []).length >= 1 && (a.people = nm(Xe(e, Ct(n.people[0])), a)),
    _ && (_ = Yh(_, p.Sheets)));
  var I = Xe(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e: for (u = 0; u != m.Worksheets; ++u) {
    var R = "sheet";
    if (
      (_ && _[u]
        ? ((B = "xl/" + _[u][1].replace(/[\/]?xl\//, "")),
          Ft(e, B) || (B = _[u][1]),
          Ft(e, B) || (B = S.replace(/_rels\/.*$/, "") + _[u][1]),
          (R = _[u][2]))
        : ((B = "xl/worksheets/sheet" + (u + 1 - I) + "." + U),
          (B = B.replace(/sheet0\./, "sheet."))),
      (w = B.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels")),
      a && a.sheets != null)
    )
      switch (typeof a.sheets) {
        case "number":
          if (u != a.sheets) continue e;
          break;
        case "string":
          if (m.SheetNames[u].toLowerCase() != a.sheets.toLowerCase())
            continue e;
          break;
        default:
          if (Array.isArray && Array.isArray(a.sheets)) {
            for (var N = !1, X = 0; X != a.sheets.length; ++X)
              (typeof a.sheets[X] == "number" && a.sheets[X] == u && (N = 1),
                typeof a.sheets[X] == "string" &&
                  a.sheets[X].toLowerCase() == m.SheetNames[u].toLowerCase() &&
                  (N = 1));
            if (!N) continue e;
          }
      }
    qh(e, B, w, m.SheetNames[u], u, A, o, R, a, p, l, c);
  }
  return (
    (x = {
      Directory: n,
      Workbook: p,
      Props: m,
      Custprops: h,
      Deps: d,
      Sheets: o,
      SheetNames: m.SheetNames,
      Strings: Qa,
      Styles: c,
      Themes: l,
      SSF: at(we),
    }),
    a &&
      a.bookFiles &&
      (e.files
        ? ((x.keys = r), (x.files = e.files))
        : ((x.keys = []),
          (x.files = {}),
          e.FullPaths.forEach(function (ae, ee) {
            ((ae = ae.replace(/^Root Entry[\/]/, "")),
              x.keys.push(ae),
              (x.files[ae] = e.FileIndex[ee]));
          }))),
    a &&
      a.bookVBA &&
      (n.vba.length > 0
        ? (x.vbaraw = Xe(e, Ct(n.vba[0]), !0))
        : n.defaults &&
          n.defaults.bin === cm &&
          (x.vbaraw = Xe(e, "xl/vbaProject.bin", !0))),
    x
  );
}
function Zh(e, a) {
  var t = a || {},
    r = "Workbook",
    n = be.find(e, r);
  try {
    if (((r = "/!DataSpaces/Version"), (n = be.find(e, r)), !n || !n.content))
      throw new Error("ECMA-376 Encrypted file missing " + r);
    if (
      (Vd(n.content),
      (r = "/!DataSpaces/DataSpaceMap"),
      (n = be.find(e, r)),
      !n || !n.content)
    )
      throw new Error("ECMA-376 Encrypted file missing " + r);
    var s = zd(n.content);
    if (
      s.length !== 1 ||
      s[0].comps.length !== 1 ||
      s[0].comps[0].t !== 0 ||
      s[0].name !== "StrongEncryptionDataSpace" ||
      s[0].comps[0].v !== "EncryptedPackage"
    )
      throw new Error("ECMA-376 Encrypted file bad " + r);
    if (
      ((r = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace"),
      (n = be.find(e, r)),
      !n || !n.content)
    )
      throw new Error("ECMA-376 Encrypted file missing " + r);
    var o = Xd(n.content);
    if (o.length != 1 || o[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + r);
    if (
      ((r = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary"),
      (n = be.find(e, r)),
      !n || !n.content)
    )
      throw new Error("ECMA-376 Encrypted file missing " + r);
    Kd(n.content);
  } catch {}
  if (((r = "/EncryptionInfo"), (n = be.find(e, r)), !n || !n.content))
    throw new Error("ECMA-376 Encrypted file missing " + r);
  var i = Yd(n.content);
  if (((r = "/EncryptedPackage"), (n = be.find(e, r)), !n || !n.content))
    throw new Error("ECMA-376 Encrypted file missing " + r);
  if (i[0] == 4 && typeof decrypt_agile < "u")
    return decrypt_agile(i[1], n.content, t.password || "", t);
  if (i[0] == 2 && typeof decrypt_std76 < "u")
    return decrypt_std76(i[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function Xn(e, a) {
  var t = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = bt(e.slice(0, 12));
      break;
    case "binary":
      t = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + ((a && a.type) || "undefined"));
  }
  return [
    t.charCodeAt(0),
    t.charCodeAt(1),
    t.charCodeAt(2),
    t.charCodeAt(3),
    t.charCodeAt(4),
    t.charCodeAt(5),
    t.charCodeAt(6),
    t.charCodeAt(7),
  ];
}
function Qh(e, a) {
  return be.find(e, "EncryptedPackage") ? Zh(e, a) : Zi(e, a);
}
function ex(e, a) {
  var t,
    r = e,
    n = a || {};
  return (
    n.type || (n.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"),
    (t = zo(r, n)),
    Jh(t, n)
  );
}
function ac(e, a) {
  var t = 0;
  e: for (; t < e.length; )
    switch (e.charCodeAt(t)) {
      case 10:
      case 13:
      case 32:
        ++t;
        break;
      case 60:
        return un(e.slice(t), a);
      default:
        break e;
    }
  return sr.to_workbook(e, a);
}
function tx(e, a) {
  var t = "",
    r = Xn(e, a);
  switch (a.type) {
    case "base64":
      t = bt(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = ua(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return (
    r[0] == 239 && r[1] == 187 && r[2] == 191 && (t = Ie(t)),
    (a.type = "binary"),
    ac(t, a)
  );
}
function ax(e, a) {
  var t = e;
  return (
    a.type == "base64" && (t = bt(t)),
    (t = ea.utils.decode(1200, t.slice(2), "str")),
    (a.type = "binary"),
    ac(t, a)
  );
}
function rx(e) {
  return e.match(/[^\x00-\x7F]/) ? Wa(e) : e;
}
function nn(e, a, t, r) {
  return r ? ((t.type = "string"), sr.to_workbook(e, t)) : sr.to_workbook(a, t);
}
function gn(e, a) {
  Co();
  var t = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer)
    return gn(new Uint8Array(e), ((t = at(t)), (t.type = "array"), t));
  typeof Uint8Array < "u" &&
    e instanceof Uint8Array &&
    !t.type &&
    (t.type = typeof Deno < "u" ? "buffer" : "array");
  var r = e,
    n = [0, 0, 0, 0],
    s = !1;
  if (
    (t.cellStyles && ((t.cellNF = !0), (t.sheetStubs = !0)),
    (Fa = {}),
    t.dateNF && (Fa.dateNF = t.dateNF),
    t.type || (t.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"),
    t.type == "file" &&
      ((t.type = Ae ? "buffer" : "binary"),
      (r = V0(e)),
      typeof Uint8Array < "u" && !Ae && (t.type = "array")),
    t.type == "string" &&
      ((s = !0), (t.type = "binary"), (t.codepage = 65001), (r = rx(e))),
    t.type == "array" &&
      typeof Uint8Array < "u" &&
      e instanceof Uint8Array &&
      typeof ArrayBuffer < "u")
  ) {
    var o = new ArrayBuffer(3),
      i = new Uint8Array(o);
    if (((i.foo = "bar"), !i.foo))
      return ((t = at(t)), (t.type = "array"), gn(kn(r), t));
  }
  switch ((n = Xn(r, t))[0]) {
    case 208:
      if (
        n[1] === 207 &&
        n[2] === 17 &&
        n[3] === 224 &&
        n[4] === 161 &&
        n[5] === 177 &&
        n[6] === 26 &&
        n[7] === 225
      )
        return Qh(be.read(r, t), t);
      break;
    case 9:
      if (n[1] <= 8) return Zi(r, t);
      break;
    case 60:
      return un(r, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0)
        throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return Dd(r, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76)
        return yd.to_workbook(r, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? ex(r, t) : nn(e, r, t, s);
    case 239:
      return n[3] === 60 ? un(r, t) : nn(e, r, t, s);
    case 255:
      if (n[1] === 254) return ax(r, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return Za.to_workbook(r, t);
      break;
    case 0:
      if (
        n[1] === 0 &&
        ((n[2] >= 2 && n[3] === 0) ||
          (n[2] === 0 && (n[3] === 8 || n[3] === 9)))
      )
        return Za.to_workbook(r, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return Ys.to_workbook(r, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116)
        return cf.to_workbook(r, t);
      break;
    case 10:
    case 13:
    case 32:
      return tx(r, t);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71)
        throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return bd.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31
    ? Ys.to_workbook(r, t)
    : nn(e, r, t, s);
}
function nx(e, a, t, r, n, s, o, i) {
  var l = rt(t),
    c = i.defval,
    p = i.raw || !Object.prototype.hasOwnProperty.call(i, "raw"),
    m = !0,
    f = n === 1 ? [] : {};
  if (n !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(f, "__rowNum__", { value: t, enumerable: !1 });
      } catch {
        f.__rowNum__ = t;
      }
    else f.__rowNum__ = t;
  if (!o || e[t])
    for (var h = a.s.c; h <= a.e.c; ++h) {
      var x = o ? e[t][h] : e[r[h] + l];
      if (x === void 0 || x.t === void 0) {
        if (c === void 0) continue;
        s[h] != null && (f[s[h]] = c);
        continue;
      }
      var d = x.v;
      switch (x.t) {
        case "z":
          if (d == null) break;
          continue;
        case "e":
          d = d == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + x.t);
      }
      if (s[h] != null) {
        if (d == null)
          if (x.t == "e" && d === null) f[s[h]] = null;
          else if (c !== void 0) f[s[h]] = c;
          else if (p && d === null) f[s[h]] = null;
          else continue;
        else
          f[s[h]] =
            p && (x.t !== "n" || (x.t === "n" && i.rawNumbers !== !1))
              ? d
              : Jt(x, d, i);
        d != null && (m = !1);
      }
    }
  return { row: f, isempty: m };
}
function _n(e, a) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 },
    r = 0,
    n = 1,
    s = [],
    o = 0,
    i = "",
    l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    c = a || {},
    p = c.range != null ? c.range : e["!ref"];
  switch (
    (c.header === 1
      ? (r = 1)
      : c.header === "A"
        ? (r = 2)
        : Array.isArray(c.header)
          ? (r = 3)
          : c.header == null && (r = 0),
    typeof p)
  ) {
    case "string":
      l = He(p);
      break;
    case "number":
      ((l = He(e["!ref"])), (l.s.r = p));
      break;
    default:
      l = p;
  }
  r > 0 && (n = 0);
  var m = rt(l.s.r),
    f = [],
    h = [],
    x = 0,
    d = 0,
    u = Array.isArray(e),
    A = l.s.r,
    B = 0,
    w = {};
  u && !e[A] && (e[A] = []);
  var M = (c.skipHidden && e["!cols"]) || [],
    H = (c.skipHidden && e["!rows"]) || [];
  for (B = l.s.c; B <= l.e.c; ++B)
    if (!(M[B] || {}).hidden)
      switch (((f[B] = Je(B)), (t = u ? e[A][B] : e[f[B] + m]), r)) {
        case 1:
          s[B] = B - l.s.c;
          break;
        case 2:
          s[B] = f[B];
          break;
        case 3:
          s[B] = c.header[B - l.s.c];
          break;
        default:
          if (
            (t == null && (t = { w: "__EMPTY", t: "s" }),
            (i = o = Jt(t, null, c)),
            (d = w[o] || 0),
            !d)
          )
            w[o] = 1;
          else {
            do i = o + "_" + d++;
            while (w[i]);
            ((w[o] = d), (w[i] = 1));
          }
          s[B] = i;
      }
  for (A = l.s.r + n; A <= l.e.r; ++A)
    if (!(H[A] || {}).hidden) {
      var U = nx(e, l, A, f, r, s, u, c);
      (U.isempty === !1 || (r === 1 ? c.blankrows !== !1 : c.blankrows)) &&
        (h[x++] = U.row);
    }
  return ((h.length = x), h);
}
var mo = /"/g;
function sx(e, a, t, r, n, s, o, i) {
  for (var l = !0, c = [], p = "", m = rt(t), f = a.s.c; f <= a.e.c; ++f)
    if (r[f]) {
      var h = i.dense ? (e[t] || [])[f] : e[r[f] + m];
      if (h == null) p = "";
      else if (h.v != null) {
        ((l = !1),
          (p = "" + (i.rawNumbers && h.t == "n" ? h.v : Jt(h, null, i))));
        for (var x = 0, d = 0; x !== p.length; ++x)
          if (
            (d = p.charCodeAt(x)) === n ||
            d === s ||
            d === 34 ||
            i.forceQuotes
          ) {
            p = '"' + p.replace(mo, '""') + '"';
            break;
          }
        p == "ID" && (p = '"ID"');
      } else
        h.f != null && !h.F
          ? ((l = !1),
            (p = "=" + h.f),
            p.indexOf(",") >= 0 && (p = '"' + p.replace(mo, '""') + '"'))
          : (p = "");
      c.push(p);
    }
  return i.blankrows === !1 && l ? null : c.join(o);
}
function rc(e, a) {
  var t = [],
    r = a ?? {};
  if (e == null || e["!ref"] == null) return "";
  var n = He(e["!ref"]),
    s = r.FS !== void 0 ? r.FS : ",",
    o = s.charCodeAt(0),
    i =
      r.RS !== void 0
        ? r.RS
        : `
`,
    l = i.charCodeAt(0),
    c = new RegExp((s == "|" ? "\\|" : s) + "+$"),
    p = "",
    m = [];
  r.dense = Array.isArray(e);
  for (
    var f = (r.skipHidden && e["!cols"]) || [],
      h = (r.skipHidden && e["!rows"]) || [],
      x = n.s.c;
    x <= n.e.c;
    ++x
  )
    (f[x] || {}).hidden || (m[x] = Je(x));
  for (var d = 0, u = n.s.r; u <= n.e.r; ++u)
    (h[u] || {}).hidden ||
      ((p = sx(e, n, u, m, o, l, s, r)),
      p != null &&
        (r.strip && (p = p.replace(c, "")),
        (p || r.blankrows !== !1) && t.push((d++ ? i : "") + p)));
  return (delete r.dense, t.join(""));
}
function ox(e, a) {
  (a || (a = {}),
    (a.FS = "	"),
    (a.RS = `
`));
  var t = rc(e, a);
  return t;
}
function ix(e) {
  var a = "",
    t,
    r = "";
  if (e == null || e["!ref"] == null) return [];
  var n = He(e["!ref"]),
    s = "",
    o = [],
    i,
    l = [],
    c = Array.isArray(e);
  for (i = n.s.c; i <= n.e.c; ++i) o[i] = Je(i);
  for (var p = n.s.r; p <= n.e.r; ++p)
    for (s = rt(p), i = n.s.c; i <= n.e.c; ++i)
      if (
        ((a = o[i] + s),
        (t = c ? (e[p] || [])[i] : e[a]),
        (r = ""),
        t !== void 0)
      ) {
        if (t.F != null) {
          if (((a = t.F), !t.f)) continue;
          ((r = t.f), a.indexOf(":") == -1 && (a = a + ":" + a));
        }
        if (t.f != null) r = t.f;
        else {
          if (t.t == "z") continue;
          if (t.t == "n" && t.v != null) r = "" + t.v;
          else if (t.t == "b") r = t.v ? "TRUE" : "FALSE";
          else if (t.w !== void 0) r = "'" + t.w;
          else {
            if (t.v === void 0) continue;
            t.t == "s" ? (r = "'" + t.v) : (r = "" + t.v);
          }
        }
        l[l.length] = a + "=" + r;
      }
  return l;
}
function nc(e, a, t) {
  var r = t || {},
    n = +!r.skipHeader,
    s = e || {},
    o = 0,
    i = 0;
  if (s && r.origin != null)
    if (typeof r.origin == "number") o = r.origin;
    else {
      var l = typeof r.origin == "string" ? vt(r.origin) : r.origin;
      ((o = l.r), (i = l.c));
    }
  var c,
    p = { s: { c: 0, r: 0 }, e: { c: i, r: o + a.length - 1 + n } };
  if (s["!ref"]) {
    var m = He(s["!ref"]);
    ((p.e.c = Math.max(p.e.c, m.e.c)),
      (p.e.r = Math.max(p.e.r, m.e.r)),
      o == -1 && ((o = m.e.r + 1), (p.e.r = o + a.length - 1 + n)));
  } else o == -1 && ((o = 0), (p.e.r = a.length - 1 + n));
  var f = r.header || [],
    h = 0;
  (a.forEach(function (d, u) {
    Wt(d).forEach(function (A) {
      (h = f.indexOf(A)) == -1 && (f[(h = f.length)] = A);
      var B = d[A],
        w = "z",
        M = "",
        H = _e({ c: i + h, r: o + u + n });
      ((c = lr(s, H)),
        B && typeof B == "object" && !(B instanceof Date)
          ? (s[H] = B)
          : (typeof B == "number"
              ? (w = "n")
              : typeof B == "boolean"
                ? (w = "b")
                : typeof B == "string"
                  ? (w = "s")
                  : B instanceof Date
                    ? ((w = "d"),
                      r.cellDates || ((w = "n"), (B = _t(B))),
                      (M = r.dateNF || we[14]))
                    : B === null && r.nullError && ((w = "e"), (B = 0)),
            c
              ? ((c.t = w), (c.v = B), delete c.w, delete c.R, M && (c.z = M))
              : (s[H] = c = { t: w, v: B }),
            M && (c.z = M)));
    });
  }),
    (p.e.c = Math.max(p.e.c, i + f.length - 1)));
  var x = rt(o);
  if (n) for (h = 0; h < f.length; ++h) s[Je(h + i) + x] = { t: "s", v: f[h] };
  return ((s["!ref"] = Ce(p)), s);
}
function cx(e, a) {
  return nc(null, e, a);
}
function lr(e, a, t) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var r = vt(a);
      return (
        e[r.r] || (e[r.r] = []),
        e[r.r][r.c] || (e[r.r][r.c] = { t: "z" })
      );
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? lr(e, _e(a)) : lr(e, _e({ r: a, c: t || 0 }));
}
function lx(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a) return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var t = e.SheetNames.indexOf(a);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else throw new Error("Cannot find sheet |" + a + "|");
}
function $n() {
  return { SheetNames: [], Sheets: {} };
}
function Kn(e, a, t, r) {
  var n = 1;
  if (!t)
    for (
      ;
      n <= 65535 && e.SheetNames.indexOf((t = "Sheet" + n)) != -1;
      ++n, t = void 0
    );
  if (!t || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (r && e.SheetNames.indexOf(t) >= 0) {
    var s = t.match(/(^.*?)(\d+)$/);
    n = (s && +s[2]) || 0;
    var o = (s && s[1]) || t;
    for (++n; n <= 65535 && e.SheetNames.indexOf((t = o + n)) != -1; ++n);
  }
  if (($2(t), e.SheetNames.indexOf(t) >= 0))
    throw new Error("Worksheet with name |" + t + "| already exists!");
  return (e.SheetNames.push(t), (e.Sheets[t] = a), t);
}
function px(e, a, t) {
  (e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []));
  var r = lx(e, a);
  switch ((e.Workbook.Sheets[r] || (e.Workbook.Sheets[r] = {}), t)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + t);
  }
  e.Workbook.Sheets[r].Hidden = t;
}
function dx(e, a) {
  return ((e.z = a), e);
}
function sc(e, a, t) {
  return (a ? ((e.l = { Target: a }), t && (e.l.Tooltip = t)) : delete e.l, e);
}
function fx(e, a, t) {
  return sc(e, "#" + a, t);
}
function mx(e, a, t) {
  (e.c || (e.c = []), e.c.push({ t: a, a: t || "SheetJS" }));
}
function ux(e, a, t, r) {
  for (
    var n = typeof a != "string" ? a : He(a),
      s = typeof a == "string" ? a : Ce(a),
      o = n.s.r;
    o <= n.e.r;
    ++o
  )
    for (var i = n.s.c; i <= n.e.c; ++i) {
      var l = lr(e, o, i);
      ((l.t = "n"),
        (l.F = s),
        delete l.v,
        o == n.s.r && i == n.s.c && ((l.f = t), r && (l.D = !0)));
    }
  return e;
}
var hx = {
  encode_col: Je,
  encode_row: rt,
  encode_cell: _e,
  encode_range: Ce,
  decode_col: In,
  decode_row: Bn,
  split_cell: Al,
  decode_cell: vt,
  decode_range: Oa,
  format_cell: Jt,
  sheet_add_aoa: li,
  sheet_add_json: nc,
  sheet_add_dom: Qi,
  aoa_to_sheet: La,
  json_to_sheet: cx,
  table_to_sheet: ec,
  table_to_book: Nh,
  sheet_to_csv: rc,
  sheet_to_txt: ox,
  sheet_to_json: _n,
  sheet_to_html: Dh,
  sheet_to_formulae: ix,
  sheet_to_row_object_array: _n,
  sheet_get_cell: lr,
  book_new: $n,
  book_append_sheet: Kn,
  book_set_sheet_visibility: px,
  cell_set_number_format: dx,
  cell_set_hyperlink: sc,
  cell_set_internal_link: fx,
  cell_add_comment: mx,
  sheet_set_array_formula: ux,
  consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
};
const xx = (e) =>
    new Promise((a, t) => {
      var n;
      const r =
        (n = e.name.split(".").pop()) == null ? void 0 : n.toLowerCase();
      if (r === "csv")
        f0.parse(e, {
          header: !0,
          skipEmptyLines: !0,
          complete: (s) => {
            const o = s.data,
              i = o.length > 0 ? Object.keys(o[0]) : [];
            a({ headers: i, rows: o, rowCount: o.length, fileType: "csv" });
          },
          error: (s) => t(new Error(`Erro ao ler CSV: ${s.message}`)),
        });
      else if (r === "xlsx" || r === "xls") {
        const s = new FileReader();
        ((s.onload = (o) => {
          var i;
          try {
            const l = new Uint8Array(
                (i = o.target) == null ? void 0 : i.result,
              ),
              c = gn(l, { type: "array" }),
              p = c.Sheets[c.SheetNames[0]],
              m = hx.sheet_to_json(p),
              f = m.length > 0 ? Object.keys(m[0]) : [];
            a({ headers: f, rows: m, rowCount: m.length, fileType: "xlsx" });
          } catch {
            t(
              new Error(
                "Erro ao ler Excel. Verifique se o arquivo não está corrompido.",
              ),
            );
          }
        }),
          (s.onerror = () => t(new Error("Erro ao carregar o arquivo."))),
          s.readAsArrayBuffer(e));
      } else t(new Error(`Formato não suportado: .${r}. Use CSV ou XLSX.`));
    }),
  vx = () => {
    var x;
    const {
        formData: e,
        setFormData: a,
        file: t,
        setFile: r,
        textData: n,
        setTextData: s,
        urlData: o,
        setUrlData: i,
        parsedData: l,
        setParsedData: c,
        setLoading: p,
      } = Ra(),
      { toast: m } = uo(),
      { t: f } = Ia(),
      h = async (d) => {
        var A;
        const u = (A = d.target.files) == null ? void 0 : A[0];
        if (u) {
          (r(u), p(!0));
          try {
            const B = await xx(u);
            (c(B),
              m({
                title: f("builder.toasts.file_uploaded_title"),
                description: f("builder.toasts.file_uploaded_desc", {
                  name: u.name,
                }),
              }));
          } catch (B) {
            const w =
              B instanceof Error ? B.message : f("builder.errors.ia_unknown");
            m({
              title: f("common.error_title"),
              description: w,
              variant: "destructive",
            });
          } finally {
            p(!1);
          }
        }
      };
    return g.jsxs("div", {
      "data-lov-id":
        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:55:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
      "data-component-line": "55",
      "data-component-file": "DataInputStep.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
      className: "space-y-6",
      children: [
        g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:56:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
          "data-component-line": "56",
          "data-component-file": "DataInputStep.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
          className: "text-center",
          children: [
            g.jsx("h2", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:57:8",
              "data-lov-name": "h2",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "57",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "h2",
              "data-component-content":
                "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-semibold%20mb-2%22%7D",
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: f("builder.steps.data.title"),
            }),
            g.jsx("p", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:58:8",
              "data-lov-name": "p",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "58",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-muted-foreground%22%7D",
              className: "text-muted-foreground",
              children: f("builder.steps.data.desc"),
            }),
          ],
        }),
        g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:64:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
          "data-component-line": "64",
          "data-component-file": "DataInputStep.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%22%7D",
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: [
            g.jsx(Ke, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:65:8",
              "data-lov-name": "Card",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "65",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "Card",
              "data-component-content": "%7B%7D",
              className: `cursor-pointer transition-all card-hover ${e.dataSource === "upload" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => a((d) => ({ ...d, dataSource: "upload" })),
              children: g.jsxs(Lt, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:71:10",
                "data-lov-name": "CardHeader",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                "data-component-line": "71",
                "data-component-file": "DataInputStep.tsx",
                "data-component-name": "CardHeader",
                "data-component-content":
                  "%7B%22className%22%3A%22text-center%22%7D",
                className: "text-center",
                children: [
                  g.jsx(Nc, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:72:12",
                    "data-lov-name": "Upload",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "72",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "Upload",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-primary%22%7D",
                    className: "w-8 h-8 mx-auto mb-2 text-primary",
                  }),
                  g.jsx(Mt, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:73:12",
                    "data-lov-name": "CardTitle",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "73",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "CardTitle",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-lg%22%7D",
                    className: "text-lg",
                    children: f("builder.steps.data.sources.upload"),
                  }),
                  g.jsx(yr, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:74:12",
                    "data-lov-name": "CardDescription",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "74",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "CardDescription",
                    "data-component-content": "%7B%7D",
                    children: f("builder.steps.data.sources.upload_desc"),
                  }),
                ],
              }),
            }),
            g.jsx(Ke, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:81:8",
              "data-lov-name": "Card",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "81",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "Card",
              "data-component-content": "%7B%7D",
              className: `cursor-pointer transition-all card-hover ${e.dataSource === "text" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => a((d) => ({ ...d, dataSource: "text" })),
              children: g.jsxs(Lt, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:87:10",
                "data-lov-name": "CardHeader",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                "data-component-line": "87",
                "data-component-file": "DataInputStep.tsx",
                "data-component-name": "CardHeader",
                "data-component-content":
                  "%7B%22className%22%3A%22text-center%22%7D",
                className: "text-center",
                children: [
                  g.jsx(Bc, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:88:12",
                    "data-lov-name": "Copy",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "88",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "Copy",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-primary%22%7D",
                    className: "w-8 h-8 mx-auto mb-2 text-primary",
                  }),
                  g.jsx(Mt, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:89:12",
                    "data-lov-name": "CardTitle",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "89",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "CardTitle",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-lg%22%7D",
                    className: "text-lg",
                    children: f("builder.steps.data.sources.paste"),
                  }),
                  g.jsx(yr, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:90:12",
                    "data-lov-name": "CardDescription",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "90",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "CardDescription",
                    "data-component-content": "%7B%7D",
                    children: f("builder.steps.data.sources.paste_desc"),
                  }),
                ],
              }),
            }),
            g.jsx(Ke, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:97:8",
              "data-lov-name": "Card",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "97",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "Card",
              "data-component-content": "%7B%7D",
              className: `cursor-pointer transition-all card-hover ${e.dataSource === "url" ? "ring-2 ring-primary bg-primary/5" : ""}`,
              onClick: () => a((d) => ({ ...d, dataSource: "url" })),
              children: g.jsxs(Lt, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:103:10",
                "data-lov-name": "CardHeader",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                "data-component-line": "103",
                "data-component-file": "DataInputStep.tsx",
                "data-component-name": "CardHeader",
                "data-component-content":
                  "%7B%22className%22%3A%22text-center%22%7D",
                className: "text-center",
                children: [
                  g.jsx(as, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:104:12",
                    "data-lov-name": "Globe",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "104",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "Globe",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-primary%22%7D",
                    className: "w-8 h-8 mx-auto mb-2 text-primary",
                  }),
                  g.jsx(Mt, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:105:12",
                    "data-lov-name": "CardTitle",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "105",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "CardTitle",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-lg%22%7D",
                    className: "text-lg",
                    children: f("builder.steps.data.sources.url"),
                  }),
                  g.jsx(yr, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:106:12",
                    "data-lov-name": "CardDescription",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "106",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "CardDescription",
                    "data-component-content": "%7B%7D",
                    children: f("builder.steps.data.sources.url_desc"),
                  }),
                ],
              }),
            }),
          ],
        }),
        e.dataSource === "upload" &&
          g.jsx(Ke, {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:114:8",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
            "data-component-line": "114",
            "data-component-file": "DataInputStep.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: g.jsxs(lt, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:115:10",
              "data-lov-name": "CardContent",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "115",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "CardContent",
              "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
              className: "p-6",
              children: [
                g.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:116:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                  "data-component-line": "116",
                  "data-component-file": "DataInputStep.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22border-2%20border-dashed%20border-muted%20rounded-xl%20p-8%20text-center%22%7D",
                  className:
                    "border-2 border-dashed border-muted rounded-xl p-8 text-center",
                  children: [
                    g.jsx(rs, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:117:14",
                      "data-lov-name": "FileSpreadsheet",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                      "data-component-line": "117",
                      "data-component-file": "DataInputStep.tsx",
                      "data-component-name": "FileSpreadsheet",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-12%20h-12%20mx-auto%20mb-4%20text-muted-foreground%22%7D",
                      className: "w-12 h-12 mx-auto mb-4 text-muted-foreground",
                    }),
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:118:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                      "data-component-line": "118",
                      "data-component-file": "DataInputStep.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-2%22%7D",
                      className: "space-y-2",
                      children: [
                        g.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:119:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                          "data-component-line": "119",
                          "data-component-file": "DataInputStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20font-medium%22%7D",
                          className: "text-sm font-medium",
                          children: f("builder.steps.data.dropzone.title"),
                        }),
                        g.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:122:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                          "data-component-line": "122",
                          "data-component-file": "DataInputStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                          className: "text-xs text-muted-foreground",
                          children: f("builder.steps.data.dropzone.hint"),
                        }),
                        g.jsxs("button", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:125:16",
                          "data-lov-name": "button",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                          "data-component-line": "125",
                          "data-component-file": "DataInputStep.tsx",
                          "data-component-name": "button",
                          "data-component-content":
                            "%7B%22className%22%3A%22mt-2%20text-xs%20text-primary%20hover%3Aunderline%20font-medium%20flex%20items-center%20justify-center%20gap-1%20mx-auto%22%7D",
                          type: "button",
                          onClick: () =>
                            m({
                              title: f("builder.toasts.model_downloaded_title"),
                              description: f(
                                "builder.toasts.model_downloaded_desc",
                              ),
                            }),
                          className:
                            "mt-2 text-xs text-primary hover:underline font-medium flex items-center justify-center gap-1 mx-auto",
                          children: [
                            g.jsx(rs, {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:130:18",
                              "data-lov-name": "FileSpreadsheet",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                              "data-component-line": "130",
                              "data-component-file": "DataInputStep.tsx",
                              "data-component-name": "FileSpreadsheet",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-3%20h-3%22%7D",
                              className: "w-3 h-3",
                            }),
                            f("builder.steps.data.example"),
                          ],
                        }),
                      ],
                    }),
                    g.jsx(cn, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:136:14",
                      "data-lov-name": "Input",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                      "data-component-line": "136",
                      "data-component-file": "DataInputStep.tsx",
                      "data-component-name": "Input",
                      "data-component-content":
                        "%7B%22className%22%3A%22mt-4%20cursor-pointer%22%7D",
                      type: "file",
                      className: "mt-4 cursor-pointer",
                      accept: ".xlsx,.xls,.csv,.pdf,.docx",
                      onChange: h,
                    }),
                  ],
                }),
                t &&
                  g.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:144:14",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "144",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22mt-4%20p-4%20bg-success%2F10%20border%20border-success%2F20%20rounded-lg%22%7D",
                    className:
                      "mt-4 p-4 bg-success/10 border border-success/20 rounded-lg",
                    children: g.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:145:16",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                      "data-component-line": "145",
                      "data-component-file": "DataInputStep.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                      className: "flex items-center gap-2",
                      children: [
                        g.jsx(Gr, {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:146:18",
                          "data-lov-name": "CheckCircle",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                          "data-component-line": "146",
                          "data-component-file": "DataInputStep.tsx",
                          "data-component-name": "CheckCircle",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-5%20h-5%20text-success%22%7D",
                          className: "w-5 h-5 text-success",
                        }),
                        g.jsxs("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:147:18",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                          "data-component-line": "147",
                          "data-component-file": "DataInputStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22text%22%3A%22%3A%22%2C%22className%22%3A%22text-sm%20font-medium%20text-success%22%7D",
                          className: "text-sm font-medium text-success",
                          children: [
                            f("builder.steps.data.dropzone.success"),
                            ": ",
                            t.name,
                          ],
                        }),
                      ],
                    }),
                  }),
                t &&
                  l &&
                  g.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:156:14",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "156",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22mt-6%22%7D",
                    className: "mt-6",
                    children: g.jsx(p0, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:157:16",
                      "data-lov-name": "TemplateMatching",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                      "data-component-line": "157",
                      "data-component-file": "DataInputStep.tsx",
                      "data-component-name": "TemplateMatching",
                      "data-component-content": "%7B%7D",
                      fileData: {
                        headers: l.headers,
                        rows: l.rows,
                        fileName: t.name,
                        fileType:
                          ((x = t.name.split(".").pop()) == null
                            ? void 0
                            : x.toLowerCase()) || "csv",
                      },
                      onTemplateSelected: (d) => {
                        console.log("Template selecionado:", d);
                      },
                    }),
                  }),
              ],
            }),
          }),
        e.dataSource === "text" &&
          g.jsx(Ke, {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:176:8",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
            "data-component-line": "176",
            "data-component-file": "DataInputStep.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: g.jsx(lt, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:177:10",
              "data-lov-name": "CardContent",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "177",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "CardContent",
              "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
              className: "p-6",
              children: g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:178:12",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                "data-component-line": "178",
                "data-component-file": "DataInputStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-2%22%7D",
                className: "space-y-2",
                children: [
                  g.jsx(za, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:179:14",
                    "data-lov-name": "Label",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "179",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "Label",
                    "data-component-content": "%7B%7D",
                    htmlFor: "textData",
                    children: f("builder.steps.data.labels.paste_area"),
                  }),
                  g.jsx(vo, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:180:14",
                    "data-lov-name": "Textarea",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "180",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "Textarea",
                    "data-component-content":
                      "%7B%22className%22%3A%22resize-none%22%7D",
                    id: "textData",
                    value: n,
                    onChange: (d) => s(d.target.value),
                    placeholder: f(
                      "builder.steps.data.labels.paste_placeholder",
                    ),
                    rows: 12,
                    className: "resize-none",
                  }),
                  n &&
                    g.jsxs("p", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:189:16",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                      "data-component-line": "189",
                      "data-component-file": "DataInputStep.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                      className: "text-xs text-muted-foreground",
                      children: [
                        n.length,
                        " ",
                        f("builder.steps.data.labels.chars"),
                      ],
                    }),
                ],
              }),
            }),
          }),
        e.dataSource === "url" &&
          g.jsx(Ke, {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:199:8",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
            "data-component-line": "199",
            "data-component-file": "DataInputStep.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: g.jsx(lt, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:200:10",
              "data-lov-name": "CardContent",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
              "data-component-line": "200",
              "data-component-file": "DataInputStep.tsx",
              "data-component-name": "CardContent",
              "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
              className: "p-6",
              children: g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:201:12",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                "data-component-line": "201",
                "data-component-file": "DataInputStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-2%22%7D",
                className: "space-y-2",
                children: [
                  g.jsx(za, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:202:14",
                    "data-lov-name": "Label",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "202",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "Label",
                    "data-component-content": "%7B%7D",
                    htmlFor: "urlData",
                    children: f("builder.steps.data.labels.url_input"),
                  }),
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:203:14",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "203",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22relative%22%7D",
                    className: "relative",
                    children: [
                      g.jsx(as, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:204:16",
                        "data-lov-name": "Globe",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                        "data-component-line": "204",
                        "data-component-file": "DataInputStep.tsx",
                        "data-component-name": "Globe",
                        "data-component-content":
                          "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20h-4%20w-4%20text-muted-foreground%22%7D",
                        className:
                          "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
                      }),
                      g.jsx(cn, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:205:16",
                        "data-lov-name": "Input",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                        "data-component-line": "205",
                        "data-component-file": "DataInputStep.tsx",
                        "data-component-name": "Input",
                        "data-component-content":
                          "%7B%22className%22%3A%22pl-10%22%7D",
                        id: "urlData",
                        type: "url",
                        value: o,
                        onChange: (d) => i(d.target.value),
                        placeholder: f(
                          "builder.steps.data.labels.url_placeholder",
                        ),
                        className: "pl-10",
                      }),
                    ],
                  }),
                  g.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx:214:14",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\DataInputStep.tsx",
                    "data-component-line": "214",
                    "data-component-file": "DataInputStep.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22text%22%3A%22Dica%3A%20Certifique-se%20de%20que%20o%20link%20%C3%A9%20p%C3%BAblico%20para%20que%20nossa%20IA%20possa%20ler%20o%20conte%C3%BAdo.%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
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
  gx = () => {
    const {
        formData: e,
        file: a,
        textData: t,
        selectedTemplate: r,
        setSelectedTemplate: n,
        setBlocks: s,
      } = Ra(),
      { t: o } = Ia();
    return g.jsxs("div", {
      "data-lov-id":
        "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:16:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
      "data-component-line": "16",
      "data-component-file": "TemplateSelectionStep.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
      className: "space-y-6",
      children: [
        g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:17:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
          "data-component-line": "17",
          "data-component-file": "TemplateSelectionStep.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
          className: "text-center",
          children: [
            g.jsx("h2", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:18:8",
              "data-lov-name": "h2",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
              "data-component-line": "18",
              "data-component-file": "TemplateSelectionStep.tsx",
              "data-component-name": "h2",
              "data-component-content":
                "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-semibold%20mb-2%22%7D",
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: o("builder.steps.template.title"),
            }),
            g.jsx("p", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:19:8",
              "data-lov-name": "p",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
              "data-component-line": "19",
              "data-component-file": "TemplateSelectionStep.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-muted-foreground%22%7D",
              className: "text-muted-foreground",
              children: o("builder.steps.template.desc"),
            }),
          ],
        }),
        g.jsxs(Ke, {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:26:6",
          "data-lov-name": "Card",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
          "data-component-line": "26",
          "data-component-file": "TemplateSelectionStep.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: [
            g.jsx(Lt, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:27:8",
              "data-lov-name": "CardHeader",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
              "data-component-line": "27",
              "data-component-file": "TemplateSelectionStep.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%7D",
              children: g.jsxs(Mt, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:28:10",
                "data-lov-name": "CardTitle",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                "data-component-line": "28",
                "data-component-file": "TemplateSelectionStep.tsx",
                "data-component-name": "CardTitle",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                className: "flex items-center gap-2",
                children: [
                  g.jsx(Gr, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:29:12",
                    "data-lov-name": "CheckCircle",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                    "data-component-line": "29",
                    "data-component-file": "TemplateSelectionStep.tsx",
                    "data-component-name": "CheckCircle",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-5%20h-5%20text-success%22%7D",
                    className: "w-5 h-5 text-success",
                  }),
                  o("builder.steps.template.preview_title"),
                ],
              }),
            }),
            g.jsx(lt, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:34:8",
              "data-lov-name": "CardContent",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
              "data-component-line": "34",
              "data-component-file": "TemplateSelectionStep.tsx",
              "data-component-name": "CardContent",
              "data-component-content": "%7B%7D",
              children: g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:35:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                "data-component-line": "35",
                "data-component-file": "TemplateSelectionStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-4%20text-sm%22%7D",
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                children: [
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:36:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                    "data-component-line": "36",
                    "data-component-file": "TemplateSelectionStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-3%20bg-muted%2F50%20rounded-lg%22%7D",
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:37:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "37",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%22%7D",
                        className: "font-medium",
                        children: o("builder.steps.template.source_label"),
                      }),
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:38:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "38",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                        className: "text-muted-foreground",
                        children:
                          e.dataSource === "upload"
                            ? a == null
                              ? void 0
                              : a.name
                            : o("builder.steps.data.sources.paste"),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:42:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                    "data-component-line": "42",
                    "data-component-file": "TemplateSelectionStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-3%20bg-muted%2F50%20rounded-lg%22%7D",
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:43:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "43",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%22%7D",
                        className: "font-medium",
                        children: o("builder.steps.template.size_label"),
                      }),
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:44:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "44",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                        className: "text-muted-foreground",
                        children:
                          e.dataSource === "upload"
                            ? `${Math.round(((a == null ? void 0 : a.size) || 0) / 1024)} KB`
                            : `${t.length} chars`,
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:51:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                    "data-component-line": "51",
                    "data-component-file": "TemplateSelectionStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-3%20bg-muted%2F50%20rounded-lg%22%7D",
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:52:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "52",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%22%7D",
                        className: "font-medium",
                        children: o("builder.steps.template.status_label"),
                      }),
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:53:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "53",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-success%22%7D",
                        className: "text-success",
                        children: o("builder.steps.template.status_val"),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:61:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
          "data-component-line": "61",
          "data-component-file": "TemplateSelectionStep.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%7D",
          children: [
            g.jsx("h3", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:62:8",
              "data-lov-name": "h3",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
              "data-component-line": "62",
              "data-component-file": "TemplateSelectionStep.tsx",
              "data-component-name": "h3",
              "data-component-content":
                "%7B%22text%22%3A%22Escolha%20um%20Modelo%22%2C%22className%22%3A%22text-lg%20font-semibold%20mb-4%22%7D",
              className: "text-lg font-semibold mb-4",
              children: "Escolha um Modelo",
            }),
            g.jsx("div", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:63:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
              "data-component-line": "63",
              "data-component-file": "TemplateSelectionStep.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: Sn.map((i) =>
                g.jsxs(
                  Ke,
                  {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:65:12",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                    "data-component-line": "65",
                    "data-component-file": "TemplateSelectionStep.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    className: Ec(
                      "cursor-pointer transition-all duration-300 card-hover border-2",
                      r === i.id
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20 shadow-lg"
                        : "border-border/40",
                    ),
                    onClick: () => {
                      (n(i.id), s(i.defaultBlocks));
                    },
                    children: [
                      g.jsxs(Lt, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:78:14",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "78",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content":
                          "%7B%22className%22%3A%22pb-3%22%7D",
                        className: "pb-3",
                        children: [
                          g.jsx(Mt, {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:79:16",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                            "data-component-line": "79",
                            "data-component-file": "TemplateSelectionStep.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-lg%20font-bold%22%7D",
                            className: "text-lg font-bold",
                            children: i.name,
                          }),
                          g.jsx(yr, {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:80:16",
                            "data-lov-name": "CardDescription",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                            "data-component-line": "80",
                            "data-component-file": "TemplateSelectionStep.tsx",
                            "data-component-name": "CardDescription",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-xs%22%7D",
                            className: "text-xs",
                            children: i.description,
                          }),
                        ],
                      }),
                      g.jsx(lt, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:82:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                        "data-component-line": "82",
                        "data-component-file": "TemplateSelectionStep.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content": "%7B%7D",
                        children: g.jsx("div", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:83:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                          "data-component-line": "83",
                          "data-component-file": "TemplateSelectionStep.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20flex-wrap%20gap-2%22%7D",
                          className: "flex flex-wrap gap-2",
                          children: i.defaultBlocks.map((l, c) =>
                            g.jsx(
                              Fr,
                              {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx:85:20",
                                "data-lov-name": "Badge",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\TemplateSelectionStep.tsx",
                                "data-component-line": "85",
                                "data-component-file":
                                  "TemplateSelectionStep.tsx",
                                "data-component-name": "Badge",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-%5B10px%5D%20uppercase%20font-bold%20tracking-wider%20opacity-70%22%7D",
                                variant: "secondary",
                                className:
                                  "text-[10px] uppercase font-bold tracking-wider opacity-70",
                                children: l.type,
                              },
                              c,
                            ),
                          ),
                        }),
                      }),
                    ],
                  },
                  i.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  _x = () => {
    const { formData: e, setFormData: a } = Ra(),
      { t } = Ia();
    return g.jsxs("div", {
      "data-lov-id":
        "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:16:4",
      "data-lov-name": "div",
      "data-component-path":
        "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
      "data-component-line": "16",
      "data-component-file": "GenerationStep.tsx",
      "data-component-name": "div",
      "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
      className: "space-y-6",
      children: [
        g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:17:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
          "data-component-line": "17",
          "data-component-file": "GenerationStep.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
          className: "text-center",
          children: [
            g.jsx("h2", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:18:8",
              "data-lov-name": "h2",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
              "data-component-line": "18",
              "data-component-file": "GenerationStep.tsx",
              "data-component-name": "h2",
              "data-component-content":
                "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-semibold%20mb-2%22%7D",
              className: "text-xl md:text-2xl font-semibold mb-2",
              children: t("builder.steps.generation.title"),
            }),
            g.jsx("p", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:19:8",
              "data-lov-name": "p",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
              "data-component-line": "19",
              "data-component-file": "GenerationStep.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-muted-foreground%22%7D",
              className: "text-muted-foreground",
              children: t("builder.steps.generation.desc"),
            }),
          ],
        }),
        g.jsx(Ke, {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:25:6",
          "data-lov-name": "Card",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
          "data-component-line": "25",
          "data-component-file": "GenerationStep.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: g.jsxs(lt, {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:26:8",
            "data-lov-name": "CardContent",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
            "data-component-line": "26",
            "data-component-file": "GenerationStep.tsx",
            "data-component-name": "CardContent",
            "data-component-content":
              "%7B%22className%22%3A%22p-6%20space-y-6%22%7D",
            className: "p-6 space-y-6",
            children: [
              g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:27:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                "data-component-line": "27",
                "data-component-file": "GenerationStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:28:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                    "data-component-line": "28",
                    "data-component-file": "GenerationStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: [
                      g.jsxs(za, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:29:14",
                        "data-lov-name": "Label",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                        "data-component-line": "29",
                        "data-component-file": "GenerationStep.tsx",
                        "data-component-name": "Label",
                        "data-component-content": "%7B%22text%22%3A%22*%22%7D",
                        htmlFor: "title",
                        children: [
                          t("builder.steps.generation.form.title_label"),
                          " *",
                        ],
                      }),
                      g.jsx(cn, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:30:14",
                        "data-lov-name": "Input",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                        "data-component-line": "30",
                        "data-component-file": "GenerationStep.tsx",
                        "data-component-name": "Input",
                        "data-component-content": "%7B%7D",
                        id: "title",
                        value: e.title,
                        onChange: (r) =>
                          a((n) => ({ ...n, title: r.target.value })),
                        placeholder: t(
                          "builder.steps.generation.form.title_placeholder",
                        ),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:37:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                    "data-component-line": "37",
                    "data-component-file": "GenerationStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-3%20bg-muted%2F50%20rounded-lg%22%7D",
                    className: "p-3 bg-muted/50 rounded-lg",
                    children: [
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:38:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                        "data-component-line": "38",
                        "data-component-file": "GenerationStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%22%7D",
                        className: "font-medium",
                        children: t("builder.steps.template.status_label"),
                      }),
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:39:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                        "data-component-line": "39",
                        "data-component-file": "GenerationStep.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-success%22%7D",
                        className: "text-success",
                        children: t("builder.steps.template.status_val"),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:41:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                    "data-component-line": "41",
                    "data-component-file": "GenerationStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: [
                      g.jsx(za, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:42:14",
                        "data-lov-name": "Label",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                        "data-component-line": "42",
                        "data-component-file": "GenerationStep.tsx",
                        "data-component-name": "Label",
                        "data-component-content": "%7B%7D",
                        htmlFor: "category",
                        children: t("builder.steps.generation.form.cat_label"),
                      }),
                      g.jsxs(Vc, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:43:14",
                        "data-lov-name": "Select",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                        "data-component-line": "43",
                        "data-component-file": "GenerationStep.tsx",
                        "data-component-name": "Select",
                        "data-component-content": "%7B%7D",
                        value: e.category,
                        onValueChange: (r) => a((n) => ({ ...n, category: r })),
                        children: [
                          g.jsx(Wc, {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:47:16",
                            "data-lov-name": "SelectTrigger",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                            "data-component-line": "47",
                            "data-component-file": "GenerationStep.tsx",
                            "data-component-name": "SelectTrigger",
                            "data-component-content": "%7B%7D",
                            children: g.jsx(zc, {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:48:18",
                              "data-lov-name": "SelectValue",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                              "data-component-line": "48",
                              "data-component-file": "GenerationStep.tsx",
                              "data-component-name": "SelectValue",
                              "data-component-content": "%7B%7D",
                              placeholder: t(
                                "builder.steps.generation.form.cat_placeholder",
                              ),
                            }),
                          }),
                          g.jsxs(Xc, {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:51:16",
                            "data-lov-name": "SelectContent",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                            "data-component-line": "51",
                            "data-component-file": "GenerationStep.tsx",
                            "data-component-name": "SelectContent",
                            "data-component-content": "%7B%7D",
                            children: [
                              g.jsx(Ta, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:52:18",
                                "data-lov-name": "SelectItem",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                                "data-component-line": "52",
                                "data-component-file": "GenerationStep.tsx",
                                "data-component-name": "SelectItem",
                                "data-component-content": "%7B%7D",
                                value: "Executivo",
                                children: t("reports.categories.executive"),
                              }),
                              g.jsx(Ta, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:53:18",
                                "data-lov-name": "SelectItem",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                                "data-component-line": "53",
                                "data-component-file": "GenerationStep.tsx",
                                "data-component-name": "SelectItem",
                                "data-component-content": "%7B%7D",
                                value: "Vendas",
                                children: t("reports.categories.sales"),
                              }),
                              g.jsx(Ta, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:54:18",
                                "data-lov-name": "SelectItem",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                                "data-component-line": "54",
                                "data-component-file": "GenerationStep.tsx",
                                "data-component-name": "SelectItem",
                                "data-component-content": "%7B%7D",
                                value: "Financeiro",
                                children: t("reports.categories.financial"),
                              }),
                              g.jsx(Ta, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:55:18",
                                "data-lov-name": "SelectItem",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                                "data-component-line": "55",
                                "data-component-file": "GenerationStep.tsx",
                                "data-component-name": "SelectItem",
                                "data-component-content": "%7B%7D",
                                value: "Marketing",
                                children: t("reports.categories.marketing"),
                              }),
                              g.jsx(Ta, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:56:18",
                                "data-lov-name": "SelectItem",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                                "data-component-line": "56",
                                "data-component-file": "GenerationStep.tsx",
                                "data-component-name": "SelectItem",
                                "data-component-content": "%7B%7D",
                                value: "Operacional",
                                children: t("reports.categories.operational"),
                              }),
                              g.jsx(Ta, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:57:18",
                                "data-lov-name": "SelectItem",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                                "data-component-line": "57",
                                "data-component-file": "GenerationStep.tsx",
                                "data-component-name": "SelectItem",
                                "data-component-content": "%7B%7D",
                                value: "RH",
                                children: t("reports.categories.rh"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:62:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                "data-component-line": "62",
                "data-component-file": "GenerationStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-2%22%7D",
                className: "space-y-2",
                children: [
                  g.jsx(za, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:63:12",
                    "data-lov-name": "Label",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                    "data-component-line": "63",
                    "data-component-file": "GenerationStep.tsx",
                    "data-component-name": "Label",
                    "data-component-content": "%7B%7D",
                    htmlFor: "description",
                    children: t("builder.steps.generation.form.desc_label"),
                  }),
                  g.jsx(vo, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx:64:12",
                    "data-lov-name": "Textarea",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\GenerationStep.tsx",
                    "data-component-line": "64",
                    "data-component-file": "GenerationStep.tsx",
                    "data-component-name": "Textarea",
                    "data-component-content": "%7B%7D",
                    id: "description",
                    value: e.description,
                    onChange: (r) =>
                      a((n) => ({ ...n, description: r.target.value })),
                    placeholder: t(
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
  Sx = () => {
    const { blocks: e, setBlocks: a, loading: t } = Ra(),
      { t: r } = Ia(),
      n = (o) => {
        a((i) => i.filter((l) => l.id !== o));
      },
      s = (o, i) => {
        const l = o - 1;
        if (l < 0 || l >= e.length) return;
        const c = [...e],
          [p] = c.splice(o, 1);
        (c.splice(l, 0, p), a(c));
      };
    return t && e.length === 0
      ? g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:29:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
          "data-component-line": "29",
          "data-component-file": "BlockEditorStep.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22space-y-6%20py-12%20text-center%22%7D",
          className: "space-y-6 py-12 text-center",
          children: [
            g.jsx("div", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:30:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
              "data-component-line": "30",
              "data-component-file": "BlockEditorStep.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22w-16%20h-16%20border-4%20border-primary%2F30%20border-t-primary%20rounded-full%20animate-spin%20mx-auto%20mb-4%22%7D",
              className:
                "w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4",
            }),
            g.jsx("h2", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:31:8",
              "data-lov-name": "h2",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
              "data-component-line": "31",
              "data-component-file": "BlockEditorStep.tsx",
              "data-component-name": "h2",
              "data-component-content":
                "%7B%22className%22%3A%22text-xl%20font-semibold%22%7D",
              className: "text-xl font-semibold",
              children: r("builder.steps.blocks.loading_title"),
            }),
            g.jsx("p", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:32:8",
              "data-lov-name": "p",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
              "data-component-line": "32",
              "data-component-file": "BlockEditorStep.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-muted-foreground%22%7D",
              className: "text-muted-foreground",
              children: r("builder.steps.blocks.loading_desc"),
            }),
          ],
        })
      : g.jsxs("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:38:4",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
          "data-component-line": "38",
          "data-component-file": "BlockEditorStep.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
          className: "space-y-6",
          children: [
            g.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:39:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
              "data-component-line": "39",
              "data-component-file": "BlockEditorStep.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22text-center%22%7D",
              className: "text-center",
              children: [
                g.jsx("h2", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:40:8",
                  "data-lov-name": "h2",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                  "data-component-line": "40",
                  "data-component-file": "BlockEditorStep.tsx",
                  "data-component-name": "h2",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-semibold%20mb-2%22%7D",
                  className: "text-xl md:text-2xl font-semibold mb-2",
                  children: r("builder.steps.blocks.title"),
                }),
                g.jsx("p", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:41:8",
                  "data-lov-name": "p",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                  "data-component-line": "41",
                  "data-component-file": "BlockEditorStep.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                  className: "text-muted-foreground",
                  children: r("builder.steps.blocks.desc"),
                }),
              ],
            }),
            g.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:46:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
              "data-component-line": "46",
              "data-component-file": "BlockEditorStep.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-4%20gap-6%22%7D",
              className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
              children: [
                g.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:48:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                  "data-component-line": "48",
                  "data-component-file": "BlockEditorStep.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22lg%3Acol-span-3%20space-y-4%22%7D",
                  className: "lg:col-span-3 space-y-4",
                  children: [
                    e.map((o, i) =>
                      g.jsxs(
                        "div",
                        {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:50:12",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                          "data-component-line": "50",
                          "data-component-file": "BlockEditorStep.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22relative%20group%20animate-in%20fade-in%20slide-in-from-bottom-2%20duration-300%22%7D",
                          className:
                            "relative group animate-in fade-in slide-in-from-bottom-2 duration-300",
                          children: [
                            g.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:52:14",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                              "data-component-line": "52",
                              "data-component-file": "BlockEditorStep.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22absolute%20-left-12%20top-0%20bottom-0%20flex%20flex-col%20items-center%20justify-center%20gap-2%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%22%7D",
                              className:
                                "absolute -left-12 top-0 bottom-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                              children: g.jsx(At, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:53:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                "data-component-line": "53",
                                "data-component-file": "BlockEditorStep.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22h-8%20w-8%20p-0%20cursor-grab%20active%3Acursor-grabbing%22%7D",
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "h-8 w-8 p-0 cursor-grab active:cursor-grabbing",
                                onClick: () => {},
                                children: g.jsx(Ic, {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:59:18",
                                  "data-lov-name": "GripVertical",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                  "data-component-line": "59",
                                  "data-component-file": "BlockEditorStep.tsx",
                                  "data-component-name": "GripVertical",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-4%20w-4%20text-muted-foreground%22%7D",
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                              }),
                            }),
                            g.jsxs(Ke, {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:63:14",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                              "data-component-line": "63",
                              "data-component-file": "BlockEditorStep.tsx",
                              "data-component-name": "Card",
                              "data-component-content":
                                "%7B%22className%22%3A%22border-border%2F40%20overflow-hidden%20group%2Fcard%20relative%22%7D",
                              className:
                                "border-border/40 overflow-hidden group/card relative",
                              children: [
                                g.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:64:16",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                  "data-component-line": "64",
                                  "data-component-file": "BlockEditorStep.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22absolute%20top-2%20right-2%20flex%20gap-1%20opacity-0%20group-hover%2Fcard%3Aopacity-100%20transition-opacity%20z-20%22%7D",
                                  className:
                                    "absolute top-2 right-2 flex gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-20",
                                  children: [
                                    g.jsxs(At, {
                                      "data-lov-id":
                                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:65:18",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                      "data-component-line": "65",
                                      "data-component-file":
                                        "BlockEditorStep.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22h-7%20w-7%20p-0%20bg-background%2F80%20backdrop-blur-sm%22%7D",
                                      variant: "outline",
                                      size: "sm",
                                      className:
                                        "h-7 w-7 p-0 bg-background/80 backdrop-blur-sm",
                                      onClick: () => s(i),
                                      disabled: i === 0,
                                      children: [
                                        g.jsx(ns, {
                                          "data-lov-id":
                                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:66:20",
                                          "data-lov-name": "Plus",
                                          "data-component-path":
                                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                          "data-component-line": "66",
                                          "data-component-file":
                                            "BlockEditorStep.tsx",
                                          "data-component-name": "Plus",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22h-3%20w-3%20rotate-45%22%7D",
                                          className: "h-3 w-3 rotate-45",
                                        }),
                                        " ",
                                      ],
                                    }),
                                    g.jsx(At, {
                                      "data-lov-id":
                                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:68:18",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                      "data-component-line": "68",
                                      "data-component-file":
                                        "BlockEditorStep.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22h-7%20w-7%20p-0%20bg-background%2F80%20backdrop-blur-sm%20text-destructive%20hover%3Abg-destructive%2F10%22%7D",
                                      variant: "outline",
                                      size: "sm",
                                      className:
                                        "h-7 w-7 p-0 bg-background/80 backdrop-blur-sm text-destructive hover:bg-destructive/10",
                                      onClick: () => n(o.id),
                                      children: g.jsx(Rc, {
                                        "data-lov-id":
                                          "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:69:20",
                                        "data-lov-name": "Trash2",
                                        "data-component-path":
                                          "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                        "data-component-line": "69",
                                        "data-component-file":
                                          "BlockEditorStep.tsx",
                                        "data-component-name": "Trash2",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22h-3%20w-3%22%7D",
                                        className: "h-3 w-3",
                                      }),
                                    }),
                                  ],
                                }),
                                g.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:73:16",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                  "data-component-line": "73",
                                  "data-component-file": "BlockEditorStep.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22bg-muted%2F5%20p-2%20px-4%20border-b%20border-border%2F20%20flex%20justify-between%20items-center%22%7D",
                                  className:
                                    "bg-muted/5 p-2 px-4 border-b border-border/20 flex justify-between items-center",
                                  children: g.jsx("span", {
                                    "data-lov-id":
                                      "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:74:18",
                                    "data-lov-name": "span",
                                    "data-component-path":
                                      "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                    "data-component-line": "74",
                                    "data-component-file":
                                      "BlockEditorStep.tsx",
                                    "data-component-name": "span",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-%5B10px%5D%20font-bold%20uppercase%20tracking-widest%20text-muted-foreground%2F60%22%7D",
                                    className:
                                      "text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60",
                                    children: o.type,
                                  }),
                                }),
                                g.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:77:16",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                  "data-component-line": "77",
                                  "data-component-file": "BlockEditorStep.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22p-4%20pointer-events-none%20opacity-80%20scale-%5B0.98%5D%22%7D",
                                  className:
                                    "p-4 pointer-events-none opacity-80 scale-[0.98]",
                                  children: g.jsx(go, {
                                    "data-lov-id":
                                      "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:78:19",
                                    "data-lov-name": "DynamicBlockRenderer",
                                    "data-component-path":
                                      "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                    "data-component-line": "78",
                                    "data-component-file":
                                      "BlockEditorStep.tsx",
                                    "data-component-name":
                                      "DynamicBlockRenderer",
                                    "data-component-content": "%7B%7D",
                                    blocks: [o],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        o.id,
                      ),
                    ),
                    g.jsxs(At, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:84:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                      "data-component-line": "84",
                      "data-component-file": "BlockEditorStep.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-full%20border-dashed%20py-8%20border-2%20group%20hover%3Aborder-primary%2F50%20hover%3Abg-primary%2F5%22%7D",
                      variant: "outline",
                      className:
                        "w-full border-dashed py-8 border-2 group hover:border-primary/50 hover:bg-primary/5",
                      children: [
                        g.jsx(ns, {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:85:12",
                          "data-lov-name": "Plus",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                          "data-component-line": "85",
                          "data-component-file": "BlockEditorStep.tsx",
                          "data-component-name": "Plus",
                          "data-component-content":
                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%20group-hover%3Ascale-110%20transition-transform%22%7D",
                          className:
                            "mr-2 h-4 w-4 group-hover:scale-110 transition-transform",
                        }),
                        r("builder.steps.blocks.add_block"),
                      ],
                    }),
                  ],
                }),
                g.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:91:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                  "data-component-line": "91",
                  "data-component-file": "BlockEditorStep.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-4%22%7D",
                  className: "space-y-4",
                  children: [
                    g.jsxs(Ke, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:92:10",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                      "data-component-line": "92",
                      "data-component-file": "BlockEditorStep.tsx",
                      "data-component-name": "Card",
                      "data-component-content": "%7B%7D",
                      children: [
                        g.jsx(Lt, {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:93:12",
                          "data-lov-name": "CardHeader",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                          "data-component-line": "93",
                          "data-component-file": "BlockEditorStep.tsx",
                          "data-component-name": "CardHeader",
                          "data-component-content":
                            "%7B%22className%22%3A%22pb-3%22%7D",
                          className: "pb-3",
                          children: g.jsxs(Mt, {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:94:14",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                            "data-component-line": "94",
                            "data-component-file": "BlockEditorStep.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-base%20flex%20items-center%20gap-2%22%7D",
                            className: "text-base flex items-center gap-2",
                            children: [
                              g.jsx(Pc, {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:95:16",
                                "data-lov-name": "Settings2",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                                "data-component-line": "95",
                                "data-component-file": "BlockEditorStep.tsx",
                                "data-component-name": "Settings2",
                                "data-component-content":
                                  "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                className: "h-4 w-4",
                              }),
                              r("builder.steps.blocks.ai_hint_title"),
                            ],
                          }),
                        }),
                        g.jsx(lt, {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:99:12",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                          "data-component-line": "99",
                          "data-component-file": "BlockEditorStep.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content": "%7B%7D",
                          children: g.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:100:14",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                            "data-component-line": "100",
                            "data-component-file": "BlockEditorStep.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20leading-relaxed%22%7D",
                            className:
                              "text-sm text-muted-foreground leading-relaxed",
                            children: r("builder.steps.blocks.ai_hint_body"),
                          }),
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:106:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                      "data-component-line": "106",
                      "data-component-file": "BlockEditorStep.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-4%20bg-primary%2F5%20rounded-xl%20border%20border-primary%2F10%22%7D",
                      className:
                        "p-4 bg-primary/5 rounded-xl border border-primary/10",
                      children: [
                        g.jsxs("h4", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:107:12",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                          "data-component-line": "107",
                          "data-component-file": "BlockEditorStep.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20font-bold%20text-primary%20mb-2%20flex%20items-center%20gap-2%22%7D",
                          className:
                            "text-sm font-bold text-primary mb-2 flex items-center gap-2",
                          children: [
                            g.jsx(Da, {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:108:14",
                              "data-lov-name": "Sparkles",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                              "data-component-line": "108",
                              "data-component-file": "BlockEditorStep.tsx",
                              "data-component-name": "Sparkles",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                              className: "h-4 w-4",
                            }),
                            r("builder.steps.blocks.auto_mapping_title"),
                          ],
                        }),
                        g.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx:111:12",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\BlockEditorStep.tsx",
                          "data-component-line": "111",
                          "data-component-file": "BlockEditorStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-%5B11px%5D%20text-muted-foreground%22%7D",
                          className: "text-[11px] text-muted-foreground",
                          children: r("builder.steps.blocks.auto_mapping_body"),
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
  Cr = [
    { id: 1, text: "Lendo e estruturando dados brutos...", icon: Mc },
    { id: 2, text: "Cruzando tendências e métricas...", icon: on },
    { id: 3, text: "Identificando gatilhos de crescimento...", icon: xo },
    { id: 4, text: "Redigindo recomendações estratégicas...", icon: wn },
    { id: 5, text: "Finalizando design do relatório...", icon: Da },
  ],
  wx = ({ isProcessing: e }) => {
    const [a, t] = Be.useState(0),
      [r, n] = Be.useState([]);
    return (
      Be.useEffect(() => {
        if (!e) {
          (t(0), n([]));
          return;
        }
        const s = setInterval(() => {
          t((o) =>
            o < Cr.length - 1 ? (n((i) => [...i, Cr[o].id]), o + 1) : o,
          );
        }, 2500);
        return () => clearInterval(s);
      }, [e]),
      e
        ? g.jsx(Ke, {
            "data-lov-id": "src\\components\\ai\\AIProcessingLoader.tsx:45:4",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\components\\ai\\AIProcessingLoader.tsx",
            "data-component-line": "45",
            "data-component-file": "AIProcessingLoader.tsx",
            "data-component-name": "Card",
            "data-component-content":
              "%7B%22className%22%3A%22border-primary%2F20%20bg-primary%2F5%20backdrop-blur-sm%20overflow-hidden%20animate-in%20fade-in%20zoom-in%20duration-300%22%7D",
            className:
              "border-primary/20 bg-primary/5 backdrop-blur-sm overflow-hidden animate-in fade-in zoom-in duration-300",
            children: g.jsx(lt, {
              "data-lov-id": "src\\components\\ai\\AIProcessingLoader.tsx:46:6",
              "data-lov-name": "CardContent",
              "data-component-path":
                "src\\components\\ai\\AIProcessingLoader.tsx",
              "data-component-line": "46",
              "data-component-file": "AIProcessingLoader.tsx",
              "data-component-name": "CardContent",
              "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
              className: "p-6",
              children: g.jsxs("div", {
                "data-lov-id":
                  "src\\components\\ai\\AIProcessingLoader.tsx:47:8",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\ai\\AIProcessingLoader.tsx",
                "data-component-line": "47",
                "data-component-file": "AIProcessingLoader.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20flex-col%20items-center%20justify-center%20space-y-6%22%7D",
                className:
                  "flex flex-col items-center justify-center space-y-6",
                children: [
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\ai\\AIProcessingLoader.tsx:48:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\ai\\AIProcessingLoader.tsx",
                    "data-component-line": "48",
                    "data-component-file": "AIProcessingLoader.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22relative%22%7D",
                    className: "relative",
                    children: [
                      g.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ai\\AIProcessingLoader.tsx:49:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ai\\AIProcessingLoader.tsx",
                        "data-component-line": "49",
                        "data-component-file": "AIProcessingLoader.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22absolute%20inset-0%20bg-primary%2F20%20rounded-full%20animate-ping%22%7D",
                        className:
                          "absolute inset-0 bg-primary/20 rounded-full animate-ping",
                      }),
                      g.jsx("div", {
                        "data-lov-id":
                          "src\\components\\ai\\AIProcessingLoader.tsx:50:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\components\\ai\\AIProcessingLoader.tsx",
                        "data-component-line": "50",
                        "data-component-file": "AIProcessingLoader.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22relative%20bg-primary%20rounded-full%20p-4%22%7D",
                        className: "relative bg-primary rounded-full p-4",
                        children: g.jsx(wn, {
                          "data-lov-id":
                            "src\\components\\ai\\AIProcessingLoader.tsx:51:14",
                          "data-lov-name": "Brain",
                          "data-component-path":
                            "src\\components\\ai\\AIProcessingLoader.tsx",
                          "data-component-line": "51",
                          "data-component-file": "AIProcessingLoader.tsx",
                          "data-component-name": "Brain",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-8%20w-8%20text-white%20animate-pulse%22%7D",
                          className: "h-8 w-8 text-white animate-pulse",
                        }),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\ai\\AIProcessingLoader.tsx:55:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\ai\\AIProcessingLoader.tsx",
                    "data-component-line": "55",
                    "data-component-file": "AIProcessingLoader.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-center%20space-y-2%22%7D",
                    className: "text-center space-y-2",
                    children: [
                      g.jsx("h3", {
                        "data-lov-id":
                          "src\\components\\ai\\AIProcessingLoader.tsx:56:12",
                        "data-lov-name": "h3",
                        "data-component-path":
                          "src\\components\\ai\\AIProcessingLoader.tsx",
                        "data-component-line": "56",
                        "data-component-file": "AIProcessingLoader.tsx",
                        "data-component-name": "h3",
                        "data-component-content":
                          "%7B%22text%22%3A%22A%20Magia%20est%C3%A1%20Acontecendo%22%2C%22className%22%3A%22text-lg%20font-bold%20text-foreground%22%7D",
                        className: "text-lg font-bold text-foreground",
                        children: "A Magia está Acontecendo",
                      }),
                      g.jsx("p", {
                        "data-lov-id":
                          "src\\components\\ai\\AIProcessingLoader.tsx:57:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\components\\ai\\AIProcessingLoader.tsx",
                        "data-component-line": "57",
                        "data-component-file": "AIProcessingLoader.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22text%22%3A%22Nossa%20intelig%C3%AAncia%20est%C3%A1%20transformando%20seus%20dados%20em%20um%20relat%C3%B3rio%20profissional%20de%20elite.%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20max-w-xs%20mx-auto%22%7D",
                        className:
                          "text-sm text-muted-foreground max-w-xs mx-auto",
                        children:
                          "Nossa inteligência está transformando seus dados em um relatório profissional de elite.",
                      }),
                    ],
                  }),
                  g.jsx("div", {
                    "data-lov-id":
                      "src\\components\\ai\\AIProcessingLoader.tsx:62:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\ai\\AIProcessingLoader.tsx",
                    "data-component-line": "62",
                    "data-component-file": "AIProcessingLoader.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-full%20space-y-4%20max-w-sm%22%7D",
                    className: "w-full space-y-4 max-w-sm",
                    children: Cr.map((s, o) => {
                      const i = r.includes(s.id),
                        l = o === a;
                      return g.jsxs(
                        "div",
                        {
                          "data-lov-id":
                            "src\\components\\ai\\AIProcessingLoader.tsx:68:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\components\\ai\\AIProcessingLoader.tsx",
                          "data-component-line": "68",
                          "data-component-file": "AIProcessingLoader.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          className: `flex items-center gap-3 transition-all duration-500 ${l ? "translate-x-2" : i ? "opacity-60" : "opacity-30"}`,
                          children: [
                            i
                              ? g.jsx(Oc, {
                                  "data-lov-id":
                                    "src\\components\\ai\\AIProcessingLoader.tsx:75:20",
                                  "data-lov-name": "CheckCircle2",
                                  "data-component-path":
                                    "src\\components\\ai\\AIProcessingLoader.tsx",
                                  "data-component-line": "75",
                                  "data-component-file":
                                    "AIProcessingLoader.tsx",
                                  "data-component-name": "CheckCircle2",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-5%20w-5%20text-success%20fill-success%2F10%22%7D",
                                  className:
                                    "h-5 w-5 text-success fill-success/10",
                                })
                              : l
                                ? g.jsx(Lc, {
                                    "data-lov-id":
                                      "src\\components\\ai\\AIProcessingLoader.tsx:77:20",
                                    "data-lov-name": "Loader2",
                                    "data-component-path":
                                      "src\\components\\ai\\AIProcessingLoader.tsx",
                                    "data-component-line": "77",
                                    "data-component-file":
                                      "AIProcessingLoader.tsx",
                                    "data-component-name": "Loader2",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-5%20w-5%20text-primary%20animate-spin%22%7D",
                                    className:
                                      "h-5 w-5 text-primary animate-spin",
                                  })
                                : g.jsx(s.icon, {
                                    "data-lov-id":
                                      "src\\components\\ai\\AIProcessingLoader.tsx:79:20",
                                    "data-lov-name": "step.icon",
                                    "data-component-path":
                                      "src\\components\\ai\\AIProcessingLoader.tsx",
                                    "data-component-line": "79",
                                    "data-component-file":
                                      "AIProcessingLoader.tsx",
                                    "data-component-name": "step.icon",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-5%20w-5%20text-muted-foreground%22%7D",
                                    className: "h-5 w-5 text-muted-foreground",
                                  }),
                            g.jsx("span", {
                              "data-lov-id":
                                "src\\components\\ai\\AIProcessingLoader.tsx:81:18",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\components\\ai\\AIProcessingLoader.tsx",
                              "data-component-line": "81",
                              "data-component-file": "AIProcessingLoader.tsx",
                              "data-component-name": "span",
                              "data-component-content": "%7B%7D",
                              className: `text-sm ${l ? "font-bold text-primary" : "text-muted-foreground"}`,
                              children: s.text,
                            }),
                          ],
                        },
                        s.id,
                      );
                    }),
                  }),
                  g.jsx("div", {
                    "data-lov-id":
                      "src\\components\\ai\\AIProcessingLoader.tsx:89:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\ai\\AIProcessingLoader.tsx",
                    "data-component-line": "89",
                    "data-component-file": "AIProcessingLoader.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-full%20bg-muted%20h-1%20rounded-full%20overflow-hidden%22%7D",
                    className:
                      "w-full bg-muted h-1 rounded-full overflow-hidden",
                    children: g.jsx("div", {
                      "data-lov-id":
                        "src\\components\\ai\\AIProcessingLoader.tsx:90:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\components\\ai\\AIProcessingLoader.tsx",
                      "data-component-line": "90",
                      "data-component-file": "AIProcessingLoader.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22bg-primary%20h-full%20transition-all%20duration-1000%20ease-out%22%7D",
                      className:
                        "bg-primary h-full transition-all duration-1000 ease-out",
                      style: { width: `${((a + 1) / Cr.length) * 100}%` },
                    }),
                  }),
                ],
              }),
            }),
          })
        : null
    );
  },
  Tx = ({ onConfirm: e }) => {
    var m;
    const {
        formData: a,
        file: t,
        textData: r,
        selectedTemplate: n,
        loading: s,
        aiResult: o,
        diagnosticResult: i,
        analysisError: l,
        blocks: c,
      } = Ra(),
      { t: p } = Ia();
    if (o || (c && c.length > 0)) {
      const f = i
          ? {
              id: "preview-diag",
              reportId: "preview-report",
              createdAt: new Date().toISOString(),
              ...i.diagnostic,
            }
          : null,
        h = i
          ? {
              id: "preview-prio",
              diagnosticId: "preview-diag",
              createdAt: new Date().toISOString(),
              status: "suggested",
              ...i.suggestedPriority,
            }
          : null;
      return g.jsxs("div", {
        "data-lov-id":
          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:45:6",
        "data-lov-name": "div",
        "data-component-path":
          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
        "data-component-line": "45",
        "data-component-file": "PreviewStep.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-8%22%7D",
        className: "space-y-8",
        children: [
          g.jsxs("div", {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:47:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
            "data-component-line": "47",
            "data-component-file": "PreviewStep.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22text-center%22%7D",
            className: "text-center",
            children: [
              g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:48:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "48",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22inline-flex%20items-center%20gap-2%20bg-primary%2F10%20text-primary%20px-4%20py-1.5%20rounded-full%20text-sm%20font-medium%20mb-4%22%7D",
                className:
                  "inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4",
                children: [
                  g.jsx(Da, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:49:12",
                    "data-lov-name": "Sparkles",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "49",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "Sparkles",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                    className: "w-4 h-4",
                  }),
                  p("builder.steps.preview.ai_badge"),
                ],
              }),
              g.jsx("h2", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:53:10",
                "data-lov-name": "h2",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "53",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "h2",
                "data-component-content":
                  "%7B%22className%22%3A%22text-2xl%20font-bold%20mb-2%22%7D",
                className: "text-2xl font-bold mb-2",
                children: a.title || p("builder.steps.preview.title"),
              }),
              a.category &&
                g.jsx(Fr, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:55:12",
                  "data-lov-name": "Badge",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "55",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "Badge",
                  "data-component-content": "%7B%7D",
                  variant: "secondary",
                  children: a.category,
                }),
            ],
          }),
          (o == null ? void 0 : o.summary) &&
            g.jsxs(Ke, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:61:10",
              "data-lov-name": "Card",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
              "data-component-line": "61",
              "data-component-file": "PreviewStep.tsx",
              "data-component-name": "Card",
              "data-component-content":
                "%7B%22className%22%3A%22border-primary%2F20%20bg-primary%2F5%22%7D",
              className: "border-primary/20 bg-primary/5",
              children: [
                g.jsx(Lt, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:62:12",
                  "data-lov-name": "CardHeader",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "62",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "CardHeader",
                  "data-component-content":
                    "%7B%22className%22%3A%22pb-3%22%7D",
                  className: "pb-3",
                  children: g.jsxs(Mt, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:63:14",
                    "data-lov-name": "CardTitle",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "63",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "CardTitle",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-lg%20flex%20items-center%20gap-2%22%7D",
                    className: "text-lg flex items-center gap-2",
                    children: [
                      g.jsx(sn, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:64:16",
                        "data-lov-name": "Lightbulb",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "64",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "Lightbulb",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-5%20h-5%20text-primary%22%7D",
                        className: "w-5 h-5 text-primary",
                      }),
                      p("report_detail.content.executive_summary"),
                    ],
                  }),
                }),
                g.jsx(lt, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:68:12",
                  "data-lov-name": "CardContent",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "68",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content": "%7B%7D",
                  children: g.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:69:14",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "69",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-sm%20leading-relaxed%20text-foreground%2F90%22%7D",
                    className: "text-sm leading-relaxed text-foreground/90",
                    children: o.summary,
                  }),
                }),
              ],
            }),
          g.jsx("div", {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:75:8",
            "data-lov-name": "div",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
            "data-component-line": "75",
            "data-component-file": "PreviewStep.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22animate-in%20fade-in%20slide-in-from-bottom-4%20duration-500%20space-y-8%22%7D",
            className:
              "animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8",
            children: g.jsx(go, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:76:10",
              "data-lov-name": "DynamicBlockRenderer",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
              "data-component-line": "76",
              "data-component-file": "PreviewStep.tsx",
              "data-component-name": "DynamicBlockRenderer",
              "data-component-content": "%7B%7D",
              blocks: c,
            }),
          }),
          f &&
            h &&
            g.jsxs("div", {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:81:10",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
              "data-component-line": "81",
              "data-component-file": "PreviewStep.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22pt-8%20border-t%20space-y-6%20animate-in%20fade-in%20slide-in-from-bottom-6%20duration-700%20delay-300%22%7D",
              className:
                "pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300",
              children: [
                g.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:82:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "82",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    g.jsx(on, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:83:14",
                      "data-lov-name": "Zap",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "83",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "Zap",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%20fill-primary%2F20%22%7D",
                      className: "h-5 w-5 text-primary fill-primary/20",
                    }),
                    g.jsx("h3", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:84:14",
                      "data-lov-name": "h3",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "84",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "h3",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-lg%20font-bold%20tracking-tight%22%7D",
                      className: "text-lg font-bold tracking-tight",
                      children: p("builder.steps.preview.diagnostic_title"),
                    }),
                  ],
                }),
                g.jsx($c, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:87:12",
                  "data-lov-name": "DiagnosticSection",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "87",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "DiagnosticSection",
                  "data-component-content": "%7B%7D",
                  diagnostic: f,
                }),
                g.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:89:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "89",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-4%22%7D",
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: [
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:90:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "90",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20flex-col%20justify-center%20space-y-2%20p-4%22%7D",
                      className: "flex flex-col justify-center space-y-2 p-4",
                      children: [
                        g.jsx("h4", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:91:16",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                          "data-component-line": "91",
                          "data-component-file": "PreviewStep.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-bold%20text-sm%20uppercase%20tracking-wider%20text-muted-foreground%22%7D",
                          className:
                            "font-bold text-sm uppercase tracking-wider text-muted-foreground",
                          children: p(
                            "builder.steps.preview.recommended_priority",
                          ),
                        }),
                        g.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:92:16",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                          "data-component-line": "92",
                          "data-component-file": "PreviewStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                          className: "text-sm text-muted-foreground",
                          children: p(
                            "builder.steps.preview.recommended_priority_desc",
                          ),
                        }),
                      ],
                    }),
                    g.jsx(Kc, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:96:14",
                      "data-lov-name": "PriorityCard",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "96",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "PriorityCard",
                      "data-component-content": "%7B%7D",
                      priority: h,
                    }),
                  ],
                }),
              ],
            }),
          g.jsx(Ke, {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:102:8",
            "data-lov-name": "Card",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
            "data-component-line": "102",
            "data-component-file": "PreviewStep.tsx",
            "data-component-name": "Card",
            "data-component-content":
              "%7B%22className%22%3A%22mt-12%20bg-muted%2F30%20border-dashed%22%7D",
            className: "mt-12 bg-muted/30 border-dashed",
            children: g.jsxs(lt, {
              "data-lov-id":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:103:10",
              "data-lov-name": "CardContent",
              "data-component-path":
                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
              "data-component-line": "103",
              "data-component-file": "PreviewStep.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22p-6%20flex%20flex-col%20sm%3Aflex-row%20items-center%20gap-4%20justify-between%22%7D",
              className:
                "p-6 flex flex-col sm:flex-row items-center gap-4 justify-between",
              children: [
                g.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:104:12",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "104",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "div",
                  "data-component-content": "%7B%7D",
                  children: [
                    g.jsx("p", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:105:14",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "105",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22font-medium%22%7D",
                      className: "font-medium",
                      children: p("builder.steps.preview.save_card_title"),
                    }),
                    g.jsx("p", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:106:14",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "106",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                      className: "text-sm text-muted-foreground",
                      children: p("builder.steps.preview.save_card_desc"),
                    }),
                  ],
                }),
                g.jsx(At, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:108:12",
                  "data-lov-name": "Button",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "108",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "Button",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-full%20sm%3Aw-auto%22%7D",
                  onClick: e,
                  disabled: s,
                  size: "lg",
                  className: "w-full sm:w-auto",
                  children: p(
                    s
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
    return s && !o
      ? g.jsx("div", {
          "data-lov-id":
            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:120:6",
          "data-lov-name": "div",
          "data-component-path":
            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
          "data-component-line": "120",
          "data-component-file": "PreviewStep.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22max-w-md%20mx-auto%20py-12%22%7D",
          className: "max-w-md mx-auto py-12",
          children: g.jsx(wx, {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:121:8",
            "data-lov-name": "AIProcessingLoader",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
            "data-component-line": "121",
            "data-component-file": "PreviewStep.tsx",
            "data-component-name": "AIProcessingLoader",
            "data-component-content": "%7B%7D",
            isProcessing: s,
          }),
        })
      : l
        ? g.jsxs("div", {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:130:6",
            "data-lov-name": "div",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
            "data-component-line": "130",
            "data-component-file": "PreviewStep.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: [
              g.jsx(Ke, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:131:8",
                "data-lov-name": "Card",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "131",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "Card",
                "data-component-content":
                  "%7B%22className%22%3A%22border-destructive%2F30%20bg-destructive%2F5%22%7D",
                className: "border-destructive/30 bg-destructive/5",
                children: g.jsxs(lt, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:132:10",
                  "data-lov-name": "CardContent",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "132",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22p-6%20flex%20items-start%20gap-3%22%7D",
                  className: "p-6 flex items-start gap-3",
                  children: [
                    g.jsx(Uc, {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:133:12",
                      "data-lov-name": "AlertCircle",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "133",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "AlertCircle",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-6%20h-6%20text-destructive%20mt-0.5%20flex-shrink-0%22%7D",
                      className:
                        "w-6 h-6 text-destructive mt-0.5 flex-shrink-0",
                    }),
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:134:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                      "data-component-line": "134",
                      "data-component-file": "PreviewStep.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        g.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:135:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                          "data-component-line": "135",
                          "data-component-file": "PreviewStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-semibold%20text-destructive%22%7D",
                          className: "font-semibold text-destructive",
                          children: p("common.error_title"),
                        }),
                        g.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:136:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                          "data-component-line": "136",
                          "data-component-file": "PreviewStep.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mt-1%22%7D",
                          className: "text-sm text-muted-foreground mt-1",
                          children: l,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              g.jsx(At, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:140:8",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "140",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22w-full%22%7D",
                onClick: e,
                variant: "outline",
                className: "w-full",
                children: p("common.back"),
              }),
            ],
          })
        : g.jsxs("div", {
            "data-lov-id":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:149:4",
            "data-lov-name": "div",
            "data-component-path":
              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
            "data-component-line": "149",
            "data-component-file": "PreviewStep.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
            className: "space-y-6",
            children: [
              g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:150:6",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "150",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22text-center%22%7D",
                className: "text-center",
                children: [
                  g.jsx("h2", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:151:8",
                    "data-lov-name": "h2",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "151",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xl%20md%3Atext-2xl%20font-semibold%20mb-2%22%7D",
                    className: "text-xl md:text-2xl font-semibold mb-2",
                    children: p("builder.steps.preview.title"),
                  }),
                  g.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:152:8",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "152",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                    className: "text-muted-foreground",
                    children: p("builder.steps.preview.desc"),
                  }),
                ],
              }),
              g.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:155:6",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "155",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: [
                  g.jsxs(Ke, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:156:8",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "156",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      g.jsx(Lt, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:157:10",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "157",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: g.jsx(Mt, {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:157:22",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                          "data-component-line": "157",
                          "data-component-file": "PreviewStep.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-lg%22%7D",
                          className: "text-lg",
                          children: p("report_detail.sidebar.info_title"),
                        }),
                      }),
                      g.jsxs(lt, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:158:10",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "158",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: [
                          g.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:159:12",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "159",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:159:17",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "159",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: p(
                                  "builder.steps.generation.form.title_label",
                                ),
                              }),
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:159:126",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "159",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22font-medium%22%7D",
                                className: "font-medium",
                                children: a.title || "—",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:160:12",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "160",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:160:17",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "160",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: p(
                                  "builder.steps.generation.form.cat_label",
                                ),
                              }),
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:160:124",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "160",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%7D",
                                children: a.category || "—",
                              }),
                            ],
                          }),
                          g.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:161:12",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "161",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:161:17",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "161",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: p("builder.sidebar.ai_will_do.title"),
                              }),
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:161:117",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "161",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%7D",
                                children:
                                  ((m = Sn.find((f) => f.id === n)) == null
                                    ? void 0
                                    : m.name) || "—",
                              }),
                            ],
                          }),
                          a.description &&
                            g.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:162:37",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                              "data-component-line": "162",
                              "data-component-file": "PreviewStep.tsx",
                              "data-component-name": "div",
                              "data-component-content": "%7B%7D",
                              children: [
                                g.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:162:42",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                  "data-component-line": "162",
                                  "data-component-file": "PreviewStep.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: p(
                                    "builder.steps.generation.form.desc_label",
                                  ),
                                }),
                                g.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:162:150",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                  "data-component-line": "162",
                                  "data-component-file": "PreviewStep.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%22%7D",
                                  className: "text-sm",
                                  children: a.description,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                  g.jsxs(Ke, {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:166:8",
                    "data-lov-name": "Card",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "166",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "Card",
                    "data-component-content": "%7B%7D",
                    children: [
                      g.jsx(Lt, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:167:10",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "167",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: g.jsx(Mt, {
                          "data-lov-id":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:167:22",
                          "data-lov-name": "CardTitle",
                          "data-component-path":
                            "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                          "data-component-line": "167",
                          "data-component-file": "PreviewStep.tsx",
                          "data-component-name": "CardTitle",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-lg%22%7D",
                          className: "text-lg",
                          children: p("builder.steps.template.preview_title"),
                        }),
                      }),
                      g.jsxs(lt, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:168:10",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "168",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: [
                          g.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:169:12",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "169",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:169:17",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "169",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                className:
                                  "text-sm font-medium text-muted-foreground",
                                children: p(
                                  "builder.steps.template.source_label",
                                ),
                              }),
                              g.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:169:120",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                "data-component-line": "169",
                                "data-component-file": "PreviewStep.tsx",
                                "data-component-name": "p",
                                "data-component-content": "%7B%7D",
                                children:
                                  a.dataSource === "upload"
                                    ? p("builder.steps.data.sources.upload")
                                    : p("builder.steps.data.sources.paste"),
                              }),
                            ],
                          }),
                          t &&
                            g.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:170:21",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                              "data-component-line": "170",
                              "data-component-file": "PreviewStep.tsx",
                              "data-component-name": "div",
                              "data-component-content": "%7B%7D",
                              children: [
                                g.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:170:26",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                  "data-component-line": "170",
                                  "data-component-file": "PreviewStep.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: p("common.active"),
                                }),
                                g.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:170:107",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                  "data-component-line": "170",
                                  "data-component-file": "PreviewStep.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%22%7D",
                                  className: "text-sm",
                                  children: t.name,
                                }),
                              ],
                            }),
                          r &&
                            g.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:171:25",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                              "data-component-line": "171",
                              "data-component-file": "PreviewStep.tsx",
                              "data-component-name": "div",
                              "data-component-content": "%7B%7D",
                              children: [
                                g.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:171:30",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                  "data-component-line": "171",
                                  "data-component-file": "PreviewStep.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%20font-medium%20text-muted-foreground%22%7D",
                                  className:
                                    "text-sm font-medium text-muted-foreground",
                                  children: p(
                                    "builder.steps.data.labels.chars",
                                  ),
                                }),
                                g.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:171:129",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                  "data-component-line": "171",
                                  "data-component-file": "PreviewStep.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%22%7D",
                                  className: "text-sm",
                                  children: r.length,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsx(Ke, {
                "data-lov-id":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:176:6",
                "data-lov-name": "Card",
                "data-component-path":
                  "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                "data-component-line": "176",
                "data-component-file": "PreviewStep.tsx",
                "data-component-name": "Card",
                "data-component-content":
                  "%7B%22className%22%3A%22bg-gradient-to-r%20from-primary%2F5%20to-primary%2F10%20border-primary%2F20%22%7D",
                className:
                  "bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20",
                children: g.jsx(lt, {
                  "data-lov-id":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:177:8",
                  "data-lov-name": "CardContent",
                  "data-component-path":
                    "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                  "data-component-line": "177",
                  "data-component-file": "PreviewStep.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content": "%7B%22className%22%3A%22p-6%22%7D",
                  className: "p-6",
                  children: g.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:178:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                    "data-component-line": "178",
                    "data-component-file": "PreviewStep.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-start%20gap-3%22%7D",
                    className: "flex items-start gap-3",
                    children: [
                      g.jsx(Da, {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:179:12",
                        "data-lov-name": "Sparkles",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "179",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "Sparkles",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-6%20h-6%20text-primary%20mt-0.5%20flex-shrink-0%22%7D",
                        className: "w-6 h-6 text-primary mt-0.5 flex-shrink-0",
                      }),
                      g.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:180:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                        "data-component-line": "180",
                        "data-component-file": "PreviewStep.tsx",
                        "data-component-name": "div",
                        "data-component-content": "%7B%7D",
                        children: [
                          g.jsx("h4", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:181:14",
                            "data-lov-name": "h4",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "181",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "h4",
                            "data-component-content":
                              "%7B%22className%22%3A%22font-semibold%20text-primary%20mb-2%22%7D",
                            className: "font-semibold text-primary mb-2",
                            children: p("builder.steps.preview.ai_engine"),
                          }),
                          g.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:182:14",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "182",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mb-4%22%7D",
                            className: "text-sm text-muted-foreground mb-4",
                            children: p(
                              "builder.steps.preview.ai_processing_desc",
                            ),
                          }),
                          g.jsx(At, {
                            "data-lov-id":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:185:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                            "data-component-line": "185",
                            "data-component-file": "PreviewStep.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-full%20md%3Aw-auto%22%7D",
                            onClick: e,
                            disabled: s,
                            className: "w-full md:w-auto",
                            size: "lg",
                            children: s
                              ? g.jsxs(g.Fragment, {
                                  children: [
                                    g.jsx("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:187:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                      "data-component-line": "187",
                                      "data-component-file": "PreviewStep.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20rounded-full%20border-2%20border-white%20border-t-transparent%20animate-spin%20mr-2%22%7D",
                                      className:
                                        "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2",
                                    }),
                                    p("builder.steps.preview.cta_loading"),
                                  ],
                                })
                              : g.jsxs(g.Fragment, {
                                  children: [
                                    g.jsx(on, {
                                      "data-lov-id":
                                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx:189:20",
                                      "data-lov-name": "Zap",
                                      "data-component-path":
                                        "src\\pages\\app\\components\\report-builder\\PreviewStep.tsx",
                                      "data-component-line": "189",
                                      "data-component-file": "PreviewStep.tsx",
                                      "data-component-name": "Zap",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22mr-2%20h-5%20w-5%22%7D",
                                      className: "mr-2 h-5 w-5",
                                    }),
                                    p("builder.steps.preview.cta_initial"),
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
  Ex = () => {
    const [e] = bc(),
      a = Cc(),
      { toast: t } = uo(),
      { t: r } = Ia(),
      n = [
        {
          title: r("builder.steps.summary.data.title"),
          description: r("builder.steps.summary.data.desc"),
          icon: jc,
          key: "data",
        },
        {
          title: r("builder.steps.summary.model.title"),
          description: r("builder.steps.summary.model.desc"),
          icon: wn,
          key: "model",
        },
        {
          title: r("builder.steps.summary.blocks.title"),
          description: r("builder.steps.summary.blocks.desc"),
          icon: Da,
          key: "blocks",
        },
        {
          title: r("builder.steps.summary.generation.title"),
          description: r("builder.steps.summary.generation.desc"),
          icon: ho,
          key: "generation",
        },
        {
          title: r("builder.steps.summary.final.title"),
          description: r("builder.steps.summary.final.desc"),
          icon: Hc,
          key: "final",
        },
      ],
      {
        step: s,
        setStep: o,
        selectedTemplate: i,
        setSelectedTemplate: l,
        formData: c,
        setFormData: p,
        file: m,
        textData: f,
        urlData: h,
        loading: x,
        setLoading: d,
        setParsedData: u,
        aiResult: A,
        diagnosticResult: B,
        setAnalysisError: w,
        blocks: M,
        extractedKPIs: H,
        enrichedDiagnostic: U,
        runAIAnalysis: k,
      } = Ra();
    (yc(),
      Be.useEffect(() => {
        const N = e.get("template");
        if (N) {
          l(N);
          const X = Sn.find((ae) => ae.id === N);
          X && p((ae) => ({ ...ae, category: X.category, title: X.name }));
        }
      }, [e, l, p]));
    const S = async () => {
        if (s === 1) {
          if (c.dataSource === "upload" && !m) {
            t({
              title: r("builder.toasts.data_required_title"),
              description: r("builder.toasts.upload_required_desc"),
              variant: "destructive",
            });
            return;
          }
          if (c.dataSource === "text" && !f.trim()) {
            t({
              title: r("builder.toasts.data_required_title"),
              description: r("builder.toasts.text_required_desc"),
              variant: "destructive",
            });
            return;
          }
          if (c.dataSource === "url" && (!h.trim() || !h.startsWith("http"))) {
            t({
              title: r("builder.toasts.data_required_title"),
              description: r("builder.toasts.url_required_desc"),
              variant: "destructive",
            });
            return;
          }
        }
        if (s === 2) {
          if (!i) {
            t({
              title: r("builder.toasts.select_template_title"),
              description: r("builder.toasts.select_template_desc"),
              variant: "destructive",
            });
            return;
          }
          (o(s + 1), k());
          return;
        }
        if (s === 4 && !c.title.trim()) {
          t({
            title: r("builder.toasts.title_required_title"),
            description: r("builder.toasts.title_required_desc"),
            variant: "destructive",
          });
          return;
        }
        o(s + 1);
      },
      _ = () => {
        o(s - 1);
      },
      I = async () => {
        d(!0);
        try {
          const {
            data: { user: N },
          } = await Vt.auth.getUser();
          if (!N) throw new Error("Usuário não autenticado");
          const X = await c0(
            {
              title: c.title,
              description: c.description,
              category: c.category,
              template_id: i,
              blocks: M,
              status: "completed",
            },
            H,
            U || (B == null ? void 0 : B.diagnostic),
            N.id,
          );
          (t({
            title: r("builder.toasts.save_success_title"),
            description: `${r("builder.toasts.save_success_desc")} (${X.metricsCount} métricas extraídas, ${X.challengeCreated ? "desafio criado" : "desafio atualizado"})`,
          }),
            a("/app"));
        } catch (N) {
          t({
            title: r("builder.errors.save_title"),
            description:
              (N == null ? void 0 : N.message) ||
              r("builder.errors.save_generic"),
            variant: "destructive",
          });
        } finally {
          d(!1);
        }
      },
      R = (s / 5) * 100;
    return g.jsxs("div", {
      "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:151:4",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
      "data-component-line": "151",
      "data-component-file": "ReportBuilder.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22min-h-screen%20bg-gradient-subtle%20flex%20flex-col%22%7D",
      className: "min-h-screen bg-gradient-subtle flex flex-col",
      children: [
        g.jsxs("header", {
          "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:153:6",
          "data-lov-name": "header",
          "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
          "data-component-line": "153",
          "data-component-file": "ReportBuilder.tsx",
          "data-component-name": "header",
          "data-component-content":
            "%7B%22className%22%3A%22sticky%20top-0%20z-50%20bg-background%2F95%20backdrop-blur%20border-b%22%7D",
          className:
            "sticky top-0 z-50 bg-background/95 backdrop-blur border-b",
          children: [
            g.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:154:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
              "data-component-line": "154",
              "data-component-file": "ReportBuilder.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22container%20mx-auto%20px-4%20h-16%20flex%20items-center%20justify-between%22%7D",
              className:
                "container mx-auto px-4 h-16 flex items-center justify-between",
              children: [
                g.jsxs(At, {
                  "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:155:10",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                  "data-component-line": "155",
                  "data-component-file": "ReportBuilder.tsx",
                  "data-component-name": "Button",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  variant: "ghost",
                  size: "sm",
                  onClick: () => a("/app"),
                  className: "flex items-center gap-2",
                  children: [
                    g.jsx(ss, {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:161:12",
                      "data-lov-name": "ArrowLeft",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "161",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "ArrowLeft",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                      className: "h-4 w-4",
                    }),
                    g.jsx("span", {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:162:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "162",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22hidden%20sm%3Ainline%22%7D",
                      className: "hidden sm:inline",
                      children: r("common.back"),
                    }),
                  ],
                }),
                g.jsx("h1", {
                  "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:164:10",
                  "data-lov-name": "h1",
                  "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                  "data-component-line": "164",
                  "data-component-file": "ReportBuilder.tsx",
                  "data-component-name": "h1",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-lg%20md%3Atext-xl%20font-semibold%22%7D",
                  className: "text-lg md:text-xl font-semibold",
                  children: r("builder.title"),
                }),
                g.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:165:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                  "data-component-line": "165",
                  "data-component-file": "ReportBuilder.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%22%7D",
                  className: "flex items-center gap-2 text-sm",
                  children: [
                    g.jsx("span", {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:166:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "166",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22hidden%20sm%3Ainline%20text-muted-foreground%22%7D",
                      className: "hidden sm:inline text-muted-foreground",
                      children: r("builder.step_indicator.prefix"),
                    }),
                    g.jsx("span", {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:167:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "167",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22font-medium%22%7D",
                      className: "font-medium",
                      children: r("builder.step_indicator.value", {
                        current: s,
                        total: 5,
                      }),
                    }),
                  ],
                }),
              ],
            }),
            g.jsx("div", {
              "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:170:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
              "data-component-line": "170",
              "data-component-file": "ReportBuilder.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22h-1%20bg-muted%22%7D",
              className: "h-1 bg-muted",
              children: g.jsx("div", {
                "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:171:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                "data-component-line": "171",
                "data-component-file": "ReportBuilder.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22h-full%20bg-primary%20transition-all%20duration-300%20ease-out%22%7D",
                className:
                  "h-full bg-primary transition-all duration-300 ease-out",
                style: { width: `${R}%` },
              }),
            }),
          ],
        }),
        g.jsx("div", {
          "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:175:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
          "data-component-line": "175",
          "data-component-file": "ReportBuilder.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex-1%20flex%20overflow-hidden%22%7D",
          className: "flex-1 flex overflow-hidden",
          children: g.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:176:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
            "data-component-line": "176",
            "data-component-file": "ReportBuilder.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20flex-1%20gap-0%20overflow-hidden%22%7D",
            className: "flex flex-1 gap-0 overflow-hidden",
            children: [
              g.jsx("aside", {
                "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:178:10",
                "data-lov-name": "aside",
                "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                "data-component-line": "178",
                "data-component-file": "ReportBuilder.tsx",
                "data-component-name": "aside",
                "data-component-content":
                  "%7B%22className%22%3A%22hidden%20lg%3Ablock%20w-80%20p-4%20space-y-4%20border-r%20bg-muted%2F10%20overflow-y-auto%22%7D",
                className:
                  "hidden lg:block w-80 p-4 space-y-4 border-r bg-muted/10 overflow-y-auto",
                children: g.jsxs(Ke, {
                  "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:179:12",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                  "data-component-line": "179",
                  "data-component-file": "ReportBuilder.tsx",
                  "data-component-name": "Card",
                  "data-component-content":
                    "%7B%22className%22%3A%22border-none%20shadow-none%20bg-transparent%22%7D",
                  className: "border-none shadow-none bg-transparent",
                  children: [
                    g.jsx(Lt, {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:180:14",
                      "data-lov-name": "CardHeader",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "180",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "CardHeader",
                      "data-component-content":
                        "%7B%22className%22%3A%22px-2%22%7D",
                      className: "px-2",
                      children: g.jsx(Mt, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportBuilder.tsx:181:16",
                        "data-lov-name": "CardTitle",
                        "data-component-path":
                          "src\\pages\\app\\ReportBuilder.tsx",
                        "data-component-line": "181",
                        "data-component-file": "ReportBuilder.tsx",
                        "data-component-name": "CardTitle",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-lg%22%7D",
                        className: "text-lg",
                        children: r("builder.sidebar.summary_title"),
                      }),
                    }),
                    g.jsx(lt, {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:183:14",
                      "data-lov-name": "CardContent",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "183",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "CardContent",
                      "data-component-content":
                        "%7B%22className%22%3A%22p-2%22%7D",
                      className: "p-2",
                      children: g.jsx("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportBuilder.tsx:184:16",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportBuilder.tsx",
                        "data-component-line": "184",
                        "data-component-file": "ReportBuilder.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-3%22%7D",
                        className: "space-y-3",
                        children: n.map((N, X) => {
                          const ae = X + 1,
                            ee = ae === s,
                            ie = ae < s;
                          return g.jsxs(
                            "div",
                            {
                              "data-lov-id":
                                "src\\pages\\app\\ReportBuilder.tsx:191:22",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportBuilder.tsx",
                              "data-component-line": "191",
                              "data-component-file": "ReportBuilder.tsx",
                              "data-component-name": "div",
                              "data-component-content": "%7B%7D",
                              className: `flex items-start gap-3 p-3 rounded-lg transition-all ${ee ? "bg-primary/10 border border-primary/20 shadow-sm" : ie ? "bg-success/5" : "bg-background/50 text-muted-foreground"}`,
                              children: [
                                g.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportBuilder.tsx:198:24",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportBuilder.tsx",
                                  "data-component-line": "198",
                                  "data-component-file": "ReportBuilder.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${ie ? "bg-success text-success-foreground" : ee ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
                                  children: ie
                                    ? g.jsx(Gr, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportBuilder.tsx:203:41",
                                        "data-lov-name": "CheckCircle",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportBuilder.tsx",
                                        "data-component-line": "203",
                                        "data-component-file":
                                          "ReportBuilder.tsx",
                                        "data-component-name": "CheckCircle",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                        className: "w-4 h-4",
                                      })
                                    : ae,
                                }),
                                g.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportBuilder.tsx:205:24",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportBuilder.tsx",
                                  "data-component-line": "205",
                                  "data-component-file": "ReportBuilder.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex-1%20min-w-0%22%7D",
                                  className: "flex-1 min-w-0",
                                  children: [
                                    g.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportBuilder.tsx:206:26",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportBuilder.tsx",
                                      "data-component-line": "206",
                                      "data-component-file":
                                        "ReportBuilder.tsx",
                                      "data-component-name": "p",
                                      "data-component-content": "%7B%7D",
                                      className: `font-medium text-sm truncate ${ee ? "text-primary" : ""}`,
                                      children: N.title,
                                    }),
                                    g.jsx("p", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportBuilder.tsx:209:26",
                                      "data-lov-name": "p",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportBuilder.tsx",
                                      "data-component-line": "209",
                                      "data-component-file":
                                        "ReportBuilder.tsx",
                                      "data-component-name": "p",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-%5B10px%5D%20mt-0.5%20line-clamp-1%22%7D",
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
              g.jsx("main", {
                "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:222:10",
                "data-lov-name": "main",
                "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                "data-component-line": "222",
                "data-component-file": "ReportBuilder.tsx",
                "data-component-name": "main",
                "data-component-content":
                  "%7B%22className%22%3A%22flex-1%20min-w-0%20overflow-y-auto%22%7D",
                className: "flex-1 min-w-0 overflow-y-auto",
                children: g.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:223:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                  "data-component-line": "223",
                  "data-component-file": "ReportBuilder.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20p-4%20sm%3Ap-6%20lg%3Ap-8%20animate-fade-in%20space-y-6%22%7D",
                  className:
                    "max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in space-y-6",
                  children: [
                    s === 1 &&
                      g.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportBuilder.tsx:225:16",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportBuilder.tsx",
                        "data-component-line": "225",
                        "data-component-file": "ReportBuilder.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22bg-primary%2F5%20border%20border-primary%2F20%20rounded-xl%20p-4%20flex%20items-start%20gap-3%20mb-6%22%7D",
                        className:
                          "bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-3 mb-6",
                        children: [
                          g.jsx(Da, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:226:19",
                            "data-lov-name": "Sparkles",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "226",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "Sparkles",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-5%20w-5%20text-primary%20flex-shrink-0%20mt-0.5%22%7D",
                            className:
                              "h-5 w-5 text-primary flex-shrink-0 mt-0.5",
                          }),
                          g.jsxs("p", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:227:19",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "227",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-sm%20text-primary%2F90%22%7D",
                            className: "text-sm text-primary/90",
                            children: [
                              g.jsxs("strong", {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportBuilder.tsx:228:21",
                                "data-lov-name": "strong",
                                "data-component-path":
                                  "src\\pages\\app\\ReportBuilder.tsx",
                                "data-component-line": "228",
                                "data-component-file": "ReportBuilder.tsx",
                                "data-component-name": "strong",
                                "data-component-content":
                                  "%7B%22text%22%3A%22%3A%22%7D",
                                children: [
                                  r("builder.sidebar.consultant_hint"),
                                  ":",
                                ],
                              }),
                              " ",
                              r("builder.sidebar.ai_hints.step1"),
                            ],
                          }),
                        ],
                      }),
                    g.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:233:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "233",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22animate-fade-in%20pb-20%22%7D",
                      className: "animate-fade-in pb-20",
                      children: [
                        s === 1 &&
                          g.jsx(vx, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:234:31",
                            "data-lov-name": "DataInputStep",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "234",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "DataInputStep",
                            "data-component-content": "%7B%7D",
                          }),
                        s === 2 &&
                          g.jsx(gx, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:235:31",
                            "data-lov-name": "TemplateSelectionStep",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "235",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "TemplateSelectionStep",
                            "data-component-content": "%7B%7D",
                          }),
                        s === 3 &&
                          g.jsx(Sx, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:236:31",
                            "data-lov-name": "BlockEditorStep",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "236",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "BlockEditorStep",
                            "data-component-content": "%7B%7D",
                          }),
                        s === 4 &&
                          g.jsx(_x, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:237:31",
                            "data-lov-name": "GenerationStep",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "237",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "GenerationStep",
                            "data-component-content": "%7B%7D",
                          }),
                        s === 5 &&
                          g.jsx(Tx, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportBuilder.tsx:238:31",
                            "data-lov-name": "PreviewStep",
                            "data-component-path":
                              "src\\pages\\app\\ReportBuilder.tsx",
                            "data-component-line": "238",
                            "data-component-file": "ReportBuilder.tsx",
                            "data-component-name": "PreviewStep",
                            "data-component-content": "%7B%7D",
                            onConfirm: I,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              g.jsx(Fc, {
                "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:244:10",
                "data-lov-name": "AISidebar",
                "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                "data-component-line": "244",
                "data-component-file": "ReportBuilder.tsx",
                "data-component-name": "AISidebar",
                "data-component-content":
                  "%7B%22className%22%3A%22hidden%20xl%3Ablock%20h-full%22%7D",
                context: "builder",
                className: "hidden xl:block h-full",
              }),
            ],
          }),
        }),
        g.jsx("div", {
          "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:249:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
          "data-component-line": "249",
          "data-component-file": "ReportBuilder.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22lg%3Ahidden%20fixed%20bottom-0%20left-0%20right-0%20bg-background%20border-t%20p-4%20z-40%22%7D",
          className:
            "lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 z-40",
          children: g.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:250:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
            "data-component-line": "250",
            "data-component-file": "ReportBuilder.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20gap-3%22%7D",
            className: "flex gap-3",
            children: [
              s > 1 &&
                g.jsxs(At, {
                  "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:252:12",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                  "data-component-line": "252",
                  "data-component-file": "ReportBuilder.tsx",
                  "data-component-name": "Button",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex-1%22%7D",
                  variant: "outline",
                  onClick: _,
                  className: "flex-1",
                  children: [
                    g.jsx(ss, {
                      "data-lov-id":
                        "src\\pages\\app\\ReportBuilder.tsx:253:14",
                      "data-lov-name": "ArrowLeft",
                      "data-component-path":
                        "src\\pages\\app\\ReportBuilder.tsx",
                      "data-component-line": "253",
                      "data-component-file": "ReportBuilder.tsx",
                      "data-component-name": "ArrowLeft",
                      "data-component-content":
                        "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                      className: "mr-2 h-4 w-4",
                    }),
                    r("common.back"),
                  ],
                }),
              s < 5
                ? g.jsxs(At, {
                    "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:258:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                    "data-component-line": "258",
                    "data-component-file": "ReportBuilder.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex-1%22%7D",
                    onClick: S,
                    className: "flex-1",
                    children: [
                      r("common.next"),
                      g.jsx(Gc, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportBuilder.tsx:260:14",
                        "data-lov-name": "ArrowRight",
                        "data-component-path":
                          "src\\pages\\app\\ReportBuilder.tsx",
                        "data-component-line": "260",
                        "data-component-file": "ReportBuilder.tsx",
                        "data-component-name": "ArrowRight",
                        "data-component-content":
                          "%7B%22className%22%3A%22ml-2%20h-4%20w-4%22%7D",
                        className: "ml-2 h-4 w-4",
                      }),
                    ],
                  })
                : g.jsx(At, {
                    "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:263:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
                    "data-component-line": "263",
                    "data-component-file": "ReportBuilder.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex-1%22%7D",
                    onClick: I,
                    disabled: x,
                    className: "flex-1",
                    children: r(
                      x ? "common.processing" : "builder.preview.cta_initial",
                    ),
                  }),
            ],
          }),
        }),
      ],
    });
  };
function Xx() {
  return g.jsx(i0, {
    "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:275:4",
    "data-lov-name": "ReportBuilderProvider",
    "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
    "data-component-line": "275",
    "data-component-file": "ReportBuilder.tsx",
    "data-component-name": "ReportBuilderProvider",
    "data-component-content": "%7B%7D",
    children: g.jsx(Ex, {
      "data-lov-id": "src\\pages\\app\\ReportBuilder.tsx:276:6",
      "data-lov-name": "ReportBuilderContent",
      "data-component-path": "src\\pages\\app\\ReportBuilder.tsx",
      "data-component-line": "276",
      "data-component-file": "ReportBuilder.tsx",
      "data-component-name": "ReportBuilderContent",
      "data-component-content": "%7B%7D",
    }),
  });
}
export { Xx as default };
