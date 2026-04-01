import {
  ba as Hs,
  bb as qs,
  bc as $s,
  j as e,
  bd as _s,
  be as Ks,
  bf as Gs,
  bg as Us,
  bh as Ws,
  bi as Qs,
  bj as Ds,
  S as Ee,
  e as Fe,
  B as n,
  f as Oe,
  p as a,
  Z as Ve,
  C as x,
  g as h,
  n as j,
  o as f,
  r as A,
  T as oe,
  k as me,
  l as v,
  m as C,
  bk as je,
  bl as Zs,
  bm as fe,
  I as E,
  E as Qe,
  t as Js,
  v as Xs,
  w as Ys,
  x as ea,
  y as be,
  _ as sa,
  L as M,
  bn as Ze,
  bo as aa,
  bp as Ne,
  a3 as Je,
  bq as ra,
  W as H,
  X as ne,
  Y as q,
  i as ee,
  q as y,
  br as ta,
  bs as Xe,
  bt as Ye,
  bu as es,
  b7 as T,
  aY as la,
  aZ as ia,
  a_ as se,
  a$ as ae,
  b0 as na,
  b1 as D,
  bv as ca,
  bw as da,
  bx as ve,
  by as ss,
  bz as as,
  bA as oa,
  bB as ma,
  bC as xa,
  bD as V,
  bE as ha,
  bF as ye,
  bG as ua,
  bH as ga,
  $ as pa,
  a0 as we,
  a1 as Ce,
  a2 as Te,
  D as ja,
  b as fa,
  c as ba,
  bI as Na,
  b9 as rs,
  bJ as va,
  d as re,
  bK as Se,
  A as ts,
  bL as ls,
  z as is,
  b6 as De,
  bM as ya,
  bN as wa,
  bO as Ca,
  bP as Ta,
  bQ as Sa,
  bR as Da,
  bS as Aa,
  bT as Ia,
  bU as Pa,
  bV as ka,
  bW as Ba,
  bX as Ma,
  a4 as Ra,
  aX as za,
  a5 as La,
  a6 as Ea,
  a7 as Fa,
  a8 as Oa,
  a9 as Va,
  b3 as ns,
  b4 as cs,
  b5 as ds,
  bY as Ha,
  bZ as qa,
  b_ as $a,
  b$ as _a,
  c0 as Ka,
  c1 as Ga,
  c2 as Ua,
  c3 as Wa,
  c4 as Qa,
} from "./index-DRWQgA5q.js";
import {
  r as P,
  O as Za,
  k as As,
  u as Ja,
  L as Xa,
  f as Ya,
  h as w,
  N as os,
} from "./router-XBfdTQ0K.js";
import {
  aP as K,
  bd as er,
  as as Z,
  b8 as xe,
  bg as $e,
  aa as $,
  al as sr,
  bh as _e,
  a_ as Is,
  bi as ar,
  bj as Ps,
  b7 as ks,
  au as b,
  I as rr,
  U as tr,
  J as I,
  Y as S,
  bk as lr,
  K as Bs,
  ao as Ke,
  ag as U,
  a0 as ms,
  ah as Ae,
  aK as he,
  aL as xs,
  aY as He,
  bl as ir,
  N as Ge,
  C as _,
  bm as hs,
  ax as nr,
  bn as cr,
  aC as dr,
  aj as R,
  az as O,
  aS as Ue,
  L as Ms,
  bo as us,
  a4 as Q,
  aq as or,
  bp as mr,
  a3 as xr,
  T as L,
  b5 as hr,
  a5 as z,
  bq as ur,
  br as gr,
  Z as k,
  aX as gs,
  a8 as qe,
  ay as pr,
  a2 as B,
  aB as ue,
  af as Rs,
  a9 as zs,
  a6 as ge,
  O as pe,
  bs as We,
  bt as jr,
  bu as fr,
  ac as F,
  _ as Ls,
  X as br,
  b9 as Nr,
  aR as Es,
  bv as vr,
} from "./utils-Er8ll4su.js";
import { B as m } from "./badge-DD2chybY.js";
const J = Hs,
  X = qs,
  Y = $s,
  yr = 1,
  wr = 1e6;
let Ie = 0;
function Cr() {
  return ((Ie = (Ie + 1) % Number.MAX_SAFE_INTEGER), Ie.toString());
}
const Pe = new Map(),
  ps = (s) => {
    if (Pe.has(s)) return;
    const r = setTimeout(() => {
      (Pe.delete(s), W({ type: "REMOVE_TOAST", toastId: s }));
    }, wr);
    Pe.set(s, r);
  },
  Tr = (s, r) => {
    switch (r.type) {
      case "ADD_TOAST":
        return { ...s, toasts: [r.toast, ...s.toasts].slice(0, yr) };
      case "UPDATE_TOAST":
        return {
          ...s,
          toasts: s.toasts.map((c) =>
            c.id === r.toast.id ? { ...c, ...r.toast } : c,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: c } = r;
        return (
          c
            ? ps(c)
            : s.toasts.forEach((o) => {
                ps(o.id);
              }),
          {
            ...s,
            toasts: s.toasts.map((o) =>
              o.id === c || c === void 0 ? { ...o, open: !1 } : o,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return r.toastId === void 0
          ? { ...s, toasts: [] }
          : { ...s, toasts: s.toasts.filter((c) => c.id !== r.toastId) };
    }
  },
  ce = [];
let de = { toasts: [] };
function W(s) {
  ((de = Tr(de, s)),
    ce.forEach((r) => {
      r(de);
    }));
}
function Sr({ ...s }) {
  const r = Cr(),
    c = (d) => W({ type: "UPDATE_TOAST", toast: { ...d, id: r } }),
    o = () => W({ type: "DISMISS_TOAST", toastId: r });
  return (
    W({
      type: "ADD_TOAST",
      toast: {
        ...s,
        id: r,
        open: !0,
        onOpenChange: (d) => {
          d || o();
        },
      },
    }),
    { id: r, dismiss: o, update: c }
  );
}
function Dr() {
  const [s, r] = P.useState(de);
  return (
    P.useEffect(
      () => (
        ce.push(r),
        () => {
          const c = ce.indexOf(r);
          c > -1 && ce.splice(c, 1);
        }
      ),
      [s],
    ),
    {
      ...s,
      toast: Sr,
      dismiss: (c) => W({ type: "DISMISS_TOAST", toastId: c }),
    }
  );
}
function Ar() {
  const { toasts: s } = Dr();
  return e.jsxs(_s, {
    children: [
      s.map(function ({ id: r, title: c, description: o, action: d, ...i }) {
        return e.jsxs(
          Ks,
          {
            ...i,
            children: [
              e.jsxs("div", {
                className: "grid gap-1",
                children: [
                  c && e.jsx(Gs, { children: c }),
                  o && e.jsx(Us, { children: o }),
                ],
              }),
              d,
              e.jsx(Ws, {}),
            ],
          },
          r,
        );
      }),
      e.jsx(Qs, {}),
    ],
  });
}
const Ir = [
  { title: "Visão Geral", href: "/design-system", icon: er },
  { title: "Princípios", href: "/design-system/principles", icon: Z },
  {
    title: "Identidade Visual",
    href: "/design-system/identity",
    icon: $,
    children: [
      { title: "Logo", href: "/design-system/identity/logo", icon: xe },
      { title: "Cores", href: "/design-system/identity/colors", icon: K },
      {
        title: "Tipografia",
        href: "/design-system/identity/typography",
        icon: $e,
      },
    ],
  },
  {
    title: "Componentes",
    href: "/design-system/components",
    icon: _e,
    children: [
      {
        title: "UI Components",
        href: "/design-system/components/ui",
        icon: xe,
      },
      {
        title: "Layout System",
        href: "/design-system/components/layout",
        icon: sr,
      },
    ],
  },
  {
    title: "Diretrizes",
    href: "/design-system/guidelines",
    icon: ks,
    children: [
      {
        title: "Hierarquia Visual",
        href: "/design-system/guidelines/hierarchy",
        icon: Is,
      },
      {
        title: "Responsivo",
        href: "/design-system/guidelines/responsive",
        icon: ar,
      },
      {
        title: "Acessibilidade",
        href: "/design-system/guidelines/a11y",
        icon: Ps,
      },
    ],
  },
  {
    title: "Melhores Práticas",
    href: "/design-system/best-practices",
    icon: b,
  },
];
function Fs({ item: s, depth: r = 0 }) {
  var i;
  const c = Ja(),
    o = c.pathname === s.href || c.pathname.startsWith(s.href + "/"),
    d = s.children && s.children.length > 0;
  return e.jsxs("div", {
    className: a("space-y-1", r > 0 && "ml-4"),
    children: [
      e.jsxs(As, {
        to: s.href,
        className: a(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          o
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        ),
        children: [
          e.jsx(s.icon, { className: "h-4 w-4" }),
          e.jsx("span", { children: s.title }),
        ],
      }),
      d &&
        e.jsx("div", {
          className: "space-y-1",
          children:
            (i = s.children) == null
              ? void 0
              : i.map((t) => e.jsx(Fs, { item: t, depth: r + 1 }, t.href)),
        }),
    ],
  });
}
function Os() {
  return e.jsxs("div", {
    className: "flex h-full flex-col border-r bg-background",
    children: [
      e.jsx("div", {
        className: "flex h-16 items-center border-b px-6",
        children: e.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            e.jsx("div", {
              className:
                "w-8 h-8 bg-primary rounded-lg flex items-center justify-center",
              children: e.jsx(K, {
                className: "w-5 h-5 text-primary-foreground",
              }),
            }),
            e.jsx("span", {
              className: "font-semibold",
              children: "Design System",
            }),
          ],
        }),
      }),
      e.jsxs(Ds, {
        className: "flex-1 py-4 px-3",
        children: [
          e.jsx("nav", {
            className: "space-y-2",
            children: Ir.map((s) => e.jsx(Fs, { item: s }, s.href)),
          }),
          e.jsx("div", {
            className: "mt-8 pt-4 border-t",
            children: e.jsxs(As, {
              to: "/",
              className:
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
              children: [
                e.jsx(rr, { className: "h-4 w-4" }),
                e.jsx("span", { children: "Voltar ao App" }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Pr() {
  const [s, r] = P.useState(!1);
  return e.jsxs(Ee, {
    open: s,
    onOpenChange: r,
    children: [
      e.jsx(Fe, {
        asChild: !0,
        children: e.jsxs(n, {
          variant: "ghost",
          size: "icon",
          className: "lg:hidden",
          children: [
            e.jsx(tr, { className: "h-5 w-5" }),
            e.jsx("span", { className: "sr-only", children: "Abrir menu" }),
          ],
        }),
      }),
      e.jsx(Oe, {
        side: "left",
        className: "w-[280px] p-0",
        children: e.jsx(Os, {}),
      }),
    ],
  });
}
function kr() {
  return e.jsxs("div", {
    className: "flex min-h-screen bg-muted/30",
    children: [
      e.jsx("aside", {
        className:
          "hidden lg:block w-[280px] fixed inset-y-0 left-0 z-30 bg-background",
        children: e.jsx(Os, {}),
      }),
      e.jsxs("main", {
        className: "flex-1 lg:ml-[280px] min-h-screen",
        children: [
          e.jsxs("header", {
            className:
              "lg:hidden flex h-16 items-center gap-4 border-b bg-background px-4 sticky top-0 z-20",
            children: [
              e.jsx(Pr, {}),
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx("div", {
                    className:
                      "w-8 h-8 bg-primary rounded-lg flex items-center justify-center",
                    children: e.jsx(K, {
                      className: "w-5 h-5 text-primary-foreground",
                    }),
                  }),
                  e.jsx("span", {
                    className: "font-semibold",
                    children: "Design System",
                  }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "p-6 lg:p-8",
            children: e.jsx("div", {
              className: "max-w-5xl mx-auto",
              children: e.jsx(Za, {}),
            }),
          }),
        ],
      }),
    ],
  });
}
const Br = [
    {
      title: "Princípios",
      description: "Os 4 pilares fundamentais do nosso design system",
      icon: Z,
      href: "/design-system/principles",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Identidade Visual",
      description: "Logo, cores, tipografia e elementos visuais",
      icon: $,
      href: "/design-system/identity",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Componentes",
      description: "Biblioteca completa de componentes UI reutilizáveis",
      icon: _e,
      href: "/design-system/components/ui",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Diretrizes",
      description: "Regras e padrões para uso consistente",
      icon: ks,
      href: "/design-system/guidelines",
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Melhores Práticas",
      description: "Checklists e recomendações de implementação",
      icon: b,
      href: "/design-system/best-practices",
      color: "bg-teal-100 text-teal-700",
    },
  ],
  Mr = [
    { label: "Componentes UI", value: "40+", icon: _e },
    { label: "Cores", value: "20+", icon: K },
    { label: "Tokens", value: "100+", icon: $e },
    { label: "Ícones", value: "300+", icon: Is },
  ];
function js() {
  return e.jsxs("div", {
    className: "space-y-8",
    children: [
      e.jsxs("div", {
        className: "space-y-4",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className:
                  "w-12 h-12 bg-primary rounded-xl flex items-center justify-center",
                children: e.jsx(K, {
                  className: "w-7 h-7 text-primary-foreground",
                }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-3xl font-bold tracking-tight",
                    children: "Design System",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground",
                    children: "Sistema de Design SuperRelatórios",
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(m, { variant: "secondary", children: "v2.0" }),
              e.jsx(m, { variant: "outline", children: "Status: Approved" }),
              e.jsx("span", {
                className: "text-sm text-muted-foreground",
                children: "Última atualização: 22/03/2026",
              }),
            ],
          }),
        ],
      }),
      e.jsx(Ve, {}),
      e.jsx("div", {
        className: "prose prose-slate max-w-none",
        children: e.jsx("p", {
          className: "text-lg text-muted-foreground leading-relaxed",
          children:
            "O Sistema de Design SuperRelatórios é a fundação visual que garante consistência, acessibilidade e profissionalismo em todos os pontos de contato da plataforma. Este guia define princípios, componentes e diretrizes para criação de interfaces coesas e escaláveis.",
        }),
      }),
      e.jsx("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
        children: Mr.map((s) =>
          e.jsx(
            x,
            {
              className: "border-l-4 border-l-primary",
              children: e.jsxs(h, {
                className: "p-4 flex items-center gap-3",
                children: [
                  e.jsx(s.icon, { className: "h-5 w-5 text-muted-foreground" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-2xl font-bold",
                        children: s.value,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: s.label,
                      }),
                    ],
                  }),
                ],
              }),
            },
            s.label,
          ),
        ),
      }),
      e.jsxs("div", {
        children: [
          e.jsx("h2", {
            className: "text-xl font-semibold mb-4",
            children: "Seções",
          }),
          e.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: Br.map((s) =>
              e.jsx(
                Xa,
                {
                  to: s.href,
                  className: "block",
                  children: e.jsxs(x, {
                    className:
                      "h-full hover:shadow-md transition-shadow cursor-pointer group",
                    children: [
                      e.jsxs(j, {
                        className: "pb-3",
                        children: [
                          e.jsx("div", {
                            className: `w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${s.color}`,
                            children: e.jsx(s.icon, { className: "w-5 h-5" }),
                          }),
                          e.jsx(f, {
                            className:
                              "text-lg group-hover:text-primary transition-colors",
                            children: s.title,
                          }),
                          e.jsx(A, { children: s.description }),
                        ],
                      }),
                      e.jsx(h, {
                        className: "pt-0",
                        children: e.jsxs("div", {
                          className:
                            "flex items-center text-sm text-primary font-medium",
                          children: [
                            "Explorar",
                            e.jsx(I, {
                              className:
                                "ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                },
                s.title,
              ),
            ),
          }),
        ],
      }),
      e.jsxs(x, {
        className:
          "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20",
        children: [
          e.jsxs(j, {
            children: [
              e.jsx(f, { children: "Começando" }),
              e.jsx(A, {
                children: "Como usar o Design System em seus projetos",
              }),
            ],
          }),
          e.jsxs(h, {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium",
                    children: "1. Importe os componentes",
                  }),
                  e.jsx("pre", {
                    className:
                      "bg-background rounded-lg p-3 text-xs overflow-x-auto",
                    children: e.jsx("code", {
                      children:
                        "import { Button, Card, Input } from '@/components/ui';",
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium",
                    children: "2. Use os tokens de design",
                  }),
                  e.jsx("pre", {
                    className:
                      "bg-background rounded-lg p-3 text-xs overflow-x-auto",
                    children: e.jsx("code", {
                      children:
                        '<div className="bg-primary text-primary-foreground p-4 rounded-lg">',
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium",
                    children: "3. Siga as diretrizes",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      "Consulte as diretrizes de uso para garantir consistência visual.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Rr = [
  {
    number: "01",
    title: "Clareza e Simplicidade",
    description:
      "Menos é mais. Interfaces limpas e focadas, com hierarquia visual clara e linguagem universal compreensível.",
    icon: S,
    points: [
      "Interfaces limpas e focadas",
      "Hierarquia visual organizada por importância",
      "Ícones e termos compreensíveis",
      "Remoção de elementos desnecessários",
    ],
    color: "bg-blue-500",
  },
  {
    number: "02",
    title: "Identidade Visual Forte",
    description:
      "Reconhecimento imediato através de logo e cores únicas, transmitindo profissionalismo e memorabilidade.",
    icon: K,
    points: [
      "Logo e cores distintivas",
      "Design corporativo e confiável",
      "Elementos marcantes e consistentes",
      "Presença de marca em todos os pontos de contato",
    ],
    color: "bg-purple-500",
  },
  {
    number: "03",
    title: "Acessibilidade Universal",
    description:
      "Conformidade com WCAG 2.1 AA, garantindo que todos os usuários possam acessar e utilizar a plataforma.",
    icon: Ps,
    points: [
      "Conformidade WCAG 2.1 AA",
      "Contraste adequado para leitura",
      "Navegação completa por teclado",
      "Compatibilidade com leitores de tela",
    ],
    color: "bg-green-500",
  },
  {
    number: "04",
    title: "Mobile-First",
    description:
      "Design responsivo que se adapta a todos os dispositivos, com interações otimizadas para touch e performance leve.",
    icon: lr,
    points: [
      "Design responsivo em todos os breakpoints",
      "Interações otimizadas para touch",
      "Carregamento rápido em qualquer conexão",
      "Mobile-first como abordagem padrão",
    ],
    color: "bg-orange-500",
  },
];
function te() {
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "Princípios Fundamentais",
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2",
            children:
              "Os quatro pilares que sustentam todas as decisões de design do SuperRelatórios",
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid gap-6",
        children: Rr.map((s) =>
          e.jsx(
            x,
            {
              className: "overflow-hidden",
              children: e.jsxs("div", {
                className: "flex flex-col md:flex-row",
                children: [
                  e.jsx("div", {
                    className: `${s.color} p-6 flex items-center justify-center md:w-48`,
                    children: e.jsxs("div", {
                      className: "text-center",
                      children: [
                        e.jsx(s.icon, {
                          className: "w-10 h-10 text-white mx-auto mb-2",
                        }),
                        e.jsx("span", {
                          className: "text-4xl font-bold text-white/80",
                          children: s.number,
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 p-6",
                    children: [
                      e.jsxs(j, {
                        className: "p-0 pb-4",
                        children: [
                          e.jsx(f, { className: "text-xl", children: s.title }),
                          e.jsx(A, {
                            className: "text-base mt-2",
                            children: s.description,
                          }),
                        ],
                      }),
                      e.jsx(h, {
                        className: "p-0",
                        children: e.jsx("ul", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                          children: s.points.map((r, c) =>
                            e.jsxs(
                              "li",
                              {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                  e.jsx("div", {
                                    className: `w-1.5 h-1.5 rounded-full ${s.color} mt-2 flex-shrink-0`,
                                  }),
                                  e.jsx("span", {
                                    className: "text-muted-foreground",
                                    children: r,
                                  }),
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            },
            s.number,
          ),
        ),
      }),
    ],
  });
}
const fs = [
  {
    name: "Primárias",
    colors: [
      {
        name: "Primary",
        hsl: "220 90% 56%",
        hex: "#2563eb",
        css: "--color-primary",
        usage: "Ações principais, botões primários",
      },
      {
        name: "Primary Foreground",
        hsl: "210 40% 98%",
        hex: "#f8fafc",
        css: "--color-primary-foreground",
        usage: "Texto sobre fundo primário",
      },
      {
        name: "Secondary",
        hsl: "210 40% 96%",
        hex: "#f1f5f9",
        css: "--color-secondary",
        usage: "Fundos secundários, cards",
      },
      {
        name: "Secondary Foreground",
        hsl: "222.2 84% 4.9%",
        hex: "#0f172a",
        css: "--color-secondary-foreground",
        usage: "Texto sobre fundo secundário",
      },
    ],
  },
  {
    name: "Semânticas",
    colors: [
      {
        name: "Success",
        hsl: "142 76% 36%",
        hex: "#16a34a",
        css: "--color-success",
        usage: "Estados de sucesso, confirmações",
      },
      {
        name: "Warning",
        hsl: "38 92% 50%",
        hex: "#f59e0b",
        css: "--color-warning",
        usage: "Alertas, avisos",
      },
      {
        name: "Destructive",
        hsl: "0 84% 60%",
        hex: "#ef4444",
        css: "--color-destructive",
        usage: "Erros, ações destrutivas",
      },
      {
        name: "Info",
        hsl: "199 89% 48%",
        hex: "#0ea5e9",
        css: "--color-info",
        usage: "Informações, dicas",
      },
    ],
  },
  {
    name: "Neutras",
    colors: [
      {
        name: "Muted",
        hsl: "210 40% 96%",
        hex: "#f1f5f9",
        css: "--color-muted",
        usage: "Fundos neutros",
      },
      {
        name: "Muted Foreground",
        hsl: "215.4 16.3% 46.9%",
        hex: "#64748b",
        css: "--color-muted-foreground",
        usage: "Texto secundário",
      },
      {
        name: "Border",
        hsl: "214.3 31.8% 91.4%",
        hex: "#e2e8f0",
        css: "--color-border",
        usage: "Bordas, divisores",
      },
      {
        name: "Input",
        hsl: "214.3 31.8% 91.4%",
        hex: "#e2e8f0",
        css: "--color-input",
        usage: "Campos de input",
      },
      {
        name: "Ring",
        hsl: "222.2 84% 4.9%",
        hex: "#020617",
        css: "--color-ring",
        usage: "Focus rings",
      },
    ],
  },
];
function zr({ color: s }) {
  const [r, c] = P.useState(!1),
    o = (d) => {
      (navigator.clipboard.writeText(d), c(!0), setTimeout(() => c(!1), 2e3));
    };
  return e.jsxs("div", {
    className: "group",
    children: [
      e.jsx("div", {
        className:
          "h-20 rounded-lg shadow-sm mb-3 relative overflow-hidden cursor-pointer transition-transform hover:scale-105",
        style: { backgroundColor: s.hex },
        onClick: () => o(s.hex),
        children: e.jsx("div", {
          className:
            "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20",
          children: r
            ? e.jsx(Bs, { className: "w-6 h-6 text-white" })
            : e.jsx(Ke, { className: "w-6 h-6 text-white" }),
        }),
      }),
      e.jsxs("div", {
        className: "space-y-1",
        children: [
          e.jsx("p", { className: "font-medium text-sm", children: s.name }),
          e.jsx("p", {
            className: "text-xs text-muted-foreground font-mono",
            children: s.hsl,
          }),
          e.jsx("p", {
            className: "text-xs text-muted-foreground font-mono",
            children: s.hex,
          }),
          e.jsx("p", {
            className: "text-xs text-muted-foreground",
            children: s.usage,
          }),
        ],
      }),
    ],
  });
}
function ke() {
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "Paleta de Cores",
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2",
            children:
              "Sistema de cores baseado em HSL com tokens semânticos para consistência visual",
          }),
        ],
      }),
      e.jsxs(oe, {
        defaultValue: "Primárias",
        className: "w-full",
        children: [
          e.jsx(me, {
            className: "grid w-full grid-cols-3",
            children: fs.map((s) =>
              e.jsx(v, { value: s.name, children: s.name }, s.name),
            ),
          }),
          fs.map((s) =>
            e.jsx(
              C,
              {
                value: s.name,
                className: "mt-6",
                children: e.jsx("div", {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                  children: s.colors.map((r) =>
                    e.jsx(zr, { color: r }, r.name),
                  ),
                }),
              },
              s.name,
            ),
          ),
        ],
      }),
      e.jsxs(x, {
        className: "mt-8",
        children: [
          e.jsxs(j, {
            children: [
              e.jsx(f, { children: "Uso de Cores Semânticas" }),
              e.jsx(A, {
                children: "Classes CSS para aplicar cores consistentemente",
              }),
            ],
          }),
          e.jsx(h, {
            children: e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 p-3 rounded-lg bg-primary text-primary-foreground",
                  children: [
                    e.jsx("code", {
                      className: "text-sm",
                      children: "bg-primary text-primary-foreground",
                    }),
                    e.jsx("span", {
                      className: "text-sm ml-auto",
                      children: "Primário",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 p-3 rounded-lg bg-secondary text-secondary-foreground",
                  children: [
                    e.jsx("code", {
                      className: "text-sm",
                      children: "bg-secondary text-secondary-foreground",
                    }),
                    e.jsx("span", {
                      className: "text-sm ml-auto",
                      children: "Secundário",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-200",
                  children: [
                    e.jsx("code", {
                      className: "text-sm",
                      children: "bg-success text-success-foreground",
                    }),
                    e.jsx("span", {
                      className: "text-sm ml-auto",
                      children: "Sucesso",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 p-3 rounded-lg bg-yellow-100 text-yellow-800 border border-yellow-200",
                  children: [
                    e.jsx("code", {
                      className: "text-sm",
                      children: "bg-warning text-warning-foreground",
                    }),
                    e.jsx("span", {
                      className: "text-sm ml-auto",
                      children: "Alerta",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-4 p-3 rounded-lg bg-red-100 text-red-800 border border-red-200",
                  children: [
                    e.jsx("code", {
                      className: "text-sm",
                      children: "bg-destructive text-destructive-foreground",
                    }),
                    e.jsx("span", {
                      className: "text-sm ml-auto",
                      children: "Erro",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsx(j, { children: e.jsx(f, { children: "Regras de Uso" }) }),
          e.jsx(h, {
            children: e.jsxs("ul", {
              className: "space-y-2 text-sm",
              children: [
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "text-red-500 font-bold",
                      children: "NUNCA",
                    }),
                    e.jsx("span", {
                      children:
                        "use cores diretas (hex, rgb) - sempre use tokens semânticos",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "text-green-500 font-bold",
                      children: "SEMPRE",
                    }),
                    e.jsx("span", {
                      children: "use formato HSL para consistência",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "text-blue-500 font-bold",
                      children: "MANTENHA",
                    }),
                    e.jsx("span", {
                      children: "contraste mínimo de 4.5:1 para texto normal",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "text-purple-500 font-bold",
                      children: "TESTE",
                    }),
                    e.jsx("span", {
                      children: "em ferramentas online para daltonismo",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const Lr = [
    {
      name: "Montserrat",
      role: "Headings",
      weights: "600-700",
      usage: "Títulos e headings",
    },
    {
      name: "Inter",
      role: "Body & UI",
      weights: "400-600",
      usage: "Texto corpo e elementos de UI",
    },
    {
      name: "JetBrains Mono",
      role: "Code",
      weights: "400",
      usage: "Código e elementos técnicos",
    },
  ],
  Er = [
    { name: "xs", size: "0.75rem", px: "12px", usage: "Legends, captions" },
    {
      name: "sm",
      size: "0.875rem",
      px: "14px",
      usage: "Secondary text, labels",
    },
    { name: "base", size: "1rem", px: "16px", usage: "Body text default" },
    { name: "lg", size: "1.125rem", px: "18px", usage: "Lead paragraphs" },
    { name: "xl", size: "1.25rem", px: "20px", usage: "Small headings" },
    { name: "2xl", size: "1.5rem", px: "24px", usage: "Section headings" },
    { name: "3xl", size: "1.875rem", px: "30px", usage: "Page headings" },
    { name: "4xl", size: "2.25rem", px: "36px", usage: "Hero headings" },
  ],
  Fr = [
    { level: "H1", class: "text-4xl font-bold", sample: "Título Principal" },
    { level: "H2", class: "text-3xl font-semibold", sample: "Seção Principal" },
    { level: "H3", class: "text-2xl font-medium", sample: "Subseção" },
    { level: "H4", class: "text-xl font-medium", sample: "Título Secundário" },
    { level: "H5", class: "text-lg font-medium", sample: "Título Terciário" },
    {
      level: "H6",
      class: "text-base font-medium",
      sample: "Título Quaternário",
    },
  ];
function Or() {
  return e.jsxs("div", {
    className: "space-y-8",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "Tipografia",
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2",
            children:
              "Sistema tipográfico completo com fontes, escalas e hierarquia visual",
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsxs(j, {
            children: [
              e.jsx(f, { children: "Famílias de Fontes" }),
              e.jsx(A, { children: "Fontes utilizadas no sistema de design" }),
            ],
          }),
          e.jsx(h, {
            children: e.jsx("div", {
              className: "grid gap-4",
              children: Lr.map((s) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "flex items-center justify-between p-4 border rounded-lg",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-semibold text-lg",
                            style: { fontFamily: s.name },
                            children: s.name,
                          }),
                          e.jsxs("p", {
                            className: "text-sm text-muted-foreground",
                            children: [s.role, " — ", s.usage],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "text-right",
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-medium",
                            children: "Pesos",
                          }),
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: s.weights,
                          }),
                        ],
                      }),
                    ],
                  },
                  s.name,
                ),
              ),
            }),
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsxs(j, {
            children: [
              e.jsx(f, { children: "Escala Tipográfica" }),
              e.jsx(A, {
                children:
                  "Tamanhos de fonte definidos em rem para acessibilidade",
              }),
            ],
          }),
          e.jsx(h, {
            children: e.jsx("div", {
              className: "space-y-4",
              children: Er.map((s) =>
                e.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsx("div", {
                        className:
                          "w-20 text-sm font-mono text-muted-foreground",
                        children: s.name,
                      }),
                      e.jsx("div", {
                        className: `text-${s.name} flex-1`,
                        children: "The quick brown fox",
                      }),
                      e.jsx("div", {
                        className: "text-sm text-muted-foreground w-24",
                        children: s.size,
                      }),
                      e.jsx("div", {
                        className: "text-sm text-muted-foreground w-16",
                        children: s.px,
                      }),
                      e.jsx("div", {
                        className: "text-sm text-muted-foreground flex-1",
                        children: s.usage,
                      }),
                    ],
                  },
                  s.name,
                ),
              ),
            }),
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsxs(j, {
            children: [
              e.jsx(f, { children: "Hierarquia de Títulos" }),
              e.jsx(A, { children: "Estrutura semântica de headings" }),
            ],
          }),
          e.jsx(h, {
            children: e.jsx("div", {
              className: "space-y-6",
              children: Fr.map((s) =>
                e.jsxs(
                  "div",
                  {
                    className: "border-b pb-4 last:border-0",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-4 mb-2",
                        children: [
                          e.jsx("span", {
                            className:
                              "text-sm font-mono text-muted-foreground w-12",
                            children: s.level,
                          }),
                          e.jsx("code", {
                            className: "text-xs bg-muted px-2 py-1 rounded",
                            children: s.class,
                          }),
                        ],
                      }),
                      e.jsx("div", { className: s.class, children: s.sample }),
                    ],
                  },
                  s.level,
                ),
              ),
            }),
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsx(j, { children: e.jsx(f, { children: "Pesos da Fonte" }) }),
          e.jsx(h, {
            children: e.jsxs("div", {
              className: "space-y-3",
              children: [
                e.jsx("p", {
                  className: "font-light text-lg",
                  children: "Light (300) — Subtítulos e textos decorativos",
                }),
                e.jsx("p", {
                  className: "font-normal text-lg",
                  children: "Normal (400) — Texto corpo padrão",
                }),
                e.jsx("p", {
                  className: "font-medium text-lg",
                  children: "Medium (500) — Ênfase e labels",
                }),
                e.jsx("p", {
                  className: "font-semibold text-lg",
                  children: "Semibold (600) — Subtítulos e headings",
                }),
                e.jsx("p", {
                  className: "font-bold text-lg",
                  children: "Bold (700) — Títulos e destaques",
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs(x, {
        children: [
          e.jsx(j, { children: e.jsx(f, { children: "Regras de Uso" }) }),
          e.jsx(h, {
            children: e.jsxs("ul", {
              className: "space-y-2",
              children: [
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "font-semibold",
                      children: "Headings:",
                    }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Montserrat, pesos 600-700",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "font-semibold",
                      children: "Body text:",
                    }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Inter, peso 400",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "font-semibold",
                      children: "UI elements:",
                    }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "Inter, pesos 500-600",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className: "flex items-start gap-2",
                  children: [
                    e.jsx("span", {
                      className: "font-semibold",
                      children: "Code:",
                    }),
                    e.jsx("span", {
                      className: "text-muted-foreground",
                      children: "JetBrains Mono, peso 400",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function g({ title: s, description: r, children: c, code: o }) {
  const [d, i] = P.useState(!1),
    t = () => {
      o &&
        (navigator.clipboard.writeText(o), i(!0), setTimeout(() => i(!1), 2e3));
    };
  return e.jsxs(x, {
    className: "overflow-hidden",
    children: [
      e.jsx(j, {
        className: "pb-3",
        children: e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx(f, { className: "text-lg", children: s }),
                r && e.jsx(A, { children: r }),
              ],
            }),
            o &&
              e.jsx(n, {
                variant: "ghost",
                size: "sm",
                onClick: t,
                className: "h-8 w-8 p-0",
                children: d
                  ? e.jsx(Bs, { className: "h-4 w-4" })
                  : e.jsx(Ke, { className: "h-4 w-4" }),
              }),
          ],
        }),
      }),
      e.jsx(h, {
        children: e.jsxs("div", {
          className: "space-y-4",
          children: [
            e.jsx("div", {
              className: "p-4 border rounded-lg bg-muted/30",
              children: c,
            }),
            o &&
              e.jsx("pre", {
                className: "bg-muted rounded-lg p-3 text-xs overflow-x-auto",
                children: e.jsx("code", { children: o }),
              }),
          ],
        }),
      }),
    ],
  });
}
function bs() {
  const [s, r] = P.useState(new Date()),
    [c, o] = P.useState(!1);
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "UI Components",
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2",
            children:
              "Biblioteca completa de componentes reutilizáveis baseados em shadcn/ui",
          }),
        ],
      }),
      e.jsxs(oe, {
        defaultValue: "buttons",
        className: "w-full",
        children: [
          e.jsxs(me, {
            className: "grid w-full grid-cols-4 lg:grid-cols-8",
            children: [
              e.jsx(v, { value: "buttons", children: "Buttons" }),
              e.jsx(v, { value: "inputs", children: "Inputs" }),
              e.jsx(v, { value: "display", children: "Display" }),
              e.jsx(v, { value: "cards", children: "Cards" }),
              e.jsx(v, { value: "lists", children: "Lists" }),
              e.jsx(v, { value: "navigation", children: "Navigation" }),
              e.jsx(v, { value: "feedback", children: "Feedback" }),
              e.jsx(v, { value: "overlays", children: "Overlays" }),
            ],
          }),
          e.jsx(C, {
            value: "buttons",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Button Variants",
                  description:
                    "Estilos visuais diferentes para diferentes contextos",
                  code: `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`,
                  children: e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx(n, { children: "Default" }),
                      e.jsx(n, { variant: "secondary", children: "Secondary" }),
                      e.jsx(n, { variant: "outline", children: "Outline" }),
                      e.jsx(n, { variant: "ghost", children: "Ghost" }),
                      e.jsx(n, {
                        variant: "destructive",
                        children: "Destructive",
                      }),
                      e.jsx(n, { variant: "link", children: "Link" }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Button Sizes",
                  description: "Tamanhos para diferentes contextos de uso",
                  code: `<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>`,
                  children: e.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      e.jsx(n, { size: "sm", children: "Small" }),
                      e.jsx(n, { size: "default", children: "Default" }),
                      e.jsx(n, { size: "lg", children: "Large" }),
                      e.jsx(n, {
                        size: "icon",
                        variant: "outline",
                        children: e.jsx(U, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Button States",
                  description: "Estados interativos dos botões",
                  code: `<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button loading>Loading</Button>`,
                  children: e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx(n, { children: "Normal" }),
                      e.jsx(n, { disabled: !0, children: "Disabled" }),
                      e.jsx(n, {
                        variant: "outline",
                        disabled: !0,
                        children: "Disabled Outline",
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Icon Buttons",
                  description: "Botões com ícones",
                  code: `<Button size="icon" variant="outline"><Settings /></Button>
<Button><User className="mr-2 h-4 w-4" /> Profile</Button>`,
                  children: e.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      e.jsx(n, {
                        size: "icon",
                        variant: "outline",
                        children: e.jsx(ms, { className: "h-4 w-4" }),
                      }),
                      e.jsx(n, {
                        size: "icon",
                        variant: "secondary",
                        children: e.jsx(Ae, { className: "h-4 w-4" }),
                      }),
                      e.jsxs(n, {
                        children: [
                          e.jsx(he, { className: "mr-2 h-4 w-4" }),
                          "Profile",
                        ],
                      }),
                      e.jsxs(n, {
                        variant: "outline",
                        children: [
                          e.jsx(xs, { className: "mr-2 h-4 w-4" }),
                          "Email",
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Toggle",
                  description: "Botão de estado binário",
                  code: '<Toggle aria-label="Toggle italic"><Bold className="h-4 w-4" /></Toggle>',
                  children: e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx(je, {
                        "aria-label": "Toggle star",
                        children: e.jsx(He, { className: "h-4 w-4" }),
                      }),
                      e.jsx(je, {
                        "aria-label": "Toggle heart",
                        pressed: !0,
                        children: e.jsx(Ae, { className: "h-4 w-4" }),
                      }),
                      e.jsx(je, {
                        variant: "outline",
                        "aria-label": "Toggle thumbs up",
                        children: e.jsx(ir, { className: "h-4 w-4" }),
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Toggle Group",
                  description: "Grupo de botões de seleção",
                  code: `<ToggleGroup type="single">
  <ToggleGroupItem value="a">Option A</ToggleGroupItem>
  <ToggleGroupItem value="b">Option B</ToggleGroupItem>
</ToggleGroup>`,
                  children: e.jsxs(Zs, {
                    type: "single",
                    defaultValue: "center",
                    className: "inline-flex",
                    children: [
                      e.jsx(fe, {
                        value: "left",
                        "aria-label": "Align left",
                        children: e.jsx("span", {
                          className: "text-sm",
                          children: "Left",
                        }),
                      }),
                      e.jsx(fe, {
                        value: "center",
                        "aria-label": "Align center",
                        children: e.jsx("span", {
                          className: "text-sm",
                          children: "Center",
                        }),
                      }),
                      e.jsx(fe, {
                        value: "right",
                        "aria-label": "Align right",
                        children: e.jsx("span", {
                          className: "text-sm",
                          children: "Right",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "inputs",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Input",
                  description: "Campo de entrada de texto",
                  code: `<Input placeholder="Enter your email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />`,
                  children: e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsx(E, { placeholder: "Enter your email" }),
                      e.jsx(E, { type: "password", placeholder: "Password" }),
                      e.jsx(E, { disabled: !0, placeholder: "Disabled input" }),
                      e.jsxs("div", {
                        className: "relative",
                        children: [
                          e.jsx(xs, {
                            className:
                              "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground",
                          }),
                          e.jsx(E, {
                            placeholder: "Email with icon",
                            className: "pl-9",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Textarea",
                  description: "Área de texto multilinha",
                  code: '<Textarea placeholder="Enter your message..." />',
                  children: e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsx(Qe, { placeholder: "Enter your message..." }),
                      e.jsx(Qe, {
                        placeholder: "Disabled textarea",
                        disabled: !0,
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Select",
                  description: "Menu dropdown de seleção",
                  code: `<Select>
  <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
  </SelectContent>
</Select>`,
                  children: e.jsxs(Js, {
                    children: [
                      e.jsx(Xs, {
                        className: "w-full",
                        children: e.jsx(Ys, { placeholder: "Select option" }),
                      }),
                      e.jsxs(ea, {
                        children: [
                          e.jsx(be, { value: "1", children: "Option 1" }),
                          e.jsx(be, { value: "2", children: "Option 2" }),
                          e.jsx(be, { value: "3", children: "Option 3" }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Switch & Checkbox",
                  description: "Controles de seleção booleana",
                  code: `<Switch id="airplane" />
<Checkbox id="terms" />`,
                  children: e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(sa, { id: "airplane" }),
                          e.jsx(M, {
                            htmlFor: "airplane",
                            children: "Airplane Mode",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(Ze, { id: "terms" }),
                          e.jsx(M, {
                            htmlFor: "terms",
                            children: "Accept terms and conditions",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(Ze, { id: "newsletter", disabled: !0 }),
                          e.jsx(M, {
                            htmlFor: "newsletter",
                            className: "text-muted-foreground",
                            children: "Disabled checkbox",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Radio Group",
                  description: "Grupo de seleção única",
                  code: `<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
</RadioGroup>`,
                  children: e.jsxs(aa, {
                    defaultValue: "comfortable",
                    className: "space-y-2",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(Ne, { value: "default", id: "r1" }),
                          e.jsx(M, {
                            htmlFor: "r1",
                            children: "Default spacing",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(Ne, { value: "comfortable", id: "r2" }),
                          e.jsx(M, {
                            htmlFor: "r2",
                            children: "Comfortable spacing",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(Ne, { value: "compact", id: "r3" }),
                          e.jsx(M, {
                            htmlFor: "r3",
                            children: "Compact spacing",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Slider",
                  description: "Controle deslizante para valores numéricos",
                  code: "<Slider defaultValue={[50]} max={100} step={1} />",
                  children: e.jsxs("div", {
                    className: "space-y-4 pt-2",
                    children: [
                      e.jsx(Je, { defaultValue: [50], max: 100, step: 1 }),
                      e.jsx(Je, { defaultValue: [25, 75], max: 100, step: 1 }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Calendar",
                  description: "Seletor de data",
                  code: '<Calendar mode="single" selected={date} onSelect={setDate} />',
                  children: e.jsx(ra, {
                    mode: "single",
                    selected: s,
                    onSelect: r,
                    className: "rounded-md border",
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "display",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Avatar",
                  description: "Avatar de usuário com imagem ou fallback",
                  code: `<Avatar>
  <AvatarImage src="https://..." alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
                  children: e.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      e.jsxs(H, {
                        children: [
                          e.jsx(ne, {
                            src: "https://github.com/shadcn.png",
                            alt: "@shadcn",
                          }),
                          e.jsx(q, { children: "CN" }),
                        ],
                      }),
                      e.jsx(H, { children: e.jsx(q, { children: "JD" }) }),
                      e.jsxs(H, {
                        className: "h-12 w-12",
                        children: [
                          e.jsx(ne, {
                            src: "https://github.com/shadcn.png",
                            alt: "@shadcn",
                          }),
                          e.jsx(q, { children: "LG" }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Badge",
                  description: "Etiquetas de status e categorização",
                  code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,
                  children: e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsx(m, { children: "Default" }),
                      e.jsx(m, { variant: "secondary", children: "Secondary" }),
                      e.jsx(m, { variant: "outline", children: "Outline" }),
                      e.jsx(m, {
                        variant: "destructive",
                        children: "Destructive",
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Separator",
                  description: "Divisor visual entre conteúdos",
                  code: `<Separator />
<Separator orientation="vertical" />`,
                  children: e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-1",
                        children: [
                          e.jsx("h4", {
                            className: "text-sm font-medium leading-none",
                            children: "Horizontal",
                          }),
                          e.jsx(Ve, { className: "my-2" }),
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Content below",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex h-5 items-center space-x-4 text-sm",
                        children: [
                          e.jsx("div", { children: "Left" }),
                          e.jsx(Ve, { orientation: "vertical" }),
                          e.jsx("div", { children: "Right" }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Skeleton",
                  description: "Placeholder de carregamento",
                  code: `<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />`,
                  children: e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          e.jsx(ee, { className: "h-12 w-12 rounded-full" }),
                          e.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              e.jsx(ee, { className: "h-4 w-[250px]" }),
                              e.jsx(ee, { className: "h-4 w-[200px]" }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(ee, { className: "h-[125px] w-full rounded-xl" }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Progress",
                  description: "Indicador de progresso visual",
                  code: "<Progress value={60} />",
                  children: e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx(y, { value: 25 }),
                      e.jsx(y, { value: 50 }),
                      e.jsx(y, { value: 75 }),
                      e.jsx(y, { value: 100 }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Accordion",
                  description: "Conteúdo expansível",
                  code: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes...</AccordionContent>
  </AccordionItem>
</Accordion>`,
                  children: e.jsxs(ta, {
                    type: "single",
                    collapsible: !0,
                    className: "w-full",
                    children: [
                      e.jsxs(Xe, {
                        value: "item-1",
                        children: [
                          e.jsx(Ye, { children: "Is it accessible?" }),
                          e.jsx(es, {
                            children:
                              "Yes. It adheres to the WAI-ARIA design pattern.",
                          }),
                        ],
                      }),
                      e.jsxs(Xe, {
                        value: "item-2",
                        children: [
                          e.jsx(Ye, { children: "Is it styled?" }),
                          e.jsx(es, {
                            children:
                              "Yes. It comes with default styles that matches the other components.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "cards",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Card",
                  description: "Container de conteúdo",
                  code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`,
                  children: e.jsxs(x, {
                    className: "max-w-sm",
                    children: [
                      e.jsxs(j, {
                        children: [
                          e.jsx(f, { children: "Card Title" }),
                          e.jsx(A, { children: "Card Description" }),
                        ],
                      }),
                      e.jsx(h, {
                        children: e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Card content goes here.",
                        }),
                      }),
                      e.jsxs(T, {
                        className: "flex justify-between",
                        children: [
                          e.jsx(n, { variant: "ghost", children: "Cancel" }),
                          e.jsx(n, { children: "Save" }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Card Variants",
                  description: "Diferentes estilos de cards",
                  children: e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx(x, {
                        className: "border-l-4 border-l-primary",
                        children: e.jsxs(h, {
                          className: "p-4",
                          children: [
                            e.jsx("p", {
                              className: "font-medium",
                              children: "Border accent",
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: "Left border highlight",
                            }),
                          ],
                        }),
                      }),
                      e.jsx(x, {
                        className:
                          "hover:shadow-lg transition-shadow cursor-pointer",
                        children: e.jsxs(h, {
                          className: "p-4",
                          children: [
                            e.jsx("p", {
                              className: "font-medium",
                              children: "Hover effect",
                            }),
                            e.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: "Interactive card",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Card with Image",
                  description: "Card com imagem e conteúdo",
                  children: e.jsxs(x, {
                    className: "max-w-sm overflow-hidden",
                    children: [
                      e.jsx("div", {
                        className:
                          "h-32 bg-gradient-to-br from-primary to-primary/50",
                      }),
                      e.jsxs(j, {
                        className: "pb-2",
                        children: [
                          e.jsx(f, { children: "Beautiful Landscape" }),
                          e.jsx(A, { children: "Nature photography" }),
                        ],
                      }),
                      e.jsx(h, {
                        children: e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children:
                            "A stunning view of nature captured in perfect lighting.",
                        }),
                      }),
                      e.jsxs(T, {
                        className: "flex gap-2",
                        children: [
                          e.jsxs(n, {
                            variant: "ghost",
                            size: "sm",
                            children: [
                              e.jsx(Ae, { className: "mr-1 h-4 w-4" }),
                              " 124",
                            ],
                          }),
                          e.jsx(n, {
                            variant: "ghost",
                            size: "sm",
                            children: e.jsx(Ge, { className: "h-4 w-4" }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "lists",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Table",
                  description: "Tabela de dados",
                  code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
                  children: e.jsxs(la, {
                    children: [
                      e.jsx(ia, {
                        children: e.jsxs(se, {
                          children: [
                            e.jsx(ae, {
                              className: "w-[100px]",
                              children: "Invoice",
                            }),
                            e.jsx(ae, { children: "Status" }),
                            e.jsx(ae, { children: "Method" }),
                            e.jsx(ae, {
                              className: "text-right",
                              children: "Amount",
                            }),
                          ],
                        }),
                      }),
                      e.jsxs(na, {
                        children: [
                          e.jsxs(se, {
                            children: [
                              e.jsx(D, {
                                className: "font-medium",
                                children: "INV001",
                              }),
                              e.jsx(D, {
                                children: e.jsx(m, {
                                  variant: "outline",
                                  className: "bg-green-50 text-green-700",
                                  children: "Paid",
                                }),
                              }),
                              e.jsx(D, { children: "Credit Card" }),
                              e.jsx(D, {
                                className: "text-right",
                                children: "$250.00",
                              }),
                            ],
                          }),
                          e.jsxs(se, {
                            children: [
                              e.jsx(D, {
                                className: "font-medium",
                                children: "INV002",
                              }),
                              e.jsx(D, {
                                children: e.jsx(m, {
                                  variant: "outline",
                                  className: "bg-yellow-50 text-yellow-700",
                                  children: "Pending",
                                }),
                              }),
                              e.jsx(D, { children: "PayPal" }),
                              e.jsx(D, {
                                className: "text-right",
                                children: "$150.00",
                              }),
                            ],
                          }),
                          e.jsxs(se, {
                            children: [
                              e.jsx(D, {
                                className: "font-medium",
                                children: "INV003",
                              }),
                              e.jsx(D, {
                                children: e.jsx(m, {
                                  variant: "outline",
                                  className: "bg-red-50 text-red-700",
                                  children: "Overdue",
                                }),
                              }),
                              e.jsx(D, { children: "Bank Transfer" }),
                              e.jsx(D, {
                                className: "text-right",
                                children: "$350.00",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Scroll Area",
                  description: "Área com scroll customizado",
                  code: `<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Content here...
</ScrollArea>`,
                  children: e.jsx(Ds, {
                    className: "h-[200px] w-full rounded-md border p-4",
                    children: e.jsx("div", {
                      className: "space-y-4",
                      children: Array.from({ length: 10 }).map((d, i) =>
                        e.jsxs(
                          "div",
                          {
                            className: "flex items-center gap-3",
                            children: [
                              e.jsx(H, {
                                className: "h-8 w-8",
                                children: e.jsx(q, {
                                  children: String.fromCharCode(65 + i),
                                }),
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsxs("p", {
                                    className: "text-sm font-medium",
                                    children: ["User ", i + 1],
                                  }),
                                  e.jsxs("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: ["user", i + 1, "@example.com"],
                                  }),
                                ],
                              }),
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                  }),
                }),
                e.jsx(g, {
                  title: "Collapsible",
                  description: "Conteúdo expansível",
                  code: `<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>Yes...</CollapsibleContent>
</Collapsible>`,
                  children: e.jsxs(J, {
                    open: c,
                    onOpenChange: o,
                    className: "w-full space-y-2",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center justify-between space-x-4 px-4",
                        children: [
                          e.jsx("h4", {
                            className: "text-sm font-semibold",
                            children: "@peduarte starred 3 repositories",
                          }),
                          e.jsx(X, {
                            asChild: !0,
                            children: e.jsx(n, {
                              variant: "ghost",
                              size: "sm",
                              children: e.jsx(_, {
                                className: `h-4 w-4 transition-transform ${c ? "rotate-180" : ""}`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "rounded-md border px-4 py-2 font-mono text-sm",
                        children: "@radix-ui/primitives",
                      }),
                      e.jsxs(Y, {
                        className: "space-y-2",
                        children: [
                          e.jsx("div", {
                            className:
                              "rounded-md border px-4 py-2 font-mono text-sm",
                            children: "@radix-ui/colors",
                          }),
                          e.jsx("div", {
                            className:
                              "rounded-md border px-4 py-2 font-mono text-sm",
                            children: "@stitches/react",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Simple List",
                  description: "Lista simples de itens",
                  children: e.jsx("div", {
                    className: "space-y-2",
                    children: [
                      "Dashboard",
                      "Settings",
                      "Profile",
                      "Messages",
                      "Help",
                    ].map((d, i) =>
                      e.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors",
                          children: [
                            e.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm",
                              children: i + 1,
                            }),
                            e.jsx("span", {
                              className: "text-sm font-medium",
                              children: d,
                            }),
                          ],
                        },
                        d,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "navigation",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Breadcrumb",
                  description: "Navegação hierárquica",
                  code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
                  children: e.jsx(ca, {
                    children: e.jsxs(da, {
                      children: [
                        e.jsx(ve, {
                          children: e.jsx(ss, { href: "/", children: "Home" }),
                        }),
                        e.jsx(as, {}),
                        e.jsx(ve, {
                          children: e.jsx(ss, {
                            href: "/products",
                            children: "Products",
                          }),
                        }),
                        e.jsx(as, {}),
                        e.jsx(ve, {
                          children: e.jsx(oa, { children: "Electronics" }),
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(g, {
                  title: "Pagination",
                  description: "Navegação de páginas",
                  code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
                  children: e.jsx(ma, {
                    children: e.jsxs(xa, {
                      children: [
                        e.jsx(V, { children: e.jsx(ha, { href: "#" }) }),
                        e.jsx(V, {
                          children: e.jsx(ye, {
                            href: "#",
                            isActive: !0,
                            children: "1",
                          }),
                        }),
                        e.jsx(V, {
                          children: e.jsx(ye, { href: "#", children: "2" }),
                        }),
                        e.jsx(V, {
                          children: e.jsx(ye, { href: "#", children: "3" }),
                        }),
                        e.jsx(V, { children: e.jsx(ua, {}) }),
                        e.jsx(V, { children: e.jsx(ga, { href: "#" }) }),
                      ],
                    }),
                  }),
                }),
                e.jsx(g, {
                  title: "Tabs",
                  description: "Navegação por abas",
                  code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
</Tabs>`,
                  children: e.jsxs(oe, {
                    defaultValue: "account",
                    className: "w-full",
                    children: [
                      e.jsxs(me, {
                        className: "grid w-full grid-cols-2",
                        children: [
                          e.jsx(v, { value: "account", children: "Account" }),
                          e.jsx(v, { value: "password", children: "Password" }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "mt-4 p-4 border rounded-lg",
                        children: e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Tab content area",
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Tooltip",
                  description: "Dica de contexto",
                  code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
                  children: e.jsx(pa, {
                    children: e.jsxs("div", {
                      className: "flex gap-4",
                      children: [
                        e.jsxs(we, {
                          children: [
                            e.jsx(Ce, {
                              asChild: !0,
                              children: e.jsx(n, {
                                variant: "outline",
                                size: "icon",
                                children: e.jsx(U, { className: "h-4 w-4" }),
                              }),
                            }),
                            e.jsx(Te, {
                              children: e.jsx("p", {
                                children: "Add to library",
                              }),
                            }),
                          ],
                        }),
                        e.jsxs(we, {
                          children: [
                            e.jsx(Ce, {
                              asChild: !0,
                              children: e.jsx(n, {
                                variant: "outline",
                                size: "icon",
                                children: e.jsx(hs, { className: "h-4 w-4" }),
                              }),
                            }),
                            e.jsx(Te, {
                              children: e.jsx("p", { children: "Delete item" }),
                            }),
                          ],
                        }),
                        e.jsxs(we, {
                          children: [
                            e.jsx(Ce, {
                              asChild: !0,
                              children: e.jsx(n, {
                                variant: "outline",
                                size: "icon",
                                children: e.jsx(nr, { className: "h-4 w-4" }),
                              }),
                            }),
                            e.jsx(Te, {
                              children: e.jsx("p", { children: "Edit item" }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                e.jsx(g, {
                  title: "Dropdown Menu",
                  description: "Menu de ações contextuais",
                  code: `<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
                  children: e.jsxs(ja, {
                    children: [
                      e.jsx(fa, {
                        asChild: !0,
                        children: e.jsxs(n, {
                          variant: "outline",
                          children: [
                            "Open Menu ",
                            e.jsx(_, { className: "ml-2 h-4 w-4" }),
                          ],
                        }),
                      }),
                      e.jsxs(ba, {
                        className: "w-56",
                        children: [
                          e.jsx(Na, { children: "My Account" }),
                          e.jsx(rs, {}),
                          e.jsxs(va, {
                            children: [
                              e.jsxs(re, {
                                children: [
                                  e.jsx(he, { className: "mr-2 h-4 w-4" }),
                                  e.jsx("span", { children: "Profile" }),
                                  e.jsx(Se, { children: "⇧⌘P" }),
                                ],
                              }),
                              e.jsxs(re, {
                                children: [
                                  e.jsx(cr, { className: "mr-2 h-4 w-4" }),
                                  e.jsx("span", { children: "Billing" }),
                                  e.jsx(Se, { children: "⌘B" }),
                                ],
                              }),
                              e.jsxs(re, {
                                children: [
                                  e.jsx(ms, { className: "mr-2 h-4 w-4" }),
                                  e.jsx("span", { children: "Settings" }),
                                  e.jsx(Se, { children: "⌘S" }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(rs, {}),
                          e.jsxs(re, {
                            className: "text-red-600",
                            children: [
                              e.jsx(hs, { className: "mr-2 h-4 w-4" }),
                              e.jsx("span", { children: "Delete" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "feedback",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Alert",
                  description: "Mensagens de feedback ao usuário",
                  code: `<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an info message.</AlertDescription>
</Alert>`,
                  children: e.jsxs("div", {
                    className: "space-y-3",
                    children: [
                      e.jsxs(ts, {
                        children: [
                          e.jsx(dr, { className: "h-4 w-4" }),
                          e.jsx(ls, { children: "Information" }),
                          e.jsx(is, {
                            children: "This is an informational message.",
                          }),
                        ],
                      }),
                      e.jsxs(ts, {
                        variant: "destructive",
                        children: [
                          e.jsx(R, { className: "h-4 w-4" }),
                          e.jsx(ls, { children: "Error" }),
                          e.jsx(is, {
                            children: "Something went wrong! Please try again.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs(g, {
                  title: "Toast",
                  description: "Notificações temporárias",
                  code: `toast.success('Event has been created');
toast.error('Failed to save changes');`,
                  children: [
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        e.jsx(n, {
                          onClick: () => De.success("Event has been created"),
                          children: "Success Toast",
                        }),
                        e.jsx(n, {
                          variant: "destructive",
                          onClick: () => De.error("Failed to save changes"),
                          children: "Error Toast",
                        }),
                        e.jsx(n, {
                          variant: "outline",
                          onClick: () => De.info("New update available"),
                          children: "Info Toast",
                        }),
                      ],
                    }),
                    e.jsx(Ar, {}),
                  ],
                }),
                e.jsx(g, {
                  title: "Hover Card",
                  description: "Card de pré-visualização",
                  code: `<HoverCard>
  <HoverCardTrigger>@nextjs</HoverCardTrigger>
  <HoverCardContent>The React Framework...</HoverCardContent>
</HoverCard>`,
                  children: e.jsxs(ya, {
                    children: [
                      e.jsx(wa, {
                        asChild: !0,
                        children: e.jsx(n, {
                          variant: "link",
                          children: "@nextjs",
                        }),
                      }),
                      e.jsx(Ca, {
                        className: "w-80",
                        children: e.jsxs("div", {
                          className: "flex justify-between space-x-4",
                          children: [
                            e.jsxs(H, {
                              children: [
                                e.jsx(ne, {
                                  src: "https://github.com/vercel.png",
                                }),
                                e.jsx(q, { children: "VC" }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                e.jsx("h4", {
                                  className: "text-sm font-semibold",
                                  children: "@nextjs",
                                }),
                                e.jsx("p", {
                                  className: "text-sm",
                                  children:
                                    "The React Framework – created and maintained by @vercel.",
                                }),
                                e.jsxs("div", {
                                  className: "flex items-center pt-2",
                                  children: [
                                    e.jsx(O, {
                                      className: "mr-2 h-4 w-4 opacity-70",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: "Joined December 2021",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Alert Dialog",
                  description: "Diálogo de confirmação",
                  code: `<AlertDialog>
  <AlertDialogTrigger>Open</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
                  children: e.jsxs(Ta, {
                    children: [
                      e.jsx(Sa, {
                        asChild: !0,
                        children: e.jsx(n, {
                          variant: "outline",
                          children: "Delete Account",
                        }),
                      }),
                      e.jsxs(Da, {
                        children: [
                          e.jsxs(Aa, {
                            children: [
                              e.jsx(Ia, {
                                children: "Are you absolutely sure?",
                              }),
                              e.jsx(Pa, {
                                children:
                                  "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
                              }),
                            ],
                          }),
                          e.jsxs(ka, {
                            children: [
                              e.jsx(Ba, { children: "Cancel" }),
                              e.jsx(Ma, {
                                className: "bg-red-600 hover:bg-red-700",
                                children: "Delete",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "overlays",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsx(g, {
                  title: "Dialog",
                  description: "Modal para conteúdo importante",
                  code: `<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
                  children: e.jsxs(Ra, {
                    children: [
                      e.jsx(za, {
                        asChild: !0,
                        children: e.jsx(n, { children: "Open Dialog" }),
                      }),
                      e.jsxs(La, {
                        className: "sm:max-w-[425px]",
                        children: [
                          e.jsxs(Ea, {
                            children: [
                              e.jsx(Fa, { children: "Edit profile" }),
                              e.jsx(Oa, {
                                children:
                                  "Make changes to your profile here. Click save when you're done.",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid gap-4 py-4",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "grid grid-cols-4 items-center gap-4",
                                children: [
                                  e.jsx(M, {
                                    htmlFor: "name",
                                    className: "text-right",
                                    children: "Name",
                                  }),
                                  e.jsx(E, {
                                    id: "name",
                                    value: "Pedro Duarte",
                                    className: "col-span-3",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "grid grid-cols-4 items-center gap-4",
                                children: [
                                  e.jsx(M, {
                                    htmlFor: "username",
                                    className: "text-right",
                                    children: "Username",
                                  }),
                                  e.jsx(E, {
                                    id: "username",
                                    value: "@peduarte",
                                    className: "col-span-3",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(Va, {
                            children: e.jsx(n, {
                              type: "submit",
                              children: "Save changes",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Sheet",
                  description: "Painel lateral deslizante",
                  code: `<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
                  children: e.jsxs("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                      e.jsxs(Ee, {
                        children: [
                          e.jsx(Fe, {
                            asChild: !0,
                            children: e.jsx(n, {
                              variant: "outline",
                              children: "Open Left",
                            }),
                          }),
                          e.jsx(Oe, {
                            side: "left",
                            children: e.jsxs(ns, {
                              children: [
                                e.jsx(cs, { children: "Left Panel" }),
                                e.jsx(ds, {
                                  children:
                                    "This sheet slides in from the left.",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      e.jsxs(Ee, {
                        children: [
                          e.jsx(Fe, {
                            asChild: !0,
                            children: e.jsx(n, {
                              variant: "outline",
                              children: "Open Right",
                            }),
                          }),
                          e.jsx(Oe, {
                            children: e.jsxs(ns, {
                              children: [
                                e.jsx(cs, { children: "Right Panel" }),
                                e.jsx(ds, {
                                  children:
                                    "This sheet slides in from the right.",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Drawer",
                  description: "Gaveta inferior (mobile)",
                  code: `<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
      <DrawerDescription>Description</DrawerDescription>
    </DrawerHeader>
  </DrawerContent>
</Drawer>`,
                  children: e.jsxs(Ha, {
                    children: [
                      e.jsx(qa, {
                        asChild: !0,
                        children: e.jsx(n, {
                          variant: "outline",
                          children: "Open Drawer",
                        }),
                      }),
                      e.jsxs($a, {
                        children: [
                          e.jsxs(_a, {
                            className: "text-left",
                            children: [
                              e.jsx(Ka, { children: "Move Goal" }),
                              e.jsx(Ga, {
                                children: "Set your daily activity goal.",
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "p-4 pb-0",
                            children: e.jsxs("div", {
                              className:
                                "flex items-center justify-center space-x-2",
                              children: [
                                e.jsx(n, {
                                  variant: "outline",
                                  size: "icon",
                                  className: "h-8 w-8 shrink-0 rounded-full",
                                  children: e.jsx(Ue, { className: "h-4 w-4" }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1 text-center",
                                  children: [
                                    e.jsx("div", {
                                      className:
                                        "text-7xl font-bold tracking-tighter",
                                      children: "350",
                                    }),
                                    e.jsx("div", {
                                      className:
                                        "text-[0.70rem] uppercase text-muted-foreground",
                                      children: "Calories/day",
                                    }),
                                  ],
                                }),
                                e.jsx(n, {
                                  variant: "outline",
                                  size: "icon",
                                  className: "h-8 w-8 shrink-0 rounded-full",
                                  children: e.jsx(U, { className: "h-4 w-4" }),
                                }),
                              ],
                            }),
                          }),
                          e.jsx("div", {
                            className: "p-4",
                            children: e.jsx(n, {
                              className: "w-full",
                              children: "Set Goal",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx(g, {
                  title: "Popover",
                  description: "Conteúdo flutuante posicionado",
                  code: `<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>`,
                  children: e.jsxs(Ua, {
                    children: [
                      e.jsx(Wa, {
                        asChild: !0,
                        children: e.jsx(n, {
                          variant: "outline",
                          children: "Open Popover",
                        }),
                      }),
                      e.jsx(Qa, {
                        className: "w-80",
                        children: e.jsxs("div", {
                          className: "grid gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx("h4", {
                                  className: "font-medium leading-none",
                                  children: "Dimensions",
                                }),
                                e.jsx("p", {
                                  className: "text-sm text-muted-foreground",
                                  children: "Set the dimensions for the layer.",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "grid gap-2",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "grid grid-cols-3 items-center gap-4",
                                  children: [
                                    e.jsx(M, {
                                      htmlFor: "width",
                                      children: "Width",
                                    }),
                                    e.jsx(E, {
                                      id: "width",
                                      defaultValue: "100%",
                                      className: "col-span-2 h-8",
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "grid grid-cols-3 items-center gap-4",
                                  children: [
                                    e.jsx(M, {
                                      htmlFor: "maxWidth",
                                      children: "Max. width",
                                    }),
                                    e.jsx(E, {
                                      id: "maxWidth",
                                      defaultValue: "300px",
                                      className: "col-span-2 h-8",
                                    }),
                                  ],
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
          }),
        ],
      }),
    ],
  });
}
const Vr = [
    {
      category: "Consistência Visual",
      items: [
        {
          name: "Cores consistentes com tokens semânticos",
          status: "required",
        },
        {
          name: "Espaçamento uniforme usando escala definida",
          status: "required",
        },
        {
          name: "Tipografia padronizada com hierarquia clara",
          status: "required",
        },
        { name: "Bordas e sombras consistentes", status: "required" },
        { name: "Estados interativos bem definidos", status: "required" },
      ],
    },
    {
      category: "Performance",
      items: [
        {
          name: "CSS mínimo - use apenas estilos necessários",
          status: "recommended",
        },
        {
          name: "Componentes lazy - carregue sob demanda",
          status: "recommended",
        },
        { name: "Imagens otimizadas (WebP, AVIF)", status: "recommended" },
        {
          name: "Fontes otimizadas com font-display: swap",
          status: "recommended",
        },
        {
          name: "Animações suaves (transform, opacity)",
          status: "recommended",
        },
      ],
    },
    {
      category: "Acessibilidade (WCAG 2.1 AA)",
      items: [
        {
          name: "Contraste mínimo 4.5:1 para texto normal",
          status: "required",
        },
        {
          name: "Navegação por teclado para todos elementos",
          status: "required",
        },
        { name: "ARIA labels para elementos interativos", status: "required" },
        { name: "Skip links para navegação rápida", status: "recommended" },
        { name: "Leitores de tela compatíveis", status: "required" },
      ],
    },
    {
      category: "Manutenção",
      items: [
        {
          name: "SemVer para componentes (major.minor.patch)",
          status: "recommended",
        },
        {
          name: "Changelog para mudanças significativas",
          status: "recommended",
        },
        {
          name: "Deprecation notice para componentes antigos",
          status: "recommended",
        },
        {
          name: "Migration guide para breaking changes",
          status: "recommended",
        },
      ],
    },
  ],
  Hr = {
    required: e.jsx(b, { className: "h-4 w-4 text-green-500" }),
    recommended: e.jsx(Ms, { className: "h-4 w-4 text-blue-500" }),
  },
  qr = {
    required: e.jsx(m, {
      variant: "default",
      className: "text-xs",
      children: "Obrigatório",
    }),
    recommended: e.jsx(m, {
      variant: "secondary",
      className: "text-xs",
      children: "Recomendado",
    }),
  };
function Ns() {
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "Melhores Práticas",
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2",
            children:
              "Checklists e recomendações para implementação consistente",
          }),
        ],
      }),
      e.jsx("div", {
        className: "grid gap-6",
        children: Vr.map((s) =>
          e.jsxs(
            x,
            {
              children: [
                e.jsxs(j, {
                  children: [
                    e.jsx(f, { children: s.category }),
                    e.jsxs(A, {
                      children: [
                        s.items.filter((r) => r.status === "required").length,
                        " obrigatórios,",
                        " ",
                        s.items.filter((r) => r.status === "recommended")
                          .length,
                        " recomendados",
                      ],
                    }),
                  ],
                }),
                e.jsx(h, {
                  children: e.jsx("ul", {
                    className: "space-y-3",
                    children: s.items.map((r, c) =>
                      e.jsxs(
                        "li",
                        {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                Hr[r.status],
                                e.jsx("span", {
                                  className: "text-sm",
                                  children: r.name,
                                }),
                              ],
                            }),
                            qr[r.status],
                          ],
                        },
                        c,
                      ),
                    ),
                  }),
                }),
              ],
            },
            s.category,
          ),
        ),
      }),
      e.jsxs(x, {
        className:
          "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20",
        children: [
          e.jsx(j, {
            children: e.jsx(f, { children: "Recursos e Ferramentas" }),
          }),
          e.jsx(h, {
            children: e.jsxs("div", {
              className: "grid md:grid-cols-3 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "font-medium mb-2",
                      children: "Ferramentas de Design",
                    }),
                    e.jsxs("ul", {
                      className: "text-sm text-muted-foreground space-y-1",
                      children: [
                        e.jsx("li", {
                          children: "Figma — Design e prototipagem",
                        }),
                        e.jsx("li", {
                          children: "Storybook — Documentação de componentes",
                        }),
                        e.jsx("li", { children: "Chromatic — Visual testing" }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "font-medium mb-2",
                      children: "Ferramentas de Validação",
                    }),
                    e.jsxs("ul", {
                      className: "text-sm text-muted-foreground space-y-1",
                      children: [
                        e.jsx("li", {
                          children: "WAVE — Teste de acessibilidade",
                        }),
                        e.jsx("li", {
                          children: "Color Contrast Checker — Contraste",
                        }),
                        e.jsx("li", {
                          children: "Lighthouse — Performance e A11y",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("h4", {
                      className: "font-medium mb-2",
                      children: "Recursos de Aprendizado",
                    }),
                    e.jsxs("ul", {
                      className: "text-sm text-muted-foreground space-y-1",
                      children: [
                        e.jsx("li", {
                          children: "Material Design — Guidelines Google",
                        }),
                        e.jsx("li", {
                          children: "Apple HIG — Guidelines Apple",
                        }),
                        e.jsx("li", {
                          children: "A11y Project — Recursos de acessibilidade",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const $r = (s) => {
    switch (s) {
      case "csv":
        return Q;
      case "excel":
        return xr;
      case "json":
        return mr;
      default:
        return Q;
    }
  },
  _r = (s) => {
    switch (s) {
      case "valid":
        return {
          icon: b,
          color: "text-emerald-600",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-200",
          label: "Válido",
        };
      case "invalid":
        return {
          icon: R,
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          label: "Inválido",
        };
      case "warning":
        return {
          icon: L,
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          label: "Atenção",
        };
      default:
        return {
          icon: R,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          label: "Pendente",
        };
    }
  },
  vs = (s) => {
    if (s === 0) return "0 Bytes";
    const r = 1024,
      c = ["Bytes", "KB", "MB"],
      o = Math.floor(Math.log(s) / Math.log(r));
    return parseFloat((s / Math.pow(r, o)).toFixed(2)) + " " + c[o];
  };
function ys({
  file: s,
  variant: r = "default",
  onPreview: c,
  onMapColumns: o,
  onDelete: d,
}) {
  const i = $r(s.type),
    t = _r(s.validationStatus),
    l = s.totalColumns
      ? Math.round(((s.mappedColumns || 0) / s.totalColumns) * 100)
      : 0;
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", t.borderColor),
        children: e.jsx(h, {
          className: "p-3",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a("p-2 rounded-lg", t.bgColor),
                children: e.jsx(i, { className: a("h-4 w-4", t.color) }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium truncate",
                    children: s.name,
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground",
                    children: [
                      s.rowCount.toLocaleString(),
                      " linhas · ",
                      vs(s.size),
                    ],
                  }),
                ],
              }),
              e.jsx(m, {
                variant: "outline",
                className: a("text-xs", t.color),
                children: t.label,
              }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", t.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a("p-2.5 rounded-lg", t.bgColor),
                      children: e.jsx(i, { className: a("h-5 w-5", t.color) }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsx(f, { className: "text-base", children: s.name }),
                        e.jsxs("p", {
                          className: "text-sm text-muted-foreground",
                          children: [s.type.toUpperCase(), " · ", vs(s.size)],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: a(
                    "px-2 py-1 rounded-lg text-xs font-medium",
                    t.bgColor,
                    t.color,
                  ),
                  children: t.label,
                }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className:
                  "flex items-center gap-4 text-sm text-muted-foreground",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(us, { className: "h-4 w-4" }),
                      s.rowCount.toLocaleString(),
                      " linhas",
                    ],
                  }),
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(Q, { className: "h-4 w-4" }),
                      s.columnCount,
                      " colunas",
                    ],
                  }),
                  s.errors &&
                    s.errors.length > 0 &&
                    e.jsxs("span", {
                      className: "flex items-center gap-1 text-red-600",
                      children: [
                        e.jsx(R, { className: "h-4 w-4" }),
                        s.errors.length,
                        " erro(s)",
                      ],
                    }),
                ],
              }),
              s.totalColumns &&
                s.totalColumns > 0 &&
                e.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between text-sm",
                      children: [
                        e.jsx("span", {
                          className: "text-muted-foreground",
                          children: "Mapeamento",
                        }),
                        e.jsxs("span", {
                          className: "font-medium",
                          children: [s.mappedColumns || 0, "/", s.totalColumns],
                        }),
                      ],
                    }),
                    e.jsx(y, { value: l, className: "h-1.5" }),
                  ],
                }),
              s.errors &&
                s.errors.length > 0 &&
                e.jsx("div", {
                  className: "bg-red-50 border border-red-200 rounded-lg p-2.5",
                  children: e.jsxs("p", {
                    className: "text-xs text-red-600 line-clamp-2",
                    children: [
                      e.jsx(R, { className: "h-3 w-3 inline mr-1" }),
                      s.errors[0].message,
                    ],
                  }),
                }),
              e.jsxs("div", {
                className: "flex gap-2 pt-1",
                children: [
                  e.jsxs(n, {
                    variant: "outline",
                    size: "sm",
                    onClick: c,
                    className: "flex-1 h-8",
                    children: [
                      e.jsx($, { className: "h-4 w-4 mr-2" }),
                      "Preview",
                    ],
                  }),
                  s.validationStatus !== "valid" &&
                    e.jsxs(n, {
                      variant: "outline",
                      size: "sm",
                      onClick: o,
                      className: "flex-1 h-8",
                      children: [
                        e.jsx(us, { className: "h-4 w-4 mr-2" }),
                        "Mapear",
                      ],
                    }),
                  e.jsx(n, {
                    variant: "ghost",
                    size: "sm",
                    onClick: d,
                    className:
                      "h-8 text-red-600 hover:text-red-700 hover:bg-red-50",
                    children: e.jsx(or, { className: "h-4 w-4" }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const Kr = (s) => {
    switch (s) {
      case "numeric":
        return gr;
      case "text":
        return $e;
      case "date":
        return O;
      case "boolean":
        return ur;
      case "category":
        return z;
      default:
        return hr;
    }
  },
  ws = (s) => {
    switch (s) {
      case "numeric":
        return "Numérico";
      case "text":
        return "Texto";
      case "date":
        return "Data";
      case "boolean":
        return "Booleano";
      case "category":
        return "Categoria";
      default:
        return s;
    }
  },
  Gr = (s) => Math.round((s.completeness + s.uniqueness + s.validity) / 3),
  Ur = (s) =>
    s >= 90
      ? {
          color: "text-emerald-600",
          bg: "bg-emerald-50",
          border: "border-emerald-200",
        }
      : s >= 70
        ? {
            color: "text-yellow-600",
            bg: "bg-yellow-50",
            border: "border-yellow-200",
          }
        : { color: "text-red-600", bg: "bg-red-50", border: "border-red-200" };
function Wr({ column: s, variant: r = "default" }) {
  var i, t, l;
  const c = Kr(s.type),
    o = Gr(s.quality),
    d = Ur(o);
  return r === "compact"
    ? e.jsx(x, {
        className: "overflow-hidden",
        children: e.jsx(h, {
          className: "p-3",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: "p-2 bg-muted rounded-lg",
                children: e.jsx(c, {
                  className: "h-4 w-4 text-muted-foreground",
                }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium truncate",
                    children: s.name,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mt-0.5",
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-muted-foreground",
                        children: ws(s.type),
                      }),
                      e.jsxs("span", {
                        className: a("text-xs font-medium", d.color),
                        children: ["Q: ", o, "%"],
                      }),
                    ],
                  }),
                ],
              }),
              s.mappedTo &&
                e.jsxs(m, {
                  variant: "outline",
                  className:
                    "text-xs bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0",
                  children: [
                    e.jsx(b, { className: "h-3 w-3 mr-1" }),
                    s.mappedTo,
                  ],
                }),
            ],
          }),
        }),
      })
    : e.jsx(x, {
        className: a("overflow-hidden border-l-4", d.border),
        children: e.jsxs(h, {
          className: "p-4 space-y-3",
          children: [
            e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: "p-2 bg-muted rounded-lg",
                      children: e.jsx(c, {
                        className: "h-5 w-5 text-muted-foreground",
                      }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsx("h4", {
                          className: "font-semibold text-sm",
                          children: s.name,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: ws(s.type),
                        }),
                      ],
                    }),
                  ],
                }),
                s.mappedTo
                  ? e.jsxs(m, {
                      variant: "outline",
                      className:
                        "bg-emerald-50 text-emerald-700 border-emerald-200 text-xs shrink-0",
                      children: [
                        e.jsx(S, { className: "h-3 w-3 mr-1" }),
                        s.mappedTo,
                      ],
                    })
                  : e.jsx(m, {
                      variant: "outline",
                      className: "text-xs",
                      children: "Não mapeado",
                    }),
              ],
            }),
            e.jsxs("div", {
              className: "space-y-1.5",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsx("span", {
                      className: "text-xs text-muted-foreground",
                      children: "Qualidade",
                    }),
                    e.jsxs("span", {
                      className: a("text-sm font-bold", d.color),
                      children: [o, "%"],
                    }),
                  ],
                }),
                e.jsx(y, {
                  value: o,
                  className: a(
                    "h-1.5",
                    o >= 90
                      ? "[&>div]:bg-emerald-500"
                      : o >= 70
                        ? "[&>div]:bg-yellow-500"
                        : "[&>div]:bg-red-500",
                  ),
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 text-xs text-muted-foreground",
                  children: [
                    e.jsxs("span", {
                      children: ["C: ", s.quality.completeness, "%"],
                    }),
                    e.jsxs("span", {
                      children: ["U: ", s.quality.uniqueness, "%"],
                    }),
                    e.jsxs("span", {
                      children: ["V: ", s.quality.validity, "%"],
                    }),
                  ],
                }),
              ],
            }),
            s.type === "numeric" &&
              s.stats &&
              e.jsxs("div", {
                className: "flex items-center gap-3 text-sm border-t pt-2",
                children: [
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Mín: ",
                      e.jsx("strong", {
                        children:
                          ((i = s.stats.min) == null
                            ? void 0
                            : i.toLocaleString("pt-BR", {
                                maximumFractionDigits: 1,
                              })) || "-",
                      }),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Máx: ",
                      e.jsx("strong", {
                        children:
                          ((t = s.stats.max) == null
                            ? void 0
                            : t.toLocaleString("pt-BR", {
                                maximumFractionDigits: 1,
                              })) || "-",
                      }),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Méd: ",
                      e.jsx("strong", {
                        children:
                          ((l = s.stats.mean) == null
                            ? void 0
                            : l.toLocaleString("pt-BR", {
                                maximumFractionDigits: 1,
                              })) || "-",
                      }),
                    ],
                  }),
                ],
              }),
            e.jsxs("div", {
              className: "flex flex-wrap gap-1 pt-1 border-t",
              children: [
                s.sampleValues
                  .slice(0, 3)
                  .map((p, u) =>
                    e.jsx(
                      m,
                      {
                        variant: "secondary",
                        className: "text-xs font-normal",
                        children:
                          p.length > 15 ? p.substring(0, 15) + "..." : p,
                      },
                      u,
                    ),
                  ),
                s.sampleValues.length > 3 &&
                  e.jsxs(m, {
                    variant: "outline",
                    className: "text-xs",
                    children: ["+", s.sampleValues.length - 3],
                  }),
              ],
            }),
          ],
        }),
      });
}
const Qr = (s) => {
    switch (s) {
      case "published":
        return {
          color: "bg-emerald-100 text-emerald-800 border-emerald-200",
          label: "Publicado",
        };
      case "draft":
        return {
          color: "bg-yellow-100 text-yellow-800 border-yellow-200",
          label: "Rascunho",
        };
      case "archived":
        return {
          color: "bg-gray-100 text-gray-800 border-gray-200",
          label: "Arquivado",
        };
      default:
        return { color: "bg-gray-100 text-gray-800 border-gray-200", label: s };
    }
  },
  Cs = (s) =>
    new Date(s).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
function Zr({
  report: s,
  variant: r = "grid",
  onView: c,
  onEdit: o,
  onShare: d,
  onDuplicate: i,
}) {
  const t = Qr(s.status),
    l = [...new Set(s.blockTypes)];
  return r === "list"
    ? e.jsx(x, {
        className: "overflow-hidden hover:shadow-md transition-shadow",
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              s.thumbnail
                ? e.jsx("div", {
                    className:
                      "w-12 h-12 rounded-lg bg-cover bg-center flex-shrink-0",
                    style: { backgroundImage: `url(${s.thumbnail})` },
                  })
                : e.jsx("div", {
                    className:
                      "w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0",
                    children: e.jsx(Q, { className: "h-6 w-6 text-primary" }),
                  }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-0.5",
                    children: [
                      e.jsx("h3", {
                        className: "font-semibold text-sm truncate",
                        children: s.title,
                      }),
                      e.jsx(m, {
                        variant: "outline",
                        className: a("text-xs px-1", t.color),
                        children: t.label,
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground truncate",
                    children: s.subtitle,
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-3 mt-1 text-xs text-muted-foreground",
                    children: [
                      e.jsxs("span", { children: [s.blockCount, " blocos"] }),
                      s.aiInsights > 0 &&
                        e.jsxs("span", {
                          className: "flex items-center gap-1 text-purple-600",
                          children: [
                            e.jsx(Z, { className: "h-3 w-3" }),
                            s.aiInsights,
                            " AI",
                          ],
                        }),
                      e.jsx("span", { children: Cs(s.updatedAt) }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  e.jsxs(n, {
                    variant: "ghost",
                    size: "sm",
                    onClick: c,
                    children: [e.jsx($, { className: "h-4 w-4 mr-1" }), "Ver"],
                  }),
                  e.jsx(n, {
                    variant: "ghost",
                    size: "icon",
                    onClick: d,
                    children: e.jsx(Ge, { className: "h-4 w-4" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className:
          "overflow-hidden hover:shadow-lg transition-all duration-300 group",
        children: [
          e.jsxs("div", {
            className:
              "relative h-28 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center",
            children: [
              s.thumbnail
                ? e.jsx("div", {
                    className: "absolute inset-0 bg-cover bg-center",
                    style: { backgroundImage: `url(${s.thumbnail})` },
                  })
                : e.jsx(Q, { className: "h-10 w-10 text-primary/40" }),
              e.jsx(m, {
                className: a("absolute top-2 left-2 text-xs", t.color),
                children: t.label,
              }),
              e.jsx("div", {
                className:
                  "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2",
                children: e.jsxs(n, {
                  size: "sm",
                  onClick: c,
                  className: "bg-white text-black hover:bg-white/90",
                  children: [e.jsx($, { className: "h-4 w-4 mr-2" }), "Ver"],
                }),
              }),
            ],
          }),
          e.jsxs(j, {
            className: "pb-2",
            children: [
              e.jsx(f, {
                className: "text-base line-clamp-1",
                children: s.title,
              }),
              e.jsx(A, {
                className: "text-xs line-clamp-1",
                children: s.subtitle,
              }),
            ],
          }),
          e.jsxs(h, {
            className: "space-y-2",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-1",
                children: [
                  l
                    .slice(0, 3)
                    .map((p, u) =>
                      e.jsx(
                        m,
                        {
                          variant: "outline",
                          className: "text-xs font-normal",
                          children: p,
                        },
                        u,
                      ),
                    ),
                  l.length > 3 &&
                    e.jsxs(m, {
                      variant: "outline",
                      className: "text-xs",
                      children: ["+", l.length - 3],
                    }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between text-xs text-muted-foreground",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(O, { className: "h-3 w-3" }),
                      Cs(s.updatedAt),
                    ],
                  }),
                  e.jsxs("span", { children: [s.blockCount, " blocos"] }),
                ],
              }),
            ],
          }),
          e.jsxs(T, {
            className: "pt-0 flex justify-between",
            children: [
              e.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: s.category,
              }),
              e.jsx("div", {
                className: "flex items-center gap-1",
                children: e.jsx(n, {
                  variant: "ghost",
                  size: "icon",
                  className: "h-7 w-7",
                  onClick: i,
                  children: e.jsx(Ke, { className: "h-4 w-4" }),
                }),
              }),
            ],
          }),
        ],
      });
}
const Jr = (s) => {
    switch (s.toLowerCase()) {
      case "varejo":
      case "ecommerce":
        return pr;
      case "serviços":
      case "consultoria":
        return gs;
      case "manufatura":
        return z;
      case "saúde":
        return qe;
      default:
        return gs;
    }
  },
  Xr = (s) => {
    switch (s.toLowerCase()) {
      case "varejo":
      case "ecommerce":
        return "bg-blue-500";
      case "serviços":
      case "consultoria":
        return "bg-purple-500";
      case "manufatura":
        return "bg-orange-500";
      case "saúde":
        return "bg-emerald-500";
      default:
        return "bg-gray-500";
    }
  };
function Yr({
  template: s,
  variant: r = "default",
  onSelect: c,
  onPreview: o,
}) {
  const d = Jr(s.industry),
    i = Xr(s.industry);
  return r === "compact"
    ? e.jsx(x, {
        className:
          "overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
        onClick: c,
        children: e.jsx(h, {
          className: "p-3",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a(
                  "p-2 rounded-lg",
                  i.replace("bg-", "bg-opacity-20 bg-"),
                ),
                children: e.jsx(d, { className: "h-4 w-4 text-white" }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className: "text-sm font-medium truncate",
                    children: s.name,
                  }),
                  e.jsx("p", {
                    className: "text-xs text-muted-foreground",
                    children: s.category,
                  }),
                ],
              }),
              s.isSystem &&
                e.jsxs(m, {
                  variant: "outline",
                  className:
                    "text-xs bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0",
                  children: [
                    e.jsx(b, { className: "h-3 w-3 mr-1" }),
                    "Sistema",
                  ],
                }),
            ],
          }),
        }),
      })
    : r === "recommendation"
      ? e.jsxs(x, {
          className:
            "overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow",
          children: [
            e.jsx(j, {
              className: "pb-3",
              children: e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className: a("p-2 rounded-lg", i),
                        children: e.jsx(d, { className: "h-5 w-5 text-white" }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx(f, {
                            className: "text-base",
                            children: s.name,
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [s.industry, " · ", s.category],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.matchScore !== void 0 &&
                    e.jsxs("div", {
                      className: "text-center shrink-0",
                      children: [
                        e.jsxs("span", {
                          className: "text-xl font-bold text-primary",
                          children: [s.matchScore, "%"],
                        }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "match",
                        }),
                      ],
                    }),
                ],
              }),
            }),
            e.jsxs(h, {
              className: "space-y-3",
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground line-clamp-2",
                  children: s.description,
                }),
                s.matchScore !== void 0 &&
                  e.jsx(y, { value: s.matchScore, className: "h-1.5" }),
                e.jsxs("div", {
                  className: "flex flex-wrap gap-1",
                  children: [
                    s.expectedKPIs
                      .slice(0, 3)
                      .map((t, l) =>
                        e.jsx(
                          m,
                          {
                            variant: "secondary",
                            className: "text-xs font-normal",
                            children: t,
                          },
                          l,
                        ),
                      ),
                    s.expectedKPIs.length > 3 &&
                      e.jsxs(m, {
                        variant: "outline",
                        className: "text-xs",
                        children: ["+", s.expectedKPIs.length - 3],
                      }),
                  ],
                }),
              ],
            }),
            e.jsxs(T, {
              className: "flex justify-between",
              children: [
                e.jsxs("div", {
                  className:
                    "flex items-center gap-3 text-xs text-muted-foreground",
                  children: [
                    e.jsxs("span", {
                      className: "flex items-center gap-1",
                      children: [
                        e.jsx(He, {
                          className: "h-3 w-3 fill-yellow-400 text-yellow-400",
                        }),
                        s.rating.toFixed(1),
                      ],
                    }),
                    e.jsxs("span", { children: [s.usageCount, " usos"] }),
                  ],
                }),
                e.jsxs(n, {
                  size: "sm",
                  onClick: c,
                  children: ["Usar", e.jsx(I, { className: "h-4 w-4 ml-2" })],
                }),
              ],
            }),
          ],
        })
      : e.jsxs(x, {
          className:
            "overflow-hidden hover:shadow-lg transition-all duration-300",
          children: [
            e.jsx(j, {
              className: "pb-2",
              children: e.jsxs("div", {
                className: "flex items-start justify-between",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("div", {
                        className: a("p-2.5 rounded-xl", i),
                        children: e.jsx(d, { className: "h-5 w-5 text-white" }),
                      }),
                      e.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          e.jsx(f, {
                            className: "text-base",
                            children: s.name,
                          }),
                          e.jsxs("p", {
                            className: "text-xs text-muted-foreground",
                            children: [s.industry, " · ", s.category],
                          }),
                        ],
                      }),
                    ],
                  }),
                  s.isSystem &&
                    e.jsxs(m, {
                      variant: "outline",
                      className:
                        "text-xs bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0",
                      children: [
                        e.jsx(b, { className: "h-3 w-3 mr-1" }),
                        "Sistema",
                      ],
                    }),
                ],
              }),
            }),
            e.jsxs(h, {
              className: "space-y-3",
              children: [
                e.jsx("p", {
                  className: "text-sm text-muted-foreground line-clamp-2",
                  children: s.description,
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    [...Array(5)].map((t, l) =>
                      e.jsx(
                        He,
                        {
                          className: a(
                            "h-3.5 w-3.5",
                            l < Math.floor(s.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300",
                          ),
                        },
                        l,
                      ),
                    ),
                    e.jsxs("span", {
                      className: "text-xs text-muted-foreground ml-1",
                      children: [
                        s.rating.toFixed(1),
                        " · ",
                        s.ratingCount,
                        " avaliações",
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex flex-wrap gap-1",
                  children: [
                    s.expectedKPIs
                      .slice(0, 4)
                      .map((t, l) =>
                        e.jsx(
                          m,
                          {
                            variant: "secondary",
                            className: "text-xs font-normal",
                            children: t,
                          },
                          l,
                        ),
                      ),
                    s.expectedKPIs.length > 4 &&
                      e.jsxs(m, {
                        variant: "outline",
                        className: "text-xs",
                        children: ["+", s.expectedKPIs.length - 4],
                      }),
                  ],
                }),
                e.jsx("span", {
                  className:
                    "text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded",
                  children: s.code,
                }),
              ],
            }),
            e.jsxs(T, {
              className: "flex justify-between",
              children: [
                e.jsxs("div", {
                  className: "text-xs text-muted-foreground",
                  children: [s.usageCount, " usos"],
                }),
                e.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(n, {
                      variant: "ghost",
                      size: "sm",
                      onClick: o,
                      className: "h-8",
                      children: "Preview",
                    }),
                    e.jsxs(n, {
                      size: "sm",
                      onClick: c,
                      className: "h-8",
                      children: [
                        e.jsx(k, { className: "h-4 w-4 mr-2" }),
                        "Usar",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
}
const et = (s) => {
    switch (s) {
      case "finance":
        return zs;
      case "sales":
        return qe;
      case "marketing":
        return Rs;
      case "operations":
        return k;
      case "hr":
        return qe;
      case "strategy":
        return S;
      default:
        return z;
    }
  },
  st = (s) => {
    switch (s) {
      case "finance":
        return "bg-emerald-500";
      case "sales":
        return "bg-blue-500";
      case "marketing":
        return "bg-purple-500";
      case "operations":
        return "bg-orange-500";
      case "hr":
        return "bg-pink-500";
      case "strategy":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  },
  at = (s) => {
    switch (s) {
      case "good":
        return "border-emerald-200";
      case "warning":
        return "border-yellow-200";
      case "critical":
        return "border-red-200";
      default:
        return "";
    }
  },
  rt = (s) => {
    switch (s) {
      case "good":
        return {
          color: "bg-emerald-50 text-emerald-700 border-emerald-200",
          label: "Bom",
        };
      case "warning":
        return {
          color: "bg-yellow-50 text-yellow-700 border-yellow-200",
          label: "Atenção",
        };
      case "critical":
        return {
          color: "bg-red-50 text-red-700 border-red-200",
          label: "Crítico",
        };
      default:
        return { color: "bg-gray-50 text-gray-700", label: s };
    }
  },
  tt = (s) => {
    switch (s) {
      case "up":
        return "text-emerald-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  },
  le = (s, r) =>
    r === "%"
      ? `${s.toFixed(1)}%`
      : r === "R$" || r === "$"
        ? s >= 1e6
          ? `${r}${(s / 1e6).toFixed(1)}M`
          : s >= 1e3
            ? `${r}${(s / 1e3).toFixed(1)}K`
            : `${r}${s.toLocaleString("pt-BR")}`
        : s >= 1e6
          ? `${(s / 1e6).toFixed(1)}M`
          : s >= 1e3
            ? `${(s / 1e3).toFixed(1)}K`
            : s.toLocaleString("pt-BR");
function lt({ data: s, colorClass: r }) {
  const c = Math.min(...s),
    d = Math.max(...s) - c || 1,
    i = s
      .map((l, p) => {
        const u = (p / (s.length - 1)) * 100,
          N = 100 - ((l - c) / d) * 100;
        return `${u},${N}`;
      })
      .join(" "),
    t = r.replace("bg-", "").replace("500", "");
  return e.jsx("svg", {
    viewBox: "0 0 100 100",
    className: "w-full h-10",
    preserveAspectRatio: "none",
    children: e.jsx("polyline", {
      fill: "none",
      stroke:
        t === "emerald"
          ? "#10b981"
          : t === "blue"
            ? "#3b82f6"
            : t === "purple"
              ? "#a855f7"
              : t === "orange"
                ? "#f97316"
                : t === "pink"
                  ? "#ec4899"
                  : t === "indigo"
                    ? "#6366f1"
                    : "#6b7280",
      strokeWidth: "2",
      points: i,
      vectorEffect: "non-scaling-stroke",
    }),
  });
}
function Be({
  kpi: s,
  variant: r = "default",
  showSparkline: c = !0,
  onDrillDown: o,
}) {
  const d = et(s.domain),
    i = st(s.domain),
    t = at(s.benchmark.current),
    l = rt(s.benchmark.current),
    p = tt(s.trend.direction),
    u = Math.min((s.value / s.benchmark.target) * 100, 100);
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", t),
        children: e.jsx(h, {
          className: "p-3",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx("div", {
                    className: a(
                      "w-8 h-8 rounded-lg flex items-center justify-center",
                      i,
                    ),
                    children: e.jsx(d, { className: "w-4 h-4 text-white" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-medium",
                        children: s.title,
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-1 text-xs",
                        children: [
                          e.jsxs("span", {
                            className: a(p),
                            children: [
                              s.trend.percentage > 0 ? "+" : "",
                              s.trend.percentage,
                              "%",
                            ],
                          }),
                          e.jsxs("span", {
                            className: "text-muted-foreground",
                            children: ["vs ", s.trend.period],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "text-right",
                children: [
                  e.jsx("p", {
                    className: "text-lg font-bold",
                    children: le(s.value, s.unit),
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-muted-foreground",
                    children: [le(s.benchmark.target, s.unit), " meta"],
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a(
          "overflow-hidden transition-all hover:shadow-md border-l-4 cursor-pointer",
          t,
        ),
        onClick: o,
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a(
                        "w-10 h-10 rounded-xl flex items-center justify-center",
                        i,
                      ),
                      children: e.jsx(d, { className: "w-5 h-5 text-white" }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx(f, { className: "text-base", children: s.title }),
                        e.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: s.code,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(m, {
                  variant: "outline",
                  className: a("text-xs", l.color),
                  children: l.label,
                }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-baseline justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className: "text-3xl font-bold",
                        children: le(s.value, s.unit),
                      }),
                      e.jsx("span", {
                        className: "text-sm text-muted-foreground ml-2",
                        children: "atual",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1",
                    children: [
                      s.trend.direction === "up"
                        ? e.jsx(B, { className: a("h-4 w-4", p) })
                        : s.trend.direction === "down"
                          ? e.jsx(ue, { className: a("h-4 w-4", p) })
                          : e.jsx(Ue, { className: "h-4 w-4 text-gray-600" }),
                      e.jsxs("span", {
                        className: a("text-sm font-medium", p),
                        children: [
                          s.trend.percentage > 0 ? "+" : "",
                          s.trend.percentage,
                          "%",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c &&
                s.sparklineData.length > 0 &&
                e.jsx("div", {
                  className: "h-10 bg-muted/50 rounded-lg overflow-hidden",
                  children: e.jsx(lt, { data: s.sparklineData, colorClass: i }),
                }),
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between text-xs",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Progresso vs Meta",
                      }),
                      e.jsxs("span", {
                        className: "font-medium",
                        children: [Math.round(u), "%"],
                      }),
                    ],
                  }),
                  e.jsx(y, { value: u, className: "h-2" }),
                  e.jsxs("div", {
                    className:
                      "flex items-center justify-between text-xs text-muted-foreground",
                    children: [
                      e.jsx("span", { children: "0" }),
                      e.jsxs("span", {
                        children: [le(s.benchmark.target, s.unit), " meta"],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center justify-between pt-2 border-t text-xs text-muted-foreground",
                children: [
                  e.jsxs("span", { children: ["Atualizado ", s.lastUpdated] }),
                  o &&
                    e.jsxs("span", {
                      className: "flex items-center text-primary font-medium",
                      children: [
                        "Detalhes",
                        e.jsx(I, { className: "h-3 w-3 ml-1" }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      });
}
const it = (s) => {
  switch (s) {
    case "on-track":
      return {
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        progressColor: "bg-emerald-500",
        label: "No Caminho",
      };
    case "at-risk":
      return {
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        progressColor: "bg-yellow-500",
        label: "Em Risco",
      };
    case "off-track":
      return {
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        progressColor: "bg-red-500",
        label: "Fora",
      };
    default:
      return {
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        progressColor: "bg-gray-500",
        label: s,
      };
  }
};
function nt({ domain: s, onViewDetails: r }) {
  const c = s.icon,
    o = it(s.status),
    d = s.trend > 0 ? B : ue,
    i = s.trend > 0 ? "text-emerald-600" : "text-red-600";
  return e.jsxs(x, {
    className: "overflow-hidden",
    children: [
      e.jsx(j, {
        className: "pb-2",
        children: e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx("div", {
                  className: a("p-2.5 rounded-xl", s.color),
                  children: e.jsx(c, { className: "h-5 w-5 text-white" }),
                }),
                e.jsx("div", {
                  className: "flex-1",
                  children: e.jsx(f, {
                    className: "text-lg",
                    children: s.name,
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "text-right",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1 justify-end",
                  children: [
                    e.jsx(d, { className: a("h-4 w-4", i) }),
                    e.jsxs("span", {
                      className: a("text-sm font-bold", i),
                      children: [s.trend > 0 ? "+" : "", s.trend, "%"],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "text-xs text-muted-foreground",
                  children: "vs. anterior",
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsxs(h, {
        className: "space-y-3",
        children: [
          e.jsxs("div", {
            className: "space-y-1.5",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsx("span", {
                    className: "text-sm text-muted-foreground",
                    children: "Score de Saúde",
                  }),
                  e.jsx("span", {
                    className: a(
                      "text-2xl font-bold",
                      s.healthScore >= 80
                        ? "text-emerald-600"
                        : s.healthScore >= 60
                          ? "text-yellow-600"
                          : "text-red-600",
                    ),
                    children: s.healthScore,
                  }),
                ],
              }),
              e.jsx(y, {
                value: s.healthScore,
                className: a("h-2", `[&>div]:${o.progressColor}`),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex items-center justify-between text-sm",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(z, { className: "h-4 w-4 text-muted-foreground" }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [s.metrics, " métricas"],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: a(
                  "flex items-center gap-2 px-2 py-1 rounded-lg",
                  s.criticalCount > 0 ? "bg-red-50" : "bg-emerald-50",
                ),
                children: [
                  e.jsx(S, {
                    className: a(
                      "h-4 w-4",
                      s.criticalCount > 0 ? "text-red-500" : "text-emerald-500",
                    ),
                  }),
                  e.jsxs("span", {
                    className: a(
                      "font-medium",
                      s.criticalCount > 0 ? "text-red-600" : "text-emerald-600",
                    ),
                    children: [s.criticalCount, " críticas"],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs(n, {
            variant: "outline",
            size: "sm",
            className: "w-full",
            onClick: r,
            children: [e.jsx($, { className: "h-4 w-4 mr-2" }), "Ver Detalhes"],
          }),
        ],
      }),
    ],
  });
}
const ct = (s) => {
  switch (s) {
    case "critical":
      return {
        icon: We,
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-300",
        label: "Crítico",
      };
    case "high":
      return {
        icon: L,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-300",
        label: "Alto",
      };
    case "medium":
      return {
        icon: R,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-300",
        label: "Médio",
      };
    default:
      return {
        icon: ge,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-300",
        label: "Baixo",
      };
  }
};
function Ts({ confidence: s }) {
  const r =
    s >= 80
      ? "bg-emerald-100 text-emerald-700 border-emerald-200"
      : s >= 60
        ? "bg-yellow-100 text-yellow-700 border-yellow-200"
        : "bg-orange-100 text-orange-700 border-orange-200";
  return e.jsxs("div", {
    className: a("px-2 py-1 rounded-lg border text-center", r),
    children: [
      e.jsxs("span", { className: "text-lg font-bold", children: [s, "%"] }),
      e.jsx("p", { className: "text-xs opacity-75", children: "confiança" }),
    ],
  });
}
function dt({
  diagnostic: s,
  variant: r = "default",
  onCreatePriority: c,
  onViewDetails: o,
}) {
  const [d, i] = P.useState(!1),
    t = ct(s.severity),
    l = t.icon;
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", t.borderColor),
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a("p-2 rounded-lg", t.bgColor),
                children: e.jsx(l, { className: a("h-4 w-4", t.color) }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className: "font-medium truncate",
                    children: s.title,
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mt-1",
                    children: [
                      e.jsx(m, {
                        variant: "outline",
                        className: a("text-xs", t.color),
                        children: t.label,
                      }),
                      e.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          s.causes.length,
                          " causas • ",
                          s.confidence,
                          "% confiança",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Ts, { confidence: s.confidence }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", t.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a("p-2.5 rounded-xl", t.bgColor),
                      children: e.jsx(l, { className: a("h-5 w-5", t.color) }),
                    }),
                    e.jsx("div", {
                      className: "flex-1",
                      children: e.jsx(f, {
                        className: "text-base",
                        children: s.title,
                      }),
                    }),
                  ],
                }),
                e.jsx(Ts, { confidence: s.confidence }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: s.description,
              }),
              e.jsx("div", {
                className: "flex flex-wrap gap-1",
                children: s.affectedDomains.map((p, u) =>
                  e.jsx(
                    m,
                    {
                      variant: "outline",
                      className: "text-xs font-normal",
                      children: p,
                    },
                    u,
                  ),
                ),
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-4 text-sm text-muted-foreground",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(S, { className: "h-4 w-4" }),
                      s.causes.length,
                      " causas",
                    ],
                  }),
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(ge, { className: "h-4 w-4" }),
                      s.implications.length,
                      " implicações",
                    ],
                  }),
                ],
              }),
              e.jsxs(J, {
                open: d,
                onOpenChange: i,
                children: [
                  e.jsx(X, {
                    asChild: !0,
                    children: e.jsxs(n, {
                      variant: "ghost",
                      className:
                        "w-full justify-between h-auto py-2 px-0 hover:bg-transparent",
                      children: [
                        e.jsx("span", {
                          className: "text-sm text-muted-foreground",
                          children: "Ver detalhes completos",
                        }),
                        d
                          ? e.jsx(pe, { className: "h-4 w-4" })
                          : e.jsx(_, { className: "h-4 w-4" }),
                      ],
                    }),
                  }),
                  e.jsxs(Y, {
                    className: "space-y-4",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-medium",
                            children: "Causas Identificadas",
                          }),
                          s.causes.map((p, u) =>
                            e.jsxs(
                              "div",
                              {
                                className: "bg-muted rounded-lg p-3",
                                children: [
                                  e.jsxs("p", {
                                    className: "text-sm font-medium",
                                    children: [u + 1, ". ", p.description],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "text-xs text-muted-foreground mt-1",
                                    children: ["Evidência: ", p.evidence],
                                  }),
                                  e.jsxs(m, {
                                    variant: "outline",
                                    className: "text-xs mt-2",
                                    children: [
                                      e.jsx(z, { className: "h-3 w-3 mr-1" }),
                                      p.relatedKPI,
                                    ],
                                  }),
                                ],
                              },
                              u,
                            ),
                          ),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-medium",
                            children: "Implicações",
                          }),
                          e.jsx("ul", {
                            className: "space-y-1",
                            children: s.implications.map((p, u) =>
                              e.jsxs(
                                "li",
                                {
                                  className: "flex items-start gap-2 text-sm",
                                  children: [
                                    e.jsx(I, {
                                      className:
                                        "h-4 w-4 text-muted-foreground flex-shrink-0 mt-0.5",
                                    }),
                                    e.jsx("span", { children: p }),
                                  ],
                                },
                                u,
                              ),
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
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsx("span", {
                className: "text-xs text-muted-foreground",
                children: new Date(s.detectedAt).toLocaleDateString("pt-BR"),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx(n, {
                    variant: "outline",
                    size: "sm",
                    onClick: o,
                    className: "h-8",
                    children: "Detalhes",
                  }),
                  e.jsxs(n, {
                    size: "sm",
                    onClick: c,
                    className: "h-8",
                    children: [
                      e.jsx(U, { className: "h-4 w-4 mr-2" }),
                      "Criar Prioridade",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const ot = (s) => {
  switch (s) {
    case "trend":
      return {
        icon: B,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        label: "Tendência",
      };
    case "anomaly":
      return {
        icon: L,
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        label: "Anomalia",
      };
    case "correlation":
      return {
        icon: fr,
        color: "text-purple-600",
        bgColor: "bg-purple-50",
        borderColor: "border-purple-200",
        label: "Correlação",
      };
    case "prediction":
      return {
        icon: jr,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        label: "Previsão",
      };
    case "recommendation":
      return {
        icon: ge,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        label: "Recomendação",
      };
    default:
      return {
        icon: Z,
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        label: "Insight",
      };
  }
};
function mt({
  insight: s,
  variant: r = "default",
  onExplore: c,
  onDismiss: o,
}) {
  const d = ot(s.type),
    i = d.icon;
  return r === "compact"
    ? e.jsxs(x, {
        className: a(
          "overflow-hidden",
          d.borderColor,
          s.isNew && "ring-1 ring-primary/20",
        ),
        children: [
          s.isNew &&
            e.jsx("div", {
              className:
                "bg-primary text-primary-foreground text-xs font-medium px-3 py-0.5 text-center",
              children: "NOVO",
            }),
          e.jsx(h, {
            className: "p-3",
            children: e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx("div", {
                  className: a("p-2 rounded-lg", d.bgColor),
                  children: e.jsx(i, { className: a("h-4 w-4", d.color) }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "font-medium text-sm truncate",
                      children: s.title,
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2 mt-0.5",
                      children: [
                        e.jsx(m, {
                          variant: "outline",
                          className: a("text-xs px-1", d.color),
                          children: d.label,
                        }),
                        e.jsxs("span", {
                          className: "text-xs text-muted-foreground",
                          children: [s.confidence, "% confiança"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    : e.jsxs(x, {
        className: a(
          "overflow-hidden",
          d.borderColor,
          s.isNew && "ring-1 ring-primary/20",
        ),
        children: [
          s.isNew &&
            e.jsx("div", {
              className:
                "bg-primary text-primary-foreground text-xs font-medium px-3 py-1 text-center",
              children: "NOVO INSIGHT",
            }),
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start gap-3",
              children: [
                e.jsx("div", {
                  className: a("p-2.5 rounded-xl", d.bgColor),
                  children: e.jsx(i, { className: a("h-5 w-5", d.color) }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx(f, { className: "text-base", children: s.title }),
                    e.jsx("p", {
                      className:
                        "text-sm text-muted-foreground mt-0.5 line-clamp-2",
                      children: s.description,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: a(
                    "px-2 py-1 rounded-lg text-center shrink-0",
                    s.confidence >= 80
                      ? "bg-emerald-100 text-emerald-700"
                      : s.confidence >= 60
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-orange-100 text-orange-700",
                  ),
                  children: [
                    e.jsxs("span", {
                      className: "text-sm font-bold",
                      children: [s.confidence, "%"],
                    }),
                    e.jsx("p", {
                      className: "text-xs opacity-75",
                      children: "confiança",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              s.supportingData.length > 0 &&
                e.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: s.supportingData.map((t, l) =>
                    e.jsxs(
                      "div",
                      {
                        className: "bg-muted rounded-lg px-3 py-1.5",
                        children: [
                          e.jsx("p", {
                            className: "text-xs text-muted-foreground",
                            children: t.metric,
                          }),
                          e.jsxs("div", {
                            className: "flex items-baseline gap-1.5",
                            children: [
                              e.jsx("span", {
                                className: "font-semibold",
                                children: t.value.toLocaleString("pt-BR"),
                              }),
                              e.jsxs("span", {
                                className: a(
                                  "text-xs",
                                  t.change > 0
                                    ? "text-emerald-600"
                                    : t.change < 0
                                      ? "text-red-600"
                                      : "text-gray-600",
                                ),
                                children: [
                                  t.change > 0 ? "+" : "",
                                  t.change,
                                  "%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    ),
                  ),
                }),
              e.jsx("div", {
                className: "space-y-1",
                children: e.jsx(y, {
                  value: s.confidence,
                  className: a(
                    "h-1.5",
                    s.confidence >= 80
                      ? "[&>div]:bg-emerald-500"
                      : s.confidence >= 60
                        ? "[&>div]:bg-yellow-500"
                        : "[&>div]:bg-orange-500",
                  ),
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsx("span", {
                className: "text-xs text-muted-foreground",
                children: new Date(s.generatedAt).toLocaleDateString("pt-BR"),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  o &&
                    e.jsx(n, {
                      variant: "ghost",
                      size: "sm",
                      onClick: o,
                      className: "h-8",
                      children: "Ignorar",
                    }),
                  e.jsxs(n, {
                    size: "sm",
                    onClick: c,
                    className: "h-8",
                    children: [
                      "Explorar",
                      e.jsx(I, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const xt = (s) => {
    switch (s) {
      case "revenue":
        return {
          icon: zs,
          color: "bg-emerald-500",
          label: "Receita",
          borderColor: "border-emerald-300",
        };
      case "cost":
        return {
          icon: ue,
          color: "bg-blue-500",
          label: "Custo",
          borderColor: "border-blue-300",
        };
      case "efficiency":
        return {
          icon: k,
          color: "bg-orange-500",
          label: "Eficiência",
          borderColor: "border-orange-300",
        };
      case "growth":
        return {
          icon: B,
          color: "bg-purple-500",
          label: "Crescimento",
          borderColor: "border-purple-300",
        };
      default:
        return {
          icon: S,
          color: "bg-gray-500",
          label: "Oportunidade",
          borderColor: "border-gray-300",
        };
    }
  },
  ht = (s) => {
    switch (s) {
      case "low":
        return {
          color: "text-emerald-600",
          bgColor: "bg-emerald-100",
          label: "Baixo",
          value: 33,
        };
      case "medium":
        return {
          color: "text-yellow-600",
          bgColor: "bg-yellow-100",
          label: "Médio",
          value: 66,
        };
      case "high":
        return {
          color: "text-red-600",
          bgColor: "bg-red-100",
          label: "Alto",
          value: 100,
        };
      default:
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          label: s,
          value: 50,
        };
    }
  };
function ut({
  opportunity: s,
  variant: r = "default",
  onExplore: c,
  onCreateAction: o,
}) {
  const d = xt(s.category),
    i = ht(s.effort),
    t = d.icon;
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", d.borderColor),
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a(
                  "p-2 rounded-lg",
                  d.color.replace("bg-", "bg-opacity-20 bg-"),
                ),
                children: e.jsx(t, { className: "h-4 w-4 text-white" }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("p", {
                        className: "font-medium truncate",
                        children: s.title,
                      }),
                      s.quickWin &&
                        e.jsxs(m, {
                          variant: "outline",
                          className:
                            "text-xs bg-yellow-50 text-yellow-700 border-yellow-200",
                          children: [
                            e.jsx(k, { className: "h-3 w-3 mr-1" }),
                            "Quick Win",
                          ],
                        }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground truncate",
                    children: s.impact.financial
                      ? `R$ ${s.impact.financial.toLocaleString("pt-BR")}/ano`
                      : `+${s.impact.percentage}% em ${s.impact.metric}`,
                  }),
                ],
              }),
              e.jsx(n, { size: "sm", onClick: o, children: "Criar Ação" }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", d.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsx("div", {
              className: "flex items-start justify-between",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className: a("p-2.5 rounded-xl", d.color),
                    children: e.jsx(t, { className: "h-5 w-5 text-white" }),
                  }),
                  e.jsx("div", {
                    className: "flex-1",
                    children: e.jsxs("div", {
                      className: "flex items-center gap-2 flex-wrap",
                      children: [
                        e.jsx(f, { className: "text-base", children: s.title }),
                        s.quickWin &&
                          e.jsxs(m, {
                            variant: "outline",
                            className:
                              "text-xs bg-yellow-50 text-yellow-700 border-yellow-200",
                            children: [
                              e.jsx(k, { className: "h-3 w-3 mr-1" }),
                              "Quick Win",
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: s.description,
              }),
              s.impact.financial
                ? e.jsxs("div", {
                    className:
                      "bg-emerald-50 border border-emerald-200 rounded-lg p-3",
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-emerald-700 font-medium",
                        children: "Impacto Financeiro Estimado",
                      }),
                      e.jsxs("div", {
                        className: "flex items-baseline gap-2",
                        children: [
                          e.jsxs("span", {
                            className: "text-2xl font-bold text-emerald-700",
                            children: [
                              "R$ ",
                              s.impact.financial.toLocaleString("pt-BR"),
                            ],
                          }),
                          e.jsx("span", {
                            className: "text-sm text-emerald-600",
                            children: "/ano",
                          }),
                        ],
                      }),
                    ],
                  })
                : s.impact.percentage &&
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsxs("span", {
                        className: "text-lg font-bold text-emerald-600",
                        children: ["+", s.impact.percentage, "%"],
                      }),
                      e.jsxs("span", {
                        className: "text-sm text-muted-foreground",
                        children: ["em ", s.impact.metric],
                      }),
                    ],
                  }),
              e.jsxs("div", {
                className: "grid grid-cols-2 gap-3 text-sm",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("span", {
                        className:
                          "text-muted-foreground flex items-center gap-1",
                        children: [
                          e.jsx(F, { className: "h-4 w-4" }),
                          "Esforço: ",
                          e.jsx("strong", {
                            className: i.color,
                            children: i.label,
                          }),
                        ],
                      }),
                      e.jsx(y, { value: i.value, className: "h-1.5 mt-1" }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsxs("span", {
                        className: "text-muted-foreground",
                        children: [
                          "Confiança: ",
                          e.jsxs("strong", {
                            className:
                              s.confidence >= 80
                                ? "text-emerald-600"
                                : s.confidence >= 60
                                  ? "text-yellow-600"
                                  : "text-orange-600",
                            children: [s.confidence, "%"],
                          }),
                        ],
                      }),
                      e.jsx(y, {
                        value: s.confidence,
                        className: "h-1.5 mt-1",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  e.jsx(F, { className: "h-4 w-4" }),
                  e.jsx("span", { children: s.timeframe }),
                ],
              }),
              s.relatedActions.length > 0 &&
                e.jsxs("div", {
                  className: "flex flex-wrap gap-1 pt-2 border-t",
                  children: [
                    s.relatedActions
                      .slice(0, 3)
                      .map((l, p) =>
                        e.jsx(
                          m,
                          {
                            variant: "secondary",
                            className: "text-xs font-normal",
                            children: l,
                          },
                          p,
                        ),
                      ),
                    s.relatedActions.length > 3 &&
                      e.jsxs(m, {
                        variant: "outline",
                        className: "text-xs",
                        children: ["+", s.relatedActions.length - 3],
                      }),
                  ],
                }),
            ],
          }),
          e.jsxs(T, {
            className: "flex justify-end gap-2 border-t pt-3",
            children: [
              e.jsx(n, {
                variant: "ghost",
                size: "sm",
                onClick: c,
                className: "h-8",
                children: "Explorar",
              }),
              e.jsxs(n, {
                size: "sm",
                onClick: o,
                className: "h-8",
                children: [
                  "Criar Ação",
                  e.jsx(I, { className: "h-4 w-4 ml-2" }),
                ],
              }),
            ],
          }),
        ],
      });
}
const gt = (s) => {
    switch (s) {
      case "critical":
        return {
          icon: We,
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-300",
          label: "Crítico",
          scoreColor: "bg-red-500",
        };
      case "high":
        return {
          icon: L,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-300",
          label: "Alto",
          scoreColor: "bg-orange-500",
        };
      case "medium":
        return {
          icon: R,
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-300",
          label: "Médio",
          scoreColor: "bg-yellow-500",
        };
      default:
        return {
          icon: Ls,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-300",
          label: "Baixo",
          scoreColor: "bg-blue-500",
        };
    }
  },
  pt = (s) => {
    switch (s) {
      case "identified":
        return {
          color: "text-red-600",
          bgColor: "bg-red-50",
          label: "Identificado",
        };
      case "monitored":
        return {
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          label: "Monitorado",
        };
      case "mitigated":
        return {
          color: "text-green-600",
          bgColor: "bg-green-50",
          label: "Mitigado",
        };
      case "materialized":
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-50",
          label: "Materializado",
        };
      default:
        return { color: "text-gray-600", bgColor: "bg-gray-50", label: s };
    }
  };
function Me({ score: s, severityConfig: r }) {
  return e.jsxs("div", {
    className: "flex items-center gap-2",
    children: [
      e.jsx("span", {
        className: a(
          "text-xl font-bold",
          s >= 6
            ? "text-red-600"
            : s >= 3
              ? "text-yellow-600"
              : "text-blue-600",
        ),
        children: s.toFixed(1),
      }),
      e.jsx("span", {
        className: "text-xs text-muted-foreground",
        children: "/10",
      }),
    ],
  });
}
function Re({
  risk: s,
  variant: r = "default",
  onMitigate: c,
  onMonitor: o,
  onView: d,
}) {
  const [i, t] = P.useState(!1),
    l = gt(s.severity),
    p = pt(s.status),
    u = l.icon,
    N = (s.probability * s.impact) / 100;
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", l.borderColor),
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a("p-2 rounded-lg", l.bgColor),
                children: e.jsx(u, { className: a("h-4 w-4", l.color) }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("p", {
                        className: "font-medium truncate",
                        children: s.title,
                      }),
                      s.status === "identified" &&
                        e.jsxs("span", {
                          className: "relative flex h-2 w-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75",
                            }),
                            e.jsx("span", {
                              className:
                                "relative inline-flex rounded-full h-2 w-2 bg-red-500",
                            }),
                          ],
                        }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-sm text-muted-foreground truncate",
                    children: [
                      s.probability,
                      "% prob • ",
                      s.impact,
                      "/10 impacto • ",
                      l.label,
                    ],
                  }),
                ],
              }),
              e.jsx(Me, { score: N, severityConfig: l }),
              e.jsx(n, {
                size: "sm",
                variant: s.status === "identified" ? "default" : "outline",
                onClick: o,
                className: "shrink-0",
                children: s.status === "identified" ? "Monitorar" : "Ver",
              }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", l.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a("p-2.5 rounded-xl", l.bgColor),
                      children: e.jsx(u, { className: a("h-5 w-5", l.color) }),
                    }),
                    e.jsx("div", {
                      className: "flex-1",
                      children: e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                          e.jsx(f, {
                            className: "text-base",
                            children: s.title,
                          }),
                          s.status === "identified" &&
                            e.jsx(m, {
                              variant: "outline",
                              className:
                                "text-xs bg-red-50 text-red-700 border-red-200",
                              children: "Novo",
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx(Me, { score: N, severityConfig: l }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: s.description,
              }),
              e.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children: [
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Probabilidade: ",
                      e.jsxs("strong", {
                        className:
                          s.probability >= 70
                            ? "text-red-600"
                            : s.probability >= 40
                              ? "text-yellow-600"
                              : "text-green-600",
                        children: [s.probability, "%"],
                      }),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Impacto: ",
                      e.jsxs("strong", {
                        className:
                          s.impact >= 7
                            ? "text-red-600"
                            : s.impact >= 4
                              ? "text-yellow-600"
                              : "text-green-600",
                        children: [s.impact, "/10"],
                      }),
                    ],
                  }),
                  e.jsx(m, {
                    variant: "outline",
                    className: "text-xs",
                    children: l.label,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "bg-muted rounded-lg p-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                      e.jsx("span", {
                        className: "text-sm font-medium",
                        children: "Score de Risco",
                      }),
                      e.jsx(Me, { score: N, severityConfig: l }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                    children: e.jsx("div", {
                      className: a("h-full rounded-full", l.scoreColor),
                      style: { width: `${Math.min(N * 10, 100)}%` },
                    }),
                  }),
                ],
              }),
              s.relatedKPIs.length > 0 &&
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 text-sm text-muted-foreground",
                  children: [
                    e.jsx(z, { className: "h-4 w-4" }),
                    e.jsxs("span", {
                      children: ["KPIs: ", s.relatedKPIs.join(", ")],
                    }),
                  ],
                }),
              s.mitigationPlan &&
                e.jsxs(J, {
                  open: i,
                  onOpenChange: t,
                  children: [
                    e.jsx(X, {
                      asChild: !0,
                      children: e.jsxs(n, {
                        variant: "ghost",
                        className:
                          "w-full justify-between h-auto py-2 px-0 hover:bg-transparent",
                        children: [
                          e.jsx("span", {
                            className: "text-sm text-muted-foreground",
                            children:
                              s.status === "mitigated"
                                ? "Plano executado"
                                : "Ver plano de mitigação",
                          }),
                          i
                            ? e.jsx(pe, { className: "h-4 w-4" })
                            : e.jsx(_, { className: "h-4 w-4" }),
                        ],
                      }),
                    }),
                    e.jsx(Y, {
                      className: "space-y-3",
                      children: e.jsxs("div", {
                        className: a(
                          "rounded-lg p-3 border",
                          s.status === "mitigated"
                            ? "bg-green-50 border-green-200"
                            : "bg-blue-50 border-blue-200",
                        ),
                        children: [
                          e.jsx("ul", {
                            className: "space-y-1",
                            children: s.mitigationPlan.actions.map((G, Vs) =>
                              e.jsxs(
                                "li",
                                {
                                  className: "flex items-start gap-2 text-sm",
                                  children: [
                                    s.status === "mitigated"
                                      ? e.jsx(b, {
                                          className:
                                            "h-4 w-4 text-green-600 flex-shrink-0 mt-0.5",
                                        })
                                      : e.jsx(S, {
                                          className:
                                            "h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5",
                                        }),
                                    e.jsx("span", { children: G }),
                                  ],
                                },
                                Vs,
                              ),
                            ),
                          }),
                          (s.mitigationPlan.owner ||
                            s.mitigationPlan.dueDate) &&
                            e.jsxs("div", {
                              className:
                                "flex items-center gap-4 mt-3 pt-3 border-t text-xs text-muted-foreground",
                              children: [
                                s.mitigationPlan.owner &&
                                  e.jsxs("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(he, { className: "h-3 w-3" }),
                                      s.mitigationPlan.owner,
                                    ],
                                  }),
                                s.mitigationPlan.dueDate &&
                                  e.jsxs("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      e.jsx(O, { className: "h-3 w-3" }),
                                      new Date(
                                        s.mitigationPlan.dueDate,
                                      ).toLocaleDateString("pt-BR"),
                                    ],
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
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsx("div", {
                className: "flex items-center gap-2",
                children:
                  s.status === "mitigated"
                    ? e.jsxs("span", {
                        className:
                          "text-sm text-green-600 flex items-center gap-1",
                        children: [
                          e.jsx(b, { className: "h-4 w-4" }),
                          "Mitigado",
                        ],
                      })
                    : e.jsxs("span", {
                        className: a(
                          "text-sm flex items-center gap-1",
                          p.color,
                        ),
                        children: [e.jsx(u, { className: "h-4 w-4" }), p.label],
                      }),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  s.status !== "mitigated" &&
                    s.status !== "materialized" &&
                    e.jsxs(n, {
                      variant: "outline",
                      size: "sm",
                      onClick: c,
                      className: "h-8",
                      children: [
                        e.jsx(Ls, { className: "h-4 w-4 mr-2" }),
                        "Mitigar",
                      ],
                    }),
                  e.jsxs(n, {
                    size: "sm",
                    onClick: o,
                    className: "h-8",
                    children: [
                      s.status === "identified" ? "Iniciar" : "Atualizar",
                      e.jsx(I, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
const jt = (s) => {
  switch (s) {
    case "high":
      return {
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-300",
        icon: L,
        label: "Alta",
      };
    case "medium":
      return {
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-300",
        icon: k,
        label: "Média",
      };
    case "low":
      return {
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-300",
        icon: S,
        label: "Baixa",
      };
    default:
      return {
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-300",
        icon: S,
        label: s,
      };
  }
};
function Ss({ score: s }) {
  const r =
    s >= 80
      ? "bg-red-100 text-red-700 border-red-200"
      : s >= 60
        ? "bg-orange-100 text-orange-700 border-orange-200"
        : s >= 40
          ? "bg-yellow-100 text-yellow-700 border-yellow-200"
          : "bg-blue-100 text-blue-700 border-blue-200";
  return e.jsxs("div", {
    className: a("flex items-center gap-1.5 px-2 py-1 rounded-lg border", r),
    children: [
      e.jsx("span", {
        className: "text-lg font-bold leading-none",
        children: s.toFixed(0),
      }),
      e.jsx("span", { className: "text-xs opacity-75", children: "pts" }),
    ],
  });
}
function ze({
  priority: s,
  variant: r = "default",
  onValidate: c,
  onDismiss: o,
  onAction: d,
}) {
  const [i, t] = P.useState(!1),
    l = jt(s.level),
    p = l.icon;
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", l.borderColor),
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a("p-2 rounded-lg", l.bgColor),
                children: e.jsx(p, { className: a("h-4 w-4", l.color) }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("p", {
                        className: "font-medium truncate",
                        children: s.title,
                      }),
                      s.status === "suggested" &&
                        e.jsxs("span", {
                          className: "relative flex h-2 w-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75",
                            }),
                            e.jsx("span", {
                              className:
                                "relative inline-flex rounded-full h-2 w-2 bg-purple-500",
                            }),
                          ],
                        }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground truncate",
                    children: s.explanation,
                  }),
                ],
              }),
              e.jsx(Ss, { score: s.score.calculatedValue }),
              e.jsx(n, {
                size: "sm",
                variant: s.status === "suggested" ? "default" : "outline",
                onClick: d,
                className: "shrink-0",
                children: s.status === "suggested" ? "Agir" : "Ver",
              }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", l.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a("p-2.5 rounded-xl", l.bgColor),
                      children: e.jsx(p, { className: a("h-5 w-5", l.color) }),
                    }),
                    e.jsx("div", {
                      className: "flex-1",
                      children: e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                          e.jsx(f, {
                            className: "text-base",
                            children: s.title,
                          }),
                          s.status === "suggested" &&
                            e.jsx(m, {
                              variant: "outline",
                              className:
                                "text-xs bg-purple-50 text-purple-700 border-purple-200",
                              children: "Sugerido",
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx(Ss, { score: s.score.calculatedValue }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsx("p", {
                className: "text-sm text-muted-foreground",
                children: s.explanation,
              }),
              e.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children: [
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Impacto: ",
                      e.jsxs("strong", { children: [s.score.impact, "/10"] }),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "text-muted-foreground",
                    children: [
                      "Urgência: ",
                      e.jsxs("strong", { children: [s.score.urgency, "/10"] }),
                    ],
                  }),
                ],
              }),
              e.jsxs(J, {
                open: i,
                onOpenChange: t,
                children: [
                  e.jsx(X, {
                    asChild: !0,
                    children: e.jsxs(n, {
                      variant: "ghost",
                      className:
                        "w-full justify-between h-auto py-2 px-0 hover:bg-transparent",
                      children: [
                        e.jsx("span", {
                          className: "text-sm text-muted-foreground",
                          children: "Ver detalhes do cálculo",
                        }),
                        i
                          ? e.jsx(pe, { className: "h-4 w-4" })
                          : e.jsx(_, { className: "h-4 w-4" }),
                      ],
                    }),
                  }),
                  e.jsxs(Y, {
                    className: "space-y-3",
                    children: [
                      e.jsxs("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                          e.jsx(ie, {
                            label: "Impacto",
                            value: s.score.impact,
                            max: 10,
                            icon: B,
                          }),
                          e.jsx(ie, {
                            label: "Urgência",
                            value: s.score.urgency,
                            max: 10,
                            icon: F,
                          }),
                          e.jsx(ie, {
                            label: "Esforço",
                            value: s.score.effort,
                            max: 10,
                            icon: z,
                            inverted: !0,
                          }),
                          e.jsx(ie, {
                            label: "Confiança",
                            value: s.score.confidence,
                            max: 10,
                            icon: b,
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "text-xs text-center text-muted-foreground bg-muted rounded p-2",
                        children: [
                          "(",
                          s.score.impact,
                          " × ",
                          s.score.urgency,
                          " × ",
                          s.score.confidence,
                          ") ÷ ",
                          s.score.effort,
                          " = ",
                          s.score.calculatedValue.toFixed(1),
                        ],
                      }),
                      s.suggestedActions.length > 0 &&
                        e.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            e.jsx("p", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: "Ações sugeridas:",
                            }),
                            e.jsx("div", {
                              className: "flex flex-wrap gap-1",
                              children: s.suggestedActions.map((u, N) =>
                                e.jsx(
                                  m,
                                  {
                                    variant: "secondary",
                                    className: "text-xs font-normal",
                                    children: u,
                                  },
                                  N,
                                ),
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
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsx("div", {
                className: "flex items-center gap-2",
                children:
                  s.status === "suggested"
                    ? e.jsx(n, {
                        variant: "ghost",
                        size: "sm",
                        onClick: o,
                        className: "text-muted-foreground h-8",
                        children: "Ignorar",
                      })
                    : s.status === "validated"
                      ? e.jsxs("span", {
                          className:
                            "text-sm text-green-600 flex items-center gap-1",
                          children: [
                            e.jsx(b, { className: "h-4 w-4" }),
                            "Validado",
                          ],
                        })
                      : e.jsxs("span", {
                          className:
                            "text-sm text-muted-foreground flex items-center gap-1",
                          children: [
                            e.jsx(br, { className: "h-4 w-4" }),
                            "Descartado",
                          ],
                        }),
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  s.status === "suggested" &&
                    e.jsx(n, {
                      variant: "outline",
                      size: "sm",
                      onClick: c,
                      className: "h-8",
                      children: "Validar",
                    }),
                  e.jsxs(n, {
                    size: "sm",
                    onClick: d,
                    className: "h-8",
                    children: [
                      s.status === "suggested" ? "Agir Agora" : "Executar",
                      e.jsx(I, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function ie({ label: s, value: r, max: c, icon: o, inverted: d = !1 }) {
  const i = (r / c) * 100,
    t = d
      ? i <= 33
        ? "text-green-600"
        : i <= 66
          ? "text-yellow-600"
          : "text-red-600"
      : i >= 80
        ? "text-green-600"
        : i >= 60
          ? "text-yellow-600"
          : "text-red-600";
  return e.jsx("div", {
    className: "bg-muted rounded-lg p-2.5",
    children: e.jsxs("div", {
      className: "flex items-center justify-between",
      children: [
        e.jsxs("span", {
          className: "text-xs text-muted-foreground flex items-center gap-1",
          children: [e.jsx(o, { className: "h-3 w-3" }), s],
        }),
        e.jsxs("span", {
          className: a("text-sm font-bold", t),
          children: [r, "/", c],
        }),
      ],
    }),
  });
}
const ft = (s) => {
    switch (s) {
      case 5:
        return {
          icon: We,
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-300",
          label: "Crítico",
        };
      case 4:
        return {
          icon: L,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-300",
          label: "Alto",
        };
      case 3:
        return {
          icon: R,
          color: "text-yellow-600",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-300",
          label: "Médio",
        };
      default:
        return {
          icon: Rs,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-300",
          label: s === 2 ? "Baixo" : "Mínimo",
        };
    }
  },
  bt = (s) => {
    switch (s.toLowerCase()) {
      case "finance":
        return "bg-emerald-500";
      case "sales":
        return "bg-blue-500";
      case "marketing":
        return "bg-purple-500";
      case "operations":
        return "bg-orange-500";
      case "strategy":
        return "bg-indigo-500";
      default:
        return "bg-gray-500";
    }
  };
function Nt({
  challenge: s,
  variant: r = "default",
  onFocus: c,
  onViewKPIs: o,
}) {
  const [d, i] = P.useState(!1),
    t = ft(s.severity),
    l = t.icon,
    p = bt(s.domain);
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", t.borderColor),
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a("p-2 rounded-lg", t.bgColor),
                children: e.jsx(l, { className: a("h-4 w-4", t.color) }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("p", {
                        className: "font-medium truncate",
                        children: s.title,
                      }),
                      e.jsx("div", {
                        className: a("w-2 h-2 rounded-full", p),
                        title: s.domain,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 mt-1 text-sm text-muted-foreground",
                    children: [
                      e.jsx(m, {
                        variant: "outline",
                        className: a("text-xs px-1", t.color),
                        children: t.label,
                      }),
                      e.jsxs("span", {
                        children: [s.relatedKPIs.length, " KPIs afetados"],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: a(
                  "px-2 py-1 rounded-lg text-center shrink-0",
                  t.bgColor,
                ),
                children: e.jsxs("span", {
                  className: a("text-lg font-bold", t.color),
                  children: [s.severity, "/5"],
                }),
              }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", t.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a("p-2.5 rounded-xl", t.bgColor),
                      children: e.jsx(l, { className: a("h-5 w-5", t.color) }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 flex-wrap",
                          children: [
                            e.jsx(f, {
                              className: "text-base",
                              children: s.title,
                            }),
                            e.jsx("div", {
                              className: a("w-2 h-2 rounded-full", p),
                              title: s.domain,
                            }),
                          ],
                        }),
                        s.description &&
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground mt-0.5",
                            children: s.description,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: a(
                    "px-3 py-1.5 rounded-lg text-center shrink-0",
                    t.bgColor,
                  ),
                  children: [
                    e.jsx("span", {
                      className: a("text-2xl font-bold", t.color),
                      children: s.severity,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "/5 severidade",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              s.relatedKPIs.length > 0 &&
                e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsxs("p", {
                      className: "text-sm font-medium flex items-center gap-1",
                      children: [
                        e.jsx(z, {
                          className: "h-4 w-4 text-muted-foreground",
                        }),
                        "KPIs Afetados (",
                        s.relatedKPIs.length,
                        ")",
                      ],
                    }),
                    e.jsx("div", {
                      className: "space-y-2",
                      children: s.relatedKPIs.map((u, N) => {
                        const G = (u.currentValue / u.threshold) * 100;
                        return e.jsxs(
                          "div",
                          {
                            className: "bg-muted rounded-lg p-2.5",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-1",
                                children: [
                                  e.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: u.name,
                                  }),
                                  e.jsx(m, {
                                    variant: "outline",
                                    className: "text-xs font-mono",
                                    children: u.code,
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "flex items-baseline gap-2",
                                children: [
                                  e.jsx("span", {
                                    className: a(
                                      "font-semibold",
                                      G < 70
                                        ? "text-red-600"
                                        : G < 90
                                          ? "text-yellow-600"
                                          : "text-emerald-600",
                                    ),
                                    children:
                                      u.currentValue.toLocaleString("pt-BR"),
                                  }),
                                  e.jsxs("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: [
                                      "/ ",
                                      u.threshold.toLocaleString("pt-BR"),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(y, { value: G, className: "h-1 mt-1" }),
                            ],
                          },
                          N,
                        );
                      }),
                    }),
                  ],
                }),
              s.symptoms.length > 0 &&
                e.jsxs(J, {
                  open: d,
                  onOpenChange: i,
                  children: [
                    e.jsx(X, {
                      asChild: !0,
                      children: e.jsxs(n, {
                        variant: "ghost",
                        className:
                          "w-full justify-between h-auto py-2 px-0 hover:bg-transparent text-muted-foreground",
                        children: [
                          e.jsxs("span", {
                            className: "text-sm flex items-center gap-1",
                            children: [
                              e.jsx(k, { className: "h-4 w-4" }),
                              s.symptoms.length,
                              " sintomas identificados",
                            ],
                          }),
                          d
                            ? e.jsx(pe, { className: "h-4 w-4" })
                            : e.jsx(_, { className: "h-4 w-4" }),
                        ],
                      }),
                    }),
                    e.jsx(Y, {
                      className: "mt-2",
                      children: e.jsx("ul", {
                        className: "space-y-1",
                        children: s.symptoms.map((u, N) =>
                          e.jsxs(
                            "li",
                            {
                              className:
                                "flex items-start gap-2 text-sm bg-muted rounded-lg p-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-medium text-primary",
                                  children: N + 1,
                                }),
                                e.jsx("span", { children: u }),
                              ],
                            },
                            N,
                          ),
                        ),
                      }),
                    }),
                  ],
                }),
              e.jsx("div", {
                className: "pt-2",
                children: e.jsx("span", {
                  className:
                    "text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded",
                  children: s.code,
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsxs(n, {
                variant: "ghost",
                size: "sm",
                onClick: o,
                className: "h-8",
                children: [e.jsx(z, { className: "h-4 w-4 mr-2" }), "Ver KPIs"],
              }),
              e.jsxs(n, {
                size: "sm",
                onClick: c,
                className: "h-8",
                children: [
                  e.jsx(U, { className: "h-4 w-4 mr-2" }),
                  "Focar",
                  e.jsx(I, { className: "h-4 w-4 ml-2" }),
                ],
              }),
            ],
          }),
        ],
      });
}
const vt = (s) => {
    switch (s.toLowerCase()) {
      case "financeiro":
        return { label: "Financeiro", color: "bg-emerald-500", icon: z };
      case "vendas":
        return { label: "Vendas", color: "bg-blue-500", icon: B };
      case "operacoes":
        return { label: "Operações", color: "bg-orange-500", icon: k };
      case "pessoas":
        return { label: "Pessoas", color: "bg-pink-500", icon: S };
      case "relacionamento":
        return { label: "Relacionamento", color: "bg-purple-500", icon: b };
      case "marketing":
        return { label: "Marketing", color: "bg-indigo-500", icon: ge };
      default:
        return { label: s, color: "bg-gray-500", icon: xe };
    }
  },
  yt = (s) => {
    switch (s) {
      case "high":
        return {
          color: "text-emerald-600",
          bgColor: "bg-emerald-100",
          label: "Alto",
          value: 100,
        };
      case "medium":
        return {
          color: "text-yellow-600",
          bgColor: "bg-yellow-100",
          label: "Médio",
          value: 66,
        };
      case "low":
        return {
          color: "text-blue-600",
          bgColor: "bg-blue-100",
          label: "Baixo",
          value: 33,
        };
      default:
        return {
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          label: s,
          value: 50,
        };
    }
  },
  wt = (s) => {
    switch (s) {
      case "high":
        return { color: "text-red-600", label: "Alta" };
      case "medium":
        return { color: "text-yellow-600", label: "Média" };
      case "low":
        return { color: "text-emerald-600", label: "Baixa" };
      default:
        return { color: "text-gray-600", label: s };
    }
  };
function Ct({
  lever: s,
  variant: r = "default",
  onViewActions: c,
  onApply: o,
}) {
  const d = vt(s.category),
    i = yt(s.impactLevel),
    t = wt(s.complexity),
    l = d.icon,
    p = Math.ceil(s.typicalTimeframeDays / 7);
  return r === "compact"
    ? e.jsx(x, {
        className: "overflow-hidden",
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("div", {
                className: a(
                  "p-2 rounded-lg",
                  d.color.replace("bg-", "bg-opacity-20 bg-"),
                ),
                children: e.jsx(l, { className: "h-4 w-4 text-white" }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("p", {
                        className: "font-medium truncate",
                        children: s.title,
                      }),
                      !s.isActive &&
                        e.jsx(m, {
                          variant: "outline",
                          className: "text-xs text-muted-foreground",
                          children: "Inativo",
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-2 mt-1 text-sm text-muted-foreground",
                    children: [
                      e.jsxs("span", {
                        className: i.color,
                        children: [i.label, " Impacto"],
                      }),
                      e.jsx("span", { children: "•" }),
                      e.jsxs("span", {
                        className: t.color,
                        children: [t.label, " Complexidade"],
                      }),
                    ],
                  }),
                ],
              }),
              s.targetKPI &&
                e.jsxs(m, {
                  className:
                    "shrink-0 bg-emerald-100 text-emerald-700 border-emerald-200",
                  children: ["+", s.targetKPI.expectedImprovement, "%"],
                }),
            ],
          }),
        }),
      })
    : e.jsxs(x, {
        className: "overflow-hidden",
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsx("div", {
              className: "flex items-start justify-between",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className: a("p-2.5 rounded-xl", d.color),
                    children: e.jsx(l, { className: "h-5 w-5 text-white" }),
                  }),
                  e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                          e.jsx(f, {
                            className: "text-base",
                            children: s.title,
                          }),
                          !s.isActive &&
                            e.jsx(m, {
                              variant: "outline",
                              className: "text-xs text-muted-foreground",
                              children: "Inativo",
                            }),
                        ],
                      }),
                      s.description &&
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground mt-0.5",
                          children: s.description,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx(B, { className: a("h-4 w-4", i.color) }),
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Impacto:",
                      }),
                      e.jsx("span", {
                        className: a("font-medium", i.color),
                        children: i.label,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx(R, { className: a("h-4 w-4", t.color) }),
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Complexidade:",
                      }),
                      e.jsx("span", {
                        className: a("font-medium", t.color),
                        children: t.label,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(y, {
                value: i.value,
                className: a(
                  "h-1.5",
                  i.value >= 80
                    ? "[&>div]:bg-emerald-500"
                    : i.value >= 50
                      ? "[&>div]:bg-yellow-500"
                      : "[&>div]:bg-blue-500",
                ),
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  e.jsx(F, { className: "h-4 w-4" }),
                  e.jsxs("span", {
                    children: ["~", p, " semana(s) para implementar"],
                  }),
                ],
              }),
              s.targetKPI &&
                e.jsx("div", {
                  className:
                    "bg-emerald-50 border border-emerald-200 rounded-lg p-2.5",
                  children: e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx(S, { className: "h-4 w-4 text-emerald-600" }),
                          e.jsx("span", {
                            className: "text-sm text-emerald-700",
                            children: s.targetKPI.name,
                          }),
                        ],
                      }),
                      e.jsxs(m, {
                        className:
                          "bg-emerald-100 text-emerald-700 border-emerald-200 text-xs",
                        children: ["+", s.targetKPI.expectedImprovement, "%"],
                      }),
                    ],
                  }),
                }),
              s.actions.length > 0 &&
                e.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    e.jsxs("p", {
                      className: "text-xs text-muted-foreground",
                      children: [s.actions.length, " ações incluídas"],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-1",
                      children: [
                        s.actions
                          .slice(0, 3)
                          .map((u, N) =>
                            e.jsx(
                              m,
                              {
                                variant: "secondary",
                                className: "text-xs font-normal",
                                children: u.title,
                              },
                              u.id,
                            ),
                          ),
                        s.actions.length > 3 &&
                          e.jsxs(m, {
                            variant: "outline",
                            className: "text-xs cursor-pointer",
                            onClick: c,
                            children: ["+", s.actions.length - 3],
                          }),
                      ],
                    }),
                  ],
                }),
              e.jsx("div", {
                className: "pt-1",
                children: e.jsx("span", {
                  className:
                    "text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded",
                  children: s.code,
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsxs(n, {
                variant: "ghost",
                size: "sm",
                onClick: c,
                className: "h-8",
                children: [
                  e.jsx(xe, { className: "h-4 w-4 mr-2" }),
                  s.actions.length,
                  " Ações",
                ],
              }),
              e.jsxs(n, {
                size: "sm",
                onClick: o,
                disabled: !s.isActive,
                className: "h-8",
                children: ["Aplicar", e.jsx(I, { className: "h-4 w-4 ml-2" })],
              }),
            ],
          }),
        ],
      });
}
const Tt = (s) => {
  switch (s) {
    case "increase":
      return {
        icon: B,
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        label: "Aumentar",
      };
    case "decrease":
      return {
        icon: ue,
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        label: "Reduzir",
      };
    case "maintain":
      return {
        icon: Ue,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        label: "Manter",
      };
    default:
      return {
        icon: S,
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        label: s,
      };
  }
};
function St({
  goal: s,
  variant: r = "default",
  onUpdateProgress: c,
  onViewHistory: o,
  onRestart: d,
}) {
  const i = Tt(s.targetType),
    t = i.icon,
    l = s.progress >= 100,
    p = Math.floor(
      (new Date().getTime() - new Date(s.startedAt).getTime()) /
        (1e3 * 60 * 60 * 24),
    ),
    u = Math.max(0, s.suggestedTimeframeDays - p),
    N =
      s.history.length > 1
        ? s.history[s.history.length - 1].progress - s.history[0].progress
        : 0;
  return r === "compact"
    ? e.jsx(x, {
        className: a(
          "overflow-hidden",
          l ? "border-emerald-300" : i.borderColor,
        ),
        children: e.jsxs(h, {
          className: "p-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx("div", {
                  className: a(
                    "p-2 rounded-lg",
                    l ? "bg-emerald-50" : i.bgColor,
                  ),
                  children: l
                    ? e.jsx(b, { className: "h-4 w-4 text-emerald-600" })
                    : e.jsx(t, { className: a("h-4 w-4", i.color) }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: a(
                        "font-medium truncate",
                        l && "line-through text-muted-foreground",
                      ),
                      children: s.title,
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-2 mt-1 text-sm text-muted-foreground",
                      children: [
                        e.jsxs("span", {
                          className: a(
                            "font-medium",
                            l
                              ? "text-emerald-600"
                              : s.progress >= 75
                                ? "text-blue-600"
                                : s.progress >= 50
                                  ? "text-yellow-600"
                                  : "text-orange-600",
                          ),
                          children: [s.progress, "%"],
                        }),
                        !l &&
                          u <= 7 &&
                          u > 0 &&
                          e.jsxs("span", {
                            className: "text-red-600",
                            children: ["• ", u, "d restantes"],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(y, {
              value: s.progress,
              className: a(
                "h-1.5 mt-3",
                l
                  ? "[&>div]:bg-emerald-500"
                  : s.progress >= 75
                    ? "[&>div]:bg-blue-500"
                    : s.progress >= 50
                      ? "[&>div]:bg-yellow-500"
                      : "[&>div]:bg-orange-500",
              ),
            }),
          ],
        }),
      })
    : e.jsxs(x, {
        className: a(
          "overflow-hidden",
          l ? "border-emerald-300" : i.borderColor,
        ),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a(
                        "p-2.5 rounded-xl",
                        l ? "bg-emerald-50" : i.bgColor,
                      ),
                      children: l
                        ? e.jsx(b, { className: "h-5 w-5 text-emerald-600" })
                        : e.jsx(t, { className: a("h-5 w-5", i.color) }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsx(f, {
                          className: a(
                            "text-base",
                            l && "line-through text-muted-foreground",
                          ),
                          children: s.title,
                        }),
                        s.description &&
                          e.jsx("p", {
                            className: "text-sm text-muted-foreground mt-0.5",
                            children: s.description,
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: a(
                    "px-3 py-1.5 rounded-lg text-center shrink-0",
                    l
                      ? "bg-emerald-100"
                      : s.progress >= 75
                        ? "bg-blue-100"
                        : s.progress >= 50
                          ? "bg-yellow-100"
                          : "bg-orange-100",
                  ),
                  children: e.jsxs("span", {
                    className: a(
                      "text-2xl font-bold",
                      l
                        ? "text-emerald-700"
                        : s.progress >= 75
                          ? "text-blue-700"
                          : s.progress >= 50
                            ? "text-yellow-700"
                            : "text-orange-700",
                    ),
                    children: [s.progress, "%"],
                  }),
                }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-3",
            children: [
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between text-sm",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Progresso",
                      }),
                      e.jsx("span", {
                        className: a(
                          "font-medium",
                          l
                            ? "text-emerald-600"
                            : s.progress >= 75
                              ? "text-blue-600"
                              : s.progress >= 50
                                ? "text-yellow-600"
                                : "text-orange-600",
                        ),
                        children: l ? "Concluído" : "Em andamento",
                      }),
                    ],
                  }),
                  e.jsx(y, {
                    value: s.progress,
                    className: a(
                      "h-2",
                      l
                        ? "[&>div]:bg-emerald-500"
                        : s.progress >= 75
                          ? "[&>div]:bg-blue-500"
                          : s.progress >= 50
                            ? "[&>div]:bg-yellow-500"
                            : "[&>div]:bg-orange-500",
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex items-center gap-4 text-sm text-muted-foreground",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-1",
                    children: [
                      e.jsx(O, { className: "h-4 w-4" }),
                      "Início: ",
                      new Date(s.startedAt).toLocaleDateString("pt-BR"),
                    ],
                  }),
                  s.achievedAt &&
                    e.jsxs("span", {
                      className: "flex items-center gap-1 text-emerald-600",
                      children: [
                        e.jsx(b, { className: "h-4 w-4" }),
                        "Concluído: ",
                        new Date(s.achievedAt).toLocaleDateString("pt-BR"),
                      ],
                    }),
                ],
              }),
              !l &&
                e.jsxs("div", {
                  className: a(
                    "flex items-center gap-2 text-sm rounded-lg py-1.5 px-2",
                    u <= 7 ? "bg-red-50 text-red-700" : "text-muted-foreground",
                  ),
                  children: [
                    e.jsx(F, {
                      className: a(
                        "h-4 w-4",
                        u <= 7 ? "text-red-600" : "text-muted-foreground",
                      ),
                    }),
                    e.jsx("span", {
                      className: "font-medium",
                      children:
                        u === 0
                          ? "Prazo encerrado hoje"
                          : `${u} dia(s) de ${s.suggestedTimeframeDays}`,
                    }),
                  ],
                }),
              s.history.length > 1 &&
                e.jsxs("div", {
                  className:
                    "flex items-center gap-2 text-sm text-muted-foreground",
                  children: [
                    e.jsx(Z, { className: "h-4 w-4" }),
                    e.jsx("span", { children: "Tendência: " }),
                    e.jsxs("span", {
                      className: a(
                        "font-medium",
                        N > 0
                          ? "text-emerald-600"
                          : N < 0
                            ? "text-red-600"
                            : "text-gray-600",
                      ),
                      children: [
                        N > 0 ? "+" : "",
                        N.toFixed(1),
                        "% desde início",
                      ],
                    }),
                  ],
                }),
              e.jsx("div", {
                className: "pt-1",
                children: e.jsx("span", {
                  className:
                    "text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded",
                  children: s.code,
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsxs(n, {
                variant: "ghost",
                size: "sm",
                onClick: o,
                className: "h-8",
                children: [
                  e.jsx(B, { className: "h-4 w-4 mr-2" }),
                  "Histórico",
                ],
              }),
              l
                ? e.jsxs(n, {
                    variant: "outline",
                    size: "sm",
                    onClick: d,
                    className: "h-8",
                    children: [
                      e.jsx(Nr, { className: "h-4 w-4 mr-2" }),
                      "Reiniciar",
                    ],
                  })
                : e.jsxs(n, {
                    size: "sm",
                    onClick: c,
                    className: "h-8",
                    children: [
                      "Atualizar",
                      e.jsx(I, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
            ],
          }),
        ],
      });
}
const Dt = (s) => {
    switch (s) {
      case "completed":
        return {
          icon: b,
          color: "text-emerald-600",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-200",
          label: "Concluído",
        };
      case "in_progress":
        return {
          icon: F,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          label: "Em Andamento",
        };
      case "blocked":
        return {
          icon: L,
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          label: "Bloqueado",
        };
      default:
        return {
          icon: Ms,
          color: "text-gray-400",
          bgColor: "bg-gray-50",
          borderColor: "border-gray-200",
          label: "Pendente",
        };
    }
  },
  At = (s) => {
    switch (s) {
      case "critical":
        return "border-l-red-500";
      case "high":
        return "border-l-orange-500";
      case "medium":
        return "border-l-yellow-500";
      default:
        return "border-l-blue-500";
    }
  },
  It = (s) => new Date(s) < new Date();
function Le({ action: s, variant: r = "default", onToggle: c, onView: o }) {
  const d = Dt(s.status),
    i = At(s.priority),
    t = s.dueDate && It(s.dueDate) && s.status !== "completed",
    l = s.actualEffort ? (s.actualEffort / s.estimatedEffort) * 100 : 0;
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", i),
        children: e.jsx(h, {
          className: "p-3",
          children: e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              e.jsx("button", {
                onClick: c,
                className: "flex-shrink-0",
                children:
                  s.status === "completed"
                    ? e.jsx("div", {
                        className:
                          "h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center",
                        children: e.jsx(b, { className: "h-4 w-4 text-white" }),
                      })
                    : e.jsx("div", {
                        className:
                          "h-6 w-6 rounded-full border-2 border-muted-foreground/30 hover:border-primary transition-colors",
                      }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx("p", {
                        className: a(
                          "text-sm font-medium truncate",
                          s.status === "completed" &&
                            "line-through text-muted-foreground",
                        ),
                        children: s.title,
                      }),
                      s.quickWin &&
                        e.jsxs(m, {
                          variant: "outline",
                          className:
                            "text-xs bg-yellow-50 text-yellow-700 border-yellow-200 shrink-0",
                          children: [
                            e.jsx(k, { className: "h-3 w-3 mr-1" }),
                            "Quick Win",
                          ],
                        }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-3 mt-1 text-xs text-muted-foreground",
                    children: [
                      e.jsx(m, {
                        variant: "outline",
                        className: a("text-xs px-1", d.color),
                        children: d.label,
                      }),
                      s.dueDate &&
                        e.jsxs("span", {
                          className: a(t && "text-red-600 font-medium"),
                          children: [
                            t ? "Atrasado: " : "",
                            new Date(s.dueDate).toLocaleDateString("pt-BR"),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              s.assignedTo &&
                e.jsxs(H, {
                  className: "h-6 w-6 flex-shrink-0",
                  children: [
                    e.jsx(ne, { src: s.assignedTo.avatar }),
                    e.jsx(q, {
                      className: "text-xs",
                      children: s.assignedTo.name.charAt(0),
                    }),
                  ],
                }),
            ],
          }),
        }),
      })
    : e.jsx(x, {
        className: a(
          "overflow-hidden border-l-4 transition-all hover:shadow-md",
          i,
        ),
        children: e.jsx(h, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-start gap-4",
            children: [
              e.jsx("button", {
                onClick: c,
                className: "flex-shrink-0 mt-0.5",
                children:
                  s.status === "completed"
                    ? e.jsx("div", {
                        className:
                          "h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center",
                        children: e.jsx(b, { className: "h-5 w-5 text-white" }),
                      })
                    : e.jsx("div", {
                        className: a(
                          "h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all",
                          s.status === "blocked"
                            ? "border-red-300 bg-red-50"
                            : "border-muted-foreground/30 hover:border-primary hover:bg-primary/5",
                        ),
                        children:
                          s.status === "blocked" &&
                          e.jsx(R, { className: "h-4 w-4 text-red-500" }),
                      }),
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0 space-y-2",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                          e.jsx("h4", {
                            className: a(
                              "font-semibold",
                              s.status === "completed" &&
                                "line-through text-muted-foreground",
                            ),
                            children: s.title,
                          }),
                          s.quickWin &&
                            e.jsxs(m, {
                              variant: "outline",
                              className:
                                "text-xs bg-yellow-50 text-yellow-700 border-yellow-200",
                              children: [
                                e.jsx(k, { className: "h-3 w-3 mr-1" }),
                                "Quick Win",
                              ],
                            }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground mt-0.5",
                        children: s.description,
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground",
                    children: [
                      e.jsxs("span", {
                        className: a("flex items-center gap-1", d.color),
                        children: [
                          e.jsx(d.icon, { className: "h-4 w-4" }),
                          d.label,
                        ],
                      }),
                      s.dueDate &&
                        e.jsxs("span", {
                          className: a(
                            "flex items-center gap-1",
                            t && "text-red-600 font-medium",
                          ),
                          children: [
                            e.jsx(O, { className: "h-4 w-4" }),
                            t ? "Atrasado: " : "",
                            new Date(s.dueDate).toLocaleDateString("pt-BR"),
                          ],
                        }),
                      s.assignedTo &&
                        e.jsxs("span", {
                          className: "flex items-center gap-1",
                          children: [
                            e.jsx(he, { className: "h-4 w-4" }),
                            s.assignedTo.name,
                          ],
                        }),
                      e.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [
                          e.jsx(F, { className: "h-4 w-4" }),
                          s.actualEffort
                            ? `${s.actualEffort}h / ${s.estimatedEffort}h`
                            : `${s.estimatedEffort}h`,
                        ],
                      }),
                    ],
                  }),
                  s.status === "in_progress" &&
                    s.actualEffort &&
                    e.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        e.jsx(y, { value: l, className: "h-1.5" }),
                        e.jsxs("div", {
                          className:
                            "flex items-center justify-between text-xs text-muted-foreground",
                          children: [
                            e.jsx("span", { children: "Progresso" }),
                            e.jsxs("span", { children: [Math.round(l), "%"] }),
                          ],
                        }),
                      ],
                    }),
                  e.jsxs("div", {
                    className: "flex items-center gap-2 text-sm",
                    children: [
                      e.jsx(S, { className: "h-4 w-4 text-muted-foreground" }),
                      e.jsxs("span", {
                        className: "text-muted-foreground",
                        children: [
                          "Impacto em ",
                          e.jsx("strong", { children: s.impact.metric }),
                          ":",
                        ],
                      }),
                      e.jsxs("span", {
                        className: "font-semibold text-emerald-600",
                        children: ["+", s.impact.expected, "%"],
                      }),
                      s.impact.achieved !== void 0 &&
                        e.jsxs(e.Fragment, {
                          children: [
                            e.jsx("span", {
                              className: "text-muted-foreground",
                              children: "→",
                            }),
                            e.jsxs("span", {
                              className: a(
                                "font-semibold",
                                s.impact.achieved >= s.impact.expected
                                  ? "text-emerald-600"
                                  : "text-yellow-600",
                              ),
                              children: [
                                s.impact.achieved >= 0 ? "+" : "",
                                s.impact.achieved,
                                "%",
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                  s.dependencies.length > 0 &&
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-1.5 text-xs text-muted-foreground pt-1",
                      children: [
                        e.jsx(L, { className: "h-3 w-3" }),
                        e.jsxs("span", {
                          children: ["Depende de: ", s.dependencies.join(", ")],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsx(n, {
                variant: "ghost",
                size: "icon",
                onClick: o,
                className: "shrink-0",
                children: e.jsx(Ge, { className: "h-4 w-4" }),
              }),
            ],
          }),
        }),
      });
}
const Pt = (s) => {
  switch (s) {
    case "active":
      return {
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        icon: k,
        label: "Ativo",
      };
    case "completed":
      return {
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        icon: b,
        label: "Concluído",
      };
    case "archived":
      return {
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        icon: vr,
        label: "Arquivado",
      };
    default:
      return {
        color: "text-gray-600",
        bgColor: "bg-gray-50",
        borderColor: "border-gray-200",
        icon: Es,
        label: s,
      };
  }
};
function kt({
  plan: s,
  variant: r = "default",
  onViewDetails: c,
  onArchive: o,
  onContinue: d,
}) {
  const i = Pt(s.status),
    t = i.icon,
    l = Math.round((s.completedActions / s.totalActions) * 100);
  return r === "compact"
    ? e.jsx(x, {
        className: a("overflow-hidden border-l-4", i.borderColor),
        children: e.jsxs(h, {
          className: "p-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                e.jsx("div", {
                  className: a("p-2 rounded-lg", i.bgColor),
                  children: e.jsx(t, { className: a("h-5 w-5", i.color) }),
                }),
                e.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    e.jsx("p", {
                      className: "font-semibold truncate",
                      children: s.title,
                    }),
                    e.jsxs("div", {
                      className:
                        "flex items-center gap-2 mt-1 text-sm text-muted-foreground",
                      children: [
                        e.jsxs("span", {
                          children: [
                            s.completedActions,
                            "/",
                            s.totalActions,
                            " ações",
                          ],
                        }),
                        e.jsxs("span", {
                          className: a(
                            "font-medium",
                            l >= 80
                              ? "text-emerald-600"
                              : l >= 50
                                ? "text-yellow-600"
                                : "text-orange-600",
                          ),
                          children: [l, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx(y, { value: l, className: "h-1.5 mt-3" }),
          ],
        }),
      })
    : e.jsxs(x, {
        className: a("overflow-hidden border-l-4", i.borderColor),
        children: [
          e.jsx(j, {
            className: "pb-2",
            children: e.jsxs("div", {
              className: "flex items-start justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsx("div", {
                      className: a("p-2.5 rounded-xl", i.bgColor),
                      children: e.jsx(Es, { className: a("h-5 w-5", i.color) }),
                    }),
                    e.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center gap-2 flex-wrap",
                          children: [
                            e.jsx(f, {
                              className: "text-lg",
                              children: s.title,
                            }),
                            e.jsx(m, {
                              variant: "outline",
                              className: a("text-xs", i.color),
                              children: i.label,
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: s.description,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: a(
                    "px-3 py-1.5 rounded-lg text-center shrink-0",
                    l >= 80
                      ? "bg-emerald-100"
                      : l >= 50
                        ? "bg-yellow-100"
                        : "bg-orange-100",
                  ),
                  children: [
                    e.jsxs("span", {
                      className: a(
                        "text-2xl font-bold",
                        l >= 80
                          ? "text-emerald-700"
                          : l >= 50
                            ? "text-yellow-700"
                            : "text-orange-700",
                      ),
                      children: [l, "%"],
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "concluído",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(h, {
            className: "space-y-4",
            children: [
              e.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between text-sm",
                    children: [
                      e.jsx("span", {
                        className: "text-muted-foreground",
                        children: "Progresso",
                      }),
                      e.jsxs("span", {
                        className: "font-medium",
                        children: [s.completedActions, " de ", s.totalActions],
                      }),
                    ],
                  }),
                  e.jsx(y, {
                    value: l,
                    className: a(
                      "h-2",
                      l >= 80
                        ? "[&>div]:bg-emerald-500"
                        : l >= 50
                          ? "[&>div]:bg-yellow-500"
                          : "[&>div]:bg-orange-500",
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex items-center gap-4 text-sm",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx(b, { className: "h-4 w-4 text-emerald-600" }),
                      e.jsxs("span", {
                        children: [
                          e.jsx("strong", { children: s.completedActions }),
                          " concluídas",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx(F, { className: "h-4 w-4 text-blue-600" }),
                      e.jsxs("span", {
                        children: [
                          e.jsx("strong", { children: s.inProgressActions }),
                          " em andamento",
                        ],
                      }),
                    ],
                  }),
                  s.blockedActions > 0 &&
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5",
                      children: [
                        e.jsx(L, { className: "h-4 w-4 text-red-600" }),
                        e.jsxs("span", {
                          children: [
                            e.jsx("strong", { children: s.blockedActions }),
                            " bloqueadas",
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "bg-emerald-50 border border-emerald-200 rounded-lg p-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-2 mb-1",
                    children: [
                      e.jsx(S, { className: "h-4 w-4 text-emerald-600" }),
                      e.jsx("span", {
                        className: "text-sm font-medium text-emerald-700",
                        children: "Impacto Estimado",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-baseline gap-2",
                    children: [
                      e.jsxs("span", {
                        className: "text-xl font-bold text-emerald-700",
                        children: [
                          "R$ ",
                          s.totalEstimatedImpact.toLocaleString("pt-BR"),
                        ],
                      }),
                      e.jsx("span", {
                        className: "text-sm text-muted-foreground",
                        children: "/ ano",
                      }),
                    ],
                  }),
                  s.achievedImpact &&
                    e.jsxs("div", {
                      className:
                        "mt-2 pt-2 border-t border-emerald-200 flex items-baseline gap-2",
                      children: [
                        e.jsx("span", {
                          className: "text-sm text-muted-foreground",
                          children: "Realizado:",
                        }),
                        e.jsxs("span", {
                          className: a(
                            "font-semibold",
                            s.achievedImpact >= s.totalEstimatedImpact
                              ? "text-emerald-600"
                              : "text-yellow-600",
                          ),
                          children: [
                            "R$ ",
                            s.achievedImpact.toLocaleString("pt-BR"),
                          ],
                        }),
                        e.jsxs("span", {
                          className: "text-xs text-muted-foreground",
                          children: [
                            "(",
                            Math.round(
                              (s.achievedImpact / s.totalEstimatedImpact) * 100,
                            ),
                            "%)",
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsx("div", {
                className:
                  "flex items-center gap-4 text-sm text-muted-foreground",
                children: e.jsxs("span", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx(O, { className: "h-4 w-4" }),
                    new Date(s.startDate).toLocaleDateString("pt-BR"),
                    s.endDate &&
                      ` → ${new Date(s.endDate).toLocaleDateString("pt-BR")}`,
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(T, {
            className: "flex justify-between border-t pt-3",
            children: [
              e.jsxs(n, {
                variant: "ghost",
                size: "sm",
                onClick: c,
                className: "h-8",
                children: [e.jsx(B, { className: "h-4 w-4 mr-2" }), "Detalhes"],
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  s.status === "active" &&
                    e.jsx(n, {
                      variant: "outline",
                      size: "sm",
                      onClick: o,
                      className: "h-8",
                      children: "Arquivar",
                    }),
                  e.jsxs(n, {
                    size: "sm",
                    onClick: d,
                    className: "h-8",
                    children: [
                      s.status === "completed" ? "Ver Resultados" : "Continuar",
                      e.jsx(I, { className: "h-4 w-4 ml-2" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function Bt() {
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "text-3xl font-bold tracking-tight",
            children: "Cards do Domínio",
          }),
          e.jsx("p", {
            className: "text-muted-foreground mt-2",
            children:
              "Cards simplificados com variantes compact e default para melhor UX",
          }),
        ],
      }),
      e.jsxs(oe, {
        defaultValue: "variants",
        className: "w-full",
        children: [
          e.jsxs(me, {
            className: "grid w-full grid-cols-4 lg:grid-cols-8",
            children: [
              e.jsx(v, { value: "variants", children: "Variants" }),
              e.jsx(v, { value: "data", children: "Dados" }),
              e.jsx(v, { value: "reports", children: "Relatórios" }),
              e.jsx(v, { value: "metrics", children: "Métricas" }),
              e.jsx(v, { value: "insights", children: "Insights" }),
              e.jsx(v, { value: "strategy", children: "Estratégia" }),
              e.jsx(v, { value: "actions", children: "Ações" }),
              e.jsx(v, { value: "library", children: "Biblioteca" }),
            ],
          }),
          e.jsx(C, {
            value: "variants",
            className: "mt-6 space-y-8",
            children: e.jsxs("div", {
              className: "grid gap-8",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "PriorityCard - Compact vs Default",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "O compact variant remove métricas detalhadas e mostra apenas informações essenciais.",
                    }),
                    e.jsxs("div", {
                      className: "grid gap-4 md:grid-cols-2",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="compact"',
                            }),
                            e.jsx(ze, {
                              priority: {
                                id: "1",
                                title: "Reduzir Tempo de Onboarding",
                                explanation:
                                  "Clientes abandonam devido à complexidade.",
                                level: "high",
                                score: {
                                  calculatedValue: 72,
                                  impact: 9,
                                  urgency: 8,
                                  effort: 6,
                                  confidence: 8,
                                },
                                status: "suggested",
                                relatedDiagnostic: "Churn no primeiro mês",
                                suggestedActions: [
                                  "Simplificar fluxo",
                                  "Tutorial interativo",
                                ],
                              },
                              variant: "compact",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="default"',
                            }),
                            e.jsx(ze, {
                              priority: {
                                id: "2",
                                title: "Reduzir Tempo de Onboarding",
                                explanation:
                                  "Clientes estão abandonando durante o onboarding devido à complexidade.",
                                level: "high",
                                score: {
                                  calculatedValue: 72,
                                  impact: 9,
                                  urgency: 8,
                                  effort: 6,
                                  confidence: 8,
                                },
                                status: "suggested",
                                relatedDiagnostic: "Churn no primeiro mês",
                                suggestedActions: [
                                  "Simplificar fluxo",
                                  "Tutorial interativo",
                                  "Checklist gamificado",
                                ],
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "RiskCard - Compact vs Default",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "O compact variant simplifica métricas de risco e oculta o plano de mitigação.",
                    }),
                    e.jsxs("div", {
                      className: "grid gap-4 md:grid-cols-2",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="compact"',
                            }),
                            e.jsx(Re, {
                              risk: {
                                id: "1",
                                title: "Concorrência Agressiva no Mid-Market",
                                description:
                                  "Concorrente X reduziu preços em 30%.",
                                probability: 65,
                                impact: 8,
                                severity: "high",
                                category: "commercial",
                                relatedKPIs: ["Churn Rate", "Win Rate"],
                                mitigationPlan: {
                                  actions: ["Análise de pricing"],
                                  owner: "João Silva",
                                  dueDate: "2024-04-15",
                                },
                                status: "identified",
                              },
                              variant: "compact",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="default"',
                            }),
                            e.jsx(Re, {
                              risk: {
                                id: "2",
                                title:
                                  "Concorrência Agressiva no Segmento Mid-Market",
                                description:
                                  "Concorrente X reduziu preços em 30% e está capturando nossa base de clientes.",
                                probability: 65,
                                impact: 8,
                                severity: "high",
                                category: "commercial",
                                relatedKPIs: ["Churn Rate", "Win Rate", "NPS"],
                                mitigationPlan: {
                                  actions: [
                                    "Análise de pricing",
                                    "Value proposition review",
                                    "Campanha retenção",
                                  ],
                                  owner: "João Silva",
                                  dueDate: "2024-04-15",
                                },
                                status: "identified",
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "ActionItemCard - Compact vs Default",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "O compact variant foca apenas em status e assignee para listas de ações.",
                    }),
                    e.jsxs("div", {
                      className: "grid gap-4 md:grid-cols-2",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="compact"',
                            }),
                            e.jsx(Le, {
                              action: {
                                id: "1",
                                title: "Implementar novo fluxo de onboarding",
                                description: "Redesenhar o processo.",
                                status: "in_progress",
                                priority: "high",
                                dueDate: "2024-04-15",
                                assignedTo: {
                                  name: "Maria Santos",
                                  avatar: "",
                                },
                                estimatedEffort: 40,
                                actualEffort: 16,
                                quickWin: !0,
                                dependencies: ["Design review"],
                                relatedPriority: "Reduzir Tempo de Onboarding",
                                impact: {
                                  metric: "TTV",
                                  expected: 40,
                                  achieved: 15,
                                },
                              },
                              variant: "compact",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="default"',
                            }),
                            e.jsx(Le, {
                              action: {
                                id: "2",
                                title: "Implementar novo fluxo de onboarding",
                                description:
                                  "Redesenhar o processo de onboarding com foco em reduzir o TTV.",
                                status: "in_progress",
                                priority: "high",
                                dueDate: "2024-04-15",
                                assignedTo: {
                                  name: "Maria Santos",
                                  avatar: "",
                                },
                                estimatedEffort: 40,
                                actualEffort: 16,
                                quickWin: !0,
                                dependencies: [
                                  "Design review",
                                  "Stakeholder approval",
                                ],
                                relatedPriority: "Reduzir Tempo de Onboarding",
                                impact: {
                                  metric: "TTV",
                                  expected: 40,
                                  achieved: 15,
                                },
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "EnhancedKPICard - Compact vs Default",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "O compact variant remove o gauge e sparkline, focando apenas no valor e trend.",
                    }),
                    e.jsxs("div", {
                      className: "grid gap-4 md:grid-cols-2",
                      children: [
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="compact"',
                            }),
                            e.jsx(Be, {
                              kpi: {
                                id: "1",
                                code: "KPI_FIN_001",
                                title: "Net Profit Margin",
                                value: 15.8,
                                unit: "%",
                                domain: "finance",
                                trend: {
                                  direction: "up",
                                  percentage: 2.3,
                                  period: "mês anterior",
                                },
                                benchmark: {
                                  target: 18,
                                  good: 15,
                                  warning: 12,
                                  current: "good",
                                },
                                sparklineData: [
                                  12.5, 13.2, 12.8, 14.1, 13.9, 15.2, 15.8,
                                ],
                                lastUpdated: "2024-03-15",
                                dataSource: "ERP",
                              },
                              variant: "compact",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "space-y-2",
                          children: [
                            e.jsx("span", {
                              className:
                                "text-xs text-muted-foreground font-medium",
                              children: 'variant="default"',
                            }),
                            e.jsx(Be, {
                              kpi: {
                                id: "2",
                                code: "KPI_FIN_001",
                                title: "Net Profit Margin",
                                value: 15.8,
                                unit: "%",
                                domain: "finance",
                                trend: {
                                  direction: "up",
                                  percentage: 2.3,
                                  period: "mês anterior",
                                },
                                benchmark: {
                                  target: 18,
                                  good: 15,
                                  warning: 12,
                                  current: "good",
                                },
                                sparklineData: [
                                  12.5, 13.2, 12.8, 14.1, 13.9, 15.2, 15.8,
                                ],
                                lastUpdated: "2024-03-15",
                                dataSource: "ERP",
                              },
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
          e.jsx(C, {
            value: "data",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "DataFileCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para exibir arquivos de dados com status de validação, mapeamento de colunas e estatísticas.",
                    }),
                    e.jsx(ys, {
                      file: {
                        id: "1",
                        name: "vendas_q1_2024.csv",
                        type: "csv",
                        size: 2457600,
                        rowCount: 15420,
                        columnCount: 12,
                        validationStatus: "valid",
                        mappedColumns: 10,
                        totalColumns: 12,
                        uploadDate: "2024-03-15T10:30:00Z",
                        source: "ERP",
                      },
                    }),
                    e.jsx(ys, {
                      file: {
                        id: "2",
                        name: "clientes.xlsx",
                        type: "excel",
                        size: 1024e3,
                        rowCount: 850,
                        columnCount: 8,
                        validationStatus: "warning",
                        errors: [
                          {
                            row: 42,
                            column: "email",
                            message: "Email inválido",
                          },
                        ],
                        mappedColumns: 6,
                        totalColumns: 8,
                        uploadDate: "2024-03-14T14:20:00Z",
                      },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "DataColumnCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para visualização de colunas individuais com métricas de qualidade e mapeamento.",
                    }),
                    e.jsx(Wr, {
                      column: {
                        name: "revenue",
                        type: "numeric",
                        mappedTo: "KPI_FIN_001",
                        quality: {
                          completeness: 98,
                          uniqueness: 100,
                          validity: 95,
                        },
                        sampleValues: [
                          "R$ 1.250,00",
                          "R$ 890,50",
                          "R$ 3.450,00",
                        ],
                        stats: {
                          min: 150,
                          max: 15e3,
                          mean: 3250,
                          median: 2800,
                          uniqueCount: 15420,
                        },
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "reports",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "ReportCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card rico para exibição de relatórios com preview, status e insights.",
                    }),
                    e.jsx(Zr, {
                      report: {
                        id: "1",
                        title: "Análise de Vendas Q1",
                        subtitle: "Performance trimestral e projeções",
                        category: "Financeiro",
                        status: "completed",
                        blockCount: 8,
                        aiInsights: 5,
                        createdAt: "2024-03-01T10:00:00Z",
                        updatedAt: "2024-03-10T15:30:00Z",
                        dataSourceName: "vendas_q1_2024.csv",
                        templateName: "Sales Analysis",
                      },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "TemplateCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para templates de relatórios com match score e KPIs esperados.",
                    }),
                    e.jsx(Yr, {
                      template: {
                        id: "1",
                        name: "Análise Financeira Completa",
                        code: "FIN_FULL",
                        industry: "financeiro",
                        category: "Financeiro",
                        description:
                          "Template completo para análise financeira com KPIs de receita, custos e lucratividade.",
                        rating: 4.5,
                        ratingCount: 128,
                        usageCount: 452,
                        tags: ["financeiro", "kpi", "dashboard"],
                        expectedKPIs: [
                          "revenue",
                          "margin",
                          "ebitda",
                          "cash_flow",
                        ],
                        matchScore: 87,
                        isSystem: !0,
                      },
                      variant: "recommendation",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "metrics",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "EnhancedKPICard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "KPI card avançado com sparkline, benchmark gauge e trend indicator.",
                    }),
                    e.jsx(Be, {
                      kpi: {
                        id: "1",
                        code: "KPI_FIN_001",
                        title: "Net Profit Margin",
                        value: 15.8,
                        unit: "%",
                        domain: "finance",
                        trend: {
                          direction: "up",
                          percentage: 2.3,
                          period: "mês anterior",
                        },
                        benchmark: {
                          target: 18,
                          good: 15,
                          warning: 12,
                          current: "good",
                        },
                        sparklineData: [
                          12.5, 13.2, 12.8, 14.1, 13.9, 15.2, 15.8,
                        ],
                        lastUpdated: "2024-03-15",
                        dataSource: "ERP",
                      },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "DomainMetricsCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para visão agregada de métricas por domínio com health score.",
                    }),
                    e.jsx(nt, {
                      domain: {
                        name: "Financeiro",
                        icon: B,
                        color: "bg-green-500",
                        metrics: 16,
                        healthScore: 85,
                        criticalCount: 0,
                        trend: 8,
                        status: "on-track",
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(C, {
            value: "insights",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "DiagnosticCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para diagnósticos AI com causas, implicações e severity.",
                    }),
                    e.jsx(dt, {
                      diagnostic: {
                        id: "1",
                        title: "Churn Rate Elevado",
                        description:
                          "Taxa de cancelamento acima do benchmark do setor em 23%.",
                        severity: "high",
                        confidence: 78,
                        causes: [
                          {
                            description: "Preço 15% acima da concorrência",
                            evidence: "Comparativo mercado",
                            relatedKPI: "CAC",
                          },
                          {
                            description: "Tempo de resposta do suporte > 24h",
                            evidence: "Tickets abertos",
                            relatedKPI: "CSAT",
                          },
                        ],
                        implications: [
                          "Perda estimada de R$ 450K ARR",
                          "Impacto negativo no NRR",
                          "Aumento do CAC para repor clientes",
                        ],
                        detectedAt: "2024-03-15T10:30:00Z",
                        affectedDomains: ["Comercial", "Suporte"],
                      },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "InsightCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para insights AI com confidence score e dados de suporte.",
                    }),
                    e.jsx(mt, {
                      insight: {
                        id: "1",
                        type: "trend",
                        title: "Crescimento Acelerado no Segmento Enterprise",
                        description:
                          "Detectamos um aumento de 34% no fechamento de deals enterprise nas últimas 4 semanas.",
                        confidence: 85,
                        supportingData: [
                          { metric: "Deals fechados", value: 42, change: 34 },
                          { metric: "Ticket médio", value: 45e3, change: 12 },
                        ],
                        chartType: "line",
                        generatedAt: "2024-03-15T10:30:00Z",
                        isNew: !0,
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(C, {
            value: "strategy",
            className: "mt-6 space-y-6",
            children: [
              e.jsxs("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: [
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "OpportunityCard",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Card para oportunidades identificadas com impacto financeiro e esforço.",
                      }),
                      e.jsx(ut, {
                        opportunity: {
                          id: "1",
                          title: "Upsell para Clientes SMB",
                          description:
                            "Identificamos 45 clientes SMB com potencial para upgrade para plano Pro.",
                          category: "revenue",
                          impact: {
                            financial: 18e4,
                            percentage: 25,
                            metric: "MRR",
                          },
                          effort: "medium",
                          confidence: 82,
                          quickWin: !0,
                          relatedActions: [
                            "Campanha email",
                            "Oferta especial",
                            "Demo produto",
                          ],
                          timeframe: "30 dias",
                        },
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "RiskCard",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Card para riscos com probabilidade, impacto e plano de mitigação.",
                      }),
                      e.jsx(Re, {
                        risk: {
                          id: "1",
                          title:
                            "Concorrência Agressiva no Segmento Mid-Market",
                          description:
                            "Concorrente X reduziu preços em 30% e está capturando nossa base de clientes.",
                          probability: 65,
                          impact: 8,
                          severity: "high",
                          category: "commercial",
                          relatedKPIs: ["Churn Rate", "Win Rate", "NPS"],
                          mitigationPlan: {
                            actions: [
                              "Análise de pricing",
                              "Value proposition review",
                              "Campanha retenção",
                            ],
                            owner: "João Silva",
                            dueDate: "2024-04-15",
                          },
                          status: "identified",
                        },
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "PriorityCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para prioridades com score breakdown (impact x urgency / effort).",
                    }),
                    e.jsx(ze, {
                      priority: {
                        id: "1",
                        title: "Reduzir Tempo de Onboarding",
                        explanation:
                          "Clientes estão abandonando durante o onboarding devido à complexidade.",
                        level: "high",
                        score: {
                          calculatedValue: 72,
                          impact: 9,
                          urgency: 8,
                          effort: 6,
                          confidence: 8,
                        },
                        status: "suggested",
                        relatedDiagnostic: "Churn no primeiro mês",
                        suggestedActions: [
                          "Simplificar fluxo",
                          "Tutorial interativo",
                          "Checklist gamificado",
                        ],
                      },
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsx(C, {
            value: "actions",
            className: "mt-6 space-y-6",
            children: e.jsxs("div", {
              className: "grid gap-6 md:grid-cols-2",
              children: [
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "ActionItemCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card para itens de ação com status, prioridade, assignee e tracking de esforço.",
                    }),
                    e.jsx(Le, {
                      action: {
                        id: "1",
                        title: "Implementar novo fluxo de onboarding",
                        description:
                          "Redesenhar o processo de onboarding com foco em reduzir o TTV.",
                        status: "in_progress",
                        priority: "high",
                        dueDate: "2024-04-15",
                        assignedTo: { name: "Maria Santos", avatar: "" },
                        estimatedEffort: 40,
                        actualEffort: 16,
                        quickWin: !0,
                        dependencies: ["Design review", "Stakeholder approval"],
                        relatedPriority: "Reduzir Tempo de Onboarding",
                        impact: { metric: "TTV", expected: 40, achieved: 15 },
                      },
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    e.jsx("h3", {
                      className: "text-lg font-semibold",
                      children: "ActionPlanSummaryCard",
                    }),
                    e.jsx("p", {
                      className: "text-sm text-muted-foreground",
                      children:
                        "Card de resumo do plano de ação com progresso geral e impacto estimado.",
                    }),
                    e.jsx(kt, {
                      plan: {
                        id: "1",
                        title: "Redução de Churn - Q1 2024",
                        description:
                          "Plano estratégico para reduzir a taxa de churn em 15% no primeiro trimestre.",
                        totalActions: 12,
                        completedActions: 5,
                        inProgressActions: 4,
                        blockedActions: 0,
                        totalEstimatedImpact: 45e4,
                        achievedImpact: 125e3,
                        status: "active",
                        lastActivity: "2024-03-15T10:30:00Z",
                        startDate: "2024-01-15",
                        endDate: "2024-03-31",
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsxs(C, {
            value: "library",
            className: "mt-6 space-y-6",
            children: [
              e.jsxs("div", {
                className: "grid gap-6 md:grid-cols-2",
                children: [
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "ChallengeCard",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Card para desafios da biblioteca estratégica com sintomas e KPIs relacionados.",
                      }),
                      e.jsx(Nt, {
                        challenge: {
                          id: "1",
                          code: "CH_SAL_001",
                          title: "Baixa Conversão de Leads",
                          description:
                            "Taxa de conversão de leads para oportunidades abaixo do benchmark.",
                          domain: "sales",
                          severity: 4,
                          symptoms: [
                            "MQL para SQL < 15%",
                            "Tempo de resposta > 24h",
                            "Lead scoring inefetivo",
                          ],
                          relatedKPIs: [
                            {
                              code: "KPI_SAL_001",
                              name: "Lead Conversion Rate",
                              currentValue: 12,
                              threshold: 20,
                            },
                            {
                              code: "KPI_SAL_002",
                              name: "Time to First Contact",
                              currentValue: 28,
                              threshold: 24,
                            },
                          ],
                        },
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "LeverCard",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children:
                          "Card para alavancas estratégicas com impacto, complexidade e ações incluídas.",
                      }),
                      e.jsx(Ct, {
                        lever: {
                          id: "1",
                          code: "LEV_FIN_001",
                          title: "Otimização de Pricing",
                          description:
                            "Revisão e ajuste de estratégia de precificação baseada em valor.",
                          category: "financeiro",
                          impactLevel: "high",
                          complexity: "medium",
                          typicalTimeframeDays: 60,
                          targetKPI: {
                            code: "KPI_FIN_001",
                            name: "Gross Margin",
                            expectedImprovement: 8,
                          },
                          actions: [
                            {
                              id: "1",
                              title: "Análise de elasticidade",
                              priorityScore: 9,
                            },
                            {
                              id: "2",
                              title: "Benchmark competitivo",
                              priorityScore: 8,
                            },
                            {
                              id: "3",
                              title: "Teste A/B de novos preços",
                              priorityScore: 8,
                            },
                          ],
                          isActive: !0,
                        },
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "space-y-4",
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-semibold",
                    children: "GoalTrackerCard",
                  }),
                  e.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children:
                      "Card de acompanhamento de metas com timeline, progresso e histórico.",
                  }),
                  e.jsx(St, {
                    goal: {
                      id: "1",
                      code: "G_CHURN_001",
                      title: "Reduzir Churn em 15%",
                      description:
                        "Reduzir a taxa mensal de churn de 4.2% para 3.6%.",
                      targetType: "decrease",
                      progress: 67,
                      suggestedTimeframeDays: 90,
                      startedAt: "2024-01-15T10:00:00Z",
                      history: [
                        { date: "2024-01-15", progress: 0 },
                        { date: "2024-02-01", progress: 15 },
                        { date: "2024-02-15", progress: 32 },
                        { date: "2024-03-01", progress: 48 },
                        { date: "2024-03-15", progress: 67 },
                      ],
                    },
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Et() {
  return e.jsx(Ya, {
    children: e.jsxs(w, {
      element: e.jsx(kr, {}),
      children: [
        e.jsx(w, { index: !0, element: e.jsx(js, {}) }),
        e.jsx(w, { path: "principles", element: e.jsx(te, {}) }),
        e.jsx(w, {
          path: "identity/logo",
          element: e.jsx(os, { to: "/design-system/identity", replace: !0 }),
        }),
        e.jsx(w, { path: "identity/colors", element: e.jsx(ke, {}) }),
        e.jsx(w, { path: "identity/typography", element: e.jsx(Or, {}) }),
        e.jsx(w, { path: "identity/*", element: e.jsx(ke, {}) }),
        e.jsx(w, { path: "components/ui", element: e.jsx(bs, {}) }),
        e.jsx(w, { path: "components/cards", element: e.jsx(Bt, {}) }),
        e.jsx(w, {
          path: "components/layout",
          element: e.jsx(os, {
            to: "/design-system/guidelines/hierarchy",
            replace: !0,
          }),
        }),
        e.jsx(w, { path: "components/*", element: e.jsx(bs, {}) }),
        e.jsx(w, { path: "guidelines/hierarchy", element: e.jsx(te, {}) }),
        e.jsx(w, { path: "guidelines/colors", element: e.jsx(ke, {}) }),
        e.jsx(w, { path: "guidelines/responsive", element: e.jsx(te, {}) }),
        e.jsx(w, { path: "guidelines/a11y", element: e.jsx(Ns, {}) }),
        e.jsx(w, { path: "guidelines/*", element: e.jsx(te, {}) }),
        e.jsx(w, { path: "best-practices", element: e.jsx(Ns, {}) }),
        e.jsx(w, { path: "*", element: e.jsx(js, {}) }),
      ],
    }),
  });
}
export { Et as DesignSystem, Et as default };
