import { j as e } from "./vendor-data-DuuuwLk5.js";
import { C as i, b as o, c as d, d as l, a as n } from "./card-CTs8HHrG.js";
import { B as c } from "./index-CaCe4Bjh.js";
import { B as t } from "./badge-Dl11-P0M.js";
import { L as p } from "./vendor-react-DfYPWlel.js";
import {
  g as m,
  B as x,
  Z as s,
  ac as u,
  bu as g,
  G as h,
  t as v,
} from "./vendor-utils-CGetvm_l.js";
import "./vendor-radix-CfL9Rjb9.js";
const r = [
    {
      id: "report-builder",
      title: "1. Report Builder - Fluxo Completo",
      description:
        "Upload → Template → Blocos → Geração → Preview. Fluxo principal de criação de relatórios com IA.",
      path: "/app/novo-relatorio",
      icon: m,
      badge: "Principal",
      badgeVariant: "default",
    },
    {
      id: "quick-start-exec",
      title: "2. Quick Start - Template Executivo",
      description:
        "Landing → Login → ReportBuilder com template pré-selecionado (Executivo).",
      path: "/app/novo-relatorio?template=executivo",
      icon: x,
      badge: "Rápido",
      badgeVariant: "secondary",
    },
    {
      id: "quick-start-sales",
      title: "3. Quick Start - Template Vendas",
      description:
        "Landing → Login → ReportBuilder com template pré-selecionado (Vendas).",
      path: "/app/novo-relatorio?template=vendas",
      icon: s,
      badge: "Rápido",
      badgeVariant: "secondary",
    },
    {
      id: "folders",
      title: "4. Gestão de Pastas",
      description:
        "Listagem de pastas, navegação organizacional de relatórios por categoria.",
      path: "/app/folders",
      icon: u,
    },
    {
      id: "decision-panel",
      title: "5. Painel de Decisão",
      description:
        "Fluxo de decisão estratégica com análise e recomendações IA.",
      path: "/app/decision-panel",
      icon: s,
    },
    {
      id: "templates",
      title: "6. Gerenciador de Templates",
      description:
        "Criação, edição e gestão de modelos personalizados de relatórios.",
      path: "/app/templates",
      icon: g,
    },
    {
      id: "google-drive",
      title: "7. Google Drive (Futuro)",
      description:
        "Conexão com Drive, seleção de arquivos de pastas. Em desenvolvimento.",
      path: "#",
      icon: h,
      badge: "Em breve",
      badgeVariant: "outline",
    },
  ],
  F = () =>
    e.jsx("div", {
      className: "min-h-screen bg-gradient-subtle",
      children: e.jsxs("div", {
        className: "container mx-auto px-4 py-12 max-w-4xl",
        children: [
          e.jsxs("div", {
            className: "text-center mb-12",
            children: [
              e.jsx("h1", {
                className:
                  "text-3xl md:text-4xl font-bold text-foreground mb-4",
                children: "Central de Fluxos",
              }),
              e.jsx("p", {
                className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                children:
                  "Navegação centralizada para testes de usabilidade e experiência. Selecione um fluxo para iniciar o teste.",
              }),
              e.jsx(t, {
                variant: "outline",
                className: "mt-4",
                children: "superrelatorios.com.br/flows",
              }),
            ],
          }),
          e.jsxs(i, {
            className: "border-border/40 shadow-lg",
            children: [
              e.jsxs(o, {
                className: "pb-4",
                children: [
                  e.jsx(d, {
                    className: "text-xl",
                    children: "Fluxos Disponíveis",
                  }),
                  e.jsxs(l, {
                    children: [r.length, " fluxos de navegação para testes"],
                  }),
                ],
              }),
              e.jsx(n, {
                className: "p-6",
                children: e.jsx("div", {
                  className: "space-y-3",
                  children: r.map((a) =>
                    e.jsx(
                      c,
                      {
                        variant: "outline",
                        className:
                          "w-full justify-between h-auto py-4 px-4 text-left group hover:border-primary/50 hover:bg-primary/5",
                        asChild: !0,
                        children: e.jsxs(p, {
                          to: a.path,
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors",
                                  children: e.jsx(a.icon, {
                                    className:
                                      "w-5 h-5 text-muted-foreground group-hover:text-primary",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "flex-1",
                                  children: [
                                    e.jsxs("div", {
                                      className: "flex items-center gap-2 mb-1",
                                      children: [
                                        e.jsx("span", {
                                          className:
                                            "font-semibold text-foreground",
                                          children: a.title,
                                        }),
                                        a.badge &&
                                          e.jsx(t, {
                                            variant: a.badgeVariant,
                                            className: "text-[10px]",
                                            children: a.badge,
                                          }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "text-sm text-muted-foreground line-clamp-2",
                                      children: a.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(v, {
                              className:
                                "w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all",
                            }),
                          ],
                        }),
                      },
                      a.id,
                    ),
                  ),
                }),
              }),
            ],
          }),
          e.jsx("div", {
            className: "mt-8 text-center",
            children: e.jsx("p", {
              className: "text-sm text-muted-foreground",
              children:
                "Use esta tela para navegação rápida durante testes de UX.",
            }),
          }),
        ],
      }),
    });
export { F as default };
