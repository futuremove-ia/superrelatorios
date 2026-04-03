# 🎯 SuperRelatórios - Masterplan v2.0

## Roadmap Integrado: Técnica + Negócio + Execução

**Data:** 03/04/2026  
**Versão:** 2.1  
**Status:** ATUALIZADO COM SKILLS E INFRAESTRUTURA  
**Mantenedor:** Product Team

---

## 📊 Sumário Executivo

### Contexto

Este masterplan consolida os aprendizados das auditorias técnica e de negócio, priorizando ações de alto impacto para validação de Product-Market Fit (PMF).

### Premises

1. **Recursos Limitados:** Equipe pequena, foco em MVP funcional
2. **Validação Primeiro:** Validar com usuários reais antes de escalar
3. **Entrega Incremental:** Releases frequentes com valor mensurável
4. **Escopo Focado:** 1 persona, 1 problema, 1 domínio

---

## 📈 Status de Implementação

### ✅ Concluído (Prontos para Uso)

| Componente              | Status    | Observações                                                     |
| ----------------------- | --------- | --------------------------------------------------------------- |
| Design System           | ✅ Pronto | MetricCard, BrandName, animações stagger, tipografia premium    |
| Infraestrutura de Dados | ✅ Pronto | Tabelas library\_\*, JOINs em hooks, user_metrics schema existe |
| DetectionService        | ✅ Pronto | Carrega de library_risks/opportunities                          |
| Workflow de Actions     | ✅ Pronto | actionItemService com CRUD completo                             |
| UI/UX Base              | ✅ Pronto | shadcn/ui, Tailwind, design system operacional                  |
| i18n                    | ✅ Pronto | PT-BR, EN-US, ES-ES                                             |
| Pipeline IA             | ✅ Pronto | Correção de throw Error, processamento de documentos            |
| Code Splitting          | ✅ Pronto | vite.config.ts otimizado                                        |
| Documentação            | ✅ Pronto | AGENTS.md, CHANGELOG.md, Masterplan v2.x                        |

### 🚧 Em Progresso

| Componente         | Status          | Notas                                          |
| ------------------ | --------------- | ---------------------------------------------- |
| Upload CSV/Excel   | ✅ Implementado | FinancialDataParserService + Pipeline          |
| Sistema de Alertas | ✅ Implementado | Threshold + Notification + Management services |
| Onboarding Flow    | 🔄 Pendente     | Ainda não implementado                         |

### ✅ Concluído (Prontos para Uso)

| Componente         | Status    | Observações                                  |
| ------------------ | --------- | -------------------------------------------- |
| Sistema de Alertas | ✅ Pronto | 12 KPIs, 3 níveis, 5 canais de notificação   |
| Upload de Dados    | ✅ Pronto | CSV/Excel/PDF → Unstructured → Parser → KPIs |

### 📋 Próximos Passos ( backlog)

1. **Fase 0 - Fundação**: Setup + Upload de dados + Parser
2. **Fase 1 - MVP**: Onboarding + Alertas + Dashboard real
3. **Fase 2 - PMF**: Expansão de dados + usuários
4. **Fase 3 - Escala**: API + Performance + Docs

---

## 🔍 Status Atual (Pós-Auditoria)

### ✅ O que já funciona

| Módulo                  | Status        | Evidência                               |
| ----------------------- | ------------- | --------------------------------------- |
| Design System           | ✅ Produzindo | MetricCard, BrandName, animações        |
| Infraestrutura de Dados | ✅ Produzindo | Tabelas library\_\*, JOINs em hooks     |
| DetectionService        | ✅ Produzindo | Carrega de library_risks/opportunities  |
| Workflow de Actions     | ✅ Produzindo | actionItemService com CRUD completo     |
| UI/UX                   | ✅ Produzindo | shadcn/ui, Tailwind, tipografia premium |
| i18n                    | ✅ Produzindo | PT-BR, EN-US, ES-ES                     |

### ⚠️ O que precisa resolver

| Problema                               | Prioridade | Impacto |
| -------------------------------------- | ---------- | ------- |
| Dados são seedados (não do usuário)    | P1         | Alto    |
| Sem sistema de alertas/notificações    | P1         | Alto    |
| Sem onboarding flow                    | P1         | Alto    |
| Radar.tsx com click handlers quebrados | P2         | Médio   |
| Mock data em produção                  | P2         | Médio   |
| Sem análise preditiva/ML               | P3         | Médio   |

---

## 🧠 Infraestrutura de Skills do Agente

### Skills Instaladas

| Skill                      | Propósito                  | Uso                             |
| -------------------------- | -------------------------- | ------------------------------- |
| `@roadmap-planning`        | Strategic roadmap planning | Criar/revisar roadmaps          |
| `@frontend-design`         | UI/UX guidelines           | Design de componentes           |
| `@systematic-debugging`    | Debug profissional         | Resolver bugs                   |
| `@clean-ddd-hexagonal`     | Clean Architecture, DDD    | Decisões arquiteturais          |
| `@documentation-templates` | Templates de documentação  | Criar docs                      |
| `@search-first`            | Research-before-coding     | Investigar antes de implementar |

### Quando Usar Skills

- **Com skill:** Decisões arquiteturais, debugging complexo, planejamentos estratégicos
- **Sem skill:** Tasks simples, código direto que você já domina

### Locação

- `.agents/skills/` - Skills instaladas
- `.agents/skills/docs/users/` - Documentação de referência
- `AGENTS.md` - Guia completo de uso

### 🔴 Fora do Escopo (MVP)

- Integração bancária (Pluggy/Belvo)
- Integração CRM (Pipedrive/HubSpot)
- API pública
- White-label
- Mobile app

---

## 🎯 Framework de Priorização: RICE + MoSCoW

### Score RICE por Feature

| Feature                     | Reach | Impact | Confidence | Effort | RICE Score | Prioridade |
| --------------------------- | ----- | ------ | ---------- | ------ | ---------- | ---------- |
| Onboarding Flow             | 100%  | 3      | 80%        | 2      | 120        | P0         |
| Upload de Dados (CSV/Excel) | 100%  | 3      | 90%        | 3      | 81         | P0         |
| Sistema de Alertas          | 80%   | 3      | 70%        | 3      | 50.4       | P0         |
| Conexão Radar → Actions     | 70%   | 3      | 80%        | 2      | 67.2       | P1         |
| Dashboard Real (não mock)   | 100%  | 2      | 60%        | 2      | 48         | P1         |
| Análise Preditiva           | 30%   | 3      | 40%        | 5      | 5.76       | P2         |

### Categorização MoSCoW

**Must Have (MVP):**

- Onboarding Flow
- Upload de Dados
- Sistema de Alertas
- Dashboard com dados reais

**Should Have (Pre-PMF):**

- Conexão Radar → Actions
- Notificações email/push
- Benchmark por setor

**Could Have (Post-PMF):**

- Análise preditiva/ML
- Integrações bancárias
- API pública

**Won't Have (Este ciclo):**

- Mobile app
- White-label
- Multi-tenant avançado

---

## 📅 Roadmap de 12 Semanas

### Fase 0: Fundação (Semanas 1-2)

**Objetivo:** Preparar infraestrutura para validação

| Semana | Task                           | Entrega              | Responsável |
| ------ | ------------------------------ | -------------------- | ----------- |
| 1      | Setup ambiente desenvolvimento | Ambiente pronto      | Dev         |
| 1      | Definir schema de user_metrics | Schema definido      | Tech Lead   |
| 1      | Implementar upload CSV/Excel   | Componente funcional | Dev         |
| 1      | Implementar parser de dados    | Parser funcionando   | Dev         |
| 2      | Criar seed data realístico     | Dados de demo        | Product     |
| 2      | Configurar Supabase real       | DB configurado       | Dev         |
| 2      | Setup CI/CD para testes        | Pipeline funcionando | Dev         |

**Definition of Done:**

- ✅ Upload de CSV funciona com dados de exemplo
- ✅ Parser extrai métricas corretamente
- ✅ Ambiente preparado para teste com usuários

**Métricas de Sucesso:**

- Tempo até primeiro upload: < 30 segundos
- Taxa de parsing bem-sucedido: > 90%

---

### Fase 1: MVP Funcional (Semanas 3-6)

**Objetivo:** Entregar valor real para 1 persona (CFO de PME)

#### Semana 3: Onboarding

| Task                            | Entrega                     |
| ------------------------------- | --------------------------- |
| Criar wizard de onboarding      | Fluxo de 3 passos funcional |
| Coletar dados básica da empresa | Formulário funcionando      |
| Configurar primeiro dashboard   | Dashboard customizável      |

**Definition of Done:**

- ✅ Usuário consegue se cadastrar e configurar em < 5 minutos
- ✅ Primeiro dashboard visível automaticamente

#### Semana 4-5: Upload e Processamento

| Task                             | Entrega                          |
| -------------------------------- | -------------------------------- |
| Upload de extrato bancário (CSV) | Upload funciona                  |
| Parser de extrato bancário       | Transações categorizadas         |
| Parser de DRE                    | Receitas/despesas identificadas  |
| Cálculo de métricas financeiras  | Runway, Burn, Receita calculados |

**Definition of Done:**

- ✅ Upload de extrato funciona
- ✅ Métricas financeiras são calculadas automaticamente

#### Semana 6: Alertas e Ações

| Task                             | Entrega                   |
| -------------------------------- | ------------------------- |
| Sistema de alertas por threshold | Alertas visuais funcionam |
| Recomendação de ações            | Sugestões geradas         |
| Criar action a partir de alerta  | Workflow completo         |

**Definition of Done:**

- ✅ Usuário recebe alerta quando métricas estão críticas
- ✅ Usuário pode criar ação a partir de alerta

**Métricas de Sucesso da Fase 1:**

- 10 empresas testando (beta)
- 5 empresas vendo valor real
- 3 empresas dispostas a pagar

---

### Fase 2: Product-Market Fit (Semanas 7-10)

**Objetivo:** Validar que o produto resolve o problema

#### Semana 7-8: Expansão de Dados

| Task                         | Entrega             |
| ---------------------------- | ------------------- |
| Upload de múltiplos extratos | Histórico carregado |
| Integração manual de KPIs    | 填报 de métricas    |
| Dashboard comparativo        | Mês vs mês          |

#### Semana 9-10: Expansão de Usuários

| Task                   | Entrega                |
| ---------------------- | ---------------------- |
| Roles e permissões     | Admin, Manager, Viewer |
| Dashboard por role     | Visões diferenciadas   |
| Relatórios exportáveis | PDF/Excel exports      |

**Métricas de Sucesso da Fase 2:**

- 50 empresas pagantes
- Churn < 10%/mês
- NPS > 40

---

### Fase 3: Escala (Semanas 11-12)

**Objetivo:** Preparar para crescimento

| Task                   | Entrega                    |
| ---------------------- | -------------------------- |
| API básica             | Endpoints para integrações |
| Otimização performance | Lighthouse > 90            |
| Documentação técnica   | Docs para devs             |

---

## 👥 Persona Primária

### CFO de PME (11-50 funcionários)

**Perfil:**

- 32-45 anos
- Faz tudo de financeiro
- Reporta para CEO/investidores
- Não tem equipe de BI

**Job to be Done:**

> "Quando preparo o board meeting, quero ter métricas financeiras atualizadas e insights sobre riscos, para tomar decisões informadas com o CEO."

**Critérios de Sucesso:**

- ✅ Métricas atualizadas automaticamente
- ✅ Comparação com mês anterior e meta
- ✅ Alertas de riscos futuros
- ✅ Exportar para apresentação

---

## 📊 Métricas de Produto

### Métricas de Aução

| Métrica                  | Meta     | Como Medir                                  |
| ------------------------ | -------- | ------------------------------------------- |
| Taxa de Ativação         | > 40%    | Usuários que completam onboarding em 7 dias |
| Tempo até Primeiro Valor | < 10 min | Tempo entre signup e primeiro insight       |
| Taxa de Upload           | > 60%    | Usuários que fazem upload de dados          |
| Taxa de Retenção D7      | > 30%    | Usuários ativos após 7 dias                 |

### Métricas de Valor

| Métrica         | Meta      | Como Medir                                     |
| --------------- | --------- | ---------------------------------------------- |
| NPS             | > 40      | Pesquisa pós-onboarding                        |
| Valor Percebido | > 3/5     | "O produto me ajuda a tomar melhores decisões" |
| Churn           | < 10%/mês | Cancelamentos mensal                           |

### Métricas Técnicas

| Métrica           | Meta    |
| ----------------- | ------- |
| Uptime            | > 99.5% |
| Tempo de Resposta | < 2s    |
| Taxa de Erro      | < 1%    |

---

## 💰 Projeção Financeira

### Custos Operacionais (Mensal)

| Item                  | Custo        |
| --------------------- | ------------ |
| Supabase (DB + Auth)  | R$ 500       |
| Vercel (Hosting)      | R$ 200       |
| Domínio + SSL         | R$ 50        |
| Gemini API (estimado) | R$ 500       |
| **Total**             | **R$ 1.250** |

### Projeção de Receita

| Mês | Clientes | Ticket Médio | MRR       |
| --- | -------- | ------------ | --------- |
| 4   | 10       | R$ 500       | R$ 5.000  |
| 5   | 20       | R$ 500       | R$ 10.000 |
| 6   | 35       | R$ 500       | R$ 17.500 |
| 9   | 50       | R$ 500       | R$ 25.000 |
| 12  | 100      | R$ 500       | R$ 50.000 |

### Break-even

- **Mês 4:** R$ 5.000 - R$ 1.250 = R$ 3.750 (positivo!)
- **Mês 12:** R$ 50.000 - R$ 1.250 = R$ 48.750/mês

---

## 🚨 Riscos e Mitigações

### Risco 1: Usuários não entendem o valor

**Probabilidade:** Alta  
**Impacto:** Alto

**Mitigação:**

- Onboarding guiado com valor instantâneo
- Template de dados de exemplo realistas
- Tooltips e help contextuais

### Risco 2: Dados de exemplo não são realistas

**Probabilidade:** Média  
**Impacto:** Alto

**Mitigação:**

- Testar com dados reais de empresas parceiras
- Criar "mode demo" com dados do segmento do usuário

### Risco 3: Concorrentes avançam mais rápido

**Probabilidade:** Média  
**Impacto:** Médio

**Mitigação:**

- Focar em diferencial de IA (mesmo que básico)
- Priorizar integração com ERPs locais (Omie, Conta Azul)

---

## ✅ Checklist de Execução

### Antes de Começar

- [ ] Definir responsável por cada task
- [ ] Setup ambiente de desenvolvimento
- [ ] Definir dados de teste/seed
- [ ] Criar conta Supabase produção

### Semanal

- [ ] Daily standup (15 min)
- [ ] Review de métricas
- [ ] Feedback de usuários beta

### Final de Fase

- [ ] Demonstração para stakeholders
- [ ] Decisão go/no-go para próxima fase
- [ ] Atualização deste documento

---

## 📚 Documentos de Referência

| Documento                                        | Descrição                               |
| ------------------------------------------------ | --------------------------------------- |
| `AGENTS.md`                                      | Guia de uso de skills e fluxo do agente |
| `docs/01-strategy/01-vision-and-architecture.md` | Visão e arquitetura original            |
| `docs/02-technical/02-architecture-audit.md`     | Auditoria técnica completa              |
| `knowledge/CHANGELOG.md`                         | Histórico de mudanças                   |

---

## 🔄 Versões

| Versão | Data       | Descrição                            |
| ------ | ---------- | ------------------------------------ |
| 1.0    | 22/03/2026 | Roadmap original                     |
| 2.0    | 03/04/2026 | Revisado pós-auditoria               |
| 2.1    | 03/04/2026 | Atualizado com skills e status atual |

---

**Próxima Revisão:** Semanal (durante Fase 1)  
**Document Owner:** Product Team

---

_Este roadmap será atualizado semanalmente baseado em feedback de usuários e métricas de produto._
