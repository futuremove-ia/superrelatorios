import {
  u as S,
  j as e,
  C as I,
  n as L,
  o as B,
  g as E,
  B as h,
  Z as k,
  L as j,
  I as w,
  b7 as F,
  s as m,
  b6 as o,
} from "./index-DRWQgA5q.js";
import { r as n, d as M, j as U } from "./router-XBfdTQ0K.js";
import { L as z } from "./LogoIcon-DDoK1mWW.js";
import { B as A } from "./BrandName-Cfb7lsLO.js";
import "./utils-Er8ll4su.js";
const H = () =>
    e.jsxs("svg", {
      className: "w-5 h-5",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        e.jsx("path", {
          d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
          fill: "#4285F4",
        }),
        e.jsx("path", {
          d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
          fill: "#34A853",
        }),
        e.jsx("path", {
          d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
          fill: "#FBBC05",
        }),
        e.jsx("path", {
          d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
          fill: "#EA4335",
        }),
      ],
    }),
  W = () => {
    const [l, b] = n.useState(""),
      [i, v] = n.useState(""),
      [p, x] = n.useState(!1),
      [c, g] = n.useState(null),
      [r, N] = n.useState(!1),
      f = M(),
      [y] = U(),
      { t: s } = S(),
      d = () => y.get("redirect") || "/app",
      _ = async (t) => {
        (t.preventDefault(), x(!0));
        try {
          if (r) {
            const { error: a } = await m.auth.signUp({
              email: l,
              password: i,
              options: { data: { full_name: l.split("@")[0] } },
            });
            if (a) throw a;
            (o.success(s("auth.toast.signup_success")),
              setTimeout(() => {
                f(`/login?redirect=${encodeURIComponent(d())}`);
              }, 2e3));
          } else {
            const { error: a } = await m.auth.signInWithPassword({
              email: l,
              password: i,
            });
            if (a) throw a;
            (o.success(s("auth.toast.login_success")), f(d()));
          }
        } catch (a) {
          const u =
            a instanceof Error ? a.message : s("auth.toast.error_generic");
          o.error(u);
        } finally {
          x(!1);
        }
      },
      C = async (t) => {
        g(t);
        try {
          const { error: a } = await m.auth.signInWithOAuth({
            provider: t,
            options: {
              redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(d())}`,
            },
          });
          if (a) throw a;
        } catch (a) {
          const u = a instanceof Error ? a.message : `Erro ao entrar com ${t}`;
          (o.error(u), g(null));
        }
      };
    return e.jsx("div", {
      className:
        "flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted/40 px-4 py-12",
      children: e.jsxs("div", {
        className: "w-full max-w-md space-y-6",
        children: [
          e.jsxs("div", {
            className: "flex flex-col items-center gap-2 mb-2",
            children: [
              e.jsx(z, { size: "md" }),
              e.jsx(A, { variant: "header" }),
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: s(r ? "auth.signup_title" : "auth.login_title"),
              }),
            ],
          }),
          e.jsxs(I, {
            className: "shadow-lg",
            children: [
              e.jsx(L, {
                className: "space-y-1 pb-4",
                children: e.jsx(B, {
                  className: "text-xl text-center",
                  children: s(r ? "auth.submit_signup" : "auth.submit_login"),
                }),
              }),
              e.jsxs(E, {
                className: "space-y-4",
                children: [
                  e.jsx("div", {
                    className: "flex justify-center",
                    children: e.jsxs(h, {
                      variant: "outline",
                      className: "w-full gap-2 py-6 text-base btn-shine",
                      onClick: () => C("google"),
                      disabled: !!c,
                      type: "button",
                      children: [
                        c === "google"
                          ? e.jsx("div", {
                              className:
                                "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin",
                            })
                          : e.jsx(H, {}),
                        s("auth.google_button"),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: e.jsx(k, { className: "w-full" }),
                      }),
                      e.jsx("div", {
                        className:
                          "relative flex justify-center text-xs uppercase",
                        children: e.jsx("span", {
                          className: "bg-card px-2 text-muted-foreground",
                          children: s("auth.separator"),
                        }),
                      }),
                    ],
                  }),
                  e.jsxs("form", {
                    onSubmit: _,
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(j, {
                            htmlFor: "email",
                            children: s("auth.email_label"),
                          }),
                          e.jsx(w, {
                            id: "email",
                            type: "email",
                            placeholder: s("auth.email_placeholder"),
                            required: !0,
                            value: l,
                            onChange: (t) => b(t.target.value),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(j, {
                            htmlFor: "password",
                            children: s("auth.password_label"),
                          }),
                          e.jsx(w, {
                            id: "password",
                            type: "password",
                            required: !0,
                            placeholder: s("auth.password_placeholder"),
                            value: i,
                            onChange: (t) => v(t.target.value),
                          }),
                        ],
                      }),
                      e.jsx(h, {
                        className: "w-full",
                        type: "submit",
                        disabled: p || !!c,
                        children: p
                          ? e.jsxs(e.Fragment, {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-2",
                                }),
                                s("common.processing"),
                              ],
                            })
                          : s(r ? "auth.submit_signup" : "auth.submit_login"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(F, {
                children: e.jsx(h, {
                  variant: "ghost",
                  className: "w-full text-sm",
                  type: "button",
                  onClick: () => N(!r),
                  children: s(
                    r ? "auth.switch_to_login" : "auth.switch_to_signup",
                  ),
                }),
              }),
            ],
          }),
          e.jsxs("p", {
            className: "text-center text-xs text-muted-foreground",
            children: [
              s("auth.terms_prefix"),
              " ",
              e.jsx("a", {
                href: "#",
                className: "underline hover:text-foreground",
                children: s("auth.terms_link"),
              }),
              " ",
              s("auth.and"),
              " ",
              e.jsx("a", {
                href: "#",
                className: "underline hover:text-foreground",
                children: s("auth.privacy_link"),
              }),
              ".",
            ],
          }),
        ],
      }),
    });
  };
export { W as default };
