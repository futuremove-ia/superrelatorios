import {
  h as N,
  u as v,
  j as e,
  C as i,
  g as r,
  W as b,
  X as y,
  Y as _,
  B as c,
  n as w,
  o as C,
  r as F,
  L as l,
  I as t,
} from "./index-DRWQgA5q.js";
import { r as A } from "./router-XBfdTQ0K.js";
import { u as B } from "./use-toast-BUB6lCCL.js";
import {
  aJ as S,
  aK as L,
  aL as T,
  aM as V,
  aN as I,
  _ as U,
  aO as k,
} from "./utils-Er8ll4su.js";
const D = () => {
  var m, o, x, h, p, f, j;
  const { user: s } = N(),
    { toast: g } = B(),
    { t: a } = v(),
    [d, n] = A.useState(!1),
    u = () => {
      (n(!0),
        setTimeout(() => {
          (n(!1),
            g({
              title: a("settings.appearance.save_success_title"),
              description: a("settings.profile.save_button"),
            }));
        }, 1e3));
    };
  return e.jsx("div", {
    className: "bg-gradient-subtle min-h-screen p-4 sm:p-6 lg:p-8",
    children: e.jsxs("div", {
      className: "max-w-4xl mx-auto space-y-8 animate-fade-in",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("h1", {
              className: "text-3xl font-bold text-foreground",
              children: a("profile.title"),
            }),
            e.jsx("p", {
              className: "text-muted-foreground mt-2",
              children: a("profile.subtitle"),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
          children: [
            e.jsx(i, {
              className: "lg:col-span-1 h-fit",
              children: e.jsxs(r, {
                className: "pt-8 text-center space-y-4",
                children: [
                  e.jsxs(b, {
                    className: "h-32 w-32 mx-auto ring-4 ring-primary/10",
                    children: [
                      e.jsx(y, {
                        src:
                          (m = s == null ? void 0 : s.user_metadata) == null
                            ? void 0
                            : m.avatar_url,
                      }),
                      e.jsx(_, {
                        className: "text-3xl bg-primary/5 text-primary",
                        children:
                          (o = s == null ? void 0 : s.email) == null
                            ? void 0
                            : o.charAt(0).toUpperCase(),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-1",
                    children: [
                      e.jsx("h2", {
                        className: "text-xl font-bold",
                        children:
                          ((x = s == null ? void 0 : s.user_metadata) == null
                            ? void 0
                            : x.full_name) || "Usuário",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: s == null ? void 0 : s.email,
                      }),
                    ],
                  }),
                  e.jsxs(c, {
                    variant: "outline",
                    size: "sm",
                    className: "w-full",
                    children: [
                      e.jsx(S, { className: "h-4 w-4 mr-2" }),
                      a("settings.profile.change_photo"),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs(i, {
              className: "lg:col-span-2",
              children: [
                e.jsxs(w, {
                  children: [
                    e.jsx(C, { children: a("settings.profile.title") }),
                    e.jsx(F, { children: a("profile.subtitle") }),
                  ],
                }),
                e.jsxs(r, {
                  className: "space-y-6",
                  children: [
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsxs(l, {
                              htmlFor: "firstName",
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(L, {
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                                a("settings.profile.first_name"),
                              ],
                            }),
                            e.jsx(t, {
                              id: "firstName",
                              defaultValue:
                                ((p =
                                  (h = s == null ? void 0 : s.user_metadata) ==
                                  null
                                    ? void 0
                                    : h.full_name) == null
                                  ? void 0
                                  : p.split(" ")[0]) || "",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx(l, {
                              htmlFor: "lastName",
                              children: a("settings.profile.last_name"),
                            }),
                            e.jsx(t, {
                              id: "lastName",
                              defaultValue:
                                ((j =
                                  (f = s == null ? void 0 : s.user_metadata) ==
                                  null
                                    ? void 0
                                    : f.full_name) == null
                                  ? void 0
                                  : j.split(" ").slice(1).join(" ")) || "",
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        e.jsxs(l, {
                          htmlFor: "email",
                          className: "flex items-center gap-2",
                          children: [
                            e.jsx(T, {
                              className: "h-4 w-4 text-muted-foreground",
                            }),
                            a("settings.profile.email"),
                          ],
                        }),
                        e.jsx(t, {
                          id: "email",
                          type: "email",
                          defaultValue: (s == null ? void 0 : s.email) || "",
                          disabled: !0,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground italic",
                          children: a("profile.fields.email_hint"),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsxs(l, {
                              htmlFor: "company",
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(V, {
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                                a("settings.profile.company"),
                              ],
                            }),
                            e.jsx(t, {
                              id: "company",
                              placeholder: "Nome da empresa",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsxs(l, {
                              htmlFor: "role",
                              className: "flex items-center gap-2",
                              children: [
                                e.jsx(I, {
                                  className: "h-4 w-4 text-muted-foreground",
                                }),
                                a("settings.profile.role"),
                              ],
                            }),
                            e.jsx(t, { id: "role", placeholder: "Seu cargo" }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "pt-4 flex flex-col sm:flex-row gap-3",
                      children: [
                        e.jsx(c, {
                          className: "flex-1",
                          onClick: u,
                          disabled: d,
                          children: a(d ? "common.processing" : "common.save"),
                        }),
                        e.jsx(c, {
                          variant: "outline",
                          className: "flex-1",
                          children: a("profile.actions.revert_changes"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-6",
          children: [
            e.jsx(i, {
              className: "hover-scale cursor-pointer bg-muted/30",
              children: e.jsxs(r, {
                className: "p-6 flex items-center gap-4",
                children: [
                  e.jsx("div", {
                    className:
                      "h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center",
                    children: e.jsx(U, { className: "h-5 w-5 text-blue-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h4", {
                        className: "font-medium",
                        children: "Segurança da Conta",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground text-xs",
                        children: "Proteção em duas etapas está desativada.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(i, {
              className: "hover-scale cursor-pointer bg-muted/30",
              children: e.jsxs(r, {
                className: "p-6 flex items-center gap-4",
                children: [
                  e.jsx("div", {
                    className:
                      "h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center",
                    children: e.jsx(k, { className: "h-5 w-5 text-amber-600" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h4", {
                        className: "font-medium",
                        children: "Notificações",
                      }),
                      e.jsx("p", {
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
export { D as default };
