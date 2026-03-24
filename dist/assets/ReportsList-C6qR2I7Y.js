import { u as K, j as t, B as d } from "./index-BZzvAVnT.js";
import { r as s } from "./vendor-BgR6OOld.js";
import { a as O, L as f } from "./router-D2JcpG7e.js";
import { C as v, a as h, b as Q, c as U } from "./card-DCmFy9yX.js";
import { I as W } from "./input-BnDZujQi.js";
import { B as b } from "./badge-DMGJasfj.js";
import { D as j, a as A, b as y, c as i } from "./dropdown-menu-DR3vwdOX.js";
import { S as C, a as S, b as k, c as M, d as m } from "./select-BPvc3et1.js";
import { A as X } from "./AISidebar-Nt5highz.js";
import { r as Y } from "./mockReports-3cW05Ka2.js";
import {
  r as Z,
  p as I,
  s as F,
  t as tt,
  u as at,
  v as T,
  E as u,
  w as _,
  D as E,
  e as P,
} from "./utils-C25gojUd.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-DUaPDS5r.js";
import "./index-Cda9Zv0V.js";
const Lt = () => {
  const l = O(),
    { t: e, i18n: N } = K(),
    [L, z] = s.useState([]),
    [x, w] = s.useState([]),
    [$, V] = s.useState(!0),
    [n, H] = s.useState(""),
    [c, G] = s.useState("all"),
    [r, q] = s.useState("all"),
    [R, D] = s.useState("list");
  (s.useEffect(() => {
    (async () => {
      try {
        const o = await Y.getAllReports();
        (z(o), w(o));
      } catch (o) {
        console.error("Error loading reports:", o);
      } finally {
        V(!1);
      }
    })();
  }, []),
    s.useEffect(() => {
      let a = L;
      (n &&
        (a = a.filter(
          (o) =>
            o.title.toLowerCase().includes(n.toLowerCase()) ||
            o.description.toLowerCase().includes(n.toLowerCase()) ||
            o.category.toLowerCase().includes(n.toLowerCase()),
        )),
        c !== "all" && (a = a.filter((o) => o.status === c)),
        r !== "all" && (a = a.filter((o) => o.category === r)),
        w(a));
    }, [L, n, c, r]));
  const g = (a) => {
      switch (a) {
        case "completed":
          return "bg-green-100 text-green-800";
        case "shared":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-yellow-100 text-yellow-800";
      }
    },
    B = (a) => {
      switch (a) {
        case "completed":
          return e("reports.filters.completed");
        case "shared":
          return e("reports.filters.shared");
        default:
          return e("reports.filters.draft");
      }
    },
    J = Array.from(new Set(L.map((a) => a.category)));
  return $
    ? t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\ReportsList.tsx:77:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\ReportsList.tsx",
        "data-component-line": "77",
        "data-component-file": "ReportsList.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22p-4%20sm%3Ap-6%20max-w-7xl%20mx-auto%22%7D",
        className: "p-4 sm:p-6 max-w-7xl mx-auto",
        children: t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\ReportsList.tsx:78:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportsList.tsx",
          "data-component-line": "78",
          "data-component-file": "ReportsList.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22animate-pulse%20space-y-6%22%7D",
          className: "animate-pulse space-y-6",
          children: [
            t.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportsList.tsx:79:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportsList.tsx",
              "data-component-line": "79",
              "data-component-file": "ReportsList.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20justify-between%20items-center%22%7D",
              className: "flex justify-between items-center",
              children: [
                t.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\ReportsList.tsx:80:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                  "data-component-line": "80",
                  "data-component-file": "ReportsList.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-8%20bg-muted%20rounded%20w-48%22%7D",
                  className: "h-8 bg-muted rounded w-48",
                }),
                t.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\ReportsList.tsx:81:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                  "data-component-line": "81",
                  "data-component-file": "ReportsList.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-10%20bg-muted%20rounded%20w-32%22%7D",
                  className: "h-10 bg-muted rounded w-32",
                }),
              ],
            }),
            t.jsx("div", {
              "data-lov-id": "src\\pages\\app\\ReportsList.tsx:83:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportsList.tsx",
              "data-component-line": "83",
              "data-component-file": "ReportsList.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: [1, 2, 3, 4, 5, 6].map((a) =>
                t.jsx(
                  "div",
                  {
                    "data-lov-id": "src\\pages\\app\\ReportsList.tsx:85:14",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                    "data-component-line": "85",
                    "data-component-file": "ReportsList.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-56%20bg-muted%20rounded-xl%22%7D",
                    className: "h-56 bg-muted rounded-xl",
                  },
                  a,
                ),
              ),
            }),
          ],
        }),
      })
    : t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\ReportsList.tsx:94:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\ReportsList.tsx",
        "data-component-line": "94",
        "data-component-file": "ReportsList.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22bg-gradient-subtle%20min-h-full%20w-full%22%7D",
        className: "bg-gradient-subtle min-h-full w-full",
        children: t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\ReportsList.tsx:95:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportsList.tsx",
          "data-component-line": "95",
          "data-component-file": "ReportsList.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20w-full%20overflow-hidden%22%7D",
          className: "flex w-full overflow-hidden",
          children: [
            t.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportsList.tsx:97:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportsList.tsx",
              "data-component-line": "97",
              "data-component-file": "ReportsList.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex-1%20min-w-0%20p-4%20sm%3Ap-6%20space-y-4%20sm%3Aspace-y-6%22%7D",
              className: "flex-1 min-w-0 p-4 sm:p-6 space-y-4 sm:space-y-6",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\ReportsList.tsx:99:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                  "data-component-line": "99",
                  "data-component-file": "ReportsList.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-3%22%7D",
                  className:
                    "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                  children: [
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\ReportsList.tsx:100:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                      "data-component-line": "100",
                      "data-component-file": "ReportsList.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        t.jsxs("h1", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportsList.tsx:101:14",
                          "data-lov-name": "h1",
                          "data-component-path":
                            "src\\pages\\app\\ReportsList.tsx",
                          "data-component-line": "101",
                          "data-component-file": "ReportsList.tsx",
                          "data-component-name": "h1",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xl%20sm%3Atext-2xl%20lg%3Atext-3xl%20font-bold%20text-foreground%20flex%20items-center%20gap-2%20sm%3Agap-3%22%7D",
                          className:
                            "text-xl sm:text-2xl lg:text-3xl font-bold text-foreground flex items-center gap-2 sm:gap-3",
                          children: [
                            t.jsx(Z, {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:102:16",
                              "data-lov-name": "Filter",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "102",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "Filter",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-5%20w-5%20sm%3Ah-7%20sm%3Aw-7%20text-primary%22%7D",
                              className: "h-5 w-5 sm:h-7 sm:w-7 text-primary",
                            }),
                            e("reports.title"),
                          ],
                        }),
                        t.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportsList.tsx:105:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\ReportsList.tsx",
                          "data-component-line": "105",
                          "data-component-file": "ReportsList.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-muted-foreground%20mt-1%20text-sm%22%7D",
                          className: "text-muted-foreground mt-1 text-sm",
                          children: e("reports.subtitle"),
                        }),
                      ],
                    }),
                    t.jsx(d, {
                      "data-lov-id": "src\\pages\\app\\ReportsList.tsx:110:12",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                      "data-component-line": "110",
                      "data-component-file": "ReportsList.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22self-start%20sm%3Aself-auto%20touch-target%22%7D",
                      asChild: !0,
                      size: "default",
                      className: "self-start sm:self-auto touch-target",
                      children: t.jsxs(f, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportsList.tsx:111:14",
                        "data-lov-name": "Link",
                        "data-component-path":
                          "src\\pages\\app\\ReportsList.tsx",
                        "data-component-line": "111",
                        "data-component-file": "ReportsList.tsx",
                        "data-component-name": "Link",
                        "data-component-content": "%7B%7D",
                        to: "/app/novo-relatorio",
                        children: [
                          t.jsx(I, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportsList.tsx:112:16",
                            "data-lov-name": "Plus",
                            "data-component-path":
                              "src\\pages\\app\\ReportsList.tsx",
                            "data-component-line": "112",
                            "data-component-file": "ReportsList.tsx",
                            "data-component-name": "Plus",
                            "data-component-content":
                              "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                            className: "mr-2 h-4 w-4",
                          }),
                          t.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportsList.tsx:113:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportsList.tsx",
                            "data-component-line": "113",
                            "data-component-file": "ReportsList.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22hidden%20sm%3Ainline%22%7D",
                            className: "hidden sm:inline",
                            children: e("reports.new_report_button"),
                          }),
                          t.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportsList.tsx:114:16",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportsList.tsx",
                            "data-component-line": "114",
                            "data-component-file": "ReportsList.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22sm%3Ahidden%22%7D",
                            className: "sm:hidden",
                            children: e("reports.new_report_button"),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                t.jsx(v, {
                  "data-lov-id": "src\\pages\\app\\ReportsList.tsx:121:10",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                  "data-component-line": "121",
                  "data-component-file": "ReportsList.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: t.jsx(h, {
                    "data-lov-id": "src\\pages\\app\\ReportsList.tsx:122:12",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                    "data-component-line": "122",
                    "data-component-file": "ReportsList.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%22%7D",
                    className: "p-4",
                    children: t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\ReportsList.tsx:123:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                      "data-component-line": "123",
                      "data-component-file": "ReportsList.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-3%22%7D",
                      className: "space-y-3",
                      children: [
                        t.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportsList.tsx:124:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ReportsList.tsx",
                          "data-component-line": "124",
                          "data-component-file": "ReportsList.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-3%22%7D",
                          className: "flex flex-col sm:flex-row gap-3",
                          children: [
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:125:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "125",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22relative%20flex-1%22%7D",
                              className: "relative flex-1",
                              children: [
                                t.jsx(F, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:126:20",
                                  "data-lov-name": "Search",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "126",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Search",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20text-muted-foreground%20h-4%20w-4%22%7D",
                                  className:
                                    "absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4",
                                }),
                                t.jsx(W, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:127:20",
                                  "data-lov-name": "Input",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "127",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Input",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22pl-10%22%7D",
                                  placeholder: e(
                                    "reports.filters.search_placeholder",
                                  ),
                                  value: n,
                                  onChange: (a) => H(a.target.value),
                                  className: "pl-10",
                                }),
                              ],
                            }),
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:135:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "135",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20gap-2%22%7D",
                              className: "flex gap-2",
                              children: [
                                t.jsxs(C, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:136:20",
                                  "data-lov-name": "Select",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "136",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Select",
                                  "data-component-content": "%7B%7D",
                                  value: c,
                                  onValueChange: G,
                                  children: [
                                    t.jsx(S, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportsList.tsx:137:22",
                                      "data-lov-name": "SelectTrigger",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportsList.tsx",
                                      "data-component-line": "137",
                                      "data-component-file": "ReportsList.tsx",
                                      "data-component-name": "SelectTrigger",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-full%20sm%3Aw-36%22%7D",
                                      className: "w-full sm:w-36",
                                      children: t.jsx(k, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:138:24",
                                        "data-lov-name": "SelectValue",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "138",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "SelectValue",
                                        "data-component-content": "%7B%7D",
                                        placeholder: e(
                                          "reports.filters.status",
                                        ),
                                      }),
                                    }),
                                    t.jsxs(M, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportsList.tsx:140:22",
                                      "data-lov-name": "SelectContent",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportsList.tsx",
                                      "data-component-line": "140",
                                      "data-component-file": "ReportsList.tsx",
                                      "data-component-name": "SelectContent",
                                      "data-component-content": "%7B%7D",
                                      children: [
                                        t.jsx(m, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportsList.tsx:141:24",
                                          "data-lov-name": "SelectItem",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportsList.tsx",
                                          "data-component-line": "141",
                                          "data-component-file":
                                            "ReportsList.tsx",
                                          "data-component-name": "SelectItem",
                                          "data-component-content": "%7B%7D",
                                          value: "all",
                                          children: e("reports.filters.all"),
                                        }),
                                        t.jsx(m, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportsList.tsx:142:24",
                                          "data-lov-name": "SelectItem",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportsList.tsx",
                                          "data-component-line": "142",
                                          "data-component-file":
                                            "ReportsList.tsx",
                                          "data-component-name": "SelectItem",
                                          "data-component-content": "%7B%7D",
                                          value: "draft",
                                          children: e("reports.filters.draft"),
                                        }),
                                        t.jsx(m, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportsList.tsx:143:24",
                                          "data-lov-name": "SelectItem",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportsList.tsx",
                                          "data-component-line": "143",
                                          "data-component-file":
                                            "ReportsList.tsx",
                                          "data-component-name": "SelectItem",
                                          "data-component-content": "%7B%7D",
                                          value: "completed",
                                          children: e(
                                            "reports.filters.completed",
                                          ),
                                        }),
                                        t.jsx(m, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportsList.tsx:144:24",
                                          "data-lov-name": "SelectItem",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportsList.tsx",
                                          "data-component-line": "144",
                                          "data-component-file":
                                            "ReportsList.tsx",
                                          "data-component-name": "SelectItem",
                                          "data-component-content": "%7B%7D",
                                          value: "shared",
                                          children: e("reports.filters.shared"),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t.jsxs(C, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:148:20",
                                  "data-lov-name": "Select",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "148",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Select",
                                  "data-component-content": "%7B%7D",
                                  value: r,
                                  onValueChange: q,
                                  children: [
                                    t.jsx(S, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportsList.tsx:149:22",
                                      "data-lov-name": "SelectTrigger",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportsList.tsx",
                                      "data-component-line": "149",
                                      "data-component-file": "ReportsList.tsx",
                                      "data-component-name": "SelectTrigger",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22w-full%20sm%3Aw-36%22%7D",
                                      className: "w-full sm:w-36",
                                      children: t.jsx(k, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:150:24",
                                        "data-lov-name": "SelectValue",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "150",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "SelectValue",
                                        "data-component-content": "%7B%7D",
                                        placeholder: e(
                                          "reports.filters.category",
                                        ),
                                      }),
                                    }),
                                    t.jsxs(M, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportsList.tsx:152:22",
                                      "data-lov-name": "SelectContent",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportsList.tsx",
                                      "data-component-line": "152",
                                      "data-component-file": "ReportsList.tsx",
                                      "data-component-name": "SelectContent",
                                      "data-component-content": "%7B%7D",
                                      children: [
                                        t.jsx(m, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportsList.tsx:153:24",
                                          "data-lov-name": "SelectItem",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportsList.tsx",
                                          "data-component-line": "153",
                                          "data-component-file":
                                            "ReportsList.tsx",
                                          "data-component-name": "SelectItem",
                                          "data-component-content": "%7B%7D",
                                          value: "all",
                                          children: e("reports.filters.all"),
                                        }),
                                        J.map((a) =>
                                          t.jsx(
                                            m,
                                            {
                                              "data-lov-id":
                                                "src\\pages\\app\\ReportsList.tsx:156:26",
                                              "data-lov-name": "SelectItem",
                                              "data-component-path":
                                                "src\\pages\\app\\ReportsList.tsx",
                                              "data-component-line": "156",
                                              "data-component-file":
                                                "ReportsList.tsx",
                                              "data-component-name":
                                                "SelectItem",
                                              "data-component-content":
                                                "%7B%7D",
                                              value: a,
                                              children: a,
                                            },
                                            a,
                                          ),
                                        ),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportsList.tsx:163:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ReportsList.tsx",
                          "data-component-line": "163",
                          "data-component-file": "ReportsList.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                          className: "flex items-center justify-between",
                          children: [
                            t.jsx("p", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:164:18",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "164",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-xs%20sm%3Atext-sm%20text-muted-foreground%22%7D",
                              className:
                                "text-xs sm:text-sm text-muted-foreground",
                              children: e("reports.counter", {
                                count: x.length,
                              }),
                            }),
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:168:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "168",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22hidden%20sm%3Aflex%20items-center%20gap-1%22%7D",
                              className: "hidden sm:flex items-center gap-1",
                              children: [
                                t.jsx(d, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:169:22",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "169",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content": "%7B%7D",
                                  variant: R === "grid" ? "default" : "outline",
                                  size: "sm",
                                  onClick: () => D("grid"),
                                  "aria-label": e("reports.view_grid"),
                                  title: e("reports.view_grid"),
                                  children: t.jsx(tt, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportsList.tsx:176:24",
                                    "data-lov-name": "Grid",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportsList.tsx",
                                    "data-component-line": "176",
                                    "data-component-file": "ReportsList.tsx",
                                    "data-component-name": "Grid",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                    className: "h-4 w-4",
                                  }),
                                }),
                                t.jsx(d, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:178:22",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "178",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content": "%7B%7D",
                                  variant: R === "list" ? "default" : "outline",
                                  size: "sm",
                                  onClick: () => D("list"),
                                  "aria-label": e("reports.view_list"),
                                  title: e("reports.view_list"),
                                  children: t.jsx(at, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportsList.tsx:185:24",
                                    "data-lov-name": "List",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportsList.tsx",
                                    "data-component-line": "185",
                                    "data-component-file": "ReportsList.tsx",
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
                      ],
                    }),
                  }),
                }),
                x.length === 0
                  ? t.jsx(v, {
                      "data-lov-id": "src\\pages\\app\\ReportsList.tsx:195:12",
                      "data-lov-name": "Card",
                      "data-component-path": "src\\pages\\app\\ReportsList.tsx",
                      "data-component-line": "195",
                      "data-component-file": "ReportsList.tsx",
                      "data-component-name": "Card",
                      "data-component-content": "%7B%7D",
                      children: t.jsx(h, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportsList.tsx:196:14",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ReportsList.tsx",
                        "data-component-line": "196",
                        "data-component-file": "ReportsList.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-center%20py-12%22%7D",
                        className: "text-center py-12",
                        children: t.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportsList.tsx:197:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ReportsList.tsx",
                          "data-component-line": "197",
                          "data-component-file": "ReportsList.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22max-w-md%20mx-auto%22%7D",
                          className: "max-w-md mx-auto",
                          children: [
                            t.jsx("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:198:18",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "198",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-16%20h-16%20bg-muted%20rounded-full%20flex%20items-center%20justify-center%20mx-auto%20mb-4%22%7D",
                              className:
                                "w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4",
                              children: t.jsx(F, {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportsList.tsx:199:20",
                                "data-lov-name": "Search",
                                "data-component-path":
                                  "src\\pages\\app\\ReportsList.tsx",
                                "data-component-line": "199",
                                "data-component-file": "ReportsList.tsx",
                                "data-component-name": "Search",
                                "data-component-content":
                                  "%7B%22className%22%3A%22h-8%20w-8%20text-muted-foreground%22%7D",
                                className: "h-8 w-8 text-muted-foreground",
                              }),
                            }),
                            t.jsx("h3", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:201:18",
                              "data-lov-name": "h3",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "201",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "h3",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-lg%20font-medium%20text-foreground%20mb-2%22%7D",
                              className:
                                "text-lg font-medium text-foreground mb-2",
                              children: e("reports.empty.title"),
                            }),
                            t.jsx("p", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:204:18",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "204",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-muted-foreground%20mb-6%20text-sm%22%7D",
                              className: "text-muted-foreground mb-6 text-sm",
                              children: e(
                                n || c !== "all" || r !== "all"
                                  ? "reports.empty.filter_desc"
                                  : "reports.empty.brand_new_desc",
                              ),
                            }),
                            !n &&
                              c === "all" &&
                              r === "all" &&
                              t.jsx(d, {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportsList.tsx:211:20",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\ReportsList.tsx",
                                "data-component-line": "211",
                                "data-component-file": "ReportsList.tsx",
                                "data-component-name": "Button",
                                "data-component-content": "%7B%7D",
                                asChild: !0,
                                children: t.jsxs(f, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:212:22",
                                  "data-lov-name": "Link",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "212",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "Link",
                                  "data-component-content": "%7B%7D",
                                  to: "/app/novo-relatorio",
                                  children: [
                                    t.jsx(I, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportsList.tsx:213:24",
                                      "data-lov-name": "Plus",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportsList.tsx",
                                      "data-component-line": "213",
                                      "data-component-file": "ReportsList.tsx",
                                      "data-component-name": "Plus",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                      className: "mr-2 h-4 w-4",
                                    }),
                                    e("reports.empty.cta"),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      }),
                    })
                  : R === "grid"
                    ? t.jsx("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportsList.tsx:223:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportsList.tsx",
                        "data-component-line": "223",
                        "data-component-file": "ReportsList.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%20sm%3Agap-6%22%7D",
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
                        children: x.map((a, o) =>
                          t.jsxs(
                            v,
                            {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:225:16",
                              "data-lov-name": "Card",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "225",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "Card",
                              "data-component-content":
                                "%7B%22className%22%3A%22card-hover%20group%20cursor-pointer%20overflow-hidden%20border-border%2F40%20animate-fade-in%22%7D",
                              className:
                                "card-hover group cursor-pointer overflow-hidden border-border/40 animate-fade-in",
                              style: { animationDelay: `${0.3 + o * 0.1}s` },
                              onClick: () => l(`/app/relatorios/${a.id}`),
                              children: [
                                t.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:231:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "231",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "div",
                                  "data-component-content": "%7B%7D",
                                  className: `h-1.5 w-full ${g(a.status).includes("green") ? "bg-emerald-500" : g(a.status).includes("yellow") ? "bg-amber-500" : "bg-slate-400"}`,
                                }),
                                t.jsx(Q, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:232:18",
                                  "data-lov-name": "CardHeader",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "232",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "CardHeader",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22pb-2%20p-5%22%7D",
                                  className: "pb-2 p-5",
                                  children: t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportsList.tsx:233:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportsList.tsx",
                                    "data-component-line": "233",
                                    "data-component-file": "ReportsList.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22flex%20items-start%20justify-between%20gap-3%22%7D",
                                    className:
                                      "flex items-start justify-between gap-3",
                                    children: [
                                      t.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:234:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "234",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex-1%20min-w-0%22%7D",
                                        className: "flex-1 min-w-0",
                                        children: [
                                          t.jsx(U, {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:235:24",
                                            "data-lov-name": "CardTitle",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "235",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "CardTitle",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%20font-bold%20text-foreground%20line-clamp-2%20group-hover%3Atext-primary%20transition-colors%20tracking-tight%22%7D",
                                            className:
                                              "text-base sm:text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors tracking-tight",
                                            children: a.title,
                                          }),
                                          t.jsx(b, {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:238:24",
                                            "data-lov-name": "Badge",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "238",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "Badge",
                                            "data-component-content": "%7B%7D",
                                            className: `mt-2 ${g(a.status)} text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 border-none shadow-sm`,
                                            variant: "secondary",
                                            children: B(a.status),
                                          }),
                                        ],
                                      }),
                                      t.jsxs(j, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:242:22",
                                        "data-lov-name": "DropdownMenu",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "242",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "DropdownMenu",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          t.jsx(A, {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:243:24",
                                            "data-lov-name":
                                              "DropdownMenuTrigger",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "243",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name":
                                              "DropdownMenuTrigger",
                                            "data-component-content": "%7B%7D",
                                            asChild: !0,
                                            onClick: (p) => p.stopPropagation(),
                                            children: t.jsx(d, {
                                              "data-lov-id":
                                                "src\\pages\\app\\ReportsList.tsx:244:26",
                                              "data-lov-name": "Button",
                                              "data-component-path":
                                                "src\\pages\\app\\ReportsList.tsx",
                                              "data-component-line": "244",
                                              "data-component-file":
                                                "ReportsList.tsx",
                                              "data-component-name": "Button",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22h-8%20w-8%20p-0%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20shrink-0%22%7D",
                                              variant: "ghost",
                                              size: "sm",
                                              className:
                                                "h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity shrink-0",
                                              children: t.jsx(T, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ReportsList.tsx:245:28",
                                                "data-lov-name":
                                                  "MoreHorizontal",
                                                "data-component-path":
                                                  "src\\pages\\app\\ReportsList.tsx",
                                                "data-component-line": "245",
                                                "data-component-file":
                                                  "ReportsList.tsx",
                                                "data-component-name":
                                                  "MoreHorizontal",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                className: "h-4 w-4",
                                              }),
                                            }),
                                          }),
                                          t.jsxs(y, {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:248:24",
                                            "data-lov-name":
                                              "DropdownMenuContent",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "248",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name":
                                              "DropdownMenuContent",
                                            "data-component-content": "%7B%7D",
                                            align: "end",
                                            children: [
                                              t.jsxs(i, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ReportsList.tsx:249:26",
                                                "data-lov-name":
                                                  "DropdownMenuItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\ReportsList.tsx",
                                                "data-component-line": "249",
                                                "data-component-file":
                                                  "ReportsList.tsx",
                                                "data-component-name":
                                                  "DropdownMenuItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                onClick: (p) => {
                                                  (p.stopPropagation(),
                                                    l(
                                                      `/app/relatorios/${a.id}`,
                                                    ));
                                                },
                                                children: [
                                                  t.jsx(u, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\ReportsList.tsx:250:28",
                                                    "data-lov-name": "Eye",
                                                    "data-component-path":
                                                      "src\\pages\\app\\ReportsList.tsx",
                                                    "data-component-line":
                                                      "250",
                                                    "data-component-file":
                                                      "ReportsList.tsx",
                                                    "data-component-name":
                                                      "Eye",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                    className: "mr-2 h-4 w-4",
                                                  }),
                                                  e("reports.actions.view"),
                                                ],
                                              }),
                                              t.jsxs(i, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ReportsList.tsx:252:26",
                                                "data-lov-name":
                                                  "DropdownMenuItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\ReportsList.tsx",
                                                "data-component-line": "252",
                                                "data-component-file":
                                                  "ReportsList.tsx",
                                                "data-component-name":
                                                  "DropdownMenuItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                onClick: (p) =>
                                                  p.stopPropagation(),
                                                children: [
                                                  t.jsx(_, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\ReportsList.tsx:252:81",
                                                    "data-lov-name": "Share2",
                                                    "data-component-path":
                                                      "src\\pages\\app\\ReportsList.tsx",
                                                    "data-component-line":
                                                      "252",
                                                    "data-component-file":
                                                      "ReportsList.tsx",
                                                    "data-component-name":
                                                      "Share2",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                    className: "mr-2 h-4 w-4",
                                                  }),
                                                  e("reports.actions.share"),
                                                ],
                                              }),
                                              t.jsxs(i, {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ReportsList.tsx:253:26",
                                                "data-lov-name":
                                                  "DropdownMenuItem",
                                                "data-component-path":
                                                  "src\\pages\\app\\ReportsList.tsx",
                                                "data-component-line": "253",
                                                "data-component-file":
                                                  "ReportsList.tsx",
                                                "data-component-name":
                                                  "DropdownMenuItem",
                                                "data-component-content":
                                                  "%7B%7D",
                                                onClick: (p) =>
                                                  p.stopPropagation(),
                                                children: [
                                                  t.jsx(E, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\ReportsList.tsx:253:81",
                                                    "data-lov-name": "Download",
                                                    "data-component-path":
                                                      "src\\pages\\app\\ReportsList.tsx",
                                                    "data-component-line":
                                                      "253",
                                                    "data-component-file":
                                                      "ReportsList.tsx",
                                                    "data-component-name":
                                                      "Download",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                    className: "mr-2 h-4 w-4",
                                                  }),
                                                  e("reports.actions.download"),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                t.jsx(h, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:258:18",
                                  "data-lov-name": "CardContent",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "258",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "CardContent",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22px-5%20pb-5%20pt-0%22%7D",
                                  className: "px-5 pb-5 pt-0",
                                  children: t.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportsList.tsx:259:20",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportsList.tsx",
                                    "data-component-line": "259",
                                    "data-component-file": "ReportsList.tsx",
                                    "data-component-name": "div",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22space-y-4%22%7D",
                                    className: "space-y-4",
                                    children: [
                                      t.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:260:22",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "260",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%20line-clamp-2%20leading-relaxed%20min-h-%5B2.5rem%5D%22%7D",
                                        className:
                                          "text-sm text-muted-foreground line-clamp-2 leading-relaxed min-h-[2.5rem]",
                                        children: a.description,
                                      }),
                                      t.jsxs("div", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:262:22",
                                        "data-lov-name": "div",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "262",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "div",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22flex%20items-center%20justify-between%20pt-4%20border-t%20border-border%2F30%22%7D",
                                        className:
                                          "flex items-center justify-between pt-4 border-t border-border/30",
                                        children: [
                                          t.jsxs("div", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:263:24",
                                            "data-lov-name": "div",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "263",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "div",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              t.jsx("div", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ReportsList.tsx:264:26",
                                                "data-lov-name": "div",
                                                "data-component-path":
                                                  "src\\pages\\app\\ReportsList.tsx",
                                                "data-component-line": "264",
                                                "data-component-file":
                                                  "ReportsList.tsx",
                                                "data-component-name": "div",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22w-7%20h-7%20rounded-lg%20bg-primary%2F5%20flex%20items-center%20justify-center%22%7D",
                                                className:
                                                  "w-7 h-7 rounded-lg bg-primary/5 flex items-center justify-center",
                                                children: t.jsx(P, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ReportsList.tsx:265:28",
                                                  "data-lov-name": "FileText",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ReportsList.tsx",
                                                  "data-component-line": "265",
                                                  "data-component-file":
                                                    "ReportsList.tsx",
                                                  "data-component-name":
                                                    "FileText",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22h-4%20w-4%20text-primary%2F70%22%7D",
                                                  className:
                                                    "h-4 w-4 text-primary/70",
                                                }),
                                              }),
                                              t.jsx("span", {
                                                "data-lov-id":
                                                  "src\\pages\\app\\ReportsList.tsx:267:26",
                                                "data-lov-name": "span",
                                                "data-component-path":
                                                  "src\\pages\\app\\ReportsList.tsx",
                                                "data-component-line": "267",
                                                "data-component-file":
                                                  "ReportsList.tsx",
                                                "data-component-name": "span",
                                                "data-component-content":
                                                  "%7B%22className%22%3A%22text-xs%20font-semibold%20text-muted-foreground%22%7D",
                                                className:
                                                  "text-xs font-semibold text-muted-foreground",
                                                children: a.category,
                                              }),
                                            ],
                                          }),
                                          t.jsx("span", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:269:24",
                                            "data-lov-name": "span",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "269",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "span",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22text-%5B10px%5D%20font-medium%20text-muted-foreground%2F60%20uppercase%20tracking-tighter%22%7D",
                                            className:
                                              "text-[10px] font-medium text-muted-foreground/60 uppercase tracking-tighter",
                                            children: new Date(
                                              a.updatedAt,
                                            ).toLocaleDateString(N.language),
                                          }),
                                        ],
                                      }),
                                      t.jsx(d, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:274:22",
                                        "data-lov-name": "Button",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "274",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "Button",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22w-full%20font-bold%20hover%3Abg-primary%20hover%3Atext-white%20transition-all%20duration-300%22%7D",
                                        variant: "outline",
                                        size: "sm",
                                        asChild: !0,
                                        className:
                                          "w-full font-bold hover:bg-primary hover:text-white transition-all duration-300",
                                        children: t.jsxs(f, {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportsList.tsx:275:24",
                                          "data-lov-name": "Link",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportsList.tsx",
                                          "data-component-line": "275",
                                          "data-component-file":
                                            "ReportsList.tsx",
                                          "data-component-name": "Link",
                                          "data-component-content": "%7B%7D",
                                          to: `/app/relatorios/${a.id}`,
                                          children: [
                                            t.jsx(u, {
                                              "data-lov-id":
                                                "src\\pages\\app\\ReportsList.tsx:276:26",
                                              "data-lov-name": "Eye",
                                              "data-component-path":
                                                "src\\pages\\app\\ReportsList.tsx",
                                              "data-component-line": "276",
                                              "data-component-file":
                                                "ReportsList.tsx",
                                              "data-component-name": "Eye",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                              className: "mr-2 h-4 w-4",
                                            }),
                                            e("reports.actions.open"),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            a.id,
                          ),
                        ),
                      })
                    : t.jsx(v, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportsList.tsx:285:12",
                        "data-lov-name": "Card",
                        "data-component-path":
                          "src\\pages\\app\\ReportsList.tsx",
                        "data-component-line": "285",
                        "data-component-file": "ReportsList.tsx",
                        "data-component-name": "Card",
                        "data-component-content":
                          "%7B%22className%22%3A%22animate-fade-in%20overflow-hidden%20border-border%2F40%22%7D",
                        className:
                          "animate-fade-in overflow-hidden border-border/40",
                        children: t.jsx(h, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportsList.tsx:286:14",
                          "data-lov-name": "CardContent",
                          "data-component-path":
                            "src\\pages\\app\\ReportsList.tsx",
                          "data-component-line": "286",
                          "data-component-file": "ReportsList.tsx",
                          "data-component-name": "CardContent",
                          "data-component-content":
                            "%7B%22className%22%3A%22p-0%22%7D",
                          className: "p-0",
                          children: t.jsx("div", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportsList.tsx:287:16",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\ReportsList.tsx",
                            "data-component-line": "287",
                            "data-component-file": "ReportsList.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22overflow-x-auto%22%7D",
                            className: "overflow-x-auto",
                            children: t.jsxs("table", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportsList.tsx:288:18",
                              "data-lov-name": "table",
                              "data-component-path":
                                "src\\pages\\app\\ReportsList.tsx",
                              "data-component-line": "288",
                              "data-component-file": "ReportsList.tsx",
                              "data-component-name": "table",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-full%20text-left%22%7D",
                              className: "w-full text-left",
                              "aria-label": e("reports.table_desc"),
                              children: [
                                t.jsx("thead", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:289:20",
                                  "data-lov-name": "thead",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "289",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "thead",
                                  "data-component-content": "%7B%7D",
                                  children: t.jsxs("tr", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportsList.tsx:290:22",
                                    "data-lov-name": "tr",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportsList.tsx",
                                    "data-component-line": "290",
                                    "data-component-file": "ReportsList.tsx",
                                    "data-component-name": "tr",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22border-b%20border-border%2F50%20bg-muted%2F30%22%7D",
                                    className:
                                      "border-b border-border/50 bg-muted/30",
                                    children: [
                                      t.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:291:24",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "291",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                        children: e("reports.title"),
                                      }),
                                      t.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:292:24",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "292",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%20hidden%20sm%3Atable-cell%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden sm:table-cell",
                                        children: e("reports.filters.category"),
                                      }),
                                      t.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:293:24",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "293",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider",
                                        children: e("reports.filters.status"),
                                      }),
                                      t.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:294:24",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "294",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20font-semibold%20text-xs%20text-muted-foreground%20uppercase%20tracking-wider%20hidden%20md%3Atable-cell%22%7D",
                                        className:
                                          "py-3 px-4 font-semibold text-xs text-muted-foreground uppercase tracking-wider hidden md:table-cell",
                                        children: e(
                                          "report_detail.cards.updated_at",
                                        ),
                                      }),
                                      t.jsx("th", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:295:24",
                                        "data-lov-name": "th",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "295",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "th",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22py-3%20px-4%20w-10%22%7D",
                                        className: "py-3 px-4 w-10",
                                      }),
                                    ],
                                  }),
                                }),
                                t.jsx("tbody", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportsList.tsx:298:20",
                                  "data-lov-name": "tbody",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportsList.tsx",
                                  "data-component-line": "298",
                                  "data-component-file": "ReportsList.tsx",
                                  "data-component-name": "tbody",
                                  "data-component-content": "%7B%7D",
                                  children: x.map((a) =>
                                    t.jsxs(
                                      "tr",
                                      {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportsList.tsx:300:24",
                                        "data-lov-name": "tr",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportsList.tsx",
                                        "data-component-line": "300",
                                        "data-component-file":
                                          "ReportsList.tsx",
                                        "data-component-name": "tr",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22group%20border-b%20border-border%2F30%20last%3Aborder-0%20hover%3Abg-muted%2F30%20transition-colors%20cursor-pointer%22%7D",
                                        className:
                                          "group border-b border-border/30 last:border-0 hover:bg-muted/30 transition-colors cursor-pointer",
                                        onClick: () =>
                                          l(`/app/relatorios/${a.id}`),
                                        children: [
                                          t.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:305:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "305",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%22%7D",
                                            className: "py-4 px-4",
                                            children: t.jsxs("div", {
                                              "data-lov-id":
                                                "src\\pages\\app\\ReportsList.tsx:306:28",
                                              "data-lov-name": "div",
                                              "data-component-path":
                                                "src\\pages\\app\\ReportsList.tsx",
                                              "data-component-line": "306",
                                              "data-component-file":
                                                "ReportsList.tsx",
                                              "data-component-name": "div",
                                              "data-component-content":
                                                "%7B%22className%22%3A%22flex%20items-center%20gap-3%22%7D",
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                t.jsx("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ReportsList.tsx:307:30",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ReportsList.tsx",
                                                  "data-component-line": "307",
                                                  "data-component-file":
                                                    "ReportsList.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%22className%22%3A%22w-9%20h-9%20rounded-lg%20bg-primary%2F5%20flex%20items-center%20justify-center%20border%20border-primary%2F10%20shrink-0%22%7D",
                                                  className:
                                                    "w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0",
                                                  children: t.jsx(P, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\ReportsList.tsx:308:32",
                                                    "data-lov-name": "FileText",
                                                    "data-component-path":
                                                      "src\\pages\\app\\ReportsList.tsx",
                                                    "data-component-line":
                                                      "308",
                                                    "data-component-file":
                                                      "ReportsList.tsx",
                                                    "data-component-name":
                                                      "FileText",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-4%20w-4%20text-primary%2F70%22%7D",
                                                    className:
                                                      "h-4 w-4 text-primary/70",
                                                  }),
                                                }),
                                                t.jsxs("div", {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ReportsList.tsx:310:30",
                                                  "data-lov-name": "div",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ReportsList.tsx",
                                                  "data-component-line": "310",
                                                  "data-component-file":
                                                    "ReportsList.tsx",
                                                  "data-component-name": "div",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  children: [
                                                    t.jsx("p", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\ReportsList.tsx:311:32",
                                                      "data-lov-name": "p",
                                                      "data-component-path":
                                                        "src\\pages\\app\\ReportsList.tsx",
                                                      "data-component-line":
                                                        "311",
                                                      "data-component-file":
                                                        "ReportsList.tsx",
                                                      "data-component-name":
                                                        "p",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22font-bold%20text-foreground%20group-hover%3Atext-primary%20transition-colors%20text-sm%22%7D",
                                                      className:
                                                        "font-bold text-foreground group-hover:text-primary transition-colors text-sm",
                                                      children: a.title,
                                                    }),
                                                    t.jsx("p", {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\ReportsList.tsx:312:32",
                                                      "data-lov-name": "p",
                                                      "data-component-path":
                                                        "src\\pages\\app\\ReportsList.tsx",
                                                      "data-component-line":
                                                        "312",
                                                      "data-component-file":
                                                        "ReportsList.tsx",
                                                      "data-component-name":
                                                        "p",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20hidden%20lg%3Ablock%20line-clamp-1%20max-w-xs%22%7D",
                                                      className:
                                                        "text-xs text-muted-foreground hidden lg:block line-clamp-1 max-w-xs",
                                                      children: a.description,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          t.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:316:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "316",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%20hidden%20sm%3Atable-cell%20text-sm%20font-medium%20text-muted-foreground%22%7D",
                                            className:
                                              "py-4 px-4 hidden sm:table-cell text-sm font-medium text-muted-foreground",
                                            children: a.category,
                                          }),
                                          t.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:319:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "319",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%22%7D",
                                            className: "py-4 px-4",
                                            children: t.jsx(b, {
                                              "data-lov-id":
                                                "src\\pages\\app\\ReportsList.tsx:320:28",
                                              "data-lov-name": "Badge",
                                              "data-component-path":
                                                "src\\pages\\app\\ReportsList.tsx",
                                              "data-component-line": "320",
                                              "data-component-file":
                                                "ReportsList.tsx",
                                              "data-component-name": "Badge",
                                              "data-component-content":
                                                "%7B%7D",
                                              className: `${g(a.status)} text-[10px] uppercase font-bold border-none`,
                                              variant: "secondary",
                                              children: B(a.status),
                                            }),
                                          }),
                                          t.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:324:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "324",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%20text-sm%20text-muted-foreground%20hidden%20md%3Atable-cell%22%7D",
                                            className:
                                              "py-4 px-4 text-sm text-muted-foreground hidden md:table-cell",
                                            children: new Date(
                                              a.updatedAt,
                                            ).toLocaleDateString(N.language),
                                          }),
                                          t.jsx("td", {
                                            "data-lov-id":
                                              "src\\pages\\app\\ReportsList.tsx:327:26",
                                            "data-lov-name": "td",
                                            "data-component-path":
                                              "src\\pages\\app\\ReportsList.tsx",
                                            "data-component-line": "327",
                                            "data-component-file":
                                              "ReportsList.tsx",
                                            "data-component-name": "td",
                                            "data-component-content":
                                              "%7B%22className%22%3A%22py-4%20px-4%20text-right%22%7D",
                                            className: "py-4 px-4 text-right",
                                            children: t.jsxs(j, {
                                              "data-lov-id":
                                                "src\\pages\\app\\ReportsList.tsx:328:28",
                                              "data-lov-name": "DropdownMenu",
                                              "data-component-path":
                                                "src\\pages\\app\\ReportsList.tsx",
                                              "data-component-line": "328",
                                              "data-component-file":
                                                "ReportsList.tsx",
                                              "data-component-name":
                                                "DropdownMenu",
                                              "data-component-content":
                                                "%7B%7D",
                                              children: [
                                                t.jsx(A, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ReportsList.tsx:329:30",
                                                  "data-lov-name":
                                                    "DropdownMenuTrigger",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ReportsList.tsx",
                                                  "data-component-line": "329",
                                                  "data-component-file":
                                                    "ReportsList.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuTrigger",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  asChild: !0,
                                                  onClick: (o) =>
                                                    o.stopPropagation(),
                                                  children: t.jsx(d, {
                                                    "data-lov-id":
                                                      "src\\pages\\app\\ReportsList.tsx:330:32",
                                                    "data-lov-name": "Button",
                                                    "data-component-path":
                                                      "src\\pages\\app\\ReportsList.tsx",
                                                    "data-component-line":
                                                      "330",
                                                    "data-component-file":
                                                      "ReportsList.tsx",
                                                    "data-component-name":
                                                      "Button",
                                                    "data-component-content":
                                                      "%7B%22className%22%3A%22h-8%20w-8%20p-0%22%7D",
                                                    variant: "ghost",
                                                    size: "sm",
                                                    className: "h-8 w-8 p-0",
                                                    children: t.jsx(T, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\ReportsList.tsx:331:34",
                                                      "data-lov-name":
                                                        "MoreHorizontal",
                                                      "data-component-path":
                                                        "src\\pages\\app\\ReportsList.tsx",
                                                      "data-component-line":
                                                        "331",
                                                      "data-component-file":
                                                        "ReportsList.tsx",
                                                      "data-component-name":
                                                        "MoreHorizontal",
                                                      "data-component-content":
                                                        "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                                      className: "h-4 w-4",
                                                    }),
                                                  }),
                                                }),
                                                t.jsxs(y, {
                                                  "data-lov-id":
                                                    "src\\pages\\app\\ReportsList.tsx:334:30",
                                                  "data-lov-name":
                                                    "DropdownMenuContent",
                                                  "data-component-path":
                                                    "src\\pages\\app\\ReportsList.tsx",
                                                  "data-component-line": "334",
                                                  "data-component-file":
                                                    "ReportsList.tsx",
                                                  "data-component-name":
                                                    "DropdownMenuContent",
                                                  "data-component-content":
                                                    "%7B%7D",
                                                  align: "end",
                                                  children: [
                                                    t.jsxs(i, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\ReportsList.tsx:335:32",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\ReportsList.tsx",
                                                      "data-component-line":
                                                        "335",
                                                      "data-component-file":
                                                        "ReportsList.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      onClick: (o) => {
                                                        (o.stopPropagation(),
                                                          l(
                                                            `/app/relatorios/${a.id}`,
                                                          ));
                                                      },
                                                      children: [
                                                        t.jsx(u, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\ReportsList.tsx:336:34",
                                                          "data-lov-name":
                                                            "Eye",
                                                          "data-component-path":
                                                            "src\\pages\\app\\ReportsList.tsx",
                                                          "data-component-line":
                                                            "336",
                                                          "data-component-file":
                                                            "ReportsList.tsx",
                                                          "data-component-name":
                                                            "Eye",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        e(
                                                          "reports.actions.view",
                                                        ),
                                                      ],
                                                    }),
                                                    t.jsxs(i, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\ReportsList.tsx:338:32",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\ReportsList.tsx",
                                                      "data-component-line":
                                                        "338",
                                                      "data-component-file":
                                                        "ReportsList.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      onClick: (o) =>
                                                        o.stopPropagation(),
                                                      children: [
                                                        t.jsx(_, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\ReportsList.tsx:338:87",
                                                          "data-lov-name":
                                                            "Share2",
                                                          "data-component-path":
                                                            "src\\pages\\app\\ReportsList.tsx",
                                                          "data-component-line":
                                                            "338",
                                                          "data-component-file":
                                                            "ReportsList.tsx",
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
                                                    t.jsxs(i, {
                                                      "data-lov-id":
                                                        "src\\pages\\app\\ReportsList.tsx:339:32",
                                                      "data-lov-name":
                                                        "DropdownMenuItem",
                                                      "data-component-path":
                                                        "src\\pages\\app\\ReportsList.tsx",
                                                      "data-component-line":
                                                        "339",
                                                      "data-component-file":
                                                        "ReportsList.tsx",
                                                      "data-component-name":
                                                        "DropdownMenuItem",
                                                      "data-component-content":
                                                        "%7B%7D",
                                                      onClick: (o) =>
                                                        o.stopPropagation(),
                                                      children: [
                                                        t.jsx(E, {
                                                          "data-lov-id":
                                                            "src\\pages\\app\\ReportsList.tsx:339:87",
                                                          "data-lov-name":
                                                            "Download",
                                                          "data-component-path":
                                                            "src\\pages\\app\\ReportsList.tsx",
                                                          "data-component-line":
                                                            "339",
                                                          "data-component-file":
                                                            "ReportsList.tsx",
                                                          "data-component-name":
                                                            "Download",
                                                          "data-component-content":
                                                            "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                                          className:
                                                            "mr-2 h-4 w-4",
                                                        }),
                                                        e(
                                                          "reports.actions.download",
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
                                      a.id,
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
            t.jsx(X, {
              "data-lov-id": "src\\pages\\app\\ReportsList.tsx:354:8",
              "data-lov-name": "AISidebar",
              "data-component-path": "src\\pages\\app\\ReportsList.tsx",
              "data-component-line": "354",
              "data-component-file": "ReportsList.tsx",
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
export { Lt as default };
