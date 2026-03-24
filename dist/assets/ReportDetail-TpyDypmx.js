import { c as H, u as I, j as a, B as o } from "./index-BZzvAVnT.js";
import { r as x } from "./vendor-BgR6OOld.js";
import { b as V, a as Z, L as C } from "./router-D2JcpG7e.js";
import { C as n, a as p, b as D, c as g, d as $ } from "./card-DCmFy9yX.js";
import { B as y } from "./badge-DMGJasfj.js";
import { D as q, a as G, b as O, c as _ } from "./dropdown-menu-DR3vwdOX.js";
import { P as Q } from "./paper-SMOssrFO.js";
import { r as W } from "./mockReports-3cW05Ka2.js";
import { B as Y } from "./BrandName-3XvNqLPU.js";
import { D as J, a as K } from "./DiagnosticSection-DZ2La2mX.js";
import { P as U } from "./PriorityCard-BWrVvT5h.js";
import { T as X, a as aa, b as k, c as T } from "./tabs-C6dO4E1n.js";
import {
  Q as ta,
  w as R,
  D as l,
  v as ea,
  V as E,
  E as S,
  W as oa,
  Y as L,
  e as na,
  O as M,
  Z as pa,
  _ as sa,
} from "./utils-C25gojUd.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-DUaPDS5r.js";
import "./PieChart-B46FBJBd.js";
const ba = () => {
  var j, b, A, w;
  const { id: i } = V(),
    v = Z(),
    { toast: s } = H(),
    { t, i18n: h } = I(),
    [e, P] = x.useState(null),
    [F, z] = x.useState(!0),
    f =
      (b =
        (j = e == null ? void 0 : e.rawData) == null ? void 0 : j.diagnostic) !=
        null && b.diagnostic
        ? {
            id: `diag-${e == null ? void 0 : e.id}`,
            reportId: (e == null ? void 0 : e.id) || "",
            createdAt: (e == null ? void 0 : e.createdAt) || "",
            ...e.rawData.diagnostic.diagnostic,
          }
        : null,
    u =
      (w =
        (A = e == null ? void 0 : e.rawData) == null ? void 0 : A.diagnostic) !=
        null && w.suggestedPriority
        ? {
            id: `prio-${e == null ? void 0 : e.id}`,
            diagnosticId: `diag-${e == null ? void 0 : e.id}`,
            createdAt: (e == null ? void 0 : e.createdAt) || "",
            status: "suggested",
            ...e.rawData.diagnostic.suggestedPriority,
          }
        : null;
  x.useEffect(() => {
    (async () => {
      if (i)
        try {
          const c = await W.getReportById(i);
          if (!c) {
            v("/app/relatorios");
            return;
          }
          P(c);
        } catch (c) {
          (console.error("Error loading report:", c),
            s({
              title: t("report_detail.notifications.error_load"),
              description: t("report_detail.notifications.error_load_desc"),
              variant: "destructive",
            }));
        } finally {
          z(!1);
        }
    })();
  }, [i, v, s, t]);
  const N = (d) => {
      switch (d) {
        case "completed":
          return "bg-green-100 text-green-800";
        case "shared":
          return "bg-blue-100 text-blue-800";
        default:
          return "bg-yellow-100 text-yellow-800";
      }
    },
    B = (d) => {
      switch (d) {
        case "completed":
          return t("reports.filters.completed");
        case "shared":
          return t("reports.filters.shared");
        default:
          return t("reports.filters.draft");
      }
    },
    m = () => {
      s({
        title: t("report_detail.notifications.link_copied"),
        description: t("report_detail.notifications.link_copied_desc"),
      });
    },
    r = () => {
      s({
        title: t("report_detail.notifications.download_start"),
        description: t("report_detail.notifications.download_desc"),
      });
    };
  return F
    ? a.jsx("div", {
        "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:104:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
        "data-component-line": "104",
        "data-component-file": "ReportDetail.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22p-4%20sm%3Ap-6%20max-w-7xl%20mx-auto%22%7D",
        className: "p-4 sm:p-6 max-w-7xl mx-auto",
        children: a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:105:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
          "data-component-line": "105",
          "data-component-file": "ReportDetail.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22animate-pulse%20space-y-6%22%7D",
          className: "animate-pulse space-y-6",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:106:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "106",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
              className: "flex items-center gap-4",
              children: [
                a.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:107:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "107",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-10%20w-10%20bg-muted%20rounded%22%7D",
                  className: "h-10 w-10 bg-muted rounded",
                }),
                a.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:108:12",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "108",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22h-8%20bg-muted%20rounded%20w-64%22%7D",
                  className: "h-8 bg-muted rounded w-64",
                }),
              ],
            }),
            a.jsx("div", {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:110:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "110",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22h-96%20bg-muted%20rounded%22%7D",
              className: "h-96 bg-muted rounded",
            }),
          ],
        }),
      })
    : e
      ? a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:137:4",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
          "data-component-line": "137",
          "data-component-file": "ReportDetail.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22p-4%20sm%3Ap-6%20max-w-7xl%20mx-auto%20space-y-6%22%7D",
          className: "p-4 sm:p-6 max-w-7xl mx-auto space-y-6",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:139:6",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "139",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-4%22%7D",
              className:
                "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
              children: [
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:140:8",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "140",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-3%20min-w-0%22%7D",
                  className: "flex items-center gap-3 min-w-0",
                  children: [
                    a.jsx(o, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:141:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "141",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex-shrink-0%22%7D",
                      variant: "ghost",
                      size: "sm",
                      asChild: !0,
                      className: "flex-shrink-0",
                      children: a.jsxs(C, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:142:12",
                        "data-lov-name": "Link",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "142",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "Link",
                        "data-component-content": "%7B%7D",
                        to: "/app/relatorios",
                        children: [
                          a.jsx(ta, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:143:14",
                            "data-lov-name": "ArrowLeft",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "143",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "ArrowLeft",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%20mr-1%20sm%3Amr-2%22%7D",
                            className: "h-4 w-4 mr-1 sm:mr-2",
                          }),
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:144:14",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "144",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "span",
                            "data-component-content":
                              "%7B%22className%22%3A%22hidden%20sm%3Ainline%22%7D",
                            className: "hidden sm:inline",
                            children: t("common.back"),
                          }),
                        ],
                      }),
                    }),
                    a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:148:10",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "148",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22min-w-0%22%7D",
                      className: "min-w-0",
                      children: [
                        a.jsx("h1", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:149:12",
                          "data-lov-name": "h1",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "149",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "h1",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xl%20sm%3Atext-2xl%20font-bold%20text-foreground%20truncate%22%7D",
                          className:
                            "text-xl sm:text-2xl font-bold text-foreground truncate",
                          children: e.title,
                        }),
                        e.subtitle &&
                          a.jsx("p", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:151:14",
                            "data-lov-name": "p",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "151",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-muted-foreground%20text-sm%20truncate%22%7D",
                            className: "text-muted-foreground text-sm truncate",
                            children: e.subtitle,
                          }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:156:8",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "156",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22hidden%20sm%3Aflex%20items-center%20gap-2%20flex-shrink-0%22%7D",
                  className: "hidden sm:flex items-center gap-2 flex-shrink-0",
                  children: [
                    a.jsx(y, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:157:10",
                      "data-lov-name": "Badge",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "157",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "Badge",
                      "data-component-content": "%7B%7D",
                      className: N(e.status),
                      children: B(e.status),
                    }),
                    a.jsxs(o, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:160:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "160",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "outline",
                      size: "sm",
                      onClick: m,
                      children: [
                        a.jsx(R, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:161:12",
                          "data-lov-name": "Share2",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "161",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "Share2",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                          className: "h-4 w-4 mr-2",
                        }),
                        t("common.share"),
                      ],
                    }),
                    a.jsxs(o, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:164:10",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "164",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "outline",
                      size: "sm",
                      onClick: r,
                      children: [
                        a.jsx(l, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:165:12",
                          "data-lov-name": "Download",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "165",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "Download",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                          className: "h-4 w-4 mr-2",
                        }),
                        t("common.download"),
                      ],
                    }),
                    a.jsxs(q, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:169:10",
                      "data-lov-name": "DropdownMenu",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "169",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "DropdownMenu",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(G, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:170:12",
                          "data-lov-name": "DropdownMenuTrigger",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "170",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "DropdownMenuTrigger",
                          "data-component-content": "%7B%7D",
                          asChild: !0,
                          children: a.jsx(o, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:171:14",
                            "data-lov-name": "Button",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "171",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Button",
                            "data-component-content": "%7B%7D",
                            variant: "outline",
                            size: "sm",
                            children: a.jsx(ea, {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:172:16",
                              "data-lov-name": "MoreHorizontal",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "172",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "MoreHorizontal",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                              className: "h-4 w-4",
                            }),
                          }),
                        }),
                        a.jsxs(O, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:175:12",
                          "data-lov-name": "DropdownMenuContent",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "175",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "DropdownMenuContent",
                          "data-component-content": "%7B%7D",
                          align: "end",
                          children: [
                            a.jsxs(_, {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:176:14",
                              "data-lov-name": "DropdownMenuItem",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "176",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "DropdownMenuItem",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx(E, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:177:16",
                                  "data-lov-name": "Edit",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "177",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "Edit",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                  className: "mr-2 h-4 w-4",
                                }),
                                t("common.edit"),
                              ],
                            }),
                            a.jsxs(_, {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:180:14",
                              "data-lov-name": "DropdownMenuItem",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "180",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "DropdownMenuItem",
                              "data-component-content": "%7B%7D",
                              children: [
                                a.jsx(S, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:181:16",
                                  "data-lov-name": "Eye",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "181",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "Eye",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                  className: "mr-2 h-4 w-4",
                                }),
                                t("report_detail.presentation_mode"),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx("div", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:188:8",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "188",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22sm%3Ahidden%20flex%20items-center%20gap-2%22%7D",
                  className: "sm:hidden flex items-center gap-2",
                  children: a.jsx(y, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:189:10",
                    "data-lov-name": "Badge",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "189",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "Badge",
                    "data-component-content": "%7B%7D",
                    className: N(e.status),
                    children: B(e.status),
                  }),
                }),
              ],
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:196:6",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "196",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22grid%20grid-cols-2%20md%3Agrid-cols-4%20gap-3%20sm%3Agap-4%22%7D",
              className: "grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4",
              children: [
                a.jsx(n, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:197:8",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "197",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: a.jsxs(p, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:198:10",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "198",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%20sm%3Apt-6%22%7D",
                    className: "p-4 sm:pt-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:199:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "199",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%20text-muted-foreground%22%7D",
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          a.jsx(oa, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:200:14",
                            "data-lov-name": "Tag",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "200",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Tag",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%20flex-shrink-0%22%7D",
                            className: "h-4 w-4 flex-shrink-0",
                          }),
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:201:14",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "201",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%7D",
                            children: t("report_detail.cards.category"),
                          }),
                        ],
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:203:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "203",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%20text-sm%20sm%3Atext-base%20truncate%22%7D",
                        className: "font-medium text-sm sm:text-base truncate",
                        children: e.category,
                      }),
                    ],
                  }),
                }),
                a.jsx(n, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:207:8",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "207",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: a.jsxs(p, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:208:10",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "208",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%20sm%3Apt-6%22%7D",
                    className: "p-4 sm:pt-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:209:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "209",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%20text-muted-foreground%22%7D",
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          a.jsx(L, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:210:14",
                            "data-lov-name": "Calendar",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "210",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Calendar",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%20flex-shrink-0%22%7D",
                            className: "h-4 w-4 flex-shrink-0",
                          }),
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:211:14",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "211",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%7D",
                            children: t("report_detail.cards.created_at"),
                          }),
                        ],
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:213:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "213",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%20text-sm%20sm%3Atext-base%22%7D",
                        className: "font-medium text-sm sm:text-base",
                        children: new Date(e.createdAt).toLocaleDateString(
                          h.language,
                        ),
                      }),
                    ],
                  }),
                }),
                a.jsx(n, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:217:8",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "217",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: a.jsxs(p, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:218:10",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "218",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%20sm%3Apt-6%22%7D",
                    className: "p-4 sm:pt-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:219:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "219",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%20text-muted-foreground%22%7D",
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          a.jsx(L, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:220:14",
                            "data-lov-name": "Calendar",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "220",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Calendar",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%20flex-shrink-0%22%7D",
                            className: "h-4 w-4 flex-shrink-0",
                          }),
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:221:14",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "221",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%7D",
                            children: t("report_detail.cards.updated_at"),
                          }),
                        ],
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:223:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "223",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-medium%20text-sm%20sm%3Atext-base%22%7D",
                        className: "font-medium text-sm sm:text-base",
                        children: new Date(e.updatedAt).toLocaleDateString(
                          h.language,
                        ),
                      }),
                    ],
                  }),
                }),
                a.jsx(n, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:227:8",
                  "data-lov-name": "Card",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "227",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Card",
                  "data-component-content": "%7B%7D",
                  children: a.jsxs(p, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:228:10",
                    "data-lov-name": "CardContent",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "228",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "CardContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22p-4%20sm%3Apt-6%22%7D",
                    className: "p-4 sm:pt-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:229:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "229",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%20text-muted-foreground%22%7D",
                        className:
                          "flex items-center gap-2 text-sm text-muted-foreground",
                        children: [
                          a.jsx(S, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:230:14",
                            "data-lov-name": "Eye",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "230",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Eye",
                            "data-component-content":
                              "%7B%22className%22%3A%22h-4%20w-4%20flex-shrink-0%22%7D",
                            className: "h-4 w-4 flex-shrink-0",
                          }),
                          a.jsx("span", {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:231:14",
                            "data-lov-name": "span",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "231",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "span",
                            "data-component-content": "%7B%7D",
                            children: t("report_detail.cards.views"),
                          }),
                        ],
                      }),
                      a.jsx("p", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:233:12",
                        "data-lov-name": "p",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "233",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22text%22%3A%2224%22%2C%22className%22%3A%22font-medium%20text-sm%20sm%3Atext-base%22%7D",
                        className: "font-medium text-sm sm:text-base",
                        children: "24",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            a.jsxs(X, {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:238:6",
              "data-lov-name": "Tabs",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "238",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "Tabs",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              defaultValue: "report",
              className: "space-y-6",
              children: [
                a.jsxs(aa, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:239:8",
                  "data-lov-name": "TabsList",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "239",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "TabsList",
                  "data-component-content":
                    "%7B%22className%22%3A%22bg-muted%2F50%20p-1%22%7D",
                  className: "bg-muted/50 p-1",
                  children: [
                    a.jsxs(k, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:240:10",
                      "data-lov-name": "TabsTrigger",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "240",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "TabsTrigger",
                      "data-component-content":
                        "%7B%22className%22%3A%22gap-2%20font-bold%20text-xs%20uppercase%20tracking-widest%22%7D",
                      value: "report",
                      className:
                        "gap-2 font-bold text-xs uppercase tracking-widest",
                      children: [
                        a.jsx(na, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:241:12",
                          "data-lov-name": "FileText",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "241",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "FileText",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-3.5%20w-3.5%22%7D",
                          className: "h-3.5 w-3.5",
                        }),
                        t("report_detail.tabs.report"),
                      ],
                    }),
                    a.jsxs(k, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:244:10",
                      "data-lov-name": "TabsTrigger",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "244",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "TabsTrigger",
                      "data-component-content":
                        "%7B%22className%22%3A%22gap-2%20font-bold%20text-xs%20uppercase%20tracking-widest%22%7D",
                      value: "sources",
                      className:
                        "gap-2 font-bold text-xs uppercase tracking-widest",
                      children: [
                        a.jsx(M, {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:245:12",
                          "data-lov-name": "Database",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "245",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "Database",
                          "data-component-content":
                            "%7B%22className%22%3A%22h-3.5%20w-3.5%22%7D",
                          className: "h-3.5 w-3.5",
                        }),
                        t("report_detail.tabs.sources"),
                      ],
                    }),
                  ],
                }),
                a.jsx(T, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:250:8",
                  "data-lov-name": "TabsContent",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "250",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "TabsContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-8%20animate-in%20fade-in%20duration-500%22%7D",
                  value: "report",
                  className: "space-y-8 animate-in fade-in duration-500",
                  children: a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:251:10",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "251",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-3%20gap-6%22%7D",
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:252:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "252",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22lg%3Acol-span-2%20space-y-8%22%7D",
                        className: "lg:col-span-2 space-y-8",
                        children: [
                          a.jsx(Q, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:253:14",
                            "data-lov-name": "Paper",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "253",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Paper",
                            "data-component-content":
                              "%7B%22className%22%3A%22min-h-%5B1000px%5D%20shadow-2xl%20border-none%22%7D",
                            orientation: "portrait",
                            padding: "lg",
                            className: "min-h-[1000px] shadow-2xl border-none",
                            children: a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:254:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "254",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22p-4%20sm%3Ap-8%22%7D",
                              className: "p-4 sm:p-8",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:255:19",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "255",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20justify-between%20items-start%20mb-8%20opacity-50%20grayscale%20hover%3Agrayscale-0%20transition-all%20duration-500%22%7D",
                                  className:
                                    "flex justify-between items-start mb-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500",
                                  children: [
                                    a.jsx(Y, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:256:22",
                                      "data-lov-name": "BrandName",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "256",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "BrandName",
                                      "data-component-content": "%7B%7D",
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:257:22",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "257",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22text%22%3A%22%E2%80%A2%22%2C%22className%22%3A%22text-right%20text-%5B10px%5D%20uppercase%20tracking-widest%20font-mono%22%7D",
                                      className:
                                        "text-right text-[10px] uppercase tracking-widest font-mono",
                                      children: [
                                        t("report_detail.content.verified"),
                                        " • ",
                                        e.id,
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx(J, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:262:19",
                                  "data-lov-name": "DynamicBlockRenderer",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "262",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "DynamicBlockRenderer",
                                  "data-component-content": "%7B%7D",
                                  blocks: e.blocks,
                                }),
                              ],
                            }),
                          }),
                          f &&
                            u &&
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:268:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "268",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22pt-8%20border-t%20space-y-6%20animate-in%20fade-in%20slide-in-from-bottom-6%20duration-700%20delay-300%22%7D",
                              className:
                                "pt-8 border-t space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:269:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "269",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%20mb-2%22%7D",
                                  className: "flex items-center gap-2 mb-2",
                                  children: [
                                    a.jsx(pa, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:270:20",
                                      "data-lov-name": "Zap",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "270",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "Zap",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%20fill-primary%2F20%22%7D",
                                      className:
                                        "h-5 w-5 text-primary fill-primary/20",
                                    }),
                                    a.jsx("h2", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:271:20",
                                      "data-lov-name": "h2",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "271",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "h2",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22text-xl%20font-bold%20tracking-tight%22%7D",
                                      className:
                                        "text-xl font-bold tracking-tight",
                                      children: t(
                                        "report_detail.ai_section.title",
                                      ),
                                    }),
                                  ],
                                }),
                                a.jsx(K, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:274:18",
                                  "data-lov-name": "DiagnosticSection",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "274",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "DiagnosticSection",
                                  "data-component-content": "%7B%7D",
                                  diagnostic: f,
                                }),
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:276:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "276",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-4%22%7D",
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 gap-4",
                                  children: [
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:277:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "277",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22flex%20flex-col%20justify-center%20space-y-2%20p-4%22%7D",
                                      className:
                                        "flex flex-col justify-center space-y-2 p-4",
                                      children: [
                                        a.jsx("h4", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportDetail.tsx:278:22",
                                          "data-lov-name": "h4",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportDetail.tsx",
                                          "data-component-line": "278",
                                          "data-component-file":
                                            "ReportDetail.tsx",
                                          "data-component-name": "h4",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22font-bold%20text-sm%20uppercase%20tracking-wider%20text-muted-foreground%22%7D",
                                          className:
                                            "font-bold text-sm uppercase tracking-wider text-muted-foreground",
                                          children: t(
                                            "report_detail.ai_section.recommended_priority",
                                          ),
                                        }),
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportDetail.tsx:279:22",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportDetail.tsx",
                                          "data-component-line": "279",
                                          "data-component-file":
                                            "ReportDetail.tsx",
                                          "data-component-name": "p",
                                          "data-component-content":
                                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                          className:
                                            "text-sm text-muted-foreground",
                                          children: t(
                                            "report_detail.ai_section.priority_desc",
                                          ),
                                        }),
                                      ],
                                    }),
                                    a.jsx(U, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:283:20",
                                      "data-lov-name": "PriorityCard",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "283",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "PriorityCard",
                                      "data-component-content": "%7B%7D",
                                      priority: u,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:289:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "289",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-6%22%7D",
                        className: "space-y-6",
                        children: [
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:290:14",
                            "data-lov-name": "Card",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "290",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Card",
                            "data-component-content":
                              "%7B%22className%22%3A%22border-border%2F40%20bg-muted%2F10%20backdrop-blur-sm%22%7D",
                            className:
                              "border-border/40 bg-muted/10 backdrop-blur-sm",
                            children: [
                              a.jsx(D, {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportDetail.tsx:291:16",
                                "data-lov-name": "CardHeader",
                                "data-component-path":
                                  "src\\pages\\app\\ReportDetail.tsx",
                                "data-component-line": "291",
                                "data-component-file": "ReportDetail.tsx",
                                "data-component-name": "CardHeader",
                                "data-component-content": "%7B%7D",
                                children: a.jsx(g, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:292:18",
                                  "data-lov-name": "CardTitle",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "292",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "CardTitle",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%22%7D",
                                  className: "text-base sm:text-lg",
                                  children: t(
                                    "report_detail.sidebar.info_title",
                                  ),
                                }),
                              }),
                              a.jsxs(p, {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportDetail.tsx:294:16",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\ReportDetail.tsx",
                                "data-component-line": "294",
                                "data-component-file": "ReportDetail.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-4%22%7D",
                                className: "space-y-4",
                                children: [
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportDetail.tsx:295:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportDetail.tsx",
                                    "data-component-line": "295",
                                    "data-component-file": "ReportDetail.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:296:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "296",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: t(
                                          "report_detail.sidebar.template",
                                        ),
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:297:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "297",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22font-medium%22%7D",
                                        className: "font-medium",
                                        children: e.template,
                                      }),
                                    ],
                                  }),
                                  a.jsxs("div", {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportDetail.tsx:299:18",
                                    "data-lov-name": "div",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportDetail.tsx",
                                    "data-component-line": "299",
                                    "data-component-file": "ReportDetail.tsx",
                                    "data-component-name": "div",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:300:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "300",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: t(
                                          "report_detail.sidebar.description",
                                        ),
                                      }),
                                      a.jsx("p", {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:301:20",
                                        "data-lov-name": "p",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "301",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "p",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22text-sm%22%7D",
                                        className: "text-sm",
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs(n, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:306:14",
                            "data-lov-name": "Card",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "306",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "Card",
                            "data-component-content": "%7B%7D",
                            children: [
                              a.jsx(D, {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportDetail.tsx:307:16",
                                "data-lov-name": "CardHeader",
                                "data-component-path":
                                  "src\\pages\\app\\ReportDetail.tsx",
                                "data-component-line": "307",
                                "data-component-file": "ReportDetail.tsx",
                                "data-component-name": "CardHeader",
                                "data-component-content": "%7B%7D",
                                children: a.jsx(g, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:308:18",
                                  "data-lov-name": "CardTitle",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "308",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "CardTitle",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-base%20sm%3Atext-lg%22%7D",
                                  className: "text-base sm:text-lg",
                                  children: t(
                                    "report_detail.sidebar.quick_actions",
                                  ),
                                }),
                              }),
                              a.jsxs(p, {
                                "data-lov-id":
                                  "src\\pages\\app\\ReportDetail.tsx:310:16",
                                "data-lov-name": "CardContent",
                                "data-component-path":
                                  "src\\pages\\app\\ReportDetail.tsx",
                                "data-component-line": "310",
                                "data-component-file": "ReportDetail.tsx",
                                "data-component-name": "CardContent",
                                "data-component-content":
                                  "%7B%22className%22%3A%22space-y-2%22%7D",
                                className: "space-y-2",
                                children: [
                                  a.jsxs(o, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportDetail.tsx:311:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportDetail.tsx",
                                    "data-component-line": "311",
                                    "data-component-file": "ReportDetail.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                    variant: "outline",
                                    className: "w-full justify-start",
                                    children: [
                                      a.jsx(E, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:312:20",
                                        "data-lov-name": "Edit",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "312",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "Edit",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                        className: "mr-2 h-4 w-4",
                                      }),
                                      t("common.edit"),
                                    ],
                                  }),
                                  a.jsxs(o, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportDetail.tsx:315:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportDetail.tsx",
                                    "data-component-line": "315",
                                    "data-component-file": "ReportDetail.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                    variant: "outline",
                                    className: "w-full justify-start",
                                    onClick: m,
                                    children: [
                                      a.jsx(R, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:316:20",
                                        "data-lov-name": "Share2",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "316",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "Share2",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                        className: "mr-2 h-4 w-4",
                                      }),
                                      t("common.share"),
                                    ],
                                  }),
                                  a.jsxs(o, {
                                    "data-lov-id":
                                      "src\\pages\\app\\ReportDetail.tsx:319:18",
                                    "data-lov-name": "Button",
                                    "data-component-path":
                                      "src\\pages\\app\\ReportDetail.tsx",
                                    "data-component-line": "319",
                                    "data-component-file": "ReportDetail.tsx",
                                    "data-component-name": "Button",
                                    "data-component-content":
                                      "%7B%22className%22%3A%22w-full%20justify-start%22%7D",
                                    variant: "outline",
                                    className: "w-full justify-start",
                                    onClick: r,
                                    children: [
                                      a.jsx(l, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:320:20",
                                        "data-lov-name": "Download",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "320",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "Download",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22mr-2%20h-4%20w-4%22%7D",
                                        className: "mr-2 h-4 w-4",
                                      }),
                                      t("report_detail.sidebar.export_pdf"),
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
                }),
                a.jsx(T, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:329:8",
                  "data-lov-name": "TabsContent",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "329",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "TabsContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22animate-in%20fade-in%20duration-500%22%7D",
                  value: "sources",
                  className: "animate-in fade-in duration-500",
                  children: a.jsxs(n, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:330:10",
                    "data-lov-name": "Card",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "330",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "Card",
                    "data-component-content":
                      "%7B%22className%22%3A%22border-none%20shadow-xl%22%7D",
                    className: "border-none shadow-xl",
                    children: [
                      a.jsxs(D, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:331:12",
                        "data-lov-name": "CardHeader",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "331",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "CardHeader",
                        "data-component-content": "%7B%7D",
                        children: [
                          a.jsx(g, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:332:14",
                            "data-lov-name": "CardTitle",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "332",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "CardTitle",
                            "data-component-content":
                              "%7B%22className%22%3A%22text-lg%22%7D",
                            className: "text-lg",
                            children: t("report_detail.data_assets.title"),
                          }),
                          a.jsx($, {
                            "data-lov-id":
                              "src\\pages\\app\\ReportDetail.tsx:333:14",
                            "data-lov-name": "CardDescription",
                            "data-component-path":
                              "src\\pages\\app\\ReportDetail.tsx",
                            "data-component-line": "333",
                            "data-component-file": "ReportDetail.tsx",
                            "data-component-name": "CardDescription",
                            "data-component-content": "%7B%7D",
                            children: t(
                              "report_detail.data_assets.description",
                            ),
                          }),
                        ],
                      }),
                      a.jsx(p, {
                        "data-lov-id":
                          "src\\pages\\app\\ReportDetail.tsx:335:12",
                        "data-lov-name": "CardContent",
                        "data-component-path":
                          "src\\pages\\app\\ReportDetail.tsx",
                        "data-component-line": "335",
                        "data-component-file": "ReportDetail.tsx",
                        "data-component-name": "CardContent",
                        "data-component-content": "%7B%7D",
                        children: a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\ReportDetail.tsx:336:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\ReportDetail.tsx",
                          "data-component-line": "336",
                          "data-component-file": "ReportDetail.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-4%22%7D",
                          className: "space-y-4",
                          children: [
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:337:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "337",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-4%20rounded-xl%20border%20bg-muted%2F10%22%7D",
                              className:
                                "flex items-center justify-between p-4 rounded-xl border bg-muted/10",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:338:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "338",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                                  className: "flex items-center gap-4",
                                  children: [
                                    a.jsx("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:339:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "339",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22p-2%20bg-background%20rounded-lg%20border%20shadow-sm%22%7D",
                                      className:
                                        "p-2 bg-background rounded-lg border shadow-sm",
                                      children: a.jsx(M, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:340:22",
                                        "data-lov-name": "Database",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "340",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "Database",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                                        className: "h-5 w-5 text-primary",
                                      }),
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:342:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "342",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content": "%7B%7D",
                                      children: [
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportDetail.tsx:343:22",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportDetail.tsx",
                                          "data-component-line": "343",
                                          "data-component-file":
                                            "ReportDetail.tsx",
                                          "data-component-name": "p",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Vendas_Novembro_2025.xlsx%22%2C%22className%22%3A%22font-bold%20text-sm%22%7D",
                                          className: "font-bold text-sm",
                                          children: "Vendas_Novembro_2025.xlsx",
                                        }),
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportDetail.tsx:344:22",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportDetail.tsx",
                                          "data-component-line": "344",
                                          "data-component-file":
                                            "ReportDetail.tsx",
                                          "data-component-name": "p",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Planilha%20Excel%20%E2%80%A2%201.2%20MB%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: "Planilha Excel • 1.2 MB",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsxs(o, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:347:18",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "347",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22gap-2%20font-bold%22%7D",
                                  variant: "outline",
                                  size: "sm",
                                  className: "gap-2 font-bold",
                                  children: [
                                    a.jsx(l, {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:348:20",
                                      "data-lov-name": "Download",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "348",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "Download",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                                      className: "h-4 w-4",
                                    }),
                                    t("report_detail.data_assets.download"),
                                  ],
                                }),
                              ],
                            }),
                            a.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\ReportDetail.tsx:353:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\ReportDetail.tsx",
                              "data-component-line": "353",
                              "data-component-file": "ReportDetail.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20justify-between%20p-4%20rounded-xl%20border%20bg-muted%2F10%20opacity-50%22%7D",
                              className:
                                "flex items-center justify-between p-4 rounded-xl border bg-muted/10 opacity-50",
                              children: [
                                a.jsxs("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:354:18",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "354",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22flex%20items-center%20gap-4%22%7D",
                                  className: "flex items-center gap-4",
                                  children: [
                                    a.jsx("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:355:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "355",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content":
                                        "%7B%22className%22%3A%22p-2%20bg-background%20rounded-lg%20border%20shadow-sm%22%7D",
                                      className:
                                        "p-2 bg-background rounded-lg border shadow-sm",
                                      children: a.jsx(sa, {
                                        "data-lov-id":
                                          "src\\pages\\app\\ReportDetail.tsx:356:22",
                                        "data-lov-name": "ExternalLink",
                                        "data-component-path":
                                          "src\\pages\\app\\ReportDetail.tsx",
                                        "data-component-line": "356",
                                        "data-component-file":
                                          "ReportDetail.tsx",
                                        "data-component-name": "ExternalLink",
                                        "data-component-content":
                                          "%7B%22className%22%3A%22h-5%20w-5%20text-blue-500%22%7D",
                                        className: "h-5 w-5 text-blue-500",
                                      }),
                                    }),
                                    a.jsxs("div", {
                                      "data-lov-id":
                                        "src\\pages\\app\\ReportDetail.tsx:358:20",
                                      "data-lov-name": "div",
                                      "data-component-path":
                                        "src\\pages\\app\\ReportDetail.tsx",
                                      "data-component-line": "358",
                                      "data-component-file": "ReportDetail.tsx",
                                      "data-component-name": "div",
                                      "data-component-content": "%7B%7D",
                                      children: [
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportDetail.tsx:359:22",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportDetail.tsx",
                                          "data-component-line": "359",
                                          "data-component-file":
                                            "ReportDetail.tsx",
                                          "data-component-name": "p",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Google%20Analytics%20Dashboard%22%2C%22className%22%3A%22font-bold%20text-sm%22%7D",
                                          className: "font-bold text-sm",
                                          children:
                                            "Google Analytics Dashboard",
                                        }),
                                        a.jsx("p", {
                                          "data-lov-id":
                                            "src\\pages\\app\\ReportDetail.tsx:360:22",
                                          "data-lov-name": "p",
                                          "data-component-path":
                                            "src\\pages\\app\\ReportDetail.tsx",
                                          "data-component-line": "360",
                                          "data-component-file":
                                            "ReportDetail.tsx",
                                          "data-component-name": "p",
                                          "data-component-content":
                                            "%7B%22text%22%3A%22Fonte%20Externa%20%E2%80%A2%20analytics.google.com%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                                          className:
                                            "text-xs text-muted-foreground",
                                          children:
                                            "Fonte Externa • analytics.google.com",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                a.jsx(o, {
                                  "data-lov-id":
                                    "src\\pages\\app\\ReportDetail.tsx:363:18",
                                  "data-lov-name": "Button",
                                  "data-component-path":
                                    "src\\pages\\app\\ReportDetail.tsx",
                                  "data-component-line": "363",
                                  "data-component-file": "ReportDetail.tsx",
                                  "data-component-name": "Button",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22gap-2%22%7D",
                                  variant: "ghost",
                                  size: "sm",
                                  className: "gap-2",
                                  children: t(
                                    "report_detail.data_assets.open_link",
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:373:6",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "373",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22sm%3Ahidden%20fixed%20bottom-%5B3.5rem%5D%20left-0%20right-0%20bg-background%2F95%20backdrop-blur-sm%20border-t%20p-3%20z-40%20flex%20gap-2%22%7D",
              className:
                "sm:hidden fixed bottom-[3.5rem] left-0 right-0 bg-background/95 backdrop-blur-sm border-t p-3 z-40 flex gap-2",
              style: { paddingBottom: "env(safe-area-inset-bottom)" },
              children: [
                a.jsxs(o, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:374:8",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "374",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Button",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex-1%22%7D",
                  variant: "outline",
                  className: "flex-1",
                  onClick: m,
                  children: [
                    a.jsx(R, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:375:10",
                      "data-lov-name": "Share2",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "375",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "Share2",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                      className: "h-4 w-4 mr-2",
                    }),
                    t("common.share"),
                  ],
                }),
                a.jsxs(o, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:378:8",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "378",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Button",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex-1%22%7D",
                  className: "flex-1",
                  onClick: r,
                  children: [
                    a.jsx(l, {
                      "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:379:10",
                      "data-lov-name": "Download",
                      "data-component-path":
                        "src\\pages\\app\\ReportDetail.tsx",
                      "data-component-line": "379",
                      "data-component-file": "ReportDetail.tsx",
                      "data-component-name": "Download",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                      className: "h-4 w-4 mr-2",
                    }),
                    t("common.download"),
                  ],
                }),
              ],
            }),
          ],
        })
      : a.jsx("div", {
          "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:118:6",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
          "data-component-line": "118",
          "data-component-file": "ReportDetail.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22p-4%20sm%3Ap-6%20max-w-7xl%20mx-auto%22%7D",
          className: "p-4 sm:p-6 max-w-7xl mx-auto",
          children: a.jsx(n, {
            "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:119:8",
            "data-lov-name": "Card",
            "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
            "data-component-line": "119",
            "data-component-file": "ReportDetail.tsx",
            "data-component-name": "Card",
            "data-component-content": "%7B%7D",
            children: a.jsxs(p, {
              "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:120:10",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
              "data-component-line": "120",
              "data-component-file": "ReportDetail.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22text-center%20py-12%22%7D",
              className: "text-center py-12",
              children: [
                a.jsx("h3", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:121:12",
                  "data-lov-name": "h3",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "121",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "h3",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-lg%20font-medium%20text-foreground%20mb-2%22%7D",
                  className: "text-lg font-medium text-foreground mb-2",
                  children: t("report_detail.notifications.not_found"),
                }),
                a.jsx("p", {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:124:12",
                  "data-lov-name": "p",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "124",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "p",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-muted-foreground%20mb-6%22%7D",
                  className: "text-muted-foreground mb-6",
                  children: t("report_detail.notifications.error_load_desc"),
                }),
                a.jsx(o, {
                  "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:127:12",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                  "data-component-line": "127",
                  "data-component-file": "ReportDetail.tsx",
                  "data-component-name": "Button",
                  "data-component-content": "%7B%7D",
                  asChild: !0,
                  children: a.jsx(C, {
                    "data-lov-id": "src\\pages\\app\\ReportDetail.tsx:128:14",
                    "data-lov-name": "Link",
                    "data-component-path": "src\\pages\\app\\ReportDetail.tsx",
                    "data-component-line": "128",
                    "data-component-file": "ReportDetail.tsx",
                    "data-component-name": "Link",
                    "data-component-content": "%7B%7D",
                    to: "/app/relatorios",
                    children: t("report_detail.back_button"),
                  }),
                }),
              ],
            }),
          }),
        });
};
export { ba as default };
