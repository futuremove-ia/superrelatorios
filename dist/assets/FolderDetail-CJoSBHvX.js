import { u as C, j as a, B as l } from "./index-BZzvAVnT.js";
import { r as p } from "./vendor-BgR6OOld.js";
import { C as s, a as r, b as M, c as k, d as T } from "./card-DCmFy9yX.js";
import { I as S } from "./input-BnDZujQi.js";
import { B as I } from "./badge-DMGJasfj.js";
import { D as h, a as v, b as f, c } from "./dropdown-menu-DR3vwdOX.js";
import { A as L } from "./AISidebar-Nt5highz.js";
import { r as _ } from "./mockReports-3cW05Ka2.js";
import { b as P, a as z } from "./router-D2JcpG7e.js";
import {
  Q as R,
  a4 as H,
  p as E,
  s as $,
  t as G,
  u as Q,
  e as i,
  v as u,
  w as N,
} from "./utils-C25gojUd.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-DUaPDS5r.js";
const oa = () => {
  const { id: w } = P(),
    d = z(),
    { t: e, i18n: b } = C(),
    [B, A] = p.useState([]),
    [j, g] = p.useState(!0),
    [m, y] = p.useState(""),
    [x, F] = p.useState("list");
  p.useEffect(() => {
    (async () => {
      g(!0);
      try {
        const n = (await _.getAllReports()).slice(0, 4);
        A(n);
      } catch (o) {
        console.error("Error loading folder content:", o);
      } finally {
        g(!1);
      }
    })();
  }, [w]);
  const D = B.filter(
    (t) =>
      t.title.toLowerCase().includes(m.toLowerCase()) ||
      t.category.toLowerCase().includes(m.toLowerCase()),
  );
  return j
    ? a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:48:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
        "data-component-line": "48",
        "data-component-file": "FolderDetail.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22p-6%20max-w-7xl%20mx-auto%20space-y-6%22%7D",
        className: "p-6 max-w-7xl mx-auto space-y-6",
        children: [
          a.jsx("div", {
            "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:49:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
            "data-component-line": "49",
            "data-component-file": "FolderDetail.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22animate-pulse%20h-10%20w-48%20bg-muted%20rounded%22%7D",
            className: "animate-pulse h-10 w-48 bg-muted rounded",
          }),
          a.jsx("div", {
            "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:50:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
            "data-component-line": "50",
            "data-component-file": "FolderDetail.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-6%22%7D",
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [1, 2, 3].map((t) =>
              a.jsx(
                "div",
                {
                  "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:51:30",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
                  "data-component-line": "51",
                  "data-component-file": "FolderDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-48%20bg-muted%20rounded-xl%22%7D",
                  className: "h-48 bg-muted rounded-xl",
                },
                t,
              ),
            ),
          }),
        ],
      })
    : a.jsx("div", {
        "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:58:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
        "data-component-line": "58",
        "data-component-file": "FolderDetail.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22bg-gradient-subtle%20min-h-screen%20w-full%22%7D",
        className: "bg-gradient-subtle min-h-screen w-full",
        children: a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:59:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
          "data-component-line": "59",
          "data-component-file": "FolderDetail.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20w-full%20overflow-hidden%22%7D",
          className: "flex w-full overflow-hidden",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:60:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
              "data-component-line": "60",
              "data-component-file": "FolderDetail.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex-1%20min-w-0%20p-4%20sm%3Ap-6%20lg%3Ap-8%20space-y-6%22%7D",
              className: "flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-6",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:62:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
                  "data-component-line": "62",
                  "data-component-file": "FolderDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-4%22%7D",
                  className:
                    "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:63:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\FolderDetail.tsx",
                      "data-component-line": "63",
                      "data-component-file": "FolderDetail.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                      className: "flex items-center gap-3",
                      children: [
                        a.jsxs(l, {
                          "data-lov-id":
                            "src\\pages\\app\\FolderDetail.tsx:64:14",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\FolderDetail.tsx",
                          "data-component-line": "64",
                          "data-component-file": "FolderDetail.tsx",
                          "data-component-name": "Button",
                          "data-component-content": "%7B%7D",
                          variant: "ghost",
                          size: "sm",
                          onClick: () => d("/app/pastas"),
                          children: [
                            a.jsx(R, {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:65:16",
                              "data-lov-name": "ArrowLeft",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "65",
                              "data-component-file": "FolderDetail.tsx",
                              "data-component-name": "ArrowLeft",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                              className: "h-4 w-4 mr-2",
                            }),
                            e("common.back"),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\FolderDetail.tsx:68:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\FolderDetail.tsx",
                          "data-component-line": "68",
                          "data-component-file": "FolderDetail.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            a.jsxs("h1", {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:69:16",
                              "data-lov-name": "h1",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "69",
                              "data-component-file": "FolderDetail.tsx",
                              "data-component-name": "h1",
                              "data-component-content":
                                "%7B%22text%22%3A%22Relat%C3%B3rios%20Financeiros%22%2C%22className%22%3A%22text-2xl%20font-bold%20flex%20items-center%20gap-2%22%7D",
                              className:
                                "text-2xl font-bold flex items-center gap-2",
                              children: [
                                a.jsx(H, {
                                  "data-lov-id":
                                    "src\\pages\\app\\FolderDetail.tsx:70:18",
                                  "data-lov-name": "Folder",
                                  "data-component-path":
                                    "src\\pages\\app\\FolderDetail.tsx",
                                  "data-component-line": "70",
                                  "data-component-file": "FolderDetail.tsx",
                                  "data-component-name": "Folder",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-6%20w-6%20text-primary%22%7D",
                                  className: "h-6 w-6 text-primary",
                                }),
                                "Relatórios Financeiros",
                              ],
                            }),
                            a.jsxs("p", {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:73:16",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "73",
                              "data-component-file": "FolderDetail.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                              className: "text-sm text-muted-foreground",
                              children: [
                                e("reports.counter", { count: 12 }),
                                " • ",
                                e("folders.meta.updated_ago", {
                                  time: "2 dias",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs(l, {
                      "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:78:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\FolderDetail.tsx",
                      "data-component-line": "78",
                      "data-component-file": "FolderDetail.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      onClick: () => d("/app/novo-relatorio"),
                      children: [
                        a.jsx(E, {
                          "data-lov-id":
                            "src\\pages\\app\\FolderDetail.tsx:79:14",
                          "data-lov-name": "Plus",
                          "data-component-path":
                            "src\\pages\\app\\FolderDetail.tsx",
                          "data-component-line": "79",
                          "data-component-file": "FolderDetail.tsx",
                          "data-component-name": "Plus",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                          className: "h-4 w-4 mr-2",
                        }),
                        e("reports.new_report_button"),
                      ],
                    }),
                  ],
                }),
                a.jsx(s, {
                  "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:85:10",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
                  "data-component-line": "85",
                  "data-component-file": "FolderDetail.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: a.jsxs(r, {
                    "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:86:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
                    "data-component-line": "86",
                    "data-component-file": "FolderDetail.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%20flex%20flex-col%20sm%3Aflex-row%20gap-4%20items-center%22%7D",
                    className:
                      "p-4 flex flex-col sm:flex-row gap-4 items-center",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\FolderDetail.tsx:87:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\FolderDetail.tsx",
                        "data-component-line": "87",
                        "data-component-file": "FolderDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22relative%20flex-1%20w-full%22%7D",
                        className: "relative flex-1 w-full",
                        children: [
                          a.jsx($, {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:88:16",
                            "data-lov-name": "Search",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "88",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "Search",
                            "data-component-content":
                              "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20h-4%20w-4%20text-muted-foreground%22%7D",
                            className:
                              "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
                          }),
                          a.jsx(S, {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:89:16",
                            "data-lov-name": "Input",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "89",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "Input",
                            "data-component-content":
                              "%7B%22className%22%3A%22pl-10%22%7D",
                            placeholder: e("folders.search_placeholder"),
                            className: "pl-10",
                            value: m,
                            onChange: (t) => y(t.target.value),
                          }),
                        ],
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\FolderDetail.tsx:96:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\FolderDetail.tsx",
                        "data-component-line": "96",
                        "data-component-file": "FolderDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                        className: "flex items-center gap-2",
                        children: [
                          a.jsx(l, {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:97:16",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "97",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%7D",
                            variant: "outline",
                            size: "sm",
                            onClick: () => F("grid"),
                            className: x === "grid" ? "bg-muted" : "",
                            "aria-label": e("reports.view_grid"),
                            title: e("reports.view_grid"),
                            children: a.jsx(G, {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:105:18",
                              "data-lov-name": "Grid",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "105",
                              "data-component-file": "FolderDetail.tsx",
                              "data-component-name": "Grid",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                              className: "h-4 w-4",
                            }),
                          }),
                          a.jsx(l, {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:107:16",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "107",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%7D",
                            variant: "outline",
                            size: "sm",
                            onClick: () => F("list"),
                            className: x === "list" ? "bg-muted" : "",
                            "aria-label": e("reports.view_list"),
                            title: e("reports.view_list"),
                            children: a.jsx(Q, {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:115:18",
                              "data-lov-name": "List",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "115",
                              "data-component-file": "FolderDetail.tsx",
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
                D.length === 0
                  ? a.jsx(s, {
                      "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:123:12",
                      "data-lov-name": "Card",
                      "data-component-path":
                        "src\\pages\\app\\FolderDetail.tsx",
                      "data-component-line": "123",
                      "data-component-file": "FolderDetail.tsx",
                      "data-component-name": "Card",
                      "data-component-content":
                        "%7B%22className%22%3A%22animate-fade-in%20border-border%2F40%22%7D",
                      className: "animate-fade-in border-border/40",
                      children: a.jsxs(r, {
                        "data-lov-id":
                          "src\\pages\\app\\FolderDetail.tsx:124:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\FolderDetail.tsx",
                        "data-component-line": "124",
                        "data-component-file": "FolderDetail.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22py-20%20text-center%22%7D",
                        className: "py-20 text-center",
                        children: [
                          a.jsx(i, {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:125:16",
                            "data-lov-name": "FileText",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "125",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "FileText",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-12%20w-12%20text-muted-foreground%20mx-auto%20mb-4%20opacity-20%22%7D",
                            className:
                              "h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-20",
                          }),
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:126:16",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "126",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-muted-foreground%22%7D",
                            className: "text-muted-foreground",
                            children: e("reports.empty.title"),
                          }),
                        ],
                      }),
                    })
                  : x === "grid"
                    ? a.jsx("div", {
                        "data-lov-id":
                          "src\\pages\\app\\FolderDetail.tsx:130:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\FolderDetail.tsx",
                        "data-component-line": "130",
                        "data-component-file": "FolderDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%20sm%3Agap-6%22%7D",
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                        children: D.map((t, o) =>
                          a.jsxs(
                            s,
                            {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:132:16",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "132",
                              "data-component-file": "FolderDetail.tsx",
                              "data-component-name": "Card",
                              "data-component-content":
                                "%7B%22className%22%3A%22card-hover%20group%20cursor-pointer%20overflow-hidden%20border-border%2F40%20animate-fade-in%22%7D",
                              className:
                                "card-hover group cursor-pointer overflow-hidden border-border/40 animate-fade-in",
                              style: { animationDelay: `${o * 0.1}s` },
                              onClick: () => d(`/app/relatorios/${t.id}`),
                              children: [
                                a.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\FolderDetail.tsx:138:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\FolderDetail.tsx",
                                  "data-component-line": "138",
                                  "data-component-file": "FolderDetail.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  className: `h-1.5 w-full ${t.category.toLowerCase().includes("finan") ? "bg-blue-500" : "bg-indigo-500"}`,
                                }),
                                a.jsxs(M, {
                                  "data-lov-id":
                                    "src\\pages\\app\\FolderDetail.tsx:139:18",
                                  "data-lov-name": "CardHeader",
                                  "data-component-path":
                                    "src\\pages\\app\\FolderDetail.tsx",
                                  "data-component-line": "139",
                                  "data-component-file": "FolderDetail.tsx",
                                  "data-component-name": "CardHeader",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22pb-3%20px-5%20pt-5%22%7D",
                                  className: "pb-3 px-5 pt-5",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\FolderDetail.tsx:140:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\FolderDetail.tsx",
                                      "data-component-line": "140",
                                      "data-component-file": "FolderDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20justify-between%20items-start%20gap-3%22%7D",
                                      className:
                                        "flex justify-between items-start gap-3",
                                      children: [
                                        a.jsx(k, {
                                          "data-lov-id":
                                            "src\\pages\\app\\FolderDetail.tsx:141:22",
                                          "data-lov-name": "CardTitle",
                                          "data-component-path":
                                            "src\\pages\\app\\FolderDetail.tsx",
                                          "data-component-line": "141",
                                          "data-component-file":
                                            "FolderDetail.tsx",
                                          "data-component-name": "CardTitle",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22text-lg%20font-bold%20line-clamp-2%20group-hover%3Atext-primary%20transition-colors%20tracking-tight%20h-14%22%7D",
                                          className:
                                            "text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors tracking-tight h-14",
                                          children: t.title,
                                        }),
                                        a.jsxs(h, {
                                          "data-lov-id":
                                            "src\\pages\\app\\FolderDetail.tsx:142:22",
                                          "data-lov-name": "DropdownMenu",
                                          "data-component-path":
                                            "src\\pages\\app\\FolderDetail.tsx",
                                          "data-component-line": "142",
                                          "data-component-file":
                                            "FolderDetail.tsx",
                                          "data-component-name": "DropdownMenu",
                                          "data-component-content": "%7B%7D",
                                          children: [
                                            a.jsx(v, {
                                              "data-lov-id":
                                                "src\\pages\\app\\FolderDetail.tsx:143:25",
                                              "data-lov-name":
                                                "DropdownMenuTrigger",
                                              "data-component-path":
                                                "src\\pages\\app\\FolderDetail.tsx",
                                              "data-component-line": "143",
                                              "data-component-file":
                                                "FolderDetail.tsx",
                                              "data-component-name":
                                                "DropdownMenuTrigger",
                                              "data-component-content":
                                                "%7B%7D",
                                              asChild: !0,
                                              onClick: (n) =>
                                                n.stopPropagation(),
                                              children: a.jsx(l, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\FolderDetail.tsx:144:27",
                                                "data-lov-name": "Button",
                                                "data-component-path":
                                                  "src\\pages\\app\\FolderDetail.tsx",
                                                "data-component-line": "144",
                                                "data-component-file":
                                                  "FolderDetail.tsx",
                                                "data-component-name": "Button",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22h-8%20w-8%20p-0%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%22%7D",
                                                variant: "ghost",
                                                size: "sm",
                                                className:
                                                  "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                                children: a.jsx(u, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:145:29",
                                                  "data-lov-name":
                                                    "MoreHorizontal",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "145",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name":
                                                    "MoreHorizontal",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                  className: "h-4 w-4",
                                                }),
                                              }),
                                            }),
                                            a.jsxs(f, {
                                              "data-lov-id":
                                                "src\\pages\\app\\FolderDetail.tsx:148:25",
                                              "data-lov-name":
                                                "DropdownMenuContent",
                                              "data-component-path":
                                                "src\\pages\\app\\FolderDetail.tsx",
                                              "data-component-line": "148",
                                              "data-component-file":
                                                "FolderDetail.tsx",
                                              "data-component-name":
                                                "DropdownMenuContent",
                                              "data-component-content":
                                                "%7B%7D",
                                              align: "end",
                                              children: [
                                                a.jsxs(c, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:149:27",
                                                  "data-lov-name":
                                                    "DropdownMenuItem",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "149",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuItem",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  onClick: (n) => {
                                                    (n.stopPropagation(),
                                                      d(
                                                        `/app/relatorios/${t.id}`,
                                                      ));
                                                  },
                                                  children: [
                                                    a.jsx(i, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:150:29",
                                                      "data-lov-name":
                                                        "FileText",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "150",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "FileText",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                      className: "h-4 w-4 mr-2",
                                                    }),
                                                    " ",
                                                    e("reports.actions.view"),
                                                  ],
                                                }),
                                                a.jsxs(c, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:152:27",
                                                  "data-lov-name":
                                                    "DropdownMenuItem",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "152",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuItem",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  onClick: (n) =>
                                                    n.stopPropagation(),
                                                  children: [
                                                    a.jsx(N, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:153:29",
                                                      "data-lov-name": "Share2",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "153",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "Share2",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                      className: "h-4 w-4 mr-2",
                                                    }),
                                                    " ",
                                                    e("reports.actions.share"),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    a.jsx(T, {
                                      "data-lov-id":
                                        "src\\pages\\app\\FolderDetail.tsx:158:20",
                                      "data-lov-name": "CardDescription",
                                      "data-component-path":
                                        "src\\pages\\app\\FolderDetail.tsx",
                                      "data-component-line": "158",
                                      "data-component-file": "FolderDetail.tsx",
                                      "data-component-name": "CardDescription",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22line-clamp-2%20text-xs%20leading-relaxed%20h-8%22%7D",
                                      className:
                                        "line-clamp-2 text-xs leading-relaxed h-8",
                                      children: t.description,
                                    }),
                                  ],
                                }),
                                a.jsx(r, {
                                  "data-lov-id":
                                    "src\\pages\\app\\FolderDetail.tsx:160:18",
                                  "data-lov-name": "CardContent",
                                  "data-component-path":
                                    "src\\pages\\app\\FolderDetail.tsx",
                                  "data-component-line": "160",
                                  "data-component-file": "FolderDetail.tsx",
                                  "data-component-name": "CardContent",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22px-5%20pb-5%20pt-0%22%7D",
                                  className: "px-5 pb-5 pt-0",
                                  children: a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\FolderDetail.tsx:161:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\FolderDetail.tsx",
                                    "data-component-line": "161",
                                    "data-component-file": "FolderDetail.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-center%20justify-between%20pt-4%20border-t%20border-border%2F30%22%7D",
                                    className:
                                      "flex items-center justify-between pt-4 border-t border-border/30",
                                    children: [
                                      a.jsx(I, {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:162:23",
                                        "data-lov-name": "Badge",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "162",
                                        "data-component-file":
                                          "FolderDetail.tsx",
                                        "data-component-name": "Badge",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-%5B10px%5D%20py-0%20px-2%20font-semibold%20bg-primary%2F5%20text-primary%20border-primary%2F20%22%7D",
                                        variant: "outline",
                                        className:
                                          "text-[10px] py-0 px-2 font-semibold bg-primary/5 text-primary border-primary/20",
                                        children: t.category,
                                      }),
                                      a.jsx("span", {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:163:23",
                                        "data-lov-name": "span",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "163",
                                        "data-component-file":
                                          "FolderDetail.tsx",
                                        "data-component-name": "span",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-%5B10px%5D%20font-medium%20text-muted-foreground%2F60%22%7D",
                                        className:
                                          "text-[10px] font-medium text-muted-foreground/60",
                                        children: new Date(
                                          t.updatedAt,
                                        ).toLocaleDateString(),
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
                    : a.jsx(s, {
                        "data-lov-id":
                          "src\\pages\\app\\FolderDetail.tsx:170:12",
                        "data-lov-name": "Card",
                        "data-component-path":
                          "src\\pages\\app\\FolderDetail.tsx",
                        "data-component-line": "170",
                        "data-component-file": "FolderDetail.tsx",
                        "data-component-name": "Card",
                        "data-component-content":
                          "%7B%22className%22%3A%22animate-fade-in%20overflow-hidden%20border-border%2F40%22%7D",
                        className:
                          "animate-fade-in overflow-hidden border-border/40",
                        children: a.jsx(r, {
                          "data-lov-id":
                            "src\\pages\\app\\FolderDetail.tsx:171:14",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\FolderDetail.tsx",
                          "data-component-line": "171",
                          "data-component-file": "FolderDetail.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content":
                            "%7B%22className%22%3A%22p-0%22%7D",
                          className: "p-0",
                          children: a.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\FolderDetail.tsx:172:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\FolderDetail.tsx",
                            "data-component-line": "172",
                            "data-component-file": "FolderDetail.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22overflow-x-auto%22%7D",
                            className: "overflow-x-auto",
                            children: a.jsxs("table", {
                              "data-lov-id":
                                "src\\pages\\app\\FolderDetail.tsx:173:18",
                              "data-lov-name": "table",
                              "data-component-path":
                                "src\\pages\\app\\FolderDetail.tsx",
                              "data-component-line": "173",
                              "data-component-file": "FolderDetail.tsx",
                              "data-component-name": "table",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-full%20text-left%22%7D",
                              className: "w-full text-left",
                              "aria-label": e("reports.table_desc"),
                              children: [
                                a.jsx("thead", {
                                  "data-lov-id":
                                    "src\\pages\\app\\FolderDetail.tsx:174:20",
                                  "data-lov-name": "thead",
                                  "data-component-path":
                                    "src\\pages\\app\\FolderDetail.tsx",
                                  "data-component-line": "174",
                                  "data-component-file": "FolderDetail.tsx",
                                  "data-component-name": "thead",
                                  "data-component-content": "%7B%7D",
                                  children: a.jsxs("tr", {
                                    "data-lov-id":
                                      "src\\pages\\app\\FolderDetail.tsx:175:24",
                                    "data-lov-name": "tr",
                                    "data-component-path":
                                      "src\\pages\\app\\FolderDetail.tsx",
                                    "data-component-line": "175",
                                    "data-component-file": "FolderDetail.tsx",
                                    "data-component-name": "tr",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22border-b%20border-border%2F50%20bg-muted%2F30%22%7D",
                                    className:
                                      "border-b border-border/50 bg-muted/30",
                                    children: [
                                      a.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:176:26",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "176",
                                        "data-component-file":
                                          "FolderDetail.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                        children: e("reports.title"),
                                      }),
                                      a.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:177:26",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "177",
                                        "data-component-file":
                                          "FolderDetail.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%20hidden%20sm%3Atable-cell%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden sm:table-cell",
                                        children: e("reports.filters.category"),
                                      }),
                                      a.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:178:26",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "178",
                                        "data-component-file":
                                          "FolderDetail.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%20hidden%20md%3Atable-cell%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell",
                                        children: e(
                                          "report_detail.cards.updated_at",
                                        ),
                                      }),
                                      a.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:179:26",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "179",
                                        "data-component-file":
                                          "FolderDetail.tsx",
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
                                    "src\\pages\\app\\FolderDetail.tsx:182:20",
                                  "data-lov-name": "tbody",
                                  "data-component-path":
                                    "src\\pages\\app\\FolderDetail.tsx",
                                  "data-component-line": "182",
                                  "data-component-file": "FolderDetail.tsx",
                                  "data-component-name": "tbody",
                                  "data-component-content": "%7B%7D",
                                  children: D.map((t) =>
                                    a.jsxs(
                                      "tr",
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\FolderDetail.tsx:184:24",
                                        "data-lov-name": "tr",
                                        "data-component-path":
                                          "src\\pages\\app\\FolderDetail.tsx",
                                        "data-component-line": "184",
                                        "data-component-file":
                                          "FolderDetail.tsx",
                                        "data-component-name": "tr",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22group%20border-b%20border-border%2F30%20last%3Aborder-0%20hover%3Abg-muted%2F30%20transition-colors%20cursor-pointer%22%7D",
                                        className:
                                          "group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer",
                                        onClick: () =>
                                          d(`/app/relatorios/${t.id}`),
                                        children: [
                                          a.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\FolderDetail.tsx:189:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\FolderDetail.tsx",
                                            "data-component-line": "189",
                                            "data-component-file":
                                              "FolderDetail.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%22%7D",
                                            className: "py-4 px-4",
                                            children: a.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\FolderDetail.tsx:190:28",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\FolderDetail.tsx",
                                              "data-component-line": "190",
                                              "data-component-file":
                                                "FolderDetail.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                a.jsx("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:191:30",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "191",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22w-9%20h-9%20rounded-lg%20bg-primary%2F5%20flex%20items-center%20justify-center%20border%20border-primary%2F10%20shrink-0%22%7D",
                                                  className:
                                                    "w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0",
                                                  children: a.jsx(i, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\FolderDetail.tsx:192:32",
                                                    "data-lov-name": "FileText",
                                                    "data-component-path":
                                                      "src\\pages\\app\\FolderDetail.tsx",
                                                    "data-component-line":
                                                      "192",
                                                    "data-component-file":
                                                      "FolderDetail.tsx",
                                                    "data-component-name":
                                                      "FileText",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-4%20w-4%20text-primary%2F70%22%7D",
                                                    className:
                                                      "h-4 w-4 text-primary/70",
                                                  }),
                                                }),
                                                a.jsxs("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:194:30",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "194",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  children: [
                                                    a.jsx("p", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:195:32",
                                                      "data-lov-name": "p",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "195",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "p",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22font-bold%20text-foreground%20group-hover%3Atext-primary%20transition-colors%20text-sm%22%7D",
                                                      className:
                                                        "font-bold text-foreground group-hover:text-primary transition-colors text-sm",
                                                      children: t.title,
                                                    }),
                                                    a.jsx("p", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:196:32",
                                                      "data-lov-name": "p",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "196",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "p",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20hidden%20lg%3Ablock%20line-clamp-1%20max-w-xs%22%7D",
                                                      className:
                                                        "text-xs text-muted-foreground hidden lg:block line-clamp-1 max-w-xs",
                                                      children: t.description,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          a.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\FolderDetail.tsx:200:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\FolderDetail.tsx",
                                            "data-component-line": "200",
                                            "data-component-file":
                                              "FolderDetail.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%20hidden%20sm%3Atable-cell%20text-sm%20font-medium%20text-muted-foreground%22%7D",
                                            className:
                                              "py-4 px-4 hidden sm:table-cell text-sm font-medium text-muted-foreground",
                                            children: t.category,
                                          }),
                                          a.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\FolderDetail.tsx:203:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\FolderDetail.tsx",
                                            "data-component-line": "203",
                                            "data-component-file":
                                              "FolderDetail.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%20text-sm%20text-muted-foreground%20hidden%20md%3Atable-cell%22%7D",
                                            className:
                                              "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                            children: new Date(
                                              t.updatedAt,
                                            ).toLocaleDateString(b.language),
                                          }),
                                          a.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\FolderDetail.tsx:206:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\FolderDetail.tsx",
                                            "data-component-line": "206",
                                            "data-component-file":
                                              "FolderDetail.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%20text-right%22%7D",
                                            className: "py-4 px-4 text-right",
                                            children: a.jsxs(h, {
                                              "data-lov-id":
                                                "src\\pages\\app\\FolderDetail.tsx:207:28",
                                              "data-lov-name": "DropdownMenu",
                                              "data-component-path":
                                                "src\\pages\\app\\FolderDetail.tsx",
                                              "data-component-line": "207",
                                              "data-component-file":
                                                "FolderDetail.tsx",
                                              "data-component-name":
                                                "DropdownMenu",
                                              "data-component-content":
                                                "%7B%7D",
                                              children: [
                                                a.jsx(v, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:208:30",
                                                  "data-lov-name":
                                                    "DropdownMenuTrigger",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "208",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuTrigger",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  asChild: !0,
                                                  onClick: (o) =>
                                                    o.stopPropagation(),
                                                  children: a.jsx(l, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\FolderDetail.tsx:209:32",
                                                    "data-lov-name": "Button",
                                                    "data-component-path":
                                                      "src\\pages\\app\\FolderDetail.tsx",
                                                    "data-component-line":
                                                      "209",
                                                    "data-component-file":
                                                      "FolderDetail.tsx",
                                                    "data-component-name":
                                                      "Button",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-8%20w-8%20p-0%22%7D",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "h-8 w-8 p-0",
                                                    children: a.jsx(u, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:210:34",
                                                      "data-lov-name":
                                                        "MoreHorizontal",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "210",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "MoreHorizontal",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                      className: "h-4 w-4",
                                                    }),
                                                  }),
                                                }),
                                                a.jsxs(f, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\FolderDetail.tsx:213:30",
                                                  "data-lov-name":
                                                    "DropdownMenuContent",
                                                  "data-component-path":
                                                    "src\\pages\\app\\FolderDetail.tsx",
                                                  "data-component-line": "213",
                                                  "data-component-file":
                                                    "FolderDetail.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuContent",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  align: "end",
                                                  children: [
                                                    a.jsxs(c, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:214:32",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "214",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      onClick: (o) => {
                                                        (o.stopPropagation(),
                                                          d(
                                                            `/app/relatorios/${t.id}`,
                                                          ));
                                                      },
                                                      children: [
                                                        a.jsx(i, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\FolderDetail.tsx:215:34",
                                                          "data-lov-name":
                                                            "FileText",
                                                          "data-component-path":
                                                            "src\\pages\\app\\FolderDetail.tsx",
                                                          "data-component-line":
                                                            "215",
                                                          "data-component-file":
                                                            "FolderDetail.tsx",
                                                          "data-component-name":
                                                            "FileText",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                                                          className:
                                                            "h-4 w-4 mr-2",
                                                        }),
                                                        e(
                                                          "reports.actions.view",
                                                        ),
                                                      ],
                                                    }),
                                                    a.jsxs(c, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\FolderDetail.tsx:217:32",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\FolderDetail.tsx",
                                                      "data-component-line":
                                                        "217",
                                                      "data-component-file":
                                                        "FolderDetail.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      onClick: (o) =>
                                                        o.stopPropagation(),
                                                      children: [
                                                        a.jsx(N, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\FolderDetail.tsx:217:87",
                                                          "data-lov-name":
                                                            "Share2",
                                                          "data-component-path":
                                                            "src\\pages\\app\\FolderDetail.tsx",
                                                          "data-component-line":
                                                            "217",
                                                          "data-component-file":
                                                            "FolderDetail.tsx",
                                                          "data-component-name":
                                                            "Share2",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        e(
                                                          "reports.actions.share",
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
            a.jsx(L, {
              "data-lov-id": "src\\pages\\app\\FolderDetail.tsx:231:8",
              "data-lov-name": "AISidebar",
              "data-component-path": "src\\pages\\app\\FolderDetail.tsx",
              "data-component-line": "231",
              "data-component-file": "FolderDetail.tsx",
              "data-component-name": "AISidebar",
              "data-component-content":
                "%7B%22className%22%3A%22hidden%20xl%3Ablock%22%7D",
              context: "reports",
              className: "hidden xl:block",
            }),
          ],
        }),
      });
};
export { oa as default };
