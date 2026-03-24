import { j as a, B as d, d as P, u as T } from "./index-BZzvAVnT.js";
import { r as s } from "./vendor-BgR6OOld.js";
import { a as S, L as I } from "./router-D2JcpG7e.js";
import { C as x, a as g, b as L, c as z } from "./card-DCmFy9yX.js";
import { I as _ } from "./input-BnDZujQi.js";
import { B as u } from "./badge-DMGJasfj.js";
import { D as N, a as b, b as w, c as v } from "./dropdown-menu-DR3vwdOX.js";
import {
  p as r,
  a4 as D,
  s as E,
  t as H,
  u as $,
  v as B,
  V as j,
  z as A,
  o as G,
  d as R,
  B as V,
  h as U,
  b as q,
  a5 as O,
} from "./utils-C25gojUd.js";
import { A as J } from "./AISidebar-Nt5highz.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-DUaPDS5r.js";
const K = ({
    onClick: p,
    icon: e = a.jsx(r, {
      "data-lov-id": "src\\components\\ui\\floating-button.tsx:15:9",
      "data-lov-name": "Plus",
      "data-component-path": "src\\components\\ui\\floating-button.tsx",
      "data-component-line": "15",
      "data-component-file": "floating-button.tsx",
      "data-component-name": "Plus",
      "data-component-content": "%7B%22className%22%3A%22h-6%20w-6%22%7D",
      className: "h-6 w-6",
    }),
    className: m,
    children: l = "Novo Relatório",
  }) =>
    a.jsxs(d, {
      "data-lov-id": "src\\components\\ui\\floating-button.tsx:20:4",
      "data-lov-name": "Button",
      "data-component-path": "src\\components\\ui\\floating-button.tsx",
      "data-component-line": "20",
      "data-component-file": "floating-button.tsx",
      "data-component-name": "Button",
      "data-component-content": "%7B%7D",
      onClick: p,
      className: P(
        "fixed bottom-6 right-6 z-50 h-14 px-6 shadow-lg hover:shadow-xl transition-all duration-200",
        "bg-primary hover:bg-primary-dark text-primary-foreground",
        "rounded-full flex items-center gap-2",
        "animate-scale-in",
        m,
      ),
      children: [
        e,
        a.jsx("span", {
          "data-lov-id": "src\\components\\ui\\floating-button.tsx:31:6",
          "data-lov-name": "span",
          "data-component-path": "src\\components\\ui\\floating-button.tsx",
          "data-component-line": "31",
          "data-component-file": "floating-button.tsx",
          "data-component-name": "span",
          "data-component-content":
            "%7B%22className%22%3A%22hidden%20sm%3Ainline%22%7D",
          className: "hidden sm:inline",
          children: l,
        }),
      ],
    }),
  pa = () => {
    const p = S(),
      { t: e, i18n: m } = T(),
      [l, y] = s.useState([]),
      [i, h] = s.useState([]),
      [n, C] = s.useState(""),
      [F, f] = s.useState("list"),
      [M, k] = s.useState(!0);
    return (
      s.useEffect(() => {
        const t = [
          {
            id: "1",
            name: "Relatórios Financeiros",
            icon: G,
            color: "bg-blue-50 text-blue-600 border-blue-100",
            reportCount: 12,
            lastModified: "2024-01-15",
            description: "Análises financeiras e orçamentárias",
          },
          {
            id: "2",
            name: "Vendas & Marketing",
            icon: R,
            color: "bg-indigo-50 text-indigo-600 border-indigo-100",
            reportCount: 8,
            lastModified: "2024-01-14",
            description: "Performance de vendas e campanhas",
          },
          {
            id: "3",
            name: "Operacional",
            icon: V,
            color: "bg-slate-50 text-slate-600 border-slate-100",
            reportCount: 5,
            lastModified: "2024-01-13",
            description: "Processos e eficiência operacional",
          },
          {
            id: "4",
            name: "Recursos Humanos",
            icon: U,
            color: "bg-orange-50 text-orange-600 border-orange-100",
            reportCount: 3,
            lastModified: "2024-01-12",
            description: "Gestão de pessoas e talentos",
          },
          {
            id: "5",
            name: "Projetos Estratégicos",
            icon: q,
            color: "bg-rose-50 text-rose-600 border-rose-100",
            reportCount: 7,
            lastModified: "2024-01-11",
            description: "Acompanhamento de projetos especiais",
          },
          {
            id: "6",
            name: "Compliance & Auditoria",
            icon: O,
            color: "bg-zinc-50 text-zinc-600 border-zinc-100",
            reportCount: 4,
            lastModified: "2024-01-10",
            description: "Conformidade e auditorias internas",
          },
        ];
        setTimeout(() => {
          (y(t), h(t), k(!1));
        }, 1e3);
      }, []),
      s.useEffect(() => {
        h(
          n
            ? l.filter((t) => {
                var o;
                return (
                  t.name.toLowerCase().includes(n.toLowerCase()) ||
                  ((o = t.description) == null
                    ? void 0
                    : o.toLowerCase().includes(n.toLowerCase()))
                );
              })
            : l,
        );
      }, [l, n]),
      M
        ? a.jsx("div", {
            "data-lov-id": "src\\pages\\app\\Folders.tsx:114:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\Folders.tsx",
            "data-component-line": "114",
            "data-component-file": "Folders.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22p-6%20max-w-7xl%20mx-auto%22%7D",
            className: "p-6 max-w-7xl mx-auto",
            children: a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\Folders.tsx:115:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Folders.tsx",
              "data-component-line": "115",
              "data-component-file": "Folders.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22animate-pulse%20space-y-6%22%7D",
              className: "animate-pulse space-y-6",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Folders.tsx:116:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Folders.tsx",
                  "data-component-line": "116",
                  "data-component-file": "Folders.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D",
                  className: "flex justify-between items-center",
                  children: [
                    a.jsx("div", {
                      "data-lov-id": "src\\pages\\app\\Folders.tsx:117:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Folders.tsx",
                      "data-component-line": "117",
                      "data-component-file": "Folders.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-8%20bg-muted%20rounded%20w-48%22%7D",
                      className: "h-8 bg-muted rounded w-48",
                    }),
                    a.jsx("div", {
                      "data-lov-id": "src\\pages\\app\\Folders.tsx:118:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Folders.tsx",
                      "data-component-line": "118",
                      "data-component-file": "Folders.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-10%20bg-muted%20rounded%20w-32%22%7D",
                      className: "h-10 bg-muted rounded w-32",
                    }),
                  ],
                }),
                a.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\Folders.tsx:120:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Folders.tsx",
                  "data-component-line": "120",
                  "data-component-file": "Folders.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-10%20bg-muted%20rounded%20w-full%22%7D",
                  className: "h-10 bg-muted rounded w-full",
                }),
                a.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\Folders.tsx:121:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Folders.tsx",
                  "data-component-line": "121",
                  "data-component-file": "Folders.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                  children: [1, 2, 3, 4, 5, 6].map((t) =>
                    a.jsx(
                      "div",
                      {
                        "data-lov-id": "src\\pages\\app\\Folders.tsx:123:14",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\app\\Folders.tsx",
                        "data-component-line": "123",
                        "data-component-file": "Folders.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-40%20bg-muted%20rounded-2xl%22%7D",
                        className: "h-40 bg-muted rounded-2xl",
                      },
                      t,
                    ),
                  ),
                }),
              ],
            }),
          })
        : a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\Folders.tsx:132:4",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\Folders.tsx",
            "data-component-line": "132",
            "data-component-file": "Folders.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22min-h-screen%20bg-gradient-subtle%20w-full%22%7D",
            className: "min-h-screen bg-gradient-subtle w-full",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\Folders.tsx:133:6",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\Folders.tsx",
                "data-component-line": "133",
                "data-component-file": "Folders.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20w-full%20overflow-hidden%22%7D",
                className: "flex w-full overflow-hidden",
                children: [
                  a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\Folders.tsx:135:8",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Folders.tsx",
                    "data-component-line": "135",
                    "data-component-file": "Folders.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex-1%20min-w-0%20p-4%20sm%3Ap-6%20space-y-6%22%7D",
                    className: "flex-1 min-w-0 p-4 sm:p-6 space-y-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id": "src\\pages\\app\\Folders.tsx:137:10",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\app\\Folders.tsx",
                        "data-component-line": "137",
                        "data-component-file": "Folders.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-4%20animate-fade-in%22%7D",
                        className:
                          "flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\Folders.tsx:138:12",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\Folders.tsx",
                            "data-component-line": "138",
                            "data-component-file": "Folders.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                              a.jsxs("h1", {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:139:14",
                                "data-lov-name": "h1",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "139",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "h1",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-2xl%20sm%3Atext-3xl%20font-bold%20text-foreground%20flex%20items-center%20gap-3%22%7D",
                                className:
                                  "text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-3",
                                children: [
                                  a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\Folders.tsx:140:16",
                                    "data-lov-name": "Folder",
                                    "data-component-path":
                                      "src\\pages\\app\\Folders.tsx",
                                    "data-component-line": "140",
                                    "data-component-file": "Folders.tsx",
                                    "data-component-name": "Folder",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-7%20w-7%20text-primary%22%7D",
                                    className: "h-7 w-7 text-primary",
                                  }),
                                  e("folders.title"),
                                ],
                              }),
                              a.jsx("p", {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:143:14",
                                "data-lov-name": "p",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "143",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "p",
                                "data-component-content":
                                  "%7B%22className%22%3A%22text-muted-foreground%20mt-1%20sm%3Amt-2%22%7D",
                                className: "text-muted-foreground mt-1 sm:mt-2",
                                children: e("folders.subtitle"),
                              }),
                            ],
                          }),
                          a.jsxs(d, {
                            "data-lov-id":
                              "src\\pages\\app\\Folders.tsx:148:12",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\Folders.tsx",
                            "data-component-line": "148",
                            "data-component-file": "Folders.tsx",
                            "data-component-name": "Button",
                            "data-component-content":
                              "%7B%22className%22%3A%22self-start%20sm%3Aself-auto%20card-hover%22%7D",
                            size: "lg",
                            className: "self-start sm:self-auto card-hover",
                            onClick: () => p("/app/novo-relatorio"),
                            children: [
                              a.jsx(r, {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:149:16",
                                "data-lov-name": "Plus",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "149",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "Plus",
                                "data-component-content":
                                  "%7B%22className%22%3A%22mr-2%20h-5%20w-5%22%7D",
                                className: "mr-2 h-5 w-5",
                              }),
                              a.jsx("span", {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:150:16",
                                "data-lov-name": "span",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "150",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "span",
                                "data-component-content":
                                  "%7B%22className%22%3A%22hidden%20sm%3Ainline%22%7D",
                                className: "hidden sm:inline",
                                children: e("folders.new_folder_button"),
                              }),
                              a.jsx("span", {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:151:16",
                                "data-lov-name": "span",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "151",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "span",
                                "data-component-content":
                                  "%7B%22className%22%3A%22sm%3Ahidden%22%7D",
                                className: "sm:hidden",
                                children: e("common.next"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      a.jsx("div", {
                        "data-lov-id": "src\\pages\\app\\Folders.tsx:157:10",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\app\\Folders.tsx",
                        "data-component-line": "157",
                        "data-component-file": "Folders.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22animate-fade-in%22%7D",
                        className: "animate-fade-in",
                        style: { animationDelay: "0.1s" },
                        children: a.jsx(x, {
                          "data-lov-id": "src\\pages\\app\\Folders.tsx:158:12",
                          "data-lov-name": "Card",
                          "data-component-path": "src\\pages\\app\\Folders.tsx",
                          "data-component-line": "158",
                          "data-component-file": "Folders.tsx",
                          "data-component-name": "Card",
                          "data-component-content": "%7B%7D",
                          children: a.jsx(g, {
                            "data-lov-id":
                              "src\\pages\\app\\Folders.tsx:159:14",
                            "data-lov-name": "CardContent",
                            "data-component-path":
                              "src\\pages\\app\\Folders.tsx",
                            "data-component-line": "159",
                            "data-component-file": "Folders.tsx",
                            "data-component-name": "CardContent",
                            "data-component-content":
                              "%7B%22className%22%3A%22p-4%22%7D",
                            className: "p-4",
                            children: a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\Folders.tsx:160:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\Folders.tsx",
                              "data-component-line": "160",
                              "data-component-file": "Folders.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-4%20items-center%22%7D",
                              className:
                                "flex flex-col sm:flex-row gap-4 items-center",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Folders.tsx:161:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\Folders.tsx",
                                  "data-component-line": "161",
                                  "data-component-file": "Folders.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22relative%20flex-1%20w-full%22%7D",
                                  className: "relative flex-1 w-full",
                                  children: [
                                    a.jsx(E, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Folders.tsx:162:20",
                                      "data-lov-name": "Search",
                                      "data-component-path":
                                        "src\\pages\\app\\Folders.tsx",
                                      "data-component-line": "162",
                                      "data-component-file": "Folders.tsx",
                                      "data-component-name": "Search",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20text-muted-foreground%20h-4%20w-4%22%7D",
                                      className:
                                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                                    }),
                                    a.jsx(_, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Folders.tsx:163:20",
                                      "data-lov-name": "Input",
                                      "data-component-path":
                                        "src\\pages\\app\\Folders.tsx",
                                      "data-component-line": "163",
                                      "data-component-file": "Folders.tsx",
                                      "data-component-name": "Input",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22pl-10%22%7D",
                                      placeholder: e(
                                        "folders.search_placeholder",
                                      ),
                                      value: n,
                                      onChange: (t) => C(t.target.value),
                                      className: "pl-10",
                                    }),
                                  ],
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Folders.tsx:170:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\Folders.tsx",
                                  "data-component-line": "170",
                                  "data-component-file": "Folders.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                  className: "flex items-center gap-2",
                                  children: [
                                    a.jsx(d, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Folders.tsx:171:20",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\Folders.tsx",
                                      "data-component-line": "171",
                                      "data-component-file": "Folders.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22touch-target%22%7D",
                                      variant:
                                        F === "grid" ? "default" : "outline",
                                      size: "sm",
                                      onClick: () => f("grid"),
                                      className: "touch-target",
                                      "aria-label": e("reports.view_grid"),
                                      title: e("reports.view_grid"),
                                      children: a.jsx(H, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:179:22",
                                        "data-lov-name": "Grid",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "179",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "Grid",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                    a.jsx(d, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Folders.tsx:181:20",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\Folders.tsx",
                                      "data-component-line": "181",
                                      "data-component-file": "Folders.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22touch-target%22%7D",
                                      variant:
                                        F === "list" ? "default" : "outline",
                                      size: "sm",
                                      onClick: () => f("list"),
                                      className: "touch-target",
                                      "aria-label": e("reports.view_list"),
                                      title: e("reports.view_list"),
                                      children: a.jsx($, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:189:22",
                                        "data-lov-name": "List",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "189",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "List",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                        className: "h-4 w-4",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                      a.jsx("div", {
                        "data-lov-id": "src\\pages\\app\\Folders.tsx:198:10",
                        "data-lov-name": "div",
                        "data-component-path": "src\\pages\\app\\Folders.tsx",
                        "data-component-line": "198",
                        "data-component-file": "Folders.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20justify-between%20animate-fade-in%22%7D",
                        className:
                          "flex items-center justify-between animate-fade-in",
                        style: { animationDelay: "0.2s" },
                        children: a.jsx("p", {
                          "data-lov-id": "src\\pages\\app\\Folders.tsx:199:12",
                          "data-lov-name": "p",
                          "data-component-path": "src\\pages\\app\\Folders.tsx",
                          "data-component-line": "199",
                          "data-component-file": "Folders.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                          className: "text-sm text-muted-foreground",
                          children: e("folders.counter", { count: i.length }),
                        }),
                      }),
                      i.length === 0
                        ? a.jsx(x, {
                            "data-lov-id":
                              "src\\pages\\app\\Folders.tsx:206:12",
                            "data-lov-name": "Card",
                            "data-component-path":
                              "src\\pages\\app\\Folders.tsx",
                            "data-component-line": "206",
                            "data-component-file": "Folders.tsx",
                            "data-component-name": "Card",
                            "data-component-content":
                              "%7B%22className%22%3A%22animate-fade-in%22%7D",
                            className: "animate-fade-in",
                            style: { animationDelay: "0.3s" },
                            children: a.jsx(g, {
                              "data-lov-id":
                                "src\\pages\\app\\Folders.tsx:207:14",
                              "data-lov-name": "CardContent",
                              "data-component-path":
                                "src\\pages\\app\\Folders.tsx",
                              "data-component-line": "207",
                              "data-component-file": "Folders.tsx",
                              "data-component-name": "CardContent",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-center%20py-12%22%7D",
                              className: "text-center py-12",
                              children: a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:208:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "208",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "div",
                                "data-component-content":
                                  "%7B%22className%22%3A%22max-w-md%20mx-auto%22%7D",
                                className: "max-w-md mx-auto",
                                children: [
                                  a.jsx(D, {
                                    "data-lov-id":
                                      "src\\pages\\app\\Folders.tsx:209:18",
                                    "data-lov-name": "Folder",
                                    "data-component-path":
                                      "src\\pages\\app\\Folders.tsx",
                                    "data-component-line": "209",
                                    "data-component-file": "Folders.tsx",
                                    "data-component-name": "Folder",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-16%20w-16%20text-muted-foreground%20mx-auto%20mb-4%22%7D",
                                    className:
                                      "h-16 w-16 text-muted-foreground mx-auto mb-4",
                                  }),
                                  a.jsx("h3", {
                                    "data-lov-id":
                                      "src\\pages\\app\\Folders.tsx:210:18",
                                    "data-lov-name": "h3",
                                    "data-component-path":
                                      "src\\pages\\app\\Folders.tsx",
                                    "data-component-line": "210",
                                    "data-component-file": "Folders.tsx",
                                    "data-component-name": "h3",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-lg%20font-medium%20text-foreground%20mb-2%22%7D",
                                    className:
                                      "text-lg font-medium text-foreground mb-2",
                                    children: e(
                                      n
                                        ? "folders.empty.title_search"
                                        : "folders.empty.title",
                                    ),
                                  }),
                                  a.jsx("p", {
                                    "data-lov-id":
                                      "src\\pages\\app\\Folders.tsx:213:18",
                                    "data-lov-name": "p",
                                    "data-component-path":
                                      "src\\pages\\app\\Folders.tsx",
                                    "data-component-line": "213",
                                    "data-component-file": "Folders.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22text-muted-foreground%20mb-6%22%7D",
                                    className: "text-muted-foreground mb-6",
                                    children: e(
                                      n
                                        ? "folders.empty.desc_search"
                                        : "folders.empty.desc",
                                    ),
                                  }),
                                  !n &&
                                    a.jsx(d, {
                                      "data-lov-id":
                                        "src\\pages\\app\\Folders.tsx:220:20",
                                      "data-lov-name": "Button",
                                      "data-component-path":
                                        "src\\pages\\app\\Folders.tsx",
                                      "data-component-line": "220",
                                      "data-component-file": "Folders.tsx",
                                      "data-component-name": "Button",
                                      "data-component-content": "%7B%7D",
                                      asChild: !0,
                                      children: a.jsxs(I, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:221:22",
                                        "data-lov-name": "Link",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "221",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "Link",
                                        "data-component-content": "%7B%7D",
                                        to: "/app/novo-relatorio",
                                        children: [
                                          a.jsx(r, {
                                            "data-lov-id":
                                              "src\\pages\\app\\Folders.tsx:222:24",
                                            "data-lov-name": "Plus",
                                            "data-component-path":
                                              "src\\pages\\app\\Folders.tsx",
                                            "data-component-line": "222",
                                            "data-component-file":
                                              "Folders.tsx",
                                            "data-component-name": "Plus",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                            className: "mr-2 h-4 w-4",
                                          }),
                                          e("folders.empty.cta"),
                                        ],
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          })
                        : F === "grid"
                          ? a.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\Folders.tsx:232:14",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\Folders.tsx",
                              "data-component-line": "232",
                              "data-component-file": "Folders.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%20sm%3Agap-6%22%7D",
                              className:
                                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                              children: i.map((t, o) =>
                                a.jsxs(
                                  x,
                                  {
                                    "data-lov-id":
                                      "src\\pages\\app\\Folders.tsx:234:18",
                                    "data-lov-name": "Card",
                                    "data-component-path":
                                      "src\\pages\\app\\Folders.tsx",
                                    "data-component-line": "234",
                                    "data-component-file": "Folders.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22card-hover%20group%20cursor-pointer%20animate-fade-in%20overflow-hidden%20border-border%2F40%22%7D",
                                    className:
                                      "card-hover group cursor-pointer animate-fade-in overflow-hidden border-border/40",
                                    style: {
                                      animationDelay: `${0.3 + o * 0.1}s`,
                                    },
                                    onClick: () => p(`/app/pastas/${t.id}`),
                                    children: [
                                      a.jsx("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:240:20",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "240",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "div",
                                        "data-component-content": "%7B%7D",
                                        className: `h-1.5 w-full ${t.color.split(" ")[0]}`,
                                      }),
                                      a.jsx(L, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:241:20",
                                        "data-lov-name": "CardHeader",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "241",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "CardHeader",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22pb-3%20px-5%20pt-5%22%7D",
                                        className: "pb-3 px-5 pt-5",
                                        children: a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\Folders.tsx:242:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\Folders.tsx",
                                          "data-component-line": "242",
                                          "data-component-file": "Folders.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22flex%20items-start%20justify-between%22%7D",
                                          className:
                                            "flex items-start justify-between",
                                          children: [
                                            a.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:243:24",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "243",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex%20items-center%20gap-4%20flex-1%20min-w-0%22%7D",
                                              className:
                                                "flex items-center gap-4 flex-1 min-w-0",
                                              children: [
                                                a.jsx("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:244:26",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "244",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  className: `w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm ${t.color} shrink-0`,
                                                  children: a.jsx(t.icon, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Folders.tsx:245:28",
                                                    "data-lov-name":
                                                      "folder.icon",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Folders.tsx",
                                                    "data-component-line":
                                                      "245",
                                                    "data-component-file":
                                                      "Folders.tsx",
                                                    "data-component-name":
                                                      "folder.icon",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                                                    className: "h-6 w-6",
                                                  }),
                                                }),
                                                a.jsxs("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:247:26",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "247",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22flex-1%20min-w-0%22%7D",
                                                  className: "flex-1 min-w-0",
                                                  children: [
                                                    a.jsx(z, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:248:28",
                                                      "data-lov-name":
                                                        "CardTitle",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "248",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "CardTitle",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22text-xl%20text-foreground%20line-clamp-1%20group-hover%3Atext-primary%20transition-colors%20font-bold%20tracking-tight%22%7D",
                                                      className:
                                                        "text-xl text-foreground line-clamp-1 group-hover:text-primary transition-colors font-bold tracking-tight",
                                                      children: t.name,
                                                    }),
                                                    a.jsx(u, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:251:28",
                                                      "data-lov-name": "Badge",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "251",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "Badge",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22mt-1.5%20bg-secondary%2F50%20text-secondary-foreground%20border-transparent%20px-2%20font-medium%22%7D",
                                                      variant: "secondary",
                                                      className:
                                                        "mt-1.5 bg-secondary/50 text-secondary-foreground border-transparent px-2 font-medium",
                                                      children: e(
                                                        "folders.meta.items",
                                                        {
                                                          count: t.reportCount,
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            a.jsxs(N, {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:256:24",
                                              "data-lov-name": "DropdownMenu",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "256",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name":
                                                "DropdownMenu",
                                              "data-component-content":
                                                "%7B%7D",
                                              children: [
                                                a.jsx(b, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:257:26",
                                                  "data-lov-name":
                                                    "DropdownMenuTrigger",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "257",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuTrigger",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  asChild: !0,
                                                  onClick: (c) =>
                                                    c.stopPropagation(),
                                                  children: a.jsx(d, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Folders.tsx:258:28",
                                                    "data-lov-name": "Button",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Folders.tsx",
                                                    "data-component-line":
                                                      "258",
                                                    "data-component-file":
                                                      "Folders.tsx",
                                                    "data-component-name":
                                                      "Button",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-8%20w-8%20p-0%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%22%7D",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className:
                                                      "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: a.jsx(B, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:259:30",
                                                      "data-lov-name":
                                                        "MoreHorizontal",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "259",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "MoreHorizontal",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                      className: "h-4 w-4",
                                                    }),
                                                  }),
                                                }),
                                                a.jsxs(w, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:262:26",
                                                  "data-lov-name":
                                                    "DropdownMenuContent",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "262",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuContent",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  align: "end",
                                                  children: [
                                                    a.jsxs(v, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:263:28",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "263",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      onClick: (c) => {
                                                        c.stopPropagation();
                                                      },
                                                      children: [
                                                        a.jsx(j, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\Folders.tsx:264:30",
                                                          "data-lov-name":
                                                            "Edit",
                                                          "data-component-path":
                                                            "src\\pages\\app\\Folders.tsx",
                                                          "data-component-line":
                                                            "264",
                                                          "data-component-file":
                                                            "Folders.tsx",
                                                          "data-component-name":
                                                            "Edit",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        e(
                                                          "folders.actions.rename",
                                                        ),
                                                      ],
                                                    }),
                                                    a.jsxs(v, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:267:28",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "267",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22text-destructive%22%7D",
                                                      className:
                                                        "text-destructive",
                                                      onClick: (c) => {
                                                        c.stopPropagation();
                                                      },
                                                      children: [
                                                        a.jsx(A, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\Folders.tsx:268:30",
                                                          "data-lov-name":
                                                            "Trash2",
                                                          "data-component-path":
                                                            "src\\pages\\app\\Folders.tsx",
                                                          "data-component-line":
                                                            "268",
                                                          "data-component-file":
                                                            "Folders.tsx",
                                                          "data-component-name":
                                                            "Trash2",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        e(
                                                          "folders.actions.delete",
                                                        ),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      a.jsx(g, {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:275:20",
                                        "data-lov-name": "CardContent",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "275",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "CardContent",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22px-5%20pb-5%20pt-0%22%7D",
                                        className: "px-5 pb-5 pt-0",
                                        children: a.jsxs("div", {
                                          "data-lov-id":
                                            "src\\pages\\app\\Folders.tsx:276:22",
                                          "data-lov-name": "div",
                                          "data-component-path":
                                            "src\\pages\\app\\Folders.tsx",
                                          "data-component-line": "276",
                                          "data-component-file": "Folders.tsx",
                                          "data-component-name": "div",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22space-y-4%22%7D",
                                          className: "space-y-4",
                                          children: [
                                            t.description &&
                                              a.jsx("p", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\Folders.tsx:278:26",
                                                "data-lov-name": "p",
                                                "data-component-path":
                                                  "src\\pages\\app\\Folders.tsx",
                                                "data-component-line": "278",
                                                "data-component-file":
                                                  "Folders.tsx",
                                                "data-component-name": "p",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20line-clamp-2%20leading-relaxed%20h-10%22%7D",
                                                className:
                                                  "text-sm text-muted-foreground line-clamp-2 leading-relaxed h-10",
                                                children: t.description,
                                              }),
                                            a.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:283:24",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "283",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22pt-4%20border-t%20border-border%2F30%20flex%20items-center%20justify-between%20text-%5B11px%5D%20uppercase%20tracking-wider%20font-semibold%20text-muted-foreground%2F70%22%7D",
                                              className:
                                                "pt-4 border-t border-border/30 flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-muted-foreground/70",
                                              children: [
                                                a.jsxs("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:284:26",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "284",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22flex%20flex-col%22%7D",
                                                  className: "flex flex-col",
                                                  children: [
                                                    a.jsx("span", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:285:28",
                                                      "data-lov-name": "span",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "285",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "span",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      children: e(
                                                        "folders.meta.modified",
                                                      ),
                                                    }),
                                                    a.jsx("span", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\Folders.tsx:286:28",
                                                      "data-lov-name": "span",
                                                      "data-component-path":
                                                        "src\\pages\\app\\Folders.tsx",
                                                      "data-component-line":
                                                        "286",
                                                      "data-component-file":
                                                        "Folders.tsx",
                                                      "data-component-name":
                                                        "span",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22text-foreground%2F80%20mt-0.5%22%7D",
                                                      className:
                                                        "text-foreground/80 mt-0.5",
                                                      children: new Date(
                                                        t.lastModified,
                                                      ).toLocaleDateString(
                                                        m.language,
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                a.jsx("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:288:26",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "288",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22h-8%20w-8%20rounded-full%20bg-primary%2F5%20flex%20items-center%20justify-center%20text-primary%20group-hover%3Abg-primary%20group-hover%3Atext-white%20transition-all%20duration-300%22%7D",
                                                  className:
                                                    "h-8 w-8 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300",
                                                  children: a.jsx(r, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Folders.tsx:289:28",
                                                    "data-lov-name": "Plus",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Folders.tsx",
                                                    "data-component-line":
                                                      "289",
                                                    "data-component-file":
                                                      "Folders.tsx",
                                                    "data-component-name":
                                                      "Plus",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                    className: "h-4 w-4",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  t.id,
                                ),
                              ),
                            })
                          : a.jsx(x, {
                              "data-lov-id":
                                "src\\pages\\app\\Folders.tsx:298:14",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\Folders.tsx",
                              "data-component-line": "298",
                              "data-component-file": "Folders.tsx",
                              "data-component-name": "Card",
                              "data-component-content":
                                "%7B%22className%22%3A%22animate-fade-in%20overflow-hidden%20border-border%2F40%22%7D",
                              className:
                                "animate-fade-in overflow-hidden border-border/40",
                              children: a.jsx(g, {
                                "data-lov-id":
                                  "src\\pages\\app\\Folders.tsx:299:16",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\Folders.tsx",
                                "data-component-line": "299",
                                "data-component-file": "Folders.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content":
                                  "%7B%22className%22%3A%22p-0%22%7D",
                                className: "p-0",
                                children: a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Folders.tsx:300:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\Folders.tsx",
                                  "data-component-line": "300",
                                  "data-component-file": "Folders.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22overflow-x-auto%22%7D",
                                  className: "overflow-x-auto",
                                  children: a.jsxs("table", {
                                    "data-lov-id":
                                      "src\\pages\\app\\Folders.tsx:301:20",
                                    "data-lov-name": "table",
                                    "data-component-path":
                                      "src\\pages\\app\\Folders.tsx",
                                    "data-component-line": "301",
                                    "data-component-file": "Folders.tsx",
                                    "data-component-name": "table",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-full%20text-left%22%7D",
                                    className: "w-full text-left",
                                    "aria-label": e("folders.table_desc", {
                                      defaultValue: "Lista de pastas",
                                    }),
                                    children: [
                                      a.jsx("thead", {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:302:22",
                                        "data-lov-name": "thead",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "302",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "thead",
                                        "data-component-content": "%7B%7D",
                                        children: a.jsxs("tr", {
                                          "data-lov-id":
                                            "src\\pages\\app\\Folders.tsx:303:24",
                                          "data-lov-name": "tr",
                                          "data-component-path":
                                            "src\\pages\\app\\Folders.tsx",
                                          "data-component-line": "303",
                                          "data-component-file": "Folders.tsx",
                                          "data-component-name": "tr",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22border-b%20border-border%2F50%20bg-muted%2F30%22%7D",
                                          className:
                                            "border-b border-border/50 bg-muted/30",
                                          children: [
                                            a.jsx("th", {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:304:26",
                                              "data-lov-name": "th",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "304",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "th",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%22%7D",
                                              className:
                                                "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                              children: e(
                                                "folders.actions.open",
                                              ),
                                            }),
                                            a.jsx("th", {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:305:26",
                                              "data-lov-name": "th",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "305",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "th",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%22%7D",
                                              className:
                                                "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                              children: e(
                                                "folders.meta.items",
                                                { count: 0 },
                                              ).split(" ")[1],
                                            }),
                                            a.jsx("th", {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:306:26",
                                              "data-lov-name": "th",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "306",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "th",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%20hidden%20md%3Atable-cell%22%7D",
                                              className:
                                                "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell",
                                              children: e(
                                                "folders.meta.modified",
                                              ),
                                            }),
                                            a.jsx("th", {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:307:26",
                                              "data-lov-name": "th",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "307",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "th",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22py-3%20px-4%20w-10%22%7D",
                                              className: "py-3 px-4 w-10",
                                            }),
                                          ],
                                        }),
                                      }),
                                      a.jsx("tbody", {
                                        "data-lov-id":
                                          "src\\pages\\app\\Folders.tsx:310:22",
                                        "data-lov-name": "tbody",
                                        "data-component-path":
                                          "src\\pages\\app\\Folders.tsx",
                                        "data-component-line": "310",
                                        "data-component-file": "Folders.tsx",
                                        "data-component-name": "tbody",
                                        "data-component-content": "%7B%7D",
                                        children: i.map((t) =>
                                          a.jsxs(
                                            "tr",
                                            {
                                              "data-lov-id":
                                                "src\\pages\\app\\Folders.tsx:312:26",
                                              "data-lov-name": "tr",
                                              "data-component-path":
                                                "src\\pages\\app\\Folders.tsx",
                                              "data-component-line": "312",
                                              "data-component-file":
                                                "Folders.tsx",
                                              "data-component-name": "tr",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22group%20border-b%20border-border%2F30%20last%3Aborder-0%20hover%3Abg-muted%2F30%20transition-colors%20cursor-pointer%22%7D",
                                              className:
                                                "group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer",
                                              onClick: () =>
                                                p(`/app/pastas/${t.id}`),
                                              children: [
                                                a.jsx("td", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:317:28",
                                                  "data-lov-name": "td",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "317",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "td",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22py-4%20px-4%22%7D",
                                                  className: "py-4 px-4",
                                                  children: a.jsxs("div", {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Folders.tsx:318:30",
                                                    "data-lov-name": "div",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Folders.tsx",
                                                    "data-component-line":
                                                      "318",
                                                    "data-component-file":
                                                      "Folders.tsx",
                                                    "data-component-name":
                                                      "div",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                                    className:
                                                      "flex items-center gap-3",
                                                    children: [
                                                      a.jsx("div", {
                                                        "data-lov-id":
                                                          "src\\pages\\app\\Folders.tsx:319:32",
                                                        "data-lov-name": "div",
                                                        "data-component-path":
                                                          "src\\pages\\app\\Folders.tsx",
                                                        "data-component-line":
                                                          "319",
                                                        "data-component-file":
                                                          "Folders.tsx",
                                                        "data-component-name":
                                                          "div",
                                                        "data-component-content":
                                                          "%7B%7D",
                                                        className: `w-9 h-9 rounded-lg flex items-center justify-center border shadow-sm ${t.color} shrink-0`,
                                                        children: a.jsx(
                                                          t.icon,
                                                          {
                                                            "data-lov-id":
                                                              "src\\pages\\app\\Folders.tsx:320:34",
                                                            "data-lov-name":
                                                              "folder.icon",
                                                            "data-component-path":
                                                              "src\\pages\\app\\Folders.tsx",
                                                            "data-component-line":
                                                              "320",
                                                            "data-component-file":
                                                              "Folders.tsx",
                                                            "data-component-name":
                                                              "folder.icon",
                                                            "data-component-content":
                                                              "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                            className:
                                                              "h-4 w-4",
                                                          },
                                                        ),
                                                      }),
                                                      a.jsxs("div", {
                                                        "data-lov-id":
                                                          "src\\pages\\app\\Folders.tsx:322:32",
                                                        "data-lov-name": "div",
                                                        "data-component-path":
                                                          "src\\pages\\app\\Folders.tsx",
                                                        "data-component-line":
                                                          "322",
                                                        "data-component-file":
                                                          "Folders.tsx",
                                                        "data-component-name":
                                                          "div",
                                                        "data-component-content":
                                                          "%7B%7D",
                                                        children: [
                                                          a.jsx("p", {
                                                            "data-lov-id":
                                                              "src\\pages\\app\\Folders.tsx:323:34",
                                                            "data-lov-name":
                                                              "p",
                                                            "data-component-path":
                                                              "src\\pages\\app\\Folders.tsx",
                                                            "data-component-line":
                                                              "323",
                                                            "data-component-file":
                                                              "Folders.tsx",
                                                            "data-component-name":
                                                              "p",
                                                            "data-component-content":
                                                              "%7B%22className%22%3A%22font-bold%20text-foreground%20group-hover%3Atext-primary%20transition-colors%22%7D",
                                                            className:
                                                              "font-bold text-foreground group-hover:text-primary transition-colors",
                                                            children: t.name,
                                                          }),
                                                          a.jsx("p", {
                                                            "data-lov-id":
                                                              "src\\pages\\app\\Folders.tsx:324:34",
                                                            "data-lov-name":
                                                              "p",
                                                            "data-component-path":
                                                              "src\\pages\\app\\Folders.tsx",
                                                            "data-component-line":
                                                              "324",
                                                            "data-component-file":
                                                              "Folders.tsx",
                                                            "data-component-name":
                                                              "p",
                                                            "data-component-content":
                                                              "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20hidden%20sm%3Ablock%22%7D",
                                                            className:
                                                              "text-xs text-muted-foreground hidden sm:block",
                                                            children:
                                                              t.description,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                                a.jsx("td", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:328:28",
                                                  "data-lov-name": "td",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "328",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "td",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22py-4%20px-4%22%7D",
                                                  className: "py-4 px-4",
                                                  children: a.jsx(u, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Folders.tsx:329:30",
                                                    "data-lov-name": "Badge",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Folders.tsx",
                                                    "data-component-line":
                                                      "329",
                                                    "data-component-file":
                                                      "Folders.tsx",
                                                    "data-component-name":
                                                      "Badge",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22font-medium%22%7D",
                                                    variant: "outline",
                                                    className: "font-medium",
                                                    children: t.reportCount,
                                                  }),
                                                }),
                                                a.jsx("td", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:333:28",
                                                  "data-lov-name": "td",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "333",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "td",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22py-4%20px-4%20text-sm%20text-muted-foreground%20hidden%20md%3Atable-cell%22%7D",
                                                  className:
                                                    "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                                  children: new Date(
                                                    t.lastModified,
                                                  ).toLocaleDateString(
                                                    m.language,
                                                  ),
                                                }),
                                                a.jsx("td", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\Folders.tsx:336:28",
                                                  "data-lov-name": "td",
                                                  "data-component-path":
                                                    "src\\pages\\app\\Folders.tsx",
                                                  "data-component-line": "336",
                                                  "data-component-file":
                                                    "Folders.tsx",
                                                  "data-component-name": "td",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22py-4%20px-4%22%7D",
                                                  className: "py-4 px-4",
                                                  children: a.jsxs(N, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\Folders.tsx:337:30",
                                                    "data-lov-name":
                                                      "DropdownMenu",
                                                    "data-component-path":
                                                      "src\\pages\\app\\Folders.tsx",
                                                    "data-component-line":
                                                      "337",
                                                    "data-component-file":
                                                      "Folders.tsx",
                                                    "data-component-name":
                                                      "DropdownMenu",
                                                    "data-component-content":
                                                      "%7B%7D",
                                                    children: [
                                                      a.jsx(b, {
                                                        "data-lov-id":
                                                          "src\\pages\\app\\Folders.tsx:338:32",
                                                        "data-lov-name":
                                                          "DropdownMenuTrigger",
                                                        "data-component-path":
                                                          "src\\pages\\app\\Folders.tsx",
                                                        "data-component-line":
                                                          "338",
                                                        "data-component-file":
                                                          "Folders.tsx",
                                                        "data-component-name":
                                                          "DropdownMenuTrigger",
                                                        "data-component-content":
                                                          "%7B%7D",
                                                        asChild: !0,
                                                        onClick: (o) =>
                                                          o.stopPropagation(),
                                                        children: a.jsx(d, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\Folders.tsx:339:34",
                                                          "data-lov-name":
                                                            "Button",
                                                          "data-component-path":
                                                            "src\\pages\\app\\Folders.tsx",
                                                          "data-component-line":
                                                            "339",
                                                          "data-component-file":
                                                            "Folders.tsx",
                                                          "data-component-name":
                                                            "Button",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22h-8%20w-8%20p-0%22%7D",
                                                          variant: "ghost",
                                                          size: "sm",
                                                          className:
                                                            "h-8 w-8 p-0",
                                                          children: a.jsx(B, {
                                                            "data-lov-id":
                                                              "src\\pages\\app\\Folders.tsx:340:36",
                                                            "data-lov-name":
                                                              "MoreHorizontal",
                                                            "data-component-path":
                                                              "src\\pages\\app\\Folders.tsx",
                                                            "data-component-line":
                                                              "340",
                                                            "data-component-file":
                                                              "Folders.tsx",
                                                            "data-component-name":
                                                              "MoreHorizontal",
                                                            "data-component-content":
                                                              "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                            className:
                                                              "h-4 w-4",
                                                          }),
                                                        }),
                                                      }),
                                                      a.jsxs(w, {
                                                        "data-lov-id":
                                                          "src\\pages\\app\\Folders.tsx:343:32",
                                                        "data-lov-name":
                                                          "DropdownMenuContent",
                                                        "data-component-path":
                                                          "src\\pages\\app\\Folders.tsx",
                                                        "data-component-line":
                                                          "343",
                                                        "data-component-file":
                                                          "Folders.tsx",
                                                        "data-component-name":
                                                          "DropdownMenuContent",
                                                        "data-component-content":
                                                          "%7B%7D",
                                                        align: "end",
                                                        children: [
                                                          a.jsxs(v, {
                                                            "data-lov-id":
                                                              "src\\pages\\app\\Folders.tsx:344:34",
                                                            "data-lov-name":
                                                              "DropdownMenuItem",
                                                            "data-component-path":
                                                              "src\\pages\\app\\Folders.tsx",
                                                            "data-component-line":
                                                              "344",
                                                            "data-component-file":
                                                              "Folders.tsx",
                                                            "data-component-name":
                                                              "DropdownMenuItem",
                                                            "data-component-content":
                                                              "%7B%7D",
                                                            onClick: (o) => {
                                                              o.stopPropagation();
                                                            },
                                                            children: [
                                                              a.jsx(j, {
                                                                "data-lov-id":
                                                                  "src\\pages\\app\\Folders.tsx:345:36",
                                                                "data-lov-name":
                                                                  "Edit",
                                                                "data-component-path":
                                                                  "src\\pages\\app\\Folders.tsx",
                                                                "data-component-line":
                                                                  "345",
                                                                "data-component-file":
                                                                  "Folders.tsx",
                                                                "data-component-name":
                                                                  "Edit",
                                                                "data-component-content":
                                                                  "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                                className:
                                                                  "mr-2 h-4 w-4",
                                                              }),
                                                              e(
                                                                "folders.actions.rename",
                                                              ),
                                                            ],
                                                          }),
                                                          a.jsxs(v, {
                                                            "data-lov-id":
                                                              "src\\pages\\app\\Folders.tsx:348:34",
                                                            "data-lov-name":
                                                              "DropdownMenuItem",
                                                            "data-component-path":
                                                              "src\\pages\\app\\Folders.tsx",
                                                            "data-component-line":
                                                              "348",
                                                            "data-component-file":
                                                              "Folders.tsx",
                                                            "data-component-name":
                                                              "DropdownMenuItem",
                                                            "data-component-content":
                                                              "%7B%22className%22%3A%22text-destructive%22%7D",
                                                            className:
                                                              "text-destructive",
                                                            onClick: (o) => {
                                                              o.stopPropagation();
                                                            },
                                                            children: [
                                                              a.jsx(A, {
                                                                "data-lov-id":
                                                                  "src\\pages\\app\\Folders.tsx:349:36",
                                                                "data-lov-name":
                                                                  "Trash2",
                                                                "data-component-path":
                                                                  "src\\pages\\app\\Folders.tsx",
                                                                "data-component-line":
                                                                  "349",
                                                                "data-component-file":
                                                                  "Folders.tsx",
                                                                "data-component-name":
                                                                  "Trash2",
                                                                "data-component-content":
                                                                  "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                                className:
                                                                  "mr-2 h-4 w-4",
                                                              }),
                                                              e(
                                                                "folders.actions.delete",
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            },
                                            t.id,
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            }),
                    ],
                  }),
                  a.jsx(J, {
                    "data-lov-id": "src\\pages\\app\\Folders.tsx:367:8",
                    "data-lov-name": "AISidebar",
                    "data-component-path": "src\\pages\\app\\Folders.tsx",
                    "data-component-line": "367",
                    "data-component-file": "Folders.tsx",
                    "data-component-name": "AISidebar",
                    "data-component-content":
                      "%7B%22className%22%3A%22hidden%20xl%3Ablock%22%7D",
                    context: "reports",
                    className: "hidden xl:block",
                  }),
                ],
              }),
              a.jsx(K, {
                "data-lov-id": "src\\pages\\app\\Folders.tsx:371:6",
                "data-lov-name": "FloatingButton",
                "data-component-path": "src\\pages\\app\\Folders.tsx",
                "data-component-line": "371",
                "data-component-file": "Folders.tsx",
                "data-component-name": "FloatingButton",
                "data-component-content":
                  "%7B%22className%22%3A%22lg%3Ahidden%22%7D",
                onClick: () => p("/app/novo-relatorio"),
                icon: a.jsx(r, {
                  "data-lov-id": "src\\pages\\app\\Folders.tsx:373:14",
                  "data-lov-name": "Plus",
                  "data-component-path": "src\\pages\\app\\Folders.tsx",
                  "data-component-line": "373",
                  "data-component-file": "Folders.tsx",
                  "data-component-name": "Plus",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-6%20w-6%22%7D",
                  className: "h-6 w-6",
                }),
                className: "lg:hidden",
                children: e("folders.new_folder_button"),
              }),
            ],
          })
    );
  };
export { pa as default };
