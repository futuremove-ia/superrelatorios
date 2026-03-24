import { u as F, j as a, B as o } from "./index-BZzvAVnT.js";
import { r as s } from "./vendor-BgR6OOld.js";
import { C as v, a as z } from "./card-DCmFy9yX.js";
import { B as M } from "./badge-DMGJasfj.js";
import { I as r } from "./input-BnDZujQi.js";
import { L as p } from "./label-DNWlrZfM.js";
import { T as k } from "./textarea-BnFcy4sU.js";
import { S as O, a as h, b as f, c as u, d as e } from "./select-BPvc3et1.js";
import { D as R, f as q, a as H, b as K, c as J } from "./dialog-CVqcLEoi.js";
import { T as Y, a as $, b as B, c as D } from "./tabs-C6dO4E1n.js";
import {
  p as G,
  s as Q,
  r as W,
  h as N,
  S as X,
  m as Z,
  Y as _,
  aa as j,
  ai as aa,
  V as na,
  aj as ta,
  ak as ea,
  al as oa,
  am as l,
  c as sa,
} from "./utils-C25gojUd.js";
import "./router-D2JcpG7e.js";
import "./index-Cda9Zv0V.js";
import "./index-CIr2Jy9Y.js";
import "./index-DaXQxPyL.js";
import "./index-lGW99eWD.js";
import "./index-DUaPDS5r.js";
const Da = () => {
  const { t } = F(),
    [y, A] = s.useState([]),
    [b, w] = s.useState([]),
    [S, x] = s.useState(!0),
    [c, C] = s.useState(""),
    [d, T] = s.useState("all"),
    [I, m] = s.useState(!1);
  (s.useState(null),
    s.useEffect(() => {
      (async () => {
        x(!0);
        const i = [
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
          g = [
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
        (A(i), w(g), x(!1));
      })();
    }, []));
  const L = y.filter((n) => {
      const i =
          n.name.toLowerCase().includes(c.toLowerCase()) ||
          n.description.toLowerCase().includes(c.toLowerCase()),
        g = d === "all" || n.type === d;
      return i && g;
    }),
    P = (n) => {
      switch (n) {
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
    U = (n) => {
      switch (n) {
        case "company":
          return a.jsx(l, {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:188:29",
            "data-lov-name": "Building2",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "188",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "Building2",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "department":
          return a.jsx(l, {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:189:32",
            "data-lov-name": "Building2",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "189",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "Building2",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "team":
          return a.jsx(N, {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:190:26",
            "data-lov-name": "Users",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "190",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "Users",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        case "project":
          return a.jsx(sa, {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:191:29",
            "data-lov-name": "Settings",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "191",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "Settings",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
        default:
          return a.jsx(l, {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:192:22",
            "data-lov-name": "Building2",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "192",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "Building2",
            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
            className: "w-4 h-4",
          });
      }
    },
    V = ({ org: n }) =>
      a.jsx(v, {
        "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:197:4",
        "data-lov-name": "Card",
        "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
        "data-component-line": "197",
        "data-component-file": "OrganizationManager.tsx",
        "data-component-name": "Card",
        "data-component-content":
          "%7B%22className%22%3A%22hover%3Ashadow-md%20transition-shadow%22%7D",
        className: "hover:shadow-md transition-shadow",
        children: a.jsx(z, {
          "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:198:6",
          "data-lov-name": "CardContent",
          "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
          "data-component-line": "198",
          "data-component-file": "OrganizationManager.tsx",
          "data-component-name": "CardContent",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          children: a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:199:8",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "199",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-start%20justify-between%22%7D",
            className: "flex items-start justify-between",
            children: [
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\OrganizationManager.tsx:200:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "200",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex-1%22%7D",
                className: "flex-1",
                children: [
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:201:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "201",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22flex%20items-center%20space-x-2%22%7D",
                    className: "flex items-center space-x-2",
                    children: [
                      U(n.type),
                      a.jsx("h3", {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:203:14",
                        "data-lov-name": "h3",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "203",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "h3",
                        "data-component-content":
                          "%7B%22className%22%3A%22font-semibold%20text-gray-900%22%7D",
                        className: "font-semibold text-gray-900",
                        children: n.name,
                      }),
                      a.jsx(M, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:204:14",
                        "data-lov-name": "Badge",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "204",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "Badge",
                        "data-component-content": "%7B%7D",
                        className: P(n.status),
                        children: n.status,
                      }),
                    ],
                  }),
                  a.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:208:12",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "208",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-sm%20text-gray-600%20mt-1%22%7D",
                    className: "text-sm text-gray-600 mt-1",
                    children: n.description,
                  }),
                  a.jsxs("div", {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:210:12",
                    "data-lov-name": "div",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "210",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "div",
                    "data-component-content":
                      "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-2%20mt-3%22%7D",
                    className: "grid grid-cols-2 gap-2 mt-3",
                    children: [
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:211:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "211",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22text%22%3A%22employees%22%2C%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                        className: "flex items-center text-sm text-gray-500",
                        children: [
                          a.jsx(N, {
                            "data-lov-id":
                              "src\\pages\\app\\OrganizationManager.tsx:212:16",
                            "data-lov-name": "Users",
                            "data-component-path":
                              "src\\pages\\app\\OrganizationManager.tsx",
                            "data-component-line": "212",
                            "data-component-file": "OrganizationManager.tsx",
                            "data-component-name": "Users",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                            className: "w-4 h-4 mr-1",
                          }),
                          n.employees,
                          " employees",
                        ],
                      }),
                      n.budget &&
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:216:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "216",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22text%22%3A%22R%24%22%2C%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            a.jsx(X, {
                              "data-lov-id":
                                "src\\pages\\app\\OrganizationManager.tsx:217:18",
                              "data-lov-name": "Shield",
                              "data-component-path":
                                "src\\pages\\app\\OrganizationManager.tsx",
                              "data-component-line": "217",
                              "data-component-file": "OrganizationManager.tsx",
                              "data-component-name": "Shield",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                              className: "w-4 h-4 mr-1",
                            }),
                            "R$ ",
                            n.budget.toLocaleString(),
                          ],
                        }),
                      n.location &&
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:222:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "222",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            a.jsx(Z, {
                              "data-lov-id":
                                "src\\pages\\app\\OrganizationManager.tsx:223:18",
                              "data-lov-name": "MapPin",
                              "data-component-path":
                                "src\\pages\\app\\OrganizationManager.tsx",
                              "data-component-line": "223",
                              "data-component-file": "OrganizationManager.tsx",
                              "data-component-name": "MapPin",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                              className: "w-4 h-4 mr-1",
                            }),
                            n.location,
                          ],
                        }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:227:14",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "227",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                        className: "flex items-center text-sm text-gray-500",
                        children: [
                          a.jsx(_, {
                            "data-lov-id":
                              "src\\pages\\app\\OrganizationManager.tsx:228:16",
                            "data-lov-name": "Calendar",
                            "data-component-path":
                              "src\\pages\\app\\OrganizationManager.tsx",
                            "data-component-line": "228",
                            "data-component-file": "OrganizationManager.tsx",
                            "data-component-name": "Calendar",
                            "data-component-content":
                              "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                            className: "w-4 h-4 mr-1",
                          }),
                          new Date(n.createdAt).toLocaleDateString(),
                        ],
                      }),
                    ],
                  }),
                  n.contact &&
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:234:14",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "234",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22mt-3%20space-y-1%22%7D",
                      className: "mt-3 space-y-1",
                      children: [
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:235:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "235",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            a.jsx(j, {
                              "data-lov-id":
                                "src\\pages\\app\\OrganizationManager.tsx:236:18",
                              "data-lov-name": "Mail",
                              "data-component-path":
                                "src\\pages\\app\\OrganizationManager.tsx",
                              "data-component-line": "236",
                              "data-component-file": "OrganizationManager.tsx",
                              "data-component-name": "Mail",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                              className: "w-4 h-4 mr-1",
                            }),
                            n.contact.email,
                          ],
                        }),
                        a.jsxs("div", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:239:16",
                          "data-lov-name": "div",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "239",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "div",
                          "data-component-content":
                            "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                          className: "flex items-center text-sm text-gray-500",
                          children: [
                            a.jsx(aa, {
                              "data-lov-id":
                                "src\\pages\\app\\OrganizationManager.tsx:240:18",
                              "data-lov-name": "Phone",
                              "data-component-path":
                                "src\\pages\\app\\OrganizationManager.tsx",
                              "data-component-line": "240",
                              "data-component-file": "OrganizationManager.tsx",
                              "data-component-name": "Phone",
                              "data-component-content":
                                "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                              className: "w-4 h-4 mr-1",
                            }),
                            n.contact.phone,
                          ],
                        }),
                      ],
                    }),
                ],
              }),
              a.jsxs("div", {
                "data-lov-id":
                  "src\\pages\\app\\OrganizationManager.tsx:247:10",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "247",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex%20space-x-2%20ml-4%22%7D",
                className: "flex space-x-2 ml-4",
                children: [
                  a.jsx(o, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:248:12",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "248",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    variant: "ghost",
                    size: "sm",
                    children: a.jsx(na, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:249:14",
                      "data-lov-name": "Edit",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "249",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Edit",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                      className: "w-4 h-4",
                    }),
                  }),
                  a.jsx(o, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:251:12",
                    "data-lov-name": "Button",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "251",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "Button",
                    "data-component-content": "%7B%7D",
                    variant: "ghost",
                    size: "sm",
                    children: a.jsx(ta, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:252:14",
                      "data-lov-name": "MoreVertical",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "252",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "MoreVertical",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                      className: "w-4 h-4",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    E = ({ user: n }) =>
      a.jsx(v, {
        "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:261:4",
        "data-lov-name": "Card",
        "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
        "data-component-line": "261",
        "data-component-file": "OrganizationManager.tsx",
        "data-component-name": "Card",
        "data-component-content":
          "%7B%22className%22%3A%22hover%3Ashadow-md%20transition-shadow%22%7D",
        className: "hover:shadow-md transition-shadow",
        children: a.jsxs(z, {
          "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:262:6",
          "data-lov-name": "CardContent",
          "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
          "data-component-line": "262",
          "data-component-file": "OrganizationManager.tsx",
          "data-component-name": "CardContent",
          "data-component-content": "%7B%22className%22%3A%22p-4%22%7D",
          className: "p-4",
          children: [
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:263:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
              "data-component-line": "263",
              "data-component-file": "OrganizationManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
              className: "flex items-center justify-between",
              children: [
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:264:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "264",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20space-x-3%22%7D",
                  className: "flex items-center space-x-3",
                  children: [
                    a.jsx("div", {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:265:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "265",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "div",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-10%20h-10%20bg-blue-100%20rounded-full%20flex%20items-center%20justify-center%22%7D",
                      className:
                        "w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",
                      children: a.jsx("span", {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:266:14",
                        "data-lov-name": "span",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "266",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "span",
                        "data-component-content":
                          "%7B%22className%22%3A%22text-blue-600%20font-semibold%22%7D",
                        className: "text-blue-600 font-semibold",
                        children: n.name
                          .split(" ")
                          .map((i) => i[0])
                          .join(""),
                      }),
                    }),
                    a.jsxs("div", {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:270:12",
                      "data-lov-name": "div",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "270",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "div",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx("h4", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:271:14",
                          "data-lov-name": "h4",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "271",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "h4",
                          "data-component-content":
                            "%7B%22className%22%3A%22font-semibold%20text-gray-900%22%7D",
                          className: "font-semibold text-gray-900",
                          children: n.name,
                        }),
                        a.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:272:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "272",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-sm%20text-gray-600%22%7D",
                          className: "text-sm text-gray-600",
                          children: n.role,
                        }),
                        a.jsx("p", {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:273:14",
                          "data-lov-name": "p",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "273",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "p",
                          "data-component-content":
                            "%7B%22className%22%3A%22text-xs%20text-gray-500%22%7D",
                          className: "text-xs text-gray-500",
                          children: n.department,
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:277:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "277",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22text-right%22%7D",
                  className: "text-right",
                  children: [
                    a.jsx(M, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:278:12",
                      "data-lov-name": "Badge",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "278",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Badge",
                      "data-component-content": "%7B%7D",
                      className:
                        n.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800",
                      children: n.status,
                    }),
                    a.jsx("p", {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:281:12",
                      "data-lov-name": "p",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "281",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "p",
                      "data-component-content":
                        "%7B%22className%22%3A%22text-xs%20text-gray-500%20mt-1%22%7D",
                      className: "text-xs text-gray-500 mt-1",
                      children: n.lastLogin
                        ? new Date(n.lastLogin).toLocaleDateString()
                        : "Never",
                    }),
                  ],
                }),
              ],
            }),
            a.jsxs("div", {
              "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:287:8",
              "data-lov-name": "div",
              "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
              "data-component-line": "287",
              "data-component-file": "OrganizationManager.tsx",
              "data-component-name": "div",
              "data-component-content":
                "%7B%22className%22%3A%22mt-3%20flex%20items-center%20justify-between%22%7D",
              className: "mt-3 flex items-center justify-between",
              children: [
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:288:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "288",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20items-center%20text-sm%20text-gray-500%22%7D",
                  className: "flex items-center text-sm text-gray-500",
                  children: [
                    a.jsx(j, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:289:12",
                      "data-lov-name": "Mail",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "289",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Mail",
                      "data-component-content":
                        "%7B%22className%22%3A%22w-4%20h-4%20mr-1%22%7D",
                      className: "w-4 h-4 mr-1",
                    }),
                    n.email,
                  ],
                }),
                a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:292:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "292",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22flex%20space-x-2%22%7D",
                  className: "flex space-x-2",
                  children: [
                    a.jsx(o, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:293:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "293",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "ghost",
                      size: "sm",
                      children: a.jsx(ea, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:294:14",
                        "data-lov-name": "Key",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "294",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "Key",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                        className: "w-4 h-4",
                      }),
                    }),
                    a.jsx(o, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:296:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "296",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      variant: "ghost",
                      size: "sm",
                      children: a.jsx(oa, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:297:14",
                        "data-lov-name": "UserMinus",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "297",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "UserMinus",
                        "data-component-content":
                          "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                        className: "w-4 h-4",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
  return S
    ? a.jsx("div", {
        "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:307:6",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
        "data-component-line": "307",
        "data-component-file": "OrganizationManager.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22flex%20items-center%20justify-center%20h-96%22%7D",
        className: "flex items-center justify-center h-96",
        children: a.jsx("div", {
          "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:308:8",
          "data-lov-name": "div",
          "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
          "data-component-line": "308",
          "data-component-file": "OrganizationManager.tsx",
          "data-component-name": "div",
          "data-component-content":
            "%7B%22className%22%3A%22animate-spin%20rounded-full%20h-32%20w-32%20border-b-2%20border-blue-600%22%7D",
          className:
            "animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600",
        }),
      })
    : a.jsxs("div", {
        "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:314:4",
        "data-lov-name": "div",
        "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
        "data-component-line": "314",
        "data-component-file": "OrganizationManager.tsx",
        "data-component-name": "div",
        "data-component-content":
          "%7B%22className%22%3A%22space-y-6%20p-6%22%7D",
        className: "space-y-6 p-6",
        children: [
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:316:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "316",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20justify-between%22%7D",
            className: "flex items-center justify-between",
            children: [
              a.jsxs("div", {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:317:8",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "317",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "div",
                "data-component-content": "%7B%7D",
                children: [
                  a.jsx("h1", {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:318:10",
                    "data-lov-name": "h1",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "318",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "h1",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-3xl%20font-bold%20text-gray-900%22%7D",
                    className: "text-3xl font-bold text-gray-900",
                    children: t("organization.title"),
                  }),
                  a.jsx("p", {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:319:10",
                    "data-lov-name": "p",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "319",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "p",
                    "data-component-content":
                      "%7B%22className%22%3A%22text-gray-600%20mt-1%22%7D",
                    className: "text-gray-600 mt-1",
                    children: t("organization.subtitle"),
                  }),
                ],
              }),
              a.jsxs(R, {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:321:8",
                "data-lov-name": "Dialog",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "321",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "Dialog",
                "data-component-content": "%7B%7D",
                open: I,
                onOpenChange: m,
                children: [
                  a.jsx(q, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:322:10",
                    "data-lov-name": "DialogTrigger",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "322",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "DialogTrigger",
                    "data-component-content": "%7B%7D",
                    asChild: !0,
                    children: a.jsxs(o, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:323:12",
                      "data-lov-name": "Button",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "323",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Button",
                      "data-component-content": "%7B%7D",
                      children: [
                        a.jsx(G, {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:324:14",
                          "data-lov-name": "Plus",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "324",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "Plus",
                          "data-component-content":
                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                          className: "w-4 h-4 mr-2",
                        }),
                        t("organization.create"),
                      ],
                    }),
                  }),
                  a.jsxs(H, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:328:10",
                    "data-lov-name": "DialogContent",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "328",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "DialogContent",
                    "data-component-content":
                      "%7B%22className%22%3A%22max-w-2xl%22%7D",
                    className: "max-w-2xl",
                    children: [
                      a.jsx(K, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:329:12",
                        "data-lov-name": "DialogHeader",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "329",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "DialogHeader",
                        "data-component-content": "%7B%7D",
                        children: a.jsx(J, {
                          "data-lov-id":
                            "src\\pages\\app\\OrganizationManager.tsx:330:14",
                          "data-lov-name": "DialogTitle",
                          "data-component-path":
                            "src\\pages\\app\\OrganizationManager.tsx",
                          "data-component-line": "330",
                          "data-component-file": "OrganizationManager.tsx",
                          "data-component-name": "DialogTitle",
                          "data-component-content": "%7B%7D",
                          children: t("organization.createNew"),
                        }),
                      }),
                      a.jsxs("div", {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:332:12",
                        "data-lov-name": "div",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "332",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "div",
                        "data-component-content":
                          "%7B%22className%22%3A%22space-y-4%22%7D",
                        className: "space-y-4",
                        children: [
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\OrganizationManager.tsx:333:14",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\OrganizationManager.tsx",
                            "data-component-line": "333",
                            "data-component-file": "OrganizationManager.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:334:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "334",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:335:18",
                                    "data-lov-name": "Label",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "335",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Label",
                                    "data-component-content": "%7B%7D",
                                    htmlFor: "name",
                                    children: t("organization.name"),
                                  }),
                                  a.jsx(r, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:336:18",
                                    "data-lov-name": "Input",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "336",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Input",
                                    "data-component-content": "%7B%7D",
                                    id: "name",
                                    placeholder: t(
                                      "organization.namePlaceholder",
                                    ),
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:338:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "338",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:339:18",
                                    "data-lov-name": "Label",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "339",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Label",
                                    "data-component-content": "%7B%7D",
                                    htmlFor: "type",
                                    children: t("organization.type"),
                                  }),
                                  a.jsxs(O, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:340:18",
                                    "data-lov-name": "Select",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "340",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Select",
                                    "data-component-content": "%7B%7D",
                                    children: [
                                      a.jsx(h, {
                                        "data-lov-id":
                                          "src\\pages\\app\\OrganizationManager.tsx:341:20",
                                        "data-lov-name": "SelectTrigger",
                                        "data-component-path":
                                          "src\\pages\\app\\OrganizationManager.tsx",
                                        "data-component-line": "341",
                                        "data-component-file":
                                          "OrganizationManager.tsx",
                                        "data-component-name": "SelectTrigger",
                                        "data-component-content": "%7B%7D",
                                        children: a.jsx(f, {
                                          "data-lov-id":
                                            "src\\pages\\app\\OrganizationManager.tsx:342:22",
                                          "data-lov-name": "SelectValue",
                                          "data-component-path":
                                            "src\\pages\\app\\OrganizationManager.tsx",
                                          "data-component-line": "342",
                                          "data-component-file":
                                            "OrganizationManager.tsx",
                                          "data-component-name": "SelectValue",
                                          "data-component-content": "%7B%7D",
                                          placeholder: t(
                                            "organization.selectType",
                                          ),
                                        }),
                                      }),
                                      a.jsxs(u, {
                                        "data-lov-id":
                                          "src\\pages\\app\\OrganizationManager.tsx:344:20",
                                        "data-lov-name": "SelectContent",
                                        "data-component-path":
                                          "src\\pages\\app\\OrganizationManager.tsx",
                                        "data-component-line": "344",
                                        "data-component-file":
                                          "OrganizationManager.tsx",
                                        "data-component-name": "SelectContent",
                                        "data-component-content": "%7B%7D",
                                        children: [
                                          a.jsx(e, {
                                            "data-lov-id":
                                              "src\\pages\\app\\OrganizationManager.tsx:345:22",
                                            "data-lov-name": "SelectItem",
                                            "data-component-path":
                                              "src\\pages\\app\\OrganizationManager.tsx",
                                            "data-component-line": "345",
                                            "data-component-file":
                                              "OrganizationManager.tsx",
                                            "data-component-name": "SelectItem",
                                            "data-component-content": "%7B%7D",
                                            value: "company",
                                            children: t(
                                              "organization.types.company",
                                            ),
                                          }),
                                          a.jsx(e, {
                                            "data-lov-id":
                                              "src\\pages\\app\\OrganizationManager.tsx:346:22",
                                            "data-lov-name": "SelectItem",
                                            "data-component-path":
                                              "src\\pages\\app\\OrganizationManager.tsx",
                                            "data-component-line": "346",
                                            "data-component-file":
                                              "OrganizationManager.tsx",
                                            "data-component-name": "SelectItem",
                                            "data-component-content": "%7B%7D",
                                            value: "department",
                                            children: t(
                                              "organization.types.department",
                                            ),
                                          }),
                                          a.jsx(e, {
                                            "data-lov-id":
                                              "src\\pages\\app\\OrganizationManager.tsx:347:22",
                                            "data-lov-name": "SelectItem",
                                            "data-component-path":
                                              "src\\pages\\app\\OrganizationManager.tsx",
                                            "data-component-line": "347",
                                            "data-component-file":
                                              "OrganizationManager.tsx",
                                            "data-component-name": "SelectItem",
                                            "data-component-content": "%7B%7D",
                                            value: "team",
                                            children: t(
                                              "organization.types.team",
                                            ),
                                          }),
                                          a.jsx(e, {
                                            "data-lov-id":
                                              "src\\pages\\app\\OrganizationManager.tsx:348:22",
                                            "data-lov-name": "SelectItem",
                                            "data-component-path":
                                              "src\\pages\\app\\OrganizationManager.tsx",
                                            "data-component-line": "348",
                                            "data-component-file":
                                              "OrganizationManager.tsx",
                                            "data-component-name": "SelectItem",
                                            "data-component-content": "%7B%7D",
                                            value: "project",
                                            children: t(
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
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\OrganizationManager.tsx:353:14",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\OrganizationManager.tsx",
                            "data-component-line": "353",
                            "data-component-file": "OrganizationManager.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%7D",
                            children: [
                              a.jsx(p, {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:354:16",
                                "data-lov-name": "Label",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "354",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "Label",
                                "data-component-content": "%7B%7D",
                                htmlFor: "description",
                                children: t("organization.description"),
                              }),
                              a.jsx(k, {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:355:16",
                                "data-lov-name": "Textarea",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "355",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "Textarea",
                                "data-component-content": "%7B%7D",
                                id: "description",
                                placeholder: t(
                                  "organization.descriptionPlaceholder",
                                ),
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\OrganizationManager.tsx:357:14",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\OrganizationManager.tsx",
                            "data-component-line": "357",
                            "data-component-file": "OrganizationManager.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22grid%20grid-cols-2%20gap-4%22%7D",
                            className: "grid grid-cols-2 gap-4",
                            children: [
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:358:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "358",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:359:18",
                                    "data-lov-name": "Label",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "359",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Label",
                                    "data-component-content": "%7B%7D",
                                    htmlFor: "employees",
                                    children: t("organization.employees"),
                                  }),
                                  a.jsx(r, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:360:18",
                                    "data-lov-name": "Input",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "360",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Input",
                                    "data-component-content":
                                      "%7B%22placeholder%22%3A%220%22%7D",
                                    id: "employees",
                                    type: "number",
                                    placeholder: "0",
                                  }),
                                ],
                              }),
                              a.jsxs("div", {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:362:16",
                                "data-lov-name": "div",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "362",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%7D",
                                children: [
                                  a.jsx(p, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:363:18",
                                    "data-lov-name": "Label",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "363",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Label",
                                    "data-component-content": "%7B%7D",
                                    htmlFor: "budget",
                                    children: t("organization.budget"),
                                  }),
                                  a.jsx(r, {
                                    "data-lov-id":
                                      "src\\pages\\app\\OrganizationManager.tsx:364:18",
                                    "data-lov-name": "Input",
                                    "data-component-path":
                                      "src\\pages\\app\\OrganizationManager.tsx",
                                    "data-component-line": "364",
                                    "data-component-file":
                                      "OrganizationManager.tsx",
                                    "data-component-name": "Input",
                                    "data-component-content":
                                      "%7B%22placeholder%22%3A%220%22%7D",
                                    id: "budget",
                                    type: "number",
                                    placeholder: "0",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a.jsxs("div", {
                            "data-lov-id":
                              "src\\pages\\app\\OrganizationManager.tsx:367:14",
                            "data-lov-name": "div",
                            "data-component-path":
                              "src\\pages\\app\\OrganizationManager.tsx",
                            "data-component-line": "367",
                            "data-component-file": "OrganizationManager.tsx",
                            "data-component-name": "div",
                            "data-component-content":
                              "%7B%22className%22%3A%22flex%20justify-end%20space-x-2%22%7D",
                            className: "flex justify-end space-x-2",
                            children: [
                              a.jsx(o, {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:368:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "368",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "Button",
                                "data-component-content": "%7B%7D",
                                variant: "outline",
                                onClick: () => m(!1),
                                children: t("common.cancel"),
                              }),
                              a.jsx(o, {
                                "data-lov-id":
                                  "src\\pages\\app\\OrganizationManager.tsx:371:16",
                                "data-lov-name": "Button",
                                "data-component-path":
                                  "src\\pages\\app\\OrganizationManager.tsx",
                                "data-component-line": "371",
                                "data-component-file":
                                  "OrganizationManager.tsx",
                                "data-component-name": "Button",
                                "data-component-content": "%7B%7D",
                                onClick: () => m(!1),
                                children: t("organization.create"),
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
          a.jsxs("div", {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:381:6",
            "data-lov-name": "div",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "381",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "div",
            "data-component-content":
              "%7B%22className%22%3A%22flex%20items-center%20space-x-4%22%7D",
            className: "flex items-center space-x-4",
            children: [
              a.jsx("div", {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:382:8",
                "data-lov-name": "div",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "382",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "div",
                "data-component-content":
                  "%7B%22className%22%3A%22flex-1%22%7D",
                className: "flex-1",
                children: a.jsxs("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:383:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "383",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22relative%22%7D",
                  className: "relative",
                  children: [
                    a.jsx(Q, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:384:12",
                      "data-lov-name": "Search",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "384",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Search",
                      "data-component-content":
                        "%7B%22className%22%3A%22absolute%20left-3%20top-1%2F2%20transform%20-translate-y-1%2F2%20text-gray-400%20w-4%20h-4%22%7D",
                      className:
                        "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4",
                    }),
                    a.jsx(r, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:385:12",
                      "data-lov-name": "Input",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "385",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "Input",
                      "data-component-content":
                        "%7B%22className%22%3A%22pl-10%22%7D",
                      placeholder: t("organization.searchPlaceholder"),
                      value: c,
                      onChange: (n) => C(n.target.value),
                      className: "pl-10",
                    }),
                  ],
                }),
              }),
              a.jsxs(O, {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:393:8",
                "data-lov-name": "Select",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "393",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "Select",
                "data-component-content": "%7B%7D",
                value: d,
                onValueChange: T,
                children: [
                  a.jsx(h, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:394:10",
                    "data-lov-name": "SelectTrigger",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "394",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "SelectTrigger",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-48%22%7D",
                    className: "w-48",
                    children: a.jsx(f, {
                      "data-lov-id":
                        "src\\pages\\app\\OrganizationManager.tsx:395:12",
                      "data-lov-name": "SelectValue",
                      "data-component-path":
                        "src\\pages\\app\\OrganizationManager.tsx",
                      "data-component-line": "395",
                      "data-component-file": "OrganizationManager.tsx",
                      "data-component-name": "SelectValue",
                      "data-component-content": "%7B%7D",
                      placeholder: t("organization.filterByType"),
                    }),
                  }),
                  a.jsxs(u, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:397:10",
                    "data-lov-name": "SelectContent",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "397",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "SelectContent",
                    "data-component-content": "%7B%7D",
                    children: [
                      a.jsx(e, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:398:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "398",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "all",
                        children: t("organization.allTypes"),
                      }),
                      a.jsx(e, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:399:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "399",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "company",
                        children: t("organization.types.company"),
                      }),
                      a.jsx(e, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:400:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "400",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "department",
                        children: t("organization.types.department"),
                      }),
                      a.jsx(e, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:401:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "401",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "team",
                        children: t("organization.types.team"),
                      }),
                      a.jsx(e, {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:402:12",
                        "data-lov-name": "SelectItem",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "402",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "SelectItem",
                        "data-component-content": "%7B%7D",
                        value: "project",
                        children: t("organization.types.project"),
                      }),
                    ],
                  }),
                ],
              }),
              a.jsxs(o, {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:405:8",
                "data-lov-name": "Button",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "405",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "Button",
                "data-component-content": "%7B%7D",
                variant: "outline",
                children: [
                  a.jsx(W, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:406:10",
                    "data-lov-name": "Filter",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "406",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "Filter",
                    "data-component-content":
                      "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                    className: "w-4 h-4 mr-2",
                  }),
                  t("common.filters"),
                ],
              }),
            ],
          }),
          a.jsxs(Y, {
            "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:412:6",
            "data-lov-name": "Tabs",
            "data-component-path": "src\\pages\\app\\OrganizationManager.tsx",
            "data-component-line": "412",
            "data-component-file": "OrganizationManager.tsx",
            "data-component-name": "Tabs",
            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
            defaultValue: "organizations",
            className: "space-y-4",
            children: [
              a.jsxs($, {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:413:8",
                "data-lov-name": "TabsList",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "413",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "TabsList",
                "data-component-content":
                  "%7B%22className%22%3A%22grid%20w-full%20grid-cols-2%22%7D",
                className: "grid w-full grid-cols-2",
                children: [
                  a.jsx(B, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:414:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "414",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content": "%7B%7D",
                    value: "organizations",
                    children: t("organization.organizations"),
                  }),
                  a.jsx(B, {
                    "data-lov-id":
                      "src\\pages\\app\\OrganizationManager.tsx:415:10",
                    "data-lov-name": "TabsTrigger",
                    "data-component-path":
                      "src\\pages\\app\\OrganizationManager.tsx",
                    "data-component-line": "415",
                    "data-component-file": "OrganizationManager.tsx",
                    "data-component-name": "TabsTrigger",
                    "data-component-content": "%7B%7D",
                    value: "users",
                    children: t("organization.users"),
                  }),
                ],
              }),
              a.jsx(D, {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:418:8",
                "data-lov-name": "TabsContent",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "418",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                value: "organizations",
                className: "space-y-4",
                children: a.jsx("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:419:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "419",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: L.map((n) =>
                    a.jsx(
                      V,
                      {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:421:14",
                        "data-lov-name": "OrganizationCard",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "421",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "OrganizationCard",
                        "data-component-content": "%7B%7D",
                        org: n,
                      },
                      n.id,
                    ),
                  ),
                }),
              }),
              a.jsx(D, {
                "data-lov-id": "src\\pages\\app\\OrganizationManager.tsx:426:8",
                "data-lov-name": "TabsContent",
                "data-component-path":
                  "src\\pages\\app\\OrganizationManager.tsx",
                "data-component-line": "426",
                "data-component-file": "OrganizationManager.tsx",
                "data-component-name": "TabsContent",
                "data-component-content":
                  "%7B%22className%22%3A%22space-y-4%22%7D",
                value: "users",
                className: "space-y-4",
                children: a.jsx("div", {
                  "data-lov-id":
                    "src\\pages\\app\\OrganizationManager.tsx:427:10",
                  "data-lov-name": "div",
                  "data-component-path":
                    "src\\pages\\app\\OrganizationManager.tsx",
                  "data-component-line": "427",
                  "data-component-file": "OrganizationManager.tsx",
                  "data-component-name": "div",
                  "data-component-content":
                    "%7B%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: b.map((n) =>
                    a.jsx(
                      E,
                      {
                        "data-lov-id":
                          "src\\pages\\app\\OrganizationManager.tsx:429:14",
                        "data-lov-name": "UserCard",
                        "data-component-path":
                          "src\\pages\\app\\OrganizationManager.tsx",
                        "data-component-line": "429",
                        "data-component-file": "OrganizationManager.tsx",
                        "data-component-name": "UserCard",
                        "data-component-content": "%7B%7D",
                        user: n,
                      },
                      n.id,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      });
};
export { Da as default };
