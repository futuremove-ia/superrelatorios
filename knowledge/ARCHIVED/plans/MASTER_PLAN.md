# MASTER PLAN — SuperRelatórios

**Data:** 2026-04-02  
**Versão:** 3.0  
**Status:** EMPROGRAMAÇÃO ATIVA

---

## 1. Visão Geral do Projeto

### Nome

**SuperRelatórios** — Plataforma SaaS de Analytics Estratégico para PMEs

### Tagline

"GPS Estratégico para PMEs" — Transforma dados brutos em decisões inteligentes

### Público-Alvo

PMEs/SMBs com 1-100 funcionários no Brasil (inicialmente)

### Proposta de Valor

| Premissa                | Definição                                  | Exemplo                                    |
| ----------------------- | ------------------------------------------ | ------------------------------------------ |
| **Simplicidade Genial** | Todo usuário consegue usar sem treinamento | 3 cliques para ter insights                |
| **Didática Extrema**    | Sistema ensina enquanto usuário usa        | Tooltips, exemplos, explicações            |
| **Utilidade Radical**   | Valor percebido em segundos                | Primeiro dashboard já mostra algo útil     |
| **Moldar Gestão**       | Sistema ensina boas práticas para PMEs     | Ao detectar problema, sugere ação concreta |

---

## 2. Stack Tecnológica

| Camada   | Tecnologia                                        |
| -------- | ------------------------------------------------- |
| Frontend | React 18, Vite 5, TypeScript 5, TanStack Query v5 |
| UI       | shadcn/ui, TailwindCSS 3, Radix UI                |
| Backend  | Supabase (PostgreSQL 15, Auth, Storage, Realtime) |
| AI       | Google Gemini 2.0 Flash (API Key necessária)      |
| Hosting  | Vercel                                            |

---

## 3. Arquitetura

### Clean Architecture

```
UI → Application → Domain → Infrastructure
```

### Domínios Bounded

- Finance (Financeiro)
- Commercial (Comercial)
- Marketing
- Operations (Operações)
- People (RH)
- Strategy (Estratégia)

---

## 4. Estado Atual das Funcionalidades

### ✅ COMPLETADO

| Componente                        | Status          | Data       | Observações                        |
| --------------------------------- | --------------- | ---------- | ---------------------------------- |
| **Onboarding Fast/Deep/Demo**     | ✅ Concluído    | 2026-04-02 | 3 portas de entrada                |
| **Pipeline de Dados**             | ✅ Concluído    | -          | CSV, XLSX, XLS, PDF, TXT, texto    |
| **KPIs por Setor**                | ✅ Concluído    | 2026-04-02 | 127 KPIs ativos                    |
| **Setores Implementados**         | ✅ Concluído    | 2026-04-02 | 12 setores                         |
| **KPI Calculation Engine**        | ✅ Concluído    | 2026-04-02 | 100+ fórmulas em TypeScript        |
| **First Win Feature**             | ✅ Concluído    | 2026-04-02 | Análise automática pós-upload      |
| **Testes Unitários**              | ✅ Concluído    | 2026-04-02 | 50 testes passando                 |
| **Sistema de Memória**            | ✅ Implementado | 2026-04-02 | agent_memory table                 |
| **Relevance Engine (Níveis 0-4)** | ✅ Implementado | -          | Motor de relevância por maturidade |

### 🔄 EM DESENVOLVIMENTO

| Componente         | Status     | Dependência        |
| ------------------ | ---------- | ------------------ |
| Gemini Integration | ⏳ Backlog | API Key necessária |
| Modo Demo Avançado | ⏳ Backlog | Dados mock         |
| KPI Predictions    | ⏳ Backlog | Histórico de dados |
| Integração ERP     | ⏳ Backlog | API Omie/ContaAzul |

### ⏳ BACKLOG

| Componente             | Prioridade      | Dependência  |
| ---------------------- | --------------- | ------------ |
| Progressive Disclosure | ✅ Implementado | -            |
| Multi-idioma (i18n)    | 🟡 MÉDIA        | PT-BR pronto |
| Automated Insights     | 🔴 ALTA         | Gemini       |
| Anomaly Detection      | 🟡 MÉDIA        | ML pipeline  |

---

## 5. KPIs — Biblioteca

### Totais Atuais

| Métrica    | Valor   |
| ---------- | ------- |
| Total KPIs | **127** |
| Setores    | **12**  |
| Domínios   | **6**   |

### KPIs por Setor

| Setor         | KPIs | Nichos                              |
| ------------- | ---- | ----------------------------------- |
| technology    | 10   | saas, ecommerce, omnichannel        |
| retail        | 10   | ecommerce, physical, omnichannel    |
| media         | 8    | streaming, publishing, gaming       |
| education     | 8    | school, university, online_learning |
| healthcare    | 8    | hospital, clinic, insurance         |
| manufacturing | 8    | discrete, process                   |
| services      | 7    | consulting, support, saas           |
| real_estate   | 7    | residential, commercial, rental     |
| finance       | 7    | banking, fintech, credit            |
| food          | 6    | restaurant, delivery                |
| logistics     | 6    | freight, warehousing, lastmile      |
| construction  | 5    | residential, commercial, industrial |

---

## 6. Entidades de Banco de Dados

### Entidades Core

| Entidade           | Tabela                | Descrição                       |
| ------------------ | --------------------- | ------------------------------- |
| Organização        | organizations         | Empresa cliente                 |
| Usuário            | auth.users + profiles | Usuário autenticado             |
| Métricas           | user_metrics          | Valores de KPIs por período     |
| Biblioteca de KPIs | library_kpis          | Definições de todos os KPIs     |
| Radar              | radar_items           | Alertas de riscos/oportunidades |
| Plano de Ação      | action_items          | Ações corretivas                |
| Desafios           | user_strategy_focus   | Desafios estratégicos           |

### Entidades de Suporte

| Entidade          | Tabela             | Descrição                  |
| ----------------- | ------------------ | -------------------------- |
| Diagnósticos      | library_diagnoses  | Diagnósticos estruturados  |
| Impactos          | library_impacts    | Impactos por alavanca      |
| Blueprints        | company_blueprints | DNA da empresa             |
| Memória do Agente | agent_memory       | Conhecimento cross-session |

---

## 7. Fluxos Principais

### Fluxo 1: Upload de Dados → First Win

```
Usuário faz upload (CSV/XLSX/PDF)
    ↓
fileParserService.parseFile()
    ↓
useFirstWin.analyze() → Detecta setor
    ↓
KPICalculationEngine.calculateMultiple()
    ↓
FirstWinCard exibe insights
    ↓
Usuário pode continuar ou pular
```

### Fluxo 2: Análise Completa

```
Dados carregados
    ↓
AI Service (Gemini) → análise semântica
    ↓
KPI Extraction → mapear dados
    ↓
Persistir em user_metrics
    ↓
Dashboard atualizado via TanStack Query
```

### Fluxo 3: Radar de Alertas

```
Sistema detecta padrões nos dados
    ↓
Gera radar_items com diagnóstico
    ↓
Usuário visualiza RadarCard
    ↓
Clica → abre RadarSideDrawer
    ↓
Decide: adicionar ao plano ou dispensar
```

---

## 8. Regras Pétreas

### Dados

- ✅ RLS em todas as tabelas com organization_id
- ✅ organization_id sempre via profiles (não organization_members)
- ✅ KPIs usam library_kpis (não kpi_master_library)

### UX

- ✅ Progressive Disclosure — 4 camadas de complexidade
- ✅ GPS Estratégico: Painel → Alertas → Ações → Histórico
- ✅ Sem objetos vazios — sempre com CTA

---

## 9. Roadmap por Fase

### Fase 1: MVP — Q2 2026 ✅ (Em andamento)

| Componente                | Status |
| ------------------------- | ------ |
| Onboarding Fast/Deep/Demo | ✅     |
| Pipeline de dados         | ✅     |
| 100+ KPIs                 | ✅     |
| Relevance Engine          | ✅     |
| First Win                 | ✅     |

### Fase 2: Premium — Q3 2026

| Componente           | Prioridade |
| -------------------- | ---------- |
| Modo Demo Avançado   | 🟡 MÉDIA   |
| Insights Imediatos   | 🔴 ALTA    |
| DataSuggestionBanner | 🟡 MÉDIA   |
| Integração ERP       | 🟡 MÉDIA   |

### Fase 3: Inteligência Artificial — Q4 2026

| Componente            | Prioridade |
| --------------------- | ---------- |
| Gemini Integration    | 🔴 ALTA    |
| Automated Insights    | 🔴 ALTA    |
| KPI Predictions       | 🟡 MÉDIA   |
| Anomaly Detection     | 🟡 MÉDIA   |
| Smart Recommendations | 🔴 ALTA    |

### Fase 4: Escala Global — 2027

| Componente       | Prioridade |
| ---------------- | ---------- |
| Multi-idioma     | 🔴 ALTA    |
| QuickBooks/Xero  | 🟡 MÉDIA   |
| Múltiplas moedas | 🟡 MÉDIA   |
| LGPD/GDPR        | 🟡 MÉDIA   |

---

## 10. Métricas de Sucesso

### Fase 1 (MVP)

- ✅ Time to First Value < 30s (First Win implementado)
- ✅ Taxa de conclusão onboarding > 70%
- ✅ 127 KPIs funcionais

### Fase 2 (Premium)

- 🎯 Taxa de retenção D30 > 40%
- 🎯 NPS > 50
- 🎯 Net Revenue Retention > 100%

### Fase 3 (AI)

- 🌟 % de usuários com insights automatizados > 60%
- 🌟 Redução de churn > 20%

### Fase 4 (Global)

- 🌍 Mercado internacional > 20% receita

---

## 11. Dependências Críticas

| #   | Dependência    | Impacto             | Status                |
| --- | -------------- | ------------------- | --------------------- |
| 1   | Gemini API     | Insights + extração | ⏳ Aguardando API Key |
| 2   | Integração ERP | Porta C (Demo)      | ⏳ Backlog            |
| 3   | Dados mock     | Modo Demo           | ⏳ Backlog            |

---

## 12. Testes

### Cobertura Atual

| Tipo                             | Quantidade | Status     |
| -------------------------------- | ---------- | ---------- |
| Unitários (KPICalculationEngine) | 50         | ✅ Passing |

### Scripts

```json
{
  "test": "vitest",
  "test:run": "vitest --run",
  "test:coverage": "vitest --run --coverage"
}
```

---

## 13. Deploy

**URL:** https://superrelatorios.com.br  
**Último deploy:** 2026-04-02  
**Build:** ✅ Sucesso

---

## 14. Documentos Relacionados

| Documento                   | Descrição                         |
| --------------------------- | --------------------------------- |
| `PROJECT_MEMORY.md`         | Base de conhecimento centralizada |
| `KPI_CALCULATION_ENGINE.md` | Documentação do motor de KPIs     |
| `AGENT_COORDINATION.md`     | Arquitetura de agentes            |
| `TESTING_PLAN.md`           | Plano de testes                   |
| `TESTING_IMPLEMENTATION.md` | Implementação de testes           |

---

## 15. Próximos Passos

1. ⏳ Conectar Gemini (precisa API Key)
2. ⏳ Criar dados mock para Modo Demo
3. ⏳ Implementar DataSuggestionBanner
4. ⏳ Implementar Automated Insights

---

**Última atualização:** 2026-04-02  
**Documento consolidado por:** Kiro AI Assistant
