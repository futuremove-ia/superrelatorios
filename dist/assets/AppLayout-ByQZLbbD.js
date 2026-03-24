import { u as h, a as f, j as a, B as g, b as R } from "./index-BZzvAVnT.js";
import { r as _, b as O } from "./vendor-BgR6OOld.js";
import { u as M, L as x, O as F } from "./router-D2JcpG7e.js";
import { I as $ } from "./input-BnDZujQi.js";
import { S as T, b as G } from "./sheet-BaoXq4Bv.js";
import {
  D as P,
  a as U,
  b as E,
  c as A,
  d as z,
} from "./dropdown-menu-DR3vwdOX.js";
import { A as H, b as W } from "./avatar-BJFpRB7u.js";
import { B as q } from "./BrandName-3XvNqLPU.js";
import { L as J } from "./LogoIcon-DLwUl9vD.js";
import {
  av as L,
  f as y,
  I as b,
  j as B,
  d as D,
  b as N,
  n as w,
  e as j,
  a4 as S,
  G as K,
  C as Q,
  au as X,
  a7 as Y,
  T as Z,
  O as aa,
  q as ta,
  M as na,
  s as oa,
  ad as ea,
  a9 as ca,
  c as C,
  aw as sa,
} from "./utils-C25gojUd.js";
import "./index-lGW99eWD.js";
import "./index-DaXQxPyL.js";
import "./index-CIr2Jy9Y.js";
import "./index-DUaPDS5r.js";
const I = ({ className: e = "", isMobile: m = !1 }) => {
    const t = M(),
      { t: o } = h(),
      { navigateLocalized: s, currentLanguage: p } = f(),
      i = {
        "pt-BR": [
          {
            name: o("nav.overview", { defaultValue: "Visão Geral" }),
            href: "/pt-BR/app",
            icon: L,
          },
          {
            name: o("nav.metrics", { defaultValue: "Indicadores" }),
            href: "/pt-BR/app/metricas",
            icon: y,
          },
          {
            name: o("nav.decision_panel", {
              defaultValue: "Painel de Decisão",
            }),
            href: "/pt-BR/app/painel-decisao",
            icon: b,
          },
          {
            name: o("nav.analytics", { defaultValue: "Analytics" }),
            href: "/pt-BR/app/analytics",
            icon: B,
          },
          {
            name: o("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/pt-BR/app/consolidado",
            icon: D,
          },
          {
            name: o("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/pt-BR/app/prioridades",
            icon: N,
          },
          {
            name: o("nav.action_plan", { defaultValue: "Plano de Ação" }),
            href: "/pt-BR/app/plano-acao",
            icon: w,
          },
          {
            name: o("nav.reports", { defaultValue: "Relatórios" }),
            href: "/pt-BR/app/relatorios",
            icon: j,
          },
          {
            name: o("nav.data", { defaultValue: "Meus Dados" }),
            href: "/pt-BR/app/dados",
            icon: S,
          },
        ],
        "en-US": [
          {
            name: o("nav.overview", { defaultValue: "Overview" }),
            href: "/en-US/app",
            icon: L,
          },
          {
            name: o("nav.metrics", { defaultValue: "Metrics" }),
            href: "/en-US/app/metrics",
            icon: y,
          },
          {
            name: o("nav.decision_panel", { defaultValue: "Decision Panel" }),
            href: "/en-US/app/decision-panel",
            icon: b,
          },
          {
            name: o("nav.analytics", { defaultValue: "Analytics" }),
            href: "/en-US/app/analytics",
            icon: B,
          },
          {
            name: o("nav.consolidated", { defaultValue: "Consolidated" }),
            href: "/en-US/app/consolidated",
            icon: D,
          },
          {
            name: o("nav.priorities", { defaultValue: "Priorities" }),
            href: "/en-US/app/priorities",
            icon: N,
          },
          {
            name: o("nav.action_plan", { defaultValue: "Action Plan" }),
            href: "/en-US/app/action-plan",
            icon: w,
          },
          {
            name: o("nav.reports", { defaultValue: "Reports" }),
            href: "/en-US/app/reports",
            icon: j,
          },
          {
            name: o("nav.data", { defaultValue: "My Data" }),
            href: "/en-US/app/folders",
            icon: S,
          },
        ],
        "es-ES": [
          {
            name: o("nav.overview", { defaultValue: "Visión General" }),
            href: "/es-ES/app",
            icon: L,
          },
          {
            name: o("nav.metrics", { defaultValue: "Métricas" }),
            href: "/es-ES/app/metricas",
            icon: y,
          },
          {
            name: o("nav.decision_panel", {
              defaultValue: "Panel de Decisión",
            }),
            href: "/es-ES/app/panel-decision",
            icon: b,
          },
          {
            name: o("nav.analytics", { defaultValue: "Analytics" }),
            href: "/es-ES/app/analytics",
            icon: B,
          },
          {
            name: o("nav.consolidated", { defaultValue: "Consolidado" }),
            href: "/es-ES/app/consolidado",
            icon: D,
          },
          {
            name: o("nav.priorities", { defaultValue: "Prioridades" }),
            href: "/es-ES/app/prioridades",
            icon: N,
          },
          {
            name: o("nav.action_plan", { defaultValue: "Plan de Acción" }),
            href: "/es-ES/app/plan-accion",
            icon: w,
          },
          {
            name: o("nav.reports", { defaultValue: "Informes" }),
            href: "/es-ES/app/informes",
            icon: j,
          },
          {
            name: o("nav.data", { defaultValue: "Mis Datos" }),
            href: "/es-ES/app/carpetas",
            icon: S,
          },
        ],
      },
      l = i[p] || i["pt-BR"],
      d = (n) =>
        n.endsWith("/app")
          ? t.pathname === n || t.pathname.startsWith(n + "/")
          : t.pathname === n,
      u = (n, c) => {
        (n.preventDefault(), s(c));
      };
    return m
      ? a.jsx("nav", {
          "data-lov-id":
            "src\\components\\navigation\\LocalizedNavigation.tsx:87:6",
          "data-lov-name": "nav",
          "data-component-path":
            "src\\components\\navigation\\LocalizedNavigation.tsx",
          "data-component-line": "87",
          "data-component-file": "LocalizedNavigation.tsx",
          "data-component-name": "nav",
          "data-component-content": "%7B%7D",
          className: `grid grid-cols-5 gap-1 p-2 ${e}`,
          children: l.slice(0, 5).map((n) => {
            const c = n.icon,
              r = d(n.href);
            return a.jsxs(
              x,
              {
                "data-lov-id":
                  "src\\components\\navigation\\LocalizedNavigation.tsx:92:12",
                "data-lov-name": "Link",
                "data-component-path":
                  "src\\components\\navigation\\LocalizedNavigation.tsx",
                "data-component-line": "92",
                "data-component-file": "LocalizedNavigation.tsx",
                "data-component-name": "Link",
                "data-component-content": "%7B%7D",
                to: n.href,
                onClick: (v) => u(v, n.href),
                className: `flex flex-col items-center justify-center p-2 rounded-lg transition-colors ${r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(c, {
                    "data-lov-id":
                      "src\\components\\navigation\\LocalizedNavigation.tsx:102:14",
                    "data-lov-name": "Icon",
                    "data-component-path":
                      "src\\components\\navigation\\LocalizedNavigation.tsx",
                    "data-component-line": "102",
                    "data-component-file": "LocalizedNavigation.tsx",
                    "data-component-name": "Icon",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-4%20w-4%20mb-1%22%7D",
                    className: "h-4 w-4 mb-1",
                  }),
                  a.jsx("span", {
                    "data-lov-id":
                      "src\\components\\navigation\\LocalizedNavigation.tsx:103:14",
                    "data-lov-name": "span",
                    "data-component-path":
                      "src\\components\\navigation\\LocalizedNavigation.tsx",
                    "data-component-line": "103",
                    "data-component-file": "LocalizedNavigation.tsx",
                    "data-component-name": "span",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-xs%20font-medium%20truncate%22%7D",
                    className: "text-xs font-medium truncate",
                    children: n.name,
                  }),
                ],
              },
              n.href,
            );
          }),
        })
      : a.jsx("nav", {
          "data-lov-id":
            "src\\components\\navigation\\LocalizedNavigation.tsx:112:4",
          "data-lov-name": "nav",
          "data-component-path":
            "src\\components\\navigation\\LocalizedNavigation.tsx",
          "data-component-line": "112",
          "data-component-file": "LocalizedNavigation.tsx",
          "data-component-name": "nav",
          "data-component-content": "%7B%7D",
          className: `space-y-2 ${e}`,
          children: l.map((n) => {
            const c = n.icon,
              r = d(n.href);
            return a.jsxs(
              x,
              {
                "data-lov-id":
                  "src\\components\\navigation\\LocalizedNavigation.tsx:117:10",
                "data-lov-name": "Link",
                "data-component-path":
                  "src\\components\\navigation\\LocalizedNavigation.tsx",
                "data-component-line": "117",
                "data-component-file": "LocalizedNavigation.tsx",
                "data-component-name": "Link",
                "data-component-content": "%7B%7D",
                to: n.href,
                onClick: (v) => u(v, n.href),
                className: `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                children: [
                  a.jsx(c, {
                    "data-lov-id":
                      "src\\components\\navigation\\LocalizedNavigation.tsx:127:12",
                    "data-lov-name": "Icon",
                    "data-component-path":
                      "src\\components\\navigation\\LocalizedNavigation.tsx",
                    "data-component-line": "127",
                    "data-component-file": "LocalizedNavigation.tsx",
                    "data-component-name": "Icon",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                    className: "h-4 w-4",
                  }),
                  a.jsx("span", {
                    "data-lov-id":
                      "src\\components\\navigation\\LocalizedNavigation.tsx:128:12",
                    "data-lov-name": "span",
                    "data-component-path":
                      "src\\components\\navigation\\LocalizedNavigation.tsx",
                    "data-component-line": "128",
                    "data-component-file": "LocalizedNavigation.tsx",
                    "data-component-name": "span",
                    "data-component-content": "%7B%7D",
                    children: n.name,
                  }),
                ],
              },
              n.href,
            );
          }),
        });
  },
  pa = ({ className: e = "", variant: m = "ghost", size: t = "default" }) => {
    h();
    const { changeLanguage: o, currentLanguage: s } = f(),
      [p, i] = _.useState(!1),
      l = [
        { code: "pt-BR", name: "Português", flag: "🇧🇷" },
        { code: "en-US", name: "English", flag: "🇺🇸" },
        { code: "es-ES", name: "Español", flag: "🇪🇸" },
      ],
      d = async (n) => {
        if (!(n === s || p)) {
          i(!0);
          try {
            await o(n);
          } catch (c) {
            console.error("Error changing language:", c);
          } finally {
            i(!1);
          }
        }
      },
      u = l.find((n) => n.code === s) || l[0];
    return a.jsxs(P, {
      "data-lov-id": "src\\components\\navigation\\LanguageSwitcher.tsx:50:4",
      "data-lov-name": "DropdownMenu",
      "data-component-path":
        "src\\components\\navigation\\LanguageSwitcher.tsx",
      "data-component-line": "50",
      "data-component-file": "LanguageSwitcher.tsx",
      "data-component-name": "DropdownMenu",
      "data-component-content": "%7B%7D",
      children: [
        a.jsx(U, {
          "data-lov-id":
            "src\\components\\navigation\\LanguageSwitcher.tsx:51:6",
          "data-lov-name": "DropdownMenuTrigger",
          "data-component-path":
            "src\\components\\navigation\\LanguageSwitcher.tsx",
          "data-component-line": "51",
          "data-component-file": "LanguageSwitcher.tsx",
          "data-component-name": "DropdownMenuTrigger",
          "data-component-content": "%7B%7D",
          asChild: !0,
          children: a.jsxs(g, {
            "data-lov-id":
              "src\\components\\navigation\\LanguageSwitcher.tsx:52:8",
            "data-lov-name": "Button",
            "data-component-path":
              "src\\components\\navigation\\LanguageSwitcher.tsx",
            "data-component-line": "52",
            "data-component-file": "LanguageSwitcher.tsx",
            "data-component-name": "Button",
            "data-component-content": "%7B%7D",
            variant: m,
            size: t,
            className: `${e} ${p ? "opacity-50" : ""}`,
            disabled: p,
            children: [
              a.jsx(K, {
                "data-lov-id":
                  "src\\components\\navigation\\LanguageSwitcher.tsx:58:10",
                "data-lov-name": "Globe",
                "data-component-path":
                  "src\\components\\navigation\\LanguageSwitcher.tsx",
                "data-component-line": "58",
                "data-component-file": "LanguageSwitcher.tsx",
                "data-component-name": "Globe",
                "data-component-content":
                  "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                className: "h-4 w-4 mr-2",
              }),
              a.jsxs("span", {
                "data-lov-id":
                  "src\\components\\navigation\\LanguageSwitcher.tsx:59:10",
                "data-lov-name": "span",
                "data-component-path":
                  "src\\components\\navigation\\LanguageSwitcher.tsx",
                "data-component-line": "59",
                "data-component-file": "LanguageSwitcher.tsx",
                "data-component-name": "span",
                "data-component-content":
                  "%7B%22className%22%3A%22hidden%20sm%3Ainline%22%7D",
                className: "hidden sm:inline",
                children: [u.flag, " ", u.name],
              }),
              a.jsx("span", {
                "data-lov-id":
                  "src\\components\\navigation\\LanguageSwitcher.tsx:62:10",
                "data-lov-name": "span",
                "data-component-path":
                  "src\\components\\navigation\\LanguageSwitcher.tsx",
                "data-component-line": "62",
                "data-component-file": "LanguageSwitcher.tsx",
                "data-component-name": "span",
                "data-component-content":
                  "%7B%22className%22%3A%22sm%3Ahidden%22%7D",
                className: "sm:hidden",
                children: u.flag,
              }),
            ],
          }),
        }),
        a.jsx(E, {
          "data-lov-id":
            "src\\components\\navigation\\LanguageSwitcher.tsx:67:6",
          "data-lov-name": "DropdownMenuContent",
          "data-component-path":
            "src\\components\\navigation\\LanguageSwitcher.tsx",
          "data-component-line": "67",
          "data-component-file": "LanguageSwitcher.tsx",
          "data-component-name": "DropdownMenuContent",
          "data-component-content": "%7B%22className%22%3A%22w-48%22%7D",
          align: "end",
          className: "w-48",
          children: l.map((n) =>
            a.jsxs(
              A,
              {
                "data-lov-id":
                  "src\\components\\navigation\\LanguageSwitcher.tsx:69:10",
                "data-lov-name": "DropdownMenuItem",
                "data-component-path":
                  "src\\components\\navigation\\LanguageSwitcher.tsx",
                "data-component-line": "69",
                "data-component-file": "LanguageSwitcher.tsx",
                "data-component-name": "DropdownMenuItem",
                "data-component-content": "%7B%7D",
                onClick: () => d(n.code),
                className: `flex items-center justify-between cursor-pointer ${n.code === s ? "bg-accent" : ""}`,
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\navigation\\LanguageSwitcher.tsx:76:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\navigation\\LanguageSwitcher.tsx",
                    "data-component-line": "76",
                    "data-component-file": "LanguageSwitcher.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx("span", {
                        "data-lov-id":
                          "src\\components\\navigation\\LanguageSwitcher.tsx:77:14",
                        "data-lov-name": "span",
                        "data-component-path":
                          "src\\components\\navigation\\LanguageSwitcher.tsx",
                        "data-component-line": "77",
                        "data-component-file": "LanguageSwitcher.tsx",
                        "data-component-name": "span",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-lg%22%7D",
                        className: "text-lg",
                        children: n.flag,
                      }),
                      a.jsx("span", {
                        "data-lov-id":
                          "src\\components\\navigation\\LanguageSwitcher.tsx:78:14",
                        "data-lov-name": "span",
                        "data-component-path":
                          "src\\components\\navigation\\LanguageSwitcher.tsx",
                        "data-component-line": "78",
                        "data-component-file": "LanguageSwitcher.tsx",
                        "data-component-name": "span",
                        "data-component-content": "%7B%7D",
                        children: n.name,
                      }),
                    ],
                  }),
                  n.code === s &&
                    a.jsx(Q, {
                      "data-lov-id":
                        "src\\components\\navigation\\LanguageSwitcher.tsx:81:14",
                      "data-lov-name": "Check",
                      "data-component-path":
                        "src\\components\\navigation\\LanguageSwitcher.tsx",
                      "data-component-line": "81",
                      "data-component-file": "LanguageSwitcher.tsx",
                      "data-component-name": "Check",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D",
                      className: "h-4 w-4 text-primary",
                    }),
                ],
              },
              n.code,
            ),
          ),
        }),
      ],
    });
  },
  da = ({ className: e = "" }) => {
    const m = M(),
      { t } = h(),
      { navigateLocalized: o, currentLanguage: s } = f(),
      p = {
        "pt-BR": {
          "/app": t("nav.overview", { defaultValue: "Visão Geral" }),
          "/app/relatorios": t("nav.reports", { defaultValue: "Relatórios" }),
          "/app/relatorios/novo": t("nav.new_report", {
            defaultValue: "Novo Relatório",
          }),
          "/app/metricas": t("nav.metrics", { defaultValue: "Indicadores" }),
          "/app/metricas/configurar": t("nav.metrics_config", {
            defaultValue: "Configurar Métricas",
          }),
          "/app/painel-decisao": t("nav.decision_panel", {
            defaultValue: "Painel de Decisão",
          }),
          "/app/analytics": t("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidado": t("nav.consolidated", {
            defaultValue: "Consolidado",
          }),
          "/app/prioridades": t("nav.priorities", {
            defaultValue: "Prioridades",
          }),
          "/app/plano-acao": t("nav.action_plan", {
            defaultValue: "Plano de Ação",
          }),
          "/app/dados": t("nav.data", { defaultValue: "Meus Dados" }),
          "/app/perfil": t("nav.profile", { defaultValue: "Perfil" }),
          "/app/configuracoes": t("nav.settings", {
            defaultValue: "Configurações",
          }),
        },
        "en-US": {
          "/app": t("nav.overview", { defaultValue: "Overview" }),
          "/app/reports": t("nav.reports", { defaultValue: "Reports" }),
          "/app/reports/new": t("nav.new_report", {
            defaultValue: "New Report",
          }),
          "/app/metrics": t("nav.metrics", { defaultValue: "Metrics" }),
          "/app/metrics/config": t("nav.metrics_config", {
            defaultValue: "Configure Metrics",
          }),
          "/app/decision-panel": t("nav.decision_panel", {
            defaultValue: "Decision Panel",
          }),
          "/app/analytics": t("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidated": t("nav.consolidated", {
            defaultValue: "Consolidated",
          }),
          "/app/priorities": t("nav.priorities", {
            defaultValue: "Priorities",
          }),
          "/app/action-plan": t("nav.action_plan", {
            defaultValue: "Action Plan",
          }),
          "/app/folders": t("nav.data", { defaultValue: "My Data" }),
          "/app/profile": t("nav.profile", { defaultValue: "Profile" }),
          "/app/settings": t("nav.settings", { defaultValue: "Settings" }),
        },
        "es-ES": {
          "/app": t("nav.overview", { defaultValue: "Visión General" }),
          "/app/informes": t("nav.reports", { defaultValue: "Informes" }),
          "/app/informes/nuevo": t("nav.new_report", {
            defaultValue: "Nuevo Informe",
          }),
          "/app/metricas": t("nav.metrics", { defaultValue: "Métricas" }),
          "/app/metricas/configurar": t("nav.metrics_config", {
            defaultValue: "Configurar Métricas",
          }),
          "/app/panel-decision": t("nav.decision_panel", {
            defaultValue: "Panel de Decisión",
          }),
          "/app/analytics": t("nav.analytics", { defaultValue: "Analytics" }),
          "/app/consolidado": t("nav.consolidated", {
            defaultValue: "Consolidado",
          }),
          "/app/prioridades": t("nav.priorities", {
            defaultValue: "Prioridades",
          }),
          "/app/plan-accion": t("nav.action_plan", {
            defaultValue: "Plan de Acción",
          }),
          "/app/carpetas": t("nav.data", { defaultValue: "Mis Datos" }),
          "/app/perfil": t("nav.profile", { defaultValue: "Perfil" }),
          "/app/configuracion": t("nav.settings", {
            defaultValue: "Configuración",
          }),
        },
      },
      i = p[s] || p["pt-BR"],
      d = (() => {
        const n = m.pathname.split("/").filter(Boolean),
          c = [{ href: "/app", label: i["/app"] || "Dashboard" }];
        let r = "";
        for (let v = 1; v < n.length; v++) {
          const V = n[v];
          if (
            ((r += `/${V}`),
            V.match(
              /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
            ))
          )
            c.push({
              href: r,
              label: t("nav.details", { defaultValue: "Detalhes" }),
            });
          else {
            const k = i[r];
            k && c.push({ href: r, label: k });
          }
        }
        return c;
      })(),
      u = (n, c) => {
        (n.preventDefault(), o(c));
      };
    return d.length <= 1
      ? null
      : a.jsxs("nav", {
          "data-lov-id":
            "src\\components\\navigation\\LocalizedBreadcrumbs.tsx:115:4",
          "data-lov-name": "nav",
          "data-component-path":
            "src\\components\\navigation\\LocalizedBreadcrumbs.tsx",
          "data-component-line": "115",
          "data-component-file": "LocalizedBreadcrumbs.tsx",
          "data-component-name": "nav",
          "data-component-content": "%7B%7D",
          className: `flex items-center space-x-1 text-sm text-muted-foreground ${e}`,
          children: [
            a.jsxs(x, {
              "data-lov-id":
                "src\\components\\navigation\\LocalizedBreadcrumbs.tsx:116:6",
              "data-lov-name": "Link",
              "data-component-path":
                "src\\components\\navigation\\LocalizedBreadcrumbs.tsx",
              "data-component-line": "116",
              "data-component-file": "LocalizedBreadcrumbs.tsx",
              "data-component-name": "Link",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20hover%3Atext-foreground%20transition-colors%22%7D",
              to: "/app",
              onClick: (n) => u(n, "/app"),
              className:
                "flex items-center hover:text-foreground transition-colors",
              children: [
                a.jsx(X, {
                  "data-lov-id":
                    "src\\components\\navigation\\LocalizedBreadcrumbs.tsx:121:8",
                  "data-lov-name": "Home",
                  "data-component-path":
                    "src\\components\\navigation\\LocalizedBreadcrumbs.tsx",
                  "data-component-line": "121",
                  "data-component-file": "LocalizedBreadcrumbs.tsx",
                  "data-component-name": "Home",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-4%20w-4%20mr-1%22%7D",
                  className: "h-4 w-4 mr-1",
                }),
                d[0].label,
              ],
            }),
            d
              .slice(1)
              .map((n, c) =>
                a.jsxs(
                  O.Fragment,
                  {
                    children: [
                      a.jsx(Y, {
                        "data-lov-id":
                          "src\\components\\navigation\\LocalizedBreadcrumbs.tsx:127:10",
                        "data-lov-name": "ChevronRight",
                        "data-component-path":
                          "src\\components\\navigation\\LocalizedBreadcrumbs.tsx",
                        "data-component-line": "127",
                        "data-component-file": "LocalizedBreadcrumbs.tsx",
                        "data-component-name": "ChevronRight",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                        className: "h-4 w-4",
                      }),
                      c === d.length - 1
                        ? a.jsx("span", {
                            "data-lov-id":
                              "src\\components\\navigation\\LocalizedBreadcrumbs.tsx:129:12",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\components\\navigation\\LocalizedBreadcrumbs.tsx",
                            "data-component-line": "129",
                            "data-component-file": "LocalizedBreadcrumbs.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-foreground%20font-medium%22%7D",
                            className: "text-foreground font-medium",
                            children: n.label,
                          })
                        : a.jsx(x, {
                            "data-lov-id":
                              "src\\components\\navigation\\LocalizedBreadcrumbs.tsx:131:12",
                            "data-lov-name": "Link",
                            "data-component-path":
                              "src\\components\\navigation\\LocalizedBreadcrumbs.tsx",
                            "data-component-line": "131",
                            "data-component-file": "LocalizedBreadcrumbs.tsx",
                            "data-component-name": "Link",
                            "data-component-content":
                              "%7B%22className%22%3A%22hover%3Atext-foreground%20transition-colors%22%7D",
                            to: n.href,
                            onClick: (r) => u(r, n.href),
                            className:
                              "hover:text-foreground transition-colors",
                            children: n.label,
                          }),
                    ],
                  },
                  n.href,
                ),
              ),
          ],
        });
  },
  ma = () => {
    const { isDemoMode: e } = R(),
      { t: m } = h(),
      { currentLanguage: t } = f();
    return e
      ? a.jsx("div", {
          "data-lov-id": "src\\components\\onboarding\\DemoModeBanner.tsx:17:4",
          "data-lov-name": "div",
          "data-component-path":
            "src\\components\\onboarding\\DemoModeBanner.tsx",
          "data-component-line": "17",
          "data-component-file": "DemoModeBanner.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22bg-amber-100%20dark%3Abg-amber-900%2F30%20border-b%20border-amber-200%20dark%3Aborder-amber-800%20text-amber-900%20dark%3Atext-amber-200%20px-4%20py-3%22%7D",
          className:
            "bg-amber-100 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 px-4 py-3",
          children: a.jsxs("div", {
            "data-lov-id":
              "src\\components\\onboarding\\DemoModeBanner.tsx:18:6",
            "data-lov-name": "div",
            "data-component-path":
              "src\\components\\onboarding\\DemoModeBanner.tsx",
            "data-component-line": "18",
            "data-component-file": "DemoModeBanner.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22container%20mx-auto%20flex%20flex-col%20sm%3Aflex-row%20items-center%20justify-between%20gap-4%22%7D",
            className:
              "container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4",
            children: [
              a.jsxs("div", {
                "data-lov-id":
                  "src\\components\\onboarding\\DemoModeBanner.tsx:19:8",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\components\\onboarding\\DemoModeBanner.tsx",
                "data-component-line": "19",
                "data-component-file": "DemoModeBanner.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\components\\onboarding\\DemoModeBanner.tsx:20:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\onboarding\\DemoModeBanner.tsx",
                    "data-component-line": "20",
                    "data-component-file": "DemoModeBanner.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22bg-amber-200%20dark%3Abg-amber-800%20p-2%20rounded-full%22%7D",
                    className:
                      "bg-amber-200 dark:bg-amber-800 p-2 rounded-full",
                    children: a.jsx(Z, {
                      "data-lov-id":
                        "src\\components\\onboarding\\DemoModeBanner.tsx:21:12",
                      "data-lov-name": "AlertTriangle",
                      "data-component-path":
                        "src\\components\\onboarding\\DemoModeBanner.tsx",
                      "data-component-line": "21",
                      "data-component-file": "DemoModeBanner.tsx",
                      "data-component-name": "AlertTriangle",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20text-amber-600%20dark%3Atext-amber-400%22%7D",
                      className: "h-4 w-4 text-amber-600 dark:text-amber-400",
                    }),
                  }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\components\\onboarding\\DemoModeBanner.tsx:23:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\components\\onboarding\\DemoModeBanner.tsx",
                    "data-component-line": "23",
                    "data-component-file": "DemoModeBanner.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\components\\onboarding\\DemoModeBanner.tsx:24:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\components\\onboarding\\DemoModeBanner.tsx",
                        "data-component-line": "24",
                        "data-component-file": "DemoModeBanner.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-semibold%20text-sm%22%7D",
                        className: "font-semibold text-sm",
                        children: m("demo.banner_title", {
                          defaultValue: "Modo de Demonstração Ativo",
                        }),
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\components\\onboarding\\DemoModeBanner.tsx:29:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\components\\onboarding\\DemoModeBanner.tsx",
                        "data-component-line": "29",
                        "data-component-file": "DemoModeBanner.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-xs%20opacity-90%22%7D",
                        className: "text-xs opacity-90",
                        children: m("demo.banner_desc", {
                          defaultValue:
                            "Os dados não serão salvos permanentemente. Configure o banco de dados para ativar todas as funcionalidades.",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx(g, {
                "data-lov-id":
                  "src\\components\\onboarding\\DemoModeBanner.tsx:38:8",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\components\\onboarding\\DemoModeBanner.tsx",
                "data-component-line": "38",
                "data-component-file": "DemoModeBanner.tsx",
                "data-component-name": "Button",
                "data-component-content":
                  "%7B%22className%22%3A%22bg-amber-50%20hover%3Abg-amber-100%20text-amber-900%20border-amber-300%20dark%3Abg-amber-950%20dark%3Ahover%3Abg-amber-900%20dark%3Aborder-amber-700%20dark%3Atext-amber-100%20shrink-0%22%7D",
                variant: "outline",
                size: "sm",
                className:
                  "bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950 dark:hover:bg-amber-900 dark:border-amber-700 dark:text-amber-100 shrink-0",
                asChild: !0,
                children: a.jsxs(x, {
                  "data-lov-id":
                    "src\\components\\onboarding\\DemoModeBanner.tsx:44:10",
                  "data-lov-name": "Link",
                  "data-component-path":
                    "src\\components\\onboarding\\DemoModeBanner.tsx",
                  "data-component-line": "44",
                  "data-component-file": "DemoModeBanner.tsx",
                  "data-component-name": "Link",
                  "data-component-content": "%7B%7D",
                  to: `/${t}/app/configuracoes`,
                  children: [
                    a.jsx(aa, {
                      "data-lov-id":
                        "src\\components\\onboarding\\DemoModeBanner.tsx:45:12",
                      "data-lov-name": "Database",
                      "data-component-path":
                        "src\\components\\onboarding\\DemoModeBanner.tsx",
                      "data-component-line": "45",
                      "data-component-file": "DemoModeBanner.tsx",
                      "data-component-name": "Database",
                      "data-component-content":
                        "%7B%22className%22%3A%22mr-2%20h-3.5%20w-3.5%22%7D",
                      className: "mr-2 h-3.5 w-3.5",
                    }),
                    m("demo.connect_db", { defaultValue: "Conectar Supabase" }),
                    a.jsx(ta, {
                      "data-lov-id":
                        "src\\components\\onboarding\\DemoModeBanner.tsx:47:12",
                      "data-lov-name": "ArrowRight",
                      "data-component-path":
                        "src\\components\\onboarding\\DemoModeBanner.tsx",
                      "data-component-line": "47",
                      "data-component-file": "DemoModeBanner.tsx",
                      "data-component-name": "ArrowRight",
                      "data-component-content":
                        "%7B%22className%22%3A%22ml-2%20h-3.5%20w-3.5%22%7D",
                      className: "ml-2 h-3.5 w-3.5",
                    }),
                  ],
                }),
              }),
            ],
          }),
        })
      : null;
  },
  Da = () => {
    var l, d;
    const { user: e, signOut: m } = R(),
      { t } = h();
    M();
    const [o, s] = _.useState(!1),
      { currentLanguage: p } = f(),
      i = () =>
        a.jsxs("div", {
          "data-lov-id": "src\\components\\AppLayout.tsx:55:4",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\AppLayout.tsx",
          "data-component-line": "55",
          "data-component-file": "AppLayout.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20h-full%20flex-col%22%7D",
          className: "flex h-full flex-col",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\components\\AppLayout.tsx:56:6",
              "data-lov-name": "div",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "56",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-3%20px-6%20py-4%20border-b%22%7D",
              className: "flex items-center gap-3 px-6 py-4 border-b",
              children: [
                a.jsx(J, {
                  "data-lov-id": "src\\components\\AppLayout.tsx:57:8",
                  "data-lov-name": "LogoIcon",
                  "data-component-path": "src\\components\\AppLayout.tsx",
                  "data-component-line": "57",
                  "data-component-file": "AppLayout.tsx",
                  "data-component-name": "LogoIcon",
                  "data-component-content": "%7B%7D",
                  size: "sm",
                }),
                a.jsx(q, {
                  "data-lov-id": "src\\components\\AppLayout.tsx:58:8",
                  "data-lov-name": "BrandName",
                  "data-component-path": "src\\components\\AppLayout.tsx",
                  "data-component-line": "58",
                  "data-component-file": "AppLayout.tsx",
                  "data-component-name": "BrandName",
                  "data-component-content": "%7B%7D",
                  variant: "header",
                }),
              ],
            }),
            a.jsx("nav", {
              "data-lov-id": "src\\components\\AppLayout.tsx:61:6",
              "data-lov-name": "nav",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "61",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "nav",
              "data-component-content":
                "%7B%22className%22%3A%22flex-1%20px-4%20py-6%20space-y-2%22%7D",
              className: "flex-1 px-4 py-6 space-y-2",
              "aria-label": t("nav.main_navigation"),
              children: a.jsx(I, {
                "data-lov-id": "src\\components\\AppLayout.tsx:65:8",
                "data-lov-name": "LocalizedNavigation",
                "data-component-path": "src\\components\\AppLayout.tsx",
                "data-component-line": "65",
                "data-component-file": "AppLayout.tsx",
                "data-component-name": "LocalizedNavigation",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-2%22%7D",
                className: "space-y-2",
              }),
            }),
            a.jsx("div", {
              "data-lov-id": "src\\components\\AppLayout.tsx:68:6",
              "data-lov-name": "div",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "68",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22border-t%20p-4%22%7D",
              className: "border-t p-4",
              children: a.jsx("div", {
                "data-lov-id": "src\\components\\AppLayout.tsx:69:8",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\AppLayout.tsx",
                "data-component-line": "69",
                "data-component-file": "AppLayout.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-2%22%7D",
                className: "space-y-2",
                children: a.jsxs(x, {
                  "data-lov-id": "src\\components\\AppLayout.tsx:70:10",
                  "data-lov-name": "Link",
                  "data-component-path": "src\\components\\AppLayout.tsx",
                  "data-component-line": "70",
                  "data-component-file": "AppLayout.tsx",
                  "data-component-name": "Link",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-3%20px-3%20py-2.5%20rounded-lg%20text-sm%20font-medium%20text-muted-foreground%20hover%3Atext-foreground%20hover%3Abg-muted%20transition-colors%22%7D",
                  to: `/${p}/app/configuracoes`,
                  onClick: () => s(!1),
                  className:
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
                  children: [
                    a.jsx(C, {
                      "data-lov-id": "src\\components\\AppLayout.tsx:75:12",
                      "data-lov-name": "Settings",
                      "data-component-path": "src\\components\\AppLayout.tsx",
                      "data-component-line": "75",
                      "data-component-file": "AppLayout.tsx",
                      "data-component-name": "Settings",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                      className: "h-5 w-5",
                    }),
                    t("nav.settings"),
                  ],
                }),
              }),
            }),
          ],
        });
    return a.jsxs("div", {
      "data-lov-id": "src\\components\\AppLayout.tsx:84:4",
      "data-lov-name": "div",
      "data-component-path": "src\\components\\AppLayout.tsx",
      "data-component-line": "84",
      "data-component-file": "AppLayout.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22min-h-screen%20bg-background%22%7D",
      className: "min-h-screen bg-background",
      children: [
        a.jsx("div", {
          "data-lov-id": "src\\components\\AppLayout.tsx:86:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\AppLayout.tsx",
          "data-component-line": "86",
          "data-component-file": "AppLayout.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22hidden%20lg%3Afixed%20lg%3Ainset-y-0%20lg%3Az-50%20lg%3Aflex%20lg%3Aw-72%20lg%3Aflex-col%22%7D",
          className:
            "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",
          children: a.jsx("div", {
            "data-lov-id": "src\\components\\AppLayout.tsx:87:8",
            "data-lov-name": "div",
            "data-component-path": "src\\components\\AppLayout.tsx",
            "data-component-line": "87",
            "data-component-file": "AppLayout.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20grow%20flex-col%20gap-y-5%20overflow-y-auto%20border-r%20bg-gradient-subtle%20shadow-lg%22%7D",
            className:
              "flex grow flex-col gap-y-5 overflow-y-auto border-r bg-gradient-subtle shadow-lg",
            children: a.jsx(i, {
              "data-lov-id": "src\\components\\AppLayout.tsx:88:10",
              "data-lov-name": "SidebarContent",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "88",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "SidebarContent",
              "data-component-content": "%7B%7D",
            }),
          }),
        }),
        a.jsx(T, {
          "data-lov-id": "src\\components\\AppLayout.tsx:93:6",
          "data-lov-name": "Sheet",
          "data-component-path": "src\\components\\AppLayout.tsx",
          "data-component-line": "93",
          "data-component-file": "AppLayout.tsx",
          "data-component-name": "Sheet",
          "data-component-content": "%7B%7D",
          open: o,
          onOpenChange: s,
          children: a.jsx(G, {
            "data-lov-id": "src\\components\\AppLayout.tsx:94:8",
            "data-lov-name": "SheetContent",
            "data-component-path": "src\\components\\AppLayout.tsx",
            "data-component-line": "94",
            "data-component-file": "AppLayout.tsx",
            "data-component-name": "SheetContent",
            "data-component-content":
              "%7B%22className%22%3A%22w-72%20p-0%22%7D",
            side: "left",
            className: "w-72 p-0",
            children: a.jsx(i, {
              "data-lov-id": "src\\components\\AppLayout.tsx:95:10",
              "data-lov-name": "SidebarContent",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "95",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "SidebarContent",
              "data-component-content": "%7B%7D",
            }),
          }),
        }),
        a.jsxs("div", {
          "data-lov-id": "src\\components\\AppLayout.tsx:100:6",
          "data-lov-name": "div",
          "data-component-path": "src\\components\\AppLayout.tsx",
          "data-component-line": "100",
          "data-component-file": "AppLayout.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%22className%22%3A%22lg%3Apl-72%22%7D",
          className: "lg:pl-72",
          children: [
            a.jsx("header", {
              "data-lov-id": "src\\components\\AppLayout.tsx:102:8",
              "data-lov-name": "header",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "102",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "header",
              "data-component-content":
                "%7B%22className%22%3A%22sticky%20top-0%20z-40%20bg-background%2F95%20backdrop-blur%20supports-%5Bbackdrop-filter%5D%3Abg-background%2F60%20border-b%20shadow-sm%22%7D",
              className:
                "sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm",
              children: a.jsxs("div", {
                "data-lov-id": "src\\components\\AppLayout.tsx:103:10",
                "data-lov-name": "div",
                "data-component-path": "src\\components\\AppLayout.tsx",
                "data-component-line": "103",
                "data-component-file": "AppLayout.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20h-14%20sm%3Ah-16%20items-center%20gap-4%20px-4%20sm%3Apx-6%22%7D",
                className: "flex h-14 sm:h-16 items-center gap-4 px-4 sm:px-6",
                children: [
                  a.jsx(g, {
                    "data-lov-id": "src\\components\\AppLayout.tsx:106:12",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\components\\AppLayout.tsx",
                    "data-component-line": "106",
                    "data-component-file": "AppLayout.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22lg%3Ahidden%20touch-target%22%7D",
                    variant: "ghost",
                    size: "sm",
                    className: "lg:hidden touch-target",
                    onClick: () => s(!0),
                    "aria-label": t("nav.open_menu"),
                    children: a.jsx(na, {
                      "data-lov-id": "src\\components\\AppLayout.tsx:113:14",
                      "data-lov-name": "Menu",
                      "data-component-path": "src\\components\\AppLayout.tsx",
                      "data-component-line": "113",
                      "data-component-file": "AppLayout.tsx",
                      "data-component-name": "Menu",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                      className: "h-5 w-5",
                    }),
                  }),
                  a.jsx("div", {
                    "data-lov-id": "src\\components\\AppLayout.tsx:117:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\AppLayout.tsx",
                    "data-component-line": "117",
                    "data-component-file": "AppLayout.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex-1%20max-w-md%20hidden%20sm%3Ablock%22%7D",
                    className: "flex-1 max-w-md hidden sm:block",
                    children: a.jsxs("div", {
                      "data-lov-id": "src\\components\\AppLayout.tsx:118:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\components\\AppLayout.tsx",
                      "data-component-line": "118",
                      "data-component-file": "AppLayout.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22relative%22%7D",
                      className: "relative",
                      children: [
                        a.jsx(oa, {
                          "data-lov-id":
                            "src\\components\\AppLayout.tsx:119:16",
                          "data-lov-name": "Search",
                          "data-component-path":
                            "src\\components\\AppLayout.tsx",
                          "data-component-line": "119",
                          "data-component-file": "AppLayout.tsx",
                          "data-component-name": "Search",
                          "data-component-content":
                            "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20text-muted-foreground%20h-4%20w-4%22%7D",
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                        }),
                        a.jsx($, {
                          "data-lov-id":
                            "src\\components\\AppLayout.tsx:120:16",
                          "data-lov-name": "Input",
                          "data-component-path":
                            "src\\components\\AppLayout.tsx",
                          "data-component-line": "120",
                          "data-component-file": "AppLayout.tsx",
                          "data-component-name": "Input",
                          "data-component-content":
                            "%7B%22className%22%3A%22pl-10%20bg-muted%2F50%20border-muted%20focus%3Aborder-primary%20transition-colors%22%7D",
                          placeholder: t("search.placeholder"),
                          className:
                            "pl-10 bg-muted/50 border-muted focus:border-primary transition-colors",
                        }),
                      ],
                    }),
                  }),
                  a.jsx("div", {
                    "data-lov-id": "src\\components\\AppLayout.tsx:128:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\AppLayout.tsx",
                    "data-component-line": "128",
                    "data-component-file": "AppLayout.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20gap-2%20ml-auto%22%7D",
                    className: "flex items-center gap-2 ml-auto",
                    children: a.jsxs("div", {
                      "data-lov-id": "src\\components\\AppLayout.tsx:129:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\components\\AppLayout.tsx",
                      "data-component-line": "129",
                      "data-component-file": "AppLayout.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                      className: "flex items-center gap-2",
                      children: [
                        a.jsx(pa, {
                          "data-lov-id":
                            "src\\components\\AppLayout.tsx:130:16",
                          "data-lov-name": "LanguageSwitcher",
                          "data-component-path":
                            "src\\components\\AppLayout.tsx",
                          "data-component-line": "130",
                          "data-component-file": "AppLayout.tsx",
                          "data-component-name": "LanguageSwitcher",
                          "data-component-content":
                            "%7B%22className%22%3A%22relative%20hover-scale%22%7D",
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                        }),
                        a.jsx(g, {
                          "data-lov-id":
                            "src\\components\\AppLayout.tsx:135:16",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\components\\AppLayout.tsx",
                          "data-component-line": "135",
                          "data-component-file": "AppLayout.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22relative%20hover-scale%22%7D",
                          variant: "ghost",
                          size: "sm",
                          className: "relative hover-scale",
                          "aria-label": t("nav.notifications"),
                          children: a.jsx(ea, {
                            "data-lov-id":
                              "src\\components\\AppLayout.tsx:141:18",
                            "data-lov-name": "Bell",
                            "data-component-path":
                              "src\\components\\AppLayout.tsx",
                            "data-component-line": "141",
                            "data-component-file": "AppLayout.tsx",
                            "data-component-name": "Bell",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-5%20w-5%22%7D",
                            className: "h-5 w-5",
                          }),
                        }),
                        a.jsxs(P, {
                          "data-lov-id":
                            "src\\components\\AppLayout.tsx:144:16",
                          "data-lov-name": "DropdownMenu",
                          "data-component-path":
                            "src\\components\\AppLayout.tsx",
                          "data-component-line": "144",
                          "data-component-file": "AppLayout.tsx",
                          "data-component-name": "DropdownMenu",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(U, {
                              "data-lov-id":
                                "src\\components\\AppLayout.tsx:145:18",
                              "data-lov-name": "DropdownMenuTrigger",
                              "data-component-path":
                                "src\\components\\AppLayout.tsx",
                              "data-component-line": "145",
                              "data-component-file": "AppLayout.tsx",
                              "data-component-name": "DropdownMenuTrigger",
                              "data-component-content": "%7B%7D",
                              asChild: !0,
                              children: a.jsx(g, {
                                "data-lov-id":
                                  "src\\components\\AppLayout.tsx:146:20",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\components\\AppLayout.tsx",
                                "data-component-line": "146",
                                "data-component-file": "AppLayout.tsx",
                                "data-component-name": "Button",
                                "data-component-content":
                                  "%7B%22className%22%3A%22relative%20h-9%20w-9%20rounded-full%22%7D",
                                variant: "ghost",
                                className: "relative h-9 w-9 rounded-full",
                                "aria-label": t("nav.user_menu"),
                                children: a.jsx(H, {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:151:22",
                                  "data-lov-name": "Avatar",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "151",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name": "Avatar",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-9%20w-9%22%7D",
                                  className: "h-9 w-9",
                                  children: a.jsx(W, {
                                    "data-lov-id":
                                      "src\\components\\AppLayout.tsx:152:24",
                                    "data-lov-name": "AvatarFallback",
                                    "data-component-path":
                                      "src\\components\\AppLayout.tsx",
                                    "data-component-line": "152",
                                    "data-component-file": "AppLayout.tsx",
                                    "data-component-name": "AvatarFallback",
                                    "data-component-content": "%7B%7D",
                                    children:
                                      ((l = e == null ? void 0 : e.email) ==
                                      null
                                        ? void 0
                                        : l.charAt(0).toUpperCase()) || "U",
                                  }),
                                }),
                              }),
                            }),
                            a.jsxs(E, {
                              "data-lov-id":
                                "src\\components\\AppLayout.tsx:158:18",
                              "data-lov-name": "DropdownMenuContent",
                              "data-component-path":
                                "src\\components\\AppLayout.tsx",
                              "data-component-line": "158",
                              "data-component-file": "AppLayout.tsx",
                              "data-component-name": "DropdownMenuContent",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-56%22%7D",
                              className: "w-56",
                              align: "end",
                              children: [
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:159:20",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "159",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20justify-start%20gap-2%20p-2%22%7D",
                                  className:
                                    "flex items-center justify-start gap-2 p-2",
                                  children: a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\components\\AppLayout.tsx:160:22",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\components\\AppLayout.tsx",
                                    "data-component-line": "160",
                                    "data-component-file": "AppLayout.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20flex-col%20space-y-1%20leading-none%22%7D",
                                    className:
                                      "flex flex-col space-y-1 leading-none",
                                    children: [
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\components\\AppLayout.tsx:161:24",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\components\\AppLayout.tsx",
                                        "data-component-line": "161",
                                        "data-component-file": "AppLayout.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-medium%22%7D",
                                        className: "font-medium",
                                        children:
                                          ((d =
                                            e == null
                                              ? void 0
                                              : e.user_metadata) == null
                                            ? void 0
                                            : d.full_name) || "Usuário",
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\components\\AppLayout.tsx:164:24",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\components\\AppLayout.tsx",
                                        "data-component-line": "164",
                                        "data-component-file": "AppLayout.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                        className:
                                          "text-xs text-muted-foreground",
                                        children: e == null ? void 0 : e.email,
                                      }),
                                    ],
                                  }),
                                }),
                                a.jsx(z, {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:169:20",
                                  "data-lov-name": "DropdownMenuSeparator",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "169",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name":
                                    "DropdownMenuSeparator",
                                  "data-component-content": "%7B%7D",
                                }),
                                a.jsx(A, {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:170:20",
                                  "data-lov-name": "DropdownMenuItem",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "170",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name": "DropdownMenuItem",
                                  "data-component-content": "%7B%7D",
                                  asChild: !0,
                                  children: a.jsxs(x, {
                                    "data-lov-id":
                                      "src\\components\\AppLayout.tsx:171:22",
                                    "data-lov-name": "Link",
                                    "data-component-path":
                                      "src\\components\\AppLayout.tsx",
                                    "data-component-line": "171",
                                    "data-component-file": "AppLayout.tsx",
                                    "data-component-name": "Link",
                                    "data-component-content": "%7B%7D",
                                    to: `/${p}/app/perfil`,
                                    children: [
                                      a.jsx(ca, {
                                        "data-lov-id":
                                          "src\\components\\AppLayout.tsx:172:24",
                                        "data-lov-name": "User",
                                        "data-component-path":
                                          "src\\components\\AppLayout.tsx",
                                        "data-component-line": "172",
                                        "data-component-file": "AppLayout.tsx",
                                        "data-component-name": "User",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                        className: "mr-2 h-4 w-4",
                                      }),
                                      t("nav.profile"),
                                    ],
                                  }),
                                }),
                                a.jsx(A, {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:176:20",
                                  "data-lov-name": "DropdownMenuItem",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "176",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name": "DropdownMenuItem",
                                  "data-component-content": "%7B%7D",
                                  asChild: !0,
                                  children: a.jsxs(x, {
                                    "data-lov-id":
                                      "src\\components\\AppLayout.tsx:177:22",
                                    "data-lov-name": "Link",
                                    "data-component-path":
                                      "src\\components\\AppLayout.tsx",
                                    "data-component-line": "177",
                                    "data-component-file": "AppLayout.tsx",
                                    "data-component-name": "Link",
                                    "data-component-content": "%7B%7D",
                                    to: `/${p}/app/configuracoes`,
                                    children: [
                                      a.jsx(C, {
                                        "data-lov-id":
                                          "src\\components\\AppLayout.tsx:178:24",
                                        "data-lov-name": "Settings",
                                        "data-component-path":
                                          "src\\components\\AppLayout.tsx",
                                        "data-component-line": "178",
                                        "data-component-file": "AppLayout.tsx",
                                        "data-component-name": "Settings",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                        className: "mr-2 h-4 w-4",
                                      }),
                                      t("nav.settings"),
                                    ],
                                  }),
                                }),
                                a.jsx(z, {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:183:20",
                                  "data-lov-name": "DropdownMenuSeparator",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "183",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name":
                                    "DropdownMenuSeparator",
                                  "data-component-content": "%7B%7D",
                                }),
                                a.jsxs(A, {
                                  "data-lov-id":
                                    "src\\components\\AppLayout.tsx:184:20",
                                  "data-lov-name": "DropdownMenuItem",
                                  "data-component-path":
                                    "src\\components\\AppLayout.tsx",
                                  "data-component-line": "184",
                                  "data-component-file": "AppLayout.tsx",
                                  "data-component-name": "DropdownMenuItem",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22cursor-pointer%20text-destructive%20focus%3Atext-destructive%20focus%3Abg-destructive%2F10%22%7D",
                                  onClick: () => m(),
                                  className:
                                    "cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10",
                                  children: [
                                    a.jsx(sa, {
                                      "data-lov-id":
                                        "src\\components\\AppLayout.tsx:188:22",
                                      "data-lov-name": "LogOut",
                                      "data-component-path":
                                        "src\\components\\AppLayout.tsx",
                                      "data-component-line": "188",
                                      "data-component-file": "AppLayout.tsx",
                                      "data-component-name": "LogOut",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                      className: "mr-2 h-4 w-4",
                                    }),
                                    t("nav.logout"),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            a.jsxs("main", {
              "data-lov-id": "src\\components\\AppLayout.tsx:199:8",
              "data-lov-name": "main",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "199",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "main",
              "data-component-content":
                "%7B%22className%22%3A%22min-h-%5Bcalc(100vh-4rem)%5D%20pb-20%20lg%3Apb-0%20animate-fade-in%22%7D",
              className:
                "min-h-[calc(100vh-4rem)] pb-20 lg:pb-0 animate-fade-in",
              children: [
                a.jsx("div", {
                  "data-lov-id": "src\\components\\AppLayout.tsx:200:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\components\\AppLayout.tsx",
                  "data-component-line": "200",
                  "data-component-file": "AppLayout.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22container%20mx-auto%20px-4%20py-6%22%7D",
                  className: "container mx-auto px-4 py-6",
                  children: a.jsx("div", {
                    "data-lov-id": "src\\components\\AppLayout.tsx:201:12",
                    "data-lov-name": "div",
                    "data-component-path": "src\\components\\AppLayout.tsx",
                    "data-component-line": "201",
                    "data-component-file": "AppLayout.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22mb-6%22%7D",
                    className: "mb-6",
                    children: a.jsx(da, {
                      "data-lov-id": "src\\components\\AppLayout.tsx:202:14",
                      "data-lov-name": "LocalizedBreadcrumbs",
                      "data-component-path": "src\\components\\AppLayout.tsx",
                      "data-component-line": "202",
                      "data-component-file": "AppLayout.tsx",
                      "data-component-name": "LocalizedBreadcrumbs",
                      "data-component-content": "%7B%7D",
                    }),
                  }),
                }),
                a.jsx(ma, {
                  "data-lov-id": "src\\components\\AppLayout.tsx:205:10",
                  "data-lov-name": "DemoModeBanner",
                  "data-component-path": "src\\components\\AppLayout.tsx",
                  "data-component-line": "205",
                  "data-component-file": "AppLayout.tsx",
                  "data-component-name": "DemoModeBanner",
                  "data-component-content": "%7B%7D",
                }),
                a.jsx(F, {
                  "data-lov-id": "src\\components\\AppLayout.tsx:206:10",
                  "data-lov-name": "Outlet",
                  "data-component-path": "src\\components\\AppLayout.tsx",
                  "data-component-line": "206",
                  "data-component-file": "AppLayout.tsx",
                  "data-component-name": "Outlet",
                  "data-component-content": "%7B%7D",
                }),
              ],
            }),
            a.jsx("nav", {
              "data-lov-id": "src\\components\\AppLayout.tsx:210:8",
              "data-lov-name": "nav",
              "data-component-path": "src\\components\\AppLayout.tsx",
              "data-component-line": "210",
              "data-component-file": "AppLayout.tsx",
              "data-component-name": "nav",
              "data-component-content":
                "%7B%22className%22%3A%22lg%3Ahidden%20fixed%20bottom-0%20left-0%20right-0%20bg-background%2F95%20backdrop-blur-sm%20border-t%20z-50%22%7D",
              className:
                "lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t z-50",
              children: a.jsx(I, {
                "data-lov-id": "src\\components\\AppLayout.tsx:211:10",
                "data-lov-name": "LocalizedNavigation",
                "data-component-path": "src\\components\\AppLayout.tsx",
                "data-component-line": "211",
                "data-component-file": "AppLayout.tsx",
                "data-component-name": "LocalizedNavigation",
                "data-component-content": "%7B%7D",
                isMobile: !0,
              }),
            }),
          ],
        }),
      ],
    });
  };
export { Da as default };
