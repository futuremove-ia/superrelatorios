import {
  u as I,
  j as e,
  a4 as V,
  aX as R,
  B as i,
  a5 as q,
  a6 as X,
  a7 as H,
  L as r,
  I as c,
  t as j,
  v as g,
  w as u,
  x as y,
  y as t,
  E as J,
  T as K,
  k as W,
  l as v,
  m as N,
  C as f,
  g as w,
} from "./index-DRWQgA5q.js";
import { r as l } from "./router-XBfdTQ0K.js";
import { B as z } from "./badge-DD2chybY.js";
import {
  ag as _,
  S as $,
  ak as G,
  a8 as b,
  _ as Q,
  ae as Y,
  az as Z,
  aL as S,
  aT as ee,
  ax as se,
  aU as ae,
  aV as te,
  aW as ie,
  aX as h,
  a0 as le,
} from "./utils-Er8ll4su.js";
const xe = () => {
  const { t: a } = I(),
    [T, C] = l.useState([]),
    [D, L] = l.useState([]),
    [P, p] = l.useState(!0),
    [o, A] = l.useState(""),
    [d, O] = l.useState("all"),
    [E, m] = l.useState(!1),
    [ne, re] = l.useState(null);
  l.useEffect(() => {
    (async () => {
      p(!0);
      const n = [
          {
            id: "1",
            name: "SuperRelatórios S.A.",
            description: "Empresa principal de tecnologia e analytics",
            type: "company",
            status: "active",
            level: 0,
            employees: 150,
            budget: 5e6,
            location: "São Paulo, SP",
            contact: {
              email: "contato@superrelatorios.com",
              phone: "+55 11 9999-9999",
            },
            createdAt: "2023-01-15",
            updatedAt: "2024-03-20",
          },
          {
            id: "2",
            name: "Departamento de Tecnologia",
            description: "Desenvolvimento e infraestrutura de software",
            type: "department",
            status: "active",
            parent: "1",
            level: 1,
            employees: 45,
            budget: 15e5,
            location: "São Paulo, SP",
            contact: {
              email: "tech@superrelatorios.com",
              phone: "+55 11 8888-8888",
            },
            createdAt: "2023-02-01",
            updatedAt: "2024-03-18",
          },
          {
            id: "3",
            name: "Equipe de Analytics",
            description: "Análise de dados e business intelligence",
            type: "team",
            status: "active",
            parent: "2",
            level: 2,
            employees: 12,
            budget: 4e5,
            location: "São Paulo, SP",
            createdAt: "2023-03-15",
            updatedAt: "2024-03-19",
          },
        ],
        x = [
          {
            id: "1",
            name: "João Silva",
            email: "joao.silva@superrelatorios.com",
            role: "CEO",
            department: "SuperRelatórios S.A.",
            status: "active",
            lastLogin: "2024-03-20T10:30:00",
            permissions: ["admin", "read", "write", "delete"],
          },
          {
            id: "2",
            name: "Maria Santos",
            email: "maria.santos@superrelatorios.com",
            role: "CTO",
            department: "Departamento de Tecnologia",
            status: "active",
            lastLogin: "2024-03-20T09:15:00",
            permissions: ["admin", "read", "write"],
          },
          {
            id: "3",
            name: "Pedro Costa",
            email: "pedro.costa@superrelatorios.com",
            role: "Data Analyst",
            department: "Equipe de Analytics",
            status: "active",
            lastLogin: "2024-03-19T16:45:00",
            permissions: ["read", "write"],
          },
        ];
      (C(n), L(x), p(!1));
    })();
  }, []);
  const k = T.filter((s) => {
      const n =
          s.name.toLowerCase().includes(o.toLowerCase()) ||
          s.description.toLowerCase().includes(o.toLowerCase()),
        x = d === "all" || s.type === d;
      return n && x;
    }),
    M = (s) => {
      switch (s) {
        case "active":
          return "bg-green-100 text-green-800";
        case "inactive":
          return "bg-yellow-100 text-yellow-800";
        case "archived":
          return "bg-gray-100 text-gray-800";
        default:
          return "bg-gray-100 text-gray-800";
      }
    },
    B = (s) => {
      switch (s) {
        case "company":
          return e.jsx(h, { className: "w-4 h-4" });
        case "department":
          return e.jsx(h, { className: "w-4 h-4" });
        case "team":
          return e.jsx(b, { className: "w-4 h-4" });
        case "project":
          return e.jsx(le, { className: "w-4 h-4" });
        default:
          return e.jsx(h, { className: "w-4 h-4" });
      }
    },
    F = ({ org: s }) =>
      e.jsx(f, {
        className: "hover:shadow-md transition-shadow",
        children: e.jsx(w, {
          className: "p-4",
          children: e.jsxs("div", {
            className: "flex items-start justify-between",
            children: [
              e.jsxs("div", {
                className: "flex-1",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      B(s.type),
                      e.jsx("h3", {
                        className: "font-semibold text-gray-900",
                        children: s.name,
                      }),
                      e.jsx(z, { className: M(s.status), children: s.status }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-600 mt-1",
                    children: s.description,
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-2 gap-2 mt-3",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center text-sm text-gray-500",
                        children: [
                          e.jsx(b, { className: "w-4 h-4 mr-1" }),
                          s.employees,
                          " employees",
                        ],
                      }),
                      s.budget &&
                        e.jsxs("div", {
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            e.jsx(Q, { className: "w-4 h-4 mr-1" }),
                            "R$ ",
                            s.budget.toLocaleString(),
                          ],
                        }),
                      s.location &&
                        e.jsxs("div", {
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            e.jsx(Y, { className: "w-4 h-4 mr-1" }),
                            s.location,
                          ],
                        }),
                      e.jsxs("div", {
                        className: "flex items-center text-sm text-gray-500",
                        children: [
                          e.jsx(Z, { className: "w-4 h-4 mr-1" }),
                          new Date(s.createdAt).toLocaleDateString(),
                        ],
                      }),
                    ],
                  }),
                  s.contact &&
                    e.jsxs("div", {
                      className: "mt-3 space-y-1",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            e.jsx(S, { className: "w-4 h-4 mr-1" }),
                            s.contact.email,
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            e.jsx(ee, { className: "w-4 h-4 mr-1" }),
                            s.contact.phone,
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "flex space-x-2 ml-4",
                children: [
                  e.jsx(i, {
                    variant: "ghost",
                    size: "sm",
                    children: e.jsx(se, { className: "w-4 h-4" }),
                  }),
                  e.jsx(i, {
                    variant: "ghost",
                    size: "sm",
                    children: e.jsx(ae, { className: "w-4 h-4" }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    U = ({ user: s }) =>
      e.jsx(f, {
        className: "hover:shadow-md transition-shadow",
        children: e.jsxs(w, {
          className: "p-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    e.jsx("div", {
                      className:
                        "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",
                      children: e.jsx("span", {
                        className: "text-blue-600 font-semibold",
                        children: s.name
                          .split(" ")
                          .map((n) => n[0])
                          .join(""),
                      }),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("h4", {
                          className: "font-semibold text-gray-900",
                          children: s.name,
                        }),
                        e.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: s.role,
                        }),
                        e.jsx("p", {
                          className: "text-xs text-gray-500",
                          children: s.department,
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-right",
                  children: [
                    e.jsx(z, {
                      className:
                        s.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800",
                      children: s.status,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-gray-500 mt-1",
                      children: s.lastLogin
                        ? new Date(s.lastLogin).toLocaleDateString()
                        : "Never",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "mt-3 flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  className: "flex items-center text-sm text-gray-500",
                  children: [e.jsx(S, { className: "w-4 h-4 mr-1" }), s.email],
                }),
                e.jsxs("div", {
                  className: "flex space-x-2",
                  children: [
                    e.jsx(i, {
                      variant: "ghost",
                      size: "sm",
                      children: e.jsx(te, { className: "w-4 h-4" }),
                    }),
                    e.jsx(i, {
                      variant: "ghost",
                      size: "sm",
                      children: e.jsx(ie, { className: "w-4 h-4" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
  return P
    ? e.jsx("div", {
        className: "flex items-center justify-center h-96",
        children: e.jsx("div", {
          className:
            "animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600",
        }),
      })
    : e.jsxs("div", {
        className: "space-y-6 p-6",
        children: [
          e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900",
                    children: a("organization.title"),
                  }),
                  e.jsx("p", {
                    className: "text-gray-600 mt-1",
                    children: a("organization.subtitle"),
                  }),
                ],
              }),
              e.jsxs(V, {
                open: E,
                onOpenChange: m,
                children: [
                  e.jsx(R, {
                    asChild: !0,
                    children: e.jsxs(i, {
                      children: [
                        e.jsx(_, { className: "w-4 h-4 mr-2" }),
                        a("organization.create"),
                      ],
                    }),
                  }),
                  e.jsxs(q, {
                    className: "max-w-2xl",
                    children: [
                      e.jsx(X, {
                        children: e.jsx(H, {
                          children: a("organization.createNew"),
                        }),
                      }),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx(r, {
                                    htmlFor: "name",
                                    children: a("organization.name"),
                                  }),
                                  e.jsx(c, {
                                    id: "name",
                                    placeholder: a(
                                      "organization.namePlaceholder",
                                    ),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(r, {
                                    htmlFor: "type",
                                    children: a("organization.type"),
                                  }),
                                  e.jsxs(j, {
                                    children: [
                                      e.jsx(g, {
                                        children: e.jsx(u, {
                                          placeholder: a(
                                            "organization.selectType",
                                          ),
                                        }),
                                      }),
                                      e.jsxs(y, {
                                        children: [
                                          e.jsx(t, {
                                            value: "company",
                                            children: a(
                                              "organization.types.company",
                                            ),
                                          }),
                                          e.jsx(t, {
                                            value: "department",
                                            children: a(
                                              "organization.types.department",
                                            ),
                                          }),
                                          e.jsx(t, {
                                            value: "team",
                                            children: a(
                                              "organization.types.team",
                                            ),
                                          }),
                                          e.jsx(t, {
                                            value: "project",
                                            children: a(
                                              "organization.types.project",
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
                          e.jsxs("div", {
                            children: [
                              e.jsx(r, {
                                htmlFor: "description",
                                children: a("organization.description"),
                              }),
                              e.jsx(J, {
                                id: "description",
                                placeholder: a(
                                  "organization.descriptionPlaceholder",
                                ),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx(r, {
                                    htmlFor: "employees",
                                    children: a("organization.employees"),
                                  }),
                                  e.jsx(c, {
                                    id: "employees",
                                    type: "number",
                                    placeholder: "0",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx(r, {
                                    htmlFor: "budget",
                                    children: a("organization.budget"),
                                  }),
                                  e.jsx(c, {
                                    id: "budget",
                                    type: "number",
                                    placeholder: "0",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex justify-end space-x-2",
                            children: [
                              e.jsx(i, {
                                variant: "outline",
                                onClick: () => m(!1),
                                children: a("common.cancel"),
                              }),
                              e.jsx(i, {
                                onClick: () => m(!1),
                                children: a("organization.create"),
                              }),
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
          e.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              e.jsx("div", {
                className: "flex-1",
                children: e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx($, {
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4",
                    }),
                    e.jsx(c, {
                      placeholder: a("organization.searchPlaceholder"),
                      value: o,
                      onChange: (s) => A(s.target.value),
                      className: "pl-10",
                    }),
                  ],
                }),
              }),
              e.jsxs(j, {
                value: d,
                onValueChange: O,
                children: [
                  e.jsx(g, {
                    className: "w-48",
                    children: e.jsx(u, {
                      placeholder: a("organization.filterByType"),
                    }),
                  }),
                  e.jsxs(y, {
                    children: [
                      e.jsx(t, {
                        value: "all",
                        children: a("organization.allTypes"),
                      }),
                      e.jsx(t, {
                        value: "company",
                        children: a("organization.types.company"),
                      }),
                      e.jsx(t, {
                        value: "department",
                        children: a("organization.types.department"),
                      }),
                      e.jsx(t, {
                        value: "team",
                        children: a("organization.types.team"),
                      }),
                      e.jsx(t, {
                        value: "project",
                        children: a("organization.types.project"),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(i, {
                variant: "outline",
                children: [
                  e.jsx(G, { className: "w-4 h-4 mr-2" }),
                  a("common.filters"),
                ],
              }),
            ],
          }),
          e.jsxs(K, {
            defaultValue: "organizations",
            className: "space-y-4",
            children: [
              e.jsxs(W, {
                className: "grid w-full grid-cols-2",
                children: [
                  e.jsx(v, {
                    value: "organizations",
                    children: a("organization.organizations"),
                  }),
                  e.jsx(v, {
                    value: "users",
                    children: a("organization.users"),
                  }),
                ],
              }),
              e.jsx(N, {
                value: "organizations",
                className: "space-y-4",
                children: e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: k.map((s) => e.jsx(F, { org: s }, s.id)),
                }),
              }),
              e.jsx(N, {
                value: "users",
                className: "space-y-4",
                children: e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: D.map((s) => e.jsx(U, { user: s }, s.id)),
                }),
              }),
            ],
          }),
        ],
      });
};
export { xe as default };
