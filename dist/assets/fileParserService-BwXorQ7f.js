var af = Object.defineProperty;
var of = (e, n, t) =>
  n in e
    ? af(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[n] = t);
var Pt = (e, n, t) => of(e, typeof n != "symbol" ? n + "" : n, t);
import { s as Fe, _ as No } from "./index-CaCe4Bjh.js";
import { P as cf, r as sf, u as uf } from "./xlsx-BA-nE33S.js";
import { k as df, c as fe } from "./vendor-react-DfYPWlel.js";
class bt extends Error {
  constructor(t, r = "UNKNOWN_ERROR", i) {
    super(t);
    Pt(this, "code");
    Pt(this, "originalError");
    ((this.name = "AppError"),
      (this.code = r),
      (this.originalError = i),
      Object.setPrototypeOf(this, bt.prototype));
  }
  static fromError(t) {
    if (t instanceof bt) return t;
    const r = t instanceof Error ? t.message : "An unexpected error occurred";
    return new bt(r, "UNKNOWN_ERROR", t);
  }
}
class Qt extends bt {
  constructor(t, r, i) {
    super(t, "API_ERROR", i);
    Pt(this, "status");
    ((this.name = "ApiError"),
      (this.status = r),
      Object.setPrototypeOf(this, Qt.prototype));
  }
}
const lf = "/api/gemini",
  ff = 5 * 60 * 1e3,
  Lo = new Map(),
  Mo = new Map();
function Ps(e, n) {
  const t = n + JSON.stringify(e.slice(0, 50));
  let r = 5381;
  for (let i = 0; i < t.length; i++) r = (r * 33) ^ t.charCodeAt(i);
  return (r >>> 0).toString(36);
}
function qs(e, n) {
  const t = e.get(n);
  return t ? (Date.now() > t.expiresAt ? (e.delete(n), null) : t.result) : null;
}
function zs(e, n, t) {
  e.set(n, { result: t, expiresAt: Date.now() + ff });
}
const Po = 3e4;
async function hf(e, n, t = 3) {
  let r = null;
  for (let i = 0; i < t; i++) {
    try {
      const a = new AbortController(),
        o = setTimeout(() => a.abort(), Po),
        c = await fetch(e, { ...n, signal: a.signal });
      if (
        (clearTimeout(o),
        c.ok || (c.status >= 400 && c.status < 500 && c.status !== 429))
      )
        return c;
      r = new Error(`HTTP ${c.status}`);
    } catch (a) {
      a instanceof Error && a.name === "AbortError"
        ? (r = new Error(`Timeout após ${Po / 1e3}s`))
        : (r = a instanceof Error ? a : new Error("Network error"));
    }
    if (i < t - 1) {
      const a = Math.pow(2, i) * 500;
      await new Promise((o) => setTimeout(o, a));
    }
  }
  throw r ?? new Error("Request failed after retries");
}
function pf(e, n, t) {
  var a;
  const r =
      t != null && t.blueprint
        ? `
CONTEXTO DA EMPRESA:
${JSON.stringify(t.blueprint)}`
        : "",
    i =
      (a = t == null ? void 0 : t.kpiLibrary) != null && a.length
        ? `
KPIs RELEVANTES PARA MAPEAR:
${t.kpiLibrary.slice(0, 30).map((o) => `${o.code}: ${o.title} (${o.unit})`)
  .join(`
`)}`
        : "";
  return `
Aja como um especialista em análise de dados para PMEs.
Sua tarefa é analisar os dados fornecidos e gerar um resumo executivo com blocos de visualização estratégica.

CONTEXTO: ${n || "Negócio em geral"}${r}${i}
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
function gf(e, n, t) {
  return `
Aja como um Consultor Estratégico Sênior especializado em PMEs.
Analise os dados e identifique o problema MAIS CRÍTICO (Diagnóstico) e sugira a ação MAIS IMPORTANTE (Prioridade).

CONTEXTO: ${n || "Negócio em geral"}
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
async function js(e) {
  var i, a, o, c, s, u;
  const n = await hf(lf, {
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
    t = await n.json();
  if (!n.ok || t.error)
    throw new Qt(
      ((i = t.error) == null ? void 0 : i.message) || "Erro na API de IA",
      n.status,
    );
  const r =
    (u =
      (s =
        (c =
          (o =
            (a = t == null ? void 0 : t.candidates) == null ? void 0 : a[0]) ==
          null
            ? void 0
            : o.content) == null
          ? void 0
          : c.parts) == null
        ? void 0
        : s[0]) == null
      ? void 0
      : u.text;
  if (!r) throw new Qt("Resposta inválida da API de IA");
  return r;
}
const Im = async (e, n, t) => {
    const r = Ps(e, `analysis:${n}`),
      i = qs(Lo, r);
    if (i) return i;
    const a = pf(e, n, t);
    try {
      const o = await js(a);
      let c;
      try {
        c = JSON.parse(o);
      } catch (s) {
        (console.warn(
          "[aiService] JSON.parse falhou, tentando extrair manualmente:",
          s,
        ),
          (c = { summary: o.substring(0, 500), blocks: [] }));
      }
      return (zs(Lo, r, c), c);
    } catch (o) {
      throw (console.error("[aiService] Erro ao analisar dados:", o), o);
    }
  },
  Nm = async (e, n, t) => {
    const r = Ps(e, `diagnostic:${n}`),
      i = qs(Mo, r);
    if (i) return i;
    const a = gf(e, n);
    try {
      const o = await js(a);
      let c;
      try {
        c = JSON.parse(o);
      } catch (s) {
        throw (
          console.warn("[aiService] JSON.parse falhou no diagnóstico:", s),
          new Error("Resposta da IA malformada. Tente novamente.")
        );
      }
      return (zs(Mo, r, c), c);
    } catch (o) {
      throw (console.error("[aiService] Erro ao gerar diagnóstico:", o), o);
    }
  },
  qo = {
    "margem líquida": "NET_PROFIT_MARGIN",
    "margem bruta": "GROSS_MARGIN",
    "margem de contribuição": "CONTRIBUTION_MARGIN",
    "margem ebitda": "EBITDA_MARGIN",
    markup: "MARKUP",
    "margem operacional": "OPERATING_MARGIN",
    "net margin": "NET_PROFIT_MARGIN",
    "gross margin": "GROSS_MARGIN",
    "contribution margin": "CONTRIBUTION_MARGIN",
    caixa: "CASH_FLOW",
    "fluxo de caixa": "CASH_FLOW",
    "fluxo de caixa operacional": "OPERATING_CASH_FLOW",
    "free cash flow": "FREE_CASH_FLOW",
    fcf: "FREE_CASH_FLOW",
    "burn rate": "BURN_RATE",
    "queima de caixa": "BURN_RATE",
    runway: "RUNWAY_MONTHS",
    "pista de decolagem": "RUNWAY_MONTHS",
    "capital de giro": "WORKING_CAPITAL",
    "prazo médio de recebimento": "DAYS_TO_RECEIVE",
    "prazo médio de pagamento": "DAYS_TO_PAY",
    "prazo médio de estoque": "INVENTORY_DAYS",
    pmr: "DAYS_TO_RECEIVE",
    dso: "DAYS_TO_RECEIVE",
    dpo: "DAYS_TO_PAY",
    dio: "INVENTORY_DAYS",
    "ciclo de caixa": "CASH_CONVERSION_CYCLE",
    "days sales outstanding": "DAYS_TO_RECEIVE",
    "days payable outstanding": "DAYS_TO_PAY",
    "days inventory outstanding": "INVENTORY_DAYS",
    "custo de aquisição": "CAC",
    cac: "CAC",
    "customer acquisition cost": "CAC",
    "ticket médio": "AVG_TICKET",
    "average ticket": "AVG_TICKET",
    gmv: "GMV",
    "gross merchandise value": "GMV",
    receita: "REVENUE",
    vendas: "REVENUE",
    faturamento: "REVENUE",
    revenue: "REVENUE",
    crescimento: "REVENUE_GROWTH",
    "crescimento de receita": "REVENUE_GROWTH",
    "revenue growth": "REVENUE_GROWTH",
    "taxa de conversão": "SALES_CONVERSION",
    conversão: "SALES_CONVERSION",
    "conversion rate": "SALES_CONVERSION",
    churn: "CHURN_RATE",
    "taxa de churn": "CHURN_RATE",
    "churn rate": "CHURN_RATE",
    "taxa de cancelamento": "CHURN_RATE",
    retenção: "RETENTION_RATE",
    "retention rate": "RETENTION_RATE",
    "taxa de retenção": "RETENTION_RATE",
    ltv: "LTV",
    "lifetime value": "LTV",
    "customer lifetime value": "LTV",
    "valor lifetime": "LTV",
    "ltv cac": "LTV_CAC_RATIO",
    "ltv/cac": "LTV_CAC_RATIO",
    "relação ltv cac": "LTV_CAC_RATIO",
    "ciclo de vendas": "SALES_CYCLE_DAYS",
    "sales cycle": "SALES_CYCLE_DAYS",
    "dias para fechar": "SALES_CYCLE_DAYS",
    pipeline: "PIPELINE_VALUE",
    "valor do pipeline": "PIPELINE_VALUE",
    "cobertura de pipeline": "PIPELINE_COVERAGE",
    "pipeline coverage": "PIPELINE_COVERAGE",
    "taxa de ganho": "WIN_RATE",
    "win rate": "WIN_RATE",
    "taxa de ganho de negócio": "WIN_RATE",
    "taxa de perda": "LOSS_RATE",
    "loss rate": "LOSS_RATE",
    "vendas por vendedor": "SALES_PER_EMPLOYEE",
    "sales per employee": "SALES_PER_EMPLOYEE",
    produtividade: "PRODUCTIVITY_PER_EMPLOYEE",
    "produtividade por funcionário": "PRODUCTIVITY_PER_EMPLOYEE",
    "atingimento de meta": "QUOTA_ATTAINMENT",
    "quota attainment": "QUOTA_ATTAINMENT",
    meta: "QUOTA_ATTAINMENT",
    "giro de estoque": "INVENTORY_TURNOVER",
    "inventory turnover": "INVENTORY_TURNOVER",
    giro: "INVENTORY_TURNOVER",
    "despesas fixas": "FIXED_COST_RATIO",
    "custo fixo": "FIXED_COST_RATIO",
    "fixed costs": "FIXED_COST_RATIO",
    "custo variável": "VARIABLE_COST_RATIO",
    "variable costs": "VARIABLE_COST_RATIO",
    endividamento: "DEBT_TO_EQUITY",
    "debt to equity": "DEBT_TO_EQUITY",
    "liquidez corrente": "CURRENT_RATIO",
    "current ratio": "CURRENT_RATIO",
    "liquidez seca": "QUICK_RATIO",
    "quick ratio": "QUICK_RATIO",
    roa: "ROA",
    "return on assets": "ROA",
    "retorno sobre ativos": "ROA",
    roe: "ROE",
    "return on equity": "ROE",
    "retorno sobre patrimônio": "ROE",
    roic: "ROIC",
    "return on invested capital": "ROIC",
    "carga tributária": "TAX_EFFECTIVE_RATE",
    "taxa efetiva": "TAX_EFFECTIVE_RATE",
    "tax effective rate": "TAX_EFFECTIVE_RATE",
    simples: "SIMPLES_ALIQUOTA",
    "alíquota simples": "SIMPLES_ALIQUOTA",
    turnover: "EMPLOYEE_TURNOVER",
    "taxa de turnover": "EMPLOYEE_TURNOVER",
    "employee turnover": "EMPLOYEE_TURNOVER",
    "receita por funcionário": "PRODUCTIVITY_PER_EMPLOYEE",
    "receita por employee": "PRODUCTIVITY_PER_EMPLOYEE",
    "folha de pagamento": "LABOR_COST_PCT",
    "custo de pessoal": "LABOR_COST_PCT",
    "labor cost": "LABOR_COST_PCT",
    benchmark: "BENCHMARK",
    "meta target": "BENCHMARK",
    "target goal": "BENCHMARK",
    "net profit": "NET_PROFIT_MARGIN",
    "profit margin": "NET_PROFIT_MARGIN",
    "cash flow": "CASH_FLOW",
    "working capital": "WORKING_CAPITAL",
    "receivable days": "DAYS_TO_RECEIVE",
    "payable days": "DAYS_TO_PAY",
    "inventory days": "INVENTORY_DAYS",
    "cash conversion cycle": "CASH_CONVERSION_CYCLE",
    "average order value": "AVG_TICKET",
    aov: "AVG_TICKET",
    "customer churn": "CHURN_RATE",
    "monthly recurring revenue": "MRR",
    mrr: "MRR",
    "annual recurring revenue": "ARR",
    arr: "ARR",
    "net revenue retention": "NET_REVENUE_RETENTION",
    nrr: "NET_REVENUE_RETENTION",
  },
  Lm = (e, n = {}) => {
    const { minConfidence: t = 0.6 } = n,
      r = [];
    return e != null && e.blocks
      ? (e.blocks.forEach((a, o) => {
          if (a.data && Array.isArray(a.data)) {
            const c = mf(a.data, o);
            r.push(...c);
          }
          if (a.description) {
            const c = zo(a.description, o);
            r.push(...c);
          }
          if (a.title) {
            const c = zo(a.title, o);
            r.push(...c);
          }
        }),
        yf(r).filter((a) => a.confidence >= t))
      : r;
  },
  mf = (e, n) => {
    const t = [];
    if (!e.length) return t;
    const r = e[0],
      i = Object.keys(r);
    return (
      i.forEach((a) => {
        const o = a.toLowerCase(),
          c = Vs(o);
        c &&
          e.forEach((s, u) => {
            const l = Gn(s[a]);
            if (l !== null && !isNaN(l)) {
              const p = i.find(
                  (f) =>
                    f.toLowerCase().includes("benchmark") ||
                    f.toLowerCase().includes("meta") ||
                    f.toLowerCase().includes("referência"),
                ),
                m = p ? Gn(s[p]) : void 0,
                b = i.find(
                  (f) =>
                    f.toLowerCase().includes("variação") ||
                    f.toLowerCase().includes("delta") ||
                    f.toLowerCase().includes("trend"),
                ),
                y = b ? Gn(s[b]) : void 0;
              t.push({
                code: c,
                value: l,
                unit: bf(o, l),
                benchmarkValue: m || void 0,
                deltaPercentage: y,
                confidence: 0.85,
                source: "table",
                sourceBlockIndex: n,
              });
            }
          });
      }),
      t
    );
  },
  zo = (e, n) => {
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
      ].forEach((a) => {
        const o = r.match(a.regex);
        if (o) {
          const c = Gn(o[2] || o[3] || o[1]);
          if (c !== null) {
            const s = r.substring(
                Math.max(0, r.indexOf(o[0]) - 50),
                Math.min(r.length, r.indexOf(o[0]) + o[0].length + 50),
              ),
              u = Vs(s) || "UNKNOWN";
            let l = c,
              p;
            if (a.isDelta) {
              p = a.isNegative ? -c : c;
              const m = s.match(/(\d+[.,]?\d*)\s*%/);
              m && Gn(m[1]) !== c && (l = Gn(m[1]) || c);
            }
            u !== "UNKNOWN" &&
              t.push({
                code: u,
                value: l,
                unit: a.unit,
                deltaPercentage: p,
                confidence: a.confidence,
                source: "text",
                sourceBlockIndex: n,
              });
          }
        }
      }),
      t
    );
  },
  Vs = (e) => {
    const n = e.toLowerCase();
    for (const [t, r] of Object.entries(qo)) if (n.includes(t)) return r;
    for (const [t, r] of Object.entries(qo)) {
      const i = t.split(" ");
      if (i.filter((o) => n.includes(o)).length >= Math.ceil(i.length * 0.7))
        return r;
    }
    return null;
  },
  Gn = (e) => {
    if (e == null) return null;
    if (typeof e == "number") return e;
    if (typeof e == "string") {
      const n = e
          .replace(/r?\$\s*/gi, "")
          .replace(/%/g, "")
          .replace(/\s+/g, "")
          .replace(/\./g, "")
          .replace(/,/g, ".")
          .trim(),
        t = parseFloat(n);
      return isNaN(t) ? null : t;
    }
    return null;
  },
  bf = (e, n) => {
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
          ? n < 100
            ? "ratio"
            : n < 1e3
              ? "monetary"
              : "currency"
          : t.includes("quantidade") ||
              t.includes("count") ||
              t.includes("número")
            ? "count"
            : n >= 0 && n <= 100 && !t.includes("valor")
              ? "percentage"
              : n > 365
                ? "currency"
                : "ratio";
  },
  yf = (e) => {
    const n = new Map();
    return (
      e.forEach((t) => {
        const r = n.get(t.code);
        (!r || t.confidence > r.confidence) && n.set(t.code, t);
      }),
      Array.from(n.values())
    );
  },
  Mm = (e) => {
    var p, m;
    const n =
        ((p = e == null ? void 0 : e.title) == null
          ? void 0
          : p.toLowerCase()) || "",
      t =
        ((m = e == null ? void 0 : e.description) == null
          ? void 0
          : m.toLowerCase()) || "",
      r = `${n} ${t}`,
      i = {
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
    let a = null,
      o = 0;
    for (const [b, y] of Object.entries(i)) {
      const f = (r.match(new RegExp(b, "gi")) || []).length;
      f > o && ((o = f), (a = y));
    }
    const c = {
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
      s = (a == null ? void 0 : a.code) || "LOW_PROFITABILITY",
      u = (a == null ? void 0 : a.severity) || "medium",
      l = c[s];
    return { challenge_code: s, suggested_lever_code: l, severity: u };
  };
async function Df(e) {
  const n = [],
    t = [];
  try {
    for (let r = 0; r < e.length; r++) {
      const i = await e[r].execute();
      (t.push(i),
        n.push(async () => {
          e[r].rollback && (await e[r].rollback());
        }));
    }
    return { success: !0, data: t, completedOperations: n.length };
  } catch (r) {
    console.error("Transaction failed, executing rollback:", r);
    for (const i of n.reverse())
      try {
        await i();
      } catch (a) {
        console.error("Rollback operation failed:", a);
      }
    return {
      success: !1,
      error: r instanceof Error ? r.message : "Unknown error",
      completedOperations: n.length,
    };
  }
}
const Pm = async (e, n, t, r, i) => {
  const { data: a, error: o } = await Fe.from("profiles")
    .select("organization_id")
    .eq("user_id", r)
    .single();
  if (o || !(a != null && a.organization_id))
    throw new Error("Usuário não está associado a uma organização");
  const c = a.organization_id,
    s = vf(),
    u = n.map((d) => ({
      organization_id: c,
      report_id: "TEMP_ID",
      kpi_code: d.code,
      value: d.value,
      unit: d.unit,
      benchmark_value: d.benchmarkValue,
      delta_percentage: d.deltaPercentage,
      extracted_confidence: d.confidence,
      source_block_index: d.sourceBlockIndex,
      reference_period: s.reference_period,
      period_start: s.period_start,
      period_end: s.period_end,
    })),
    l = await Fe.from("reports").select("id").limit(1);
  if (l.error)
    throw new Error("Falha na validação de transação: " + l.error.message);
  if (u.length > 0) {
    const d = await Fe.from("user_metrics").select("id").limit(1);
    if (d.error)
      throw new Error("Falha na validação de métricas: " + d.error.message);
  }
  const p = await Df([
    {
      execute: async () => {
        const { data: d, error: g } = await Fe.from("reports")
          .insert({
            user_id: r,
            title: e.title,
            description: e.description,
            category: e.category,
            template_id: e.template_id,
            blocks: e.blocks,
            status: e.status || "completed",
            data_json: {
              ...e.data_json,
              diagnostic: t,
              extracted_kpis: n,
              reference_period: s.reference_period,
            },
          })
          .select()
          .single();
        if (g) throw g;
        return d;
      },
      rollback: async () => {
        const { data: d } = await Fe.from("reports")
          .select("id")
          .eq("user_id", r)
          .order("created_at", { ascending: !1 })
          .limit(1)
          .single();
        d != null && d.id && (await Fe.from("reports").delete().eq("id", d.id));
      },
    },
    {
      execute: async () => {
        const d = await Fe.from("reports")
          .select("id")
          .eq("user_id", r)
          .order("created_at", { ascending: !1 })
          .limit(1)
          .single();
        if (!d.data) throw new Error("Relatório não encontrado");
        if (n.length === 0) return { id: d.data.id, count: 0 };
        const g = u.map((D) => ({ ...D, report_id: d.data.id })),
          { error: h } = await Fe.from("user_metrics").insert(g);
        if (h) throw h;
        return { id: d.data.id, count: n.length };
      },
      rollback: async () => {
        var g;
        const d = await Fe.from("reports")
          .select("id")
          .eq("user_id", r)
          .order("created_at", { ascending: !1 })
          .limit(1)
          .single();
        (g = d.data) != null &&
          g.id &&
          (await Fe.from("user_metrics").delete().eq("report_id", d.data.id));
      },
    },
    {
      execute: async () => {
        const d = await Fe.from("reports")
          .select("id")
          .eq("user_id", r)
          .order("created_at", { ascending: !1 })
          .limit(1)
          .single();
        if (!d.data) throw new Error("Relatório não encontrado");
        const g = d.data.id,
          { data: h } = await Fe.from("user_challenges")
            .select("id, status")
            .eq("organization_id", c)
            .eq("challenge_code", t.challenge_code)
            .in("status", ["detected", "acknowledged", "in_progress"])
            .maybeSingle();
        if (h) {
          const { data: D, error: _ } = await Fe.from("user_challenges")
            .update({
              detected_in_report_id: g,
              detected_at: new Date().toISOString(),
              confidence_score: t.confidence || 0.8,
              ai_diagnostic_data: t,
              updated_at: new Date().toISOString(),
            })
            .eq("id", h.id)
            .select()
            .single();
          if (_) throw _;
          return { created: !1, id: D == null ? void 0 : D.id };
        } else {
          const { data: D, error: _ } = await Fe.from("user_challenges")
            .insert({
              organization_id: c,
              challenge_code: t.challenge_code,
              title: t.title,
              description: t.description,
              severity: t.severity,
              status: "detected",
              detected_in_report_id: g,
              suggested_lever_code: t.suggested_lever_code,
              confidence_score: t.confidence || 0.8,
              ai_diagnostic_data: t,
              expected_resolution_days: 30,
            })
            .select()
            .single();
          if (_) throw _;
          return { created: !0, id: D == null ? void 0 : D.id };
        }
      },
      rollback: async () => {
        var g;
        const d = await Fe.from("reports")
          .select("id")
          .eq("user_id", r)
          .order("created_at", { ascending: !1 })
          .limit(1)
          .single();
        (g = d.data) != null &&
          g.id &&
          (await Fe.from("user_challenges")
            .delete()
            .eq("detected_in_report_id", d.data.id)
            .eq("challenge_code", t.challenge_code));
      },
    },
  ]);
  if (!p.success || !p.data) throw new Error(p.error || "Erro na transação");
  const [m, b, y] = p.data;
  return {
    report: (
      await Fe.from("reports")
        .select("id, title, status, created_at")
        .eq("id", m.id)
        .single()
    ).data,
    metricsCount: b.count,
    challengeCreated: y.created,
    challengeId: y.id,
  };
};
function vf() {
  const e = new Date(),
    n = e.getFullYear(),
    t = String(e.getMonth() + 1).padStart(2, "0"),
    r = `${n}-${t}`,
    i = `${r}-01`,
    a = new Date(n, e.getMonth() + 1, 0).toISOString().split("T")[0];
  return { reference_period: r, period_start: i, period_end: a };
}
var rn = {},
  ga = "1.13.8",
  jo =
    (typeof self == "object" && self.self === self && self) ||
    (typeof global == "object" && global.global === global && global) ||
    Function("return this")() ||
    {},
  lr = Array.prototype,
  ma = Object.prototype,
  Vo = typeof Symbol < "u" ? Symbol.prototype : null,
  xf = lr.push,
  Bt = lr.slice,
  yt = ma.toString,
  _f = ma.hasOwnProperty,
  Xs = typeof ArrayBuffer < "u",
  Uf = typeof DataView < "u",
  Tf = Array.isArray,
  Xo = Object.keys,
  Ho = Object.create,
  $o = Xs && ArrayBuffer.isView,
  wf = isNaN,
  Ef = isFinite,
  Hs = !{ toString: null }.propertyIsEnumerable("toString"),
  Go = [
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString",
  ],
  Af = Math.pow(2, 53) - 1;
function Me(e, n) {
  return (
    (n = n == null ? e.length - 1 : +n),
    function () {
      for (
        var t = Math.max(arguments.length - n, 0), r = Array(t), i = 0;
        i < t;
        i++
      )
        r[i] = arguments[i + n];
      switch (n) {
        case 0:
          return e.call(this, r);
        case 1:
          return e.call(this, arguments[0], r);
        case 2:
          return e.call(this, arguments[0], arguments[1], r);
      }
      var a = Array(n + 1);
      for (i = 0; i < n; i++) a[i] = arguments[i];
      return ((a[n] = r), e.apply(this, a));
    }
  );
}
function An(e) {
  var n = typeof e;
  return n === "function" || (n === "object" && !!e);
}
function $s(e) {
  return e === null;
}
function ba(e) {
  return e === void 0;
}
function ya(e) {
  return e === !0 || e === !1 || yt.call(e) === "[object Boolean]";
}
function Gs(e) {
  return !!(e && e.nodeType === 1);
}
function Ne(e) {
  var n = "[object " + e + "]";
  return function (t) {
    return yt.call(t) === n;
  };
}
const fr = Ne("String"),
  Da = Ne("Number"),
  Ys = Ne("Date"),
  Zs = Ne("RegExp"),
  Ks = Ne("Error"),
  va = Ne("Symbol"),
  xa = Ne("ArrayBuffer");
var Qs = Ne("Function"),
  Cf = jo.document && jo.document.childNodes;
typeof /./ != "function" &&
  typeof Int8Array != "object" &&
  typeof Cf != "function" &&
  (Qs = function (e) {
    return typeof e == "function" || !1;
  });
const Ie = Qs,
  Js = Ne("Object");
var eu =
    Uf &&
    (!/\[native code\]/.test(String(DataView)) ||
      Js(new DataView(new ArrayBuffer(8)))),
  _a = typeof Map < "u" && Js(new Map()),
  Ff = Ne("DataView");
function Sf(e) {
  return e != null && Ie(e.getInt8) && xa(e.buffer);
}
const Dt = eu ? Sf : Ff,
  Cn = Tf || Ne("Array");
function Fn(e, n) {
  return e != null && _f.call(e, n);
}
var ua = Ne("Arguments");
(function () {
  ua(arguments) ||
    (ua = function (e) {
      return Fn(e, "callee");
    });
})();
const hr = ua;
function nu(e) {
  return !va(e) && Ef(e) && !isNaN(parseFloat(e));
}
function Ua(e) {
  return Da(e) && wf(e);
}
function Ta(e) {
  return function () {
    return e;
  };
}
function tu(e) {
  return function (n) {
    var t = e(n);
    return typeof t == "number" && t >= 0 && t <= Af;
  };
}
function ru(e) {
  return function (n) {
    return n == null ? void 0 : n[e];
  };
}
const Jt = ru("byteLength"),
  Bf = tu(Jt);
var kf =
  /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function Wf(e) {
  return $o ? $o(e) && !Dt(e) : Bf(e) && kf.test(yt.call(e));
}
const wa = Xs ? Wf : Ta(!1),
  Oe = ru("length");
function Rf(e) {
  for (var n = {}, t = e.length, r = 0; r < t; ++r) n[e[r]] = !0;
  return {
    contains: function (i) {
      return n[i] === !0;
    },
    push: function (i) {
      return ((n[i] = !0), e.push(i));
    },
  };
}
function iu(e, n) {
  n = Rf(n);
  var t = Go.length,
    r = e.constructor,
    i = (Ie(r) && r.prototype) || ma,
    a = "constructor";
  for (Fn(e, a) && !n.contains(a) && n.push(a); t--; )
    ((a = Go[t]), a in e && e[a] !== i[a] && !n.contains(a) && n.push(a));
}
function Ee(e) {
  if (!An(e)) return [];
  if (Xo) return Xo(e);
  var n = [];
  for (var t in e) Fn(e, t) && n.push(t);
  return (Hs && iu(e, n), n);
}
function au(e) {
  if (e == null) return !0;
  var n = Oe(e);
  return typeof n == "number" && (Cn(e) || fr(e) || hr(e))
    ? n === 0
    : Oe(Ee(e)) === 0;
}
function Ea(e, n) {
  var t = Ee(n),
    r = t.length;
  if (e == null) return !r;
  for (var i = Object(e), a = 0; a < r; a++) {
    var o = t[a];
    if (n[o] !== i[o] || !(o in i)) return !1;
  }
  return !0;
}
function De(e) {
  if (e instanceof De) return e;
  if (!(this instanceof De)) return new De(e);
  this._wrapped = e;
}
De.VERSION = ga;
De.prototype.value = function () {
  return this._wrapped;
};
De.prototype.valueOf = De.prototype.toJSON = De.prototype.value;
De.prototype.toString = function () {
  return String(this._wrapped);
};
function Yo(e) {
  return new Uint8Array(e.buffer || e, e.byteOffset || 0, Jt(e));
}
var Zo = "[object DataView]";
function ou(e, n) {
  for (var t = [{ a: e, b: n }], r = [], i = []; t.length; ) {
    var a = t.pop();
    if (a === !0) {
      (r.pop(), i.pop());
      continue;
    }
    if (((e = a.a), (n = a.b), e === n)) {
      if (e !== 0 || 1 / e === 1 / n) continue;
      return !1;
    }
    if (e == null || n == null) return !1;
    if (e !== e) {
      if (n !== n) continue;
      return !1;
    }
    var o = typeof e;
    if (o !== "function" && o !== "object" && typeof n != "object") return !1;
    (e instanceof De && (e = e._wrapped), n instanceof De && (n = n._wrapped));
    var c = yt.call(e);
    if (c !== yt.call(n)) return !1;
    if (eu && c == "[object Object]" && Dt(e)) {
      if (!Dt(n)) return !1;
      c = Zo;
    }
    switch (c) {
      case "[object RegExp]":
      case "[object String]":
        if ("" + e == "" + n) continue;
        return !1;
      case "[object Number]":
        t.push({ a: +e, b: +n });
        continue;
      case "[object Date]":
      case "[object Boolean]":
        if (+e == +n) continue;
        return !1;
      case "[object Symbol]":
        if (Vo.valueOf.call(e) === Vo.valueOf.call(n)) continue;
        return !1;
      case "[object ArrayBuffer]":
      case Zo:
        t.push({ a: Yo(e), b: Yo(n) });
        continue;
    }
    var s = c === "[object Array]";
    if (!s && wa(e)) {
      var u = Jt(e);
      if (u !== Jt(n)) return !1;
      if (e.buffer === n.buffer && e.byteOffset === n.byteOffset) continue;
      s = !0;
    }
    if (!s) {
      if (typeof e != "object" || typeof n != "object") return !1;
      var l = e.constructor,
        p = n.constructor;
      if (
        l !== p &&
        !(Ie(l) && l instanceof l && Ie(p) && p instanceof p) &&
        "constructor" in e &&
        "constructor" in n
      )
        return !1;
    }
    for (var m = r.length; m--; )
      if (r[m] === e) {
        if (i[m] === n) break;
        return !1;
      }
    if (!(m >= 0))
      if ((r.push(e), i.push(n), t.push(!0), s)) {
        if (((m = e.length), m !== n.length)) return !1;
        for (; m--; ) t.push({ a: e[m], b: n[m] });
      } else {
        var b = Ee(e),
          y;
        if (((m = b.length), Ee(n).length !== m)) return !1;
        for (; m--; ) {
          if (((y = b[m]), !Fn(n, y))) return !1;
          t.push({ a: e[y], b: n[y] });
        }
      }
  }
  return !0;
}
function it(e) {
  if (!An(e)) return [];
  var n = [];
  for (var t in e) n.push(t);
  return (Hs && iu(e, n), n);
}
function Aa(e) {
  var n = Oe(e);
  return function (t) {
    if (t == null) return !1;
    var r = it(t);
    if (Oe(r)) return !1;
    for (var i = 0; i < n; i++) if (!Ie(t[e[i]])) return !1;
    return e !== uu || !Ie(t[Ca]);
  };
}
var Ca = "forEach",
  cu = "has",
  Fa = ["clear", "delete"],
  su = ["get", cu, "set"],
  Of = Fa.concat(Ca, su),
  uu = Fa.concat(su),
  If = ["add"].concat(Fa, Ca, cu);
const du = _a ? Aa(Of) : Ne("Map"),
  lu = _a ? Aa(uu) : Ne("WeakMap"),
  fu = _a ? Aa(If) : Ne("Set"),
  hu = Ne("WeakSet");
function Ln(e) {
  for (var n = Ee(e), t = n.length, r = Array(t), i = 0; i < t; i++)
    r[i] = e[n[i]];
  return r;
}
function pu(e) {
  for (var n = Ee(e), t = n.length, r = Array(t), i = 0; i < t; i++)
    r[i] = [n[i], e[n[i]]];
  return r;
}
function Sa(e) {
  for (var n = {}, t = Ee(e), r = 0, i = t.length; r < i; r++)
    n[e[t[r]]] = t[r];
  return n;
}
function vt(e) {
  var n = [];
  for (var t in e) Ie(e[t]) && n.push(t);
  return n.sort();
}
function Ba(e, n) {
  return function (t) {
    var r = arguments.length;
    if ((n && (t = Object(t)), r < 2 || t == null)) return t;
    for (var i = 1; i < r; i++)
      for (var a = arguments[i], o = e(a), c = o.length, s = 0; s < c; s++) {
        var u = o[s];
        (!n || t[u] === void 0) && (t[u] = a[u]);
      }
    return t;
  };
}
const ka = Ba(it),
  Kn = Ba(Ee),
  Wa = Ba(it, !0);
function Nf() {
  return function () {};
}
function gu(e) {
  if (!An(e)) return {};
  if (Ho) return Ho(e);
  var n = Nf();
  n.prototype = e;
  var t = new n();
  return ((n.prototype = null), t);
}
function mu(e, n) {
  var t = gu(e);
  return (n && Kn(t, n), t);
}
function bu(e) {
  return An(e) ? (Cn(e) ? e.slice() : ka({}, e)) : e;
}
function yu(e, n) {
  return (n(e), e);
}
function Ra(e) {
  return Cn(e) ? e : [e];
}
De.toPath = Ra;
function kt(e) {
  return De.toPath(e);
}
function Oa(e, n) {
  for (var t = n.length, r = 0; r < t; r++) {
    if (e == null) return;
    e = e[n[r]];
  }
  return t ? e : void 0;
}
function Ia(e, n, t) {
  var r = Oa(e, kt(n));
  return ba(r) ? t : r;
}
function Du(e, n) {
  n = kt(n);
  for (var t = n.length, r = 0; r < t; r++) {
    var i = n[r];
    if (!Fn(e, i)) return !1;
    e = e[i];
  }
  return !!t;
}
function pr(e) {
  return e;
}
function Rn(e) {
  return (
    (e = Kn({}, e)),
    function (n) {
      return Ea(n, e);
    }
  );
}
function gr(e) {
  return (
    (e = kt(e)),
    function (n) {
      return Oa(n, e);
    }
  );
}
function Wt(e, n, t) {
  if (n === void 0) return e;
  switch (t ?? 3) {
    case 1:
      return function (r) {
        return e.call(n, r);
      };
    case 3:
      return function (r, i, a) {
        return e.call(n, r, i, a);
      };
    case 4:
      return function (r, i, a, o) {
        return e.call(n, r, i, a, o);
      };
  }
  return function () {
    return e.apply(n, arguments);
  };
}
function vu(e, n, t) {
  return e == null ? pr : Ie(e) ? Wt(e, n, t) : An(e) && !Cn(e) ? Rn(e) : gr(e);
}
function mr(e, n) {
  return vu(e, n, 1 / 0);
}
De.iteratee = mr;
function je(e, n, t) {
  return De.iteratee !== mr ? De.iteratee(e, n) : vu(e, n, t);
}
function xu(e, n, t) {
  n = je(n, t);
  for (var r = Ee(e), i = r.length, a = {}, o = 0; o < i; o++) {
    var c = r[o];
    a[c] = n(e[c], c, e);
  }
  return a;
}
function Na() {}
function _u(e) {
  return e == null
    ? Na
    : function (n) {
        return Ia(e, n);
      };
}
function Uu(e, n, t) {
  var r = Array(Math.max(0, e));
  n = Wt(n, t, 1);
  for (var i = 0; i < e; i++) r[i] = n(i);
  return r;
}
function er(e, n) {
  return (
    n == null && ((n = e), (e = 0)),
    e + Math.floor(Math.random() * (n - e + 1))
  );
}
const Qn =
  Date.now ||
  function () {
    return new Date().getTime();
  };
function Tu(e) {
  var n = function (a) {
      return e[a];
    },
    t = "(?:" + Ee(e).join("|") + ")",
    r = RegExp(t),
    i = RegExp(t, "g");
  return function (a) {
    return ((a = a == null ? "" : "" + a), r.test(a) ? a.replace(i, n) : a);
  };
}
const wu = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
  },
  Eu = Tu(wu),
  Lf = Sa(wu),
  Au = Tu(Lf),
  Cu = (De.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g,
  });
var Jr = /(.)^/,
  Mf = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\u2028": "u2028",
    "\u2029": "u2029",
  },
  Pf = /\\|'|\r|\n|\u2028|\u2029/g;
function qf(e) {
  return "\\" + Mf[e];
}
var zf = /^\s*(\w|\$)+\s*$/;
function Fu(e, n, t) {
  (!n && t && (n = t), (n = Wa({}, n, De.templateSettings)));
  var r = RegExp(
      [
        (n.escape || Jr).source,
        (n.interpolate || Jr).source,
        (n.evaluate || Jr).source,
      ].join("|") + "|$",
      "g",
    ),
    i = 0,
    a = "__p+='";
  (e.replace(r, function (u, l, p, m, b) {
    return (
      (a += e.slice(i, b).replace(Pf, qf)),
      (i = b + u.length),
      l
        ? (a +=
            `'+
((__t=(` +
            l +
            `))==null?'':_.escape(__t))+
'`)
        : p
          ? (a +=
              `'+
((__t=(` +
              p +
              `))==null?'':__t)+
'`)
          : m &&
            (a +=
              `';
` +
              m +
              `
__p+='`),
      u
    );
  }),
    (a += `';
`));
  var o = n.variable;
  if (o) {
    if (!zf.test(o)) throw new Error("variable is not a bare identifier: " + o);
  } else
    ((a =
      `with(obj||{}){
` +
      a +
      `}
`),
      (o = "obj"));
  a =
    `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
    a +
    `return __p;
`;
  var c;
  try {
    c = new Function(o, "_", a);
  } catch (u) {
    throw ((u.source = a), u);
  }
  var s = function (u) {
    return c.call(this, u, De);
  };
  return (
    (s.source =
      "function(" +
      o +
      `){
` +
      a +
      "}"),
    s
  );
}
function Su(e, n, t) {
  n = kt(n);
  var r = n.length;
  if (!r) return Ie(t) ? t.call(e) : t;
  for (var i = 0; i < r; i++) {
    var a = e == null ? void 0 : e[n[i]];
    (a === void 0 && ((a = t), (i = r)), (e = Ie(a) ? a.call(e) : a));
  }
  return e;
}
var jf = 0;
function Bu(e) {
  var n = ++jf + "";
  return e ? e + n : n;
}
function ku(e) {
  var n = De(e);
  return ((n._chain = !0), n);
}
function Wu(e, n, t, r, i) {
  if (!(r instanceof n)) return e.apply(t, i);
  var a = gu(e.prototype),
    o = e.apply(a, i);
  return An(o) ? o : a;
}
var Mn = Me(function (e, n) {
  var t = Mn.placeholder,
    r = function () {
      for (var i = 0, a = n.length, o = Array(a), c = 0; c < a; c++)
        o[c] = n[c] === t ? arguments[i++] : n[c];
      for (; i < arguments.length; ) o.push(arguments[i++]);
      return Wu(e, r, this, this, o);
    };
  return r;
});
Mn.placeholder = De;
const La = Me(function (e, n, t) {
    if (!Ie(e)) throw new TypeError("Bind must be called on a function");
    var r = Me(function (i) {
      return Wu(e, r, n, this, t.concat(i));
    });
    return r;
  }),
  Ge = tu(Oe);
function at(e, n, t) {
  !n && n !== 0 && (n = 1 / 0);
  for (var r = [], i = 0, a = 0, o = Oe(e) || 0, c = []; ; ) {
    if (a >= o) {
      if (!c.length) break;
      var s = c.pop();
      ((a = s.i), (e = s.v), (o = Oe(e)));
      continue;
    }
    var u = e[a++];
    c.length >= n
      ? (r[i++] = u)
      : Ge(u) && (Cn(u) || hr(u))
        ? (c.push({ i: a, v: e }), (a = 0), (e = u), (o = Oe(e)))
        : t || (r[i++] = u);
  }
  return r;
}
const Ru = Me(function (e, n) {
  n = at(n, !1, !1);
  var t = n.length;
  if (t < 1) throw new Error("bindAll must be passed function names");
  for (; t--; ) {
    var r = n[t];
    e[r] = La(e[r], e);
  }
  return e;
});
function Ou(e, n) {
  var t = function (r) {
    var i = t.cache,
      a = "" + (n ? n.apply(this, arguments) : r);
    return (Fn(i, a) || (i[a] = e.apply(this, arguments)), i[a]);
  };
  return ((t.cache = {}), t);
}
const Ma = Me(function (e, n, t) {
    return setTimeout(function () {
      return e.apply(null, t);
    }, n);
  }),
  Iu = Mn(Ma, De, 1);
function Nu(e, n, t) {
  var r,
    i,
    a,
    o,
    c = 0;
  t || (t = {});
  var s = function () {
      ((c = t.leading === !1 ? 0 : Qn()),
        (r = null),
        (o = e.apply(i, a)),
        r || (i = a = null));
    },
    u = function () {
      var l = Qn();
      !c && t.leading === !1 && (c = l);
      var p = n - (l - c);
      return (
        (i = this),
        (a = arguments),
        p <= 0 || p > n
          ? (r && (clearTimeout(r), (r = null)),
            (c = l),
            (o = e.apply(i, a)),
            r || (i = a = null))
          : !r && t.trailing !== !1 && (r = setTimeout(s, p)),
        o
      );
    };
  return (
    (u.cancel = function () {
      (clearTimeout(r), (c = 0), (r = i = a = null));
    }),
    u
  );
}
function Lu(e, n, t) {
  var r,
    i,
    a,
    o,
    c,
    s = function () {
      var l = Qn() - i;
      n > l
        ? (r = setTimeout(s, n - l))
        : ((r = null), t || (o = e.apply(c, a)), r || (a = c = null));
    },
    u = Me(function (l) {
      return (
        (c = this),
        (a = l),
        (i = Qn()),
        r || ((r = setTimeout(s, n)), t && (o = e.apply(c, a))),
        o
      );
    });
  return (
    (u.cancel = function () {
      (clearTimeout(r), (r = a = c = null));
    }),
    u
  );
}
function Mu(e, n) {
  return Mn(n, e);
}
function br(e) {
  return function () {
    return !e.apply(this, arguments);
  };
}
function Pu() {
  var e = arguments,
    n = e.length - 1;
  return function () {
    for (var t = n, r = e[n].apply(this, arguments); t--; )
      r = e[t].call(this, r);
    return r;
  };
}
function qu(e, n) {
  return function () {
    if (--e < 1) return n.apply(this, arguments);
  };
}
function Pa(e, n) {
  var t;
  return function () {
    return (--e > 0 && (t = n.apply(this, arguments)), e <= 1 && (n = null), t);
  };
}
const zu = Mn(Pa, 2);
function qa(e, n, t) {
  n = je(n, t);
  for (var r = Ee(e), i, a = 0, o = r.length; a < o; a++)
    if (((i = r[a]), n(e[i], i, e))) return i;
}
function ju(e) {
  return function (n, t, r) {
    t = je(t, r);
    for (var i = Oe(n), a = e > 0 ? 0 : i - 1; a >= 0 && a < i; a += e)
      if (t(n[a], a, n)) return a;
    return -1;
  };
}
const yr = ju(1),
  za = ju(-1);
function ja(e, n, t, r) {
  t = je(t, r, 1);
  for (var i = t(n), a = 0, o = Oe(e); a < o; ) {
    var c = Math.floor((a + o) / 2);
    t(e[c]) < i ? (a = c + 1) : (o = c);
  }
  return a;
}
function Vu(e, n, t) {
  return function (r, i, a) {
    var o = 0,
      c = Oe(r);
    if (typeof a == "number")
      e > 0
        ? (o = a >= 0 ? a : Math.max(a + c, o))
        : (c = a >= 0 ? Math.min(a + 1, c) : a + c + 1);
    else if (t && a && c) return ((a = t(r, i)), r[a] === i ? a : -1);
    if (i !== i) return ((a = n(Bt.call(r, o, c), Ua)), a >= 0 ? a + o : -1);
    for (a = e > 0 ? o : c - 1; a >= 0 && a < c; a += e)
      if (r[a] === i) return a;
    return -1;
  };
}
const Va = Vu(1, yr, ja),
  Xu = Vu(-1, za);
function xt(e, n, t) {
  var r = Ge(e) ? yr : qa,
    i = r(e, n, t);
  if (i !== void 0 && i !== -1) return e[i];
}
function Hu(e, n) {
  return xt(e, Rn(n));
}
function tn(e, n, t) {
  n = Wt(n, t);
  var r, i;
  if (Ge(e)) for (r = 0, i = e.length; r < i; r++) n(e[r], r, e);
  else {
    var a = Ee(e);
    for (r = 0, i = a.length; r < i; r++) n(e[a[r]], a[r], e);
  }
  return e;
}
function mn(e, n, t) {
  n = je(n, t);
  for (
    var r = !Ge(e) && Ee(e), i = (r || e).length, a = Array(i), o = 0;
    o < i;
    o++
  ) {
    var c = r ? r[o] : o;
    a[o] = n(e[c], c, e);
  }
  return a;
}
function $u(e) {
  var n = function (t, r, i, a) {
    var o = !Ge(t) && Ee(t),
      c = (o || t).length,
      s = e > 0 ? 0 : c - 1;
    for (a || ((i = t[o ? o[s] : s]), (s += e)); s >= 0 && s < c; s += e) {
      var u = o ? o[s] : s;
      i = r(i, t[u], u, t);
    }
    return i;
  };
  return function (t, r, i, a) {
    var o = arguments.length >= 3;
    return n(t, Wt(r, a, 4), i, o);
  };
}
const Yn = $u(1),
  nr = $u(-1);
function wn(e, n, t) {
  var r = [];
  return (
    (n = je(n, t)),
    tn(e, function (i, a, o) {
      n(i, a, o) && r.push(i);
    }),
    r
  );
}
function Gu(e, n, t) {
  return wn(e, br(je(n)), t);
}
function tr(e, n, t) {
  n = je(n, t);
  for (var r = !Ge(e) && Ee(e), i = (r || e).length, a = 0; a < i; a++) {
    var o = r ? r[a] : a;
    if (!n(e[o], o, e)) return !1;
  }
  return !0;
}
function rr(e, n, t) {
  n = je(n, t);
  for (var r = !Ge(e) && Ee(e), i = (r || e).length, a = 0; a < i; a++) {
    var o = r ? r[a] : a;
    if (n(e[o], o, e)) return !0;
  }
  return !1;
}
function Je(e, n, t, r) {
  return (
    Ge(e) || (e = Ln(e)),
    (typeof t != "number" || r) && (t = 0),
    Va(e, n, t) >= 0
  );
}
const Yu = Me(function (e, n, t) {
  var r, i;
  return (
    Ie(n)
      ? (i = n)
      : ((n = kt(n)), (r = n.slice(0, -1)), (n = n[n.length - 1])),
    mn(e, function (a) {
      var o = i;
      if (!o) {
        if ((r && r.length && (a = Oa(a, r)), a == null)) return;
        o = a[n];
      }
      return o == null ? o : o.apply(a, t);
    })
  );
});
function Dr(e, n) {
  return mn(e, gr(n));
}
function Zu(e, n) {
  return wn(e, Rn(n));
}
function Xa(e, n, t) {
  var r = -1 / 0,
    i = -1 / 0,
    a,
    o;
  if (
    n == null ||
    (typeof n == "number" && typeof e[0] != "object" && e != null)
  ) {
    e = Ge(e) ? e : Ln(e);
    for (var c = 0, s = e.length; c < s; c++)
      ((a = e[c]), a != null && a > r && (r = a));
  } else
    ((n = je(n, t)),
      tn(e, function (u, l, p) {
        ((o = n(u, l, p)),
          (o > i || (o === -1 / 0 && r === -1 / 0)) && ((r = u), (i = o)));
      }));
  return r;
}
function Ku(e, n, t) {
  var r = 1 / 0,
    i = 1 / 0,
    a,
    o;
  if (
    n == null ||
    (typeof n == "number" && typeof e[0] != "object" && e != null)
  ) {
    e = Ge(e) ? e : Ln(e);
    for (var c = 0, s = e.length; c < s; c++)
      ((a = e[c]), a != null && a < r && (r = a));
  } else
    ((n = je(n, t)),
      tn(e, function (u, l, p) {
        ((o = n(u, l, p)),
          (o < i || (o === 1 / 0 && r === 1 / 0)) && ((r = u), (i = o)));
      }));
  return r;
}
var Vf = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function Ha(e) {
  return e
    ? Cn(e)
      ? Bt.call(e)
      : fr(e)
        ? e.match(Vf)
        : Ge(e)
          ? mn(e, pr)
          : Ln(e)
    : [];
}
function $a(e, n, t) {
  if (n == null || t) return (Ge(e) || (e = Ln(e)), e[er(e.length - 1)]);
  var r = Ha(e),
    i = Oe(r);
  n = Math.max(Math.min(n, i), 0);
  for (var a = i - 1, o = 0; o < n; o++) {
    var c = er(o, a),
      s = r[o];
    ((r[o] = r[c]), (r[c] = s));
  }
  return r.slice(0, n);
}
function Qu(e) {
  return $a(e, 1 / 0);
}
function Ju(e, n, t) {
  var r = 0;
  return (
    (n = je(n, t)),
    Dr(
      mn(e, function (i, a, o) {
        return { value: i, index: r++, criteria: n(i, a, o) };
      }).sort(function (i, a) {
        var o = i.criteria,
          c = a.criteria;
        if (o !== c) {
          if (o > c || o === void 0) return 1;
          if (o < c || c === void 0) return -1;
        }
        return i.index - a.index;
      }),
      "value",
    )
  );
}
function vr(e, n) {
  return function (t, r, i) {
    var a = n ? [[], []] : {};
    return (
      (r = je(r, i)),
      tn(t, function (o, c) {
        var s = r(o, c, t);
        e(a, o, s);
      }),
      a
    );
  };
}
const ed = vr(function (e, n, t) {
    Fn(e, t) ? e[t].push(n) : (e[t] = [n]);
  }),
  nd = vr(function (e, n, t) {
    e[t] = n;
  }),
  td = vr(function (e, n, t) {
    Fn(e, t) ? e[t]++ : (e[t] = 1);
  }),
  rd = vr(function (e, n, t) {
    e[t ? 0 : 1].push(n);
  }, !0);
function id(e) {
  return e == null ? 0 : Ge(e) ? e.length : Ee(e).length;
}
function Xf(e, n, t) {
  return n in t;
}
const Ga = Me(function (e, n) {
    var t = {},
      r = n[0];
    if (e == null) return t;
    Ie(r)
      ? (n.length > 1 && (r = Wt(r, n[1])), (n = it(e)))
      : ((r = Xf), (n = at(n, !1, !1)), (e = Object(e)));
    for (var i = 0, a = n.length; i < a; i++) {
      var o = n[i],
        c = e[o];
      r(c, o, e) && (t[o] = c);
    }
    return t;
  }),
  ad = Me(function (e, n) {
    var t = n[0],
      r;
    return (
      Ie(t)
        ? ((t = br(t)), n.length > 1 && (r = n[1]))
        : ((n = mn(at(n, !1, !1), String)),
          (t = function (i, a) {
            return !Je(n, a);
          })),
      Ga(e, t, r)
    );
  });
function Ya(e, n, t) {
  return Bt.call(e, 0, Math.max(0, e.length - (n == null || t ? 1 : n)));
}
function Zn(e, n, t) {
  return e == null || e.length < 1
    ? n == null || t
      ? void 0
      : []
    : n == null || t
      ? e[0]
      : Ya(e, e.length - n);
}
function Wn(e, n, t) {
  return Bt.call(e, n == null || t ? 1 : n);
}
function od(e, n, t) {
  return e == null || e.length < 1
    ? n == null || t
      ? void 0
      : []
    : n == null || t
      ? e[e.length - 1]
      : Wn(e, Math.max(0, e.length - n));
}
function cd(e) {
  return wn(e, Boolean);
}
function sd(e, n) {
  return at(e, n, !1);
}
const Za = Me(function (e, n) {
    return (
      (n = at(n, !0, !0)),
      wn(e, function (t) {
        return !Je(n, t);
      })
    );
  }),
  ud = Me(function (e, n) {
    return Za(e, n);
  });
function _t(e, n, t, r) {
  (ya(n) || ((r = t), (t = n), (n = !1)), t != null && (t = je(t, r)));
  for (var i = [], a = [], o = 0, c = Oe(e); o < c; o++) {
    var s = e[o],
      u = t ? t(s, o, e) : s;
    n && !t
      ? ((!o || a !== u) && i.push(s), (a = u))
      : t
        ? Je(a, u) || (a.push(u), i.push(s))
        : Je(i, s) || i.push(s);
  }
  return i;
}
const dd = Me(function (e) {
  return _t(at(e, !0, !0));
});
function ld(e) {
  for (var n = [], t = arguments.length, r = 0, i = Oe(e); r < i; r++) {
    var a = e[r];
    if (!Je(n, a)) {
      var o;
      for (o = 1; o < t && Je(arguments[o], a); o++);
      o === t && n.push(a);
    }
  }
  return n;
}
function Ut(e) {
  for (var n = (e && Xa(e, Oe).length) || 0, t = Array(n), r = 0; r < n; r++)
    t[r] = Dr(e, r);
  return t;
}
const fd = Me(Ut);
function hd(e, n) {
  for (var t = {}, r = 0, i = Oe(e); r < i; r++)
    n ? (t[e[r]] = n[r]) : (t[e[r][0]] = e[r][1]);
  return t;
}
function pd(e, n, t) {
  (n == null && ((n = e || 0), (e = 0)), t || (t = n < e ? -1 : 1));
  for (
    var r = Math.max(Math.ceil((n - e) / t), 0), i = Array(r), a = 0;
    a < r;
    a++, e += t
  )
    i[a] = e;
  return i;
}
function gd(e, n) {
  if (n == null || n < 1) return [];
  for (var t = [], r = 0, i = e.length; r < i; )
    t.push(Bt.call(e, r, (r += n)));
  return t;
}
function Ka(e, n) {
  return e._chain ? De(n).chain() : n;
}
function Qa(e) {
  return (
    tn(vt(e), function (n) {
      var t = (De[n] = e[n]);
      De.prototype[n] = function () {
        var r = [this._wrapped];
        return (xf.apply(r, arguments), Ka(this, t.apply(De, r)));
      };
    }),
    De
  );
}
tn(
  ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
  function (e) {
    var n = lr[e];
    De.prototype[e] = function () {
      var t = this._wrapped;
      return (
        t != null &&
          (n.apply(t, arguments),
          (e === "shift" || e === "splice") && t.length === 0 && delete t[0]),
        Ka(this, t)
      );
    };
  },
);
tn(["concat", "join", "slice"], function (e) {
  var n = lr[e];
  De.prototype[e] = function () {
    var t = this._wrapped;
    return (t != null && (t = n.apply(t, arguments)), Ka(this, t));
  };
});
const Hf = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      VERSION: ga,
      after: qu,
      all: tr,
      allKeys: it,
      any: rr,
      assign: Kn,
      before: Pa,
      bind: La,
      bindAll: Ru,
      chain: ku,
      chunk: gd,
      clone: bu,
      collect: mn,
      compact: cd,
      compose: Pu,
      constant: Ta,
      contains: Je,
      countBy: td,
      create: mu,
      debounce: Lu,
      default: De,
      defaults: Wa,
      defer: Iu,
      delay: Ma,
      detect: xt,
      difference: Za,
      drop: Wn,
      each: tn,
      escape: Eu,
      every: tr,
      extend: ka,
      extendOwn: Kn,
      filter: wn,
      find: xt,
      findIndex: yr,
      findKey: qa,
      findLastIndex: za,
      findWhere: Hu,
      first: Zn,
      flatten: sd,
      foldl: Yn,
      foldr: nr,
      forEach: tn,
      functions: vt,
      get: Ia,
      groupBy: ed,
      has: Du,
      head: Zn,
      identity: pr,
      include: Je,
      includes: Je,
      indexBy: nd,
      indexOf: Va,
      initial: Ya,
      inject: Yn,
      intersection: ld,
      invert: Sa,
      invoke: Yu,
      isArguments: hr,
      isArray: Cn,
      isArrayBuffer: xa,
      isBoolean: ya,
      isDataView: Dt,
      isDate: Ys,
      isElement: Gs,
      isEmpty: au,
      isEqual: ou,
      isError: Ks,
      isFinite: nu,
      isFunction: Ie,
      isMap: du,
      isMatch: Ea,
      isNaN: Ua,
      isNull: $s,
      isNumber: Da,
      isObject: An,
      isRegExp: Zs,
      isSet: fu,
      isString: fr,
      isSymbol: va,
      isTypedArray: wa,
      isUndefined: ba,
      isWeakMap: lu,
      isWeakSet: hu,
      iteratee: mr,
      keys: Ee,
      last: od,
      lastIndexOf: Xu,
      map: mn,
      mapObject: xu,
      matcher: Rn,
      matches: Rn,
      max: Xa,
      memoize: Ou,
      methods: vt,
      min: Ku,
      mixin: Qa,
      negate: br,
      noop: Na,
      now: Qn,
      object: hd,
      omit: ad,
      once: zu,
      pairs: pu,
      partial: Mn,
      partition: rd,
      pick: Ga,
      pluck: Dr,
      property: gr,
      propertyOf: _u,
      random: er,
      range: pd,
      reduce: Yn,
      reduceRight: nr,
      reject: Gu,
      rest: Wn,
      restArguments: Me,
      result: Su,
      sample: $a,
      select: wn,
      shuffle: Qu,
      size: id,
      some: rr,
      sortBy: Ju,
      sortedIndex: ja,
      tail: Wn,
      take: Zn,
      tap: yu,
      template: Fu,
      templateSettings: Cu,
      throttle: Nu,
      times: Uu,
      toArray: Ha,
      toPath: Ra,
      transpose: Ut,
      unescape: Au,
      union: dd,
      uniq: _t,
      unique: _t,
      uniqueId: Bu,
      unzip: Ut,
      values: Ln,
      where: Zu,
      without: ud,
      wrap: Mu,
      zip: fd,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var da = Qa(Hf);
da._ = da;
const $f = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        VERSION: ga,
        after: qu,
        all: tr,
        allKeys: it,
        any: rr,
        assign: Kn,
        before: Pa,
        bind: La,
        bindAll: Ru,
        chain: ku,
        chunk: gd,
        clone: bu,
        collect: mn,
        compact: cd,
        compose: Pu,
        constant: Ta,
        contains: Je,
        countBy: td,
        create: mu,
        debounce: Lu,
        default: da,
        defaults: Wa,
        defer: Iu,
        delay: Ma,
        detect: xt,
        difference: Za,
        drop: Wn,
        each: tn,
        escape: Eu,
        every: tr,
        extend: ka,
        extendOwn: Kn,
        filter: wn,
        find: xt,
        findIndex: yr,
        findKey: qa,
        findLastIndex: za,
        findWhere: Hu,
        first: Zn,
        flatten: sd,
        foldl: Yn,
        foldr: nr,
        forEach: tn,
        functions: vt,
        get: Ia,
        groupBy: ed,
        has: Du,
        head: Zn,
        identity: pr,
        include: Je,
        includes: Je,
        indexBy: nd,
        indexOf: Va,
        initial: Ya,
        inject: Yn,
        intersection: ld,
        invert: Sa,
        invoke: Yu,
        isArguments: hr,
        isArray: Cn,
        isArrayBuffer: xa,
        isBoolean: ya,
        isDataView: Dt,
        isDate: Ys,
        isElement: Gs,
        isEmpty: au,
        isEqual: ou,
        isError: Ks,
        isFinite: nu,
        isFunction: Ie,
        isMap: du,
        isMatch: Ea,
        isNaN: Ua,
        isNull: $s,
        isNumber: Da,
        isObject: An,
        isRegExp: Zs,
        isSet: fu,
        isString: fr,
        isSymbol: va,
        isTypedArray: wa,
        isUndefined: ba,
        isWeakMap: lu,
        isWeakSet: hu,
        iteratee: mr,
        keys: Ee,
        last: od,
        lastIndexOf: Xu,
        map: mn,
        mapObject: xu,
        matcher: Rn,
        matches: Rn,
        max: Xa,
        memoize: Ou,
        methods: vt,
        min: Ku,
        mixin: Qa,
        negate: br,
        noop: Na,
        now: Qn,
        object: hd,
        omit: ad,
        once: zu,
        pairs: pu,
        partial: Mn,
        partition: rd,
        pick: Ga,
        pluck: Dr,
        property: gr,
        propertyOf: _u,
        random: er,
        range: pd,
        reduce: Yn,
        reduceRight: nr,
        reject: Gu,
        rest: Wn,
        restArguments: Me,
        result: Su,
        sample: $a,
        select: wn,
        shuffle: Qu,
        size: id,
        some: rr,
        sortBy: Ju,
        sortedIndex: ja,
        tail: Wn,
        take: Zn,
        tap: yu,
        template: Fu,
        templateSettings: Cu,
        throttle: Nu,
        times: Uu,
        toArray: Ha,
        toPath: Ra,
        transpose: Ut,
        unescape: Au,
        union: dd,
        uniq: _t,
        unique: _t,
        uniqueId: Bu,
        unzip: Ut,
        values: Ln,
        where: Zu,
        without: ud,
        wrap: Mu,
        zip: fd,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  we = df($f);
var Ja = {},
  Ce = {},
  md = { exports: {} },
  qt = { exports: {} },
  Ko;
function ot() {
  if (Ko) return qt.exports;
  Ko = 1;
  var e = (function () {
    return this === void 0;
  })();
  if (e)
    qt.exports = {
      freeze: Object.freeze,
      defineProperty: Object.defineProperty,
      getDescriptor: Object.getOwnPropertyDescriptor,
      keys: Object.keys,
      names: Object.getOwnPropertyNames,
      getPrototypeOf: Object.getPrototypeOf,
      isArray: Array.isArray,
      isES5: e,
      propertyIsWritable: function (l, p) {
        var m = Object.getOwnPropertyDescriptor(l, p);
        return !!(!m || m.writable || m.set);
      },
    };
  else {
    var n = {}.hasOwnProperty,
      t = {}.toString,
      r = {}.constructor.prototype,
      i = function (l) {
        var p = [];
        for (var m in l) n.call(l, m) && p.push(m);
        return p;
      },
      a = function (l, p) {
        return { value: l[p] };
      },
      o = function (l, p, m) {
        return ((l[p] = m.value), l);
      },
      c = function (l) {
        return l;
      },
      s = function (l) {
        try {
          return Object(l).constructor.prototype;
        } catch {
          return r;
        }
      },
      u = function (l) {
        try {
          return t.call(l) === "[object Array]";
        } catch {
          return !1;
        }
      };
    qt.exports = {
      isArray: u,
      keys: i,
      names: i,
      defineProperty: o,
      getDescriptor: a,
      freeze: c,
      getPrototypeOf: s,
      isES5: e,
      propertyIsWritable: function () {
        return !0;
      },
    };
  }
  return qt.exports;
}
var ei, Qo;
function Ue() {
  if (Qo) return ei;
  Qo = 1;
  var e = {},
    n = ot(),
    t = typeof navigator > "u",
    r = { e: {} },
    i,
    a =
      typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof fe < "u"
            ? fe
            : fe !== void 0
              ? fe
              : null;
  function o() {
    try {
      var M = i;
      return ((i = null), M.apply(this, arguments));
    } catch (Z) {
      return ((r.e = Z), r);
    }
  }
  function c(M) {
    return ((i = M), o);
  }
  var s = function (M, Z) {
    var J = {}.hasOwnProperty;
    function ie() {
      ((this.constructor = M), (this.constructor$ = Z));
      for (var oe in Z.prototype)
        J.call(Z.prototype, oe) &&
          oe.charAt(oe.length - 1) !== "$" &&
          (this[oe + "$"] = Z.prototype[oe]);
    }
    return (
      (ie.prototype = Z.prototype),
      (M.prototype = new ie()),
      M.prototype
    );
  };
  function u(M) {
    return (
      M == null ||
      M === !0 ||
      M === !1 ||
      typeof M == "string" ||
      typeof M == "number"
    );
  }
  function l(M) {
    return typeof M == "function" || (typeof M == "object" && M !== null);
  }
  function p(M) {
    return u(M) ? new Error(E(M)) : M;
  }
  function m(M, Z) {
    var J = M.length,
      ie = new Array(J + 1),
      oe;
    for (oe = 0; oe < J; ++oe) ie[oe] = M[oe];
    return ((ie[oe] = Z), ie);
  }
  function b(M, Z, J) {
    if (n.isES5) {
      var ie = Object.getOwnPropertyDescriptor(M, Z);
      if (ie != null) return ie.get == null && ie.set == null ? ie.value : J;
    } else return {}.hasOwnProperty.call(M, Z) ? M[Z] : void 0;
  }
  function y(M, Z, J) {
    if (u(M)) return M;
    var ie = { value: J, configurable: !0, enumerable: !1, writable: !0 };
    return (n.defineProperty(M, Z, ie), M);
  }
  function f(M) {
    throw M;
  }
  var d = (function () {
      var M = [Array.prototype, Object.prototype, Function.prototype],
        Z = function (oe) {
          for (var ce = 0; ce < M.length; ++ce) if (M[ce] === oe) return !0;
          return !1;
        };
      if (n.isES5) {
        var J = Object.getOwnPropertyNames;
        return function (oe) {
          for (var ce = [], de = Object.create(null); oe != null && !Z(oe); ) {
            var me;
            try {
              me = J(oe);
            } catch {
              return ce;
            }
            for (var ye = 0; ye < me.length; ++ye) {
              var $ = me[ye];
              if (!de[$]) {
                de[$] = !0;
                var ne = Object.getOwnPropertyDescriptor(oe, $);
                ne != null && ne.get == null && ne.set == null && ce.push($);
              }
            }
            oe = n.getPrototypeOf(oe);
          }
          return ce;
        };
      } else {
        var ie = {}.hasOwnProperty;
        return function (oe) {
          if (Z(oe)) return [];
          var ce = [];
          e: for (var de in oe)
            if (ie.call(oe, de)) ce.push(de);
            else {
              for (var me = 0; me < M.length; ++me)
                if (ie.call(M[me], de)) continue e;
              ce.push(de);
            }
          return ce;
        };
      }
    })(),
    g = /this\s*\.\s*\S+\s*=/;
  function h(M) {
    try {
      if (typeof M == "function") {
        var Z = n.names(M.prototype),
          J = n.isES5 && Z.length > 1,
          ie = Z.length > 0 && !(Z.length === 1 && Z[0] === "constructor"),
          oe = g.test(M + "") && n.names(M).length > 0;
        if (J || ie || oe) return !0;
      }
      return !1;
    } catch {
      return !1;
    }
  }
  function D(M) {
    return M;
  }
  var _ = /^[a-z$_][a-z$_0-9]*$/i;
  function U(M) {
    return _.test(M);
  }
  function w(M, Z, J) {
    for (var ie = new Array(M), oe = 0; oe < M; ++oe) ie[oe] = Z + oe + J;
    return ie;
  }
  function E(M) {
    try {
      return M + "";
    } catch {
      return "[no string representation]";
    }
  }
  function O(M) {
    return (
      M !== null &&
      typeof M == "object" &&
      typeof M.message == "string" &&
      typeof M.name == "string"
    );
  }
  function I(M) {
    try {
      y(M, "isOperational", !0);
    } catch {}
  }
  function Y(M) {
    return M == null
      ? !1
      : M instanceof Error.__BluebirdErrorTypes__.OperationalError ||
          M.isOperational === !0;
  }
  function ee(M) {
    return O(M) && n.propertyIsWritable(M, "stack");
  }
  var T = (function () {
    return "stack" in new Error()
      ? function (M) {
          return ee(M) ? M : new Error(E(M));
        }
      : function (M) {
          if (ee(M)) return M;
          try {
            throw new Error(E(M));
          } catch (Z) {
            return Z;
          }
        };
  })();
  function N(M) {
    return {}.toString.call(M);
  }
  function x(M, Z, J) {
    for (var ie = n.names(M), oe = 0; oe < ie.length; ++oe) {
      var ce = ie[oe];
      if (J(ce))
        try {
          n.defineProperty(Z, ce, n.getDescriptor(M, ce));
        } catch {}
    }
  }
  var j = function (M) {
    return n.isArray(M) ? M : null;
  };
  if (typeof Symbol < "u" && Symbol.iterator) {
    var C =
      typeof Array.from == "function"
        ? function (M) {
            return Array.from(M);
          }
        : function (M) {
            for (
              var Z = [], J = M[Symbol.iterator](), ie;
              !(ie = J.next()).done;
            )
              Z.push(ie.value);
            return Z;
          };
    j = function (M) {
      return n.isArray(M)
        ? M
        : M != null && typeof M[Symbol.iterator] == "function"
          ? C(M)
          : null;
    };
  }
  var k =
      typeof process < "u" && N(process).toLowerCase() === "[object process]",
    S = typeof process < "u" && typeof e < "u";
  function W(M) {
    return S ? e[M] : void 0;
  }
  function z() {
    if (typeof Promise == "function")
      try {
        var M = new Promise(function () {});
        if ({}.toString.call(M) === "[object Promise]") return Promise;
      } catch {}
  }
  function R(M, Z) {
    return M.bind(Z);
  }
  var L = {
    isClass: h,
    isIdentifier: U,
    inheritedDataKeys: d,
    getDataPropertyOrDefault: b,
    thrower: f,
    isArray: n.isArray,
    asArray: j,
    notEnumerableProp: y,
    isPrimitive: u,
    isObject: l,
    isError: O,
    canEvaluate: t,
    errorObj: r,
    tryCatch: c,
    inherits: s,
    withAppended: m,
    maybeWrapAsError: p,
    toFastProperties: D,
    filledRange: w,
    toString: E,
    canAttachTrace: ee,
    ensureErrorObject: T,
    originatesFromRejection: Y,
    markAsOriginatingFromRejection: I,
    classString: N,
    copyDescriptors: x,
    hasDevTools:
      typeof chrome < "u" && chrome && typeof chrome.loadTimes == "function",
    isNode: k,
    hasEnvVariables: S,
    env: W,
    global: a,
    getNativePromise: z,
    domainBind: R,
  };
  ((L.isRecentNode =
    L.isNode &&
    (function () {
      var M = process.versions.node.split(".").map(Number);
      return (M[0] === 0 && M[1] > 10) || M[0] > 0;
    })()),
    L.isNode && L.toFastProperties(process));
  try {
    throw new Error();
  } catch (M) {
    L.lastLineError = M;
  }
  return ((ei = L), ei);
}
var zt = { exports: {} },
  ni,
  Jo;
function Gf() {
  if (Jo) return ni;
  Jo = 1;
  var e = Ue(),
    n,
    t = function () {
      throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
    },
    r = e.getNativePromise();
  if (e.isNode && typeof MutationObserver > "u") {
    var i = fe.setImmediate,
      a = process.nextTick;
    n = e.isRecentNode
      ? function (c) {
          i.call(fe, c);
        }
      : function (c) {
          a.call(process, c);
        };
  } else if (typeof r == "function" && typeof r.resolve == "function") {
    var o = r.resolve();
    n = function (c) {
      o.then(c);
    };
  } else
    typeof MutationObserver < "u" &&
    !(
      typeof window < "u" &&
      window.navigator &&
      (window.navigator.standalone || window.cordova)
    )
      ? (n = (function () {
          var c = document.createElement("div"),
            s = { attributes: !0 },
            u = !1,
            l = document.createElement("div"),
            p = new MutationObserver(function () {
              (c.classList.toggle("foo"), (u = !1));
            });
          p.observe(l, s);
          var m = function () {
            u || ((u = !0), l.classList.toggle("foo"));
          };
          return function (y) {
            var f = new MutationObserver(function () {
              (f.disconnect(), y());
            });
            (f.observe(c, s), m());
          };
        })())
      : typeof setImmediate < "u"
        ? (n = function (c) {
            setImmediate(c);
          })
        : typeof setTimeout < "u"
          ? (n = function (c) {
              setTimeout(c, 0);
            })
          : (n = t);
  return ((ni = n), ni);
}
var ti, ec;
function Yf() {
  if (ec) return ti;
  ec = 1;
  function e(t, r, i, a, o) {
    for (var c = 0; c < o; ++c) ((i[c + a] = t[c + r]), (t[c + r] = void 0));
  }
  function n(t) {
    ((this._capacity = t), (this._length = 0), (this._front = 0));
  }
  return (
    (n.prototype._willBeOverCapacity = function (t) {
      return this._capacity < t;
    }),
    (n.prototype._pushOne = function (t) {
      var r = this.length();
      this._checkCapacity(r + 1);
      var i = (this._front + r) & (this._capacity - 1);
      ((this[i] = t), (this._length = r + 1));
    }),
    (n.prototype.push = function (t, r, i) {
      var a = this.length() + 3;
      if (this._willBeOverCapacity(a)) {
        (this._pushOne(t), this._pushOne(r), this._pushOne(i));
        return;
      }
      var o = this._front + a - 3;
      this._checkCapacity(a);
      var c = this._capacity - 1;
      ((this[(o + 0) & c] = t),
        (this[(o + 1) & c] = r),
        (this[(o + 2) & c] = i),
        (this._length = a));
    }),
    (n.prototype.shift = function () {
      var t = this._front,
        r = this[t];
      return (
        (this[t] = void 0),
        (this._front = (t + 1) & (this._capacity - 1)),
        this._length--,
        r
      );
    }),
    (n.prototype.length = function () {
      return this._length;
    }),
    (n.prototype._checkCapacity = function (t) {
      this._capacity < t && this._resizeTo(this._capacity << 1);
    }),
    (n.prototype._resizeTo = function (t) {
      var r = this._capacity;
      this._capacity = t;
      var i = this._front,
        a = this._length,
        o = (i + a) & (r - 1);
      e(this, 0, this, r, o);
    }),
    (ti = n),
    ti
  );
}
var nc;
function Zf() {
  if (nc) return zt.exports;
  nc = 1;
  var e;
  try {
    throw new Error();
  } catch (s) {
    e = s;
  }
  var n = Gf(),
    t = Yf(),
    r = Ue();
  function i() {
    ((this._customScheduler = !1),
      (this._isTickUsed = !1),
      (this._lateQueue = new t(16)),
      (this._normalQueue = new t(16)),
      (this._haveDrainedQueues = !1),
      (this._trampolineEnabled = !0));
    var s = this;
    ((this.drainQueues = function () {
      s._drainQueues();
    }),
      (this._schedule = n));
  }
  ((i.prototype.setScheduler = function (s) {
    var u = this._schedule;
    return ((this._schedule = s), (this._customScheduler = !0), u);
  }),
    (i.prototype.hasCustomScheduler = function () {
      return this._customScheduler;
    }),
    (i.prototype.enableTrampoline = function () {
      this._trampolineEnabled = !0;
    }),
    (i.prototype.disableTrampolineIfNecessary = function () {
      r.hasDevTools && (this._trampolineEnabled = !1);
    }),
    (i.prototype.haveItemsQueued = function () {
      return this._isTickUsed || this._haveDrainedQueues;
    }),
    (i.prototype.fatalError = function (s, u) {
      u
        ? (process.stderr.write(
            "Fatal " +
              (s instanceof Error ? s.stack : s) +
              `
`,
          ),
          process.exit(2))
        : this.throwLater(s);
    }),
    (i.prototype.throwLater = function (s, u) {
      if (
        (arguments.length === 1 &&
          ((u = s),
          (s = function () {
            throw u;
          })),
        typeof setTimeout < "u")
      )
        setTimeout(function () {
          s(u);
        }, 0);
      else
        try {
          this._schedule(function () {
            s(u);
          });
        } catch {
          throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
        }
    }));
  function a(s, u, l) {
    (this._lateQueue.push(s, u, l), this._queueTick());
  }
  function o(s, u, l) {
    (this._normalQueue.push(s, u, l), this._queueTick());
  }
  function c(s) {
    (this._normalQueue._pushOne(s), this._queueTick());
  }
  return (
    r.hasDevTools
      ? ((i.prototype.invokeLater = function (s, u, l) {
          this._trampolineEnabled
            ? a.call(this, s, u, l)
            : this._schedule(function () {
                setTimeout(function () {
                  s.call(u, l);
                }, 100);
              });
        }),
        (i.prototype.invoke = function (s, u, l) {
          this._trampolineEnabled
            ? o.call(this, s, u, l)
            : this._schedule(function () {
                s.call(u, l);
              });
        }),
        (i.prototype.settlePromises = function (s) {
          this._trampolineEnabled
            ? c.call(this, s)
            : this._schedule(function () {
                s._settlePromises();
              });
        }))
      : ((i.prototype.invokeLater = a),
        (i.prototype.invoke = o),
        (i.prototype.settlePromises = c)),
    (i.prototype._drainQueue = function (s) {
      for (; s.length() > 0; ) {
        var u = s.shift();
        if (typeof u != "function") {
          u._settlePromises();
          continue;
        }
        var l = s.shift(),
          p = s.shift();
        u.call(l, p);
      }
    }),
    (i.prototype._drainQueues = function () {
      (this._drainQueue(this._normalQueue),
        this._reset(),
        (this._haveDrainedQueues = !0),
        this._drainQueue(this._lateQueue));
    }),
    (i.prototype._queueTick = function () {
      this._isTickUsed ||
        ((this._isTickUsed = !0), this._schedule(this.drainQueues));
    }),
    (i.prototype._reset = function () {
      this._isTickUsed = !1;
    }),
    (zt.exports = i),
    (zt.exports.firstLineError = e),
    zt.exports
  );
}
var ri, tc;
function En() {
  if (tc) return ri;
  tc = 1;
  var e = ot(),
    n = e.freeze,
    t = Ue(),
    r = t.inherits,
    i = t.notEnumerableProp;
  function a(g, h) {
    function D(_) {
      if (!(this instanceof D)) return new D(_);
      (i(this, "message", typeof _ == "string" ? _ : h),
        i(this, "name", g),
        Error.captureStackTrace
          ? Error.captureStackTrace(this, this.constructor)
          : Error.call(this));
    }
    return (r(D, Error), D);
  }
  var o,
    c,
    s = a("Warning", "warning"),
    u = a("CancellationError", "cancellation error"),
    l = a("TimeoutError", "timeout error"),
    p = a("AggregateError", "aggregate error");
  try {
    ((o = TypeError), (c = RangeError));
  } catch {
    ((o = a("TypeError", "type error")), (c = a("RangeError", "range error")));
  }
  for (
    var m =
        "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(
          " ",
        ),
      b = 0;
    b < m.length;
    ++b
  )
    typeof Array.prototype[m[b]] == "function" &&
      (p.prototype[m[b]] = Array.prototype[m[b]]);
  (e.defineProperty(p.prototype, "length", {
    value: 0,
    configurable: !1,
    writable: !0,
    enumerable: !0,
  }),
    (p.prototype.isOperational = !0));
  var y = 0;
  p.prototype.toString = function () {
    var g = Array(y * 4 + 1).join(" "),
      h =
        `
` +
        g +
        `AggregateError of:
`;
    (y++, (g = Array(y * 4 + 1).join(" ")));
    for (var D = 0; D < this.length; ++D) {
      for (
        var _ = this[D] === this ? "[Circular AggregateError]" : this[D] + "",
          U = _.split(`
`),
          w = 0;
        w < U.length;
        ++w
      )
        U[w] = g + U[w];
      ((_ = U.join(`
`)),
        (h +=
          _ +
          `
`));
    }
    return (y--, h);
  };
  function f(g) {
    if (!(this instanceof f)) return new f(g);
    (i(this, "name", "OperationalError"),
      i(this, "message", g),
      (this.cause = g),
      (this.isOperational = !0),
      g instanceof Error
        ? (i(this, "message", g.message), i(this, "stack", g.stack))
        : Error.captureStackTrace &&
          Error.captureStackTrace(this, this.constructor));
  }
  r(f, Error);
  var d = Error.__BluebirdErrorTypes__;
  return (
    d ||
      ((d = n({
        CancellationError: u,
        TimeoutError: l,
        OperationalError: f,
        RejectionError: f,
        AggregateError: p,
      })),
      e.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: d,
        writable: !1,
        enumerable: !1,
        configurable: !1,
      })),
    (ri = {
      Error,
      TypeError: o,
      RangeError: c,
      CancellationError: d.CancellationError,
      OperationalError: d.OperationalError,
      TimeoutError: d.TimeoutError,
      AggregateError: d.AggregateError,
      Warning: s,
    }),
    ri
  );
}
var ii, rc;
function Kf() {
  return (
    rc ||
      ((rc = 1),
      (ii = function (e, n) {
        var t = Ue(),
          r = t.errorObj,
          i = t.isObject;
        function a(p, m) {
          if (i(p)) {
            if (p instanceof e) return p;
            var b = c(p);
            if (b === r) {
              m && m._pushContext();
              var y = e.reject(b.e);
              return (m && m._popContext(), y);
            } else if (typeof b == "function") {
              if (u(p)) {
                var y = new e(n);
                return (p._then(y._fulfill, y._reject, void 0, y, null), y);
              }
              return l(p, b, m);
            }
          }
          return p;
        }
        function o(p) {
          return p.then;
        }
        function c(p) {
          try {
            return o(p);
          } catch (m) {
            return ((r.e = m), r);
          }
        }
        var s = {}.hasOwnProperty;
        function u(p) {
          try {
            return s.call(p, "_promise0");
          } catch {
            return !1;
          }
        }
        function l(p, m, b) {
          var y = new e(n),
            f = y;
          (b && b._pushContext(), y._captureStackTrace(), b && b._popContext());
          var d = !0,
            g = t.tryCatch(m).call(p, h, D);
          ((d = !1),
            y && g === r && (y._rejectCallback(g.e, !0, !0), (y = null)));
          function h(_) {
            y && (y._resolveCallback(_), (y = null));
          }
          function D(_) {
            y && (y._rejectCallback(_, d, !0), (y = null));
          }
          return f;
        }
        return a;
      })),
    ii
  );
}
var ai, ic;
function Qf() {
  return (
    ic ||
      ((ic = 1),
      (ai = function (e, n, t, r, i) {
        var a = Ue();
        a.isArray;
        function o(s) {
          switch (s) {
            case -2:
              return [];
            case -3:
              return {};
          }
        }
        function c(s) {
          var u = (this._promise = new e(n));
          (s instanceof e && u._propagateFrom(s, 3),
            u._setOnCancel(this),
            (this._values = s),
            (this._length = 0),
            (this._totalResolved = 0),
            this._init(void 0, -2));
        }
        return (
          a.inherits(c, i),
          (c.prototype.length = function () {
            return this._length;
          }),
          (c.prototype.promise = function () {
            return this._promise;
          }),
          (c.prototype._init = function s(u, l) {
            var p = t(this._values, this._promise);
            if (p instanceof e) {
              p = p._target();
              var m = p._bitField;
              if (((this._values = p), m & 50397184))
                if (m & 33554432) p = p._value();
                else
                  return m & 16777216
                    ? this._reject(p._reason())
                    : this._cancel();
              else
                return (
                  this._promise._setAsyncGuaranteed(),
                  p._then(s, this._reject, void 0, this, l)
                );
            }
            if (((p = a.asArray(p)), p === null)) {
              var b = r(
                "expecting an array or an iterable object but got " +
                  a.classString(p),
              ).reason();
              this._promise._rejectCallback(b, !1);
              return;
            }
            if (p.length === 0) {
              l === -5 ? this._resolveEmptyArray() : this._resolve(o(l));
              return;
            }
            this._iterate(p);
          }),
          (c.prototype._iterate = function (s) {
            var u = this.getActualLength(s.length);
            ((this._length = u),
              (this._values = this.shouldCopyValues()
                ? new Array(u)
                : this._values));
            for (var l = this._promise, p = !1, m = null, b = 0; b < u; ++b) {
              var y = t(s[b], l);
              (y instanceof e
                ? ((y = y._target()), (m = y._bitField))
                : (m = null),
                p
                  ? m !== null && y.suppressUnhandledRejections()
                  : m !== null
                    ? m & 50397184
                      ? m & 33554432
                        ? (p = this._promiseFulfilled(y._value(), b))
                        : m & 16777216
                          ? (p = this._promiseRejected(y._reason(), b))
                          : (p = this._promiseCancelled(b))
                      : (y._proxy(this, b), (this._values[b] = y))
                    : (p = this._promiseFulfilled(y, b)));
            }
            p || l._setAsyncGuaranteed();
          }),
          (c.prototype._isResolved = function () {
            return this._values === null;
          }),
          (c.prototype._resolve = function (s) {
            ((this._values = null), this._promise._fulfill(s));
          }),
          (c.prototype._cancel = function () {
            this._isResolved() ||
              !this._promise._isCancellable() ||
              ((this._values = null), this._promise._cancel());
          }),
          (c.prototype._reject = function (s) {
            ((this._values = null), this._promise._rejectCallback(s, !1));
          }),
          (c.prototype._promiseFulfilled = function (s, u) {
            this._values[u] = s;
            var l = ++this._totalResolved;
            return l >= this._length ? (this._resolve(this._values), !0) : !1;
          }),
          (c.prototype._promiseCancelled = function () {
            return (this._cancel(), !0);
          }),
          (c.prototype._promiseRejected = function (s) {
            return (this._totalResolved++, this._reject(s), !0);
          }),
          (c.prototype._resultCancelled = function () {
            if (!this._isResolved()) {
              var s = this._values;
              if ((this._cancel(), s instanceof e)) s.cancel();
              else
                for (var u = 0; u < s.length; ++u)
                  s[u] instanceof e && s[u].cancel();
            }
          }),
          (c.prototype.shouldCopyValues = function () {
            return !0;
          }),
          (c.prototype.getActualLength = function (s) {
            return s;
          }),
          c
        );
      })),
    ai
  );
}
var oi, ac;
function Jf() {
  return (
    ac ||
      ((ac = 1),
      (oi = function (e) {
        var n = !1,
          t = [];
        ((e.prototype._promiseCreated = function () {}),
          (e.prototype._pushContext = function () {}),
          (e.prototype._popContext = function () {
            return null;
          }),
          (e._peekContext = e.prototype._peekContext = function () {}));
        function r() {
          this._trace = new r.CapturedTrace(a());
        }
        ((r.prototype._pushContext = function () {
          this._trace !== void 0 &&
            ((this._trace._promiseCreated = null), t.push(this._trace));
        }),
          (r.prototype._popContext = function () {
            if (this._trace !== void 0) {
              var o = t.pop(),
                c = o._promiseCreated;
              return ((o._promiseCreated = null), c);
            }
            return null;
          }));
        function i() {
          if (n) return new r();
        }
        function a() {
          var o = t.length - 1;
          if (o >= 0) return t[o];
        }
        return (
          (r.CapturedTrace = null),
          (r.create = i),
          (r.deactivateLongStackTraces = function () {}),
          (r.activateLongStackTraces = function () {
            var o = e.prototype._pushContext,
              c = e.prototype._popContext,
              s = e._peekContext,
              u = e.prototype._peekContext,
              l = e.prototype._promiseCreated;
            ((r.deactivateLongStackTraces = function () {
              ((e.prototype._pushContext = o),
                (e.prototype._popContext = c),
                (e._peekContext = s),
                (e.prototype._peekContext = u),
                (e.prototype._promiseCreated = l),
                (n = !1));
            }),
              (n = !0),
              (e.prototype._pushContext = r.prototype._pushContext),
              (e.prototype._popContext = r.prototype._popContext),
              (e._peekContext = e.prototype._peekContext = a),
              (e.prototype._promiseCreated = function () {
                var p = this._peekContext();
                p && p._promiseCreated == null && (p._promiseCreated = this);
              }));
          }),
          r
        );
      })),
    oi
  );
}
var ci, oc;
function eh() {
  return (
    oc ||
      ((oc = 1),
      (ci = function (e, n) {
        var t = e._getDomain,
          r = e._async,
          i = En().Warning,
          a = Ue(),
          o = a.canAttachTrace,
          c,
          s,
          u = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
          l = /\((?:timers\.js):\d+:\d+\)/,
          p = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
          m = null,
          b = null,
          y = !1,
          f,
          d = !!(
            a.env("BLUEBIRD_DEBUG") != 0 &&
            (a.env("BLUEBIRD_DEBUG") || a.env("NODE_ENV") === "development")
          ),
          g = !!(
            a.env("BLUEBIRD_WARNINGS") != 0 &&
            (d || a.env("BLUEBIRD_WARNINGS"))
          ),
          h = !!(
            a.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
            (d || a.env("BLUEBIRD_LONG_STACK_TRACES"))
          ),
          D =
            a.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
            (g || !!a.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
        ((e.prototype.suppressUnhandledRejections = function () {
          var B = this._target();
          B._bitField = (B._bitField & -1048577) | 524288;
        }),
          (e.prototype._ensurePossibleRejectionHandled = function () {
            this._bitField & 524288 ||
              (this._setRejectionIsUnhandled(),
              r.invokeLater(this._notifyUnhandledRejection, this, void 0));
          }),
          (e.prototype._notifyUnhandledRejectionIsHandled = function () {
            $("rejectionHandled", c, void 0, this);
          }),
          (e.prototype._setReturnedNonUndefined = function () {
            this._bitField = this._bitField | 268435456;
          }),
          (e.prototype._returnedNonUndefined = function () {
            return (this._bitField & 268435456) !== 0;
          }),
          (e.prototype._notifyUnhandledRejection = function () {
            if (this._isRejectionUnhandled()) {
              var B = this._settledValue();
              (this._setUnhandledRejectionIsNotified(),
                $("unhandledRejection", s, B, this));
            }
          }),
          (e.prototype._setUnhandledRejectionIsNotified = function () {
            this._bitField = this._bitField | 262144;
          }),
          (e.prototype._unsetUnhandledRejectionIsNotified = function () {
            this._bitField = this._bitField & -262145;
          }),
          (e.prototype._isUnhandledRejectionNotified = function () {
            return (this._bitField & 262144) > 0;
          }),
          (e.prototype._setRejectionIsUnhandled = function () {
            this._bitField = this._bitField | 1048576;
          }),
          (e.prototype._unsetRejectionIsUnhandled = function () {
            ((this._bitField = this._bitField & -1048577),
              this._isUnhandledRejectionNotified() &&
                (this._unsetUnhandledRejectionIsNotified(),
                this._notifyUnhandledRejectionIsHandled()));
          }),
          (e.prototype._isRejectionUnhandled = function () {
            return (this._bitField & 1048576) > 0;
          }),
          (e.prototype._warn = function (B, P, V) {
            return Z(B, P, V || this);
          }),
          (e.onPossiblyUnhandledRejection = function (B) {
            var P = t();
            s =
              typeof B == "function"
                ? P === null
                  ? B
                  : a.domainBind(P, B)
                : void 0;
          }),
          (e.onUnhandledRejectionHandled = function (B) {
            var P = t();
            c =
              typeof B == "function"
                ? P === null
                  ? B
                  : a.domainBind(P, B)
                : void 0;
          }));
        var _ = function () {};
        ((e.longStackTraces = function () {
          if (r.haveItemsQueued() && !X.longStackTraces)
            throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
          if (!X.longStackTraces && G()) {
            var B = e.prototype._captureStackTrace,
              P = e.prototype._attachExtraTrace;
            ((X.longStackTraces = !0),
              (_ = function () {
                if (r.haveItemsQueued() && !X.longStackTraces)
                  throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
                ((e.prototype._captureStackTrace = B),
                  (e.prototype._attachExtraTrace = P),
                  n.deactivateLongStackTraces(),
                  r.enableTrampoline(),
                  (X.longStackTraces = !1));
              }),
              (e.prototype._captureStackTrace = z),
              (e.prototype._attachExtraTrace = R),
              n.activateLongStackTraces(),
              r.disableTrampolineIfNecessary());
          }
        }),
          (e.hasLongStackTraces = function () {
            return X.longStackTraces && G();
          }));
        var U = (function () {
            try {
              if (typeof CustomEvent == "function") {
                var B = new CustomEvent("CustomEvent");
                return (
                  a.global.dispatchEvent(B),
                  function (P, V) {
                    var K = new CustomEvent(P.toLowerCase(), {
                      detail: V,
                      cancelable: !0,
                    });
                    return !a.global.dispatchEvent(K);
                  }
                );
              } else if (typeof Event == "function") {
                var B = new Event("CustomEvent");
                return (
                  a.global.dispatchEvent(B),
                  function (V, K) {
                    var ae = new Event(V.toLowerCase(), { cancelable: !0 });
                    return ((ae.detail = K), !a.global.dispatchEvent(ae));
                  }
                );
              } else {
                var B = document.createEvent("CustomEvent");
                return (
                  B.initCustomEvent("testingtheevent", !1, !0, {}),
                  a.global.dispatchEvent(B),
                  function (V, K) {
                    var ae = document.createEvent("CustomEvent");
                    return (
                      ae.initCustomEvent(V.toLowerCase(), !1, !0, K),
                      !a.global.dispatchEvent(ae)
                    );
                  }
                );
              }
            } catch {}
            return function () {
              return !1;
            };
          })(),
          w = (function () {
            return a.isNode
              ? function () {
                  return process.emit.apply(process, arguments);
                }
              : a.global
                ? function (B) {
                    var P = "on" + B.toLowerCase(),
                      V = a.global[P];
                    return V
                      ? (V.apply(a.global, [].slice.call(arguments, 1)), !0)
                      : !1;
                  }
                : function () {
                    return !1;
                  };
          })();
        function E(B, P) {
          return { promise: P };
        }
        var O = {
            promiseCreated: E,
            promiseFulfilled: E,
            promiseRejected: E,
            promiseResolved: E,
            promiseCancelled: E,
            promiseChained: function (B, P, V) {
              return { promise: P, child: V };
            },
            warning: function (B, P) {
              return { warning: P };
            },
            unhandledRejection: function (B, P, V) {
              return { reason: P, promise: V };
            },
            rejectionHandled: E,
          },
          I = function (B) {
            var P = !1;
            try {
              P = w.apply(null, arguments);
            } catch (K) {
              (r.throwLater(K), (P = !0));
            }
            var V = !1;
            try {
              V = U(B, O[B].apply(null, arguments));
            } catch (K) {
              (r.throwLater(K), (V = !0));
            }
            return V || P;
          };
        e.config = function (B) {
          if (
            ((B = Object(B)),
            "longStackTraces" in B &&
              (B.longStackTraces
                ? e.longStackTraces()
                : !B.longStackTraces && e.hasLongStackTraces() && _()),
            "warnings" in B)
          ) {
            var P = B.warnings;
            ((X.warnings = !!P),
              (D = X.warnings),
              a.isObject(P) &&
                "wForgottenReturn" in P &&
                (D = !!P.wForgottenReturn));
          }
          if ("cancellation" in B && B.cancellation && !X.cancellation) {
            if (r.haveItemsQueued())
              throw new Error(
                "cannot enable cancellation after promises are in use",
              );
            ((e.prototype._clearCancellationData = j),
              (e.prototype._propagateFrom = C),
              (e.prototype._onCancel = N),
              (e.prototype._setOnCancel = x),
              (e.prototype._attachCancellationCallback = T),
              (e.prototype._execute = ee),
              (S = C),
              (X.cancellation = !0));
          }
          return (
            "monitoring" in B &&
              (B.monitoring && !X.monitoring
                ? ((X.monitoring = !0), (e.prototype._fireEvent = I))
                : !B.monitoring &&
                  X.monitoring &&
                  ((X.monitoring = !1), (e.prototype._fireEvent = Y))),
            e
          );
        };
        function Y() {
          return !1;
        }
        ((e.prototype._fireEvent = Y),
          (e.prototype._execute = function (B, P, V) {
            try {
              B(P, V);
            } catch (K) {
              return K;
            }
          }),
          (e.prototype._onCancel = function () {}),
          (e.prototype._setOnCancel = function (B) {}),
          (e.prototype._attachCancellationCallback = function (B) {}),
          (e.prototype._captureStackTrace = function () {}),
          (e.prototype._attachExtraTrace = function () {}),
          (e.prototype._clearCancellationData = function () {}),
          (e.prototype._propagateFrom = function (B, P) {}));
        function ee(B, P, V) {
          var K = this;
          try {
            B(P, V, function (ae) {
              if (typeof ae != "function")
                throw new TypeError(
                  "onCancel must be a function, got: " + a.toString(ae),
                );
              K._attachCancellationCallback(ae);
            });
          } catch (ae) {
            return ae;
          }
        }
        function T(B) {
          if (!this._isCancellable()) return this;
          var P = this._onCancel();
          P !== void 0
            ? a.isArray(P)
              ? P.push(B)
              : this._setOnCancel([P, B])
            : this._setOnCancel(B);
        }
        function N() {
          return this._onCancelField;
        }
        function x(B) {
          this._onCancelField = B;
        }
        function j() {
          ((this._cancellationParent = void 0), (this._onCancelField = void 0));
        }
        function C(B, P) {
          if (P & 1) {
            this._cancellationParent = B;
            var V = B._branchesRemainingToCancel;
            (V === void 0 && (V = 0), (B._branchesRemainingToCancel = V + 1));
          }
          P & 2 && B._isBound() && this._setBoundTo(B._boundTo);
        }
        function k(B, P) {
          P & 2 && B._isBound() && this._setBoundTo(B._boundTo);
        }
        var S = k;
        function W() {
          var B = this._boundTo;
          return B !== void 0 && B instanceof e
            ? B.isFulfilled()
              ? B.value()
              : void 0
            : B;
        }
        function z() {
          this._trace = new Q(this._peekContext());
        }
        function R(B, P) {
          if (o(B)) {
            var V = this._trace;
            if ((V !== void 0 && P && (V = V._parent), V !== void 0))
              V.attachExtraTrace(B);
            else if (!B.__stackCleaned__) {
              var K = me(B);
              (a.notEnumerableProp(
                B,
                "stack",
                K.message +
                  `
` +
                  K.stack.join(`
`),
              ),
                a.notEnumerableProp(B, "__stackCleaned__", !0));
            }
          }
        }
        function L(B, P, V, K, ae) {
          if (B === void 0 && P !== null && D) {
            if (
              (ae !== void 0 && ae._returnedNonUndefined()) ||
              !(K._bitField & 65535)
            )
              return;
            V && (V = V + " ");
            var se = "",
              le = "";
            if (P._trace) {
              for (
                var ue = P._trace.stack.split(`
`),
                  pe = ce(ue),
                  xe = pe.length - 1;
                xe >= 0;
                --xe
              ) {
                var be = pe[xe];
                if (!l.test(be)) {
                  var Pe = be.match(p);
                  Pe && (se = "at " + Pe[1] + ":" + Pe[2] + ":" + Pe[3] + " ");
                  break;
                }
              }
              if (pe.length > 0) {
                for (var dt = pe[0], xe = 0; xe < ue.length; ++xe)
                  if (ue[xe] === dt) {
                    xe > 0 &&
                      (le =
                        `
` + ue[xe - 1]);
                    break;
                  }
              }
            }
            var nn =
              "a promise was created in a " +
              V +
              "handler " +
              se +
              "but was not returned from it, see http://goo.gl/rRqMUw" +
              le;
            K._warn(nn, !0, P);
          }
        }
        function M(B, P) {
          var V = B + " is deprecated and will be removed in a future version.";
          return (P && (V += " Use " + P + " instead."), Z(V));
        }
        function Z(B, P, V) {
          if (X.warnings) {
            var K = new i(B),
              ae;
            if (P) V._attachExtraTrace(K);
            else if (X.longStackTraces && (ae = e._peekContext()))
              ae.attachExtraTrace(K);
            else {
              var se = me(K);
              K.stack =
                se.message +
                `
` +
                se.stack.join(`
`);
            }
            I("warning", K) || ye(K, "", !0);
          }
        }
        function J(B, P) {
          for (var V = 0; V < P.length - 1; ++V)
            (P[V].push("From previous event:"),
              (P[V] = P[V].join(`
`)));
          return (
            V < P.length &&
              (P[V] = P[V].join(`
`)),
            B +
              `
` +
              P.join(`
`)
          );
        }
        function ie(B) {
          for (var P = 0; P < B.length; ++P)
            (B[P].length === 0 ||
              (P + 1 < B.length && B[P][0] === B[P + 1][0])) &&
              (B.splice(P, 1), P--);
        }
        function oe(B) {
          for (var P = B[0], V = 1; V < B.length; ++V) {
            for (
              var K = B[V],
                ae = P.length - 1,
                se = P[ae],
                le = -1,
                ue = K.length - 1;
              ue >= 0;
              --ue
            )
              if (K[ue] === se) {
                le = ue;
                break;
              }
            for (var ue = le; ue >= 0; --ue) {
              var pe = K[ue];
              if (P[ae] === pe) (P.pop(), ae--);
              else break;
            }
            P = K;
          }
        }
        function ce(B) {
          for (var P = [], V = 0; V < B.length; ++V) {
            var K = B[V],
              ae = K === "    (No stack trace)" || m.test(K),
              se = ae && H(K);
            ae &&
              !se &&
              (y && K.charAt(0) !== " " && (K = "    " + K), P.push(K));
          }
          return P;
        }
        function de(B) {
          for (
            var P = B.stack.replace(/\s+$/g, "").split(`
`),
              V = 0;
            V < P.length;
            ++V
          ) {
            var K = P[V];
            if (K === "    (No stack trace)" || m.test(K)) break;
          }
          return (V > 0 && B.name != "SyntaxError" && (P = P.slice(V)), P);
        }
        function me(B) {
          var P = B.stack,
            V = B.toString();
          return (
            (P =
              typeof P == "string" && P.length > 0
                ? de(B)
                : ["    (No stack trace)"]),
            { message: V, stack: B.name == "SyntaxError" ? P : ce(P) }
          );
        }
        function ye(B, P, V) {
          if (typeof console < "u") {
            var K;
            if (a.isObject(B)) {
              var ae = B.stack;
              K = P + b(ae, B);
            } else K = P + String(B);
            typeof f == "function"
              ? f(K, V)
              : (typeof console.log == "function" ||
                  typeof console.log == "object") &&
                console.log(K);
          }
        }
        function $(B, P, V, K) {
          var ae = !1;
          try {
            typeof P == "function" &&
              ((ae = !0), B === "rejectionHandled" ? P(K) : P(V, K));
          } catch (se) {
            r.throwLater(se);
          }
          B === "unhandledRejection"
            ? !I(B, V, K) && !ae && ye(V, "Unhandled rejection ")
            : I(B, K);
        }
        function ne(B) {
          var P;
          if (typeof B == "function")
            P = "[function " + (B.name || "anonymous") + "]";
          else {
            P =
              B && typeof B.toString == "function"
                ? B.toString()
                : a.toString(B);
            var V = /\[object [a-zA-Z0-9$_]+\]/;
            if (V.test(P))
              try {
                var K = JSON.stringify(B);
                P = K;
              } catch {}
            P.length === 0 && (P = "(empty array)");
          }
          return "(<" + v(P) + ">, no stack trace)";
        }
        function v(B) {
          var P = 41;
          return B.length < P ? B : B.substr(0, P - 3) + "...";
        }
        function G() {
          return typeof te == "function";
        }
        var H = function () {
            return !1;
          },
          F = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
        function A(B) {
          var P = B.match(F);
          if (P) return { fileName: P[1], line: parseInt(P[2], 10) };
        }
        function q(B, P) {
          if (G()) {
            for (
              var V = B.stack.split(`
`),
                K = P.stack.split(`
`),
                ae = -1,
                se = -1,
                le,
                ue,
                pe = 0;
              pe < V.length;
              ++pe
            ) {
              var xe = A(V[pe]);
              if (xe) {
                ((le = xe.fileName), (ae = xe.line));
                break;
              }
            }
            for (var pe = 0; pe < K.length; ++pe) {
              var xe = A(K[pe]);
              if (xe) {
                ((ue = xe.fileName), (se = xe.line));
                break;
              }
            }
            ae < 0 ||
              se < 0 ||
              !le ||
              !ue ||
              le !== ue ||
              ae >= se ||
              (H = function (be) {
                if (u.test(be)) return !0;
                var Pe = A(be);
                return !!(
                  Pe &&
                  Pe.fileName === le &&
                  ae <= Pe.line &&
                  Pe.line <= se
                );
              });
          }
        }
        function Q(B) {
          ((this._parent = B), (this._promisesCreated = 0));
          var P = (this._length = 1 + (B === void 0 ? 0 : B._length));
          (te(this, Q), P > 32 && this.uncycle());
        }
        (a.inherits(Q, Error),
          (n.CapturedTrace = Q),
          (Q.prototype.uncycle = function () {
            var B = this._length;
            if (!(B < 2)) {
              for (var P = [], V = {}, K = 0, ae = this; ae !== void 0; ++K)
                (P.push(ae), (ae = ae._parent));
              B = this._length = K;
              for (var K = B - 1; K >= 0; --K) {
                var se = P[K].stack;
                V[se] === void 0 && (V[se] = K);
              }
              for (var K = 0; K < B; ++K) {
                var le = P[K].stack,
                  ue = V[le];
                if (ue !== void 0 && ue !== K) {
                  (ue > 0 &&
                    ((P[ue - 1]._parent = void 0), (P[ue - 1]._length = 1)),
                    (P[K]._parent = void 0),
                    (P[K]._length = 1));
                  var pe = K > 0 ? P[K - 1] : this;
                  ue < B - 1
                    ? ((pe._parent = P[ue + 1]),
                      pe._parent.uncycle(),
                      (pe._length = pe._parent._length + 1))
                    : ((pe._parent = void 0), (pe._length = 1));
                  for (var xe = pe._length + 1, be = K - 2; be >= 0; --be)
                    ((P[be]._length = xe), xe++);
                  return;
                }
              }
            }
          }),
          (Q.prototype.attachExtraTrace = function (B) {
            if (!B.__stackCleaned__) {
              this.uncycle();
              for (
                var P = me(B), V = P.message, K = [P.stack], ae = this;
                ae !== void 0;
              )
                (K.push(
                  ce(
                    ae.stack.split(`
`),
                  ),
                ),
                  (ae = ae._parent));
              (oe(K),
                ie(K),
                a.notEnumerableProp(B, "stack", J(V, K)),
                a.notEnumerableProp(B, "__stackCleaned__", !0));
            }
          }));
        var te = (function () {
          var P = /^\s*at\s*/,
            V = function (le, ue) {
              return typeof le == "string"
                ? le
                : ue.name !== void 0 && ue.message !== void 0
                  ? ue.toString()
                  : ne(ue);
            };
          if (
            typeof Error.stackTraceLimit == "number" &&
            typeof Error.captureStackTrace == "function"
          ) {
            ((Error.stackTraceLimit += 6), (m = P), (b = V));
            var K = Error.captureStackTrace;
            return (
              (H = function (le) {
                return u.test(le);
              }),
              function (le, ue) {
                ((Error.stackTraceLimit += 6),
                  K(le, ue),
                  (Error.stackTraceLimit -= 6));
              }
            );
          }
          var ae = new Error();
          if (
            typeof ae.stack == "string" &&
            ae.stack
              .split(
                `
`,
              )[0]
              .indexOf("stackDetection@") >= 0
          )
            return (
              (m = /@/),
              (b = V),
              (y = !0),
              function (ue) {
                ue.stack = new Error().stack;
              }
            );
          var se;
          try {
            throw new Error();
          } catch (le) {
            se = "stack" in le;
          }
          return !("stack" in ae) &&
            se &&
            typeof Error.stackTraceLimit == "number"
            ? ((m = P),
              (b = V),
              function (ue) {
                Error.stackTraceLimit += 6;
                try {
                  throw new Error();
                } catch (pe) {
                  ue.stack = pe.stack;
                }
                Error.stackTraceLimit -= 6;
              })
            : ((b = function (le, ue) {
                return typeof le == "string"
                  ? le
                  : (typeof ue == "object" || typeof ue == "function") &&
                      ue.name !== void 0 &&
                      ue.message !== void 0
                    ? ue.toString()
                    : ne(ue);
              }),
              null);
        })();
        typeof console < "u" &&
          typeof console.warn < "u" &&
          ((f = function (B) {
            console.warn(B);
          }),
          a.isNode && process.stderr.isTTY
            ? (f = function (B, P) {
                var V = P ? "\x1B[33m" : "\x1B[31m";
                console.warn(
                  V +
                    B +
                    `\x1B[0m
`,
                );
              })
            : !a.isNode &&
              typeof new Error().stack == "string" &&
              (f = function (B, P) {
                console.warn("%c" + B, P ? "color: darkorange" : "color: red");
              }));
        var X = {
          warnings: g,
          longStackTraces: !1,
          cancellation: !1,
          monitoring: !1,
        };
        return (
          h && e.longStackTraces(),
          {
            longStackTraces: function () {
              return X.longStackTraces;
            },
            warnings: function () {
              return X.warnings;
            },
            cancellation: function () {
              return X.cancellation;
            },
            monitoring: function () {
              return X.monitoring;
            },
            propagateFromFunction: function () {
              return S;
            },
            boundValueFunction: function () {
              return W;
            },
            checkForgottenReturns: L,
            setBounds: q,
            warn: Z,
            deprecated: M,
            CapturedTrace: Q,
            fireDomEvent: U,
            fireGlobalEvent: w,
          }
        );
      })),
    ci
  );
}
var si, cc;
function nh() {
  return (
    cc ||
      ((cc = 1),
      (si = function (e, n) {
        var t = Ue(),
          r = e.CancellationError,
          i = t.errorObj;
        function a(p, m, b) {
          ((this.promise = p),
            (this.type = m),
            (this.handler = b),
            (this.called = !1),
            (this.cancelPromise = null));
        }
        a.prototype.isFinallyHandler = function () {
          return this.type === 0;
        };
        function o(p) {
          this.finallyHandler = p;
        }
        o.prototype._resultCancelled = function () {
          c(this.finallyHandler);
        };
        function c(p, m) {
          return p.cancelPromise != null
            ? (arguments.length > 1
                ? p.cancelPromise._reject(m)
                : p.cancelPromise._cancel(),
              (p.cancelPromise = null),
              !0)
            : !1;
        }
        function s() {
          return l.call(this, this.promise._target()._settledValue());
        }
        function u(p) {
          if (!c(this, p)) return ((i.e = p), i);
        }
        function l(p) {
          var m = this.promise,
            b = this.handler;
          if (!this.called) {
            this.called = !0;
            var y = this.isFinallyHandler()
              ? b.call(m._boundValue())
              : b.call(m._boundValue(), p);
            if (y !== void 0) {
              m._setReturnedNonUndefined();
              var f = n(y, m);
              if (f instanceof e) {
                if (this.cancelPromise != null)
                  if (f._isCancelled()) {
                    var d = new r("late cancellation observer");
                    return (m._attachExtraTrace(d), (i.e = d), i);
                  } else
                    f.isPending() && f._attachCancellationCallback(new o(this));
                return f._then(s, u, void 0, this, void 0);
              }
            }
          }
          return m.isRejected() ? (c(this), (i.e = p), i) : (c(this), p);
        }
        return (
          (e.prototype._passThrough = function (p, m, b, y) {
            return typeof p != "function"
              ? this.then()
              : this._then(b, y, void 0, new a(this, m, p), void 0);
          }),
          (e.prototype.lastly = e.prototype.finally =
            function (p) {
              return this._passThrough(p, 0, l, l);
            }),
          (e.prototype.tap = function (p) {
            return this._passThrough(p, 1, l);
          }),
          a
        );
      })),
    si
  );
}
var ui, sc;
function th() {
  return (
    sc ||
      ((sc = 1),
      (ui = function (e) {
        var n = Ue(),
          t = ot().keys,
          r = n.tryCatch,
          i = n.errorObj;
        function a(o, c, s) {
          return function (u) {
            var l = s._boundValue();
            e: for (var p = 0; p < o.length; ++p) {
              var m = o[p];
              if (m === Error || (m != null && m.prototype instanceof Error)) {
                if (u instanceof m) return r(c).call(l, u);
              } else if (typeof m == "function") {
                var b = r(m).call(l, u);
                if (b === i) return b;
                if (b) return r(c).call(l, u);
              } else if (n.isObject(u)) {
                for (var y = t(m), f = 0; f < y.length; ++f) {
                  var d = y[f];
                  if (m[d] != u[d]) continue e;
                }
                return r(c).call(l, u);
              }
            }
            return e;
          };
        }
        return a;
      })),
    ui
  );
}
var di, uc;
function bd() {
  if (uc) return di;
  uc = 1;
  var e = Ue(),
    n = e.maybeWrapAsError,
    t = En(),
    r = t.OperationalError,
    i = ot();
  function a(u) {
    return u instanceof Error && i.getPrototypeOf(u) === Error.prototype;
  }
  var o = /^(?:name|message|stack|cause)$/;
  function c(u) {
    var l;
    if (a(u)) {
      ((l = new r(u)),
        (l.name = u.name),
        (l.message = u.message),
        (l.stack = u.stack));
      for (var p = i.keys(u), m = 0; m < p.length; ++m) {
        var b = p[m];
        o.test(b) || (l[b] = u[b]);
      }
      return l;
    }
    return (e.markAsOriginatingFromRejection(u), u);
  }
  function s(u, l) {
    return function (p, m) {
      if (u !== null) {
        if (p) {
          var b = c(n(p));
          (u._attachExtraTrace(b), u._reject(b));
        } else if (!l) u._fulfill(m);
        else {
          for (
            var y = arguments.length, f = new Array(Math.max(y - 1, 0)), d = 1;
            d < y;
            ++d
          )
            f[d - 1] = arguments[d];
          u._fulfill(f);
        }
        u = null;
      }
    };
  }
  return ((di = s), di);
}
var li, dc;
function rh() {
  return (
    dc ||
      ((dc = 1),
      (li = function (e, n, t, r, i) {
        var a = Ue(),
          o = a.tryCatch;
        ((e.method = function (c) {
          if (typeof c != "function")
            throw new e.TypeError(
              "expecting a function but got " + a.classString(c),
            );
          return function () {
            var s = new e(n);
            (s._captureStackTrace(), s._pushContext());
            var u = o(c).apply(this, arguments),
              l = s._popContext();
            return (
              i.checkForgottenReturns(u, l, "Promise.method", s),
              s._resolveFromSyncValue(u),
              s
            );
          };
        }),
          (e.attempt = e.try =
            function (c) {
              if (typeof c != "function")
                return r("expecting a function but got " + a.classString(c));
              var s = new e(n);
              (s._captureStackTrace(), s._pushContext());
              var u;
              if (arguments.length > 1) {
                i.deprecated("calling Promise.try with more than 1 argument");
                var l = arguments[1],
                  p = arguments[2];
                u = a.isArray(l) ? o(c).apply(p, l) : o(c).call(p, l);
              } else u = o(c)();
              var m = s._popContext();
              return (
                i.checkForgottenReturns(u, m, "Promise.try", s),
                s._resolveFromSyncValue(u),
                s
              );
            }),
          (e.prototype._resolveFromSyncValue = function (c) {
            c === a.errorObj
              ? this._rejectCallback(c.e, !1)
              : this._resolveCallback(c, !0);
          }));
      })),
    li
  );
}
var fi, lc;
function ih() {
  return (
    lc ||
      ((lc = 1),
      (fi = function (e, n, t, r) {
        var i = !1,
          a = function (u, l) {
            this._reject(l);
          },
          o = function (u, l) {
            ((l.promiseRejectionQueued = !0),
              l.bindingPromise._then(a, a, null, this, u));
          },
          c = function (u, l) {
            this._bitField & 50397184 || this._resolveCallback(l.target);
          },
          s = function (u, l) {
            l.promiseRejectionQueued || this._reject(u);
          };
        ((e.prototype.bind = function (u) {
          i ||
            ((i = !0),
            (e.prototype._propagateFrom = r.propagateFromFunction()),
            (e.prototype._boundValue = r.boundValueFunction()));
          var l = t(u),
            p = new e(n);
          p._propagateFrom(this, 1);
          var m = this._target();
          if ((p._setBoundTo(l), l instanceof e)) {
            var b = {
              promiseRejectionQueued: !1,
              promise: p,
              target: m,
              bindingPromise: l,
            };
            (m._then(n, o, void 0, p, b),
              l._then(c, s, void 0, p, b),
              p._setOnCancel(l));
          } else p._resolveCallback(m);
          return p;
        }),
          (e.prototype._setBoundTo = function (u) {
            u !== void 0
              ? ((this._bitField = this._bitField | 2097152),
                (this._boundTo = u))
              : (this._bitField = this._bitField & -2097153);
          }),
          (e.prototype._isBound = function () {
            return (this._bitField & 2097152) === 2097152;
          }),
          (e.bind = function (u, l) {
            return e.resolve(l).bind(u);
          }));
      })),
    fi
  );
}
var hi, fc;
function ah() {
  return (
    fc ||
      ((fc = 1),
      (hi = function (e, n, t, r) {
        var i = Ue(),
          a = i.tryCatch,
          o = i.errorObj,
          c = e._async;
        ((e.prototype.break = e.prototype.cancel =
          function () {
            if (!r.cancellation())
              return this._warn("cancellation is disabled");
            for (var s = this, u = s; s._isCancellable(); ) {
              if (!s._cancelBy(u)) {
                u._isFollowing() ? u._followee().cancel() : u._cancelBranched();
                break;
              }
              var l = s._cancellationParent;
              if (l == null || !l._isCancellable()) {
                s._isFollowing() ? s._followee().cancel() : s._cancelBranched();
                break;
              } else
                (s._isFollowing() && s._followee().cancel(),
                  s._setWillBeCancelled(),
                  (u = s),
                  (s = l));
            }
          }),
          (e.prototype._branchHasCancelled = function () {
            this._branchesRemainingToCancel--;
          }),
          (e.prototype._enoughBranchesHaveCancelled = function () {
            return (
              this._branchesRemainingToCancel === void 0 ||
              this._branchesRemainingToCancel <= 0
            );
          }),
          (e.prototype._cancelBy = function (s) {
            return s === this
              ? ((this._branchesRemainingToCancel = 0),
                this._invokeOnCancel(),
                !0)
              : (this._branchHasCancelled(),
                this._enoughBranchesHaveCancelled()
                  ? (this._invokeOnCancel(), !0)
                  : !1);
          }),
          (e.prototype._cancelBranched = function () {
            this._enoughBranchesHaveCancelled() && this._cancel();
          }),
          (e.prototype._cancel = function () {
            this._isCancellable() &&
              (this._setCancelled(),
              c.invoke(this._cancelPromises, this, void 0));
          }),
          (e.prototype._cancelPromises = function () {
            this._length() > 0 && this._settlePromises();
          }),
          (e.prototype._unsetOnCancel = function () {
            this._onCancelField = void 0;
          }),
          (e.prototype._isCancellable = function () {
            return this.isPending() && !this._isCancelled();
          }),
          (e.prototype.isCancellable = function () {
            return this.isPending() && !this.isCancelled();
          }),
          (e.prototype._doInvokeOnCancel = function (s, u) {
            if (i.isArray(s))
              for (var l = 0; l < s.length; ++l)
                this._doInvokeOnCancel(s[l], u);
            else if (s !== void 0)
              if (typeof s == "function") {
                if (!u) {
                  var p = a(s).call(this._boundValue());
                  p === o && (this._attachExtraTrace(p.e), c.throwLater(p.e));
                }
              } else s._resultCancelled(this);
          }),
          (e.prototype._invokeOnCancel = function () {
            var s = this._onCancel();
            (this._unsetOnCancel(), c.invoke(this._doInvokeOnCancel, this, s));
          }),
          (e.prototype._invokeInternalOnCancel = function () {
            this._isCancellable() &&
              (this._doInvokeOnCancel(this._onCancel(), !0),
              this._unsetOnCancel());
          }),
          (e.prototype._resultCancelled = function () {
            this.cancel();
          }));
      })),
    hi
  );
}
var pi, hc;
function oh() {
  return (
    hc ||
      ((hc = 1),
      (pi = function (e) {
        function n() {
          return this.value;
        }
        function t() {
          throw this.reason;
        }
        ((e.prototype.return = e.prototype.thenReturn =
          function (r) {
            return (
              r instanceof e && r.suppressUnhandledRejections(),
              this._then(n, void 0, void 0, { value: r }, void 0)
            );
          }),
          (e.prototype.throw = e.prototype.thenThrow =
            function (r) {
              return this._then(t, void 0, void 0, { reason: r }, void 0);
            }),
          (e.prototype.catchThrow = function (r) {
            if (arguments.length <= 1)
              return this._then(void 0, t, void 0, { reason: r }, void 0);
            var i = arguments[1],
              a = function () {
                throw i;
              };
            return this.caught(r, a);
          }),
          (e.prototype.catchReturn = function (r) {
            if (arguments.length <= 1)
              return (
                r instanceof e && r.suppressUnhandledRejections(),
                this._then(void 0, n, void 0, { value: r }, void 0)
              );
            var i = arguments[1];
            i instanceof e && i.suppressUnhandledRejections();
            var a = function () {
              return i;
            };
            return this.caught(r, a);
          }));
      })),
    pi
  );
}
var gi, pc;
function ch() {
  return (
    pc ||
      ((pc = 1),
      (gi = function (e) {
        function n(s) {
          s !== void 0
            ? ((s = s._target()),
              (this._bitField = s._bitField),
              (this._settledValueField = s._isFateSealed()
                ? s._settledValue()
                : void 0))
            : ((this._bitField = 0), (this._settledValueField = void 0));
        }
        n.prototype._settledValue = function () {
          return this._settledValueField;
        };
        var t = (n.prototype.value = function () {
            if (!this.isFulfilled())
              throw new TypeError(`cannot get fulfillment value of a non-fulfilled promise

    See http://goo.gl/MqrFmX
`);
            return this._settledValue();
          }),
          r =
            (n.prototype.error =
            n.prototype.reason =
              function () {
                if (!this.isRejected())
                  throw new TypeError(`cannot get rejection reason of a non-rejected promise

    See http://goo.gl/MqrFmX
`);
                return this._settledValue();
              }),
          i = (n.prototype.isFulfilled = function () {
            return (this._bitField & 33554432) !== 0;
          }),
          a = (n.prototype.isRejected = function () {
            return (this._bitField & 16777216) !== 0;
          }),
          o = (n.prototype.isPending = function () {
            return (this._bitField & 50397184) === 0;
          }),
          c = (n.prototype.isResolved = function () {
            return (this._bitField & 50331648) !== 0;
          });
        ((n.prototype.isCancelled = function () {
          return (this._bitField & 8454144) !== 0;
        }),
          (e.prototype.__isCancelled = function () {
            return (this._bitField & 65536) === 65536;
          }),
          (e.prototype._isCancelled = function () {
            return this._target().__isCancelled();
          }),
          (e.prototype.isCancelled = function () {
            return (this._target()._bitField & 8454144) !== 0;
          }),
          (e.prototype.isPending = function () {
            return o.call(this._target());
          }),
          (e.prototype.isRejected = function () {
            return a.call(this._target());
          }),
          (e.prototype.isFulfilled = function () {
            return i.call(this._target());
          }),
          (e.prototype.isResolved = function () {
            return c.call(this._target());
          }),
          (e.prototype.value = function () {
            return t.call(this._target());
          }),
          (e.prototype.reason = function () {
            var s = this._target();
            return (s._unsetRejectionIsUnhandled(), r.call(s));
          }),
          (e.prototype._value = function () {
            return this._settledValue();
          }),
          (e.prototype._reason = function () {
            return (this._unsetRejectionIsUnhandled(), this._settledValue());
          }),
          (e.PromiseInspection = n));
      })),
    gi
  );
}
var mi, gc;
function sh() {
  return (
    gc ||
      ((gc = 1),
      (mi = function (e, n, t, r, i, a) {
        var o = Ue(),
          c = o.canEvaluate,
          s = o.tryCatch,
          u = o.errorObj,
          l;
        if (c) {
          for (
            var p = function (h) {
                return new Function(
                  "value",
                  "holder",
                  `                             
	            'use strict';                                                    
	            holder.pIndex = value;                                           
	            holder.checkFulfillment(this);                                   
	            `.replace(/Index/g, h),
                );
              },
              m = function (h) {
                return new Function(
                  "promise",
                  "holder",
                  `                           
	            'use strict';                                                    
	            holder.pIndex = promise;                                         
	            `.replace(/Index/g, h),
                );
              },
              b = function (h) {
                for (var D = new Array(h), _ = 0; _ < D.length; ++_)
                  D[_] = "this.p" + (_ + 1);
                var U = D.join(" = ") + " = null;",
                  w =
                    `var promise;
` +
                    D.map(function (Y) {
                      return (
                        `                                                         
	                promise = ` +
                        Y +
                        `;                                      
	                if (promise instanceof Promise) {                            
	                    promise.cancel();                                        
	                }                                                            
	            `
                      );
                    }).join(`
`),
                  E = D.join(", "),
                  O = "Holder$" + h,
                  I = `return function(tryCatch, errorObj, Promise, async) {    
	            'use strict';                                                    
	            function [TheName](fn) {                                         
	                [TheProperties]                                              
	                this.fn = fn;                                                
	                this.asyncNeeded = true;                                     
	                this.now = 0;                                                
	            }                                                                
	                                                                             
	            [TheName].prototype._callFunction = function(promise) {          
	                promise._pushContext();                                      
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           
	                promise._popContext();                                       
	                if (ret === errorObj) {                                      
	                    promise._rejectCallback(ret.e, false);                   
	                } else {                                                     
	                    promise._resolveCallback(ret);                           
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype.checkFulfillment = function(promise) {       
	                var now = ++this.now;                                        
	                if (now === [TheTotal]) {                                    
	                    if (this.asyncNeeded) {                                  
	                        async.invoke(this._callFunction, this, promise);     
	                    } else {                                                 
	                        this._callFunction(promise);                         
	                    }                                                        
	                                                                             
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype._resultCancelled = function() {              
	                [CancellationCode]                                           
	            };                                                               
	                                                                             
	            return [TheName];                                                
	        }(tryCatch, errorObj, Promise, async);                               
	        `;
                return (
                  (I = I.replace(/\[TheName\]/g, O)
                    .replace(/\[TheTotal\]/g, h)
                    .replace(/\[ThePassedArguments\]/g, E)
                    .replace(/\[TheProperties\]/g, U)
                    .replace(/\[CancellationCode\]/g, w)),
                  new Function("tryCatch", "errorObj", "Promise", "async", I)(
                    s,
                    u,
                    e,
                    i,
                  )
                );
              },
              y = [],
              f = [],
              d = [],
              g = 0;
            g < 8;
            ++g
          )
            (y.push(b(g + 1)), f.push(p(g + 1)), d.push(m(g + 1)));
          l = function (h) {
            this._reject(h);
          };
        }
        e.join = function () {
          var h = arguments.length - 1,
            D;
          if (
            h > 0 &&
            typeof arguments[h] == "function" &&
            ((D = arguments[h]), h <= 8 && c)
          ) {
            var x = new e(r);
            x._captureStackTrace();
            for (var _ = y[h - 1], U = new _(D), w = f, E = 0; E < h; ++E) {
              var O = t(arguments[E], x);
              if (O instanceof e) {
                O = O._target();
                var I = O._bitField;
                I & 50397184
                  ? I & 33554432
                    ? w[E].call(x, O._value(), U)
                    : I & 16777216
                      ? x._reject(O._reason())
                      : x._cancel()
                  : (O._then(w[E], l, void 0, x, U),
                    d[E](O, U),
                    (U.asyncNeeded = !1));
              } else w[E].call(x, O, U);
            }
            if (!x._isFateSealed()) {
              if (U.asyncNeeded) {
                var Y = a();
                Y !== null && (U.fn = o.domainBind(Y, U.fn));
              }
              (x._setAsyncGuaranteed(), x._setOnCancel(U));
            }
            return x;
          }
          for (var ee = arguments.length, T = new Array(ee), N = 0; N < ee; ++N)
            T[N] = arguments[N];
          D && T.pop();
          var x = new n(T).promise();
          return D !== void 0 ? x.spread(D) : x;
        };
      })),
    mi
  );
}
var bi, mc;
function uh() {
  return (
    mc ||
      ((mc = 1),
      (bi = function (e, n, t, r, i, a) {
        var o = e._getDomain,
          c = Ue(),
          s = c.tryCatch,
          u = c.errorObj,
          l = e._async;
        function p(b, y, f, d) {
          (this.constructor$(b), this._promise._captureStackTrace());
          var g = o();
          ((this._callback = g === null ? y : c.domainBind(g, y)),
            (this._preservedValues = d === i ? new Array(this.length()) : null),
            (this._limit = f),
            (this._inFlight = 0),
            (this._queue = []),
            l.invoke(this._asyncInit, this, void 0));
        }
        (c.inherits(p, n),
          (p.prototype._asyncInit = function () {
            this._init$(void 0, -2);
          }),
          (p.prototype._init = function () {}),
          (p.prototype._promiseFulfilled = function (b, y) {
            var f = this._values,
              d = this.length(),
              g = this._preservedValues,
              h = this._limit;
            if (y < 0) {
              if (
                ((y = y * -1 - 1),
                (f[y] = b),
                h >= 1 &&
                  (this._inFlight--, this._drainQueue(), this._isResolved()))
              )
                return !0;
            } else {
              if (h >= 1 && this._inFlight >= h)
                return ((f[y] = b), this._queue.push(y), !1);
              g !== null && (g[y] = b);
              var D = this._promise,
                _ = this._callback,
                U = D._boundValue();
              D._pushContext();
              var w = s(_).call(U, b, y, d),
                E = D._popContext();
              if (
                (a.checkForgottenReturns(
                  w,
                  E,
                  g !== null ? "Promise.filter" : "Promise.map",
                  D,
                ),
                w === u)
              )
                return (this._reject(w.e), !0);
              var O = r(w, this._promise);
              if (O instanceof e) {
                O = O._target();
                var I = O._bitField;
                if (I & 50397184)
                  if (I & 33554432) w = O._value();
                  else
                    return I & 16777216
                      ? (this._reject(O._reason()), !0)
                      : (this._cancel(), !0);
                else
                  return (
                    h >= 1 && this._inFlight++,
                    (f[y] = O),
                    O._proxy(this, (y + 1) * -1),
                    !1
                  );
              }
              f[y] = w;
            }
            var Y = ++this._totalResolved;
            return Y >= d
              ? (g !== null ? this._filter(f, g) : this._resolve(f), !0)
              : !1;
          }),
          (p.prototype._drainQueue = function () {
            for (
              var b = this._queue, y = this._limit, f = this._values;
              b.length > 0 && this._inFlight < y;
            ) {
              if (this._isResolved()) return;
              var d = b.pop();
              this._promiseFulfilled(f[d], d);
            }
          }),
          (p.prototype._filter = function (b, y) {
            for (var f = y.length, d = new Array(f), g = 0, h = 0; h < f; ++h)
              b[h] && (d[g++] = y[h]);
            ((d.length = g), this._resolve(d));
          }),
          (p.prototype.preservedValues = function () {
            return this._preservedValues;
          }));
        function m(b, y, f, d) {
          if (typeof y != "function")
            return t("expecting a function but got " + c.classString(y));
          var g = 0;
          if (f !== void 0)
            if (typeof f == "object" && f !== null) {
              if (typeof f.concurrency != "number")
                return e.reject(
                  new TypeError(
                    "'concurrency' must be a number but it is " +
                      c.classString(f.concurrency),
                  ),
                );
              g = f.concurrency;
            } else
              return e.reject(
                new TypeError(
                  "options argument must be an object but it is " +
                    c.classString(f),
                ),
              );
          return (
            (g = typeof g == "number" && isFinite(g) && g >= 1 ? g : 0),
            new p(b, y, g, d).promise()
          );
        }
        ((e.prototype.map = function (b, y) {
          return m(this, b, y, null);
        }),
          (e.map = function (b, y, f, d) {
            return m(b, y, f, d);
          }));
      })),
    bi
  );
}
var yi, bc;
function dh() {
  if (bc) return yi;
  bc = 1;
  var e = Object.create;
  if (e) {
    var n = e(null),
      t = e(null);
    n[" size"] = t[" size"] = 0;
  }
  return (
    (yi = function (r) {
      var i = Ue(),
        a = i.canEvaluate,
        o = i.isIdentifier,
        c,
        s;
      {
        var u = function (d) {
            return new Function(
              "ensureMethod",
              `                                    
	        return function(obj) {                                               
	            'use strict'                                                     
	            var len = this.length;                                           
	            ensureMethod(obj, 'methodName');                                 
	            switch(len) {                                                    
	                case 1: return obj.methodName(this[0]);                      
	                case 2: return obj.methodName(this[0], this[1]);             
	                case 3: return obj.methodName(this[0], this[1], this[2]);    
	                case 0: return obj.methodName();                             
	                default:                                                     
	                    return obj.methodName.apply(obj, this);                  
	            }                                                                
	        };                                                                   
	        `.replace(/methodName/g, d),
            )(m);
          },
          l = function (d) {
            return new Function(
              "obj",
              `                                             
	        'use strict';                                                        
	        return obj.propertyName;                                             
	        `.replace("propertyName", d),
            );
          },
          p = function (d, g, h) {
            var D = h[d];
            if (typeof D != "function") {
              if (!o(d)) return null;
              if (((D = g(d)), (h[d] = D), h[" size"]++, h[" size"] > 512)) {
                for (var _ = Object.keys(h), U = 0; U < 256; ++U)
                  delete h[_[U]];
                h[" size"] = _.length - 256;
              }
            }
            return D;
          };
        ((c = function (d) {
          return p(d, u, n);
        }),
          (s = function (d) {
            return p(d, l, t);
          }));
      }
      function m(d, g) {
        var h;
        if ((d != null && (h = d[g]), typeof h != "function")) {
          var D =
            "Object " +
            i.classString(d) +
            " has no method '" +
            i.toString(g) +
            "'";
          throw new r.TypeError(D);
        }
        return h;
      }
      function b(d) {
        var g = this.pop(),
          h = m(d, g);
        return h.apply(d, this);
      }
      r.prototype.call = function (d) {
        for (
          var g = arguments.length, h = new Array(Math.max(g - 1, 0)), D = 1;
          D < g;
          ++D
        )
          h[D - 1] = arguments[D];
        if (a) {
          var _ = c(d);
          if (_ !== null) return this._then(_, void 0, void 0, h, void 0);
        }
        return (h.push(d), this._then(b, void 0, void 0, h, void 0));
      };
      function y(d) {
        return d[this];
      }
      function f(d) {
        var g = +this;
        return (g < 0 && (g = Math.max(0, g + d.length)), d[g]);
      }
      r.prototype.get = function (d) {
        var g = typeof d == "number",
          h;
        if (g) h = f;
        else if (a) {
          var D = s(d);
          h = D !== null ? D : y;
        } else h = y;
        return this._then(h, void 0, void 0, d, void 0);
      };
    }),
    yi
  );
}
var Di, yc;
function lh() {
  return (
    yc ||
      ((yc = 1),
      (Di = function (e, n, t, r, i, a) {
        var o = Ue(),
          c = En().TypeError,
          s = Ue().inherits,
          u = o.errorObj,
          l = o.tryCatch,
          p = {};
        function m(D) {
          setTimeout(function () {
            throw D;
          }, 0);
        }
        function b(D) {
          var _ = t(D);
          return (
            _ !== D &&
              typeof D._isDisposable == "function" &&
              typeof D._getDisposer == "function" &&
              D._isDisposable() &&
              _._setDisposable(D._getDisposer()),
            _
          );
        }
        function y(D, _) {
          var U = 0,
            w = D.length,
            E = new e(i);
          function O() {
            if (U >= w) return E._fulfill();
            var I = b(D[U++]);
            if (I instanceof e && I._isDisposable()) {
              try {
                I = t(I._getDisposer().tryDispose(_), D.promise);
              } catch (Y) {
                return m(Y);
              }
              if (I instanceof e) return I._then(O, m, null, null, null);
            }
            O();
          }
          return (O(), E);
        }
        function f(D, _, U) {
          ((this._data = D), (this._promise = _), (this._context = U));
        }
        ((f.prototype.data = function () {
          return this._data;
        }),
          (f.prototype.promise = function () {
            return this._promise;
          }),
          (f.prototype.resource = function () {
            return this.promise().isFulfilled() ? this.promise().value() : p;
          }),
          (f.prototype.tryDispose = function (D) {
            var _ = this.resource(),
              U = this._context;
            U !== void 0 && U._pushContext();
            var w = _ !== p ? this.doDispose(_, D) : null;
            return (
              U !== void 0 && U._popContext(),
              this._promise._unsetDisposable(),
              (this._data = null),
              w
            );
          }),
          (f.isDisposer = function (D) {
            return (
              D != null &&
              typeof D.resource == "function" &&
              typeof D.tryDispose == "function"
            );
          }));
        function d(D, _, U) {
          this.constructor$(D, _, U);
        }
        (s(d, f),
          (d.prototype.doDispose = function (D, _) {
            var U = this.data();
            return U.call(D, D, _);
          }));
        function g(D) {
          return f.isDisposer(D)
            ? (this.resources[this.index]._setDisposable(D), D.promise())
            : D;
        }
        function h(D) {
          ((this.length = D), (this.promise = null), (this[D - 1] = null));
        }
        ((h.prototype._resultCancelled = function () {
          for (var D = this.length, _ = 0; _ < D; ++_) {
            var U = this[_];
            U instanceof e && U.cancel();
          }
        }),
          (e.using = function () {
            var D = arguments.length;
            if (D < 2)
              return n("you must pass at least 2 arguments to Promise.using");
            var _ = arguments[D - 1];
            if (typeof _ != "function")
              return n("expecting a function but got " + o.classString(_));
            var U,
              w = !0;
            D === 2 && Array.isArray(arguments[0])
              ? ((U = arguments[0]), (D = U.length), (w = !1))
              : ((U = arguments), D--);
            for (var E = new h(D), O = 0; O < D; ++O) {
              var I = U[O];
              if (f.isDisposer(I)) {
                var Y = I;
                ((I = I.promise()), I._setDisposable(Y));
              } else {
                var ee = t(I);
                ee instanceof e &&
                  (I = ee._then(
                    g,
                    null,
                    null,
                    { resources: E, index: O },
                    void 0,
                  ));
              }
              E[O] = I;
            }
            for (var T = new Array(E.length), O = 0; O < T.length; ++O)
              T[O] = e.resolve(E[O]).reflect();
            var N = e.all(T).then(function (j) {
                for (var C = 0; C < j.length; ++C) {
                  var k = j[C];
                  if (k.isRejected()) return ((u.e = k.error()), u);
                  if (!k.isFulfilled()) {
                    N.cancel();
                    return;
                  }
                  j[C] = k.value();
                }
                (x._pushContext(), (_ = l(_)));
                var S = w ? _.apply(void 0, j) : _(j),
                  W = x._popContext();
                return (a.checkForgottenReturns(S, W, "Promise.using", x), S);
              }),
              x = N.lastly(function () {
                var j = new e.PromiseInspection(N);
                return y(E, j);
              });
            return ((E.promise = x), x._setOnCancel(E), x);
          }),
          (e.prototype._setDisposable = function (D) {
            ((this._bitField = this._bitField | 131072), (this._disposer = D));
          }),
          (e.prototype._isDisposable = function () {
            return (this._bitField & 131072) > 0;
          }),
          (e.prototype._getDisposer = function () {
            return this._disposer;
          }),
          (e.prototype._unsetDisposable = function () {
            ((this._bitField = this._bitField & -131073),
              (this._disposer = void 0));
          }),
          (e.prototype.disposer = function (D) {
            if (typeof D == "function") return new d(D, this, r());
            throw new c();
          }));
      })),
    Di
  );
}
var vi, Dc;
function fh() {
  return (
    Dc ||
      ((Dc = 1),
      (vi = function (e, n, t) {
        var r = Ue(),
          i = e.TimeoutError;
        function a(p) {
          this.handle = p;
        }
        a.prototype._resultCancelled = function () {
          clearTimeout(this.handle);
        };
        var o = function (p) {
            return c(+this).thenReturn(p);
          },
          c = (e.delay = function (p, m) {
            var b, y;
            return (
              m !== void 0
                ? ((b = e.resolve(m)._then(o, null, null, p, void 0)),
                  t.cancellation() && m instanceof e && b._setOnCancel(m))
                : ((b = new e(n)),
                  (y = setTimeout(function () {
                    b._fulfill();
                  }, +p)),
                  t.cancellation() && b._setOnCancel(new a(y)),
                  b._captureStackTrace()),
              b._setAsyncGuaranteed(),
              b
            );
          });
        e.prototype.delay = function (p) {
          return c(p, this);
        };
        var s = function (p, m, b) {
          var y;
          (typeof m != "string"
            ? m instanceof Error
              ? (y = m)
              : (y = new i("operation timed out"))
            : (y = new i(m)),
            r.markAsOriginatingFromRejection(y),
            p._attachExtraTrace(y),
            p._reject(y),
            b != null && b.cancel());
        };
        function u(p) {
          return (clearTimeout(this.handle), p);
        }
        function l(p) {
          throw (clearTimeout(this.handle), p);
        }
        e.prototype.timeout = function (p, m) {
          p = +p;
          var b,
            y,
            f = new a(
              setTimeout(function () {
                b.isPending() && s(b, m, y);
              }, p),
            );
          return (
            t.cancellation()
              ? ((y = this.then()),
                (b = y._then(u, l, void 0, f, void 0)),
                b._setOnCancel(f))
              : (b = this._then(u, l, void 0, f, void 0)),
            b
          );
        };
      })),
    vi
  );
}
var xi, vc;
function hh() {
  return (
    vc ||
      ((vc = 1),
      (xi = function (e, n, t, r, i, a) {
        var o = En(),
          c = o.TypeError,
          s = Ue(),
          u = s.errorObj,
          l = s.tryCatch,
          p = [];
        function m(y, f, d) {
          for (var g = 0; g < f.length; ++g) {
            d._pushContext();
            var h = l(f[g])(y);
            if ((d._popContext(), h === u)) {
              d._pushContext();
              var D = e.reject(u.e);
              return (d._popContext(), D);
            }
            var _ = r(h, d);
            if (_ instanceof e) return _;
          }
          return null;
        }
        function b(y, f, d, g) {
          if (a.cancellation()) {
            var h = new e(t),
              D = (this._finallyPromise = new e(t));
            ((this._promise = h.lastly(function () {
              return D;
            })),
              h._captureStackTrace(),
              h._setOnCancel(this));
          } else {
            var _ = (this._promise = new e(t));
            _._captureStackTrace();
          }
          ((this._stack = g),
            (this._generatorFunction = y),
            (this._receiver = f),
            (this._generator = void 0),
            (this._yieldHandlers = typeof d == "function" ? [d].concat(p) : p),
            (this._yieldedPromise = null),
            (this._cancellationPhase = !1));
        }
        (s.inherits(b, i),
          (b.prototype._isResolved = function () {
            return this._promise === null;
          }),
          (b.prototype._cleanup = function () {
            ((this._promise = this._generator = null),
              a.cancellation() &&
                this._finallyPromise !== null &&
                (this._finallyPromise._fulfill(),
                (this._finallyPromise = null)));
          }),
          (b.prototype._promiseCancelled = function () {
            if (!this._isResolved()) {
              var y = typeof this._generator.return < "u",
                f;
              if (y)
                (this._promise._pushContext(),
                  (f = l(this._generator.return).call(this._generator, void 0)),
                  this._promise._popContext());
              else {
                var d = new e.CancellationError("generator .return() sentinel");
                ((e.coroutine.returnSentinel = d),
                  this._promise._attachExtraTrace(d),
                  this._promise._pushContext(),
                  (f = l(this._generator.throw).call(this._generator, d)),
                  this._promise._popContext());
              }
              ((this._cancellationPhase = !0),
                (this._yieldedPromise = null),
                this._continue(f));
            }
          }),
          (b.prototype._promiseFulfilled = function (y) {
            ((this._yieldedPromise = null), this._promise._pushContext());
            var f = l(this._generator.next).call(this._generator, y);
            (this._promise._popContext(), this._continue(f));
          }),
          (b.prototype._promiseRejected = function (y) {
            ((this._yieldedPromise = null),
              this._promise._attachExtraTrace(y),
              this._promise._pushContext());
            var f = l(this._generator.throw).call(this._generator, y);
            (this._promise._popContext(), this._continue(f));
          }),
          (b.prototype._resultCancelled = function () {
            if (this._yieldedPromise instanceof e) {
              var y = this._yieldedPromise;
              ((this._yieldedPromise = null), y.cancel());
            }
          }),
          (b.prototype.promise = function () {
            return this._promise;
          }),
          (b.prototype._run = function () {
            ((this._generator = this._generatorFunction.call(this._receiver)),
              (this._receiver = this._generatorFunction = void 0),
              this._promiseFulfilled(void 0));
          }),
          (b.prototype._continue = function (y) {
            var f = this._promise;
            if (y === u)
              return (
                this._cleanup(),
                this._cancellationPhase
                  ? f.cancel()
                  : f._rejectCallback(y.e, !1)
              );
            var d = y.value;
            if (y.done === !0)
              return (
                this._cleanup(),
                this._cancellationPhase ? f.cancel() : f._resolveCallback(d)
              );
            var g = r(d, this._promise);
            if (
              !(g instanceof e) &&
              ((g = m(g, this._yieldHandlers, this._promise)), g === null)
            ) {
              this._promiseRejected(
                new c(
                  `A value %s was yielded that could not be treated as a promise

    See http://goo.gl/MqrFmX

`.replace("%s", d) +
                    `From coroutine:
` +
                    this._stack
                      .split(
                        `
`,
                      )
                      .slice(1, -7).join(`
`),
                ),
              );
              return;
            }
            g = g._target();
            var h = g._bitField;
            h & 50397184
              ? h & 33554432
                ? e._async.invoke(this._promiseFulfilled, this, g._value())
                : h & 16777216
                  ? e._async.invoke(this._promiseRejected, this, g._reason())
                  : this._promiseCancelled()
              : ((this._yieldedPromise = g), g._proxy(this, null));
          }),
          (e.coroutine = function (y, f) {
            if (typeof y != "function")
              throw new c(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
            var d = Object(f).yieldHandler,
              g = b,
              h = new Error().stack;
            return function () {
              var D = y.apply(this, arguments),
                _ = new g(void 0, void 0, d, h),
                U = _.promise();
              return ((_._generator = D), _._promiseFulfilled(void 0), U);
            };
          }),
          (e.coroutine.addYieldHandler = function (y) {
            if (typeof y != "function")
              throw new c("expecting a function but got " + s.classString(y));
            p.push(y);
          }),
          (e.spawn = function (y) {
            if (
              (a.deprecated("Promise.spawn()", "Promise.coroutine()"),
              typeof y != "function")
            )
              return n(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
            var f = new b(y, this),
              d = f.promise();
            return (f._run(e.spawn), d);
          }));
      })),
    xi
  );
}
var _i, xc;
function ph() {
  return (
    xc ||
      ((xc = 1),
      (_i = function (e) {
        var n = Ue(),
          t = e._async,
          r = n.tryCatch,
          i = n.errorObj;
        function a(s, u) {
          var l = this;
          if (!n.isArray(s)) return o.call(l, s, u);
          var p = r(u).apply(l._boundValue(), [null].concat(s));
          p === i && t.throwLater(p.e);
        }
        function o(s, u) {
          var l = this,
            p = l._boundValue(),
            m = s === void 0 ? r(u).call(p, null) : r(u).call(p, null, s);
          m === i && t.throwLater(m.e);
        }
        function c(s, u) {
          var l = this;
          if (!s) {
            var p = new Error(s + "");
            ((p.cause = s), (s = p));
          }
          var m = r(u).call(l._boundValue(), s);
          m === i && t.throwLater(m.e);
        }
        e.prototype.asCallback = e.prototype.nodeify = function (s, u) {
          if (typeof s == "function") {
            var l = o;
            (u !== void 0 && Object(u).spread && (l = a),
              this._then(l, c, void 0, this, s));
          }
          return this;
        };
      })),
    _i
  );
}
var Ui, _c;
function gh() {
  return (
    _c ||
      ((_c = 1),
      (Ui = function (e, n) {
        var t = {},
          r = Ue(),
          i = bd(),
          a = r.withAppended,
          o = r.maybeWrapAsError,
          c = r.canEvaluate,
          s = En().TypeError,
          u = "Async",
          l = { __isPromisified__: !0 },
          p = [
            "arity",
            "length",
            "name",
            "arguments",
            "caller",
            "callee",
            "prototype",
            "__isPromisified__",
          ],
          m = new RegExp("^(?:" + p.join("|") + ")$"),
          b = function (N) {
            return (
              r.isIdentifier(N) && N.charAt(0) !== "_" && N !== "constructor"
            );
          };
        function y(N) {
          return !m.test(N);
        }
        function f(N) {
          try {
            return N.__isPromisified__ === !0;
          } catch {
            return !1;
          }
        }
        function d(N, x, j) {
          var C = r.getDataPropertyOrDefault(N, x + j, l);
          return C ? f(C) : !1;
        }
        function g(N, x, j) {
          for (var C = 0; C < N.length; C += 2) {
            var k = N[C];
            if (j.test(k)) {
              for (var S = k.replace(j, ""), W = 0; W < N.length; W += 2)
                if (N[W] === S)
                  throw new s(
                    `Cannot promisify an API that has normal methods with '%s'-suffix

    See http://goo.gl/MqrFmX
`.replace("%s", x),
                  );
            }
          }
        }
        function h(N, x, j, C) {
          for (
            var k = r.inheritedDataKeys(N), S = [], W = 0;
            W < k.length;
            ++W
          ) {
            var z = k[W],
              R = N[z],
              L = C === b ? !0 : b(z);
            typeof R == "function" &&
              !f(R) &&
              !d(N, z, x) &&
              C(z, R, N, L) &&
              S.push(z, R);
          }
          return (g(S, x, j), S);
        }
        var D = function (N) {
            return N.replace(/([$])/, "\\$");
          },
          _;
        {
          var U = function (N) {
              for (
                var x = [N], j = Math.max(0, N - 1 - 3), C = N - 1;
                C >= j;
                --C
              )
                x.push(C);
              for (var C = N + 1; C <= 3; ++C) x.push(C);
              return x;
            },
            w = function (N) {
              return r.filledRange(N, "_arg", "");
            },
            E = function (N) {
              return r.filledRange(Math.max(N, 3), "_arg", "");
            },
            O = function (N) {
              return typeof N.length == "number"
                ? Math.max(Math.min(N.length, 1024), 0)
                : 0;
            };
          _ = function (N, x, j, C, k, S) {
            var W = Math.max(0, O(C) - 1),
              z = U(W),
              R = typeof N == "string" || x === t;
            function L(ie) {
              var oe = w(ie).join(", "),
                ce = ie > 0 ? ", " : "",
                de;
              return (
                R
                  ? (de = `ret = callback.call(this, {{args}}, nodeback); break;
`)
                  : (de =
                      x === void 0
                        ? `ret = callback({{args}}, nodeback); break;
`
                        : `ret = callback.call(receiver, {{args}}, nodeback); break;
`),
                de.replace("{{args}}", oe).replace(", ", ce)
              );
            }
            function M() {
              for (var ie = "", oe = 0; oe < z.length; ++oe)
                ie += "case " + z[oe] + ":" + L(z[oe]);
              return (
                (ie +=
                  `                                                             
	        default:                                                             
	            var args = new Array(len + 1);                                   
	            var i = 0;                                                       
	            for (var i = 0; i < len; ++i) {                                  
	               args[i] = arguments[i];                                       
	            }                                                                
	            args[i] = nodeback;                                              
	            [CodeForCall]                                                    
	            break;                                                           
	        `.replace(
                    "[CodeForCall]",
                    R
                      ? `ret = callback.apply(this, args);
`
                      : `ret = callback.apply(receiver, args);
`,
                  )),
                ie
              );
            }
            var Z =
                typeof N == "string"
                  ? "this != null ? this['" + N + "'] : fn"
                  : "fn",
              J =
                `'use strict';                                                
	        var ret = function (Parameters) {                                    
	            'use strict';                                                    
	            var len = arguments.length;                                      
	            var promise = new Promise(INTERNAL);                             
	            promise._captureStackTrace();                                    
	            var nodeback = nodebackForPromise(promise, ` +
                S +
                `);   
	            var ret;                                                         
	            var callback = tryCatch([GetFunctionCode]);                      
	            switch(len) {                                                    
	                [CodeForSwitchCase]                                          
	            }                                                                
	            if (ret === errorObj) {                                          
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);
	            }                                                                
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     
	            return promise;                                                  
	        };                                                                   
	        notEnumerableProp(ret, '__isPromisified__', true);                   
	        return ret;                                                          
	    `
                  .replace("[CodeForSwitchCase]", M())
                  .replace("[GetFunctionCode]", Z);
            return (
              (J = J.replace("Parameters", E(W))),
              new Function(
                "Promise",
                "fn",
                "receiver",
                "withAppended",
                "maybeWrapAsError",
                "nodebackForPromise",
                "tryCatch",
                "errorObj",
                "notEnumerableProp",
                "INTERNAL",
                J,
              )(
                e,
                C,
                x,
                a,
                o,
                i,
                r.tryCatch,
                r.errorObj,
                r.notEnumerableProp,
                n,
              )
            );
          };
        }
        function I(N, x, j, C, k, S) {
          var W = (function () {
              return this;
            })(),
            z = N;
          typeof z == "string" && (N = C);
          function R() {
            var L = x;
            x === t && (L = this);
            var M = new e(n);
            M._captureStackTrace();
            var Z = typeof z == "string" && this !== W ? this[z] : N,
              J = i(M, S);
            try {
              Z.apply(L, a(arguments, J));
            } catch (ie) {
              M._rejectCallback(o(ie), !0, !0);
            }
            return (M._isFateSealed() || M._setAsyncGuaranteed(), M);
          }
          return (r.notEnumerableProp(R, "__isPromisified__", !0), R);
        }
        var Y = c ? _ : I;
        function ee(N, x, j, C, k) {
          for (
            var S = new RegExp(D(x) + "$"),
              W = h(N, x, S, j),
              z = 0,
              R = W.length;
            z < R;
            z += 2
          ) {
            var L = W[z],
              M = W[z + 1],
              Z = L + x;
            if (C === Y) N[Z] = Y(L, t, L, M, x, k);
            else {
              var J = C(M, function () {
                return Y(L, t, L, M, x, k);
              });
              (r.notEnumerableProp(J, "__isPromisified__", !0), (N[Z] = J));
            }
          }
          return (r.toFastProperties(N), N);
        }
        function T(N, x, j) {
          return Y(N, x, void 0, N, null, j);
        }
        ((e.promisify = function (N, x) {
          if (typeof N != "function")
            throw new s("expecting a function but got " + r.classString(N));
          if (f(N)) return N;
          x = Object(x);
          var j = x.context === void 0 ? t : x.context,
            C = !!x.multiArgs,
            k = T(N, j, C);
          return (r.copyDescriptors(N, k, y), k);
        }),
          (e.promisifyAll = function (N, x) {
            if (typeof N != "function" && typeof N != "object")
              throw new s(`the target of promisifyAll must be an object or a function

    See http://goo.gl/MqrFmX
`);
            x = Object(x);
            var j = !!x.multiArgs,
              C = x.suffix;
            typeof C != "string" && (C = u);
            var k = x.filter;
            typeof k != "function" && (k = b);
            var S = x.promisifier;
            if ((typeof S != "function" && (S = Y), !r.isIdentifier(C)))
              throw new RangeError(`suffix must be a valid identifier

    See http://goo.gl/MqrFmX
`);
            for (var W = r.inheritedDataKeys(N), z = 0; z < W.length; ++z) {
              var R = N[W[z]];
              W[z] !== "constructor" &&
                r.isClass(R) &&
                (ee(R.prototype, C, k, S, j), ee(R, C, k, S, j));
            }
            return ee(N, C, k, S, j);
          }));
      })),
    Ui
  );
}
var Ti, Uc;
function mh() {
  return (
    Uc ||
      ((Uc = 1),
      (Ti = function (e, n, t, r) {
        var i = Ue(),
          a = i.isObject,
          o = ot(),
          c;
        typeof Map == "function" && (c = Map);
        var s = (function () {
            var m = 0,
              b = 0;
            function y(f, d) {
              ((this[m] = f), (this[m + b] = d), m++);
            }
            return function (d) {
              ((b = d.size), (m = 0));
              var g = new Array(d.size * 2);
              return (d.forEach(y, g), g);
            };
          })(),
          u = function (m) {
            for (var b = new c(), y = (m.length / 2) | 0, f = 0; f < y; ++f) {
              var d = m[y + f],
                g = m[f];
              b.set(d, g);
            }
            return b;
          };
        function l(m) {
          var b = !1,
            y;
          if (c !== void 0 && m instanceof c) ((y = s(m)), (b = !0));
          else {
            var f = o.keys(m),
              d = f.length;
            y = new Array(d * 2);
            for (var g = 0; g < d; ++g) {
              var h = f[g];
              ((y[g] = m[h]), (y[g + d] = h));
            }
          }
          (this.constructor$(y), (this._isMap = b), this._init$(void 0, -3));
        }
        (i.inherits(l, n),
          (l.prototype._init = function () {}),
          (l.prototype._promiseFulfilled = function (m, b) {
            this._values[b] = m;
            var y = ++this._totalResolved;
            if (y >= this._length) {
              var f;
              if (this._isMap) f = u(this._values);
              else {
                f = {};
                for (
                  var d = this.length(), g = 0, h = this.length();
                  g < h;
                  ++g
                )
                  f[this._values[g + d]] = this._values[g];
              }
              return (this._resolve(f), !0);
            }
            return !1;
          }),
          (l.prototype.shouldCopyValues = function () {
            return !1;
          }),
          (l.prototype.getActualLength = function (m) {
            return m >> 1;
          }));
        function p(m) {
          var b,
            y = t(m);
          if (a(y))
            y instanceof e
              ? (b = y._then(e.props, void 0, void 0, void 0, void 0))
              : (b = new l(y).promise());
          else
            return r(`cannot await properties of a non-object

    See http://goo.gl/MqrFmX
`);
          return (y instanceof e && b._propagateFrom(y, 2), b);
        }
        ((e.prototype.props = function () {
          return p(this);
        }),
          (e.props = function (m) {
            return p(m);
          }));
      })),
    Ti
  );
}
var wi, Tc;
function bh() {
  return (
    Tc ||
      ((Tc = 1),
      (wi = function (e, n, t, r) {
        var i = Ue(),
          a = function (c) {
            return c.then(function (s) {
              return o(s, c);
            });
          };
        function o(c, s) {
          var u = t(c);
          if (u instanceof e) return a(u);
          if (((c = i.asArray(c)), c === null))
            return r(
              "expecting an array or an iterable object but got " +
                i.classString(c),
            );
          var l = new e(n);
          s !== void 0 && l._propagateFrom(s, 3);
          for (
            var p = l._fulfill, m = l._reject, b = 0, y = c.length;
            b < y;
            ++b
          ) {
            var f = c[b];
            (f === void 0 && !(b in c)) ||
              e.cast(f)._then(p, m, void 0, l, null);
          }
          return l;
        }
        ((e.race = function (c) {
          return o(c, void 0);
        }),
          (e.prototype.race = function () {
            return o(this, void 0);
          }));
      })),
    wi
  );
}
var Ei, wc;
function yh() {
  return (
    wc ||
      ((wc = 1),
      (Ei = function (e, n, t, r, i, a) {
        var o = e._getDomain,
          c = Ue(),
          s = c.tryCatch;
        function u(y, f, d, g) {
          this.constructor$(y);
          var h = o();
          ((this._fn = h === null ? f : c.domainBind(h, f)),
            d !== void 0 &&
              ((d = e.resolve(d)), d._attachCancellationCallback(this)),
            (this._initialValue = d),
            (this._currentCancellable = null),
            g === i
              ? (this._eachValues = Array(this._length))
              : g === 0
                ? (this._eachValues = null)
                : (this._eachValues = void 0),
            this._promise._captureStackTrace(),
            this._init$(void 0, -5));
        }
        (c.inherits(u, n),
          (u.prototype._gotAccum = function (y) {
            this._eachValues !== void 0 &&
              this._eachValues !== null &&
              y !== i &&
              this._eachValues.push(y);
          }),
          (u.prototype._eachComplete = function (y) {
            return (
              this._eachValues !== null && this._eachValues.push(y),
              this._eachValues
            );
          }),
          (u.prototype._init = function () {}),
          (u.prototype._resolveEmptyArray = function () {
            this._resolve(
              this._eachValues !== void 0
                ? this._eachValues
                : this._initialValue,
            );
          }),
          (u.prototype.shouldCopyValues = function () {
            return !1;
          }),
          (u.prototype._resolve = function (y) {
            (this._promise._resolveCallback(y), (this._values = null));
          }),
          (u.prototype._resultCancelled = function (y) {
            if (y === this._initialValue) return this._cancel();
            this._isResolved() ||
              (this._resultCancelled$(),
              this._currentCancellable instanceof e &&
                this._currentCancellable.cancel(),
              this._initialValue instanceof e && this._initialValue.cancel());
          }),
          (u.prototype._iterate = function (y) {
            this._values = y;
            var f,
              d,
              g = y.length;
            if (
              (this._initialValue !== void 0
                ? ((f = this._initialValue), (d = 0))
                : ((f = e.resolve(y[0])), (d = 1)),
              (this._currentCancellable = f),
              !f.isRejected())
            )
              for (; d < g; ++d) {
                var h = {
                  accum: null,
                  value: y[d],
                  index: d,
                  length: g,
                  array: this,
                };
                f = f._then(m, void 0, void 0, h, void 0);
              }
            (this._eachValues !== void 0 &&
              (f = f._then(this._eachComplete, void 0, void 0, this, void 0)),
              f._then(l, l, void 0, f, this));
          }),
          (e.prototype.reduce = function (y, f) {
            return p(this, y, f, null);
          }),
          (e.reduce = function (y, f, d, g) {
            return p(y, f, d, g);
          }));
        function l(y, f) {
          this.isFulfilled() ? f._resolve(y) : f._reject(y);
        }
        function p(y, f, d, g) {
          if (typeof f != "function")
            return t("expecting a function but got " + c.classString(f));
          var h = new u(y, f, d, g);
          return h.promise();
        }
        function m(y) {
          ((this.accum = y), this.array._gotAccum(y));
          var f = r(this.value, this.array._promise);
          return f instanceof e
            ? ((this.array._currentCancellable = f),
              f._then(b, void 0, void 0, this, void 0))
            : b.call(this, f);
        }
        function b(y) {
          var f = this.array,
            d = f._promise,
            g = s(f._fn);
          d._pushContext();
          var h;
          (f._eachValues !== void 0
            ? (h = g.call(d._boundValue(), y, this.index, this.length))
            : (h = g.call(
                d._boundValue(),
                this.accum,
                y,
                this.index,
                this.length,
              )),
            h instanceof e && (f._currentCancellable = h));
          var D = d._popContext();
          return (
            a.checkForgottenReturns(
              h,
              D,
              f._eachValues !== void 0 ? "Promise.each" : "Promise.reduce",
              d,
            ),
            h
          );
        }
      })),
    Ei
  );
}
var Ai, Ec;
function Dh() {
  return (
    Ec ||
      ((Ec = 1),
      (Ai = function (e, n, t) {
        var r = e.PromiseInspection,
          i = Ue();
        function a(o) {
          this.constructor$(o);
        }
        (i.inherits(a, n),
          (a.prototype._promiseResolved = function (o, c) {
            this._values[o] = c;
            var s = ++this._totalResolved;
            return s >= this._length ? (this._resolve(this._values), !0) : !1;
          }),
          (a.prototype._promiseFulfilled = function (o, c) {
            var s = new r();
            return (
              (s._bitField = 33554432),
              (s._settledValueField = o),
              this._promiseResolved(c, s)
            );
          }),
          (a.prototype._promiseRejected = function (o, c) {
            var s = new r();
            return (
              (s._bitField = 16777216),
              (s._settledValueField = o),
              this._promiseResolved(c, s)
            );
          }),
          (e.settle = function (o) {
            return (
              t.deprecated(".settle()", ".reflect()"),
              new a(o).promise()
            );
          }),
          (e.prototype.settle = function () {
            return e.settle(this);
          }));
      })),
    Ai
  );
}
var Ci, Ac;
function vh() {
  return (
    Ac ||
      ((Ac = 1),
      (Ci = function (e, n, t) {
        var r = Ue(),
          i = En().RangeError,
          a = En().AggregateError,
          o = r.isArray,
          c = {};
        function s(l) {
          (this.constructor$(l),
            (this._howMany = 0),
            (this._unwrap = !1),
            (this._initialized = !1));
        }
        (r.inherits(s, n),
          (s.prototype._init = function () {
            if (this._initialized) {
              if (this._howMany === 0) {
                this._resolve([]);
                return;
              }
              this._init$(void 0, -5);
              var l = o(this._values);
              !this._isResolved() &&
                l &&
                this._howMany > this._canPossiblyFulfill() &&
                this._reject(this._getRangeError(this.length()));
            }
          }),
          (s.prototype.init = function () {
            ((this._initialized = !0), this._init());
          }),
          (s.prototype.setUnwrap = function () {
            this._unwrap = !0;
          }),
          (s.prototype.howMany = function () {
            return this._howMany;
          }),
          (s.prototype.setHowMany = function (l) {
            this._howMany = l;
          }),
          (s.prototype._promiseFulfilled = function (l) {
            return (
              this._addFulfilled(l),
              this._fulfilled() === this.howMany()
                ? ((this._values.length = this.howMany()),
                  this.howMany() === 1 && this._unwrap
                    ? this._resolve(this._values[0])
                    : this._resolve(this._values),
                  !0)
                : !1
            );
          }),
          (s.prototype._promiseRejected = function (l) {
            return (this._addRejected(l), this._checkOutcome());
          }),
          (s.prototype._promiseCancelled = function () {
            return this._values instanceof e || this._values == null
              ? this._cancel()
              : (this._addRejected(c), this._checkOutcome());
          }),
          (s.prototype._checkOutcome = function () {
            if (this.howMany() > this._canPossiblyFulfill()) {
              for (
                var l = new a(), p = this.length();
                p < this._values.length;
                ++p
              )
                this._values[p] !== c && l.push(this._values[p]);
              return (l.length > 0 ? this._reject(l) : this._cancel(), !0);
            }
            return !1;
          }),
          (s.prototype._fulfilled = function () {
            return this._totalResolved;
          }),
          (s.prototype._rejected = function () {
            return this._values.length - this.length();
          }),
          (s.prototype._addRejected = function (l) {
            this._values.push(l);
          }),
          (s.prototype._addFulfilled = function (l) {
            this._values[this._totalResolved++] = l;
          }),
          (s.prototype._canPossiblyFulfill = function () {
            return this.length() - this._rejected();
          }),
          (s.prototype._getRangeError = function (l) {
            var p =
              "Input array must contain at least " +
              this._howMany +
              " items but contains only " +
              l +
              " items";
            return new i(p);
          }),
          (s.prototype._resolveEmptyArray = function () {
            this._reject(this._getRangeError(0));
          }));
        function u(l, p) {
          if ((p | 0) !== p || p < 0)
            return t(`expecting a positive integer

    See http://goo.gl/MqrFmX
`);
          var m = new s(l),
            b = m.promise();
          return (m.setHowMany(p), m.init(), b);
        }
        ((e.some = function (l, p) {
          return u(l, p);
        }),
          (e.prototype.some = function (l) {
            return u(this, l);
          }),
          (e._SomePromiseArray = s));
      })),
    Ci
  );
}
var Fi, Cc;
function xh() {
  return (
    Cc ||
      ((Cc = 1),
      (Fi = function (e, n) {
        var t = e.map;
        ((e.prototype.filter = function (r, i) {
          return t(this, r, i, n);
        }),
          (e.filter = function (r, i, a) {
            return t(r, i, a, n);
          }));
      })),
    Fi
  );
}
var Si, Fc;
function _h() {
  return (
    Fc ||
      ((Fc = 1),
      (Si = function (e, n) {
        var t = e.reduce,
          r = e.all;
        function i() {
          return r(this);
        }
        function a(o, c) {
          return t(o, c, n, n);
        }
        ((e.prototype.each = function (o) {
          return t(this, o, n, 0)._then(i, void 0, void 0, this, void 0);
        }),
          (e.prototype.mapSeries = function (o) {
            return t(this, o, n, n);
          }),
          (e.each = function (o, c) {
            return t(o, c, n, 0)._then(i, void 0, void 0, o, void 0);
          }),
          (e.mapSeries = a));
      })),
    Si
  );
}
var Bi, Sc;
function Uh() {
  return (
    Sc ||
      ((Sc = 1),
      (Bi = function (e) {
        var n = e._SomePromiseArray;
        function t(r) {
          var i = new n(r),
            a = i.promise();
          return (i.setHowMany(1), i.setUnwrap(), i.init(), a);
        }
        ((e.any = function (r) {
          return t(r);
        }),
          (e.prototype.any = function () {
            return t(this);
          }));
      })),
    Bi
  );
}
(function (e) {
  e.exports = function () {
    var n = function () {
        return new m(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`);
      },
      t = function () {
        return new T.PromiseInspection(this._target());
      },
      r = function (C) {
        return T.reject(new m(C));
      };
    function i() {}
    var a = {},
      o = Ue(),
      c;
    (o.isNode
      ? (c = function () {
          var C = process.domain;
          return (C === void 0 && (C = null), C);
        })
      : (c = function () {
          return null;
        }),
      o.notEnumerableProp(T, "_getDomain", c));
    var s = ot(),
      u = Zf(),
      l = new u();
    s.defineProperty(T, "_async", { value: l });
    var p = En(),
      m = (T.TypeError = p.TypeError);
    T.RangeError = p.RangeError;
    var b = (T.CancellationError = p.CancellationError);
    ((T.TimeoutError = p.TimeoutError),
      (T.OperationalError = p.OperationalError),
      (T.RejectionError = p.OperationalError),
      (T.AggregateError = p.AggregateError));
    var y = function () {},
      f = {},
      d = {},
      g = Kf()(T, y),
      h = Qf()(T, y, g, r, i),
      D = Jf()(T),
      _ = D.create,
      U = eh()(T, D);
    U.CapturedTrace;
    var w = nh()(T, g),
      E = th()(d),
      O = bd(),
      I = o.errorObj,
      Y = o.tryCatch;
    function ee(C, k) {
      if (typeof k != "function")
        throw new m("expecting a function but got " + o.classString(k));
      if (C.constructor !== T)
        throw new m(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`);
    }
    function T(C) {
      ((this._bitField = 0),
        (this._fulfillmentHandler0 = void 0),
        (this._rejectionHandler0 = void 0),
        (this._promise0 = void 0),
        (this._receiver0 = void 0),
        C !== y && (ee(this, C), this._resolveFromExecutor(C)),
        this._promiseCreated(),
        this._fireEvent("promiseCreated", this));
    }
    ((T.prototype.toString = function () {
      return "[object Promise]";
    }),
      (T.prototype.caught = T.prototype.catch =
        function (C) {
          var k = arguments.length;
          if (k > 1) {
            var S = new Array(k - 1),
              W = 0,
              z;
            for (z = 0; z < k - 1; ++z) {
              var R = arguments[z];
              if (o.isObject(R)) S[W++] = R;
              else
                return r(
                  "expecting an object but got A catch statement predicate " +
                    o.classString(R),
                );
            }
            return (
              (S.length = W),
              (C = arguments[z]),
              this.then(void 0, E(S, C, this))
            );
          }
          return this.then(void 0, C);
        }),
      (T.prototype.reflect = function () {
        return this._then(t, t, void 0, this, void 0);
      }),
      (T.prototype.then = function (C, k) {
        if (
          U.warnings() &&
          arguments.length > 0 &&
          typeof C != "function" &&
          typeof k != "function"
        ) {
          var S =
            ".then() only accepts functions but was passed: " +
            o.classString(C);
          (arguments.length > 1 && (S += ", " + o.classString(k)),
            this._warn(S));
        }
        return this._then(C, k, void 0, void 0, void 0);
      }),
      (T.prototype.done = function (C, k) {
        var S = this._then(C, k, void 0, void 0, void 0);
        S._setIsFinal();
      }),
      (T.prototype.spread = function (C) {
        return typeof C != "function"
          ? r("expecting a function but got " + o.classString(C))
          : this.all()._then(C, void 0, void 0, f, void 0);
      }),
      (T.prototype.toJSON = function () {
        var C = {
          isFulfilled: !1,
          isRejected: !1,
          fulfillmentValue: void 0,
          rejectionReason: void 0,
        };
        return (
          this.isFulfilled()
            ? ((C.fulfillmentValue = this.value()), (C.isFulfilled = !0))
            : this.isRejected() &&
              ((C.rejectionReason = this.reason()), (C.isRejected = !0)),
          C
        );
      }),
      (T.prototype.all = function () {
        return (
          arguments.length > 0 &&
            this._warn(".all() was passed arguments but it does not take any"),
          new h(this).promise()
        );
      }),
      (T.prototype.error = function (C) {
        return this.caught(o.originatesFromRejection, C);
      }),
      (T.getNewLibraryCopy = e.exports),
      (T.is = function (C) {
        return C instanceof T;
      }),
      (T.fromNode = T.fromCallback =
        function (C) {
          var k = new T(y);
          k._captureStackTrace();
          var S = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : !1,
            W = Y(C)(O(k, S));
          return (
            W === I && k._rejectCallback(W.e, !0),
            k._isFateSealed() || k._setAsyncGuaranteed(),
            k
          );
        }),
      (T.all = function (C) {
        return new h(C).promise();
      }),
      (T.cast = function (C) {
        var k = g(C);
        return (
          k instanceof T ||
            ((k = new T(y)),
            k._captureStackTrace(),
            k._setFulfilled(),
            (k._rejectionHandler0 = C)),
          k
        );
      }),
      (T.resolve = T.fulfilled = T.cast),
      (T.reject = T.rejected =
        function (C) {
          var k = new T(y);
          return (k._captureStackTrace(), k._rejectCallback(C, !0), k);
        }),
      (T.setScheduler = function (C) {
        if (typeof C != "function")
          throw new m("expecting a function but got " + o.classString(C));
        return l.setScheduler(C);
      }),
      (T.prototype._then = function (C, k, S, W, z) {
        var R = z !== void 0,
          L = R ? z : new T(y),
          M = this._target(),
          Z = M._bitField;
        R ||
          (L._propagateFrom(this, 3),
          L._captureStackTrace(),
          W === void 0 &&
            this._bitField & 2097152 &&
            (Z & 50397184
              ? (W = this._boundValue())
              : (W = M === this ? void 0 : this._boundTo)),
          this._fireEvent("promiseChained", this, L));
        var J = c();
        if (Z & 50397184) {
          var ie,
            oe,
            ce = M._settlePromiseCtx;
          (Z & 33554432
            ? ((oe = M._rejectionHandler0), (ie = C))
            : Z & 16777216
              ? ((oe = M._fulfillmentHandler0),
                (ie = k),
                M._unsetRejectionIsUnhandled())
              : ((ce = M._settlePromiseLateCancellationObserver),
                (oe = new b("late cancellation observer")),
                M._attachExtraTrace(oe),
                (ie = k)),
            l.invoke(ce, M, {
              handler:
                J === null
                  ? ie
                  : typeof ie == "function" && o.domainBind(J, ie),
              promise: L,
              receiver: W,
              value: oe,
            }));
        } else M._addCallbacks(C, k, L, W, J);
        return L;
      }),
      (T.prototype._length = function () {
        return this._bitField & 65535;
      }),
      (T.prototype._isFateSealed = function () {
        return (this._bitField & 117506048) !== 0;
      }),
      (T.prototype._isFollowing = function () {
        return (this._bitField & 67108864) === 67108864;
      }),
      (T.prototype._setLength = function (C) {
        this._bitField = (this._bitField & -65536) | (C & 65535);
      }),
      (T.prototype._setFulfilled = function () {
        ((this._bitField = this._bitField | 33554432),
          this._fireEvent("promiseFulfilled", this));
      }),
      (T.prototype._setRejected = function () {
        ((this._bitField = this._bitField | 16777216),
          this._fireEvent("promiseRejected", this));
      }),
      (T.prototype._setFollowing = function () {
        ((this._bitField = this._bitField | 67108864),
          this._fireEvent("promiseResolved", this));
      }),
      (T.prototype._setIsFinal = function () {
        this._bitField = this._bitField | 4194304;
      }),
      (T.prototype._isFinal = function () {
        return (this._bitField & 4194304) > 0;
      }),
      (T.prototype._unsetCancelled = function () {
        this._bitField = this._bitField & -65537;
      }),
      (T.prototype._setCancelled = function () {
        ((this._bitField = this._bitField | 65536),
          this._fireEvent("promiseCancelled", this));
      }),
      (T.prototype._setWillBeCancelled = function () {
        this._bitField = this._bitField | 8388608;
      }),
      (T.prototype._setAsyncGuaranteed = function () {
        l.hasCustomScheduler() || (this._bitField = this._bitField | 134217728);
      }),
      (T.prototype._receiverAt = function (C) {
        var k = C === 0 ? this._receiver0 : this[C * 4 - 4 + 3];
        if (k !== a)
          return k === void 0 && this._isBound() ? this._boundValue() : k;
      }),
      (T.prototype._promiseAt = function (C) {
        return this[C * 4 - 4 + 2];
      }),
      (T.prototype._fulfillmentHandlerAt = function (C) {
        return this[C * 4 - 4 + 0];
      }),
      (T.prototype._rejectionHandlerAt = function (C) {
        return this[C * 4 - 4 + 1];
      }),
      (T.prototype._boundValue = function () {}),
      (T.prototype._migrateCallback0 = function (C) {
        C._bitField;
        var k = C._fulfillmentHandler0,
          S = C._rejectionHandler0,
          W = C._promise0,
          z = C._receiverAt(0);
        (z === void 0 && (z = a), this._addCallbacks(k, S, W, z, null));
      }),
      (T.prototype._migrateCallbackAt = function (C, k) {
        var S = C._fulfillmentHandlerAt(k),
          W = C._rejectionHandlerAt(k),
          z = C._promiseAt(k),
          R = C._receiverAt(k);
        (R === void 0 && (R = a), this._addCallbacks(S, W, z, R, null));
      }),
      (T.prototype._addCallbacks = function (C, k, S, W, z) {
        var R = this._length();
        if ((R >= 65531 && ((R = 0), this._setLength(0)), R === 0))
          ((this._promise0 = S),
            (this._receiver0 = W),
            typeof C == "function" &&
              (this._fulfillmentHandler0 = z === null ? C : o.domainBind(z, C)),
            typeof k == "function" &&
              (this._rejectionHandler0 = z === null ? k : o.domainBind(z, k)));
        else {
          var L = R * 4 - 4;
          ((this[L + 2] = S),
            (this[L + 3] = W),
            typeof C == "function" &&
              (this[L + 0] = z === null ? C : o.domainBind(z, C)),
            typeof k == "function" &&
              (this[L + 1] = z === null ? k : o.domainBind(z, k)));
        }
        return (this._setLength(R + 1), R);
      }),
      (T.prototype._proxy = function (C, k) {
        this._addCallbacks(void 0, void 0, k, C, null);
      }),
      (T.prototype._resolveCallback = function (C, k) {
        if (!(this._bitField & 117506048)) {
          if (C === this) return this._rejectCallback(n(), !1);
          var S = g(C, this);
          if (!(S instanceof T)) return this._fulfill(C);
          k && this._propagateFrom(S, 2);
          var W = S._target();
          if (W === this) {
            this._reject(n());
            return;
          }
          var z = W._bitField;
          if (z & 50397184)
            if (z & 33554432) this._fulfill(W._value());
            else if (z & 16777216) this._reject(W._reason());
            else {
              var M = new b("late cancellation observer");
              (W._attachExtraTrace(M), this._reject(M));
            }
          else {
            var R = this._length();
            R > 0 && W._migrateCallback0(this);
            for (var L = 1; L < R; ++L) W._migrateCallbackAt(this, L);
            (this._setFollowing(), this._setLength(0), this._setFollowee(W));
          }
        }
      }),
      (T.prototype._rejectCallback = function (C, k, S) {
        var W = o.ensureErrorObject(C),
          z = W === C;
        if (!z && !S && U.warnings()) {
          var R =
            "a promise was rejected with a non-error: " + o.classString(C);
          this._warn(R, !0);
        }
        (this._attachExtraTrace(W, k ? z : !1), this._reject(C));
      }),
      (T.prototype._resolveFromExecutor = function (C) {
        var k = this;
        (this._captureStackTrace(), this._pushContext());
        var S = !0,
          W = this._execute(
            C,
            function (z) {
              k._resolveCallback(z);
            },
            function (z) {
              k._rejectCallback(z, S);
            },
          );
        ((S = !1),
          this._popContext(),
          W !== void 0 && k._rejectCallback(W, !0));
      }),
      (T.prototype._settlePromiseFromHandler = function (C, k, S, W) {
        var z = W._bitField;
        if (!(z & 65536)) {
          W._pushContext();
          var R;
          k === f
            ? !S || typeof S.length != "number"
              ? ((R = I),
                (R.e = new m(
                  "cannot .spread() a non-array: " + o.classString(S),
                )))
              : (R = Y(C).apply(this._boundValue(), S))
            : (R = Y(C).call(k, S));
          var L = W._popContext();
          ((z = W._bitField),
            !(z & 65536) &&
              (R === d
                ? W._reject(S)
                : R === I
                  ? W._rejectCallback(R.e, !1)
                  : (U.checkForgottenReturns(R, L, "", W, this),
                    W._resolveCallback(R))));
        }
      }),
      (T.prototype._target = function () {
        for (var C = this; C._isFollowing(); ) C = C._followee();
        return C;
      }),
      (T.prototype._followee = function () {
        return this._rejectionHandler0;
      }),
      (T.prototype._setFollowee = function (C) {
        this._rejectionHandler0 = C;
      }),
      (T.prototype._settlePromise = function (C, k, S, W) {
        var z = C instanceof T,
          R = this._bitField,
          L = (R & 134217728) !== 0;
        R & 65536
          ? (z && C._invokeInternalOnCancel(),
            S instanceof w && S.isFinallyHandler()
              ? ((S.cancelPromise = C), Y(k).call(S, W) === I && C._reject(I.e))
              : k === t
                ? C._fulfill(t.call(S))
                : S instanceof i
                  ? S._promiseCancelled(C)
                  : z || C instanceof h
                    ? C._cancel()
                    : S.cancel())
          : typeof k == "function"
            ? z
              ? (L && C._setAsyncGuaranteed(),
                this._settlePromiseFromHandler(k, S, W, C))
              : k.call(S, W, C)
            : S instanceof i
              ? S._isResolved() ||
                (R & 33554432
                  ? S._promiseFulfilled(W, C)
                  : S._promiseRejected(W, C))
              : z &&
                (L && C._setAsyncGuaranteed(),
                R & 33554432 ? C._fulfill(W) : C._reject(W));
      }),
      (T.prototype._settlePromiseLateCancellationObserver = function (C) {
        var k = C.handler,
          S = C.promise,
          W = C.receiver,
          z = C.value;
        typeof k == "function"
          ? S instanceof T
            ? this._settlePromiseFromHandler(k, W, z, S)
            : k.call(W, z, S)
          : S instanceof T && S._reject(z);
      }),
      (T.prototype._settlePromiseCtx = function (C) {
        this._settlePromise(C.promise, C.handler, C.receiver, C.value);
      }),
      (T.prototype._settlePromise0 = function (C, k, S) {
        var W = this._promise0,
          z = this._receiverAt(0);
        ((this._promise0 = void 0),
          (this._receiver0 = void 0),
          this._settlePromise(W, C, z, k));
      }),
      (T.prototype._clearCallbackDataAtIndex = function (C) {
        var k = C * 4 - 4;
        this[k + 2] = this[k + 3] = this[k + 0] = this[k + 1] = void 0;
      }),
      (T.prototype._fulfill = function (C) {
        var k = this._bitField;
        if (!((k & 117506048) >>> 16)) {
          if (C === this) {
            var S = n();
            return (this._attachExtraTrace(S), this._reject(S));
          }
          (this._setFulfilled(),
            (this._rejectionHandler0 = C),
            (k & 65535) > 0 &&
              (k & 134217728
                ? this._settlePromises()
                : l.settlePromises(this)));
        }
      }),
      (T.prototype._reject = function (C) {
        var k = this._bitField;
        if (!((k & 117506048) >>> 16)) {
          if (
            (this._setRejected(),
            (this._fulfillmentHandler0 = C),
            this._isFinal())
          )
            return l.fatalError(C, o.isNode);
          (k & 65535) > 0
            ? l.settlePromises(this)
            : this._ensurePossibleRejectionHandled();
        }
      }),
      (T.prototype._fulfillPromises = function (C, k) {
        for (var S = 1; S < C; S++) {
          var W = this._fulfillmentHandlerAt(S),
            z = this._promiseAt(S),
            R = this._receiverAt(S);
          (this._clearCallbackDataAtIndex(S), this._settlePromise(z, W, R, k));
        }
      }),
      (T.prototype._rejectPromises = function (C, k) {
        for (var S = 1; S < C; S++) {
          var W = this._rejectionHandlerAt(S),
            z = this._promiseAt(S),
            R = this._receiverAt(S);
          (this._clearCallbackDataAtIndex(S), this._settlePromise(z, W, R, k));
        }
      }),
      (T.prototype._settlePromises = function () {
        var C = this._bitField,
          k = C & 65535;
        if (k > 0) {
          if (C & 16842752) {
            var S = this._fulfillmentHandler0;
            (this._settlePromise0(this._rejectionHandler0, S, C),
              this._rejectPromises(k, S));
          } else {
            var W = this._rejectionHandler0;
            (this._settlePromise0(this._fulfillmentHandler0, W, C),
              this._fulfillPromises(k, W));
          }
          this._setLength(0);
        }
        this._clearCancellationData();
      }),
      (T.prototype._settledValue = function () {
        var C = this._bitField;
        if (C & 33554432) return this._rejectionHandler0;
        if (C & 16777216) return this._fulfillmentHandler0;
      }));
    function N(C) {
      this.promise._resolveCallback(C);
    }
    function x(C) {
      this.promise._rejectCallback(C, !1);
    }
    ((T.defer = T.pending =
      function () {
        U.deprecated("Promise.defer", "new Promise");
        var C = new T(y);
        return { promise: C, resolve: N, reject: x };
      }),
      o.notEnumerableProp(T, "_makeSelfResolutionError", n),
      rh()(T, y, g, r, U),
      ih()(T, y, g, U),
      ah()(T, h, r, U),
      oh()(T),
      ch()(T),
      sh()(T, h, g, y, l, c),
      (T.Promise = T),
      (T.version = "3.4.7"),
      uh()(T, h, r, g, y, U),
      dh()(T),
      lh()(T, r, g, _, y, U),
      fh()(T, y, U),
      hh()(T, r, y, g, i, U),
      ph()(T),
      gh()(T, y),
      mh()(T, h, g, r),
      bh()(T, y, g, r),
      yh()(T, h, r, g, y, U),
      Dh()(T, h, U),
      vh()(T, h, r),
      xh()(T, y),
      _h()(T, y),
      Uh()(T),
      o.toFastProperties(T),
      o.toFastProperties(T.prototype));
    function j(C) {
      var k = new T(y);
      ((k._fulfillmentHandler0 = C),
        (k._rejectionHandler0 = C),
        (k._promise0 = C),
        (k._receiver0 = C));
    }
    return (
      j({ a: 1 }),
      j({ b: 2 }),
      j({ c: 3 }),
      j(1),
      j(function () {}),
      j(void 0),
      j(!1),
      j(new T(y)),
      U.setBounds(u.firstLineError, o.lastLineError),
      T
    );
  };
})(md);
var Th = md.exports,
  wh = we,
  ze = Th();
Ce.defer = Eh;
Ce.when = ze.resolve;
Ce.resolve = ze.resolve;
Ce.all = ze.all;
Ce.props = ze.props;
Ce.reject = ze.reject;
Ce.promisify = ze.promisify;
Ce.mapSeries = ze.mapSeries;
Ce.attempt = ze.attempt;
Ce.nfcall = function (e) {
  var n = Array.prototype.slice.call(arguments, 1),
    t = ze.promisify(e);
  return t.apply(null, n);
};
ze.prototype.fail = ze.prototype.caught;
ze.prototype.also = function (e) {
  return this.then(function (n) {
    var t = wh.extend({}, n, e(n));
    return ze.props(t);
  });
};
function Eh() {
  var e,
    n,
    t = new ze.Promise(function (r, i) {
      ((e = r), (n = i));
    });
  return { resolve: e, reject: n, promise: t };
}
var he = {},
  Ah = we,
  Be = (he.types = {
    document: "document",
    paragraph: "paragraph",
    run: "run",
    text: "text",
    tab: "tab",
    checkbox: "checkbox",
    hyperlink: "hyperlink",
    noteReference: "noteReference",
    image: "image",
    note: "note",
    commentReference: "commentReference",
    comment: "comment",
    table: "table",
    tableRow: "tableRow",
    tableCell: "tableCell",
    break: "break",
    bookmarkStart: "bookmarkStart",
  });
function Ch(e, n) {
  return (
    (n = n || {}),
    {
      type: Be.document,
      children: e,
      notes: n.notes || new xr({}),
      comments: n.comments || [],
    }
  );
}
function Fh(e, n) {
  n = n || {};
  var t = n.indent || {};
  return {
    type: Be.paragraph,
    children: e,
    styleId: n.styleId || null,
    styleName: n.styleName || null,
    numbering: n.numbering || null,
    alignment: n.alignment || null,
    indent: {
      start: t.start || null,
      end: t.end || null,
      firstLine: t.firstLine || null,
      hanging: t.hanging || null,
    },
  };
}
function Sh(e, n) {
  return (
    (n = n || {}),
    {
      type: Be.run,
      children: e,
      styleId: n.styleId || null,
      styleName: n.styleName || null,
      isBold: !!n.isBold,
      isUnderline: !!n.isUnderline,
      isItalic: !!n.isItalic,
      isStrikethrough: !!n.isStrikethrough,
      isAllCaps: !!n.isAllCaps,
      isSmallCaps: !!n.isSmallCaps,
      verticalAlignment: n.verticalAlignment || yd.baseline,
      font: n.font || null,
      fontSize: n.fontSize || null,
      highlight: n.highlight || null,
    }
  );
}
var yd = {
  baseline: "baseline",
  superscript: "superscript",
  subscript: "subscript",
};
function Bh(e) {
  return { type: Be.text, value: e };
}
function kh() {
  return { type: Be.tab };
}
function Wh(e) {
  return { type: Be.checkbox, checked: e.checked };
}
function Rh(e, n) {
  return {
    type: Be.hyperlink,
    children: e,
    href: n.href,
    anchor: n.anchor,
    targetFrame: n.targetFrame,
  };
}
function Oh(e) {
  return { type: Be.noteReference, noteType: e.noteType, noteId: e.noteId };
}
function xr(e) {
  this._notes = Ah.indexBy(e, function (n) {
    return Dd(n.noteType, n.noteId);
  });
}
xr.prototype.resolve = function (e) {
  return this.findNoteByKey(Dd(e.noteType, e.noteId));
};
xr.prototype.findNoteByKey = function (e) {
  return this._notes[e] || null;
};
function Ih(e) {
  return {
    type: Be.note,
    noteType: e.noteType,
    noteId: e.noteId,
    body: e.body,
  };
}
function Nh(e) {
  return { type: Be.commentReference, commentId: e.commentId };
}
function Lh(e) {
  return {
    type: Be.comment,
    commentId: e.commentId,
    body: e.body,
    authorName: e.authorName,
    authorInitials: e.authorInitials,
  };
}
function Dd(e, n) {
  return e + "-" + n;
}
function Mh(e) {
  return {
    type: Be.image,
    read: function (n) {
      return n
        ? e.readImage(n)
        : e.readImage().then(function (t) {
            return Buffer.from(t);
          });
    },
    readAsArrayBuffer: function () {
      return e.readImage();
    },
    readAsBase64String: function () {
      return e.readImage("base64");
    },
    readAsBuffer: function () {
      return e.readImage().then(function (n) {
        return Buffer.from(n);
      });
    },
    altText: e.altText,
    contentType: e.contentType,
  };
}
function Ph(e, n) {
  return (
    (n = n || {}),
    {
      type: Be.table,
      children: e,
      styleId: n.styleId || null,
      styleName: n.styleName || null,
    }
  );
}
function qh(e, n) {
  return (
    (n = n || {}),
    { type: Be.tableRow, children: e, isHeader: n.isHeader || !1 }
  );
}
function zh(e, n) {
  return (
    (n = n || {}),
    {
      type: Be.tableCell,
      children: e,
      colSpan: n.colSpan == null ? 1 : n.colSpan,
      rowSpan: n.rowSpan == null ? 1 : n.rowSpan,
    }
  );
}
function eo(e) {
  return { type: Be.break, breakType: e };
}
function jh(e) {
  return { type: Be.bookmarkStart, name: e.name };
}
he.document = he.Document = Ch;
he.paragraph = he.Paragraph = Fh;
he.run = he.Run = Sh;
he.text = he.Text = Bh;
he.tab = he.Tab = kh;
he.checkbox = he.Checkbox = Wh;
he.Hyperlink = Rh;
he.noteReference = he.NoteReference = Oh;
he.Notes = xr;
he.Note = Ih;
he.commentReference = Nh;
he.comment = Lh;
he.Image = Mh;
he.Table = Ph;
he.TableRow = qh;
he.TableCell = zh;
he.lineBreak = eo("line");
he.pageBreak = eo("page");
he.columnBreak = eo("column");
he.BookmarkStart = jh;
he.verticalAlignment = yd;
var Ye = {},
  Tt = we;
Ye.Result = dn;
Ye.success = Vh;
Ye.warning = Xh;
Ye.error = Hh;
function dn(e, n) {
  ((this.value = e), (this.messages = n || []));
}
dn.prototype.map = function (e) {
  return new dn(e(this.value), this.messages);
};
dn.prototype.flatMap = function (e) {
  var n = e(this.value);
  return new dn(n.value, no([this, n]));
};
dn.prototype.flatMapThen = function (e) {
  var n = this;
  return e(this.value).then(function (t) {
    return new dn(t.value, no([n, t]));
  });
};
dn.combine = function (e) {
  var n = Tt.flatten(Tt.pluck(e, "value")),
    t = no(e);
  return new dn(n, t);
};
function Vh(e) {
  return new dn(e, []);
}
function Xh(e) {
  return { type: "warning", message: e };
}
function Hh(e) {
  return { type: "error", message: e.message, error: e };
}
function no(e) {
  var n = [];
  return (
    Tt.flatten(Tt.pluck(e, "messages"), !0).forEach(function (t) {
      $h(n, t) || n.push(t);
    }),
    n
  );
}
function $h(e, n) {
  return Tt.find(e, Gh.bind(null, n)) !== void 0;
}
function Gh(e, n) {
  return e.type === n.type && e.message === n.message;
}
var Rt = {},
  _r = {};
_r.byteLength = Kh;
_r.toByteArray = Jh;
_r.fromByteArray = tp;
var cn = [],
  Ke = [],
  Yh = typeof Uint8Array < "u" ? Uint8Array : Array,
  ki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Pn = 0, Zh = ki.length; Pn < Zh; ++Pn)
  ((cn[Pn] = ki[Pn]), (Ke[ki.charCodeAt(Pn)] = Pn));
Ke[45] = 62;
Ke[95] = 63;
function vd(e) {
  var n = e.length;
  if (n % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  t === -1 && (t = n);
  var r = t === n ? 0 : 4 - (t % 4);
  return [t, r];
}
function Kh(e) {
  var n = vd(e),
    t = n[0],
    r = n[1];
  return ((t + r) * 3) / 4 - r;
}
function Qh(e, n, t) {
  return ((n + t) * 3) / 4 - t;
}
function Jh(e) {
  var n,
    t = vd(e),
    r = t[0],
    i = t[1],
    a = new Yh(Qh(e, r, i)),
    o = 0,
    c = i > 0 ? r - 4 : r,
    s;
  for (s = 0; s < c; s += 4)
    ((n =
      (Ke[e.charCodeAt(s)] << 18) |
      (Ke[e.charCodeAt(s + 1)] << 12) |
      (Ke[e.charCodeAt(s + 2)] << 6) |
      Ke[e.charCodeAt(s + 3)]),
      (a[o++] = (n >> 16) & 255),
      (a[o++] = (n >> 8) & 255),
      (a[o++] = n & 255));
  return (
    i === 2 &&
      ((n = (Ke[e.charCodeAt(s)] << 2) | (Ke[e.charCodeAt(s + 1)] >> 4)),
      (a[o++] = n & 255)),
    i === 1 &&
      ((n =
        (Ke[e.charCodeAt(s)] << 10) |
        (Ke[e.charCodeAt(s + 1)] << 4) |
        (Ke[e.charCodeAt(s + 2)] >> 2)),
      (a[o++] = (n >> 8) & 255),
      (a[o++] = n & 255)),
    a
  );
}
function ep(e) {
  return (
    cn[(e >> 18) & 63] + cn[(e >> 12) & 63] + cn[(e >> 6) & 63] + cn[e & 63]
  );
}
function np(e, n, t) {
  for (var r, i = [], a = n; a < t; a += 3)
    ((r =
      ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (e[a + 2] & 255)),
      i.push(ep(r)));
  return i.join("");
}
function tp(e) {
  for (
    var n, t = e.length, r = t % 3, i = [], a = 16383, o = 0, c = t - r;
    o < c;
    o += a
  )
    i.push(np(e, o, o + a > c ? c : o + a));
  return (
    r === 1
      ? ((n = e[t - 1]), i.push(cn[n >> 2] + cn[(n << 4) & 63] + "=="))
      : r === 2 &&
        ((n = (e[t - 2] << 8) + e[t - 1]),
        i.push(cn[n >> 10] + cn[(n >> 4) & 63] + cn[(n << 2) & 63] + "=")),
    i.join("")
  );
}
function jt(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var xd = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/ (function (e, n) {
  (function (t) {
    e.exports = t();
  })(function () {
    return (function t(r, i, a) {
      function o(u, l) {
        if (!i[u]) {
          if (!r[u]) {
            var p = typeof jt == "function" && jt;
            if (!l && p) return p(u, !0);
            if (c) return c(u, !0);
            var m = new Error("Cannot find module '" + u + "'");
            throw ((m.code = "MODULE_NOT_FOUND"), m);
          }
          var b = (i[u] = { exports: {} });
          r[u][0].call(
            b.exports,
            function (y) {
              var f = r[u][1][y];
              return o(f || y);
            },
            b,
            b.exports,
            t,
            r,
            i,
            a,
          );
        }
        return i[u].exports;
      }
      for (var c = typeof jt == "function" && jt, s = 0; s < a.length; s++)
        o(a[s]);
      return o;
    })(
      {
        1: [
          function (t, r, i) {
            var a = t("./utils"),
              o = t("./support"),
              c =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            ((i.encode = function (s) {
              for (
                var u,
                  l,
                  p,
                  m,
                  b,
                  y,
                  f,
                  d = [],
                  g = 0,
                  h = s.length,
                  D = h,
                  _ = a.getTypeOf(s) !== "string";
                g < s.length;
              )
                ((D = h - g),
                  (p = _
                    ? ((u = s[g++]),
                      (l = g < h ? s[g++] : 0),
                      g < h ? s[g++] : 0)
                    : ((u = s.charCodeAt(g++)),
                      (l = g < h ? s.charCodeAt(g++) : 0),
                      g < h ? s.charCodeAt(g++) : 0)),
                  (m = u >> 2),
                  (b = ((3 & u) << 4) | (l >> 4)),
                  (y = 1 < D ? ((15 & l) << 2) | (p >> 6) : 64),
                  (f = 2 < D ? 63 & p : 64),
                  d.push(
                    c.charAt(m) + c.charAt(b) + c.charAt(y) + c.charAt(f),
                  ));
              return d.join("");
            }),
              (i.decode = function (s) {
                var u,
                  l,
                  p,
                  m,
                  b,
                  y,
                  f = 0,
                  d = 0,
                  g = "data:";
                if (s.substr(0, g.length) === g)
                  throw new Error(
                    "Invalid base64 input, it looks like a data url.",
                  );
                var h,
                  D = (3 * (s = s.replace(/[^A-Za-z0-9+/=]/g, "")).length) / 4;
                if (
                  (s.charAt(s.length - 1) === c.charAt(64) && D--,
                  s.charAt(s.length - 2) === c.charAt(64) && D--,
                  D % 1 != 0)
                )
                  throw new Error("Invalid base64 input, bad content length.");
                for (
                  h = o.uint8array ? new Uint8Array(0 | D) : new Array(0 | D);
                  f < s.length;
                )
                  ((u =
                    (c.indexOf(s.charAt(f++)) << 2) |
                    ((m = c.indexOf(s.charAt(f++))) >> 4)),
                    (l =
                      ((15 & m) << 4) | ((b = c.indexOf(s.charAt(f++))) >> 2)),
                    (p = ((3 & b) << 6) | (y = c.indexOf(s.charAt(f++)))),
                    (h[d++] = u),
                    b !== 64 && (h[d++] = l),
                    y !== 64 && (h[d++] = p));
                return h;
              }));
          },
          { "./support": 30, "./utils": 32 },
        ],
        2: [
          function (t, r, i) {
            var a = t("./external"),
              o = t("./stream/DataWorker"),
              c = t("./stream/Crc32Probe"),
              s = t("./stream/DataLengthProbe");
            function u(l, p, m, b, y) {
              ((this.compressedSize = l),
                (this.uncompressedSize = p),
                (this.crc32 = m),
                (this.compression = b),
                (this.compressedContent = y));
            }
            ((u.prototype = {
              getContentWorker: function () {
                var l = new o(a.Promise.resolve(this.compressedContent))
                    .pipe(this.compression.uncompressWorker())
                    .pipe(new s("data_length")),
                  p = this;
                return (
                  l.on("end", function () {
                    if (this.streamInfo.data_length !== p.uncompressedSize)
                      throw new Error("Bug : uncompressed data size mismatch");
                  }),
                  l
                );
              },
              getCompressedWorker: function () {
                return new o(a.Promise.resolve(this.compressedContent))
                  .withStreamInfo("compressedSize", this.compressedSize)
                  .withStreamInfo("uncompressedSize", this.uncompressedSize)
                  .withStreamInfo("crc32", this.crc32)
                  .withStreamInfo("compression", this.compression);
              },
            }),
              (u.createWorkerFrom = function (l, p, m) {
                return l
                  .pipe(new c())
                  .pipe(new s("uncompressedSize"))
                  .pipe(p.compressWorker(m))
                  .pipe(new s("compressedSize"))
                  .withStreamInfo("compression", p);
              }),
              (r.exports = u));
          },
          {
            "./external": 6,
            "./stream/Crc32Probe": 25,
            "./stream/DataLengthProbe": 26,
            "./stream/DataWorker": 27,
          },
        ],
        3: [
          function (t, r, i) {
            var a = t("./stream/GenericWorker");
            ((i.STORE = {
              magic: "\0\0",
              compressWorker: function () {
                return new a("STORE compression");
              },
              uncompressWorker: function () {
                return new a("STORE decompression");
              },
            }),
              (i.DEFLATE = t("./flate")));
          },
          { "./flate": 7, "./stream/GenericWorker": 28 },
        ],
        4: [
          function (t, r, i) {
            var a = t("./utils"),
              o = (function () {
                for (var c, s = [], u = 0; u < 256; u++) {
                  c = u;
                  for (var l = 0; l < 8; l++)
                    c = 1 & c ? 3988292384 ^ (c >>> 1) : c >>> 1;
                  s[u] = c;
                }
                return s;
              })();
            r.exports = function (c, s) {
              return c !== void 0 && c.length
                ? a.getTypeOf(c) !== "string"
                  ? (function (u, l, p, m) {
                      var b = o,
                        y = m + p;
                      u ^= -1;
                      for (var f = m; f < y; f++)
                        u = (u >>> 8) ^ b[255 & (u ^ l[f])];
                      return -1 ^ u;
                    })(0 | s, c, c.length, 0)
                  : (function (u, l, p, m) {
                      var b = o,
                        y = m + p;
                      u ^= -1;
                      for (var f = m; f < y; f++)
                        u = (u >>> 8) ^ b[255 & (u ^ l.charCodeAt(f))];
                      return -1 ^ u;
                    })(0 | s, c, c.length, 0)
                : 0;
            };
          },
          { "./utils": 32 },
        ],
        5: [
          function (t, r, i) {
            ((i.base64 = !1),
              (i.binary = !1),
              (i.dir = !1),
              (i.createFolders = !0),
              (i.date = null),
              (i.compression = null),
              (i.compressionOptions = null),
              (i.comment = null),
              (i.unixPermissions = null),
              (i.dosPermissions = null));
          },
          {},
        ],
        6: [
          function (t, r, i) {
            var a = null;
            ((a = typeof Promise < "u" ? Promise : t("lie")),
              (r.exports = { Promise: a }));
          },
          { lie: 37 },
        ],
        7: [
          function (t, r, i) {
            var a =
                typeof Uint8Array < "u" &&
                typeof Uint16Array < "u" &&
                typeof Uint32Array < "u",
              o = t("pako"),
              c = t("./utils"),
              s = t("./stream/GenericWorker"),
              u = a ? "uint8array" : "array";
            function l(p, m) {
              (s.call(this, "FlateWorker/" + p),
                (this._pako = null),
                (this._pakoAction = p),
                (this._pakoOptions = m),
                (this.meta = {}));
            }
            ((i.magic = "\b\0"),
              c.inherits(l, s),
              (l.prototype.processChunk = function (p) {
                ((this.meta = p.meta),
                  this._pako === null && this._createPako(),
                  this._pako.push(c.transformTo(u, p.data), !1));
              }),
              (l.prototype.flush = function () {
                (s.prototype.flush.call(this),
                  this._pako === null && this._createPako(),
                  this._pako.push([], !0));
              }),
              (l.prototype.cleanUp = function () {
                (s.prototype.cleanUp.call(this), (this._pako = null));
              }),
              (l.prototype._createPako = function () {
                this._pako = new o[this._pakoAction]({
                  raw: !0,
                  level: this._pakoOptions.level || -1,
                });
                var p = this;
                this._pako.onData = function (m) {
                  p.push({ data: m, meta: p.meta });
                };
              }),
              (i.compressWorker = function (p) {
                return new l("Deflate", p);
              }),
              (i.uncompressWorker = function () {
                return new l("Inflate", {});
              }));
          },
          { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 },
        ],
        8: [
          function (t, r, i) {
            function a(b, y) {
              var f,
                d = "";
              for (f = 0; f < y; f++)
                ((d += String.fromCharCode(255 & b)), (b >>>= 8));
              return d;
            }
            function o(b, y, f, d, g, h) {
              var D,
                _,
                U = b.file,
                w = b.compression,
                E = h !== u.utf8encode,
                O = c.transformTo("string", h(U.name)),
                I = c.transformTo("string", u.utf8encode(U.name)),
                Y = U.comment,
                ee = c.transformTo("string", h(Y)),
                T = c.transformTo("string", u.utf8encode(Y)),
                N = I.length !== U.name.length,
                x = T.length !== Y.length,
                j = "",
                C = "",
                k = "",
                S = U.dir,
                W = U.date,
                z = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
              (y && !f) ||
                ((z.crc32 = b.crc32),
                (z.compressedSize = b.compressedSize),
                (z.uncompressedSize = b.uncompressedSize));
              var R = 0;
              (y && (R |= 8), E || (!N && !x) || (R |= 2048));
              var L = 0,
                M = 0;
              (S && (L |= 16),
                g === "UNIX"
                  ? ((M = 798),
                    (L |= (function (J, ie) {
                      var oe = J;
                      return (
                        J || (oe = ie ? 16893 : 33204),
                        (65535 & oe) << 16
                      );
                    })(U.unixPermissions, S)))
                  : ((M = 20),
                    (L |= (function (J) {
                      return 63 & (J || 0);
                    })(U.dosPermissions))),
                (D = W.getUTCHours()),
                (D <<= 6),
                (D |= W.getUTCMinutes()),
                (D <<= 5),
                (D |= W.getUTCSeconds() / 2),
                (_ = W.getUTCFullYear() - 1980),
                (_ <<= 4),
                (_ |= W.getUTCMonth() + 1),
                (_ <<= 5),
                (_ |= W.getUTCDate()),
                N &&
                  ((C = a(1, 1) + a(l(O), 4) + I),
                  (j += "up" + a(C.length, 2) + C)),
                x &&
                  ((k = a(1, 1) + a(l(ee), 4) + T),
                  (j += "uc" + a(k.length, 2) + k)));
              var Z = "";
              return (
                (Z += `
\0`),
                (Z += a(R, 2)),
                (Z += w.magic),
                (Z += a(D, 2)),
                (Z += a(_, 2)),
                (Z += a(z.crc32, 4)),
                (Z += a(z.compressedSize, 4)),
                (Z += a(z.uncompressedSize, 4)),
                (Z += a(O.length, 2)),
                (Z += a(j.length, 2)),
                {
                  fileRecord: p.LOCAL_FILE_HEADER + Z + O + j,
                  dirRecord:
                    p.CENTRAL_FILE_HEADER +
                    a(M, 2) +
                    Z +
                    a(ee.length, 2) +
                    "\0\0\0\0" +
                    a(L, 4) +
                    a(d, 4) +
                    O +
                    j +
                    ee,
                }
              );
            }
            var c = t("../utils"),
              s = t("../stream/GenericWorker"),
              u = t("../utf8"),
              l = t("../crc32"),
              p = t("../signature");
            function m(b, y, f, d) {
              (s.call(this, "ZipFileWorker"),
                (this.bytesWritten = 0),
                (this.zipComment = y),
                (this.zipPlatform = f),
                (this.encodeFileName = d),
                (this.streamFiles = b),
                (this.accumulate = !1),
                (this.contentBuffer = []),
                (this.dirRecords = []),
                (this.currentSourceOffset = 0),
                (this.entriesCount = 0),
                (this.currentFile = null),
                (this._sources = []));
            }
            (c.inherits(m, s),
              (m.prototype.push = function (b) {
                var y = b.meta.percent || 0,
                  f = this.entriesCount,
                  d = this._sources.length;
                this.accumulate
                  ? this.contentBuffer.push(b)
                  : ((this.bytesWritten += b.data.length),
                    s.prototype.push.call(this, {
                      data: b.data,
                      meta: {
                        currentFile: this.currentFile,
                        percent: f ? (y + 100 * (f - d - 1)) / f : 100,
                      },
                    }));
              }),
              (m.prototype.openedSource = function (b) {
                ((this.currentSourceOffset = this.bytesWritten),
                  (this.currentFile = b.file.name));
                var y = this.streamFiles && !b.file.dir;
                if (y) {
                  var f = o(
                    b,
                    y,
                    !1,
                    this.currentSourceOffset,
                    this.zipPlatform,
                    this.encodeFileName,
                  );
                  this.push({ data: f.fileRecord, meta: { percent: 0 } });
                } else this.accumulate = !0;
              }),
              (m.prototype.closedSource = function (b) {
                this.accumulate = !1;
                var y = this.streamFiles && !b.file.dir,
                  f = o(
                    b,
                    y,
                    !0,
                    this.currentSourceOffset,
                    this.zipPlatform,
                    this.encodeFileName,
                  );
                if ((this.dirRecords.push(f.dirRecord), y))
                  this.push({
                    data: (function (d) {
                      return (
                        p.DATA_DESCRIPTOR +
                        a(d.crc32, 4) +
                        a(d.compressedSize, 4) +
                        a(d.uncompressedSize, 4)
                      );
                    })(b),
                    meta: { percent: 100 },
                  });
                else
                  for (
                    this.push({ data: f.fileRecord, meta: { percent: 0 } });
                    this.contentBuffer.length;
                  )
                    this.push(this.contentBuffer.shift());
                this.currentFile = null;
              }),
              (m.prototype.flush = function () {
                for (
                  var b = this.bytesWritten, y = 0;
                  y < this.dirRecords.length;
                  y++
                )
                  this.push({
                    data: this.dirRecords[y],
                    meta: { percent: 100 },
                  });
                var f = this.bytesWritten - b,
                  d = (function (g, h, D, _, U) {
                    var w = c.transformTo("string", U(_));
                    return (
                      p.CENTRAL_DIRECTORY_END +
                      "\0\0\0\0" +
                      a(g, 2) +
                      a(g, 2) +
                      a(h, 4) +
                      a(D, 4) +
                      a(w.length, 2) +
                      w
                    );
                  })(
                    this.dirRecords.length,
                    f,
                    b,
                    this.zipComment,
                    this.encodeFileName,
                  );
                this.push({ data: d, meta: { percent: 100 } });
              }),
              (m.prototype.prepareNextSource = function () {
                ((this.previous = this._sources.shift()),
                  this.openedSource(this.previous.streamInfo),
                  this.isPaused
                    ? this.previous.pause()
                    : this.previous.resume());
              }),
              (m.prototype.registerPrevious = function (b) {
                this._sources.push(b);
                var y = this;
                return (
                  b.on("data", function (f) {
                    y.processChunk(f);
                  }),
                  b.on("end", function () {
                    (y.closedSource(y.previous.streamInfo),
                      y._sources.length ? y.prepareNextSource() : y.end());
                  }),
                  b.on("error", function (f) {
                    y.error(f);
                  }),
                  this
                );
              }),
              (m.prototype.resume = function () {
                return (
                  !!s.prototype.resume.call(this) &&
                  (!this.previous && this._sources.length
                    ? (this.prepareNextSource(), !0)
                    : this.previous ||
                        this._sources.length ||
                        this.generatedError
                      ? void 0
                      : (this.end(), !0))
                );
              }),
              (m.prototype.error = function (b) {
                var y = this._sources;
                if (!s.prototype.error.call(this, b)) return !1;
                for (var f = 0; f < y.length; f++)
                  try {
                    y[f].error(b);
                  } catch {}
                return !0;
              }),
              (m.prototype.lock = function () {
                s.prototype.lock.call(this);
                for (var b = this._sources, y = 0; y < b.length; y++)
                  b[y].lock();
              }),
              (r.exports = m));
          },
          {
            "../crc32": 4,
            "../signature": 23,
            "../stream/GenericWorker": 28,
            "../utf8": 31,
            "../utils": 32,
          },
        ],
        9: [
          function (t, r, i) {
            var a = t("../compressions"),
              o = t("./ZipFileWorker");
            i.generateWorker = function (c, s, u) {
              var l = new o(s.streamFiles, u, s.platform, s.encodeFileName),
                p = 0;
              try {
                (c.forEach(function (m, b) {
                  p++;
                  var y = (function (h, D) {
                      var _ = h || D,
                        U = a[_];
                      if (!U)
                        throw new Error(
                          _ + " is not a valid compression method !",
                        );
                      return U;
                    })(b.options.compression, s.compression),
                    f =
                      b.options.compressionOptions ||
                      s.compressionOptions ||
                      {},
                    d = b.dir,
                    g = b.date;
                  b._compressWorker(y, f)
                    .withStreamInfo("file", {
                      name: m,
                      dir: d,
                      date: g,
                      comment: b.comment || "",
                      unixPermissions: b.unixPermissions,
                      dosPermissions: b.dosPermissions,
                    })
                    .pipe(l);
                }),
                  (l.entriesCount = p));
              } catch (m) {
                l.error(m);
              }
              return l;
            };
          },
          { "../compressions": 3, "./ZipFileWorker": 8 },
        ],
        10: [
          function (t, r, i) {
            function a() {
              if (!(this instanceof a)) return new a();
              if (arguments.length)
                throw new Error(
                  "The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.",
                );
              ((this.files = Object.create(null)),
                (this.comment = null),
                (this.root = ""),
                (this.clone = function () {
                  var o = new a();
                  for (var c in this)
                    typeof this[c] != "function" && (o[c] = this[c]);
                  return o;
                }));
            }
            (((a.prototype = t("./object")).loadAsync = t("./load")),
              (a.support = t("./support")),
              (a.defaults = t("./defaults")),
              (a.version = "3.10.1"),
              (a.loadAsync = function (o, c) {
                return new a().loadAsync(o, c);
              }),
              (a.external = t("./external")),
              (r.exports = a));
          },
          {
            "./defaults": 5,
            "./external": 6,
            "./load": 11,
            "./object": 15,
            "./support": 30,
          },
        ],
        11: [
          function (t, r, i) {
            var a = t("./utils"),
              o = t("./external"),
              c = t("./utf8"),
              s = t("./zipEntries"),
              u = t("./stream/Crc32Probe"),
              l = t("./nodejsUtils");
            function p(m) {
              return new o.Promise(function (b, y) {
                var f = m.decompressed.getContentWorker().pipe(new u());
                f.on("error", function (d) {
                  y(d);
                })
                  .on("end", function () {
                    f.streamInfo.crc32 !== m.decompressed.crc32
                      ? y(new Error("Corrupted zip : CRC32 mismatch"))
                      : b();
                  })
                  .resume();
              });
            }
            r.exports = function (m, b) {
              var y = this;
              return (
                (b = a.extend(b || {}, {
                  base64: !1,
                  checkCRC32: !1,
                  optimizedBinaryString: !1,
                  createFolders: !1,
                  decodeFileName: c.utf8decode,
                })),
                l.isNode && l.isStream(m)
                  ? o.Promise.reject(
                      new Error(
                        "JSZip can't accept a stream when loading a zip file.",
                      ),
                    )
                  : a
                      .prepareContent(
                        "the loaded zip file",
                        m,
                        !0,
                        b.optimizedBinaryString,
                        b.base64,
                      )
                      .then(function (f) {
                        var d = new s(b);
                        return (d.load(f), d);
                      })
                      .then(function (f) {
                        var d = [o.Promise.resolve(f)],
                          g = f.files;
                        if (b.checkCRC32)
                          for (var h = 0; h < g.length; h++) d.push(p(g[h]));
                        return o.Promise.all(d);
                      })
                      .then(function (f) {
                        for (
                          var d = f.shift(), g = d.files, h = 0;
                          h < g.length;
                          h++
                        ) {
                          var D = g[h],
                            _ = D.fileNameStr,
                            U = a.resolve(D.fileNameStr);
                          (y.file(U, D.decompressed, {
                            binary: !0,
                            optimizedBinaryString: !0,
                            date: D.date,
                            dir: D.dir,
                            comment: D.fileCommentStr.length
                              ? D.fileCommentStr
                              : null,
                            unixPermissions: D.unixPermissions,
                            dosPermissions: D.dosPermissions,
                            createFolders: b.createFolders,
                          }),
                            D.dir || (y.file(U).unsafeOriginalName = _));
                        }
                        return (
                          d.zipComment.length && (y.comment = d.zipComment),
                          y
                        );
                      })
              );
            };
          },
          {
            "./external": 6,
            "./nodejsUtils": 14,
            "./stream/Crc32Probe": 25,
            "./utf8": 31,
            "./utils": 32,
            "./zipEntries": 33,
          },
        ],
        12: [
          function (t, r, i) {
            var a = t("../utils"),
              o = t("../stream/GenericWorker");
            function c(s, u) {
              (o.call(this, "Nodejs stream input adapter for " + s),
                (this._upstreamEnded = !1),
                this._bindStream(u));
            }
            (a.inherits(c, o),
              (c.prototype._bindStream = function (s) {
                var u = this;
                ((this._stream = s).pause(),
                  s
                    .on("data", function (l) {
                      u.push({ data: l, meta: { percent: 0 } });
                    })
                    .on("error", function (l) {
                      u.isPaused ? (this.generatedError = l) : u.error(l);
                    })
                    .on("end", function () {
                      u.isPaused ? (u._upstreamEnded = !0) : u.end();
                    }));
              }),
              (c.prototype.pause = function () {
                return (
                  !!o.prototype.pause.call(this) && (this._stream.pause(), !0)
                );
              }),
              (c.prototype.resume = function () {
                return (
                  !!o.prototype.resume.call(this) &&
                  (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
                );
              }),
              (r.exports = c));
          },
          { "../stream/GenericWorker": 28, "../utils": 32 },
        ],
        13: [
          function (t, r, i) {
            var a = t("readable-stream").Readable;
            function o(c, s, u) {
              (a.call(this, s), (this._helper = c));
              var l = this;
              c.on("data", function (p, m) {
                (l.push(p) || l._helper.pause(), u && u(m));
              })
                .on("error", function (p) {
                  l.emit("error", p);
                })
                .on("end", function () {
                  l.push(null);
                });
            }
            (t("../utils").inherits(o, a),
              (o.prototype._read = function () {
                this._helper.resume();
              }),
              (r.exports = o));
          },
          { "../utils": 32, "readable-stream": 16 },
        ],
        14: [
          function (t, r, i) {
            r.exports = {
              isNode: typeof Buffer < "u",
              newBufferFrom: function (a, o) {
                if (Buffer.from && Buffer.from !== Uint8Array.from)
                  return Buffer.from(a, o);
                if (typeof a == "number")
                  throw new Error('The "data" argument must not be a number');
                return new Buffer(a, o);
              },
              allocBuffer: function (a) {
                if (Buffer.alloc) return Buffer.alloc(a);
                var o = new Buffer(a);
                return (o.fill(0), o);
              },
              isBuffer: function (a) {
                return Buffer.isBuffer(a);
              },
              isStream: function (a) {
                return (
                  a &&
                  typeof a.on == "function" &&
                  typeof a.pause == "function" &&
                  typeof a.resume == "function"
                );
              },
            };
          },
          {},
        ],
        15: [
          function (t, r, i) {
            function a(U, w, E) {
              var O,
                I = c.getTypeOf(w),
                Y = c.extend(E || {}, l);
              ((Y.date = Y.date || new Date()),
                Y.compression !== null &&
                  (Y.compression = Y.compression.toUpperCase()),
                typeof Y.unixPermissions == "string" &&
                  (Y.unixPermissions = parseInt(Y.unixPermissions, 8)),
                Y.unixPermissions && 16384 & Y.unixPermissions && (Y.dir = !0),
                Y.dosPermissions && 16 & Y.dosPermissions && (Y.dir = !0),
                Y.dir && (U = g(U)),
                Y.createFolders && (O = d(U)) && h.call(this, O, !0));
              var ee = I === "string" && Y.binary === !1 && Y.base64 === !1;
              ((E && E.binary !== void 0) || (Y.binary = !ee),
                ((w instanceof p && w.uncompressedSize === 0) ||
                  Y.dir ||
                  !w ||
                  w.length === 0) &&
                  ((Y.base64 = !1),
                  (Y.binary = !0),
                  (w = ""),
                  (Y.compression = "STORE"),
                  (I = "string")));
              var T = null;
              T =
                w instanceof p || w instanceof s
                  ? w
                  : y.isNode && y.isStream(w)
                    ? new f(U, w)
                    : c.prepareContent(
                        U,
                        w,
                        Y.binary,
                        Y.optimizedBinaryString,
                        Y.base64,
                      );
              var N = new m(U, T, Y);
              this.files[U] = N;
            }
            var o = t("./utf8"),
              c = t("./utils"),
              s = t("./stream/GenericWorker"),
              u = t("./stream/StreamHelper"),
              l = t("./defaults"),
              p = t("./compressedObject"),
              m = t("./zipObject"),
              b = t("./generate"),
              y = t("./nodejsUtils"),
              f = t("./nodejs/NodejsStreamInputAdapter"),
              d = function (U) {
                U.slice(-1) === "/" && (U = U.substring(0, U.length - 1));
                var w = U.lastIndexOf("/");
                return 0 < w ? U.substring(0, w) : "";
              },
              g = function (U) {
                return (U.slice(-1) !== "/" && (U += "/"), U);
              },
              h = function (U, w) {
                return (
                  (w = w !== void 0 ? w : l.createFolders),
                  (U = g(U)),
                  this.files[U] ||
                    a.call(this, U, null, { dir: !0, createFolders: w }),
                  this.files[U]
                );
              };
            function D(U) {
              return Object.prototype.toString.call(U) === "[object RegExp]";
            }
            var _ = {
              load: function () {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                );
              },
              forEach: function (U) {
                var w, E, O;
                for (w in this.files)
                  ((O = this.files[w]),
                    (E = w.slice(this.root.length, w.length)) &&
                      w.slice(0, this.root.length) === this.root &&
                      U(E, O));
              },
              filter: function (U) {
                var w = [];
                return (
                  this.forEach(function (E, O) {
                    U(E, O) && w.push(O);
                  }),
                  w
                );
              },
              file: function (U, w, E) {
                if (arguments.length !== 1)
                  return ((U = this.root + U), a.call(this, U, w, E), this);
                if (D(U)) {
                  var O = U;
                  return this.filter(function (Y, ee) {
                    return !ee.dir && O.test(Y);
                  });
                }
                var I = this.files[this.root + U];
                return I && !I.dir ? I : null;
              },
              folder: function (U) {
                if (!U) return this;
                if (D(U))
                  return this.filter(function (I, Y) {
                    return Y.dir && U.test(I);
                  });
                var w = this.root + U,
                  E = h.call(this, w),
                  O = this.clone();
                return ((O.root = E.name), O);
              },
              remove: function (U) {
                U = this.root + U;
                var w = this.files[U];
                if (
                  (w ||
                    (U.slice(-1) !== "/" && (U += "/"), (w = this.files[U])),
                  w && !w.dir)
                )
                  delete this.files[U];
                else
                  for (
                    var E = this.filter(function (I, Y) {
                        return Y.name.slice(0, U.length) === U;
                      }),
                      O = 0;
                    O < E.length;
                    O++
                  )
                    delete this.files[E[O].name];
                return this;
              },
              generate: function () {
                throw new Error(
                  "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                );
              },
              generateInternalStream: function (U) {
                var w,
                  E = {};
                try {
                  if (
                    (((E = c.extend(U || {}, {
                      streamFiles: !1,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: o.utf8encode,
                    })).type = E.type.toLowerCase()),
                    (E.compression = E.compression.toUpperCase()),
                    E.type === "binarystring" && (E.type = "string"),
                    !E.type)
                  )
                    throw new Error("No output type specified.");
                  (c.checkSupport(E.type),
                    (E.platform !== "darwin" &&
                      E.platform !== "freebsd" &&
                      E.platform !== "linux" &&
                      E.platform !== "sunos") ||
                      (E.platform = "UNIX"),
                    E.platform === "win32" && (E.platform = "DOS"));
                  var O = E.comment || this.comment || "";
                  w = b.generateWorker(this, E, O);
                } catch (I) {
                  (w = new s("error")).error(I);
                }
                return new u(w, E.type || "string", E.mimeType);
              },
              generateAsync: function (U, w) {
                return this.generateInternalStream(U).accumulate(w);
              },
              generateNodeStream: function (U, w) {
                return (
                  (U = U || {}).type || (U.type = "nodebuffer"),
                  this.generateInternalStream(U).toNodejsStream(w)
                );
              },
            };
            r.exports = _;
          },
          {
            "./compressedObject": 2,
            "./defaults": 5,
            "./generate": 9,
            "./nodejs/NodejsStreamInputAdapter": 12,
            "./nodejsUtils": 14,
            "./stream/GenericWorker": 28,
            "./stream/StreamHelper": 29,
            "./utf8": 31,
            "./utils": 32,
            "./zipObject": 35,
          },
        ],
        16: [
          function (t, r, i) {
            r.exports = t("stream");
          },
          { stream: void 0 },
        ],
        17: [
          function (t, r, i) {
            var a = t("./DataReader");
            function o(c) {
              a.call(this, c);
              for (var s = 0; s < this.data.length; s++) c[s] = 255 & c[s];
            }
            (t("../utils").inherits(o, a),
              (o.prototype.byteAt = function (c) {
                return this.data[this.zero + c];
              }),
              (o.prototype.lastIndexOfSignature = function (c) {
                for (
                  var s = c.charCodeAt(0),
                    u = c.charCodeAt(1),
                    l = c.charCodeAt(2),
                    p = c.charCodeAt(3),
                    m = this.length - 4;
                  0 <= m;
                  --m
                )
                  if (
                    this.data[m] === s &&
                    this.data[m + 1] === u &&
                    this.data[m + 2] === l &&
                    this.data[m + 3] === p
                  )
                    return m - this.zero;
                return -1;
              }),
              (o.prototype.readAndCheckSignature = function (c) {
                var s = c.charCodeAt(0),
                  u = c.charCodeAt(1),
                  l = c.charCodeAt(2),
                  p = c.charCodeAt(3),
                  m = this.readData(4);
                return s === m[0] && u === m[1] && l === m[2] && p === m[3];
              }),
              (o.prototype.readData = function (c) {
                if ((this.checkOffset(c), c === 0)) return [];
                var s = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), s);
              }),
              (r.exports = o));
          },
          { "../utils": 32, "./DataReader": 18 },
        ],
        18: [
          function (t, r, i) {
            var a = t("../utils");
            function o(c) {
              ((this.data = c),
                (this.length = c.length),
                (this.index = 0),
                (this.zero = 0));
            }
            ((o.prototype = {
              checkOffset: function (c) {
                this.checkIndex(this.index + c);
              },
              checkIndex: function (c) {
                if (this.length < this.zero + c || c < 0)
                  throw new Error(
                    "End of data reached (data length = " +
                      this.length +
                      ", asked index = " +
                      c +
                      "). Corrupted zip ?",
                  );
              },
              setIndex: function (c) {
                (this.checkIndex(c), (this.index = c));
              },
              skip: function (c) {
                this.setIndex(this.index + c);
              },
              byteAt: function () {},
              readInt: function (c) {
                var s,
                  u = 0;
                for (
                  this.checkOffset(c), s = this.index + c - 1;
                  s >= this.index;
                  s--
                )
                  u = (u << 8) + this.byteAt(s);
                return ((this.index += c), u);
              },
              readString: function (c) {
                return a.transformTo("string", this.readData(c));
              },
              readData: function () {},
              lastIndexOfSignature: function () {},
              readAndCheckSignature: function () {},
              readDate: function () {
                var c = this.readInt(4);
                return new Date(
                  Date.UTC(
                    1980 + ((c >> 25) & 127),
                    ((c >> 21) & 15) - 1,
                    (c >> 16) & 31,
                    (c >> 11) & 31,
                    (c >> 5) & 63,
                    (31 & c) << 1,
                  ),
                );
              },
            }),
              (r.exports = o));
          },
          { "../utils": 32 },
        ],
        19: [
          function (t, r, i) {
            var a = t("./Uint8ArrayReader");
            function o(c) {
              a.call(this, c);
            }
            (t("../utils").inherits(o, a),
              (o.prototype.readData = function (c) {
                this.checkOffset(c);
                var s = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), s);
              }),
              (r.exports = o));
          },
          { "../utils": 32, "./Uint8ArrayReader": 21 },
        ],
        20: [
          function (t, r, i) {
            var a = t("./DataReader");
            function o(c) {
              a.call(this, c);
            }
            (t("../utils").inherits(o, a),
              (o.prototype.byteAt = function (c) {
                return this.data.charCodeAt(this.zero + c);
              }),
              (o.prototype.lastIndexOfSignature = function (c) {
                return this.data.lastIndexOf(c) - this.zero;
              }),
              (o.prototype.readAndCheckSignature = function (c) {
                return c === this.readData(4);
              }),
              (o.prototype.readData = function (c) {
                this.checkOffset(c);
                var s = this.data.slice(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), s);
              }),
              (r.exports = o));
          },
          { "../utils": 32, "./DataReader": 18 },
        ],
        21: [
          function (t, r, i) {
            var a = t("./ArrayReader");
            function o(c) {
              a.call(this, c);
            }
            (t("../utils").inherits(o, a),
              (o.prototype.readData = function (c) {
                if ((this.checkOffset(c), c === 0)) return new Uint8Array(0);
                var s = this.data.subarray(
                  this.zero + this.index,
                  this.zero + this.index + c,
                );
                return ((this.index += c), s);
              }),
              (r.exports = o));
          },
          { "../utils": 32, "./ArrayReader": 17 },
        ],
        22: [
          function (t, r, i) {
            var a = t("../utils"),
              o = t("../support"),
              c = t("./ArrayReader"),
              s = t("./StringReader"),
              u = t("./NodeBufferReader"),
              l = t("./Uint8ArrayReader");
            r.exports = function (p) {
              var m = a.getTypeOf(p);
              return (
                a.checkSupport(m),
                m !== "string" || o.uint8array
                  ? m === "nodebuffer"
                    ? new u(p)
                    : o.uint8array
                      ? new l(a.transformTo("uint8array", p))
                      : new c(a.transformTo("array", p))
                  : new s(p)
              );
            };
          },
          {
            "../support": 30,
            "../utils": 32,
            "./ArrayReader": 17,
            "./NodeBufferReader": 19,
            "./StringReader": 20,
            "./Uint8ArrayReader": 21,
          },
        ],
        23: [
          function (t, r, i) {
            ((i.LOCAL_FILE_HEADER = "PK"),
              (i.CENTRAL_FILE_HEADER = "PK"),
              (i.CENTRAL_DIRECTORY_END = "PK"),
              (i.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07"),
              (i.ZIP64_CENTRAL_DIRECTORY_END = "PK"),
              (i.DATA_DESCRIPTOR = "PK\x07\b"));
          },
          {},
        ],
        24: [
          function (t, r, i) {
            var a = t("./GenericWorker"),
              o = t("../utils");
            function c(s) {
              (a.call(this, "ConvertWorker to " + s), (this.destType = s));
            }
            (o.inherits(c, a),
              (c.prototype.processChunk = function (s) {
                this.push({
                  data: o.transformTo(this.destType, s.data),
                  meta: s.meta,
                });
              }),
              (r.exports = c));
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        25: [
          function (t, r, i) {
            var a = t("./GenericWorker"),
              o = t("../crc32");
            function c() {
              (a.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0));
            }
            (t("../utils").inherits(c, a),
              (c.prototype.processChunk = function (s) {
                ((this.streamInfo.crc32 = o(
                  s.data,
                  this.streamInfo.crc32 || 0,
                )),
                  this.push(s));
              }),
              (r.exports = c));
          },
          { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 },
        ],
        26: [
          function (t, r, i) {
            var a = t("../utils"),
              o = t("./GenericWorker");
            function c(s) {
              (o.call(this, "DataLengthProbe for " + s),
                (this.propName = s),
                this.withStreamInfo(s, 0));
            }
            (a.inherits(c, o),
              (c.prototype.processChunk = function (s) {
                if (s) {
                  var u = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = u + s.data.length;
                }
                o.prototype.processChunk.call(this, s);
              }),
              (r.exports = c));
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        27: [
          function (t, r, i) {
            var a = t("../utils"),
              o = t("./GenericWorker");
            function c(s) {
              o.call(this, "DataWorker");
              var u = this;
              ((this.dataIsReady = !1),
                (this.index = 0),
                (this.max = 0),
                (this.data = null),
                (this.type = ""),
                (this._tickScheduled = !1),
                s.then(
                  function (l) {
                    ((u.dataIsReady = !0),
                      (u.data = l),
                      (u.max = (l && l.length) || 0),
                      (u.type = a.getTypeOf(l)),
                      u.isPaused || u._tickAndRepeat());
                  },
                  function (l) {
                    u.error(l);
                  },
                ));
            }
            (a.inherits(c, o),
              (c.prototype.cleanUp = function () {
                (o.prototype.cleanUp.call(this), (this.data = null));
              }),
              (c.prototype.resume = function () {
                return (
                  !!o.prototype.resume.call(this) &&
                  (!this._tickScheduled &&
                    this.dataIsReady &&
                    ((this._tickScheduled = !0),
                    a.delay(this._tickAndRepeat, [], this)),
                  !0)
                );
              }),
              (c.prototype._tickAndRepeat = function () {
                ((this._tickScheduled = !1),
                  this.isPaused ||
                    this.isFinished ||
                    (this._tick(),
                    this.isFinished ||
                      (a.delay(this._tickAndRepeat, [], this),
                      (this._tickScheduled = !0))));
              }),
              (c.prototype._tick = function () {
                if (this.isPaused || this.isFinished) return !1;
                var s = null,
                  u = Math.min(this.max, this.index + 16384);
                if (this.index >= this.max) return this.end();
                switch (this.type) {
                  case "string":
                    s = this.data.substring(this.index, u);
                    break;
                  case "uint8array":
                    s = this.data.subarray(this.index, u);
                    break;
                  case "array":
                  case "nodebuffer":
                    s = this.data.slice(this.index, u);
                }
                return (
                  (this.index = u),
                  this.push({
                    data: s,
                    meta: {
                      percent: this.max ? (this.index / this.max) * 100 : 0,
                    },
                  })
                );
              }),
              (r.exports = c));
          },
          { "../utils": 32, "./GenericWorker": 28 },
        ],
        28: [
          function (t, r, i) {
            function a(o) {
              ((this.name = o || "default"),
                (this.streamInfo = {}),
                (this.generatedError = null),
                (this.extraStreamInfo = {}),
                (this.isPaused = !0),
                (this.isFinished = !1),
                (this.isLocked = !1),
                (this._listeners = { data: [], end: [], error: [] }),
                (this.previous = null));
            }
            ((a.prototype = {
              push: function (o) {
                this.emit("data", o);
              },
              end: function () {
                if (this.isFinished) return !1;
                this.flush();
                try {
                  (this.emit("end"), this.cleanUp(), (this.isFinished = !0));
                } catch (o) {
                  this.emit("error", o);
                }
                return !0;
              },
              error: function (o) {
                return (
                  !this.isFinished &&
                  (this.isPaused
                    ? (this.generatedError = o)
                    : ((this.isFinished = !0),
                      this.emit("error", o),
                      this.previous && this.previous.error(o),
                      this.cleanUp()),
                  !0)
                );
              },
              on: function (o, c) {
                return (this._listeners[o].push(c), this);
              },
              cleanUp: function () {
                ((this.streamInfo =
                  this.generatedError =
                  this.extraStreamInfo =
                    null),
                  (this._listeners = []));
              },
              emit: function (o, c) {
                if (this._listeners[o])
                  for (var s = 0; s < this._listeners[o].length; s++)
                    this._listeners[o][s].call(this, c);
              },
              pipe: function (o) {
                return o.registerPrevious(this);
              },
              registerPrevious: function (o) {
                if (this.isLocked)
                  throw new Error(
                    "The stream '" + this + "' has already been used.",
                  );
                ((this.streamInfo = o.streamInfo),
                  this.mergeStreamInfo(),
                  (this.previous = o));
                var c = this;
                return (
                  o.on("data", function (s) {
                    c.processChunk(s);
                  }),
                  o.on("end", function () {
                    c.end();
                  }),
                  o.on("error", function (s) {
                    c.error(s);
                  }),
                  this
                );
              },
              pause: function () {
                return (
                  !this.isPaused &&
                  !this.isFinished &&
                  ((this.isPaused = !0),
                  this.previous && this.previous.pause(),
                  !0)
                );
              },
              resume: function () {
                if (!this.isPaused || this.isFinished) return !1;
                var o = (this.isPaused = !1);
                return (
                  this.generatedError &&
                    (this.error(this.generatedError), (o = !0)),
                  this.previous && this.previous.resume(),
                  !o
                );
              },
              flush: function () {},
              processChunk: function (o) {
                this.push(o);
              },
              withStreamInfo: function (o, c) {
                return (
                  (this.extraStreamInfo[o] = c),
                  this.mergeStreamInfo(),
                  this
                );
              },
              mergeStreamInfo: function () {
                for (var o in this.extraStreamInfo)
                  Object.prototype.hasOwnProperty.call(
                    this.extraStreamInfo,
                    o,
                  ) && (this.streamInfo[o] = this.extraStreamInfo[o]);
              },
              lock: function () {
                if (this.isLocked)
                  throw new Error(
                    "The stream '" + this + "' has already been used.",
                  );
                ((this.isLocked = !0), this.previous && this.previous.lock());
              },
              toString: function () {
                var o = "Worker " + this.name;
                return this.previous ? this.previous + " -> " + o : o;
              },
            }),
              (r.exports = a));
          },
          {},
        ],
        29: [
          function (t, r, i) {
            var a = t("../utils"),
              o = t("./ConvertWorker"),
              c = t("./GenericWorker"),
              s = t("../base64"),
              u = t("../support"),
              l = t("../external"),
              p = null;
            if (u.nodestream)
              try {
                p = t("../nodejs/NodejsStreamOutputAdapter");
              } catch {}
            function m(y, f) {
              return new l.Promise(function (d, g) {
                var h = [],
                  D = y._internalType,
                  _ = y._outputType,
                  U = y._mimeType;
                y.on("data", function (w, E) {
                  (h.push(w), f && f(E));
                })
                  .on("error", function (w) {
                    ((h = []), g(w));
                  })
                  .on("end", function () {
                    try {
                      var w = (function (E, O, I) {
                        switch (E) {
                          case "blob":
                            return a.newBlob(
                              a.transformTo("arraybuffer", O),
                              I,
                            );
                          case "base64":
                            return s.encode(O);
                          default:
                            return a.transformTo(E, O);
                        }
                      })(
                        _,
                        (function (E, O) {
                          var I,
                            Y = 0,
                            ee = null,
                            T = 0;
                          for (I = 0; I < O.length; I++) T += O[I].length;
                          switch (E) {
                            case "string":
                              return O.join("");
                            case "array":
                              return Array.prototype.concat.apply([], O);
                            case "uint8array":
                              for (
                                ee = new Uint8Array(T), I = 0;
                                I < O.length;
                                I++
                              )
                                (ee.set(O[I], Y), (Y += O[I].length));
                              return ee;
                            case "nodebuffer":
                              return Buffer.concat(O);
                            default:
                              throw new Error(
                                "concat : unsupported type '" + E + "'",
                              );
                          }
                        })(D, h),
                        U,
                      );
                      d(w);
                    } catch (E) {
                      g(E);
                    }
                    h = [];
                  })
                  .resume();
              });
            }
            function b(y, f, d) {
              var g = f;
              switch (f) {
                case "blob":
                case "arraybuffer":
                  g = "uint8array";
                  break;
                case "base64":
                  g = "string";
              }
              try {
                ((this._internalType = g),
                  (this._outputType = f),
                  (this._mimeType = d),
                  a.checkSupport(g),
                  (this._worker = y.pipe(new o(g))),
                  y.lock());
              } catch (h) {
                ((this._worker = new c("error")), this._worker.error(h));
              }
            }
            ((b.prototype = {
              accumulate: function (y) {
                return m(this, y);
              },
              on: function (y, f) {
                var d = this;
                return (
                  y === "data"
                    ? this._worker.on(y, function (g) {
                        f.call(d, g.data, g.meta);
                      })
                    : this._worker.on(y, function () {
                        a.delay(f, arguments, d);
                      }),
                  this
                );
              },
              resume: function () {
                return (a.delay(this._worker.resume, [], this._worker), this);
              },
              pause: function () {
                return (this._worker.pause(), this);
              },
              toNodejsStream: function (y) {
                if (
                  (a.checkSupport("nodestream"),
                  this._outputType !== "nodebuffer")
                )
                  throw new Error(
                    this._outputType + " is not supported by this method",
                  );
                return new p(
                  this,
                  { objectMode: this._outputType !== "nodebuffer" },
                  y,
                );
              },
            }),
              (r.exports = b));
          },
          {
            "../base64": 1,
            "../external": 6,
            "../nodejs/NodejsStreamOutputAdapter": 13,
            "../support": 30,
            "../utils": 32,
            "./ConvertWorker": 24,
            "./GenericWorker": 28,
          },
        ],
        30: [
          function (t, r, i) {
            if (
              ((i.base64 = !0),
              (i.array = !0),
              (i.string = !0),
              (i.arraybuffer =
                typeof ArrayBuffer < "u" && typeof Uint8Array < "u"),
              (i.nodebuffer = typeof Buffer < "u"),
              (i.uint8array = typeof Uint8Array < "u"),
              typeof ArrayBuffer > "u")
            )
              i.blob = !1;
            else {
              var a = new ArrayBuffer(0);
              try {
                i.blob = new Blob([a], { type: "application/zip" }).size === 0;
              } catch {
                try {
                  var o = new (
                    self.BlobBuilder ||
                    self.WebKitBlobBuilder ||
                    self.MozBlobBuilder ||
                    self.MSBlobBuilder
                  )();
                  (o.append(a),
                    (i.blob = o.getBlob("application/zip").size === 0));
                } catch {
                  i.blob = !1;
                }
              }
            }
            try {
              i.nodestream = !!t("readable-stream").Readable;
            } catch {
              i.nodestream = !1;
            }
          },
          { "readable-stream": 16 },
        ],
        31: [
          function (t, r, i) {
            for (
              var a = t("./utils"),
                o = t("./support"),
                c = t("./nodejsUtils"),
                s = t("./stream/GenericWorker"),
                u = new Array(256),
                l = 0;
              l < 256;
              l++
            )
              u[l] =
                252 <= l
                  ? 6
                  : 248 <= l
                    ? 5
                    : 240 <= l
                      ? 4
                      : 224 <= l
                        ? 3
                        : 192 <= l
                          ? 2
                          : 1;
            u[254] = u[254] = 1;
            function p() {
              (s.call(this, "utf-8 decode"), (this.leftOver = null));
            }
            function m() {
              s.call(this, "utf-8 encode");
            }
            ((i.utf8encode = function (b) {
              return o.nodebuffer
                ? c.newBufferFrom(b, "utf-8")
                : (function (y) {
                    var f,
                      d,
                      g,
                      h,
                      D,
                      _ = y.length,
                      U = 0;
                    for (h = 0; h < _; h++)
                      ((64512 & (d = y.charCodeAt(h))) == 55296 &&
                        h + 1 < _ &&
                        (64512 & (g = y.charCodeAt(h + 1))) == 56320 &&
                        ((d = 65536 + ((d - 55296) << 10) + (g - 56320)), h++),
                        (U += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4));
                    for (
                      f = o.uint8array ? new Uint8Array(U) : new Array(U),
                        h = D = 0;
                      D < U;
                      h++
                    )
                      ((64512 & (d = y.charCodeAt(h))) == 55296 &&
                        h + 1 < _ &&
                        (64512 & (g = y.charCodeAt(h + 1))) == 56320 &&
                        ((d = 65536 + ((d - 55296) << 10) + (g - 56320)), h++),
                        d < 128
                          ? (f[D++] = d)
                          : (d < 2048
                              ? (f[D++] = 192 | (d >>> 6))
                              : (d < 65536
                                  ? (f[D++] = 224 | (d >>> 12))
                                  : ((f[D++] = 240 | (d >>> 18)),
                                    (f[D++] = 128 | ((d >>> 12) & 63))),
                                (f[D++] = 128 | ((d >>> 6) & 63))),
                            (f[D++] = 128 | (63 & d))));
                    return f;
                  })(b);
            }),
              (i.utf8decode = function (b) {
                return o.nodebuffer
                  ? a.transformTo("nodebuffer", b).toString("utf-8")
                  : (function (y) {
                      var f,
                        d,
                        g,
                        h,
                        D = y.length,
                        _ = new Array(2 * D);
                      for (f = d = 0; f < D; )
                        if ((g = y[f++]) < 128) _[d++] = g;
                        else if (4 < (h = u[g]))
                          ((_[d++] = 65533), (f += h - 1));
                        else {
                          for (
                            g &= h === 2 ? 31 : h === 3 ? 15 : 7;
                            1 < h && f < D;
                          )
                            ((g = (g << 6) | (63 & y[f++])), h--);
                          1 < h
                            ? (_[d++] = 65533)
                            : g < 65536
                              ? (_[d++] = g)
                              : ((g -= 65536),
                                (_[d++] = 55296 | ((g >> 10) & 1023)),
                                (_[d++] = 56320 | (1023 & g)));
                        }
                      return (
                        _.length !== d &&
                          (_.subarray
                            ? (_ = _.subarray(0, d))
                            : (_.length = d)),
                        a.applyFromCharCode(_)
                      );
                    })(
                      (b = a.transformTo(
                        o.uint8array ? "uint8array" : "array",
                        b,
                      )),
                    );
              }),
              a.inherits(p, s),
              (p.prototype.processChunk = function (b) {
                var y = a.transformTo(
                  o.uint8array ? "uint8array" : "array",
                  b.data,
                );
                if (this.leftOver && this.leftOver.length) {
                  if (o.uint8array) {
                    var f = y;
                    ((y = new Uint8Array(f.length + this.leftOver.length)).set(
                      this.leftOver,
                      0,
                    ),
                      y.set(f, this.leftOver.length));
                  } else y = this.leftOver.concat(y);
                  this.leftOver = null;
                }
                var d = (function (h, D) {
                    var _;
                    for (
                      (D = D || h.length) > h.length && (D = h.length),
                        _ = D - 1;
                      0 <= _ && (192 & h[_]) == 128;
                    )
                      _--;
                    return _ < 0 || _ === 0 ? D : _ + u[h[_]] > D ? _ : D;
                  })(y),
                  g = y;
                (d !== y.length &&
                  (o.uint8array
                    ? ((g = y.subarray(0, d)),
                      (this.leftOver = y.subarray(d, y.length)))
                    : ((g = y.slice(0, d)),
                      (this.leftOver = y.slice(d, y.length)))),
                  this.push({ data: i.utf8decode(g), meta: b.meta }));
              }),
              (p.prototype.flush = function () {
                this.leftOver &&
                  this.leftOver.length &&
                  (this.push({ data: i.utf8decode(this.leftOver), meta: {} }),
                  (this.leftOver = null));
              }),
              (i.Utf8DecodeWorker = p),
              a.inherits(m, s),
              (m.prototype.processChunk = function (b) {
                this.push({ data: i.utf8encode(b.data), meta: b.meta });
              }),
              (i.Utf8EncodeWorker = m));
          },
          {
            "./nodejsUtils": 14,
            "./stream/GenericWorker": 28,
            "./support": 30,
            "./utils": 32,
          },
        ],
        32: [
          function (t, r, i) {
            var a = t("./support"),
              o = t("./base64"),
              c = t("./nodejsUtils"),
              s = t("./external");
            function u(f) {
              return f;
            }
            function l(f, d) {
              for (var g = 0; g < f.length; ++g) d[g] = 255 & f.charCodeAt(g);
              return d;
            }
            (t("setimmediate"),
              (i.newBlob = function (f, d) {
                i.checkSupport("blob");
                try {
                  return new Blob([f], { type: d });
                } catch {
                  try {
                    var g = new (
                      self.BlobBuilder ||
                      self.WebKitBlobBuilder ||
                      self.MozBlobBuilder ||
                      self.MSBlobBuilder
                    )();
                    return (g.append(f), g.getBlob(d));
                  } catch {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              }));
            var p = {
              stringifyByChunk: function (f, d, g) {
                var h = [],
                  D = 0,
                  _ = f.length;
                if (_ <= g) return String.fromCharCode.apply(null, f);
                for (; D < _; )
                  (d === "array" || d === "nodebuffer"
                    ? h.push(
                        String.fromCharCode.apply(
                          null,
                          f.slice(D, Math.min(D + g, _)),
                        ),
                      )
                    : h.push(
                        String.fromCharCode.apply(
                          null,
                          f.subarray(D, Math.min(D + g, _)),
                        ),
                      ),
                    (D += g));
                return h.join("");
              },
              stringifyByChar: function (f) {
                for (var d = "", g = 0; g < f.length; g++)
                  d += String.fromCharCode(f[g]);
                return d;
              },
              applyCanBeUsed: {
                uint8array: (function () {
                  try {
                    return (
                      a.uint8array &&
                      String.fromCharCode.apply(null, new Uint8Array(1))
                        .length === 1
                    );
                  } catch {
                    return !1;
                  }
                })(),
                nodebuffer: (function () {
                  try {
                    return (
                      a.nodebuffer &&
                      String.fromCharCode.apply(null, c.allocBuffer(1))
                        .length === 1
                    );
                  } catch {
                    return !1;
                  }
                })(),
              },
            };
            function m(f) {
              var d = 65536,
                g = i.getTypeOf(f),
                h = !0;
              if (
                (g === "uint8array"
                  ? (h = p.applyCanBeUsed.uint8array)
                  : g === "nodebuffer" && (h = p.applyCanBeUsed.nodebuffer),
                h)
              )
                for (; 1 < d; )
                  try {
                    return p.stringifyByChunk(f, g, d);
                  } catch {
                    d = Math.floor(d / 2);
                  }
              return p.stringifyByChar(f);
            }
            function b(f, d) {
              for (var g = 0; g < f.length; g++) d[g] = f[g];
              return d;
            }
            i.applyFromCharCode = m;
            var y = {};
            ((y.string = {
              string: u,
              array: function (f) {
                return l(f, new Array(f.length));
              },
              arraybuffer: function (f) {
                return y.string.uint8array(f).buffer;
              },
              uint8array: function (f) {
                return l(f, new Uint8Array(f.length));
              },
              nodebuffer: function (f) {
                return l(f, c.allocBuffer(f.length));
              },
            }),
              (y.array = {
                string: m,
                array: u,
                arraybuffer: function (f) {
                  return new Uint8Array(f).buffer;
                },
                uint8array: function (f) {
                  return new Uint8Array(f);
                },
                nodebuffer: function (f) {
                  return c.newBufferFrom(f);
                },
              }),
              (y.arraybuffer = {
                string: function (f) {
                  return m(new Uint8Array(f));
                },
                array: function (f) {
                  return b(new Uint8Array(f), new Array(f.byteLength));
                },
                arraybuffer: u,
                uint8array: function (f) {
                  return new Uint8Array(f);
                },
                nodebuffer: function (f) {
                  return c.newBufferFrom(new Uint8Array(f));
                },
              }),
              (y.uint8array = {
                string: m,
                array: function (f) {
                  return b(f, new Array(f.length));
                },
                arraybuffer: function (f) {
                  return f.buffer;
                },
                uint8array: u,
                nodebuffer: function (f) {
                  return c.newBufferFrom(f);
                },
              }),
              (y.nodebuffer = {
                string: m,
                array: function (f) {
                  return b(f, new Array(f.length));
                },
                arraybuffer: function (f) {
                  return y.nodebuffer.uint8array(f).buffer;
                },
                uint8array: function (f) {
                  return b(f, new Uint8Array(f.length));
                },
                nodebuffer: u,
              }),
              (i.transformTo = function (f, d) {
                if (((d = d || ""), !f)) return d;
                i.checkSupport(f);
                var g = i.getTypeOf(d);
                return y[g][f](d);
              }),
              (i.resolve = function (f) {
                for (var d = f.split("/"), g = [], h = 0; h < d.length; h++) {
                  var D = d[h];
                  D === "." ||
                    (D === "" && h !== 0 && h !== d.length - 1) ||
                    (D === ".." ? g.pop() : g.push(D));
                }
                return g.join("/");
              }),
              (i.getTypeOf = function (f) {
                return typeof f == "string"
                  ? "string"
                  : Object.prototype.toString.call(f) === "[object Array]"
                    ? "array"
                    : a.nodebuffer && c.isBuffer(f)
                      ? "nodebuffer"
                      : a.uint8array && f instanceof Uint8Array
                        ? "uint8array"
                        : a.arraybuffer && f instanceof ArrayBuffer
                          ? "arraybuffer"
                          : void 0;
              }),
              (i.checkSupport = function (f) {
                if (!a[f.toLowerCase()])
                  throw new Error(f + " is not supported by this platform");
              }),
              (i.MAX_VALUE_16BITS = 65535),
              (i.MAX_VALUE_32BITS = -1),
              (i.pretty = function (f) {
                var d,
                  g,
                  h = "";
                for (g = 0; g < (f || "").length; g++)
                  h +=
                    "\\x" +
                    ((d = f.charCodeAt(g)) < 16 ? "0" : "") +
                    d.toString(16).toUpperCase();
                return h;
              }),
              (i.delay = function (f, d, g) {
                setImmediate(function () {
                  f.apply(g || null, d || []);
                });
              }),
              (i.inherits = function (f, d) {
                function g() {}
                ((g.prototype = d.prototype), (f.prototype = new g()));
              }),
              (i.extend = function () {
                var f,
                  d,
                  g = {};
                for (f = 0; f < arguments.length; f++)
                  for (d in arguments[f])
                    Object.prototype.hasOwnProperty.call(arguments[f], d) &&
                      g[d] === void 0 &&
                      (g[d] = arguments[f][d]);
                return g;
              }),
              (i.prepareContent = function (f, d, g, h, D) {
                return s.Promise.resolve(d)
                  .then(function (_) {
                    return a.blob &&
                      (_ instanceof Blob ||
                        ["[object File]", "[object Blob]"].indexOf(
                          Object.prototype.toString.call(_),
                        ) !== -1) &&
                      typeof FileReader < "u"
                      ? new s.Promise(function (U, w) {
                          var E = new FileReader();
                          ((E.onload = function (O) {
                            U(O.target.result);
                          }),
                            (E.onerror = function (O) {
                              w(O.target.error);
                            }),
                            E.readAsArrayBuffer(_));
                        })
                      : _;
                  })
                  .then(function (_) {
                    var U = i.getTypeOf(_);
                    return U
                      ? (U === "arraybuffer"
                          ? (_ = i.transformTo("uint8array", _))
                          : U === "string" &&
                            (D
                              ? (_ = o.decode(_))
                              : g &&
                                h !== !0 &&
                                (_ = (function (w) {
                                  return l(
                                    w,
                                    a.uint8array
                                      ? new Uint8Array(w.length)
                                      : new Array(w.length),
                                  );
                                })(_))),
                        _)
                      : s.Promise.reject(
                          new Error(
                            "Can't read the data of '" +
                              f +
                              "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?",
                          ),
                        );
                  });
              }));
          },
          {
            "./base64": 1,
            "./external": 6,
            "./nodejsUtils": 14,
            "./support": 30,
            setimmediate: 54,
          },
        ],
        33: [
          function (t, r, i) {
            var a = t("./reader/readerFor"),
              o = t("./utils"),
              c = t("./signature"),
              s = t("./zipEntry"),
              u = t("./support");
            function l(p) {
              ((this.files = []), (this.loadOptions = p));
            }
            ((l.prototype = {
              checkSignature: function (p) {
                if (!this.reader.readAndCheckSignature(p)) {
                  this.reader.index -= 4;
                  var m = this.reader.readString(4);
                  throw new Error(
                    "Corrupted zip or bug: unexpected signature (" +
                      o.pretty(m) +
                      ", expected " +
                      o.pretty(p) +
                      ")",
                  );
                }
              },
              isSignature: function (p, m) {
                var b = this.reader.index;
                this.reader.setIndex(p);
                var y = this.reader.readString(4) === m;
                return (this.reader.setIndex(b), y);
              },
              readBlockEndOfCentral: function () {
                ((this.diskNumber = this.reader.readInt(2)),
                  (this.diskWithCentralDirStart = this.reader.readInt(2)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(2)),
                  (this.centralDirRecords = this.reader.readInt(2)),
                  (this.centralDirSize = this.reader.readInt(4)),
                  (this.centralDirOffset = this.reader.readInt(4)),
                  (this.zipCommentLength = this.reader.readInt(2)));
                var p = this.reader.readData(this.zipCommentLength),
                  m = u.uint8array ? "uint8array" : "array",
                  b = o.transformTo(m, p);
                this.zipComment = this.loadOptions.decodeFileName(b);
              },
              readBlockZip64EndOfCentral: function () {
                ((this.zip64EndOfCentralSize = this.reader.readInt(8)),
                  this.reader.skip(4),
                  (this.diskNumber = this.reader.readInt(4)),
                  (this.diskWithCentralDirStart = this.reader.readInt(4)),
                  (this.centralDirRecordsOnThisDisk = this.reader.readInt(8)),
                  (this.centralDirRecords = this.reader.readInt(8)),
                  (this.centralDirSize = this.reader.readInt(8)),
                  (this.centralDirOffset = this.reader.readInt(8)),
                  (this.zip64ExtensibleData = {}));
                for (var p, m, b, y = this.zip64EndOfCentralSize - 44; 0 < y; )
                  ((p = this.reader.readInt(2)),
                    (m = this.reader.readInt(4)),
                    (b = this.reader.readData(m)),
                    (this.zip64ExtensibleData[p] = {
                      id: p,
                      length: m,
                      value: b,
                    }));
              },
              readBlockZip64EndOfCentralLocator: function () {
                if (
                  ((this.diskWithZip64CentralDirStart = this.reader.readInt(4)),
                  (this.relativeOffsetEndOfZip64CentralDir =
                    this.reader.readInt(8)),
                  (this.disksCount = this.reader.readInt(4)),
                  1 < this.disksCount)
                )
                  throw new Error("Multi-volumes zip are not supported");
              },
              readLocalFiles: function () {
                var p, m;
                for (p = 0; p < this.files.length; p++)
                  ((m = this.files[p]),
                    this.reader.setIndex(m.localHeaderOffset),
                    this.checkSignature(c.LOCAL_FILE_HEADER),
                    m.readLocalPart(this.reader),
                    m.handleUTF8(),
                    m.processAttributes());
              },
              readCentralDir: function () {
                var p;
                for (
                  this.reader.setIndex(this.centralDirOffset);
                  this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);
                )
                  ((p = new s(
                    { zip64: this.zip64 },
                    this.loadOptions,
                  )).readCentralPart(this.reader),
                    this.files.push(p));
                if (
                  this.centralDirRecords !== this.files.length &&
                  this.centralDirRecords !== 0 &&
                  this.files.length === 0
                )
                  throw new Error(
                    "Corrupted zip or bug: expected " +
                      this.centralDirRecords +
                      " records in central dir, got " +
                      this.files.length,
                  );
              },
              readEndOfCentral: function () {
                var p = this.reader.lastIndexOfSignature(
                  c.CENTRAL_DIRECTORY_END,
                );
                if (p < 0)
                  throw this.isSignature(0, c.LOCAL_FILE_HEADER)
                    ? new Error(
                        "Corrupted zip: can't find end of central directory",
                      )
                    : new Error(
                        "Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html",
                      );
                this.reader.setIndex(p);
                var m = p;
                if (
                  (this.checkSignature(c.CENTRAL_DIRECTORY_END),
                  this.readBlockEndOfCentral(),
                  this.diskNumber === o.MAX_VALUE_16BITS ||
                    this.diskWithCentralDirStart === o.MAX_VALUE_16BITS ||
                    this.centralDirRecordsOnThisDisk === o.MAX_VALUE_16BITS ||
                    this.centralDirRecords === o.MAX_VALUE_16BITS ||
                    this.centralDirSize === o.MAX_VALUE_32BITS ||
                    this.centralDirOffset === o.MAX_VALUE_32BITS)
                ) {
                  if (
                    ((this.zip64 = !0),
                    (p = this.reader.lastIndexOfSignature(
                      c.ZIP64_CENTRAL_DIRECTORY_LOCATOR,
                    )) < 0)
                  )
                    throw new Error(
                      "Corrupted zip: can't find the ZIP64 end of central directory locator",
                    );
                  if (
                    (this.reader.setIndex(p),
                    this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                    this.readBlockZip64EndOfCentralLocator(),
                    !this.isSignature(
                      this.relativeOffsetEndOfZip64CentralDir,
                      c.ZIP64_CENTRAL_DIRECTORY_END,
                    ) &&
                      ((this.relativeOffsetEndOfZip64CentralDir =
                        this.reader.lastIndexOfSignature(
                          c.ZIP64_CENTRAL_DIRECTORY_END,
                        )),
                      this.relativeOffsetEndOfZip64CentralDir < 0))
                  )
                    throw new Error(
                      "Corrupted zip: can't find the ZIP64 end of central directory",
                    );
                  (this.reader.setIndex(
                    this.relativeOffsetEndOfZip64CentralDir,
                  ),
                    this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),
                    this.readBlockZip64EndOfCentral());
                }
                var b = this.centralDirOffset + this.centralDirSize;
                this.zip64 &&
                  ((b += 20), (b += 12 + this.zip64EndOfCentralSize));
                var y = m - b;
                if (0 < y)
                  this.isSignature(m, c.CENTRAL_FILE_HEADER) ||
                    (this.reader.zero = y);
                else if (y < 0)
                  throw new Error(
                    "Corrupted zip: missing " + Math.abs(y) + " bytes.",
                  );
              },
              prepareReader: function (p) {
                this.reader = a(p);
              },
              load: function (p) {
                (this.prepareReader(p),
                  this.readEndOfCentral(),
                  this.readCentralDir(),
                  this.readLocalFiles());
              },
            }),
              (r.exports = l));
          },
          {
            "./reader/readerFor": 22,
            "./signature": 23,
            "./support": 30,
            "./utils": 32,
            "./zipEntry": 34,
          },
        ],
        34: [
          function (t, r, i) {
            var a = t("./reader/readerFor"),
              o = t("./utils"),
              c = t("./compressedObject"),
              s = t("./crc32"),
              u = t("./utf8"),
              l = t("./compressions"),
              p = t("./support");
            function m(b, y) {
              ((this.options = b), (this.loadOptions = y));
            }
            ((m.prototype = {
              isEncrypted: function () {
                return (1 & this.bitFlag) == 1;
              },
              useUTF8: function () {
                return (2048 & this.bitFlag) == 2048;
              },
              readLocalPart: function (b) {
                var y, f;
                if (
                  (b.skip(22),
                  (this.fileNameLength = b.readInt(2)),
                  (f = b.readInt(2)),
                  (this.fileName = b.readData(this.fileNameLength)),
                  b.skip(f),
                  this.compressedSize === -1 || this.uncompressedSize === -1)
                )
                  throw new Error(
                    "Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)",
                  );
                if (
                  (y = (function (d) {
                    for (var g in l)
                      if (
                        Object.prototype.hasOwnProperty.call(l, g) &&
                        l[g].magic === d
                      )
                        return l[g];
                    return null;
                  })(this.compressionMethod)) === null
                )
                  throw new Error(
                    "Corrupted zip : compression " +
                      o.pretty(this.compressionMethod) +
                      " unknown (inner file : " +
                      o.transformTo("string", this.fileName) +
                      ")",
                  );
                this.decompressed = new c(
                  this.compressedSize,
                  this.uncompressedSize,
                  this.crc32,
                  y,
                  b.readData(this.compressedSize),
                );
              },
              readCentralPart: function (b) {
                ((this.versionMadeBy = b.readInt(2)),
                  b.skip(2),
                  (this.bitFlag = b.readInt(2)),
                  (this.compressionMethod = b.readString(2)),
                  (this.date = b.readDate()),
                  (this.crc32 = b.readInt(4)),
                  (this.compressedSize = b.readInt(4)),
                  (this.uncompressedSize = b.readInt(4)));
                var y = b.readInt(2);
                if (
                  ((this.extraFieldsLength = b.readInt(2)),
                  (this.fileCommentLength = b.readInt(2)),
                  (this.diskNumberStart = b.readInt(2)),
                  (this.internalFileAttributes = b.readInt(2)),
                  (this.externalFileAttributes = b.readInt(4)),
                  (this.localHeaderOffset = b.readInt(4)),
                  this.isEncrypted())
                )
                  throw new Error("Encrypted zip are not supported");
                (b.skip(y),
                  this.readExtraFields(b),
                  this.parseZIP64ExtraField(b),
                  (this.fileComment = b.readData(this.fileCommentLength)));
              },
              processAttributes: function () {
                ((this.unixPermissions = null), (this.dosPermissions = null));
                var b = this.versionMadeBy >> 8;
                ((this.dir = !!(16 & this.externalFileAttributes)),
                  b == 0 &&
                    (this.dosPermissions = 63 & this.externalFileAttributes),
                  b == 3 &&
                    (this.unixPermissions =
                      (this.externalFileAttributes >> 16) & 65535),
                  this.dir ||
                    this.fileNameStr.slice(-1) !== "/" ||
                    (this.dir = !0));
              },
              parseZIP64ExtraField: function () {
                if (this.extraFields[1]) {
                  var b = a(this.extraFields[1].value);
                  (this.uncompressedSize === o.MAX_VALUE_32BITS &&
                    (this.uncompressedSize = b.readInt(8)),
                    this.compressedSize === o.MAX_VALUE_32BITS &&
                      (this.compressedSize = b.readInt(8)),
                    this.localHeaderOffset === o.MAX_VALUE_32BITS &&
                      (this.localHeaderOffset = b.readInt(8)),
                    this.diskNumberStart === o.MAX_VALUE_32BITS &&
                      (this.diskNumberStart = b.readInt(4)));
                }
              },
              readExtraFields: function (b) {
                var y,
                  f,
                  d,
                  g = b.index + this.extraFieldsLength;
                for (
                  this.extraFields || (this.extraFields = {});
                  b.index + 4 < g;
                )
                  ((y = b.readInt(2)),
                    (f = b.readInt(2)),
                    (d = b.readData(f)),
                    (this.extraFields[y] = { id: y, length: f, value: d }));
                b.setIndex(g);
              },
              handleUTF8: function () {
                var b = p.uint8array ? "uint8array" : "array";
                if (this.useUTF8())
                  ((this.fileNameStr = u.utf8decode(this.fileName)),
                    (this.fileCommentStr = u.utf8decode(this.fileComment)));
                else {
                  var y = this.findExtraFieldUnicodePath();
                  if (y !== null) this.fileNameStr = y;
                  else {
                    var f = o.transformTo(b, this.fileName);
                    this.fileNameStr = this.loadOptions.decodeFileName(f);
                  }
                  var d = this.findExtraFieldUnicodeComment();
                  if (d !== null) this.fileCommentStr = d;
                  else {
                    var g = o.transformTo(b, this.fileComment);
                    this.fileCommentStr = this.loadOptions.decodeFileName(g);
                  }
                }
              },
              findExtraFieldUnicodePath: function () {
                var b = this.extraFields[28789];
                if (b) {
                  var y = a(b.value);
                  return y.readInt(1) !== 1 || s(this.fileName) !== y.readInt(4)
                    ? null
                    : u.utf8decode(y.readData(b.length - 5));
                }
                return null;
              },
              findExtraFieldUnicodeComment: function () {
                var b = this.extraFields[25461];
                if (b) {
                  var y = a(b.value);
                  return y.readInt(1) !== 1 ||
                    s(this.fileComment) !== y.readInt(4)
                    ? null
                    : u.utf8decode(y.readData(b.length - 5));
                }
                return null;
              },
            }),
              (r.exports = m));
          },
          {
            "./compressedObject": 2,
            "./compressions": 3,
            "./crc32": 4,
            "./reader/readerFor": 22,
            "./support": 30,
            "./utf8": 31,
            "./utils": 32,
          },
        ],
        35: [
          function (t, r, i) {
            function a(y, f, d) {
              ((this.name = y),
                (this.dir = d.dir),
                (this.date = d.date),
                (this.comment = d.comment),
                (this.unixPermissions = d.unixPermissions),
                (this.dosPermissions = d.dosPermissions),
                (this._data = f),
                (this._dataBinary = d.binary),
                (this.options = {
                  compression: d.compression,
                  compressionOptions: d.compressionOptions,
                }));
            }
            var o = t("./stream/StreamHelper"),
              c = t("./stream/DataWorker"),
              s = t("./utf8"),
              u = t("./compressedObject"),
              l = t("./stream/GenericWorker");
            a.prototype = {
              internalStream: function (y) {
                var f = null,
                  d = "string";
                try {
                  if (!y) throw new Error("No output type specified.");
                  var g = (d = y.toLowerCase()) === "string" || d === "text";
                  ((d !== "binarystring" && d !== "text") || (d = "string"),
                    (f = this._decompressWorker()));
                  var h = !this._dataBinary;
                  (h && !g && (f = f.pipe(new s.Utf8EncodeWorker())),
                    !h && g && (f = f.pipe(new s.Utf8DecodeWorker())));
                } catch (D) {
                  (f = new l("error")).error(D);
                }
                return new o(f, d, "");
              },
              async: function (y, f) {
                return this.internalStream(y).accumulate(f);
              },
              nodeStream: function (y, f) {
                return this.internalStream(y || "nodebuffer").toNodejsStream(f);
              },
              _compressWorker: function (y, f) {
                if (
                  this._data instanceof u &&
                  this._data.compression.magic === y.magic
                )
                  return this._data.getCompressedWorker();
                var d = this._decompressWorker();
                return (
                  this._dataBinary || (d = d.pipe(new s.Utf8EncodeWorker())),
                  u.createWorkerFrom(d, y, f)
                );
              },
              _decompressWorker: function () {
                return this._data instanceof u
                  ? this._data.getContentWorker()
                  : this._data instanceof l
                    ? this._data
                    : new c(this._data);
              },
            };
            for (
              var p = [
                  "asText",
                  "asBinary",
                  "asNodeBuffer",
                  "asUint8Array",
                  "asArrayBuffer",
                ],
                m = function () {
                  throw new Error(
                    "This method has been removed in JSZip 3.0, please check the upgrade guide.",
                  );
                },
                b = 0;
              b < p.length;
              b++
            )
              a.prototype[p[b]] = m;
            r.exports = a;
          },
          {
            "./compressedObject": 2,
            "./stream/DataWorker": 27,
            "./stream/GenericWorker": 28,
            "./stream/StreamHelper": 29,
            "./utf8": 31,
          },
        ],
        36: [
          function (t, r, i) {
            (function (a) {
              var o,
                c,
                s = a.MutationObserver || a.WebKitMutationObserver;
              if (s) {
                var u = 0,
                  l = new s(y),
                  p = a.document.createTextNode("");
                (l.observe(p, { characterData: !0 }),
                  (o = function () {
                    p.data = u = ++u % 2;
                  }));
              } else if (a.setImmediate || a.MessageChannel === void 0)
                o =
                  "document" in a &&
                  "onreadystatechange" in a.document.createElement("script")
                    ? function () {
                        var f = a.document.createElement("script");
                        ((f.onreadystatechange = function () {
                          (y(),
                            (f.onreadystatechange = null),
                            f.parentNode.removeChild(f),
                            (f = null));
                        }),
                          a.document.documentElement.appendChild(f));
                      }
                    : function () {
                        setTimeout(y, 0);
                      };
              else {
                var m = new a.MessageChannel();
                ((m.port1.onmessage = y),
                  (o = function () {
                    m.port2.postMessage(0);
                  }));
              }
              var b = [];
              function y() {
                var f, d;
                c = !0;
                for (var g = b.length; g; ) {
                  for (d = b, b = [], f = -1; ++f < g; ) d[f]();
                  g = b.length;
                }
                c = !1;
              }
              r.exports = function (f) {
                b.push(f) !== 1 || c || o();
              };
            }).call(
              this,
              typeof fe < "u"
                ? fe
                : typeof self < "u"
                  ? self
                  : typeof window < "u"
                    ? window
                    : {},
            );
          },
          {},
        ],
        37: [
          function (t, r, i) {
            var a = t("immediate");
            function o() {}
            var c = {},
              s = ["REJECTED"],
              u = ["FULFILLED"],
              l = ["PENDING"];
            function p(g) {
              if (typeof g != "function")
                throw new TypeError("resolver must be a function");
              ((this.state = l),
                (this.queue = []),
                (this.outcome = void 0),
                g !== o && f(this, g));
            }
            function m(g, h, D) {
              ((this.promise = g),
                typeof h == "function" &&
                  ((this.onFulfilled = h),
                  (this.callFulfilled = this.otherCallFulfilled)),
                typeof D == "function" &&
                  ((this.onRejected = D),
                  (this.callRejected = this.otherCallRejected)));
            }
            function b(g, h, D) {
              a(function () {
                var _;
                try {
                  _ = h(D);
                } catch (U) {
                  return c.reject(g, U);
                }
                _ === g
                  ? c.reject(
                      g,
                      new TypeError("Cannot resolve promise with itself"),
                    )
                  : c.resolve(g, _);
              });
            }
            function y(g) {
              var h = g && g.then;
              if (
                g &&
                (typeof g == "object" || typeof g == "function") &&
                typeof h == "function"
              )
                return function () {
                  h.apply(g, arguments);
                };
            }
            function f(g, h) {
              var D = !1;
              function _(E) {
                D || ((D = !0), c.reject(g, E));
              }
              function U(E) {
                D || ((D = !0), c.resolve(g, E));
              }
              var w = d(function () {
                h(U, _);
              });
              w.status === "error" && _(w.value);
            }
            function d(g, h) {
              var D = {};
              try {
                ((D.value = g(h)), (D.status = "success"));
              } catch (_) {
                ((D.status = "error"), (D.value = _));
              }
              return D;
            }
            (((r.exports = p).prototype.finally = function (g) {
              if (typeof g != "function") return this;
              var h = this.constructor;
              return this.then(
                function (D) {
                  return h.resolve(g()).then(function () {
                    return D;
                  });
                },
                function (D) {
                  return h.resolve(g()).then(function () {
                    throw D;
                  });
                },
              );
            }),
              (p.prototype.catch = function (g) {
                return this.then(null, g);
              }),
              (p.prototype.then = function (g, h) {
                if (
                  (typeof g != "function" && this.state === u) ||
                  (typeof h != "function" && this.state === s)
                )
                  return this;
                var D = new this.constructor(o);
                return (
                  this.state !== l
                    ? b(D, this.state === u ? g : h, this.outcome)
                    : this.queue.push(new m(D, g, h)),
                  D
                );
              }),
              (m.prototype.callFulfilled = function (g) {
                c.resolve(this.promise, g);
              }),
              (m.prototype.otherCallFulfilled = function (g) {
                b(this.promise, this.onFulfilled, g);
              }),
              (m.prototype.callRejected = function (g) {
                c.reject(this.promise, g);
              }),
              (m.prototype.otherCallRejected = function (g) {
                b(this.promise, this.onRejected, g);
              }),
              (c.resolve = function (g, h) {
                var D = d(y, h);
                if (D.status === "error") return c.reject(g, D.value);
                var _ = D.value;
                if (_) f(g, _);
                else {
                  ((g.state = u), (g.outcome = h));
                  for (var U = -1, w = g.queue.length; ++U < w; )
                    g.queue[U].callFulfilled(h);
                }
                return g;
              }),
              (c.reject = function (g, h) {
                ((g.state = s), (g.outcome = h));
                for (var D = -1, _ = g.queue.length; ++D < _; )
                  g.queue[D].callRejected(h);
                return g;
              }),
              (p.resolve = function (g) {
                return g instanceof this ? g : c.resolve(new this(o), g);
              }),
              (p.reject = function (g) {
                var h = new this(o);
                return c.reject(h, g);
              }),
              (p.all = function (g) {
                var h = this;
                if (Object.prototype.toString.call(g) !== "[object Array]")
                  return this.reject(new TypeError("must be an array"));
                var D = g.length,
                  _ = !1;
                if (!D) return this.resolve([]);
                for (
                  var U = new Array(D), w = 0, E = -1, O = new this(o);
                  ++E < D;
                )
                  I(g[E], E);
                return O;
                function I(Y, ee) {
                  h.resolve(Y).then(
                    function (T) {
                      ((U[ee] = T),
                        ++w !== D || _ || ((_ = !0), c.resolve(O, U)));
                    },
                    function (T) {
                      _ || ((_ = !0), c.reject(O, T));
                    },
                  );
                }
              }),
              (p.race = function (g) {
                var h = this;
                if (Object.prototype.toString.call(g) !== "[object Array]")
                  return this.reject(new TypeError("must be an array"));
                var D = g.length,
                  _ = !1;
                if (!D) return this.resolve([]);
                for (var U = -1, w = new this(o); ++U < D; )
                  ((E = g[U]),
                    h.resolve(E).then(
                      function (O) {
                        _ || ((_ = !0), c.resolve(w, O));
                      },
                      function (O) {
                        _ || ((_ = !0), c.reject(w, O));
                      },
                    ));
                var E;
                return w;
              }));
          },
          { immediate: 36 },
        ],
        38: [
          function (t, r, i) {
            var a = {};
            ((0, t("./lib/utils/common").assign)(
              a,
              t("./lib/deflate"),
              t("./lib/inflate"),
              t("./lib/zlib/constants"),
            ),
              (r.exports = a));
          },
          {
            "./lib/deflate": 39,
            "./lib/inflate": 40,
            "./lib/utils/common": 41,
            "./lib/zlib/constants": 44,
          },
        ],
        39: [
          function (t, r, i) {
            var a = t("./zlib/deflate"),
              o = t("./utils/common"),
              c = t("./utils/strings"),
              s = t("./zlib/messages"),
              u = t("./zlib/zstream"),
              l = Object.prototype.toString,
              p = 0,
              m = -1,
              b = 0,
              y = 8;
            function f(g) {
              if (!(this instanceof f)) return new f(g);
              this.options = o.assign(
                {
                  level: m,
                  method: y,
                  chunkSize: 16384,
                  windowBits: 15,
                  memLevel: 8,
                  strategy: b,
                  to: "",
                },
                g || {},
              );
              var h = this.options;
              (h.raw && 0 < h.windowBits
                ? (h.windowBits = -h.windowBits)
                : h.gzip &&
                  0 < h.windowBits &&
                  h.windowBits < 16 &&
                  (h.windowBits += 16),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new u()),
                (this.strm.avail_out = 0));
              var D = a.deflateInit2(
                this.strm,
                h.level,
                h.method,
                h.windowBits,
                h.memLevel,
                h.strategy,
              );
              if (D !== p) throw new Error(s[D]);
              if (
                (h.header && a.deflateSetHeader(this.strm, h.header),
                h.dictionary)
              ) {
                var _;
                if (
                  ((_ =
                    typeof h.dictionary == "string"
                      ? c.string2buf(h.dictionary)
                      : l.call(h.dictionary) === "[object ArrayBuffer]"
                        ? new Uint8Array(h.dictionary)
                        : h.dictionary),
                  (D = a.deflateSetDictionary(this.strm, _)) !== p)
                )
                  throw new Error(s[D]);
                this._dict_set = !0;
              }
            }
            function d(g, h) {
              var D = new f(h);
              if ((D.push(g, !0), D.err)) throw D.msg || s[D.err];
              return D.result;
            }
            ((f.prototype.push = function (g, h) {
              var D,
                _,
                U = this.strm,
                w = this.options.chunkSize;
              if (this.ended) return !1;
              ((_ = h === ~~h ? h : h === !0 ? 4 : 0),
                typeof g == "string"
                  ? (U.input = c.string2buf(g))
                  : l.call(g) === "[object ArrayBuffer]"
                    ? (U.input = new Uint8Array(g))
                    : (U.input = g),
                (U.next_in = 0),
                (U.avail_in = U.input.length));
              do {
                if (
                  (U.avail_out === 0 &&
                    ((U.output = new o.Buf8(w)),
                    (U.next_out = 0),
                    (U.avail_out = w)),
                  (D = a.deflate(U, _)) !== 1 && D !== p)
                )
                  return (this.onEnd(D), !(this.ended = !0));
                (U.avail_out !== 0 &&
                  (U.avail_in !== 0 || (_ !== 4 && _ !== 2))) ||
                  (this.options.to === "string"
                    ? this.onData(
                        c.buf2binstring(o.shrinkBuf(U.output, U.next_out)),
                      )
                    : this.onData(o.shrinkBuf(U.output, U.next_out)));
              } while ((0 < U.avail_in || U.avail_out === 0) && D !== 1);
              return _ === 4
                ? ((D = a.deflateEnd(this.strm)),
                  this.onEnd(D),
                  (this.ended = !0),
                  D === p)
                : _ !== 2 || (this.onEnd(p), !(U.avail_out = 0));
            }),
              (f.prototype.onData = function (g) {
                this.chunks.push(g);
              }),
              (f.prototype.onEnd = function (g) {
                (g === p &&
                  (this.options.to === "string"
                    ? (this.result = this.chunks.join(""))
                    : (this.result = o.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = g),
                  (this.msg = this.strm.msg));
              }),
              (i.Deflate = f),
              (i.deflate = d),
              (i.deflateRaw = function (g, h) {
                return (((h = h || {}).raw = !0), d(g, h));
              }),
              (i.gzip = function (g, h) {
                return (((h = h || {}).gzip = !0), d(g, h));
              }));
          },
          {
            "./utils/common": 41,
            "./utils/strings": 42,
            "./zlib/deflate": 46,
            "./zlib/messages": 51,
            "./zlib/zstream": 53,
          },
        ],
        40: [
          function (t, r, i) {
            var a = t("./zlib/inflate"),
              o = t("./utils/common"),
              c = t("./utils/strings"),
              s = t("./zlib/constants"),
              u = t("./zlib/messages"),
              l = t("./zlib/zstream"),
              p = t("./zlib/gzheader"),
              m = Object.prototype.toString;
            function b(f) {
              if (!(this instanceof b)) return new b(f);
              this.options = o.assign(
                { chunkSize: 16384, windowBits: 0, to: "" },
                f || {},
              );
              var d = this.options;
              (d.raw &&
                0 <= d.windowBits &&
                d.windowBits < 16 &&
                ((d.windowBits = -d.windowBits),
                d.windowBits === 0 && (d.windowBits = -15)),
                !(0 <= d.windowBits && d.windowBits < 16) ||
                  (f && f.windowBits) ||
                  (d.windowBits += 32),
                15 < d.windowBits &&
                  d.windowBits < 48 &&
                  !(15 & d.windowBits) &&
                  (d.windowBits |= 15),
                (this.err = 0),
                (this.msg = ""),
                (this.ended = !1),
                (this.chunks = []),
                (this.strm = new l()),
                (this.strm.avail_out = 0));
              var g = a.inflateInit2(this.strm, d.windowBits);
              if (g !== s.Z_OK) throw new Error(u[g]);
              ((this.header = new p()),
                a.inflateGetHeader(this.strm, this.header));
            }
            function y(f, d) {
              var g = new b(d);
              if ((g.push(f, !0), g.err)) throw g.msg || u[g.err];
              return g.result;
            }
            ((b.prototype.push = function (f, d) {
              var g,
                h,
                D,
                _,
                U,
                w,
                E = this.strm,
                O = this.options.chunkSize,
                I = this.options.dictionary,
                Y = !1;
              if (this.ended) return !1;
              ((h = d === ~~d ? d : d === !0 ? s.Z_FINISH : s.Z_NO_FLUSH),
                typeof f == "string"
                  ? (E.input = c.binstring2buf(f))
                  : m.call(f) === "[object ArrayBuffer]"
                    ? (E.input = new Uint8Array(f))
                    : (E.input = f),
                (E.next_in = 0),
                (E.avail_in = E.input.length));
              do {
                if (
                  (E.avail_out === 0 &&
                    ((E.output = new o.Buf8(O)),
                    (E.next_out = 0),
                    (E.avail_out = O)),
                  (g = a.inflate(E, s.Z_NO_FLUSH)) === s.Z_NEED_DICT &&
                    I &&
                    ((w =
                      typeof I == "string"
                        ? c.string2buf(I)
                        : m.call(I) === "[object ArrayBuffer]"
                          ? new Uint8Array(I)
                          : I),
                    (g = a.inflateSetDictionary(this.strm, w))),
                  g === s.Z_BUF_ERROR && Y === !0 && ((g = s.Z_OK), (Y = !1)),
                  g !== s.Z_STREAM_END && g !== s.Z_OK)
                )
                  return (this.onEnd(g), !(this.ended = !0));
                (E.next_out &&
                  ((E.avail_out !== 0 &&
                    g !== s.Z_STREAM_END &&
                    (E.avail_in !== 0 ||
                      (h !== s.Z_FINISH && h !== s.Z_SYNC_FLUSH))) ||
                    (this.options.to === "string"
                      ? ((D = c.utf8border(E.output, E.next_out)),
                        (_ = E.next_out - D),
                        (U = c.buf2string(E.output, D)),
                        (E.next_out = _),
                        (E.avail_out = O - _),
                        _ && o.arraySet(E.output, E.output, D, _, 0),
                        this.onData(U))
                      : this.onData(o.shrinkBuf(E.output, E.next_out)))),
                  E.avail_in === 0 && E.avail_out === 0 && (Y = !0));
              } while (
                (0 < E.avail_in || E.avail_out === 0) &&
                g !== s.Z_STREAM_END
              );
              return (
                g === s.Z_STREAM_END && (h = s.Z_FINISH),
                h === s.Z_FINISH
                  ? ((g = a.inflateEnd(this.strm)),
                    this.onEnd(g),
                    (this.ended = !0),
                    g === s.Z_OK)
                  : h !== s.Z_SYNC_FLUSH ||
                    (this.onEnd(s.Z_OK), !(E.avail_out = 0))
              );
            }),
              (b.prototype.onData = function (f) {
                this.chunks.push(f);
              }),
              (b.prototype.onEnd = function (f) {
                (f === s.Z_OK &&
                  (this.options.to === "string"
                    ? (this.result = this.chunks.join(""))
                    : (this.result = o.flattenChunks(this.chunks))),
                  (this.chunks = []),
                  (this.err = f),
                  (this.msg = this.strm.msg));
              }),
              (i.Inflate = b),
              (i.inflate = y),
              (i.inflateRaw = function (f, d) {
                return (((d = d || {}).raw = !0), y(f, d));
              }),
              (i.ungzip = y));
          },
          {
            "./utils/common": 41,
            "./utils/strings": 42,
            "./zlib/constants": 44,
            "./zlib/gzheader": 47,
            "./zlib/inflate": 49,
            "./zlib/messages": 51,
            "./zlib/zstream": 53,
          },
        ],
        41: [
          function (t, r, i) {
            var a =
              typeof Uint8Array < "u" &&
              typeof Uint16Array < "u" &&
              typeof Int32Array < "u";
            ((i.assign = function (s) {
              for (
                var u = Array.prototype.slice.call(arguments, 1);
                u.length;
              ) {
                var l = u.shift();
                if (l) {
                  if (typeof l != "object")
                    throw new TypeError(l + "must be non-object");
                  for (var p in l) l.hasOwnProperty(p) && (s[p] = l[p]);
                }
              }
              return s;
            }),
              (i.shrinkBuf = function (s, u) {
                return s.length === u
                  ? s
                  : s.subarray
                    ? s.subarray(0, u)
                    : ((s.length = u), s);
              }));
            var o = {
                arraySet: function (s, u, l, p, m) {
                  if (u.subarray && s.subarray) s.set(u.subarray(l, l + p), m);
                  else for (var b = 0; b < p; b++) s[m + b] = u[l + b];
                },
                flattenChunks: function (s) {
                  var u, l, p, m, b, y;
                  for (u = p = 0, l = s.length; u < l; u++) p += s[u].length;
                  for (
                    y = new Uint8Array(p), u = m = 0, l = s.length;
                    u < l;
                    u++
                  )
                    ((b = s[u]), y.set(b, m), (m += b.length));
                  return y;
                },
              },
              c = {
                arraySet: function (s, u, l, p, m) {
                  for (var b = 0; b < p; b++) s[m + b] = u[l + b];
                },
                flattenChunks: function (s) {
                  return [].concat.apply([], s);
                },
              };
            ((i.setTyped = function (s) {
              s
                ? ((i.Buf8 = Uint8Array),
                  (i.Buf16 = Uint16Array),
                  (i.Buf32 = Int32Array),
                  i.assign(i, o))
                : ((i.Buf8 = Array),
                  (i.Buf16 = Array),
                  (i.Buf32 = Array),
                  i.assign(i, c));
            }),
              i.setTyped(a));
          },
          {},
        ],
        42: [
          function (t, r, i) {
            var a = t("./common"),
              o = !0,
              c = !0;
            try {
              String.fromCharCode.apply(null, [0]);
            } catch {
              o = !1;
            }
            try {
              String.fromCharCode.apply(null, new Uint8Array(1));
            } catch {
              c = !1;
            }
            for (var s = new a.Buf8(256), u = 0; u < 256; u++)
              s[u] =
                252 <= u
                  ? 6
                  : 248 <= u
                    ? 5
                    : 240 <= u
                      ? 4
                      : 224 <= u
                        ? 3
                        : 192 <= u
                          ? 2
                          : 1;
            function l(p, m) {
              if (m < 65537 && ((p.subarray && c) || (!p.subarray && o)))
                return String.fromCharCode.apply(null, a.shrinkBuf(p, m));
              for (var b = "", y = 0; y < m; y++)
                b += String.fromCharCode(p[y]);
              return b;
            }
            ((s[254] = s[254] = 1),
              (i.string2buf = function (p) {
                var m,
                  b,
                  y,
                  f,
                  d,
                  g = p.length,
                  h = 0;
                for (f = 0; f < g; f++)
                  ((64512 & (b = p.charCodeAt(f))) == 55296 &&
                    f + 1 < g &&
                    (64512 & (y = p.charCodeAt(f + 1))) == 56320 &&
                    ((b = 65536 + ((b - 55296) << 10) + (y - 56320)), f++),
                    (h += b < 128 ? 1 : b < 2048 ? 2 : b < 65536 ? 3 : 4));
                for (m = new a.Buf8(h), f = d = 0; d < h; f++)
                  ((64512 & (b = p.charCodeAt(f))) == 55296 &&
                    f + 1 < g &&
                    (64512 & (y = p.charCodeAt(f + 1))) == 56320 &&
                    ((b = 65536 + ((b - 55296) << 10) + (y - 56320)), f++),
                    b < 128
                      ? (m[d++] = b)
                      : (b < 2048
                          ? (m[d++] = 192 | (b >>> 6))
                          : (b < 65536
                              ? (m[d++] = 224 | (b >>> 12))
                              : ((m[d++] = 240 | (b >>> 18)),
                                (m[d++] = 128 | ((b >>> 12) & 63))),
                            (m[d++] = 128 | ((b >>> 6) & 63))),
                        (m[d++] = 128 | (63 & b))));
                return m;
              }),
              (i.buf2binstring = function (p) {
                return l(p, p.length);
              }),
              (i.binstring2buf = function (p) {
                for (
                  var m = new a.Buf8(p.length), b = 0, y = m.length;
                  b < y;
                  b++
                )
                  m[b] = p.charCodeAt(b);
                return m;
              }),
              (i.buf2string = function (p, m) {
                var b,
                  y,
                  f,
                  d,
                  g = m || p.length,
                  h = new Array(2 * g);
                for (b = y = 0; b < g; )
                  if ((f = p[b++]) < 128) h[y++] = f;
                  else if (4 < (d = s[f])) ((h[y++] = 65533), (b += d - 1));
                  else {
                    for (f &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && b < g; )
                      ((f = (f << 6) | (63 & p[b++])), d--);
                    1 < d
                      ? (h[y++] = 65533)
                      : f < 65536
                        ? (h[y++] = f)
                        : ((f -= 65536),
                          (h[y++] = 55296 | ((f >> 10) & 1023)),
                          (h[y++] = 56320 | (1023 & f)));
                  }
                return l(h, y);
              }),
              (i.utf8border = function (p, m) {
                var b;
                for (
                  (m = m || p.length) > p.length && (m = p.length), b = m - 1;
                  0 <= b && (192 & p[b]) == 128;
                )
                  b--;
                return b < 0 || b === 0 ? m : b + s[p[b]] > m ? b : m;
              }));
          },
          { "./common": 41 },
        ],
        43: [
          function (t, r, i) {
            r.exports = function (a, o, c, s) {
              for (
                var u = (65535 & a) | 0, l = ((a >>> 16) & 65535) | 0, p = 0;
                c !== 0;
              ) {
                for (
                  c -= p = 2e3 < c ? 2e3 : c;
                  (l = (l + (u = (u + o[s++]) | 0)) | 0), --p;
                );
                ((u %= 65521), (l %= 65521));
              }
              return u | (l << 16) | 0;
            };
          },
          {},
        ],
        44: [
          function (t, r, i) {
            r.exports = {
              Z_NO_FLUSH: 0,
              Z_PARTIAL_FLUSH: 1,
              Z_SYNC_FLUSH: 2,
              Z_FULL_FLUSH: 3,
              Z_FINISH: 4,
              Z_BLOCK: 5,
              Z_TREES: 6,
              Z_OK: 0,
              Z_STREAM_END: 1,
              Z_NEED_DICT: 2,
              Z_ERRNO: -1,
              Z_STREAM_ERROR: -2,
              Z_DATA_ERROR: -3,
              Z_BUF_ERROR: -5,
              Z_NO_COMPRESSION: 0,
              Z_BEST_SPEED: 1,
              Z_BEST_COMPRESSION: 9,
              Z_DEFAULT_COMPRESSION: -1,
              Z_FILTERED: 1,
              Z_HUFFMAN_ONLY: 2,
              Z_RLE: 3,
              Z_FIXED: 4,
              Z_DEFAULT_STRATEGY: 0,
              Z_BINARY: 0,
              Z_TEXT: 1,
              Z_UNKNOWN: 2,
              Z_DEFLATED: 8,
            };
          },
          {},
        ],
        45: [
          function (t, r, i) {
            var a = (function () {
              for (var o, c = [], s = 0; s < 256; s++) {
                o = s;
                for (var u = 0; u < 8; u++)
                  o = 1 & o ? 3988292384 ^ (o >>> 1) : o >>> 1;
                c[s] = o;
              }
              return c;
            })();
            r.exports = function (o, c, s, u) {
              var l = a,
                p = u + s;
              o ^= -1;
              for (var m = u; m < p; m++) o = (o >>> 8) ^ l[255 & (o ^ c[m])];
              return -1 ^ o;
            };
          },
          {},
        ],
        46: [
          function (t, r, i) {
            var a,
              o = t("../utils/common"),
              c = t("./trees"),
              s = t("./adler32"),
              u = t("./crc32"),
              l = t("./messages"),
              p = 0,
              m = 4,
              b = 0,
              y = -2,
              f = -1,
              d = 4,
              g = 2,
              h = 8,
              D = 9,
              _ = 286,
              U = 30,
              w = 19,
              E = 2 * _ + 1,
              O = 15,
              I = 3,
              Y = 258,
              ee = Y + I + 1,
              T = 42,
              N = 113,
              x = 1,
              j = 2,
              C = 3,
              k = 4;
            function S(v, G) {
              return ((v.msg = l[G]), G);
            }
            function W(v) {
              return (v << 1) - (4 < v ? 9 : 0);
            }
            function z(v) {
              for (var G = v.length; 0 <= --G; ) v[G] = 0;
            }
            function R(v) {
              var G = v.state,
                H = G.pending;
              (H > v.avail_out && (H = v.avail_out),
                H !== 0 &&
                  (o.arraySet(
                    v.output,
                    G.pending_buf,
                    G.pending_out,
                    H,
                    v.next_out,
                  ),
                  (v.next_out += H),
                  (G.pending_out += H),
                  (v.total_out += H),
                  (v.avail_out -= H),
                  (G.pending -= H),
                  G.pending === 0 && (G.pending_out = 0)));
            }
            function L(v, G) {
              (c._tr_flush_block(
                v,
                0 <= v.block_start ? v.block_start : -1,
                v.strstart - v.block_start,
                G,
              ),
                (v.block_start = v.strstart),
                R(v.strm));
            }
            function M(v, G) {
              v.pending_buf[v.pending++] = G;
            }
            function Z(v, G) {
              ((v.pending_buf[v.pending++] = (G >>> 8) & 255),
                (v.pending_buf[v.pending++] = 255 & G));
            }
            function J(v, G) {
              var H,
                F,
                A = v.max_chain_length,
                q = v.strstart,
                Q = v.prev_length,
                te = v.nice_match,
                X =
                  v.strstart > v.w_size - ee ? v.strstart - (v.w_size - ee) : 0,
                B = v.window,
                P = v.w_mask,
                V = v.prev,
                K = v.strstart + Y,
                ae = B[q + Q - 1],
                se = B[q + Q];
              (v.prev_length >= v.good_match && (A >>= 2),
                te > v.lookahead && (te = v.lookahead));
              do
                if (
                  B[(H = G) + Q] === se &&
                  B[H + Q - 1] === ae &&
                  B[H] === B[q] &&
                  B[++H] === B[q + 1]
                ) {
                  ((q += 2), H++);
                  do;
                  while (
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    B[++q] === B[++H] &&
                    q < K
                  );
                  if (((F = Y - (K - q)), (q = K - Y), Q < F)) {
                    if (((v.match_start = G), te <= (Q = F))) break;
                    ((ae = B[q + Q - 1]), (se = B[q + Q]));
                  }
                }
              while ((G = V[G & P]) > X && --A != 0);
              return Q <= v.lookahead ? Q : v.lookahead;
            }
            function ie(v) {
              var G,
                H,
                F,
                A,
                q,
                Q,
                te,
                X,
                B,
                P,
                V = v.w_size;
              do {
                if (
                  ((A = v.window_size - v.lookahead - v.strstart),
                  v.strstart >= V + (V - ee))
                ) {
                  for (
                    o.arraySet(v.window, v.window, V, V, 0),
                      v.match_start -= V,
                      v.strstart -= V,
                      v.block_start -= V,
                      G = H = v.hash_size;
                    (F = v.head[--G]), (v.head[G] = V <= F ? F - V : 0), --H;
                  );
                  for (
                    G = H = V;
                    (F = v.prev[--G]), (v.prev[G] = V <= F ? F - V : 0), --H;
                  );
                  A += V;
                }
                if (v.strm.avail_in === 0) break;
                if (
                  ((Q = v.strm),
                  (te = v.window),
                  (X = v.strstart + v.lookahead),
                  (B = A),
                  (P = void 0),
                  (P = Q.avail_in),
                  B < P && (P = B),
                  (H =
                    P === 0
                      ? 0
                      : ((Q.avail_in -= P),
                        o.arraySet(te, Q.input, Q.next_in, P, X),
                        Q.state.wrap === 1
                          ? (Q.adler = s(Q.adler, te, P, X))
                          : Q.state.wrap === 2 &&
                            (Q.adler = u(Q.adler, te, P, X)),
                        (Q.next_in += P),
                        (Q.total_in += P),
                        P)),
                  (v.lookahead += H),
                  v.lookahead + v.insert >= I)
                )
                  for (
                    q = v.strstart - v.insert,
                      v.ins_h = v.window[q],
                      v.ins_h =
                        ((v.ins_h << v.hash_shift) ^ v.window[q + 1]) &
                        v.hash_mask;
                    v.insert &&
                    ((v.ins_h =
                      ((v.ins_h << v.hash_shift) ^ v.window[q + I - 1]) &
                      v.hash_mask),
                    (v.prev[q & v.w_mask] = v.head[v.ins_h]),
                    (v.head[v.ins_h] = q),
                    q++,
                    v.insert--,
                    !(v.lookahead + v.insert < I));
                  );
              } while (v.lookahead < ee && v.strm.avail_in !== 0);
            }
            function oe(v, G) {
              for (var H, F; ; ) {
                if (v.lookahead < ee) {
                  if ((ie(v), v.lookahead < ee && G === p)) return x;
                  if (v.lookahead === 0) break;
                }
                if (
                  ((H = 0),
                  v.lookahead >= I &&
                    ((v.ins_h =
                      ((v.ins_h << v.hash_shift) ^
                        v.window[v.strstart + I - 1]) &
                      v.hash_mask),
                    (H = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
                    (v.head[v.ins_h] = v.strstart)),
                  H !== 0 &&
                    v.strstart - H <= v.w_size - ee &&
                    (v.match_length = J(v, H)),
                  v.match_length >= I)
                )
                  if (
                    ((F = c._tr_tally(
                      v,
                      v.strstart - v.match_start,
                      v.match_length - I,
                    )),
                    (v.lookahead -= v.match_length),
                    v.match_length <= v.max_lazy_match && v.lookahead >= I)
                  ) {
                    for (
                      v.match_length--;
                      v.strstart++,
                        (v.ins_h =
                          ((v.ins_h << v.hash_shift) ^
                            v.window[v.strstart + I - 1]) &
                          v.hash_mask),
                        (H = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
                        (v.head[v.ins_h] = v.strstart),
                        --v.match_length != 0;
                    );
                    v.strstart++;
                  } else
                    ((v.strstart += v.match_length),
                      (v.match_length = 0),
                      (v.ins_h = v.window[v.strstart]),
                      (v.ins_h =
                        ((v.ins_h << v.hash_shift) ^ v.window[v.strstart + 1]) &
                        v.hash_mask));
                else
                  ((F = c._tr_tally(v, 0, v.window[v.strstart])),
                    v.lookahead--,
                    v.strstart++);
                if (F && (L(v, !1), v.strm.avail_out === 0)) return x;
              }
              return (
                (v.insert = v.strstart < I - 1 ? v.strstart : I - 1),
                G === m
                  ? (L(v, !0), v.strm.avail_out === 0 ? C : k)
                  : v.last_lit && (L(v, !1), v.strm.avail_out === 0)
                    ? x
                    : j
              );
            }
            function ce(v, G) {
              for (var H, F, A; ; ) {
                if (v.lookahead < ee) {
                  if ((ie(v), v.lookahead < ee && G === p)) return x;
                  if (v.lookahead === 0) break;
                }
                if (
                  ((H = 0),
                  v.lookahead >= I &&
                    ((v.ins_h =
                      ((v.ins_h << v.hash_shift) ^
                        v.window[v.strstart + I - 1]) &
                      v.hash_mask),
                    (H = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
                    (v.head[v.ins_h] = v.strstart)),
                  (v.prev_length = v.match_length),
                  (v.prev_match = v.match_start),
                  (v.match_length = I - 1),
                  H !== 0 &&
                    v.prev_length < v.max_lazy_match &&
                    v.strstart - H <= v.w_size - ee &&
                    ((v.match_length = J(v, H)),
                    v.match_length <= 5 &&
                      (v.strategy === 1 ||
                        (v.match_length === I &&
                          4096 < v.strstart - v.match_start)) &&
                      (v.match_length = I - 1)),
                  v.prev_length >= I && v.match_length <= v.prev_length)
                ) {
                  for (
                    A = v.strstart + v.lookahead - I,
                      F = c._tr_tally(
                        v,
                        v.strstart - 1 - v.prev_match,
                        v.prev_length - I,
                      ),
                      v.lookahead -= v.prev_length - 1,
                      v.prev_length -= 2;
                    ++v.strstart <= A &&
                      ((v.ins_h =
                        ((v.ins_h << v.hash_shift) ^
                          v.window[v.strstart + I - 1]) &
                        v.hash_mask),
                      (H = v.prev[v.strstart & v.w_mask] = v.head[v.ins_h]),
                      (v.head[v.ins_h] = v.strstart)),
                      --v.prev_length != 0;
                  );
                  if (
                    ((v.match_available = 0),
                    (v.match_length = I - 1),
                    v.strstart++,
                    F && (L(v, !1), v.strm.avail_out === 0))
                  )
                    return x;
                } else if (v.match_available) {
                  if (
                    ((F = c._tr_tally(v, 0, v.window[v.strstart - 1])) &&
                      L(v, !1),
                    v.strstart++,
                    v.lookahead--,
                    v.strm.avail_out === 0)
                  )
                    return x;
                } else ((v.match_available = 1), v.strstart++, v.lookahead--);
              }
              return (
                v.match_available &&
                  ((F = c._tr_tally(v, 0, v.window[v.strstart - 1])),
                  (v.match_available = 0)),
                (v.insert = v.strstart < I - 1 ? v.strstart : I - 1),
                G === m
                  ? (L(v, !0), v.strm.avail_out === 0 ? C : k)
                  : v.last_lit && (L(v, !1), v.strm.avail_out === 0)
                    ? x
                    : j
              );
            }
            function de(v, G, H, F, A) {
              ((this.good_length = v),
                (this.max_lazy = G),
                (this.nice_length = H),
                (this.max_chain = F),
                (this.func = A));
            }
            function me() {
              ((this.strm = null),
                (this.status = 0),
                (this.pending_buf = null),
                (this.pending_buf_size = 0),
                (this.pending_out = 0),
                (this.pending = 0),
                (this.wrap = 0),
                (this.gzhead = null),
                (this.gzindex = 0),
                (this.method = h),
                (this.last_flush = -1),
                (this.w_size = 0),
                (this.w_bits = 0),
                (this.w_mask = 0),
                (this.window = null),
                (this.window_size = 0),
                (this.prev = null),
                (this.head = null),
                (this.ins_h = 0),
                (this.hash_size = 0),
                (this.hash_bits = 0),
                (this.hash_mask = 0),
                (this.hash_shift = 0),
                (this.block_start = 0),
                (this.match_length = 0),
                (this.prev_match = 0),
                (this.match_available = 0),
                (this.strstart = 0),
                (this.match_start = 0),
                (this.lookahead = 0),
                (this.prev_length = 0),
                (this.max_chain_length = 0),
                (this.max_lazy_match = 0),
                (this.level = 0),
                (this.strategy = 0),
                (this.good_match = 0),
                (this.nice_match = 0),
                (this.dyn_ltree = new o.Buf16(2 * E)),
                (this.dyn_dtree = new o.Buf16(2 * (2 * U + 1))),
                (this.bl_tree = new o.Buf16(2 * (2 * w + 1))),
                z(this.dyn_ltree),
                z(this.dyn_dtree),
                z(this.bl_tree),
                (this.l_desc = null),
                (this.d_desc = null),
                (this.bl_desc = null),
                (this.bl_count = new o.Buf16(O + 1)),
                (this.heap = new o.Buf16(2 * _ + 1)),
                z(this.heap),
                (this.heap_len = 0),
                (this.heap_max = 0),
                (this.depth = new o.Buf16(2 * _ + 1)),
                z(this.depth),
                (this.l_buf = 0),
                (this.lit_bufsize = 0),
                (this.last_lit = 0),
                (this.d_buf = 0),
                (this.opt_len = 0),
                (this.static_len = 0),
                (this.matches = 0),
                (this.insert = 0),
                (this.bi_buf = 0),
                (this.bi_valid = 0));
            }
            function ye(v) {
              var G;
              return v && v.state
                ? ((v.total_in = v.total_out = 0),
                  (v.data_type = g),
                  ((G = v.state).pending = 0),
                  (G.pending_out = 0),
                  G.wrap < 0 && (G.wrap = -G.wrap),
                  (G.status = G.wrap ? T : N),
                  (v.adler = G.wrap === 2 ? 0 : 1),
                  (G.last_flush = p),
                  c._tr_init(G),
                  b)
                : S(v, y);
            }
            function $(v) {
              var G = ye(v);
              return (
                G === b &&
                  (function (H) {
                    ((H.window_size = 2 * H.w_size),
                      z(H.head),
                      (H.max_lazy_match = a[H.level].max_lazy),
                      (H.good_match = a[H.level].good_length),
                      (H.nice_match = a[H.level].nice_length),
                      (H.max_chain_length = a[H.level].max_chain),
                      (H.strstart = 0),
                      (H.block_start = 0),
                      (H.lookahead = 0),
                      (H.insert = 0),
                      (H.match_length = H.prev_length = I - 1),
                      (H.match_available = 0),
                      (H.ins_h = 0));
                  })(v.state),
                G
              );
            }
            function ne(v, G, H, F, A, q) {
              if (!v) return y;
              var Q = 1;
              if (
                (G === f && (G = 6),
                F < 0 ? ((Q = 0), (F = -F)) : 15 < F && ((Q = 2), (F -= 16)),
                A < 1 ||
                  D < A ||
                  H !== h ||
                  F < 8 ||
                  15 < F ||
                  G < 0 ||
                  9 < G ||
                  q < 0 ||
                  d < q)
              )
                return S(v, y);
              F === 8 && (F = 9);
              var te = new me();
              return (
                ((v.state = te).strm = v),
                (te.wrap = Q),
                (te.gzhead = null),
                (te.w_bits = F),
                (te.w_size = 1 << te.w_bits),
                (te.w_mask = te.w_size - 1),
                (te.hash_bits = A + 7),
                (te.hash_size = 1 << te.hash_bits),
                (te.hash_mask = te.hash_size - 1),
                (te.hash_shift = ~~((te.hash_bits + I - 1) / I)),
                (te.window = new o.Buf8(2 * te.w_size)),
                (te.head = new o.Buf16(te.hash_size)),
                (te.prev = new o.Buf16(te.w_size)),
                (te.lit_bufsize = 1 << (A + 6)),
                (te.pending_buf_size = 4 * te.lit_bufsize),
                (te.pending_buf = new o.Buf8(te.pending_buf_size)),
                (te.d_buf = 1 * te.lit_bufsize),
                (te.l_buf = 3 * te.lit_bufsize),
                (te.level = G),
                (te.strategy = q),
                (te.method = H),
                $(v)
              );
            }
            ((a = [
              new de(0, 0, 0, 0, function (v, G) {
                var H = 65535;
                for (
                  H > v.pending_buf_size - 5 && (H = v.pending_buf_size - 5);
                  ;
                ) {
                  if (v.lookahead <= 1) {
                    if ((ie(v), v.lookahead === 0 && G === p)) return x;
                    if (v.lookahead === 0) break;
                  }
                  ((v.strstart += v.lookahead), (v.lookahead = 0));
                  var F = v.block_start + H;
                  if (
                    ((v.strstart === 0 || v.strstart >= F) &&
                      ((v.lookahead = v.strstart - F),
                      (v.strstart = F),
                      L(v, !1),
                      v.strm.avail_out === 0)) ||
                    (v.strstart - v.block_start >= v.w_size - ee &&
                      (L(v, !1), v.strm.avail_out === 0))
                  )
                    return x;
                }
                return (
                  (v.insert = 0),
                  G === m
                    ? (L(v, !0), v.strm.avail_out === 0 ? C : k)
                    : (v.strstart > v.block_start &&
                        (L(v, !1), v.strm.avail_out),
                      x)
                );
              }),
              new de(4, 4, 8, 4, oe),
              new de(4, 5, 16, 8, oe),
              new de(4, 6, 32, 32, oe),
              new de(4, 4, 16, 16, ce),
              new de(8, 16, 32, 32, ce),
              new de(8, 16, 128, 128, ce),
              new de(8, 32, 128, 256, ce),
              new de(32, 128, 258, 1024, ce),
              new de(32, 258, 258, 4096, ce),
            ]),
              (i.deflateInit = function (v, G) {
                return ne(v, G, h, 15, 8, 0);
              }),
              (i.deflateInit2 = ne),
              (i.deflateReset = $),
              (i.deflateResetKeep = ye),
              (i.deflateSetHeader = function (v, G) {
                return v && v.state
                  ? v.state.wrap !== 2
                    ? y
                    : ((v.state.gzhead = G), b)
                  : y;
              }),
              (i.deflate = function (v, G) {
                var H, F, A, q;
                if (!v || !v.state || 5 < G || G < 0) return v ? S(v, y) : y;
                if (
                  ((F = v.state),
                  !v.output ||
                    (!v.input && v.avail_in !== 0) ||
                    (F.status === 666 && G !== m))
                )
                  return S(v, v.avail_out === 0 ? -5 : y);
                if (
                  ((F.strm = v),
                  (H = F.last_flush),
                  (F.last_flush = G),
                  F.status === T)
                )
                  if (F.wrap === 2)
                    ((v.adler = 0),
                      M(F, 31),
                      M(F, 139),
                      M(F, 8),
                      F.gzhead
                        ? (M(
                            F,
                            (F.gzhead.text ? 1 : 0) +
                              (F.gzhead.hcrc ? 2 : 0) +
                              (F.gzhead.extra ? 4 : 0) +
                              (F.gzhead.name ? 8 : 0) +
                              (F.gzhead.comment ? 16 : 0),
                          ),
                          M(F, 255 & F.gzhead.time),
                          M(F, (F.gzhead.time >> 8) & 255),
                          M(F, (F.gzhead.time >> 16) & 255),
                          M(F, (F.gzhead.time >> 24) & 255),
                          M(
                            F,
                            F.level === 9
                              ? 2
                              : 2 <= F.strategy || F.level < 2
                                ? 4
                                : 0,
                          ),
                          M(F, 255 & F.gzhead.os),
                          F.gzhead.extra &&
                            F.gzhead.extra.length &&
                            (M(F, 255 & F.gzhead.extra.length),
                            M(F, (F.gzhead.extra.length >> 8) & 255)),
                          F.gzhead.hcrc &&
                            (v.adler = u(v.adler, F.pending_buf, F.pending, 0)),
                          (F.gzindex = 0),
                          (F.status = 69))
                        : (M(F, 0),
                          M(F, 0),
                          M(F, 0),
                          M(F, 0),
                          M(F, 0),
                          M(
                            F,
                            F.level === 9
                              ? 2
                              : 2 <= F.strategy || F.level < 2
                                ? 4
                                : 0,
                          ),
                          M(F, 3),
                          (F.status = N)));
                  else {
                    var Q = (h + ((F.w_bits - 8) << 4)) << 8;
                    ((Q |=
                      (2 <= F.strategy || F.level < 2
                        ? 0
                        : F.level < 6
                          ? 1
                          : F.level === 6
                            ? 2
                            : 3) << 6),
                      F.strstart !== 0 && (Q |= 32),
                      (Q += 31 - (Q % 31)),
                      (F.status = N),
                      Z(F, Q),
                      F.strstart !== 0 &&
                        (Z(F, v.adler >>> 16), Z(F, 65535 & v.adler)),
                      (v.adler = 1));
                  }
                if (F.status === 69)
                  if (F.gzhead.extra) {
                    for (
                      A = F.pending;
                      F.gzindex < (65535 & F.gzhead.extra.length) &&
                      (F.pending !== F.pending_buf_size ||
                        (F.gzhead.hcrc &&
                          F.pending > A &&
                          (v.adler = u(
                            v.adler,
                            F.pending_buf,
                            F.pending - A,
                            A,
                          )),
                        R(v),
                        (A = F.pending),
                        F.pending !== F.pending_buf_size));
                    )
                      (M(F, 255 & F.gzhead.extra[F.gzindex]), F.gzindex++);
                    (F.gzhead.hcrc &&
                      F.pending > A &&
                      (v.adler = u(v.adler, F.pending_buf, F.pending - A, A)),
                      F.gzindex === F.gzhead.extra.length &&
                        ((F.gzindex = 0), (F.status = 73)));
                  } else F.status = 73;
                if (F.status === 73)
                  if (F.gzhead.name) {
                    A = F.pending;
                    do {
                      if (
                        F.pending === F.pending_buf_size &&
                        (F.gzhead.hcrc &&
                          F.pending > A &&
                          (v.adler = u(
                            v.adler,
                            F.pending_buf,
                            F.pending - A,
                            A,
                          )),
                        R(v),
                        (A = F.pending),
                        F.pending === F.pending_buf_size)
                      ) {
                        q = 1;
                        break;
                      }
                      ((q =
                        F.gzindex < F.gzhead.name.length
                          ? 255 & F.gzhead.name.charCodeAt(F.gzindex++)
                          : 0),
                        M(F, q));
                    } while (q !== 0);
                    (F.gzhead.hcrc &&
                      F.pending > A &&
                      (v.adler = u(v.adler, F.pending_buf, F.pending - A, A)),
                      q === 0 && ((F.gzindex = 0), (F.status = 91)));
                  } else F.status = 91;
                if (F.status === 91)
                  if (F.gzhead.comment) {
                    A = F.pending;
                    do {
                      if (
                        F.pending === F.pending_buf_size &&
                        (F.gzhead.hcrc &&
                          F.pending > A &&
                          (v.adler = u(
                            v.adler,
                            F.pending_buf,
                            F.pending - A,
                            A,
                          )),
                        R(v),
                        (A = F.pending),
                        F.pending === F.pending_buf_size)
                      ) {
                        q = 1;
                        break;
                      }
                      ((q =
                        F.gzindex < F.gzhead.comment.length
                          ? 255 & F.gzhead.comment.charCodeAt(F.gzindex++)
                          : 0),
                        M(F, q));
                    } while (q !== 0);
                    (F.gzhead.hcrc &&
                      F.pending > A &&
                      (v.adler = u(v.adler, F.pending_buf, F.pending - A, A)),
                      q === 0 && (F.status = 103));
                  } else F.status = 103;
                if (
                  (F.status === 103 &&
                    (F.gzhead.hcrc
                      ? (F.pending + 2 > F.pending_buf_size && R(v),
                        F.pending + 2 <= F.pending_buf_size &&
                          (M(F, 255 & v.adler),
                          M(F, (v.adler >> 8) & 255),
                          (v.adler = 0),
                          (F.status = N)))
                      : (F.status = N)),
                  F.pending !== 0)
                ) {
                  if ((R(v), v.avail_out === 0))
                    return ((F.last_flush = -1), b);
                } else if (v.avail_in === 0 && W(G) <= W(H) && G !== m)
                  return S(v, -5);
                if (F.status === 666 && v.avail_in !== 0) return S(v, -5);
                if (
                  v.avail_in !== 0 ||
                  F.lookahead !== 0 ||
                  (G !== p && F.status !== 666)
                ) {
                  var te =
                    F.strategy === 2
                      ? (function (X, B) {
                          for (var P; ; ) {
                            if (
                              X.lookahead === 0 &&
                              (ie(X), X.lookahead === 0)
                            ) {
                              if (B === p) return x;
                              break;
                            }
                            if (
                              ((X.match_length = 0),
                              (P = c._tr_tally(X, 0, X.window[X.strstart])),
                              X.lookahead--,
                              X.strstart++,
                              P && (L(X, !1), X.strm.avail_out === 0))
                            )
                              return x;
                          }
                          return (
                            (X.insert = 0),
                            B === m
                              ? (L(X, !0), X.strm.avail_out === 0 ? C : k)
                              : X.last_lit && (L(X, !1), X.strm.avail_out === 0)
                                ? x
                                : j
                          );
                        })(F, G)
                      : F.strategy === 3
                        ? (function (X, B) {
                            for (var P, V, K, ae, se = X.window; ; ) {
                              if (X.lookahead <= Y) {
                                if ((ie(X), X.lookahead <= Y && B === p))
                                  return x;
                                if (X.lookahead === 0) break;
                              }
                              if (
                                ((X.match_length = 0),
                                X.lookahead >= I &&
                                  0 < X.strstart &&
                                  (V = se[(K = X.strstart - 1)]) === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K])
                              ) {
                                ae = X.strstart + Y;
                                do;
                                while (
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  V === se[++K] &&
                                  K < ae
                                );
                                ((X.match_length = Y - (ae - K)),
                                  X.match_length > X.lookahead &&
                                    (X.match_length = X.lookahead));
                              }
                              if (
                                (X.match_length >= I
                                  ? ((P = c._tr_tally(
                                      X,
                                      1,
                                      X.match_length - I,
                                    )),
                                    (X.lookahead -= X.match_length),
                                    (X.strstart += X.match_length),
                                    (X.match_length = 0))
                                  : ((P = c._tr_tally(
                                      X,
                                      0,
                                      X.window[X.strstart],
                                    )),
                                    X.lookahead--,
                                    X.strstart++),
                                P && (L(X, !1), X.strm.avail_out === 0))
                              )
                                return x;
                            }
                            return (
                              (X.insert = 0),
                              B === m
                                ? (L(X, !0), X.strm.avail_out === 0 ? C : k)
                                : X.last_lit &&
                                    (L(X, !1), X.strm.avail_out === 0)
                                  ? x
                                  : j
                            );
                          })(F, G)
                        : a[F.level].func(F, G);
                  if (
                    ((te !== C && te !== k) || (F.status = 666),
                    te === x || te === C)
                  )
                    return (v.avail_out === 0 && (F.last_flush = -1), b);
                  if (
                    te === j &&
                    (G === 1
                      ? c._tr_align(F)
                      : G !== 5 &&
                        (c._tr_stored_block(F, 0, 0, !1),
                        G === 3 &&
                          (z(F.head),
                          F.lookahead === 0 &&
                            ((F.strstart = 0),
                            (F.block_start = 0),
                            (F.insert = 0)))),
                    R(v),
                    v.avail_out === 0)
                  )
                    return ((F.last_flush = -1), b);
                }
                return G !== m
                  ? b
                  : F.wrap <= 0
                    ? 1
                    : (F.wrap === 2
                        ? (M(F, 255 & v.adler),
                          M(F, (v.adler >> 8) & 255),
                          M(F, (v.adler >> 16) & 255),
                          M(F, (v.adler >> 24) & 255),
                          M(F, 255 & v.total_in),
                          M(F, (v.total_in >> 8) & 255),
                          M(F, (v.total_in >> 16) & 255),
                          M(F, (v.total_in >> 24) & 255))
                        : (Z(F, v.adler >>> 16), Z(F, 65535 & v.adler)),
                      R(v),
                      0 < F.wrap && (F.wrap = -F.wrap),
                      F.pending !== 0 ? b : 1);
              }),
              (i.deflateEnd = function (v) {
                var G;
                return v && v.state
                  ? (G = v.state.status) !== T &&
                    G !== 69 &&
                    G !== 73 &&
                    G !== 91 &&
                    G !== 103 &&
                    G !== N &&
                    G !== 666
                    ? S(v, y)
                    : ((v.state = null), G === N ? S(v, -3) : b)
                  : y;
              }),
              (i.deflateSetDictionary = function (v, G) {
                var H,
                  F,
                  A,
                  q,
                  Q,
                  te,
                  X,
                  B,
                  P = G.length;
                if (
                  !v ||
                  !v.state ||
                  (q = (H = v.state).wrap) === 2 ||
                  (q === 1 && H.status !== T) ||
                  H.lookahead
                )
                  return y;
                for (
                  q === 1 && (v.adler = s(v.adler, G, P, 0)),
                    H.wrap = 0,
                    P >= H.w_size &&
                      (q === 0 &&
                        (z(H.head),
                        (H.strstart = 0),
                        (H.block_start = 0),
                        (H.insert = 0)),
                      (B = new o.Buf8(H.w_size)),
                      o.arraySet(B, G, P - H.w_size, H.w_size, 0),
                      (G = B),
                      (P = H.w_size)),
                    Q = v.avail_in,
                    te = v.next_in,
                    X = v.input,
                    v.avail_in = P,
                    v.next_in = 0,
                    v.input = G,
                    ie(H);
                  H.lookahead >= I;
                ) {
                  for (
                    F = H.strstart, A = H.lookahead - (I - 1);
                    (H.ins_h =
                      ((H.ins_h << H.hash_shift) ^ H.window[F + I - 1]) &
                      H.hash_mask),
                      (H.prev[F & H.w_mask] = H.head[H.ins_h]),
                      (H.head[H.ins_h] = F),
                      F++,
                      --A;
                  );
                  ((H.strstart = F), (H.lookahead = I - 1), ie(H));
                }
                return (
                  (H.strstart += H.lookahead),
                  (H.block_start = H.strstart),
                  (H.insert = H.lookahead),
                  (H.lookahead = 0),
                  (H.match_length = H.prev_length = I - 1),
                  (H.match_available = 0),
                  (v.next_in = te),
                  (v.input = X),
                  (v.avail_in = Q),
                  (H.wrap = q),
                  b
                );
              }),
              (i.deflateInfo = "pako deflate (from Nodeca project)"));
          },
          {
            "../utils/common": 41,
            "./adler32": 43,
            "./crc32": 45,
            "./messages": 51,
            "./trees": 52,
          },
        ],
        47: [
          function (t, r, i) {
            r.exports = function () {
              ((this.text = 0),
                (this.time = 0),
                (this.xflags = 0),
                (this.os = 0),
                (this.extra = null),
                (this.extra_len = 0),
                (this.name = ""),
                (this.comment = ""),
                (this.hcrc = 0),
                (this.done = !1));
            };
          },
          {},
        ],
        48: [
          function (t, r, i) {
            r.exports = function (a, o) {
              var c,
                s,
                u,
                l,
                p,
                m,
                b,
                y,
                f,
                d,
                g,
                h,
                D,
                _,
                U,
                w,
                E,
                O,
                I,
                Y,
                ee,
                T,
                N,
                x,
                j;
              ((c = a.state),
                (s = a.next_in),
                (x = a.input),
                (u = s + (a.avail_in - 5)),
                (l = a.next_out),
                (j = a.output),
                (p = l - (o - a.avail_out)),
                (m = l + (a.avail_out - 257)),
                (b = c.dmax),
                (y = c.wsize),
                (f = c.whave),
                (d = c.wnext),
                (g = c.window),
                (h = c.hold),
                (D = c.bits),
                (_ = c.lencode),
                (U = c.distcode),
                (w = (1 << c.lenbits) - 1),
                (E = (1 << c.distbits) - 1));
              e: do {
                (D < 15 &&
                  ((h += x[s++] << D), (D += 8), (h += x[s++] << D), (D += 8)),
                  (O = _[h & w]));
                n: for (;;) {
                  if (
                    ((h >>>= I = O >>> 24),
                    (D -= I),
                    (I = (O >>> 16) & 255) === 0)
                  )
                    j[l++] = 65535 & O;
                  else {
                    if (!(16 & I)) {
                      if (!(64 & I)) {
                        O = _[(65535 & O) + (h & ((1 << I) - 1))];
                        continue n;
                      }
                      if (32 & I) {
                        c.mode = 12;
                        break e;
                      }
                      ((a.msg = "invalid literal/length code"), (c.mode = 30));
                      break e;
                    }
                    ((Y = 65535 & O),
                      (I &= 15) &&
                        (D < I && ((h += x[s++] << D), (D += 8)),
                        (Y += h & ((1 << I) - 1)),
                        (h >>>= I),
                        (D -= I)),
                      D < 15 &&
                        ((h += x[s++] << D),
                        (D += 8),
                        (h += x[s++] << D),
                        (D += 8)),
                      (O = U[h & E]));
                    t: for (;;) {
                      if (
                        ((h >>>= I = O >>> 24),
                        (D -= I),
                        !(16 & (I = (O >>> 16) & 255)))
                      ) {
                        if (!(64 & I)) {
                          O = U[(65535 & O) + (h & ((1 << I) - 1))];
                          continue t;
                        }
                        ((a.msg = "invalid distance code"), (c.mode = 30));
                        break e;
                      }
                      if (
                        ((ee = 65535 & O),
                        D < (I &= 15) &&
                          ((h += x[s++] << D),
                          (D += 8) < I && ((h += x[s++] << D), (D += 8))),
                        b < (ee += h & ((1 << I) - 1)))
                      ) {
                        ((a.msg = "invalid distance too far back"),
                          (c.mode = 30));
                        break e;
                      }
                      if (((h >>>= I), (D -= I), (I = l - p) < ee)) {
                        if (f < (I = ee - I) && c.sane) {
                          ((a.msg = "invalid distance too far back"),
                            (c.mode = 30));
                          break e;
                        }
                        if (((N = g), (T = 0) === d)) {
                          if (((T += y - I), I < Y)) {
                            for (Y -= I; (j[l++] = g[T++]), --I; );
                            ((T = l - ee), (N = j));
                          }
                        } else if (d < I) {
                          if (((T += y + d - I), (I -= d) < Y)) {
                            for (Y -= I; (j[l++] = g[T++]), --I; );
                            if (((T = 0), d < Y)) {
                              for (Y -= I = d; (j[l++] = g[T++]), --I; );
                              ((T = l - ee), (N = j));
                            }
                          }
                        } else if (((T += d - I), I < Y)) {
                          for (Y -= I; (j[l++] = g[T++]), --I; );
                          ((T = l - ee), (N = j));
                        }
                        for (; 2 < Y; )
                          ((j[l++] = N[T++]),
                            (j[l++] = N[T++]),
                            (j[l++] = N[T++]),
                            (Y -= 3));
                        Y && ((j[l++] = N[T++]), 1 < Y && (j[l++] = N[T++]));
                      } else {
                        for (
                          T = l - ee;
                          (j[l++] = j[T++]),
                            (j[l++] = j[T++]),
                            (j[l++] = j[T++]),
                            2 < (Y -= 3);
                        );
                        Y && ((j[l++] = j[T++]), 1 < Y && (j[l++] = j[T++]));
                      }
                      break;
                    }
                  }
                  break;
                }
              } while (s < u && l < m);
              ((s -= Y = D >> 3),
                (h &= (1 << (D -= Y << 3)) - 1),
                (a.next_in = s),
                (a.next_out = l),
                (a.avail_in = s < u ? u - s + 5 : 5 - (s - u)),
                (a.avail_out = l < m ? m - l + 257 : 257 - (l - m)),
                (c.hold = h),
                (c.bits = D));
            };
          },
          {},
        ],
        49: [
          function (t, r, i) {
            var a = t("../utils/common"),
              o = t("./adler32"),
              c = t("./crc32"),
              s = t("./inffast"),
              u = t("./inftrees"),
              l = 1,
              p = 2,
              m = 0,
              b = -2,
              y = 1,
              f = 852,
              d = 592;
            function g(T) {
              return (
                ((T >>> 24) & 255) +
                ((T >>> 8) & 65280) +
                ((65280 & T) << 8) +
                ((255 & T) << 24)
              );
            }
            function h() {
              ((this.mode = 0),
                (this.last = !1),
                (this.wrap = 0),
                (this.havedict = !1),
                (this.flags = 0),
                (this.dmax = 0),
                (this.check = 0),
                (this.total = 0),
                (this.head = null),
                (this.wbits = 0),
                (this.wsize = 0),
                (this.whave = 0),
                (this.wnext = 0),
                (this.window = null),
                (this.hold = 0),
                (this.bits = 0),
                (this.length = 0),
                (this.offset = 0),
                (this.extra = 0),
                (this.lencode = null),
                (this.distcode = null),
                (this.lenbits = 0),
                (this.distbits = 0),
                (this.ncode = 0),
                (this.nlen = 0),
                (this.ndist = 0),
                (this.have = 0),
                (this.next = null),
                (this.lens = new a.Buf16(320)),
                (this.work = new a.Buf16(288)),
                (this.lendyn = null),
                (this.distdyn = null),
                (this.sane = 0),
                (this.back = 0),
                (this.was = 0));
            }
            function D(T) {
              var N;
              return T && T.state
                ? ((N = T.state),
                  (T.total_in = T.total_out = N.total = 0),
                  (T.msg = ""),
                  N.wrap && (T.adler = 1 & N.wrap),
                  (N.mode = y),
                  (N.last = 0),
                  (N.havedict = 0),
                  (N.dmax = 32768),
                  (N.head = null),
                  (N.hold = 0),
                  (N.bits = 0),
                  (N.lencode = N.lendyn = new a.Buf32(f)),
                  (N.distcode = N.distdyn = new a.Buf32(d)),
                  (N.sane = 1),
                  (N.back = -1),
                  m)
                : b;
            }
            function _(T) {
              var N;
              return T && T.state
                ? (((N = T.state).wsize = 0),
                  (N.whave = 0),
                  (N.wnext = 0),
                  D(T))
                : b;
            }
            function U(T, N) {
              var x, j;
              return T && T.state
                ? ((j = T.state),
                  N < 0
                    ? ((x = 0), (N = -N))
                    : ((x = 1 + (N >> 4)), N < 48 && (N &= 15)),
                  N && (N < 8 || 15 < N)
                    ? b
                    : (j.window !== null && j.wbits !== N && (j.window = null),
                      (j.wrap = x),
                      (j.wbits = N),
                      _(T)))
                : b;
            }
            function w(T, N) {
              var x, j;
              return T
                ? ((j = new h()),
                  ((T.state = j).window = null),
                  (x = U(T, N)) !== m && (T.state = null),
                  x)
                : b;
            }
            var E,
              O,
              I = !0;
            function Y(T) {
              if (I) {
                var N;
                for (
                  E = new a.Buf32(512), O = new a.Buf32(32), N = 0;
                  N < 144;
                )
                  T.lens[N++] = 8;
                for (; N < 256; ) T.lens[N++] = 9;
                for (; N < 280; ) T.lens[N++] = 7;
                for (; N < 288; ) T.lens[N++] = 8;
                for (
                  u(l, T.lens, 0, 288, E, 0, T.work, { bits: 9 }), N = 0;
                  N < 32;
                )
                  T.lens[N++] = 5;
                (u(p, T.lens, 0, 32, O, 0, T.work, { bits: 5 }), (I = !1));
              }
              ((T.lencode = E),
                (T.lenbits = 9),
                (T.distcode = O),
                (T.distbits = 5));
            }
            function ee(T, N, x, j) {
              var C,
                k = T.state;
              return (
                k.window === null &&
                  ((k.wsize = 1 << k.wbits),
                  (k.wnext = 0),
                  (k.whave = 0),
                  (k.window = new a.Buf8(k.wsize))),
                j >= k.wsize
                  ? (a.arraySet(k.window, N, x - k.wsize, k.wsize, 0),
                    (k.wnext = 0),
                    (k.whave = k.wsize))
                  : (j < (C = k.wsize - k.wnext) && (C = j),
                    a.arraySet(k.window, N, x - j, C, k.wnext),
                    (j -= C)
                      ? (a.arraySet(k.window, N, x - j, j, 0),
                        (k.wnext = j),
                        (k.whave = k.wsize))
                      : ((k.wnext += C),
                        k.wnext === k.wsize && (k.wnext = 0),
                        k.whave < k.wsize && (k.whave += C))),
                0
              );
            }
            ((i.inflateReset = _),
              (i.inflateReset2 = U),
              (i.inflateResetKeep = D),
              (i.inflateInit = function (T) {
                return w(T, 15);
              }),
              (i.inflateInit2 = w),
              (i.inflate = function (T, N) {
                var x,
                  j,
                  C,
                  k,
                  S,
                  W,
                  z,
                  R,
                  L,
                  M,
                  Z,
                  J,
                  ie,
                  oe,
                  ce,
                  de,
                  me,
                  ye,
                  $,
                  ne,
                  v,
                  G,
                  H,
                  F,
                  A = 0,
                  q = new a.Buf8(4),
                  Q = [
                    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14,
                    1, 15,
                  ];
                if (
                  !T ||
                  !T.state ||
                  !T.output ||
                  (!T.input && T.avail_in !== 0)
                )
                  return b;
                ((x = T.state).mode === 12 && (x.mode = 13),
                  (S = T.next_out),
                  (C = T.output),
                  (z = T.avail_out),
                  (k = T.next_in),
                  (j = T.input),
                  (W = T.avail_in),
                  (R = x.hold),
                  (L = x.bits),
                  (M = W),
                  (Z = z),
                  (G = m));
                e: for (;;)
                  switch (x.mode) {
                    case y:
                      if (x.wrap === 0) {
                        x.mode = 13;
                        break;
                      }
                      for (; L < 16; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      if (2 & x.wrap && R === 35615) {
                        ((q[(x.check = 0)] = 255 & R),
                          (q[1] = (R >>> 8) & 255),
                          (x.check = c(x.check, q, 2, 0)),
                          (L = R = 0),
                          (x.mode = 2));
                        break;
                      }
                      if (
                        ((x.flags = 0),
                        x.head && (x.head.done = !1),
                        !(1 & x.wrap) || (((255 & R) << 8) + (R >> 8)) % 31)
                      ) {
                        ((T.msg = "incorrect header check"), (x.mode = 30));
                        break;
                      }
                      if ((15 & R) != 8) {
                        ((T.msg = "unknown compression method"), (x.mode = 30));
                        break;
                      }
                      if (
                        ((L -= 4), (v = 8 + (15 & (R >>>= 4))), x.wbits === 0)
                      )
                        x.wbits = v;
                      else if (v > x.wbits) {
                        ((T.msg = "invalid window size"), (x.mode = 30));
                        break;
                      }
                      ((x.dmax = 1 << v),
                        (T.adler = x.check = 1),
                        (x.mode = 512 & R ? 10 : 12),
                        (L = R = 0));
                      break;
                    case 2:
                      for (; L < 16; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      if (((x.flags = R), (255 & x.flags) != 8)) {
                        ((T.msg = "unknown compression method"), (x.mode = 30));
                        break;
                      }
                      if (57344 & x.flags) {
                        ((T.msg = "unknown header flags set"), (x.mode = 30));
                        break;
                      }
                      (x.head && (x.head.text = (R >> 8) & 1),
                        512 & x.flags &&
                          ((q[0] = 255 & R),
                          (q[1] = (R >>> 8) & 255),
                          (x.check = c(x.check, q, 2, 0))),
                        (L = R = 0),
                        (x.mode = 3));
                    case 3:
                      for (; L < 32; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      (x.head && (x.head.time = R),
                        512 & x.flags &&
                          ((q[0] = 255 & R),
                          (q[1] = (R >>> 8) & 255),
                          (q[2] = (R >>> 16) & 255),
                          (q[3] = (R >>> 24) & 255),
                          (x.check = c(x.check, q, 4, 0))),
                        (L = R = 0),
                        (x.mode = 4));
                    case 4:
                      for (; L < 16; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      (x.head &&
                        ((x.head.xflags = 255 & R), (x.head.os = R >> 8)),
                        512 & x.flags &&
                          ((q[0] = 255 & R),
                          (q[1] = (R >>> 8) & 255),
                          (x.check = c(x.check, q, 2, 0))),
                        (L = R = 0),
                        (x.mode = 5));
                    case 5:
                      if (1024 & x.flags) {
                        for (; L < 16; ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        ((x.length = R),
                          x.head && (x.head.extra_len = R),
                          512 & x.flags &&
                            ((q[0] = 255 & R),
                            (q[1] = (R >>> 8) & 255),
                            (x.check = c(x.check, q, 2, 0))),
                          (L = R = 0));
                      } else x.head && (x.head.extra = null);
                      x.mode = 6;
                    case 6:
                      if (
                        1024 & x.flags &&
                        (W < (J = x.length) && (J = W),
                        J &&
                          (x.head &&
                            ((v = x.head.extra_len - x.length),
                            x.head.extra ||
                              (x.head.extra = new Array(x.head.extra_len)),
                            a.arraySet(x.head.extra, j, k, J, v)),
                          512 & x.flags && (x.check = c(x.check, j, J, k)),
                          (W -= J),
                          (k += J),
                          (x.length -= J)),
                        x.length)
                      )
                        break e;
                      ((x.length = 0), (x.mode = 7));
                    case 7:
                      if (2048 & x.flags) {
                        if (W === 0) break e;
                        for (
                          J = 0;
                          (v = j[k + J++]),
                            x.head &&
                              v &&
                              x.length < 65536 &&
                              (x.head.name += String.fromCharCode(v)),
                            v && J < W;
                        );
                        if (
                          (512 & x.flags && (x.check = c(x.check, j, J, k)),
                          (W -= J),
                          (k += J),
                          v)
                        )
                          break e;
                      } else x.head && (x.head.name = null);
                      ((x.length = 0), (x.mode = 8));
                    case 8:
                      if (4096 & x.flags) {
                        if (W === 0) break e;
                        for (
                          J = 0;
                          (v = j[k + J++]),
                            x.head &&
                              v &&
                              x.length < 65536 &&
                              (x.head.comment += String.fromCharCode(v)),
                            v && J < W;
                        );
                        if (
                          (512 & x.flags && (x.check = c(x.check, j, J, k)),
                          (W -= J),
                          (k += J),
                          v)
                        )
                          break e;
                      } else x.head && (x.head.comment = null);
                      x.mode = 9;
                    case 9:
                      if (512 & x.flags) {
                        for (; L < 16; ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        if (R !== (65535 & x.check)) {
                          ((T.msg = "header crc mismatch"), (x.mode = 30));
                          break;
                        }
                        L = R = 0;
                      }
                      (x.head &&
                        ((x.head.hcrc = (x.flags >> 9) & 1),
                        (x.head.done = !0)),
                        (T.adler = x.check = 0),
                        (x.mode = 12));
                      break;
                    case 10:
                      for (; L < 32; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      ((T.adler = x.check = g(R)), (L = R = 0), (x.mode = 11));
                    case 11:
                      if (x.havedict === 0)
                        return (
                          (T.next_out = S),
                          (T.avail_out = z),
                          (T.next_in = k),
                          (T.avail_in = W),
                          (x.hold = R),
                          (x.bits = L),
                          2
                        );
                      ((T.adler = x.check = 1), (x.mode = 12));
                    case 12:
                      if (N === 5 || N === 6) break e;
                    case 13:
                      if (x.last) {
                        ((R >>>= 7 & L), (L -= 7 & L), (x.mode = 27));
                        break;
                      }
                      for (; L < 3; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      switch (((x.last = 1 & R), (L -= 1), 3 & (R >>>= 1))) {
                        case 0:
                          x.mode = 14;
                          break;
                        case 1:
                          if ((Y(x), (x.mode = 20), N !== 6)) break;
                          ((R >>>= 2), (L -= 2));
                          break e;
                        case 2:
                          x.mode = 17;
                          break;
                        case 3:
                          ((T.msg = "invalid block type"), (x.mode = 30));
                      }
                      ((R >>>= 2), (L -= 2));
                      break;
                    case 14:
                      for (R >>>= 7 & L, L -= 7 & L; L < 32; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      if ((65535 & R) != ((R >>> 16) ^ 65535)) {
                        ((T.msg = "invalid stored block lengths"),
                          (x.mode = 30));
                        break;
                      }
                      if (
                        ((x.length = 65535 & R),
                        (L = R = 0),
                        (x.mode = 15),
                        N === 6)
                      )
                        break e;
                    case 15:
                      x.mode = 16;
                    case 16:
                      if ((J = x.length)) {
                        if ((W < J && (J = W), z < J && (J = z), J === 0))
                          break e;
                        (a.arraySet(C, j, k, J, S),
                          (W -= J),
                          (k += J),
                          (z -= J),
                          (S += J),
                          (x.length -= J));
                        break;
                      }
                      x.mode = 12;
                      break;
                    case 17:
                      for (; L < 14; ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      if (
                        ((x.nlen = 257 + (31 & R)),
                        (R >>>= 5),
                        (L -= 5),
                        (x.ndist = 1 + (31 & R)),
                        (R >>>= 5),
                        (L -= 5),
                        (x.ncode = 4 + (15 & R)),
                        (R >>>= 4),
                        (L -= 4),
                        286 < x.nlen || 30 < x.ndist)
                      ) {
                        ((T.msg = "too many length or distance symbols"),
                          (x.mode = 30));
                        break;
                      }
                      ((x.have = 0), (x.mode = 18));
                    case 18:
                      for (; x.have < x.ncode; ) {
                        for (; L < 3; ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        ((x.lens[Q[x.have++]] = 7 & R), (R >>>= 3), (L -= 3));
                      }
                      for (; x.have < 19; ) x.lens[Q[x.have++]] = 0;
                      if (
                        ((x.lencode = x.lendyn),
                        (x.lenbits = 7),
                        (H = { bits: x.lenbits }),
                        (G = u(0, x.lens, 0, 19, x.lencode, 0, x.work, H)),
                        (x.lenbits = H.bits),
                        G)
                      ) {
                        ((T.msg = "invalid code lengths set"), (x.mode = 30));
                        break;
                      }
                      ((x.have = 0), (x.mode = 19));
                    case 19:
                      for (; x.have < x.nlen + x.ndist; ) {
                        for (
                          ;
                          (de =
                            ((A = x.lencode[R & ((1 << x.lenbits) - 1)]) >>>
                              16) &
                            255),
                            (me = 65535 & A),
                            !((ce = A >>> 24) <= L);
                        ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        if (me < 16)
                          ((R >>>= ce), (L -= ce), (x.lens[x.have++] = me));
                        else {
                          if (me === 16) {
                            for (F = ce + 2; L < F; ) {
                              if (W === 0) break e;
                              (W--, (R += j[k++] << L), (L += 8));
                            }
                            if (((R >>>= ce), (L -= ce), x.have === 0)) {
                              ((T.msg = "invalid bit length repeat"),
                                (x.mode = 30));
                              break;
                            }
                            ((v = x.lens[x.have - 1]),
                              (J = 3 + (3 & R)),
                              (R >>>= 2),
                              (L -= 2));
                          } else if (me === 17) {
                            for (F = ce + 3; L < F; ) {
                              if (W === 0) break e;
                              (W--, (R += j[k++] << L), (L += 8));
                            }
                            ((L -= ce),
                              (v = 0),
                              (J = 3 + (7 & (R >>>= ce))),
                              (R >>>= 3),
                              (L -= 3));
                          } else {
                            for (F = ce + 7; L < F; ) {
                              if (W === 0) break e;
                              (W--, (R += j[k++] << L), (L += 8));
                            }
                            ((L -= ce),
                              (v = 0),
                              (J = 11 + (127 & (R >>>= ce))),
                              (R >>>= 7),
                              (L -= 7));
                          }
                          if (x.have + J > x.nlen + x.ndist) {
                            ((T.msg = "invalid bit length repeat"),
                              (x.mode = 30));
                            break;
                          }
                          for (; J--; ) x.lens[x.have++] = v;
                        }
                      }
                      if (x.mode === 30) break;
                      if (x.lens[256] === 0) {
                        ((T.msg = "invalid code -- missing end-of-block"),
                          (x.mode = 30));
                        break;
                      }
                      if (
                        ((x.lenbits = 9),
                        (H = { bits: x.lenbits }),
                        (G = u(l, x.lens, 0, x.nlen, x.lencode, 0, x.work, H)),
                        (x.lenbits = H.bits),
                        G)
                      ) {
                        ((T.msg = "invalid literal/lengths set"),
                          (x.mode = 30));
                        break;
                      }
                      if (
                        ((x.distbits = 6),
                        (x.distcode = x.distdyn),
                        (H = { bits: x.distbits }),
                        (G = u(
                          p,
                          x.lens,
                          x.nlen,
                          x.ndist,
                          x.distcode,
                          0,
                          x.work,
                          H,
                        )),
                        (x.distbits = H.bits),
                        G)
                      ) {
                        ((T.msg = "invalid distances set"), (x.mode = 30));
                        break;
                      }
                      if (((x.mode = 20), N === 6)) break e;
                    case 20:
                      x.mode = 21;
                    case 21:
                      if (6 <= W && 258 <= z) {
                        ((T.next_out = S),
                          (T.avail_out = z),
                          (T.next_in = k),
                          (T.avail_in = W),
                          (x.hold = R),
                          (x.bits = L),
                          s(T, Z),
                          (S = T.next_out),
                          (C = T.output),
                          (z = T.avail_out),
                          (k = T.next_in),
                          (j = T.input),
                          (W = T.avail_in),
                          (R = x.hold),
                          (L = x.bits),
                          x.mode === 12 && (x.back = -1));
                        break;
                      }
                      for (
                        x.back = 0;
                        (de =
                          ((A = x.lencode[R & ((1 << x.lenbits) - 1)]) >>> 16) &
                          255),
                          (me = 65535 & A),
                          !((ce = A >>> 24) <= L);
                      ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      if (de && !(240 & de)) {
                        for (
                          ye = ce, $ = de, ne = me;
                          (de =
                            ((A =
                              x.lencode[
                                ne + ((R & ((1 << (ye + $)) - 1)) >> ye)
                              ]) >>>
                              16) &
                            255),
                            (me = 65535 & A),
                            !(ye + (ce = A >>> 24) <= L);
                        ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        ((R >>>= ye), (L -= ye), (x.back += ye));
                      }
                      if (
                        ((R >>>= ce),
                        (L -= ce),
                        (x.back += ce),
                        (x.length = me),
                        de === 0)
                      ) {
                        x.mode = 26;
                        break;
                      }
                      if (32 & de) {
                        ((x.back = -1), (x.mode = 12));
                        break;
                      }
                      if (64 & de) {
                        ((T.msg = "invalid literal/length code"),
                          (x.mode = 30));
                        break;
                      }
                      ((x.extra = 15 & de), (x.mode = 22));
                    case 22:
                      if (x.extra) {
                        for (F = x.extra; L < F; ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        ((x.length += R & ((1 << x.extra) - 1)),
                          (R >>>= x.extra),
                          (L -= x.extra),
                          (x.back += x.extra));
                      }
                      ((x.was = x.length), (x.mode = 23));
                    case 23:
                      for (
                        ;
                        (de =
                          ((A = x.distcode[R & ((1 << x.distbits) - 1)]) >>>
                            16) &
                          255),
                          (me = 65535 & A),
                          !((ce = A >>> 24) <= L);
                      ) {
                        if (W === 0) break e;
                        (W--, (R += j[k++] << L), (L += 8));
                      }
                      if (!(240 & de)) {
                        for (
                          ye = ce, $ = de, ne = me;
                          (de =
                            ((A =
                              x.distcode[
                                ne + ((R & ((1 << (ye + $)) - 1)) >> ye)
                              ]) >>>
                              16) &
                            255),
                            (me = 65535 & A),
                            !(ye + (ce = A >>> 24) <= L);
                        ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        ((R >>>= ye), (L -= ye), (x.back += ye));
                      }
                      if (((R >>>= ce), (L -= ce), (x.back += ce), 64 & de)) {
                        ((T.msg = "invalid distance code"), (x.mode = 30));
                        break;
                      }
                      ((x.offset = me), (x.extra = 15 & de), (x.mode = 24));
                    case 24:
                      if (x.extra) {
                        for (F = x.extra; L < F; ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        ((x.offset += R & ((1 << x.extra) - 1)),
                          (R >>>= x.extra),
                          (L -= x.extra),
                          (x.back += x.extra));
                      }
                      if (x.offset > x.dmax) {
                        ((T.msg = "invalid distance too far back"),
                          (x.mode = 30));
                        break;
                      }
                      x.mode = 25;
                    case 25:
                      if (z === 0) break e;
                      if (((J = Z - z), x.offset > J)) {
                        if ((J = x.offset - J) > x.whave && x.sane) {
                          ((T.msg = "invalid distance too far back"),
                            (x.mode = 30));
                          break;
                        }
                        ((ie =
                          J > x.wnext
                            ? ((J -= x.wnext), x.wsize - J)
                            : x.wnext - J),
                          J > x.length && (J = x.length),
                          (oe = x.window));
                      } else ((oe = C), (ie = S - x.offset), (J = x.length));
                      for (
                        z < J && (J = z), z -= J, x.length -= J;
                        (C[S++] = oe[ie++]), --J;
                      );
                      x.length === 0 && (x.mode = 21);
                      break;
                    case 26:
                      if (z === 0) break e;
                      ((C[S++] = x.length), z--, (x.mode = 21));
                      break;
                    case 27:
                      if (x.wrap) {
                        for (; L < 32; ) {
                          if (W === 0) break e;
                          (W--, (R |= j[k++] << L), (L += 8));
                        }
                        if (
                          ((Z -= z),
                          (T.total_out += Z),
                          (x.total += Z),
                          Z &&
                            (T.adler = x.check =
                              x.flags
                                ? c(x.check, C, Z, S - Z)
                                : o(x.check, C, Z, S - Z)),
                          (Z = z),
                          (x.flags ? R : g(R)) !== x.check)
                        ) {
                          ((T.msg = "incorrect data check"), (x.mode = 30));
                          break;
                        }
                        L = R = 0;
                      }
                      x.mode = 28;
                    case 28:
                      if (x.wrap && x.flags) {
                        for (; L < 32; ) {
                          if (W === 0) break e;
                          (W--, (R += j[k++] << L), (L += 8));
                        }
                        if (R !== (4294967295 & x.total)) {
                          ((T.msg = "incorrect length check"), (x.mode = 30));
                          break;
                        }
                        L = R = 0;
                      }
                      x.mode = 29;
                    case 29:
                      G = 1;
                      break e;
                    case 30:
                      G = -3;
                      break e;
                    case 31:
                      return -4;
                    case 32:
                    default:
                      return b;
                  }
                return (
                  (T.next_out = S),
                  (T.avail_out = z),
                  (T.next_in = k),
                  (T.avail_in = W),
                  (x.hold = R),
                  (x.bits = L),
                  (x.wsize ||
                    (Z !== T.avail_out &&
                      x.mode < 30 &&
                      (x.mode < 27 || N !== 4))) &&
                  ee(T, T.output, T.next_out, Z - T.avail_out)
                    ? ((x.mode = 31), -4)
                    : ((M -= T.avail_in),
                      (Z -= T.avail_out),
                      (T.total_in += M),
                      (T.total_out += Z),
                      (x.total += Z),
                      x.wrap &&
                        Z &&
                        (T.adler = x.check =
                          x.flags
                            ? c(x.check, C, Z, T.next_out - Z)
                            : o(x.check, C, Z, T.next_out - Z)),
                      (T.data_type =
                        x.bits +
                        (x.last ? 64 : 0) +
                        (x.mode === 12 ? 128 : 0) +
                        (x.mode === 20 || x.mode === 15 ? 256 : 0)),
                      ((M == 0 && Z === 0) || N === 4) && G === m && (G = -5),
                      G)
                );
              }),
              (i.inflateEnd = function (T) {
                if (!T || !T.state) return b;
                var N = T.state;
                return (N.window && (N.window = null), (T.state = null), m);
              }),
              (i.inflateGetHeader = function (T, N) {
                var x;
                return T && T.state && 2 & (x = T.state).wrap
                  ? (((x.head = N).done = !1), m)
                  : b;
              }),
              (i.inflateSetDictionary = function (T, N) {
                var x,
                  j = N.length;
                return T && T.state
                  ? (x = T.state).wrap !== 0 && x.mode !== 11
                    ? b
                    : x.mode === 11 && o(1, N, j, 0) !== x.check
                      ? -3
                      : ee(T, N, j, j)
                        ? ((x.mode = 31), -4)
                        : ((x.havedict = 1), m)
                  : b;
              }),
              (i.inflateInfo = "pako inflate (from Nodeca project)"));
          },
          {
            "../utils/common": 41,
            "./adler32": 43,
            "./crc32": 45,
            "./inffast": 48,
            "./inftrees": 50,
          },
        ],
        50: [
          function (t, r, i) {
            var a = t("../utils/common"),
              o = [
                3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43,
                51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
              ],
              c = [
                16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
                19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
              ],
              s = [
                1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257,
                385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289,
                16385, 24577, 0, 0,
              ],
              u = [
                16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
                23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
              ];
            r.exports = function (l, p, m, b, y, f, d, g) {
              var h,
                D,
                _,
                U,
                w,
                E,
                O,
                I,
                Y,
                ee = g.bits,
                T = 0,
                N = 0,
                x = 0,
                j = 0,
                C = 0,
                k = 0,
                S = 0,
                W = 0,
                z = 0,
                R = 0,
                L = null,
                M = 0,
                Z = new a.Buf16(16),
                J = new a.Buf16(16),
                ie = null,
                oe = 0;
              for (T = 0; T <= 15; T++) Z[T] = 0;
              for (N = 0; N < b; N++) Z[p[m + N]]++;
              for (C = ee, j = 15; 1 <= j && Z[j] === 0; j--);
              if ((j < C && (C = j), j === 0))
                return (
                  (y[f++] = 20971520),
                  (y[f++] = 20971520),
                  (g.bits = 1),
                  0
                );
              for (x = 1; x < j && Z[x] === 0; x++);
              for (C < x && (C = x), T = W = 1; T <= 15; T++)
                if (((W <<= 1), (W -= Z[T]) < 0)) return -1;
              if (0 < W && (l === 0 || j !== 1)) return -1;
              for (J[1] = 0, T = 1; T < 15; T++) J[T + 1] = J[T] + Z[T];
              for (N = 0; N < b; N++) p[m + N] !== 0 && (d[J[p[m + N]]++] = N);
              if (
                ((E =
                  l === 0
                    ? ((L = ie = d), 19)
                    : l === 1
                      ? ((L = o), (M -= 257), (ie = c), (oe -= 257), 256)
                      : ((L = s), (ie = u), -1)),
                (T = x),
                (w = f),
                (S = N = R = 0),
                (_ = -1),
                (U = (z = 1 << (k = C)) - 1),
                (l === 1 && 852 < z) || (l === 2 && 592 < z))
              )
                return 1;
              for (;;) {
                for (
                  O = T - S,
                    Y =
                      d[N] < E
                        ? ((I = 0), d[N])
                        : d[N] > E
                          ? ((I = ie[oe + d[N]]), L[M + d[N]])
                          : ((I = 96), 0),
                    h = 1 << (T - S),
                    x = D = 1 << k;
                  (y[w + (R >> S) + (D -= h)] = (O << 24) | (I << 16) | Y | 0),
                    D !== 0;
                );
                for (h = 1 << (T - 1); R & h; ) h >>= 1;
                if (
                  (h !== 0 ? ((R &= h - 1), (R += h)) : (R = 0),
                  N++,
                  --Z[T] == 0)
                ) {
                  if (T === j) break;
                  T = p[m + d[N]];
                }
                if (C < T && (R & U) !== _) {
                  for (
                    S === 0 && (S = C), w += x, W = 1 << (k = T - S);
                    k + S < j && !((W -= Z[k + S]) <= 0);
                  )
                    (k++, (W <<= 1));
                  if (
                    ((z += 1 << k),
                    (l === 1 && 852 < z) || (l === 2 && 592 < z))
                  )
                    return 1;
                  y[(_ = R & U)] = (C << 24) | (k << 16) | (w - f) | 0;
                }
              }
              return (
                R !== 0 && (y[w + R] = ((T - S) << 24) | (64 << 16) | 0),
                (g.bits = C),
                0
              );
            };
          },
          { "../utils/common": 41 },
        ],
        51: [
          function (t, r, i) {
            r.exports = {
              2: "need dictionary",
              1: "stream end",
              0: "",
              "-1": "file error",
              "-2": "stream error",
              "-3": "data error",
              "-4": "insufficient memory",
              "-5": "buffer error",
              "-6": "incompatible version",
            };
          },
          {},
        ],
        52: [
          function (t, r, i) {
            var a = t("../utils/common"),
              o = 0,
              c = 1;
            function s(A) {
              for (var q = A.length; 0 <= --q; ) A[q] = 0;
            }
            var u = 0,
              l = 29,
              p = 256,
              m = p + 1 + l,
              b = 30,
              y = 19,
              f = 2 * m + 1,
              d = 15,
              g = 16,
              h = 7,
              D = 256,
              _ = 16,
              U = 17,
              w = 18,
              E = [
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4,
                4, 4, 4, 5, 5, 5, 5, 0,
              ],
              O = [
                0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9,
                9, 10, 10, 11, 11, 12, 12, 13, 13,
              ],
              I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
              Y = [
                16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1,
                15,
              ],
              ee = new Array(2 * (m + 2));
            s(ee);
            var T = new Array(2 * b);
            s(T);
            var N = new Array(512);
            s(N);
            var x = new Array(256);
            s(x);
            var j = new Array(l);
            s(j);
            var C,
              k,
              S,
              W = new Array(b);
            function z(A, q, Q, te, X) {
              ((this.static_tree = A),
                (this.extra_bits = q),
                (this.extra_base = Q),
                (this.elems = te),
                (this.max_length = X),
                (this.has_stree = A && A.length));
            }
            function R(A, q) {
              ((this.dyn_tree = A), (this.max_code = 0), (this.stat_desc = q));
            }
            function L(A) {
              return A < 256 ? N[A] : N[256 + (A >>> 7)];
            }
            function M(A, q) {
              ((A.pending_buf[A.pending++] = 255 & q),
                (A.pending_buf[A.pending++] = (q >>> 8) & 255));
            }
            function Z(A, q, Q) {
              A.bi_valid > g - Q
                ? ((A.bi_buf |= (q << A.bi_valid) & 65535),
                  M(A, A.bi_buf),
                  (A.bi_buf = q >> (g - A.bi_valid)),
                  (A.bi_valid += Q - g))
                : ((A.bi_buf |= (q << A.bi_valid) & 65535), (A.bi_valid += Q));
            }
            function J(A, q, Q) {
              Z(A, Q[2 * q], Q[2 * q + 1]);
            }
            function ie(A, q) {
              for (var Q = 0; (Q |= 1 & A), (A >>>= 1), (Q <<= 1), 0 < --q; );
              return Q >>> 1;
            }
            function oe(A, q, Q) {
              var te,
                X,
                B = new Array(d + 1),
                P = 0;
              for (te = 1; te <= d; te++) B[te] = P = (P + Q[te - 1]) << 1;
              for (X = 0; X <= q; X++) {
                var V = A[2 * X + 1];
                V !== 0 && (A[2 * X] = ie(B[V]++, V));
              }
            }
            function ce(A) {
              var q;
              for (q = 0; q < m; q++) A.dyn_ltree[2 * q] = 0;
              for (q = 0; q < b; q++) A.dyn_dtree[2 * q] = 0;
              for (q = 0; q < y; q++) A.bl_tree[2 * q] = 0;
              ((A.dyn_ltree[2 * D] = 1),
                (A.opt_len = A.static_len = 0),
                (A.last_lit = A.matches = 0));
            }
            function de(A) {
              (8 < A.bi_valid
                ? M(A, A.bi_buf)
                : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf),
                (A.bi_buf = 0),
                (A.bi_valid = 0));
            }
            function me(A, q, Q, te) {
              var X = 2 * q,
                B = 2 * Q;
              return A[X] < A[B] || (A[X] === A[B] && te[q] <= te[Q]);
            }
            function ye(A, q, Q) {
              for (
                var te = A.heap[Q], X = Q << 1;
                X <= A.heap_len &&
                (X < A.heap_len &&
                  me(q, A.heap[X + 1], A.heap[X], A.depth) &&
                  X++,
                !me(q, te, A.heap[X], A.depth));
              )
                ((A.heap[Q] = A.heap[X]), (Q = X), (X <<= 1));
              A.heap[Q] = te;
            }
            function $(A, q, Q) {
              var te,
                X,
                B,
                P,
                V = 0;
              if (A.last_lit !== 0)
                for (
                  ;
                  (te =
                    (A.pending_buf[A.d_buf + 2 * V] << 8) |
                    A.pending_buf[A.d_buf + 2 * V + 1]),
                    (X = A.pending_buf[A.l_buf + V]),
                    V++,
                    te === 0
                      ? J(A, X, q)
                      : (J(A, (B = x[X]) + p + 1, q),
                        (P = E[B]) !== 0 && Z(A, (X -= j[B]), P),
                        J(A, (B = L(--te)), Q),
                        (P = O[B]) !== 0 && Z(A, (te -= W[B]), P)),
                    V < A.last_lit;
                );
              J(A, D, q);
            }
            function ne(A, q) {
              var Q,
                te,
                X,
                B = q.dyn_tree,
                P = q.stat_desc.static_tree,
                V = q.stat_desc.has_stree,
                K = q.stat_desc.elems,
                ae = -1;
              for (A.heap_len = 0, A.heap_max = f, Q = 0; Q < K; Q++)
                B[2 * Q] !== 0
                  ? ((A.heap[++A.heap_len] = ae = Q), (A.depth[Q] = 0))
                  : (B[2 * Q + 1] = 0);
              for (; A.heap_len < 2; )
                ((B[2 * (X = A.heap[++A.heap_len] = ae < 2 ? ++ae : 0)] = 1),
                  (A.depth[X] = 0),
                  A.opt_len--,
                  V && (A.static_len -= P[2 * X + 1]));
              for (q.max_code = ae, Q = A.heap_len >> 1; 1 <= Q; Q--)
                ye(A, B, Q);
              for (
                X = K;
                (Q = A.heap[1]),
                  (A.heap[1] = A.heap[A.heap_len--]),
                  ye(A, B, 1),
                  (te = A.heap[1]),
                  (A.heap[--A.heap_max] = Q),
                  (A.heap[--A.heap_max] = te),
                  (B[2 * X] = B[2 * Q] + B[2 * te]),
                  (A.depth[X] =
                    (A.depth[Q] >= A.depth[te] ? A.depth[Q] : A.depth[te]) + 1),
                  (B[2 * Q + 1] = B[2 * te + 1] = X),
                  (A.heap[1] = X++),
                  ye(A, B, 1),
                  2 <= A.heap_len;
              );
              ((A.heap[--A.heap_max] = A.heap[1]),
                (function (se, le) {
                  var ue,
                    pe,
                    xe,
                    be,
                    Pe,
                    dt,
                    nn = le.dyn_tree,
                    Oo = le.max_code,
                    nf = le.stat_desc.static_tree,
                    tf = le.stat_desc.has_stree,
                    rf = le.stat_desc.extra_bits,
                    Io = le.stat_desc.extra_base,
                    lt = le.stat_desc.max_length,
                    Mt = 0;
                  for (be = 0; be <= d; be++) se.bl_count[be] = 0;
                  for (
                    nn[2 * se.heap[se.heap_max] + 1] = 0, ue = se.heap_max + 1;
                    ue < f;
                    ue++
                  )
                    (lt <
                      (be = nn[2 * nn[2 * (pe = se.heap[ue]) + 1] + 1] + 1) &&
                      ((be = lt), Mt++),
                      (nn[2 * pe + 1] = be),
                      Oo < pe ||
                        (se.bl_count[be]++,
                        (Pe = 0),
                        Io <= pe && (Pe = rf[pe - Io]),
                        (dt = nn[2 * pe]),
                        (se.opt_len += dt * (be + Pe)),
                        tf && (se.static_len += dt * (nf[2 * pe + 1] + Pe))));
                  if (Mt !== 0) {
                    do {
                      for (be = lt - 1; se.bl_count[be] === 0; ) be--;
                      (se.bl_count[be]--,
                        (se.bl_count[be + 1] += 2),
                        se.bl_count[lt]--,
                        (Mt -= 2));
                    } while (0 < Mt);
                    for (be = lt; be !== 0; be--)
                      for (pe = se.bl_count[be]; pe !== 0; )
                        Oo < (xe = se.heap[--ue]) ||
                          (nn[2 * xe + 1] !== be &&
                            ((se.opt_len += (be - nn[2 * xe + 1]) * nn[2 * xe]),
                            (nn[2 * xe + 1] = be)),
                          pe--);
                  }
                })(A, q),
                oe(B, ae, A.bl_count));
            }
            function v(A, q, Q) {
              var te,
                X,
                B = -1,
                P = q[1],
                V = 0,
                K = 7,
                ae = 4;
              for (
                P === 0 && ((K = 138), (ae = 3)),
                  q[2 * (Q + 1) + 1] = 65535,
                  te = 0;
                te <= Q;
                te++
              )
                ((X = P),
                  (P = q[2 * (te + 1) + 1]),
                  (++V < K && X === P) ||
                    (V < ae
                      ? (A.bl_tree[2 * X] += V)
                      : X !== 0
                        ? (X !== B && A.bl_tree[2 * X]++, A.bl_tree[2 * _]++)
                        : V <= 10
                          ? A.bl_tree[2 * U]++
                          : A.bl_tree[2 * w]++,
                    (B = X),
                    (ae =
                      (V = 0) === P
                        ? ((K = 138), 3)
                        : X === P
                          ? ((K = 6), 3)
                          : ((K = 7), 4))));
            }
            function G(A, q, Q) {
              var te,
                X,
                B = -1,
                P = q[1],
                V = 0,
                K = 7,
                ae = 4;
              for (P === 0 && ((K = 138), (ae = 3)), te = 0; te <= Q; te++)
                if (
                  ((X = P), (P = q[2 * (te + 1) + 1]), !(++V < K && X === P))
                ) {
                  if (V < ae) for (; J(A, X, A.bl_tree), --V != 0; );
                  else
                    X !== 0
                      ? (X !== B && (J(A, X, A.bl_tree), V--),
                        J(A, _, A.bl_tree),
                        Z(A, V - 3, 2))
                      : V <= 10
                        ? (J(A, U, A.bl_tree), Z(A, V - 3, 3))
                        : (J(A, w, A.bl_tree), Z(A, V - 11, 7));
                  ((B = X),
                    (ae =
                      (V = 0) === P
                        ? ((K = 138), 3)
                        : X === P
                          ? ((K = 6), 3)
                          : ((K = 7), 4)));
                }
            }
            s(W);
            var H = !1;
            function F(A, q, Q, te) {
              (Z(A, (u << 1) + (te ? 1 : 0), 3),
                (function (X, B, P, V) {
                  (de(X),
                    M(X, P),
                    M(X, ~P),
                    a.arraySet(X.pending_buf, X.window, B, P, X.pending),
                    (X.pending += P));
                })(A, q, Q));
            }
            ((i._tr_init = function (A) {
              (H ||
                ((function () {
                  var q,
                    Q,
                    te,
                    X,
                    B,
                    P = new Array(d + 1);
                  for (X = te = 0; X < l - 1; X++)
                    for (j[X] = te, q = 0; q < 1 << E[X]; q++) x[te++] = X;
                  for (x[te - 1] = X, X = B = 0; X < 16; X++)
                    for (W[X] = B, q = 0; q < 1 << O[X]; q++) N[B++] = X;
                  for (B >>= 7; X < b; X++)
                    for (W[X] = B << 7, q = 0; q < 1 << (O[X] - 7); q++)
                      N[256 + B++] = X;
                  for (Q = 0; Q <= d; Q++) P[Q] = 0;
                  for (q = 0; q <= 143; ) ((ee[2 * q + 1] = 8), q++, P[8]++);
                  for (; q <= 255; ) ((ee[2 * q + 1] = 9), q++, P[9]++);
                  for (; q <= 279; ) ((ee[2 * q + 1] = 7), q++, P[7]++);
                  for (; q <= 287; ) ((ee[2 * q + 1] = 8), q++, P[8]++);
                  for (oe(ee, m + 1, P), q = 0; q < b; q++)
                    ((T[2 * q + 1] = 5), (T[2 * q] = ie(q, 5)));
                  ((C = new z(ee, E, p + 1, m, d)),
                    (k = new z(T, O, 0, b, d)),
                    (S = new z(new Array(0), I, 0, y, h)));
                })(),
                (H = !0)),
                (A.l_desc = new R(A.dyn_ltree, C)),
                (A.d_desc = new R(A.dyn_dtree, k)),
                (A.bl_desc = new R(A.bl_tree, S)),
                (A.bi_buf = 0),
                (A.bi_valid = 0),
                ce(A));
            }),
              (i._tr_stored_block = F),
              (i._tr_flush_block = function (A, q, Q, te) {
                var X,
                  B,
                  P = 0;
                (0 < A.level
                  ? (A.strm.data_type === 2 &&
                      (A.strm.data_type = (function (V) {
                        var K,
                          ae = 4093624447;
                        for (K = 0; K <= 31; K++, ae >>>= 1)
                          if (1 & ae && V.dyn_ltree[2 * K] !== 0) return o;
                        if (
                          V.dyn_ltree[18] !== 0 ||
                          V.dyn_ltree[20] !== 0 ||
                          V.dyn_ltree[26] !== 0
                        )
                          return c;
                        for (K = 32; K < p; K++)
                          if (V.dyn_ltree[2 * K] !== 0) return c;
                        return o;
                      })(A)),
                    ne(A, A.l_desc),
                    ne(A, A.d_desc),
                    (P = (function (V) {
                      var K;
                      for (
                        v(V, V.dyn_ltree, V.l_desc.max_code),
                          v(V, V.dyn_dtree, V.d_desc.max_code),
                          ne(V, V.bl_desc),
                          K = y - 1;
                        3 <= K && V.bl_tree[2 * Y[K] + 1] === 0;
                        K--
                      );
                      return ((V.opt_len += 3 * (K + 1) + 5 + 5 + 4), K);
                    })(A)),
                    (X = (A.opt_len + 3 + 7) >>> 3),
                    (B = (A.static_len + 3 + 7) >>> 3) <= X && (X = B))
                  : (X = B = Q + 5),
                  Q + 4 <= X && q !== -1
                    ? F(A, q, Q, te)
                    : A.strategy === 4 || B === X
                      ? (Z(A, 2 + (te ? 1 : 0), 3), $(A, ee, T))
                      : (Z(A, 4 + (te ? 1 : 0), 3),
                        (function (V, K, ae, se) {
                          var le;
                          for (
                            Z(V, K - 257, 5),
                              Z(V, ae - 1, 5),
                              Z(V, se - 4, 4),
                              le = 0;
                            le < se;
                            le++
                          )
                            Z(V, V.bl_tree[2 * Y[le] + 1], 3);
                          (G(V, V.dyn_ltree, K - 1), G(V, V.dyn_dtree, ae - 1));
                        })(
                          A,
                          A.l_desc.max_code + 1,
                          A.d_desc.max_code + 1,
                          P + 1,
                        ),
                        $(A, A.dyn_ltree, A.dyn_dtree)),
                  ce(A),
                  te && de(A));
              }),
              (i._tr_tally = function (A, q, Q) {
                return (
                  (A.pending_buf[A.d_buf + 2 * A.last_lit] = (q >>> 8) & 255),
                  (A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & q),
                  (A.pending_buf[A.l_buf + A.last_lit] = 255 & Q),
                  A.last_lit++,
                  q === 0
                    ? A.dyn_ltree[2 * Q]++
                    : (A.matches++,
                      q--,
                      A.dyn_ltree[2 * (x[Q] + p + 1)]++,
                      A.dyn_dtree[2 * L(q)]++),
                  A.last_lit === A.lit_bufsize - 1
                );
              }),
              (i._tr_align = function (A) {
                (Z(A, 2, 3),
                  J(A, D, ee),
                  (function (q) {
                    q.bi_valid === 16
                      ? (M(q, q.bi_buf), (q.bi_buf = 0), (q.bi_valid = 0))
                      : 8 <= q.bi_valid &&
                        ((q.pending_buf[q.pending++] = 255 & q.bi_buf),
                        (q.bi_buf >>= 8),
                        (q.bi_valid -= 8));
                  })(A));
              }));
          },
          { "../utils/common": 41 },
        ],
        53: [
          function (t, r, i) {
            r.exports = function () {
              ((this.input = null),
                (this.next_in = 0),
                (this.avail_in = 0),
                (this.total_in = 0),
                (this.output = null),
                (this.next_out = 0),
                (this.avail_out = 0),
                (this.total_out = 0),
                (this.msg = ""),
                (this.state = null),
                (this.data_type = 2),
                (this.adler = 0));
            };
          },
          {},
        ],
        54: [
          function (t, r, i) {
            (function (a) {
              (function (o, c) {
                if (!o.setImmediate) {
                  var s,
                    u,
                    l,
                    p,
                    m = 1,
                    b = {},
                    y = !1,
                    f = o.document,
                    d = Object.getPrototypeOf && Object.getPrototypeOf(o);
                  ((d = d && d.setTimeout ? d : o),
                    (s =
                      {}.toString.call(o.process) === "[object process]"
                        ? function (_) {
                            process.nextTick(function () {
                              h(_);
                            });
                          }
                        : (function () {
                              if (o.postMessage && !o.importScripts) {
                                var _ = !0,
                                  U = o.onmessage;
                                return (
                                  (o.onmessage = function () {
                                    _ = !1;
                                  }),
                                  o.postMessage("", "*"),
                                  (o.onmessage = U),
                                  _
                                );
                              }
                            })()
                          ? ((p = "setImmediate$" + Math.random() + "$"),
                            o.addEventListener
                              ? o.addEventListener("message", D, !1)
                              : o.attachEvent("onmessage", D),
                            function (_) {
                              o.postMessage(p + _, "*");
                            })
                          : o.MessageChannel
                            ? (((l = new MessageChannel()).port1.onmessage =
                                function (_) {
                                  h(_.data);
                                }),
                              function (_) {
                                l.port2.postMessage(_);
                              })
                            : f &&
                                "onreadystatechange" in
                                  f.createElement("script")
                              ? ((u = f.documentElement),
                                function (_) {
                                  var U = f.createElement("script");
                                  ((U.onreadystatechange = function () {
                                    (h(_),
                                      (U.onreadystatechange = null),
                                      u.removeChild(U),
                                      (U = null));
                                  }),
                                    u.appendChild(U));
                                })
                              : function (_) {
                                  setTimeout(h, 0, _);
                                }),
                    (d.setImmediate = function (_) {
                      typeof _ != "function" && (_ = new Function("" + _));
                      for (
                        var U = new Array(arguments.length - 1), w = 0;
                        w < U.length;
                        w++
                      )
                        U[w] = arguments[w + 1];
                      var E = { callback: _, args: U };
                      return ((b[m] = E), s(m), m++);
                    }),
                    (d.clearImmediate = g));
                }
                function g(_) {
                  delete b[_];
                }
                function h(_) {
                  if (y) setTimeout(h, 0, _);
                  else {
                    var U = b[_];
                    if (U) {
                      y = !0;
                      try {
                        (function (w) {
                          var E = w.callback,
                            O = w.args;
                          switch (O.length) {
                            case 0:
                              E();
                              break;
                            case 1:
                              E(O[0]);
                              break;
                            case 2:
                              E(O[0], O[1]);
                              break;
                            case 3:
                              E(O[0], O[1], O[2]);
                              break;
                            default:
                              E.apply(c, O);
                          }
                        })(U);
                      } finally {
                        (g(_), (y = !1));
                      }
                    }
                  }
                }
                function D(_) {
                  _.source === o &&
                    typeof _.data == "string" &&
                    _.data.indexOf(p) === 0 &&
                    h(+_.data.slice(p.length));
                }
              })(typeof self > "u" ? (a === void 0 ? this : a) : self);
            }).call(
              this,
              typeof fe < "u"
                ? fe
                : typeof self < "u"
                  ? self
                  : typeof window < "u"
                    ? window
                    : {},
            );
          },
          {},
        ],
      },
      {},
      [10],
    )(10);
  });
})(xd);
var rp = xd.exports,
  ip = _r,
  ap = rp;
Rt.openArrayBuffer = op;
Rt.splitPath = cp;
Rt.joinPath = sp;
function op(e) {
  return ap.loadAsync(e).then(function (n) {
    function t(o) {
      return n.file(o) !== null;
    }
    function r(o, c) {
      return n
        .file(o)
        .async("uint8array")
        .then(function (s) {
          if (c === "base64") return ip.fromByteArray(s);
          if (c) {
            var u = new TextDecoder(c);
            return u.decode(s);
          } else return s;
        });
    }
    function i(o, c) {
      n.file(o, c);
    }
    function a() {
      return n.generateAsync({ type: "arraybuffer" });
    }
    return { exists: t, read: r, write: i, toArrayBuffer: a };
  });
}
function cp(e) {
  var n = e.lastIndexOf("/");
  return n === -1
    ? { dirname: "", basename: e }
    : { dirname: e.substring(0, n), basename: e.substring(n + 1) };
}
function sp() {
  var e = Array.prototype.filter.call(arguments, function (t) {
      return t;
    }),
    n = [];
  return (
    e.forEach(function (t) {
      /^\//.test(t) ? (n = [t]) : n.push(t);
    }),
    n.join("/")
  );
}
var to = {},
  Dn = {},
  ct = {},
  Ur = we;
ct.Element = st;
ct.element = function (e, n, t) {
  return new st(e, n, t);
};
ct.text = function (e) {
  return { type: "text", value: e };
};
var _d = (ct.emptyElement = {
  first: function () {
    return null;
  },
  firstOrEmpty: function () {
    return _d;
  },
  attributes: {},
  children: [],
});
function st(e, n, t) {
  ((this.type = "element"),
    (this.name = e),
    (this.attributes = n || {}),
    (this.children = t || []));
}
st.prototype.first = function (e) {
  return Ur.find(this.children, function (n) {
    return n.name === e;
  });
};
st.prototype.firstOrEmpty = function (e) {
  return this.first(e) || _d;
};
st.prototype.getElementsByTagName = function (e) {
  var n = Ur.filter(this.children, function (t) {
    return t.name === e;
  });
  return Ud(n);
};
st.prototype.text = function () {
  if (this.children.length === 0) return "";
  if (this.children.length !== 1 || this.children[0].type !== "text")
    throw new Error("Not implemented");
  return this.children[0].value;
};
var up = {
  getElementsByTagName: function (e) {
    return Ud(
      Ur.flatten(
        this.map(function (n) {
          return n.getElementsByTagName(e);
        }, !0),
      ),
    );
  },
};
function Ud(e) {
  return Ur.extend(e, up);
}
var Td = {},
  ro = {},
  Tr = {},
  ln = {},
  vn = {};
function dp(e, n, t) {
  if ((t === void 0 && (t = Array.prototype), e && typeof t.find == "function"))
    return t.find.call(e, n);
  for (var r = 0; r < e.length; r++)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      var i = e[r];
      if (n.call(void 0, i, r, e)) return i;
    }
}
function io(e, n) {
  return (
    n === void 0 && (n = Object),
    n && typeof n.freeze == "function" ? n.freeze(e) : e
  );
}
function lp(e, n) {
  if (e === null || typeof e != "object")
    throw new TypeError("target is not an object");
  for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
  return e;
}
var wd = io({
    HTML: "text/html",
    isHTML: function (e) {
      return e === wd.HTML;
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml",
  }),
  Ed = io({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function (e) {
      return e === Ed.HTML;
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/",
  });
vn.assign = lp;
vn.find = dp;
vn.freeze = io;
vn.MIME_TYPE = wd;
vn.NAMESPACE = Ed;
var Ad = vn,
  sn = Ad.find,
  wt = Ad.NAMESPACE;
function fp(e) {
  return e !== "";
}
function hp(e) {
  return e ? e.split(/[\t\n\f\r ]+/).filter(fp) : [];
}
function pp(e, n) {
  return (e.hasOwnProperty(n) || (e[n] = !0), e);
}
function Bc(e) {
  if (!e) return [];
  var n = hp(e);
  return Object.keys(n.reduce(pp, {}));
}
function gp(e) {
  return function (n) {
    return e && e.indexOf(n) !== -1;
  };
}
function Ot(e, n) {
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
}
function Ve(e, n) {
  var t = e.prototype;
  if (!(t instanceof n)) {
    let r = function () {};
    ((r.prototype = n.prototype),
      (r = new r()),
      Ot(t, r),
      (e.prototype = t = r));
  }
  t.constructor != e &&
    (typeof e != "function" && console.error("unknown Class:" + e),
    (t.constructor = e));
}
var Xe = {},
  en = (Xe.ELEMENT_NODE = 1),
  Jn = (Xe.ATTRIBUTE_NODE = 2),
  ir = (Xe.TEXT_NODE = 3),
  Cd = (Xe.CDATA_SECTION_NODE = 4),
  Fd = (Xe.ENTITY_REFERENCE_NODE = 5),
  mp = (Xe.ENTITY_NODE = 6),
  Sd = (Xe.PROCESSING_INSTRUCTION_NODE = 7),
  Bd = (Xe.COMMENT_NODE = 8),
  kd = (Xe.DOCUMENT_NODE = 9),
  Wd = (Xe.DOCUMENT_TYPE_NODE = 10),
  bn = (Xe.DOCUMENT_FRAGMENT_NODE = 11),
  bp = (Xe.NOTATION_NODE = 12),
  Le = {},
  Ae = {};
Le.INDEX_SIZE_ERR = ((Ae[1] = "Index size error"), 1);
Le.DOMSTRING_SIZE_ERR = ((Ae[2] = "DOMString size error"), 2);
var qe = (Le.HIERARCHY_REQUEST_ERR = ((Ae[3] = "Hierarchy request error"), 3));
Le.WRONG_DOCUMENT_ERR = ((Ae[4] = "Wrong document"), 4);
var yp = (Le.INVALID_CHARACTER_ERR = ((Ae[5] = "Invalid character"), 5));
Le.NO_DATA_ALLOWED_ERR = ((Ae[6] = "No data allowed"), 6);
Le.NO_MODIFICATION_ALLOWED_ERR = ((Ae[7] = "No modification allowed"), 7);
var Rd = (Le.NOT_FOUND_ERR = ((Ae[8] = "Not found"), 8));
Le.NOT_SUPPORTED_ERR = ((Ae[9] = "Not supported"), 9);
var kc = (Le.INUSE_ATTRIBUTE_ERR = ((Ae[10] = "Attribute in use"), 10));
Le.INVALID_STATE_ERR = ((Ae[11] = "Invalid state"), 11);
Le.SYNTAX_ERR = ((Ae[12] = "Syntax error"), 12);
Le.INVALID_MODIFICATION_ERR = ((Ae[13] = "Invalid modification"), 13);
Le.NAMESPACE_ERR = ((Ae[14] = "Invalid namespace"), 14);
Le.INVALID_ACCESS_ERR = ((Ae[15] = "Invalid access"), 15);
function Te(e, n) {
  if (n instanceof Error) var t = n;
  else
    ((t = this),
      Error.call(this, Ae[e]),
      (this.message = Ae[e]),
      Error.captureStackTrace && Error.captureStackTrace(this, Te));
  return ((t.code = e), n && (this.message = this.message + ": " + n), t);
}
Te.prototype = Error.prototype;
Ot(Le, Te);
function gn() {}
gn.prototype = {
  length: 0,
  item: function (e) {
    return e >= 0 && e < this.length ? this[e] : null;
  },
  toString: function (e, n) {
    for (var t = [], r = 0; r < this.length; r++) Hn(this[r], t, e, n);
    return t.join("");
  },
  filter: function (e) {
    return Array.prototype.filter.call(this, e);
  },
  indexOf: function (e) {
    return Array.prototype.indexOf.call(this, e);
  },
};
function et(e, n) {
  ((this._node = e), (this._refresh = n), ao(this));
}
function ao(e) {
  var n = e._node._inc || e._node.ownerDocument._inc;
  if (e._inc !== n) {
    var t = e._refresh(e._node);
    if ((Hd(e, "length", t.length), !e.$$length || t.length < e.$$length))
      for (var r = t.length; r in e; r++)
        Object.prototype.hasOwnProperty.call(e, r) && delete e[r];
    (Ot(t, e), (e._inc = n));
  }
}
et.prototype.item = function (e) {
  return (ao(this), this[e] || null);
};
Ve(et, gn);
function ar() {}
function Od(e, n) {
  for (var t = e.length; t--; ) if (e[t] === n) return t;
}
function Wc(e, n, t, r) {
  if ((r ? (n[Od(n, r)] = t) : (n[n.length++] = t), e)) {
    t.ownerElement = e;
    var i = e.ownerDocument;
    i && (r && Ld(i, e, r), Dp(i, e, t));
  }
}
function Rc(e, n, t) {
  var r = Od(n, t);
  if (r >= 0) {
    for (var i = n.length - 1; r < i; ) n[r] = n[++r];
    if (((n.length = i), e)) {
      var a = e.ownerDocument;
      a && (Ld(a, e, t), (t.ownerElement = null));
    }
  } else throw new Te(Rd, new Error(e.tagName + "@" + t));
}
ar.prototype = {
  length: 0,
  item: gn.prototype.item,
  getNamedItem: function (e) {
    for (var n = this.length; n--; ) {
      var t = this[n];
      if (t.nodeName == e) return t;
    }
  },
  setNamedItem: function (e) {
    var n = e.ownerElement;
    if (n && n != this._ownerElement) throw new Te(kc);
    var t = this.getNamedItem(e.nodeName);
    return (Wc(this._ownerElement, this, e, t), t);
  },
  setNamedItemNS: function (e) {
    var n = e.ownerElement,
      t;
    if (n && n != this._ownerElement) throw new Te(kc);
    return (
      (t = this.getNamedItemNS(e.namespaceURI, e.localName)),
      Wc(this._ownerElement, this, e, t),
      t
    );
  },
  removeNamedItem: function (e) {
    var n = this.getNamedItem(e);
    return (Rc(this._ownerElement, this, n), n);
  },
  removeNamedItemNS: function (e, n) {
    var t = this.getNamedItemNS(e, n);
    return (Rc(this._ownerElement, this, t), t);
  },
  getNamedItemNS: function (e, n) {
    for (var t = this.length; t--; ) {
      var r = this[t];
      if (r.localName == n && r.namespaceURI == e) return r;
    }
    return null;
  },
};
function Id() {}
Id.prototype = {
  hasFeature: function (e, n) {
    return !0;
  },
  createDocument: function (e, n, t) {
    var r = new It();
    if (
      ((r.implementation = this),
      (r.childNodes = new gn()),
      (r.doctype = t || null),
      t && r.appendChild(t),
      n)
    ) {
      var i = r.createElementNS(e, n);
      r.appendChild(i);
    }
    return r;
  },
  createDocumentType: function (e, n, t) {
    var r = new wr();
    return (
      (r.name = e),
      (r.nodeName = e),
      (r.publicId = n || ""),
      (r.systemId = t || ""),
      r
    );
  },
};
function ve() {}
ve.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  insertBefore: function (e, n) {
    return or(this, e, n);
  },
  replaceChild: function (e, n) {
    (or(this, e, n, Pd), n && this.removeChild(n));
  },
  removeChild: function (e) {
    return Md(this, e);
  },
  appendChild: function (e) {
    return this.insertBefore(e, null);
  },
  hasChildNodes: function () {
    return this.firstChild != null;
  },
  cloneNode: function (e) {
    return la(this.ownerDocument || this, this, e);
  },
  normalize: function () {
    for (var e = this.firstChild; e; ) {
      var n = e.nextSibling;
      n && n.nodeType == ir && e.nodeType == ir
        ? (this.removeChild(n), e.appendData(n.data))
        : (e.normalize(), (e = n));
    }
  },
  isSupported: function (e, n) {
    return this.ownerDocument.implementation.hasFeature(e, n);
  },
  hasAttributes: function () {
    return this.attributes.length > 0;
  },
  lookupPrefix: function (e) {
    for (var n = this; n; ) {
      var t = n._nsMap;
      if (t) {
        for (var r in t)
          if (Object.prototype.hasOwnProperty.call(t, r) && t[r] === e)
            return r;
      }
      n = n.nodeType == Jn ? n.ownerDocument : n.parentNode;
    }
    return null;
  },
  lookupNamespaceURI: function (e) {
    for (var n = this; n; ) {
      var t = n._nsMap;
      if (t && Object.prototype.hasOwnProperty.call(t, e)) return t[e];
      n = n.nodeType == Jn ? n.ownerDocument : n.parentNode;
    }
    return null;
  },
  isDefaultNamespace: function (e) {
    var n = this.lookupPrefix(e);
    return n == null;
  },
};
function Nd(e) {
  return (
    (e == "<" && "&lt;") ||
    (e == ">" && "&gt;") ||
    (e == "&" && "&amp;") ||
    (e == '"' && "&quot;") ||
    "&#" + e.charCodeAt() + ";"
  );
}
Ot(Xe, ve);
Ot(Xe, ve.prototype);
function Et(e, n) {
  if (n(e)) return !0;
  if ((e = e.firstChild))
    do if (Et(e, n)) return !0;
    while ((e = e.nextSibling));
}
function It() {
  this.ownerDocument = this;
}
function Dp(e, n, t) {
  e && e._inc++;
  var r = t.namespaceURI;
  r === wt.XMLNS && (n._nsMap[t.prefix ? t.localName : ""] = t.value);
}
function Ld(e, n, t, r) {
  e && e._inc++;
  var i = t.namespaceURI;
  i === wt.XMLNS && delete n._nsMap[t.prefix ? t.localName : ""];
}
function oo(e, n, t) {
  if (e && e._inc) {
    e._inc++;
    var r = n.childNodes;
    if (t) r[r.length++] = t;
    else {
      for (var i = n.firstChild, a = 0; i; )
        ((r[a++] = i), (i = i.nextSibling));
      ((r.length = a), delete r[r.length]);
    }
  }
}
function Md(e, n) {
  var t = n.previousSibling,
    r = n.nextSibling;
  return (
    t ? (t.nextSibling = r) : (e.firstChild = r),
    r ? (r.previousSibling = t) : (e.lastChild = t),
    (n.parentNode = null),
    (n.previousSibling = null),
    (n.nextSibling = null),
    oo(e.ownerDocument, e),
    n
  );
}
function vp(e) {
  return (
    e &&
    (e.nodeType === ve.DOCUMENT_NODE ||
      e.nodeType === ve.DOCUMENT_FRAGMENT_NODE ||
      e.nodeType === ve.ELEMENT_NODE)
  );
}
function xp(e) {
  return (
    e &&
    (un(e) ||
      co(e) ||
      yn(e) ||
      e.nodeType === ve.DOCUMENT_FRAGMENT_NODE ||
      e.nodeType === ve.COMMENT_NODE ||
      e.nodeType === ve.PROCESSING_INSTRUCTION_NODE)
  );
}
function yn(e) {
  return e && e.nodeType === ve.DOCUMENT_TYPE_NODE;
}
function un(e) {
  return e && e.nodeType === ve.ELEMENT_NODE;
}
function co(e) {
  return e && e.nodeType === ve.TEXT_NODE;
}
function Oc(e, n) {
  var t = e.childNodes || [];
  if (sn(t, un) || yn(n)) return !1;
  var r = sn(t, yn);
  return !(n && r && t.indexOf(r) > t.indexOf(n));
}
function Ic(e, n) {
  var t = e.childNodes || [];
  function r(a) {
    return un(a) && a !== n;
  }
  if (sn(t, r)) return !1;
  var i = sn(t, yn);
  return !(n && i && t.indexOf(i) > t.indexOf(n));
}
function _p(e, n, t) {
  if (!vp(e)) throw new Te(qe, "Unexpected parent node type " + e.nodeType);
  if (t && t.parentNode !== e) throw new Te(Rd, "child not in parent");
  if (!xp(n) || (yn(n) && e.nodeType !== ve.DOCUMENT_NODE))
    throw new Te(
      qe,
      "Unexpected node type " +
        n.nodeType +
        " for parent node type " +
        e.nodeType,
    );
}
function Up(e, n, t) {
  var r = e.childNodes || [],
    i = n.childNodes || [];
  if (n.nodeType === ve.DOCUMENT_FRAGMENT_NODE) {
    var a = i.filter(un);
    if (a.length > 1 || sn(i, co))
      throw new Te(qe, "More than one element or text in fragment");
    if (a.length === 1 && !Oc(e, t))
      throw new Te(
        qe,
        "Element in fragment can not be inserted before doctype",
      );
  }
  if (un(n) && !Oc(e, t))
    throw new Te(qe, "Only one element can be added and only after doctype");
  if (yn(n)) {
    if (sn(r, yn)) throw new Te(qe, "Only one doctype is allowed");
    var o = sn(r, un);
    if (t && r.indexOf(o) < r.indexOf(t))
      throw new Te(qe, "Doctype can only be inserted before an element");
    if (!t && o)
      throw new Te(qe, "Doctype can not be appended since element is present");
  }
}
function Pd(e, n, t) {
  var r = e.childNodes || [],
    i = n.childNodes || [];
  if (n.nodeType === ve.DOCUMENT_FRAGMENT_NODE) {
    var a = i.filter(un);
    if (a.length > 1 || sn(i, co))
      throw new Te(qe, "More than one element or text in fragment");
    if (a.length === 1 && !Ic(e, t))
      throw new Te(
        qe,
        "Element in fragment can not be inserted before doctype",
      );
  }
  if (un(n) && !Ic(e, t))
    throw new Te(qe, "Only one element can be added and only after doctype");
  if (yn(n)) {
    if (
      sn(r, function (s) {
        return yn(s) && s !== t;
      })
    )
      throw new Te(qe, "Only one doctype is allowed");
    var o = sn(r, un);
    if (t && r.indexOf(o) < r.indexOf(t))
      throw new Te(qe, "Doctype can only be inserted before an element");
  }
}
function or(e, n, t, r) {
  (_p(e, n, t), e.nodeType === ve.DOCUMENT_NODE && (r || Up)(e, n, t));
  var i = n.parentNode;
  if ((i && i.removeChild(n), n.nodeType === bn)) {
    var a = n.firstChild;
    if (a == null) return n;
    var o = n.lastChild;
  } else a = o = n;
  var c = t ? t.previousSibling : e.lastChild;
  ((a.previousSibling = c),
    (o.nextSibling = t),
    c ? (c.nextSibling = a) : (e.firstChild = a),
    t == null ? (e.lastChild = o) : (t.previousSibling = o));
  do {
    a.parentNode = e;
    var s = e.ownerDocument || e;
    At(a, s);
  } while (a !== o && (a = a.nextSibling));
  return (
    oo(e.ownerDocument || e, e),
    n.nodeType == bn && (n.firstChild = n.lastChild = null),
    n
  );
}
function At(e, n) {
  if (e.ownerDocument !== n) {
    if (((e.ownerDocument = n), e.nodeType === en && e.attributes))
      for (var t = 0; t < e.attributes.length; t++) {
        var r = e.attributes.item(t);
        r && (r.ownerDocument = n);
      }
    for (var i = e.firstChild; i; ) (At(i, n), (i = i.nextSibling));
  }
}
function Tp(e, n) {
  (n.parentNode && n.parentNode.removeChild(n),
    (n.parentNode = e),
    (n.previousSibling = e.lastChild),
    (n.nextSibling = null),
    n.previousSibling
      ? (n.previousSibling.nextSibling = n)
      : (e.firstChild = n),
    (e.lastChild = n),
    oo(e.ownerDocument, e, n));
  var t = e.ownerDocument || e;
  return (At(n, t), n);
}
It.prototype = {
  nodeName: "#document",
  nodeType: kd,
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function (e, n) {
    if (e.nodeType == bn) {
      for (var t = e.firstChild; t; ) {
        var r = t.nextSibling;
        (this.insertBefore(t, n), (t = r));
      }
      return e;
    }
    return (
      or(this, e, n),
      At(e, this),
      this.documentElement === null &&
        e.nodeType === en &&
        (this.documentElement = e),
      e
    );
  },
  removeChild: function (e) {
    return (
      this.documentElement == e && (this.documentElement = null),
      Md(this, e)
    );
  },
  replaceChild: function (e, n) {
    (or(this, e, n, Pd),
      At(e, this),
      n && this.removeChild(n),
      un(e) && (this.documentElement = e));
  },
  importNode: function (e, n) {
    return Xd(this, e, n);
  },
  getElementById: function (e) {
    var n = null;
    return (
      Et(this.documentElement, function (t) {
        if (t.nodeType == en && t.getAttribute("id") == e) return ((n = t), !0);
      }),
      n
    );
  },
  getElementsByClassName: function (e) {
    var n = Bc(e);
    return new et(this, function (t) {
      var r = [];
      return (
        n.length > 0 &&
          Et(t.documentElement, function (i) {
            if (i !== t && i.nodeType === en) {
              var a = i.getAttribute("class");
              if (a) {
                var o = e === a;
                if (!o) {
                  var c = Bc(a);
                  o = n.every(gp(c));
                }
                o && r.push(i);
              }
            }
          }),
        r
      );
    });
  },
  createElement: function (e) {
    var n = new On();
    ((n.ownerDocument = this),
      (n.nodeName = e),
      (n.tagName = e),
      (n.localName = e),
      (n.childNodes = new gn()));
    var t = (n.attributes = new ar());
    return ((t._ownerElement = n), n);
  },
  createDocumentFragment: function () {
    var e = new Er();
    return ((e.ownerDocument = this), (e.childNodes = new gn()), e);
  },
  createTextNode: function (e) {
    var n = new so();
    return ((n.ownerDocument = this), n.appendData(e), n);
  },
  createComment: function (e) {
    var n = new uo();
    return ((n.ownerDocument = this), n.appendData(e), n);
  },
  createCDATASection: function (e) {
    if (e.indexOf("]]>") !== -1) throw new Te(yp, 'data contains "]]>"');
    var n = new lo();
    return ((n.ownerDocument = this), n.appendData(e), n);
  },
  createProcessingInstruction: function (e, n) {
    var t = new ho();
    return (
      (t.ownerDocument = this),
      (t.tagName = t.nodeName = t.target = e),
      (t.nodeValue = t.data = n),
      t
    );
  },
  createAttribute: function (e) {
    var n = new cr();
    return (
      (n.ownerDocument = this),
      (n.name = e),
      (n.nodeName = e),
      (n.localName = e),
      (n.specified = !0),
      n
    );
  },
  createEntityReference: function (e) {
    var n = new fo();
    return ((n.ownerDocument = this), (n.nodeName = e), n);
  },
  createElementNS: function (e, n) {
    var t = new On(),
      r = n.split(":"),
      i = (t.attributes = new ar());
    return (
      (t.childNodes = new gn()),
      (t.ownerDocument = this),
      (t.nodeName = n),
      (t.tagName = n),
      (t.namespaceURI = e),
      r.length == 2
        ? ((t.prefix = r[0]), (t.localName = r[1]))
        : (t.localName = n),
      (i._ownerElement = t),
      t
    );
  },
  createAttributeNS: function (e, n) {
    var t = new cr(),
      r = n.split(":");
    return (
      (t.ownerDocument = this),
      (t.nodeName = n),
      (t.name = n),
      (t.namespaceURI = e),
      (t.specified = !0),
      r.length == 2
        ? ((t.prefix = r[0]), (t.localName = r[1]))
        : (t.localName = n),
      t
    );
  },
};
Ve(It, ve);
function On() {
  this._nsMap = {};
}
On.prototype = {
  nodeType: en,
  hasAttribute: function (e) {
    return this.getAttributeNode(e) != null;
  },
  getAttribute: function (e) {
    var n = this.getAttributeNode(e);
    return (n && n.value) || "";
  },
  getAttributeNode: function (e) {
    return this.attributes.getNamedItem(e);
  },
  setAttribute: function (e, n) {
    var t = this.ownerDocument.createAttribute(e);
    ((t.value = t.nodeValue = "" + n), this.setAttributeNode(t));
  },
  removeAttribute: function (e) {
    var n = this.getAttributeNode(e);
    n && this.removeAttributeNode(n);
  },
  appendChild: function (e) {
    return e.nodeType === bn ? this.insertBefore(e, null) : Tp(this, e);
  },
  setAttributeNode: function (e) {
    return this.attributes.setNamedItem(e);
  },
  setAttributeNodeNS: function (e) {
    return this.attributes.setNamedItemNS(e);
  },
  removeAttributeNode: function (e) {
    return this.attributes.removeNamedItem(e.nodeName);
  },
  removeAttributeNS: function (e, n) {
    var t = this.getAttributeNodeNS(e, n);
    t && this.removeAttributeNode(t);
  },
  hasAttributeNS: function (e, n) {
    return this.getAttributeNodeNS(e, n) != null;
  },
  getAttributeNS: function (e, n) {
    var t = this.getAttributeNodeNS(e, n);
    return (t && t.value) || "";
  },
  setAttributeNS: function (e, n, t) {
    var r = this.ownerDocument.createAttributeNS(e, n);
    ((r.value = r.nodeValue = "" + t), this.setAttributeNode(r));
  },
  getAttributeNodeNS: function (e, n) {
    return this.attributes.getNamedItemNS(e, n);
  },
  getElementsByTagName: function (e) {
    return new et(this, function (n) {
      var t = [];
      return (
        Et(n, function (r) {
          r !== n &&
            r.nodeType == en &&
            (e === "*" || r.tagName == e) &&
            t.push(r);
        }),
        t
      );
    });
  },
  getElementsByTagNameNS: function (e, n) {
    return new et(this, function (t) {
      var r = [];
      return (
        Et(t, function (i) {
          i !== t &&
            i.nodeType === en &&
            (e === "*" || i.namespaceURI === e) &&
            (n === "*" || i.localName == n) &&
            r.push(i);
        }),
        r
      );
    });
  },
};
It.prototype.getElementsByTagName = On.prototype.getElementsByTagName;
It.prototype.getElementsByTagNameNS = On.prototype.getElementsByTagNameNS;
Ve(On, ve);
function cr() {}
cr.prototype.nodeType = Jn;
Ve(cr, ve);
function Nt() {}
Nt.prototype = {
  data: "",
  substringData: function (e, n) {
    return this.data.substring(e, e + n);
  },
  appendData: function (e) {
    ((e = this.data + e),
      (this.nodeValue = this.data = e),
      (this.length = e.length));
  },
  insertData: function (e, n) {
    this.replaceData(e, 0, n);
  },
  appendChild: function (e) {
    throw new Error(Ae[qe]);
  },
  deleteData: function (e, n) {
    this.replaceData(e, n, "");
  },
  replaceData: function (e, n, t) {
    var r = this.data.substring(0, e),
      i = this.data.substring(e + n);
    ((t = r + t + i),
      (this.nodeValue = this.data = t),
      (this.length = t.length));
  },
};
Ve(Nt, ve);
function so() {}
so.prototype = {
  nodeName: "#text",
  nodeType: ir,
  splitText: function (e) {
    var n = this.data,
      t = n.substring(e);
    ((n = n.substring(0, e)),
      (this.data = this.nodeValue = n),
      (this.length = n.length));
    var r = this.ownerDocument.createTextNode(t);
    return (
      this.parentNode && this.parentNode.insertBefore(r, this.nextSibling),
      r
    );
  },
};
Ve(so, Nt);
function uo() {}
uo.prototype = { nodeName: "#comment", nodeType: Bd };
Ve(uo, Nt);
function lo() {}
lo.prototype = { nodeName: "#cdata-section", nodeType: Cd };
Ve(lo, Nt);
function wr() {}
wr.prototype.nodeType = Wd;
Ve(wr, ve);
function qd() {}
qd.prototype.nodeType = bp;
Ve(qd, ve);
function zd() {}
zd.prototype.nodeType = mp;
Ve(zd, ve);
function fo() {}
fo.prototype.nodeType = Fd;
Ve(fo, ve);
function Er() {}
Er.prototype.nodeName = "#document-fragment";
Er.prototype.nodeType = bn;
Ve(Er, ve);
function ho() {}
ho.prototype.nodeType = Sd;
Ve(ho, ve);
function jd() {}
jd.prototype.serializeToString = function (e, n, t) {
  return Vd.call(e, n, t);
};
ve.prototype.toString = Vd;
function Vd(e, n) {
  var t = [],
    r = (this.nodeType == 9 && this.documentElement) || this,
    i = r.prefix,
    a = r.namespaceURI;
  if (a && i == null) {
    var i = r.lookupPrefix(a);
    if (i == null) var o = [{ namespace: a, prefix: null }];
  }
  return (Hn(this, t, e, n, o), t.join(""));
}
function Nc(e, n, t) {
  var r = e.prefix || "",
    i = e.namespaceURI;
  if (!i || (r === "xml" && i === wt.XML) || i === wt.XMLNS) return !1;
  for (var a = t.length; a--; ) {
    var o = t[a];
    if (o.prefix === r) return o.namespace !== i;
  }
  return !0;
}
function Wi(e, n, t) {
  e.push(" ", n, '="', t.replace(/[<>&"\t\n\r]/g, Nd), '"');
}
function Hn(e, n, t, r, i) {
  if ((i || (i = []), r))
    if (((e = r(e)), e)) {
      if (typeof e == "string") {
        n.push(e);
        return;
      }
    } else return;
  switch (e.nodeType) {
    case en:
      var a = e.attributes,
        o = a.length,
        g = e.firstChild,
        c = e.tagName;
      t = wt.isHTML(e.namespaceURI) || t;
      var s = c;
      if (!t && !e.prefix && e.namespaceURI) {
        for (var u, l = 0; l < a.length; l++)
          if (a.item(l).name === "xmlns") {
            u = a.item(l).value;
            break;
          }
        if (!u)
          for (var p = i.length - 1; p >= 0; p--) {
            var m = i[p];
            if (m.prefix === "" && m.namespace === e.namespaceURI) {
              u = m.namespace;
              break;
            }
          }
        if (u !== e.namespaceURI)
          for (var p = i.length - 1; p >= 0; p--) {
            var m = i[p];
            if (m.namespace === e.namespaceURI) {
              m.prefix && (s = m.prefix + ":" + c);
              break;
            }
          }
      }
      n.push("<", s);
      for (var b = 0; b < o; b++) {
        var y = a.item(b);
        y.prefix == "xmlns"
          ? i.push({ prefix: y.localName, namespace: y.value })
          : y.nodeName == "xmlns" && i.push({ prefix: "", namespace: y.value });
      }
      for (var b = 0; b < o; b++) {
        var y = a.item(b);
        if (Nc(y, t, i)) {
          var f = y.prefix || "",
            d = y.namespaceURI;
          (Wi(n, f ? "xmlns:" + f : "xmlns", d),
            i.push({ prefix: f, namespace: d }));
        }
        Hn(y, n, t, r, i);
      }
      if (c === s && Nc(e, t, i)) {
        var f = e.prefix || "",
          d = e.namespaceURI;
        (Wi(n, f ? "xmlns:" + f : "xmlns", d),
          i.push({ prefix: f, namespace: d }));
      }
      if (g || (t && !/^(?:meta|link|img|br|hr|input)$/i.test(c))) {
        if ((n.push(">"), t && /^script$/i.test(c)))
          for (; g; )
            (g.data ? n.push(g.data) : Hn(g, n, t, r, i.slice()),
              (g = g.nextSibling));
        else for (; g; ) (Hn(g, n, t, r, i.slice()), (g = g.nextSibling));
        n.push("</", s, ">");
      } else n.push("/>");
      return;
    case kd:
    case bn:
      for (var g = e.firstChild; g; )
        (Hn(g, n, t, r, i.slice()), (g = g.nextSibling));
      return;
    case Jn:
      return Wi(n, e.name, e.value);
    case ir:
      return n.push(e.data.replace(/[<&>]/g, Nd));
    case Cd:
      return n.push(
        "<![CDATA[",
        e.data.replace(/]]>/g, "]]]]><![CDATA[>"),
        "]]>",
      );
    case Bd:
      return n.push("<!--", e.data, "-->");
    case Wd:
      var h = e.publicId,
        D = e.systemId;
      if ((n.push("<!DOCTYPE ", e.name), h))
        (n.push(" PUBLIC ", h), D && D != "." && n.push(" ", D), n.push(">"));
      else if (D && D != ".") n.push(" SYSTEM ", D, ">");
      else {
        var _ = e.internalSubset;
        (_ && n.push(" [", _, "]"), n.push(">"));
      }
      return;
    case Sd:
      return n.push("<?", e.target, " ", e.data, "?>");
    case Fd:
      return n.push("&", e.nodeName, ";");
    default:
      n.push("??", e.nodeName);
  }
}
function Xd(e, n, t) {
  var r;
  switch (n.nodeType) {
    case en:
      ((r = n.cloneNode(!1)), (r.ownerDocument = e));
    case bn:
      break;
    case Jn:
      t = !0;
      break;
  }
  if (
    (r || (r = n.cloneNode(!1)),
    (r.ownerDocument = e),
    (r.parentNode = null),
    t)
  )
    for (var i = n.firstChild; i; )
      (r.appendChild(Xd(e, i, t)), (i = i.nextSibling));
  return r;
}
function la(e, n, t) {
  var r = new n.constructor();
  for (var i in n)
    if (Object.prototype.hasOwnProperty.call(n, i)) {
      var a = n[i];
      typeof a != "object" && a != r[i] && (r[i] = a);
    }
  switch (
    (n.childNodes && (r.childNodes = new gn()),
    (r.ownerDocument = e),
    r.nodeType)
  ) {
    case en:
      var o = n.attributes,
        c = (r.attributes = new ar()),
        s = o.length;
      c._ownerElement = r;
      for (var u = 0; u < s; u++) r.setAttributeNode(la(e, o.item(u), !0));
      break;
    case Jn:
      t = !0;
  }
  if (t)
    for (var l = n.firstChild; l; )
      (r.appendChild(la(e, l, t)), (l = l.nextSibling));
  return r;
}
function Hd(e, n, t) {
  e[n] = t;
}
try {
  if (Object.defineProperty) {
    let e = function (n) {
      switch (n.nodeType) {
        case en:
        case bn:
          var t = [];
          for (n = n.firstChild; n; )
            (n.nodeType !== 7 && n.nodeType !== 8 && t.push(e(n)),
              (n = n.nextSibling));
          return t.join("");
        default:
          return n.nodeValue;
      }
    };
    (Object.defineProperty(et.prototype, "length", {
      get: function () {
        return (ao(this), this.$$length);
      },
    }),
      Object.defineProperty(ve.prototype, "textContent", {
        get: function () {
          return e(this);
        },
        set: function (n) {
          switch (this.nodeType) {
            case en:
            case bn:
              for (; this.firstChild; ) this.removeChild(this.firstChild);
              (n || String(n)) &&
                this.appendChild(this.ownerDocument.createTextNode(n));
              break;
            default:
              ((this.data = n), (this.value = n), (this.nodeValue = n));
          }
        },
      }),
      (Hd = function (n, t, r) {
        n["$$" + t] = r;
      }));
  }
} catch {}
ln.DocumentType = wr;
ln.DOMException = Te;
ln.DOMImplementation = Id;
ln.Element = On;
ln.Node = ve;
ln.NodeList = gn;
ln.XMLSerializer = jd;
var Ar = {},
  $d = {};
(function (e) {
  var n = vn.freeze;
  ((e.XML_ENTITIES = n({ amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' })),
    (e.HTML_ENTITIES = n({
      Aacute: "Á",
      aacute: "á",
      Abreve: "Ă",
      abreve: "ă",
      ac: "∾",
      acd: "∿",
      acE: "∾̳",
      Acirc: "Â",
      acirc: "â",
      acute: "´",
      Acy: "А",
      acy: "а",
      AElig: "Æ",
      aelig: "æ",
      af: "⁡",
      Afr: "𝔄",
      afr: "𝔞",
      Agrave: "À",
      agrave: "à",
      alefsym: "ℵ",
      aleph: "ℵ",
      Alpha: "Α",
      alpha: "α",
      Amacr: "Ā",
      amacr: "ā",
      amalg: "⨿",
      AMP: "&",
      amp: "&",
      And: "⩓",
      and: "∧",
      andand: "⩕",
      andd: "⩜",
      andslope: "⩘",
      andv: "⩚",
      ang: "∠",
      ange: "⦤",
      angle: "∠",
      angmsd: "∡",
      angmsdaa: "⦨",
      angmsdab: "⦩",
      angmsdac: "⦪",
      angmsdad: "⦫",
      angmsdae: "⦬",
      angmsdaf: "⦭",
      angmsdag: "⦮",
      angmsdah: "⦯",
      angrt: "∟",
      angrtvb: "⊾",
      angrtvbd: "⦝",
      angsph: "∢",
      angst: "Å",
      angzarr: "⍼",
      Aogon: "Ą",
      aogon: "ą",
      Aopf: "𝔸",
      aopf: "𝕒",
      ap: "≈",
      apacir: "⩯",
      apE: "⩰",
      ape: "≊",
      apid: "≋",
      apos: "'",
      ApplyFunction: "⁡",
      approx: "≈",
      approxeq: "≊",
      Aring: "Å",
      aring: "å",
      Ascr: "𝒜",
      ascr: "𝒶",
      Assign: "≔",
      ast: "*",
      asymp: "≈",
      asympeq: "≍",
      Atilde: "Ã",
      atilde: "ã",
      Auml: "Ä",
      auml: "ä",
      awconint: "∳",
      awint: "⨑",
      backcong: "≌",
      backepsilon: "϶",
      backprime: "‵",
      backsim: "∽",
      backsimeq: "⋍",
      Backslash: "∖",
      Barv: "⫧",
      barvee: "⊽",
      Barwed: "⌆",
      barwed: "⌅",
      barwedge: "⌅",
      bbrk: "⎵",
      bbrktbrk: "⎶",
      bcong: "≌",
      Bcy: "Б",
      bcy: "б",
      bdquo: "„",
      becaus: "∵",
      Because: "∵",
      because: "∵",
      bemptyv: "⦰",
      bepsi: "϶",
      bernou: "ℬ",
      Bernoullis: "ℬ",
      Beta: "Β",
      beta: "β",
      beth: "ℶ",
      between: "≬",
      Bfr: "𝔅",
      bfr: "𝔟",
      bigcap: "⋂",
      bigcirc: "◯",
      bigcup: "⋃",
      bigodot: "⨀",
      bigoplus: "⨁",
      bigotimes: "⨂",
      bigsqcup: "⨆",
      bigstar: "★",
      bigtriangledown: "▽",
      bigtriangleup: "△",
      biguplus: "⨄",
      bigvee: "⋁",
      bigwedge: "⋀",
      bkarow: "⤍",
      blacklozenge: "⧫",
      blacksquare: "▪",
      blacktriangle: "▴",
      blacktriangledown: "▾",
      blacktriangleleft: "◂",
      blacktriangleright: "▸",
      blank: "␣",
      blk12: "▒",
      blk14: "░",
      blk34: "▓",
      block: "█",
      bne: "=⃥",
      bnequiv: "≡⃥",
      bNot: "⫭",
      bnot: "⌐",
      Bopf: "𝔹",
      bopf: "𝕓",
      bot: "⊥",
      bottom: "⊥",
      bowtie: "⋈",
      boxbox: "⧉",
      boxDL: "╗",
      boxDl: "╖",
      boxdL: "╕",
      boxdl: "┐",
      boxDR: "╔",
      boxDr: "╓",
      boxdR: "╒",
      boxdr: "┌",
      boxH: "═",
      boxh: "─",
      boxHD: "╦",
      boxHd: "╤",
      boxhD: "╥",
      boxhd: "┬",
      boxHU: "╩",
      boxHu: "╧",
      boxhU: "╨",
      boxhu: "┴",
      boxminus: "⊟",
      boxplus: "⊞",
      boxtimes: "⊠",
      boxUL: "╝",
      boxUl: "╜",
      boxuL: "╛",
      boxul: "┘",
      boxUR: "╚",
      boxUr: "╙",
      boxuR: "╘",
      boxur: "└",
      boxV: "║",
      boxv: "│",
      boxVH: "╬",
      boxVh: "╫",
      boxvH: "╪",
      boxvh: "┼",
      boxVL: "╣",
      boxVl: "╢",
      boxvL: "╡",
      boxvl: "┤",
      boxVR: "╠",
      boxVr: "╟",
      boxvR: "╞",
      boxvr: "├",
      bprime: "‵",
      Breve: "˘",
      breve: "˘",
      brvbar: "¦",
      Bscr: "ℬ",
      bscr: "𝒷",
      bsemi: "⁏",
      bsim: "∽",
      bsime: "⋍",
      bsol: "\\",
      bsolb: "⧅",
      bsolhsub: "⟈",
      bull: "•",
      bullet: "•",
      bump: "≎",
      bumpE: "⪮",
      bumpe: "≏",
      Bumpeq: "≎",
      bumpeq: "≏",
      Cacute: "Ć",
      cacute: "ć",
      Cap: "⋒",
      cap: "∩",
      capand: "⩄",
      capbrcup: "⩉",
      capcap: "⩋",
      capcup: "⩇",
      capdot: "⩀",
      CapitalDifferentialD: "ⅅ",
      caps: "∩︀",
      caret: "⁁",
      caron: "ˇ",
      Cayleys: "ℭ",
      ccaps: "⩍",
      Ccaron: "Č",
      ccaron: "č",
      Ccedil: "Ç",
      ccedil: "ç",
      Ccirc: "Ĉ",
      ccirc: "ĉ",
      Cconint: "∰",
      ccups: "⩌",
      ccupssm: "⩐",
      Cdot: "Ċ",
      cdot: "ċ",
      cedil: "¸",
      Cedilla: "¸",
      cemptyv: "⦲",
      cent: "¢",
      CenterDot: "·",
      centerdot: "·",
      Cfr: "ℭ",
      cfr: "𝔠",
      CHcy: "Ч",
      chcy: "ч",
      check: "✓",
      checkmark: "✓",
      Chi: "Χ",
      chi: "χ",
      cir: "○",
      circ: "ˆ",
      circeq: "≗",
      circlearrowleft: "↺",
      circlearrowright: "↻",
      circledast: "⊛",
      circledcirc: "⊚",
      circleddash: "⊝",
      CircleDot: "⊙",
      circledR: "®",
      circledS: "Ⓢ",
      CircleMinus: "⊖",
      CirclePlus: "⊕",
      CircleTimes: "⊗",
      cirE: "⧃",
      cire: "≗",
      cirfnint: "⨐",
      cirmid: "⫯",
      cirscir: "⧂",
      ClockwiseContourIntegral: "∲",
      CloseCurlyDoubleQuote: "”",
      CloseCurlyQuote: "’",
      clubs: "♣",
      clubsuit: "♣",
      Colon: "∷",
      colon: ":",
      Colone: "⩴",
      colone: "≔",
      coloneq: "≔",
      comma: ",",
      commat: "@",
      comp: "∁",
      compfn: "∘",
      complement: "∁",
      complexes: "ℂ",
      cong: "≅",
      congdot: "⩭",
      Congruent: "≡",
      Conint: "∯",
      conint: "∮",
      ContourIntegral: "∮",
      Copf: "ℂ",
      copf: "𝕔",
      coprod: "∐",
      Coproduct: "∐",
      COPY: "©",
      copy: "©",
      copysr: "℗",
      CounterClockwiseContourIntegral: "∳",
      crarr: "↵",
      Cross: "⨯",
      cross: "✗",
      Cscr: "𝒞",
      cscr: "𝒸",
      csub: "⫏",
      csube: "⫑",
      csup: "⫐",
      csupe: "⫒",
      ctdot: "⋯",
      cudarrl: "⤸",
      cudarrr: "⤵",
      cuepr: "⋞",
      cuesc: "⋟",
      cularr: "↶",
      cularrp: "⤽",
      Cup: "⋓",
      cup: "∪",
      cupbrcap: "⩈",
      CupCap: "≍",
      cupcap: "⩆",
      cupcup: "⩊",
      cupdot: "⊍",
      cupor: "⩅",
      cups: "∪︀",
      curarr: "↷",
      curarrm: "⤼",
      curlyeqprec: "⋞",
      curlyeqsucc: "⋟",
      curlyvee: "⋎",
      curlywedge: "⋏",
      curren: "¤",
      curvearrowleft: "↶",
      curvearrowright: "↷",
      cuvee: "⋎",
      cuwed: "⋏",
      cwconint: "∲",
      cwint: "∱",
      cylcty: "⌭",
      Dagger: "‡",
      dagger: "†",
      daleth: "ℸ",
      Darr: "↡",
      dArr: "⇓",
      darr: "↓",
      dash: "‐",
      Dashv: "⫤",
      dashv: "⊣",
      dbkarow: "⤏",
      dblac: "˝",
      Dcaron: "Ď",
      dcaron: "ď",
      Dcy: "Д",
      dcy: "д",
      DD: "ⅅ",
      dd: "ⅆ",
      ddagger: "‡",
      ddarr: "⇊",
      DDotrahd: "⤑",
      ddotseq: "⩷",
      deg: "°",
      Del: "∇",
      Delta: "Δ",
      delta: "δ",
      demptyv: "⦱",
      dfisht: "⥿",
      Dfr: "𝔇",
      dfr: "𝔡",
      dHar: "⥥",
      dharl: "⇃",
      dharr: "⇂",
      DiacriticalAcute: "´",
      DiacriticalDot: "˙",
      DiacriticalDoubleAcute: "˝",
      DiacriticalGrave: "`",
      DiacriticalTilde: "˜",
      diam: "⋄",
      Diamond: "⋄",
      diamond: "⋄",
      diamondsuit: "♦",
      diams: "♦",
      die: "¨",
      DifferentialD: "ⅆ",
      digamma: "ϝ",
      disin: "⋲",
      div: "÷",
      divide: "÷",
      divideontimes: "⋇",
      divonx: "⋇",
      DJcy: "Ђ",
      djcy: "ђ",
      dlcorn: "⌞",
      dlcrop: "⌍",
      dollar: "$",
      Dopf: "𝔻",
      dopf: "𝕕",
      Dot: "¨",
      dot: "˙",
      DotDot: "⃜",
      doteq: "≐",
      doteqdot: "≑",
      DotEqual: "≐",
      dotminus: "∸",
      dotplus: "∔",
      dotsquare: "⊡",
      doublebarwedge: "⌆",
      DoubleContourIntegral: "∯",
      DoubleDot: "¨",
      DoubleDownArrow: "⇓",
      DoubleLeftArrow: "⇐",
      DoubleLeftRightArrow: "⇔",
      DoubleLeftTee: "⫤",
      DoubleLongLeftArrow: "⟸",
      DoubleLongLeftRightArrow: "⟺",
      DoubleLongRightArrow: "⟹",
      DoubleRightArrow: "⇒",
      DoubleRightTee: "⊨",
      DoubleUpArrow: "⇑",
      DoubleUpDownArrow: "⇕",
      DoubleVerticalBar: "∥",
      DownArrow: "↓",
      Downarrow: "⇓",
      downarrow: "↓",
      DownArrowBar: "⤓",
      DownArrowUpArrow: "⇵",
      DownBreve: "̑",
      downdownarrows: "⇊",
      downharpoonleft: "⇃",
      downharpoonright: "⇂",
      DownLeftRightVector: "⥐",
      DownLeftTeeVector: "⥞",
      DownLeftVector: "↽",
      DownLeftVectorBar: "⥖",
      DownRightTeeVector: "⥟",
      DownRightVector: "⇁",
      DownRightVectorBar: "⥗",
      DownTee: "⊤",
      DownTeeArrow: "↧",
      drbkarow: "⤐",
      drcorn: "⌟",
      drcrop: "⌌",
      Dscr: "𝒟",
      dscr: "𝒹",
      DScy: "Ѕ",
      dscy: "ѕ",
      dsol: "⧶",
      Dstrok: "Đ",
      dstrok: "đ",
      dtdot: "⋱",
      dtri: "▿",
      dtrif: "▾",
      duarr: "⇵",
      duhar: "⥯",
      dwangle: "⦦",
      DZcy: "Џ",
      dzcy: "џ",
      dzigrarr: "⟿",
      Eacute: "É",
      eacute: "é",
      easter: "⩮",
      Ecaron: "Ě",
      ecaron: "ě",
      ecir: "≖",
      Ecirc: "Ê",
      ecirc: "ê",
      ecolon: "≕",
      Ecy: "Э",
      ecy: "э",
      eDDot: "⩷",
      Edot: "Ė",
      eDot: "≑",
      edot: "ė",
      ee: "ⅇ",
      efDot: "≒",
      Efr: "𝔈",
      efr: "𝔢",
      eg: "⪚",
      Egrave: "È",
      egrave: "è",
      egs: "⪖",
      egsdot: "⪘",
      el: "⪙",
      Element: "∈",
      elinters: "⏧",
      ell: "ℓ",
      els: "⪕",
      elsdot: "⪗",
      Emacr: "Ē",
      emacr: "ē",
      empty: "∅",
      emptyset: "∅",
      EmptySmallSquare: "◻",
      emptyv: "∅",
      EmptyVerySmallSquare: "▫",
      emsp: " ",
      emsp13: " ",
      emsp14: " ",
      ENG: "Ŋ",
      eng: "ŋ",
      ensp: " ",
      Eogon: "Ę",
      eogon: "ę",
      Eopf: "𝔼",
      eopf: "𝕖",
      epar: "⋕",
      eparsl: "⧣",
      eplus: "⩱",
      epsi: "ε",
      Epsilon: "Ε",
      epsilon: "ε",
      epsiv: "ϵ",
      eqcirc: "≖",
      eqcolon: "≕",
      eqsim: "≂",
      eqslantgtr: "⪖",
      eqslantless: "⪕",
      Equal: "⩵",
      equals: "=",
      EqualTilde: "≂",
      equest: "≟",
      Equilibrium: "⇌",
      equiv: "≡",
      equivDD: "⩸",
      eqvparsl: "⧥",
      erarr: "⥱",
      erDot: "≓",
      Escr: "ℰ",
      escr: "ℯ",
      esdot: "≐",
      Esim: "⩳",
      esim: "≂",
      Eta: "Η",
      eta: "η",
      ETH: "Ð",
      eth: "ð",
      Euml: "Ë",
      euml: "ë",
      euro: "€",
      excl: "!",
      exist: "∃",
      Exists: "∃",
      expectation: "ℰ",
      ExponentialE: "ⅇ",
      exponentiale: "ⅇ",
      fallingdotseq: "≒",
      Fcy: "Ф",
      fcy: "ф",
      female: "♀",
      ffilig: "ﬃ",
      fflig: "ﬀ",
      ffllig: "ﬄ",
      Ffr: "𝔉",
      ffr: "𝔣",
      filig: "ﬁ",
      FilledSmallSquare: "◼",
      FilledVerySmallSquare: "▪",
      fjlig: "fj",
      flat: "♭",
      fllig: "ﬂ",
      fltns: "▱",
      fnof: "ƒ",
      Fopf: "𝔽",
      fopf: "𝕗",
      ForAll: "∀",
      forall: "∀",
      fork: "⋔",
      forkv: "⫙",
      Fouriertrf: "ℱ",
      fpartint: "⨍",
      frac12: "½",
      frac13: "⅓",
      frac14: "¼",
      frac15: "⅕",
      frac16: "⅙",
      frac18: "⅛",
      frac23: "⅔",
      frac25: "⅖",
      frac34: "¾",
      frac35: "⅗",
      frac38: "⅜",
      frac45: "⅘",
      frac56: "⅚",
      frac58: "⅝",
      frac78: "⅞",
      frasl: "⁄",
      frown: "⌢",
      Fscr: "ℱ",
      fscr: "𝒻",
      gacute: "ǵ",
      Gamma: "Γ",
      gamma: "γ",
      Gammad: "Ϝ",
      gammad: "ϝ",
      gap: "⪆",
      Gbreve: "Ğ",
      gbreve: "ğ",
      Gcedil: "Ģ",
      Gcirc: "Ĝ",
      gcirc: "ĝ",
      Gcy: "Г",
      gcy: "г",
      Gdot: "Ġ",
      gdot: "ġ",
      gE: "≧",
      ge: "≥",
      gEl: "⪌",
      gel: "⋛",
      geq: "≥",
      geqq: "≧",
      geqslant: "⩾",
      ges: "⩾",
      gescc: "⪩",
      gesdot: "⪀",
      gesdoto: "⪂",
      gesdotol: "⪄",
      gesl: "⋛︀",
      gesles: "⪔",
      Gfr: "𝔊",
      gfr: "𝔤",
      Gg: "⋙",
      gg: "≫",
      ggg: "⋙",
      gimel: "ℷ",
      GJcy: "Ѓ",
      gjcy: "ѓ",
      gl: "≷",
      gla: "⪥",
      glE: "⪒",
      glj: "⪤",
      gnap: "⪊",
      gnapprox: "⪊",
      gnE: "≩",
      gne: "⪈",
      gneq: "⪈",
      gneqq: "≩",
      gnsim: "⋧",
      Gopf: "𝔾",
      gopf: "𝕘",
      grave: "`",
      GreaterEqual: "≥",
      GreaterEqualLess: "⋛",
      GreaterFullEqual: "≧",
      GreaterGreater: "⪢",
      GreaterLess: "≷",
      GreaterSlantEqual: "⩾",
      GreaterTilde: "≳",
      Gscr: "𝒢",
      gscr: "ℊ",
      gsim: "≳",
      gsime: "⪎",
      gsiml: "⪐",
      Gt: "≫",
      GT: ">",
      gt: ">",
      gtcc: "⪧",
      gtcir: "⩺",
      gtdot: "⋗",
      gtlPar: "⦕",
      gtquest: "⩼",
      gtrapprox: "⪆",
      gtrarr: "⥸",
      gtrdot: "⋗",
      gtreqless: "⋛",
      gtreqqless: "⪌",
      gtrless: "≷",
      gtrsim: "≳",
      gvertneqq: "≩︀",
      gvnE: "≩︀",
      Hacek: "ˇ",
      hairsp: " ",
      half: "½",
      hamilt: "ℋ",
      HARDcy: "Ъ",
      hardcy: "ъ",
      hArr: "⇔",
      harr: "↔",
      harrcir: "⥈",
      harrw: "↭",
      Hat: "^",
      hbar: "ℏ",
      Hcirc: "Ĥ",
      hcirc: "ĥ",
      hearts: "♥",
      heartsuit: "♥",
      hellip: "…",
      hercon: "⊹",
      Hfr: "ℌ",
      hfr: "𝔥",
      HilbertSpace: "ℋ",
      hksearow: "⤥",
      hkswarow: "⤦",
      hoarr: "⇿",
      homtht: "∻",
      hookleftarrow: "↩",
      hookrightarrow: "↪",
      Hopf: "ℍ",
      hopf: "𝕙",
      horbar: "―",
      HorizontalLine: "─",
      Hscr: "ℋ",
      hscr: "𝒽",
      hslash: "ℏ",
      Hstrok: "Ħ",
      hstrok: "ħ",
      HumpDownHump: "≎",
      HumpEqual: "≏",
      hybull: "⁃",
      hyphen: "‐",
      Iacute: "Í",
      iacute: "í",
      ic: "⁣",
      Icirc: "Î",
      icirc: "î",
      Icy: "И",
      icy: "и",
      Idot: "İ",
      IEcy: "Е",
      iecy: "е",
      iexcl: "¡",
      iff: "⇔",
      Ifr: "ℑ",
      ifr: "𝔦",
      Igrave: "Ì",
      igrave: "ì",
      ii: "ⅈ",
      iiiint: "⨌",
      iiint: "∭",
      iinfin: "⧜",
      iiota: "℩",
      IJlig: "Ĳ",
      ijlig: "ĳ",
      Im: "ℑ",
      Imacr: "Ī",
      imacr: "ī",
      image: "ℑ",
      ImaginaryI: "ⅈ",
      imagline: "ℐ",
      imagpart: "ℑ",
      imath: "ı",
      imof: "⊷",
      imped: "Ƶ",
      Implies: "⇒",
      in: "∈",
      incare: "℅",
      infin: "∞",
      infintie: "⧝",
      inodot: "ı",
      Int: "∬",
      int: "∫",
      intcal: "⊺",
      integers: "ℤ",
      Integral: "∫",
      intercal: "⊺",
      Intersection: "⋂",
      intlarhk: "⨗",
      intprod: "⨼",
      InvisibleComma: "⁣",
      InvisibleTimes: "⁢",
      IOcy: "Ё",
      iocy: "ё",
      Iogon: "Į",
      iogon: "į",
      Iopf: "𝕀",
      iopf: "𝕚",
      Iota: "Ι",
      iota: "ι",
      iprod: "⨼",
      iquest: "¿",
      Iscr: "ℐ",
      iscr: "𝒾",
      isin: "∈",
      isindot: "⋵",
      isinE: "⋹",
      isins: "⋴",
      isinsv: "⋳",
      isinv: "∈",
      it: "⁢",
      Itilde: "Ĩ",
      itilde: "ĩ",
      Iukcy: "І",
      iukcy: "і",
      Iuml: "Ï",
      iuml: "ï",
      Jcirc: "Ĵ",
      jcirc: "ĵ",
      Jcy: "Й",
      jcy: "й",
      Jfr: "𝔍",
      jfr: "𝔧",
      jmath: "ȷ",
      Jopf: "𝕁",
      jopf: "𝕛",
      Jscr: "𝒥",
      jscr: "𝒿",
      Jsercy: "Ј",
      jsercy: "ј",
      Jukcy: "Є",
      jukcy: "є",
      Kappa: "Κ",
      kappa: "κ",
      kappav: "ϰ",
      Kcedil: "Ķ",
      kcedil: "ķ",
      Kcy: "К",
      kcy: "к",
      Kfr: "𝔎",
      kfr: "𝔨",
      kgreen: "ĸ",
      KHcy: "Х",
      khcy: "х",
      KJcy: "Ќ",
      kjcy: "ќ",
      Kopf: "𝕂",
      kopf: "𝕜",
      Kscr: "𝒦",
      kscr: "𝓀",
      lAarr: "⇚",
      Lacute: "Ĺ",
      lacute: "ĺ",
      laemptyv: "⦴",
      lagran: "ℒ",
      Lambda: "Λ",
      lambda: "λ",
      Lang: "⟪",
      lang: "⟨",
      langd: "⦑",
      langle: "⟨",
      lap: "⪅",
      Laplacetrf: "ℒ",
      laquo: "«",
      Larr: "↞",
      lArr: "⇐",
      larr: "←",
      larrb: "⇤",
      larrbfs: "⤟",
      larrfs: "⤝",
      larrhk: "↩",
      larrlp: "↫",
      larrpl: "⤹",
      larrsim: "⥳",
      larrtl: "↢",
      lat: "⪫",
      lAtail: "⤛",
      latail: "⤙",
      late: "⪭",
      lates: "⪭︀",
      lBarr: "⤎",
      lbarr: "⤌",
      lbbrk: "❲",
      lbrace: "{",
      lbrack: "[",
      lbrke: "⦋",
      lbrksld: "⦏",
      lbrkslu: "⦍",
      Lcaron: "Ľ",
      lcaron: "ľ",
      Lcedil: "Ļ",
      lcedil: "ļ",
      lceil: "⌈",
      lcub: "{",
      Lcy: "Л",
      lcy: "л",
      ldca: "⤶",
      ldquo: "“",
      ldquor: "„",
      ldrdhar: "⥧",
      ldrushar: "⥋",
      ldsh: "↲",
      lE: "≦",
      le: "≤",
      LeftAngleBracket: "⟨",
      LeftArrow: "←",
      Leftarrow: "⇐",
      leftarrow: "←",
      LeftArrowBar: "⇤",
      LeftArrowRightArrow: "⇆",
      leftarrowtail: "↢",
      LeftCeiling: "⌈",
      LeftDoubleBracket: "⟦",
      LeftDownTeeVector: "⥡",
      LeftDownVector: "⇃",
      LeftDownVectorBar: "⥙",
      LeftFloor: "⌊",
      leftharpoondown: "↽",
      leftharpoonup: "↼",
      leftleftarrows: "⇇",
      LeftRightArrow: "↔",
      Leftrightarrow: "⇔",
      leftrightarrow: "↔",
      leftrightarrows: "⇆",
      leftrightharpoons: "⇋",
      leftrightsquigarrow: "↭",
      LeftRightVector: "⥎",
      LeftTee: "⊣",
      LeftTeeArrow: "↤",
      LeftTeeVector: "⥚",
      leftthreetimes: "⋋",
      LeftTriangle: "⊲",
      LeftTriangleBar: "⧏",
      LeftTriangleEqual: "⊴",
      LeftUpDownVector: "⥑",
      LeftUpTeeVector: "⥠",
      LeftUpVector: "↿",
      LeftUpVectorBar: "⥘",
      LeftVector: "↼",
      LeftVectorBar: "⥒",
      lEg: "⪋",
      leg: "⋚",
      leq: "≤",
      leqq: "≦",
      leqslant: "⩽",
      les: "⩽",
      lescc: "⪨",
      lesdot: "⩿",
      lesdoto: "⪁",
      lesdotor: "⪃",
      lesg: "⋚︀",
      lesges: "⪓",
      lessapprox: "⪅",
      lessdot: "⋖",
      lesseqgtr: "⋚",
      lesseqqgtr: "⪋",
      LessEqualGreater: "⋚",
      LessFullEqual: "≦",
      LessGreater: "≶",
      lessgtr: "≶",
      LessLess: "⪡",
      lesssim: "≲",
      LessSlantEqual: "⩽",
      LessTilde: "≲",
      lfisht: "⥼",
      lfloor: "⌊",
      Lfr: "𝔏",
      lfr: "𝔩",
      lg: "≶",
      lgE: "⪑",
      lHar: "⥢",
      lhard: "↽",
      lharu: "↼",
      lharul: "⥪",
      lhblk: "▄",
      LJcy: "Љ",
      ljcy: "љ",
      Ll: "⋘",
      ll: "≪",
      llarr: "⇇",
      llcorner: "⌞",
      Lleftarrow: "⇚",
      llhard: "⥫",
      lltri: "◺",
      Lmidot: "Ŀ",
      lmidot: "ŀ",
      lmoust: "⎰",
      lmoustache: "⎰",
      lnap: "⪉",
      lnapprox: "⪉",
      lnE: "≨",
      lne: "⪇",
      lneq: "⪇",
      lneqq: "≨",
      lnsim: "⋦",
      loang: "⟬",
      loarr: "⇽",
      lobrk: "⟦",
      LongLeftArrow: "⟵",
      Longleftarrow: "⟸",
      longleftarrow: "⟵",
      LongLeftRightArrow: "⟷",
      Longleftrightarrow: "⟺",
      longleftrightarrow: "⟷",
      longmapsto: "⟼",
      LongRightArrow: "⟶",
      Longrightarrow: "⟹",
      longrightarrow: "⟶",
      looparrowleft: "↫",
      looparrowright: "↬",
      lopar: "⦅",
      Lopf: "𝕃",
      lopf: "𝕝",
      loplus: "⨭",
      lotimes: "⨴",
      lowast: "∗",
      lowbar: "_",
      LowerLeftArrow: "↙",
      LowerRightArrow: "↘",
      loz: "◊",
      lozenge: "◊",
      lozf: "⧫",
      lpar: "(",
      lparlt: "⦓",
      lrarr: "⇆",
      lrcorner: "⌟",
      lrhar: "⇋",
      lrhard: "⥭",
      lrm: "‎",
      lrtri: "⊿",
      lsaquo: "‹",
      Lscr: "ℒ",
      lscr: "𝓁",
      Lsh: "↰",
      lsh: "↰",
      lsim: "≲",
      lsime: "⪍",
      lsimg: "⪏",
      lsqb: "[",
      lsquo: "‘",
      lsquor: "‚",
      Lstrok: "Ł",
      lstrok: "ł",
      Lt: "≪",
      LT: "<",
      lt: "<",
      ltcc: "⪦",
      ltcir: "⩹",
      ltdot: "⋖",
      lthree: "⋋",
      ltimes: "⋉",
      ltlarr: "⥶",
      ltquest: "⩻",
      ltri: "◃",
      ltrie: "⊴",
      ltrif: "◂",
      ltrPar: "⦖",
      lurdshar: "⥊",
      luruhar: "⥦",
      lvertneqq: "≨︀",
      lvnE: "≨︀",
      macr: "¯",
      male: "♂",
      malt: "✠",
      maltese: "✠",
      Map: "⤅",
      map: "↦",
      mapsto: "↦",
      mapstodown: "↧",
      mapstoleft: "↤",
      mapstoup: "↥",
      marker: "▮",
      mcomma: "⨩",
      Mcy: "М",
      mcy: "м",
      mdash: "—",
      mDDot: "∺",
      measuredangle: "∡",
      MediumSpace: " ",
      Mellintrf: "ℳ",
      Mfr: "𝔐",
      mfr: "𝔪",
      mho: "℧",
      micro: "µ",
      mid: "∣",
      midast: "*",
      midcir: "⫰",
      middot: "·",
      minus: "−",
      minusb: "⊟",
      minusd: "∸",
      minusdu: "⨪",
      MinusPlus: "∓",
      mlcp: "⫛",
      mldr: "…",
      mnplus: "∓",
      models: "⊧",
      Mopf: "𝕄",
      mopf: "𝕞",
      mp: "∓",
      Mscr: "ℳ",
      mscr: "𝓂",
      mstpos: "∾",
      Mu: "Μ",
      mu: "μ",
      multimap: "⊸",
      mumap: "⊸",
      nabla: "∇",
      Nacute: "Ń",
      nacute: "ń",
      nang: "∠⃒",
      nap: "≉",
      napE: "⩰̸",
      napid: "≋̸",
      napos: "ŉ",
      napprox: "≉",
      natur: "♮",
      natural: "♮",
      naturals: "ℕ",
      nbsp: " ",
      nbump: "≎̸",
      nbumpe: "≏̸",
      ncap: "⩃",
      Ncaron: "Ň",
      ncaron: "ň",
      Ncedil: "Ņ",
      ncedil: "ņ",
      ncong: "≇",
      ncongdot: "⩭̸",
      ncup: "⩂",
      Ncy: "Н",
      ncy: "н",
      ndash: "–",
      ne: "≠",
      nearhk: "⤤",
      neArr: "⇗",
      nearr: "↗",
      nearrow: "↗",
      nedot: "≐̸",
      NegativeMediumSpace: "​",
      NegativeThickSpace: "​",
      NegativeThinSpace: "​",
      NegativeVeryThinSpace: "​",
      nequiv: "≢",
      nesear: "⤨",
      nesim: "≂̸",
      NestedGreaterGreater: "≫",
      NestedLessLess: "≪",
      NewLine: `
`,
      nexist: "∄",
      nexists: "∄",
      Nfr: "𝔑",
      nfr: "𝔫",
      ngE: "≧̸",
      nge: "≱",
      ngeq: "≱",
      ngeqq: "≧̸",
      ngeqslant: "⩾̸",
      nges: "⩾̸",
      nGg: "⋙̸",
      ngsim: "≵",
      nGt: "≫⃒",
      ngt: "≯",
      ngtr: "≯",
      nGtv: "≫̸",
      nhArr: "⇎",
      nharr: "↮",
      nhpar: "⫲",
      ni: "∋",
      nis: "⋼",
      nisd: "⋺",
      niv: "∋",
      NJcy: "Њ",
      njcy: "њ",
      nlArr: "⇍",
      nlarr: "↚",
      nldr: "‥",
      nlE: "≦̸",
      nle: "≰",
      nLeftarrow: "⇍",
      nleftarrow: "↚",
      nLeftrightarrow: "⇎",
      nleftrightarrow: "↮",
      nleq: "≰",
      nleqq: "≦̸",
      nleqslant: "⩽̸",
      nles: "⩽̸",
      nless: "≮",
      nLl: "⋘̸",
      nlsim: "≴",
      nLt: "≪⃒",
      nlt: "≮",
      nltri: "⋪",
      nltrie: "⋬",
      nLtv: "≪̸",
      nmid: "∤",
      NoBreak: "⁠",
      NonBreakingSpace: " ",
      Nopf: "ℕ",
      nopf: "𝕟",
      Not: "⫬",
      not: "¬",
      NotCongruent: "≢",
      NotCupCap: "≭",
      NotDoubleVerticalBar: "∦",
      NotElement: "∉",
      NotEqual: "≠",
      NotEqualTilde: "≂̸",
      NotExists: "∄",
      NotGreater: "≯",
      NotGreaterEqual: "≱",
      NotGreaterFullEqual: "≧̸",
      NotGreaterGreater: "≫̸",
      NotGreaterLess: "≹",
      NotGreaterSlantEqual: "⩾̸",
      NotGreaterTilde: "≵",
      NotHumpDownHump: "≎̸",
      NotHumpEqual: "≏̸",
      notin: "∉",
      notindot: "⋵̸",
      notinE: "⋹̸",
      notinva: "∉",
      notinvb: "⋷",
      notinvc: "⋶",
      NotLeftTriangle: "⋪",
      NotLeftTriangleBar: "⧏̸",
      NotLeftTriangleEqual: "⋬",
      NotLess: "≮",
      NotLessEqual: "≰",
      NotLessGreater: "≸",
      NotLessLess: "≪̸",
      NotLessSlantEqual: "⩽̸",
      NotLessTilde: "≴",
      NotNestedGreaterGreater: "⪢̸",
      NotNestedLessLess: "⪡̸",
      notni: "∌",
      notniva: "∌",
      notnivb: "⋾",
      notnivc: "⋽",
      NotPrecedes: "⊀",
      NotPrecedesEqual: "⪯̸",
      NotPrecedesSlantEqual: "⋠",
      NotReverseElement: "∌",
      NotRightTriangle: "⋫",
      NotRightTriangleBar: "⧐̸",
      NotRightTriangleEqual: "⋭",
      NotSquareSubset: "⊏̸",
      NotSquareSubsetEqual: "⋢",
      NotSquareSuperset: "⊐̸",
      NotSquareSupersetEqual: "⋣",
      NotSubset: "⊂⃒",
      NotSubsetEqual: "⊈",
      NotSucceeds: "⊁",
      NotSucceedsEqual: "⪰̸",
      NotSucceedsSlantEqual: "⋡",
      NotSucceedsTilde: "≿̸",
      NotSuperset: "⊃⃒",
      NotSupersetEqual: "⊉",
      NotTilde: "≁",
      NotTildeEqual: "≄",
      NotTildeFullEqual: "≇",
      NotTildeTilde: "≉",
      NotVerticalBar: "∤",
      npar: "∦",
      nparallel: "∦",
      nparsl: "⫽⃥",
      npart: "∂̸",
      npolint: "⨔",
      npr: "⊀",
      nprcue: "⋠",
      npre: "⪯̸",
      nprec: "⊀",
      npreceq: "⪯̸",
      nrArr: "⇏",
      nrarr: "↛",
      nrarrc: "⤳̸",
      nrarrw: "↝̸",
      nRightarrow: "⇏",
      nrightarrow: "↛",
      nrtri: "⋫",
      nrtrie: "⋭",
      nsc: "⊁",
      nsccue: "⋡",
      nsce: "⪰̸",
      Nscr: "𝒩",
      nscr: "𝓃",
      nshortmid: "∤",
      nshortparallel: "∦",
      nsim: "≁",
      nsime: "≄",
      nsimeq: "≄",
      nsmid: "∤",
      nspar: "∦",
      nsqsube: "⋢",
      nsqsupe: "⋣",
      nsub: "⊄",
      nsubE: "⫅̸",
      nsube: "⊈",
      nsubset: "⊂⃒",
      nsubseteq: "⊈",
      nsubseteqq: "⫅̸",
      nsucc: "⊁",
      nsucceq: "⪰̸",
      nsup: "⊅",
      nsupE: "⫆̸",
      nsupe: "⊉",
      nsupset: "⊃⃒",
      nsupseteq: "⊉",
      nsupseteqq: "⫆̸",
      ntgl: "≹",
      Ntilde: "Ñ",
      ntilde: "ñ",
      ntlg: "≸",
      ntriangleleft: "⋪",
      ntrianglelefteq: "⋬",
      ntriangleright: "⋫",
      ntrianglerighteq: "⋭",
      Nu: "Ν",
      nu: "ν",
      num: "#",
      numero: "№",
      numsp: " ",
      nvap: "≍⃒",
      nVDash: "⊯",
      nVdash: "⊮",
      nvDash: "⊭",
      nvdash: "⊬",
      nvge: "≥⃒",
      nvgt: ">⃒",
      nvHarr: "⤄",
      nvinfin: "⧞",
      nvlArr: "⤂",
      nvle: "≤⃒",
      nvlt: "<⃒",
      nvltrie: "⊴⃒",
      nvrArr: "⤃",
      nvrtrie: "⊵⃒",
      nvsim: "∼⃒",
      nwarhk: "⤣",
      nwArr: "⇖",
      nwarr: "↖",
      nwarrow: "↖",
      nwnear: "⤧",
      Oacute: "Ó",
      oacute: "ó",
      oast: "⊛",
      ocir: "⊚",
      Ocirc: "Ô",
      ocirc: "ô",
      Ocy: "О",
      ocy: "о",
      odash: "⊝",
      Odblac: "Ő",
      odblac: "ő",
      odiv: "⨸",
      odot: "⊙",
      odsold: "⦼",
      OElig: "Œ",
      oelig: "œ",
      ofcir: "⦿",
      Ofr: "𝔒",
      ofr: "𝔬",
      ogon: "˛",
      Ograve: "Ò",
      ograve: "ò",
      ogt: "⧁",
      ohbar: "⦵",
      ohm: "Ω",
      oint: "∮",
      olarr: "↺",
      olcir: "⦾",
      olcross: "⦻",
      oline: "‾",
      olt: "⧀",
      Omacr: "Ō",
      omacr: "ō",
      Omega: "Ω",
      omega: "ω",
      Omicron: "Ο",
      omicron: "ο",
      omid: "⦶",
      ominus: "⊖",
      Oopf: "𝕆",
      oopf: "𝕠",
      opar: "⦷",
      OpenCurlyDoubleQuote: "“",
      OpenCurlyQuote: "‘",
      operp: "⦹",
      oplus: "⊕",
      Or: "⩔",
      or: "∨",
      orarr: "↻",
      ord: "⩝",
      order: "ℴ",
      orderof: "ℴ",
      ordf: "ª",
      ordm: "º",
      origof: "⊶",
      oror: "⩖",
      orslope: "⩗",
      orv: "⩛",
      oS: "Ⓢ",
      Oscr: "𝒪",
      oscr: "ℴ",
      Oslash: "Ø",
      oslash: "ø",
      osol: "⊘",
      Otilde: "Õ",
      otilde: "õ",
      Otimes: "⨷",
      otimes: "⊗",
      otimesas: "⨶",
      Ouml: "Ö",
      ouml: "ö",
      ovbar: "⌽",
      OverBar: "‾",
      OverBrace: "⏞",
      OverBracket: "⎴",
      OverParenthesis: "⏜",
      par: "∥",
      para: "¶",
      parallel: "∥",
      parsim: "⫳",
      parsl: "⫽",
      part: "∂",
      PartialD: "∂",
      Pcy: "П",
      pcy: "п",
      percnt: "%",
      period: ".",
      permil: "‰",
      perp: "⊥",
      pertenk: "‱",
      Pfr: "𝔓",
      pfr: "𝔭",
      Phi: "Φ",
      phi: "φ",
      phiv: "ϕ",
      phmmat: "ℳ",
      phone: "☎",
      Pi: "Π",
      pi: "π",
      pitchfork: "⋔",
      piv: "ϖ",
      planck: "ℏ",
      planckh: "ℎ",
      plankv: "ℏ",
      plus: "+",
      plusacir: "⨣",
      plusb: "⊞",
      pluscir: "⨢",
      plusdo: "∔",
      plusdu: "⨥",
      pluse: "⩲",
      PlusMinus: "±",
      plusmn: "±",
      plussim: "⨦",
      plustwo: "⨧",
      pm: "±",
      Poincareplane: "ℌ",
      pointint: "⨕",
      Popf: "ℙ",
      popf: "𝕡",
      pound: "£",
      Pr: "⪻",
      pr: "≺",
      prap: "⪷",
      prcue: "≼",
      prE: "⪳",
      pre: "⪯",
      prec: "≺",
      precapprox: "⪷",
      preccurlyeq: "≼",
      Precedes: "≺",
      PrecedesEqual: "⪯",
      PrecedesSlantEqual: "≼",
      PrecedesTilde: "≾",
      preceq: "⪯",
      precnapprox: "⪹",
      precneqq: "⪵",
      precnsim: "⋨",
      precsim: "≾",
      Prime: "″",
      prime: "′",
      primes: "ℙ",
      prnap: "⪹",
      prnE: "⪵",
      prnsim: "⋨",
      prod: "∏",
      Product: "∏",
      profalar: "⌮",
      profline: "⌒",
      profsurf: "⌓",
      prop: "∝",
      Proportion: "∷",
      Proportional: "∝",
      propto: "∝",
      prsim: "≾",
      prurel: "⊰",
      Pscr: "𝒫",
      pscr: "𝓅",
      Psi: "Ψ",
      psi: "ψ",
      puncsp: " ",
      Qfr: "𝔔",
      qfr: "𝔮",
      qint: "⨌",
      Qopf: "ℚ",
      qopf: "𝕢",
      qprime: "⁗",
      Qscr: "𝒬",
      qscr: "𝓆",
      quaternions: "ℍ",
      quatint: "⨖",
      quest: "?",
      questeq: "≟",
      QUOT: '"',
      quot: '"',
      rAarr: "⇛",
      race: "∽̱",
      Racute: "Ŕ",
      racute: "ŕ",
      radic: "√",
      raemptyv: "⦳",
      Rang: "⟫",
      rang: "⟩",
      rangd: "⦒",
      range: "⦥",
      rangle: "⟩",
      raquo: "»",
      Rarr: "↠",
      rArr: "⇒",
      rarr: "→",
      rarrap: "⥵",
      rarrb: "⇥",
      rarrbfs: "⤠",
      rarrc: "⤳",
      rarrfs: "⤞",
      rarrhk: "↪",
      rarrlp: "↬",
      rarrpl: "⥅",
      rarrsim: "⥴",
      Rarrtl: "⤖",
      rarrtl: "↣",
      rarrw: "↝",
      rAtail: "⤜",
      ratail: "⤚",
      ratio: "∶",
      rationals: "ℚ",
      RBarr: "⤐",
      rBarr: "⤏",
      rbarr: "⤍",
      rbbrk: "❳",
      rbrace: "}",
      rbrack: "]",
      rbrke: "⦌",
      rbrksld: "⦎",
      rbrkslu: "⦐",
      Rcaron: "Ř",
      rcaron: "ř",
      Rcedil: "Ŗ",
      rcedil: "ŗ",
      rceil: "⌉",
      rcub: "}",
      Rcy: "Р",
      rcy: "р",
      rdca: "⤷",
      rdldhar: "⥩",
      rdquo: "”",
      rdquor: "”",
      rdsh: "↳",
      Re: "ℜ",
      real: "ℜ",
      realine: "ℛ",
      realpart: "ℜ",
      reals: "ℝ",
      rect: "▭",
      REG: "®",
      reg: "®",
      ReverseElement: "∋",
      ReverseEquilibrium: "⇋",
      ReverseUpEquilibrium: "⥯",
      rfisht: "⥽",
      rfloor: "⌋",
      Rfr: "ℜ",
      rfr: "𝔯",
      rHar: "⥤",
      rhard: "⇁",
      rharu: "⇀",
      rharul: "⥬",
      Rho: "Ρ",
      rho: "ρ",
      rhov: "ϱ",
      RightAngleBracket: "⟩",
      RightArrow: "→",
      Rightarrow: "⇒",
      rightarrow: "→",
      RightArrowBar: "⇥",
      RightArrowLeftArrow: "⇄",
      rightarrowtail: "↣",
      RightCeiling: "⌉",
      RightDoubleBracket: "⟧",
      RightDownTeeVector: "⥝",
      RightDownVector: "⇂",
      RightDownVectorBar: "⥕",
      RightFloor: "⌋",
      rightharpoondown: "⇁",
      rightharpoonup: "⇀",
      rightleftarrows: "⇄",
      rightleftharpoons: "⇌",
      rightrightarrows: "⇉",
      rightsquigarrow: "↝",
      RightTee: "⊢",
      RightTeeArrow: "↦",
      RightTeeVector: "⥛",
      rightthreetimes: "⋌",
      RightTriangle: "⊳",
      RightTriangleBar: "⧐",
      RightTriangleEqual: "⊵",
      RightUpDownVector: "⥏",
      RightUpTeeVector: "⥜",
      RightUpVector: "↾",
      RightUpVectorBar: "⥔",
      RightVector: "⇀",
      RightVectorBar: "⥓",
      ring: "˚",
      risingdotseq: "≓",
      rlarr: "⇄",
      rlhar: "⇌",
      rlm: "‏",
      rmoust: "⎱",
      rmoustache: "⎱",
      rnmid: "⫮",
      roang: "⟭",
      roarr: "⇾",
      robrk: "⟧",
      ropar: "⦆",
      Ropf: "ℝ",
      ropf: "𝕣",
      roplus: "⨮",
      rotimes: "⨵",
      RoundImplies: "⥰",
      rpar: ")",
      rpargt: "⦔",
      rppolint: "⨒",
      rrarr: "⇉",
      Rrightarrow: "⇛",
      rsaquo: "›",
      Rscr: "ℛ",
      rscr: "𝓇",
      Rsh: "↱",
      rsh: "↱",
      rsqb: "]",
      rsquo: "’",
      rsquor: "’",
      rthree: "⋌",
      rtimes: "⋊",
      rtri: "▹",
      rtrie: "⊵",
      rtrif: "▸",
      rtriltri: "⧎",
      RuleDelayed: "⧴",
      ruluhar: "⥨",
      rx: "℞",
      Sacute: "Ś",
      sacute: "ś",
      sbquo: "‚",
      Sc: "⪼",
      sc: "≻",
      scap: "⪸",
      Scaron: "Š",
      scaron: "š",
      sccue: "≽",
      scE: "⪴",
      sce: "⪰",
      Scedil: "Ş",
      scedil: "ş",
      Scirc: "Ŝ",
      scirc: "ŝ",
      scnap: "⪺",
      scnE: "⪶",
      scnsim: "⋩",
      scpolint: "⨓",
      scsim: "≿",
      Scy: "С",
      scy: "с",
      sdot: "⋅",
      sdotb: "⊡",
      sdote: "⩦",
      searhk: "⤥",
      seArr: "⇘",
      searr: "↘",
      searrow: "↘",
      sect: "§",
      semi: ";",
      seswar: "⤩",
      setminus: "∖",
      setmn: "∖",
      sext: "✶",
      Sfr: "𝔖",
      sfr: "𝔰",
      sfrown: "⌢",
      sharp: "♯",
      SHCHcy: "Щ",
      shchcy: "щ",
      SHcy: "Ш",
      shcy: "ш",
      ShortDownArrow: "↓",
      ShortLeftArrow: "←",
      shortmid: "∣",
      shortparallel: "∥",
      ShortRightArrow: "→",
      ShortUpArrow: "↑",
      shy: "­",
      Sigma: "Σ",
      sigma: "σ",
      sigmaf: "ς",
      sigmav: "ς",
      sim: "∼",
      simdot: "⩪",
      sime: "≃",
      simeq: "≃",
      simg: "⪞",
      simgE: "⪠",
      siml: "⪝",
      simlE: "⪟",
      simne: "≆",
      simplus: "⨤",
      simrarr: "⥲",
      slarr: "←",
      SmallCircle: "∘",
      smallsetminus: "∖",
      smashp: "⨳",
      smeparsl: "⧤",
      smid: "∣",
      smile: "⌣",
      smt: "⪪",
      smte: "⪬",
      smtes: "⪬︀",
      SOFTcy: "Ь",
      softcy: "ь",
      sol: "/",
      solb: "⧄",
      solbar: "⌿",
      Sopf: "𝕊",
      sopf: "𝕤",
      spades: "♠",
      spadesuit: "♠",
      spar: "∥",
      sqcap: "⊓",
      sqcaps: "⊓︀",
      sqcup: "⊔",
      sqcups: "⊔︀",
      Sqrt: "√",
      sqsub: "⊏",
      sqsube: "⊑",
      sqsubset: "⊏",
      sqsubseteq: "⊑",
      sqsup: "⊐",
      sqsupe: "⊒",
      sqsupset: "⊐",
      sqsupseteq: "⊒",
      squ: "□",
      Square: "□",
      square: "□",
      SquareIntersection: "⊓",
      SquareSubset: "⊏",
      SquareSubsetEqual: "⊑",
      SquareSuperset: "⊐",
      SquareSupersetEqual: "⊒",
      SquareUnion: "⊔",
      squarf: "▪",
      squf: "▪",
      srarr: "→",
      Sscr: "𝒮",
      sscr: "𝓈",
      ssetmn: "∖",
      ssmile: "⌣",
      sstarf: "⋆",
      Star: "⋆",
      star: "☆",
      starf: "★",
      straightepsilon: "ϵ",
      straightphi: "ϕ",
      strns: "¯",
      Sub: "⋐",
      sub: "⊂",
      subdot: "⪽",
      subE: "⫅",
      sube: "⊆",
      subedot: "⫃",
      submult: "⫁",
      subnE: "⫋",
      subne: "⊊",
      subplus: "⪿",
      subrarr: "⥹",
      Subset: "⋐",
      subset: "⊂",
      subseteq: "⊆",
      subseteqq: "⫅",
      SubsetEqual: "⊆",
      subsetneq: "⊊",
      subsetneqq: "⫋",
      subsim: "⫇",
      subsub: "⫕",
      subsup: "⫓",
      succ: "≻",
      succapprox: "⪸",
      succcurlyeq: "≽",
      Succeeds: "≻",
      SucceedsEqual: "⪰",
      SucceedsSlantEqual: "≽",
      SucceedsTilde: "≿",
      succeq: "⪰",
      succnapprox: "⪺",
      succneqq: "⪶",
      succnsim: "⋩",
      succsim: "≿",
      SuchThat: "∋",
      Sum: "∑",
      sum: "∑",
      sung: "♪",
      Sup: "⋑",
      sup: "⊃",
      sup1: "¹",
      sup2: "²",
      sup3: "³",
      supdot: "⪾",
      supdsub: "⫘",
      supE: "⫆",
      supe: "⊇",
      supedot: "⫄",
      Superset: "⊃",
      SupersetEqual: "⊇",
      suphsol: "⟉",
      suphsub: "⫗",
      suplarr: "⥻",
      supmult: "⫂",
      supnE: "⫌",
      supne: "⊋",
      supplus: "⫀",
      Supset: "⋑",
      supset: "⊃",
      supseteq: "⊇",
      supseteqq: "⫆",
      supsetneq: "⊋",
      supsetneqq: "⫌",
      supsim: "⫈",
      supsub: "⫔",
      supsup: "⫖",
      swarhk: "⤦",
      swArr: "⇙",
      swarr: "↙",
      swarrow: "↙",
      swnwar: "⤪",
      szlig: "ß",
      Tab: "	",
      target: "⌖",
      Tau: "Τ",
      tau: "τ",
      tbrk: "⎴",
      Tcaron: "Ť",
      tcaron: "ť",
      Tcedil: "Ţ",
      tcedil: "ţ",
      Tcy: "Т",
      tcy: "т",
      tdot: "⃛",
      telrec: "⌕",
      Tfr: "𝔗",
      tfr: "𝔱",
      there4: "∴",
      Therefore: "∴",
      therefore: "∴",
      Theta: "Θ",
      theta: "θ",
      thetasym: "ϑ",
      thetav: "ϑ",
      thickapprox: "≈",
      thicksim: "∼",
      ThickSpace: "  ",
      thinsp: " ",
      ThinSpace: " ",
      thkap: "≈",
      thksim: "∼",
      THORN: "Þ",
      thorn: "þ",
      Tilde: "∼",
      tilde: "˜",
      TildeEqual: "≃",
      TildeFullEqual: "≅",
      TildeTilde: "≈",
      times: "×",
      timesb: "⊠",
      timesbar: "⨱",
      timesd: "⨰",
      tint: "∭",
      toea: "⤨",
      top: "⊤",
      topbot: "⌶",
      topcir: "⫱",
      Topf: "𝕋",
      topf: "𝕥",
      topfork: "⫚",
      tosa: "⤩",
      tprime: "‴",
      TRADE: "™",
      trade: "™",
      triangle: "▵",
      triangledown: "▿",
      triangleleft: "◃",
      trianglelefteq: "⊴",
      triangleq: "≜",
      triangleright: "▹",
      trianglerighteq: "⊵",
      tridot: "◬",
      trie: "≜",
      triminus: "⨺",
      TripleDot: "⃛",
      triplus: "⨹",
      trisb: "⧍",
      tritime: "⨻",
      trpezium: "⏢",
      Tscr: "𝒯",
      tscr: "𝓉",
      TScy: "Ц",
      tscy: "ц",
      TSHcy: "Ћ",
      tshcy: "ћ",
      Tstrok: "Ŧ",
      tstrok: "ŧ",
      twixt: "≬",
      twoheadleftarrow: "↞",
      twoheadrightarrow: "↠",
      Uacute: "Ú",
      uacute: "ú",
      Uarr: "↟",
      uArr: "⇑",
      uarr: "↑",
      Uarrocir: "⥉",
      Ubrcy: "Ў",
      ubrcy: "ў",
      Ubreve: "Ŭ",
      ubreve: "ŭ",
      Ucirc: "Û",
      ucirc: "û",
      Ucy: "У",
      ucy: "у",
      udarr: "⇅",
      Udblac: "Ű",
      udblac: "ű",
      udhar: "⥮",
      ufisht: "⥾",
      Ufr: "𝔘",
      ufr: "𝔲",
      Ugrave: "Ù",
      ugrave: "ù",
      uHar: "⥣",
      uharl: "↿",
      uharr: "↾",
      uhblk: "▀",
      ulcorn: "⌜",
      ulcorner: "⌜",
      ulcrop: "⌏",
      ultri: "◸",
      Umacr: "Ū",
      umacr: "ū",
      uml: "¨",
      UnderBar: "_",
      UnderBrace: "⏟",
      UnderBracket: "⎵",
      UnderParenthesis: "⏝",
      Union: "⋃",
      UnionPlus: "⊎",
      Uogon: "Ų",
      uogon: "ų",
      Uopf: "𝕌",
      uopf: "𝕦",
      UpArrow: "↑",
      Uparrow: "⇑",
      uparrow: "↑",
      UpArrowBar: "⤒",
      UpArrowDownArrow: "⇅",
      UpDownArrow: "↕",
      Updownarrow: "⇕",
      updownarrow: "↕",
      UpEquilibrium: "⥮",
      upharpoonleft: "↿",
      upharpoonright: "↾",
      uplus: "⊎",
      UpperLeftArrow: "↖",
      UpperRightArrow: "↗",
      Upsi: "ϒ",
      upsi: "υ",
      upsih: "ϒ",
      Upsilon: "Υ",
      upsilon: "υ",
      UpTee: "⊥",
      UpTeeArrow: "↥",
      upuparrows: "⇈",
      urcorn: "⌝",
      urcorner: "⌝",
      urcrop: "⌎",
      Uring: "Ů",
      uring: "ů",
      urtri: "◹",
      Uscr: "𝒰",
      uscr: "𝓊",
      utdot: "⋰",
      Utilde: "Ũ",
      utilde: "ũ",
      utri: "▵",
      utrif: "▴",
      uuarr: "⇈",
      Uuml: "Ü",
      uuml: "ü",
      uwangle: "⦧",
      vangrt: "⦜",
      varepsilon: "ϵ",
      varkappa: "ϰ",
      varnothing: "∅",
      varphi: "ϕ",
      varpi: "ϖ",
      varpropto: "∝",
      vArr: "⇕",
      varr: "↕",
      varrho: "ϱ",
      varsigma: "ς",
      varsubsetneq: "⊊︀",
      varsubsetneqq: "⫋︀",
      varsupsetneq: "⊋︀",
      varsupsetneqq: "⫌︀",
      vartheta: "ϑ",
      vartriangleleft: "⊲",
      vartriangleright: "⊳",
      Vbar: "⫫",
      vBar: "⫨",
      vBarv: "⫩",
      Vcy: "В",
      vcy: "в",
      VDash: "⊫",
      Vdash: "⊩",
      vDash: "⊨",
      vdash: "⊢",
      Vdashl: "⫦",
      Vee: "⋁",
      vee: "∨",
      veebar: "⊻",
      veeeq: "≚",
      vellip: "⋮",
      Verbar: "‖",
      verbar: "|",
      Vert: "‖",
      vert: "|",
      VerticalBar: "∣",
      VerticalLine: "|",
      VerticalSeparator: "❘",
      VerticalTilde: "≀",
      VeryThinSpace: " ",
      Vfr: "𝔙",
      vfr: "𝔳",
      vltri: "⊲",
      vnsub: "⊂⃒",
      vnsup: "⊃⃒",
      Vopf: "𝕍",
      vopf: "𝕧",
      vprop: "∝",
      vrtri: "⊳",
      Vscr: "𝒱",
      vscr: "𝓋",
      vsubnE: "⫋︀",
      vsubne: "⊊︀",
      vsupnE: "⫌︀",
      vsupne: "⊋︀",
      Vvdash: "⊪",
      vzigzag: "⦚",
      Wcirc: "Ŵ",
      wcirc: "ŵ",
      wedbar: "⩟",
      Wedge: "⋀",
      wedge: "∧",
      wedgeq: "≙",
      weierp: "℘",
      Wfr: "𝔚",
      wfr: "𝔴",
      Wopf: "𝕎",
      wopf: "𝕨",
      wp: "℘",
      wr: "≀",
      wreath: "≀",
      Wscr: "𝒲",
      wscr: "𝓌",
      xcap: "⋂",
      xcirc: "◯",
      xcup: "⋃",
      xdtri: "▽",
      Xfr: "𝔛",
      xfr: "𝔵",
      xhArr: "⟺",
      xharr: "⟷",
      Xi: "Ξ",
      xi: "ξ",
      xlArr: "⟸",
      xlarr: "⟵",
      xmap: "⟼",
      xnis: "⋻",
      xodot: "⨀",
      Xopf: "𝕏",
      xopf: "𝕩",
      xoplus: "⨁",
      xotime: "⨂",
      xrArr: "⟹",
      xrarr: "⟶",
      Xscr: "𝒳",
      xscr: "𝓍",
      xsqcup: "⨆",
      xuplus: "⨄",
      xutri: "△",
      xvee: "⋁",
      xwedge: "⋀",
      Yacute: "Ý",
      yacute: "ý",
      YAcy: "Я",
      yacy: "я",
      Ycirc: "Ŷ",
      ycirc: "ŷ",
      Ycy: "Ы",
      ycy: "ы",
      yen: "¥",
      Yfr: "𝔜",
      yfr: "𝔶",
      YIcy: "Ї",
      yicy: "ї",
      Yopf: "𝕐",
      yopf: "𝕪",
      Yscr: "𝒴",
      yscr: "𝓎",
      YUcy: "Ю",
      yucy: "ю",
      Yuml: "Ÿ",
      yuml: "ÿ",
      Zacute: "Ź",
      zacute: "ź",
      Zcaron: "Ž",
      zcaron: "ž",
      Zcy: "З",
      zcy: "з",
      Zdot: "Ż",
      zdot: "ż",
      zeetrf: "ℨ",
      ZeroWidthSpace: "​",
      Zeta: "Ζ",
      zeta: "ζ",
      Zfr: "ℨ",
      zfr: "𝔷",
      ZHcy: "Ж",
      zhcy: "ж",
      zigrarr: "⇝",
      Zopf: "ℤ",
      zopf: "𝕫",
      Zscr: "𝒵",
      zscr: "𝓏",
      zwj: "‍",
      zwnj: "‌",
    })),
    (e.entityMap = e.HTML_ENTITIES));
})($d);
var po = {},
  Ct = vn.NAMESPACE,
  fa =
    /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
  Lc = new RegExp(
    "[\\-\\.0-9" +
      fa.source.slice(1, -1) +
      "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]",
  ),
  Mc = new RegExp(
    "^" + fa.source + Lc.source + "*(?::" + fa.source + Lc.source + "*)?$",
  ),
  ft = 0,
  xn = 1,
  qn = 2,
  ht = 3,
  zn = 4,
  jn = 5,
  pt = 6,
  Vt = 7;
function nt(e, n) {
  ((this.message = e),
    (this.locator = n),
    Error.captureStackTrace && Error.captureStackTrace(this, nt));
}
nt.prototype = new Error();
nt.prototype.name = nt.name;
function Gd() {}
Gd.prototype = {
  parse: function (e, n, t) {
    var r = this.domBuilder;
    (r.startDocument(),
      Yd(n, (n = {})),
      wp(e, n, t, r, this.errorHandler),
      r.endDocument());
  },
};
function wp(e, n, t, r, i) {
  function a(C) {
    if (C > 65535) {
      C -= 65536;
      var k = 55296 + (C >> 10),
        S = 56320 + (C & 1023);
      return String.fromCharCode(k, S);
    } else return String.fromCharCode(C);
  }
  function o(C) {
    var k = C.slice(1, -1);
    return Object.hasOwnProperty.call(t, k)
      ? t[k]
      : k.charAt(0) === "#"
        ? a(parseInt(k.substr(1).replace("x", "0x")))
        : (i.error("entity not found:" + C), C);
  }
  function c(C) {
    if (C > f) {
      var k = e.substring(f, C).replace(/&#?\w+;/g, o);
      (m && s(f), r.characters(k, 0, C - f), (f = C));
    }
  }
  function s(C, k) {
    for (; C >= l && (k = p.exec(e)); )
      ((u = k.index), (l = u + k[0].length), m.lineNumber++);
    m.columnNumber = C - u + 1;
  }
  for (
    var u = 0,
      l = 0,
      p = /.*(?:\r\n?|\n)|.*$/g,
      m = r.locator,
      b = [{ currentNSMap: n }],
      y = {},
      f = 0;
    ;
  ) {
    try {
      var d = e.indexOf("<", f);
      if (d < 0) {
        if (!e.substr(f).match(/^\s*$/)) {
          var g = r.doc,
            h = g.createTextNode(e.substr(f));
          (g.appendChild(h), (r.currentElement = h));
        }
        return;
      }
      switch ((d > f && c(d), e.charAt(d + 1))) {
        case "/":
          var ee = e.indexOf(">", d + 3),
            D = e.substring(d + 2, ee).replace(/[ \t\n\r]+$/g, ""),
            _ = b.pop();
          ee < 0
            ? ((D = e.substring(d + 2).replace(/[\s<].*/, "")),
              i.error("end tag name: " + D + " is not complete:" + _.tagName),
              (ee = d + 1 + D.length))
            : D.match(/\s</) &&
              ((D = D.replace(/[\s<].*/, "")),
              i.error("end tag name: " + D + " maybe not complete"),
              (ee = d + 1 + D.length));
          var U = _.localNSMap,
            w = _.tagName == D,
            E = w || (_.tagName && _.tagName.toLowerCase() == D.toLowerCase());
          if (E) {
            if ((r.endElement(_.uri, _.localName, D), U))
              for (var O in U)
                Object.prototype.hasOwnProperty.call(U, O) &&
                  r.endPrefixMapping(O);
            w ||
              i.fatalError(
                "end tag name: " +
                  D +
                  " is not match the current start tagName:" +
                  _.tagName,
              );
          } else b.push(_);
          ee++;
          break;
        case "?":
          (m && s(d), (ee = Sp(e, d, r)));
          break;
        case "!":
          (m && s(d), (ee = Fp(e, d, r, i)));
          break;
        default:
          m && s(d);
          var I = new Zd(),
            Y = b[b.length - 1].currentNSMap,
            ee = Ep(e, d, I, Y, o, i),
            T = I.length;
          if (
            (!I.closed &&
              Cp(e, ee, I.tagName, y) &&
              ((I.closed = !0), t.nbsp || i.warning("unclosed xml attribute")),
            m && T)
          ) {
            for (var N = Pc(m, {}), x = 0; x < T; x++) {
              var j = I[x];
              (s(j.offset), (j.locator = Pc(m, {})));
            }
            ((r.locator = N), qc(I, r, Y) && b.push(I), (r.locator = m));
          } else qc(I, r, Y) && b.push(I);
          Ct.isHTML(I.uri) && !I.closed
            ? (ee = Ap(e, ee, I.tagName, o, r))
            : ee++;
      }
    } catch (C) {
      if (C instanceof nt) throw C;
      (i.error("element parse error: " + C), (ee = -1));
    }
    ee > f ? (f = ee) : c(Math.max(d, f) + 1);
  }
}
function Pc(e, n) {
  return ((n.lineNumber = e.lineNumber), (n.columnNumber = e.columnNumber), n);
}
function Ep(e, n, t, r, i, a) {
  function o(m, b, y) {
    (t.attributeNames.hasOwnProperty(m) &&
      a.fatalError("Attribute " + m + " redefined"),
      t.addValue(m, b.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, i), y));
  }
  for (var c, s, u = ++n, l = ft; ; ) {
    var p = e.charAt(u);
    switch (p) {
      case "=":
        if (l === xn) ((c = e.slice(n, u)), (l = ht));
        else if (l === qn) l = ht;
        else throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (l === ht || l === xn)
          if (
            (l === xn &&
              (a.warning('attribute value must after "="'),
              (c = e.slice(n, u))),
            (n = u + 1),
            (u = e.indexOf(p, n)),
            u > 0)
          )
            ((s = e.slice(n, u)), o(c, s, n - 1), (l = jn));
          else throw new Error("attribute value no end '" + p + "' match");
        else if (l == zn)
          ((s = e.slice(n, u)),
            o(c, s, n),
            a.warning('attribute "' + c + '" missed start quot(' + p + ")!!"),
            (n = u + 1),
            (l = jn));
        else throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (l) {
          case ft:
            t.setTagName(e.slice(n, u));
          case jn:
          case pt:
          case Vt:
            ((l = Vt), (t.closed = !0));
          case zn:
          case xn:
            break;
          case qn:
            t.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return (
          a.error("unexpected end of input"),
          l == ft && t.setTagName(e.slice(n, u)),
          u
        );
      case ">":
        switch (l) {
          case ft:
            t.setTagName(e.slice(n, u));
          case jn:
          case pt:
          case Vt:
            break;
          case zn:
          case xn:
            ((s = e.slice(n, u)),
              s.slice(-1) === "/" && ((t.closed = !0), (s = s.slice(0, -1))));
          case qn:
            (l === qn && (s = c),
              l == zn
                ? (a.warning('attribute "' + s + '" missed quot(")!'),
                  o(c, s, n))
                : ((!Ct.isHTML(r[""]) ||
                    !s.match(/^(?:disabled|checked|selected)$/i)) &&
                    a.warning(
                      'attribute "' +
                        s +
                        '" missed value!! "' +
                        s +
                        '" instead!!',
                    ),
                  o(s, s, n)));
            break;
          case ht:
            throw new Error("attribute value missed!!");
        }
        return u;
      case "":
        p = " ";
      default:
        if (p <= " ")
          switch (l) {
            case ft:
              (t.setTagName(e.slice(n, u)), (l = pt));
              break;
            case xn:
              ((c = e.slice(n, u)), (l = qn));
              break;
            case zn:
              var s = e.slice(n, u);
              (a.warning('attribute "' + s + '" missed quot(")!!'), o(c, s, n));
            case jn:
              l = pt;
              break;
          }
        else
          switch (l) {
            case qn:
              (t.tagName,
                (!Ct.isHTML(r[""]) ||
                  !c.match(/^(?:disabled|checked|selected)$/i)) &&
                  a.warning(
                    'attribute "' +
                      c +
                      '" missed value!! "' +
                      c +
                      '" instead2!!',
                  ),
                o(c, c, n),
                (n = u),
                (l = xn));
              break;
            case jn:
              a.warning('attribute space is required"' + c + '"!!');
            case pt:
              ((l = xn), (n = u));
              break;
            case ht:
              ((l = zn), (n = u));
              break;
            case Vt:
              throw new Error(
                "elements closed character '/' and '>' must be connected to",
              );
          }
    }
    u++;
  }
}
function qc(e, n, t) {
  for (var r = e.tagName, i = null, p = e.length; p--; ) {
    var a = e[p],
      o = a.qName,
      c = a.value,
      m = o.indexOf(":");
    if (m > 0)
      var s = (a.prefix = o.slice(0, m)),
        u = o.slice(m + 1),
        l = s === "xmlns" && u;
    else ((u = o), (s = null), (l = o === "xmlns" && ""));
    ((a.localName = u),
      l !== !1 &&
        (i == null && ((i = {}), Yd(t, (t = {}))),
        (t[l] = i[l] = c),
        (a.uri = Ct.XMLNS),
        n.startPrefixMapping(l, c)));
  }
  for (var p = e.length; p--; ) {
    a = e[p];
    var s = a.prefix;
    s &&
      (s === "xml" && (a.uri = Ct.XML), s !== "xmlns" && (a.uri = t[s || ""]));
  }
  var m = r.indexOf(":");
  m > 0
    ? ((s = e.prefix = r.slice(0, m)), (u = e.localName = r.slice(m + 1)))
    : ((s = null), (u = e.localName = r));
  var b = (e.uri = t[s || ""]);
  if ((n.startElement(b, u, r, e), e.closed)) {
    if ((n.endElement(b, u, r), i))
      for (s in i)
        Object.prototype.hasOwnProperty.call(i, s) && n.endPrefixMapping(s);
  } else return ((e.currentNSMap = t), (e.localNSMap = i), !0);
}
function Ap(e, n, t, r, i) {
  if (/^(?:script|textarea)$/i.test(t)) {
    var a = e.indexOf("</" + t + ">", n),
      o = e.substring(n + 1, a);
    if (/[&<]/.test(o))
      return /^script$/i.test(t)
        ? (i.characters(o, 0, o.length), a)
        : ((o = o.replace(/&#?\w+;/g, r)), i.characters(o, 0, o.length), a);
  }
  return n + 1;
}
function Cp(e, n, t, r) {
  var i = r[t];
  return (
    i == null &&
      ((i = e.lastIndexOf("</" + t + ">")),
      i < n && (i = e.lastIndexOf("</" + t)),
      (r[t] = i)),
    i < n
  );
}
function Yd(e, n) {
  for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
}
function Fp(e, n, t, r) {
  var i = e.charAt(n + 2);
  switch (i) {
    case "-":
      if (e.charAt(n + 3) === "-") {
        var a = e.indexOf("-->", n + 4);
        return a > n
          ? (t.comment(e, n + 4, a - n - 4), a + 3)
          : (r.error("Unclosed comment"), -1);
      } else return -1;
    default:
      if (e.substr(n + 3, 6) == "CDATA[") {
        var a = e.indexOf("]]>", n + 9);
        return (
          t.startCDATA(),
          t.characters(e, n + 9, a - n - 9),
          t.endCDATA(),
          a + 3
        );
      }
      var o = Bp(e, n),
        c = o.length;
      if (c > 1 && /!doctype/i.test(o[0][0])) {
        var s = o[1][0],
          u = !1,
          l = !1;
        c > 3 &&
          (/^public$/i.test(o[2][0])
            ? ((u = o[3][0]), (l = c > 4 && o[4][0]))
            : /^system$/i.test(o[2][0]) && (l = o[3][0]));
        var p = o[c - 1];
        return (t.startDTD(s, u, l), t.endDTD(), p.index + p[0].length);
      }
  }
  return -1;
}
function Sp(e, n, t) {
  var r = e.indexOf("?>", n);
  if (r) {
    var i = e.substring(n, r).match(/^<\?(\S*)\s*([\s\S]*?)$/);
    return i ? (i[0].length, t.processingInstruction(i[1], i[2]), r + 2) : -1;
  }
  return -1;
}
function Zd() {
  this.attributeNames = {};
}
Zd.prototype = {
  setTagName: function (e) {
    if (!Mc.test(e)) throw new Error("invalid tagName:" + e);
    this.tagName = e;
  },
  addValue: function (e, n, t) {
    if (!Mc.test(e)) throw new Error("invalid attribute:" + e);
    ((this.attributeNames[e] = this.length),
      (this[this.length++] = { qName: e, value: n, offset: t }));
  },
  length: 0,
  getLocalName: function (e) {
    return this[e].localName;
  },
  getLocator: function (e) {
    return this[e].locator;
  },
  getQName: function (e) {
    return this[e].qName;
  },
  getURI: function (e) {
    return this[e].uri;
  },
  getValue: function (e) {
    return this[e].value;
  },
};
function Bp(e, n) {
  var t,
    r = [],
    i = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (i.lastIndex = n, i.exec(e); (t = i.exec(e)); )
    if ((r.push(t), t[1])) return r;
}
po.XMLReader = Gd;
po.ParseError = nt;
var kp = vn,
  Wp = ln,
  zc = $d,
  Kd = po,
  Rp = Wp.DOMImplementation,
  jc = kp.NAMESPACE,
  Op = Kd.ParseError,
  Ip = Kd.XMLReader;
function Qd(e) {
  return e
    .replace(
      /\r[\n\u0085]/g,
      `
`,
    )
    .replace(
      /[\r\u0085\u2028]/g,
      `
`,
    );
}
function Jd(e) {
  this.options = e || { locator: {} };
}
Jd.prototype.parseFromString = function (e, n) {
  var t = this.options,
    r = new Ip(),
    i = t.domBuilder || new Lt(),
    a = t.errorHandler,
    o = t.locator,
    c = t.xmlns || {},
    s = /\/x?html?$/.test(n),
    u = s ? zc.HTML_ENTITIES : zc.XML_ENTITIES;
  (o && i.setDocumentLocator(o),
    (r.errorHandler = Np(a, i, o)),
    (r.domBuilder = t.domBuilder || i),
    s && (c[""] = jc.HTML),
    (c.xml = c.xml || jc.XML));
  var l = t.normalizeLineEndings || Qd;
  return (
    e && typeof e == "string"
      ? r.parse(l(e), c, u)
      : r.errorHandler.error("invalid doc source"),
    i.doc
  );
};
function Np(e, n, t) {
  if (!e) {
    if (n instanceof Lt) return n;
    e = n;
  }
  var r = {},
    i = e instanceof Function;
  t = t || {};
  function a(o) {
    var c = e[o];
    (!c &&
      i &&
      (c =
        e.length == 2
          ? function (s) {
              e(o, s);
            }
          : e),
      (r[o] =
        (c &&
          function (s) {
            c("[xmldom " + o + "]	" + s + ha(t));
          }) ||
        function () {}));
  }
  return (a("warning"), a("error"), a("fatalError"), r);
}
function Lt() {
  this.cdata = !1;
}
function Vn(e, n) {
  ((n.lineNumber = e.lineNumber), (n.columnNumber = e.columnNumber));
}
Lt.prototype = {
  startDocument: function () {
    ((this.doc = new Rp().createDocument(null, null, null)),
      this.locator && (this.doc.documentURI = this.locator.systemId));
  },
  startElement: function (e, n, t, r) {
    var i = this.doc,
      a = i.createElementNS(e, t || n),
      o = r.length;
    (Xt(this, a),
      (this.currentElement = a),
      this.locator && Vn(this.locator, a));
    for (var c = 0; c < o; c++) {
      var e = r.getURI(c),
        s = r.getValue(c),
        t = r.getQName(c),
        u = i.createAttributeNS(e, t);
      (this.locator && Vn(r.getLocator(c), u),
        (u.value = u.nodeValue = s),
        a.setAttributeNode(u));
    }
  },
  endElement: function (e, n, t) {
    var r = this.currentElement;
    (r.tagName, (this.currentElement = r.parentNode));
  },
  startPrefixMapping: function (e, n) {},
  endPrefixMapping: function (e) {},
  processingInstruction: function (e, n) {
    var t = this.doc.createProcessingInstruction(e, n);
    (this.locator && Vn(this.locator, t), Xt(this, t));
  },
  ignorableWhitespace: function (e, n, t) {},
  characters: function (e, n, t) {
    if (((e = Vc.apply(this, arguments)), e)) {
      if (this.cdata) var r = this.doc.createCDATASection(e);
      else var r = this.doc.createTextNode(e);
      (this.currentElement
        ? this.currentElement.appendChild(r)
        : /^\s*$/.test(e) && this.doc.appendChild(r),
        this.locator && Vn(this.locator, r));
    }
  },
  skippedEntity: function (e) {},
  endDocument: function () {
    this.doc.normalize();
  },
  setDocumentLocator: function (e) {
    (this.locator = e) && (e.lineNumber = 0);
  },
  comment: function (e, n, t) {
    e = Vc.apply(this, arguments);
    var r = this.doc.createComment(e);
    (this.locator && Vn(this.locator, r), Xt(this, r));
  },
  startCDATA: function () {
    this.cdata = !0;
  },
  endCDATA: function () {
    this.cdata = !1;
  },
  startDTD: function (e, n, t) {
    var r = this.doc.implementation;
    if (r && r.createDocumentType) {
      var i = r.createDocumentType(e, n, t);
      (this.locator && Vn(this.locator, i),
        Xt(this, i),
        (this.doc.doctype = i));
    }
  },
  warning: function (e) {
    console.warn("[xmldom warning]	" + e, ha(this.locator));
  },
  error: function (e) {
    console.error("[xmldom error]	" + e, ha(this.locator));
  },
  fatalError: function (e) {
    throw new Op(e, this.locator);
  },
};
function ha(e) {
  if (e)
    return (
      `
@` +
      (e.systemId || "") +
      "#[line:" +
      e.lineNumber +
      ",col:" +
      e.columnNumber +
      "]"
    );
}
function Vc(e, n, t) {
  return typeof e == "string"
    ? e.substr(n, t)
    : e.length >= n + t || n
      ? new java.lang.String(e, n, t) + ""
      : e;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(
  /\w+/g,
  function (e) {
    Lt.prototype[e] = function () {
      return null;
    };
  },
);
function Xt(e, n) {
  e.currentElement ? e.currentElement.appendChild(n) : e.doc.appendChild(n);
}
Ar.__DOMHandler = Lt;
Ar.normalizeLineEndings = Qd;
Ar.DOMParser = Jd;
var el = ln;
Tr.DOMImplementation = el.DOMImplementation;
Tr.XMLSerializer = el.XMLSerializer;
Tr.DOMParser = Ar.DOMParser;
var Lp = Tr,
  Mp = ln;
function Pp(e) {
  var n = null,
    t = new Lp.DOMParser({
      errorHandler: function (i, a) {
        n = { level: i, message: a };
      },
    }),
    r = t.parseFromString(e);
  if (n === null) return r;
  throw new Error(n.level + ": " + n.message);
}
ro.parseFromString = Pp;
ro.Node = Mp.Node;
var Ri = Ce,
  Xc = we,
  nl = ro,
  tl = ct,
  qp = tl.Element;
Td.readString = zp;
var Hc = nl.Node;
function zp(e, n) {
  n = n || {};
  try {
    var t = nl.parseFromString(e, "text/xml");
  } catch (o) {
    return Ri.reject(o);
  }
  if (t.documentElement.tagName === "parsererror")
    return Ri.resolve(new Error(t.documentElement.textContent));
  function r(o) {
    switch (o.nodeType) {
      case Hc.ELEMENT_NODE:
        return i(o);
      case Hc.TEXT_NODE:
        return tl.text(o.nodeValue);
    }
  }
  function i(o) {
    var c = a(o),
      s = [];
    Xc.forEach(o.childNodes, function (l) {
      var p = r(l);
      p && s.push(p);
    });
    var u = {};
    return (
      Xc.forEach(o.attributes, function (l) {
        u[a(l)] = l.value;
      }),
      new qp(c, u, s)
    );
  }
  function a(o) {
    if (o.namespaceURI) {
      var c = n[o.namespaceURI],
        s;
      return (
        c ? (s = c + ":") : (s = "{" + o.namespaceURI + "}"),
        s + o.localName
      );
    } else return o.localName;
  }
  return Ri.resolve(r(t.documentElement));
}
var rl = {},
  mt = {},
  fn = {},
  $c;
function Sn() {
  return (
    $c ||
      (($c = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o,
          c = [].slice,
          s = {}.hasOwnProperty;
        ((e = function () {
          var u, l, p, m, b, y;
          if (
            ((y = arguments[0]),
            (b = 2 <= arguments.length ? c.call(arguments, 1) : []),
            i(Object.assign))
          )
            Object.assign.apply(null, arguments);
          else
            for (u = 0, p = b.length; u < p; u++)
              if (((m = b[u]), m != null))
                for (l in m) s.call(m, l) && (y[l] = m[l]);
          return y;
        }),
          (i = function (u) {
            return (
              !!u && Object.prototype.toString.call(u) === "[object Function]"
            );
          }),
          (a = function (u) {
            var l;
            return !!u && ((l = typeof u) == "function" || l === "object");
          }),
          (t = function (u) {
            return i(Array.isArray)
              ? Array.isArray(u)
              : Object.prototype.toString.call(u) === "[object Array]";
          }),
          (r = function (u) {
            var l;
            if (t(u)) return !u.length;
            for (l in u) if (s.call(u, l)) return !1;
            return !0;
          }),
          (o = function (u) {
            var l, p;
            return (
              a(u) &&
              (p = Object.getPrototypeOf(u)) &&
              (l = p.constructor) &&
              typeof l == "function" &&
              l instanceof l &&
              Function.prototype.toString.call(l) ===
                Function.prototype.toString.call(Object)
            );
          }),
          (n = function (u) {
            return i(u.valueOf) ? u.valueOf() : u;
          }),
          (fn.assign = e),
          (fn.isFunction = i),
          (fn.isObject = a),
          (fn.isArray = t),
          (fn.isEmpty = r),
          (fn.isPlainObject = o),
          (fn.getValue = n));
      }.call(fe)),
    fn
  );
}
var Oi = { exports: {} },
  Ii = { exports: {} },
  Ni = { exports: {} },
  Li = { exports: {} },
  Gc;
function il() {
  return (
    Gc ||
      ((Gc = 1),
      function () {
        Li.exports = (function () {
          function e(n, t, r) {
            if (
              ((this.options = n.options),
              (this.stringify = n.stringify),
              (this.parent = n),
              t == null)
            )
              throw new Error("Missing attribute name. " + this.debugInfo(t));
            if (r == null)
              throw new Error("Missing attribute value. " + this.debugInfo(t));
            ((this.name = this.stringify.attName(t)),
              (this.value = this.stringify.attValue(r)));
          }
          return (
            (e.prototype.clone = function () {
              return Object.create(this);
            }),
            (e.prototype.toString = function (n) {
              return this.options.writer.set(n).attribute(this);
            }),
            (e.prototype.debugInfo = function (n) {
              return (
                (n = n || this.name),
                n == null
                  ? "parent: <" + this.parent.name + ">"
                  : "attribute: {" + n + "}, parent: <" + this.parent.name + ">"
              );
            }),
            e
          );
        })();
      }.call(fe)),
    Li.exports
  );
}
var Yc;
function Cr() {
  return (
    Yc ||
      ((Yc = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o = function (s, u) {
            for (var l in u) c.call(u, l) && (s[l] = u[l]);
            function p() {
              this.constructor = s;
            }
            return (
              (p.prototype = u.prototype),
              (s.prototype = new p()),
              (s.__super__ = u.prototype),
              s
            );
          },
          c = {}.hasOwnProperty;
        ((a = Sn()),
          (i = a.isObject),
          (r = a.isFunction),
          (t = a.getValue),
          (n = He()),
          (e = il()),
          (Ni.exports = (function (s) {
            o(u, s);
            function u(l, p, m) {
              if ((u.__super__.constructor.call(this, l), p == null))
                throw new Error("Missing element name. " + this.debugInfo());
              ((this.name = this.stringify.eleName(p)),
                (this.attributes = {}),
                m != null && this.attribute(m),
                l.isDocument &&
                  ((this.isRoot = !0),
                  (this.documentObject = l),
                  (l.rootObject = this)));
            }
            return (
              (u.prototype.clone = function () {
                var l, p, m, b;
                ((m = Object.create(this)),
                  m.isRoot && (m.documentObject = null),
                  (m.attributes = {}),
                  (b = this.attributes));
                for (p in b)
                  c.call(b, p) && ((l = b[p]), (m.attributes[p] = l.clone()));
                return (
                  (m.children = []),
                  this.children.forEach(function (y) {
                    var f;
                    return (
                      (f = y.clone()),
                      (f.parent = m),
                      m.children.push(f)
                    );
                  }),
                  m
                );
              }),
              (u.prototype.attribute = function (l, p) {
                var m, b;
                if ((l != null && (l = t(l)), i(l)))
                  for (m in l)
                    c.call(l, m) && ((b = l[m]), this.attribute(m, b));
                else
                  (r(p) && (p = p.apply()),
                    (!this.options.skipNullAttributes || p != null) &&
                      (this.attributes[l] = new e(this, l, p)));
                return this;
              }),
              (u.prototype.removeAttribute = function (l) {
                var p, m, b;
                if (l == null)
                  throw new Error(
                    "Missing attribute name. " + this.debugInfo(),
                  );
                if (((l = t(l)), Array.isArray(l)))
                  for (m = 0, b = l.length; m < b; m++)
                    ((p = l[m]), delete this.attributes[p]);
                else delete this.attributes[l];
                return this;
              }),
              (u.prototype.toString = function (l) {
                return this.options.writer.set(l).element(this);
              }),
              (u.prototype.att = function (l, p) {
                return this.attribute(l, p);
              }),
              (u.prototype.a = function (l, p) {
                return this.attribute(l, p);
              }),
              u
            );
          })(n)));
      }.call(fe)),
    Ni.exports
  );
}
var Mi = { exports: {} },
  Zc;
function Fr() {
  return (
    Zc ||
      ((Zc = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Mi.exports = (function (r) {
            n(i, r);
            function i(a, o) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error("Missing CDATA text. " + this.debugInfo());
              this.text = this.stringify.cdata(o);
            }
            return (
              (i.prototype.clone = function () {
                return Object.create(this);
              }),
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).cdata(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Mi.exports
  );
}
var Pi = { exports: {} },
  Kc;
function Sr() {
  return (
    Kc ||
      ((Kc = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Pi.exports = (function (r) {
            n(i, r);
            function i(a, o) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error("Missing comment text. " + this.debugInfo());
              this.text = this.stringify.comment(o);
            }
            return (
              (i.prototype.clone = function () {
                return Object.create(this);
              }),
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).comment(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Pi.exports
  );
}
var qi = { exports: {} },
  Qc;
function Br() {
  return (
    Qc ||
      ((Qc = 1),
      function () {
        var e,
          n,
          t = function (i, a) {
            for (var o in a) r.call(a, o) && (i[o] = a[o]);
            function c() {
              this.constructor = i;
            }
            return (
              (c.prototype = a.prototype),
              (i.prototype = new c()),
              (i.__super__ = a.prototype),
              i
            );
          },
          r = {}.hasOwnProperty;
        ((n = Sn().isObject),
          (e = He()),
          (qi.exports = (function (i) {
            t(a, i);
            function a(o, c, s, u) {
              var l;
              (a.__super__.constructor.call(this, o),
                n(c) &&
                  ((l = c),
                  (c = l.version),
                  (s = l.encoding),
                  (u = l.standalone)),
                c || (c = "1.0"),
                (this.version = this.stringify.xmlVersion(c)),
                s != null && (this.encoding = this.stringify.xmlEncoding(s)),
                u != null &&
                  (this.standalone = this.stringify.xmlStandalone(u)));
            }
            return (
              (a.prototype.toString = function (o) {
                return this.options.writer.set(o).declaration(this);
              }),
              a
            );
          })(e)));
      }.call(fe)),
    qi.exports
  );
}
var zi = { exports: {} },
  ji = { exports: {} },
  Jc;
function kr() {
  return (
    Jc ||
      ((Jc = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (ji.exports = (function (r) {
            n(i, r);
            function i(a, o, c, s, u, l) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error(
                  "Missing DTD element name. " + this.debugInfo(),
                );
              if (c == null)
                throw new Error(
                  "Missing DTD attribute name. " + this.debugInfo(o),
                );
              if (!s)
                throw new Error(
                  "Missing DTD attribute type. " + this.debugInfo(o),
                );
              if (!u)
                throw new Error(
                  "Missing DTD attribute default. " + this.debugInfo(o),
                );
              if (
                (u.indexOf("#") !== 0 && (u = "#" + u),
                !u.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
              )
                throw new Error(
                  "Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " +
                    this.debugInfo(o),
                );
              if (l && !u.match(/^(#FIXED|#DEFAULT)$/))
                throw new Error(
                  "Default value only applies to #FIXED or #DEFAULT. " +
                    this.debugInfo(o),
                );
              ((this.elementName = this.stringify.eleName(o)),
                (this.attributeName = this.stringify.attName(c)),
                (this.attributeType = this.stringify.dtdAttType(s)),
                (this.defaultValue = this.stringify.dtdAttDefault(l)),
                (this.defaultValueType = u));
            }
            return (
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).dtdAttList(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    ji.exports
  );
}
var Vi = { exports: {} },
  es;
function Wr() {
  return (
    es ||
      ((es = 1),
      function () {
        var e,
          n,
          t = function (i, a) {
            for (var o in a) r.call(a, o) && (i[o] = a[o]);
            function c() {
              this.constructor = i;
            }
            return (
              (c.prototype = a.prototype),
              (i.prototype = new c()),
              (i.__super__ = a.prototype),
              i
            );
          },
          r = {}.hasOwnProperty;
        ((n = Sn().isObject),
          (e = He()),
          (Vi.exports = (function (i) {
            t(a, i);
            function a(o, c, s, u) {
              if ((a.__super__.constructor.call(this, o), s == null))
                throw new Error(
                  "Missing DTD entity name. " + this.debugInfo(s),
                );
              if (u == null)
                throw new Error(
                  "Missing DTD entity value. " + this.debugInfo(s),
                );
              if (
                ((this.pe = !!c),
                (this.name = this.stringify.eleName(s)),
                !n(u))
              )
                this.value = this.stringify.dtdEntityValue(u);
              else {
                if (!u.pubID && !u.sysID)
                  throw new Error(
                    "Public and/or system identifiers are required for an external entity. " +
                      this.debugInfo(s),
                  );
                if (u.pubID && !u.sysID)
                  throw new Error(
                    "System identifier is required for a public external entity. " +
                      this.debugInfo(s),
                  );
                if (
                  (u.pubID != null &&
                    (this.pubID = this.stringify.dtdPubID(u.pubID)),
                  u.sysID != null &&
                    (this.sysID = this.stringify.dtdSysID(u.sysID)),
                  u.nData != null &&
                    (this.nData = this.stringify.dtdNData(u.nData)),
                  this.pe && this.nData)
                )
                  throw new Error(
                    "Notation declaration is not allowed in a parameter entity. " +
                      this.debugInfo(s),
                  );
              }
            }
            return (
              (a.prototype.toString = function (o) {
                return this.options.writer.set(o).dtdEntity(this);
              }),
              a
            );
          })(e)));
      }.call(fe)),
    Vi.exports
  );
}
var Xi = { exports: {} },
  ns;
function Rr() {
  return (
    ns ||
      ((ns = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Xi.exports = (function (r) {
            n(i, r);
            function i(a, o, c) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error(
                  "Missing DTD element name. " + this.debugInfo(),
                );
              (c || (c = "(#PCDATA)"),
                Array.isArray(c) && (c = "(" + c.join(",") + ")"),
                (this.name = this.stringify.eleName(o)),
                (this.value = this.stringify.dtdElementValue(c)));
            }
            return (
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).dtdElement(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Xi.exports
  );
}
var Hi = { exports: {} },
  ts;
function Or() {
  return (
    ts ||
      ((ts = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Hi.exports = (function (r) {
            n(i, r);
            function i(a, o, c) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error(
                  "Missing DTD notation name. " + this.debugInfo(o),
                );
              if (!c.pubID && !c.sysID)
                throw new Error(
                  "Public or system identifiers are required for an external entity. " +
                    this.debugInfo(o),
                );
              ((this.name = this.stringify.eleName(o)),
                c.pubID != null &&
                  (this.pubID = this.stringify.dtdPubID(c.pubID)),
                c.sysID != null &&
                  (this.sysID = this.stringify.dtdSysID(c.sysID)));
            }
            return (
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).dtdNotation(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Hi.exports
  );
}
var rs;
function Ir() {
  return (
    rs ||
      ((rs = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o = function (s, u) {
            for (var l in u) c.call(u, l) && (s[l] = u[l]);
            function p() {
              this.constructor = s;
            }
            return (
              (p.prototype = u.prototype),
              (s.prototype = new p()),
              (s.__super__ = u.prototype),
              s
            );
          },
          c = {}.hasOwnProperty;
        ((a = Sn().isObject),
          (i = He()),
          (e = kr()),
          (t = Wr()),
          (n = Rr()),
          (r = Or()),
          (zi.exports = (function (s) {
            o(u, s);
            function u(l, p, m) {
              var b, y;
              (u.__super__.constructor.call(this, l),
                (this.name = "!DOCTYPE"),
                (this.documentObject = l),
                a(p) && ((b = p), (p = b.pubID), (m = b.sysID)),
                m == null && ((y = [p, m]), (m = y[0]), (p = y[1])),
                p != null && (this.pubID = this.stringify.dtdPubID(p)),
                m != null && (this.sysID = this.stringify.dtdSysID(m)));
            }
            return (
              (u.prototype.element = function (l, p) {
                var m;
                return ((m = new n(this, l, p)), this.children.push(m), this);
              }),
              (u.prototype.attList = function (l, p, m, b, y) {
                var f;
                return (
                  (f = new e(this, l, p, m, b, y)),
                  this.children.push(f),
                  this
                );
              }),
              (u.prototype.entity = function (l, p) {
                var m;
                return (
                  (m = new t(this, !1, l, p)),
                  this.children.push(m),
                  this
                );
              }),
              (u.prototype.pEntity = function (l, p) {
                var m;
                return (
                  (m = new t(this, !0, l, p)),
                  this.children.push(m),
                  this
                );
              }),
              (u.prototype.notation = function (l, p) {
                var m;
                return ((m = new r(this, l, p)), this.children.push(m), this);
              }),
              (u.prototype.toString = function (l) {
                return this.options.writer.set(l).docType(this);
              }),
              (u.prototype.ele = function (l, p) {
                return this.element(l, p);
              }),
              (u.prototype.att = function (l, p, m, b, y) {
                return this.attList(l, p, m, b, y);
              }),
              (u.prototype.ent = function (l, p) {
                return this.entity(l, p);
              }),
              (u.prototype.pent = function (l, p) {
                return this.pEntity(l, p);
              }),
              (u.prototype.not = function (l, p) {
                return this.notation(l, p);
              }),
              (u.prototype.up = function () {
                return this.root() || this.documentObject;
              }),
              u
            );
          })(i)));
      }.call(fe)),
    zi.exports
  );
}
var $i = { exports: {} },
  is;
function Nr() {
  return (
    is ||
      ((is = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          ($i.exports = (function (r) {
            n(i, r);
            function i(a, o) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error("Missing raw text. " + this.debugInfo());
              this.value = this.stringify.raw(o);
            }
            return (
              (i.prototype.clone = function () {
                return Object.create(this);
              }),
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).raw(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    $i.exports
  );
}
var Gi = { exports: {} },
  as;
function Lr() {
  return (
    as ||
      ((as = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Gi.exports = (function (r) {
            n(i, r);
            function i(a, o) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error("Missing element text. " + this.debugInfo());
              this.value = this.stringify.eleText(o);
            }
            return (
              (i.prototype.clone = function () {
                return Object.create(this);
              }),
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).text(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Gi.exports
  );
}
var Yi = { exports: {} },
  os;
function Mr() {
  return (
    os ||
      ((os = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Yi.exports = (function (r) {
            n(i, r);
            function i(a, o, c) {
              if ((i.__super__.constructor.call(this, a), o == null))
                throw new Error(
                  "Missing instruction target. " + this.debugInfo(),
                );
              ((this.target = this.stringify.insTarget(o)),
                c && (this.value = this.stringify.insValue(c)));
            }
            return (
              (i.prototype.clone = function () {
                return Object.create(this);
              }),
              (i.prototype.toString = function (a) {
                return this.options.writer.set(a).processingInstruction(this);
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Yi.exports
  );
}
var Zi = { exports: {} },
  cs;
function go() {
  return (
    cs ||
      ((cs = 1),
      function () {
        var e,
          n = function (r, i) {
            for (var a in i) t.call(i, a) && (r[a] = i[a]);
            function o() {
              this.constructor = r;
            }
            return (
              (o.prototype = i.prototype),
              (r.prototype = new o()),
              (r.__super__ = i.prototype),
              r
            );
          },
          t = {}.hasOwnProperty;
        ((e = He()),
          (Zi.exports = (function (r) {
            n(i, r);
            function i(a) {
              (i.__super__.constructor.call(this, a), (this.isDummy = !0));
            }
            return (
              (i.prototype.clone = function () {
                return Object.create(this);
              }),
              (i.prototype.toString = function (a) {
                return "";
              }),
              i
            );
          })(e)));
      }.call(fe)),
    Zi.exports
  );
}
var ss;
function He() {
  return (
    ss ||
      ((ss = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o,
          c,
          s,
          u,
          l,
          p,
          m,
          b,
          y = {}.hasOwnProperty;
        ((b = Sn()),
          (m = b.isObject),
          (p = b.isFunction),
          (l = b.isEmpty),
          (u = b.getValue),
          (a = null),
          (e = null),
          (n = null),
          (t = null),
          (r = null),
          (c = null),
          (s = null),
          (o = null),
          (i = null),
          (Ii.exports = (function () {
            function f(d) {
              ((this.parent = d),
                this.parent &&
                  ((this.options = this.parent.options),
                  (this.stringify = this.parent.stringify)),
                (this.children = []),
                a ||
                  ((a = Cr()),
                  (e = Fr()),
                  (n = Sr()),
                  (t = Br()),
                  (r = Ir()),
                  (c = Nr()),
                  (s = Lr()),
                  (o = Mr()),
                  (i = go())));
            }
            return (
              (f.prototype.element = function (d, g, h) {
                var D, _, U, w, E, O, I, Y, ee, T, N;
                if (
                  ((O = null),
                  g === null &&
                    h == null &&
                    ((ee = [{}, null]), (g = ee[0]), (h = ee[1])),
                  g == null && (g = {}),
                  (g = u(g)),
                  m(g) || ((T = [g, h]), (h = T[0]), (g = T[1])),
                  d != null && (d = u(d)),
                  Array.isArray(d))
                )
                  for (U = 0, I = d.length; U < I; U++)
                    ((_ = d[U]), (O = this.element(_)));
                else if (p(d)) O = this.element(d.apply());
                else if (m(d)) {
                  for (E in d)
                    if (y.call(d, E))
                      if (
                        ((N = d[E]),
                        p(N) && (N = N.apply()),
                        m(N) && l(N) && (N = null),
                        !this.options.ignoreDecorators &&
                          this.stringify.convertAttKey &&
                          E.indexOf(this.stringify.convertAttKey) === 0)
                      )
                        O = this.attribute(
                          E.substr(this.stringify.convertAttKey.length),
                          N,
                        );
                      else if (
                        !this.options.separateArrayItems &&
                        Array.isArray(N)
                      )
                        for (w = 0, Y = N.length; w < Y; w++)
                          ((_ = N[w]),
                            (D = {}),
                            (D[E] = _),
                            (O = this.element(D)));
                      else
                        m(N)
                          ? ((O = this.element(E)), O.element(N))
                          : (O = this.element(E, N));
                } else
                  this.options.skipNullNodes && h === null
                    ? (O = this.dummy())
                    : !this.options.ignoreDecorators &&
                        this.stringify.convertTextKey &&
                        d.indexOf(this.stringify.convertTextKey) === 0
                      ? (O = this.text(h))
                      : !this.options.ignoreDecorators &&
                          this.stringify.convertCDataKey &&
                          d.indexOf(this.stringify.convertCDataKey) === 0
                        ? (O = this.cdata(h))
                        : !this.options.ignoreDecorators &&
                            this.stringify.convertCommentKey &&
                            d.indexOf(this.stringify.convertCommentKey) === 0
                          ? (O = this.comment(h))
                          : !this.options.ignoreDecorators &&
                              this.stringify.convertRawKey &&
                              d.indexOf(this.stringify.convertRawKey) === 0
                            ? (O = this.raw(h))
                            : !this.options.ignoreDecorators &&
                                this.stringify.convertPIKey &&
                                d.indexOf(this.stringify.convertPIKey) === 0
                              ? (O = this.instruction(
                                  d.substr(this.stringify.convertPIKey.length),
                                  h,
                                ))
                              : (O = this.node(d, g, h));
                if (O == null)
                  throw new Error(
                    "Could not create any elements with: " +
                      d +
                      ". " +
                      this.debugInfo(),
                  );
                return O;
              }),
              (f.prototype.insertBefore = function (d, g, h) {
                var D, _, U;
                if (this.isRoot)
                  throw new Error(
                    "Cannot insert elements at root level. " +
                      this.debugInfo(d),
                  );
                return (
                  (_ = this.parent.children.indexOf(this)),
                  (U = this.parent.children.splice(_)),
                  (D = this.parent.element(d, g, h)),
                  Array.prototype.push.apply(this.parent.children, U),
                  D
                );
              }),
              (f.prototype.insertAfter = function (d, g, h) {
                var D, _, U;
                if (this.isRoot)
                  throw new Error(
                    "Cannot insert elements at root level. " +
                      this.debugInfo(d),
                  );
                return (
                  (_ = this.parent.children.indexOf(this)),
                  (U = this.parent.children.splice(_ + 1)),
                  (D = this.parent.element(d, g, h)),
                  Array.prototype.push.apply(this.parent.children, U),
                  D
                );
              }),
              (f.prototype.remove = function () {
                var d;
                if (this.isRoot)
                  throw new Error(
                    "Cannot remove the root element. " + this.debugInfo(),
                  );
                return (
                  (d = this.parent.children.indexOf(this)),
                  [].splice.apply(
                    this.parent.children,
                    [d, d - d + 1].concat([]),
                  ),
                  this.parent
                );
              }),
              (f.prototype.node = function (d, g, h) {
                var D, _;
                return (
                  d != null && (d = u(d)),
                  g || (g = {}),
                  (g = u(g)),
                  m(g) || ((_ = [g, h]), (h = _[0]), (g = _[1])),
                  (D = new a(this, d, g)),
                  h != null && D.text(h),
                  this.children.push(D),
                  D
                );
              }),
              (f.prototype.text = function (d) {
                var g;
                return ((g = new s(this, d)), this.children.push(g), this);
              }),
              (f.prototype.cdata = function (d) {
                var g;
                return ((g = new e(this, d)), this.children.push(g), this);
              }),
              (f.prototype.comment = function (d) {
                var g;
                return ((g = new n(this, d)), this.children.push(g), this);
              }),
              (f.prototype.commentBefore = function (d) {
                var g, h;
                return (
                  (g = this.parent.children.indexOf(this)),
                  (h = this.parent.children.splice(g)),
                  this.parent.comment(d),
                  Array.prototype.push.apply(this.parent.children, h),
                  this
                );
              }),
              (f.prototype.commentAfter = function (d) {
                var g, h;
                return (
                  (g = this.parent.children.indexOf(this)),
                  (h = this.parent.children.splice(g + 1)),
                  this.parent.comment(d),
                  Array.prototype.push.apply(this.parent.children, h),
                  this
                );
              }),
              (f.prototype.raw = function (d) {
                var g;
                return ((g = new c(this, d)), this.children.push(g), this);
              }),
              (f.prototype.dummy = function () {
                var d;
                return ((d = new i(this)), this.children.push(d), d);
              }),
              (f.prototype.instruction = function (d, g) {
                var h, D, _, U, w;
                if (
                  (d != null && (d = u(d)),
                  g != null && (g = u(g)),
                  Array.isArray(d))
                )
                  for (U = 0, w = d.length; U < w; U++)
                    ((h = d[U]), this.instruction(h));
                else if (m(d))
                  for (h in d)
                    y.call(d, h) && ((D = d[h]), this.instruction(h, D));
                else
                  (p(g) && (g = g.apply()),
                    (_ = new o(this, d, g)),
                    this.children.push(_));
                return this;
              }),
              (f.prototype.instructionBefore = function (d, g) {
                var h, D;
                return (
                  (h = this.parent.children.indexOf(this)),
                  (D = this.parent.children.splice(h)),
                  this.parent.instruction(d, g),
                  Array.prototype.push.apply(this.parent.children, D),
                  this
                );
              }),
              (f.prototype.instructionAfter = function (d, g) {
                var h, D;
                return (
                  (h = this.parent.children.indexOf(this)),
                  (D = this.parent.children.splice(h + 1)),
                  this.parent.instruction(d, g),
                  Array.prototype.push.apply(this.parent.children, D),
                  this
                );
              }),
              (f.prototype.declaration = function (d, g, h) {
                var D, _;
                return (
                  (D = this.document()),
                  (_ = new t(D, d, g, h)),
                  D.children[0] instanceof t
                    ? (D.children[0] = _)
                    : D.children.unshift(_),
                  D.root() || D
                );
              }),
              (f.prototype.doctype = function (d, g) {
                var h, D, _, U, w, E, O, I, Y, ee;
                for (
                  D = this.document(),
                    _ = new r(D, d, g),
                    Y = D.children,
                    U = w = 0,
                    O = Y.length;
                  w < O;
                  U = ++w
                )
                  if (((h = Y[U]), h instanceof r))
                    return ((D.children[U] = _), _);
                for (ee = D.children, U = E = 0, I = ee.length; E < I; U = ++E)
                  if (((h = ee[U]), h.isRoot))
                    return (D.children.splice(U, 0, _), _);
                return (D.children.push(_), _);
              }),
              (f.prototype.up = function () {
                if (this.isRoot)
                  throw new Error(
                    "The root node has no parent. Use doc() if you need to get the document object.",
                  );
                return this.parent;
              }),
              (f.prototype.root = function () {
                var d;
                for (d = this; d; ) {
                  if (d.isDocument) return d.rootObject;
                  if (d.isRoot) return d;
                  d = d.parent;
                }
              }),
              (f.prototype.document = function () {
                var d;
                for (d = this; d; ) {
                  if (d.isDocument) return d;
                  d = d.parent;
                }
              }),
              (f.prototype.end = function (d) {
                return this.document().end(d);
              }),
              (f.prototype.prev = function () {
                var d;
                for (
                  d = this.parent.children.indexOf(this);
                  d > 0 && this.parent.children[d - 1].isDummy;
                )
                  d = d - 1;
                if (d < 1)
                  throw new Error(
                    "Already at the first node. " + this.debugInfo(),
                  );
                return this.parent.children[d - 1];
              }),
              (f.prototype.next = function () {
                var d;
                for (
                  d = this.parent.children.indexOf(this);
                  d < this.parent.children.length - 1 &&
                  this.parent.children[d + 1].isDummy;
                )
                  d = d + 1;
                if (d === -1 || d === this.parent.children.length - 1)
                  throw new Error(
                    "Already at the last node. " + this.debugInfo(),
                  );
                return this.parent.children[d + 1];
              }),
              (f.prototype.importDocument = function (d) {
                var g;
                return (
                  (g = d.root().clone()),
                  (g.parent = this),
                  (g.isRoot = !1),
                  this.children.push(g),
                  this
                );
              }),
              (f.prototype.debugInfo = function (d) {
                var g, h;
                return (
                  (d = d || this.name),
                  d == null && !((g = this.parent) != null && g.name)
                    ? ""
                    : d == null
                      ? "parent: <" + this.parent.name + ">"
                      : (h = this.parent) != null && h.name
                        ? "node: <" +
                          d +
                          ">, parent: <" +
                          this.parent.name +
                          ">"
                        : "node: <" + d + ">"
                );
              }),
              (f.prototype.ele = function (d, g, h) {
                return this.element(d, g, h);
              }),
              (f.prototype.nod = function (d, g, h) {
                return this.node(d, g, h);
              }),
              (f.prototype.txt = function (d) {
                return this.text(d);
              }),
              (f.prototype.dat = function (d) {
                return this.cdata(d);
              }),
              (f.prototype.com = function (d) {
                return this.comment(d);
              }),
              (f.prototype.ins = function (d, g) {
                return this.instruction(d, g);
              }),
              (f.prototype.doc = function () {
                return this.document();
              }),
              (f.prototype.dec = function (d, g, h) {
                return this.declaration(d, g, h);
              }),
              (f.prototype.dtd = function (d, g) {
                return this.doctype(d, g);
              }),
              (f.prototype.e = function (d, g, h) {
                return this.element(d, g, h);
              }),
              (f.prototype.n = function (d, g, h) {
                return this.node(d, g, h);
              }),
              (f.prototype.t = function (d) {
                return this.text(d);
              }),
              (f.prototype.d = function (d) {
                return this.cdata(d);
              }),
              (f.prototype.c = function (d) {
                return this.comment(d);
              }),
              (f.prototype.r = function (d) {
                return this.raw(d);
              }),
              (f.prototype.i = function (d, g) {
                return this.instruction(d, g);
              }),
              (f.prototype.u = function () {
                return this.up();
              }),
              (f.prototype.importXMLBuilder = function (d) {
                return this.importDocument(d);
              }),
              f
            );
          })()));
      }.call(fe)),
    Ii.exports
  );
}
var Ki = { exports: {} },
  us;
function al() {
  return (
    us ||
      ((us = 1),
      function () {
        var e = function (t, r) {
            return function () {
              return t.apply(r, arguments);
            };
          },
          n = {}.hasOwnProperty;
        Ki.exports = (function () {
          function t(r) {
            this.assertLegalChar = e(this.assertLegalChar, this);
            var i, a, o;
            (r || (r = {}),
              (this.noDoubleEncoding = r.noDoubleEncoding),
              (a = r.stringify || {}));
            for (i in a) n.call(a, i) && ((o = a[i]), (this[i] = o));
          }
          return (
            (t.prototype.eleName = function (r) {
              return ((r = "" + r || ""), this.assertLegalChar(r));
            }),
            (t.prototype.eleText = function (r) {
              return (
                (r = "" + r || ""),
                this.assertLegalChar(this.elEscape(r))
              );
            }),
            (t.prototype.cdata = function (r) {
              return (
                (r = "" + r || ""),
                (r = r.replace("]]>", "]]]]><![CDATA[>")),
                this.assertLegalChar(r)
              );
            }),
            (t.prototype.comment = function (r) {
              if (((r = "" + r || ""), r.match(/--/)))
                throw new Error(
                  "Comment text cannot contain double-hypen: " + r,
                );
              return this.assertLegalChar(r);
            }),
            (t.prototype.raw = function (r) {
              return "" + r || "";
            }),
            (t.prototype.attName = function (r) {
              return (r = "" + r || "");
            }),
            (t.prototype.attValue = function (r) {
              return ((r = "" + r || ""), this.attEscape(r));
            }),
            (t.prototype.insTarget = function (r) {
              return "" + r || "";
            }),
            (t.prototype.insValue = function (r) {
              if (((r = "" + r || ""), r.match(/\?>/)))
                throw new Error("Invalid processing instruction value: " + r);
              return r;
            }),
            (t.prototype.xmlVersion = function (r) {
              if (((r = "" + r || ""), !r.match(/1\.[0-9]+/)))
                throw new Error("Invalid version number: " + r);
              return r;
            }),
            (t.prototype.xmlEncoding = function (r) {
              if (
                ((r = "" + r || ""), !r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))
              )
                throw new Error("Invalid encoding: " + r);
              return r;
            }),
            (t.prototype.xmlStandalone = function (r) {
              return r ? "yes" : "no";
            }),
            (t.prototype.dtdPubID = function (r) {
              return "" + r || "";
            }),
            (t.prototype.dtdSysID = function (r) {
              return "" + r || "";
            }),
            (t.prototype.dtdElementValue = function (r) {
              return "" + r || "";
            }),
            (t.prototype.dtdAttType = function (r) {
              return "" + r || "";
            }),
            (t.prototype.dtdAttDefault = function (r) {
              return r != null ? "" + r || "" : r;
            }),
            (t.prototype.dtdEntityValue = function (r) {
              return "" + r || "";
            }),
            (t.prototype.dtdNData = function (r) {
              return "" + r || "";
            }),
            (t.prototype.convertAttKey = "@"),
            (t.prototype.convertPIKey = "?"),
            (t.prototype.convertTextKey = "#text"),
            (t.prototype.convertCDataKey = "#cdata"),
            (t.prototype.convertCommentKey = "#comment"),
            (t.prototype.convertRawKey = "#raw"),
            (t.prototype.assertLegalChar = function (r) {
              var i;
              if (
                ((i = r.match(
                  /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
                )),
                i)
              )
                throw new Error(
                  "Invalid character in string: " + r + " at index " + i.index,
                );
              return r;
            }),
            (t.prototype.elEscape = function (r) {
              var i;
              return (
                (i = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g),
                r
                  .replace(i, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/\r/g, "&#xD;")
              );
            }),
            (t.prototype.attEscape = function (r) {
              var i;
              return (
                (i = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g),
                r
                  .replace(i, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/"/g, "&quot;")
                  .replace(/\t/g, "&#x9;")
                  .replace(/\n/g, "&#xA;")
                  .replace(/\r/g, "&#xD;")
              );
            }),
            t
          );
        })();
      }.call(fe)),
    Ki.exports
  );
}
var Qi = { exports: {} },
  Ji = { exports: {} },
  ds;
function ol() {
  return (
    ds ||
      ((ds = 1),
      function () {
        var e = {}.hasOwnProperty;
        Ji.exports = (function () {
          function n(t) {
            var r, i, a, o, c, s, u, l, p;
            (t || (t = {}),
              (this.pretty = t.pretty || !1),
              (this.allowEmpty = (i = t.allowEmpty) != null ? i : !1),
              this.pretty
                ? ((this.indent = (a = t.indent) != null ? a : "  "),
                  (this.newline =
                    (o = t.newline) != null
                      ? o
                      : `
`),
                  (this.offset = (c = t.offset) != null ? c : 0),
                  (this.dontprettytextnodes =
                    (s = t.dontprettytextnodes) != null ? s : 0))
                : ((this.indent = ""),
                  (this.newline = ""),
                  (this.offset = 0),
                  (this.dontprettytextnodes = 0)),
              (this.spacebeforeslash =
                (u = t.spacebeforeslash) != null ? u : ""),
              this.spacebeforeslash === !0 && (this.spacebeforeslash = " "),
              (this.newlinedefault = this.newline),
              (this.prettydefault = this.pretty),
              (l = t.writer || {}));
            for (r in l) e.call(l, r) && ((p = l[r]), (this[r] = p));
          }
          return (
            (n.prototype.set = function (t) {
              var r, i, a;
              (t || (t = {}),
                "pretty" in t && (this.pretty = t.pretty),
                "allowEmpty" in t && (this.allowEmpty = t.allowEmpty),
                this.pretty
                  ? ((this.indent = "indent" in t ? t.indent : "  "),
                    (this.newline =
                      "newline" in t
                        ? t.newline
                        : `
`),
                    (this.offset = "offset" in t ? t.offset : 0),
                    (this.dontprettytextnodes =
                      "dontprettytextnodes" in t ? t.dontprettytextnodes : 0))
                  : ((this.indent = ""),
                    (this.newline = ""),
                    (this.offset = 0),
                    (this.dontprettytextnodes = 0)),
                (this.spacebeforeslash =
                  "spacebeforeslash" in t ? t.spacebeforeslash : ""),
                this.spacebeforeslash === !0 && (this.spacebeforeslash = " "),
                (this.newlinedefault = this.newline),
                (this.prettydefault = this.pretty),
                (i = t.writer || {}));
              for (r in i) e.call(i, r) && ((a = i[r]), (this[r] = a));
              return this;
            }),
            (n.prototype.space = function (t) {
              var r;
              return this.pretty
                ? ((r = (t || 0) + this.offset + 1),
                  r > 0 ? new Array(r).join(this.indent) : "")
                : "";
            }),
            n
          );
        })();
      }.call(fe)),
    Ji.exports
  );
}
var ls;
function mo() {
  return (
    ls ||
      ((ls = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o,
          c,
          s,
          u,
          l,
          p,
          m,
          b,
          y = function (d, g) {
            for (var h in g) f.call(g, h) && (d[h] = g[h]);
            function D() {
              this.constructor = d;
            }
            return (
              (D.prototype = g.prototype),
              (d.prototype = new D()),
              (d.__super__ = g.prototype),
              d
            );
          },
          f = {}.hasOwnProperty;
        ((o = Br()),
          (c = Ir()),
          (e = Fr()),
          (n = Sr()),
          (u = Cr()),
          (p = Nr()),
          (m = Lr()),
          (l = Mr()),
          (s = go()),
          (t = kr()),
          (r = Rr()),
          (i = Wr()),
          (a = Or()),
          (b = ol()),
          (Qi.exports = (function (d) {
            y(g, d);
            function g(h) {
              g.__super__.constructor.call(this, h);
            }
            return (
              (g.prototype.document = function (h) {
                var D, _, U, w, E;
                for (
                  this.textispresent = !1,
                    w = "",
                    E = h.children,
                    _ = 0,
                    U = E.length;
                  _ < U;
                  _++
                )
                  ((D = E[_]),
                    !(D instanceof s) &&
                      (w += function () {
                        switch (!1) {
                          case !(D instanceof o):
                            return this.declaration(D);
                          case !(D instanceof c):
                            return this.docType(D);
                          case !(D instanceof n):
                            return this.comment(D);
                          case !(D instanceof l):
                            return this.processingInstruction(D);
                          default:
                            return this.element(D, 0);
                        }
                      }.call(this)));
                return (
                  this.pretty &&
                    w.slice(-this.newline.length) === this.newline &&
                    (w = w.slice(0, -this.newline.length)),
                  w
                );
              }),
              (g.prototype.attribute = function (h) {
                return " " + h.name + '="' + h.value + '"';
              }),
              (g.prototype.cdata = function (h, D) {
                return (
                  this.space(D) + "<![CDATA[" + h.text + "]]>" + this.newline
                );
              }),
              (g.prototype.comment = function (h, D) {
                return this.space(D) + "<!-- " + h.text + " -->" + this.newline;
              }),
              (g.prototype.declaration = function (h, D) {
                var _;
                return (
                  (_ = this.space(D)),
                  (_ += '<?xml version="' + h.version + '"'),
                  h.encoding != null && (_ += ' encoding="' + h.encoding + '"'),
                  h.standalone != null &&
                    (_ += ' standalone="' + h.standalone + '"'),
                  (_ += this.spacebeforeslash + "?>"),
                  (_ += this.newline),
                  _
                );
              }),
              (g.prototype.docType = function (h, D) {
                var _, U, w, E, O;
                if (
                  (D || (D = 0),
                  (E = this.space(D)),
                  (E += "<!DOCTYPE " + h.root().name),
                  h.pubID && h.sysID
                    ? (E += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"')
                    : h.sysID && (E += ' SYSTEM "' + h.sysID + '"'),
                  h.children.length > 0)
                ) {
                  for (
                    E += " [",
                      E += this.newline,
                      O = h.children,
                      U = 0,
                      w = O.length;
                    U < w;
                    U++
                  )
                    ((_ = O[U]),
                      (E += function () {
                        switch (!1) {
                          case !(_ instanceof t):
                            return this.dtdAttList(_, D + 1);
                          case !(_ instanceof r):
                            return this.dtdElement(_, D + 1);
                          case !(_ instanceof i):
                            return this.dtdEntity(_, D + 1);
                          case !(_ instanceof a):
                            return this.dtdNotation(_, D + 1);
                          case !(_ instanceof e):
                            return this.cdata(_, D + 1);
                          case !(_ instanceof n):
                            return this.comment(_, D + 1);
                          case !(_ instanceof l):
                            return this.processingInstruction(_, D + 1);
                          default:
                            throw new Error(
                              "Unknown DTD node type: " + _.constructor.name,
                            );
                        }
                      }.call(this)));
                  E += "]";
                }
                return (
                  (E += this.spacebeforeslash + ">"),
                  (E += this.newline),
                  E
                );
              }),
              (g.prototype.element = function (h, D) {
                var _, U, w, E, O, I, Y, ee, T, N, x, j, C;
                (D || (D = 0),
                  (C = !1),
                  this.textispresent
                    ? ((this.newline = ""), (this.pretty = !1))
                    : ((this.newline = this.newlinedefault),
                      (this.pretty = this.prettydefault)),
                  (j = this.space(D)),
                  (ee = ""),
                  (ee += j + "<" + h.name),
                  (T = h.attributes));
                for (Y in T)
                  f.call(T, Y) && ((_ = T[Y]), (ee += this.attribute(_)));
                if (
                  h.children.length === 0 ||
                  h.children.every(function (k) {
                    return k.value === "";
                  })
                )
                  this.allowEmpty
                    ? (ee += "></" + h.name + ">" + this.newline)
                    : (ee += this.spacebeforeslash + "/>" + this.newline);
                else if (
                  this.pretty &&
                  h.children.length === 1 &&
                  h.children[0].value != null
                )
                  ((ee += ">"),
                    (ee += h.children[0].value),
                    (ee += "</" + h.name + ">" + this.newline));
                else {
                  if (this.dontprettytextnodes) {
                    for (N = h.children, w = 0, O = N.length; w < O; w++)
                      if (((U = N[w]), U.value != null)) {
                        (this.textispresent++, (C = !0));
                        break;
                      }
                  }
                  for (
                    this.textispresent &&
                      ((this.newline = ""),
                      (this.pretty = !1),
                      (j = this.space(D))),
                      ee += ">" + this.newline,
                      x = h.children,
                      E = 0,
                      I = x.length;
                    E < I;
                    E++
                  )
                    ((U = x[E]),
                      (ee += function () {
                        switch (!1) {
                          case !(U instanceof e):
                            return this.cdata(U, D + 1);
                          case !(U instanceof n):
                            return this.comment(U, D + 1);
                          case !(U instanceof u):
                            return this.element(U, D + 1);
                          case !(U instanceof p):
                            return this.raw(U, D + 1);
                          case !(U instanceof m):
                            return this.text(U, D + 1);
                          case !(U instanceof l):
                            return this.processingInstruction(U, D + 1);
                          case !(U instanceof s):
                            return "";
                          default:
                            throw new Error(
                              "Unknown XML node type: " + U.constructor.name,
                            );
                        }
                      }.call(this)));
                  (C && this.textispresent--,
                    this.textispresent ||
                      ((this.newline = this.newlinedefault),
                      (this.pretty = this.prettydefault)),
                    (ee += j + "</" + h.name + ">" + this.newline));
                }
                return ee;
              }),
              (g.prototype.processingInstruction = function (h, D) {
                var _;
                return (
                  (_ = this.space(D) + "<?" + h.target),
                  h.value && (_ += " " + h.value),
                  (_ += this.spacebeforeslash + "?>" + this.newline),
                  _
                );
              }),
              (g.prototype.raw = function (h, D) {
                return this.space(D) + h.value + this.newline;
              }),
              (g.prototype.text = function (h, D) {
                return this.space(D) + h.value + this.newline;
              }),
              (g.prototype.dtdAttList = function (h, D) {
                var _;
                return (
                  (_ =
                    this.space(D) +
                    "<!ATTLIST " +
                    h.elementName +
                    " " +
                    h.attributeName +
                    " " +
                    h.attributeType),
                  h.defaultValueType !== "#DEFAULT" &&
                    (_ += " " + h.defaultValueType),
                  h.defaultValue && (_ += ' "' + h.defaultValue + '"'),
                  (_ += this.spacebeforeslash + ">" + this.newline),
                  _
                );
              }),
              (g.prototype.dtdElement = function (h, D) {
                return (
                  this.space(D) +
                  "<!ELEMENT " +
                  h.name +
                  " " +
                  h.value +
                  this.spacebeforeslash +
                  ">" +
                  this.newline
                );
              }),
              (g.prototype.dtdEntity = function (h, D) {
                var _;
                return (
                  (_ = this.space(D) + "<!ENTITY"),
                  h.pe && (_ += " %"),
                  (_ += " " + h.name),
                  h.value
                    ? (_ += ' "' + h.value + '"')
                    : (h.pubID && h.sysID
                        ? (_ += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"')
                        : h.sysID && (_ += ' SYSTEM "' + h.sysID + '"'),
                      h.nData && (_ += " NDATA " + h.nData)),
                  (_ += this.spacebeforeslash + ">" + this.newline),
                  _
                );
              }),
              (g.prototype.dtdNotation = function (h, D) {
                var _;
                return (
                  (_ = this.space(D) + "<!NOTATION " + h.name),
                  h.pubID && h.sysID
                    ? (_ += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"')
                    : h.pubID
                      ? (_ += ' PUBLIC "' + h.pubID + '"')
                      : h.sysID && (_ += ' SYSTEM "' + h.sysID + '"'),
                  (_ += this.spacebeforeslash + ">" + this.newline),
                  _
                );
              }),
              (g.prototype.openNode = function (h, D) {
                var _, U, w, E;
                if ((D || (D = 0), h instanceof u)) {
                  ((w = this.space(D) + "<" + h.name), (E = h.attributes));
                  for (U in E)
                    f.call(E, U) && ((_ = E[U]), (w += this.attribute(_)));
                  return ((w += (h.children ? ">" : "/>") + this.newline), w);
                } else
                  return (
                    (w = this.space(D) + "<!DOCTYPE " + h.rootNodeName),
                    h.pubID && h.sysID
                      ? (w += ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"')
                      : h.sysID && (w += ' SYSTEM "' + h.sysID + '"'),
                    (w += (h.children ? " [" : ">") + this.newline),
                    w
                  );
              }),
              (g.prototype.closeNode = function (h, D) {
                switch ((D || (D = 0), !1)) {
                  case !(h instanceof u):
                    return this.space(D) + "</" + h.name + ">" + this.newline;
                  case !(h instanceof c):
                    return this.space(D) + "]>" + this.newline;
                }
              }),
              g
            );
          })(b)));
      }.call(fe)),
    Qi.exports
  );
}
var fs;
function jp() {
  return (
    fs ||
      ((fs = 1),
      function () {
        var e,
          n,
          t,
          r,
          i = function (o, c) {
            for (var s in c) a.call(c, s) && (o[s] = c[s]);
            function u() {
              this.constructor = o;
            }
            return (
              (u.prototype = c.prototype),
              (o.prototype = new u()),
              (o.__super__ = c.prototype),
              o
            );
          },
          a = {}.hasOwnProperty;
        ((r = Sn().isPlainObject),
          (e = He()),
          (t = al()),
          (n = mo()),
          (Oi.exports = (function (o) {
            i(c, o);
            function c(s) {
              (c.__super__.constructor.call(this, null),
                (this.name = "?xml"),
                s || (s = {}),
                s.writer || (s.writer = new n()),
                (this.options = s),
                (this.stringify = new t(s)),
                (this.isDocument = !0));
            }
            return (
              (c.prototype.end = function (s) {
                var u;
                return (
                  s
                    ? r(s) && ((u = s), (s = this.options.writer.set(u)))
                    : (s = this.options.writer),
                  s.document(this)
                );
              }),
              (c.prototype.toString = function (s) {
                return this.options.writer.set(s).document(this);
              }),
              c
            );
          })(e)));
      }.call(fe)),
    Oi.exports
  );
}
var ea = { exports: {} },
  hs;
function Vp() {
  return (
    hs ||
      ((hs = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o,
          c,
          s,
          u,
          l,
          p,
          m,
          b,
          y,
          f,
          d,
          g,
          h,
          D,
          _ = {}.hasOwnProperty;
        ((D = Sn()),
          (g = D.isObject),
          (d = D.isFunction),
          (h = D.isPlainObject),
          (f = D.getValue),
          (u = Cr()),
          (n = Fr()),
          (t = Sr()),
          (p = Nr()),
          (y = Lr()),
          (l = Mr()),
          (c = Br()),
          (s = Ir()),
          (r = kr()),
          (a = Wr()),
          (i = Rr()),
          (o = Or()),
          (e = il()),
          (b = al()),
          (m = mo()),
          (ea.exports = (function () {
            function U(w, E, O) {
              var I;
              ((this.name = "?xml"),
                w || (w = {}),
                w.writer
                  ? h(w.writer) && ((I = w.writer), (w.writer = new m(I)))
                  : (w.writer = new m(w)),
                (this.options = w),
                (this.writer = w.writer),
                (this.stringify = new b(w)),
                (this.onDataCallback = E || function () {}),
                (this.onEndCallback = O || function () {}),
                (this.currentNode = null),
                (this.currentLevel = -1),
                (this.openTags = {}),
                (this.documentStarted = !1),
                (this.documentCompleted = !1),
                (this.root = null));
            }
            return (
              (U.prototype.node = function (w, E, O) {
                var I, Y;
                if (w == null) throw new Error("Missing node name.");
                if (this.root && this.currentLevel === -1)
                  throw new Error(
                    "Document can only have one root node. " +
                      this.debugInfo(w),
                  );
                return (
                  this.openCurrent(),
                  (w = f(w)),
                  E === null &&
                    O == null &&
                    ((I = [{}, null]), (E = I[0]), (O = I[1])),
                  E == null && (E = {}),
                  (E = f(E)),
                  g(E) || ((Y = [E, O]), (O = Y[0]), (E = Y[1])),
                  (this.currentNode = new u(this, w, E)),
                  (this.currentNode.children = !1),
                  this.currentLevel++,
                  (this.openTags[this.currentLevel] = this.currentNode),
                  O != null && this.text(O),
                  this
                );
              }),
              (U.prototype.element = function (w, E, O) {
                return this.currentNode && this.currentNode instanceof s
                  ? this.dtdElement.apply(this, arguments)
                  : this.node(w, E, O);
              }),
              (U.prototype.attribute = function (w, E) {
                var O, I;
                if (!this.currentNode || this.currentNode.children)
                  throw new Error(
                    "att() can only be used immediately after an ele() call in callback mode. " +
                      this.debugInfo(w),
                  );
                if ((w != null && (w = f(w)), g(w)))
                  for (O in w)
                    _.call(w, O) && ((I = w[O]), this.attribute(O, I));
                else
                  (d(E) && (E = E.apply()),
                    (!this.options.skipNullAttributes || E != null) &&
                      (this.currentNode.attributes[w] = new e(this, w, E)));
                return this;
              }),
              (U.prototype.text = function (w) {
                var E;
                return (
                  this.openCurrent(),
                  (E = new y(this, w)),
                  this.onData(
                    this.writer.text(E, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.cdata = function (w) {
                var E;
                return (
                  this.openCurrent(),
                  (E = new n(this, w)),
                  this.onData(
                    this.writer.cdata(E, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.comment = function (w) {
                var E;
                return (
                  this.openCurrent(),
                  (E = new t(this, w)),
                  this.onData(
                    this.writer.comment(E, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.raw = function (w) {
                var E;
                return (
                  this.openCurrent(),
                  (E = new p(this, w)),
                  this.onData(
                    this.writer.raw(E, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.instruction = function (w, E) {
                var O, I, Y, ee, T;
                if (
                  (this.openCurrent(),
                  w != null && (w = f(w)),
                  E != null && (E = f(E)),
                  Array.isArray(w))
                )
                  for (O = 0, ee = w.length; O < ee; O++)
                    ((I = w[O]), this.instruction(I));
                else if (g(w))
                  for (I in w)
                    _.call(w, I) && ((Y = w[I]), this.instruction(I, Y));
                else
                  (d(E) && (E = E.apply()),
                    (T = new l(this, w, E)),
                    this.onData(
                      this.writer.processingInstruction(
                        T,
                        this.currentLevel + 1,
                      ),
                      this.currentLevel + 1,
                    ));
                return this;
              }),
              (U.prototype.declaration = function (w, E, O) {
                var I;
                if ((this.openCurrent(), this.documentStarted))
                  throw new Error("declaration() must be the first node.");
                return (
                  (I = new c(this, w, E, O)),
                  this.onData(
                    this.writer.declaration(I, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.doctype = function (w, E, O) {
                if ((this.openCurrent(), w == null))
                  throw new Error("Missing root node name.");
                if (this.root)
                  throw new Error("dtd() must come before the root node.");
                return (
                  (this.currentNode = new s(this, E, O)),
                  (this.currentNode.rootNodeName = w),
                  (this.currentNode.children = !1),
                  this.currentLevel++,
                  (this.openTags[this.currentLevel] = this.currentNode),
                  this
                );
              }),
              (U.prototype.dtdElement = function (w, E) {
                var O;
                return (
                  this.openCurrent(),
                  (O = new i(this, w, E)),
                  this.onData(
                    this.writer.dtdElement(O, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.attList = function (w, E, O, I, Y) {
                var ee;
                return (
                  this.openCurrent(),
                  (ee = new r(this, w, E, O, I, Y)),
                  this.onData(
                    this.writer.dtdAttList(ee, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.entity = function (w, E) {
                var O;
                return (
                  this.openCurrent(),
                  (O = new a(this, !1, w, E)),
                  this.onData(
                    this.writer.dtdEntity(O, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.pEntity = function (w, E) {
                var O;
                return (
                  this.openCurrent(),
                  (O = new a(this, !0, w, E)),
                  this.onData(
                    this.writer.dtdEntity(O, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.notation = function (w, E) {
                var O;
                return (
                  this.openCurrent(),
                  (O = new o(this, w, E)),
                  this.onData(
                    this.writer.dtdNotation(O, this.currentLevel + 1),
                    this.currentLevel + 1,
                  ),
                  this
                );
              }),
              (U.prototype.up = function () {
                if (this.currentLevel < 0)
                  throw new Error("The document node has no parent.");
                return (
                  this.currentNode
                    ? (this.currentNode.children
                        ? this.closeNode(this.currentNode)
                        : this.openNode(this.currentNode),
                      (this.currentNode = null))
                    : this.closeNode(this.openTags[this.currentLevel]),
                  delete this.openTags[this.currentLevel],
                  this.currentLevel--,
                  this
                );
              }),
              (U.prototype.end = function () {
                for (; this.currentLevel >= 0; ) this.up();
                return this.onEnd();
              }),
              (U.prototype.openCurrent = function () {
                if (this.currentNode)
                  return (
                    (this.currentNode.children = !0),
                    this.openNode(this.currentNode)
                  );
              }),
              (U.prototype.openNode = function (w) {
                if (!w.isOpen)
                  return (
                    !this.root &&
                      this.currentLevel === 0 &&
                      w instanceof u &&
                      (this.root = w),
                    this.onData(
                      this.writer.openNode(w, this.currentLevel),
                      this.currentLevel,
                    ),
                    (w.isOpen = !0)
                  );
              }),
              (U.prototype.closeNode = function (w) {
                if (!w.isClosed)
                  return (
                    this.onData(
                      this.writer.closeNode(w, this.currentLevel),
                      this.currentLevel,
                    ),
                    (w.isClosed = !0)
                  );
              }),
              (U.prototype.onData = function (w, E) {
                return (
                  (this.documentStarted = !0),
                  this.onDataCallback(w, E + 1)
                );
              }),
              (U.prototype.onEnd = function () {
                return ((this.documentCompleted = !0), this.onEndCallback());
              }),
              (U.prototype.debugInfo = function (w) {
                return w == null ? "" : "node: <" + w + ">";
              }),
              (U.prototype.ele = function () {
                return this.element.apply(this, arguments);
              }),
              (U.prototype.nod = function (w, E, O) {
                return this.node(w, E, O);
              }),
              (U.prototype.txt = function (w) {
                return this.text(w);
              }),
              (U.prototype.dat = function (w) {
                return this.cdata(w);
              }),
              (U.prototype.com = function (w) {
                return this.comment(w);
              }),
              (U.prototype.ins = function (w, E) {
                return this.instruction(w, E);
              }),
              (U.prototype.dec = function (w, E, O) {
                return this.declaration(w, E, O);
              }),
              (U.prototype.dtd = function (w, E, O) {
                return this.doctype(w, E, O);
              }),
              (U.prototype.e = function (w, E, O) {
                return this.element(w, E, O);
              }),
              (U.prototype.n = function (w, E, O) {
                return this.node(w, E, O);
              }),
              (U.prototype.t = function (w) {
                return this.text(w);
              }),
              (U.prototype.d = function (w) {
                return this.cdata(w);
              }),
              (U.prototype.c = function (w) {
                return this.comment(w);
              }),
              (U.prototype.r = function (w) {
                return this.raw(w);
              }),
              (U.prototype.i = function (w, E) {
                return this.instruction(w, E);
              }),
              (U.prototype.att = function () {
                return this.currentNode && this.currentNode instanceof s
                  ? this.attList.apply(this, arguments)
                  : this.attribute.apply(this, arguments);
              }),
              (U.prototype.a = function () {
                return this.currentNode && this.currentNode instanceof s
                  ? this.attList.apply(this, arguments)
                  : this.attribute.apply(this, arguments);
              }),
              (U.prototype.ent = function (w, E) {
                return this.entity(w, E);
              }),
              (U.prototype.pent = function (w, E) {
                return this.pEntity(w, E);
              }),
              (U.prototype.not = function (w, E) {
                return this.notation(w, E);
              }),
              U
            );
          })()));
      }.call(fe)),
    ea.exports
  );
}
var na = { exports: {} },
  ps;
function Xp() {
  return (
    ps ||
      ((ps = 1),
      function () {
        var e,
          n,
          t,
          r,
          i,
          a,
          o,
          c,
          s,
          u,
          l,
          p,
          m,
          b,
          y = function (d, g) {
            for (var h in g) f.call(g, h) && (d[h] = g[h]);
            function D() {
              this.constructor = d;
            }
            return (
              (D.prototype = g.prototype),
              (d.prototype = new D()),
              (d.__super__ = g.prototype),
              d
            );
          },
          f = {}.hasOwnProperty;
        ((o = Br()),
          (c = Ir()),
          (e = Fr()),
          (n = Sr()),
          (u = Cr()),
          (p = Nr()),
          (m = Lr()),
          (l = Mr()),
          (s = go()),
          (t = kr()),
          (r = Rr()),
          (i = Wr()),
          (a = Or()),
          (b = ol()),
          (na.exports = (function (d) {
            y(g, d);
            function g(h, D) {
              (g.__super__.constructor.call(this, D), (this.stream = h));
            }
            return (
              (g.prototype.document = function (h) {
                var D, _, U, w, E, O, I, Y;
                for (O = h.children, _ = 0, w = O.length; _ < w; _++)
                  ((D = O[_]), (D.isLastRootNode = !1));
                for (
                  h.children[h.children.length - 1].isLastRootNode = !0,
                    I = h.children,
                    Y = [],
                    U = 0,
                    E = I.length;
                  U < E;
                  U++
                )
                  if (((D = I[U]), !(D instanceof s)))
                    switch (!1) {
                      case !(D instanceof o):
                        Y.push(this.declaration(D));
                        break;
                      case !(D instanceof c):
                        Y.push(this.docType(D));
                        break;
                      case !(D instanceof n):
                        Y.push(this.comment(D));
                        break;
                      case !(D instanceof l):
                        Y.push(this.processingInstruction(D));
                        break;
                      default:
                        Y.push(this.element(D));
                    }
                return Y;
              }),
              (g.prototype.attribute = function (h) {
                return this.stream.write(" " + h.name + '="' + h.value + '"');
              }),
              (g.prototype.cdata = function (h, D) {
                return this.stream.write(
                  this.space(D) +
                    "<![CDATA[" +
                    h.text +
                    "]]>" +
                    this.endline(h),
                );
              }),
              (g.prototype.comment = function (h, D) {
                return this.stream.write(
                  this.space(D) + "<!-- " + h.text + " -->" + this.endline(h),
                );
              }),
              (g.prototype.declaration = function (h, D) {
                return (
                  this.stream.write(this.space(D)),
                  this.stream.write('<?xml version="' + h.version + '"'),
                  h.encoding != null &&
                    this.stream.write(' encoding="' + h.encoding + '"'),
                  h.standalone != null &&
                    this.stream.write(' standalone="' + h.standalone + '"'),
                  this.stream.write(this.spacebeforeslash + "?>"),
                  this.stream.write(this.endline(h))
                );
              }),
              (g.prototype.docType = function (h, D) {
                var _, U, w, E;
                if (
                  (D || (D = 0),
                  this.stream.write(this.space(D)),
                  this.stream.write("<!DOCTYPE " + h.root().name),
                  h.pubID && h.sysID
                    ? this.stream.write(
                        ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"',
                      )
                    : h.sysID && this.stream.write(' SYSTEM "' + h.sysID + '"'),
                  h.children.length > 0)
                ) {
                  for (
                    this.stream.write(" ["),
                      this.stream.write(this.endline(h)),
                      E = h.children,
                      U = 0,
                      w = E.length;
                    U < w;
                    U++
                  )
                    switch (((_ = E[U]), !1)) {
                      case !(_ instanceof t):
                        this.dtdAttList(_, D + 1);
                        break;
                      case !(_ instanceof r):
                        this.dtdElement(_, D + 1);
                        break;
                      case !(_ instanceof i):
                        this.dtdEntity(_, D + 1);
                        break;
                      case !(_ instanceof a):
                        this.dtdNotation(_, D + 1);
                        break;
                      case !(_ instanceof e):
                        this.cdata(_, D + 1);
                        break;
                      case !(_ instanceof n):
                        this.comment(_, D + 1);
                        break;
                      case !(_ instanceof l):
                        this.processingInstruction(_, D + 1);
                        break;
                      default:
                        throw new Error(
                          "Unknown DTD node type: " + _.constructor.name,
                        );
                    }
                  this.stream.write("]");
                }
                return (
                  this.stream.write(this.spacebeforeslash + ">"),
                  this.stream.write(this.endline(h))
                );
              }),
              (g.prototype.element = function (h, D) {
                var _, U, w, E, O, I, Y, ee;
                (D || (D = 0),
                  (ee = this.space(D)),
                  this.stream.write(ee + "<" + h.name),
                  (I = h.attributes));
                for (O in I) f.call(I, O) && ((_ = I[O]), this.attribute(_));
                if (
                  h.children.length === 0 ||
                  h.children.every(function (T) {
                    return T.value === "";
                  })
                )
                  this.allowEmpty
                    ? this.stream.write("></" + h.name + ">")
                    : this.stream.write(this.spacebeforeslash + "/>");
                else if (
                  this.pretty &&
                  h.children.length === 1 &&
                  h.children[0].value != null
                )
                  (this.stream.write(">"),
                    this.stream.write(h.children[0].value),
                    this.stream.write("</" + h.name + ">"));
                else {
                  for (
                    this.stream.write(">" + this.newline),
                      Y = h.children,
                      w = 0,
                      E = Y.length;
                    w < E;
                    w++
                  )
                    switch (((U = Y[w]), !1)) {
                      case !(U instanceof e):
                        this.cdata(U, D + 1);
                        break;
                      case !(U instanceof n):
                        this.comment(U, D + 1);
                        break;
                      case !(U instanceof u):
                        this.element(U, D + 1);
                        break;
                      case !(U instanceof p):
                        this.raw(U, D + 1);
                        break;
                      case !(U instanceof m):
                        this.text(U, D + 1);
                        break;
                      case !(U instanceof l):
                        this.processingInstruction(U, D + 1);
                        break;
                      case !(U instanceof s):
                        break;
                      default:
                        throw new Error(
                          "Unknown XML node type: " + U.constructor.name,
                        );
                    }
                  this.stream.write(ee + "</" + h.name + ">");
                }
                return this.stream.write(this.endline(h));
              }),
              (g.prototype.processingInstruction = function (h, D) {
                return (
                  this.stream.write(this.space(D) + "<?" + h.target),
                  h.value && this.stream.write(" " + h.value),
                  this.stream.write(
                    this.spacebeforeslash + "?>" + this.endline(h),
                  )
                );
              }),
              (g.prototype.raw = function (h, D) {
                return this.stream.write(
                  this.space(D) + h.value + this.endline(h),
                );
              }),
              (g.prototype.text = function (h, D) {
                return this.stream.write(
                  this.space(D) + h.value + this.endline(h),
                );
              }),
              (g.prototype.dtdAttList = function (h, D) {
                return (
                  this.stream.write(
                    this.space(D) +
                      "<!ATTLIST " +
                      h.elementName +
                      " " +
                      h.attributeName +
                      " " +
                      h.attributeType,
                  ),
                  h.defaultValueType !== "#DEFAULT" &&
                    this.stream.write(" " + h.defaultValueType),
                  h.defaultValue &&
                    this.stream.write(' "' + h.defaultValue + '"'),
                  this.stream.write(
                    this.spacebeforeslash + ">" + this.endline(h),
                  )
                );
              }),
              (g.prototype.dtdElement = function (h, D) {
                return (
                  this.stream.write(
                    this.space(D) + "<!ELEMENT " + h.name + " " + h.value,
                  ),
                  this.stream.write(
                    this.spacebeforeslash + ">" + this.endline(h),
                  )
                );
              }),
              (g.prototype.dtdEntity = function (h, D) {
                return (
                  this.stream.write(this.space(D) + "<!ENTITY"),
                  h.pe && this.stream.write(" %"),
                  this.stream.write(" " + h.name),
                  h.value
                    ? this.stream.write(' "' + h.value + '"')
                    : (h.pubID && h.sysID
                        ? this.stream.write(
                            ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"',
                          )
                        : h.sysID &&
                          this.stream.write(' SYSTEM "' + h.sysID + '"'),
                      h.nData && this.stream.write(" NDATA " + h.nData)),
                  this.stream.write(
                    this.spacebeforeslash + ">" + this.endline(h),
                  )
                );
              }),
              (g.prototype.dtdNotation = function (h, D) {
                return (
                  this.stream.write(this.space(D) + "<!NOTATION " + h.name),
                  h.pubID && h.sysID
                    ? this.stream.write(
                        ' PUBLIC "' + h.pubID + '" "' + h.sysID + '"',
                      )
                    : h.pubID
                      ? this.stream.write(' PUBLIC "' + h.pubID + '"')
                      : h.sysID &&
                        this.stream.write(' SYSTEM "' + h.sysID + '"'),
                  this.stream.write(
                    this.spacebeforeslash + ">" + this.endline(h),
                  )
                );
              }),
              (g.prototype.endline = function (h) {
                return h.isLastRootNode ? "" : this.newline;
              }),
              g
            );
          })(b)));
      }.call(fe)),
    na.exports
  );
}
(function () {
  var e, n, t, r, i, a, o;
  ((o = Sn()),
    (i = o.assign),
    (a = o.isFunction),
    (e = jp()),
    (n = Vp()),
    (r = mo()),
    (t = Xp()),
    (mt.create = function (c, s, u, l) {
      var p, m;
      if (c == null) throw new Error("Root element needs a name.");
      return (
        (l = i({}, s, u, l)),
        (p = new e(l)),
        (m = p.element(c)),
        l.headless ||
          (p.declaration(l),
          (l.pubID != null || l.sysID != null) && p.doctype(l)),
        m
      );
    }),
    (mt.begin = function (c, s, u) {
      var l;
      return (
        a(c) && ((l = [c, s]), (s = l[0]), (u = l[1]), (c = {})),
        s ? new n(c, s, u) : new e(c)
      );
    }),
    (mt.stringWriter = function (c) {
      return new r(c);
    }),
    (mt.streamWriter = function (c, s) {
      return new t(c, s);
    }));
}).call(fe);
var gs = we,
  Hp = mt;
rl.writeString = $p;
function $p(e, n) {
  var t = gs.invert(n),
    r = { element: a, text: Gp };
  function i(s, u) {
    return r[u.type](s, u);
  }
  function a(s, u) {
    var l = s.element(o(u.name), u.attributes);
    u.children.forEach(function (p) {
      i(l, p);
    });
  }
  function o(s) {
    var u = /^\{(.*)\}(.*)$/.exec(s);
    if (u) {
      var l = t[u[1]];
      return l + (l === "" ? "" : ":") + u[2];
    } else return s;
  }
  function c(s) {
    var u = Hp.create(o(s.name), {
      version: "1.0",
      encoding: "UTF-8",
      standalone: !0,
    });
    return (
      gs.forEach(n, function (l, p) {
        var m = "xmlns" + (p === "" ? "" : ":" + p);
        u.attribute(m, l);
      }),
      s.children.forEach(function (l) {
        i(u, l);
      }),
      u.end()
    );
  }
  return c(e);
}
function Gp(e, n) {
  e.text(n.value);
}
var Pr = ct;
Dn.Element = Pr.Element;
Dn.element = Pr.element;
Dn.emptyElement = Pr.emptyElement;
Dn.text = Pr.text;
Dn.readString = Td.readString;
Dn.writeString = rl.writeString;
var Yp = we,
  Zp = Ce,
  Kp = Dn;
to.read = cl;
to.readXmlFromZipFile = Jp;
var Qp = {
  "http://schemas.openxmlformats.org/wordprocessingml/2006/main": "w",
  "http://schemas.openxmlformats.org/officeDocument/2006/relationships": "r",
  "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing":
    "wp",
  "http://schemas.openxmlformats.org/drawingml/2006/main": "a",
  "http://schemas.openxmlformats.org/drawingml/2006/picture": "pic",
  "http://purl.oclc.org/ooxml/wordprocessingml/main": "w",
  "http://purl.oclc.org/ooxml/officeDocument/relationships": "r",
  "http://purl.oclc.org/ooxml/drawingml/wordprocessingDrawing": "wp",
  "http://purl.oclc.org/ooxml/drawingml/main": "a",
  "http://purl.oclc.org/ooxml/drawingml/picture": "pic",
  "http://schemas.openxmlformats.org/package/2006/content-types":
    "content-types",
  "http://schemas.openxmlformats.org/package/2006/relationships":
    "relationships",
  "http://schemas.openxmlformats.org/markup-compatibility/2006": "mc",
  "urn:schemas-microsoft-com:vml": "v",
  "urn:schemas-microsoft-com:office:word": "office-word",
  "http://schemas.microsoft.com/office/word/2010/wordml": "wordml",
};
function cl(e) {
  return Kp.readString(e, Qp).then(function (n) {
    return sl(n)[0];
  });
}
function Jp(e, n) {
  return e.exists(n) ? e.read(n, "utf-8").then(eg).then(cl) : Zp.resolve(null);
}
function eg(e) {
  return e.replace(/^\uFEFF/g, "");
}
function sl(e) {
  return e.type === "element"
    ? e.name === "mc:AlternateContent"
      ? e.firstOrEmpty("mc:Fallback").children
      : ((e.children = Yp.flatten(e.children.map(sl, !0))), [e])
    : [e];
}
var bo = {},
  Tn = {},
  yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
var ng = [
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "32",
    "Dingbat hex": "20",
    "Unicode dec": "32",
    "Unicode hex": "20",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "33",
    "Dingbat hex": "21",
    "Unicode dec": "33",
    "Unicode hex": "21",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "34",
    "Dingbat hex": "22",
    "Unicode dec": "8704",
    "Unicode hex": "2200",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "35",
    "Dingbat hex": "23",
    "Unicode dec": "35",
    "Unicode hex": "23",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "36",
    "Dingbat hex": "24",
    "Unicode dec": "8707",
    "Unicode hex": "2203",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "37",
    "Dingbat hex": "25",
    "Unicode dec": "37",
    "Unicode hex": "25",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "38",
    "Dingbat hex": "26",
    "Unicode dec": "38",
    "Unicode hex": "26",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "39",
    "Dingbat hex": "27",
    "Unicode dec": "8717",
    "Unicode hex": "220D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "40",
    "Dingbat hex": "28",
    "Unicode dec": "40",
    "Unicode hex": "28",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "41",
    "Dingbat hex": "29",
    "Unicode dec": "41",
    "Unicode hex": "29",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "42",
    "Dingbat hex": "2A",
    "Unicode dec": "42",
    "Unicode hex": "2A",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "43",
    "Dingbat hex": "2B",
    "Unicode dec": "43",
    "Unicode hex": "2B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "44",
    "Dingbat hex": "2C",
    "Unicode dec": "44",
    "Unicode hex": "2C",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "45",
    "Dingbat hex": "2D",
    "Unicode dec": "8722",
    "Unicode hex": "2212",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "46",
    "Dingbat hex": "2E",
    "Unicode dec": "46",
    "Unicode hex": "2E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "47",
    "Dingbat hex": "2F",
    "Unicode dec": "47",
    "Unicode hex": "2F",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "48",
    "Dingbat hex": "30",
    "Unicode dec": "48",
    "Unicode hex": "30",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "49",
    "Dingbat hex": "31",
    "Unicode dec": "49",
    "Unicode hex": "31",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "50",
    "Dingbat hex": "32",
    "Unicode dec": "50",
    "Unicode hex": "32",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "51",
    "Dingbat hex": "33",
    "Unicode dec": "51",
    "Unicode hex": "33",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "52",
    "Dingbat hex": "34",
    "Unicode dec": "52",
    "Unicode hex": "34",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "53",
    "Dingbat hex": "35",
    "Unicode dec": "53",
    "Unicode hex": "35",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "54",
    "Dingbat hex": "36",
    "Unicode dec": "54",
    "Unicode hex": "36",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "55",
    "Dingbat hex": "37",
    "Unicode dec": "55",
    "Unicode hex": "37",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "56",
    "Dingbat hex": "38",
    "Unicode dec": "56",
    "Unicode hex": "38",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "57",
    "Dingbat hex": "39",
    "Unicode dec": "57",
    "Unicode hex": "39",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "58",
    "Dingbat hex": "3A",
    "Unicode dec": "58",
    "Unicode hex": "3A",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "59",
    "Dingbat hex": "3B",
    "Unicode dec": "59",
    "Unicode hex": "3B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "60",
    "Dingbat hex": "3C",
    "Unicode dec": "60",
    "Unicode hex": "3C",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "61",
    "Dingbat hex": "3D",
    "Unicode dec": "61",
    "Unicode hex": "3D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "62",
    "Dingbat hex": "3E",
    "Unicode dec": "62",
    "Unicode hex": "3E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "63",
    "Dingbat hex": "3F",
    "Unicode dec": "63",
    "Unicode hex": "3F",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "64",
    "Dingbat hex": "40",
    "Unicode dec": "8773",
    "Unicode hex": "2245",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "65",
    "Dingbat hex": "41",
    "Unicode dec": "913",
    "Unicode hex": "391",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "66",
    "Dingbat hex": "42",
    "Unicode dec": "914",
    "Unicode hex": "392",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "67",
    "Dingbat hex": "43",
    "Unicode dec": "935",
    "Unicode hex": "3A7",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "68",
    "Dingbat hex": "44",
    "Unicode dec": "916",
    "Unicode hex": "394",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "69",
    "Dingbat hex": "45",
    "Unicode dec": "917",
    "Unicode hex": "395",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "70",
    "Dingbat hex": "46",
    "Unicode dec": "934",
    "Unicode hex": "3A6",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "71",
    "Dingbat hex": "47",
    "Unicode dec": "915",
    "Unicode hex": "393",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "72",
    "Dingbat hex": "48",
    "Unicode dec": "919",
    "Unicode hex": "397",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "73",
    "Dingbat hex": "49",
    "Unicode dec": "921",
    "Unicode hex": "399",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "74",
    "Dingbat hex": "4A",
    "Unicode dec": "977",
    "Unicode hex": "3D1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "75",
    "Dingbat hex": "4B",
    "Unicode dec": "922",
    "Unicode hex": "39A",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "76",
    "Dingbat hex": "4C",
    "Unicode dec": "923",
    "Unicode hex": "39B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "77",
    "Dingbat hex": "4D",
    "Unicode dec": "924",
    "Unicode hex": "39C",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "78",
    "Dingbat hex": "4E",
    "Unicode dec": "925",
    "Unicode hex": "39D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "79",
    "Dingbat hex": "4F",
    "Unicode dec": "927",
    "Unicode hex": "39F",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "80",
    "Dingbat hex": "50",
    "Unicode dec": "928",
    "Unicode hex": "3A0",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "81",
    "Dingbat hex": "51",
    "Unicode dec": "920",
    "Unicode hex": "398",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "82",
    "Dingbat hex": "52",
    "Unicode dec": "929",
    "Unicode hex": "3A1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "83",
    "Dingbat hex": "53",
    "Unicode dec": "931",
    "Unicode hex": "3A3",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "84",
    "Dingbat hex": "54",
    "Unicode dec": "932",
    "Unicode hex": "3A4",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "85",
    "Dingbat hex": "55",
    "Unicode dec": "933",
    "Unicode hex": "3A5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "86",
    "Dingbat hex": "56",
    "Unicode dec": "962",
    "Unicode hex": "3C2",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "87",
    "Dingbat hex": "57",
    "Unicode dec": "937",
    "Unicode hex": "3A9",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "88",
    "Dingbat hex": "58",
    "Unicode dec": "926",
    "Unicode hex": "39E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "89",
    "Dingbat hex": "59",
    "Unicode dec": "936",
    "Unicode hex": "3A8",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "90",
    "Dingbat hex": "5A",
    "Unicode dec": "918",
    "Unicode hex": "396",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "91",
    "Dingbat hex": "5B",
    "Unicode dec": "91",
    "Unicode hex": "5B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "92",
    "Dingbat hex": "5C",
    "Unicode dec": "8756",
    "Unicode hex": "2234",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "93",
    "Dingbat hex": "5D",
    "Unicode dec": "93",
    "Unicode hex": "5D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "94",
    "Dingbat hex": "5E",
    "Unicode dec": "8869",
    "Unicode hex": "22A5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "95",
    "Dingbat hex": "5F",
    "Unicode dec": "95",
    "Unicode hex": "5F",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "96",
    "Dingbat hex": "60",
    "Unicode dec": "8254",
    "Unicode hex": "203E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "97",
    "Dingbat hex": "61",
    "Unicode dec": "945",
    "Unicode hex": "3B1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "98",
    "Dingbat hex": "62",
    "Unicode dec": "946",
    "Unicode hex": "3B2",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "99",
    "Dingbat hex": "63",
    "Unicode dec": "967",
    "Unicode hex": "3C7",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "100",
    "Dingbat hex": "64",
    "Unicode dec": "948",
    "Unicode hex": "3B4",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "101",
    "Dingbat hex": "65",
    "Unicode dec": "949",
    "Unicode hex": "3B5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "102",
    "Dingbat hex": "66",
    "Unicode dec": "966",
    "Unicode hex": "3C6",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "103",
    "Dingbat hex": "67",
    "Unicode dec": "947",
    "Unicode hex": "3B3",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "104",
    "Dingbat hex": "68",
    "Unicode dec": "951",
    "Unicode hex": "3B7",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "105",
    "Dingbat hex": "69",
    "Unicode dec": "953",
    "Unicode hex": "3B9",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "106",
    "Dingbat hex": "6A",
    "Unicode dec": "981",
    "Unicode hex": "3D5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "107",
    "Dingbat hex": "6B",
    "Unicode dec": "954",
    "Unicode hex": "3BA",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "108",
    "Dingbat hex": "6C",
    "Unicode dec": "955",
    "Unicode hex": "3BB",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "109",
    "Dingbat hex": "6D",
    "Unicode dec": "956",
    "Unicode hex": "3BC",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "110",
    "Dingbat hex": "6E",
    "Unicode dec": "957",
    "Unicode hex": "3BD",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "111",
    "Dingbat hex": "6F",
    "Unicode dec": "959",
    "Unicode hex": "3BF",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "112",
    "Dingbat hex": "70",
    "Unicode dec": "960",
    "Unicode hex": "3C0",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "113",
    "Dingbat hex": "71",
    "Unicode dec": "952",
    "Unicode hex": "3B8",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "114",
    "Dingbat hex": "72",
    "Unicode dec": "961",
    "Unicode hex": "3C1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "115",
    "Dingbat hex": "73",
    "Unicode dec": "963",
    "Unicode hex": "3C3",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "116",
    "Dingbat hex": "74",
    "Unicode dec": "964",
    "Unicode hex": "3C4",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "117",
    "Dingbat hex": "75",
    "Unicode dec": "965",
    "Unicode hex": "3C5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "118",
    "Dingbat hex": "76",
    "Unicode dec": "982",
    "Unicode hex": "3D6",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "119",
    "Dingbat hex": "77",
    "Unicode dec": "969",
    "Unicode hex": "3C9",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "120",
    "Dingbat hex": "78",
    "Unicode dec": "958",
    "Unicode hex": "3BE",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "121",
    "Dingbat hex": "79",
    "Unicode dec": "968",
    "Unicode hex": "3C8",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "122",
    "Dingbat hex": "7A",
    "Unicode dec": "950",
    "Unicode hex": "3B6",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "123",
    "Dingbat hex": "7B",
    "Unicode dec": "123",
    "Unicode hex": "7B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "124",
    "Dingbat hex": "7C",
    "Unicode dec": "124",
    "Unicode hex": "7C",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "125",
    "Dingbat hex": "7D",
    "Unicode dec": "125",
    "Unicode hex": "7D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "126",
    "Dingbat hex": "7E",
    "Unicode dec": "126",
    "Unicode hex": "7E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "160",
    "Dingbat hex": "A0",
    "Unicode dec": "8364",
    "Unicode hex": "20AC",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "161",
    "Dingbat hex": "A1",
    "Unicode dec": "978",
    "Unicode hex": "3D2",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "162",
    "Dingbat hex": "A2",
    "Unicode dec": "8242",
    "Unicode hex": "2032",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "163",
    "Dingbat hex": "A3",
    "Unicode dec": "8804",
    "Unicode hex": "2264",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "164",
    "Dingbat hex": "A4",
    "Unicode dec": "8260",
    "Unicode hex": "2044",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "165",
    "Dingbat hex": "A5",
    "Unicode dec": "8734",
    "Unicode hex": "221E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "166",
    "Dingbat hex": "A6",
    "Unicode dec": "402",
    "Unicode hex": "192",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "167",
    "Dingbat hex": "A7",
    "Unicode dec": "9827",
    "Unicode hex": "2663",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "168",
    "Dingbat hex": "A8",
    "Unicode dec": "9830",
    "Unicode hex": "2666",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "169",
    "Dingbat hex": "A9",
    "Unicode dec": "9829",
    "Unicode hex": "2665",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "170",
    "Dingbat hex": "AA",
    "Unicode dec": "9824",
    "Unicode hex": "2660",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "171",
    "Dingbat hex": "AB",
    "Unicode dec": "8596",
    "Unicode hex": "2194",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "172",
    "Dingbat hex": "AC",
    "Unicode dec": "8592",
    "Unicode hex": "2190",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "173",
    "Dingbat hex": "AD",
    "Unicode dec": "8593",
    "Unicode hex": "2191",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "174",
    "Dingbat hex": "AE",
    "Unicode dec": "8594",
    "Unicode hex": "2192",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "175",
    "Dingbat hex": "AF",
    "Unicode dec": "8595",
    "Unicode hex": "2193",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "176",
    "Dingbat hex": "B0",
    "Unicode dec": "176",
    "Unicode hex": "B0",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "177",
    "Dingbat hex": "B1",
    "Unicode dec": "177",
    "Unicode hex": "B1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "178",
    "Dingbat hex": "B2",
    "Unicode dec": "8243",
    "Unicode hex": "2033",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "179",
    "Dingbat hex": "B3",
    "Unicode dec": "8805",
    "Unicode hex": "2265",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "180",
    "Dingbat hex": "B4",
    "Unicode dec": "215",
    "Unicode hex": "D7",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "181",
    "Dingbat hex": "B5",
    "Unicode dec": "8733",
    "Unicode hex": "221D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "182",
    "Dingbat hex": "B6",
    "Unicode dec": "8706",
    "Unicode hex": "2202",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "183",
    "Dingbat hex": "B7",
    "Unicode dec": "8226",
    "Unicode hex": "2022",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "184",
    "Dingbat hex": "B8",
    "Unicode dec": "247",
    "Unicode hex": "F7",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "185",
    "Dingbat hex": "B9",
    "Unicode dec": "8800",
    "Unicode hex": "2260",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "186",
    "Dingbat hex": "BA",
    "Unicode dec": "8801",
    "Unicode hex": "2261",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "187",
    "Dingbat hex": "BB",
    "Unicode dec": "8776",
    "Unicode hex": "2248",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "188",
    "Dingbat hex": "BC",
    "Unicode dec": "8230",
    "Unicode hex": "2026",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "189",
    "Dingbat hex": "BD",
    "Unicode dec": "9168",
    "Unicode hex": "23D0",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "190",
    "Dingbat hex": "BE",
    "Unicode dec": "9135",
    "Unicode hex": "23AF",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "191",
    "Dingbat hex": "BF",
    "Unicode dec": "8629",
    "Unicode hex": "21B5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "192",
    "Dingbat hex": "C0",
    "Unicode dec": "8501",
    "Unicode hex": "2135",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "193",
    "Dingbat hex": "C1",
    "Unicode dec": "8465",
    "Unicode hex": "2111",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "194",
    "Dingbat hex": "C2",
    "Unicode dec": "8476",
    "Unicode hex": "211C",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "195",
    "Dingbat hex": "C3",
    "Unicode dec": "8472",
    "Unicode hex": "2118",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "196",
    "Dingbat hex": "C4",
    "Unicode dec": "8855",
    "Unicode hex": "2297",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "197",
    "Dingbat hex": "C5",
    "Unicode dec": "8853",
    "Unicode hex": "2295",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "198",
    "Dingbat hex": "C6",
    "Unicode dec": "8709",
    "Unicode hex": "2205",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "199",
    "Dingbat hex": "C7",
    "Unicode dec": "8745",
    "Unicode hex": "2229",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "200",
    "Dingbat hex": "C8",
    "Unicode dec": "8746",
    "Unicode hex": "222A",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "201",
    "Dingbat hex": "C9",
    "Unicode dec": "8835",
    "Unicode hex": "2283",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "202",
    "Dingbat hex": "CA",
    "Unicode dec": "8839",
    "Unicode hex": "2287",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "203",
    "Dingbat hex": "CB",
    "Unicode dec": "8836",
    "Unicode hex": "2284",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "204",
    "Dingbat hex": "CC",
    "Unicode dec": "8834",
    "Unicode hex": "2282",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "205",
    "Dingbat hex": "CD",
    "Unicode dec": "8838",
    "Unicode hex": "2286",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "206",
    "Dingbat hex": "CE",
    "Unicode dec": "8712",
    "Unicode hex": "2208",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "207",
    "Dingbat hex": "CF",
    "Unicode dec": "8713",
    "Unicode hex": "2209",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "208",
    "Dingbat hex": "D0",
    "Unicode dec": "8736",
    "Unicode hex": "2220",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "209",
    "Dingbat hex": "D1",
    "Unicode dec": "8711",
    "Unicode hex": "2207",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "210",
    "Dingbat hex": "D2",
    "Unicode dec": "174",
    "Unicode hex": "AE",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "211",
    "Dingbat hex": "D3",
    "Unicode dec": "169",
    "Unicode hex": "A9",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "212",
    "Dingbat hex": "D4",
    "Unicode dec": "8482",
    "Unicode hex": "2122",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "213",
    "Dingbat hex": "D5",
    "Unicode dec": "8719",
    "Unicode hex": "220F",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "214",
    "Dingbat hex": "D6",
    "Unicode dec": "8730",
    "Unicode hex": "221A",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "215",
    "Dingbat hex": "D7",
    "Unicode dec": "8901",
    "Unicode hex": "22C5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "216",
    "Dingbat hex": "D8",
    "Unicode dec": "172",
    "Unicode hex": "AC",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "217",
    "Dingbat hex": "D9",
    "Unicode dec": "8743",
    "Unicode hex": "2227",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "218",
    "Dingbat hex": "DA",
    "Unicode dec": "8744",
    "Unicode hex": "2228",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "219",
    "Dingbat hex": "DB",
    "Unicode dec": "8660",
    "Unicode hex": "21D4",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "220",
    "Dingbat hex": "DC",
    "Unicode dec": "8656",
    "Unicode hex": "21D0",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "221",
    "Dingbat hex": "DD",
    "Unicode dec": "8657",
    "Unicode hex": "21D1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "222",
    "Dingbat hex": "DE",
    "Unicode dec": "8658",
    "Unicode hex": "21D2",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "223",
    "Dingbat hex": "DF",
    "Unicode dec": "8659",
    "Unicode hex": "21D3",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "224",
    "Dingbat hex": "E0",
    "Unicode dec": "9674",
    "Unicode hex": "25CA",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "225",
    "Dingbat hex": "E1",
    "Unicode dec": "12296",
    "Unicode hex": "3008",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "226",
    "Dingbat hex": "E2",
    "Unicode dec": "174",
    "Unicode hex": "AE",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "227",
    "Dingbat hex": "E3",
    "Unicode dec": "169",
    "Unicode hex": "A9",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "228",
    "Dingbat hex": "E4",
    "Unicode dec": "8482",
    "Unicode hex": "2122",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "229",
    "Dingbat hex": "E5",
    "Unicode dec": "8721",
    "Unicode hex": "2211",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "230",
    "Dingbat hex": "E6",
    "Unicode dec": "9115",
    "Unicode hex": "239B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "231",
    "Dingbat hex": "E7",
    "Unicode dec": "9116",
    "Unicode hex": "239C",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "232",
    "Dingbat hex": "E8",
    "Unicode dec": "9117",
    "Unicode hex": "239D",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "233",
    "Dingbat hex": "E9",
    "Unicode dec": "9121",
    "Unicode hex": "23A1",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "234",
    "Dingbat hex": "EA",
    "Unicode dec": "9122",
    "Unicode hex": "23A2",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "235",
    "Dingbat hex": "EB",
    "Unicode dec": "9123",
    "Unicode hex": "23A3",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "236",
    "Dingbat hex": "EC",
    "Unicode dec": "9127",
    "Unicode hex": "23A7",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "237",
    "Dingbat hex": "ED",
    "Unicode dec": "9128",
    "Unicode hex": "23A8",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "238",
    "Dingbat hex": "EE",
    "Unicode dec": "9129",
    "Unicode hex": "23A9",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "239",
    "Dingbat hex": "EF",
    "Unicode dec": "9130",
    "Unicode hex": "23AA",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "240",
    "Dingbat hex": "F0",
    "Unicode dec": "63743",
    "Unicode hex": "F8FF",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "241",
    "Dingbat hex": "F1",
    "Unicode dec": "12297",
    "Unicode hex": "3009",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "242",
    "Dingbat hex": "F2",
    "Unicode dec": "8747",
    "Unicode hex": "222B",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "243",
    "Dingbat hex": "F3",
    "Unicode dec": "8992",
    "Unicode hex": "2320",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "244",
    "Dingbat hex": "F4",
    "Unicode dec": "9134",
    "Unicode hex": "23AE",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "245",
    "Dingbat hex": "F5",
    "Unicode dec": "8993",
    "Unicode hex": "2321",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "246",
    "Dingbat hex": "F6",
    "Unicode dec": "9118",
    "Unicode hex": "239E",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "247",
    "Dingbat hex": "F7",
    "Unicode dec": "9119",
    "Unicode hex": "239F",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "248",
    "Dingbat hex": "F8",
    "Unicode dec": "9120",
    "Unicode hex": "23A0",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "249",
    "Dingbat hex": "F9",
    "Unicode dec": "9124",
    "Unicode hex": "23A4",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "250",
    "Dingbat hex": "FA",
    "Unicode dec": "9125",
    "Unicode hex": "23A5",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "251",
    "Dingbat hex": "FB",
    "Unicode dec": "9126",
    "Unicode hex": "23A6",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "252",
    "Dingbat hex": "FC",
    "Unicode dec": "9131",
    "Unicode hex": "23AB",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "253",
    "Dingbat hex": "FD",
    "Unicode dec": "9132",
    "Unicode hex": "23AC",
  },
  {
    "Typeface name": "Symbol",
    "Dingbat dec": "254",
    "Dingbat hex": "FE",
    "Unicode dec": "9133",
    "Unicode hex": "23AD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "32",
    "Dingbat hex": "20",
    "Unicode dec": "32",
    "Unicode hex": "20",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "33",
    "Dingbat hex": "21",
    "Unicode dec": "128375",
    "Unicode hex": "1F577",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "34",
    "Dingbat hex": "22",
    "Unicode dec": "128376",
    "Unicode hex": "1F578",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "35",
    "Dingbat hex": "23",
    "Unicode dec": "128370",
    "Unicode hex": "1F572",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "36",
    "Dingbat hex": "24",
    "Unicode dec": "128374",
    "Unicode hex": "1F576",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "37",
    "Dingbat hex": "25",
    "Unicode dec": "127942",
    "Unicode hex": "1F3C6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "38",
    "Dingbat hex": "26",
    "Unicode dec": "127894",
    "Unicode hex": "1F396",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "39",
    "Dingbat hex": "27",
    "Unicode dec": "128391",
    "Unicode hex": "1F587",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "40",
    "Dingbat hex": "28",
    "Unicode dec": "128488",
    "Unicode hex": "1F5E8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "41",
    "Dingbat hex": "29",
    "Unicode dec": "128489",
    "Unicode hex": "1F5E9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "42",
    "Dingbat hex": "2A",
    "Unicode dec": "128496",
    "Unicode hex": "1F5F0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "43",
    "Dingbat hex": "2B",
    "Unicode dec": "128497",
    "Unicode hex": "1F5F1",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "44",
    "Dingbat hex": "2C",
    "Unicode dec": "127798",
    "Unicode hex": "1F336",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "45",
    "Dingbat hex": "2D",
    "Unicode dec": "127895",
    "Unicode hex": "1F397",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "46",
    "Dingbat hex": "2E",
    "Unicode dec": "128638",
    "Unicode hex": "1F67E",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "47",
    "Dingbat hex": "2F",
    "Unicode dec": "128636",
    "Unicode hex": "1F67C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "48",
    "Dingbat hex": "30",
    "Unicode dec": "128469",
    "Unicode hex": "1F5D5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "49",
    "Dingbat hex": "31",
    "Unicode dec": "128470",
    "Unicode hex": "1F5D6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "50",
    "Dingbat hex": "32",
    "Unicode dec": "128471",
    "Unicode hex": "1F5D7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "51",
    "Dingbat hex": "33",
    "Unicode dec": "9204",
    "Unicode hex": "23F4",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "52",
    "Dingbat hex": "34",
    "Unicode dec": "9205",
    "Unicode hex": "23F5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "53",
    "Dingbat hex": "35",
    "Unicode dec": "9206",
    "Unicode hex": "23F6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "54",
    "Dingbat hex": "36",
    "Unicode dec": "9207",
    "Unicode hex": "23F7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "55",
    "Dingbat hex": "37",
    "Unicode dec": "9194",
    "Unicode hex": "23EA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "56",
    "Dingbat hex": "38",
    "Unicode dec": "9193",
    "Unicode hex": "23E9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "57",
    "Dingbat hex": "39",
    "Unicode dec": "9198",
    "Unicode hex": "23EE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "58",
    "Dingbat hex": "3A",
    "Unicode dec": "9197",
    "Unicode hex": "23ED",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "59",
    "Dingbat hex": "3B",
    "Unicode dec": "9208",
    "Unicode hex": "23F8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "60",
    "Dingbat hex": "3C",
    "Unicode dec": "9209",
    "Unicode hex": "23F9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "61",
    "Dingbat hex": "3D",
    "Unicode dec": "9210",
    "Unicode hex": "23FA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "62",
    "Dingbat hex": "3E",
    "Unicode dec": "128474",
    "Unicode hex": "1F5DA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "63",
    "Dingbat hex": "3F",
    "Unicode dec": "128499",
    "Unicode hex": "1F5F3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "64",
    "Dingbat hex": "40",
    "Unicode dec": "128736",
    "Unicode hex": "1F6E0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "65",
    "Dingbat hex": "41",
    "Unicode dec": "127959",
    "Unicode hex": "1F3D7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "66",
    "Dingbat hex": "42",
    "Unicode dec": "127960",
    "Unicode hex": "1F3D8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "67",
    "Dingbat hex": "43",
    "Unicode dec": "127961",
    "Unicode hex": "1F3D9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "68",
    "Dingbat hex": "44",
    "Unicode dec": "127962",
    "Unicode hex": "1F3DA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "69",
    "Dingbat hex": "45",
    "Unicode dec": "127964",
    "Unicode hex": "1F3DC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "70",
    "Dingbat hex": "46",
    "Unicode dec": "127981",
    "Unicode hex": "1F3ED",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "71",
    "Dingbat hex": "47",
    "Unicode dec": "127963",
    "Unicode hex": "1F3DB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "72",
    "Dingbat hex": "48",
    "Unicode dec": "127968",
    "Unicode hex": "1F3E0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "73",
    "Dingbat hex": "49",
    "Unicode dec": "127958",
    "Unicode hex": "1F3D6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "74",
    "Dingbat hex": "4A",
    "Unicode dec": "127965",
    "Unicode hex": "1F3DD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "75",
    "Dingbat hex": "4B",
    "Unicode dec": "128739",
    "Unicode hex": "1F6E3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "76",
    "Dingbat hex": "4C",
    "Unicode dec": "128269",
    "Unicode hex": "1F50D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "77",
    "Dingbat hex": "4D",
    "Unicode dec": "127956",
    "Unicode hex": "1F3D4",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "78",
    "Dingbat hex": "4E",
    "Unicode dec": "128065",
    "Unicode hex": "1F441",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "79",
    "Dingbat hex": "4F",
    "Unicode dec": "128066",
    "Unicode hex": "1F442",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "80",
    "Dingbat hex": "50",
    "Unicode dec": "127966",
    "Unicode hex": "1F3DE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "81",
    "Dingbat hex": "51",
    "Unicode dec": "127957",
    "Unicode hex": "1F3D5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "82",
    "Dingbat hex": "52",
    "Unicode dec": "128740",
    "Unicode hex": "1F6E4",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "83",
    "Dingbat hex": "53",
    "Unicode dec": "127967",
    "Unicode hex": "1F3DF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "84",
    "Dingbat hex": "54",
    "Unicode dec": "128755",
    "Unicode hex": "1F6F3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "85",
    "Dingbat hex": "55",
    "Unicode dec": "128364",
    "Unicode hex": "1F56C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "86",
    "Dingbat hex": "56",
    "Unicode dec": "128363",
    "Unicode hex": "1F56B",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "87",
    "Dingbat hex": "57",
    "Unicode dec": "128360",
    "Unicode hex": "1F568",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "88",
    "Dingbat hex": "58",
    "Unicode dec": "128264",
    "Unicode hex": "1F508",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "89",
    "Dingbat hex": "59",
    "Unicode dec": "127892",
    "Unicode hex": "1F394",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "90",
    "Dingbat hex": "5A",
    "Unicode dec": "127893",
    "Unicode hex": "1F395",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "91",
    "Dingbat hex": "5B",
    "Unicode dec": "128492",
    "Unicode hex": "1F5EC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "92",
    "Dingbat hex": "5C",
    "Unicode dec": "128637",
    "Unicode hex": "1F67D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "93",
    "Dingbat hex": "5D",
    "Unicode dec": "128493",
    "Unicode hex": "1F5ED",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "94",
    "Dingbat hex": "5E",
    "Unicode dec": "128490",
    "Unicode hex": "1F5EA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "95",
    "Dingbat hex": "5F",
    "Unicode dec": "128491",
    "Unicode hex": "1F5EB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "96",
    "Dingbat hex": "60",
    "Unicode dec": "11156",
    "Unicode hex": "2B94",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "97",
    "Dingbat hex": "61",
    "Unicode dec": "10004",
    "Unicode hex": "2714",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "98",
    "Dingbat hex": "62",
    "Unicode dec": "128690",
    "Unicode hex": "1F6B2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "99",
    "Dingbat hex": "63",
    "Unicode dec": "11036",
    "Unicode hex": "2B1C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "100",
    "Dingbat hex": "64",
    "Unicode dec": "128737",
    "Unicode hex": "1F6E1",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "101",
    "Dingbat hex": "65",
    "Unicode dec": "128230",
    "Unicode hex": "1F4E6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "102",
    "Dingbat hex": "66",
    "Unicode dec": "128753",
    "Unicode hex": "1F6F1",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "103",
    "Dingbat hex": "67",
    "Unicode dec": "11035",
    "Unicode hex": "2B1B",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "104",
    "Dingbat hex": "68",
    "Unicode dec": "128657",
    "Unicode hex": "1F691",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "105",
    "Dingbat hex": "69",
    "Unicode dec": "128712",
    "Unicode hex": "1F6C8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "106",
    "Dingbat hex": "6A",
    "Unicode dec": "128745",
    "Unicode hex": "1F6E9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "107",
    "Dingbat hex": "6B",
    "Unicode dec": "128752",
    "Unicode hex": "1F6F0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "108",
    "Dingbat hex": "6C",
    "Unicode dec": "128968",
    "Unicode hex": "1F7C8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "109",
    "Dingbat hex": "6D",
    "Unicode dec": "128372",
    "Unicode hex": "1F574",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "110",
    "Dingbat hex": "6E",
    "Unicode dec": "11044",
    "Unicode hex": "2B24",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "111",
    "Dingbat hex": "6F",
    "Unicode dec": "128741",
    "Unicode hex": "1F6E5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "112",
    "Dingbat hex": "70",
    "Unicode dec": "128660",
    "Unicode hex": "1F694",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "113",
    "Dingbat hex": "71",
    "Unicode dec": "128472",
    "Unicode hex": "1F5D8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "114",
    "Dingbat hex": "72",
    "Unicode dec": "128473",
    "Unicode hex": "1F5D9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "115",
    "Dingbat hex": "73",
    "Unicode dec": "10067",
    "Unicode hex": "2753",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "116",
    "Dingbat hex": "74",
    "Unicode dec": "128754",
    "Unicode hex": "1F6F2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "117",
    "Dingbat hex": "75",
    "Unicode dec": "128647",
    "Unicode hex": "1F687",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "118",
    "Dingbat hex": "76",
    "Unicode dec": "128653",
    "Unicode hex": "1F68D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "119",
    "Dingbat hex": "77",
    "Unicode dec": "9971",
    "Unicode hex": "26F3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "120",
    "Dingbat hex": "78",
    "Unicode dec": "10680",
    "Unicode hex": "29B8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "121",
    "Dingbat hex": "79",
    "Unicode dec": "8854",
    "Unicode hex": "2296",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "122",
    "Dingbat hex": "7A",
    "Unicode dec": "128685",
    "Unicode hex": "1F6AD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "123",
    "Dingbat hex": "7B",
    "Unicode dec": "128494",
    "Unicode hex": "1F5EE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "124",
    "Dingbat hex": "7C",
    "Unicode dec": "9168",
    "Unicode hex": "23D0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "125",
    "Dingbat hex": "7D",
    "Unicode dec": "128495",
    "Unicode hex": "1F5EF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "126",
    "Dingbat hex": "7E",
    "Unicode dec": "128498",
    "Unicode hex": "1F5F2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "128",
    "Dingbat hex": "80",
    "Unicode dec": "128697",
    "Unicode hex": "1F6B9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "129",
    "Dingbat hex": "81",
    "Unicode dec": "128698",
    "Unicode hex": "1F6BA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "130",
    "Dingbat hex": "82",
    "Unicode dec": "128713",
    "Unicode hex": "1F6C9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "131",
    "Dingbat hex": "83",
    "Unicode dec": "128714",
    "Unicode hex": "1F6CA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "132",
    "Dingbat hex": "84",
    "Unicode dec": "128700",
    "Unicode hex": "1F6BC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "133",
    "Dingbat hex": "85",
    "Unicode dec": "128125",
    "Unicode hex": "1F47D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "134",
    "Dingbat hex": "86",
    "Unicode dec": "127947",
    "Unicode hex": "1F3CB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "135",
    "Dingbat hex": "87",
    "Unicode dec": "9975",
    "Unicode hex": "26F7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "136",
    "Dingbat hex": "88",
    "Unicode dec": "127938",
    "Unicode hex": "1F3C2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "137",
    "Dingbat hex": "89",
    "Unicode dec": "127948",
    "Unicode hex": "1F3CC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "138",
    "Dingbat hex": "8A",
    "Unicode dec": "127946",
    "Unicode hex": "1F3CA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "139",
    "Dingbat hex": "8B",
    "Unicode dec": "127940",
    "Unicode hex": "1F3C4",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "140",
    "Dingbat hex": "8C",
    "Unicode dec": "127949",
    "Unicode hex": "1F3CD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "141",
    "Dingbat hex": "8D",
    "Unicode dec": "127950",
    "Unicode hex": "1F3CE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "142",
    "Dingbat hex": "8E",
    "Unicode dec": "128664",
    "Unicode hex": "1F698",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "143",
    "Dingbat hex": "8F",
    "Unicode dec": "128480",
    "Unicode hex": "1F5E0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "144",
    "Dingbat hex": "90",
    "Unicode dec": "128738",
    "Unicode hex": "1F6E2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "145",
    "Dingbat hex": "91",
    "Unicode dec": "128176",
    "Unicode hex": "1F4B0",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "146",
    "Dingbat hex": "92",
    "Unicode dec": "127991",
    "Unicode hex": "1F3F7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "147",
    "Dingbat hex": "93",
    "Unicode dec": "128179",
    "Unicode hex": "1F4B3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "148",
    "Dingbat hex": "94",
    "Unicode dec": "128106",
    "Unicode hex": "1F46A",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "149",
    "Dingbat hex": "95",
    "Unicode dec": "128481",
    "Unicode hex": "1F5E1",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "150",
    "Dingbat hex": "96",
    "Unicode dec": "128482",
    "Unicode hex": "1F5E2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "151",
    "Dingbat hex": "97",
    "Unicode dec": "128483",
    "Unicode hex": "1F5E3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "152",
    "Dingbat hex": "98",
    "Unicode dec": "10031",
    "Unicode hex": "272F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "153",
    "Dingbat hex": "99",
    "Unicode dec": "128388",
    "Unicode hex": "1F584",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "154",
    "Dingbat hex": "9A",
    "Unicode dec": "128389",
    "Unicode hex": "1F585",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "155",
    "Dingbat hex": "9B",
    "Unicode dec": "128387",
    "Unicode hex": "1F583",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "156",
    "Dingbat hex": "9C",
    "Unicode dec": "128390",
    "Unicode hex": "1F586",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "157",
    "Dingbat hex": "9D",
    "Unicode dec": "128441",
    "Unicode hex": "1F5B9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "158",
    "Dingbat hex": "9E",
    "Unicode dec": "128442",
    "Unicode hex": "1F5BA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "159",
    "Dingbat hex": "9F",
    "Unicode dec": "128443",
    "Unicode hex": "1F5BB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "160",
    "Dingbat hex": "A0",
    "Unicode dec": "128373",
    "Unicode hex": "1F575",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "161",
    "Dingbat hex": "A1",
    "Unicode dec": "128368",
    "Unicode hex": "1F570",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "162",
    "Dingbat hex": "A2",
    "Unicode dec": "128445",
    "Unicode hex": "1F5BD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "163",
    "Dingbat hex": "A3",
    "Unicode dec": "128446",
    "Unicode hex": "1F5BE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "164",
    "Dingbat hex": "A4",
    "Unicode dec": "128203",
    "Unicode hex": "1F4CB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "165",
    "Dingbat hex": "A5",
    "Unicode dec": "128466",
    "Unicode hex": "1F5D2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "166",
    "Dingbat hex": "A6",
    "Unicode dec": "128467",
    "Unicode hex": "1F5D3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "167",
    "Dingbat hex": "A7",
    "Unicode dec": "128366",
    "Unicode hex": "1F56E",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "168",
    "Dingbat hex": "A8",
    "Unicode dec": "128218",
    "Unicode hex": "1F4DA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "169",
    "Dingbat hex": "A9",
    "Unicode dec": "128478",
    "Unicode hex": "1F5DE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "170",
    "Dingbat hex": "AA",
    "Unicode dec": "128479",
    "Unicode hex": "1F5DF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "171",
    "Dingbat hex": "AB",
    "Unicode dec": "128451",
    "Unicode hex": "1F5C3",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "172",
    "Dingbat hex": "AC",
    "Unicode dec": "128450",
    "Unicode hex": "1F5C2",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "173",
    "Dingbat hex": "AD",
    "Unicode dec": "128444",
    "Unicode hex": "1F5BC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "174",
    "Dingbat hex": "AE",
    "Unicode dec": "127917",
    "Unicode hex": "1F3AD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "175",
    "Dingbat hex": "AF",
    "Unicode dec": "127900",
    "Unicode hex": "1F39C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "176",
    "Dingbat hex": "B0",
    "Unicode dec": "127896",
    "Unicode hex": "1F398",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "177",
    "Dingbat hex": "B1",
    "Unicode dec": "127897",
    "Unicode hex": "1F399",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "178",
    "Dingbat hex": "B2",
    "Unicode dec": "127911",
    "Unicode hex": "1F3A7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "179",
    "Dingbat hex": "B3",
    "Unicode dec": "128191",
    "Unicode hex": "1F4BF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "180",
    "Dingbat hex": "B4",
    "Unicode dec": "127902",
    "Unicode hex": "1F39E",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "181",
    "Dingbat hex": "B5",
    "Unicode dec": "128247",
    "Unicode hex": "1F4F7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "182",
    "Dingbat hex": "B6",
    "Unicode dec": "127903",
    "Unicode hex": "1F39F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "183",
    "Dingbat hex": "B7",
    "Unicode dec": "127916",
    "Unicode hex": "1F3AC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "184",
    "Dingbat hex": "B8",
    "Unicode dec": "128253",
    "Unicode hex": "1F4FD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "185",
    "Dingbat hex": "B9",
    "Unicode dec": "128249",
    "Unicode hex": "1F4F9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "186",
    "Dingbat hex": "BA",
    "Unicode dec": "128254",
    "Unicode hex": "1F4FE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "187",
    "Dingbat hex": "BB",
    "Unicode dec": "128251",
    "Unicode hex": "1F4FB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "188",
    "Dingbat hex": "BC",
    "Unicode dec": "127898",
    "Unicode hex": "1F39A",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "189",
    "Dingbat hex": "BD",
    "Unicode dec": "127899",
    "Unicode hex": "1F39B",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "190",
    "Dingbat hex": "BE",
    "Unicode dec": "128250",
    "Unicode hex": "1F4FA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "191",
    "Dingbat hex": "BF",
    "Unicode dec": "128187",
    "Unicode hex": "1F4BB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "192",
    "Dingbat hex": "C0",
    "Unicode dec": "128421",
    "Unicode hex": "1F5A5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "193",
    "Dingbat hex": "C1",
    "Unicode dec": "128422",
    "Unicode hex": "1F5A6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "194",
    "Dingbat hex": "C2",
    "Unicode dec": "128423",
    "Unicode hex": "1F5A7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "195",
    "Dingbat hex": "C3",
    "Unicode dec": "128377",
    "Unicode hex": "1F579",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "196",
    "Dingbat hex": "C4",
    "Unicode dec": "127918",
    "Unicode hex": "1F3AE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "197",
    "Dingbat hex": "C5",
    "Unicode dec": "128379",
    "Unicode hex": "1F57B",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "198",
    "Dingbat hex": "C6",
    "Unicode dec": "128380",
    "Unicode hex": "1F57C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "199",
    "Dingbat hex": "C7",
    "Unicode dec": "128223",
    "Unicode hex": "1F4DF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "200",
    "Dingbat hex": "C8",
    "Unicode dec": "128385",
    "Unicode hex": "1F581",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "201",
    "Dingbat hex": "C9",
    "Unicode dec": "128384",
    "Unicode hex": "1F580",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "202",
    "Dingbat hex": "CA",
    "Unicode dec": "128424",
    "Unicode hex": "1F5A8",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "203",
    "Dingbat hex": "CB",
    "Unicode dec": "128425",
    "Unicode hex": "1F5A9",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "204",
    "Dingbat hex": "CC",
    "Unicode dec": "128447",
    "Unicode hex": "1F5BF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "205",
    "Dingbat hex": "CD",
    "Unicode dec": "128426",
    "Unicode hex": "1F5AA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "206",
    "Dingbat hex": "CE",
    "Unicode dec": "128476",
    "Unicode hex": "1F5DC",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "207",
    "Dingbat hex": "CF",
    "Unicode dec": "128274",
    "Unicode hex": "1F512",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "208",
    "Dingbat hex": "D0",
    "Unicode dec": "128275",
    "Unicode hex": "1F513",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "209",
    "Dingbat hex": "D1",
    "Unicode dec": "128477",
    "Unicode hex": "1F5DD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "210",
    "Dingbat hex": "D2",
    "Unicode dec": "128229",
    "Unicode hex": "1F4E5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "211",
    "Dingbat hex": "D3",
    "Unicode dec": "128228",
    "Unicode hex": "1F4E4",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "212",
    "Dingbat hex": "D4",
    "Unicode dec": "128371",
    "Unicode hex": "1F573",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "213",
    "Dingbat hex": "D5",
    "Unicode dec": "127779",
    "Unicode hex": "1F323",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "214",
    "Dingbat hex": "D6",
    "Unicode dec": "127780",
    "Unicode hex": "1F324",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "215",
    "Dingbat hex": "D7",
    "Unicode dec": "127781",
    "Unicode hex": "1F325",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "216",
    "Dingbat hex": "D8",
    "Unicode dec": "127782",
    "Unicode hex": "1F326",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "217",
    "Dingbat hex": "D9",
    "Unicode dec": "9729",
    "Unicode hex": "2601",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "218",
    "Dingbat hex": "DA",
    "Unicode dec": "127784",
    "Unicode hex": "1F328",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "219",
    "Dingbat hex": "DB",
    "Unicode dec": "127783",
    "Unicode hex": "1F327",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "220",
    "Dingbat hex": "DC",
    "Unicode dec": "127785",
    "Unicode hex": "1F329",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "221",
    "Dingbat hex": "DD",
    "Unicode dec": "127786",
    "Unicode hex": "1F32A",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "222",
    "Dingbat hex": "DE",
    "Unicode dec": "127788",
    "Unicode hex": "1F32C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "223",
    "Dingbat hex": "DF",
    "Unicode dec": "127787",
    "Unicode hex": "1F32B",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "224",
    "Dingbat hex": "E0",
    "Unicode dec": "127772",
    "Unicode hex": "1F31C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "225",
    "Dingbat hex": "E1",
    "Unicode dec": "127777",
    "Unicode hex": "1F321",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "226",
    "Dingbat hex": "E2",
    "Unicode dec": "128715",
    "Unicode hex": "1F6CB",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "227",
    "Dingbat hex": "E3",
    "Unicode dec": "128719",
    "Unicode hex": "1F6CF",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "228",
    "Dingbat hex": "E4",
    "Unicode dec": "127869",
    "Unicode hex": "1F37D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "229",
    "Dingbat hex": "E5",
    "Unicode dec": "127864",
    "Unicode hex": "1F378",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "230",
    "Dingbat hex": "E6",
    "Unicode dec": "128718",
    "Unicode hex": "1F6CE",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "231",
    "Dingbat hex": "E7",
    "Unicode dec": "128717",
    "Unicode hex": "1F6CD",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "232",
    "Dingbat hex": "E8",
    "Unicode dec": "9413",
    "Unicode hex": "24C5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "233",
    "Dingbat hex": "E9",
    "Unicode dec": "9855",
    "Unicode hex": "267F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "234",
    "Dingbat hex": "EA",
    "Unicode dec": "128710",
    "Unicode hex": "1F6C6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "235",
    "Dingbat hex": "EB",
    "Unicode dec": "128392",
    "Unicode hex": "1F588",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "236",
    "Dingbat hex": "EC",
    "Unicode dec": "127891",
    "Unicode hex": "1F393",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "237",
    "Dingbat hex": "ED",
    "Unicode dec": "128484",
    "Unicode hex": "1F5E4",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "238",
    "Dingbat hex": "EE",
    "Unicode dec": "128485",
    "Unicode hex": "1F5E5",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "239",
    "Dingbat hex": "EF",
    "Unicode dec": "128486",
    "Unicode hex": "1F5E6",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "240",
    "Dingbat hex": "F0",
    "Unicode dec": "128487",
    "Unicode hex": "1F5E7",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "241",
    "Dingbat hex": "F1",
    "Unicode dec": "128746",
    "Unicode hex": "1F6EA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "242",
    "Dingbat hex": "F2",
    "Unicode dec": "128063",
    "Unicode hex": "1F43F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "243",
    "Dingbat hex": "F3",
    "Unicode dec": "128038",
    "Unicode hex": "1F426",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "244",
    "Dingbat hex": "F4",
    "Unicode dec": "128031",
    "Unicode hex": "1F41F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "245",
    "Dingbat hex": "F5",
    "Unicode dec": "128021",
    "Unicode hex": "1F415",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "246",
    "Dingbat hex": "F6",
    "Unicode dec": "128008",
    "Unicode hex": "1F408",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "247",
    "Dingbat hex": "F7",
    "Unicode dec": "128620",
    "Unicode hex": "1F66C",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "248",
    "Dingbat hex": "F8",
    "Unicode dec": "128622",
    "Unicode hex": "1F66E",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "249",
    "Dingbat hex": "F9",
    "Unicode dec": "128621",
    "Unicode hex": "1F66D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "250",
    "Dingbat hex": "FA",
    "Unicode dec": "128623",
    "Unicode hex": "1F66F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "251",
    "Dingbat hex": "FB",
    "Unicode dec": "128506",
    "Unicode hex": "1F5FA",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "252",
    "Dingbat hex": "FC",
    "Unicode dec": "127757",
    "Unicode hex": "1F30D",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "253",
    "Dingbat hex": "FD",
    "Unicode dec": "127759",
    "Unicode hex": "1F30F",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "254",
    "Dingbat hex": "FE",
    "Unicode dec": "127758",
    "Unicode hex": "1F30E",
  },
  {
    "Typeface name": "Webdings",
    "Dingbat dec": "255",
    "Dingbat hex": "FF",
    "Unicode dec": "128330",
    "Unicode hex": "1F54A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "32",
    "Dingbat hex": "20",
    "Unicode dec": "32",
    "Unicode hex": "20",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "33",
    "Dingbat hex": "21",
    "Unicode dec": "128393",
    "Unicode hex": "1F589",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "34",
    "Dingbat hex": "22",
    "Unicode dec": "9986",
    "Unicode hex": "2702",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "35",
    "Dingbat hex": "23",
    "Unicode dec": "9985",
    "Unicode hex": "2701",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "36",
    "Dingbat hex": "24",
    "Unicode dec": "128083",
    "Unicode hex": "1F453",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "37",
    "Dingbat hex": "25",
    "Unicode dec": "128365",
    "Unicode hex": "1F56D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "38",
    "Dingbat hex": "26",
    "Unicode dec": "128366",
    "Unicode hex": "1F56E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "39",
    "Dingbat hex": "27",
    "Unicode dec": "128367",
    "Unicode hex": "1F56F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "40",
    "Dingbat hex": "28",
    "Unicode dec": "128383",
    "Unicode hex": "1F57F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "41",
    "Dingbat hex": "29",
    "Unicode dec": "9990",
    "Unicode hex": "2706",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "42",
    "Dingbat hex": "2A",
    "Unicode dec": "128386",
    "Unicode hex": "1F582",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "43",
    "Dingbat hex": "2B",
    "Unicode dec": "128387",
    "Unicode hex": "1F583",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "44",
    "Dingbat hex": "2C",
    "Unicode dec": "128234",
    "Unicode hex": "1F4EA",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "45",
    "Dingbat hex": "2D",
    "Unicode dec": "128235",
    "Unicode hex": "1F4EB",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "46",
    "Dingbat hex": "2E",
    "Unicode dec": "128236",
    "Unicode hex": "1F4EC",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "47",
    "Dingbat hex": "2F",
    "Unicode dec": "128237",
    "Unicode hex": "1F4ED",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "48",
    "Dingbat hex": "30",
    "Unicode dec": "128448",
    "Unicode hex": "1F5C0",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "49",
    "Dingbat hex": "31",
    "Unicode dec": "128449",
    "Unicode hex": "1F5C1",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "50",
    "Dingbat hex": "32",
    "Unicode dec": "128462",
    "Unicode hex": "1F5CE",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "51",
    "Dingbat hex": "33",
    "Unicode dec": "128463",
    "Unicode hex": "1F5CF",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "52",
    "Dingbat hex": "34",
    "Unicode dec": "128464",
    "Unicode hex": "1F5D0",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "53",
    "Dingbat hex": "35",
    "Unicode dec": "128452",
    "Unicode hex": "1F5C4",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "54",
    "Dingbat hex": "36",
    "Unicode dec": "8987",
    "Unicode hex": "231B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "55",
    "Dingbat hex": "37",
    "Unicode dec": "128430",
    "Unicode hex": "1F5AE",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "56",
    "Dingbat hex": "38",
    "Unicode dec": "128432",
    "Unicode hex": "1F5B0",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "57",
    "Dingbat hex": "39",
    "Unicode dec": "128434",
    "Unicode hex": "1F5B2",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "58",
    "Dingbat hex": "3A",
    "Unicode dec": "128435",
    "Unicode hex": "1F5B3",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "59",
    "Dingbat hex": "3B",
    "Unicode dec": "128436",
    "Unicode hex": "1F5B4",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "60",
    "Dingbat hex": "3C",
    "Unicode dec": "128427",
    "Unicode hex": "1F5AB",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "61",
    "Dingbat hex": "3D",
    "Unicode dec": "128428",
    "Unicode hex": "1F5AC",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "62",
    "Dingbat hex": "3E",
    "Unicode dec": "9991",
    "Unicode hex": "2707",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "63",
    "Dingbat hex": "3F",
    "Unicode dec": "9997",
    "Unicode hex": "270D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "64",
    "Dingbat hex": "40",
    "Unicode dec": "128398",
    "Unicode hex": "1F58E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "65",
    "Dingbat hex": "41",
    "Unicode dec": "9996",
    "Unicode hex": "270C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "66",
    "Dingbat hex": "42",
    "Unicode dec": "128399",
    "Unicode hex": "1F58F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "67",
    "Dingbat hex": "43",
    "Unicode dec": "128077",
    "Unicode hex": "1F44D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "68",
    "Dingbat hex": "44",
    "Unicode dec": "128078",
    "Unicode hex": "1F44E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "69",
    "Dingbat hex": "45",
    "Unicode dec": "9756",
    "Unicode hex": "261C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "70",
    "Dingbat hex": "46",
    "Unicode dec": "9758",
    "Unicode hex": "261E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "71",
    "Dingbat hex": "47",
    "Unicode dec": "9757",
    "Unicode hex": "261D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "72",
    "Dingbat hex": "48",
    "Unicode dec": "9759",
    "Unicode hex": "261F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "73",
    "Dingbat hex": "49",
    "Unicode dec": "128400",
    "Unicode hex": "1F590",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "74",
    "Dingbat hex": "4A",
    "Unicode dec": "9786",
    "Unicode hex": "263A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "75",
    "Dingbat hex": "4B",
    "Unicode dec": "128528",
    "Unicode hex": "1F610",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "76",
    "Dingbat hex": "4C",
    "Unicode dec": "9785",
    "Unicode hex": "2639",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "77",
    "Dingbat hex": "4D",
    "Unicode dec": "128163",
    "Unicode hex": "1F4A3",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "78",
    "Dingbat hex": "4E",
    "Unicode dec": "128369",
    "Unicode hex": "1F571",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "79",
    "Dingbat hex": "4F",
    "Unicode dec": "127987",
    "Unicode hex": "1F3F3",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "80",
    "Dingbat hex": "50",
    "Unicode dec": "127985",
    "Unicode hex": "1F3F1",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "81",
    "Dingbat hex": "51",
    "Unicode dec": "9992",
    "Unicode hex": "2708",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "82",
    "Dingbat hex": "52",
    "Unicode dec": "9788",
    "Unicode hex": "263C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "83",
    "Dingbat hex": "53",
    "Unicode dec": "127778",
    "Unicode hex": "1F322",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "84",
    "Dingbat hex": "54",
    "Unicode dec": "10052",
    "Unicode hex": "2744",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "85",
    "Dingbat hex": "55",
    "Unicode dec": "128326",
    "Unicode hex": "1F546",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "86",
    "Dingbat hex": "56",
    "Unicode dec": "10014",
    "Unicode hex": "271E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "87",
    "Dingbat hex": "57",
    "Unicode dec": "128328",
    "Unicode hex": "1F548",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "88",
    "Dingbat hex": "58",
    "Unicode dec": "10016",
    "Unicode hex": "2720",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "89",
    "Dingbat hex": "59",
    "Unicode dec": "10017",
    "Unicode hex": "2721",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "90",
    "Dingbat hex": "5A",
    "Unicode dec": "9770",
    "Unicode hex": "262A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "91",
    "Dingbat hex": "5B",
    "Unicode dec": "9775",
    "Unicode hex": "262F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "92",
    "Dingbat hex": "5C",
    "Unicode dec": "128329",
    "Unicode hex": "1F549",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "93",
    "Dingbat hex": "5D",
    "Unicode dec": "9784",
    "Unicode hex": "2638",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "94",
    "Dingbat hex": "5E",
    "Unicode dec": "9800",
    "Unicode hex": "2648",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "95",
    "Dingbat hex": "5F",
    "Unicode dec": "9801",
    "Unicode hex": "2649",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "96",
    "Dingbat hex": "60",
    "Unicode dec": "9802",
    "Unicode hex": "264A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "97",
    "Dingbat hex": "61",
    "Unicode dec": "9803",
    "Unicode hex": "264B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "98",
    "Dingbat hex": "62",
    "Unicode dec": "9804",
    "Unicode hex": "264C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "99",
    "Dingbat hex": "63",
    "Unicode dec": "9805",
    "Unicode hex": "264D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "100",
    "Dingbat hex": "64",
    "Unicode dec": "9806",
    "Unicode hex": "264E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "101",
    "Dingbat hex": "65",
    "Unicode dec": "9807",
    "Unicode hex": "264F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "102",
    "Dingbat hex": "66",
    "Unicode dec": "9808",
    "Unicode hex": "2650",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "103",
    "Dingbat hex": "67",
    "Unicode dec": "9809",
    "Unicode hex": "2651",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "104",
    "Dingbat hex": "68",
    "Unicode dec": "9810",
    "Unicode hex": "2652",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "105",
    "Dingbat hex": "69",
    "Unicode dec": "9811",
    "Unicode hex": "2653",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "106",
    "Dingbat hex": "6A",
    "Unicode dec": "128624",
    "Unicode hex": "1F670",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "107",
    "Dingbat hex": "6B",
    "Unicode dec": "128629",
    "Unicode hex": "1F675",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "108",
    "Dingbat hex": "6C",
    "Unicode dec": "9899",
    "Unicode hex": "26AB",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "109",
    "Dingbat hex": "6D",
    "Unicode dec": "128318",
    "Unicode hex": "1F53E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "110",
    "Dingbat hex": "6E",
    "Unicode dec": "9724",
    "Unicode hex": "25FC",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "111",
    "Dingbat hex": "6F",
    "Unicode dec": "128911",
    "Unicode hex": "1F78F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "112",
    "Dingbat hex": "70",
    "Unicode dec": "128912",
    "Unicode hex": "1F790",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "113",
    "Dingbat hex": "71",
    "Unicode dec": "10065",
    "Unicode hex": "2751",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "114",
    "Dingbat hex": "72",
    "Unicode dec": "10066",
    "Unicode hex": "2752",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "115",
    "Dingbat hex": "73",
    "Unicode dec": "128927",
    "Unicode hex": "1F79F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "116",
    "Dingbat hex": "74",
    "Unicode dec": "10731",
    "Unicode hex": "29EB",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "117",
    "Dingbat hex": "75",
    "Unicode dec": "9670",
    "Unicode hex": "25C6",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "118",
    "Dingbat hex": "76",
    "Unicode dec": "10070",
    "Unicode hex": "2756",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "119",
    "Dingbat hex": "77",
    "Unicode dec": "11049",
    "Unicode hex": "2B29",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "120",
    "Dingbat hex": "78",
    "Unicode dec": "8999",
    "Unicode hex": "2327",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "121",
    "Dingbat hex": "79",
    "Unicode dec": "11193",
    "Unicode hex": "2BB9",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "122",
    "Dingbat hex": "7A",
    "Unicode dec": "8984",
    "Unicode hex": "2318",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "123",
    "Dingbat hex": "7B",
    "Unicode dec": "127989",
    "Unicode hex": "1F3F5",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "124",
    "Dingbat hex": "7C",
    "Unicode dec": "127990",
    "Unicode hex": "1F3F6",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "125",
    "Dingbat hex": "7D",
    "Unicode dec": "128630",
    "Unicode hex": "1F676",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "126",
    "Dingbat hex": "7E",
    "Unicode dec": "128631",
    "Unicode hex": "1F677",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "127",
    "Dingbat hex": "7F",
    "Unicode dec": "9647",
    "Unicode hex": "25AF",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "128",
    "Dingbat hex": "80",
    "Unicode dec": "127243",
    "Unicode hex": "1F10B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "129",
    "Dingbat hex": "81",
    "Unicode dec": "10112",
    "Unicode hex": "2780",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "130",
    "Dingbat hex": "82",
    "Unicode dec": "10113",
    "Unicode hex": "2781",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "131",
    "Dingbat hex": "83",
    "Unicode dec": "10114",
    "Unicode hex": "2782",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "132",
    "Dingbat hex": "84",
    "Unicode dec": "10115",
    "Unicode hex": "2783",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "133",
    "Dingbat hex": "85",
    "Unicode dec": "10116",
    "Unicode hex": "2784",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "134",
    "Dingbat hex": "86",
    "Unicode dec": "10117",
    "Unicode hex": "2785",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "135",
    "Dingbat hex": "87",
    "Unicode dec": "10118",
    "Unicode hex": "2786",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "136",
    "Dingbat hex": "88",
    "Unicode dec": "10119",
    "Unicode hex": "2787",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "137",
    "Dingbat hex": "89",
    "Unicode dec": "10120",
    "Unicode hex": "2788",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "138",
    "Dingbat hex": "8A",
    "Unicode dec": "10121",
    "Unicode hex": "2789",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "139",
    "Dingbat hex": "8B",
    "Unicode dec": "127244",
    "Unicode hex": "1F10C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "140",
    "Dingbat hex": "8C",
    "Unicode dec": "10122",
    "Unicode hex": "278A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "141",
    "Dingbat hex": "8D",
    "Unicode dec": "10123",
    "Unicode hex": "278B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "142",
    "Dingbat hex": "8E",
    "Unicode dec": "10124",
    "Unicode hex": "278C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "143",
    "Dingbat hex": "8F",
    "Unicode dec": "10125",
    "Unicode hex": "278D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "144",
    "Dingbat hex": "90",
    "Unicode dec": "10126",
    "Unicode hex": "278E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "145",
    "Dingbat hex": "91",
    "Unicode dec": "10127",
    "Unicode hex": "278F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "146",
    "Dingbat hex": "92",
    "Unicode dec": "10128",
    "Unicode hex": "2790",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "147",
    "Dingbat hex": "93",
    "Unicode dec": "10129",
    "Unicode hex": "2791",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "148",
    "Dingbat hex": "94",
    "Unicode dec": "10130",
    "Unicode hex": "2792",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "149",
    "Dingbat hex": "95",
    "Unicode dec": "10131",
    "Unicode hex": "2793",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "150",
    "Dingbat hex": "96",
    "Unicode dec": "128610",
    "Unicode hex": "1F662",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "151",
    "Dingbat hex": "97",
    "Unicode dec": "128608",
    "Unicode hex": "1F660",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "152",
    "Dingbat hex": "98",
    "Unicode dec": "128609",
    "Unicode hex": "1F661",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "153",
    "Dingbat hex": "99",
    "Unicode dec": "128611",
    "Unicode hex": "1F663",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "154",
    "Dingbat hex": "9A",
    "Unicode dec": "128606",
    "Unicode hex": "1F65E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "155",
    "Dingbat hex": "9B",
    "Unicode dec": "128604",
    "Unicode hex": "1F65C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "156",
    "Dingbat hex": "9C",
    "Unicode dec": "128605",
    "Unicode hex": "1F65D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "157",
    "Dingbat hex": "9D",
    "Unicode dec": "128607",
    "Unicode hex": "1F65F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "158",
    "Dingbat hex": "9E",
    "Unicode dec": "8729",
    "Unicode hex": "2219",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "159",
    "Dingbat hex": "9F",
    "Unicode dec": "8226",
    "Unicode hex": "2022",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "160",
    "Dingbat hex": "A0",
    "Unicode dec": "11037",
    "Unicode hex": "2B1D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "161",
    "Dingbat hex": "A1",
    "Unicode dec": "11096",
    "Unicode hex": "2B58",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "162",
    "Dingbat hex": "A2",
    "Unicode dec": "128902",
    "Unicode hex": "1F786",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "163",
    "Dingbat hex": "A3",
    "Unicode dec": "128904",
    "Unicode hex": "1F788",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "164",
    "Dingbat hex": "A4",
    "Unicode dec": "128906",
    "Unicode hex": "1F78A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "165",
    "Dingbat hex": "A5",
    "Unicode dec": "128907",
    "Unicode hex": "1F78B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "166",
    "Dingbat hex": "A6",
    "Unicode dec": "128319",
    "Unicode hex": "1F53F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "167",
    "Dingbat hex": "A7",
    "Unicode dec": "9642",
    "Unicode hex": "25AA",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "168",
    "Dingbat hex": "A8",
    "Unicode dec": "128910",
    "Unicode hex": "1F78E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "169",
    "Dingbat hex": "A9",
    "Unicode dec": "128961",
    "Unicode hex": "1F7C1",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "170",
    "Dingbat hex": "AA",
    "Unicode dec": "128965",
    "Unicode hex": "1F7C5",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "171",
    "Dingbat hex": "AB",
    "Unicode dec": "9733",
    "Unicode hex": "2605",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "172",
    "Dingbat hex": "AC",
    "Unicode dec": "128971",
    "Unicode hex": "1F7CB",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "173",
    "Dingbat hex": "AD",
    "Unicode dec": "128975",
    "Unicode hex": "1F7CF",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "174",
    "Dingbat hex": "AE",
    "Unicode dec": "128979",
    "Unicode hex": "1F7D3",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "175",
    "Dingbat hex": "AF",
    "Unicode dec": "128977",
    "Unicode hex": "1F7D1",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "176",
    "Dingbat hex": "B0",
    "Unicode dec": "11216",
    "Unicode hex": "2BD0",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "177",
    "Dingbat hex": "B1",
    "Unicode dec": "8982",
    "Unicode hex": "2316",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "178",
    "Dingbat hex": "B2",
    "Unicode dec": "11214",
    "Unicode hex": "2BCE",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "179",
    "Dingbat hex": "B3",
    "Unicode dec": "11215",
    "Unicode hex": "2BCF",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "180",
    "Dingbat hex": "B4",
    "Unicode dec": "11217",
    "Unicode hex": "2BD1",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "181",
    "Dingbat hex": "B5",
    "Unicode dec": "10026",
    "Unicode hex": "272A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "182",
    "Dingbat hex": "B6",
    "Unicode dec": "10032",
    "Unicode hex": "2730",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "183",
    "Dingbat hex": "B7",
    "Unicode dec": "128336",
    "Unicode hex": "1F550",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "184",
    "Dingbat hex": "B8",
    "Unicode dec": "128337",
    "Unicode hex": "1F551",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "185",
    "Dingbat hex": "B9",
    "Unicode dec": "128338",
    "Unicode hex": "1F552",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "186",
    "Dingbat hex": "BA",
    "Unicode dec": "128339",
    "Unicode hex": "1F553",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "187",
    "Dingbat hex": "BB",
    "Unicode dec": "128340",
    "Unicode hex": "1F554",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "188",
    "Dingbat hex": "BC",
    "Unicode dec": "128341",
    "Unicode hex": "1F555",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "189",
    "Dingbat hex": "BD",
    "Unicode dec": "128342",
    "Unicode hex": "1F556",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "190",
    "Dingbat hex": "BE",
    "Unicode dec": "128343",
    "Unicode hex": "1F557",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "191",
    "Dingbat hex": "BF",
    "Unicode dec": "128344",
    "Unicode hex": "1F558",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "192",
    "Dingbat hex": "C0",
    "Unicode dec": "128345",
    "Unicode hex": "1F559",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "193",
    "Dingbat hex": "C1",
    "Unicode dec": "128346",
    "Unicode hex": "1F55A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "194",
    "Dingbat hex": "C2",
    "Unicode dec": "128347",
    "Unicode hex": "1F55B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "195",
    "Dingbat hex": "C3",
    "Unicode dec": "11184",
    "Unicode hex": "2BB0",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "196",
    "Dingbat hex": "C4",
    "Unicode dec": "11185",
    "Unicode hex": "2BB1",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "197",
    "Dingbat hex": "C5",
    "Unicode dec": "11186",
    "Unicode hex": "2BB2",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "198",
    "Dingbat hex": "C6",
    "Unicode dec": "11187",
    "Unicode hex": "2BB3",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "199",
    "Dingbat hex": "C7",
    "Unicode dec": "11188",
    "Unicode hex": "2BB4",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "200",
    "Dingbat hex": "C8",
    "Unicode dec": "11189",
    "Unicode hex": "2BB5",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "201",
    "Dingbat hex": "C9",
    "Unicode dec": "11190",
    "Unicode hex": "2BB6",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "202",
    "Dingbat hex": "CA",
    "Unicode dec": "11191",
    "Unicode hex": "2BB7",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "203",
    "Dingbat hex": "CB",
    "Unicode dec": "128618",
    "Unicode hex": "1F66A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "204",
    "Dingbat hex": "CC",
    "Unicode dec": "128619",
    "Unicode hex": "1F66B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "205",
    "Dingbat hex": "CD",
    "Unicode dec": "128597",
    "Unicode hex": "1F655",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "206",
    "Dingbat hex": "CE",
    "Unicode dec": "128596",
    "Unicode hex": "1F654",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "207",
    "Dingbat hex": "CF",
    "Unicode dec": "128599",
    "Unicode hex": "1F657",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "208",
    "Dingbat hex": "D0",
    "Unicode dec": "128598",
    "Unicode hex": "1F656",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "209",
    "Dingbat hex": "D1",
    "Unicode dec": "128592",
    "Unicode hex": "1F650",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "210",
    "Dingbat hex": "D2",
    "Unicode dec": "128593",
    "Unicode hex": "1F651",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "211",
    "Dingbat hex": "D3",
    "Unicode dec": "128594",
    "Unicode hex": "1F652",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "212",
    "Dingbat hex": "D4",
    "Unicode dec": "128595",
    "Unicode hex": "1F653",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "213",
    "Dingbat hex": "D5",
    "Unicode dec": "9003",
    "Unicode hex": "232B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "214",
    "Dingbat hex": "D6",
    "Unicode dec": "8998",
    "Unicode hex": "2326",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "215",
    "Dingbat hex": "D7",
    "Unicode dec": "11160",
    "Unicode hex": "2B98",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "216",
    "Dingbat hex": "D8",
    "Unicode dec": "11162",
    "Unicode hex": "2B9A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "217",
    "Dingbat hex": "D9",
    "Unicode dec": "11161",
    "Unicode hex": "2B99",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "218",
    "Dingbat hex": "DA",
    "Unicode dec": "11163",
    "Unicode hex": "2B9B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "219",
    "Dingbat hex": "DB",
    "Unicode dec": "11144",
    "Unicode hex": "2B88",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "220",
    "Dingbat hex": "DC",
    "Unicode dec": "11146",
    "Unicode hex": "2B8A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "221",
    "Dingbat hex": "DD",
    "Unicode dec": "11145",
    "Unicode hex": "2B89",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "222",
    "Dingbat hex": "DE",
    "Unicode dec": "11147",
    "Unicode hex": "2B8B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "223",
    "Dingbat hex": "DF",
    "Unicode dec": "129128",
    "Unicode hex": "1F868",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "224",
    "Dingbat hex": "E0",
    "Unicode dec": "129130",
    "Unicode hex": "1F86A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "225",
    "Dingbat hex": "E1",
    "Unicode dec": "129129",
    "Unicode hex": "1F869",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "226",
    "Dingbat hex": "E2",
    "Unicode dec": "129131",
    "Unicode hex": "1F86B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "227",
    "Dingbat hex": "E3",
    "Unicode dec": "129132",
    "Unicode hex": "1F86C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "228",
    "Dingbat hex": "E4",
    "Unicode dec": "129133",
    "Unicode hex": "1F86D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "229",
    "Dingbat hex": "E5",
    "Unicode dec": "129135",
    "Unicode hex": "1F86F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "230",
    "Dingbat hex": "E6",
    "Unicode dec": "129134",
    "Unicode hex": "1F86E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "231",
    "Dingbat hex": "E7",
    "Unicode dec": "129144",
    "Unicode hex": "1F878",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "232",
    "Dingbat hex": "E8",
    "Unicode dec": "129146",
    "Unicode hex": "1F87A",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "233",
    "Dingbat hex": "E9",
    "Unicode dec": "129145",
    "Unicode hex": "1F879",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "234",
    "Dingbat hex": "EA",
    "Unicode dec": "129147",
    "Unicode hex": "1F87B",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "235",
    "Dingbat hex": "EB",
    "Unicode dec": "129148",
    "Unicode hex": "1F87C",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "236",
    "Dingbat hex": "EC",
    "Unicode dec": "129149",
    "Unicode hex": "1F87D",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "237",
    "Dingbat hex": "ED",
    "Unicode dec": "129151",
    "Unicode hex": "1F87F",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "238",
    "Dingbat hex": "EE",
    "Unicode dec": "129150",
    "Unicode hex": "1F87E",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "239",
    "Dingbat hex": "EF",
    "Unicode dec": "8678",
    "Unicode hex": "21E6",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "240",
    "Dingbat hex": "F0",
    "Unicode dec": "8680",
    "Unicode hex": "21E8",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "241",
    "Dingbat hex": "F1",
    "Unicode dec": "8679",
    "Unicode hex": "21E7",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "242",
    "Dingbat hex": "F2",
    "Unicode dec": "8681",
    "Unicode hex": "21E9",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "243",
    "Dingbat hex": "F3",
    "Unicode dec": "11012",
    "Unicode hex": "2B04",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "244",
    "Dingbat hex": "F4",
    "Unicode dec": "8691",
    "Unicode hex": "21F3",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "245",
    "Dingbat hex": "F5",
    "Unicode dec": "11009",
    "Unicode hex": "2B01",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "246",
    "Dingbat hex": "F6",
    "Unicode dec": "11008",
    "Unicode hex": "2B00",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "247",
    "Dingbat hex": "F7",
    "Unicode dec": "11011",
    "Unicode hex": "2B03",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "248",
    "Dingbat hex": "F8",
    "Unicode dec": "11010",
    "Unicode hex": "2B02",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "249",
    "Dingbat hex": "F9",
    "Unicode dec": "129196",
    "Unicode hex": "1F8AC",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "250",
    "Dingbat hex": "FA",
    "Unicode dec": "129197",
    "Unicode hex": "1F8AD",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "251",
    "Dingbat hex": "FB",
    "Unicode dec": "128502",
    "Unicode hex": "1F5F6",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "252",
    "Dingbat hex": "FC",
    "Unicode dec": "10003",
    "Unicode hex": "2713",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "253",
    "Dingbat hex": "FD",
    "Unicode dec": "128503",
    "Unicode hex": "1F5F7",
  },
  {
    "Typeface name": "Wingdings",
    "Dingbat dec": "254",
    "Dingbat hex": "FE",
    "Unicode dec": "128505",
    "Unicode hex": "1F5F9",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "32",
    "Dingbat hex": "20",
    "Unicode dec": "32",
    "Unicode hex": "20",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "33",
    "Dingbat hex": "21",
    "Unicode dec": "128394",
    "Unicode hex": "1F58A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "34",
    "Dingbat hex": "22",
    "Unicode dec": "128395",
    "Unicode hex": "1F58B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "35",
    "Dingbat hex": "23",
    "Unicode dec": "128396",
    "Unicode hex": "1F58C",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "36",
    "Dingbat hex": "24",
    "Unicode dec": "128397",
    "Unicode hex": "1F58D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "37",
    "Dingbat hex": "25",
    "Unicode dec": "9988",
    "Unicode hex": "2704",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "38",
    "Dingbat hex": "26",
    "Unicode dec": "9984",
    "Unicode hex": "2700",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "39",
    "Dingbat hex": "27",
    "Unicode dec": "128382",
    "Unicode hex": "1F57E",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "40",
    "Dingbat hex": "28",
    "Unicode dec": "128381",
    "Unicode hex": "1F57D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "41",
    "Dingbat hex": "29",
    "Unicode dec": "128453",
    "Unicode hex": "1F5C5",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "42",
    "Dingbat hex": "2A",
    "Unicode dec": "128454",
    "Unicode hex": "1F5C6",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "43",
    "Dingbat hex": "2B",
    "Unicode dec": "128455",
    "Unicode hex": "1F5C7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "44",
    "Dingbat hex": "2C",
    "Unicode dec": "128456",
    "Unicode hex": "1F5C8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "45",
    "Dingbat hex": "2D",
    "Unicode dec": "128457",
    "Unicode hex": "1F5C9",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "46",
    "Dingbat hex": "2E",
    "Unicode dec": "128458",
    "Unicode hex": "1F5CA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "47",
    "Dingbat hex": "2F",
    "Unicode dec": "128459",
    "Unicode hex": "1F5CB",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "48",
    "Dingbat hex": "30",
    "Unicode dec": "128460",
    "Unicode hex": "1F5CC",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "49",
    "Dingbat hex": "31",
    "Unicode dec": "128461",
    "Unicode hex": "1F5CD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "50",
    "Dingbat hex": "32",
    "Unicode dec": "128203",
    "Unicode hex": "1F4CB",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "51",
    "Dingbat hex": "33",
    "Unicode dec": "128465",
    "Unicode hex": "1F5D1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "52",
    "Dingbat hex": "34",
    "Unicode dec": "128468",
    "Unicode hex": "1F5D4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "53",
    "Dingbat hex": "35",
    "Unicode dec": "128437",
    "Unicode hex": "1F5B5",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "54",
    "Dingbat hex": "36",
    "Unicode dec": "128438",
    "Unicode hex": "1F5B6",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "55",
    "Dingbat hex": "37",
    "Unicode dec": "128439",
    "Unicode hex": "1F5B7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "56",
    "Dingbat hex": "38",
    "Unicode dec": "128440",
    "Unicode hex": "1F5B8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "57",
    "Dingbat hex": "39",
    "Unicode dec": "128429",
    "Unicode hex": "1F5AD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "58",
    "Dingbat hex": "3A",
    "Unicode dec": "128431",
    "Unicode hex": "1F5AF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "59",
    "Dingbat hex": "3B",
    "Unicode dec": "128433",
    "Unicode hex": "1F5B1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "60",
    "Dingbat hex": "3C",
    "Unicode dec": "128402",
    "Unicode hex": "1F592",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "61",
    "Dingbat hex": "3D",
    "Unicode dec": "128403",
    "Unicode hex": "1F593",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "62",
    "Dingbat hex": "3E",
    "Unicode dec": "128408",
    "Unicode hex": "1F598",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "63",
    "Dingbat hex": "3F",
    "Unicode dec": "128409",
    "Unicode hex": "1F599",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "64",
    "Dingbat hex": "40",
    "Unicode dec": "128410",
    "Unicode hex": "1F59A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "65",
    "Dingbat hex": "41",
    "Unicode dec": "128411",
    "Unicode hex": "1F59B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "66",
    "Dingbat hex": "42",
    "Unicode dec": "128072",
    "Unicode hex": "1F448",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "67",
    "Dingbat hex": "43",
    "Unicode dec": "128073",
    "Unicode hex": "1F449",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "68",
    "Dingbat hex": "44",
    "Unicode dec": "128412",
    "Unicode hex": "1F59C",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "69",
    "Dingbat hex": "45",
    "Unicode dec": "128413",
    "Unicode hex": "1F59D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "70",
    "Dingbat hex": "46",
    "Unicode dec": "128414",
    "Unicode hex": "1F59E",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "71",
    "Dingbat hex": "47",
    "Unicode dec": "128415",
    "Unicode hex": "1F59F",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "72",
    "Dingbat hex": "48",
    "Unicode dec": "128416",
    "Unicode hex": "1F5A0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "73",
    "Dingbat hex": "49",
    "Unicode dec": "128417",
    "Unicode hex": "1F5A1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "74",
    "Dingbat hex": "4A",
    "Unicode dec": "128070",
    "Unicode hex": "1F446",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "75",
    "Dingbat hex": "4B",
    "Unicode dec": "128071",
    "Unicode hex": "1F447",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "76",
    "Dingbat hex": "4C",
    "Unicode dec": "128418",
    "Unicode hex": "1F5A2",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "77",
    "Dingbat hex": "4D",
    "Unicode dec": "128419",
    "Unicode hex": "1F5A3",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "78",
    "Dingbat hex": "4E",
    "Unicode dec": "128401",
    "Unicode hex": "1F591",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "79",
    "Dingbat hex": "4F",
    "Unicode dec": "128500",
    "Unicode hex": "1F5F4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "80",
    "Dingbat hex": "50",
    "Unicode dec": "128504",
    "Unicode hex": "1F5F8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "81",
    "Dingbat hex": "51",
    "Unicode dec": "128501",
    "Unicode hex": "1F5F5",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "82",
    "Dingbat hex": "52",
    "Unicode dec": "9745",
    "Unicode hex": "2611",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "83",
    "Dingbat hex": "53",
    "Unicode dec": "11197",
    "Unicode hex": "2BBD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "84",
    "Dingbat hex": "54",
    "Unicode dec": "9746",
    "Unicode hex": "2612",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "85",
    "Dingbat hex": "55",
    "Unicode dec": "11198",
    "Unicode hex": "2BBE",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "86",
    "Dingbat hex": "56",
    "Unicode dec": "11199",
    "Unicode hex": "2BBF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "87",
    "Dingbat hex": "57",
    "Unicode dec": "128711",
    "Unicode hex": "1F6C7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "88",
    "Dingbat hex": "58",
    "Unicode dec": "10680",
    "Unicode hex": "29B8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "89",
    "Dingbat hex": "59",
    "Unicode dec": "128625",
    "Unicode hex": "1F671",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "90",
    "Dingbat hex": "5A",
    "Unicode dec": "128628",
    "Unicode hex": "1F674",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "91",
    "Dingbat hex": "5B",
    "Unicode dec": "128626",
    "Unicode hex": "1F672",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "92",
    "Dingbat hex": "5C",
    "Unicode dec": "128627",
    "Unicode hex": "1F673",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "93",
    "Dingbat hex": "5D",
    "Unicode dec": "8253",
    "Unicode hex": "203D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "94",
    "Dingbat hex": "5E",
    "Unicode dec": "128633",
    "Unicode hex": "1F679",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "95",
    "Dingbat hex": "5F",
    "Unicode dec": "128634",
    "Unicode hex": "1F67A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "96",
    "Dingbat hex": "60",
    "Unicode dec": "128635",
    "Unicode hex": "1F67B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "97",
    "Dingbat hex": "61",
    "Unicode dec": "128614",
    "Unicode hex": "1F666",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "98",
    "Dingbat hex": "62",
    "Unicode dec": "128612",
    "Unicode hex": "1F664",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "99",
    "Dingbat hex": "63",
    "Unicode dec": "128613",
    "Unicode hex": "1F665",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "100",
    "Dingbat hex": "64",
    "Unicode dec": "128615",
    "Unicode hex": "1F667",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "101",
    "Dingbat hex": "65",
    "Unicode dec": "128602",
    "Unicode hex": "1F65A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "102",
    "Dingbat hex": "66",
    "Unicode dec": "128600",
    "Unicode hex": "1F658",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "103",
    "Dingbat hex": "67",
    "Unicode dec": "128601",
    "Unicode hex": "1F659",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "104",
    "Dingbat hex": "68",
    "Unicode dec": "128603",
    "Unicode hex": "1F65B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "105",
    "Dingbat hex": "69",
    "Unicode dec": "9450",
    "Unicode hex": "24EA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "106",
    "Dingbat hex": "6A",
    "Unicode dec": "9312",
    "Unicode hex": "2460",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "107",
    "Dingbat hex": "6B",
    "Unicode dec": "9313",
    "Unicode hex": "2461",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "108",
    "Dingbat hex": "6C",
    "Unicode dec": "9314",
    "Unicode hex": "2462",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "109",
    "Dingbat hex": "6D",
    "Unicode dec": "9315",
    "Unicode hex": "2463",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "110",
    "Dingbat hex": "6E",
    "Unicode dec": "9316",
    "Unicode hex": "2464",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "111",
    "Dingbat hex": "6F",
    "Unicode dec": "9317",
    "Unicode hex": "2465",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "112",
    "Dingbat hex": "70",
    "Unicode dec": "9318",
    "Unicode hex": "2466",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "113",
    "Dingbat hex": "71",
    "Unicode dec": "9319",
    "Unicode hex": "2467",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "114",
    "Dingbat hex": "72",
    "Unicode dec": "9320",
    "Unicode hex": "2468",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "115",
    "Dingbat hex": "73",
    "Unicode dec": "9321",
    "Unicode hex": "2469",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "116",
    "Dingbat hex": "74",
    "Unicode dec": "9471",
    "Unicode hex": "24FF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "117",
    "Dingbat hex": "75",
    "Unicode dec": "10102",
    "Unicode hex": "2776",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "118",
    "Dingbat hex": "76",
    "Unicode dec": "10103",
    "Unicode hex": "2777",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "119",
    "Dingbat hex": "77",
    "Unicode dec": "10104",
    "Unicode hex": "2778",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "120",
    "Dingbat hex": "78",
    "Unicode dec": "10105",
    "Unicode hex": "2779",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "121",
    "Dingbat hex": "79",
    "Unicode dec": "10106",
    "Unicode hex": "277A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "122",
    "Dingbat hex": "7A",
    "Unicode dec": "10107",
    "Unicode hex": "277B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "123",
    "Dingbat hex": "7B",
    "Unicode dec": "10108",
    "Unicode hex": "277C",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "124",
    "Dingbat hex": "7C",
    "Unicode dec": "10109",
    "Unicode hex": "277D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "125",
    "Dingbat hex": "7D",
    "Unicode dec": "10110",
    "Unicode hex": "277E",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "126",
    "Dingbat hex": "7E",
    "Unicode dec": "10111",
    "Unicode hex": "277F",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "128",
    "Dingbat hex": "80",
    "Unicode dec": "9737",
    "Unicode hex": "2609",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "129",
    "Dingbat hex": "81",
    "Unicode dec": "127765",
    "Unicode hex": "1F315",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "130",
    "Dingbat hex": "82",
    "Unicode dec": "9789",
    "Unicode hex": "263D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "131",
    "Dingbat hex": "83",
    "Unicode dec": "9790",
    "Unicode hex": "263E",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "132",
    "Dingbat hex": "84",
    "Unicode dec": "11839",
    "Unicode hex": "2E3F",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "133",
    "Dingbat hex": "85",
    "Unicode dec": "10013",
    "Unicode hex": "271D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "134",
    "Dingbat hex": "86",
    "Unicode dec": "128327",
    "Unicode hex": "1F547",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "135",
    "Dingbat hex": "87",
    "Unicode dec": "128348",
    "Unicode hex": "1F55C",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "136",
    "Dingbat hex": "88",
    "Unicode dec": "128349",
    "Unicode hex": "1F55D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "137",
    "Dingbat hex": "89",
    "Unicode dec": "128350",
    "Unicode hex": "1F55E",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "138",
    "Dingbat hex": "8A",
    "Unicode dec": "128351",
    "Unicode hex": "1F55F",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "139",
    "Dingbat hex": "8B",
    "Unicode dec": "128352",
    "Unicode hex": "1F560",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "140",
    "Dingbat hex": "8C",
    "Unicode dec": "128353",
    "Unicode hex": "1F561",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "141",
    "Dingbat hex": "8D",
    "Unicode dec": "128354",
    "Unicode hex": "1F562",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "142",
    "Dingbat hex": "8E",
    "Unicode dec": "128355",
    "Unicode hex": "1F563",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "143",
    "Dingbat hex": "8F",
    "Unicode dec": "128356",
    "Unicode hex": "1F564",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "144",
    "Dingbat hex": "90",
    "Unicode dec": "128357",
    "Unicode hex": "1F565",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "145",
    "Dingbat hex": "91",
    "Unicode dec": "128358",
    "Unicode hex": "1F566",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "146",
    "Dingbat hex": "92",
    "Unicode dec": "128359",
    "Unicode hex": "1F567",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "147",
    "Dingbat hex": "93",
    "Unicode dec": "128616",
    "Unicode hex": "1F668",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "148",
    "Dingbat hex": "94",
    "Unicode dec": "128617",
    "Unicode hex": "1F669",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "149",
    "Dingbat hex": "95",
    "Unicode dec": "8901",
    "Unicode hex": "22C5",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "150",
    "Dingbat hex": "96",
    "Unicode dec": "128900",
    "Unicode hex": "1F784",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "151",
    "Dingbat hex": "97",
    "Unicode dec": "10625",
    "Unicode hex": "2981",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "152",
    "Dingbat hex": "98",
    "Unicode dec": "9679",
    "Unicode hex": "25CF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "153",
    "Dingbat hex": "99",
    "Unicode dec": "9675",
    "Unicode hex": "25CB",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "154",
    "Dingbat hex": "9A",
    "Unicode dec": "128901",
    "Unicode hex": "1F785",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "155",
    "Dingbat hex": "9B",
    "Unicode dec": "128903",
    "Unicode hex": "1F787",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "156",
    "Dingbat hex": "9C",
    "Unicode dec": "128905",
    "Unicode hex": "1F789",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "157",
    "Dingbat hex": "9D",
    "Unicode dec": "8857",
    "Unicode hex": "2299",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "158",
    "Dingbat hex": "9E",
    "Unicode dec": "10687",
    "Unicode hex": "29BF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "159",
    "Dingbat hex": "9F",
    "Unicode dec": "128908",
    "Unicode hex": "1F78C",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "160",
    "Dingbat hex": "A0",
    "Unicode dec": "128909",
    "Unicode hex": "1F78D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "161",
    "Dingbat hex": "A1",
    "Unicode dec": "9726",
    "Unicode hex": "25FE",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "162",
    "Dingbat hex": "A2",
    "Unicode dec": "9632",
    "Unicode hex": "25A0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "163",
    "Dingbat hex": "A3",
    "Unicode dec": "9633",
    "Unicode hex": "25A1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "164",
    "Dingbat hex": "A4",
    "Unicode dec": "128913",
    "Unicode hex": "1F791",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "165",
    "Dingbat hex": "A5",
    "Unicode dec": "128914",
    "Unicode hex": "1F792",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "166",
    "Dingbat hex": "A6",
    "Unicode dec": "128915",
    "Unicode hex": "1F793",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "167",
    "Dingbat hex": "A7",
    "Unicode dec": "128916",
    "Unicode hex": "1F794",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "168",
    "Dingbat hex": "A8",
    "Unicode dec": "9635",
    "Unicode hex": "25A3",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "169",
    "Dingbat hex": "A9",
    "Unicode dec": "128917",
    "Unicode hex": "1F795",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "170",
    "Dingbat hex": "AA",
    "Unicode dec": "128918",
    "Unicode hex": "1F796",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "171",
    "Dingbat hex": "AB",
    "Unicode dec": "128919",
    "Unicode hex": "1F797",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "172",
    "Dingbat hex": "AC",
    "Unicode dec": "128920",
    "Unicode hex": "1F798",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "173",
    "Dingbat hex": "AD",
    "Unicode dec": "11049",
    "Unicode hex": "2B29",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "174",
    "Dingbat hex": "AE",
    "Unicode dec": "11045",
    "Unicode hex": "2B25",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "175",
    "Dingbat hex": "AF",
    "Unicode dec": "9671",
    "Unicode hex": "25C7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "176",
    "Dingbat hex": "B0",
    "Unicode dec": "128922",
    "Unicode hex": "1F79A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "177",
    "Dingbat hex": "B1",
    "Unicode dec": "9672",
    "Unicode hex": "25C8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "178",
    "Dingbat hex": "B2",
    "Unicode dec": "128923",
    "Unicode hex": "1F79B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "179",
    "Dingbat hex": "B3",
    "Unicode dec": "128924",
    "Unicode hex": "1F79C",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "180",
    "Dingbat hex": "B4",
    "Unicode dec": "128925",
    "Unicode hex": "1F79D",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "181",
    "Dingbat hex": "B5",
    "Unicode dec": "128926",
    "Unicode hex": "1F79E",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "182",
    "Dingbat hex": "B6",
    "Unicode dec": "11050",
    "Unicode hex": "2B2A",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "183",
    "Dingbat hex": "B7",
    "Unicode dec": "11047",
    "Unicode hex": "2B27",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "184",
    "Dingbat hex": "B8",
    "Unicode dec": "9674",
    "Unicode hex": "25CA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "185",
    "Dingbat hex": "B9",
    "Unicode dec": "128928",
    "Unicode hex": "1F7A0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "186",
    "Dingbat hex": "BA",
    "Unicode dec": "9686",
    "Unicode hex": "25D6",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "187",
    "Dingbat hex": "BB",
    "Unicode dec": "9687",
    "Unicode hex": "25D7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "188",
    "Dingbat hex": "BC",
    "Unicode dec": "11210",
    "Unicode hex": "2BCA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "189",
    "Dingbat hex": "BD",
    "Unicode dec": "11211",
    "Unicode hex": "2BCB",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "190",
    "Dingbat hex": "BE",
    "Unicode dec": "11200",
    "Unicode hex": "2BC0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "191",
    "Dingbat hex": "BF",
    "Unicode dec": "11201",
    "Unicode hex": "2BC1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "192",
    "Dingbat hex": "C0",
    "Unicode dec": "11039",
    "Unicode hex": "2B1F",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "193",
    "Dingbat hex": "C1",
    "Unicode dec": "11202",
    "Unicode hex": "2BC2",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "194",
    "Dingbat hex": "C2",
    "Unicode dec": "11043",
    "Unicode hex": "2B23",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "195",
    "Dingbat hex": "C3",
    "Unicode dec": "11042",
    "Unicode hex": "2B22",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "196",
    "Dingbat hex": "C4",
    "Unicode dec": "11203",
    "Unicode hex": "2BC3",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "197",
    "Dingbat hex": "C5",
    "Unicode dec": "11204",
    "Unicode hex": "2BC4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "198",
    "Dingbat hex": "C6",
    "Unicode dec": "128929",
    "Unicode hex": "1F7A1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "199",
    "Dingbat hex": "C7",
    "Unicode dec": "128930",
    "Unicode hex": "1F7A2",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "200",
    "Dingbat hex": "C8",
    "Unicode dec": "128931",
    "Unicode hex": "1F7A3",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "201",
    "Dingbat hex": "C9",
    "Unicode dec": "128932",
    "Unicode hex": "1F7A4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "202",
    "Dingbat hex": "CA",
    "Unicode dec": "128933",
    "Unicode hex": "1F7A5",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "203",
    "Dingbat hex": "CB",
    "Unicode dec": "128934",
    "Unicode hex": "1F7A6",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "204",
    "Dingbat hex": "CC",
    "Unicode dec": "128935",
    "Unicode hex": "1F7A7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "205",
    "Dingbat hex": "CD",
    "Unicode dec": "128936",
    "Unicode hex": "1F7A8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "206",
    "Dingbat hex": "CE",
    "Unicode dec": "128937",
    "Unicode hex": "1F7A9",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "207",
    "Dingbat hex": "CF",
    "Unicode dec": "128938",
    "Unicode hex": "1F7AA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "208",
    "Dingbat hex": "D0",
    "Unicode dec": "128939",
    "Unicode hex": "1F7AB",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "209",
    "Dingbat hex": "D1",
    "Unicode dec": "128940",
    "Unicode hex": "1F7AC",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "210",
    "Dingbat hex": "D2",
    "Unicode dec": "128941",
    "Unicode hex": "1F7AD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "211",
    "Dingbat hex": "D3",
    "Unicode dec": "128942",
    "Unicode hex": "1F7AE",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "212",
    "Dingbat hex": "D4",
    "Unicode dec": "128943",
    "Unicode hex": "1F7AF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "213",
    "Dingbat hex": "D5",
    "Unicode dec": "128944",
    "Unicode hex": "1F7B0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "214",
    "Dingbat hex": "D6",
    "Unicode dec": "128945",
    "Unicode hex": "1F7B1",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "215",
    "Dingbat hex": "D7",
    "Unicode dec": "128946",
    "Unicode hex": "1F7B2",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "216",
    "Dingbat hex": "D8",
    "Unicode dec": "128947",
    "Unicode hex": "1F7B3",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "217",
    "Dingbat hex": "D9",
    "Unicode dec": "128948",
    "Unicode hex": "1F7B4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "218",
    "Dingbat hex": "DA",
    "Unicode dec": "128949",
    "Unicode hex": "1F7B5",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "219",
    "Dingbat hex": "DB",
    "Unicode dec": "128950",
    "Unicode hex": "1F7B6",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "220",
    "Dingbat hex": "DC",
    "Unicode dec": "128951",
    "Unicode hex": "1F7B7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "221",
    "Dingbat hex": "DD",
    "Unicode dec": "128952",
    "Unicode hex": "1F7B8",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "222",
    "Dingbat hex": "DE",
    "Unicode dec": "128953",
    "Unicode hex": "1F7B9",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "223",
    "Dingbat hex": "DF",
    "Unicode dec": "128954",
    "Unicode hex": "1F7BA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "224",
    "Dingbat hex": "E0",
    "Unicode dec": "128955",
    "Unicode hex": "1F7BB",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "225",
    "Dingbat hex": "E1",
    "Unicode dec": "128956",
    "Unicode hex": "1F7BC",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "226",
    "Dingbat hex": "E2",
    "Unicode dec": "128957",
    "Unicode hex": "1F7BD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "227",
    "Dingbat hex": "E3",
    "Unicode dec": "128958",
    "Unicode hex": "1F7BE",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "228",
    "Dingbat hex": "E4",
    "Unicode dec": "128959",
    "Unicode hex": "1F7BF",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "229",
    "Dingbat hex": "E5",
    "Unicode dec": "128960",
    "Unicode hex": "1F7C0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "230",
    "Dingbat hex": "E6",
    "Unicode dec": "128962",
    "Unicode hex": "1F7C2",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "231",
    "Dingbat hex": "E7",
    "Unicode dec": "128964",
    "Unicode hex": "1F7C4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "232",
    "Dingbat hex": "E8",
    "Unicode dec": "128966",
    "Unicode hex": "1F7C6",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "233",
    "Dingbat hex": "E9",
    "Unicode dec": "128969",
    "Unicode hex": "1F7C9",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "234",
    "Dingbat hex": "EA",
    "Unicode dec": "128970",
    "Unicode hex": "1F7CA",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "235",
    "Dingbat hex": "EB",
    "Unicode dec": "10038",
    "Unicode hex": "2736",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "236",
    "Dingbat hex": "EC",
    "Unicode dec": "128972",
    "Unicode hex": "1F7CC",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "237",
    "Dingbat hex": "ED",
    "Unicode dec": "128974",
    "Unicode hex": "1F7CE",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "238",
    "Dingbat hex": "EE",
    "Unicode dec": "128976",
    "Unicode hex": "1F7D0",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "239",
    "Dingbat hex": "EF",
    "Unicode dec": "128978",
    "Unicode hex": "1F7D2",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "240",
    "Dingbat hex": "F0",
    "Unicode dec": "10041",
    "Unicode hex": "2739",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "241",
    "Dingbat hex": "F1",
    "Unicode dec": "128963",
    "Unicode hex": "1F7C3",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "242",
    "Dingbat hex": "F2",
    "Unicode dec": "128967",
    "Unicode hex": "1F7C7",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "243",
    "Dingbat hex": "F3",
    "Unicode dec": "10031",
    "Unicode hex": "272F",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "244",
    "Dingbat hex": "F4",
    "Unicode dec": "128973",
    "Unicode hex": "1F7CD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "245",
    "Dingbat hex": "F5",
    "Unicode dec": "128980",
    "Unicode hex": "1F7D4",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "246",
    "Dingbat hex": "F6",
    "Unicode dec": "11212",
    "Unicode hex": "2BCC",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "247",
    "Dingbat hex": "F7",
    "Unicode dec": "11213",
    "Unicode hex": "2BCD",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "248",
    "Dingbat hex": "F8",
    "Unicode dec": "8251",
    "Unicode hex": "203B",
  },
  {
    "Typeface name": "Wingdings 2",
    "Dingbat dec": "249",
    "Dingbat hex": "F9",
    "Unicode dec": "8258",
    "Unicode hex": "2042",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "32",
    "Dingbat hex": "20",
    "Unicode dec": "32",
    "Unicode hex": "20",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "33",
    "Dingbat hex": "21",
    "Unicode dec": "11104",
    "Unicode hex": "2B60",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "34",
    "Dingbat hex": "22",
    "Unicode dec": "11106",
    "Unicode hex": "2B62",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "35",
    "Dingbat hex": "23",
    "Unicode dec": "11105",
    "Unicode hex": "2B61",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "36",
    "Dingbat hex": "24",
    "Unicode dec": "11107",
    "Unicode hex": "2B63",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "37",
    "Dingbat hex": "25",
    "Unicode dec": "11110",
    "Unicode hex": "2B66",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "38",
    "Dingbat hex": "26",
    "Unicode dec": "11111",
    "Unicode hex": "2B67",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "39",
    "Dingbat hex": "27",
    "Unicode dec": "11113",
    "Unicode hex": "2B69",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "40",
    "Dingbat hex": "28",
    "Unicode dec": "11112",
    "Unicode hex": "2B68",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "41",
    "Dingbat hex": "29",
    "Unicode dec": "11120",
    "Unicode hex": "2B70",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "42",
    "Dingbat hex": "2A",
    "Unicode dec": "11122",
    "Unicode hex": "2B72",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "43",
    "Dingbat hex": "2B",
    "Unicode dec": "11121",
    "Unicode hex": "2B71",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "44",
    "Dingbat hex": "2C",
    "Unicode dec": "11123",
    "Unicode hex": "2B73",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "45",
    "Dingbat hex": "2D",
    "Unicode dec": "11126",
    "Unicode hex": "2B76",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "46",
    "Dingbat hex": "2E",
    "Unicode dec": "11128",
    "Unicode hex": "2B78",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "47",
    "Dingbat hex": "2F",
    "Unicode dec": "11131",
    "Unicode hex": "2B7B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "48",
    "Dingbat hex": "30",
    "Unicode dec": "11133",
    "Unicode hex": "2B7D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "49",
    "Dingbat hex": "31",
    "Unicode dec": "11108",
    "Unicode hex": "2B64",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "50",
    "Dingbat hex": "32",
    "Unicode dec": "11109",
    "Unicode hex": "2B65",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "51",
    "Dingbat hex": "33",
    "Unicode dec": "11114",
    "Unicode hex": "2B6A",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "52",
    "Dingbat hex": "34",
    "Unicode dec": "11116",
    "Unicode hex": "2B6C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "53",
    "Dingbat hex": "35",
    "Unicode dec": "11115",
    "Unicode hex": "2B6B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "54",
    "Dingbat hex": "36",
    "Unicode dec": "11117",
    "Unicode hex": "2B6D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "55",
    "Dingbat hex": "37",
    "Unicode dec": "11085",
    "Unicode hex": "2B4D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "56",
    "Dingbat hex": "38",
    "Unicode dec": "11168",
    "Unicode hex": "2BA0",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "57",
    "Dingbat hex": "39",
    "Unicode dec": "11169",
    "Unicode hex": "2BA1",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "58",
    "Dingbat hex": "3A",
    "Unicode dec": "11170",
    "Unicode hex": "2BA2",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "59",
    "Dingbat hex": "3B",
    "Unicode dec": "11171",
    "Unicode hex": "2BA3",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "60",
    "Dingbat hex": "3C",
    "Unicode dec": "11172",
    "Unicode hex": "2BA4",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "61",
    "Dingbat hex": "3D",
    "Unicode dec": "11173",
    "Unicode hex": "2BA5",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "62",
    "Dingbat hex": "3E",
    "Unicode dec": "11174",
    "Unicode hex": "2BA6",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "63",
    "Dingbat hex": "3F",
    "Unicode dec": "11175",
    "Unicode hex": "2BA7",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "64",
    "Dingbat hex": "40",
    "Unicode dec": "11152",
    "Unicode hex": "2B90",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "65",
    "Dingbat hex": "41",
    "Unicode dec": "11153",
    "Unicode hex": "2B91",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "66",
    "Dingbat hex": "42",
    "Unicode dec": "11154",
    "Unicode hex": "2B92",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "67",
    "Dingbat hex": "43",
    "Unicode dec": "11155",
    "Unicode hex": "2B93",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "68",
    "Dingbat hex": "44",
    "Unicode dec": "11136",
    "Unicode hex": "2B80",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "69",
    "Dingbat hex": "45",
    "Unicode dec": "11139",
    "Unicode hex": "2B83",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "70",
    "Dingbat hex": "46",
    "Unicode dec": "11134",
    "Unicode hex": "2B7E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "71",
    "Dingbat hex": "47",
    "Unicode dec": "11135",
    "Unicode hex": "2B7F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "72",
    "Dingbat hex": "48",
    "Unicode dec": "11140",
    "Unicode hex": "2B84",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "73",
    "Dingbat hex": "49",
    "Unicode dec": "11142",
    "Unicode hex": "2B86",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "74",
    "Dingbat hex": "4A",
    "Unicode dec": "11141",
    "Unicode hex": "2B85",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "75",
    "Dingbat hex": "4B",
    "Unicode dec": "11143",
    "Unicode hex": "2B87",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "76",
    "Dingbat hex": "4C",
    "Unicode dec": "11151",
    "Unicode hex": "2B8F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "77",
    "Dingbat hex": "4D",
    "Unicode dec": "11149",
    "Unicode hex": "2B8D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "78",
    "Dingbat hex": "4E",
    "Unicode dec": "11150",
    "Unicode hex": "2B8E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "79",
    "Dingbat hex": "4F",
    "Unicode dec": "11148",
    "Unicode hex": "2B8C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "80",
    "Dingbat hex": "50",
    "Unicode dec": "11118",
    "Unicode hex": "2B6E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "81",
    "Dingbat hex": "51",
    "Unicode dec": "11119",
    "Unicode hex": "2B6F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "82",
    "Dingbat hex": "52",
    "Unicode dec": "9099",
    "Unicode hex": "238B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "83",
    "Dingbat hex": "53",
    "Unicode dec": "8996",
    "Unicode hex": "2324",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "84",
    "Dingbat hex": "54",
    "Unicode dec": "8963",
    "Unicode hex": "2303",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "85",
    "Dingbat hex": "55",
    "Unicode dec": "8997",
    "Unicode hex": "2325",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "86",
    "Dingbat hex": "56",
    "Unicode dec": "9251",
    "Unicode hex": "2423",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "87",
    "Dingbat hex": "57",
    "Unicode dec": "9085",
    "Unicode hex": "237D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "88",
    "Dingbat hex": "58",
    "Unicode dec": "8682",
    "Unicode hex": "21EA",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "89",
    "Dingbat hex": "59",
    "Unicode dec": "11192",
    "Unicode hex": "2BB8",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "90",
    "Dingbat hex": "5A",
    "Unicode dec": "129184",
    "Unicode hex": "1F8A0",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "91",
    "Dingbat hex": "5B",
    "Unicode dec": "129185",
    "Unicode hex": "1F8A1",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "92",
    "Dingbat hex": "5C",
    "Unicode dec": "129186",
    "Unicode hex": "1F8A2",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "93",
    "Dingbat hex": "5D",
    "Unicode dec": "129187",
    "Unicode hex": "1F8A3",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "94",
    "Dingbat hex": "5E",
    "Unicode dec": "129188",
    "Unicode hex": "1F8A4",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "95",
    "Dingbat hex": "5F",
    "Unicode dec": "129189",
    "Unicode hex": "1F8A5",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "96",
    "Dingbat hex": "60",
    "Unicode dec": "129190",
    "Unicode hex": "1F8A6",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "97",
    "Dingbat hex": "61",
    "Unicode dec": "129191",
    "Unicode hex": "1F8A7",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "98",
    "Dingbat hex": "62",
    "Unicode dec": "129192",
    "Unicode hex": "1F8A8",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "99",
    "Dingbat hex": "63",
    "Unicode dec": "129193",
    "Unicode hex": "1F8A9",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "100",
    "Dingbat hex": "64",
    "Unicode dec": "129194",
    "Unicode hex": "1F8AA",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "101",
    "Dingbat hex": "65",
    "Unicode dec": "129195",
    "Unicode hex": "1F8AB",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "102",
    "Dingbat hex": "66",
    "Unicode dec": "129104",
    "Unicode hex": "1F850",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "103",
    "Dingbat hex": "67",
    "Unicode dec": "129106",
    "Unicode hex": "1F852",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "104",
    "Dingbat hex": "68",
    "Unicode dec": "129105",
    "Unicode hex": "1F851",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "105",
    "Dingbat hex": "69",
    "Unicode dec": "129107",
    "Unicode hex": "1F853",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "106",
    "Dingbat hex": "6A",
    "Unicode dec": "129108",
    "Unicode hex": "1F854",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "107",
    "Dingbat hex": "6B",
    "Unicode dec": "129109",
    "Unicode hex": "1F855",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "108",
    "Dingbat hex": "6C",
    "Unicode dec": "129111",
    "Unicode hex": "1F857",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "109",
    "Dingbat hex": "6D",
    "Unicode dec": "129110",
    "Unicode hex": "1F856",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "110",
    "Dingbat hex": "6E",
    "Unicode dec": "129112",
    "Unicode hex": "1F858",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "111",
    "Dingbat hex": "6F",
    "Unicode dec": "129113",
    "Unicode hex": "1F859",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "112",
    "Dingbat hex": "70",
    "Unicode dec": "9650",
    "Unicode hex": "25B2",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "113",
    "Dingbat hex": "71",
    "Unicode dec": "9660",
    "Unicode hex": "25BC",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "114",
    "Dingbat hex": "72",
    "Unicode dec": "9651",
    "Unicode hex": "25B3",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "115",
    "Dingbat hex": "73",
    "Unicode dec": "9661",
    "Unicode hex": "25BD",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "116",
    "Dingbat hex": "74",
    "Unicode dec": "9664",
    "Unicode hex": "25C0",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "117",
    "Dingbat hex": "75",
    "Unicode dec": "9654",
    "Unicode hex": "25B6",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "118",
    "Dingbat hex": "76",
    "Unicode dec": "9665",
    "Unicode hex": "25C1",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "119",
    "Dingbat hex": "77",
    "Unicode dec": "9655",
    "Unicode hex": "25B7",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "120",
    "Dingbat hex": "78",
    "Unicode dec": "9699",
    "Unicode hex": "25E3",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "121",
    "Dingbat hex": "79",
    "Unicode dec": "9698",
    "Unicode hex": "25E2",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "122",
    "Dingbat hex": "7A",
    "Unicode dec": "9700",
    "Unicode hex": "25E4",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "123",
    "Dingbat hex": "7B",
    "Unicode dec": "9701",
    "Unicode hex": "25E5",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "124",
    "Dingbat hex": "7C",
    "Unicode dec": "128896",
    "Unicode hex": "1F780",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "125",
    "Dingbat hex": "7D",
    "Unicode dec": "128898",
    "Unicode hex": "1F782",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "126",
    "Dingbat hex": "7E",
    "Unicode dec": "128897",
    "Unicode hex": "1F781",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "128",
    "Dingbat hex": "80",
    "Unicode dec": "128899",
    "Unicode hex": "1F783",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "129",
    "Dingbat hex": "81",
    "Unicode dec": "11205",
    "Unicode hex": "2BC5",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "130",
    "Dingbat hex": "82",
    "Unicode dec": "11206",
    "Unicode hex": "2BC6",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "131",
    "Dingbat hex": "83",
    "Unicode dec": "11207",
    "Unicode hex": "2BC7",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "132",
    "Dingbat hex": "84",
    "Unicode dec": "11208",
    "Unicode hex": "2BC8",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "133",
    "Dingbat hex": "85",
    "Unicode dec": "11164",
    "Unicode hex": "2B9C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "134",
    "Dingbat hex": "86",
    "Unicode dec": "11166",
    "Unicode hex": "2B9E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "135",
    "Dingbat hex": "87",
    "Unicode dec": "11165",
    "Unicode hex": "2B9D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "136",
    "Dingbat hex": "88",
    "Unicode dec": "11167",
    "Unicode hex": "2B9F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "137",
    "Dingbat hex": "89",
    "Unicode dec": "129040",
    "Unicode hex": "1F810",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "138",
    "Dingbat hex": "8A",
    "Unicode dec": "129042",
    "Unicode hex": "1F812",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "139",
    "Dingbat hex": "8B",
    "Unicode dec": "129041",
    "Unicode hex": "1F811",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "140",
    "Dingbat hex": "8C",
    "Unicode dec": "129043",
    "Unicode hex": "1F813",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "141",
    "Dingbat hex": "8D",
    "Unicode dec": "129044",
    "Unicode hex": "1F814",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "142",
    "Dingbat hex": "8E",
    "Unicode dec": "129046",
    "Unicode hex": "1F816",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "143",
    "Dingbat hex": "8F",
    "Unicode dec": "129045",
    "Unicode hex": "1F815",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "144",
    "Dingbat hex": "90",
    "Unicode dec": "129047",
    "Unicode hex": "1F817",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "145",
    "Dingbat hex": "91",
    "Unicode dec": "129048",
    "Unicode hex": "1F818",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "146",
    "Dingbat hex": "92",
    "Unicode dec": "129050",
    "Unicode hex": "1F81A",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "147",
    "Dingbat hex": "93",
    "Unicode dec": "129049",
    "Unicode hex": "1F819",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "148",
    "Dingbat hex": "94",
    "Unicode dec": "129051",
    "Unicode hex": "1F81B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "149",
    "Dingbat hex": "95",
    "Unicode dec": "129052",
    "Unicode hex": "1F81C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "150",
    "Dingbat hex": "96",
    "Unicode dec": "129054",
    "Unicode hex": "1F81E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "151",
    "Dingbat hex": "97",
    "Unicode dec": "129053",
    "Unicode hex": "1F81D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "152",
    "Dingbat hex": "98",
    "Unicode dec": "129055",
    "Unicode hex": "1F81F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "153",
    "Dingbat hex": "99",
    "Unicode dec": "129024",
    "Unicode hex": "1F800",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "154",
    "Dingbat hex": "9A",
    "Unicode dec": "129026",
    "Unicode hex": "1F802",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "155",
    "Dingbat hex": "9B",
    "Unicode dec": "129025",
    "Unicode hex": "1F801",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "156",
    "Dingbat hex": "9C",
    "Unicode dec": "129027",
    "Unicode hex": "1F803",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "157",
    "Dingbat hex": "9D",
    "Unicode dec": "129028",
    "Unicode hex": "1F804",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "158",
    "Dingbat hex": "9E",
    "Unicode dec": "129030",
    "Unicode hex": "1F806",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "159",
    "Dingbat hex": "9F",
    "Unicode dec": "129029",
    "Unicode hex": "1F805",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "160",
    "Dingbat hex": "A0",
    "Unicode dec": "129031",
    "Unicode hex": "1F807",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "161",
    "Dingbat hex": "A1",
    "Unicode dec": "129032",
    "Unicode hex": "1F808",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "162",
    "Dingbat hex": "A2",
    "Unicode dec": "129034",
    "Unicode hex": "1F80A",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "163",
    "Dingbat hex": "A3",
    "Unicode dec": "129033",
    "Unicode hex": "1F809",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "164",
    "Dingbat hex": "A4",
    "Unicode dec": "129035",
    "Unicode hex": "1F80B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "165",
    "Dingbat hex": "A5",
    "Unicode dec": "129056",
    "Unicode hex": "1F820",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "166",
    "Dingbat hex": "A6",
    "Unicode dec": "129058",
    "Unicode hex": "1F822",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "167",
    "Dingbat hex": "A7",
    "Unicode dec": "129060",
    "Unicode hex": "1F824",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "168",
    "Dingbat hex": "A8",
    "Unicode dec": "129062",
    "Unicode hex": "1F826",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "169",
    "Dingbat hex": "A9",
    "Unicode dec": "129064",
    "Unicode hex": "1F828",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "170",
    "Dingbat hex": "AA",
    "Unicode dec": "129066",
    "Unicode hex": "1F82A",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "171",
    "Dingbat hex": "AB",
    "Unicode dec": "129068",
    "Unicode hex": "1F82C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "172",
    "Dingbat hex": "AC",
    "Unicode dec": "129180",
    "Unicode hex": "1F89C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "173",
    "Dingbat hex": "AD",
    "Unicode dec": "129181",
    "Unicode hex": "1F89D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "174",
    "Dingbat hex": "AE",
    "Unicode dec": "129182",
    "Unicode hex": "1F89E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "175",
    "Dingbat hex": "AF",
    "Unicode dec": "129183",
    "Unicode hex": "1F89F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "176",
    "Dingbat hex": "B0",
    "Unicode dec": "129070",
    "Unicode hex": "1F82E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "177",
    "Dingbat hex": "B1",
    "Unicode dec": "129072",
    "Unicode hex": "1F830",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "178",
    "Dingbat hex": "B2",
    "Unicode dec": "129074",
    "Unicode hex": "1F832",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "179",
    "Dingbat hex": "B3",
    "Unicode dec": "129076",
    "Unicode hex": "1F834",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "180",
    "Dingbat hex": "B4",
    "Unicode dec": "129078",
    "Unicode hex": "1F836",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "181",
    "Dingbat hex": "B5",
    "Unicode dec": "129080",
    "Unicode hex": "1F838",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "182",
    "Dingbat hex": "B6",
    "Unicode dec": "129082",
    "Unicode hex": "1F83A",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "183",
    "Dingbat hex": "B7",
    "Unicode dec": "129081",
    "Unicode hex": "1F839",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "184",
    "Dingbat hex": "B8",
    "Unicode dec": "129083",
    "Unicode hex": "1F83B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "185",
    "Dingbat hex": "B9",
    "Unicode dec": "129176",
    "Unicode hex": "1F898",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "186",
    "Dingbat hex": "BA",
    "Unicode dec": "129178",
    "Unicode hex": "1F89A",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "187",
    "Dingbat hex": "BB",
    "Unicode dec": "129177",
    "Unicode hex": "1F899",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "188",
    "Dingbat hex": "BC",
    "Unicode dec": "129179",
    "Unicode hex": "1F89B",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "189",
    "Dingbat hex": "BD",
    "Unicode dec": "129084",
    "Unicode hex": "1F83C",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "190",
    "Dingbat hex": "BE",
    "Unicode dec": "129086",
    "Unicode hex": "1F83E",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "191",
    "Dingbat hex": "BF",
    "Unicode dec": "129085",
    "Unicode hex": "1F83D",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "192",
    "Dingbat hex": "C0",
    "Unicode dec": "129087",
    "Unicode hex": "1F83F",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "193",
    "Dingbat hex": "C1",
    "Unicode dec": "129088",
    "Unicode hex": "1F840",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "194",
    "Dingbat hex": "C2",
    "Unicode dec": "129090",
    "Unicode hex": "1F842",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "195",
    "Dingbat hex": "C3",
    "Unicode dec": "129089",
    "Unicode hex": "1F841",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "196",
    "Dingbat hex": "C4",
    "Unicode dec": "129091",
    "Unicode hex": "1F843",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "197",
    "Dingbat hex": "C5",
    "Unicode dec": "129092",
    "Unicode hex": "1F844",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "198",
    "Dingbat hex": "C6",
    "Unicode dec": "129094",
    "Unicode hex": "1F846",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "199",
    "Dingbat hex": "C7",
    "Unicode dec": "129093",
    "Unicode hex": "1F845",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "200",
    "Dingbat hex": "C8",
    "Unicode dec": "129095",
    "Unicode hex": "1F847",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "201",
    "Dingbat hex": "C9",
    "Unicode dec": "11176",
    "Unicode hex": "2BA8",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "202",
    "Dingbat hex": "CA",
    "Unicode dec": "11177",
    "Unicode hex": "2BA9",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "203",
    "Dingbat hex": "CB",
    "Unicode dec": "11178",
    "Unicode hex": "2BAA",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "204",
    "Dingbat hex": "CC",
    "Unicode dec": "11179",
    "Unicode hex": "2BAB",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "205",
    "Dingbat hex": "CD",
    "Unicode dec": "11180",
    "Unicode hex": "2BAC",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "206",
    "Dingbat hex": "CE",
    "Unicode dec": "11181",
    "Unicode hex": "2BAD",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "207",
    "Dingbat hex": "CF",
    "Unicode dec": "11182",
    "Unicode hex": "2BAE",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "208",
    "Dingbat hex": "D0",
    "Unicode dec": "11183",
    "Unicode hex": "2BAF",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "209",
    "Dingbat hex": "D1",
    "Unicode dec": "129120",
    "Unicode hex": "1F860",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "210",
    "Dingbat hex": "D2",
    "Unicode dec": "129122",
    "Unicode hex": "1F862",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "211",
    "Dingbat hex": "D3",
    "Unicode dec": "129121",
    "Unicode hex": "1F861",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "212",
    "Dingbat hex": "D4",
    "Unicode dec": "129123",
    "Unicode hex": "1F863",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "213",
    "Dingbat hex": "D5",
    "Unicode dec": "129124",
    "Unicode hex": "1F864",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "214",
    "Dingbat hex": "D6",
    "Unicode dec": "129125",
    "Unicode hex": "1F865",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "215",
    "Dingbat hex": "D7",
    "Unicode dec": "129127",
    "Unicode hex": "1F867",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "216",
    "Dingbat hex": "D8",
    "Unicode dec": "129126",
    "Unicode hex": "1F866",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "217",
    "Dingbat hex": "D9",
    "Unicode dec": "129136",
    "Unicode hex": "1F870",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "218",
    "Dingbat hex": "DA",
    "Unicode dec": "129138",
    "Unicode hex": "1F872",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "219",
    "Dingbat hex": "DB",
    "Unicode dec": "129137",
    "Unicode hex": "1F871",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "220",
    "Dingbat hex": "DC",
    "Unicode dec": "129139",
    "Unicode hex": "1F873",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "221",
    "Dingbat hex": "DD",
    "Unicode dec": "129140",
    "Unicode hex": "1F874",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "222",
    "Dingbat hex": "DE",
    "Unicode dec": "129141",
    "Unicode hex": "1F875",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "223",
    "Dingbat hex": "DF",
    "Unicode dec": "129143",
    "Unicode hex": "1F877",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "224",
    "Dingbat hex": "E0",
    "Unicode dec": "129142",
    "Unicode hex": "1F876",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "225",
    "Dingbat hex": "E1",
    "Unicode dec": "129152",
    "Unicode hex": "1F880",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "226",
    "Dingbat hex": "E2",
    "Unicode dec": "129154",
    "Unicode hex": "1F882",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "227",
    "Dingbat hex": "E3",
    "Unicode dec": "129153",
    "Unicode hex": "1F881",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "228",
    "Dingbat hex": "E4",
    "Unicode dec": "129155",
    "Unicode hex": "1F883",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "229",
    "Dingbat hex": "E5",
    "Unicode dec": "129156",
    "Unicode hex": "1F884",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "230",
    "Dingbat hex": "E6",
    "Unicode dec": "129157",
    "Unicode hex": "1F885",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "231",
    "Dingbat hex": "E7",
    "Unicode dec": "129159",
    "Unicode hex": "1F887",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "232",
    "Dingbat hex": "E8",
    "Unicode dec": "129158",
    "Unicode hex": "1F886",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "233",
    "Dingbat hex": "E9",
    "Unicode dec": "129168",
    "Unicode hex": "1F890",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "234",
    "Dingbat hex": "EA",
    "Unicode dec": "129170",
    "Unicode hex": "1F892",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "235",
    "Dingbat hex": "EB",
    "Unicode dec": "129169",
    "Unicode hex": "1F891",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "236",
    "Dingbat hex": "EC",
    "Unicode dec": "129171",
    "Unicode hex": "1F893",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "237",
    "Dingbat hex": "ED",
    "Unicode dec": "129172",
    "Unicode hex": "1F894",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "238",
    "Dingbat hex": "EE",
    "Unicode dec": "129174",
    "Unicode hex": "1F896",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "239",
    "Dingbat hex": "EF",
    "Unicode dec": "129173",
    "Unicode hex": "1F895",
  },
  {
    "Typeface name": "Wingdings 3",
    "Dingbat dec": "240",
    "Dingbat hex": "F0",
    "Unicode dec": "129175",
    "Unicode hex": "1F897",
  },
];
yo.default = ng;
var tg =
  (fe && fe.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.hex = Tn.dec = Tn.codePoint = void 0;
var rg = tg(yo),
  ul = {},
  ig = String.fromCodePoint ? String.fromCodePoint : sg;
for (var ta = 0, ms = rg.default; ta < ms.length; ta++) {
  var ra = ms[ta],
    bs = parseInt(ra["Unicode dec"], 10),
    ag = { codePoint: bs, string: ig(bs) };
  ul[ra["Typeface name"].toUpperCase() + "_" + ra["Dingbat dec"]] = ag;
}
function Do(e, n) {
  return ul[e.toUpperCase() + "_" + n];
}
Tn.codePoint = Do;
function og(e, n) {
  return Do(e, parseInt(n, 10));
}
Tn.dec = og;
function cg(e, n) {
  return Do(e, parseInt(n, 16));
}
Tn.hex = cg;
function sg(e) {
  if (e <= 65535) return String.fromCharCode(e);
  var n = Math.floor((e - 65536) / 1024) + 55296,
    t = ((e - 65536) % 1024) + 56320;
  return String.fromCharCode(n, t);
}
var Bn = {},
  ys = we;
Bn.paragraph = ug;
Bn.run = dg;
Bn._elements = dl;
Bn._elementsOfType = vo;
Bn.getDescendantsOfType = lg;
Bn.getDescendants = ll;
function ug(e) {
  return vo("paragraph", e);
}
function dg(e) {
  return vo("run", e);
}
function vo(e, n) {
  return dl(function (t) {
    return t.type === e ? n(t) : t;
  });
}
function dl(e) {
  return function n(t) {
    if (t.children) {
      var r = ys.map(t.children, n);
      t = ys.extend(t, { children: r });
    }
    return e(t);
  };
}
function lg(e, n) {
  return ll(e).filter(function (t) {
    return t.type === n;
  });
}
function ll(e) {
  var n = [];
  return (
    fl(e, function (t) {
      n.push(t);
    }),
    n
  );
}
function fl(e, n) {
  e.children &&
    e.children.forEach(function (t) {
      (fl(t, n), n(t));
    });
}
var xo = {};
xo.uriToZipEntryName = fg;
xo.replaceFragment = hg;
function fg(e, n) {
  return n.charAt(0) === "/" ? n.substr(1) : e + "/" + n;
}
function hg(e, n) {
  var t = e.indexOf("#");
  return (t !== -1 && (e = e.substring(0, t)), e + "#" + n);
}
bo.createBodyReader = gg;
bo._readNumberingProperties = pl;
var Ds = Tn,
  Qe = we,
  _e = he,
  hl = Ye.Result,
  hn = Ye.warning,
  pg = Dn,
  vs = Bn,
  xs = xo;
function gg(e) {
  return {
    readXmlElement: function (n) {
      return new _s(e).readXmlElement(n);
    },
    readXmlElements: function (n) {
      return new _s(e).readXmlElements(n);
    },
  };
}
function _s(e) {
  var n = [],
    t = [],
    r = [],
    i = e.relationships,
    a = e.contentTypes,
    o = e.docxFile,
    c = e.files,
    s = e.numbering,
    u = e.styles;
  function l($) {
    var ne = $.map(p);
    return Us(ne);
  }
  function p($) {
    if ($.type === "element") {
      var ne = C[$.name];
      if (ne) return ne($);
      if (!Object.prototype.hasOwnProperty.call(bg, $.name)) {
        var v = hn("An unrecognised element was ignored: " + $.name);
        return gt([v]);
      }
    }
    return Xn();
  }
  function m($) {
    return D($).map(function (ne) {
      return {
        type: "paragraphProperties",
        styleId: ne.styleId,
        styleName: ne.name,
        alignment: $.firstOrEmpty("w:jc").attributes["w:val"],
        numbering: pl(ne.styleId, $.firstOrEmpty("w:numPr"), s),
        indent: b($.firstOrEmpty("w:ind")),
      };
    });
  }
  function b($) {
    return {
      start: $.attributes["w:start"] || $.attributes["w:left"],
      end: $.attributes["w:end"] || $.attributes["w:right"],
      firstLine: $.attributes["w:firstLine"],
      hanging: $.attributes["w:hanging"],
    };
  }
  function y($) {
    return _($).map(function (ne) {
      var v = $.firstOrEmpty("w:sz").attributes["w:val"],
        G = /^[0-9]+$/.test(v) ? parseInt(v, 10) / 2 : null;
      return {
        type: "runProperties",
        styleId: ne.styleId,
        styleName: ne.name,
        verticalAlignment: $.firstOrEmpty("w:vertAlign").attributes["w:val"],
        font: $.firstOrEmpty("w:rFonts").attributes["w:ascii"],
        fontSize: G,
        isBold: d($.first("w:b")),
        isUnderline: f($.first("w:u")),
        isItalic: d($.first("w:i")),
        isStrikethrough: d($.first("w:strike")),
        isAllCaps: d($.first("w:caps")),
        isSmallCaps: d($.first("w:smallCaps")),
        highlight: h($.firstOrEmpty("w:highlight").attributes["w:val"]),
      };
    });
  }
  function f($) {
    if ($) {
      var ne = $.attributes["w:val"];
      return ne !== void 0 && ne !== "false" && ne !== "0" && ne !== "none";
    } else return !1;
  }
  function d($) {
    if ($) {
      var ne = $.attributes["w:val"];
      return ne !== "false" && ne !== "0";
    } else return !1;
  }
  function g($) {
    return $ !== "false" && $ !== "0";
  }
  function h($) {
    return !$ || $ === "none" ? null : $;
  }
  function D($) {
    return w($, "w:pStyle", "Paragraph", u.findParagraphStyleById);
  }
  function _($) {
    return w($, "w:rStyle", "Run", u.findCharacterStyleById);
  }
  function U($) {
    return w($, "w:tblStyle", "Table", u.findTableStyleById);
  }
  function w($, ne, v, G) {
    var H = [],
      F = $.first(ne),
      A = null,
      q = null;
    if (F && ((A = F.attributes["w:val"]), A)) {
      var Q = G(A);
      Q ? (q = Q.name) : H.push(ye(v, A));
    }
    return Ht({ styleId: A, name: q }, H);
  }
  function E($) {
    var ne = $.attributes["w:fldCharType"];
    if (ne === "begin") (n.push({ type: "begin", fldChar: $ }), (t = []));
    else if (ne === "end") {
      var v = n.pop();
      if ((v.type === "begin" && (v = I(v)), v.type === "checkbox"))
        return $e(_e.checkbox({ checked: v.checked }));
    } else if (ne === "separate") {
      var G = n.pop(),
        H = I(G);
      n.push(H);
    }
    return Xn();
  }
  function O() {
    var $ = Qe.last(
      n.filter(function (ne) {
        return ne.type === "hyperlink";
      }),
    );
    return $ ? $.options : null;
  }
  function I($) {
    return Y(t.join(""), $.type === "begin" ? $.fldChar : pg.emptyElement);
  }
  function Y($, ne) {
    var v = /^\s*HYPERLINK\s+(\\l\s+)?(?:"(.*)"|([^\\]\S*))/.exec($);
    if (v) {
      var G = v[2] === void 0 ? v[3] : v[2],
        H = v[1] === void 0 ? { href: G } : { anchor: G };
      return { type: "hyperlink", options: H };
    }
    var F = /\s*FORMCHECKBOX\s*/.exec($);
    if (F) {
      var A = ne.firstOrEmpty("w:ffData").firstOrEmpty("w:checkBox"),
        q = A.first("w:checked"),
        Q = q == null ? d(A.first("w:default")) : d(q);
      return { type: "checkbox", checked: Q };
    }
    return { type: "unknown" };
  }
  function ee($) {
    return (t.push($.text()), Xn());
  }
  function T($) {
    var ne = $.attributes["w:font"],
      v = $.attributes["w:char"],
      G = Ds.hex(ne, v);
    return (
      G == null && /^F0..$/.test(v) && (G = Ds.hex(ne, v.substring(2))),
      G == null
        ? gt([
            hn(
              "A w:sym element with an unsupported character was ignored: char " +
                v +
                " in font " +
                ne,
            ),
          ])
        : $e(new _e.Text(G.string))
    );
  }
  function N($) {
    return function (ne) {
      var v = ne.attributes["w:id"];
      return $e(new _e.NoteReference({ noteType: $, noteId: v }));
    };
  }
  function x($) {
    return $e(_e.commentReference({ commentId: $.attributes["w:id"] }));
  }
  function j($) {
    return l($.children);
  }
  var C = {
    "w:p": function ($) {
      var ne = $.firstOrEmpty("w:pPr"),
        v = !!ne.firstOrEmpty("w:rPr").first("w:del");
      if (v)
        return (
          $.children.forEach(function (H) {
            r.push(H);
          }),
          Xn()
        );
      var G = $.children;
      return (
        r.length > 0 && ((G = r.concat(G)), (r = [])),
        Se.map(m(ne), l(G), function (H, F) {
          return new _e.Paragraph(F, H);
        }).insertExtra()
      );
    },
    "w:r": function ($) {
      return Se.map(
        y($.firstOrEmpty("w:rPr")),
        l($.children),
        function (ne, v) {
          var G = O();
          return (
            G !== null && (v = [new _e.Hyperlink(v, G)]),
            new _e.Run(v, ne)
          );
        },
      );
    },
    "w:fldChar": E,
    "w:instrText": ee,
    "w:t": function ($) {
      return $e(new _e.Text($.text()));
    },
    "w:tab": function ($) {
      return $e(new _e.Tab());
    },
    "w:noBreakHyphen": function () {
      return $e(new _e.Text("‑"));
    },
    "w:softHyphen": function ($) {
      return $e(new _e.Text("­"));
    },
    "w:sym": T,
    "w:hyperlink": function ($) {
      var ne = $.attributes["r:id"],
        v = $.attributes["w:anchor"];
      return l($.children).map(function (G) {
        function H(A) {
          var q = $.attributes["w:tgtFrame"] || null;
          return new _e.Hyperlink(G, Qe.extend({ targetFrame: q }, A));
        }
        if (ne) {
          var F = i.findTargetByRelationshipId(ne);
          return (v && (F = xs.replaceFragment(F, v)), H({ href: F }));
        } else return v ? H({ anchor: v }) : G;
      });
    },
    "w:tbl": k,
    "w:tr": W,
    "w:tc": z,
    "w:footnoteReference": N("footnote"),
    "w:endnoteReference": N("endnote"),
    "w:commentReference": x,
    "w:br": function ($) {
      var ne = $.attributes["w:type"];
      return ne == null || ne === "textWrapping"
        ? $e(_e.lineBreak)
        : ne === "page"
          ? $e(_e.pageBreak)
          : ne === "column"
            ? $e(_e.columnBreak)
            : gt([hn("Unsupported break type: " + ne)]);
    },
    "w:bookmarkStart": function ($) {
      var ne = $.attributes["w:name"];
      return ne === "_GoBack" ? Xn() : $e(new _e.BookmarkStart({ name: ne }));
    },
    "mc:AlternateContent": function ($) {
      return j($.firstOrEmpty("mc:Fallback"));
    },
    "w:sdt": function ($) {
      var ne = l($.firstOrEmpty("w:sdtContent").children);
      return ne.map(function (v) {
        var G = $.firstOrEmpty("w:sdtPr").first("wordml:checkbox");
        if (G) {
          var H = G.first("wordml:checked"),
            F = !!H && g(H.attributes["wordml:val"]),
            A = _e.checkbox({ checked: F }),
            q = !1,
            Q = v.map(
              vs._elementsOfType(_e.types.text, function (te) {
                return te.value.length > 0 && !q ? ((q = !0), A) : te;
              }),
            );
          return q ? Q : A;
        } else return v;
      });
    },
    "w:ins": j,
    "w:object": j,
    "w:smartTag": j,
    "w:drawing": j,
    "w:pict": function ($) {
      return j($).toExtra();
    },
    "v:roundrect": j,
    "v:shape": j,
    "v:textbox": j,
    "w:txbxContent": j,
    "wp:inline": Z,
    "wp:anchor": Z,
    "v:imagedata": ce,
    "v:group": j,
    "v:rect": j,
  };
  return { readXmlElement: p, readXmlElements: l };
  function k($) {
    var ne = S($.firstOrEmpty("w:tblPr"));
    return l($.children)
      .flatMap(L)
      .flatMap(function (v) {
        return ne.map(function (G) {
          return _e.Table(v, G);
        });
      });
  }
  function S($) {
    return U($).map(function (ne) {
      return { styleId: ne.styleId, styleName: ne.name };
    });
  }
  function W($) {
    var ne = $.firstOrEmpty("w:trPr"),
      v = !!ne.first("w:del");
    if (v) return Xn();
    var G = !!ne.first("w:tblHeader");
    return l($.children).map(function (H) {
      return _e.TableRow(H, { isHeader: G });
    });
  }
  function z($) {
    return l($.children).map(function (ne) {
      var v = $.firstOrEmpty("w:tcPr"),
        G = v.firstOrEmpty("w:gridSpan").attributes["w:val"],
        H = G ? parseInt(G, 10) : 1,
        F = _e.TableCell(ne, { colSpan: H });
      return ((F._vMerge = R(v)), F);
    });
  }
  function R($) {
    var ne = $.first("w:vMerge");
    if (ne) {
      var v = ne.attributes["w:val"];
      return v === "continue" || !v;
    } else return null;
  }
  function L($) {
    var ne = Qe.any($, function (H) {
      return H.type !== _e.types.tableRow;
    });
    if (ne)
      return (
        M($),
        Ht($, [
          hn(
            "unexpected non-row element in table, cell merging may be incorrect",
          ),
        ])
      );
    var v = Qe.any($, function (H) {
      return Qe.any(H.children, function (F) {
        return F.type !== _e.types.tableCell;
      });
    });
    if (v)
      return (
        M($),
        Ht($, [
          hn(
            "unexpected non-cell element in table row, cell merging may be incorrect",
          ),
        ])
      );
    var G = {};
    return (
      $.forEach(function (H) {
        var F = 0;
        H.children.forEach(function (A) {
          (A._vMerge && G[F] ? G[F].rowSpan++ : ((G[F] = A), (A._vMerge = !1)),
            (F += A.colSpan));
        });
      }),
      $.forEach(function (H) {
        ((H.children = H.children.filter(function (F) {
          return !F._vMerge;
        })),
          H.children.forEach(function (F) {
            delete F._vMerge;
          }));
      }),
      $e($)
    );
  }
  function M($) {
    $.forEach(function (ne) {
      var v = vs.getDescendantsOfType(ne, _e.types.tableCell);
      v.forEach(function (G) {
        delete G._vMerge;
      });
    });
  }
  function Z($) {
    var ne = $.getElementsByTagName("a:graphic")
      .getElementsByTagName("a:graphicData")
      .getElementsByTagName("pic:pic")
      .getElementsByTagName("pic:blipFill")
      .getElementsByTagName("a:blip");
    return Us(ne.map(J.bind(null, $)));
  }
  function J($, ne) {
    var v = $.firstOrEmpty("wp:docPr"),
      G = v.attributes,
      H = ie(G.descr) ? G.title : G.descr,
      F = oe(ne);
    return F === null
      ? gt([hn("Could not find image file for a:blip element")])
      : me(F, H).map(function (A) {
          var q = v.firstOrEmpty("a:hlinkClick"),
            Q = q.attributes["r:id"];
          if (Q) {
            var te = i.findTargetByRelationshipId(Q);
            return new _e.Hyperlink([A], { href: te });
          } else return A;
        });
  }
  function ie($) {
    return $ == null || /^\s*$/.test($);
  }
  function oe($) {
    var ne = $.attributes["r:embed"],
      v = $.attributes["r:link"];
    if (ne) return de(ne);
    if (v) {
      var G = i.findTargetByRelationshipId(v);
      return { path: G, read: c.read.bind(c, G) };
    } else return null;
  }
  function ce($) {
    var ne = $.attributes["r:id"];
    return ne
      ? me(de(ne), $.attributes["o:title"])
      : gt([hn("A v:imagedata element without a relationship ID was ignored")]);
  }
  function de($) {
    var ne = xs.uriToZipEntryName("word", i.findTargetByRelationshipId($));
    return { path: ne, read: o.read.bind(o, ne) };
  }
  function me($, ne) {
    var v = a.findContentType($.path),
      G = _e.Image({ readImage: $.read, altText: ne, contentType: v }),
      H = mg[v]
        ? []
        : hn("Image of type " + v + " is unlikely to display in web browsers");
    return Ht(G, H);
  }
  function ye($, ne) {
    return hn(
      $ +
        " style with ID " +
        ne +
        " was referenced but not defined in the document",
    );
  }
}
function pl(e, n, t) {
  var r = n.firstOrEmpty("w:ilvl").attributes["w:val"],
    i = n.firstOrEmpty("w:numId").attributes["w:val"];
  if (r !== void 0 && i !== void 0) return t.findLevel(i, r);
  if (e != null) {
    var a = t.findLevelByParagraphStyleId(e);
    if (a != null) return a;
  }
  return i !== void 0 ? t.findLevel(i, "0") : null;
}
var mg = {
    "image/png": !0,
    "image/gif": !0,
    "image/jpeg": !0,
    "image/svg+xml": !0,
    "image/tiff": !0,
  },
  bg = {
    "office-word:wrap": !0,
    "v:shadow": !0,
    "v:shapetype": !0,
    "w:annotationRef": !0,
    "w:bookmarkEnd": !0,
    "w:sectPr": !0,
    "w:proofErr": !0,
    "w:lastRenderedPageBreak": !0,
    "w:commentRangeStart": !0,
    "w:commentRangeEnd": !0,
    "w:del": !0,
    "w:footnoteRef": !0,
    "w:endnoteRef": !0,
    "w:pPr": !0,
    "w:rPr": !0,
    "w:tblPr": !0,
    "w:tblGrid": !0,
    "w:trPr": !0,
    "w:tcPr": !0,
  };
function gt(e) {
  return new Se(null, null, e);
}
function Xn() {
  return new Se(null);
}
function $e(e) {
  return new Se(e);
}
function Ht(e, n) {
  return new Se(e, null, n);
}
function Se(e, n, t) {
  ((this.value = e || []),
    (this.extra = n || []),
    (this._result = new hl({ element: this.value, extra: n }, t)),
    (this.messages = this._result.messages));
}
Se.prototype.toExtra = function () {
  return new Se(null, qr(this.extra, this.value), this.messages);
};
Se.prototype.insertExtra = function () {
  var e = this.extra;
  return e && e.length ? new Se(qr(this.value, e), null, this.messages) : this;
};
Se.prototype.map = function (e) {
  var n = this._result.map(function (t) {
    return e(t.element);
  });
  return new Se(n.value, this.extra, n.messages);
};
Se.prototype.flatMap = function (e) {
  var n = this._result.flatMap(function (t) {
    return e(t.element)._result;
  });
  return new Se(n.value.element, qr(this.extra, n.value.extra), n.messages);
};
Se.map = function (e, n, t) {
  return new Se(
    t(e.value, n.value),
    qr(e.extra, n.extra),
    e.messages.concat(n.messages),
  );
};
function Us(e) {
  var n = hl.combine(Qe.pluck(e, "_result"));
  return new Se(
    Qe.flatten(Qe.pluck(n.value, "element")),
    Qe.filter(Qe.flatten(Qe.pluck(n.value, "extra")), yg),
    n.messages,
  );
}
function qr(e, n) {
  return Qe.flatten([e, n]);
}
function yg(e) {
  return e;
}
var gl = {};
gl.DocumentXmlReader = xg;
var Dg = he,
  vg = Ye.Result;
function xg(e) {
  var n = e.bodyReader;
  function t(r) {
    var i = r.first("w:body");
    if (i == null)
      throw new Error(
        "Could not find the body element: are you sure this is a docx file?",
      );
    var a = n.readXmlElements(i.children).map(function (o) {
      return new Dg.Document(o, { notes: e.notes, comments: e.comments });
    });
    return new vg(a.value, a.messages);
  }
  return { convertXmlToDocument: t };
}
var zr = {};
zr.readRelationships = _g;
zr.defaultValue = new _o([]);
zr.Relationships = _o;
function _g(e) {
  var n = [];
  return (
    e.children.forEach(function (t) {
      if (t.name === "relationships:Relationship") {
        var r = {
          relationshipId: t.attributes.Id,
          target: t.attributes.Target,
          type: t.attributes.Type,
        };
        n.push(r);
      }
    }),
    new _o(n)
  );
}
function _o(e) {
  var n = {};
  e.forEach(function (r) {
    n[r.relationshipId] = r.target;
  });
  var t = {};
  return (
    e.forEach(function (r) {
      (t[r.type] || (t[r.type] = []), t[r.type].push(r.target));
    }),
    {
      findTargetByRelationshipId: function (r) {
        return n[r];
      },
      findTargetsByType: function (r) {
        return t[r] || [];
      },
    }
  );
}
var Uo = {};
Uo.readContentTypesFromXml = Tg;
var Ug = {
  png: "png",
  gif: "gif",
  jpeg: "jpeg",
  jpg: "jpeg",
  tif: "tiff",
  tiff: "tiff",
  bmp: "bmp",
};
Uo.defaultContentTypes = ml({}, {});
function Tg(e) {
  var n = {},
    t = {};
  return (
    e.children.forEach(function (r) {
      if (
        (r.name === "content-types:Default" &&
          (n[r.attributes.Extension] = r.attributes.ContentType),
        r.name === "content-types:Override")
      ) {
        var i = r.attributes.PartName;
        (i.charAt(0) === "/" && (i = i.substring(1)),
          (t[i] = r.attributes.ContentType));
      }
    }),
    ml(t, n)
  );
}
function ml(e, n) {
  return {
    findContentType: function (t) {
      var r = e[t];
      if (r) return r;
      var i = t.split("."),
        a = i[i.length - 1];
      if (n.hasOwnProperty(a)) return n[a];
      var o = Ug[a.toLowerCase()];
      return o ? "image/" + o : null;
    },
  };
}
var jr = {},
  $t = we;
jr.readNumberingXml = wg;
jr.Numbering = To;
jr.defaultNumbering = new To({}, {});
function To(e, n, t) {
  var r = $t.flatten(
      $t.values(n).map(function (c) {
        return $t.values(c.levels);
      }),
    ),
    i = $t.indexBy(
      r.filter(function (c) {
        return c.paragraphStyleId != null;
      }),
      "paragraphStyleId",
    );
  function a(c, s) {
    var u = e[c];
    if (u) {
      var l = n[u.abstractNumId];
      if (l) {
        if (l.numStyleLink == null) return n[u.abstractNumId].levels[s];
        var p = t.findNumberingStyleById(l.numStyleLink);
        return a(p.numId, s);
      } else return null;
    } else return null;
  }
  function o(c) {
    return i[c] || null;
  }
  return { findLevel: a, findLevelByParagraphStyleId: o };
}
function wg(e, n) {
  if (!n || !n.styles) throw new Error("styles is missing");
  var t = Eg(e),
    r = Cg(e);
  return new To(r, t, n.styles);
}
function Eg(e) {
  var n = {};
  return (
    e.getElementsByTagName("w:abstractNum").forEach(function (t) {
      var r = t.attributes["w:abstractNumId"];
      n[r] = Ag(t);
    }),
    n
  );
}
function Ag(e) {
  var n = {},
    t = null;
  (e.getElementsByTagName("w:lvl").forEach(function (i) {
    var a = i.attributes["w:ilvl"],
      o = i.firstOrEmpty("w:numFmt").attributes["w:val"],
      c = o !== "bullet",
      s = i.firstOrEmpty("w:pStyle").attributes["w:val"];
    a === void 0
      ? (t = { isOrdered: c, level: "0", paragraphStyleId: s })
      : (n[a] = { isOrdered: c, level: a, paragraphStyleId: s });
  }),
    t !== null && n[t.level] === void 0 && (n[t.level] = t));
  var r = e.firstOrEmpty("w:numStyleLink").attributes["w:val"];
  return { levels: n, numStyleLink: r };
}
function Cg(e) {
  var n = {};
  return (
    e.getElementsByTagName("w:num").forEach(function (t) {
      var r = t.attributes["w:numId"],
        i = t.first("w:abstractNumId").attributes["w:val"];
      n[r] = { abstractNumId: i };
    }),
    n
  );
}
var Vr = {};
Vr.readStylesXml = Fg;
Vr.Styles = Ft;
Vr.defaultStyles = new Ft({}, {});
function Ft(e, n, t, r) {
  return {
    findParagraphStyleById: function (i) {
      return e[i];
    },
    findCharacterStyleById: function (i) {
      return n[i];
    },
    findTableStyleById: function (i) {
      return t[i];
    },
    findNumberingStyleById: function (i) {
      return r[i];
    },
  };
}
Ft.EMPTY = new Ft({}, {}, {}, {});
function Fg(e) {
  var n = {},
    t = {},
    r = {},
    i = {},
    a = { paragraph: n, character: t, table: r, numbering: i };
  return (
    e.getElementsByTagName("w:style").forEach(function (o) {
      var c = Sg(o),
        s = a[c.type];
      s && s[c.styleId] === void 0 && (s[c.styleId] = c);
    }),
    new Ft(n, t, r, i)
  );
}
function Sg(e) {
  var n = e.attributes["w:type"];
  if (n === "numbering") return kg(n, e);
  var t = bl(e),
    r = Bg(e);
  return { type: n, styleId: t, name: r };
}
function Bg(e) {
  var n = e.first("w:name");
  return n ? n.attributes["w:val"] : null;
}
function kg(e, n) {
  var t = bl(n),
    r = n.firstOrEmpty("w:pPr").firstOrEmpty("w:numPr").firstOrEmpty("w:numId")
      .attributes["w:val"];
  return { type: e, numId: r, styleId: t };
}
function bl(e) {
  return e.attributes["w:styleId"];
}
var wo = {},
  Wg = he,
  Rg = Ye.Result;
wo.createFootnotesReader = yl.bind(fe, "footnote");
wo.createEndnotesReader = yl.bind(fe, "endnote");
function yl(e, n) {
  function t(a) {
    return Rg.combine(
      a
        .getElementsByTagName("w:" + e)
        .filter(r)
        .map(i),
    );
  }
  function r(a) {
    var o = a.attributes["w:type"];
    return o !== "continuationSeparator" && o !== "separator";
  }
  function i(a) {
    var o = a.attributes["w:id"];
    return n.readXmlElements(a.children).map(function (c) {
      return Wg.Note({ noteType: e, noteId: o, body: c });
    });
  }
  return t;
}
var Dl = {},
  Og = he,
  Ig = Ye.Result;
function Ng(e) {
  function n(r) {
    return Ig.combine(r.getElementsByTagName("w:comment").map(t));
  }
  function t(r) {
    var i = r.attributes["w:id"];
    function a(o) {
      return (r.attributes[o] || "").trim() || null;
    }
    return e.readXmlElements(r.children).map(function (o) {
      return Og.comment({
        commentId: i,
        body: o,
        authorName: a("w:author"),
        authorInitials: a("w:initials"),
      });
    });
  }
  return n;
}
Dl.createCommentsReader = Ng;
var vl = {},
  Lg = Ce;
vl.Files = Mg;
function Mg() {
  function e(n) {
    return Lg.reject(
      new Error(
        "could not open external image: '" +
          n +
          `'
cannot open linked files from a web browser`,
      ),
    );
  }
  return { read: e };
}
Ja.read = Hg;
Ja._findPartPaths = _l;
var Pg = Ce,
  qg = he,
  ia = Ye.Result,
  sr = Rt,
  xl = to.readXmlFromZipFile,
  zg = bo.createBodyReader,
  jg = gl.DocumentXmlReader,
  tt = zr,
  Ts = Uo,
  ws = jr,
  Es = Vr,
  As = wo,
  Vg = Dl,
  Xg = vl.Files;
function Hg(e, n, t) {
  ((n = n || {}), (t = t || {}));
  var r = new Xg({
    externalFileAccess: t.externalFileAccess,
    relativeToFile: n.path,
  });
  return Pg.props({
    contentTypes: Gg(e),
    partPaths: _l(e),
    docxFile: e,
    files: r,
  })
    .also(function (i) {
      return { styles: Zg(e, i.partPaths.styles) };
    })
    .also(function (i) {
      return { numbering: Yg(e, i.partPaths.numbering, i.styles) };
    })
    .also(function (i) {
      return {
        footnotes: Gt(i.partPaths.footnotes, i, function (a, o) {
          return o ? As.createFootnotesReader(a)(o) : new ia([]);
        }),
        endnotes: Gt(i.partPaths.endnotes, i, function (a, o) {
          return o ? As.createEndnotesReader(a)(o) : new ia([]);
        }),
        comments: Gt(i.partPaths.comments, i, function (a, o) {
          return o ? Vg.createCommentsReader(a)(o) : new ia([]);
        }),
      };
    })
    .also(function (i) {
      return {
        notes: i.footnotes.flatMap(function (a) {
          return i.endnotes.map(function (o) {
            return new qg.Notes(a.concat(o));
          });
        }),
      };
    })
    .then(function (i) {
      return Gt(i.partPaths.mainDocument, i, function (a, o) {
        return i.notes.flatMap(function (c) {
          return i.comments.flatMap(function (s) {
            var u = new jg({ bodyReader: a, notes: c, comments: s });
            return u.convertXmlToDocument(o);
          });
        });
      });
    });
}
function _l(e) {
  return Kg(e).then(function (n) {
    var t = Cs({
      docxFile: e,
      relationships: n,
      relationshipType:
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
      basePath: "",
      fallbackPath: "word/document.xml",
    });
    if (!e.exists(t))
      throw new Error(
        "Could not find main document part. Are you sure this is a valid .docx file?",
      );
    return ut({
      filename: Ul(t),
      readElement: tt.readRelationships,
      defaultValue: tt.defaultValue,
    })(e).then(function (r) {
      function i(a) {
        return Cs({
          docxFile: e,
          relationships: r,
          relationshipType:
            "http://schemas.openxmlformats.org/officeDocument/2006/relationships/" +
            a,
          basePath: sr.splitPath(t).dirname,
          fallbackPath: "word/" + a + ".xml",
        });
      }
      return {
        mainDocument: t,
        comments: i("comments"),
        endnotes: i("endnotes"),
        footnotes: i("footnotes"),
        numbering: i("numbering"),
        styles: i("styles"),
      };
    });
  });
}
function Cs(e) {
  var n = e.docxFile,
    t = e.relationships,
    r = e.relationshipType,
    i = e.basePath,
    a = e.fallbackPath,
    o = t.findTargetsByType(r),
    c = o.map(function (u) {
      return $g(sr.joinPath(i, u), "/");
    }),
    s = c.filter(function (u) {
      return n.exists(u);
    });
  return s.length === 0 ? a : s[0];
}
function $g(e, n) {
  return e.substring(0, n.length) === n ? e.substring(n.length) : e;
}
function ut(e) {
  return function (n) {
    return xl(n, e.filename).then(function (t) {
      return t ? e.readElement(t) : e.defaultValue;
    });
  };
}
function Gt(e, n, t) {
  var r = ut({
    filename: Ul(e),
    readElement: tt.readRelationships,
    defaultValue: tt.defaultValue,
  });
  return r(n.docxFile).then(function (i) {
    var a = new zg({
      relationships: i,
      contentTypes: n.contentTypes,
      docxFile: n.docxFile,
      numbering: n.numbering,
      styles: n.styles,
      files: n.files,
    });
    return xl(n.docxFile, e).then(function (o) {
      return t(a, o);
    });
  });
}
function Ul(e) {
  var n = sr.splitPath(e);
  return sr.joinPath(n.dirname, "_rels", n.basename + ".rels");
}
var Gg = ut({
  filename: "[Content_Types].xml",
  readElement: Ts.readContentTypesFromXml,
  defaultValue: Ts.defaultContentTypes,
});
function Yg(e, n, t) {
  return ut({
    filename: n,
    readElement: function (r) {
      return ws.readNumberingXml(r, { styles: t });
    },
    defaultValue: ws.defaultNumbering,
  })(e);
}
function Zg(e, n) {
  return ut({
    filename: n,
    readElement: Es.readStylesXml,
    defaultValue: Es.defaultStyles,
  })(e);
}
var Kg = ut({
    filename: "_rels/.rels",
    readElement: tt.readRelationships,
    defaultValue: tt.defaultValue,
  }),
  Eo = {},
  Qg = we,
  Jg = Ce,
  St = Dn;
Eo.writeStyleMap = n2;
Eo.readStyleMap = i2;
var e2 = "http://schemas.zwobble.org/mammoth/style-map",
  ur = "mammoth/style-map",
  Tl = "/" + ur;
function n2(e, n) {
  return (
    e.write(ur, n),
    t2(e).then(function () {
      return r2(e);
    })
  );
}
function t2(e) {
  var n = "word/_rels/document.xml.rels",
    t = "http://schemas.openxmlformats.org/package/2006/relationships",
    r = "{" + t + "}Relationship";
  return e
    .read(n, "utf8")
    .then(St.readString)
    .then(function (i) {
      var a = i.children;
      wl(a, r, "Id", { Id: "rMammothStyleMap", Type: e2, Target: Tl });
      var o = { "": t };
      return e.write(n, St.writeString(i, o));
    });
}
function r2(e) {
  var n = "[Content_Types].xml",
    t = "http://schemas.openxmlformats.org/package/2006/content-types",
    r = "{" + t + "}Override";
  return e
    .read(n, "utf8")
    .then(St.readString)
    .then(function (i) {
      var a = i.children;
      wl(a, r, "PartName", {
        PartName: Tl,
        ContentType: "text/prs.mammoth.style-map",
      });
      var o = { "": t };
      return e.write(n, St.writeString(i, o));
    });
}
function wl(e, n, t, r) {
  var i = Qg.find(e, function (a) {
    return a.name === n && a.attributes[t] === r[t];
  });
  i ? (i.attributes = r) : e.push(St.element(n, r));
}
function i2(e) {
  return e.exists(ur) ? e.read(ur, "utf8") : Jg.resolve(null);
}
var Ao = {},
  kn = {},
  pn = {},
  _n = {},
  Fs;
function El() {
  if (Fs) return _n;
  Fs = 1;
  var e = Hr();
  function n(s, u, l) {
    return r(e.element(s, u, { fresh: !1 }), l);
  }
  function t(s, u, l) {
    var p = e.element(s, u, { fresh: !0 });
    return r(p, l);
  }
  function r(s, u) {
    return { type: "element", tag: s, children: u || [] };
  }
  function i(s) {
    return { type: "text", value: s };
  }
  var a = { type: "forceWrite" };
  ((_n.freshElement = t),
    (_n.nonFreshElement = n),
    (_n.elementWithTag = r),
    (_n.text = i),
    (_n.forceWrite = a));
  var o = { br: !0, hr: !0, img: !0, input: !0 };
  function c(s) {
    return s.children.length === 0 && o[s.tag.tagName];
  }
  return ((_n.isVoidElement = c), _n);
}
var aa, Ss;
function a2() {
  if (Ss) return aa;
  Ss = 1;
  var e = we,
    n = El();
  function t(f) {
    return r(u(f));
  }
  function r(f) {
    var d = [];
    return (
      f.map(i).forEach(function (g) {
        s(d, g);
      }),
      d
    );
  }
  function i(f) {
    return a[f.type](f);
  }
  var a = { element: o, text: c, forceWrite: c };
  function o(f) {
    return n.elementWithTag(f.tag, r(f.children));
  }
  function c(f) {
    return f;
  }
  function s(f, d) {
    var g = f[f.length - 1];
    d.type === "element" &&
    !d.tag.fresh &&
    g &&
    g.type === "element" &&
    d.tag.matchesElement(g.tag)
      ? (d.tag.separator && s(g.children, n.text(d.tag.separator)),
        d.children.forEach(function (h) {
          s(g.children, h);
        }))
      : f.push(d);
  }
  function u(f) {
    return l(f, function (d) {
      return p[d.type](d);
    });
  }
  function l(f, d) {
    return e.flatten(e.map(f, d), !0);
  }
  var p = { element: b, text: y, forceWrite: m };
  function m(f) {
    return [f];
  }
  function b(f) {
    var d = u(f.children);
    return d.length === 0 && !n.isVoidElement(f)
      ? []
      : [n.elementWithTag(f.tag, d)];
  }
  function y(f) {
    return f.value.length === 0 ? [] : [f];
  }
  return ((aa = t), aa);
}
var Bs;
function Xr() {
  if (Bs) return pn;
  Bs = 1;
  var e = El();
  ((pn.freshElement = e.freshElement),
    (pn.nonFreshElement = e.nonFreshElement),
    (pn.elementWithTag = e.elementWithTag),
    (pn.text = e.text),
    (pn.forceWrite = e.forceWrite),
    (pn.simplify = a2()));
  function n(o, c) {
    c.forEach(function (s) {
      t(o, s);
    });
  }
  function t(o, c) {
    r[c.type](o, c);
  }
  var r = { element: i, text: a, forceWrite: function () {} };
  function i(o, c) {
    e.isVoidElement(c)
      ? o.selfClosing(c.tag.tagName, c.tag.attributes)
      : (o.open(c.tag.tagName, c.tag.attributes),
        n(o, c.children),
        o.close(c.tag.tagName));
  }
  function a(o, c) {
    o.text(c.value);
  }
  return ((pn.write = n), pn);
}
var ks;
function Hr() {
  if (ks) return kn;
  ks = 1;
  var e = we,
    n = Xr();
  ((kn.topLevelElement = t), (kn.elements = r), (kn.element = a));
  function t(c, s) {
    return r([a(c, s, { fresh: !0 })]);
  }
  function r(c) {
    return new i(
      c.map(function (s) {
        return e.isString(s) ? a(s) : s;
      }),
    );
  }
  function i(c) {
    this._elements = c;
  }
  i.prototype.wrap = function (s) {
    for (var u = s(), l = this._elements.length - 1; l >= 0; l--)
      u = this._elements[l].wrapNodes(u);
    return u;
  };
  function a(c, s, u) {
    return ((u = u || {}), new o(c, s, u));
  }
  function o(c, s, u) {
    var l = {};
    (e.isArray(c)
      ? (c.forEach(function (p) {
          l[p] = !0;
        }),
        (c = c[0]))
      : (l[c] = !0),
      (this.tagName = c),
      (this.tagNames = l),
      (this.attributes = s || {}),
      (this.fresh = u.fresh),
      (this.separator = u.separator));
  }
  return (
    (o.prototype.matchesElement = function (c) {
      return (
        this.tagNames[c.tagName] &&
        e.isEqual(this.attributes || {}, c.attributes || {})
      );
    }),
    (o.prototype.wrap = function (s) {
      return this.wrapNodes(s());
    }),
    (o.prototype.wrapNodes = function (s) {
      return [n.elementWithTag(this, s)];
    }),
    (kn.empty = r([])),
    (kn.ignore = {
      wrap: function () {
        return [];
      },
    }),
    kn
  );
}
var Co = {};
(function (e) {
  var n = we,
    t = Ce,
    r = Xr();
  e.imgElement = i;
  function i(a) {
    return function (o, c) {
      return t.when(a(o)).then(function (s) {
        var u = {};
        return (
          o.altText && (u.alt = o.altText),
          n.extend(u, s),
          [r.freshElement("img", u)]
        );
      });
    };
  }
  ((e.inline = e.imgElement),
    (e.dataUri = i(function (a) {
      return a.readAsBase64String().then(function (o) {
        return { src: "data:" + a.contentType + ";base64," + o };
      });
    })));
})(Co);
var Al = {},
  Cl = {},
  Fl = we;
Cl.writer = o2;
function o2(e) {
  return ((e = e || {}), e.prettyPrint ? c2() : Sl());
}
var Yt = { div: !0, p: !0, ul: !0, li: !0 };
function c2() {
  var e = 0,
    n = "  ",
    t = [],
    r = !0,
    i = !1,
    a = Sl();
  function o(y, f) {
    (Yt[y] && m(), t.push(y), a.open(y, f), Yt[y] && e++, (r = !1));
  }
  function c(y) {
    (Yt[y] && (e--, m()), t.pop(), a.close(y));
  }
  function s(y) {
    p();
    var f = b()
      ? y
      : y.replace(
          `
`,
          `
` + n,
        );
    a.text(f);
  }
  function u(y, f) {
    (m(), a.selfClosing(y, f));
  }
  function l() {
    return t.length === 0 || Yt[t[t.length - 1]];
  }
  function p() {
    i || (m(), (i = !0));
  }
  function m() {
    if (((i = !1), !r && l() && !b())) {
      a._append(`
`);
      for (var y = 0; y < e; y++) a._append(n);
    }
  }
  function b() {
    return Fl.some(t, function (y) {
      return y === "pre";
    });
  }
  return { asString: a.asString, open: o, close: c, text: s, selfClosing: u };
}
function Sl() {
  var e = [];
  function n(s, u) {
    var l = i(u);
    e.push("<" + s + l + ">");
  }
  function t(s) {
    e.push("</" + s + ">");
  }
  function r(s, u) {
    var l = i(u);
    e.push("<" + s + l + " />");
  }
  function i(s) {
    return Fl.map(s, function (u, l) {
      return " " + l + '="' + u2(u) + '"';
    }).join("");
  }
  function a(s) {
    e.push(s2(s));
  }
  function o(s) {
    e.push(s);
  }
  function c() {
    return e.join("");
  }
  return {
    asString: c,
    open: n,
    close: t,
    text: a,
    selfClosing: r,
    _append: o,
  };
}
function s2(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function u2(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var Bl = {},
  d2 = we;
function Ws(e) {
  return dr(e, e);
}
function dr(e, n) {
  return function () {
    return { start: e, end: n };
  };
}
function l2(e) {
  var n = e.href || "";
  return n ? { start: "[", end: "](" + n + ")", anchorPosition: "before" } : {};
}
function f2(e) {
  var n = e.src || "",
    t = e.alt || "";
  return n || t ? { start: "![" + t + "](" + n + ")" } : {};
}
function Rs(e) {
  return function (n, t) {
    return {
      start: t
        ? `
`
        : "",
      end: t
        ? ""
        : `
`,
      list: { isOrdered: e.isOrdered, indent: t ? t.indent + 1 : 0, count: 0 },
    };
  };
}
function h2(e, n, t) {
  ((n = n || { indent: 0, isOrdered: !1, count: 0 }),
    n.count++,
    (t.hasClosed = !1));
  var r = n.isOrdered ? n.count + "." : "-",
    i = Wl("	", n.indent) + r + " ";
  return {
    start: i,
    end: function () {
      if (!t.hasClosed)
        return (
          (t.hasClosed = !0),
          `
`
        );
    },
  };
}
var kl = {
  p: dr(
    "",
    `

`,
  ),
  br: dr(
    "",
    `  
`,
  ),
  ul: Rs({ isOrdered: !1 }),
  ol: Rs({ isOrdered: !0 }),
  li: h2,
  strong: Ws("__"),
  em: Ws("*"),
  a: l2,
  img: f2,
};
(function () {
  for (var e = 1; e <= 6; e++)
    kl["h" + e] = dr(
      Wl("#", e) + " ",
      `

`,
    );
})();
function Wl(e, n) {
  return new Array(n + 1).join(e);
}
function p2() {
  var e = [],
    n = [],
    t = null,
    r = {};
  function i(l, p) {
    p = p || {};
    var m =
        kl[l] ||
        function () {
          return {};
        },
      b = m(p, t, r);
    (n.push({ end: b.end, list: t }), b.list && (t = b.list));
    var y = b.anchorPosition === "before";
    (y && a(p), e.push(b.start || ""), y || a(p));
  }
  function a(l) {
    l.id && e.push('<a id="' + l.id + '"></a>');
  }
  function o(l) {
    var p = n.pop();
    t = p.list;
    var m = d2.isFunction(p.end) ? p.end() : p.end;
    e.push(m || "");
  }
  function c(l, p) {
    (i(l, p), o());
  }
  function s(l) {
    e.push(g2(l));
  }
  function u() {
    return e.join("");
  }
  return { asString: u, open: i, close: o, text: s, selfClosing: c };
}
Bl.writer = p2;
function g2(e) {
  return e
    .replace(/\\/g, "\\\\")
    .replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g, "\\$1");
}
var m2 = Cl,
  b2 = Bl;
Al.writer = y2;
function y2(e) {
  return (
    (e = e || {}),
    e.outputFormat === "markdown" ? b2.writer() : m2.writer(e)
  );
}
var Un = we,
  Os = Ce,
  Zt = he,
  Ze = Hr(),
  pa = Ye,
  D2 = Co,
  ge = Xr(),
  v2 = Al;
Ao.DocumentConverter = x2;
function x2(e) {
  return {
    convertToHtml: function (n) {
      var t = Un.indexBy(
          n.type === Zt.types.document ? n.comments : [],
          "commentId",
        ),
        r = new _2(e, t);
      return r.convertToHtml(n);
    },
  };
}
function _2(e, n) {
  var t = 1,
    r = [],
    i = [];
  e = Un.extend({ ignoreEmptyParagraphs: !0 }, e);
  var a = e.idPrefix === void 0 ? "" : e.idPrefix,
    o = e.ignoreEmptyParagraphs,
    c = Ze.topLevelElement("p"),
    s = e.styleMap || [];
  function u(S) {
    var W = [],
      z = p(S, W, {}),
      R = [];
    Rl(z, function (M) {
      M.type === "deferred" && R.push(M);
    });
    var L = {};
    return Os.mapSeries(R, function (M) {
      return M.value().then(function (Z) {
        L[M.id] = Z;
      });
    }).then(function () {
      function M(J) {
        return oa(J, function (ie) {
          return ie.type === "deferred"
            ? L[ie.id]
            : ie.children
              ? [Un.extend({}, ie, { children: M(ie.children) })]
              : [ie];
        });
      }
      var Z = v2.writer({
        prettyPrint: e.prettyPrint,
        outputFormat: e.outputFormat,
      });
      return (ge.write(Z, ge.simplify(M(z))), new pa.Result(Z.asString(), W));
    });
  }
  function l(S, W, z) {
    return oa(S, function (R) {
      return p(R, W, z);
    });
  }
  function p(S, W, z) {
    if (!z) throw new Error("options not set");
    var R = k[S.type];
    return R ? R(S, W, z) : [];
  }
  function m(S, W, z) {
    return b(S, W).wrap(function () {
      var R = l(S.children, W, z);
      return o ? R : [ge.forceWrite].concat(R);
    });
  }
  function b(S, W) {
    var z = g(S);
    return z ? z.to : (S.styleId && W.push(Is("paragraph", S)), c);
  }
  function y(S, W, z) {
    var R = function () {
        return l(S.children, W, z);
      },
      L = [];
    if (S.highlight !== null) {
      var M = d({ type: "highlight", color: S.highlight });
      M && L.push(M);
    }
    (S.isSmallCaps && L.push(f("smallCaps")),
      S.isAllCaps && L.push(f("allCaps")),
      S.isStrikethrough && L.push(f("strikethrough", "s")),
      S.isUnderline && L.push(f("underline")),
      S.verticalAlignment === Zt.verticalAlignment.subscript &&
        L.push(Ze.element("sub", {}, { fresh: !1 })),
      S.verticalAlignment === Zt.verticalAlignment.superscript &&
        L.push(Ze.element("sup", {}, { fresh: !1 })),
      S.isItalic && L.push(f("italic", "em")),
      S.isBold && L.push(f("bold", "strong")));
    var Z = Ze.empty,
      J = g(S);
    return (
      J ? (Z = J.to) : S.styleId && W.push(Is("run", S)),
      L.push(Z),
      L.forEach(function (ie) {
        R = ie.wrap.bind(ie, R);
      }),
      R()
    );
  }
  function f(S, W) {
    var z = d({ type: S });
    return z || (W ? Ze.element(W, {}, { fresh: !1 }) : Ze.empty);
  }
  function d(S, W) {
    var z = g(S);
    return z ? z.to : W;
  }
  function g(S) {
    for (var W = 0; W < s.length; W++) if (s[W].from.matches(S)) return s[W];
  }
  function h(S) {
    return function (W, z) {
      return Os.attempt(function () {
        return S(W, z);
      }).caught(function (R) {
        return (z.push(pa.error(R)), []);
      });
    };
  }
  function D(S) {
    return U(S.noteType, S.noteId);
  }
  function _(S) {
    return w(S.noteType, S.noteId);
  }
  function U(S, W) {
    return E(S + "-" + W);
  }
  function w(S, W) {
    return E(S + "-ref-" + W);
  }
  function E(S) {
    return a + S;
  }
  var O = Ze.elements([Ze.element("table", {}, { fresh: !0 })]);
  function I(S, W, z) {
    return d(S, O).wrap(function () {
      return Y(S, W, z);
    });
  }
  function Y(S, W, z) {
    var R = Un.findIndex(S.children, function (J) {
      return !J.type === Zt.types.tableRow || !J.isHeader;
    });
    R === -1 && (R = S.children.length);
    var L;
    if (R === 0) L = l(S.children, W, Un.extend({}, z, { isTableHeader: !1 }));
    else {
      var M = l(
          S.children.slice(0, R),
          W,
          Un.extend({}, z, { isTableHeader: !0 }),
        ),
        Z = l(S.children.slice(R), W, Un.extend({}, z, { isTableHeader: !1 }));
      L = [ge.freshElement("thead", {}, M), ge.freshElement("tbody", {}, Z)];
    }
    return [ge.forceWrite].concat(L);
  }
  function ee(S, W, z) {
    var R = l(S.children, W, z);
    return [ge.freshElement("tr", {}, [ge.forceWrite].concat(R))];
  }
  function T(S, W, z) {
    var R = z.isTableHeader ? "th" : "td",
      L = l(S.children, W, z),
      M = {};
    return (
      S.colSpan !== 1 && (M.colspan = S.colSpan.toString()),
      S.rowSpan !== 1 && (M.rowspan = S.rowSpan.toString()),
      [ge.freshElement(R, M, [ge.forceWrite].concat(L))]
    );
  }
  function N(S, W, z) {
    return d(S, Ze.ignore).wrap(function () {
      var R = n[S.commentId],
        L = i.length + 1,
        M = "[" + w2(R) + L + "]";
      return (
        i.push({ label: M, comment: R }),
        [
          ge.freshElement(
            "a",
            {
              href: "#" + U("comment", S.commentId),
              id: w("comment", S.commentId),
            },
            [ge.text(M)],
          ),
        ]
      );
    });
  }
  function x(S, W, z) {
    var R = S.label,
      L = S.comment,
      M = l(L.body, W, z).concat([
        ge.nonFreshElement("p", {}, [
          ge.text(" "),
          ge.freshElement("a", { href: "#" + w("comment", L.commentId) }, [
            ge.text("↑"),
          ]),
        ]),
      ]);
    return [
      ge.freshElement("dt", { id: U("comment", L.commentId) }, [
        ge.text("Comment " + R),
      ]),
      ge.freshElement("dd", {}, M),
    ];
  }
  function j(S, W, z) {
    return C(S).wrap(function () {
      return [];
    });
  }
  function C(S) {
    var W = g(S);
    return W
      ? W.to
      : S.breakType === "line"
        ? Ze.topLevelElement("br")
        : Ze.empty;
  }
  var k = {
    document: function (S, W, z) {
      var R = l(S.children, W, z),
        L = r.map(function (Z) {
          return S.notes.resolve(Z);
        }),
        M = l(L, W, z);
      return R.concat([
        ge.freshElement("ol", {}, M),
        ge.freshElement(
          "dl",
          {},
          oa(i, function (Z) {
            return x(Z, W, z);
          }),
        ),
      ]);
    },
    paragraph: m,
    run: y,
    text: function (S, W, z) {
      return [ge.text(S.value)];
    },
    tab: function (S, W, z) {
      return [ge.text("	")];
    },
    hyperlink: function (S, W, z) {
      var R = S.anchor ? "#" + E(S.anchor) : S.href,
        L = { href: R };
      S.targetFrame != null && (L.target = S.targetFrame);
      var M = l(S.children, W, z);
      return [ge.nonFreshElement("a", L, M)];
    },
    checkbox: function (S) {
      var W = { type: "checkbox" };
      return (
        S.checked && (W.checked = "checked"),
        [ge.freshElement("input", W)]
      );
    },
    bookmarkStart: function (S, W, z) {
      var R = ge.freshElement("a", { id: E(S.name) }, [ge.forceWrite]);
      return [R];
    },
    noteReference: function (S, W, z) {
      r.push(S);
      var R = ge.freshElement("a", { href: "#" + D(S), id: _(S) }, [
        ge.text("[" + t++ + "]"),
      ]);
      return [ge.freshElement("sup", {}, [R])];
    },
    note: function (S, W, z) {
      var R = l(S.body, W, z),
        L = ge.elementWithTag(Ze.element("p", {}, { fresh: !1 }), [
          ge.text(" "),
          ge.freshElement("a", { href: "#" + _(S) }, [ge.text("↑")]),
        ]),
        M = R.concat([L]);
      return ge.freshElement("li", { id: D(S) }, M);
    },
    commentReference: N,
    comment: x,
    image: T2(h(e.convertImage || D2.dataUri)),
    table: I,
    tableRow: ee,
    tableCell: T,
    break: j,
  };
  return { convertToHtml: u };
}
var U2 = 1;
function T2(e) {
  return function (n, t, r) {
    return [
      {
        type: "deferred",
        id: U2++,
        value: function () {
          return e(n, t, r);
        },
      },
    ];
  };
}
function Is(e, n) {
  return pa.warning(
    "Unrecognised " +
      e +
      " style: '" +
      n.styleName +
      "' (Style ID: " +
      n.styleId +
      ")",
  );
}
function oa(e, n) {
  return Un.flatten(e.map(n), !0);
}
function Rl(e, n) {
  e.forEach(function (t) {
    (n(t), t.children && Rl(t.children, n));
  });
}
var w2 = (Ao.commentAuthorLabel = function (n) {
    return n.authorInitials || "";
  }),
  Ol = {},
  E2 = he;
function Il(e) {
  if (e.type === "text") return e.value;
  if (e.type === E2.types.tab) return "	";
  var n =
    e.type === "paragraph"
      ? `

`
      : "";
  return (e.children || []).map(Il).join("") + n;
}
Ol.convertElementToRawText = Il;
var $r = {},
  an = {},
  Nl = {},
  Ll = { exports: {} },
  rt = (Ll.exports = function (e, n) {
    ((this._tokens = e), (this._startIndex = n || 0));
  });
rt.prototype.head = function () {
  return this._tokens[this._startIndex];
};
rt.prototype.tail = function (e) {
  return new rt(this._tokens, this._startIndex + 1);
};
rt.prototype.toArray = function () {
  return this._tokens.slice(this._startIndex);
};
rt.prototype.end = function () {
  return this._tokens[this._tokens.length - 1];
};
rt.prototype.to = function (e) {
  var n = this.head().source,
    t = e.head() || e.end();
  return n.to(t.source);
};
var A2 = Ll.exports,
  C2 = A2;
Nl.Parser = function (e) {
  var n = function (t, r) {
    return t(new C2(r));
  };
  return { parseTokens: n };
};
var Fo = {},
  Ml = {};
(function (e) {
  e.none = Object.create({
    value: function () {
      throw new Error("Called value on none");
    },
    isNone: function () {
      return !0;
    },
    isSome: function () {
      return !1;
    },
    map: function () {
      return e.none;
    },
    flatMap: function () {
      return e.none;
    },
    filter: function () {
      return e.none;
    },
    toArray: function () {
      return [];
    },
    orElse: n,
    valueOrElse: n,
  });
  function n(r) {
    return typeof r == "function" ? r() : r;
  }
  e.some = function (r) {
    return new t(r);
  };
  var t = function (r) {
    this._value = r;
  };
  ((t.prototype.value = function () {
    return this._value;
  }),
    (t.prototype.isNone = function () {
      return !1;
    }),
    (t.prototype.isSome = function () {
      return !0;
    }),
    (t.prototype.map = function (r) {
      return new t(r(this._value));
    }),
    (t.prototype.flatMap = function (r) {
      return r(this._value);
    }),
    (t.prototype.filter = function (r) {
      return r(this._value) ? this : e.none;
    }),
    (t.prototype.toArray = function () {
      return [this._value];
    }),
    (t.prototype.orElse = function (r) {
      return this;
    }),
    (t.prototype.valueOrElse = function (r) {
      return this._value;
    }),
    (e.isOption = function (r) {
      return r === e.none || r instanceof t;
    }),
    (e.fromNullable = function (r) {
      return r == null ? e.none : new t(r);
    }));
})(Ml);
var So = {
    failure: function (e, n) {
      if (e.length < 1) throw new Error("Failure must have errors");
      return new Re({ status: "failure", remaining: n, errors: e });
    },
    error: function (e, n) {
      if (e.length < 1) throw new Error("Failure must have errors");
      return new Re({ status: "error", remaining: n, errors: e });
    },
    success: function (e, n, t) {
      return new Re({
        status: "success",
        value: e,
        source: t,
        remaining: n,
        errors: [],
      });
    },
    cut: function (e) {
      return new Re({ status: "cut", remaining: e, errors: [] });
    },
  },
  Re = function (e) {
    ((this._value = e.value),
      (this._status = e.status),
      (this._hasValue = e.value !== void 0),
      (this._remaining = e.remaining),
      (this._source = e.source),
      (this._errors = e.errors));
  };
Re.prototype.map = function (e) {
  return this._hasValue
    ? new Re({
        value: e(this._value, this._source),
        status: this._status,
        remaining: this._remaining,
        source: this._source,
        errors: this._errors,
      })
    : this;
};
Re.prototype.changeRemaining = function (e) {
  return new Re({
    value: this._value,
    status: this._status,
    remaining: e,
    source: this._source,
    errors: this._errors,
  });
};
Re.prototype.isSuccess = function () {
  return this._status === "success" || this._status === "cut";
};
Re.prototype.isFailure = function () {
  return this._status === "failure";
};
Re.prototype.isError = function () {
  return this._status === "error";
};
Re.prototype.isCut = function () {
  return this._status === "cut";
};
Re.prototype.value = function () {
  return this._value;
};
Re.prototype.remaining = function () {
  return this._remaining;
};
Re.prototype.source = function () {
  return this._source;
};
Re.prototype.errors = function () {
  return this._errors;
};
var Bo = {};
Bo.error = function (e) {
  return new Gr(e);
};
var Gr = function (e) {
  ((this.expected = e.expected),
    (this.actual = e.actual),
    (this._location = e.location));
};
Gr.prototype.describe = function () {
  var e = this._location
    ? this._location.describe() +
      `:
`
    : "";
  return (
    e +
    "Expected " +
    this.expected +
    `
but got ` +
    this.actual
  );
};
Gr.prototype.lineNumber = function () {
  return this._location.lineNumber();
};
Gr.prototype.characterNumber = function () {
  return this._location.characterNumber();
};
var Pl = {};
Pl.fromArray = function (e) {
  var n = 0,
    t = function () {
      return n < e.length;
    };
  return new In({
    hasNext: t,
    next: function () {
      if (t()) return e[n++];
      throw new Error("No more elements");
    },
  });
};
var In = function (e) {
  this._iterator = e;
};
In.prototype.map = function (e) {
  var n = this._iterator;
  return new In({
    hasNext: function () {
      return n.hasNext();
    },
    next: function () {
      return e(n.next());
    },
  });
};
In.prototype.filter = function (e) {
  var n = this._iterator,
    t = !1,
    r = !1,
    i,
    a = function () {
      if (!t)
        for (t = !0, r = !1; n.hasNext() && !r; ) ((i = n.next()), (r = e(i)));
    };
  return new In({
    hasNext: function () {
      return (a(), r);
    },
    next: function () {
      a();
      var o = i;
      return ((t = !1), o);
    },
  });
};
In.prototype.first = function () {
  var e = this._iterator;
  return this._iterator.hasNext() ? e.next() : null;
};
In.prototype.toArray = function () {
  for (var e = []; this._iterator.hasNext(); ) e.push(this._iterator.next());
  return e;
};
(function (e) {
  var n = we,
    t = Ml,
    r = So,
    i = Bo,
    a = Pl;
  ((e.token = function (m, b) {
    var y = b !== void 0;
    return function (f) {
      var d = f.head();
      if (d && d.name === m && (!y || d.value === b))
        return r.success(d.value, f.tail(), d.source);
      var g = l({ name: m, value: b });
      return p(f, g);
    };
  }),
    (e.tokenOfType = function (m) {
      return e.token(m);
    }),
    (e.firstOf = function (m, b) {
      return (
        n.isArray(b) || (b = Array.prototype.slice.call(arguments, 1)),
        function (y) {
          return (
            a
              .fromArray(b)
              .map(function (f) {
                return f(y);
              })
              .filter(function (f) {
                return f.isSuccess() || f.isError();
              })
              .first() || p(y, m)
          );
        }
      );
    }),
    (e.then = function (m, b) {
      return function (y) {
        var f = m(y);
        return (f.map || console.log(f), f.map(b));
      };
    }),
    (e.sequence = function () {
      var m = Array.prototype.slice.call(arguments, 0),
        b = function (f) {
          var d = n.foldl(
              m,
              function (h, D) {
                var _ = h.result,
                  U = h.hasCut;
                if (!_.isSuccess()) return { result: _, hasCut: U };
                var w = D(_.remaining());
                if (w.isCut()) return { result: _, hasCut: !0 };
                if (w.isSuccess()) {
                  var E;
                  D.isCaptured
                    ? (E = _.value().withValue(D, w.value()))
                    : (E = _.value());
                  var O = w.remaining(),
                    I = f.to(O);
                  return { result: r.success(E, O, I), hasCut: U };
                } else
                  return U
                    ? { result: r.error(w.errors(), w.remaining()), hasCut: U }
                    : { result: w, hasCut: U };
              },
              { result: r.success(new o(), f), hasCut: !1 },
            ).result,
            g = f.to(d.remaining());
          return d.map(function (h) {
            return h.withValue(e.sequence.source, g);
          });
        };
      ((b.head = function () {
        var f = n.find(m, y);
        return e.then(b, e.sequence.extract(f));
      }),
        (b.map = function (f) {
          return e.then(b, function (d) {
            return f.apply(this, d.toArray());
          });
        }));
      function y(f) {
        return f.isCaptured;
      }
      return b;
    }));
  var o = function (m, b) {
    ((this._values = m || {}), (this._valuesArray = b || []));
  };
  ((o.prototype.withValue = function (m, b) {
    if (m.captureName && m.captureName in this._values)
      throw new Error(
        'Cannot add second value for capture "' + m.captureName + '"',
      );
    var y = n.clone(this._values);
    y[m.captureName] = b;
    var f = this._valuesArray.concat([b]);
    return new o(y, f);
  }),
    (o.prototype.get = function (m) {
      if (m.captureName in this._values) return this._values[m.captureName];
      throw new Error('No value for capture "' + m.captureName + '"');
    }),
    (o.prototype.toArray = function () {
      return this._valuesArray;
    }),
    (e.sequence.capture = function (m, b) {
      var y = function () {
        return m.apply(this, arguments);
      };
      return ((y.captureName = b), (y.isCaptured = !0), y);
    }),
    (e.sequence.extract = function (m) {
      return function (b) {
        return b.get(m);
      };
    }),
    (e.sequence.applyValues = function (m) {
      var b = Array.prototype.slice.call(arguments, 1);
      return function (y) {
        var f = b.map(function (d) {
          return y.get(d);
        });
        return m.apply(this, f);
      };
    }),
    (e.sequence.source = { captureName: "☃source☃" }),
    (e.sequence.cut = function () {
      return function (m) {
        return r.cut(m);
      };
    }),
    (e.optional = function (m) {
      return function (b) {
        var y = m(b);
        return y.isSuccess()
          ? y.map(t.some)
          : y.isFailure()
            ? r.success(t.none, b)
            : y;
      };
    }),
    (e.zeroOrMoreWithSeparator = function (m, b) {
      return u(m, b, !1);
    }),
    (e.oneOrMoreWithSeparator = function (m, b) {
      return u(m, b, !0);
    }));
  var c = (e.zeroOrMore = function (m) {
    return function (b) {
      for (var y = [], f; (f = m(b)) && f.isSuccess(); )
        ((b = f.remaining()), y.push(f.value()));
      return f.isError() ? f : r.success(y, b);
    };
  });
  e.oneOrMore = function (m) {
    return e.oneOrMoreWithSeparator(m, s);
  };
  function s(m) {
    return r.success(null, m);
  }
  var u = function (m, b, y) {
    return function (f) {
      var d = m(f);
      if (d.isSuccess()) {
        var g = e.sequence.capture(m, "main"),
          h = c(e.then(e.sequence(b, g), e.sequence.extract(g))),
          D = h(d.remaining());
        return r.success([d.value()].concat(D.value()), D.remaining());
      } else return y || d.isError() ? d : r.success([], f);
    };
  };
  ((e.leftAssociative = function (m, b, y) {
    var f;
    (y ? (f = [{ func: y, rule: b }]) : (f = b),
      (f = f.map(function (g) {
        return e.then(g.rule, function (h) {
          return function (D, _) {
            return g.func(D, h, _);
          };
        });
      })));
    var d = e.firstOf.apply(null, ["rules"].concat(f));
    return function (g) {
      var h = g,
        D = m(g);
      if (!D.isSuccess()) return D;
      for (var _ = d(D.remaining()); _.isSuccess(); ) {
        var U = _.remaining(),
          w = h.to(_.remaining()),
          E = _.value();
        ((D = r.success(E(D.value(), w), U, w)), (_ = d(D.remaining())));
      }
      return _.isError() ? _ : D;
    };
  }),
    (e.leftAssociative.firstOf = function () {
      return Array.prototype.slice.call(arguments, 0);
    }),
    (e.nonConsuming = function (m) {
      return function (b) {
        return m(b).changeRemaining(b);
      };
    }));
  var l = function (m) {
    return m.value ? m.name + ' "' + m.value + '"' : m.name;
  };
  function p(m, b) {
    var y,
      f = m.head();
    return (
      f
        ? (y = i.error({ expected: b, actual: l(f), location: f.source }))
        : (y = i.error({ expected: b, actual: "end of tokens" })),
      r.failure([y], m)
    );
  }
})(Fo);
var ql = { exports: {} };
ql.exports = function (e, n) {
  var t = {
    asString: function () {
      return e;
    },
    range: function (r, i) {
      return new Nn(e, n, r, i);
    },
  };
  return t;
};
var Nn = function (e, n, t, r) {
  ((this._string = e),
    (this._description = n),
    (this._startIndex = t),
    (this._endIndex = r));
};
Nn.prototype.to = function (e) {
  return new Nn(this._string, this._description, this._startIndex, e._endIndex);
};
Nn.prototype.describe = function () {
  var e = this._position(),
    n = this._description
      ? this._description +
        `
`
      : "";
  return (
    n +
    "Line number: " +
    e.lineNumber +
    `
Character number: ` +
    e.characterNumber
  );
};
Nn.prototype.lineNumber = function () {
  return this._position().lineNumber;
};
Nn.prototype.characterNumber = function () {
  return this._position().characterNumber;
};
Nn.prototype._position = function () {
  for (
    var e = this,
      n = 0,
      t = function () {
        return e._string.indexOf(
          `
`,
          n,
        );
      },
      r = 1;
    t() !== -1 && t() < this._startIndex;
  )
    ((n = t() + 1), (r += 1));
  var i = this._startIndex - n + 1;
  return { lineNumber: r, characterNumber: i };
};
var zl = ql.exports,
  jl = function (e, n, t) {
    ((this.name = e), (this.value = n), t && (this.source = t));
  },
  Vl = {};
(function (e) {
  var n = Fo,
    t = So;
  e.parser = function (a, o, c) {
    var s = { rule: m, leftAssociative: b, rightAssociative: y },
      u = new r(c.map(p)),
      l = n.firstOf(a, o);
    function p(g) {
      return { name: g.name, rule: i(g.ruleBuilder.bind(null, s)) };
    }
    function m() {
      return f(u);
    }
    function b(g) {
      return f(u.untilExclusive(g));
    }
    function y(g) {
      return f(u.untilInclusive(g));
    }
    function f(g) {
      return d.bind(null, g);
    }
    function d(g, h) {
      var D = l(h);
      return D.isSuccess() ? g.apply(D) : D;
    }
    return s;
  };
  function r(a) {
    function o(p) {
      return new r(a.slice(0, s().indexOf(p)));
    }
    function c(p) {
      return new r(a.slice(0, s().indexOf(p) + 1));
    }
    function s() {
      return a.map(function (p) {
        return p.name;
      });
    }
    function u(p) {
      for (var m, b; ; )
        if (((m = l(p.remaining())), m.isSuccess()))
          ((b = p.source().to(m.source())),
            (p = t.success(m.value()(p.value(), b), m.remaining(), b)));
        else return m.isFailure() ? p : m;
    }
    function l(p) {
      return n.firstOf(
        "infix",
        a.map(function (m) {
          return m.rule;
        }),
      )(p);
    }
    return { apply: u, untilExclusive: o, untilInclusive: c };
  }
  e.infix = function (a, o) {
    function c(s) {
      return e.infix(a, function (u) {
        var l = o(u);
        return function (p) {
          var m = l(p);
          return m.map(function (b) {
            return function (y, f) {
              return s(y, b, f);
            };
          });
        };
      });
    }
    return { name: a, ruleBuilder: o, map: c };
  };
  var i = function (a) {
    var o;
    return function (c) {
      return (o || (o = a()), o(c));
    };
  };
})(Vl);
var Xl = {},
  ca = jl,
  F2 = zl;
Xl.RegexTokeniser = S2;
function S2(e) {
  e = e.map(function (i) {
    return { name: i.name, regex: new RegExp(i.regex.source, "g") };
  });
  function n(i, a) {
    for (var o = new F2(i, a), c = 0, s = []; c < i.length; ) {
      var u = t(i, c, o);
      ((c = u.endIndex), s.push(u.token));
    }
    return (s.push(r(i, o)), s);
  }
  function t(i, a, o) {
    for (var c = 0; c < e.length; c++) {
      var s = e[c].regex;
      s.lastIndex = a;
      var u = s.exec(i);
      if (u) {
        var p = a + u[0].length;
        if (u.index === a && p > a) {
          var l = u[1],
            m = new ca(e[c].name, l, o.range(a, p));
          return { token: m, endIndex: p };
        }
      }
    }
    var p = a + 1,
      m = new ca("unrecognisedCharacter", i.substring(a, p), o.range(a, p));
    return { token: m, endIndex: p };
  }
  function r(i, a) {
    return new ca("end", null, a.range(i.length, i.length));
  }
  return { tokenise: n };
}
an.Parser = Nl.Parser;
an.rules = Fo;
an.errors = Bo;
an.results = So;
an.StringSource = zl;
an.Token = jl;
an.bottomUp = Vl;
an.RegexTokeniser = Xl.RegexTokeniser;
an.rule = function (e) {
  var n;
  return function (t) {
    return (n || (n = e()), n(t));
  };
};
var ke = {};
ke.paragraph = B2;
ke.run = k2;
ke.table = W2;
ke.bold = new on("bold");
ke.italic = new on("italic");
ke.underline = new on("underline");
ke.strikethrough = new on("strikethrough");
ke.allCaps = new on("allCaps");
ke.smallCaps = new on("smallCaps");
ke.highlight = R2;
ke.commentReference = new on("commentReference");
ke.lineBreak = new Yr({ breakType: "line" });
ke.pageBreak = new Yr({ breakType: "page" });
ke.columnBreak = new Yr({ breakType: "column" });
ke.equalTo = I2;
ke.startsWith = N2;
function B2(e) {
  return new on("paragraph", e);
}
function k2(e) {
  return new on("run", e);
}
function W2(e) {
  return new on("table", e);
}
function R2(e) {
  return new Hl(e);
}
function on(e, n) {
  ((n = n || {}),
    (this._elementType = e),
    (this._styleId = n.styleId),
    (this._styleName = n.styleName),
    n.list &&
      ((this._listIndex = n.list.levelIndex),
      (this._listIsOrdered = n.list.isOrdered)));
}
on.prototype.matches = function (e) {
  return (
    e.type === this._elementType &&
    (this._styleId === void 0 || e.styleId === this._styleId) &&
    (this._styleName === void 0 ||
      (e.styleName &&
        this._styleName.operator(this._styleName.operand, e.styleName))) &&
    (this._listIndex === void 0 ||
      O2(e, this._listIndex, this._listIsOrdered)) &&
    (this._breakType === void 0 || this._breakType === e.breakType)
  );
};
function Hl(e) {
  ((e = e || {}), (this._color = e.color));
}
Hl.prototype.matches = function (e) {
  return (
    e.type === "highlight" &&
    (this._color === void 0 || e.color === this._color)
  );
};
function Yr(e) {
  ((e = e || {}), (this._breakType = e.breakType));
}
Yr.prototype.matches = function (e) {
  return (
    e.type === "break" &&
    (this._breakType === void 0 || e.breakType === this._breakType)
  );
};
function O2(e, n, t) {
  return e.numbering && e.numbering.level == n && e.numbering.isOrdered == t;
}
function I2(e) {
  return { operator: L2, operand: e };
}
function N2(e) {
  return { operator: M2, operand: e };
}
function L2(e, n) {
  return e.toUpperCase() === n.toUpperCase();
}
function M2(e, n) {
  return n.toUpperCase().indexOf(e.toUpperCase()) === 0;
}
var $l = {},
  P2 = an,
  q2 = P2.RegexTokeniser;
$l.tokenise = z2;
var Ns = "'((?:\\\\.|[^'])*)";
function z2(e) {
  var n = "(?:[a-zA-Z\\-_]|\\\\.)",
    t = new q2([
      {
        name: "identifier",
        regex: new RegExp("(" + n + "(?:" + n + "|[0-9])*)"),
      },
      { name: "dot", regex: /\./ },
      { name: "colon", regex: /:/ },
      { name: "gt", regex: />/ },
      { name: "whitespace", regex: /\s+/ },
      { name: "arrow", regex: /=>/ },
      { name: "equals", regex: /=/ },
      { name: "startsWith", regex: /\^=/ },
      { name: "open-paren", regex: /\(/ },
      { name: "close-paren", regex: /\)/ },
      { name: "open-square-bracket", regex: /\[/ },
      { name: "close-square-bracket", regex: /\]/ },
      { name: "string", regex: new RegExp(Ns + "'") },
      { name: "unterminated-string", regex: new RegExp(Ns) },
      { name: "integer", regex: /([0-9]+)/ },
      { name: "choice", regex: /\|/ },
      { name: "bang", regex: /(!)/ },
    ]);
  return t.tokenise(e);
}
var j2 = we,
  re = an,
  We = ke,
  Kt = Hr(),
  V2 = $l.tokenise,
  sa = Ye;
$r.readHtmlPath = G2;
$r.readDocumentMatcher = $2;
$r.readStyle = X2;
function X2(e) {
  return ko(tm, e);
}
function H2() {
  return re.rules
    .sequence(
      re.rules.sequence.capture(Gl()),
      re.rules.tokenOfType("whitespace"),
      re.rules.tokenOfType("arrow"),
      re.rules.sequence.capture(
        re.rules.optional(
          re.rules
            .sequence(
              re.rules.tokenOfType("whitespace"),
              re.rules.sequence.capture(Yl()),
            )
            .head(),
        ),
      ),
      re.rules.tokenOfType("end"),
    )
    .map(function (e, n) {
      return { from: e, to: n.valueOrElse(Kt.empty) };
    });
}
function $2(e) {
  return ko(Gl(), e);
}
function Gl() {
  var e = re.rules.sequence,
    n = function (w, E) {
      return re.rules.then(re.rules.token("identifier", w), function () {
        return E;
      });
    },
    t = n("p", We.paragraph),
    r = n("r", We.run),
    i = re.rules.firstOf("p or r or table", t, r),
    a = re.rules
      .sequence(
        re.rules.tokenOfType("dot"),
        re.rules.sequence.cut(),
        re.rules.sequence.capture(Zr),
      )
      .map(function (w) {
        return { styleId: w };
      }),
    o = re.rules.firstOf(
      "style name matcher",
      re.rules.then(
        re.rules
          .sequence(
            re.rules.tokenOfType("equals"),
            re.rules.sequence.cut(),
            re.rules.sequence.capture($n),
          )
          .head(),
        function (w) {
          return { styleName: We.equalTo(w) };
        },
      ),
      re.rules.then(
        re.rules
          .sequence(
            re.rules.tokenOfType("startsWith"),
            re.rules.sequence.cut(),
            re.rules.sequence.capture($n),
          )
          .head(),
        function (w) {
          return { styleName: We.startsWith(w) };
        },
      ),
    ),
    c = re.rules
      .sequence(
        re.rules.tokenOfType("open-square-bracket"),
        re.rules.sequence.cut(),
        re.rules.token("identifier", "style-name"),
        re.rules.sequence.capture(o),
        re.rules.tokenOfType("close-square-bracket"),
      )
      .head(),
    s = re.rules.firstOf(
      "list type",
      n("ordered-list", { isOrdered: !0 }),
      n("unordered-list", { isOrdered: !1 }),
    ),
    u = e(
      re.rules.tokenOfType("colon"),
      e.capture(s),
      e.cut(),
      re.rules.tokenOfType("open-paren"),
      e.capture(Y2),
      re.rules.tokenOfType("close-paren"),
    ).map(function (w, E) {
      return { list: { isOrdered: w.isOrdered, levelIndex: E - 1 } };
    });
  function l(w) {
    var E = re.rules.firstOf.apply(
        re.rules.firstOf,
        ["matcher suffix"].concat(w),
      ),
      O = re.rules.zeroOrMore(E);
    return re.rules.then(O, function (I) {
      var Y = {};
      return (
        I.forEach(function (ee) {
          j2.extend(Y, ee);
        }),
        Y
      );
    });
  }
  var p = e(e.capture(i), e.capture(l([a, c, u]))).map(function (w, E) {
      return w(E);
    }),
    m = e(re.rules.token("identifier", "table"), e.capture(l([a, c]))).map(
      function (w) {
        return We.table(w);
      },
    ),
    b = n("b", We.bold),
    y = n("i", We.italic),
    f = n("u", We.underline),
    d = n("strike", We.strikethrough),
    g = n("all-caps", We.allCaps),
    h = n("small-caps", We.smallCaps),
    D = e(
      re.rules.token("identifier", "highlight"),
      re.rules.sequence.capture(
        re.rules.optional(
          re.rules
            .sequence(
              re.rules.tokenOfType("open-square-bracket"),
              re.rules.sequence.cut(),
              re.rules.token("identifier", "color"),
              re.rules.tokenOfType("equals"),
              re.rules.sequence.capture($n),
              re.rules.tokenOfType("close-square-bracket"),
            )
            .head(),
        ),
      ),
    ).map(function (w) {
      return We.highlight({ color: w.valueOrElse(void 0) });
    }),
    _ = n("comment-reference", We.commentReference),
    U = e(
      re.rules.token("identifier", "br"),
      e.cut(),
      re.rules.tokenOfType("open-square-bracket"),
      re.rules.token("identifier", "type"),
      re.rules.tokenOfType("equals"),
      e.capture($n),
      re.rules.tokenOfType("close-square-bracket"),
    ).map(function (w) {
      switch (w) {
        case "line":
          return We.lineBreak;
        case "page":
          return We.pageBreak;
        case "column":
          return We.columnBreak;
      }
    });
  return re.rules.firstOf("element type", p, m, b, y, f, d, g, h, D, _, U);
}
function G2(e) {
  return ko(Yl(), e);
}
function Yl() {
  var e = re.rules.sequence.capture,
    n = re.rules.tokenOfType("whitespace"),
    t = re.rules.then(
      re.rules.optional(
        re.rules.sequence(
          re.rules.tokenOfType("colon"),
          re.rules.token("identifier", "fresh"),
        ),
      ),
      function (o) {
        return o
          .map(function () {
            return !0;
          })
          .valueOrElse(!1);
      },
    ),
    r = re.rules.then(
      re.rules.optional(
        re.rules
          .sequence(
            re.rules.tokenOfType("colon"),
            re.rules.token("identifier", "separator"),
            re.rules.tokenOfType("open-paren"),
            e($n),
            re.rules.tokenOfType("close-paren"),
          )
          .head(),
      ),
      function (o) {
        return o.valueOrElse("");
      },
    ),
    i = re.rules.oneOrMoreWithSeparator(Zr, re.rules.tokenOfType("choice")),
    a = re.rules
      .sequence(e(i), e(re.rules.zeroOrMore(J2)), e(t), e(r))
      .map(function (o, c, s, u) {
        var l = {},
          p = {};
        return (
          c.forEach(function (m) {
            m.append && l[m.name]
              ? (l[m.name] += " " + m.value)
              : (l[m.name] = m.value);
          }),
          s && (p.fresh = !0),
          u && (p.separator = u),
          Kt.element(o, l, p)
        );
      });
  return re.rules.firstOf(
    "html path",
    re.rules.then(re.rules.tokenOfType("bang"), function () {
      return Kt.ignore;
    }),
    re.rules.then(
      re.rules.zeroOrMoreWithSeparator(
        a,
        re.rules.sequence(n, re.rules.tokenOfType("gt"), n),
      ),
      Kt.elements,
    ),
  );
}
var Zr = re.rules.then(re.rules.tokenOfType("identifier"), Zl),
  Y2 = re.rules.tokenOfType("integer"),
  $n = re.rules.then(re.rules.tokenOfType("string"), Zl),
  Z2 = {
    n: `
`,
    r: "\r",
    t: "	",
  };
function Zl(e) {
  return e.replace(/\\(.)/g, function (n, t) {
    return Z2[t] || t;
  });
}
var K2 = re.rules
    .sequence(
      re.rules.tokenOfType("open-square-bracket"),
      re.rules.sequence.cut(),
      re.rules.sequence.capture(Zr),
      re.rules.tokenOfType("equals"),
      re.rules.sequence.capture($n),
      re.rules.tokenOfType("close-square-bracket"),
    )
    .map(function (e, n) {
      return { name: e, value: n, append: !1 };
    }),
  Q2 = re.rules
    .sequence(
      re.rules.tokenOfType("dot"),
      re.rules.sequence.cut(),
      re.rules.sequence.capture(Zr),
    )
    .map(function (e) {
      return { name: "class", value: e, append: !0 };
    }),
  J2 = re.rules.firstOf("attribute or class", K2, Q2);
function ko(e, n) {
  var t = V2(n),
    r = re.Parser(),
    i = r.parseTokens(e, t);
  return i.isSuccess()
    ? sa.success(i.value())
    : new sa.Result(null, [sa.warning(em(n, i))]);
}
function em(e, n) {
  return (
    "Did not understand this style mapping, so ignored it: " +
    e +
    `
` +
    n.errors().map(nm).join(`
`)
  );
}
function nm(e) {
  return (
    "Error was at character number " +
    e.characterNumber() +
    ": Expected " +
    e.expected +
    " but got " +
    e.actual
  );
}
var tm = H2(),
  Kr = {};
Kr.readOptions = am;
var Kl = we,
  rm = (Kr._defaultStyleMap = [
    "p.Heading1 => h1:fresh",
    "p.Heading2 => h2:fresh",
    "p.Heading3 => h3:fresh",
    "p.Heading4 => h4:fresh",
    "p.Heading5 => h5:fresh",
    "p.Heading6 => h6:fresh",
    "p[style-name='Heading 1'] => h1:fresh",
    "p[style-name='Heading 2'] => h2:fresh",
    "p[style-name='Heading 3'] => h3:fresh",
    "p[style-name='Heading 4'] => h4:fresh",
    "p[style-name='Heading 5'] => h5:fresh",
    "p[style-name='Heading 6'] => h6:fresh",
    "p[style-name='heading 1'] => h1:fresh",
    "p[style-name='heading 2'] => h2:fresh",
    "p[style-name='heading 3'] => h3:fresh",
    "p[style-name='heading 4'] => h4:fresh",
    "p[style-name='heading 5'] => h5:fresh",
    "p[style-name='heading 6'] => h6:fresh",
    "p.Heading => h1:fresh",
    "p[style-name='Heading'] => h1:fresh",
    "r[style-name='Strong'] => strong",
    "p[style-name='footnote text'] => p:fresh",
    "r[style-name='footnote reference'] =>",
    "p[style-name='endnote text'] => p:fresh",
    "r[style-name='endnote reference'] =>",
    "p[style-name='annotation text'] => p:fresh",
    "r[style-name='annotation reference'] =>",
    "p[style-name='Footnote'] => p:fresh",
    "r[style-name='Footnote anchor'] =>",
    "p[style-name='Endnote'] => p:fresh",
    "r[style-name='Endnote anchor'] =>",
    "p:unordered-list(1) => ul > li:fresh",
    "p:unordered-list(2) => ul|ol > li > ul > li:fresh",
    "p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh",
    "p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
    "p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
    "p:ordered-list(1) => ol > li:fresh",
    "p:ordered-list(2) => ul|ol > li > ol > li:fresh",
    "p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh",
    "p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
    "p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
    "r[style-name='Hyperlink'] =>",
    "p[style-name='Normal'] => p:fresh",
    "p.Body => p:fresh",
    "p[style-name='Body'] => p:fresh",
  ]),
  im = (Kr._standardOptions = {
    externalFileAccess: !1,
    transformDocument: om,
    includeDefaultStyleMap: !0,
    includeEmbeddedStyleMap: !0,
  });
function am(e) {
  return (
    (e = e || {}),
    Kl.extend({}, im, e, {
      customStyleMap: Ls(e.styleMap),
      readStyleMap: function () {
        var n = this.customStyleMap;
        return (
          this.includeEmbeddedStyleMap &&
            (n = n.concat(Ls(this.embeddedStyleMap))),
          this.includeDefaultStyleMap && (n = n.concat(rm)),
          n
        );
      },
    })
  );
}
function Ls(e) {
  return e
    ? Kl.isString(e)
      ? e
          .split(
            `
`,
          )
          .map(function (n) {
            return n.trim();
          })
          .filter(function (n) {
            return n !== "" && n.charAt(0) !== "#";
          })
      : e
    : [];
}
function om(e) {
  return e;
}
var Ql = {},
  Ms = Ce,
  cm = Rt;
Ql.openZip = sm;
function sm(e) {
  return e.arrayBuffer
    ? Ms.resolve(cm.openArrayBuffer(e.arrayBuffer))
    : Ms.reject(new Error("Could not find file in options"));
}
var Jl = {},
  um = Hr(),
  dm = Xr();
Jl.element = lm;
function lm(e) {
  return function (n) {
    return dm.elementWithTag(um.element(e), [n]);
  };
}
var fm = we,
  ef = Ja,
  Wo = Eo,
  hm = Ao.DocumentConverter,
  pm = Ol.convertElementToRawText,
  gm = $r.readStyle,
  mm = Kr.readOptions,
  Qr = Ql,
  bm = Ye.Result;
rn.convertToHtml = ym;
rn.convertToMarkdown = Dm;
rn.convert = Ro;
rn.extractRawText = Um;
rn.images = Co;
rn.transforms = Bn;
rn.underline = Jl;
rn.embedStyleMap = Tm;
rn.readEmbeddedStyleMap = vm;
function ym(e, n) {
  return Ro(e, n);
}
function Dm(e, n) {
  var t = Object.create(n || {});
  return ((t.outputFormat = "markdown"), Ro(e, t));
}
function Ro(e, n) {
  return (
    (n = mm(n)),
    Qr.openZip(e)
      .tap(function (t) {
        return Wo.readStyleMap(t).then(function (r) {
          n.embeddedStyleMap = r;
        });
      })
      .then(function (t) {
        return ef
          .read(t, e, n)
          .then(function (r) {
            return r.map(n.transformDocument);
          })
          .then(function (r) {
            return xm(r, n);
          });
      })
  );
}
function vm(e) {
  return Qr.openZip(e).then(Wo.readStyleMap);
}
function xm(e, n) {
  var t = _m(n.readStyleMap()),
    r = fm.extend({}, n, { styleMap: t.value }),
    i = new hm(r);
  return e.flatMapThen(function (a) {
    return t.flatMapThen(function (o) {
      return i.convertToHtml(a);
    });
  });
}
function _m(e) {
  return bm.combine((e || []).map(gm)).map(function (n) {
    return n.filter(function (t) {
      return !!t;
    });
  });
}
function Um(e) {
  return Qr.openZip(e)
    .then(ef.read)
    .then(function (n) {
      return n.map(pm);
    });
}
function Tm(e, n) {
  return Qr.openZip(e)
    .tap(function (t) {
      return Wo.writeStyleMap(t, n);
    })
    .then(function (t) {
      return t.toArrayBuffer();
    })
    .then(function (t) {
      return {
        toArrayBuffer: function () {
          return t;
        },
        toBuffer: function () {
          return Buffer.from(t);
        },
      };
    });
}
rn.styleMapping = function () {
  throw new Error(
    `Use a raw string instead of mammoth.styleMapping e.g. "p[style-name='Title'] => h1" instead of mammoth.styleMapping("p[style-name='Title'] => h1")`,
  );
};
const wm = 50 * 1024 * 1024,
  qm = (e) =>
    new Promise((n, t) => {
      var a;
      if (e.size > wm)
        return t(new Error("Arquivo muito grande. Máximo: 50MB"));
      const r =
          (a = e.name.split(".").pop()) == null ? void 0 : a.toLowerCase(),
        i = ["csv", "xlsx", "xls", "pdf", "txt", "docx"];
      if (!i.includes(r || ""))
        return t(new Error(`Formato não suportado. Use: ${i.join(", ")}`));
      r === "pdf"
        ? Em(e).then(n).catch(t)
        : r === "docx"
          ? Sm(e).then(n).catch(t)
          : r === "txt"
            ? Am(e).then(n).catch(t)
            : r === "csv"
              ? Cm(e).then(n).catch(t)
              : Fm(e).then(n).catch(t);
    });
async function Em(e) {
  try {
    const n = await No(() => import("./vendor-pdf-CXh85JJT.js"), []),
      t = await No(() => import("./pdf.worker-Da3rbj2e.js"), []);
    n.GlobalWorkerOptions.workerSrc = t.default;
    const r = await e.arrayBuffer(),
      i = await n.getDocument({ data: r }).promise,
      a = [];
    for (let s = 1; s <= i.numPages; s++) {
      const p = (await (await i.getPage(s)).getTextContent()).items
        .filter((m) => m.str)
        .map((m) => m.str)
        .join(" ");
      a.push(p);
    }
    const o = a.join(`

`),
      c = a.map((s, u) => ({ page: u + 1, content: s }));
    return {
      headers: ["page", "content"],
      rows: c,
      rowCount: a.length,
      fileType: "pdf",
      rawText: o,
    };
  } catch (n) {
    const t = n instanceof Error ? n.message : "Erro desconhecido";
    throw new Error(
      `Falha ao processar PDF: ${t}. O arquivo pode estar corrompido ou protegido.`,
    );
  }
}
async function Am(e) {
  var a, o;
  const n = await e.text(),
    t = n
      .split(
        `
`,
      )
      .filter((c) => c.trim()),
    r =
      (a = t[0]) != null && a.includes("	")
        ? "	"
        : (o = t[0]) != null && o.includes(";")
          ? ";"
          : ",";
  if (t.length > 0) {
    const c = t[0].split(r).map((u) => u.trim()),
      s = t.slice(1).map((u) => {
        const l = u.split(r),
          p = {};
        return (
          c.forEach((m, b) => {
            var y;
            p[m] = ((y = l[b]) == null ? void 0 : y.trim()) || "";
          }),
          p
        );
      });
    return {
      headers: c,
      rows: s,
      rowCount: s.length,
      fileType: "txt",
      rawText: n,
    };
  }
  const i = t.map((c, s) => ({ line: s + 1, content: c }));
  return {
    headers: ["line", "content"],
    rows: i,
    rowCount: i.length,
    fileType: "txt",
    rawText: n,
  };
}
function Cm(e) {
  return new Promise((n, t) => {
    cf.parse(e, {
      header: !0,
      skipEmptyLines: !0,
      complete: (r) => {
        const i = r.data,
          a = i.length > 0 ? Object.keys(i[0]) : [];
        n({ headers: a, rows: i, rowCount: i.length, fileType: "csv" });
      },
      error: (r) => t(new Error(`Erro ao ler CSV: ${r.message}`)),
    });
  });
}
function Fm(e) {
  return new Promise((n, t) => {
    const r = new FileReader();
    ((r.onload = (i) => {
      var a;
      try {
        const o = new Uint8Array((a = i.target) == null ? void 0 : a.result),
          c = sf(o, { type: "array" }),
          s = c.Sheets[c.SheetNames[0]],
          u = uf.sheet_to_json(s),
          l = u.length > 0 ? Object.keys(u[0]) : [];
        n({ headers: l, rows: u, rowCount: u.length, fileType: "xlsx" });
      } catch {
        t(
          new Error(
            "Erro ao ler Excel. Verifique se o arquivo não está corrompido.",
          ),
        );
      }
    }),
      (r.onerror = () => t(new Error("Erro ao carregar o arquivo."))),
      r.readAsArrayBuffer(e));
  });
}
async function Sm(e) {
  try {
    const n = await e.arrayBuffer(),
      r = (await rn.extractRawText({ arrayBuffer: n })).value,
      a = r
        .split(
          `
`,
        )
        .filter((o) => o.trim())
        .map((o, c) => ({ line: c + 1, content: o }));
    return {
      headers: ["line", "content"],
      rows: a,
      rowCount: a.length,
      fileType: "docx",
      rawText: r,
    };
  } catch (n) {
    const t = n instanceof Error ? n.message : "Erro desconhecido";
    throw new Error(`Falha ao processar DOCX: ${t}`);
  }
}
function Bm(e) {
  if (e.length === 0) return null;
  const n = e[0];
  return n.includes("	")
    ? "	"
    : n.includes(";")
      ? ";"
      : n.includes(",")
        ? ","
        : null;
}
const zm = (e) => {
  const n = e
    .split(
      `
`,
    )
    .filter((i) => i.trim());
  if (n.length === 0)
    return {
      headers: [],
      rows: [],
      rowCount: 0,
      fileType: "text",
      rawText: e,
      source: "text_input",
    };
  const t = Bm(n);
  if (t) {
    const i = n[0].split(t).map((o) => o.trim()),
      a = n.slice(1).map((o) => {
        const c = o.split(t),
          s = {};
        return (
          i.forEach((u, l) => {
            var p;
            s[u] = ((p = c[l]) == null ? void 0 : p.trim()) || "";
          }),
          s
        );
      });
    return {
      headers: i,
      rows: a,
      rowCount: a.length,
      fileType: "text",
      rawText: e,
      source: "text_input",
    };
  }
  const r = n.map((i, a) => ({ line: a + 1, content: i }));
  return {
    headers: ["line", "content"],
    rows: r,
    rowCount: r.length,
    fileType: "text",
    rawText: e,
    source: "text_input",
  };
};
export { Im as a, Mm as b, zm as c, Lm as e, Nm as g, qm as p, Pm as s };
