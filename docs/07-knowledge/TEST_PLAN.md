# Plano de Testes - SuperRelatórios v1.1

**Versão:** 1.0  
**Data:** 2026-04-01  
**Status:** Draft  
**Responsável:** QA Team

---

## 1. Visão Geral

### 1.1 Objetivo

Garantir a qualidade, confiabilidade e performance do SuperRelatórios antes do lançamento da v1.1 "Conexão Real".

### 1.2 Escopo

- Frontend (React 18 + Vite + TypeScript)
- Backend (Supabase - Auth, Database, Storage)
- Integrações (APIs externas, webhooks)
- Performance, Segurança, Acessibilidade

### 1.3 Fora de Escopo

- Testes de infraestrutura de deploy (Vercel)
- Testes de compatibilidade com navegadores < 2 anos

---

## 2. Estratégia de Testes

### 2.1 Pirâmide de Testes

```
        /\
       /  \  E2E (5%)
      /----\
     /      \  Integração (20%)
    /--------\
   /          \  Unitários (75%)
  /____________\
```

### 2.2 Ferramentas

| Tipo           | Ferramenta               |
| -------------- | ------------------------ |
| Unitários      | Vitest + Testing Library |
| E2E            | Playwright               |
| API            | Supabase JS + Vitest     |
| Performance    | Lighthouse CI            |
| Acessibilidade | axe-core                 |
| Visual         | Percy (opcional)         |

---

## 3. Testes Unitários (75%)

### 3.1 Hooks

| Hook                     | Testes                                                                                                                     | Prioridade |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `useCurrentOrganization` | - Retorna org real com user autenticado<br>- Retorna demo em modo demo<br>- Cache funciona (staleTime)<br>- Error handling | 🔴 Alta    |
| `useReports`             | - Fetch reports by org<br>- Empty state<br>- Loading state<br>- Error state                                                | 🔴 Alta    |
| `useReport`              | - Fetch single report<br>- Not found handling                                                                              | 🟡 Média   |
| `useCreateReport`        | - Create success<br>- Create failure<br>- Invalidates cache                                                                | 🟡 Média   |
| `useUpdateReport`        | - Update success<br>- Update failure                                                                                       | 🟡 Média   |
| `useDeleteReport`        | - Delete success<br>- Delete failure                                                                                       | 🟡 Média   |

### 3.2 Services

| Service                   | Testes                                                                                                                                      | Prioridade |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `supabaseReportsService`  | - getReportsByOrganization<br>- getReportById<br>- createReport<br>- updateReport<br>- deleteReport<br>- getTemplatesFromSupabase           | 🔴 Alta    |
| `supabaseBusinessService` | - getDiagnosticsByOrganization<br>- getPrioritiesByOrganization<br>- getActionsByOrganization<br>- createActionPlan<br>- updateActionStatus | 🔴 Alta    |

### 3.3 Components

| Component              | Testes                                                                                                                         | Prioridade |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `ReportsList`          | - Renderiza lista<br>- Filtra por status<br>- Filtra por categoria<br>- Busca por texto<br>- Empty state<br>- Loading skeleton | 🔴 Alta    |
| `ReportDetail`         | - Renderiza relatório<br>- Renderiza blocos<br>- Tabs funcionam<br>- Botões de ação                                            | 🔴 Alta    |
| `Priorities`           | - Lista prioridades<br>- Filtra por nível<br>- Modal de validação<br>- Stats corretos                                          | 🔴 Alta    |
| `ActionPlan`           | - Lista ações<br>- Toggle completion<br>- Progress bar<br>- Empty state                                                        | 🟡 Média   |
| `ControlPanel`         | - 3 seções renderizam<br>- KPIs atualizam<br>- Gráficos renderizam                                                             | 🔴 Alta    |
| `DecisionPanel`        | - Radar items<br>- Actionable cards<br>- Filtros por domínio                                                                   | 🟡 Média   |
| `Analytics`            | - Diagnósticos<br>- Métricas<br>- Gráficos                                                                                     | 🟡 Média   |
| `DynamicBlockRenderer` | - HERO block<br>- KPI_GRID block<br>- CHART block<br>- AI_INSIGHT block<br>- TABLE block<br>- CALLOUT block                    | 🔴 Alta    |

### 3.4 Utils/Helpers

| Módulo      | Testes                                                                    | Prioridade |
| ----------- | ------------------------------------------------------------------------- | ---------- |
| `lib/utils` | - cn() merge<br>- Formatação de datas<br>- Formatação de números          | 🟡 Média   |
| `i18n`      | - PT translations<br>- EN translations<br>- ES translations<br>- Fallback | 🟢 Baixa   |

---

## 4. Testes de Integração (20%)

### 4.1 Auth Flow

| Teste                 | Descrição                                                          | Prioridade |
| --------------------- | ------------------------------------------------------------------ | ---------- |
| Login com email       | - Sucesso<br>- Email inválido<br>- Senha errada<br>- Rate limiting | 🔴 Alta    |
| Login social (Google) | - Redirecionamento<br>- Callback<br>- Criação de profile           | 🔴 Alta    |
| Session management    | - Persistência<br>- Expiração<br>- Refresh token                   | 🔴 Alta    |
| Logout                | - Limpa session<br>- Redireciona para login                        | 🟡 Média   |
| Demo mode             | - Ativa sem Supabase<br>- Cria user demo<br>- Funciona offline     | 🟡 Média   |

### 4.2 Database Integration

| Teste             | Descrição                                                       | Prioridade |
| ----------------- | --------------------------------------------------------------- | ---------- |
| Organizations     | - CRUD completo<br>- FK constraints<br>- RLS policies           | 🔴 Alta    |
| Reports           | - CRUD com JSONB<br>- Blocks serialization<br>- Templates       | 🔴 Alta    |
| Radar Items       | - FK para diagnoses<br>- FK para impacts<br>- Generated columns | 🔴 Alta    |
| Action Items      | - FK para radar_items<br>- Status transitions                   | 🟡 Média   |
| Organization KPIs | - Period constraints<br>- Value types<br>- Currency handling    | 🟡 Média   |
| Profiles          | - Trigger on auth.users<br>- Role management                    | 🔴 Alta    |

### 4.3 RLS (Row Level Security)

| Policy          | Teste                                        | Prioridade |
| --------------- | -------------------------------------------- | ---------- |
| `organizations` | - User vê apenas sua org<br>- Admin vê todas | 🔴 Alta    |
| `reports`       | - User vê apenas reports da sua org          | 🔴 Alta    |
| `radar_items`   | - User vê apenas items da sua org            | 🔴 Alta    |
| `action_items`  | - User vê apenas actions da sua org          | 🟡 Média   |
| `profiles`      | - User vê apenas seu profile                 | 🔴 Alta    |

---

## 5. Testes E2E (5%)

### 5.1 Fluxos Críticos

| Fluxo                     | Passos                                                                                                                 | Prioridade |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Onboarding Completo**   | 1. Acessar landing<br>2. Criar conta<br>3. Confirmar email<br>4. Login<br>5. Ver dashboard                             | 🔴 Alta    |
| **Criar Relatório**       | 1. Login<br>2. Clicar "Novo Relatório"<br>3. Selecionar template<br>4. Preencher dados<br>5. Salvar<br>6. Ver na lista | 🔴 Alta    |
| **Gerenciar Prioridades** | 1. Login<br>2. Acessar Priorities<br>3. Validar prioridade<br>4. Criar ação<br>5. Marcar como completa                 | 🔴 Alta    |
| **Plano de Ação**         | 1. Login<br>2. Acessar Action Plan<br>3. Ver ações pendentes<br>4. Completar ação<br>5. Ver progresso                  | 🟡 Média   |
| **Radar**                 | 1. Login<br>2. Acessar Decision Panel<br>3. Ver riscos<br>4. Ver oportunidades<br>5. Filtrar por domínio               | 🟡 Média   |

### 5.2 Cenários de Erro

| Cenário          | Teste                                           | Prioridade |
| ---------------- | ----------------------------------------------- | ---------- |
| Network offline  | - App mostra estado offline<br>- Retry funciona | 🟡 Média   |
| Session expirada | - Redireciona para login<br>- Mantém estado     | 🟡 Média   |
| Erro de banco    | - Mostra error boundary<br>- Não quebra app     | 🔴 Alta    |

---

## 6. Testes de Performance

### 6.1 Métricas (Lighthouse)

| Métrica                        | Target          | Prioridade |
| ------------------------------ | --------------- | ---------- |
| LCP (Largest Contentful Paint) | < 2.5s          | 🔴 Alta    |
| FID (First Input Delay)        | < 100ms         | 🔴 Alta    |
| CLS (Cumulative Layout Shift)  | < 0.1           | 🔴 Alta    |
| TTI (Time to Interactive)      | < 3.5s          | 🟡 Média   |
| Bundle size                    | < 500KB initial | 🟡 Média   |

### 6.2 Testes de Carga

| Endpoint         | Requisições | Target  | Prioridade |
| ---------------- | ----------- | ------- | ---------- |
| GET /reports     | 100 req/s   | < 200ms | 🟡 Média   |
| GET /radar_items | 100 req/s   | < 200ms | 🟡 Média   |
| POST /reports    | 50 req/s    | < 500ms | 🟡 Média   |

---

## 7. Testes de Segurança

### 7.1 Autenticação

| Teste             | Descrição                                                | Prioridade |
| ----------------- | -------------------------------------------------------- | ---------- |
| JWT validation    | - Token expirado rejeitado<br>- Token inválido rejeitado | 🔴 Alta    |
| Session hijacking | - Session fixação protegida                              | 🔴 Alta    |
| CSRF              | - Tokens CSRF em forms                                   | 🔴 Alta    |

### 7.2 Autorização

| Teste                | Descrição                              | Prioridade |
| -------------------- | -------------------------------------- | ---------- |
| RLS bypass           | - Tentar acessar dados de outra org    | 🔴 Alta    |
| Privilege escalation | - User tenta ser admin                 | 🔴 Alta    |
| IDOR                 | - Acessar resource de outra org via ID | 🔴 Alta    |

### 7.3 Input Validation

| Teste         | Descrição                                        | Prioridade |
| ------------- | ------------------------------------------------ | ---------- |
| XSS           | - Scripts em inputs<br>- HTML em campos de texto | 🔴 Alta    |
| SQL Injection | - Queries maliciosas (Supabase protege)          | 🔴 Alta    |
| File upload   | - Tipos permitidos<br>- Tamanho máximo           | 🟡 Média   |

---

## 8. Testes de Acessibilidade

### 8.1 WCAG 2.1 AA

| Critério                     | Teste                                       | Prioridade |
| ---------------------------- | ------------------------------------------- | ---------- |
| 1.1.1 Non-text Content       | - Alt text em imagens<br>- Labels em ícones | 🟡 Média   |
| 1.3.1 Info and Relationships | - Heading hierarchy<br>- Form labels        | 🟡 Média   |
| 1.4.3 Contrast               | - Contraste mínimo 4.5:1                    | 🟡 Média   |
| 2.1.1 Keyboard               | - Navegação por teclado<br>- Focus visible  | 🔴 Alta    |
| 2.4.3 Focus Order            | - Tab order lógico                          | 🟡 Média   |
| 3.3.1 Error Identification   | - Mensagens de erro claras                  | 🟡 Média   |
| 4.1.2 Name, Role, Value      | - ARIA labels<br>- Roles corretos           | 🟡 Média   |

---

## 9. Testes Cross-Browser/Device

### 9.1 Navegadores

| Navegador | Versão | Prioridade |
| --------- | ------ | ---------- |
| Chrome    | Latest | 🔴 Alta    |
| Firefox   | Latest | 🟡 Média   |
| Safari    | Latest | 🟡 Média   |
| Edge      | Latest | 🟢 Baixa   |

### 9.2 Dispositivos

| Dispositivo | Resolução | Prioridade |
| ----------- | --------- | ---------- |
| Desktop     | 1920x1080 | 🔴 Alta    |
| Tablet      | 768x1024  | 🟡 Média   |
| Mobile      | 375x667   | 🔴 Alta    |

---

## 10. Matriz de Cobertura

| Módulo     | Unit | Integration | E2E | Target |
| ---------- | ---- | ----------- | --- | ------ |
| Auth       | ✅   | ✅          | ✅  | 90%    |
| Reports    | ✅   | ✅          | ✅  | 85%    |
| Priorities | ✅   | ✅          | ✅  | 80%    |
| Actions    | ✅   | ✅          | ✅  | 80%    |
| Radar      | ✅   | ✅          | ✅  | 80%    |
| Dashboard  | ✅   | ❌          | ✅  | 75%    |
| Analytics  | ✅   | ❌          | ✅  | 70%    |
| Settings   | ✅   | ❌          | ❌  | 60%    |

---

## 11. Critérios de Aceitação

### 11.1 Go/No-Go

| Critério            | Target     | Status |
| ------------------- | ---------- | ------ |
| Unit test coverage  | > 80%      | ⬜     |
| E2E tests passing   | 100%       | ⬜     |
| Critical bugs       | 0          | ⬜     |
| High bugs           | < 5        | ⬜     |
| Lighthouse score    | > 90       | ⬜     |
| Accessibility score | > 90       | ⬜     |
| Security scan       | 0 critical | ⬜     |

### 11.2 Definição de Pronto

- [ ] Todos os testes unitários passando
- [ ] Todos os testes de integração passando
- [ ] Todos os testes E2E passando
- [ ] Coverage > 80%
- [ ] Zero bugs críticos
- [ ] Performance dentro dos targets
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] Security scan limpo
- [ ] Code review aprovado
- [ ] Documentação atualizada

---

## 12. Cronograma Estimado

| Fase            | Duração     | Responsável |
| --------------- | ----------- | ----------- |
| Setup de testes | 2 dias      | Dev         |
| Unitários       | 5 dias      | Dev         |
| Integração      | 3 dias      | Dev         |
| E2E             | 3 dias      | QA          |
| Performance     | 1 dia       | Dev         |
| Segurança       | 1 dia       | QA          |
| Acessibilidade  | 1 dia       | QA          |
| Cross-browser   | 1 dia       | QA          |
| **Total**       | **17 dias** |             |

---

## 13. Riscos e Mitigações

| Risco                               | Impacto | Mitigação                       |
| ----------------------------------- | ------- | ------------------------------- |
| Mock data não reflete produção      | Alto    | Usar seed real no staging       |
| RLS policies não testadas           | Alto    | Criar testes específicos de RLS |
| Performance degrada com dados reais | Médio   | Testar com volume real          |
| Browser compatibility issues        | Médio   | Testar em browsers principais   |
| Accessibility gaps                  | Médio   | Usar axe-core automatizado      |

---

## 14. Anexos

### 14.1 Comandos de Teste

```bash
# Unitários
npm run test

# E2E
npm run test:e2e

# Coverage
npm run test:coverage

# Lighthouse
npm run lighthouse

# Acessibilidade
npm run test:a11y
```

### 14.1 Ambientes

| Ambiente   | URL                         | Propósito       |
| ---------- | --------------------------- | --------------- |
| Local      | http://localhost:5173       | Desenvolvimento |
| Preview    | Vercel PR URL               | Review          |
| Staging    | staging.superrelatorios.com | QA              |
| Production | superrelatorios.com         | Produção        |
