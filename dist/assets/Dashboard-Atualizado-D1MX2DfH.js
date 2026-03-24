import { b as k, s as L, u as _, j as a, B as n } from "./index-BZzvAVnT.js";
import { u as R } from "./useReports-z4fPyFcR.js";
import { r as v } from "./vendor-BgR6OOld.js";
import { C as c, b as h, c as u, a as i } from "./card-DCmFy9yX.js";
import { B as T } from "./badge-DMGJasfj.js";
import { S as x } from "./skeleton-CjN6GZmr.js";
import { K as S } from "./kpi-card-CWRTA62G.js";
import { T as $, a as P, b as z, c as f } from "./tabs-C6dO4E1n.js";
import { L as d } from "./router-D2JcpG7e.js";
import {
  b as C,
  n as I,
  e as B,
  o as H,
  A as y,
  p as E,
  q as D,
  Z as F,
  d as V,
} from "./utils-C25gojUd.js";
import "./useQuery-fq0IAKu-.js";
import "./mockReports-3cW05Ka2.js";
import "./index-DUaPDS5r.js";
import "./index-CIr2Jy9Y.js";
const U = () => {
    const [t, e] = v.useState(null),
      [N, r] = v.useState(!0),
      [s, j] = v.useState(null),
      { isDemoMode: b } = k();
    return (
      v.useEffect(() => {
        (async () => {
          try {
            if ((r(!0), b)) {
              (e({
                totalReports: 24,
                activeUsers: 12,
                recentActivity: 78,
                completionRate: 85,
                estimatedImpact: "R$45K",
              }),
                r(!1));
              return;
            }
            const { data: p, error: m } = await L.from("reports").select(
              "id, status, created_at",
            );
            if (m) throw m;
            const l = p ? p.length : 0,
              o = p ? p.filter((g) => g.status === "completed").length : 0,
              w = l > 0 ? (o / l) * 100 : 0,
              K = p
                ? p.filter((g) =>
                    g.created_at
                      ? new Date(g.created_at).getTime() >
                        Date.now() - 7 * 24 * 60 * 60 * 1e3
                      : !1,
                  ).length
                : 0;
            e({
              totalReports: l,
              activeUsers: 3,
              recentActivity: Math.round(w),
              completionRate: l,
              estimatedImpact: "R$" + (l * 1.5 || 0).toFixed(1) + "K",
            });
          } catch (p) {
            (console.error("Dashboard summary error:", p),
              j("Failed to fetch dashboard summary"));
          } finally {
            r(!1);
          }
        })();
      }, [b]),
      { data: t, loading: N, error: s }
    );
  },
  da = () => {
    const { t, i18n: e } = _(),
      { data: N = [], isLoading: r } = R(),
      { data: s, loading: j } = U(),
      b = r || j,
      A = N.slice(0, 4),
      p = [
        {
          title: t("dashboard.stats.active_priorities", {
            defaultValue: "Prioridades Ativas",
          }),
          value: (s == null ? void 0 : s.activeUsers.toString()) || "0",
          icon: C,
          trend: {
            value: 8,
            isPositive: !0,
            label: t("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "info",
        },
        {
          title: t("dashboard.stats.execution_rate", {
            defaultValue: "Taxa de Execução",
          }),
          value: `${(s == null ? void 0 : s.recentActivity) || 0}%`,
          icon: I,
          trend: {
            value: 12,
            isPositive: !0,
            label: t("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "success",
        },
        {
          title: t("dashboard.stats.created_reports", {
            defaultValue: "Relatórios Criados",
          }),
          value: (s == null ? void 0 : s.completionRate.toString()) || "0",
          icon: B,
          trend: {
            value: 15,
            isPositive: !0,
            label: t("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "info",
        },
        {
          title: t("dashboard.stats.estimated_impact", {
            defaultValue: "Impacto Estimado",
          }),
          value: (s == null ? void 0 : s.estimatedImpact) || "R$0K",
          icon: H,
          trend: {
            value: 22,
            isPositive: !0,
            label: t("dashboard.stats.vs_last_month", {
              defaultValue: "vs. mês passado",
            }),
          },
          variant: "success",
        },
      ],
      m = (o) => {
        switch (o) {
          case "completed":
            return "bg-green-100 text-green-800";
          case "shared":
            return "bg-blue-100 text-blue-800";
          default:
            return "bg-yellow-100 text-yellow-800";
        }
      },
      l = (o) => {
        switch (o) {
          case "completed":
            return t("dashboard.status.completed");
          case "shared":
            return t("dashboard.status.shared");
          default:
            return t("dashboard.status.draft");
        }
      };
    return b
      ? a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:122:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Dashboard-Atualizado.tsx",
          "data-component-line": "122",
          "data-component-file": "Dashboard-Atualizado.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
          className: "container-fluid space-y-8 py-6",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:123:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\Dashboard-Atualizado.tsx",
              "data-component-line": "123",
              "data-component-file": "Dashboard-Atualizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
              className: "flex items-center justify-between",
              children: [
                a.jsx(x, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:124:10",
                  "data-lov-name": "Skeleton",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "124",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "Skeleton",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-10%20w-64%22%7D",
                  className: "h-10 w-64",
                }),
                a.jsx(x, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:125:10",
                  "data-lov-name": "Skeleton",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "125",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "Skeleton",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-11%20w-40%22%7D",
                  className: "h-11 w-40",
                }),
              ],
            }),
            a.jsx("div", {
              "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:128:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\Dashboard-Atualizado.tsx",
              "data-component-line": "128",
              "data-component-file": "Dashboard-Atualizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: [1, 2, 3, 4].map((o) =>
                a.jsx(
                  x,
                  {
                    "data-lov-id":
                      "src\\pages\\app\\Dashboard-Atualizado.tsx:130:12",
                    "data-lov-name": "Skeleton",
                    "data-component-path":
                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                    "data-component-line": "130",
                    "data-component-file": "Dashboard-Atualizado.tsx",
                    "data-component-name": "Skeleton",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-28%20rounded-xl%22%7D",
                    className: "h-28 rounded-xl",
                  },
                  o,
                ),
              ),
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:134:8",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\Dashboard-Atualizado.tsx",
              "data-component-line": "134",
              "data-component-file": "Dashboard-Atualizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-4%22%7D",
              className: "space-y-4",
              children: [
                a.jsx(x, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:135:10",
                  "data-lov-name": "Skeleton",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "135",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "Skeleton",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-6%20w-48%22%7D",
                  className: "h-6 w-48",
                }),
                a.jsx("div", {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:136:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "136",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: [1, 2, 3, 4].map((o) =>
                    a.jsx(
                      x,
                      {
                        "data-lov-id":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx:138:14",
                        "data-lov-name": "Skeleton",
                        "data-component-path":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                        "data-component-line": "138",
                        "data-component-file": "Dashboard-Atualizado.tsx",
                        "data-component-name": "Skeleton",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-24%20rounded-xl%22%7D",
                        className: "h-24 rounded-xl",
                      },
                      o,
                    ),
                  ),
                }),
              ],
            }),
          ],
        })
      : a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:147:4",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Dashboard-Atualizado.tsx",
          "data-component-line": "147",
          "data-component-file": "Dashboard-Atualizado.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22container-fluid%20space-y-8%20py-6%22%7D",
          className: "container-fluid space-y-8 py-6",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:149:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\Dashboard-Atualizado.tsx",
              "data-component-line": "149",
              "data-component-file": "Dashboard-Atualizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D",
              className:
                "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
              children: [
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:150:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "150",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "div",
                  "data-component-content": "%7B%7D",
                  children: [
                    a.jsx("h1", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:151:10",
                      "data-lov-name": "h1",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "151",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "h1",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
                      className: "text-3xl font-bold text-foreground",
                      children: t("dashboard.title"),
                    }),
                    a.jsx("p", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:154:10",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "154",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                      className: "text-muted-foreground",
                      children: t("dashboard.subtitle"),
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:157:8",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "157",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20gap-3%22%7D",
                  className: "flex gap-3",
                  children: [
                    a.jsx(n, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:158:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "158",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "outline",
                      size: "sm",
                      asChild: !0,
                      children: a.jsxs(d, {
                        "data-lov-id":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx:159:12",
                        "data-lov-name": "Link",
                        "data-component-path":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                        "data-component-line": "159",
                        "data-component-file": "Dashboard-Atualizado.tsx",
                        "data-component-name": "Link",
                        "data-component-content": "%7B%7D",
                        to: `/${e.language}/app/metrics`,
                        children: [
                          a.jsx(y, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:160:14",
                            "data-lov-name": "Activity",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "160",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Activity",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          t("nav.metrics", { defaultValue: "Indicadores" }),
                        ],
                      }),
                    }),
                    a.jsx(n, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:165:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "165",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      size: "sm",
                      asChild: !0,
                      children: a.jsxs(d, {
                        "data-lov-id":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx:166:12",
                        "data-lov-name": "Link",
                        "data-component-path":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                        "data-component-line": "166",
                        "data-component-file": "Dashboard-Atualizado.tsx",
                        "data-component-name": "Link",
                        "data-component-content": "%7B%7D",
                        to: `/${e.language}/app/reports/new`,
                        children: [
                          a.jsx(E, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:167:14",
                            "data-lov-name": "Plus",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "167",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Plus",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                            className: "w-4 h-4 mr-2",
                          }),
                          t("dashboard.new_report", {
                            defaultValue: "Novo Relatório",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("div", {
              "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:175:6",
              "data-lov-name": "div",
              "data-component-path":
                "src\\pages\\app\\Dashboard-Atualizado.tsx",
              "data-component-line": "175",
              "data-component-file": "Dashboard-Atualizado.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-2%20lg%3Agrid-cols-4%20gap-4%22%7D",
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
              children: p.map((o, w) =>
                a.jsx(
                  S,
                  {
                    "data-lov-id":
                      "src\\pages\\app\\Dashboard-Atualizado.tsx:177:10",
                    "data-lov-name": "KPICard",
                    "data-component-path":
                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                    "data-component-line": "177",
                    "data-component-file": "Dashboard-Atualizado.tsx",
                    "data-component-name": "KPICard",
                    "data-component-content": "%7B%7D",
                    title: o.title,
                    value: o.value,
                    icon: o.icon,
                    trend: o.trend,
                    variant: o.variant,
                  },
                  w,
                ),
              ),
            }),
            a.jsxs($, {
              "data-lov-id": "src\\pages\\app\\Dashboard-Atualizado.tsx:189:6",
              "data-lov-name": "Tabs",
              "data-component-path":
                "src\\pages\\app\\Dashboard-Atualizado.tsx",
              "data-component-line": "189",
              "data-component-file": "Dashboard-Atualizado.tsx",
              "data-component-name": "Tabs",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              defaultValue: "overview",
              className: "space-y-6",
              children: [
                a.jsxs(P, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:190:8",
                  "data-lov-name": "TabsList",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "190",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "TabsList",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20w-full%20grid-cols-4%22%7D",
                  className: "grid w-full grid-cols-4",
                  children: [
                    a.jsx(z, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:191:10",
                      "data-lov-name": "TabsTrigger",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "191",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "TabsTrigger",
                      "data-component-content": "%7B%7D",
                      value: "overview",
                      children: t("dashboard.tabs.overview", {
                        defaultValue: "Visão Geral",
                      }),
                    }),
                    a.jsx(z, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:194:10",
                      "data-lov-name": "TabsTrigger",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "194",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "TabsTrigger",
                      "data-component-content": "%7B%7D",
                      value: "reports",
                      children: t("dashboard.tabs.reports", {
                        defaultValue: "Relatórios",
                      }),
                    }),
                    a.jsx(z, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:197:10",
                      "data-lov-name": "TabsTrigger",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "197",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "TabsTrigger",
                      "data-component-content": "%7B%7D",
                      value: "priorities",
                      children: t("dashboard.tabs.priorities", {
                        defaultValue: "Prioridades",
                      }),
                    }),
                    a.jsx(z, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:200:10",
                      "data-lov-name": "TabsTrigger",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "200",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "TabsTrigger",
                      "data-component-content": "%7B%7D",
                      value: "analytics",
                      children: t("dashboard.tabs.analytics", {
                        defaultValue: "Analytics",
                      }),
                    }),
                  ],
                }),
                a.jsx(f, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:206:8",
                  "data-lov-name": "TabsContent",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "206",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "TabsContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  value: "overview",
                  className: "space-y-6",
                  children: a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\Dashboard-Atualizado.tsx:207:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                    "data-component-line": "207",
                    "data-component-file": "Dashboard-Atualizado.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                      a.jsxs(c, {
                        "data-lov-id":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx:209:12",
                        "data-lov-name": "Card",
                        "data-component-path":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                        "data-component-line": "209",
                        "data-component-file": "Dashboard-Atualizado.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(h, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:210:14",
                            "data-lov-name": "CardHeader",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "210",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "CardHeader",
                            "data-component-content": "%7B%7D",
                            children: a.jsxs(u, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:211:16",
                              "data-lov-name": "CardTitle",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "211",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "CardTitle",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                              className: "flex items-center gap-2",
                              children: [
                                a.jsx(B, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:212:18",
                                  "data-lov-name": "FileText",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "212",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "FileText",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                  className: "w-5 h-5",
                                }),
                                t("dashboard.recent_reports", {
                                  defaultValue: "Relatórios Recentes",
                                }),
                              ],
                            }),
                          }),
                          a.jsx(i, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:218:14",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "218",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-4%22%7D",
                            className: "space-y-4",
                            children:
                              A.length > 0
                                ? A.map((o) =>
                                    a.jsxs(
                                      "div",
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:221:20",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "221",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-3%20border%20rounded-lg%22%7D",
                                        className:
                                          "flex items-center justify-between p-3 border rounded-lg",
                                        children: [
                                          a.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\Dashboard-Atualizado.tsx:225:22",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                            "data-component-line": "225",
                                            "data-component-file":
                                              "Dashboard-Atualizado.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex-1%22%7D",
                                            className: "flex-1",
                                            children: [
                                              a.jsx("div", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:226:24",
                                                "data-lov-name": "div",
                                                "data-component-path":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                                "data-component-line": "226",
                                                "data-component-file":
                                                  "Dashboard-Atualizado.tsx",
                                                "data-component-name": "div",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22font-medium%22%7D",
                                                className: "font-medium",
                                                children: o.title,
                                              }),
                                              a.jsx("div", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:227:24",
                                                "data-lov-name": "div",
                                                "data-component-path":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                                "data-component-line": "227",
                                                "data-component-file":
                                                  "Dashboard-Atualizado.tsx",
                                                "data-component-name": "div",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                                className:
                                                  "text-sm text-muted-foreground",
                                                children: new Date(
                                                  o.createdAt || "",
                                                ).toLocaleDateString(
                                                  e.language,
                                                ),
                                              }),
                                            ],
                                          }),
                                          a.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\Dashboard-Atualizado.tsx:233:22",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                            "data-component-line": "233",
                                            "data-component-file":
                                              "Dashboard-Atualizado.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              a.jsx(T, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:234:24",
                                                "data-lov-name": "Badge",
                                                "data-component-path":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                                "data-component-line": "234",
                                                "data-component-file":
                                                  "Dashboard-Atualizado.tsx",
                                                "data-component-name": "Badge",
                                                "data-component-content":
                                                  "%7B%7D",
                                                className: m(o.status),
                                                children: l(o.status),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:237:24",
                                                "data-lov-name": "Button",
                                                "data-component-path":
                                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                                "data-component-line": "237",
                                                "data-component-file":
                                                  "Dashboard-Atualizado.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content":
                                                  "%7B%7D",
                                                variant: "ghost",
                                                size: "sm",
                                                asChild: !0,
                                                children: a.jsx(d, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:238:26",
                                                  "data-lov-name": "Link",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                                  "data-component-line": "238",
                                                  "data-component-file":
                                                    "Dashboard-Atualizado.tsx",
                                                  "data-component-name": "Link",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  to: `/${e.language}/app/reports/${o.id}`,
                                                  children: a.jsx(D, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:241:28",
                                                    "data-lov-name":
                                                      "ArrowRight",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                                    "data-component-line":
                                                      "241",
                                                    "data-component-file":
                                                      "Dashboard-Atualizado.tsx",
                                                    "data-component-name":
                                                      "ArrowRight",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      o.id,
                                    ),
                                  )
                                : a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:248:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "248",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-center%20py-8%20text-muted-foreground%22%7D",
                                    className:
                                      "text-center py-8 text-muted-foreground",
                                    children: [
                                      a.jsx(B, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:249:20",
                                        "data-lov-name": "FileText",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "249",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "FileText",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-12%20h-12%20mx-auto%20mb-4%20opacity-50%22%7D",
                                        className:
                                          "w-12 h-12 mx-auto mb-4 opacity-50",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:250:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "250",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "p",
                                        "data-component-content": "%7B%7D",
                                        children: t("dashboard.no_reports", {
                                          defaultValue:
                                            "Nenhum relatório encontrado",
                                        }),
                                      }),
                                      a.jsx(n, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:255:20",
                                        "data-lov-name": "Button",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "255",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22mt-4%22%7D",
                                        className: "mt-4",
                                        size: "sm",
                                        asChild: !0,
                                        children: a.jsx(d, {
                                          "data-lov-id":
                                            "src\\pages\\app\\Dashboard-Atualizado.tsx:256:22",
                                          "data-lov-name": "Link",
                                          "data-component-path":
                                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                          "data-component-line": "256",
                                          "data-component-file":
                                            "Dashboard-Atualizado.tsx",
                                          "data-component-name": "Link",
                                          "data-component-content": "%7B%7D",
                                          to: `/${e.language}/app/reports/new`,
                                          children: t(
                                            "dashboard.create_first",
                                            {
                                              defaultValue:
                                                "Criar primeiro relatório",
                                            },
                                          ),
                                        }),
                                      }),
                                    ],
                                  }),
                          }),
                        ],
                      }),
                      a.jsxs(c, {
                        "data-lov-id":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx:268:12",
                        "data-lov-name": "Card",
                        "data-component-path":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                        "data-component-line": "268",
                        "data-component-file": "Dashboard-Atualizado.tsx",
                        "data-component-name": "Card",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(h, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:269:14",
                            "data-lov-name": "CardHeader",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "269",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "CardHeader",
                            "data-component-content": "%7B%7D",
                            children: a.jsxs(u, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:270:16",
                              "data-lov-name": "CardTitle",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "270",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "CardTitle",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                              className: "flex items-center gap-2",
                              children: [
                                a.jsx(F, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:271:18",
                                  "data-lov-name": "Zap",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "271",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Zap",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                  className: "w-5 h-5",
                                }),
                                t("dashboard.quick_actions", {
                                  defaultValue: "Ações Rápidas",
                                }),
                              ],
                            }),
                          }),
                          a.jsxs(i, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:277:14",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "277",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-3%22%7D",
                            className: "space-y-3",
                            children: [
                              a.jsx(n, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:278:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "278",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: a.jsxs(d, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:283:18",
                                  "data-lov-name": "Link",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "283",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Link",
                                  "data-component-content": "%7B%7D",
                                  to: `/${e.language}/app/reports/new`,
                                  children: [
                                    a.jsx(B, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx:284:20",
                                      "data-lov-name": "FileText",
                                      "data-component-path":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                      "data-component-line": "284",
                                      "data-component-file":
                                        "Dashboard-Atualizado.tsx",
                                      "data-component-name": "FileText",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    t("dashboard.new_report", {
                                      defaultValue: "Novo Relatório",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(n, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:291:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "291",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: a.jsxs(d, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:296:18",
                                  "data-lov-name": "Link",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "296",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Link",
                                  "data-component-content": "%7B%7D",
                                  to: `/${e.language}/app/prioridades`,
                                  children: [
                                    a.jsx(C, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx:297:20",
                                      "data-lov-name": "Target",
                                      "data-component-path":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                      "data-component-line": "297",
                                      "data-component-file":
                                        "Dashboard-Atualizado.tsx",
                                      "data-component-name": "Target",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    t("dashboard.view_priorities", {
                                      defaultValue: "Ver Prioridades",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(n, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:304:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "304",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: a.jsxs(d, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:309:18",
                                  "data-lov-name": "Link",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "309",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Link",
                                  "data-component-content": "%7B%7D",
                                  to: `/${e.language}/app/metrics`,
                                  children: [
                                    a.jsx(y, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx:310:20",
                                      "data-lov-name": "Activity",
                                      "data-component-path":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                      "data-component-line": "310",
                                      "data-component-file":
                                        "Dashboard-Atualizado.tsx",
                                      "data-component-name": "Activity",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    t("nav.metrics", {
                                      defaultValue: "Painel de Indicadores",
                                    }),
                                  ],
                                }),
                              }),
                              a.jsx(n, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:317:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "317",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                variant: "outline",
                                className: "w-full justify-start",
                                asChild: !0,
                                children: a.jsxs(d, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:322:18",
                                  "data-lov-name": "Link",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "322",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Link",
                                  "data-component-content": "%7B%7D",
                                  to: `/${e.language}/app/consolidated`,
                                  children: [
                                    a.jsx(V, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx:323:20",
                                      "data-lov-name": "TrendingUp",
                                      "data-component-path":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                      "data-component-line": "323",
                                      "data-component-file":
                                        "Dashboard-Atualizado.tsx",
                                      "data-component-name": "TrendingUp",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                      className: "w-4 h-4 mr-2",
                                    }),
                                    t("nav.consolidated", {
                                      defaultValue: "Dashboard Consolidado",
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
                }),
                a.jsxs(f, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:335:8",
                  "data-lov-name": "TabsContent",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "335",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "TabsContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  value: "reports",
                  className: "space-y-6",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:336:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "336",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                      className: "flex items-center justify-between",
                      children: [
                        a.jsx("h2", {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:337:12",
                          "data-lov-name": "h2",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "337",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "h2",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                          className: "text-2xl font-bold",
                          children: t("dashboard.all_reports", {
                            defaultValue: "Todos os Relatórios",
                          }),
                        }),
                        a.jsx(n, {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:342:12",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "342",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "Button",
                          "data-component-content": "%7B%7D",
                          asChild: !0,
                          children: a.jsxs(d, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:343:14",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "343",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: `/${e.language}/app/reports`,
                            children: [
                              t("dashboard.view_all", {
                                defaultValue: "Ver todos",
                              }),
                              a.jsx(D, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:345:16",
                                "data-lov-name": "ArrowRight",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "345",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "ArrowRight",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20ml-2%22%7D",
                                className: "w-4 h-4 ml-2",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a.jsx("div", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:350:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "350",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                      children: A.map((o) =>
                        a.jsxs(
                          c,
                          {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:352:14",
                            "data-lov-name": "Card",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "352",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Card",
                            "data-component-content":
                              "%7B%22className%22%3A%22card-hover%22%7D",
                            className: "card-hover",
                            children: [
                              a.jsxs(h, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:353:16",
                                "data-lov-name": "CardHeader",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "353",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "CardHeader",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx(u, {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:354:18",
                                    "data-lov-name": "CardTitle",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "354",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "CardTitle",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-lg%22%7D",
                                    className: "text-lg",
                                    children: o.title,
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:355:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "355",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                    className: "flex items-center gap-2",
                                    children: [
                                      a.jsx(T, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:356:20",
                                        "data-lov-name": "Badge",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "356",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "Badge",
                                        "data-component-content": "%7B%7D",
                                        className: m(o.status),
                                        children: l(o.status),
                                      }),
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:359:20",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "359",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: new Date(
                                          o.createdAt || "",
                                        ).toLocaleDateString(e.language),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs(i, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:366:16",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "366",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:367:18",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "367",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20mb-4%20line-clamp-2%22%7D",
                                    className:
                                      "text-sm text-muted-foreground mb-4 line-clamp-2",
                                    children:
                                      o.description ||
                                      t("dashboard.no_description", {
                                        defaultValue: "Sem descrição",
                                      }),
                                  }),
                                  a.jsx(n, {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:373:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "373",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-full%22%7D",
                                    variant: "outline",
                                    size: "sm",
                                    className: "w-full",
                                    asChild: !0,
                                    children: a.jsx(d, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx:379:20",
                                      "data-lov-name": "Link",
                                      "data-component-path":
                                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                      "data-component-line": "379",
                                      "data-component-file":
                                        "Dashboard-Atualizado.tsx",
                                      "data-component-name": "Link",
                                      "data-component-content": "%7B%7D",
                                      to: `/${e.language}/app/reports/${o.id}`,
                                      children: t("dashboard.view_details", {
                                        defaultValue: "Ver detalhes",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          o.id,
                        ),
                      ),
                    }),
                  ],
                }),
                a.jsxs(f, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:392:8",
                  "data-lov-name": "TabsContent",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "392",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "TabsContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  value: "priorities",
                  className: "space-y-6",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:393:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "393",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                      className: "flex items-center justify-between",
                      children: [
                        a.jsx("h2", {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:394:12",
                          "data-lov-name": "h2",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "394",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "h2",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                          className: "text-2xl font-bold",
                          children: t("dashboard.strategic_priorities", {
                            defaultValue: "Prioridades Estratégicas",
                          }),
                        }),
                        a.jsx(n, {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:399:12",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "399",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "Button",
                          "data-component-content": "%7B%7D",
                          asChild: !0,
                          children: a.jsxs(d, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:400:14",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "400",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: `/${e.language}/app/prioridades`,
                            children: [
                              t("dashboard.manage", {
                                defaultValue: "Gerenciar",
                              }),
                              a.jsx(D, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:402:16",
                                "data-lov-name": "ArrowRight",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "402",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "ArrowRight",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20ml-2%22%7D",
                                className: "w-4 h-4 ml-2",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a.jsx(c, {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:407:10",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "407",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "Card",
                      "data-component-content": "%7B%7D",
                      children: a.jsxs(i, {
                        "data-lov-id":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx:408:12",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                        "data-component-line": "408",
                        "data-component-file": "Dashboard-Atualizado.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-center%20py-12%22%7D",
                        className: "text-center py-12",
                        children: [
                          a.jsx(C, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:409:14",
                            "data-lov-name": "Target",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "409",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Target",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-16%20h-16%20mx-auto%20mb-4%20text-muted-foreground%22%7D",
                            className:
                              "w-16 h-16 mx-auto mb-4 text-muted-foreground",
                          }),
                          a.jsx("h3", {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:410:14",
                            "data-lov-name": "h3",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "410",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "h3",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-xl%20font-semibold%20mb-2%22%7D",
                            className: "text-xl font-semibold mb-2",
                            children: t("dashboard.strategic_priorities", {
                              defaultValue: "Prioridades Estratégicas",
                            }),
                          }),
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:415:14",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "415",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-muted-foreground%20mb-4%22%7D",
                            className: "text-muted-foreground mb-4",
                            children: t("dashboard.priorities_desc", {
                              defaultValue:
                                "Gerencie e acompanhe as prioridades estratégicas da organização",
                            }),
                          }),
                          a.jsx(n, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:421:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "421",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%7D",
                            asChild: !0,
                            children: a.jsxs(d, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:422:16",
                              "data-lov-name": "Link",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "422",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "Link",
                              "data-component-content": "%7B%7D",
                              to: `/${e.language}/app/prioridades`,
                              children: [
                                t("dashboard.view_priorities", {
                                  defaultValue: "Ver prioridades",
                                }),
                                a.jsx(D, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:426:18",
                                  "data-lov-name": "ArrowRight",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "426",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "ArrowRight",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-4%20h-4%20ml-2%22%7D",
                                  className: "w-4 h-4 ml-2",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                a.jsxs(f, {
                  "data-lov-id":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx:434:8",
                  "data-lov-name": "TabsContent",
                  "data-component-path":
                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                  "data-component-line": "434",
                  "data-component-file": "Dashboard-Atualizado.tsx",
                  "data-component-name": "TabsContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  value: "analytics",
                  className: "space-y-6",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:435:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "435",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                      className: "flex items-center justify-between",
                      children: [
                        a.jsx("h2", {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:436:12",
                          "data-lov-name": "h2",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "436",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "h2",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-2xl%20font-bold%22%7D",
                          className: "text-2xl font-bold",
                          children: t("dashboard.analytics_insights", {
                            defaultValue: "Analytics e Insights",
                          }),
                        }),
                        a.jsx(n, {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:441:12",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "441",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "Button",
                          "data-component-content": "%7B%7D",
                          asChild: !0,
                          children: a.jsxs(d, {
                            "data-lov-id":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx:442:14",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\pages\\app\\Dashboard-Atualizado.tsx",
                            "data-component-line": "442",
                            "data-component-file": "Dashboard-Atualizado.tsx",
                            "data-component-name": "Link",
                            "data-component-content": "%7B%7D",
                            to: `/${e.language}/app/metrics`,
                            children: [
                              t("dashboard.view_analytics", {
                                defaultValue: "Ver analytics",
                              }),
                              a.jsx(D, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:446:16",
                                "data-lov-name": "ArrowRight",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "446",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "ArrowRight",
                                "data-component-content":
                                  "%7B%22className%22%3A%22w-4%20h-4%20ml-2%22%7D",
                                className: "w-4 h-4 ml-2",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx:451:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\Dashboard-Atualizado.tsx",
                      "data-component-line": "451",
                      "data-component-file": "Dashboard-Atualizado.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-2%20gap-6%22%7D",
                      className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                      children: [
                        a.jsxs(c, {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:452:12",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "452",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(h, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:453:14",
                              "data-lov-name": "CardHeader",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "453",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "CardHeader",
                              "data-component-content": "%7B%7D",
                              children: a.jsx(u, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:454:16",
                                "data-lov-name": "CardTitle",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "454",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "CardTitle",
                                "data-component-content": "%7B%7D",
                                children: t("dashboard.performance_metrics", {
                                  defaultValue: "Indicadores de Performance",
                                }),
                              }),
                            }),
                            a.jsxs(i, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:460:14",
                              "data-lov-name": "CardContent",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "460",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "CardContent",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:461:16",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "461",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-muted-foreground%20mb-4%22%7D",
                                  className: "text-muted-foreground mb-4",
                                  children: t("dashboard.metrics_desc", {
                                    defaultValue:
                                      "Acompanhe métricas detalhadas por domínios",
                                  }),
                                }),
                                a.jsx(n, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:466:16",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "466",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-full%22%7D",
                                  variant: "outline",
                                  className: "w-full",
                                  asChild: !0,
                                  children: a.jsxs(d, {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:467:18",
                                    "data-lov-name": "Link",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "467",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "Link",
                                    "data-component-content": "%7B%7D",
                                    to: `/${e.language}/app/metrics`,
                                    children: [
                                      a.jsx(y, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:468:20",
                                        "data-lov-name": "Activity",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "468",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "Activity",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      t("nav.metrics", {
                                        defaultValue: "Painel de Indicadores",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        a.jsxs(c, {
                          "data-lov-id":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx:477:12",
                          "data-lov-name": "Card",
                          "data-component-path":
                            "src\\pages\\app\\Dashboard-Atualizado.tsx",
                          "data-component-line": "477",
                          "data-component-file": "Dashboard-Atualizado.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(h, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:478:14",
                              "data-lov-name": "CardHeader",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "478",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "CardHeader",
                              "data-component-content": "%7B%7D",
                              children: a.jsx(u, {
                                "data-lov-id":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx:479:16",
                                "data-lov-name": "CardTitle",
                                "data-component-path":
                                  "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                "data-component-line": "479",
                                "data-component-file":
                                  "Dashboard-Atualizado.tsx",
                                "data-component-name": "CardTitle",
                                "data-component-content": "%7B%7D",
                                children: t("nav.consolidated", {
                                  defaultValue: "Dashboard Consolidado",
                                }),
                              }),
                            }),
                            a.jsxs(i, {
                              "data-lov-id":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx:485:14",
                              "data-lov-name": "CardContent",
                              "data-component-path":
                                "src\\pages\\app\\Dashboard-Atualizado.tsx",
                              "data-component-line": "485",
                              "data-component-file": "Dashboard-Atualizado.tsx",
                              "data-component-name": "CardContent",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:486:16",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "486",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-muted-foreground%20mb-4%22%7D",
                                  className: "text-muted-foreground mb-4",
                                  children: t("dashboard.consolidated_desc", {
                                    defaultValue:
                                      "Visão unificada de todos os indicadores estratégicos",
                                  }),
                                }),
                                a.jsx(n, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx:492:16",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                  "data-component-line": "492",
                                  "data-component-file":
                                    "Dashboard-Atualizado.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22w-full%22%7D",
                                  variant: "outline",
                                  className: "w-full",
                                  asChild: !0,
                                  children: a.jsxs(d, {
                                    "data-lov-id":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx:493:18",
                                    "data-lov-name": "Link",
                                    "data-component-path":
                                      "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                    "data-component-line": "493",
                                    "data-component-file":
                                      "Dashboard-Atualizado.tsx",
                                    "data-component-name": "Link",
                                    "data-component-content": "%7B%7D",
                                    to: `/${e.language}/app/consolidated`,
                                    children: [
                                      a.jsx(V, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx:494:20",
                                        "data-lov-name": "TrendingUp",
                                        "data-component-path":
                                          "src\\pages\\app\\Dashboard-Atualizado.tsx",
                                        "data-component-line": "494",
                                        "data-component-file":
                                          "Dashboard-Atualizado.tsx",
                                        "data-component-name": "TrendingUp",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                        className: "w-4 h-4 mr-2",
                                      }),
                                      t("nav.consolidated", {
                                        defaultValue: "Dashboard Consolidado",
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
                  ],
                }),
              ],
            }),
          ],
        });
  };
export { da as default };
