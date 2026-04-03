# Auditoria Frontend — SuperRelatórios

**Data:** 2026-04-01 | **Score: 71/100** ⚠️

Stack: React 18, Vite 5, TanStack Query v5, shadcn/ui, Tailwind 3, TypeScript 5.

---

## Críticos 🔴

| ID    | Problema                                                                                                 | Impacto              |
| ----- | -------------------------------------------------------------------------------------------------------- | -------------------- |
| FE-C1 | `Radar` não importado no `App.tsx` — rota `/app/radar` quebra em runtime                                 | ReferenceError       |
| FE-C2 | `useKPIs`/`useMetricsLibrary` consultam tabelas legadas (`kpi_master_library`, `metrics_library`)        | Dashboard vazio      |
| FE-C3 | `useOrganizationKPIs` consulta `organization_kpis` (legada) — deve usar `user_metrics`                   | Histórico quebrado   |
| FE-C4 | `RadarSideDrawer` usa campos inline (`diagnosisTerm`, `diagnosisCause`, etc.) inexistentes no banco real | Drawer quebrado      |
| FE-C5 | Dois projetos frontend paralelos: `src/` (principal) e `apps/web/src/` (fragmento)                       | Confusão de produção |

**Correção FE-C1:**

```tsx
// src/App.tsx — adicionar import
const Radar = lazy(() => import("./pages/app/Radar"));
```

---

## Alertas ⚠️

| ID     | Problema                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------ |
| FE-W1  | ~30 classes CSS vazias no `index.css` (`.card-hover {}`, `.typography-h1 {}`, etc.)                    |
| FE-W2  | Rotas duplicadas: 3 rotas por componente (`reports/new`, `novo-relatorio`, `new-report`)               |
| FE-W3  | `useRisks` — invalidação de cache incorreta: `RISK_KEYS.all()` sem `organizationId`                    |
| FE-W4  | `useRadarItems` ausente em `src/hooks/` — referenciado mas não existe                                  |
| FE-W5  | Páginas sem rota: `DataHub.tsx`, `ReportComparison.tsx`, `StrategicDashboard-Atualizado.tsx`           |
| FE-W6  | Nomes de arquivo com sufixos: `MetricsDashboard-Otimizado.tsx`, `ConsolidatedDashboard-Atualizado.tsx` |
| FE-W7  | `kpi-card.tsx` usa cores hardcoded (`border-green-200`) em vez de tokens DSP                           |
| FE-W8  | CSS Modules misturados com Tailwind em `custom/ActionButton/` e `custom/DashboardCard/`                |
| FE-W9  | Arquivos `*-strategy.json` de i18n — carregamento como namespace não verificado                        |
| FE-W10 | `h1-h6` sem estilos no CSS global — hierarquia tipográfica não aplicada                                |

---

## Design System (Score: 82/100)

**Tokens bem definidos em `src/styles/tokens.css` e `src/index.css`:**

- Cores HSL: Dual-layer Trust (azul `#0052FF`) + Intelligence (âmbar `#F59E0B`) ✅
- Tipografia: Inter + Geist Mono, escala completa ✅
- Espaçamento: base 8px ✅
- Dark mode: `.dark` class com todas as variáveis ✅
- Z-index: escala documentada ✅

**Problema:** ~30 classes CSS definidas mas vazias. O DSP foi planejado mas não implementado — componentes usam Tailwind inline.

**Tailwind config:** Duplicação de cores — algumas como objetos aninhados (`background.light`), outras como CSS variables (`hsl(var(--primary))`). Dois sistemas paralelos.

**Design System Page:** `/design-system` com Colors, Typography, UIComponents, DomainCards, Principles, BestPractices — documentado e navegável ✅

---

## Componentes UI (Score: 85/100)

**55 componentes** em `src/components/ui/` cobrindo toda a biblioteca shadcn/ui + extensões:

- `kpi-card.tsx` — Card de KPI com trend, variantes, acessibilidade ✅
- `paper.tsx`, `empty-state.tsx`, `floating-button.tsx`, `ai-suggestion.tsx` ✅
- `custom/ActionButton/` e `custom/DashboardCard/` — CSS Modules (inconsistente)

---

## Hooks (Score: 68/100)

| Hook                       | Tabela Real                              | Status                              |
| -------------------------- | ---------------------------------------- | ----------------------------------- |
| `useCurrentOrganization`   | `profiles` + `organizations`             | ✅ Correto                          |
| `useReports`               | `reports`                                | ✅ Correto                          |
| `useOrganizationHierarchy` | `business_units`, `departments`, `teams` | ✅ Correto                          |
| `useKPIs`                  | `library_kpis`                           | 🔴 Usa tabela legada                |
| `useMetricsLibrary`        | `library_kpis`                           | 🔴 Usa `metrics_library` (legada)   |
| `useOrganizationKPIs`      | `user_metrics`                           | 🔴 Usa `organization_kpis` (legada) |
| `useActiveChallenges`      | `user_strategy_focus`                    | 🔴 Usa `user_challenges` (legada)   |

---

## Páginas e Roteamento (Score: 72/100)

**22 páginas implementadas.** Rotas novas não implementadas:
`/app/data-sources`, `/app/knowledge`, `/app/blueprint`, `/app/forecasts`, `/app/suppliers`, `/app/clients`, `/app/hr/costs`, `/app/strategy/swot`

---

## Acessibilidade (Score: 80/100)

✅ `*:focus-visible` com outline 2px | `prefers-reduced-motion` | `aria-hidden` em ícones | Radix UI como base | `.touch-target` 44px

⚠️ `h1-h6` sem estilos | Formulários sem `aria-describedby` em erros

---

## Performance (Score: 79/100)

✅ Code splitting por rota | TanStack Query com staleTime | ErrorBoundary | retry: 2

⚠️ `xlsx` (~1.5MB) e `pdf-lib` (~800KB) podem inflar bundle | `useReports` sem staleTime explícito

---

## Plano de Correção

**Fase 0 (1-2 dias):** FE-C1 (import Radar), criar `useRadarItems.ts`, mover RadarSideDrawer para `src/`

**Fase 1 (1 semana):** Atualizar hooks para tabelas reais (`library_kpis`, `user_metrics`)

**Fase 2 (1-2 semanas):** Implementar classes CSS do DSP, padronizar abordagem de estilo

**Fase 3 (1 semana):** Consolidar rotas duplicadas, renomear arquivos com sufixos

**Fase 4 (2-4 semanas):** Implementar rotas dos novos domínios

---

_Auditoria: Kiro AI Assistant | 2026-04-01 | Análise estática + cruzamento com schema Supabase_
