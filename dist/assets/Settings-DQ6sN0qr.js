import { d as E, j as e, B as r, u as Z } from "./index-DJVek99o.js";
import { r as w } from "./vendor-Bp-AcFIh.js";
import { C as g, b as v, c as f, d as N, a as y } from "./card-Ekw6AZkO.js";
import { I as j } from "./input-CPyHEH_p.js";
import { L as i } from "./label-DRsHM5zl.js";
import { S as h } from "./switch-DnkonVK1.js";
import { S as P, a as z, b as D, c as I, d as p } from "./select-D_Z_K9g1.js";
import { A as M, b as B, a as H } from "./avatar-DflfTgOR.js";
import { B as R } from "./badge-BRPjZ132.js";
import { S as u } from "./separator-DkVmGT4f.js";
import { T as Q, a as W, b as T, c as G } from "./tabs-CCpnioNr.js";
import {
  ad as U,
  U as X,
  ag as V,
  ac as Y,
  ah as ee,
  af as q,
  ai as se,
  C as K,
  X as ae,
  a2 as ie,
  aj as te,
  c as L,
  ak as ce,
  ab as ne,
  al as le,
  S as re,
  Z as de,
} from "./utils-BrIGbSZG.js";
import "./router-Db_Yswnp.js";
import "./index-Bxi3BZuB.js";
import "./index-DCuwROnA.js";
import "./index-C1y1VF1h.js";
import "./index-DgDxa8-3.js";
const oe = () => {
    const { toast: o } = E(),
      [s, k] = w.useState(null),
      [l, n] = w.useState({
        name: "SuperRelatórios Inc.",
        sector: "technology",
        size: "medium",
        website: "https://superrelatorios.com.br",
        phone: "+55 (11) 99999-9999",
        address: "Av. Paulista, 1000 - São Paulo, SP",
        cnpj: "12.345.678/0001-90",
      }),
      a = (c) => {
        var x;
        const m = (x = c.target.files) == null ? void 0 : x[0];
        if (m) {
          const _ = new FileReader();
          ((_.onloadend = () => {
            k(_.result);
          }),
            _.readAsDataURL(m));
        }
      },
      b = () => {
        o({
          title: "Empresa atualizada",
          description: "Os dados da empresa foram salvos com sucesso.",
        });
      },
      S = [
        { value: "technology", label: "Tecnologia" },
        { value: "retail", label: "Varejo" },
        { value: "manufacturing", label: "Manufatura" },
        { value: "services", label: "Serviços" },
        { value: "healthcare", label: "Saúde" },
        { value: "finance", label: "Financeiro" },
        { value: "education", label: "Educação" },
        { value: "food", label: "Alimentação" },
        { value: "construction", label: "Construção Civil" },
        { value: "logistics", label: "Logística" },
        { value: "agriculture", label: "Agronegócios" },
        { value: "entertainment", label: "Entretenimento" },
        { value: "other", label: "Outro" },
      ],
      C = [
        { value: "micro", label: "Micro (1-9 funcionários)" },
        { value: "small", label: "Pequena (10-49)" },
        { value: "medium", label: "Média (50-249)" },
        { value: "large", label: "Grande (250-999)" },
        { value: "enterprise", label: "Enterprise (1000+)" },
      ];
    return e.jsx("div", {
      className: "space-y-6",
      children: e.jsxs(g, {
        children: [
          e.jsxs(v, {
            children: [
              e.jsxs(f, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(U, { className: "h-5 w-5 text-primary" }),
                  "Dados da Empresa",
                ],
              }),
              e.jsx(N, { children: "Gerencie as informações da sua empresa" }),
            ],
          }),
          e.jsxs(y, {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx(M, {
                        className:
                          "h-24 w-24 border-2 border-dashed border-muted-foreground/30 rounded-lg",
                        children: s
                          ? e.jsx("img", {
                              src: s,
                              alt: "Logo",
                              className:
                                "h-full w-full object-cover rounded-lg",
                            })
                          : e.jsx(B, {
                              className: "text-2xl",
                              children: l.name.charAt(0),
                            }),
                      }),
                      e.jsxs("label", {
                        htmlFor: "logo-upload",
                        className:
                          "absolute bottom-0 right-0 bg-primary text-primary-foreground p-1.5 rounded-full cursor-pointer hover:bg-primary/90 transition-colors",
                        children: [
                          e.jsx(X, { className: "h-3 w-3" }),
                          e.jsx("input", {
                            id: "logo-upload",
                            type: "file",
                            accept: "image/*",
                            className: "hidden",
                            onChange: a,
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("h3", {
                        className: "font-medium text-foreground",
                        children: "Logo da Empresa",
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Recommended: 200x200px, PNG ou JPG",
                      }),
                      e.jsx(r, {
                        variant: "outline",
                        size: "sm",
                        asChild: !0,
                        children: e.jsx("label", {
                          htmlFor: "logo-upload",
                          className: "cursor-pointer",
                          children: "Alterar logo",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(u, {}),
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        htmlFor: "companyName",
                        children: "Nome da Empresa",
                      }),
                      e.jsx(j, {
                        id: "companyName",
                        value: l.name,
                        onChange: (c) => n({ ...l, name: c.target.value }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { htmlFor: "cnpj", children: "CNPJ" }),
                      e.jsx(j, {
                        id: "cnpj",
                        value: l.cnpj,
                        onChange: (c) => n({ ...l, cnpj: c.target.value }),
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
                      e.jsx(i, { children: "Setor" }),
                      e.jsxs(P, {
                        value: l.sector,
                        onValueChange: (c) => n({ ...l, sector: c }),
                        children: [
                          e.jsx(z, { children: e.jsx(D, {}) }),
                          e.jsx(I, {
                            children: S.map((c) =>
                              e.jsx(
                                p,
                                { value: c.value, children: c.label },
                                c.value,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { children: "Tamanho" }),
                      e.jsxs(P, {
                        value: l.size,
                        onValueChange: (c) => n({ ...l, size: c }),
                        children: [
                          e.jsx(z, { children: e.jsx(D, {}) }),
                          e.jsx(I, {
                            children: C.map((c) =>
                              e.jsx(
                                p,
                                { value: c.value, children: c.label },
                                c.value,
                              ),
                            ),
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
                  e.jsx(i, { htmlFor: "website", children: "Website" }),
                  e.jsx(j, {
                    id: "website",
                    type: "url",
                    value: l.website,
                    onChange: (c) => n({ ...l, website: c.target.value }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { htmlFor: "phone", children: "Telefone" }),
                      e.jsx(j, {
                        id: "phone",
                        type: "tel",
                        value: l.phone,
                        onChange: (c) => n({ ...l, phone: c.target.value }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { htmlFor: "address", children: "Endereço" }),
                      e.jsx(j, {
                        id: "address",
                        value: l.address,
                        onChange: (c) => n({ ...l, address: c.target.value }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(u, {}),
              e.jsx("div", {
                className: "flex justify-end",
                children: e.jsxs(r, {
                  onClick: b,
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(V, { className: "h-4 w-4" }),
                    "Salvar alterações",
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  me = () => {
    const { toast: o } = E(),
      [s, k] = w.useState({
        email: {
          enabled: !0,
          frequency: "daily",
          reports: !0,
          metrics: !0,
          actions: !0,
          marketing: !1,
        },
        push: { enabled: !0, reports: !0, alerts: !0 },
        inApp: { enabled: !0, reports: !0, actions: !0, comments: !0 },
      }),
      l = () => {
        o({
          title: "Preferências salvas",
          description: "Suas preferências de notificação foram atualizadas.",
        });
      },
      n = (a, b, S) => {
        k((C) => ({ ...C, [a]: { ...C[a], [b]: S } }));
      };
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(g, {
          children: [
            e.jsxs(v, {
              children: [
                e.jsxs(f, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(Y, { className: "h-5 w-5 text-primary" }),
                    "Notificações por Email",
                  ],
                }),
                e.jsx(N, {
                  children: "Configure como você recebe emails do sistema",
                }),
              ],
            }),
            e.jsxs(y, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-0.5",
                      children: [
                        e.jsx(i, { children: "Ativar emails" }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Receba notificações importantes por email",
                        }),
                      ],
                    }),
                    e.jsx(h, {
                      checked: s.email.enabled,
                      onCheckedChange: (a) => n("email", "enabled", a),
                    }),
                  ],
                }),
                s.email.enabled &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(u, {}),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(i, { children: "Frequência" }),
                          e.jsxs(P, {
                            value: s.email.frequency,
                            onValueChange: (a) => n("email", "frequency", a),
                            children: [
                              e.jsx(z, { children: e.jsx(D, {}) }),
                              e.jsxs(I, {
                                children: [
                                  e.jsx(p, {
                                    value: "realtime",
                                    children: "Tempo real",
                                  }),
                                  e.jsx(p, {
                                    value: "daily",
                                    children: "Diário",
                                  }),
                                  e.jsx(p, {
                                    value: "weekly",
                                    children: "Semanal",
                                  }),
                                  e.jsx(p, {
                                    value: "never",
                                    children: "Nunca",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(u, {}),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsx(i, {
                            className: "text-base",
                            children: "Tipos de notificação",
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Relatórios" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children:
                                      "Quando um relatório for criado ou compartilhado",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.email.reports,
                                onCheckedChange: (a) =>
                                  n("email", "reports", a),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Métricas" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Alertas de métricas e metas",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.email.metrics,
                                onCheckedChange: (a) =>
                                  n("email", "metrics", a),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Ações" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children:
                                      "Notificações sobre ações assignadas",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.email.actions,
                                onCheckedChange: (a) =>
                                  n("email", "actions", a),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Marketing" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children:
                                      "Novidades e atualizações do produto",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.email.marketing,
                                onCheckedChange: (a) =>
                                  n("email", "marketing", a),
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
        e.jsxs(g, {
          children: [
            e.jsxs(v, {
              children: [
                e.jsxs(f, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(ee, { className: "h-5 w-5 text-primary" }),
                    "Notificações Push",
                  ],
                }),
                e.jsx(N, { children: "Notificações no seu dispositivo móvel" }),
              ],
            }),
            e.jsxs(y, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-0.5",
                      children: [
                        e.jsx(i, { children: "Ativar push" }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children:
                            "Receba notificações push no seu dispositivo",
                        }),
                      ],
                    }),
                    e.jsx(h, {
                      checked: s.push.enabled,
                      onCheckedChange: (a) => n("push", "enabled", a),
                    }),
                  ],
                }),
                s.push.enabled &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(u, {}),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Relatórios" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Notificações sobre relatórios",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.push.reports,
                                onCheckedChange: (a) => n("push", "reports", a),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Alertas" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Alertas importantes e urgências",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.push.alerts,
                                onCheckedChange: (a) => n("push", "alerts", a),
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
        e.jsxs(g, {
          children: [
            e.jsxs(v, {
              children: [
                e.jsxs(f, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(q, { className: "h-5 w-5 text-primary" }),
                    "Notificações no Aplicativo",
                  ],
                }),
                e.jsx(N, {
                  children: "Configure notificações dentro do aplicativo",
                }),
              ],
            }),
            e.jsxs(y, {
              className: "space-y-6",
              children: [
                e.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-0.5",
                      children: [
                        e.jsx(i, { children: "Ativar notificações in-app" }),
                        e.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "Mostrar notificações no painel",
                        }),
                      ],
                    }),
                    e.jsx(h, {
                      checked: s.inApp.enabled,
                      onCheckedChange: (a) => n("inApp", "enabled", a),
                    }),
                  ],
                }),
                s.inApp.enabled &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(u, {}),
                      e.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Relatórios" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Novidade sobre relatórios",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.inApp.reports,
                                onCheckedChange: (a) =>
                                  n("inApp", "reports", a),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Ações" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Atualizações sobre ações",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.inApp.actions,
                                onCheckedChange: (a) =>
                                  n("inApp", "actions", a),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsx(i, { children: "Comentários" }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Notificações de comentários",
                                  }),
                                ],
                              }),
                              e.jsx(h, {
                                checked: s.inApp.comments,
                                onCheckedChange: (a) =>
                                  n("inApp", "comments", a),
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
        e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(r, {
            onClick: l,
            className: "flex items-center gap-2",
            children: [
              e.jsx(V, { className: "h-4 w-4" }),
              "Salvar preferências",
            ],
          }),
        }),
      ],
    });
  },
  xe = () => {
    const { toast: o } = E(),
      [s, k] = w.useState([
        {
          id: "google-drive",
          name: "Google Drive",
          description:
            "Conecte seu Google Drive para importar e exportar arquivos",
          icon: "drive",
          connected: !0,
          lastSync: "2 horas atrás",
        },
        {
          id: "dropbox",
          name: "Dropbox",
          description: "Sincronize arquivos com seu Dropbox",
          icon: "dropbox",
          connected: !1,
        },
        {
          id: "onedrive",
          name: "OneDrive",
          description: "Integre com o Microsoft OneDrive",
          icon: "onedrive",
          connected: !1,
        },
        {
          id: "slack",
          name: "Slack",
          description: "Receba notificações no Slack",
          icon: "slack",
          connected: !1,
        },
        {
          id: "teams",
          name: "Microsoft Teams",
          description: "Notificações e compartilhamento no Teams",
          icon: "teams",
          connected: !1,
        },
        {
          id: "zapier",
          name: "Zapier",
          description: "Conecte com mais de 5000 apps",
          icon: "zapier",
          connected: !1,
        },
      ]),
      [l, n] = w.useState([
        {
          id: "1",
          name: "Production Key",
          key: "sk_live_••••••••••••••••",
          createdAt: "2024-01-15",
          lastUsed: "2 dias atrás",
        },
        {
          id: "2",
          name: "Development Key",
          key: "sk_test_••••••••••••••••",
          createdAt: "2024-02-01",
        },
      ]),
      [a, b] = w.useState(""),
      [S, C] = w.useState(!1),
      [c, m] = w.useState(null),
      x = (t) => {
        k((A) =>
          A.map((F) =>
            F.id === t
              ? {
                  ...F,
                  connected: !F.connected,
                  lastSync: F.connected ? void 0 : "Agora",
                }
              : F,
          ),
        );
        const d = s.find((A) => A.id === t);
        o({
          title: d != null && d.connected ? "Desconectado" : "Conectado",
          description: `${d == null ? void 0 : d.name} foi ${d != null && d.connected ? "desconectado" : "conectado"} com sucesso.`,
        });
      },
      _ = () => {
        if (!a.trim()) {
          o({
            title: "Erro",
            description: "Por favor, informe um nome para a chave API",
            variant: "destructive",
          });
          return;
        }
        const t =
          "sk_" +
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        m(t);
        const d = {
          id: Date.now().toString(),
          name: a,
          key: t,
          createdAt: new Date().toISOString().split("T")[0],
        };
        (n((A) => [...A, d]),
          b(""),
          o({
            title: "Chave API criada",
            description:
              "Guarde esta chave com segurança. Não será exibida novamente.",
          }));
      },
      O = (t) => {
        (n((d) => d.filter((A) => A.id !== t)),
          o({
            title: "Chave API removida",
            description: "A chave API foi removida com sucesso.",
          }));
      },
      $ = () => {
        o({
          title: "Configurações salvas",
          description: "As configurações de API foram atualizadas.",
        });
      },
      J = (t) =>
        ({
          drive: "bg-blue-500",
          dropbox: "bg-blue-400",
          onedrive: "bg-blue-600",
          slack: "bg-purple-500",
          teams: "bg-indigo-600",
          zapier: "bg-orange-500",
        })[t] || "bg-gray-500";
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(g, {
          children: [
            e.jsxs(v, {
              children: [
                e.jsxs(f, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(se, { className: "h-5 w-5 text-primary" }),
                    "Conexões",
                  ],
                }),
                e.jsx(N, {
                  children: "Gerencie suas integrações com serviços externos",
                }),
              ],
            }),
            e.jsx(y, {
              className: "space-y-4",
              children: s.map((t, d) =>
                e.jsxs(
                  "div",
                  {
                    children: [
                      d > 0 && e.jsx(u, { className: "mb-4" }),
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx("div", {
                                className: `w-10 h-10 rounded-lg ${J(t.icon)} flex items-center justify-center text-white font-bold text-sm`,
                                children: t.name.charAt(0),
                              }),
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(i, {
                                        className: "text-base",
                                        children: t.name,
                                      }),
                                      t.connected &&
                                        e.jsxs(R, {
                                          variant: "default",
                                          className: "bg-green-500",
                                          children: [
                                            e.jsx(K, {
                                              className: "h-3 w-3 mr-1",
                                            }),
                                            "Conectado",
                                          ],
                                        }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: t.description,
                                  }),
                                  t.lastSync &&
                                    e.jsxs("p", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: [
                                        "Última sincronização: ",
                                        t.lastSync,
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(r, {
                            variant: t.connected ? "outline" : "default",
                            onClick: () => x(t.id),
                            children: t.connected
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(ae, { className: "h-4 w-4 mr-2" }),
                                    "Desconectar",
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(ie, { className: "h-4 w-4 mr-2" }),
                                    "Conectar",
                                  ],
                                }),
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
        e.jsxs(g, {
          children: [
            e.jsxs(v, {
              children: [
                e.jsxs(f, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(te, { className: "h-5 w-5 text-primary" }),
                    "API Keys",
                  ],
                }),
                e.jsx(N, {
                  children:
                    "Gerencie as chaves de API para integração via código",
                }),
              ],
            }),
            e.jsxs(y, {
              className: "space-y-4",
              children: [
                l.map((t, d) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        d > 0 && e.jsx(u, { className: "mb-4" }),
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                e.jsx(i, {
                                  className: "text-base",
                                  children: t.name,
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground font-mono",
                                  children: t.key,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex gap-4 text-xs text-muted-foreground",
                                  children: [
                                    e.jsxs("span", {
                                      children: ["Criada: ", t.createdAt],
                                    }),
                                    t.lastUsed &&
                                      e.jsxs("span", {
                                        children: ["Último uso: ", t.lastUsed],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(r, {
                              variant: "destructive",
                              size: "sm",
                              onClick: () => O(t.id),
                              children: "Remover",
                            }),
                          ],
                        }),
                      ],
                    },
                    t.id,
                  ),
                ),
                c &&
                  e.jsxs("div", {
                    className:
                      "p-4 bg-green-50 border border-green-200 rounded-lg",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-green-800 mb-2",
                        children: [
                          e.jsx(K, { className: "h-4 w-4" }),
                          e.jsx(i, {
                            className: "text-base",
                            children: "Nova chave gerada",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        className: "text-sm text-green-700 font-mono mb-2",
                        children: c,
                      }),
                      e.jsx("p", {
                        className: "text-xs text-green-600",
                        children:
                          "Copie esta chave agora. Por segurança, não será exibida novamente.",
                      }),
                      e.jsx(r, {
                        size: "sm",
                        className: "mt-2",
                        onClick: () => {
                          (navigator.clipboard.writeText(c),
                            o({
                              title: "Copiado",
                              description:
                                "Chave copiada para a área de transferência",
                            }));
                        },
                        children: "Copiar chave",
                      }),
                    ],
                  }),
                S
                  ? e.jsxs("div", {
                      className: "flex items-end gap-2",
                      children: [
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsx(i, { children: "Nome da chave" }),
                            e.jsx(j, {
                              placeholder: "ex: Production Key",
                              value: a,
                              onChange: (t) => b(t.target.value),
                            }),
                          ],
                        }),
                        e.jsx(r, { onClick: _, children: "Gerar" }),
                        e.jsx(r, {
                          variant: "outline",
                          onClick: () => {
                            (C(!1), b(""));
                          },
                          children: "Cancelar",
                        }),
                      ],
                    })
                  : e.jsx(r, {
                      variant: "outline",
                      onClick: () => C(!0),
                      children: "+ Criar nova chave API",
                    }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(r, {
            onClick: $,
            className: "flex items-center gap-2",
            children: [
              e.jsx(V, { className: "h-4 w-4" }),
              "Salvar configurações",
            ],
          }),
        }),
      ],
    });
  },
  Pe = () => {
    const { toast: o } = E(),
      { t: s, i18n: k } = Z(),
      [l, n] = w.useState({
        notifications: { email: !0, push: !1, reports: !0, marketing: !1 },
        appearance: { theme: "light", language: k.language || "pt-BR" },
        privacy: { twoFactor: !1, analytics: !0 },
      }),
      a = (m) => {
        o({
          title: "Configurações salvas",
          description: `As configurações de ${m} foram atualizadas com sucesso.`,
        });
      },
      b = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(g, {
            children: [
              e.jsxs(v, {
                children: [
                  e.jsxs(f, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ne, { className: "h-5 w-5 text-primary" }),
                      s("settings.profile.title"),
                    ],
                  }),
                  e.jsx(N, { children: s("settings.profile.desc") }),
                ],
              }),
              e.jsxs(y, {
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
                    children: [
                      e.jsxs(M, {
                        className: "h-16 w-16 sm:h-20 sm:w-20",
                        children: [
                          e.jsx(H, { src: "/placeholder-avatar.jpg" }),
                          e.jsx(B, { className: "text-lg", children: "UD" }),
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
                          e.jsx(r, {
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
                          e.jsx(i, {
                            htmlFor: "firstName",
                            children: s("settings.profile.first_name"),
                          }),
                          e.jsx(j, {
                            id: "firstName",
                            defaultValue: "Usuário",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(i, {
                            htmlFor: "lastName",
                            children: s("settings.profile.last_name"),
                          }),
                          e.jsx(j, { id: "lastName", defaultValue: "Demo" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        htmlFor: "email",
                        children: s("settings.profile.email"),
                      }),
                      e.jsx(j, {
                        id: "email",
                        type: "email",
                        defaultValue: "usuario@exemplo.com",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        htmlFor: "company",
                        children: s("settings.profile.company"),
                      }),
                      e.jsx(j, {
                        id: "company",
                        defaultValue: "SuperRelatórios Inc.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        htmlFor: "role",
                        children: s("settings.profile.role"),
                      }),
                      e.jsx(j, {
                        id: "role",
                        defaultValue: "Gerente de Operações",
                      }),
                    ],
                  }),
                  e.jsx(r, {
                    onClick: () => a(s("settings.sections.profile")),
                    children: s("settings.profile.save_button"),
                  }),
                ],
              }),
            ],
          }),
        }),
      S = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(g, {
            children: [
              e.jsxs(v, {
                children: [
                  e.jsxs(f, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(le, { className: "h-5 w-5 text-primary" }),
                      s("settings.appearance.title"),
                    ],
                  }),
                  e.jsx(N, { children: s("settings.appearance.description") }),
                ],
              }),
              e.jsxs(y, {
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { children: s("settings.appearance.theme") }),
                      e.jsxs(P, {
                        value: l.appearance.theme,
                        onValueChange: (m) =>
                          n((x) => ({
                            ...x,
                            appearance: { ...x.appearance, theme: m },
                          })),
                        children: [
                          e.jsx(z, { children: e.jsx(D, {}) }),
                          e.jsxs(I, {
                            children: [
                              e.jsx(p, {
                                value: "light",
                                children: s("settings.appearance.theme_light"),
                              }),
                              e.jsx(p, {
                                value: "dark",
                                children: s("settings.appearance.theme_dark"),
                              }),
                              e.jsx(p, {
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
                      e.jsx(i, { children: s("settings.appearance.language") }),
                      e.jsxs(P, {
                        value: l.appearance.language,
                        onValueChange: (m) => {
                          (n((x) => ({
                            ...x,
                            appearance: { ...x.appearance, language: m },
                          })),
                            k.changeLanguage(m));
                        },
                        children: [
                          e.jsx(z, { children: e.jsx(D, {}) }),
                          e.jsxs(I, {
                            children: [
                              e.jsx(p, {
                                value: "pt-BR",
                                children: s("settings.language.pt"),
                              }),
                              e.jsx(p, {
                                value: "en-US",
                                children: s("settings.language.en"),
                              }),
                              e.jsx(p, {
                                value: "es-ES",
                                children: s("settings.language.es"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(r, {
                    onClick: () => {
                      o({
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
      C = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(g, {
            children: [
              e.jsxs(v, {
                children: [
                  e.jsxs(f, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(re, { className: "h-5 w-5 text-primary" }),
                      s("settings.security.title"),
                    ],
                  }),
                  e.jsx(N, { children: s("settings.security.desc") }),
                ],
              }),
              e.jsxs(y, {
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        children: s("settings.security.change_password"),
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: s("settings.security.last_changeCode", {
                          date: "há 3 meses",
                        }),
                      }),
                      e.jsx(r, {
                        variant: "outline",
                        size: "sm",
                        children: s("settings.security.change_password"),
                      }),
                    ],
                  }),
                  e.jsx(u, {}),
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("div", {
                        className: "space-y-0.5 flex-1 mr-4",
                        children: [
                          e.jsx(i, {
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
                          e.jsx(R, {
                            variant: l.privacy.twoFactor
                              ? "default"
                              : "secondary",
                            children: l.privacy.twoFactor
                              ? s("common.active")
                              : s("common.inactive"),
                          }),
                          e.jsx(h, {
                            checked: l.privacy.twoFactor,
                            onCheckedChange: (m) =>
                              n((x) => ({
                                ...x,
                                privacy: { ...x.privacy, twoFactor: m },
                              })),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(u, {}),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        children: s("settings.security.active_sessions"),
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: s("settings.security.active_sessions_desc"),
                      }),
                      e.jsx(r, {
                        variant: "outline",
                        size: "sm",
                        children: s("settings.security.view_sessions"),
                      }),
                    ],
                  }),
                  e.jsx(r, {
                    onClick: () => a(s("settings.sections.security")),
                    children: s("settings.security.save_button"),
                  }),
                ],
              }),
            ],
          }),
        }),
      c = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(g, {
            children: [
              e.jsxs(v, {
                children: [
                  e.jsxs(f, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(de, { className: "h-5 w-5 text-primary" }),
                      s("settings.plan.title"),
                    ],
                  }),
                  e.jsx(N, { children: s("settings.plan.desc") }),
                ],
              }),
              e.jsxs(y, {
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
                          e.jsx(R, {
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
                      e.jsx(r, {
                        variant: "outline",
                        className: "flex-1",
                        children: s("settings.plan.change_plan"),
                      }),
                      e.jsx(r, {
                        variant: "outline",
                        className: "flex-1",
                        children: s("settings.plan.view_invoices"),
                      }),
                    ],
                  }),
                  e.jsx(u, {}),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, {
                        className: "text-destructive",
                        children: s("settings.plan.danger_zone"),
                      }),
                      e.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: s("settings.plan.danger_desc"),
                      }),
                      e.jsx(r, {
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
        });
    return e.jsx("div", {
      className: "bg-gradient-subtle min-h-full",
      children: e.jsxs("div", {
        className: "max-w-5xl mx-auto p-4 sm:p-6",
        children: [
          e.jsxs("div", {
            className: "mb-6",
            children: [
              e.jsxs("h1", {
                className:
                  "text-2xl font-bold text-foreground flex items-center gap-2",
                children: [
                  e.jsx(L, { className: "h-6 w-6 text-primary" }),
                  s("settings.title"),
                ],
              }),
              e.jsx("p", {
                className: "text-muted-foreground mt-1",
                children:
                  s("settings.subtitle") ||
                  "Gerencie suas configurações e preferências",
              }),
            ],
          }),
          e.jsxs(Q, {
            defaultValue: "general",
            className: "space-y-6",
            children: [
              e.jsxs(W, {
                className: "grid w-full grid-cols-4 lg:w-auto lg:inline-flex",
                children: [
                  e.jsxs(T, {
                    value: "general",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(L, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: s("settings.tabs.general") || "Geral",
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    value: "company",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(U, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: s("settings.tabs.company") || "Empresa",
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    value: "notifications",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(q, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children:
                          s("settings.tabs.notifications") || "Notificações",
                      }),
                    ],
                  }),
                  e.jsxs(T, {
                    value: "integrations",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ce, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children:
                          s("settings.tabs.integrations") || "Integrações",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(G, {
                value: "general",
                children: e.jsxs("div", {
                  className: "space-y-6",
                  children: [b(), S(), C(), c()],
                }),
              }),
              e.jsx(G, { value: "company", children: e.jsx(oe, {}) }),
              e.jsx(G, { value: "notifications", children: e.jsx(me, {}) }),
              e.jsx(G, { value: "integrations", children: e.jsx(xe, {}) }),
            ],
          }),
        ],
      }),
    });
  };
export { Pe as default };
