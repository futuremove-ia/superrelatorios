# Plano de Implementação: SuperRelatórios — Conformidade com Especificação

## Visão Geral

Tarefas de implementação para garantir que o projeto SuperRelatórios esteja em conformidade com os requisitos e design documentados. O plano cobre: setup de testes, property-based tests para as 20 propriedades de corretude, testes unitários de hooks e serviços críticos, testes E2E, validação de segurança, performance, i18n e documentação.

**Stack de testes**: Vitest + fast-check (PBT) + React Testing Library + Playwright

---

## Tarefas

- [ ] 1. Configurar ambiente de testes (Vitest + fast-check)
  - Instalar e configurar Vitest no workspace `apps/web` e `apps/api`
  - Instalar `fast-check` como dependência de desenvolvimento
  - Configurar `vitest.config.ts` com suporte a TypeScript, aliases de path e coverage (threshold 80%)
  - Instalar e configurar `@testing-library/react` e `@testing-library/user-event`
  - Criar arquivo `src/test/setup.ts` com mocks globais (Supabase client, i18next)
  - Adicionar scripts `test`, `test:coverage` e `test:watch` no `package.json` de cada app
  - _Requirements: 26.7_

- [ ] 2. Implementar Motor de Cálculo de KPIs (`MetricsCalculationService`)
  - Criar `apps/api/src/domain/domain/metrics/services/MetricsCalculationService.ts` com os métodos: `calculateRunway`, `calculateLtvCacRatio`, `calculateChurnRate`, `calculateNetProfitMargin`, `calculateContributionMargin`
  - Cada método deve retornar um objeto `Result<number, string>` (success/failure)
  - Implementar validação de denominador zero ou negativo com mensagem de erro descritiva
  - Garantir precisão de casas decimais conforme especificado (RUNWAY: 1 decimal; demais: 2 decimais)
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9_

  - [ ]\* 2.1 Escrever property test — Property 9: Corretude das fórmulas do Motor de Cálculo de KPIs
    - **Property 9: Corretude das fórmulas do Motor de Cálculo de KPIs**
    - Usar `fc.float({ min: 0.01 })` para inputs válidos de cada fórmula
    - Verificar resultado contra cálculo direto (model-based)
    - Cobrir casos de erro: denominador zero ou negativo
    - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9**

  - [ ]\* 2.2 Escrever property test — Property 10: Determinismo dos cálculos de KPI
    - **Property 10: Determinismo dos cálculos de KPI**
    - Chamar cada função de cálculo duas vezes com os mesmos inputs e verificar igualdade de resultado
    - Usar `fc.float({ min: 0.01, max: 1_000_000 })` para todos os inputs
    - **Validates: Requirements 7.10**

  - [ ]\* 2.3 Escrever property test — Property 11: Model-based testing dos cálculos de KPI
    - **Property 11: Model-based testing dos cálculos de KPI**
    - Implementar funções de referência simples (cálculo direto sem otimizações)
    - Comparar resultado do `MetricsCalculationService` com as funções de referência para inputs aleatórios
    - **Validates: Requirements 7.11**

  - [ ]\* 2.4 Escrever testes unitários para casos de borda do Motor de Cálculo
    - Testar `RUNWAY` com `burn_rate = 0`, `burn_rate < 0`, `saldo_caixa = 0`
    - Testar `LTV_CAC_RATIO` com `cac = 0`
    - Testar `CHURN_RATE` com `total_clientes = 0`
    - Testar `NET_PROFIT_MARGIN` e `CONTRIBUTION_MARGIN` com `receita = 0`
    - _Requirements: 7.6, 7.7, 7.8, 7.9_

- [ ] 3. Implementar detecção de desafios de negócio (`DetectChallengesUseCase`)
  - Criar `apps/api/src/domain/domain/strategy/use-cases/DetectChallengesUseCase.ts`
  - Implementar detecção de `CASH_FLOW_CRUNCH`, `INEFFICIENT_SALES_MACHINE` e `COMMODITY_TRAP`
  - Implementar cálculo de `confidence_score` proporcional à gravidade (intervalo [0.0, 1.0])
  - Implementar ordenação por severidade (`critical > warning > info`) e depois por `confidence_score` decrescente
  - Retornar lista vazia quando nenhum KPI está em estado crítico ou de alerta
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.9_

  - [ ]\* 3.1 Escrever property test — Property 12: Confidence score sempre em [0.0, 1.0]
    - **Property 12: Confidence score sempre em [0.0, 1.0]**
    - Usar `fc.array(fc.record({ kpiCode: fc.string(), value: fc.float() }))` como input
    - Verificar que `confidence_score` de cada desafio detectado está em [0.0, 1.0]
    - **Validates: Requirements 8.4, 8.7**

  - [ ]\* 3.2 Escrever property test — Property 13: Idempotência da detecção de desafios
    - **Property 13: Idempotência da detecção de desafios**
    - Executar `DetectChallengesUseCase` duas vezes com os mesmos dados e verificar igualdade de resultado
    - Comparar códigos, severidades e confidence scores
    - **Validates: Requirements 8.8**

  - [ ]\* 3.3 Escrever testes unitários para detecção de desafios
    - Testar detecção de `CASH_FLOW_CRUNCH` com RUNWAY < 6 e BURN_RATE crítico
    - Testar detecção de `INEFFICIENT_SALES_MACHINE` com SALES_CYCLE_DAYS > 60 e CAC acima do threshold
    - Testar detecção de `COMMODITY_TRAP` com margens abaixo dos thresholds
    - Testar retorno de lista vazia quando todos os KPIs estão saudáveis
    - _Requirements: 8.1, 8.2, 8.3, 8.9_

- [ ] 4. Implementar sistema de riscos e cálculo de `risk_score`
  - Criar/validar entidade `Risk` em `apps/api/src/domain/domain/risks/entities/Risk.ts`
  - Garantir que `risk_score = likelihood * impact` seja calculado automaticamente na criação e atualização
  - Implementar classificação: `high` (≥ 50), `medium` (20–49), `low` (< 20)
  - Implementar geração de matriz de riscos 10x10 agrupada por `likelihood` e `impact`
  - _Requirements: 10.2, 10.7, 10.6, 10.9_

  - [ ]\* 4.1 Escrever property test — Property 14: Invariante de cálculo do risk_score
    - **Property 14: Invariante de cálculo do risk_score**
    - Usar `fc.integer({ min: 1, max: 10 })` para `likelihood` e `impact`
    - Verificar que `risk.risk_score === likelihood * impact` para qualquer combinação válida
    - **Validates: Requirements 10.2, 10.9**

  - [ ]\* 4.2 Escrever testes unitários para o sistema de riscos
    - Testar classificação de risco: score 50 → `high`, score 25 → `medium`, score 10 → `low`
    - Testar geração da matriz 10x10 com distribuição correta de riscos
    - Testar filtro por status e categoria (propriedade metamórfica — subconjunto do total)
    - _Requirements: 10.7, 10.6, 10.8_

- [ ] 5. Implementar e testar hook `useCurrentOrganization`
  - Validar implementação existente em `apps/web/src/hooks/useCurrentOrganization.ts`
  - Garantir retorno de organização fictícia `{ id: "demo-org-id", name: "Empresa Demo" }` em Demo Mode sem chamadas ao banco
  - Garantir retorno de `null` e estado de erro quando organização não é encontrada
  - Garantir cache com `staleTime: 10min` via TanStack Query
  - _Requirements: 2.3, 2.4, 2.5_

  - [ ]\* 5.1 Escrever testes unitários para `useCurrentOrganization`
    - Testar retorno de organização fictícia em Demo Mode (sem mock de Supabase)
    - Testar retorno de `null` quando organização não existe no banco
    - Testar que dados da organização (id, name, slug, createdAt) são expostos corretamente
    - Usar `renderHook` do React Testing Library com wrapper de QueryClient
    - _Requirements: 2.3, 2.4, 2.5_

- [ ] 6. Implementar e testar hook `useAuth`
  - Validar implementação do `AuthContext` em `apps/web/src/contexts/`
  - Garantir que `isDemoMode: true` é retornado quando variáveis de ambiente Supabase não estão configuradas
  - Garantir que `user.id = "demo-user-id"` é retornado em Demo Mode
  - Garantir renovação automática de token antes da expiração
  - _Requirements: 1.6, 20.1, 20.5_

  - [ ]\* 6.1 Escrever testes unitários para `useAuth`
    - Testar detecção automática de Demo Mode (sem `VITE_SUPABASE_URL`)
    - Testar que `isDemoMode` é `false` quando credenciais estão configuradas
    - Testar que sessão é persistida entre recarregamentos (mock de localStorage)
    - _Requirements: 1.8, 20.1, 20.5_

- [ ] 7. Implementar e testar hook `useRadarItems`
  - Validar/criar `apps/web/src/hooks/useRadarItems.ts` com TanStack Query (`staleTime: 2min`)
  - Garantir que apenas itens com status `detected` ou `in_progress` são retornados para o radar ativo
  - Garantir que itens com status `acknowledged`, `dismissed` ou `resolved` são retornados para o histórico
  - _Requirements: 12.2, 12.3, 12.4_

  - [ ]\* 7.1 Escrever testes unitários para `useRadarItems`
    - Testar filtro de itens ativos (status `detected` e `in_progress`)
    - Testar filtro de histórico (status `acknowledged`, `dismissed`, `resolved`)
    - Testar que `aiConfidenceScore` é exposto como percentual (0–100%)
    - _Requirements: 12.3, 12.4, 12.8_

  - [ ]\* 7.2 Escrever property test — Property 15: Idempotência de dispensa de Radar Item
    - **Property 15: Idempotência de dispensa de Radar Item**
    - Usar `fc.record({ id: fc.uuid(), status: fc.constant('dismissed'), ... })` como input
    - Verificar que executar dispensa em item já `dismissed` não altera o estado
    - **Validates: Requirements 12.10**

- [ ] 8. Checkpoint — Verificar testes unitários e de propriedade dos serviços core
  - Garantir que todos os testes das tarefas 2–7 passam com `vitest --run`
  - Verificar cobertura de código > 80% para `MetricsCalculationService`, `DetectChallengesUseCase`, `useCurrentOrganization`, `useAuth` e `useRadarItems`
  - Garantir que todos os property tests executam com `numRuns: 100`
  - Perguntar ao usuário se há ajustes antes de prosseguir.

- [ ] 9. Implementar property tests de invariantes de dados
  - [ ] 9.1 Escrever property test — Property 5: Invariante de ordenação de thresholds
    - **Property 5: Invariante de ordenação de thresholds**
    - Usar `fc.record({ critical: fc.float(), warning: fc.float(), good: fc.float() })` e verificar ordenação
    - Cobrir KPIs (`critical < warning < good`) e benchmarks (`value_critical < value_warning < value_good < value_excellent`)
    - **Validates: Requirements 4.3, 6.9**

  - [ ] 9.2 Escrever property test — Property 6: Round-trip de serialização de KPI
    - **Property 6: Round-trip de serialização de KPI**
    - Usar `fc.record(...)` com todos os campos de `kpi_master_library`
    - Serializar para JSON e deserializar; verificar equivalência com objeto original
    - **Validates: Requirements 4.10**

  - [ ] 9.3 Escrever property test — Property 7: Filtro de KPIs por período é subconjunto do total
    - **Property 7: Filtro metamórfico de KPIs por período**
    - Usar `fc.array(fc.record({ period_key: fc.string(), ... }))` como dataset
    - Verificar que `filter(by period_key)` retorna subconjunto do array total
    - **Validates: Requirements 5.7**

  - [ ] 9.4 Escrever property test — Property 8: Cálculo correto do gap_percentage de benchmark
    - **Property 8: Cálculo correto do gap_percentage de benchmark**
    - Usar `fc.float()` para `actual` e `fc.float({ min: 0.01 })` para `target` (target ≠ 0)
    - Verificar `gap_percentage === ((actual - target) / target) * 100` com precisão de 2 decimais
    - **Validates: Requirements 6.5**

- [ ] 10. Implementar property tests de segurança e controle de acesso
  - [ ] 10.1 Escrever property test — Property 3: Isolamento de dados entre organizações (RLS)
    - **Property 3: Isolamento de dados entre organizações (RLS)**
    - Usar `fc.uuid()` para gerar dois `organization_id` distintos
    - Verificar que query no contexto da org A nunca retorna registros da org B
    - Usar cliente Supabase com mock de `auth.uid()` para simular contexto de organização
    - **Validates: Requirements 2.6**

  - [ ] 10.2 Escrever property test — Property 4: Controle de acesso retorna 403 para recursos não autorizados
    - **Property 4: RBAC retorna 403 para recursos não autorizados**
    - Usar `fc.constantFrom('viewer', 'analyst', 'manager', 'admin')` para papel do usuário
    - Para cada papel, verificar que tentativas de acesso a recursos acima da permissão retornam HTTP 403
    - **Validates: Requirements 3.6**

  - [ ] 10.3 Escrever property test — Property 18: Rate limiting retorna 429 após limite excedido
    - **Property 18: Rate limiting retorna 429 após limite excedido**
    - Usar `fc.integer({ min: 101, max: 200 })` para número de requisições acima do limite
    - Verificar que após 100 requisições em 15 minutos, a próxima retorna HTTP 429 com header `Retry-After`
    - **Validates: Requirements 17.1**

- [ ] 11. Implementar property tests de autenticação e API
  - [ ] 11.1 Escrever property test — Property 1: Autenticação retorna JWT para credenciais válidas
    - **Property 1: Autenticação retorna JWT para credenciais válidas**
    - Usar `fc.emailAddress()` e `fc.string({ minLength: 8 })` para credenciais
    - Verificar que credenciais válidas retornam JWT e credenciais inválidas retornam erro sem revelar qual campo está incorreto
    - **Validates: Requirements 1.1, 1.2**

  - [ ] 11.2 Escrever property test — Property 2: Bloqueio após falhas consecutivas de login
    - **Property 2: Bloqueio após falhas consecutivas de login**
    - Usar `fc.integer({ min: 1, max: 20 })` para número de tentativas falhas
    - Verificar que após N falhas consecutivas, a próxima tentativa é bloqueada independentemente das credenciais
    - **Validates: Requirements 1.7**

  - [ ] 11.3 Escrever property test — Property 16: Integridade referencial de Action Items
    - **Property 16: Integridade referencial de Action Items**
    - Usar `fc.uuid()` para `radar_item_id`
    - Verificar que criar `action_item` com `radar_item_id` inexistente retorna erro de integridade referencial
    - **Validates: Requirements 13.5**

  - [ ] 11.4 Escrever property test — Property 19: Round-trip de recursos da API
    - **Property 19: Round-trip de recursos da API**
    - Usar `fc.record(...)` para cada tipo de recurso (KPI, risco, benchmark, relatório)
    - Criar via POST e buscar via GET pelo mesmo ID; verificar equivalência dos dados
    - **Validates: Requirements 21.8**

  - [ ] 11.5 Escrever property test — Property 20: Invariante de formato de erro da API
    - **Property 20: Invariante de formato de erro da API**
    - Para qualquer input que gere resposta de erro (4xx/5xx), verificar que `error.code` está sempre presente no corpo JSON
    - **Validates: Requirements 21.9**

- [ ] 12. Implementar property test de i18n
  - [ ] 12.1 Escrever property test — Property 17: Round-trip de i18n
    - **Property 17: Round-trip de i18n**
    - Usar `fc.constantFrom('pt-BR', 'en-US', 'es-ES')` para idiomas
    - Para qualquer chave de tradução, mudar idioma e voltar ao original deve produzir a mesma string
    - Verificar cobertura de 100% das chaves em cada idioma (nenhuma chave ausente)
    - **Validates: Requirements 16.9**

  - [ ]\* 12.2 Escrever testes unitários de cobertura de strings i18n
    - Verificar que todos os arquivos `pt-BR.json`, `en-US.json` e `es-ES.json` possuem as mesmas chaves
    - Verificar que nenhuma chave tem valor vazio ou igual à chave (string não traduzida)
    - _Requirements: 16.1, 16.7_

- [ ] 13. Checkpoint — Verificar todos os property-based tests (P1–P20)
  - Executar `vitest --run` e confirmar que todos os 20 property tests passam
  - Verificar que cada teste executa com `numRuns: 100`
  - Confirmar que cada teste possui o comentário de tag no formato: `// Feature: project-spec-documentation, Property N: <texto>`
  - Perguntar ao usuário se há ajustes antes de prosseguir.

- [ ] 14. Configurar e implementar testes E2E com Playwright
  - Instalar e configurar Playwright em `apps/web` com suporte a Chromium, Firefox e WebKit
  - Criar `playwright.config.ts` com baseURL apontando para ambiente de desenvolvimento
  - Criar arquivo de fixtures com helpers de autenticação e navegação
  - _Requirements: 26.8_

  - [ ] 14.1 Implementar teste E2E — Fluxo de autenticação completo
    - Testar: login com credenciais válidas → redirecionamento para `/app` → logout → redirecionamento para login
    - Testar: login com credenciais inválidas → mensagem de erro sem revelar qual campo está incorreto
    - _Requirements: 1.1, 1.2, 1.4_

  - [ ] 14.2 Implementar teste E2E — Criação e consulta de KPI
    - Testar: navegar para Painel de Indicadores → criar KPI → verificar exibição no dashboard
    - Testar: filtrar KPIs por período → verificar que apenas registros do período são exibidos
    - _Requirements: 5.1, 5.3, 14.1_

  - [ ] 14.3 Implementar teste E2E — Interação com Radar de Alertas
    - Testar: visualizar radar ativo → clicar em item → abrir RadarSideDrawer → verificar diagnóstico e alavancas
    - Testar: adicionar item ao Plano de Ação → verificar status `in_progress` e criação de `action_item`
    - Testar: dispensar item → verificar status `dismissed` → verificar que item aparece no histórico
    - _Requirements: 12.1, 12.5, 12.6_

  - [ ] 14.4 Implementar teste E2E — Geração de relatório com upload de CSV
    - Testar: navegar para Relatórios → upload de arquivo CSV válido (≤ 10MB) → verificar preview de 5 linhas
    - Testar: selecionar template → confirmar geração → verificar relatório salvo na pasta
    - Testar: upload de arquivo inválido (tipo errado ou > 10MB) → verificar mensagem de erro
    - _Requirements: 15.1, 15.2, 15.3, 22.5_

  - [ ] 14.5 Implementar teste E2E — Troca de idioma
    - Testar: PT-BR → EN-US → ES-ES → PT-BR verificando que URL localizada muda corretamente
    - Testar: troca de idioma preserva contexto de navegação (mesma rota, idioma diferente)
    - Testar: atributo `lang` do elemento HTML raiz é atualizado ao mudar idioma
    - _Requirements: 16.2, 16.3, 16.4, 16.6_

- [ ] 15. Validar conformidade com requisitos de segurança
  - [ ] 15.1 Escrever testes de validação de headers de segurança
    - Verificar presença de `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection`, `Strict-Transport-Security` e `Content-Security-Policy` em todas as respostas da API
    - _Requirements: 17.4_

  - [ ] 15.2 Escrever testes de validação do AI Proxy (`api/gemini.ts`)
    - Verificar que a chave `GEMINI_API_KEY` nunca é exposta no corpo da resposta ou headers ao cliente
    - Verificar que requisições de origens não autorizadas são rejeitadas com CORS error
    - Verificar que rate limiting de 20 req/min por IP é aplicado corretamente
    - _Requirements: 17.8, 17.5_

  - [ ] 15.3 Escrever testes de validação de RBAC
    - Testar que `viewer` não consegue criar, editar ou excluir recursos (HTTP 403)
    - Testar que `analyst` não consegue gerenciar usuários (HTTP 403)
    - Testar que permissões são verificadas em cada requisição à API (não apenas no carregamento da UI)
    - _Requirements: 3.2, 3.3, 3.7_

  - [ ]\* 15.4 Escrever testes de validação de RLS no Supabase
    - Verificar que políticas RLS estão ativas em todas as tabelas com `organization_id`
    - Verificar que query no contexto de uma organização não retorna dados de outra
    - _Requirements: 2.6_

- [ ] 16. Configurar e executar validação de performance (Lighthouse CI)
  - Configurar `.lighthouserc.json` com thresholds: performance ≥ 90, accessibility ≥ 90, best-practices ≥ 90
  - Configurar verificação de bundle size máximo de 600KB gzipped no pipeline de CI
  - Adicionar step de Lighthouse CI no workflow GitHub Actions para cada PR
  - _Requirements: 19.6, 19.8, 26.1_

  - [ ]\* 16.1 Escrever teste de verificação de bundle size
    - Criar script que verifica o tamanho do bundle gzipped após `vite build`
    - Falhar o build se bundle inicial ultrapassar 600KB gzipped
    - _Requirements: 19.8_

  - [ ]\* 16.2 Escrever testes de verificação de staleTime do TanStack Query
    - Verificar que `useCurrentOrganization` usa `staleTime: 10min`
    - Verificar que `useKPIs` usa `staleTime: 5min`
    - Verificar que `useRadarItems` usa `staleTime: 2min`
    - _Requirements: 19.10_

- [ ] 17. Validar conformidade com requisitos de i18n
  - [ ] 17.1 Criar script de validação de cobertura de strings i18n
    - Implementar script que compara chaves entre `pt-BR.json`, `en-US.json` e `es-ES.json`
    - Reportar chaves ausentes em qualquer idioma
    - Reportar chaves com valor vazio ou igual à chave (não traduzidas)
    - _Requirements: 16.1, 16.7_

  - [ ] 17.2 Escrever testes de formatação localizada
    - Verificar que valores monetários em PT-BR são formatados como `R$ 1.234,56`
    - Verificar que datas e números seguem formatação do idioma ativo
    - _Requirements: 16.10, 16.11_

  - [ ]\* 17.3 Escrever testes de tags hreflang e atributo lang
    - Verificar que cada página inclui tags `hreflang` para PT-BR, EN-US e ES-ES
    - Verificar que o atributo `lang` do elemento HTML raiz é atualizado ao mudar idioma
    - _Requirements: 16.5, 16.6_

- [ ] 18. Implementar e validar Modo Demo
  - Verificar que `AuthContext` detecta ausência de `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` e ativa Demo Mode
  - Verificar que banner informativo é exibido em todas as telas autenticadas em Demo Mode
  - Verificar que avisos de console relacionados a variáveis de ambiente opcionais são silenciados em Demo Mode
  - _Requirements: 20.1, 20.3, 20.7_

  - [ ]\* 18.1 Escrever testes unitários para Modo Demo
    - Testar que `isDemoMode: true` é retornado quando variáveis de ambiente não estão configuradas
    - Testar que organização fictícia `{ id: "demo-org-id", name: "Empresa Demo" }` é retornada sem chamadas ao banco
    - Testar que `user.id = "demo-user-id"` é retornado em Demo Mode
    - _Requirements: 20.1, 20.4, 20.5_

- [ ] 19. Checkpoint — Verificar testes E2E e validações de segurança/performance/i18n
  - Executar `playwright test` e confirmar que todos os 5 fluxos E2E passam
  - Executar Lighthouse CI e confirmar scores ≥ 90 em Performance, Acessibilidade e Melhores Práticas
  - Executar script de validação de i18n e confirmar cobertura de 100% das strings
  - Perguntar ao usuário se há ajustes antes de prosseguir.

- [ ] 20. Documentar ADRs e atualizar CHANGELOG
  - [ ] 20.1 Registrar ADRs no `docs/07-knowledge/DECISION_LOG.md`
    - Registrar ADR-001 (Supabase como BaaS) com justificativa e trade-offs
    - Registrar ADR-002 (AI Proxy via Vercel Edge Function) com justificativa e trade-offs
    - Registrar ADR-003 (TanStack Query para Server State) com justificativa e trade-offs
    - Registrar ADR-004 (Monorepo com Turborepo) com justificativa e trade-offs
    - Registrar ADR-005 (i18n First com i18next) com justificativa e trade-offs
    - Registrar ADR-006 (Demo Mode sem Credenciais) com justificativa e trade-offs
    - Registrar ADR-007 (RBAC com 4 Papéis) com justificativa e trade-offs
    - _Requirements: 30.5_

  - [ ] 20.2 Atualizar `CHANGELOG.md` com release da especificação
    - Adicionar entrada no formato Keep a Changelog com Semantic Versioning
    - Documentar: adição de requirements.md, design.md e tasks.md para `project-spec-documentation`
    - Documentar: 20 propriedades de corretude definidas e mapeadas para requisitos
    - _Requirements: 30.2_

  - [ ]\* 20.3 Atualizar `docs/07-knowledge/TECHNICAL_DEBT.md`
    - Registrar itens de dívida técnica identificados durante a engenharia reversa
    - Priorizar por impacto e esforço
    - _Requirements: 30.6_

  - [ ]\* 20.4 Atualizar `docs/07-knowledge/ROADMAP.md`
    - Atualizar planejamento de features por trimestre com base nos requisitos documentados
    - _Requirements: 30.7_

- [ ] 21. Checkpoint final — Conformidade completa com a especificação
  - Executar suite completa de testes: `vitest --run` + `playwright test`
  - Verificar que cobertura de testes unitários está acima de 80% para hooks e serviços críticos
  - Verificar que todos os 20 property tests passam com `numRuns: 100`
  - Verificar que CHANGELOG.md e DECISION_LOG.md foram atualizados
  - Perguntar ao usuário se há ajustes finais antes de considerar a especificação implementada.

---

## Notas

- Tarefas marcadas com `*` são opcionais e podem ser puladas para um MVP mais rápido
- Cada tarefa referencia os requisitos específicos para rastreabilidade
- Os property tests devem incluir o comentário de tag: `// Feature: project-spec-documentation, Property N: <texto>`
- Checkpoints garantem validação incremental antes de avançar para o próximo grupo de tarefas
- A ordem das tarefas garante que cada etapa constrói sobre a anterior (sem código órfão)

---

## Tarefas — Novos Domínios (Requisitos 31–34)

- [ ] 22. Configurar infraestrutura para Document Pipeline
  - Habilitar extensão `pgvector` no projeto Supabase
  - Criar migration para tabelas: `data_source_connections`, `processed_documents`, `document_extracted_chunks`
  - Adicionar colunas `source_document_id` e `source_chunk_id` à tabela `organization_kpi_values`
  - Configurar Supabase Storage bucket `documents` com políticas RLS por organização
  - Configurar variáveis de ambiente: `UNSTRUCTURED_API_KEY`, `GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`, `MICROSOFT_OAUTH_CLIENT_ID`, `MICROSOFT_OAUTH_CLIENT_SECRET`
  - _Requirements: 31.1, 31.6, 32.1, 32.2_

  - [ ] 22.1 Criar migration SQL para tabelas do Document Pipeline
    - `data_source_connections` com campos completos e RLS por `organization_id`
    - `processed_documents` com campos completos, RLS e índices de performance
    - `document_extracted_chunks` com campo `embedding vector(1536)` para pgvector
    - Índices HNSW para busca vetorial: `idx_chunks_embedding`
    - _Requirements: 32.1, 32.2_

  - [ ] 22.2 Criar Edge Function `api/process-document.ts`
    - Implementar `UnstructuredClient` com método `extractContent(filePath, fileType)`
    - Implementar `SemanticParser` com `buildExtractionPrompt(elements, kpiLibrary, blueprint)` e `mapToKPIs()`
    - Implementar `KPIMapper` com `validateMappings()`, `createKPIValues()` e `createChunks()` com embeddings
    - Implementar `ExtractionReporter` com `calculateConfidence()` e `buildReport()`
    - Atualizar status do documento via Supabase client em cada etapa do pipeline
    - _Requirements: 31.5, 31.6, 31.7, 31.8, 31.11_

  - [ ] 22.3 Implementar fila de processamento assíncrono
    - Configurar `pg_cron` ou trigger `pg_notify` para disparar processamento quando `processing_status = 'queued'`
    - Implementar retry automático com backoff exponencial para documentos com status `failed`
    - Garantir que no máximo 50 documentos sejam processados simultaneamente por organização
    - _Requirements: 31.4, 31.10, 31.15_

- [ ] 23. Implementar integração com Google Drive
  - Criar fluxo OAuth 2.0 para Google Drive (authorization code flow com PKCE)
  - Implementar `GoogleDriveClient` com métodos: `listFolders()`, `listFiles(folderId)`, `downloadFile(fileId)`, `watchChanges(folderId)`
  - Armazenar tokens OAuth criptografados com AES-256 na tabela `data_source_connections`
  - Implementar webhook handler para receber notificações de mudança de arquivos via Google Drive Push Notifications
  - Implementar sincronização periódica via pg_cron para pastas configuradas
  - _Requirements: 31.2, 31.12, 31.13, 32.9_

  - [ ]\* 23.1 Escrever testes unitários para GoogleDriveClient
    - Testar fluxo OAuth com mock do Google Identity Services
    - Testar `listFiles()` com mock da Google Drive API
    - Testar que tokens são armazenados criptografados (nunca em plaintext)
    - _Requirements: 31.2, 32.10_

- [ ] 24. Implementar integração com Microsoft OneDrive
  - Criar fluxo OAuth 2.0 via MSAL (Microsoft Authentication Library) para OneDrive
  - Implementar `OneDriveClient` com métodos: `listFolders()`, `listFiles(folderId)`, `downloadFile(itemId)`, `subscribeChanges(folderId)`
  - Armazenar tokens OAuth criptografados com AES-256 na tabela `data_source_connections`
  - Implementar webhook handler para receber notificações via Microsoft Graph subscriptions
  - _Requirements: 31.3, 31.12, 31.13, 32.9_

  - [ ]\* 24.1 Escrever testes unitários para OneDriveClient
    - Testar fluxo OAuth com mock do MSAL
    - Testar `listFiles()` com mock da Microsoft Graph API
    - Testar que tokens são armazenados criptografados
    - _Requirements: 31.3, 32.10_

- [ ] 25. Implementar tela de Gestão de Data Sources (`/app/data-sources`)
  - Criar componente `DataSourcesPage` com lista de conexões ativas e seus status
  - Criar componente `DataSourceCard` com: provider icon, display_name, status badge, last_sync_at, documentos processados e ações
  - Criar wizard `ConnectDataSourceWizard` com steps: seleção de provider → autenticação OAuth → seleção de pastas → configuração de sync
  - Criar hook `useDataSources` com TanStack Query (`staleTime: 5min`)
  - Implementar ações: "Sincronizar agora", "Pausar", "Revogar conexão"
  - _Requirements: 32.3_

  - [ ] 25.1 Implementar tela de histórico de documentos (`/app/data-sources/documents`)
    - Criar componente `DocumentsHistoryPage` com lista paginada e filtros (status, tipo, fonte, período)
    - Criar componente `DocumentCard` com: filename, status badge, extraction_confidence, kpis_extracted_count, ações
    - Criar componente `DocumentExtractionReport` com: campos extraídos, KPIs mapeados, campos não reconhecidos
    - Implementar ações: "Ver extração", "Reprocessar", "Excluir"
    - Implementar reprocessamento em lote de documentos com status `failed`
    - _Requirements: 32.4, 32.6, 32.12_

  - [ ] 25.2 Implementar status de processamento em tempo real
    - Criar hook `useDocumentStatus(documentId)` usando Supabase Realtime channel
    - Exibir progress indicator com etapas do pipeline: queued → extracting → parsing → mapping → completed
    - Exibir toast de conclusão com resumo da extração (X KPIs extraídos, Y% confiança)
    - _Requirements: 31.9_

- [ ] 26. Implementar correção manual de valores extraídos
  - Criar componente `KPIExtractionCorrector` para edição inline de valores extraídos incorretamente
  - Ao salvar correção, atualizar `organization_kpi_values` com `is_verified = true` e `verified_by = auth.uid()`
  - Exibir badge "Verificado manualmente" em KPIs corrigidos
  - _Requirements: 32.7_

- [ ] 27. Checkpoint — Verificar Document Pipeline completo
  - Testar upload de PDF real e verificar extração de KPIs no banco
  - Testar conexão com Google Drive (sandbox) e sincronização de arquivo
  - Verificar que status é atualizado em tempo real na interface
  - Verificar que `source_document_id` é preenchido nos registros de KPI extraídos
  - Perguntar ao usuário se há ajustes antes de prosseguir.

- [ ] 28. Configurar infraestrutura para Knowledge Base
  - Criar migration para tabelas: `knowledge_snapshots`, `kpi_history`, `challenge_history`, `radar_item_history`, `knowledge_embeddings`
  - Criar índice HNSW para `knowledge_embeddings.embedding`
  - Criar índice UNIQUE em `knowledge_snapshots(organization_id, period_key)`
  - Implementar trigger de imutabilidade `prevent_snapshot_mutation()` na tabela `knowledge_snapshots`
  - Configurar `pg_cron` para disparar geração de snapshot no último dia de cada mês
  - _Requirements: 33.1, 33.2, 33.3, 33.12_

  - [ ] 28.1 Criar Edge Function `api/generate-snapshot.ts`
    - Implementar `PeriodDataCollector` com coleta de KPIs, desafios, radar items, objetivos e planos de ação
    - Implementar `NarrativeGenerator` com `buildSnapshotPrompt()` e `generateNarrative()` via Gemini
    - Implementar `SnapshotPersister` com `insertSnapshot()` (append-only) e `insertEmbeddings()` (pgvector)
    - Implementar `HistoryRecorder` para `challenge_history` e `radar_item_history`
    - _Requirements: 33.1, 33.2, 33.6, 33.13_

  - [ ]\* 28.2 Escrever property test — Property 23: Imutabilidade dos Knowledge Snapshots
    - **Property 23: Imutabilidade dos Knowledge Snapshots**
    - Tentar UPDATE e DELETE em um snapshot existente e verificar que ambos são rejeitados com erro
    - Usar `fc.record(...)` para gerar snapshots válidos e verificar que apenas INSERT é permitido
    - **Validates: Requirements 33.3, 33.12**

  - [ ]\* 28.3 Escrever property test — Property 24: Unicidade de período por organização
    - **Property 24: Unicidade de período por organização nos snapshots**
    - Usar `fc.string()` para `period_key` e mesmo `organization_id`
    - Verificar que inserir dois snapshots com mesmo `period_key` para mesma organização falha com erro de unicidade
    - **Validates: Requirements 33.12**

- [ ] 29. Implementar linha do tempo estratégica (`/app/knowledge`)
  - Criar componente `KnowledgeTimelinePage` com lista de snapshots em ordem cronológica
  - Criar componente `SnapshotCard` com: period_key, overall_health badge, ai_narrative preview, KPIs resumidos
  - Criar componente `SnapshotDetailView` com: ai_narrative completo, KPI summary cards, desafios detectados, radar items, planos de ação
  - Criar hook `useKnowledgeSnapshots` com TanStack Query (`staleTime: 10min`)
  - _Requirements: 33.4, 33.14_

  - [ ] 29.1 Implementar análise comparativa entre períodos
    - Criar componente `PeriodComparisonView` com seleção de dois períodos via date picker
    - Ao selecionar dois períodos, chamar Gemini via AI Proxy com os dois snapshots como contexto
    - Exibir análise comparativa com: KPIs melhorados (verde), KPIs piorados (vermelho), desafios resolvidos, novos desafios
    - _Requirements: 33.5_

  - [ ] 29.2 Implementar painel de evolução histórica de KPIs
    - Criar componente `KPIEvolutionChart` usando Recharts (linha) com todos os períodos da Knowledge Base
    - Permitir seleção de múltiplos KPIs para comparação no mesmo gráfico
    - Exibir marcadores de eventos (novos documentos importados, mudanças no Blueprint)
    - _Requirements: 33.14_

- [ ] 30. Implementar consulta em linguagem natural à Knowledge Base (`/app/knowledge/query`)
  - Criar componente `KnowledgeQueryPage` com input de texto livre e histórico de consultas
  - Criar hook `useKnowledgeQuery` que envia query ao AI Proxy com contexto de snapshots e Blueprint
  - Implementar busca vetorial no AI Proxy: gerar embedding da query → buscar top-10 chunks por similaridade coseno
  - Exibir resposta narrativa com fontes citadas (period_key, kpi_code, valor)
  - _Requirements: 33.7, 33.8, 33.9, 33.10_

  - [ ]\* 30.1 Escrever testes unitários para busca vetorial
    - Testar que a busca retorna chunks semanticamente relevantes para queries de teste
    - Testar que chunks de outras organizações nunca aparecem nos resultados (RLS)
    - _Requirements: 33.10_

- [ ] 31. Implementar exportação da Knowledge Base
  - Criar endpoint `GET /api/knowledge/export` que retorna todos os snapshots em JSON estruturado
  - Implementar download do arquivo JSON via interface (`/app/knowledge` → botão "Exportar")
  - Garantir que a exportação respeita RLS (apenas dados da organização autenticada)
  - _Requirements: 33.11_

- [ ] 32. Checkpoint — Verificar Knowledge Base completa
  - Disparar geração manual de snapshot e verificar dados no banco
  - Verificar que trigger de imutabilidade rejeita UPDATE/DELETE
  - Testar consulta em linguagem natural com pergunta sobre evolução de KPIs
  - Verificar que análise comparativa entre dois períodos é gerada corretamente
  - Perguntar ao usuário se há ajustes antes de prosseguir.

- [ ] 33. Configurar infraestrutura para Company Blueprint
  - Criar migration para tabelas: `company_blueprints` e `blueprint_versions`
  - Criar índice UNIQUE em `company_blueprints(organization_id)`
  - Implementar trigger para calcular `completeness_score` automaticamente no INSERT/UPDATE
  - Implementar trigger para inserir em `blueprint_versions` a cada UPDATE com diff das mudanças
  - _Requirements: 34.3, 34.7, 34.12_

  - [ ]\* 33.1 Escrever property test — Property 25: Unicidade 1:1 do Company Blueprint
    - **Property 25: Unicidade 1:1 do Company Blueprint**
    - Usar `fc.uuid()` para `organization_id`
    - Verificar que inserir dois blueprints para a mesma organização falha com erro de unicidade
    - **Validates: Requirements 34.12**

  - [ ]\* 33.2 Escrever property test — Property 26: Determinismo do completeness score
    - **Property 26: Completeness score é função determinística dos campos preenchidos**
    - Usar `fc.record(...)` com campos opcionais do Blueprint (alguns preenchidos, outros nulos)
    - Calcular score duas vezes com os mesmos dados e verificar igualdade
    - Verificar que score está sempre em [0.0, 100.0]
    - **Validates: Requirements 34.3**

- [ ] 34. Implementar módulo Company Blueprint (`/app/blueprint`)
  - Criar componente `BlueprintPage` com visualização em "cartão de identidade da empresa"
  - Criar componente `BlueprintEditWizard` com 6 steps: Identidade → Mercado → Operação → Produtos → Objetivos → Financeiro
  - Criar hook `useCompanyBlueprint` com TanStack Query (`staleTime: 15min`)
  - Criar hook `useUpdateBlueprint` com invalidação de cache após mutação
  - Implementar `BlueprintCompletenessIndicator` — barra de progresso com sugestões de campos faltantes
  - _Requirements: 34.1, 34.3, 34.9_

  - [ ] 34.1 Implementar assistente de preenchimento via IA
    - Criar componente `BlueprintAIAssistant` com textarea para descrição livre da empresa
    - Ao submeter, chamar AI Proxy com o texto e o schema do Blueprint
    - Pré-preencher formulário com campos extraídos pelo Gemini para revisão do usuário
    - _Requirements: 34.10_

  - [ ] 34.2 Implementar histórico de versões do Blueprint (`/app/blueprint/history`)
    - Criar componente `BlueprintHistoryPage` com lista de versões em ordem cronológica
    - Criar componente `BlueprintVersionDiff` que exibe diff visual entre duas versões
    - _Requirements: 34.7_

  - [ ] 34.3 Integrar Blueprint como contexto permanente no AI Proxy
    - Atualizar `api/gemini.ts` para aceitar `blueprintContext` no payload da requisição
    - Injetar campos relevantes do Blueprint no system prompt de cada chamada ao Gemini
    - Implementar seleção inteligente de campos do Blueprint por tipo de análise (financeira, operacional, estratégica)
    - _Requirements: 34.4_

  - [ ] 34.4 Integrar Blueprint com Motor Estratégico
    - Atualizar `DetectChallengesUseCase` para cruzar desafios detectados com `known_challenges` do Blueprint
    - Atualizar seleção de benchmarks para filtrar automaticamente por `industry_sector`, `company_size` e `business_model` do Blueprint
    - Disparar reanálise automática quando campos estratégicos do Blueprint são atualizados
    - _Requirements: 34.5, 34.6, 34.8_

  - [ ] 34.5 Implementar aviso de Blueprint incompleto nas telas de análise
    - Criar componente `BlueprintIncompleteWarning` exibido quando `completeness_score < 60%`
    - Exibir em: Dashboard Principal, Painel de Decisão, Radar e Knowledge Base
    - Link direto para `/app/blueprint/edit` com destaque nos campos faltantes mais impactantes
    - _Requirements: 34.13_

- [ ] 35. Implementar property tests dos novos domínios
  - [ ] 35.1 Escrever property test — Property 21: Rastreabilidade doc→KPI
    - **Property 21: Rastreabilidade de documentos para KPIs**
    - Para qualquer KPI com `data_source = 'document_import'`, verificar que `source_document_id` referencia documento com status `completed`
    - **Validates: Requirements 31.14, 32.5**

  - [ ] 35.2 Escrever property test — Property 22: Idempotência do pipeline
    - **Property 22: Idempotência do pipeline de processamento**
    - Processar o mesmo documento duas vezes e verificar que os KPIs extraídos são equivalentes (sem duplicatas)
    - **Validates: Requirements 31.10, 31.13**

  - [ ] 35.3 Escrever property test — Property 27: Credenciais OAuth nunca expostas
    - **Property 27: Credenciais OAuth nunca expostas em respostas de API**
    - Para qualquer resposta de `GET /api/data-sources`, verificar que `credentials_encrypted` está ausente ou redacted
    - **Validates: Requirements 32.10**

  - [ ] 35.4 Escrever property test — Property 28: Extraction confidence em [0, 100]
    - **Property 28: Extraction confidence sempre em [0.0, 100.0]**
    - Usar `fc.array(fc.record({ confidence: fc.float() }))` para simular chunks extraídos
    - Verificar que `extraction_confidence` calculado está sempre em [0.0, 100.0]
    - **Validates: Requirements 31.11, 32.8**

- [ ] 36. Testes E2E para os novos domínios
  - [ ] 36.1 Implementar teste E2E — Upload e processamento de documento
    - Testar: navegar para Data Sources → upload de PDF → verificar status em tempo real → verificar KPIs extraídos no dashboard
    - Testar: upload de arquivo inválido (tipo não suportado) → verificar mensagem de erro
    - _Requirements: 31.1, 31.9, 31.11_

  - [ ] 36.2 Implementar teste E2E — Knowledge Base e linha do tempo
    - Testar: navegar para Knowledge → visualizar snapshots → selecionar dois períodos → verificar análise comparativa
    - Testar: consulta em linguagem natural → verificar resposta com fontes citadas
    - _Requirements: 33.4, 33.5, 33.8_

  - [ ] 36.3 Implementar teste E2E — Company Blueprint
    - Testar: navegar para Blueprint → preencher wizard completo → verificar completeness_score
    - Testar: usar assistente de IA → descrever empresa em texto livre → verificar pré-preenchimento dos campos
    - Testar: verificar que aviso de Blueprint incompleto aparece no Dashboard quando score < 60%
    - _Requirements: 34.1, 34.3, 34.10, 34.13_

- [ ] 37. Checkpoint final — Verificar todos os novos domínios integrados
  - Executar suite completa de testes: `vitest --run` + `playwright test`
  - Verificar que todos os 28 property tests (P1–P28) passam com `numRuns: 100`
  - Verificar que Blueprint é injetado corretamente nos prompts do Gemini
  - Verificar que Knowledge Snapshot é gerado com ai_narrative ao final do período
  - Verificar que rastreabilidade doc→KPI funciona end-to-end (upload → extração → dashboard)
  - Perguntar ao usuário se há ajustes finais.

---

## Tarefas — Consolidação e Evolução do Banco de Dados

- [ ] 38. Consolidar tabelas de KPI — Migration de Limpeza
  - Criar migration que verifica existência de tabelas legadas (`kpi_master_library`, `kpi_library`, `metrics_library`, `kpi_master_unified`)
  - Migrar dados únicos de cada tabela legada para `library_kpis` com `ON CONFLICT DO NOTHING`
  - Criar views de compatibilidade temporárias para código que ainda usa nomes antigos: `CREATE VIEW kpi_master_library AS SELECT * FROM library_kpis`
  - Remover tabelas legadas após validação: `kpi_master_library`, `kpi_library`, `metrics_library`, `kpi_master_unified`
  - Migrar `organization_kpis` para `user_metrics` preservando dados históricos
  - Remover tabelas legadas: `metrics`, `metric_values`, `organization_kpis`
  - _Requirements: 4.1, 5.1_

  - [ ] 38.1 Corrigir `risk_registry.risk_score` para GENERATED ALWAYS AS
    - `ALTER TABLE risk_registry DROP COLUMN risk_score`
    - `ALTER TABLE risk_registry ADD COLUMN risk_score INTEGER GENERATED ALWAYS AS (likelihood * impact) STORED`
    - Verificar que invariante `risk_score = likelihood * impact` é mantida em updates
    - Atualizar todas as queries que fazem SET risk_score manualmente
    - _Requirements: 10.2, 10.9_

  - [ ] 38.2 Criar tabelas ausentes no banco
    - Criar `report_folders(id, organization_id FK, name, icon, description, created_at)` se não existir
    - Criar `consent_records(id, user_id FK, purpose, decision, timestamp, ip_address, user_agent)` se não existir
    - Adicionar RLS em ambas as tabelas com política `org_isolation`
    - _Requirements: 15.7, 18.7_

  - [ ] 38.3 Migrar `organization_blueprint` para campos estruturados
    - Adicionar colunas estruturadas à tabela `organization_blueprint`: `legal_name`, `trade_name`, `cnpj_encrypted`, `founding_year`, `company_stage`, `business_model`, `industry_sector`, `employee_count_range`, `annual_revenue_range`
    - Migrar dados do campo `context_data` JSONB para as novas colunas onde possível
    - Manter `context_data` como campo de overflow para dados não estruturados
    - _Requirements: 34.2_

  - [ ] 38.4 Padronizar domínios de negócio
    - Definir conjunto canônico: `commercial`, `finance`, `marketing`, `operations`, `people`, `strategy`
    - Criar migration para atualizar todos os registros com `domain = 'sales'` para `domain = 'commercial'`
    - Atualizar CHECK constraints em `library_kpis`, `library_challenges`, `radar_items`, `library_diagnoses`
    - _Requirements: 4.1_

- [ ] 39. Implementar hierarquia organizacional completa
  - Verificar que `business_units`, `departments`, `teams`, `memberships`, `roles_permissions` existem e têm RLS correto
  - Criar função PostgreSQL `get_user_scope(user_id UUID)` que retorna business_units, departments e teams acessíveis
  - Criar hook `useOrganizationHierarchy` com TanStack Query (`staleTime: 5min`)
  - Criar componentes: `BusinessUnitsPage`, `DepartmentsPage`, `TeamsPage`, `MembershipsPage`
  - Integrar hierarquia com sistema de RBAC (7 papéis + escopo granular via `memberships`)
  - Adicionar rotas: `/:lang/app/settings/hierarchy`, `/:lang/app/settings/teams`
  - _Requirements: 35.1, 35.2, 35.3, 35.4, 35.5, 35.7, 35.8_

- [ ] 40. Implementar templates por setor industrial
  - Popular `industry_templates` com templates para: Varejo, Serviços, SaaS/Tech, Indústria, Consultoria, Saúde, Educação, Alimentação, Construção, Agronegócio
  - Cada template com: `default_kpis[]`, `default_challenges[]`, `benchmark_excellent`, `benchmark_good`, `benchmark_average`
  - Criar fluxo de onboarding que aplica template automaticamente baseado no `industry_sector` informado
  - Criar hook `useIndustryTemplate` com TanStack Query
  - Implementar tela de configuração de setor em `/:lang/app/settings/industry`
  - _Requirements: 36.1, 36.2, 36.3, 36.4, 36.5_

- [ ] 41. Implementar motor de relevância de KPIs
  - Criar função PostgreSQL `get_relevant_kpis(organization_id UUID, available_data_types TEXT[])` que retorna:
    - KPIs com `is_core = true` (sempre ativos)
    - KPIs cujos dados estão disponíveis em `user_metrics` para a organização
    - KPIs do `industry_template` da organização
  - Criar hook `useRelevantKPIs` que usa o motor de relevância via TanStack Query (`staleTime: 5min`)
  - Garantir que dashboard exibe apenas KPIs relevantes para a empresa
  - Criar testes unitários para `get_relevant_kpis` com diferentes perfis de empresa
  - _Requirements: 4.5, 4.6, 4.7_

- [ ] 42. Expandir biblioteca de KPIs para 100+ indicadores
  - Popular `library_kpis` com todos os KPIs documentados em `LIBRARY_STRATEGY.md`
  - Classificar cada KPI com `tier` (`core`/`domain`/`segment`/`advanced`/`custom`)
  - Preencher campos: `benchmark_excellent`, `benchmark_good`, `benchmark_average`, `benchmark_warning`, `benchmark_critical`
  - Marcar KPIs universais com `is_core = true` (18 KPIs core conforme LIBRARY_STRATEGY.md)
  - Garantir cobertura dos 6 domínios: `finance`, `commercial`, `marketing`, `operations`, `people`, `strategy`
  - _Requirements: 4.1, 4.2, 4.3, 4.7_

  - [ ] 42.1 Popular `library_diagnoses` com diagnósticos estruturados
    - Criar diagnósticos para cada combinação de desafio + domínio
    - Cada diagnóstico com: `technical_term`, `cause`, `effect`, `why`, `challenge_code`, `domain`, `severity_default`, `symptom_codes[]`, `suggested_lever_codes[]`
    - Garantir que todos os `radar_items` existentes tenham `diagnosis_code` válido
    - _Requirements: 12.9_

  - [ ] 42.2 Popular `library_impacts` com impactos quantificados
    - Criar impactos para cada alavanca com: `target_kpi_code`, `impact_type`, `impact_value`, `impact_direction`, `category`
    - Garantir que todos os `radar_items` existentes tenham `impact_code` válido
    - _Requirements: 12.10_

  - [ ] 42.3 Popular `industry_templates` para 10+ setores
    - Varejo, Serviços, SaaS/Tech, Indústria, Consultoria, Saúde, Educação, Alimentação, Construção, Agronegócio
    - Cada template com: `default_kpis[]`, `default_challenges[]`, benchmarks setoriais
    - _Requirements: 36.1_

- [ ] 43. Implementar funcionalidades existentes no banco mas não documentadas
  - [ ] 43.1 SWOT e Análise de Forças/Fraquezas
    - Criar hook `useSwotAnalysis` com TanStack Query (`staleTime: 5min`)
    - Criar hook `useForcesWeaknesses` com TanStack Query
    - Criar componente `SwotPage` com quadrante visual (Forças/Fraquezas/Oportunidades/Ameaças)
    - Criar componente `ForcesWeaknessesPage` com análise estruturada
    - Integrar geração assistida por IA via AI Proxy usando KPIs e Blueprint como contexto
    - Adicionar rotas: `/:lang/app/strategy/swot`, `/:lang/app/strategy/forces`
    - _Requirements: 37.1, 37.2, 37.3, 37.5_

  - [ ] 43.2 Previsões de Curto Prazo
    - Criar hook `useShortTermForecasts` com TanStack Query (`staleTime: 10min`)
    - Criar componente `ForecastPage` com gráficos de linha para horizontes 7/30/60/90 dias
    - Implementar métodos de previsão: média móvel, tendência linear, sazonalidade
    - Integrar método IA via AI Proxy com dados históricos de `user_metrics` como contexto
    - Adicionar rota: `/:lang/app/forecasts`
    - _Requirements: 38.1, 38.2, 38.4_

  - [ ] 43.3 Gestão de Fornecedores
    - Criar hooks `useSupplierScorecards` e `useSupplierRiskAlerts` com TanStack Query
    - Criar componentes `SuppliersPage`, `SupplierScorecard` e `SupplierRiskAlerts`
    - Implementar cálculo automático de `score_geral` como média ponderada
    - Implementar geração automática de alertas quando `score_geral < 5.0`
    - Adicionar rota: `/:lang/app/suppliers`
    - _Requirements: 39.1, 39.2, 39.3, 39.4, 39.5_

  - [ ] 43.4 Saúde e Ciclo de Vida de Clientes
    - Criar hooks `useClientHealthScores` e `useClientLifecycle` com TanStack Query
    - Criar componentes `ClientHealthPage` e `ClientLifecycleBoard`
    - Implementar cálculo de `rfm_score` e classificação de `health_status`
    - Implementar geração de alerta no Radar quando `churn_risk_score > 0.7`
    - Adicionar rota: `/:lang/app/clients`
    - _Requirements: 40.1, 40.2, 40.3, 40.6, 40.7_

  - [ ] 43.5 Gestão de Custos de RH
    - Criar hooks `useEmployeeCosts` e `usePayrollProjections` com TanStack Query
    - Criar componentes `EmployeeCostsPage` e `PayrollProjectionsPage`
    - Implementar cálculo automático de `custo_total_mensal` (salário + INSS + FGTS + benefícios)
    - Implementar cálculo de `total_com_provisoes` (13º + férias + FGTS sobre provisões)
    - Integrar com KPI `LABOR_COST_PCT` para cálculo automático
    - Adicionar rota: `/:lang/app/hr/costs`
    - _Requirements: 41.1, 41.2, 41.3, 41.4, 41.5, 41.6_
