import { c as Z, u as E, j as t, B as o } from "./index-BZzvAVnT.js";
import { r as w } from "./vendor-BgR6OOld.js";
import { C as d, b as i, c as m, d as l, a as g } from "./card-DCmFy9yX.js";
import { I as r } from "./input-BnDZujQi.js";
import { L as n } from "./label-DNWlrZfM.js";
import { S as _ } from "./switch-Dz0YrQNx.js";
import { S as f, a as u, b as B, c as j, d as p } from "./select-BPvc3et1.js";
import { A as $, a as J, b as O } from "./avatar-BJFpRB7u.js";
import { B as k } from "./badge-DMGJasfj.js";
import { S } from "./separator-qS5yNAIC.js";
import {
  a9 as I,
  ad as L,
  ae as T,
  S as F,
  Z as V,
  c as q,
} from "./utils-C25gojUd.js";
import "./router-D2JcpG7e.js";
import "./index-Cda9Zv0V.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
const it = () => {
  const { toast: D } = Z(),
    { t: a, i18n: N } = E(),
    [c, x] = w.useState({
      notifications: { email: !0, push: !1, reports: !0, marketing: !1 },
      appearance: { theme: "light", language: N.language || "pt-BR" },
      privacy: { twoFactor: !1, analytics: !0 },
    }),
    v = (e) => {
      D({
        title: "Configurações salvas",
        description: `As configurações de ${e} foram atualizadas com sucesso.`,
      });
    },
    y = [
      {
        id: "profile",
        title: a("settings.sections.profile"),
        icon: I,
        description: a("settings.profile.desc"),
      },
      {
        id: "notifications",
        title: a("settings.sections.notifications"),
        icon: L,
        description: a("settings.notifications.desc"),
      },
      {
        id: "appearance",
        title: a("settings.sections.appearance"),
        icon: T,
        description: a("settings.appearance.description"),
      },
      {
        id: "security",
        title: a("settings.sections.security"),
        icon: F,
        description: a("settings.security.desc"),
      },
      {
        id: "plan",
        title: a("settings.sections.plan"),
        icon: V,
        description: a("settings.plan.desc"),
      },
    ],
    [h, A] = w.useState("profile"),
    C = () =>
      t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\Settings.tsx:44:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\Settings.tsx",
        "data-component-line": "44",
        "data-component-file": "Settings.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: t.jsxs(d, {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:45:6",
          "data-lov-name": "Card",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "45",
          "data-component-file": "Settings.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: [
            t.jsxs(i, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:46:8",
              "data-lov-name": "CardHeader",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "46",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%7D",
              children: [
                t.jsxs(m, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:47:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "47",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  className: "flex items-center gap-2",
                  children: [
                    t.jsx(I, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:48:12",
                      "data-lov-name": "User",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "48",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "User",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                      className: "h-5 w-5 text-primary",
                    }),
                    a("settings.profile.title"),
                  ],
                }),
                t.jsx(l, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:51:10",
                  "data-lov-name": "CardDescription",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "51",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardDescription",
                  "data-component-content": "%7B%7D",
                  children: a("settings.profile.desc"),
                }),
              ],
            }),
            t.jsxs(g, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:53:8",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "53",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:55:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "55",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20items-start%20sm%3Aitems-center%20gap-4%20sm%3Agap-6%22%7D",
                  className:
                    "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
                  children: [
                    t.jsxs($, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:56:12",
                      "data-lov-name": "Avatar",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "56",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Avatar",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-16%20w-16%20sm%3Ah-20%20sm%3Aw-20%22%7D",
                      className: "h-16 w-16 sm:h-20 sm:w-20",
                      children: [
                        t.jsx(J, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:57:14",
                          "data-lov-name": "AvatarImage",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "57",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "AvatarImage",
                          "data-component-content": "%7B%7D",
                          src: "/placeholder-avatar.jpg",
                        }),
                        t.jsx(O, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:58:14",
                          "data-lov-name": "AvatarFallback",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "58",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "AvatarFallback",
                          "data-component-content":
                            "%7B%22text%22%3A%22UD%22%2C%22className%22%3A%22text-lg%22%7D",
                          className: "text-lg",
                          children: "UD",
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:60:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "60",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-2%22%7D",
                      className: "space-y-2",
                      children: [
                        t.jsx("h3", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:61:14",
                          "data-lov-name": "h3",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "61",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "h3",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-medium%20text-foreground%22%7D",
                          className: "font-medium text-foreground",
                          children: a("settings.profile.photo"),
                        }),
                        t.jsx("p", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:62:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "62",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                          className: "text-sm text-muted-foreground",
                          children: a("settings.profile.photo_desc"),
                        }),
                        t.jsx(o, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:63:14",
                          "data-lov-name": "Button",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "63",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Button",
                          "data-component-content": "%7B%7D",
                          variant: "outline",
                          size: "sm",
                          children: a("settings.profile.change_photo"),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:68:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "68",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20sm%3Agrid-cols-2%20gap-4%22%7D",
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:69:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "69",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-2%22%7D",
                      className: "space-y-2",
                      children: [
                        t.jsx(n, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:70:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "70",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Label",
                          "data-component-content": "%7B%7D",
                          htmlFor: "firstName",
                          children: a("settings.profile.first_name"),
                        }),
                        t.jsx(r, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:71:14",
                          "data-lov-name": "Input",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "71",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Input",
                          "data-component-content": "%7B%7D",
                          id: "firstName",
                          defaultValue: "Usuário",
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:73:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "73",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-2%22%7D",
                      className: "space-y-2",
                      children: [
                        t.jsx(n, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:74:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "74",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Label",
                          "data-component-content": "%7B%7D",
                          htmlFor: "lastName",
                          children: a("settings.profile.last_name"),
                        }),
                        t.jsx(r, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:75:14",
                          "data-lov-name": "Input",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "75",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Input",
                          "data-component-content": "%7B%7D",
                          id: "lastName",
                          defaultValue: "Demo",
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:79:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "79",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:80:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "80",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      htmlFor: "email",
                      children: a("settings.profile.email"),
                    }),
                    t.jsx(r, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:81:12",
                      "data-lov-name": "Input",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "81",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Input",
                      "data-component-content": "%7B%7D",
                      id: "email",
                      type: "email",
                      defaultValue: "usuario@exemplo.com",
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:84:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "84",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:85:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "85",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      htmlFor: "company",
                      children: a("settings.profile.company"),
                    }),
                    t.jsx(r, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:86:12",
                      "data-lov-name": "Input",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "86",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Input",
                      "data-component-content": "%7B%7D",
                      id: "company",
                      defaultValue: "SuperRelatórios Inc.",
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:89:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "89",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:90:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "90",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      htmlFor: "role",
                      children: a("settings.profile.role"),
                    }),
                    t.jsx(r, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:91:12",
                      "data-lov-name": "Input",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "91",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Input",
                      "data-component-content": "%7B%7D",
                      id: "role",
                      defaultValue: "Gerente de Operações",
                    }),
                  ],
                }),
                t.jsx(o, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:94:10",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "94",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Button",
                  "data-component-content": "%7B%7D",
                  onClick: () => v(a("settings.sections.profile")),
                  children: a("settings.profile.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    H = () =>
      t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\Settings.tsx:101:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\Settings.tsx",
        "data-component-line": "101",
        "data-component-file": "Settings.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: t.jsxs(d, {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:102:6",
          "data-lov-name": "Card",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "102",
          "data-component-file": "Settings.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: [
            t.jsxs(i, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:103:8",
              "data-lov-name": "CardHeader",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "103",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%7D",
              children: [
                t.jsxs(m, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:104:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "104",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  className: "flex items-center gap-2",
                  children: [
                    t.jsx(L, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:105:12",
                      "data-lov-name": "Bell",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "105",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Bell",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                      className: "h-5 w-5 text-primary",
                    }),
                    a("settings.notifications.title"),
                  ],
                }),
                t.jsx(l, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:108:10",
                  "data-lov-name": "CardDescription",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "108",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardDescription",
                  "data-component-content": "%7B%7D",
                  children: a("settings.notifications.desc"),
                }),
              ],
            }),
            t.jsxs(g, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:110:8",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "110",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                [
                  {
                    key: "email",
                    label: a("settings.notifications.email"),
                    desc: a("settings.notifications.email_desc"),
                  },
                  {
                    key: "push",
                    label: a("settings.notifications.push"),
                    desc: a("settings.notifications.push_desc"),
                  },
                  {
                    key: "reports",
                    label: a("settings.notifications.reports"),
                    desc: a("settings.notifications.reports_desc"),
                  },
                  {
                    key: "marketing",
                    label: a("settings.notifications.marketing"),
                    desc: a("settings.notifications.marketing_desc"),
                  },
                ].map((e, s) =>
                  t.jsxs(
                    "div",
                    {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:118:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "118",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        s > 0 &&
                          t.jsx(S, {
                            "data-lov-id":
                              "src\\pages\\app\\Settings.tsx:119:24",
                            "data-lov-name": "Separator",
                            "data-component-path":
                              "src\\pages\\app\\Settings.tsx",
                            "data-component-line": "119",
                            "data-component-file": "Settings.tsx",
                            "data-component-name": "Separator",
                            "data-component-content":
                              "%7B%22className%22%3A%22mb-4%22%7D",
                            className: "mb-4",
                          }),
                        t.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:120:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "120",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                          className: "flex items-center justify-between",
                          children: [
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:121:16",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "121",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22space-y-0.5%20flex-1%20mr-4%22%7D",
                              className: "space-y-0.5 flex-1 mr-4",
                              children: [
                                t.jsx(n, {
                                  "data-lov-id":
                                    "src\\pages\\app\\Settings.tsx:122:18",
                                  "data-lov-name": "Label",
                                  "data-component-path":
                                    "src\\pages\\app\\Settings.tsx",
                                  "data-component-line": "122",
                                  "data-component-file": "Settings.tsx",
                                  "data-component-name": "Label",
                                  "data-component-content": "%7B%7D",
                                  children: e.label,
                                }),
                                t.jsx("p", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Settings.tsx:123:18",
                                  "data-lov-name": "p",
                                  "data-component-path":
                                    "src\\pages\\app\\Settings.tsx",
                                  "data-component-line": "123",
                                  "data-component-file": "Settings.tsx",
                                  "data-component-name": "p",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                  className: "text-sm text-muted-foreground",
                                  children: e.desc,
                                }),
                              ],
                            }),
                            t.jsx(_, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:125:16",
                              "data-lov-name": "Switch",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "125",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "Switch",
                              "data-component-content": "%7B%7D",
                              checked: c.notifications[e.key],
                              onCheckedChange: (R) =>
                                x((b) => ({
                                  ...b,
                                  notifications: {
                                    ...b.notifications,
                                    [e.key]: R,
                                  },
                                })),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.key,
                  ),
                ),
                t.jsx(o, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:137:10",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "137",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Button",
                  "data-component-content": "%7B%7D",
                  onClick: () => v(a("settings.sections.notifications")),
                  children: a("settings.notifications.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    U = () =>
      t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\Settings.tsx:145:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\Settings.tsx",
        "data-component-line": "145",
        "data-component-file": "Settings.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: t.jsxs(d, {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:146:6",
          "data-lov-name": "Card",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "146",
          "data-component-file": "Settings.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: [
            t.jsxs(i, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:147:8",
              "data-lov-name": "CardHeader",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "147",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%7D",
              children: [
                t.jsxs(m, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:148:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "148",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  className: "flex items-center gap-2",
                  children: [
                    t.jsx(T, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:149:12",
                      "data-lov-name": "Palette",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "149",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Palette",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                      className: "h-5 w-5 text-primary",
                    }),
                    a("settings.appearance.title"),
                  ],
                }),
                t.jsx(l, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:152:10",
                  "data-lov-name": "CardDescription",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "152",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardDescription",
                  "data-component-content": "%7B%7D",
                  children: a("settings.appearance.description"),
                }),
              ],
            }),
            t.jsxs(g, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:154:8",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "154",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:155:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "155",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:156:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "156",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      children: a("settings.appearance.theme"),
                    }),
                    t.jsxs(f, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:157:12",
                      "data-lov-name": "Select",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "157",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Select",
                      "data-component-content": "%7B%7D",
                      value: c.appearance.theme,
                      onValueChange: (e) =>
                        x((s) => ({
                          ...s,
                          appearance: { ...s.appearance, theme: e },
                        })),
                      children: [
                        t.jsx(u, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:160:14",
                          "data-lov-name": "SelectTrigger",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "160",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "SelectTrigger",
                          "data-component-content": "%7B%7D",
                          children: t.jsx(B, {
                            "data-lov-id":
                              "src\\pages\\app\\Settings.tsx:160:29",
                            "data-lov-name": "SelectValue",
                            "data-component-path":
                              "src\\pages\\app\\Settings.tsx",
                            "data-component-line": "160",
                            "data-component-file": "Settings.tsx",
                            "data-component-name": "SelectValue",
                            "data-component-content": "%7B%7D",
                          }),
                        }),
                        t.jsxs(j, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:161:14",
                          "data-lov-name": "SelectContent",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "161",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "SelectContent",
                          "data-component-content": "%7B%7D",
                          children: [
                            t.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:162:16",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "162",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content": "%7B%7D",
                              value: "light",
                              children: a("settings.appearance.theme_light"),
                            }),
                            t.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:163:16",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "163",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content": "%7B%7D",
                              value: "dark",
                              children: a("settings.appearance.theme_dark"),
                            }),
                            t.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:164:16",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "164",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content": "%7B%7D",
                              value: "system",
                              children: a("settings.appearance.theme_system"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:168:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "168",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:169:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "169",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      children: a("settings.appearance.language"),
                    }),
                    t.jsxs(f, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:170:12",
                      "data-lov-name": "Select",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "170",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Select",
                      "data-component-content": "%7B%7D",
                      value: c.appearance.language,
                      onValueChange: (e) => {
                        (x((s) => ({
                          ...s,
                          appearance: { ...s.appearance, language: e },
                        })),
                          N.changeLanguage(e));
                      },
                      children: [
                        t.jsx(u, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:174:14",
                          "data-lov-name": "SelectTrigger",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "174",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "SelectTrigger",
                          "data-component-content": "%7B%7D",
                          children: t.jsx(B, {
                            "data-lov-id":
                              "src\\pages\\app\\Settings.tsx:174:29",
                            "data-lov-name": "SelectValue",
                            "data-component-path":
                              "src\\pages\\app\\Settings.tsx",
                            "data-component-line": "174",
                            "data-component-file": "Settings.tsx",
                            "data-component-name": "SelectValue",
                            "data-component-content": "%7B%7D",
                          }),
                        }),
                        t.jsxs(j, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:175:14",
                          "data-lov-name": "SelectContent",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "175",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "SelectContent",
                          "data-component-content": "%7B%7D",
                          children: [
                            t.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:176:16",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "176",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content": "%7B%7D",
                              value: "pt-BR",
                              children: a("settings.language.pt"),
                            }),
                            t.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:177:16",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "177",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content": "%7B%7D",
                              value: "en-US",
                              children: a("settings.language.en"),
                            }),
                            t.jsx(p, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:178:16",
                              "data-lov-name": "SelectItem",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "178",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "SelectItem",
                              "data-component-content": "%7B%7D",
                              value: "es-ES",
                              children: a("settings.language.es"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx(o, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:182:10",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "182",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Button",
                  "data-component-content": "%7B%7D",
                  onClick: () => {
                    D({
                      title: a("settings.appearance.save_success_title"),
                      description: a("settings.appearance.save_success_desc"),
                    });
                  },
                  children: a("settings.appearance.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    z = () =>
      t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\Settings.tsx:194:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\Settings.tsx",
        "data-component-line": "194",
        "data-component-file": "Settings.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: t.jsxs(d, {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:195:6",
          "data-lov-name": "Card",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "195",
          "data-component-file": "Settings.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: [
            t.jsxs(i, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:196:8",
              "data-lov-name": "CardHeader",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "196",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%7D",
              children: [
                t.jsxs(m, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:197:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "197",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  className: "flex items-center gap-2",
                  children: [
                    t.jsx(F, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:198:12",
                      "data-lov-name": "Shield",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "198",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Shield",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                      className: "h-5 w-5 text-primary",
                    }),
                    a("settings.security.title"),
                  ],
                }),
                t.jsx(l, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:201:10",
                  "data-lov-name": "CardDescription",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "201",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardDescription",
                  "data-component-content": "%7B%7D",
                  children: a("settings.security.desc"),
                }),
              ],
            }),
            t.jsxs(g, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:203:8",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "203",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:205:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "205",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:206:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "206",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      children: a("settings.security.change_password"),
                    }),
                    t.jsx("p", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:207:12",
                      "data-lov-name": "p",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "207",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                      className: "text-sm text-muted-foreground",
                      children: a("settings.security.last_changeCode", {
                        date: "há 3 meses",
                      }),
                    }),
                    t.jsx(o, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:208:12",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "208",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "outline",
                      size: "sm",
                      children: a("settings.security.change_password"),
                    }),
                  ],
                }),
                t.jsx(S, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:210:10",
                  "data-lov-name": "Separator",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "210",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Separator",
                  "data-component-content": "%7B%7D",
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:211:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "211",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
                  className: "flex items-center justify-between",
                  children: [
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:212:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "212",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-0.5%20flex-1%20mr-4%22%7D",
                      className: "space-y-0.5 flex-1 mr-4",
                      children: [
                        t.jsx(n, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:213:14",
                          "data-lov-name": "Label",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "213",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Label",
                          "data-component-content": "%7B%7D",
                          children: a("settings.security.two_factor"),
                        }),
                        t.jsx("p", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:214:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "214",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                          className: "text-sm text-muted-foreground",
                          children: a("settings.security.two_factor_desc"),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:216:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "216",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                      className: "flex items-center gap-2",
                      children: [
                        t.jsx(k, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:217:14",
                          "data-lov-name": "Badge",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "217",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Badge",
                          "data-component-content": "%7B%7D",
                          variant: c.privacy.twoFactor
                            ? "default"
                            : "secondary",
                          children: c.privacy.twoFactor
                            ? a("common.active")
                            : a("common.inactive"),
                        }),
                        t.jsx(_, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:220:14",
                          "data-lov-name": "Switch",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "220",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Switch",
                          "data-component-content": "%7B%7D",
                          checked: c.privacy.twoFactor,
                          onCheckedChange: (e) =>
                            x((s) => ({
                              ...s,
                              privacy: { ...s.privacy, twoFactor: e },
                            })),
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsx(S, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:228:10",
                  "data-lov-name": "Separator",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "228",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Separator",
                  "data-component-content": "%7B%7D",
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:229:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "229",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:230:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "230",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content": "%7B%7D",
                      children: a("settings.security.active_sessions"),
                    }),
                    t.jsx("p", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:231:12",
                      "data-lov-name": "p",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "231",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                      className: "text-sm text-muted-foreground",
                      children: a("settings.security.active_sessions_desc"),
                    }),
                    t.jsx(o, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:232:12",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "232",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "outline",
                      size: "sm",
                      children: a("settings.security.view_sessions"),
                    }),
                  ],
                }),
                t.jsx(o, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:234:10",
                  "data-lov-name": "Button",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "234",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Button",
                  "data-component-content": "%7B%7D",
                  onClick: () => v(a("settings.sections.security")),
                  children: a("settings.security.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    G = () =>
      t.jsx("div", {
        "data-lov-id": "src\\pages\\app\\Settings.tsx:241:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\Settings.tsx",
        "data-component-line": "241",
        "data-component-file": "Settings.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
        className: "space-y-6",
        children: t.jsxs(d, {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:242:6",
          "data-lov-name": "Card",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "242",
          "data-component-file": "Settings.tsx",
          "data-component-name": "Card",
          "data-component-content": "%7B%7D",
          children: [
            t.jsxs(i, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:243:8",
              "data-lov-name": "CardHeader",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "243",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardHeader",
              "data-component-content": "%7B%7D",
              children: [
                t.jsxs(m, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:244:10",
                  "data-lov-name": "CardTitle",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "244",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardTitle",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                  className: "flex items-center gap-2",
                  children: [
                    t.jsx(V, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:245:12",
                      "data-lov-name": "Zap",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "245",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Zap",
                      "data-component-content":
                        "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                      className: "h-5 w-5 text-primary",
                    }),
                    a("settings.plan.title"),
                  ],
                }),
                t.jsx(l, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:248:10",
                  "data-lov-name": "CardDescription",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "248",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "CardDescription",
                  "data-component-content": "%7B%7D",
                  children: a("settings.plan.desc"),
                }),
              ],
            }),
            t.jsxs(g, {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:250:8",
              "data-lov-name": "CardContent",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "250",
              "data-component-file": "Settings.tsx",
              "data-component-name": "CardContent",
              "data-component-content":
                "%7B%22className%22%3A%22space-y-6%22%7D",
              className: "space-y-6",
              children: [
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:252:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "252",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22p-4%20bg-primary%2F5%20rounded-lg%20border%20border-primary%2F20%22%7D",
                  className:
                    "p-4 bg-primary/5 rounded-lg border border-primary/20",
                  children: [
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:253:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "253",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20justify-between%20gap-3%20mb-4%22%7D",
                      className:
                        "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",
                      children: [
                        t.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:254:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "254",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "div",
                          "data-component-content": "%7B%7D",
                          children: [
                            t.jsx("h3", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:255:16",
                              "data-lov-name": "h3",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "255",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "h3",
                              "data-component-content":
                                "%7B%22className%22%3A%22font-semibold%20text-foreground%22%7D",
                              className: "font-semibold text-foreground",
                              children: a("settings.plan.professional"),
                            }),
                            t.jsx("p", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:256:16",
                              "data-lov-name": "p",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "256",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "p",
                              "data-component-content":
                                "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                              className: "text-sm text-muted-foreground",
                              children: a("settings.plan.active_since", {
                                date: "Janeiro 2024",
                              }),
                            }),
                          ],
                        }),
                        t.jsx(k, {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:258:14",
                          "data-lov-name": "Badge",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "258",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "Badge",
                          "data-component-content":
                            "%7B%22className%22%3A%22bg-primary%20text-primary-foreground%20self-start%22%7D",
                          className:
                            "bg-primary text-primary-foreground self-start",
                          children: a("common.active"),
                        }),
                      ],
                    }),
                    t.jsxs("div", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:261:12",
                      "data-lov-name": "div",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "261",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22space-y-2%20text-sm%22%7D",
                      className: "space-y-2 text-sm",
                      children: [
                        t.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:262:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "262",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                          className: "flex justify-between",
                          children: [
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:262:52",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "262",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "span",
                              "data-component-content": "%7B%7D",
                              children: a("settings.plan.usage.reports"),
                            }),
                            t.jsxs("span", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:262:99",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "262",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "span",
                              "data-component-content":
                                "%7B%22text%22%3A%2223%20%2F%22%2C%22className%22%3A%22font-medium%22%7D",
                              className: "font-medium",
                              children: ["23 / ", a("common.unlimited")],
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:263:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "263",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                          className: "flex justify-between",
                          children: [
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:263:52",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "263",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "span",
                              "data-component-content": "%7B%7D",
                              children: a("settings.plan.usage.storage"),
                            }),
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:263:99",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "263",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "span",
                              "data-component-content":
                                "%7B%22text%22%3A%222.3%20GB%20%2F%20100%20GB%22%2C%22className%22%3A%22font-medium%22%7D",
                              className: "font-medium",
                              children: "2.3 GB / 100 GB",
                            }),
                          ],
                        }),
                        t.jsxs("div", {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:264:14",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "264",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20justify-between%22%7D",
                          className: "flex justify-between",
                          children: [
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:264:52",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "264",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "span",
                              "data-component-content": "%7B%7D",
                              children: a("settings.plan.usage.next_billing"),
                            }),
                            t.jsx("span", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:264:104",
                              "data-lov-name": "span",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "264",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "span",
                              "data-component-content":
                                "%7B%22text%22%3A%2215%20de%20Fevereiro%22%2C%22className%22%3A%22font-medium%22%7D",
                              className: "font-medium",
                              children: "15 de Fevereiro",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:268:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "268",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-2%22%7D",
                  className: "flex flex-col sm:flex-row gap-2",
                  children: [
                    t.jsx(o, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:269:12",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "269",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex-1%22%7D",
                      variant: "outline",
                      className: "flex-1",
                      children: a("settings.plan.change_plan"),
                    }),
                    t.jsx(o, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:270:12",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "270",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Button",
                      "data-component-content":
                        "%7B%22className%22%3A%22flex-1%22%7D",
                      variant: "outline",
                      className: "flex-1",
                      children: a("settings.plan.view_invoices"),
                    }),
                  ],
                }),
                t.jsx(S, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:273:10",
                  "data-lov-name": "Separator",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "273",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "Separator",
                  "data-component-content": "%7B%7D",
                }),
                t.jsxs("div", {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:274:10",
                  "data-lov-name": "div",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "274",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22space-y-2%22%7D",
                  className: "space-y-2",
                  children: [
                    t.jsx(n, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:275:12",
                      "data-lov-name": "Label",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "275",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Label",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-destructive%22%7D",
                      className: "text-destructive",
                      children: a("settings.plan.danger_zone"),
                    }),
                    t.jsx("p", {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:276:12",
                      "data-lov-name": "p",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "276",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                      className: "text-sm text-muted-foreground",
                      children: a("settings.plan.danger_desc"),
                    }),
                    t.jsx(o, {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:277:12",
                      "data-lov-name": "Button",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "277",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "destructive",
                      size: "sm",
                      children: a("settings.plan.cancel_button"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    P = () => {
      switch (h) {
        case "profile":
          return C();
        case "notifications":
          return H();
        case "appearance":
          return U();
        case "security":
          return z();
        case "plan":
          return G();
        default:
          return C();
      }
    };
  return t.jsx("div", {
    "data-lov-id": "src\\pages\\app\\Settings.tsx:297:4",
    "data-lov-name": "div",
    "data-component-path": "src\\pages\\app\\Settings.tsx",
    "data-component-line": "297",
    "data-component-file": "Settings.tsx",
    "data-component-name": "div",
    "data-component-content":
      "%7B%22className%22%3A%22bg-gradient-subtle%20min-h-full%22%7D",
    className: "bg-gradient-subtle min-h-full",
    children: t.jsxs("div", {
      "data-lov-id": "src\\pages\\app\\Settings.tsx:298:6",
      "data-lov-name": "div",
      "data-component-path": "src\\pages\\app\\Settings.tsx",
      "data-component-line": "298",
      "data-component-file": "Settings.tsx",
      "data-component-name": "div",
      "data-component-content":
        "%7B%22className%22%3A%22max-w-5xl%20mx-auto%20p-4%20sm%3Ap-6%22%7D",
      className: "max-w-5xl mx-auto p-4 sm:p-6",
      children: [
        t.jsx("div", {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:300:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "300",
          "data-component-file": "Settings.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22lg%3Ahidden%20mb-6%22%7D",
          className: "lg:hidden mb-6",
          children: t.jsxs(f, {
            "data-lov-id": "src\\pages\\app\\Settings.tsx:301:10",
            "data-lov-name": "Select",
            "data-component-path": "src\\pages\\app\\Settings.tsx",
            "data-component-line": "301",
            "data-component-file": "Settings.tsx",
            "data-component-name": "Select",
            "data-component-content": "%7B%7D",
            value: h,
            onValueChange: A,
            children: [
              t.jsx(u, {
                "data-lov-id": "src\\pages\\app\\Settings.tsx:302:12",
                "data-lov-name": "SelectTrigger",
                "data-component-path": "src\\pages\\app\\Settings.tsx",
                "data-component-line": "302",
                "data-component-file": "Settings.tsx",
                "data-component-name": "SelectTrigger",
                "data-component-content": "%7B%7D",
                children: t.jsx(B, {
                  "data-lov-id": "src\\pages\\app\\Settings.tsx:303:14",
                  "data-lov-name": "SelectValue",
                  "data-component-path": "src\\pages\\app\\Settings.tsx",
                  "data-component-line": "303",
                  "data-component-file": "Settings.tsx",
                  "data-component-name": "SelectValue",
                  "data-component-content": "%7B%7D",
                }),
              }),
              t.jsx(j, {
                "data-lov-id": "src\\pages\\app\\Settings.tsx:305:12",
                "data-lov-name": "SelectContent",
                "data-component-path": "src\\pages\\app\\Settings.tsx",
                "data-component-line": "305",
                "data-component-file": "Settings.tsx",
                "data-component-name": "SelectContent",
                "data-component-content": "%7B%7D",
                children: y.map((e) =>
                  t.jsx(
                    p,
                    {
                      "data-lov-id": "src\\pages\\app\\Settings.tsx:307:16",
                      "data-lov-name": "SelectItem",
                      "data-component-path": "src\\pages\\app\\Settings.tsx",
                      "data-component-line": "307",
                      "data-component-file": "Settings.tsx",
                      "data-component-name": "SelectItem",
                      "data-component-content": "%7B%7D",
                      value: e.id,
                      children: e.title,
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        t.jsxs("div", {
          "data-lov-id": "src\\pages\\app\\Settings.tsx:315:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\Settings.tsx",
          "data-component-line": "315",
          "data-component-file": "Settings.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22flex%20gap-6%22%7D",
          className: "flex gap-6",
          children: [
            t.jsx("div", {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:317:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "317",
              "data-component-file": "Settings.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22hidden%20lg%3Ablock%20w-64%20flex-shrink-0%22%7D",
              className: "hidden lg:block w-64 flex-shrink-0",
              children: t.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\Settings.tsx:318:12",
                "data-lov-name": "div",
                "data-component-path": "src\\pages\\app\\Settings.tsx",
                "data-component-line": "318",
                "data-component-file": "Settings.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22sticky%20top-20%22%7D",
                className: "sticky top-20",
                children: [
                  t.jsxs("h2", {
                    "data-lov-id": "src\\pages\\app\\Settings.tsx:319:14",
                    "data-lov-name": "h2",
                    "data-component-path": "src\\pages\\app\\Settings.tsx",
                    "data-component-line": "319",
                    "data-component-file": "Settings.tsx",
                    "data-component-name": "h2",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-lg%20font-semibold%20text-foreground%20mb-4%20flex%20items-center%20gap-2%22%7D",
                    className:
                      "text-lg font-semibold text-foreground mb-4 flex items-center gap-2",
                    children: [
                      t.jsx(q, {
                        "data-lov-id": "src\\pages\\app\\Settings.tsx:320:16",
                        "data-lov-name": "SettingsIcon",
                        "data-component-path": "src\\pages\\app\\Settings.tsx",
                        "data-component-line": "320",
                        "data-component-file": "Settings.tsx",
                        "data-component-name": "SettingsIcon",
                        "data-component-content":
                          "%7B%22className%22%3A%22h-5%20w-5%20text-primary%22%7D",
                        className: "h-5 w-5 text-primary",
                      }),
                      a("settings.title"),
                    ],
                  }),
                  t.jsx("nav", {
                    "data-lov-id": "src\\pages\\app\\Settings.tsx:323:14",
                    "data-lov-name": "nav",
                    "data-component-path": "src\\pages\\app\\Settings.tsx",
                    "data-component-line": "323",
                    "data-component-file": "Settings.tsx",
                    "data-component-name": "nav",
                    "data-component-content":
                      "%7B%22className%22%3A%22space-y-1%22%7D",
                    className: "space-y-1",
                    children: y.map((e) =>
                      t.jsxs(
                        "button",
                        {
                          "data-lov-id": "src\\pages\\app\\Settings.tsx:325:18",
                          "data-lov-name": "button",
                          "data-component-path":
                            "src\\pages\\app\\Settings.tsx",
                          "data-component-line": "325",
                          "data-component-file": "Settings.tsx",
                          "data-component-name": "button",
                          "data-component-content": "%7B%7D",
                          onClick: () => A(e.id),
                          className: `w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${h === e.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                          children: [
                            t.jsx(e.icon, {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:334:20",
                              "data-lov-name": "section.icon",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "334",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "section.icon",
                              "data-component-content":
                                "%7B%22className%22%3A%22h-4%20w-4%20flex-shrink-0%22%7D",
                              className: "h-4 w-4 flex-shrink-0",
                            }),
                            t.jsxs("div", {
                              "data-lov-id":
                                "src\\pages\\app\\Settings.tsx:335:20",
                              "data-lov-name": "div",
                              "data-component-path":
                                "src\\pages\\app\\Settings.tsx",
                              "data-component-line": "335",
                              "data-component-file": "Settings.tsx",
                              "data-component-name": "div",
                              "data-component-content":
                                "%7B%22className%22%3A%22min-w-0%22%7D",
                              className: "min-w-0",
                              children: [
                                t.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Settings.tsx:336:22",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\Settings.tsx",
                                  "data-component-line": "336",
                                  "data-component-file": "Settings.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22font-medium%20text-sm%22%7D",
                                  className: "font-medium text-sm",
                                  children: e.title,
                                }),
                                t.jsx("div", {
                                  "data-lov-id":
                                    "src\\pages\\app\\Settings.tsx:337:22",
                                  "data-lov-name": "div",
                                  "data-component-path":
                                    "src\\pages\\app\\Settings.tsx",
                                  "data-component-line": "337",
                                  "data-component-file": "Settings.tsx",
                                  "data-component-name": "div",
                                  "data-component-content":
                                    "%7B%22className%22%3A%22text-xs%20opacity-70%20truncate%22%7D",
                                  className: "text-xs opacity-70 truncate",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
            t.jsx("div", {
              "data-lov-id": "src\\pages\\app\\Settings.tsx:346:10",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\Settings.tsx",
              "data-component-line": "346",
              "data-component-file": "Settings.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex-1%20min-w-0%22%7D",
              className: "flex-1 min-w-0",
              children: P(),
            }),
          ],
        }),
      ],
    }),
  });
};
export { it as default };
