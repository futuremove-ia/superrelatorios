# Auditoria operacional — Produto, UX e UI (matriz viva)

**Versão:** 1.0  
**Última revisão:** 2026-03-24  
**Uso:** grooming, planejamento de sprint e definição de “pronto”. Atualizar a coluna **Status** e a seção **Histórico** a cada ciclo.

---

## 1. Como usar este documento

1. **Triagem:** ordenar por **Severidade** (P0 → P3), depois por **Sprint sugerido**.  
2. **Atribuição:** preencher **Owner** com pessoa ou time (não deixar só papel genérico após o kickoff).  
3. **Encerramento:** cada ID passa a **Done** só quando **Critério de aceite** for verificável (teste manual scriptado, E2E ou checklist).  
4. **Ritual:** revisar mensalmente IDs **Open** + **Won’t fix** (justificativa obrigatória).

---

## 2. Legenda

### Severidade

| Nível | Significado |
|-------|-------------|
| **P0** | Bloqueia jornada principal, dados ilegíveis ou rota quebrada para usuário-alvo. |
| **P1** | Degrada confiança ou causa erro frequente; contornável com custo alto. |
| **P2** | Consistência, polish, dívida que aumenta custo de manutenção ou suporte. |
| **P3** | Melhoria incremental; baixo risco se postergada. |

### Owner (sugestão de papel)

- **FE** — frontend / roteamento / UI  
- **BE** — API, Supabase, RLS, migrações  
- **PD** — product discovery / priorização / escopo  
- **UX** — conteúdo, fluxo, acessibilidade  
- **QA** — testes E2E / checklist de regressão  

### Status

`Open` | `In progress` | `Done` | `Won’t fix`

---

## 3. Matriz de achados (fonte da verdade operacional)

| ID | Achado | Evidência (arquivo / trecho) | Severidade | Sprint sugerido | Owner sugerido | Status | Critério de aceite |
|----|--------|------------------------------|------------|-----------------|----------------|--------|-------------------|
| **OP-001** | Rotas da sidebar em PT/ES usam segmentos (`/metricas`, `/relatorios`, `/dados`) que **não existem** em `App.tsx` (só `metrics`, `reports`, `folders`). Cliques geram **404**. | `src/components/navigation/LocalizedNavigation.tsx` (blocos `pt-BR`, `es-ES`); `src/App.tsx` (`Route path` filhos de `/:locale/app`) | P0 | Sprint 0 | FE | Open | Para `pt-BR` e `es-ES`, cada item do menu lateral abre a tela correta sem 404. E2E ou checklist com 9 URLs. |
| **OP-002** | `navigateLocalized` recebe URL já com locale (`/pt-BR/app/metricas`); `getLocalizedRoute` em `routes.ts` só mapeia chaves **canônicas** (`/app/metricas`). Resultado: **fallback** para URL errada. | `src/routes/routes.ts` (`getLocalizedRoute`); `LocalizedNavigation.tsx` (`handleClick` → `navigateLocalized(item.href)`) | P0 | Sprint 0 | FE | Open | Navegação usa **uma** convenção: ou sempre path canônico interno + `getLocalizedRoute`, ou aliases explícitos nas rotas. Teste: clicar cada link após OP-001 resolvido. |
| **OP-003** | Links de **Configurações** e **Perfil** no layout apontam para `/app/configuracoes` e `/app/perfil`; rotas reais são `settings` e `profile`. | `src/components/AppLayout.tsx` (footer settings; dropdown perfil); `src/components/onboarding/DemoModeBanner.tsx` (`Link` para `configuracoes`) | P0 | Sprint 0 | FE | Open | Botões “Configurações”, “Perfil” e CTA do banner demo abrem as telas certas em PT/EN/ES. |
| **OP-004** | Várias telas navegam com paths em português (`/app/relatorios`, `/app/pastas`) que **não batem** com as rotas registradas (`reports`, `folders`). | `src/pages/app/ReportsList.tsx`; `src/pages/app/Folders.tsx`; `src/pages/app/FolderDetail.tsx`; `src/pages/app/ReportDetail.tsx` (`navigate(...)`) | P0 | Sprint 0 | FE | Open | A partir da lista de relatórios e pastas, abrir detalhe e voltar sem 404; URLs finais documentadas no `02-i18n-guide` ou neste doc. |
| **OP-005** | `ProtectedRoute` redireciona para `/login?redirect=...` **sem** prefixo `/:locale`. | `src/App.tsx` (`Navigate to={\`/login?redirect=...\`}`) | P1 | Sprint 0 | FE | Open | Usuário deslogado em `/pt-BR/app/reports` cai em `/pt-BR/login?redirect=...` (ou política única documentada). |
| **OP-006** | OAuth callback redireciona com `window.location.href` para `/login` ou `/app` **sem locale**. | `src/pages/auth/AuthCallback.tsx` | P1 | Sprint 0 | FE | Open | Pós-OAuth, URL sempre `/{locale}/app` ou redirect param preservando locale. Teste Google em staging. |
| **OP-007** | Após signup, `navigate('/login?redirect=...')` sem locale. | `src/pages/auth/Login.tsx` | P1 | Sprint 0 | FE | Open | Fluxo signup → tela de confirmação/login na mesma árvore de idioma da entrada. |
| **OP-008** | Lista e cache de relatórios vêm **só de mock**; persistência real em `saveReportWithMetrics` não alimenta a UI principal. | `src/hooks/useReports.ts`; `src/services/mockReports.ts` (`getAllReports`) | P0 | Sprint 1 | FE + BE | Open | Criar relatório (fluxo real) → aparece em `ReportsList` e no dashboard; `queryKey` invalidado após save. |
| **OP-009** | Detalhe do relatório lê apenas `mockReports` por id; UUID do banco não resolve. | `src/pages/app/ReportDetail.tsx`; `mockReports.ts` (`getReportById`) | P0 | Sprint 1 | FE + BE | Open | Abrir relatório criado na sessão pelo id da URL; conteúdo igual ao persistido. |
| **OP-010** | Cards do dashboard exibem **rótulos que não correspondem** aos dados (`useDashboardSummary` reutiliza campos com outro significado + tendências fixas). | `src/hooks/useDashboardSummary.ts`; `src/pages/app/Dashboard-Atualizado.tsx` (`mockStats`) | P0 | Sprint 1 | PD + FE | Open | Cada KPI tem **definição** em comentário ou doc + valor correto OU label “Ilustrativo” e remoção de “vs. mês passado” até haver série temporal real. |
| **OP-011** | `useCreateReport` chama `reportsService.createReport`, método **inexistente** em `mockReports.ts` — risco de runtime se usado. | `src/hooks/useReports.ts`; `src/services/mockReports.ts` | P1 | Sprint 1 | FE | Open | Remover hook morto **ou** implementar `createReport` alinhado ao Supabase; build + grep sem referências quebradas. |
| **OP-012** | Modo demo: `setUser(demoUser)` mas **`session` não é setada**; `ProtectedRoute` exige `session` → acesso a `/:locale/app` pode ser **impossível** sem Supabase real. | `src/contexts/AuthContext.tsx`; `src/App.tsx` (`ProtectedRoute`) | P0 | Sprint 0 | FE | Open | Com env de placeholder, fluxo documentado: ou `setSession` sintético compatível com Supabase types **ou** `ProtectedRoute` aceita `isDemoMode && user` **ou** demo só na landing (decisão PD registrada). |
| **OP-013** | Copy do `ErrorBoundary` afirma que “equipe já foi notificada” sem evidência de telemetria. | `src/components/error/ErrorBoundary.tsx` | P2 | Sprint 2 | UX + FE | Open | Texto alinhado à realidade **ou** integração Sentry/etc. com mesma mensagem. |
| **OP-014** | Campo de busca no header sem ação (placeholder só). | `src/components/AppLayout.tsx` | P2 | Sprint 2 | UX + FE | Open | Busca mínima (filtra relatórios) **ou** componente oculto / desabilitado com tooltip. |
| **OP-015** | Ícone de notificações sem fluxo. | `src/components/AppLayout.tsx` | P2 | Sprint 2 | PD + FE | Open | Página vazia “Sem notificações” + preferências **ou** removido até MVP. |
| **OP-016** | Bottom nav mobile mostra só **5 de 9** itens; Relatórios e Dados podem ficar inacessíveis na barra. | `src/components/navigation/LocalizedNavigation.tsx` (`slice(0, 5)`) | P2 | Sprint 2 | UX + FE | Open | Itens críticos (definidos por PD) acessíveis em ≤2 toques a partir do rodapé ou menu “Mais”. |
| **OP-017** | Dashboard de métricas mistura hooks reais com **mock KPIs** (“para demonstração”) sem separação visual explícita. | `src/pages/app/MetricsDashboard-Otimizado.tsx` | P1 | Sprint 1 | UX + FE | Open | Seção “Dados de exemplo” com borda/copy **ou** flag de ambiente que desliga mocks em produção. |
| **OP-018** | Painel de decisão com **dados mock** declarados no código. | `src/pages/app/DecisionPanel.tsx` | P1 | Sprint 2 | PD + FE | Open | Badge “Beta / Dados de demonstração” + link para fonte real **ou** feature flag off em produção. |
| **OP-019** | `docs/USER_GUIDE.md` descreve builder (arrastar/soltar, exportações, integrações) **não garantidos** pelo `ReportBuilder` atual. | `docs/USER_GUIDE.md`; `src/pages/app/ReportBuilder.tsx` | P2 | Sprint 2 | PD + UX | Open | Guia marcado por versão (“v2 em desenvolvimento”) **ou** alinhado ao wizard atual; mesma mensagem na landing se necessário. |
| **OP-020** | Breadcrumbs constroem paths a partir de segmentos da URL; combinação com locale e slugs errados pode gerar links inconsistentes (dependente de OP-001–004). | `src/components/navigation/LocalizedBreadcrumbs.tsx` | P2 | Sprint 0 | FE | Open | Breadcrumbs clicáveis levam a rotas válidas após correção de rotas; revisão após OP-001. |

---

## 4. Pacotes de sprint (sugestão executável)

### Sprint 0 — Navegação e autenticação íntegras (bloqueadores)

**Inclui:** OP-001, OP-002, OP-003, OP-004, OP-012, OP-005, OP-006, OP-007, OP-020 (validação final).  
**Objetivo:** nenhum clique de menu ou fluxo OAuth/login deixa o usuário em 404 ou fora do locale esperado.  
**DoD sugerido:** checklist manual + 1 teste Playwright cobrindo `pt-BR` menu + login redirect.

### Sprint 1 — Fonte única de verdade para relatórios e dashboard honesto

**Inclui:** OP-008, OP-009, OP-010, OP-011, OP-017 (mínimo: rótulos/seções).  
**Objetivo:** criar → listar → abrir relatório com dados reais; KPIs não mentem no rótulo.  
**DoD sugerido:** cenário E2E “happy path relatório” + revisão PD dos textos dos cards.

### Sprint 2 — Confiança, polish e alinhamento documental

**Inclui:** OP-013, OP-014, OP-015, OP-016, OP-018, OP-019.  
**Objetivo:** reduzir ruído, expectativas alinhadas, beta explícito onde for mock.  
**DoD sugerido:** revisão de copy + screenshot da home logada para release notes.

---

## 5. Checklist E2E mínimo (pós Sprint 0 + 1)

- [ ] `/{locale}/app` carrega logado (demo ou real conforme política).  
- [ ] Cada item da **sidebar desktop** em `pt-BR`, `en-US`, `es-ES` abre tela válida.  
- [ ] Criar relatório (dados de teste) → salvar → aparece na lista → abre detalhe.  
- [ ] Logout → tentar acessir relatório → login com **redirect** correto com locale.  
- [ ] OAuth (se habilitado) retorna para `/{locale}/app` ou redirect param válido.

---

## 6. Métricas de acompanhamento (produto)

| Métrica | Baseline | Meta pós Sprint 1 |
|---------|----------|---------------------|
| Taxa de erro de rota (404 em `/app/*`) | Medir via analytics/logs | < 0,5% das views de app |
| Conclusão “primeiro relatório” (funil) | Definir evento `report_created` | +20% relativo (validar com PD) |
| Tickets de suporte “não vejo meu relatório” | 0 se não há users | 0 após OP-008/009 |

---

## 7. Histórico de revisões

| Data | Autor | Notas |
|------|-------|-------|
| 2026-03-24 | Auditoria assistida | Criação do documento a partir das iterações 1 e 2 da auditoria de produto/UX/UI. |
| 2026-03-24 | Implementação | Sprint 0/1 parcial no código: `appPaths` + `getLocalizedRoute` na navegação; `ProtectedRoute` com locale e demo; login/callback com prefixo de idioma; `useReports` / detalhe com Supabase fora do demo; dashboard com KPIs honestos; invalidação de cache após salvar relatório. Atualizar **Status** das linhas OP-001–012 conforme validação manual/E2E. |

---

## 8. Relação com dívida técnica existente

O item **TD-001** em `docs/07-knowledge/TECHNICAL_DEBT.md` (“Mock Data em Produção”) corresponde operacionalmente a **OP-008**, **OP-009**, **OP-017** e **OP-018**. Recomenda-se fechar TD-001 quando esses IDs estiverem **Done** ou **Won’t fix** com justificativa.
