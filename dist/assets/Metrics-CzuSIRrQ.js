var U = Object.defineProperty;
var z = (i, r, e) =>
  r in i
    ? U(i, r, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[r] = e);
var _ = (i, r, e) => z(i, typeof r != "symbol" ? r + "" : r, e);
import { j as a, c as M, u as K } from "./vendor-data-DuuuwLk5.js";
import { C as v, a as R, b, c as w, d as L } from "./card-CTs8HHrG.js";
import { B as k } from "./badge-Dl11-P0M.js";
import { c as P, u as B } from "./index-CaCe4Bjh.js";
import {
  f as F,
  a6 as D,
  at as q,
  bA as T,
  bB as n,
  bC as y,
  bD as E,
  bE as j,
  d as H,
  T as G,
  O as Y,
} from "./vendor-utils-CGetvm_l.js";
import { u as J } from "./useCurrentOrganization-DeW0zOch.js";
import { S as C } from "./skeleton-DM3l7qP2.js";
import "./vendor-react-DfYPWlel.js";
import "./vendor-radix-CfL9Rjb9.js";
const $ = {
  positive: {
    badge: "badge-success",
    border: "border-green-200 dark:border-green-800",
    bg: "bg-green-50 dark:bg-green-950/20",
    text: "text-green-700 dark:text-green-300",
  },
  negative: {
    badge: "badge-error",
    border: "border-red-200 dark:border-red-800",
    bg: "bg-red-50 dark:bg-red-950/20",
    text: "text-red-700 dark:text-red-300",
  },
  neutral: {
    badge: "badge-warning",
    border: "border-yellow-200 dark:border-yellow-800",
    bg: "bg-yellow-50 dark:bg-yellow-950/20",
    text: "text-yellow-700 dark:text-yellow-300",
  },
};
function W({
  code: i,
  title: r,
  value: e,
  unit: t,
  status: s = "neutral",
  trend: o,
  className: c,
}) {
  const l = $[s];
  return a.jsx(v, {
    className: P("card-hover", l.border, c),
    children: a.jsx(R, {
      className: "p-4",
      children: a.jsxs("div", {
        className: "space-y-2",
        children: [
          a.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              a.jsxs("p", {
                className: "text-xs font-medium text-muted-foreground",
                children: [
                  i &&
                    a.jsx("span", {
                      className: "mr-1 opacity-70",
                      children: i,
                    }),
                  r,
                ],
              }),
              s !== "neutral" &&
                a.jsx(k, {
                  className: P("text-xs", l.badge),
                  children:
                    s === "positive"
                      ? "Bom"
                      : s === "negative"
                        ? "Atenção"
                        : "Neutro",
                }),
            ],
          }),
          a.jsxs("div", {
            className: "flex items-baseline gap-1",
            children: [
              a.jsx("p", {
                className: "text-2xl font-bold text-foreground",
                children: e,
              }),
              t &&
                a.jsx("span", {
                  className: "text-sm text-muted-foreground",
                  children: t,
                }),
            ],
          }),
          o &&
            a.jsxs("div", {
              className: "flex items-center gap-1",
              children: [
                o.value > 0
                  ? a.jsx(F, { className: "h-3 w-3 text-green-600" })
                  : o.value < 0
                    ? a.jsx(D, { className: "h-3 w-3 text-red-600" })
                    : a.jsx(q, { className: "h-3 w-3 text-muted-foreground" }),
                a.jsxs("span", {
                  className: P(
                    "text-xs",
                    o.value > 0 && "text-green-600",
                    o.value < 0 && "text-red-600",
                    o.value === 0 && "text-muted-foreground",
                  ),
                  children: [o.value > 0 ? "+" : "", o.value, "%"],
                }),
              ],
            }),
        ],
      }),
    }),
  });
}
const g = T({
  id: n().uuid(),
  code: n(),
  title: n(),
  description: n().optional(),
  calculation_formula: n().optional(),
  unit: n(),
  domain: E(["finance", "sales", "marketing", "operations", "hr", "strategy"]),
  sector: n().optional(),
  business_model: n().optional(),
  niche: n().optional(),
  trend_direction: E(["higher_is_better", "lower_is_better", "no_trend"]),
  input_type: E(["cumulative", "non_cumulative"]),
  group_data_period: E(["daily", "weekly", "monthly", "quarterly", "yearly"]),
  total_is: E([
    "sum_of_values",
    "average_of_values",
    "last_value",
    "all_time",
    "ytd_as_of",
  ]),
  is_active: y(),
  created_at: n().datetime(),
  updated_at: n().datetime(),
});
T({
  id: n().uuid(),
  kpi_id: n().uuid(),
  organization_id: n().uuid(),
  period_start: n().datetime(),
  period_end: n().datetime(),
  period_key: n(),
  value: j(),
  currency: n(),
  data_source: n(),
  is_verified: y(),
  created_at: n().datetime(),
  updated_at: n().datetime(),
  kpi_library: g.optional(),
});
class Z {
  constructor() {
    _(
      this,
      "supabase",
      M(
        "https://jmekjpytugnetkzphxno.supabase.co",
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
      ),
    );
  }
  async getKPIs() {
    const { data: r, error: e } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .order("code");
    if (e)
      throw (
        console.error("Error fetching KPIs:", e),
        new Error(`Failed to fetch KPIs: ${e.message}`)
      );
    return g.array().parse(r || []);
  }
  async getKPIById(r) {
    const { data: e, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("id", r)
      .maybeSingle();
    if (t)
      throw (
        console.error("Error fetching KPI:", t),
        new Error(`Failed to fetch KPI: ${t.message}`)
      );
    return g.safeParse(e).success ? e : null;
  }
  async getKPIByCode(r) {
    const { data: e, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("code", r.toUpperCase())
      .maybeSingle();
    if (t)
      throw (
        console.error("Error fetching KPI by code:", t),
        new Error(`Failed to fetch KPI by code: ${t.message}`)
      );
    return g.safeParse(e).success ? e : null;
  }
  async getKPIsByDomain(r) {
    const { data: e, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .eq("domain", r)
      .order("code");
    if (t)
      throw (
        console.error("Error fetching KPIs by domain:", t),
        new Error(`Failed to fetch KPIs by domain: ${t.message}`)
      );
    return g.array().parse(e || []);
  }
  async createKPI(r) {
    var c;
    const e = { ...r, code: (c = r.code) == null ? void 0 : c.toUpperCase() },
      { data: t, error: s } = await this.supabase
        .from("library_kpis")
        .insert(e)
        .select()
        .single();
    if (s)
      throw (
        console.error("Error creating KPI:", s),
        new Error(`Failed to create KPI: ${s.message}`)
      );
    const o = g.safeParse(t);
    if (!o.success)
      throw new Error(`Invalid KPI data returned: ${o.error.message}`);
    return o.data;
  }
  async updateKPI(r, e) {
    const t = { ...e, ...(e.code && { code: e.code.toUpperCase() }) },
      { data: s, error: o } = await this.supabase
        .from("library_kpis")
        .update(t)
        .eq("id", r)
        .select()
        .single();
    if (o)
      throw (
        console.error("Error updating KPI:", o),
        new Error(`Failed to update KPI: ${o.message}`)
      );
    const c = g.safeParse(s);
    if (!c.success)
      throw new Error(`Invalid KPI data returned: ${c.error.message}`);
    return c.data;
  }
  async deleteKPI(r) {
    const { error: e } = await this.supabase
      .from("library_kpis")
      .update({ is_active: !1 })
      .eq("id", r);
    if (e)
      throw (
        console.error("Error deleting KPI:", e),
        new Error(`Failed to delete KPI: ${e.message}`)
      );
  }
  async hardDeleteKPI(r) {
    const { error: e } = await this.supabase
      .from("library_kpis")
      .delete()
      .eq("id", r);
    if (e)
      throw (
        console.error("Error hard deleting KPI:", e),
        new Error(`Failed to hard delete KPI: ${e.message}`)
      );
  }
  async getKPIDomains() {
    const { data: r, error: e } = await this.supabase
      .from("library_kpis")
      .select("domain")
      .eq("is_active", !0);
    if (e)
      throw (
        console.error("Error fetching KPI domains:", e),
        new Error(`Failed to fetch KPI domains: ${e.message}`)
      );
    return [...new Set((r || []).map((s) => s.domain))];
  }
  async searchKPIs(r) {
    const { data: e, error: t } = await this.supabase
      .from("library_kpis")
      .select("*")
      .eq("is_active", !0)
      .or(`title.ilike.%${r}%,description.ilike.%${r}%`)
      .order("code");
    if (t)
      throw (
        console.error("Error searching KPIs:", t),
        new Error(`Failed to search KPIs: ${t.message}`)
      );
    return g.array().parse(e || []);
  }
}
const Q = new Z(),
  h = T({
    id: n().uuid(),
    kpi_id: n().uuid(),
    organization_id: n().uuid(),
    period_start: n().datetime(),
    period_end: n().datetime(),
    period_key: n(),
    value: j(),
    currency: n(),
    data_source: n(),
    is_verified: y(),
    created_at: n().datetime(),
    updated_at: n().datetime(),
    kpi_library: g.optional(),
  });
T({
  kpi_id: n().uuid(),
  organization_id: n().uuid(),
  period_start: n(),
  period_end: n(),
  period_key: n(),
  value: j(),
  currency: n().default("BRL"),
  data_source: n().default("manual_input"),
  is_verified: y().default(!1),
});
class X {
  constructor() {
    _(
      this,
      "supabase",
      M(
        "https://jmekjpytugnetkzphxno.supabase.co",
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
      ),
    );
  }
  async getOrganizationKPIs(r) {
    const { data: e, error: t } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", r)
      .order("period_start", { ascending: !1 });
    if (t)
      throw (
        console.error("Error fetching organization KPIs:", t),
        new Error(`Failed to fetch organization KPIs: ${t.message}`)
      );
    return h.array().parse(e || []);
  }
  async getOrganizationKPIsByPeriod(r, e) {
    const { data: t, error: s } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", r)
      .eq("period_key", e)
      .order("period_start", { ascending: !1 });
    if (s)
      throw (
        console.error("Error fetching organization KPIs by period:", s),
        new Error(`Failed to fetch organization KPIs by period: ${s.message}`)
      );
    return h.array().parse(t || []);
  }
  async getLatestOrganizationKPIs(r) {
    const { data: e, error: t } = await this.supabase
      .from("user_metrics")
      .select("kpi_id, period_key")
      .eq("organization_id", r)
      .order("period_key", { ascending: !1 });
    if (t)
      throw (
        console.error("Error fetching latest periods:", t),
        new Error(`Failed to fetch latest periods: ${t.message}`)
      );
    const s = new Map();
    e == null ||
      e.forEach((m) => {
        s.has(m.kpi_id) || s.set(m.kpi_id, m.period_key);
      });
    const o = Array.from(s.values());
    if (o.length === 0) return [];
    const { data: c, error: l } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", r)
      .in("period_key", o)
      .order("period_start", { ascending: !1 });
    if (l)
      throw (
        console.error("Error fetching latest organization KPIs:", l),
        new Error(`Failed to fetch latest organization KPIs: ${l.message}`)
      );
    return h.array().parse(c || []);
  }
  async getOrganizationKPIById(r, e) {
    const { data: t, error: s } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", r)
      .eq("kpi_id", e)
      .order("period_start", { ascending: !1 })
      .limit(1)
      .maybeSingle();
    if (s)
      throw (
        console.error("Error fetching organization KPI:", s),
        new Error(`Failed to fetch organization KPI: ${s.message}`)
      );
    return h.safeParse(t).success ? t : null;
  }
  async createOrganizationKPI(r) {
    const { data: e, error: t } = await this.supabase
      .from("user_metrics")
      .insert(r)
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .single();
    if (t)
      throw (
        console.error("Error creating organization KPI:", t),
        new Error(`Failed to create organization KPI: ${t.message}`)
      );
    const s = h.safeParse(e);
    if (!s.success)
      throw new Error(
        `Invalid organization KPI data returned: ${s.error.message}`,
      );
    return s.data;
  }
  async updateOrganizationKPI(r, e) {
    const { data: t, error: s } = await this.supabase
      .from("user_metrics")
      .update(e)
      .eq("id", r)
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .single();
    if (s)
      throw (
        console.error("Error updating organization KPI:", s),
        new Error(`Failed to update organization KPI: ${s.message}`)
      );
    const o = h.safeParse(t);
    if (!o.success)
      throw new Error(
        `Invalid organization KPI data returned: ${o.error.message}`,
      );
    return o.data;
  }
  async deleteOrganizationKPI(r) {
    const { error: e } = await this.supabase
      .from("user_metrics")
      .delete()
      .eq("id", r);
    if (e)
      throw (
        console.error("Error deleting organization KPI:", e),
        new Error(`Failed to delete organization KPI: ${e.message}`)
      );
  }
  async getKPIHistory(r, e, t = 12) {
    const { data: s, error: o } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", r)
      .eq("kpi_id", e)
      .order("period_start", { ascending: !1 })
      .limit(t);
    if (o)
      throw (
        console.error("Error fetching KPI history:", o),
        new Error(`Failed to fetch KPI history: ${o.message}`)
      );
    return h.array().parse(s || []);
  }
  async getKPITrend(r, e, t = 6) {
    const s = await this.getKPIHistory(r, e, t);
    if (s.length === 0)
      return {
        current: null,
        previous: null,
        trend: "stable",
        percentageChange: 0,
      };
    const o = s[0],
      c = s[1] || null;
    if (!c)
      return {
        current: o,
        previous: null,
        trend: "stable",
        percentageChange: 0,
      };
    const l = ((o.value - c.value) / c.value) * 100,
      m = l > 0 ? "up" : l < 0 ? "down" : "stable";
    return { current: o, previous: c, trend: m, percentageChange: l };
  }
  async bulkCreateOrganizationKPIs(r) {
    const { data: e, error: t } = await this.supabase
      .from("user_metrics")
      .insert(r).select(`
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `);
    if (t)
      throw (
        console.error("Error bulk creating organization KPIs:", t),
        new Error(`Failed to bulk create organization KPIs: ${t.message}`)
      );
    const s = h.array().safeParse(e || []);
    if (!s.success)
      throw new Error(
        `Invalid organization KPI data returned: ${s.error.message}`,
      );
    return s.data;
  }
  async getKPIsByDateRange(r, e, t) {
    const { data: s, error: o } = await this.supabase
      .from("user_metrics")
      .select(
        `
        *,
        kpi_library (
          id,
          code,
          title,
          description,
          unit,
          domain,
          trend_direction
        )
      `,
      )
      .eq("organization_id", r)
      .gte("period_start", e)
      .lte("period_end", t)
      .order("period_start", { ascending: !1 });
    if (o)
      throw (
        console.error("Error fetching KPIs by date range:", o),
        new Error(`Failed to fetch KPIs by date range: ${o.message}`)
      );
    return h.array().parse(s || []);
  }
}
const ee = new X(),
  ae = [
    {
      id: "b2b",
      code: "B2B",
      label: "Vende para Empresas",
      labelEn: "Business to Business",
      description:
        "Sua empresa vende produtos ou serviços para outras empresas.",
      descriptionEn:
        "Your company sells products or services to other companies.",
      example:
        "Uma fábrica vende para lojas. Uma agência vende para outras empresas.",
      examples: [
        "Fornecedor de insumos para indústrias",
        "Agência de marketing para empresas",
        "Fabricante que vende para distribuidores",
        "Empresa de software para outras empresas",
        "Consultoria empresarial",
      ],
      relevantKPIs: [
        "CAC",
        "LTV",
        "WIN_RATE",
        "SALES_CYCLE",
        "MRR",
        "LEAD_VELOCITY",
        "PIPELINE",
        "ARPU",
      ],
      kpisWithDescriptions: {
        CAC: {
          code: "CAC",
          name: "Custo de Aquisição de Cliente",
          explanation:
            "Quanto você gasta para ganhar um novo cliente empresarial",
          whatIsIt:
            "Soma de todos os custos de vendas e marketing dividida pelo número de novos clientes conquistados",
          whyItMatters:
            "Se o CAC for maior que o LTV, você está perdendo dinheiro a cada cliente",
          howToImprove:
            "Automação de marketing,Inbound,referências,otimizar processo de vendas",
          formula: "(Despesas de Vendas + Marketing) / Novos Clientes",
        },
        LTV: {
          code: "LTV",
          name: "Valor do Tempo de Vida",
          explanation:
            "Receita total que um cliente gera durante todo o tempo que fica com você",
          whatIsIt:
            "Ticket médio × frequência de compra × tempo de vida do cliente",
          whyItMatters:
            "Clientes B2B geram mais receita por mais tempo, mas têm ciclos longos",
          howToImprove:
            "Upsell,cross-sell,contratos de longo prazo,excelente suporte",
          formula: "Ticket Médio × Compras/Ano × Anos como Cliente",
        },
        WIN_RATE: {
          code: "WIN_RATE",
          name: "Taxa de Fechamento",
          explanation: "Quantas propostas viram clientes efetivamente",
          whatIsIt: "Percentual de oportunidades convertidas em clientes",
          whyItMatters: "Mostra a eficácia do seu processo de vendas",
          howToImprove:
            "Qualificação melhor,propostas personalizadas,follow-up consistente",
          formula: "(Clientes Fechados / Propostas Enviadas) × 100",
        },
        SALES_CYCLE: {
          code: "SALES_CYCLE",
          name: "Ciclo de Vendas",
          explanation: "Tempo médio desde o primeiro contato até o fechamento",
          whatIsIt: "Dias entre primeiro contato e contrato assinado",
          whyItMatters:
            "Ciclos longos afetam o fluxo de caixa e precisam de pipeline maior",
          howToImprove:
            "Qualificação prévia,proppostas rápidas,objeções resolvidas",
          formula: "Média de dias entre lead qualificado e fechamento",
        },
      },
    },
    {
      id: "b2c",
      code: "B2C",
      label: "Vende para Pessoas",
      labelEn: "Business to Consumer",
      description:
        "Sua empresa vende produtos ou serviços diretamente para consumidores finais.",
      descriptionEn:
        "Your company sells products or services directly to end consumers.",
      example: "Uma loja de roupas. Um restaurante. Um salão de beleza.",
      examples: [
        "Loja de roupas ou acessórios",
        "Restaurante ou lanchonete",
        "Salão de beleza ou estética",
        "E-commerce de produtos",
        "Academia ou studio de fitness",
      ],
      relevantKPIs: [
        "AOV",
        "CONVERSION",
        "FOOT_TRAFFIC",
        "REPEAT_PURCHASE",
        "NPS",
        "BASKET_SIZE",
        "STORE_TRAFFIC",
        "GMV",
      ],
      kpisWithDescriptions: {
        AOV: {
          code: "AOV",
          name: "Ticket Médio",
          explanation: "Valor médio gasto por cliente em cada compra",
          whatIsIt: "Receita total dividida pelo número de transações",
          whyItMatters:
            "Ticket maior = menos custo por transação e mais receita",
          howToImprove: "Bundles,promoções por quantidade,sugestão de produtos",
          formula: "Receita Total / Número de Transações",
        },
        CONVERSION: {
          code: "CONVERSION",
          name: "Taxa de Conversão",
          explanation: "Quantos visitantes viram clientes",
          whatIsIt: "Percentual de pessoas que compram após visitar",
          whyItMatters:
            "Conversão alta significa produto atrativo e boa experiência",
          howToImprove: "UX melhor,prova social,urgência,produtos relevantes",
          formula: "(Clientes / Visitantes) × 100",
        },
        FOOT_TRAFFIC: {
          code: "FOOT_TRAFFIC",
          name: "Movimentação",
          explanation: "Quantas pessoas passam pela sua loja",
          whatIsIt: "Contagem de visitantes no período",
          whyItMatters: "Mais movimento = mais chances de venda",
          howToImprove:
            "Vitrine atraente,promoções,localização,marketing local",
          formula: "Total de visitantes no período",
        },
        REPEAT_PURCHASE: {
          code: "REPEAT_PURCHASE",
          name: "Taxa de Recompra",
          explanation: "Clientes que voltaram a comprar",
          whatIsIt: "Percentual de clientes que compram mais de uma vez",
          whyItMatters:
            "Clientes recorrentes são mais baratos de manter e geram mais receita",
          howToImprove:
            "Programa de fidelidade,excelente produto,atendimento,comunicação",
          formula: "(Clientes com 2+ compras / Total Clientes) × 100",
        },
        NPS: {
          code: "NPS",
          name: "Net Promoter Score",
          explanation: "O quanto seus clientes recomendam você",
          whatIsIt: "Nota de 0 a 10 sobre likelihood de recomendar",
          whyItMatters: "Recomendação é o marketing mais efetivo",
          howToImprove:
            "Suporte excelente,entregar além do esperado,resolver problemas rápido",
          formula: "% Promotores (9-10) - % Detratores (0-6)",
        },
      },
    },
    {
      id: "b2b2c",
      code: "B2B2C",
      label: "Vende para Empresas que Vendem para Pessoas",
      labelEn: "Business to Business to Consumer",
      description:
        "Sua empresa fornece para negócios que vendem ao consumidor final.",
      descriptionEn:
        "Your company supplies to businesses that sell to end consumers.",
      example: "Uma fábrica que vende para varejistas. Um atacadista.",
      examples: [
        "Fabricante que vende para lojas",
        "Atacadista para varejo",
        "Fornecedor para redes de loja",
        "Distribuidor para pequenos varejistas",
        "Fabricante para marketplaces",
      ],
      relevantKPIs: [
        "GMV",
        "TAKE_RATE",
        "SELLER_COUNT",
        "BUYER_COUNT",
        "MATCH_RATE",
        "DISTRIBUTOR_MARGIN",
      ],
      kpisWithDescriptions: {
        GMV: {
          code: "GMV",
          name: "Volume Bruto de Vendas",
          explanation:
            "Valor total de vendas feitas pelos seus clientes usando seu produto",
          whatIsIt: "Vendas totais no ecossistema (não sua receita direta)",
          whyItMatters: "Mostra o tamanho do ecossistema que você alimenta",
          howToImprove:
            "Mais sellers, melhores tools, mais buyers,marketing para ecossistema",
          formula: "Soma de todas as vendas pelos clientes",
        },
        TAKE_RATE: {
          code: "TAKE_RATE",
          name: "Taxa de Comissão",
          explanation: "Percentual que você ganha em cada venda",
          whatIsIt: "Sua receita dividida pelo GMV",
          whyItMatters: "Determina sua margem no modelo",
          howToImprove: "Negociar melhor taxa,volume,valor agregado",
          formula: "(Sua Receita / GMV) × 100",
        },
        SELLER_COUNT: {
          code: "SELLER_COUNT",
          name: "Fornecedores/Vendedores Ativos",
          explanation:
            "Número de empresas que vendem usando sua plataforma/produto",
          whatIsIt: "Quantidade de sellers no ecossistema",
          whyItMatters: "Mais sellers = mais oferta = mais buyers",
          howToImprove:
            "Onboarding fácil,ferramentas,suporte,marketing para sellers",
          formula: "Contagem de sellers ativos",
        },
      },
    },
    {
      id: "marketplace",
      code: "MARKETPLACE",
      label: "Marketplace / Plataforma",
      labelEn: "Marketplace",
      description: "Sua plataforma conecta vendedores e compradores.",
      descriptionEn: "Your platform connects sellers and buyers.",
      example: " marketplaces, apps de entrega, plataformas de serviços.",
      examples: [
        "E-commerce marketplace",
        "App de delivery",
        "Plataforma de freelancers",
        "Agregador de serviços",
        "Plataforma de classificados",
      ],
      relevantKPIs: [
        "GMV",
        "TAKE_RATE",
        "MATCH_RATE",
        "CAC",
        "LTV",
        "SELLER_CHURN",
        "BUYER_CHURN",
        "FILL_RATE",
      ],
      kpisWithDescriptions: {
        MATCH_RATE: {
          code: "MATCH_RATE",
          name: "Taxa de Match",
          explanation: "Quantas buscas viram transações",
          whatIsIt: "Percentual de match entre oferta e demanda",
          whyItMatters: "Core do marketplace - quanto mais matches, mais valor",
          howToImprove: "Melhorar search,precificação,semântica,recomendações",
          formula: "(Transações / Buscas) × 100",
        },
        FILL_RATE: {
          code: "FILL_RATE",
          name: "Taxa de Preenchimento",
          explanation: "Pedidos atendidos versus solicitados",
          whatIsIt: "Percentual de demanda atendida",
          whyItMatters: "Se não preenche, perde cliente",
          howToImprove: "Mais inventory,melhor forecasting,parceiros",
          formula: "(Pedidos Atendidos / Pedidos Solicitados) × 100",
        },
      },
    },
    {
      id: "saas",
      code: "SAAS",
      label: "Software como Serviço",
      labelEn: "Software as a Service",
      description: "Sua empresa oferece software por assinatura.",
      descriptionEn: "Your company offers software as a subscription.",
      example: "ERP online, CRM na nuvem, ferramentas SaaS.",
      examples: [
        "ERP/SaaS empresarial",
        "Ferramenta de produtividade",
        "CRM SaaS",
        "Ferramenta de marketing digital",
        "Plataforma de educação online",
      ],
      relevantKPIs: [
        "MRR",
        "ARR",
        "CHURN",
        "CAC",
        "LTV",
        "BURN_RATE",
        "NRR",
        "ARPU",
        "TRIAL_CONVERSION",
        "NET_DOLLAR_RETENTION",
      ],
      kpisWithDescriptions: {
        MRR: {
          code: "MRR",
          name: "Receita Recorrente Mensal",
          explanation: "Sua receita mensal garantida por assinaturas",
          whatIsIt: "Soma de todas as assinaturas ativas do mês",
          whyItMatters: "Core metric de SaaS - mostra saúde do negócio",
          howToImprove: "Mais clientes, menos churn, upgrades, expansão",
          formula: "Soma de todas as assinaturas mensais",
        },
        ARR: {
          code: "ARR",
          name: "Receita Recorrente Anual",
          explanation: "Sua receita anual projetada",
          whatIsIt: "MRR × 12",
          whyItMatters: "Usado para valuation e métricas de crescimento",
          howToImprove: "Crescimento do MRR",
          formula: "MRR × 12",
        },
        CHURN: {
          code: "CHURN",
          name: "Taxa de Cancelamento",
          explanation: "Clientes que cancelam a assinatura",
          whatIsIt: "Percentual de clientes que saem por mês/ano",
          whyItMatters: "Churn alto destrói valor. 5% mensal = 46% anual",
          howToImprove:
            "Onboarding excelente,suporte,rastrear dissatisfaction,cancelamento mais difícil",
          formula: "(Clientes Perdidos / Clientes Início) × 100",
        },
        NRR: {
          code: "NRR",
          name: "Net Revenue Retention",
          explanation: "Receita retida + expansão - contração - churn",
          whatIsIt: "Mede se você está crescendo com base de clientes atual",
          whyItMatters: "NRR > 100% = crecimiento sem novos clientes",
          howToImprove: "Upsell,cross-sell,novos features,reduzir churn",
          formula: "(MRR Final / MRR Início) × 100",
        },
      },
    },
    {
      id: "services",
      code: "SERVICES",
      label: "Prestação de Serviços",
      labelEn: "Services",
      description: "Sua empresa oferece serviços personalizados.",
      descriptionEn: "Your company offers personalized services.",
      example: "Consultoria, arquitetura, advocacia, fisioterapia.",
      examples: [
        "Consultoria empresarial",
        "Serviços profissionais (advogado, contador)",
        "Arquitetura e design",
        "Saúde (fisioterapia, clínica)",
        "Serviços de beleza",
      ],
      relevantKPIs: [
        "UTILIZATION",
        "BILLABLE_HOURS",
        "PROJECT_MARGIN",
        "CLIENT_SATISFACTION",
        "AVG_PROJECT_VALUE",
        "PROJECT_PROFIT",
      ],
      kpisWithDescriptions: {
        UTILIZATION: {
          code: "UTILIZATION",
          name: "Taxa de Utilização",
          explanation: "Quanto do seu tempo/projeto é pago pelo cliente",
          whatIsIt: "Percentual de horas/tempo que são faturáveis",
          whyItMatters: "Baixa utilização = receita perdida",
          howToImprove: "Melhor gestão de agenda,propostas melhores,retainers",
          formula: "(Horas Faturáveis / Horas Totais) × 100",
        },
        BILLABLE_HOURS: {
          code: "BILLABLE_HOURS",
          name: "Horas Faturáveis",
          explanation: "Total de horas que você cobra dos clientes",
          whatIsIt: "Soma de horas trabalhadas em projetos pagos",
          whyItMatters: "Main revenue driver para serviços",
          howToImprove: "Mais clientes, projetos maiores,retainers",
          formula: "Soma de horas em projetos pagos",
        },
        PROJECT_MARGIN: {
          code: "PROJECT_MARGIN",
          name: "Margem do Projeto",
          explanation: "Lucro em cada projeto prestado",
          whatIsIt: "Receita do projeto menos custos diretos",
          whyItMatters: "Projetos devem dar lucro, não só cobrir custos",
          howToImprove: "Precificar melhor,escopo claro,gestão de escopo",
          formula: "(Receita Projeto - Custos Projeto) / Receita Projeto × 100",
        },
      },
    },
  ],
  re = (i) => ae.find((r) => r.code === i),
  se = (i, r) => {
    const e = re(i);
    return e == null ? void 0 : e.kpisWithDescriptions[r];
  },
  te = {
    RUNWAY: { priority: 1, reason: "Vital para sobrevivência da empresa" },
    REVENUE: { priority: 1, reason: "Receita principal do negócio" },
    GM: { priority: 1, reason: "Margem bruta essencial para saúde financeira" },
    GROWTH: { priority: 1, reason: "Crescimento indica saúde do negócio" },
    EBITDA: { priority: 2, reason: "Lucro operacional" },
    CAC: { priority: 2, reason: "Custo de aquisição de cliente" },
    LTV: { priority: 2, reason: "Lifetime value do cliente" },
    CHURN: { priority: 2, reason: "Taxa de cancelamento crítica" },
  },
  oe = {
    B2B: [
      "CAC",
      "LTV",
      "WIN_RATE",
      "SALES_CYCLE",
      "MRR",
      "LEAD_VELOCITY",
      "PIPELINE",
      "ARPU",
    ],
    B2C: [
      "AOV",
      "CONVERSION",
      "FOOT_TRAFFIC",
      "REPEAT_PURCHASE",
      "NPS",
      "BASKET_SIZE",
      "STORE_TRAFFIC",
      "GMV",
    ],
    B2B2C: [
      "GMV",
      "TAKE_RATE",
      "SELLER_COUNT",
      "BUYER_COUNT",
      "MATCH_RATE",
      "DISTRIBUTOR_MARGIN",
    ],
    MARKETPLACE: [
      "GMV",
      "TAKE_RATE",
      "MATCH_RATE",
      "CAC",
      "LTV",
      "SELLER_CHURN",
      "BUYER_CHURN",
      "FILL_RATE",
    ],
    SAAS: [
      "MRR",
      "ARR",
      "CHURN",
      "CAC",
      "LTV",
      "BURN_RATE",
      "NRR",
      "ARPU",
      "TRIAL_CONVERSION",
    ],
    SERVICES: [
      "UTILIZATION",
      "BILLABLE_HOURS",
      "PROJECT_MARGIN",
      "CLIENT_SATISFACTION",
      "AVG_PROJECT_VALUE",
    ],
  },
  ie = {
    SAAS: [
      "RUNWAY",
      "MRR",
      "CAC",
      "LTV",
      "CHURN",
      "NPS",
      "NET_REVENUE_RETENTION",
    ],
    ECOMMERCE: [
      "REVENUE",
      "GM",
      "CAC",
      "LTV",
      "AOV",
      "CONVERSION_RATE",
      "RETENTION",
    ],
    SERVICES: [
      "REVENUE",
      "UTILIZATION",
      "CAC",
      "LTV",
      "PROJECT_MARGIN",
      "CLIENT_SATISFACTION",
    ],
    MANUFACTURING: [
      "REVENUE",
      "GM",
      "OPEX",
      "INVENTORY_TURNOVER",
      "CAPACITY_UTILIZATION",
      "DEFECT_RATE",
    ],
    RETAIL: [
      "REVENUE",
      "GM",
      "SAME_STORE_GROWTH",
      "INVENTORY_TURNOVER",
      "AVG_TRANSACTION",
    ],
  },
  ne = {
    STARTUP: [
      "RUNWAY",
      "REVENUE",
      "GROWTH",
      "CAC",
      "LTV",
      "BURN_RATE",
      "HEADCOUNT",
    ],
    SME: ["REVENUE", "GM", "EBITDA", "CASH_FLOW", "AR", "AP", "HEADCOUNT"],
    MID_MARKET: [
      "REVENUE",
      "GM",
      "EBITDA",
      "ROIC",
      "DEBT_RATIO",
      "WORKING_CAPITAL",
      "HEADCOUNT",
    ],
    ENTERPRISE: [
      "REVENUE",
      "GM",
      "EBITDA",
      "ROE",
      "DEBT_RATIO",
      "FREE_CASH_FLOW",
      "TOTAL_ASSETS",
    ],
  };
class de {
  constructor() {
    _(
      this,
      "supabase",
      M(
        "https://jmekjpytugnetkzphxno.supabase.co",
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptZWtqcHl0dWduZXRrezBoeG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MzY4NDAsImV4cCI6MjA4OTMxMjg0MH0.knedrxNHl2YcbGewS0E7zDa41zsJe8aoOwzD8LTEas4
`,
      ),
    );
  }
  async calculateRelevance(r, e, t, s) {
    const o = await Q.getKPIs(),
      c = await this.getDataPresence(r),
      l = this.getReadinessLevel(c.totalDataPoints),
      m = [],
      A = e ? ie[e] || [] : [],
      d = t ? ne[t] || [] : [],
      p = s ? oe[s] || [] : [];
    for (const u of o) {
      let I = 999,
        f = "KPI disponível";
      const N = te[u.code];
      (N && ((I = N.priority), (f = N.reason)),
        p.includes(u.code) &&
          ((I = Math.max(I - 2, 1)), (f = `Relevante para modelo ${s}`)),
        A.includes(u.code) &&
          ((I = Math.max(I - 1, 1)), (f = `Relevante para setor ${e}`)),
        d.includes(u.code) &&
          ((I = Math.max(I - 1, 1)), (f = `Relevante para porte ${t}`)));
      const O = c.byKPI[u.code] || 0;
      if (this.shouldIncludeKPI(l, O, I)) {
        const x = s ? se(s, u.code) : void 0;
        m.push({
          code: u.code,
          title: u.title,
          domain: u.domain,
          priority: I,
          reason: f,
          readiness_level: l,
          dataPoints: O,
          next_action: this.suggestNextAction(u.code),
          kpiDescription: x
            ? {
                whatIsIt: x.whatIsIt,
                whyItMatters: x.whyItMatters,
                howToImprove: x.howToImprove,
              }
            : void 0,
        });
      }
    }
    return m.sort((u, I) => u.priority - I.priority);
  }
  shouldIncludeKPI(r, e, t) {
    switch (r) {
      case 0:
        return t <= 1;
      case 1:
        return t <= 3 && e > 0;
      case 2:
        return t <= 5;
      case 3:
        return !0;
      case 4:
        return !0;
      default:
        return !1;
    }
  }
  async getDataPresence(r) {
    const e = await ee.getOrganizationKPIs(r),
      t = {},
      s = {};
    for (const c of e)
      if (c.kpi_library) {
        const l = c.kpi_library.domain || "unknown",
          m = c.kpi_library.code || "unknown";
        ((t[l] = (t[l] || 0) + 1), (s[m] = (s[m] || 0) + 1));
      }
    const o = new Set(e.map((c) => c.kpi_id));
    return {
      totalKPIs: o.size,
      kpisWithData: o.size,
      totalDataPoints: e.length,
      byDomain: t,
      byKPI: s,
    };
  }
  getReadinessLevel(r) {
    return r === 0 ? 0 : r < 5 ? 1 : r < 20 ? 2 : r < 50 ? 3 : 4;
  }
  getMaturityInfo(r) {
    const e = this.getReadinessLevel(r);
    return {
      0: {
        level: 0,
        label: "Iniciante",
        description: "Preciso de dados para começar",
        nextAction: "Adicione seu primeiro arquivo de dados",
      },
      1: {
        level: 1,
        label: "Básico",
        description: "Alguns dados básicos disponíveis",
        nextAction: "Continue adicionando dados para métricas principais",
      },
      2: {
        level: 2,
        label: "Em Desenvolvimento",
        description: " dados suficientes para análises úteis",
        nextAction: "Adicione mais períodos para ver tendências",
      },
      3: {
        level: 3,
        label: "Intermediário",
        description: "Boa base de dados para análise",
        nextAction: "Adicione mais KPIs para ter uma visão completa",
      },
      4: {
        level: 4,
        label: "Avançado",
        description: "Dados robustos para análise preditiva",
        nextAction: "Explore análises avançadas e previsões",
      },
    }[e];
  }
  suggestNextAction(r) {
    return (
      {
        RUNWAY: "Adicione projeção de fluxo de caixa mensal",
        REVENUE: "Adicione revenue mensal dos últimos 12 meses",
        GM: "Adicione dados de custo de vendas",
        CAC: "Adicione dados de marketing spend e novas aquisição",
        LTV: "Adicione dados de receita por cliente",
        CHURN: "Adicione dados de clientes ativos e cancelamentos",
        EBITDA: "Adicione dados de despesas operacionais",
        GROWTH: "Adicione dados de vendas comparando períodos",
      }[r] || "Continue adicionando dados históricos"
    );
  }
}
const S = new de(),
  V = {
    relevance: (i) => ["relevance", i],
    dataPresence: (i) => ["dataPresence", i],
    maturity: (i) => ["maturity", i],
  };
function ce(i, r, e, t) {
  const s = K({
      queryKey: V.relevance(i),
      queryFn: () => S.calculateRelevance(i, r, e, t),
      enabled: !!i,
      staleTime: 3e5,
    }),
    o = K({
      queryKey: V.dataPresence(i),
      queryFn: () => S.getDataPresence(i),
      enabled: !!i,
      staleTime: 5 * 60 * 1e3,
    }),
    c = o.data ? S.getMaturityInfo(o.data.totalDataPoints) : void 0;
  return {
    kpis: s.data,
    isLoading: s.isLoading || o.isLoading,
    error: s.error || o.error,
    maturity: c,
  };
}
function Re() {
  const { t: i } = B(),
    { organization: r, isLoading: e } = J(),
    t = (r == null ? void 0 : r.id) || "",
    { kpis: s, isLoading: o, maturity: c } = ce(t);
  if (e || o)
    return a.jsx("div", {
      className: "container mx-auto py-6 space-y-6",
      children: a.jsxs("div", {
        className: "space-y-4",
        children: [
          a.jsx(C, { className: "h-8 w-64" }),
          a.jsx(C, { className: "h-4 w-96" }),
          a.jsx("div", {
            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
            children: [...Array(4)].map((d, p) =>
              a.jsx(C, { className: "h-32" }, p),
            ),
          }),
        ],
      }),
    });
  const l = (d) =>
      typeof d == "number" ? d.toLocaleString("pt-BR") : String(d ?? "-"),
    m = (d) => {
      var u;
      const p = (u = d.relevanceScore) == null ? void 0 : u.status;
      return p === "high" ? "positive" : p === "low" ? "negative" : "neutral";
    },
    A = (d) => {
      if (!d.relevanceScore) return;
      const p = d.relevanceScore.score || 0;
      return { value: Math.round(p * 10), isPositive: p > 0.5 };
    };
  return a.jsxs("div", {
    className: "container mx-auto py-6 space-y-6",
    children: [
      a.jsx("div", {
        className: "flex items-center justify-between",
        children: a.jsxs("div", {
          children: [
            a.jsx("h1", {
              className: "text-3xl font-bold tracking-tight",
              children: i("metrics.title", { defaultValue: "Métricas e KPIs" }),
            }),
            a.jsx("p", {
              className: "text-muted-foreground mt-2",
              children: i("metrics.description", {
                defaultValue:
                  "Visualize os principais indicadores da sua organização",
              }),
            }),
          ],
        }),
      }),
      c &&
        a.jsxs(v, {
          className:
            "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
          children: [
            a.jsx(b, {
              className: "pb-2",
              children: a.jsxs(w, {
                className: "text-lg flex items-center gap-2",
                children: [
                  a.jsx(H, { className: "h-5 w-5" }),
                  i("metrics.maturity_level", {
                    defaultValue: "Nível de Maturidade",
                  }),
                ],
              }),
            }),
            a.jsx(R, {
              children: a.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  a.jsx("div", {
                    className: "text-3xl font-bold text-primary",
                    children: c.level,
                  }),
                  a.jsx("div", {
                    className: "flex-1",
                    children: a.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: c.description,
                    }),
                  }),
                  a.jsx(k, {
                    variant: "outline",
                    className: "text-sm",
                    children: c.label,
                  }),
                ],
              }),
            }),
          ],
        }),
      a.jsx("div", {
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        children:
          s && s.length > 0
            ? s
                .slice(0, 8)
                .map((d, p) =>
                  a.jsx(
                    W,
                    {
                      code: d.code,
                      title: d.name || d.title,
                      value: l(d.value),
                      unit: d.unit,
                      status: m(d),
                      trend: A(d),
                    },
                    d.code || p,
                  ),
                )
            : a.jsx(a.Fragment, {
                children: a.jsx(v, {
                  children: a.jsx(R, {
                    className: "pt-6",
                    children: a.jsxs("div", {
                      className: "text-center space-y-2",
                      children: [
                        a.jsx("div", {
                          className:
                            "mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center",
                          children: a.jsx(G, {
                            className: "h-6 w-6 text-muted-foreground",
                          }),
                        }),
                        a.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: i("metrics.no_data", {
                            defaultValue: "Nenhum KPI encontrado",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
      }),
      a.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-2",
        children: [
          a.jsxs(v, {
            children: [
              a.jsxs(b, {
                children: [
                  a.jsx(w, {
                    children: i("metrics.kpis_relevantes", {
                      defaultValue: "KPIs Relevantes",
                    }),
                  }),
                  a.jsx(L, {
                    children: i("metrics.kpis_relevantes_desc", {
                      defaultValue:
                        "Indicadores com maior relevância para seu setor",
                    }),
                  }),
                ],
              }),
              a.jsx(R, {
                children:
                  s && s.length > 0
                    ? a.jsx("div", {
                        className: "space-y-4",
                        children: s
                          .slice(0, 5)
                          .map((d, p) =>
                            a.jsxs(
                              "div",
                              {
                                className:
                                  "flex items-center justify-between p-3 rounded-lg border",
                                children: [
                                  a.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      a.jsx("p", {
                                        className: "font-medium text-sm",
                                        children: d.name || d.title,
                                      }),
                                      a.jsx("p", {
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: d.code,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    className: "text-right",
                                    children: [
                                      a.jsx("p", {
                                        className: "text-lg font-bold",
                                        children: l(d.value),
                                      }),
                                      d.unit &&
                                        a.jsx("p", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: d.unit,
                                        }),
                                    ],
                                  }),
                                ],
                              },
                              d.code || p,
                            ),
                          ),
                      })
                    : a.jsxs("div", {
                        className: "text-center py-8",
                        children: [
                          a.jsx(Y, {
                            className:
                              "h-12 w-12 text-muted-foreground/50 mx-auto mb-3",
                          }),
                          a.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: i("metrics.upload_data", {
                              defaultValue: "Carregue dados para ver seus KPIs",
                            }),
                          }),
                        ],
                      }),
              }),
            ],
          }),
          a.jsxs(v, {
            children: [
              a.jsxs(b, {
                children: [
                  a.jsx(w, {
                    children: i("metrics.resumo", { defaultValue: "Resumo" }),
                  }),
                  a.jsx(L, {
                    children: i("metrics.resumo_desc", {
                      defaultValue: "Visão geral dos dados disponíveis",
                    }),
                  }),
                ],
              }),
              a.jsx(R, {
                children: a.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    a.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        a.jsx("span", {
                          className: "text-sm font-medium",
                          children: i("metrics.total_kpis", {
                            defaultValue: "Total de KPIs",
                          }),
                        }),
                        a.jsx("span", {
                          className: "text-lg font-bold",
                          children: (s == null ? void 0 : s.length) || 0,
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        a.jsx("span", {
                          className: "text-sm font-medium",
                          children: i("metrics.kpis_positivos", {
                            defaultValue: "KPIs Positivos",
                          }),
                        }),
                        a.jsx("span", {
                          className: "text-lg font-bold text-green-600",
                          children:
                            (s == null
                              ? void 0
                              : s.filter((d) => m(d) === "positive").length) ||
                            0,
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        a.jsx("span", {
                          className: "text-sm font-medium",
                          children: i("metrics.kpisAtenção", {
                            defaultValue: "KPIs Atenção",
                          }),
                        }),
                        a.jsx("span", {
                          className: "text-lg font-bold text-red-600",
                          children:
                            (s == null
                              ? void 0
                              : s.filter((d) => m(d) === "negative").length) ||
                            0,
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      className:
                        "flex items-center justify-between p-3 rounded-lg bg-muted/50",
                      children: [
                        a.jsx("span", {
                          className: "text-sm font-medium",
                          children: i("metrics.kpis_neutros", {
                            defaultValue: "KPIs Neutros",
                          }),
                        }),
                        a.jsx("span", {
                          className: "text-lg font-bold text-yellow-600",
                          children:
                            (s == null
                              ? void 0
                              : s.filter((d) => m(d) === "neutral").length) ||
                            0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { Re as default };
