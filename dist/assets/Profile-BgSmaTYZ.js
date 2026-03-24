import { b as u, c as N, u as A, j as a, B as l } from "./index-BZzvAVnT.js";
import { r as B } from "./vendor-BgR6OOld.js";
import { C as s, a as p, b as j, c as D, d as C } from "./card-DCmFy9yX.js";
import { I as o } from "./input-BnDZujQi.js";
import { L as n } from "./label-DNWlrZfM.js";
import { A as b, a as y, b as w } from "./avatar-BJFpRB7u.js";
import {
  a8 as _,
  a9 as I,
  aa as L,
  ab as F,
  ac as S,
  S as T,
  ad as U,
} from "./utils-C25gojUd.js";
import "./router-D2JcpG7e.js";
const G = () => {
  var m, i, r, f, x, g, v;
  const { user: e } = u(),
    { toast: P } = N(),
    { t } = A(),
    [c, d] = B.useState(!1),
    h = () => {
      (d(!0),
        setTimeout(() => {
          (d(!1),
            P({
              title: t("settings.appearance.save_success_title"),
              description: t("settings.profile.save_button"),
            }));
        }, 1e3));
    };
  return a.jsx("div", {
    "data-lov-id": "src\\pages\\app\\Profile.tsx:31:4",
    "data-lov-name": "div",
    "data-component-path": "src\\pages\\app\\Profile.tsx",
    "data-component-line": "31",
    "data-component-file": "Profile.tsx",
    "data-component-name": "div",
    "data-component-content":
      "%7B%22className%22%3A%22bg-gradient-subtle%20min-h-screen%20p-4%20sm%3Ap-6%20lg%3Ap-8%22%7D",
    className: "bg-gradient-subtle min-h-screen p-4 sm:p-6 lg:p-8",
    children: a.jsxs("div", {
      "data-lov-id": "src\\pages\\app\\Profile.tsx:32:6",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\app\\Profile.tsx",
      "data-component-line": "32",
      "data-component-file": "Profile.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22max-w-4xl%20mx-auto%20space-y-8%20animate-fade-in%22%7D",
      className: "max-w-4xl mx-auto space-y-8 animate-fade-in",
      children: [
        a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Profile.tsx:34:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Profile.tsx",
          "data-component-line": "34",
          "data-component-file": "Profile.tsx",
          "data-component-name": "div",
          "data-component-content": "%7B%7D",
          children: [
            a.jsx("h1", {
              "data-lov-id": "src\\pages\\app\\Profile.tsx:35:10",
              "data-lov-name": "h1",
              "data-component-path": "src\\pages\\app\\Profile.tsx",
              "data-component-line": "35",
              "data-component-file": "Profile.tsx",
              "data-component-name": "h1",
              "data-component-content":
                "%7B%22className%22%3A%22text-3xl%20font-bold%20text-foreground%22%7D",
              className: "text-3xl font-bold text-foreground",
              children: t("profile.title"),
            }),
            a.jsx("p", {
              "data-lov-id": "src\\pages\\app\\Profile.tsx:36:10",
              "data-lov-name": "p",
              "data-component-path": "src\\pages\\app\\Profile.tsx",
              "data-component-line": "36",
              "data-component-file": "Profile.tsx",
              "data-component-name": "p",
              "data-component-content":
                "%7B%22className%22%3A%22text-muted-foreground%20mt-2%22%7D",
              className: "text-muted-foreground mt-2",
              children: t("profile.subtitle"),
            }),
          ],
        }),
        a.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Profile.tsx:39:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Profile.tsx",
          "data-component-line": "39",
          "data-component-file": "Profile.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20lg%3Agrid-cols-3%20gap-8%22%7D",
          className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
          children: [
            a.jsx(s, {
              "data-lov-id": "src\\pages\\app\\Profile.tsx:41:10",
              "data-lov-name": "Card",
              "data-component-path": "src\\pages\\app\\Profile.tsx",
              "data-component-line": "41",
              "data-component-file": "Profile.tsx",
              "data-component-name": "Card",
              "data-component-content":
                "%7B%22className%22%3A%22lg%3Acol-span-1%20h-fit%22%7D",
              className: "lg:col-span-1 h-fit",
              children: a.jsxs(p, {
                "data-lov-id": "src\\pages\\app\\Profile.tsx:42:12",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\app\\Profile.tsx",
                "data-component-line": "42",
                "data-component-file": "Profile.tsx",
                "data-component-name": "CardContent",
                "data-component-content":
                  "%7B%22className%22%3A%22pt-8%20text-center%20space-y-4%22%7D",
                className: "pt-8 text-center space-y-4",
                children: [
                  a.jsxs(b, {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:43:14",
                    "data-lov-name": "Avatar",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "43",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "Avatar",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-32%20w-32%20mx-auto%20ring-4%20ring-primary%2F10%22%7D",
                    className: "h-32 w-32 mx-auto ring-4 ring-primary/10",
                    children: [
                      a.jsx(y, {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:44:16",
                        "data-lov-name": "AvatarImage",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "44",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "AvatarImage",
                        "data-component-content": "%7B%7D",
                        src:
                          (m = e == null ? void 0 : e.user_metadata) == null
                            ? void 0
                            : m.avatar_url,
                      }),
                      a.jsx(w, {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:45:16",
                        "data-lov-name": "AvatarFallback",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "45",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "AvatarFallback",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-3xl%20bg-primary%2F5%20text-primary%22%7D",
                        className: "text-3xl bg-primary/5 text-primary",
                        children:
                          (i = e == null ? void 0 : e.email) == null
                            ? void 0
                            : i.charAt(0).toUpperCase(),
                      }),
                    ],
                  }),
                  a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:49:14",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "49",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-1%22%7D",
                    className: "space-y-1",
                    children: [
                      a.jsx("h2", {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:50:16",
                        "data-lov-name": "h2",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "50",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "h2",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-xl%20font-bold%22%7D",
                        className: "text-xl font-bold",
                        children:
                          ((r = e == null ? void 0 : e.user_metadata) == null
                            ? void 0
                            : r.full_name) || "Usuário",
                      }),
                      a.jsx("p", {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:51:16",
                        "data-lov-name": "p",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "51",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                        className: "text-sm text-muted-foreground",
                        children: e == null ? void 0 : e.email,
                      }),
                    ],
                  }),
                  a.jsxs(l, {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:53:14",
                    "data-lov-name": "Button",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "53",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "Button",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-full%22%7D",
                    variant: "outline",
                    size: "sm",
                    className: "w-full",
                    children: [
                      a.jsx(_, {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:54:16",
                        "data-lov-name": "Camera",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "54",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "Camera",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-4%20w-4%20mr-2%22%7D",
                        className: "h-4 w-4 mr-2",
                      }),
                      t("settings.profile.change_photo"),
                    ],
                  }),
                ],
              }),
            }),
            a.jsxs(s, {
              "data-lov-id": "src\\pages\\app\\Profile.tsx:61:10",
              "data-lov-name": "Card",
              "data-component-path": "src\\pages\\app\\Profile.tsx",
              "data-component-line": "61",
              "data-component-file": "Profile.tsx",
              "data-component-name": "Card",
              "data-component-content":
                "%7B%22className%22%3A%22lg%3Acol-span-2%22%7D",
              className: "lg:col-span-2",
              children: [
                a.jsxs(j, {
                  "data-lov-id": "src\\pages\\app\\Profile.tsx:62:12",
                  "data-lov-name": "CardHeader",
                  "data-component-path": "src\\pages\\app\\Profile.tsx",
                  "data-component-line": "62",
                  "data-component-file": "Profile.tsx",
                  "data-component-name": "CardHeader",
                  "data-component-content": "%7B%7D",
                  children: [
                    a.jsx(D, {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:63:14",
                      "data-lov-name": "CardTitle",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "63",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "CardTitle",
                      "data-component-content": "%7B%7D",
                      children: t("settings.profile.title"),
                    }),
                    a.jsx(C, {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:64:14",
                      "data-lov-name": "CardDescription",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "64",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "CardDescription",
                      "data-component-content": "%7B%7D",
                      children: t("profile.subtitle"),
                    }),
                  ],
                }),
                a.jsxs(p, {
                  "data-lov-id": "src\\pages\\app\\Profile.tsx:66:12",
                  "data-lov-name": "CardContent",
                  "data-component-path": "src\\pages\\app\\Profile.tsx",
                  "data-component-line": "66",
                  "data-component-file": "Profile.tsx",
                  "data-component-name": "CardContent",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-6%22%7D",
                  className: "space-y-6",
                  children: [
                    a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:67:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "67",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20gap-4%22%7D",
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        a.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:68:16",
                          "data-lov-name": "div",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "68",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-2%22%7D",
                          className: "space-y-2",
                          children: [
                            a.jsxs(n, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:69:18",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "69",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                              htmlFor: "firstName",
                              className: "flex items-center gap-2",
                              children: [
                                a.jsx(I, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Profile.tsx:70:20",
                                  "data-lov-name": "User",
                                  "data-component-path":
                                    "src\\pages\\app\\Profile.tsx",
                                  "data-component-line": "70",
                                  "data-component-file": "Profile.tsx",
                                  "data-component-name": "User",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-4%20w-4%20text-muted-foreground%22%7D",
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                                t("settings.profile.first_name"),
                              ],
                            }),
                            a.jsx(o, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:73:18",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "73",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Input",
                              "data-component-content": "%7B%7D",
                              id: "firstName",
                              defaultValue:
                                ((x =
                                  (f = e == null ? void 0 : e.user_metadata) ==
                                  null
                                    ? void 0
                                    : f.full_name) == null
                                  ? void 0
                                  : x.split(" ")[0]) || "",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:75:16",
                          "data-lov-name": "div",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "75",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-2%22%7D",
                          className: "space-y-2",
                          children: [
                            a.jsx(n, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:76:18",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "76",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Label",
                              "data-component-content": "%7B%7D",
                              htmlFor: "lastName",
                              children: t("settings.profile.last_name"),
                            }),
                            a.jsx(o, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:77:18",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "77",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Input",
                              "data-component-content": "%7B%7D",
                              id: "lastName",
                              defaultValue:
                                ((v =
                                  (g = e == null ? void 0 : e.user_metadata) ==
                                  null
                                    ? void 0
                                    : g.full_name) == null
                                  ? void 0
                                  : v.split(" ").slice(1).join(" ")) || "",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:81:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "81",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-2%22%7D",
                      className: "space-y-2",
                      children: [
                        a.jsxs(n, {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:82:16",
                          "data-lov-name": "Label",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "82",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "Label",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                          htmlFor: "email",
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx(L, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:83:18",
                              "data-lov-name": "Mail",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "83",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Mail",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-4%20w-4%20text-muted-foreground%22%7D",
                              className: "h-4 w-4 text-muted-foreground",
                            }),
                            t("settings.profile.email"),
                          ],
                        }),
                        a.jsx(o, {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:86:16",
                          "data-lov-name": "Input",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "86",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "Input",
                          "data-component-content": "%7B%7D",
                          id: "email",
                          type: "email",
                          defaultValue: (e == null ? void 0 : e.email) || "",
                          disabled: !0,
                        }),
                        a.jsx("p", {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:87:16",
                          "data-lov-name": "p",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "87",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20italic%22%7D",
                          className: "text-xs text-muted-foreground italic",
                          children: t("profile.fields.email_hint"),
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:90:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "90",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20gap-4%22%7D",
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        a.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:91:16",
                          "data-lov-name": "div",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "91",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-2%22%7D",
                          className: "space-y-2",
                          children: [
                            a.jsxs(n, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:92:18",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "92",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                              htmlFor: "company",
                              className: "flex items-center gap-2",
                              children: [
                                a.jsx(F, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Profile.tsx:93:20",
                                  "data-lov-name": "Building",
                                  "data-component-path":
                                    "src\\pages\\app\\Profile.tsx",
                                  "data-component-line": "93",
                                  "data-component-file": "Profile.tsx",
                                  "data-component-name": "Building",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-4%20w-4%20text-muted-foreground%22%7D",
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                                t("settings.profile.company"),
                              ],
                            }),
                            a.jsx(o, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:96:18",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "96",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Input",
                              "data-component-content":
                                "%7B%22placeholder%22%3A%22Nome%20da%20empresa%22%7D",
                              id: "company",
                              placeholder: "Nome da empresa",
                            }),
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:98:16",
                          "data-lov-name": "div",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "98",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22space-y-2%22%7D",
                          className: "space-y-2",
                          children: [
                            a.jsxs(n, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:99:18",
                              "data-lov-name": "Label",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "99",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Label",
                              "data-component-content":
                                "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                              htmlFor: "role",
                              className: "flex items-center gap-2",
                              children: [
                                a.jsx(S, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Profile.tsx:100:20",
                                  "data-lov-name": "Briefcase",
                                  "data-component-path":
                                    "src\\pages\\app\\Profile.tsx",
                                  "data-component-line": "100",
                                  "data-component-file": "Profile.tsx",
                                  "data-component-name": "Briefcase",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22h-4%20w-4%20text-muted-foreground%22%7D",
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                                t("settings.profile.role"),
                              ],
                            }),
                            a.jsx(o, {
                              "data-lov-id":
                                "src\\pages\\app\\Profile.tsx:103:18",
                              "data-lov-name": "Input",
                              "data-component-path":
                                "src\\pages\\app\\Profile.tsx",
                              "data-component-line": "103",
                              "data-component-file": "Profile.tsx",
                              "data-component-name": "Input",
                              "data-component-content":
                                "%7B%22placeholder%22%3A%22Seu%20cargo%22%7D",
                              id: "role",
                              placeholder: "Seu cargo",
                            }),
                          ],
                        }),
                      ],
                    }),
                    a.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:107:14",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "107",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22pt-4%20flex%20flex-col%20sm%3Aflex-row%20gap-3%22%7D",
                      className: "pt-4 flex flex-col sm:flex-row gap-3",
                      children: [
                        a.jsx(l, {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:108:16",
                          "data-lov-name": "Button",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "108",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex-1%22%7D",
                          className: "flex-1",
                          onClick: h,
                          disabled: c,
                          children: t(c ? "common.processing" : "common.save"),
                        }),
                        a.jsx(l, {
                          "data-lov-id": "src\\pages\\app\\Profile.tsx:111:16",
                          "data-lov-name": "Button",
                          "data-component-path": "src\\pages\\app\\Profile.tsx",
                          "data-component-line": "111",
                          "data-component-file": "Profile.tsx",
                          "data-component-name": "Button",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex-1%22%7D",
                          variant: "outline",
                          className: "flex-1",
                          children: t("profile.actions.revert_changes"),
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
          "data-lov-id": "src\\pages\\app\\Profile.tsx:120:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Profile.tsx",
          "data-component-line": "120",
          "data-component-file": "Profile.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20gap-6%22%7D",
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            a.jsx(s, {
              "data-lov-id": "src\\pages\\app\\Profile.tsx:121:11",
              "data-lov-name": "Card",
              "data-component-path": "src\\pages\\app\\Profile.tsx",
              "data-component-line": "121",
              "data-component-file": "Profile.tsx",
              "data-component-name": "Card",
              "data-component-content":
                "%7B%22className%22%3A%22hover-scale%20cursor-pointer%20bg-muted%2F30%22%7D",
              className: "hover-scale cursor-pointer bg-muted/30",
              children: a.jsxs(p, {
                "data-lov-id": "src\\pages\\app\\Profile.tsx:122:13",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\app\\Profile.tsx",
                "data-component-line": "122",
                "data-component-file": "Profile.tsx",
                "data-component-name": "CardContent",
                "data-component-content":
                  "%7B%22className%22%3A%22p-6%20flex%20items-center%20gap-4%22%7D",
                className: "p-6 flex items-center gap-4",
                children: [
                  a.jsx("div", {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:123:15",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "123",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-10%20w-10%20rounded-full%20bg-blue-100%20flex%20items-center%20justify-center%22%7D",
                    className:
                      "h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center",
                    children: a.jsx(T, {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:124:17",
                      "data-lov-name": "Shield",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "124",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "Shield",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-blue-600%22%7D",
                      className: "h-5 w-5 text-blue-600",
                    }),
                  }),
                  a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:126:15",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "126",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx("h4", {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:127:17",
                        "data-lov-name": "h4",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "127",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "h4",
                        "data-component-content":
                          "%7B%22text%22%3A%22Seguran%C3%A7a%20da%20Conta%22%2C%22className%22%3A%22font-medium%22%7D",
                        className: "font-medium",
                        children: "Segurança da Conta",
                      }),
                      a.jsx("p", {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:128:17",
                        "data-lov-name": "p",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "128",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22text%22%3A%22Prote%C3%A7%C3%A3o%20em%20duas%20etapas%20est%C3%A1%20desativada.%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%20text-xs%22%7D",
                        className: "text-xs text-muted-foreground text-xs",
                        children: "Proteção em duas etapas está desativada.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            a.jsx(s, {
              "data-lov-id": "src\\pages\\app\\Profile.tsx:132:11",
              "data-lov-name": "Card",
              "data-component-path": "src\\pages\\app\\Profile.tsx",
              "data-component-line": "132",
              "data-component-file": "Profile.tsx",
              "data-component-name": "Card",
              "data-component-content":
                "%7B%22className%22%3A%22hover-scale%20cursor-pointer%20bg-muted%2F30%22%7D",
              className: "hover-scale cursor-pointer bg-muted/30",
              children: a.jsxs(p, {
                "data-lov-id": "src\\pages\\app\\Profile.tsx:133:13",
                "data-lov-name": "CardContent",
                "data-component-path": "src\\pages\\app\\Profile.tsx",
                "data-component-line": "133",
                "data-component-file": "Profile.tsx",
                "data-component-name": "CardContent",
                "data-component-content":
                  "%7B%22className%22%3A%22p-6%20flex%20items-center%20gap-4%22%7D",
                className: "p-6 flex items-center gap-4",
                children: [
                  a.jsx("div", {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:134:15",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "134",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22h-10%20w-10%20rounded-full%20bg-amber-100%20flex%20items-center%20justify-center%22%7D",
                    className:
                      "h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center",
                    children: a.jsx(U, {
                      "data-lov-id": "src\\pages\\app\\Profile.tsx:135:17",
                      "data-lov-name": "Bell",
                      "data-component-path": "src\\pages\\app\\Profile.tsx",
                      "data-component-line": "135",
                      "data-component-file": "Profile.tsx",
                      "data-component-name": "Bell",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-amber-600%22%7D",
                      className: "h-5 w-5 text-amber-600",
                    }),
                  }),
                  a.jsxs("div", {
                    "data-lov-id": "src\\pages\\app\\Profile.tsx:137:15",
                    "data-lov-name": "div",
                    "data-component-path": "src\\pages\\app\\Profile.tsx",
                    "data-component-line": "137",
                    "data-component-file": "Profile.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx("h4", {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:138:17",
                        "data-lov-name": "h4",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "138",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "h4",
                        "data-component-content":
                          "%7B%22text%22%3A%22Notifica%C3%A7%C3%B5es%22%2C%22className%22%3A%22font-medium%22%7D",
                        className: "font-medium",
                        children: "Notificações",
                      }),
                      a.jsx("p", {
                        "data-lov-id": "src\\pages\\app\\Profile.tsx:139:17",
                        "data-lov-name": "p",
                        "data-component-path": "src\\pages\\app\\Profile.tsx",
                        "data-component-line": "139",
                        "data-component-file": "Profile.tsx",
                        "data-component-name": "p",
                        "data-component-content":
                          "%7B%22text%22%3A%22Voc%C3%AA%20tem%204%20avisos%20recentes%20n%C3%A3o%20lidos.%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%22%7D",
                        className: "text-xs text-muted-foreground",
                        children: "Você tem 4 avisos recentes não lidos.",
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
  });
};
export { G as default };
