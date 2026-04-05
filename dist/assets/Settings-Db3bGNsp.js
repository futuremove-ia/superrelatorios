const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/admin-DqbxHzNt.js",
      "assets/index-CaCe4Bjh.js",
      "assets/vendor-data-DuuuwLk5.js",
      "assets/vendor-react-DfYPWlel.js",
      "assets/vendor-radix-CfL9Rjb9.js",
      "assets/vendor-utils-CGetvm_l.js",
      "assets/index-8jb6ML49.css",
    ]),
) => i.map((i) => d[i]);
import { d as V, B as o, u as le, b as re, _ as M } from "./index-CaCe4Bjh.js";
import { j as e } from "./vendor-data-DuuuwLk5.js";
import { r as u } from "./vendor-react-DfYPWlel.js";
import { C as v, b as N, c as y, d as b, a as C } from "./card-CTs8HHrG.js";
import { I as f } from "./input-D9BHdvW6.js";
import { L as i } from "./label-DVbglEJw.js";
import { S as j } from "./switch-BclZpYXK.js";
import { S as T, a as R, b as z, c as D, d as p } from "./select-NitbrCX6.js";
import { A as Y, b as ee, a as de } from "./avatar-BNfmjNcO.js";
import { B as U } from "./badge-Dl11-P0M.js";
import { S as w } from "./separator-B1HV_7jy.js";
import { T as oe, a as me, b as G, c as K } from "./tabs-CkbjXF9b.js";
import {
  ag as se,
  U as xe,
  aj as q,
  af as he,
  ak as pe,
  ai as ae,
  al as ue,
  C as Q,
  X as je,
  a5 as ge,
  am as fe,
  e as W,
  an as X,
  ao as ve,
  ae as Ne,
  ap as ye,
  S as be,
  Z as Ce,
} from "./vendor-utils-CGetvm_l.js";
import { u as we } from "./useCurrentOrganization-DeW0zOch.js";
import "./vendor-radix-CfL9Rjb9.js";
const Ae = () => {
    const { toast: x } = V(),
      [s, _] = u.useState(null),
      [l, t] = u.useState({
        name: "SuperRelatórios Inc.",
        sector: "technology",
        size: "medium",
        website: "https://superrelatorios.com.br",
        phone: "+55 (11) 99999-9999",
        address: "Av. Paulista, 1000 - São Paulo, SP",
        cnpj: "12.345.678/0001-90",
      }),
      a = (c) => {
        var h;
        const F = (h = c.target.files) == null ? void 0 : h[0];
        if (F) {
          const P = new FileReader();
          ((P.onloadend = () => {
            _(P.result);
          }),
            P.readAsDataURL(F));
        }
      },
      g = () => {
        x({
          title: "Empresa atualizada",
          description: "Os dados da empresa foram salvos com sucesso.",
        });
      },
      A = [
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
      S = [
        { value: "micro", label: "Micro (1-9 funcionários)" },
        { value: "small", label: "Pequena (10-49)" },
        { value: "medium", label: "Média (50-249)" },
        { value: "large", label: "Grande (250-999)" },
        { value: "enterprise", label: "Enterprise (1000+)" },
      ];
    return e.jsx("div", {
      className: "space-y-6",
      children: e.jsxs(v, {
        children: [
          e.jsxs(N, {
            children: [
              e.jsxs(y, {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(se, { className: "h-5 w-5 text-primary" }),
                  "Dados da Empresa",
                ],
              }),
              e.jsx(b, { children: "Gerencie as informações da sua empresa" }),
            ],
          }),
          e.jsxs(C, {
            className: "space-y-6",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
                children: [
                  e.jsxs("div", {
                    className: "relative",
                    children: [
                      e.jsx(Y, {
                        className:
                          "h-24 w-24 border-2 border-dashed border-muted-foreground/30 rounded-lg",
                        children: s
                          ? e.jsx("img", {
                              src: s,
                              alt: "Logo",
                              className:
                                "h-full w-full object-cover rounded-lg",
                            })
                          : e.jsx(ee, {
                              className: "text-2xl",
                              children: l.name.charAt(0),
                            }),
                      }),
                      e.jsxs("label", {
                        htmlFor: "logo-upload",
                        className:
                          "absolute bottom-0 right-0 bg-primary text-primary-foreground p-1.5 rounded-full cursor-pointer hover:bg-primary/90 transition-colors",
                        children: [
                          e.jsx(xe, { className: "h-3 w-3" }),
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
                      e.jsx(o, {
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
              e.jsx(w, {}),
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
                      e.jsx(f, {
                        id: "companyName",
                        value: l.name,
                        onChange: (c) => t({ ...l, name: c.target.value }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { htmlFor: "cnpj", children: "CNPJ" }),
                      e.jsx(f, {
                        id: "cnpj",
                        value: l.cnpj,
                        onChange: (c) => t({ ...l, cnpj: c.target.value }),
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
                      e.jsxs(T, {
                        value: l.sector,
                        onValueChange: (c) => t({ ...l, sector: c }),
                        children: [
                          e.jsx(R, { children: e.jsx(z, {}) }),
                          e.jsx(D, {
                            children: A.map((c) =>
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
                      e.jsxs(T, {
                        value: l.size,
                        onValueChange: (c) => t({ ...l, size: c }),
                        children: [
                          e.jsx(R, { children: e.jsx(z, {}) }),
                          e.jsx(D, {
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
                ],
              }),
              e.jsxs("div", {
                className: "space-y-2",
                children: [
                  e.jsx(i, { htmlFor: "website", children: "Website" }),
                  e.jsx(f, {
                    id: "website",
                    type: "url",
                    value: l.website,
                    onChange: (c) => t({ ...l, website: c.target.value }),
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
                      e.jsx(f, {
                        id: "phone",
                        type: "tel",
                        value: l.phone,
                        onChange: (c) => t({ ...l, phone: c.target.value }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { htmlFor: "address", children: "Endereço" }),
                      e.jsx(f, {
                        id: "address",
                        value: l.address,
                        onChange: (c) => t({ ...l, address: c.target.value }),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(w, {}),
              e.jsx("div", {
                className: "flex justify-end",
                children: e.jsxs(o, {
                  onClick: g,
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(q, { className: "h-4 w-4" }),
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
  Se = () => {
    const { toast: x } = V(),
      [s, _] = u.useState({
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
        x({
          title: "Preferências salvas",
          description: "Suas preferências de notificação foram atualizadas.",
        });
      },
      t = (a, g, A) => {
        _((S) => ({ ...S, [a]: { ...S[a], [g]: A } }));
      };
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(v, {
          children: [
            e.jsxs(N, {
              children: [
                e.jsxs(y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(he, { className: "h-5 w-5 text-primary" }),
                    "Notificações por Email",
                  ],
                }),
                e.jsx(b, {
                  children: "Configure como você recebe emails do sistema",
                }),
              ],
            }),
            e.jsxs(C, {
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
                    e.jsx(j, {
                      checked: s.email.enabled,
                      onCheckedChange: (a) => t("email", "enabled", a),
                    }),
                  ],
                }),
                s.email.enabled &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(w, {}),
                      e.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          e.jsx(i, { children: "Frequência" }),
                          e.jsxs(T, {
                            value: s.email.frequency,
                            onValueChange: (a) => t("email", "frequency", a),
                            children: [
                              e.jsx(R, { children: e.jsx(z, {}) }),
                              e.jsxs(D, {
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
                      e.jsx(w, {}),
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
                              e.jsx(j, {
                                checked: s.email.reports,
                                onCheckedChange: (a) =>
                                  t("email", "reports", a),
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
                              e.jsx(j, {
                                checked: s.email.metrics,
                                onCheckedChange: (a) =>
                                  t("email", "metrics", a),
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
                              e.jsx(j, {
                                checked: s.email.actions,
                                onCheckedChange: (a) =>
                                  t("email", "actions", a),
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
                              e.jsx(j, {
                                checked: s.email.marketing,
                                onCheckedChange: (a) =>
                                  t("email", "marketing", a),
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
        e.jsxs(v, {
          children: [
            e.jsxs(N, {
              children: [
                e.jsxs(y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(pe, { className: "h-5 w-5 text-primary" }),
                    "Notificações Push",
                  ],
                }),
                e.jsx(b, { children: "Notificações no seu dispositivo móvel" }),
              ],
            }),
            e.jsxs(C, {
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
                    e.jsx(j, {
                      checked: s.push.enabled,
                      onCheckedChange: (a) => t("push", "enabled", a),
                    }),
                  ],
                }),
                s.push.enabled &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(w, {}),
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
                              e.jsx(j, {
                                checked: s.push.reports,
                                onCheckedChange: (a) => t("push", "reports", a),
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
                              e.jsx(j, {
                                checked: s.push.alerts,
                                onCheckedChange: (a) => t("push", "alerts", a),
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
        e.jsxs(v, {
          children: [
            e.jsxs(N, {
              children: [
                e.jsxs(y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(ae, { className: "h-5 w-5 text-primary" }),
                    "Notificações no Aplicativo",
                  ],
                }),
                e.jsx(b, {
                  children: "Configure notificações dentro do aplicativo",
                }),
              ],
            }),
            e.jsxs(C, {
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
                    e.jsx(j, {
                      checked: s.inApp.enabled,
                      onCheckedChange: (a) => t("inApp", "enabled", a),
                    }),
                  ],
                }),
                s.inApp.enabled &&
                  e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(w, {}),
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
                              e.jsx(j, {
                                checked: s.inApp.reports,
                                onCheckedChange: (a) =>
                                  t("inApp", "reports", a),
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
                              e.jsx(j, {
                                checked: s.inApp.actions,
                                onCheckedChange: (a) =>
                                  t("inApp", "actions", a),
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
                              e.jsx(j, {
                                checked: s.inApp.comments,
                                onCheckedChange: (a) =>
                                  t("inApp", "comments", a),
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
          children: e.jsxs(o, {
            onClick: l,
            className: "flex items-center gap-2",
            children: [
              e.jsx(q, { className: "h-4 w-4" }),
              "Salvar preferências",
            ],
          }),
        }),
      ],
    });
  },
  ke = () => {
    const { toast: x } = V(),
      [s, _] = u.useState([
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
      [l, t] = u.useState([
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
      [a, g] = u.useState(""),
      [A, S] = u.useState(!1),
      [c, F] = u.useState(null),
      h = (n) => {
        _((k) =>
          k.map((E) =>
            E.id === n
              ? {
                  ...E,
                  connected: !E.connected,
                  lastSync: E.connected ? void 0 : "Agora",
                }
              : E,
          ),
        );
        const r = s.find((k) => k.id === n);
        x({
          title: r != null && r.connected ? "Desconectado" : "Conectado",
          description: `${r == null ? void 0 : r.name} foi ${r != null && r.connected ? "desconectado" : "conectado"} com sucesso.`,
        });
      },
      P = () => {
        if (!a.trim()) {
          x({
            title: "Erro",
            description: "Por favor, informe um nome para a chave API",
            variant: "destructive",
          });
          return;
        }
        const n =
          "sk_" +
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15);
        F(n);
        const r = {
          id: Date.now().toString(),
          name: a,
          key: n,
          createdAt: new Date().toISOString().split("T")[0],
        };
        (t((k) => [...k, r]),
          g(""),
          x({
            title: "Chave API criada",
            description:
              "Guarde esta chave com segurança. Não será exibida novamente.",
          }));
      },
      I = (n) => {
        (t((r) => r.filter((k) => k.id !== n)),
          x({
            title: "Chave API removida",
            description: "A chave API foi removida com sucesso.",
          }));
      },
      O = () => {
        x({
          title: "Configurações salvas",
          description: "As configurações de API foram atualizadas.",
        });
      },
      L = (n) =>
        ({
          drive: "bg-blue-500",
          dropbox: "bg-blue-400",
          onedrive: "bg-blue-600",
          slack: "bg-purple-500",
          teams: "bg-indigo-600",
          zapier: "bg-orange-500",
        })[n] || "bg-gray-500";
    return e.jsxs("div", {
      className: "space-y-6",
      children: [
        e.jsxs(v, {
          children: [
            e.jsxs(N, {
              children: [
                e.jsxs(y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(ue, { className: "h-5 w-5 text-primary" }),
                    "Conexões",
                  ],
                }),
                e.jsx(b, {
                  children: "Gerencie suas integrações com serviços externos",
                }),
              ],
            }),
            e.jsx(C, {
              className: "space-y-4",
              children: s.map((n, r) =>
                e.jsxs(
                  "div",
                  {
                    children: [
                      r > 0 && e.jsx(w, { className: "mb-4" }),
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [
                              e.jsx("div", {
                                className: `w-10 h-10 rounded-lg ${L(n.icon)} flex items-center justify-center text-white font-bold text-sm`,
                                children: n.name.charAt(0),
                              }),
                              e.jsxs("div", {
                                className: "space-y-0.5",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      e.jsx(i, {
                                        className: "text-base",
                                        children: n.name,
                                      }),
                                      n.connected &&
                                        e.jsxs(U, {
                                          variant: "default",
                                          className: "bg-green-500",
                                          children: [
                                            e.jsx(Q, {
                                              className: "h-3 w-3 mr-1",
                                            }),
                                            "Conectado",
                                          ],
                                        }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: n.description,
                                  }),
                                  n.lastSync &&
                                    e.jsxs("p", {
                                      className:
                                        "text-xs text-muted-foreground",
                                      children: [
                                        "Última sincronização: ",
                                        n.lastSync,
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx(o, {
                            variant: n.connected ? "outline" : "default",
                            onClick: () => h(n.id),
                            children: n.connected
                              ? e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(je, { className: "h-4 w-4 mr-2" }),
                                    "Desconectar",
                                  ],
                                })
                              : e.jsxs(e.Fragment, {
                                  children: [
                                    e.jsx(ge, { className: "h-4 w-4 mr-2" }),
                                    "Conectar",
                                  ],
                                }),
                          }),
                        ],
                      }),
                    ],
                  },
                  n.id,
                ),
              ),
            }),
          ],
        }),
        e.jsxs(v, {
          children: [
            e.jsxs(N, {
              children: [
                e.jsxs(y, {
                  className: "flex items-center gap-2",
                  children: [
                    e.jsx(fe, { className: "h-5 w-5 text-primary" }),
                    "API Keys",
                  ],
                }),
                e.jsx(b, {
                  children:
                    "Gerencie as chaves de API para integração via código",
                }),
              ],
            }),
            e.jsxs(C, {
              className: "space-y-4",
              children: [
                l.map((n, r) =>
                  e.jsxs(
                    "div",
                    {
                      children: [
                        r > 0 && e.jsx(w, { className: "mb-4" }),
                        e.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                e.jsx(i, {
                                  className: "text-base",
                                  children: n.name,
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground font-mono",
                                  children: n.key,
                                }),
                                e.jsxs("div", {
                                  className:
                                    "flex gap-4 text-xs text-muted-foreground",
                                  children: [
                                    e.jsxs("span", {
                                      children: ["Criada: ", n.createdAt],
                                    }),
                                    n.lastUsed &&
                                      e.jsxs("span", {
                                        children: ["Último uso: ", n.lastUsed],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(o, {
                              variant: "destructive",
                              size: "sm",
                              onClick: () => I(n.id),
                              children: "Remover",
                            }),
                          ],
                        }),
                      ],
                    },
                    n.id,
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
                          e.jsx(Q, { className: "h-4 w-4" }),
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
                      e.jsx(o, {
                        size: "sm",
                        className: "mt-2",
                        onClick: () => {
                          (navigator.clipboard.writeText(c),
                            x({
                              title: "Copiado",
                              description:
                                "Chave copiada para a área de transferência",
                            }));
                        },
                        children: "Copiar chave",
                      }),
                    ],
                  }),
                A
                  ? e.jsxs("div", {
                      className: "flex items-end gap-2",
                      children: [
                        e.jsxs("div", {
                          className: "flex-1",
                          children: [
                            e.jsx(i, { children: "Nome da chave" }),
                            e.jsx(f, {
                              placeholder: "ex: Production Key",
                              value: a,
                              onChange: (n) => g(n.target.value),
                            }),
                          ],
                        }),
                        e.jsx(o, { onClick: P, children: "Gerar" }),
                        e.jsx(o, {
                          variant: "outline",
                          onClick: () => {
                            (S(!1), g(""));
                          },
                          children: "Cancelar",
                        }),
                      ],
                    })
                  : e.jsx(o, {
                      variant: "outline",
                      onClick: () => S(!0),
                      children: "+ Criar nova chave API",
                    }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "flex justify-end",
          children: e.jsxs(o, {
            onClick: O,
            className: "flex items-center gap-2",
            children: [
              e.jsx(q, { className: "h-4 w-4" }),
              "Salvar configurações",
            ],
          }),
        }),
      ],
    });
  },
  Me = () => {
    var J, Z, H;
    const { toast: x } = V(),
      { t: s, i18n: _ } = le();
    we();
    const { user: l } = re(),
      [t, a] = u.useState({
        notifications: { email: !0, push: !1, reports: !0, marketing: !1 },
        appearance: { theme: "light", language: _.language || "pt-BR" },
        privacy: { twoFactor: !1, analytics: !0 },
      }),
      g =
        ((J = l == null ? void 0 : l.email) == null
          ? void 0
          : J.includes("admin")) ||
        ((Z = l == null ? void 0 : l.email) == null
          ? void 0
          : Z.includes("superrelatorios")),
      [A, S] = u.useState(null),
      [c, F] = u.useState(!1),
      [h, P] = u.useState("huggingface"),
      [I, O] = u.useState(""),
      [L, n] = u.useState(!1),
      r = async () => {
        F(!0);
        try {
          const { adminRoutes: d } = await M(
              async () => {
                const { adminRoutes: B } = await import("./admin-DqbxHzNt.js");
                return { adminRoutes: B };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
            ),
            m = await d.getEmbeddingConfig();
          (S(m), m && P(m.embeddingProvider));
        } catch (d) {
          console.error("Error loading AI config:", d);
        } finally {
          F(!1);
        }
      },
      k = async () => {
        try {
          const { adminRoutes: d } = await M(
            async () => {
              const { adminRoutes: m } = await import("./admin-DqbxHzNt.js");
              return { adminRoutes: m };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
          );
          (await d.updateEmbeddingConfig({
            embeddingProvider: h,
            huggingfaceApiKey: h === "huggingface" ? I : void 0,
            openaiApiKey: h === "openai" ? I : void 0,
            geminiApiKey: h === "gemini" ? I : void 0,
          }),
            x({
              title: "Configuração salva",
              description: "Provedor de embeddings atualizado com sucesso",
            }),
            r());
        } catch {
          x({
            title: "Erro",
            description: "Falha ao salvar configuração",
            variant: "destructive",
          });
        }
      },
      E = async () => {
        n(!0);
        try {
          const { adminRoutes: d } = await M(
              async () => {
                const { adminRoutes: B } = await import("./admin-DqbxHzNt.js");
                return { adminRoutes: B };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
            ),
            m = await d.testEmbeddingConfig(h, I);
          x({
            title: m.success ? "Sucesso" : "Falha",
            description: m.message,
            variant: m.success ? "default" : "destructive",
          });
        } finally {
          n(!1);
        }
      };
    u.useEffect(() => {
      g && r();
    }, [g]);
    const $ = (d) => {
        x({
          title: "Configurações salvas",
          description: `As configurações de ${d} foram atualizadas com sucesso.`,
        });
      },
      ie = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(v, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsxs(y, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(Ne, { className: "h-5 w-5 text-primary" }),
                      s("settings.profile.title"),
                    ],
                  }),
                  e.jsx(b, { children: s("settings.profile.desc") }),
                ],
              }),
              e.jsxs(C, {
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6",
                    children: [
                      e.jsxs(Y, {
                        className: "h-16 w-16 sm:h-20 sm:w-20",
                        children: [
                          e.jsx(de, { src: "/placeholder-avatar.jpg" }),
                          e.jsx(ee, { className: "text-lg", children: "UD" }),
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
                          e.jsx(o, {
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
                          e.jsx(f, {
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
                          e.jsx(f, { id: "lastName", defaultValue: "Demo" }),
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
                      e.jsx(f, {
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
                      e.jsx(f, {
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
                      e.jsx(f, {
                        id: "role",
                        defaultValue: "Gerente de Operações",
                      }),
                    ],
                  }),
                  e.jsx(o, {
                    onClick: () => $(s("settings.sections.profile")),
                    children: s("settings.profile.save_button"),
                  }),
                ],
              }),
            ],
          }),
        }),
      ne = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(v, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsxs(y, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ye, { className: "h-5 w-5 text-primary" }),
                      s("settings.appearance.title"),
                    ],
                  }),
                  e.jsx(b, { children: s("settings.appearance.description") }),
                ],
              }),
              e.jsxs(C, {
                className: "space-y-6",
                children: [
                  e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx(i, { children: s("settings.appearance.theme") }),
                      e.jsxs(T, {
                        value: t.appearance.theme,
                        onValueChange: (d) =>
                          a((m) => ({
                            ...m,
                            appearance: { ...m.appearance, theme: d },
                          })),
                        children: [
                          e.jsx(R, { children: e.jsx(z, {}) }),
                          e.jsxs(D, {
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
                      e.jsxs(T, {
                        value: t.appearance.language,
                        onValueChange: (d) => {
                          (a((m) => ({
                            ...m,
                            appearance: { ...m.appearance, language: d },
                          })),
                            _.changeLanguage(d));
                        },
                        children: [
                          e.jsx(R, { children: e.jsx(z, {}) }),
                          e.jsxs(D, {
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
                  e.jsx(o, {
                    onClick: () => {
                      x({
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
      te = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(v, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsxs(y, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(be, { className: "h-5 w-5 text-primary" }),
                      s("settings.security.title"),
                    ],
                  }),
                  e.jsx(b, { children: s("settings.security.desc") }),
                ],
              }),
              e.jsxs(C, {
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
                      e.jsx(o, {
                        variant: "outline",
                        size: "sm",
                        children: s("settings.security.change_password"),
                      }),
                    ],
                  }),
                  e.jsx(w, {}),
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
                          e.jsx(U, {
                            variant: t.privacy.twoFactor
                              ? "default"
                              : "secondary",
                            children: t.privacy.twoFactor
                              ? s("common.active")
                              : s("common.inactive"),
                          }),
                          e.jsx(j, {
                            checked: t.privacy.twoFactor,
                            onCheckedChange: (d) =>
                              a((m) => ({
                                ...m,
                                privacy: { ...m.privacy, twoFactor: d },
                              })),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(w, {}),
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
                      e.jsx(o, {
                        variant: "outline",
                        size: "sm",
                        children: s("settings.security.view_sessions"),
                      }),
                    ],
                  }),
                  e.jsx(o, {
                    onClick: () => $(s("settings.sections.security")),
                    children: s("settings.security.save_button"),
                  }),
                ],
              }),
            ],
          }),
        }),
      ce = () =>
        e.jsx("div", {
          className: "space-y-6",
          children: e.jsxs(v, {
            children: [
              e.jsxs(N, {
                children: [
                  e.jsxs(y, {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(Ce, { className: "h-5 w-5 text-primary" }),
                      s("settings.plan.title"),
                    ],
                  }),
                  e.jsx(b, { children: s("settings.plan.desc") }),
                ],
              }),
              e.jsxs(C, {
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
                          e.jsx(U, {
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
                      e.jsx(o, {
                        variant: "outline",
                        className: "flex-1",
                        children: s("settings.plan.change_plan"),
                      }),
                      e.jsx(o, {
                        variant: "outline",
                        className: "flex-1",
                        children: s("settings.plan.view_invoices"),
                      }),
                    ],
                  }),
                  e.jsx(w, {}),
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
                      e.jsx(o, {
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
                  e.jsx(W, { className: "h-6 w-6 text-primary" }),
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
          e.jsxs(oe, {
            defaultValue: "general",
            className: "space-y-6",
            children: [
              e.jsxs(me, {
                className: "grid w-full grid-cols-5 lg:w-auto lg:inline-flex",
                children: [
                  e.jsxs(G, {
                    value: "general",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(W, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: s("settings.tabs.general") || "Geral",
                      }),
                    ],
                  }),
                  e.jsxs(G, {
                    value: "company",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(se, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: s("settings.tabs.company") || "Empresa",
                      }),
                    ],
                  }),
                  g &&
                    e.jsxs(G, {
                      value: "ai",
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx(X, { className: "h-4 w-4" }),
                        e.jsx("span", {
                          className: "hidden sm:inline",
                          children: "AI",
                        }),
                      ],
                    }),
                  e.jsxs(G, {
                    value: "notifications",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ae, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children:
                          s("settings.tabs.notifications") || "Notificações",
                      }),
                    ],
                  }),
                  e.jsxs(G, {
                    value: "integrations",
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(ve, { className: "h-4 w-4" }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children:
                          s("settings.tabs.integrations") || "Integrações",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(K, {
                value: "general",
                children: e.jsxs("div", {
                  className: "space-y-6",
                  children: [ie(), ne(), te(), ce()],
                }),
              }),
              e.jsx(K, { value: "company", children: e.jsx(Ae, {}) }),
              g &&
                e.jsx(K, {
                  value: "ai",
                  children: e.jsxs(v, {
                    children: [
                      e.jsxs(N, {
                        children: [
                          e.jsxs(y, {
                            className: "flex items-center gap-2",
                            children: [
                              e.jsx(X, { className: "h-5 w-5 text-primary" }),
                              "Configurações de IA",
                            ],
                          }),
                          e.jsx(b, {
                            children:
                              "Configure o provedor de embeddings para o AI Analyst (apenas administrador)",
                          }),
                        ],
                      }),
                      e.jsx(C, {
                        className: "space-y-6",
                        children: e.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            e.jsxs("div", {
                              className: "space-y-2",
                              children: [
                                e.jsx(i, {
                                  children: "Provedor de Embeddings",
                                }),
                                e.jsxs(T, {
                                  value: h,
                                  onValueChange: (d) => P(d),
                                  children: [
                                    e.jsx(R, { children: e.jsx(z, {}) }),
                                    e.jsxs(D, {
                                      children: [
                                        e.jsx(p, {
                                          value: "huggingface",
                                          children: "HuggingFace (Gratuito)",
                                        }),
                                        e.jsx(p, {
                                          value: "openai",
                                          children: "OpenAI (Pago)",
                                        }),
                                        e.jsx(p, {
                                          value: "gemini",
                                          children: "Gemini (Pago)",
                                        }),
                                        e.jsx(p, {
                                          value: "local",
                                          children: "Local (Offline)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            h !== "local" &&
                              e.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  e.jsx(i, { children: "API Key" }),
                                  e.jsx(f, {
                                    type: "password",
                                    placeholder:
                                      h === "huggingface"
                                        ? "hf_xxxx..."
                                        : "sk-...",
                                    value: I,
                                    onChange: (d) => O(d.target.value),
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                      h === "huggingface" &&
                                        "Obtenha sua chave em huggingface.co/settings/tokens",
                                      h === "openai" &&
                                        "Obtenha sua chave em platform.openai.com/api-keys",
                                      h === "gemini" &&
                                        "Obtenha sua chave em aistudio.google.com/app/apikey",
                                    ],
                                  }),
                                ],
                              }),
                            e.jsxs("div", {
                              className: "flex gap-2",
                              children: [
                                e.jsx(o, {
                                  variant: "outline",
                                  onClick: E,
                                  disabled: L,
                                  children: L
                                    ? "Testando..."
                                    : "Testar Conexão",
                                }),
                                e.jsx(o, {
                                  onClick: k,
                                  children: "Salvar Configuração",
                                }),
                              ],
                            }),
                            A &&
                              e.jsxs("div", {
                                className: "p-4 bg-muted rounded-lg",
                                children: [
                                  e.jsx("p", {
                                    className: "text-sm font-medium",
                                    children: "Status atual:",
                                  }),
                                  e.jsxs("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                      "Provedor: ",
                                      A.embeddingProvider,
                                      " • Configurado: ",
                                      A.isConfigured ? "Sim" : "Não",
                                      " • Última atualização: ",
                                      ((H = A.lastUpdated) == null
                                        ? void 0
                                        : H.toLocaleDateString("pt-BR")) ||
                                        "Nunca",
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
              e.jsx(K, { value: "notifications", children: e.jsx(Se, {}) }),
              e.jsx(K, { value: "integrations", children: e.jsx(ke, {}) }),
            ],
          }),
        ],
      }),
    });
  };
export { Me as default };
