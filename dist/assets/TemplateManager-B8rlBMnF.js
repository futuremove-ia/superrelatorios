import { u as X, j as a, B as p } from "./index-BZzvAVnT.js";
import { r as o } from "./vendor-BgR6OOld.js";
import { C as w, a as A } from "./card-DCmFy9yX.js";
import { B as m } from "./badge-DMGJasfj.js";
import { I as u } from "./input-BnDZujQi.js";
import { L as c } from "./label-DNWlrZfM.js";
import { T as Y } from "./textarea-BnFcy4sU.js";
import { S as r, a as i, b as g, c as x, d as n } from "./select-BPvc3et1.js";
import { D as Z, f as _, a as $, b as aa, c as ea } from "./dialog-CVqcLEoi.js";
import {
  U as ta,
  p as S,
  s as na,
  r as pa,
  t as b,
  u as oa,
  e as T,
  an as C,
  a9 as sa,
  k as ma,
  E as I,
  x as L,
  V as F,
  d as k,
  j as ca,
  ao as P,
  ap as E,
} from "./utils-C25gojUd.js";
import "./router-D2JcpG7e.js";
import "./index-Cda9Zv0V.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-lGW99eWD.js";
const ja = () => {
  const { t } = X(),
    [V, U] = o.useState([]),
    [z, B] = o.useState(!0),
    [l, R] = o.useState(""),
    [v, G] = o.useState("all"),
    [M, O] = o.useState("all"),
    [h, D] = o.useState("grid"),
    [H, d] = o.useState(!1);
  (o.useState(null),
    o.useEffect(() => {
      (async () => {
        (B(!0),
          U([
            {
              id: "1",
              name: "Dashboard Financeiro Mensal",
              description:
                "Dashboard completo com métricas financeiras essenciais para acompanhamento mensal",
              category: "financial",
              type: "dashboard",
              status: "published",
              isPublic: !0,
              isFavorite: !0,
              usageCount: 245,
              rating: 4.8,
              author: "João Silva",
              createdAt: "2024-01-15",
              updatedAt: "2024-03-18",
              tags: ["financeiro", "mensal", "kpi", "dashboard"],
              preview: "/templates/financial-dashboard-preview.png",
              blocks: [
                {
                  id: "1",
                  type: "metric",
                  title: "Receita Total",
                  config: { dataSource: "revenue", format: "currency" },
                  position: { x: 0, y: 0, width: 3, height: 2 },
                },
                {
                  id: "2",
                  type: "chart",
                  title: "Evolução de Vendas",
                  config: { chartType: "line", dataSource: "sales" },
                  position: { x: 3, y: 0, width: 6, height: 4 },
                },
              ],
            },
            {
              id: "2",
              name: "Relatório de Análise de Vendas",
              description:
                "Relatório detalhado para análise de performance de vendas por período",
              category: "sales",
              type: "report",
              status: "published",
              isPublic: !0,
              isFavorite: !1,
              usageCount: 189,
              rating: 4.6,
              author: "Maria Santos",
              createdAt: "2024-02-01",
              updatedAt: "2024-03-15",
              tags: ["vendas", "análise", "performance", "relatório"],
              blocks: [
                {
                  id: "1",
                  type: "table",
                  title: "Top 10 Produtos",
                  config: { dataSource: "products", pagination: !0 },
                  position: { x: 0, y: 0, width: 12, height: 6 },
                },
              ],
            },
            {
              id: "3",
              name: "Dashboard Operacional",
              description:
                "Monitoramento de métricas operacionais em tempo real",
              category: "operational",
              type: "dashboard",
              status: "draft",
              isPublic: !1,
              isFavorite: !0,
              usageCount: 67,
              rating: 4.2,
              author: "Pedro Costa",
              createdAt: "2024-02-20",
              updatedAt: "2024-03-19",
              tags: ["operacional", "kpi", "real-time", "monitoring"],
              blocks: [
                {
                  id: "1",
                  type: "metric",
                  title: "Eficiência Operacional",
                  config: { dataSource: "efficiency", format: "percentage" },
                  position: { x: 0, y: 0, width: 4, height: 2 },
                },
              ],
            },
          ]),
          B(!1));
      })();
    }, []));
  const f = V.filter((e) => {
      const s =
          e.name.toLowerCase().includes(l.toLowerCase()) ||
          e.description.toLowerCase().includes(l.toLowerCase()) ||
          e.tags.some((W) => W.toLowerCase().includes(l.toLowerCase())),
        K = v === "all" || e.category === v,
        Q = M === "all" || e.type === M;
      return s && K && Q;
    }),
    N = (e) => {
      switch (e) {
        case "published":
          return "bg-green-100 text-green-800";
        case "draft":
          return "bg-yellow-100 text-yellow-800";
        case "archived":
          return "bg-gray-100 text-gray-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
    j = (e) => {
      switch (e) {
        case "financial":
          return a.jsx(P, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:192:31",
            "data-lov-name": "BarChart",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "192",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "BarChart",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "operational":
          return a.jsx(b, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:193:33",
            "data-lov-name": "Grid3x3",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "193",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "Grid3x3",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "strategic":
          return a.jsx(k, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:194:31",
            "data-lov-name": "TrendingUp",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "194",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "TrendingUp",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "marketing":
          return a.jsx(ca, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:195:31",
            "data-lov-name": "PieChart",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "195",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "PieChart",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "sales":
          return a.jsx(k, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:196:27",
            "data-lov-name": "TrendingUp",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "196",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "TrendingUp",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        default:
          return a.jsx(T, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:197:22",
            "data-lov-name": "FileText",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "197",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "FileText",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
      }
    },
    y = (e) => {
      switch (e) {
        case "dashboard":
          return a.jsx(E, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:203:31",
            "data-lov-name": "Layout",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "203",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "Layout",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "report":
          return a.jsx(T, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:204:28",
            "data-lov-name": "FileText",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "204",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "FileText",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "analysis":
          return a.jsx(P, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:205:30",
            "data-lov-name": "BarChart",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "205",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "BarChart",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "presentation":
          return a.jsx(E, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:206:34",
            "data-lov-name": "Layout",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "206",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "Layout",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        default:
          return a.jsx(T, {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:207:22",
            "data-lov-name": "FileText",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "207",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "FileText",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
      }
    },
    q = ({ template: e }) =>
      a.jsx(w, {
        "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:212:4",
        "data-lov-name": "Card",
        "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
        "data-component-line": "212",
        "data-component-file": "TemplateManager.tsx",
        "data-component-name": "Card",
        "data-component-content":
          "%7B%22className%22%3A%22hover%3Ashadow-md%20transition-shadow%20cursor-pointer%22%7D",
        className: "hover:shadow-md transition-shadow cursor-pointer",
        children: a.jsxs(A, {
          "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:213:6",
          "data-lov-name": "CardContent",
          "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
          "data-component-line": "213",
          "data-component-file": "TemplateManager.tsx",
          "data-component-name": "CardContent",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:214:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
              "data-component-line": "214",
              "data-component-file": "TemplateManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-start%20justify-between%20mb-3%22%7D",
              className: "flex items-start justify-between mb-3",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:215:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "215",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                  className: "flex items-center space-x-2",
                  children: [
                    j(e.category),
                    a.jsx("h3", {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:217:12",
                      "data-lov-name": "h3",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "217",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "h3",
                      "data-component-content":
                        "%7B%22className%22%3A%22font-semibold%20text-gray-900%20truncate%22%7D",
                      className: "font-semibold text-gray-900 truncate",
                      children: e.name,
                    }),
                    e.isFavorite &&
                      a.jsx(C, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:218:36",
                        "data-lov-name": "Star",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "218",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Star",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20text-yellow-500%20fill-current%22%7D",
                        className: "w-4 h-4 text-yellow-500 fill-current",
                      }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:220:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "220",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20space-x-1%22%7D",
                  className: "flex items-center space-x-1",
                  children: [
                    e.isPublic &&
                      a.jsx(m, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:221:34",
                        "data-lov-name": "Badge",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "221",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Badge",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-xs%22%7D",
                        variant: "secondary",
                        className: "text-xs",
                        children: t("common.public"),
                      }),
                    a.jsx(m, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:222:12",
                      "data-lov-name": "Badge",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "222",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Badge",
                      "data-component-content": "%7B%7D",
                      className: N(e.status),
                      children: e.status,
                    }),
                  ],
                }),
              ],
            }),
            a.jsx("p", {
              "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:228:8",
              "data-lov-name": "p",
              "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
              "data-component-line": "228",
              "data-component-file": "TemplateManager.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-sm%20text-gray-600%20mb-3%20line-clamp-2%22%7D",
              className: "text-sm text-gray-600 mb-3 line-clamp-2",
              children: e.description,
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:230:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
              "data-component-line": "230",
              "data-component-file": "TemplateManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20justify-between%20text-xs%20text-gray-500%20mb-3%22%7D",
              className:
                "flex items-center justify-between text-xs text-gray-500 mb-3",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:231:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "231",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20space-x-3%22%7D",
                  className: "flex items-center space-x-3",
                  children: [
                    a.jsxs("span", {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:232:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "232",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%22%7D",
                      className: "flex items-center",
                      children: [
                        a.jsx(sa, {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:233:14",
                          "data-lov-name": "User",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "233",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "User",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-3%20h-3%20mr-1%22%7D",
                          className: "w-3 h-3 mr-1",
                        }),
                        e.author,
                      ],
                    }),
                    a.jsxs("span", {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:236:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "236",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%22%7D",
                      className: "flex items-center",
                      children: [
                        a.jsx(ma, {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:237:14",
                          "data-lov-name": "Clock",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "237",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "Clock",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-3%20h-3%20mr-1%22%7D",
                          className: "w-3 h-3 mr-1",
                        }),
                        new Date(e.updatedAt).toLocaleDateString(),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:241:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "241",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%22%7D",
                  className: "flex items-center",
                  children: [
                    a.jsx("span", {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:242:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "242",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22text%22%3A%22%E2%AD%90%22%2C%22className%22%3A%22mr-1%22%7D",
                      className: "mr-1",
                      children: "⭐",
                    }),
                    e.rating,
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:247:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
              "data-component-line": "247",
              "data-component-file": "TemplateManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20justify-between%20mb-3%22%7D",
              className: "flex items-center justify-between mb-3",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:248:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "248",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20flex-wrap%20gap-1%22%7D",
                  className: "flex flex-wrap gap-1",
                  children: [
                    e.tags
                      .slice(0, 3)
                      .map((s) =>
                        a.jsx(
                          m,
                          {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:250:14",
                            "data-lov-name": "Badge",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "250",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "Badge",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-xs%22%7D",
                            variant: "outline",
                            className: "text-xs",
                            children: s,
                          },
                          s,
                        ),
                      ),
                    e.tags.length > 3 &&
                      a.jsxs(m, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:255:14",
                        "data-lov-name": "Badge",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "255",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Badge",
                        "data-component-content":
                          "%7B%22text%22%3A%22%2B%22%2C%22className%22%3A%22text-xs%22%7D",
                        variant: "outline",
                        className: "text-xs",
                        children: ["+", e.tags.length - 3],
                      }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:260:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "260",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22text%22%3A%22usos%22%2C%22className%22%3A%22flex%20items-center%20text-xs%20text-gray-500%22%7D",
                  className: "flex items-center text-xs text-gray-500",
                  children: [
                    a.jsx("span", {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:261:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "261",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22mr-1%22%7D",
                      className: "mr-1",
                      children: e.usageCount,
                    }),
                    "usos",
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:266:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
              "data-component-line": "266",
              "data-component-file": "TemplateManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
              className: "flex items-center justify-between",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:267:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "267",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                  className: "flex items-center space-x-2",
                  children: [
                    y(e.type),
                    a.jsx("span", {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:269:12",
                      "data-lov-name": "span",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "269",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "span",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-sm%20text-gray-600%22%7D",
                      className: "text-sm text-gray-600",
                      children: e.type,
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:271:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "271",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20space-x-1%22%7D",
                  className: "flex space-x-1",
                  children: [
                    a.jsx(p, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:272:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "272",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "ghost",
                      size: "sm",
                      children: a.jsx(I, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:273:14",
                        "data-lov-name": "Eye",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "273",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Eye",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                        className: "w-4 h-4",
                      }),
                    }),
                    a.jsx(p, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:275:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "275",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "ghost",
                      size: "sm",
                      children: a.jsx(L, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:276:14",
                        "data-lov-name": "Copy",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "276",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Copy",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                        className: "w-4 h-4",
                      }),
                    }),
                    a.jsx(p, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:278:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "278",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "ghost",
                      size: "sm",
                      children: a.jsx(F, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:279:14",
                        "data-lov-name": "Edit",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "279",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Edit",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                        className: "w-4 h-4",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    J = ({ template: e }) =>
      a.jsx(w, {
        "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:288:4",
        "data-lov-name": "Card",
        "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
        "data-component-line": "288",
        "data-component-file": "TemplateManager.tsx",
        "data-component-name": "Card",
        "data-component-content":
          "%7B%22className%22%3A%22hover%3Ashadow-md%20transition-shadow%22%7D",
        className: "hover:shadow-md transition-shadow",
        children: a.jsx(A, {
          "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:289:6",
          "data-lov-name": "CardContent",
          "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
          "data-component-line": "289",
          "data-component-file": "TemplateManager.tsx",
          "data-component-name": "CardContent",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          children: a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:290:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "290",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
            className: "flex items-center justify-between",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:291:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "291",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20space-x-4%20flex-1%22%7D",
                className: "flex items-center space-x-4 flex-1",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:292:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "292",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                    className: "flex items-center space-x-2",
                    children: [j(e.category), y(e.type)],
                  }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:296:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "296",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex-1%22%7D",
                    className: "flex-1",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:297:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "297",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                        className: "flex items-center space-x-2",
                        children: [
                          a.jsx("h3", {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:298:16",
                            "data-lov-name": "h3",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "298",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "h3",
                            "data-component-content":
                              "%7B%22className%22%3A%22font-semibold%20text-gray-900%22%7D",
                            className: "font-semibold text-gray-900",
                            children: e.name,
                          }),
                          e.isFavorite &&
                            a.jsx(C, {
                              "data-lov-id":
                                "src\\pages\\app\\TemplateManager.tsx:299:40",
                              "data-lov-name": "Star",
                              "data-component-path":
                                "src\\pages\\app\\TemplateManager.tsx",
                              "data-component-line": "299",
                              "data-component-file": "TemplateManager.tsx",
                              "data-component-name": "Star",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20text-yellow-500%20fill-current%22%7D",
                              className: "w-4 h-4 text-yellow-500 fill-current",
                            }),
                        ],
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:301:14",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "301",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-sm%20text-gray-600%22%7D",
                        className: "text-sm text-gray-600",
                        children: e.description,
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:302:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "302",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20space-x-4%20mt-1%20text-xs%20text-gray-500%22%7D",
                        className:
                          "flex items-center space-x-4 mt-1 text-xs text-gray-500",
                        children: [
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:303:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "303",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%7D",
                            children: e.author,
                          }),
                          a.jsxs("span", {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:304:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "304",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22text%22%3A%22usos%22%7D",
                            children: [e.usageCount, " usos"],
                          }),
                          a.jsxs("span", {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:305:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "305",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22text%22%3A%22%E2%AD%90%22%7D",
                            children: ["⭐ ", e.rating],
                          }),
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:306:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "306",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%7D",
                            children: new Date(
                              e.updatedAt,
                            ).toLocaleDateString(),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:311:10",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "311",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                className: "flex items-center space-x-2",
                children: [
                  a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:312:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "312",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20flex-wrap%20gap-1%20max-w-xs%22%7D",
                    className: "flex flex-wrap gap-1 max-w-xs",
                    children: e.tags
                      .slice(0, 2)
                      .map((s) =>
                        a.jsx(
                          m,
                          {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:314:16",
                            "data-lov-name": "Badge",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "314",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "Badge",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-xs%22%7D",
                            variant: "outline",
                            className: "text-xs",
                            children: s,
                          },
                          s,
                        ),
                      ),
                  }),
                  a.jsx(m, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:319:12",
                    "data-lov-name": "Badge",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "319",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "Badge",
                    "data-component-content": "%7B%7D",
                    className: N(e.status),
                    children: e.status,
                  }),
                  e.isPublic &&
                    a.jsx(m, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:322:34",
                      "data-lov-name": "Badge",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "322",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Badge",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-xs%22%7D",
                      variant: "secondary",
                      className: "text-xs",
                      children: t("common.public"),
                    }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:323:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "323",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20space-x-1%22%7D",
                    className: "flex space-x-1",
                    children: [
                      a.jsx(p, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:324:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "324",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "ghost",
                        size: "sm",
                        children: a.jsx(I, {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:325:16",
                          "data-lov-name": "Eye",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "325",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "Eye",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                          className: "w-4 h-4",
                        }),
                      }),
                      a.jsx(p, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:327:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "327",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "ghost",
                        size: "sm",
                        children: a.jsx(L, {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:328:16",
                          "data-lov-name": "Copy",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "328",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "Copy",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                          className: "w-4 h-4",
                        }),
                      }),
                      a.jsx(p, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:330:14",
                        "data-lov-name": "Button",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "330",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Button",
                        "data-component-content": "%7B%7D",
                        variant: "ghost",
                        size: "sm",
                        children: a.jsx(F, {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:331:16",
                          "data-lov-name": "Edit",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "331",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "Edit",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                          className: "w-4 h-4",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
  return z
    ? a.jsx("div", {
        "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:342:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
        "data-component-line": "342",
        "data-component-file": "TemplateManager.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22flex%20items-center%20justify-center%20h-96%22%7D",
        className: "flex items-center justify-center h-96",
        children: a.jsx("div", {
          "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:343:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
          "data-component-line": "343",
          "data-component-file": "TemplateManager.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22animate-spin%20rounded-full%20h-32%20w-32%20border-b-2%20border-blue-600%22%7D",
          className:
            "animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600",
        }),
      })
    : a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:349:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
        "data-component-line": "349",
        "data-component-file": "TemplateManager.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22space-y-6%20p-6%22%7D",
        className: "space-y-6 p-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:351:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "351",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
            className: "flex items-center justify-between",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:352:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "352",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  a.jsx("h1", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:353:10",
                    "data-lov-name": "h1",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "353",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "h1",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-3xl%20font-bold%20text-gray-900%22%7D",
                    className: "text-3xl font-bold text-gray-900",
                    children: t("templates.title"),
                  }),
                  a.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:354:10",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "354",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-gray-600%20mt-1%22%7D",
                    className: "text-gray-600 mt-1",
                    children: t("templates.subtitle"),
                  }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:356:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "356",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20space-x-2%22%7D",
                className: "flex space-x-2",
                children: [
                  a.jsxs(p, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:357:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "357",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    variant: "outline",
                    children: [
                      a.jsx(ta, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:358:12",
                        "data-lov-name": "Upload",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "358",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "Upload",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                        className: "w-4 h-4 mr-2",
                      }),
                      t("templates.import"),
                    ],
                  }),
                  a.jsxs(Z, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:361:10",
                    "data-lov-name": "Dialog",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "361",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "Dialog",
                    "data-component-content": "%7B%7D",
                    open: H,
                    onOpenChange: d,
                    children: [
                      a.jsx(_, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:362:12",
                        "data-lov-name": "DialogTrigger",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "362",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "DialogTrigger",
                        "data-component-content": "%7B%7D",
                        asChild: !0,
                        children: a.jsxs(p, {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:363:14",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "363",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "Button",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsx(S, {
                              "data-lov-id":
                                "src\\pages\\app\\TemplateManager.tsx:364:16",
                              "data-lov-name": "Plus",
                              "data-component-path":
                                "src\\pages\\app\\TemplateManager.tsx",
                              "data-component-line": "364",
                              "data-component-file": "TemplateManager.tsx",
                              "data-component-name": "Plus",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                              className: "w-4 h-4 mr-2",
                            }),
                            t("templates.create"),
                          ],
                        }),
                      }),
                      a.jsxs($, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:368:12",
                        "data-lov-name": "DialogContent",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "368",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "DialogContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22max-w-2xl%22%7D",
                        className: "max-w-2xl",
                        children: [
                          a.jsx(aa, {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:369:14",
                            "data-lov-name": "DialogHeader",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "369",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "DialogHeader",
                            "data-component-content": "%7B%7D",
                            children: a.jsx(ea, {
                              "data-lov-id":
                                "src\\pages\\app\\TemplateManager.tsx:370:16",
                              "data-lov-name": "DialogTitle",
                              "data-component-path":
                                "src\\pages\\app\\TemplateManager.tsx",
                              "data-component-line": "370",
                              "data-component-file": "TemplateManager.tsx",
                              "data-component-name": "DialogTitle",
                              "data-component-content": "%7B%7D",
                              children: t("templates.createNew"),
                            }),
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\TemplateManager.tsx:372:14",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\TemplateManager.tsx",
                            "data-component-line": "372",
                            "data-component-file": "TemplateManager.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22space-y-4%22%7D",
                            className: "space-y-4",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\TemplateManager.tsx:373:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\TemplateManager.tsx",
                                "data-component-line": "373",
                                "data-component-file": "TemplateManager.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:374:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "374",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx(c, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:375:20",
                                        "data-lov-name": "Label",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "375",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Label",
                                        "data-component-content": "%7B%7D",
                                        htmlFor: "name",
                                        children: t("templates.name"),
                                      }),
                                      a.jsx(u, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:376:20",
                                        "data-lov-name": "Input",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "376",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Input",
                                        "data-component-content": "%7B%7D",
                                        id: "name",
                                        placeholder: t(
                                          "templates.namePlaceholder",
                                        ),
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:378:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "378",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx(c, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:379:20",
                                        "data-lov-name": "Label",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "379",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Label",
                                        "data-component-content": "%7B%7D",
                                        htmlFor: "category",
                                        children: t("templates.category"),
                                      }),
                                      a.jsxs(r, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:380:20",
                                        "data-lov-name": "Select",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "380",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Select",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          a.jsx(i, {
                                            "data-lov-id":
                                              "src\\pages\\app\\TemplateManager.tsx:381:22",
                                            "data-lov-name": "SelectTrigger",
                                            "data-component-path":
                                              "src\\pages\\app\\TemplateManager.tsx",
                                            "data-component-line": "381",
                                            "data-component-file":
                                              "TemplateManager.tsx",
                                            "data-component-name":
                                              "SelectTrigger",
                                            "data-component-content": "%7B%7D",
                                            children: a.jsx(g, {
                                              "data-lov-id":
                                                "src\\pages\\app\\TemplateManager.tsx:382:24",
                                              "data-lov-name": "SelectValue",
                                              "data-component-path":
                                                "src\\pages\\app\\TemplateManager.tsx",
                                              "data-component-line": "382",
                                              "data-component-file":
                                                "TemplateManager.tsx",
                                              "data-component-name":
                                                "SelectValue",
                                              "data-component-content":
                                                "%7B%7D",
                                              placeholder: t(
                                                "templates.selectCategory",
                                              ),
                                            }),
                                          }),
                                          a.jsxs(x, {
                                            "data-lov-id":
                                              "src\\pages\\app\\TemplateManager.tsx:384:22",
                                            "data-lov-name": "SelectContent",
                                            "data-component-path":
                                              "src\\pages\\app\\TemplateManager.tsx",
                                            "data-component-line": "384",
                                            "data-component-file":
                                              "TemplateManager.tsx",
                                            "data-component-name":
                                              "SelectContent",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:385:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "385",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "financial",
                                                children: t(
                                                  "templates.categories.financial",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:386:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "386",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "operational",
                                                children: t(
                                                  "templates.categories.operational",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:387:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "387",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "strategic",
                                                children: t(
                                                  "templates.categories.strategic",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:388:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "388",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "marketing",
                                                children: t(
                                                  "templates.categories.marketing",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:389:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "389",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "sales",
                                                children: t(
                                                  "templates.categories.sales",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:390:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "390",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "custom",
                                                children: t(
                                                  "templates.categories.custom",
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\TemplateManager.tsx:395:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\TemplateManager.tsx",
                                "data-component-line": "395",
                                "data-component-file": "TemplateManager.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx(c, {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:396:18",
                                    "data-lov-name": "Label",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "396",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "Label",
                                    "data-component-content": "%7B%7D",
                                    htmlFor: "description",
                                    children: t("templates.description"),
                                  }),
                                  a.jsx(Y, {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:397:18",
                                    "data-lov-name": "Textarea",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "397",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "Textarea",
                                    "data-component-content": "%7B%7D",
                                    id: "description",
                                    placeholder: t(
                                      "templates.descriptionPlaceholder",
                                    ),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\TemplateManager.tsx:399:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\TemplateManager.tsx",
                                "data-component-line": "399",
                                "data-component-file": "TemplateManager.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:400:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "400",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx(c, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:401:20",
                                        "data-lov-name": "Label",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "401",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Label",
                                        "data-component-content": "%7B%7D",
                                        htmlFor: "type",
                                        children: t("templates.type"),
                                      }),
                                      a.jsxs(r, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:402:20",
                                        "data-lov-name": "Select",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "402",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Select",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          a.jsx(i, {
                                            "data-lov-id":
                                              "src\\pages\\app\\TemplateManager.tsx:403:22",
                                            "data-lov-name": "SelectTrigger",
                                            "data-component-path":
                                              "src\\pages\\app\\TemplateManager.tsx",
                                            "data-component-line": "403",
                                            "data-component-file":
                                              "TemplateManager.tsx",
                                            "data-component-name":
                                              "SelectTrigger",
                                            "data-component-content": "%7B%7D",
                                            children: a.jsx(g, {
                                              "data-lov-id":
                                                "src\\pages\\app\\TemplateManager.tsx:404:24",
                                              "data-lov-name": "SelectValue",
                                              "data-component-path":
                                                "src\\pages\\app\\TemplateManager.tsx",
                                              "data-component-line": "404",
                                              "data-component-file":
                                                "TemplateManager.tsx",
                                              "data-component-name":
                                                "SelectValue",
                                              "data-component-content":
                                                "%7B%7D",
                                              placeholder: t(
                                                "templates.selectType",
                                              ),
                                            }),
                                          }),
                                          a.jsxs(x, {
                                            "data-lov-id":
                                              "src\\pages\\app\\TemplateManager.tsx:406:22",
                                            "data-lov-name": "SelectContent",
                                            "data-component-path":
                                              "src\\pages\\app\\TemplateManager.tsx",
                                            "data-component-line": "406",
                                            "data-component-file":
                                              "TemplateManager.tsx",
                                            "data-component-name":
                                              "SelectContent",
                                            "data-component-content": "%7B%7D",
                                            children: [
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:407:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "407",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "dashboard",
                                                children: t(
                                                  "templates.types.dashboard",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:408:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "408",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "report",
                                                children: t(
                                                  "templates.types.report",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:409:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "409",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "analysis",
                                                children: t(
                                                  "templates.types.analysis",
                                                ),
                                              }),
                                              a.jsx(n, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\TemplateManager.tsx:410:24",
                                                "data-lov-name": "SelectItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\TemplateManager.tsx",
                                                "data-component-line": "410",
                                                "data-component-file":
                                                  "TemplateManager.tsx",
                                                "data-component-name":
                                                  "SelectItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                value: "presentation",
                                                children: t(
                                                  "templates.types.presentation",
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:414:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "414",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx(c, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:415:20",
                                        "data-lov-name": "Label",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "415",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Label",
                                        "data-component-content": "%7B%7D",
                                        htmlFor: "tags",
                                        children: t("templates.tags"),
                                      }),
                                      a.jsx(u, {
                                        "data-lov-id":
                                          "src\\pages\\app\\TemplateManager.tsx:416:20",
                                        "data-lov-name": "Input",
                                        "data-component-path":
                                          "src\\pages\\app\\TemplateManager.tsx",
                                        "data-component-line": "416",
                                        "data-component-file":
                                          "TemplateManager.tsx",
                                        "data-component-name": "Input",
                                        "data-component-content": "%7B%7D",
                                        id: "tags",
                                        placeholder: t(
                                          "templates.tagsPlaceholder",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\TemplateManager.tsx:419:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\TemplateManager.tsx",
                                "data-component-line": "419",
                                "data-component-file": "TemplateManager.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22flex%20justify-end%20space-x-2%22%7D",
                                className: "flex justify-end space-x-2",
                                children: [
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:420:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "420",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content": "%7B%7D",
                                    variant: "outline",
                                    onClick: () => d(!1),
                                    children: t("common.cancel"),
                                  }),
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\TemplateManager.tsx:423:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\TemplateManager.tsx",
                                    "data-component-line": "423",
                                    "data-component-file":
                                      "TemplateManager.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content": "%7B%7D",
                                    onClick: () => d(!1),
                                    children: t("templates.create"),
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
          }),
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:434:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "434",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
            className: "flex items-center space-x-4",
            children: [
              a.jsx("div", {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:435:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "435",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex-1%22%7D",
                className: "flex-1",
                children: a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:436:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "436",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22relative%22%7D",
                  className: "relative",
                  children: [
                    a.jsx(na, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:437:12",
                      "data-lov-name": "Search",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "437",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Search",
                      "data-component-content":
                        "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20text-gray-400%20w-4%20h-4%22%7D",
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4",
                    }),
                    a.jsx(u, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:438:12",
                      "data-lov-name": "Input",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "438",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Input",
                      "data-component-content":
                        "%7B%22className%22%3A%22pl-10%22%7D",
                      placeholder: t("templates.searchPlaceholder"),
                      value: l,
                      onChange: (e) => R(e.target.value),
                      className: "pl-10",
                    }),
                  ],
                }),
              }),
              a.jsxs(r, {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:446:8",
                "data-lov-name": "Select",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "446",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "Select",
                "data-component-content": "%7B%7D",
                value: v,
                onValueChange: G,
                children: [
                  a.jsx(i, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:447:10",
                    "data-lov-name": "SelectTrigger",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "447",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "SelectTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-48%22%7D",
                    className: "w-48",
                    children: a.jsx(g, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:448:12",
                      "data-lov-name": "SelectValue",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "448",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "SelectValue",
                      "data-component-content": "%7B%7D",
                      placeholder: t("templates.filterByCategory"),
                    }),
                  }),
                  a.jsxs(x, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:450:10",
                    "data-lov-name": "SelectContent",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "450",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "SelectContent",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:451:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "451",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "all",
                        children: t("templates.allCategories"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:452:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "452",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "financial",
                        children: t("templates.categories.financial"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:453:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "453",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "operational",
                        children: t("templates.categories.operational"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:454:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "454",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "strategic",
                        children: t("templates.categories.strategic"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:455:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "455",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "marketing",
                        children: t("templates.categories.marketing"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:456:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "456",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "sales",
                        children: t("templates.categories.sales"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:457:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "457",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "custom",
                        children: t("templates.categories.custom"),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(r, {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:460:8",
                "data-lov-name": "Select",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "460",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "Select",
                "data-component-content": "%7B%7D",
                value: M,
                onValueChange: O,
                children: [
                  a.jsx(i, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:461:10",
                    "data-lov-name": "SelectTrigger",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "461",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "SelectTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-48%22%7D",
                    className: "w-48",
                    children: a.jsx(g, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:462:12",
                      "data-lov-name": "SelectValue",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "462",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "SelectValue",
                      "data-component-content": "%7B%7D",
                      placeholder: t("templates.filterByType"),
                    }),
                  }),
                  a.jsxs(x, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:464:10",
                    "data-lov-name": "SelectContent",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "464",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "SelectContent",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:465:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "465",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "all",
                        children: t("templates.allTypes"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:466:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "466",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "dashboard",
                        children: t("templates.types.dashboard"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:467:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "467",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "report",
                        children: t("templates.types.report"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:468:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "468",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "analysis",
                        children: t("templates.types.analysis"),
                      }),
                      a.jsx(n, {
                        "data-lov-id":
                          "src\\pages\\app\\TemplateManager.tsx:469:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\TemplateManager.tsx",
                        "data-component-line": "469",
                        "data-component-file": "TemplateManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "presentation",
                        children: t("templates.types.presentation"),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(p, {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:472:8",
                "data-lov-name": "Button",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "472",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                children: [
                  a.jsx(pa, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:473:10",
                    "data-lov-name": "Filter",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "473",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "Filter",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  t("common.filters"),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:476:8",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                "data-component-line": "476",
                "data-component-file": "TemplateManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20items-center%20space-x-1%20border%20rounded-md%20p-1%22%7D",
                className: "flex items-center space-x-1 border rounded-md p-1",
                children: [
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:477:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "477",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    variant: h === "grid" ? "default" : "ghost",
                    size: "sm",
                    onClick: () => D("grid"),
                    children: a.jsx(b, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:482:12",
                      "data-lov-name": "Grid3x3",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "482",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Grid3x3",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                      className: "w-4 h-4",
                    }),
                  }),
                  a.jsx(p, {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:484:10",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "484",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    variant: h === "list" ? "default" : "ghost",
                    size: "sm",
                    onClick: () => D("list"),
                    children: a.jsx(oa, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:489:12",
                      "data-lov-name": "List",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "489",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "List",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                      className: "w-4 h-4",
                    }),
                  }),
                ],
              }),
            ],
          }),
          a.jsx("div", {
            "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:495:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
            "data-component-line": "495",
            "data-component-file": "TemplateManager.tsx",
            "data-component-name": "div",
            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
            className: "space-y-4",
            children:
              h === "grid"
                ? a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:497:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "497",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                    children: f.map((e) =>
                      a.jsx(
                        q,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:499:14",
                          "data-lov-name": "TemplateCard",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "499",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "TemplateCard",
                          "data-component-content": "%7B%7D",
                          template: e,
                        },
                        e.id,
                      ),
                    ),
                  })
                : a.jsx("div", {
                    "data-lov-id":
                      "src\\pages\\app\\TemplateManager.tsx:503:10",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\TemplateManager.tsx",
                    "data-component-line": "503",
                    "data-component-file": "TemplateManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-2%22%7D",
                    className: "space-y-2",
                    children: f.map((e) =>
                      a.jsx(
                        J,
                        {
                          "data-lov-id":
                            "src\\pages\\app\\TemplateManager.tsx:505:14",
                          "data-lov-name": "TemplateListItem",
                          "data-component-path":
                            "src\\pages\\app\\TemplateManager.tsx",
                          "data-component-line": "505",
                          "data-component-file": "TemplateManager.tsx",
                          "data-component-name": "TemplateListItem",
                          "data-component-content": "%7B%7D",
                          template: e,
                        },
                        e.id,
                      ),
                    ),
                  }),
          }),
          f.length === 0 &&
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:513:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
              "data-component-line": "513",
              "data-component-file": "TemplateManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22text-center%20py-12%22%7D",
              className: "text-center py-12",
              children: [
                a.jsx(T, {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:514:10",
                  "data-lov-name": "FileText",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "514",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "FileText",
                  "data-component-content":
                    "%7B%22className%22%3A%22w-12%20h-12%20text-gray-400%20mx-auto%20mb-4%22%7D",
                  className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                }),
                a.jsx("h3", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:515:10",
                  "data-lov-name": "h3",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "515",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "h3",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-lg%20font-semibold%20text-gray-900%20mb-2%22%7D",
                  className: "text-lg font-semibold text-gray-900 mb-2",
                  children: t("templates.noResults"),
                }),
                a.jsx("p", {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:518:10",
                  "data-lov-name": "p",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "518",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-gray-600%20mb-4%22%7D",
                  className: "text-gray-600 mb-4",
                  children: t("templates.noResultsDescription"),
                }),
                a.jsxs(p, {
                  "data-lov-id": "src\\pages\\app\\TemplateManager.tsx:521:10",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\TemplateManager.tsx",
                  "data-component-line": "521",
                  "data-component-file": "TemplateManager.tsx",
                  "data-component-name": "Button",
                  "data-component-content": "%7B%7D",
                  onClick: () => d(!0),
                  children: [
                    a.jsx(S, {
                      "data-lov-id":
                        "src\\pages\\app\\TemplateManager.tsx:522:12",
                      "data-lov-name": "Plus",
                      "data-component-path":
                        "src\\pages\\app\\TemplateManager.tsx",
                      "data-component-line": "522",
                      "data-component-file": "TemplateManager.tsx",
                      "data-component-name": "Plus",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                      className: "w-4 h-4 mr-2",
                    }),
                    t("templates.createFirst"),
                  ],
                }),
              ],
            }),
        ],
      });
};
export { ja as default };
