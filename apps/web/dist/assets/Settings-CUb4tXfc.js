import {
  u as Z,
  j as e,
  t as f,
  v,
  w as y,
  x as N,
  y as c,
  C as r,
  n as d,
  o,
  r as x,
  g as m,
  W as $,
  X as O,
  Y as H,
  B as n,
  L as a,
  I as p,
  Z as g,
  _ as F,
} from "./index-DRWQgA5q.js";
import { r as B } from "./router-XBfdTQ0K.js";
import { B as V } from "./badge-DD2chybY.js";
import { u as J } from "./use-toast-BUB6lCCL.js";
import {
  aK as z,
  aO as A,
  aP as I,
  _ as P,
  Z as R,
  a0 as K,
} from "./utils-Er8ll4su.js";
const Q = () => {
  const { toast: _ } = J(),
    { t: s, i18n: w } = Z(),
    [l, h] = B.useState({
      notifications: { email: !0, push: !1, reports: !0, marketing: !1 },
      appearance: { theme: "light", language: w.language || "pt-BR" },
      privacy: { twoFactor: !1, analytics: !0 },
    }),
    j = (t) => {
      _({
        title: "Configurações salvas",
        description: `As configurações de ${t} foram atualizadas com sucesso.`,
      });
    },
    b = [
      {
        id: "profile",
        title: s("settings.sections.profile"),
        icon: z,
        description: s("settings.profile.desc"),
      },
      {
        id: "notifications",
        title: s("settings.sections.notifications"),
        icon: A,
        description: s("settings.notifications.desc"),
      },
      {
        id: "appearance",
        title: s("settings.sections.appearance"),
        icon: I,
        description: s("settings.appearance.description"),
      },
      {
        id: "security",
        title: s("settings.sections.security"),
        icon: P,
        description: s("settings.security.desc"),
      },
      {
        id: "plan",
        title: s("settings.sections.plan"),
        icon: R,
        description: s("settings.plan.desc"),
      },
    ],
    [u, k] = B.useState("profile"),
    C = () =>
      e.jsx("div", {
        className: "space-y-6",
        children: e.jsxs(r, {
          children: [
            e.jsxs(d, {
              children: [
                e.jsxs(o, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(z, { className: "h-5 w-5 text-primary" }),
                    s("settings.profile.title"),
                  ],
                }),
                e.jsx(x, { children: s("settings.profile.desc") }),
              ],
            }),
            e.jsxs(m, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
                  children: [
                    e.jsxs($, {
                      className: "h-16 w-16 sm:h-20 sm:w-20",
                      children: [
                        e.jsx(O, { src: "/placeholder-avatar.jpg" }),
                        e.jsx(H, { className: "text-lg", children: "UD" }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx("h3", {
                          className: "font-medium text-foreground",
                          children: s("settings.profile.photo"),
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: s("settings.profile.photo_desc"),
                        }),
                        e.jsx(n, {
                          variant: "outline",
                          size: "sm",
                          children: s("settings.profile.change_photo"),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(a, {
                          htmlFor: "firstName",
                          children: s("settings.profile.first_name"),
                        }),
                        e.jsx(p, { id: "firstName", defaultValue: "Usuário" }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsx(a, {
                          htmlFor: "lastName",
                          children: s("settings.profile.last_name"),
                        }),
                        e.jsx(p, { id: "lastName", defaultValue: "Demo" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, {
                      htmlFor: "email",
                      children: s("settings.profile.email"),
                    }),
                    e.jsx(p, {
                      id: "email",
                      type: "email",
                      defaultValue: "usuario@exemplo.com",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, {
                      htmlFor: "company",
                      children: s("settings.profile.company"),
                    }),
                    e.jsx(p, {
                      id: "company",
                      defaultValue: "SuperRelatórios Inc.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, {
                      htmlFor: "role",
                      children: s("settings.profile.role"),
                    }),
                    e.jsx(p, {
                      id: "role",
                      defaultValue: "Gerente de Operações",
                    }),
                  ],
                }),
                e.jsx(n, {
                  onClick: () => j(s("settings.sections.profile")),
                  children: s("settings.profile.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    T = () =>
      e.jsx("div", {
        className: "space-y-6",
        children: e.jsxs(r, {
          children: [
            e.jsxs(d, {
              children: [
                e.jsxs(o, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(A, { className: "h-5 w-5 text-primary" }),
                    s("settings.notifications.title"),
                  ],
                }),
                e.jsx(x, { children: s("settings.notifications.desc") }),
              ],
            }),
            e.jsxs(m, {
              className: "space-y-6",
              children: [
                [
                  {
                    key: "email",
                    label: s("settings.notifications.email"),
                    desc: s("settings.notifications.email_desc"),
                  },
                  {
                    key: "push",
                    label: s("settings.notifications.push"),
                    desc: s("settings.notifications.push_desc"),
                  },
                  {
                    key: "reports",
                    label: s("settings.notifications.reports"),
                    desc: s("settings.notifications.reports_desc"),
                  },
                  {
                    key: "marketing",
                    label: s("settings.notifications.marketing"),
                    desc: s("settings.notifications.marketing_desc"),
                  },
                ].map((t, i) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        i > 0 && e.jsx(g, { className: "mb-4" }),
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-0.5 flex-1 mr-4",
                              children: [
                                e.jsx(a, { children: t.label }),
                                e.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: t.desc,
                                }),
                              ],
                            }),
                            e.jsx(F, {
                              checked: l.notifications[t.key],
                              onCheckedChange: (L) =>
                                h((S) => ({
                                  ...S,
                                  notifications: {
                                    ...S.notifications,
                                    [t.key]: L,
                                  },
                                })),
                            }),
                          ],
                        }),
                      ],
                    },
                    t.key,
                  ),
                ),
                e.jsx(n, {
                  onClick: () => j(s("settings.sections.notifications")),
                  children: s("settings.notifications.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    U = () =>
      e.jsx("div", {
        className: "space-y-6",
        children: e.jsxs(r, {
          children: [
            e.jsxs(d, {
              children: [
                e.jsxs(o, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(I, { className: "h-5 w-5 text-primary" }),
                    s("settings.appearance.title"),
                  ],
                }),
                e.jsx(x, { children: s("settings.appearance.description") }),
              ],
            }),
            e.jsxs(m, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, { children: s("settings.appearance.theme") }),
                    e.jsxs(f, {
                      value: l.appearance.theme,
                      onValueChange: (t) =>
                        h((i) => ({
                          ...i,
                          appearance: { ...i.appearance, theme: t },
                        })),
                      children: [
                        e.jsx(v, { children: e.jsx(y, {}) }),
                        e.jsxs(N, {
                          children: [
                            e.jsx(c, {
                              value: "light",
                              children: s("settings.appearance.theme_light"),
                            }),
                            e.jsx(c, {
                              value: "dark",
                              children: s("settings.appearance.theme_dark"),
                            }),
                            e.jsx(c, {
                              value: "system",
                              children: s("settings.appearance.theme_system"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, { children: s("settings.appearance.language") }),
                    e.jsxs(f, {
                      value: l.appearance.language,
                      onValueChange: (t) => {
                        (h((i) => ({
                          ...i,
                          appearance: { ...i.appearance, language: t },
                        })),
                          w.changeLanguage(t));
                      },
                      children: [
                        e.jsx(v, { children: e.jsx(y, {}) }),
                        e.jsxs(N, {
                          children: [
                            e.jsx(c, {
                              value: "pt-BR",
                              children: s("settings.language.pt"),
                            }),
                            e.jsx(c, {
                              value: "en-US",
                              children: s("settings.language.en"),
                            }),
                            e.jsx(c, {
                              value: "es-ES",
                              children: s("settings.language.es"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(n, {
                  onClick: () => {
                    _({
                      title: s("settings.appearance.save_success_title"),
                      description: s("settings.appearance.save_success_desc"),
                    });
                  },
                  children: s("settings.appearance.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    D = () =>
      e.jsx("div", {
        className: "space-y-6",
        children: e.jsxs(r, {
          children: [
            e.jsxs(d, {
              children: [
                e.jsxs(o, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(P, { className: "h-5 w-5 text-primary" }),
                    s("settings.security.title"),
                  ],
                }),
                e.jsx(x, { children: s("settings.security.desc") }),
              ],
            }),
            e.jsxs(m, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, {
                      children: s("settings.security.change_password"),
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: s("settings.security.last_changeCode", {
                        date: "há 3 meses",
                      }),
                    }),
                    e.jsx(n, {
                      variant: "outline",
                      size: "sm",
                      children: s("settings.security.change_password"),
                    }),
                  ],
                }),
                e.jsx(g, {}),
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-0.5 flex-1 mr-4",
                      children: [
                        e.jsx(a, {
                          children: s("settings.security.two_factor"),
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: s("settings.security.two_factor_desc"),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(V, {
                          variant: l.privacy.twoFactor
                            ? "default"
                            : "secondary",
                          children: l.privacy.twoFactor
                            ? s("common.active")
                            : s("common.inactive"),
                        }),
                        e.jsx(F, {
                          checked: l.privacy.twoFactor,
                          onCheckedChange: (t) =>
                            h((i) => ({
                              ...i,
                              privacy: { ...i.privacy, twoFactor: t },
                            })),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(g, {}),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, {
                      children: s("settings.security.active_sessions"),
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: s("settings.security.active_sessions_desc"),
                    }),
                    e.jsx(n, {
                      variant: "outline",
                      size: "sm",
                      children: s("settings.security.view_sessions"),
                    }),
                  ],
                }),
                e.jsx(n, {
                  onClick: () => j(s("settings.sections.security")),
                  children: s("settings.security.save_button"),
                }),
              ],
            }),
          ],
        }),
      }),
    E = () =>
      e.jsx("div", {
        className: "space-y-6",
        children: e.jsxs(r, {
          children: [
            e.jsxs(d, {
              children: [
                e.jsxs(o, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(R, { className: "h-5 w-5 text-primary" }),
                    s("settings.plan.title"),
                  ],
                }),
                e.jsx(x, { children: s("settings.plan.desc") }),
              ],
            }),
            e.jsxs(m, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className:
                    "p-4 bg-primary/5 rounded-lg border border-primary/20",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("h3", {
                              className: "font-semibold text-foreground",
                              children: s("settings.plan.professional"),
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: s("settings.plan.active_since", {
                                date: "Janeiro 2024",
                              }),
                            }),
                          ],
                        }),
                        e.jsx(V, {
                          className:
                            "bg-primary text-primary-foreground self-start",
                          children: s("common.active"),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2 text-sm",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            e.jsx("span", {
                              children: s("settings.plan.usage.reports"),
                            }),
                            e.jsxs("span", {
                              className: "font-medium",
                              children: ["23 / ", s("common.unlimited")],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            e.jsx("span", {
                              children: s("settings.plan.usage.storage"),
                            }),
                            e.jsx("span", {
                              className: "font-medium",
                              children: "2.3 GB / 100 GB",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex justify-between",
                          children: [
                            e.jsx("span", {
                              children: s("settings.plan.usage.next_billing"),
                            }),
                            e.jsx("span", {
                              className: "font-medium",
                              children: "15 de Fevereiro",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-2",
                  children: [
                    e.jsx(n, {
                      variant: "outline",
                      className: "flex-1",
                      children: s("settings.plan.change_plan"),
                    }),
                    e.jsx(n, {
                      variant: "outline",
                      className: "flex-1",
                      children: s("settings.plan.view_invoices"),
                    }),
                  ],
                }),
                e.jsx(g, {}),
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx(a, {
                      className: "text-destructive",
                      children: s("settings.plan.danger_zone"),
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children: s("settings.plan.danger_desc"),
                    }),
                    e.jsx(n, {
                      variant: "destructive",
                      size: "sm",
                      children: s("settings.plan.cancel_button"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    G = () => {
      switch (u) {
        case "profile":
          return C();
        case "notifications":
          return T();
        case "appearance":
          return U();
        case "security":
          return D();
        case "plan":
          return E();
        default:
          return C();
      }
    };
  return e.jsx("div", {
    className: "bg-gradient-subtle min-h-full",
    children: e.jsxs("div", {
      className: "max-w-5xl mx-auto p-4 sm:p-6",
      children: [
        e.jsx("div", {
          className: "lg:hidden mb-6",
          children: e.jsxs(f, {
            value: u,
            onValueChange: k,
            children: [
              e.jsx(v, { children: e.jsx(y, {}) }),
              e.jsx(N, {
                children: b.map((t) =>
                  e.jsx(c, { value: t.id, children: t.title }, t.id),
                ),
              }),
            ],
          }),
        }),
        e.jsxs("div", {
          className: "flex gap-6",
          children: [
            e.jsx("div", {
              className: "hidden lg:block w-64 flex-shrink-0",
              children: e.jsxs("div", {
                className: "sticky top-20",
                children: [
                  e.jsxs("h2", {
                    className:
                      "text-lg font-semibold text-foreground mb-4 flex items-center gap-2",
                    children: [
                      e.jsx(K, { className: "h-5 w-5 text-primary" }),
                      s("settings.title"),
                    ],
                  }),
                  e.jsx("nav", {
                    className: "space-y-1",
                    children: b.map((t) =>
                      e.jsxs(
                        "button",
                        {
                          onClick: () => k(t.id),
                          className: `w-full text-left p-3 rounded-lg transition-colors flex items-center gap-3 ${u === t.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                          children: [
                            e.jsx(t.icon, {
                              className: "h-4 w-4 flex-shrink-0",
                            }),
                            e.jsxs("div", {
                              className: "min-w-0",
                              children: [
                                e.jsx("div", {
                                  className: "font-medium text-sm",
                                  children: t.title,
                                }),
                                e.jsx("div", {
                                  className: "text-xs opacity-70 truncate",
                                  children: t.description,
                                }),
                              ],
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
            e.jsx("div", { className: "flex-1 min-w-0", children: G() }),
          ],
        }),
      ],
    }),
  });
};
export { Q as default };
