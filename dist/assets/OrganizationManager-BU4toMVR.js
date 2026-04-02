import { u as U, j as e, B as i } from "./index-CzFfXFeY.js";
import { r } from "./vendor-Bp-AcFIh.js";
import { C as j, a as g } from "./card-DEQcRzjn.js";
import { B as u } from "./badge-DQqwMB41.js";
import { I as c } from "./input-BTdCt8gt.js";
import { L as n } from "./label-BHpRHfN1.js";
import { T as V } from "./textarea-B41S52CR.js";
import { S as y, a as v, b as N, c as f, d as t } from "./select-CuHe0xdE.js";
import { D as q, f as R, a as H, b as J, c as K } from "./dialog-g9IgJpzp.js";
import { T as Y, a as $, b as w, c as b } from "./tabs-Cn6uPRT7.js";
import {
  n as G,
  s as Q,
  r as W,
  h as z,
  S as X,
  m as Z,
  Y as _,
  a9 as S,
  an as ee,
  V as se,
  ao as ae,
  ag as te,
  ap as ie,
  aq as h,
  c as re,
} from "./utils-BYPr0Dmq.js";
import "./router-Db_Yswnp.js";
import "./index-Bxi3BZuB.js";
import "./index-CKeeGB76.js";
import "./index-Dsfa9Guj.js";
import "./index-DM8yqzt6.js";
import "./index-BwzYsyB4.js";
const be = () => {
  const { t: a } = U(),
    [T, C] = r.useState([]),
    [D, L] = r.useState([]),
    [P, p] = r.useState(!0),
    [o, A] = r.useState(""),
    [d, O] = r.useState("all"),
    [E, m] = r.useState(!1);
  (r.useState(null),
    r.useEffect(() => {
      (async () => {
        p(!0);
        const l = [
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
        (C(l), L(x), p(!1));
      })();
    }, []));
  const M = T.filter((s) => {
      const l =
          s.name.toLowerCase().includes(o.toLowerCase()) ||
          s.description.toLowerCase().includes(o.toLowerCase()),
        x = d === "all" || s.type === d;
      return l && x;
    }),
    k = (s) => {
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
          return e.jsx(z, { className: "w-4 h-4" });
        case "project":
          return e.jsx(re, { className: "w-4 h-4" });
        default:
          return e.jsx(h, { className: "w-4 h-4" });
      }
    },
    F = ({ org: s }) =>
      e.jsx(j, {
        className: "hover:shadow-md transition-shadow",
        children: e.jsx(g, {
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
                      e.jsx(u, { className: k(s.status), children: s.status }),
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
                          e.jsx(z, { className: "w-4 h-4 mr-1" }),
                          s.employees,
                          " employees",
                        ],
                      }),
                      s.budget &&
                        e.jsxs("div", {
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            e.jsx(X, { className: "w-4 h-4 mr-1" }),
                            "R$ ",
                            s.budget.toLocaleString(),
                          ],
                        }),
                      s.location &&
                        e.jsxs("div", {
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            e.jsx(Z, { className: "w-4 h-4 mr-1" }),
                            s.location,
                          ],
                        }),
                      e.jsxs("div", {
                        className: "flex items-center text-sm text-gray-500",
                        children: [
                          e.jsx(_, { className: "w-4 h-4 mr-1" }),
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
    I = ({ user: s }) =>
      e.jsx(j, {
        className: "hover:shadow-md transition-shadow",
        children: e.jsxs(g, {
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
                          .map((l) => l[0])
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
                    e.jsx(u, {
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
              e.jsxs(q, {
                open: E,
                onOpenChange: m,
                children: [
                  e.jsx(R, {
                    asChild: !0,
                    children: e.jsxs(i, {
                      children: [
                        e.jsx(G, { className: "w-4 h-4 mr-2" }),
                        a("organization.create"),
                      ],
                    }),
                  }),
                  e.jsxs(H, {
                    className: "max-w-2xl",
                    children: [
                      e.jsx(J, {
                        children: e.jsx(K, {
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
                                  e.jsx(n, {
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
                                  e.jsx(n, {
                                    htmlFor: "type",
                                    children: a("organization.type"),
                                  }),
                                  e.jsxs(y, {
                                    children: [
                                      e.jsx(v, {
                                        children: e.jsx(N, {
                                          placeholder: a(
                                            "organization.selectType",
                                          ),
                                        }),
                                      }),
                                      e.jsxs(f, {
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
                              e.jsx(n, {
                                htmlFor: "description",
                                children: a("organization.description"),
                              }),
                              e.jsx(V, {
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
                                  e.jsx(n, {
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
                                  e.jsx(n, {
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
                    e.jsx(Q, {
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
              e.jsxs(y, {
                value: d,
                onValueChange: O,
                children: [
                  e.jsx(v, {
                    className: "w-48",
                    children: e.jsx(N, {
                      placeholder: a("organization.filterByType"),
                    }),
                  }),
                  e.jsxs(f, {
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
                  e.jsx(W, { className: "w-4 h-4 mr-2" }),
                  a("common.filters"),
                ],
              }),
            ],
          }),
          e.jsxs(Y, {
            defaultValue: "organizations",
            className: "space-y-4",
            children: [
              e.jsxs($, {
                className: "grid w-full grid-cols-2",
                children: [
                  e.jsx(w, {
                    value: "organizations",
                    children: a("organization.organizations"),
                  }),
                  e.jsx(w, {
                    value: "users",
                    children: a("organization.users"),
                  }),
                ],
              }),
              e.jsx(b, {
                value: "organizations",
                className: "space-y-4",
                children: e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: M.map((s) => e.jsx(F, { org: s }, s.id)),
                }),
              }),
              e.jsx(b, {
                value: "users",
                className: "space-y-4",
                children: e.jsx("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: D.map((s) => e.jsx(I, { user: s }, s.id)),
                }),
              }),
            ],
          }),
        ],
      });
};
export { be as default };
