# 📦 INVENTÁRIO COMPLETO DE PRODUTO - SUPERRELATÓRIOS

## Módulos, Fluxos, Telas e Requisitos Funcionais por Fase

**Data:** 03/04/2026  
**Versão:** 1.0  
**Base:** Auditorias Técnica + Negócio + Análise de Código  
**Objetivo:** Roadmap de desenvolvimento organizado por fases

---

## 🎯 VISÃO GERAL DO PRODUTO

### Proposta de Valor

> "GPS Estratégico para PMEs: Veja onde está, entenda o que está errado, saiba o que fazer"

### Público-Alvo

- **Primário:** PMEs de 11-50 funcionários
- **Secundário:** Micro (1-10) e Média (51-100)
- **Personas:** CEO, CFO, Head Comercial, Analistas

### Diferencial Competitivo

- IA que detecta problemas automaticamente
- Recomendações acionáveis personalizadas
- Interface simples (não precisa ser especialista)

---

## 📊 INVENTÁRIO COMPLETO DE MÓDULOS

### Total Identificado: 32 Módulos (Revisado com base no código real)

| #     | Módulo                   | Status Atual                     | Prioridade | Fase   | Observações                                                                  |
| ----- | ------------------------ | -------------------------------- | ---------- | ------ | ---------------------------------------------------------------------------- |
| 1     | Autenticação             | ✅ Funcional                     | P0         | Base   | `useAuth`, `AuthContext`                                                     |
| 2     | Dashboard Principal      | ⚠️ Mockado                       | P0         | MVP    | Dados mock, UI funcional                                                     |
| 3     | Saúde Financeira         | ⚠️ Mockado                       | P0         | MVP    | Métricas mockadas                                                            |
| 4     | Radar de Alertas         | 🔴 Não existe                    | P0         | MVP    | **CORREÇÃO:** Não implementado                                               |
| 5     | Plano de Ação            | 🔴 Não existe                    | P0         | MVP    | **CORREÇÃO:** Não implementado                                               |
| 6     | Upload de Dados          | ✅ **Parcialmente implementado** | P0         | MVP    | **CORREÇÃO:** `FinancialDataParserService`, `useFinancialDataUpload` existem |
| 7     | Integração Bancária      | 🔴 Não existe                    | P1         | PMF    | Planejado                                                                    |
| 8     | Análise Comercial        | ⚠️ Mockado                       | P1         | PMF    | Dados mock                                                                   |
| 9     | Integração CRM           | 🔴 Não existe                    | P1         | PMF    | Planejado                                                                    |
| 10    | Métricas Operacionais    | ⚠️ Mockado                       | P1         | PMF    | Dados mock                                                                   |
| 11    | Relatórios               | ⚠️ Parcial                       | P1         | PMF    | `useReports` existe                                                          |
| 12    | Configuração de Métricas | ⚠️ Parcial                       | P2         | Escala | `useKPIs`, `useMetricValues` existem                                         |
| 13    | Analytics Avançado       | 🔴 Não existe                    | P2         | Escala | Planejado                                                                    |
| 14    | Painel de Decisão        | ⚠️ Parcial                       | P2         | Escala | UI existe, lógica mock                                                       |
| 15    | Dashboard Consolidado    | ⚠️ Parcial                       | P2         | Escala | UI existe, dados mock                                                        |
| 16-32 | Módulos Opcionais        | 🔴 Não existem                   | P3         | Futuro | Planejados                                                                   |

### ✅ **SERVIÇOS IMPLEMENTADOS (Revisão real):**

1. **`FinancialDataParserService`** - ✅ Existe (parsing de dados financeiros)
2. **`FinancialDocumentPipeline`** - ✅ Existe (pipeline completo)
3. **`useFinancialDataUpload`** - ✅ Existe (hook React)
4. **`fileParserService`** - ✅ Existe (parsing de arquivos)
5. **`unstructuredService`** - ✅ Existe (integração Unstructured API)

### ❌ **SERVIÇOS AUSENTES (Revisão real):**

1. **`metricsCalculationService`** - ❌ Não existe (serviço centralizado de cálculo)
2. **`alertDetectionService`** - ❌ Não existe (mas `DetectionService` existe em `src/services/strategic/DetectionService.ts`)
3. **`useFinancialMetrics`** - ❌ Não existe
4. **Sistema de alertas** - ❌ Não existe (mas detecção de desafios existe via `DetectionService`)
5. **Cálculo automático de métricas** - ❌ Não existe

---

## 🚀 ORGANIZAÇÃO POR FASE DE DESENVOLVIMENTO

### FASE 0: BASE (Já Implementado)

**Duração:** Concluído  
**Objetivo:** Infraestrutura básica funcional

#### Módulos (3)

**M0.1 - Autenticação e Autorização**

- Status: ✅ Funcional
- Telas: Login, Callback, Modo Demo
- Requisitos Funcionais:
  - RF001: Login com email/senha
  - RF002: Autenticação via Supabase
  - RF003: Modo demo (fallback sem Supabase)
  - RF004: Proteção de rotas
  - RF005: Gerenciamento de sessão
- Componentes: `AuthContext`, `ProtectedRoute`, `Login`

**M0.2 - Internacionalização**

- Status: ✅ Funcional
- Idiomas: pt-BR, en-US, es-ES
- Requisitos Funcionais:
  - RF006: Detecção automática de idioma
  - RF007: Seletor de idioma
  - RF008: Rotas localizadas (/:locale/app)
  - RF009: Traduções de UI
  - RF010: Traduções de conteúdo estratégico
- Componentes: `I18nRouter`, `LanguageToggle`

**M0.3 - Layout e Navegação**

- Status: ✅ Funcional
- Telas: AppLayout, Header, Sidebar (conceitual)
- Requisitos Funcionais:
  - RF011: Layout responsivo
  - RF012: Menu de navegação
  - RF013: Breadcrumbs (não implementado)
  - RF014: Lazy loading de páginas
  - RF015: Error boundaries
- Componentes: `AppLayout`, `Header`, `PageLoader`

---

### FASE 1: MVP FUNCIONAL (4 semanas)

**Duração:** 4 semanas (160h)  
**Objetivo:** Entregar valor real para CFO de PME  
**Critério de Sucesso:** 10 empresas testando, 5 vendo valor, 3 dispostas a pagar

#### Módulos (5)

**M1.1 - Upload e Parsing de Dados** ⭐ **PARCIALMENTE IMPLEMENTADO**

- Status: ✅ **Serviços implementados**, 🔴 **UI ausente**
- Prioridade: P0 - BLOQUEANTE
- Esforço: 20h (integração UI)
- **Implementações existentes:**
  - ✅ `FinancialDataParserService` - Parser completo
  - ✅ `FinancialDocumentPipeline` - Pipeline integrado
  - ✅ `useFinancialDataUpload` - Hook React
  - ✅ `fileParserService` - Parsing de arquivos
  - ✅ `unstructuredService` - Integração Unstructured API
- **Faltando:**
  - 🔴 UI de upload (telas, componentes)
  - 🔴 Integração com frontend
  - 🔴 Validação visual
- Telas necessárias:
  - Upload de Arquivo
  - Mapeamento de Colunas
  - Validação de Dados
- Requisitos Funcionais:
  - RF016: Upload de CSV ✅ (serviço existe)
  - RF017: Upload de Excel (XLSX) ✅ (serviço existe)
  - RF018: Upload de OFX (extrato bancário) 🔴
  - RF019: Parser automático de colunas ✅ (serviço existe)
  - RF020: Mapeamento manual de colunas 🔴
  - RF021: Validação de formato ✅ (serviço existe)
  - RF022: Validação de valores ✅ (serviço existe)
  - RF023: Preview de dados importados 🔴
  - RF024: Confirmação de importação 🔴
  - RF025: Histórico de uploads 🔴
- Componentes necessários: `FileUploader`, `ColumnMapper`, `DataPreview`
- Serviços: ✅ `fileParserService` (JÁ IMPLEMENTADO)

**M1.2 - Cálculo de Métricas Financeiras** ⭐ NOVO

- Status: 🔴 Não funciona (mockado)
- Prioridade: P0 - BLOQUEANTE
- Esforço: 30h
- Métricas:
  - Runway (meses de caixa)
  - Burn Rate (queima mensal)
  - Receita Mensal
- Requisitos Funcionais:
  - RF026: Calcular saldo de caixa atual
  - RF027: Calcular burn rate mensal
  - RF028: Calcular receita mensal
  - RF029: Calcular runway (caixa / burn)
  - RF030: Detectar tendência (crescente/decrescente)
  - RF031: Comparar com mês anterior
  - RF032: Armazenar histórico de métricas
  - RF033: Atualizar métricas automaticamente
- Componentes: `MetricCalculator`
- Serviços: `metricsCalculationService` (criar)

**M1.3 - Dashboard de Saúde Financeira** ⭐ REFATORAR

- Status: ⚠️ Mockado
- Prioridade: P0 - BLOQUEANTE
- Esforço: 20h
- Telas:
  - Dashboard Principal (Tab Saúde)
- Requisitos Funcionais:
  - RF034: Exibir 3 métricas principais (Runway, Burn, Receita)
  - RF035: Exibir status visual (crítico/warning/ok)
  - RF036: Exibir tendência (seta up/down)
  - RF037: Exibir comparação com meta
  - RF038: Exibir gráfico de evolução (últimos 6 meses)
  - RF039: Atualizar em tempo real
  - RF040: Loading states
  - RF041: Empty states
- Componentes: `HealthDashboard`, `MetricCard`, `TrendChart`
- Hooks: `useFinancialMetrics` (implementar)

**M1.4 - Detecção de Alertas Críticos** ⭐ NOVO

- Status: 🔴 Não funciona
- Prioridade: P0 - BLOQUEANTE
- Esforço: 40h
- Alertas:
  - Caixa Crítico (runway < 3 meses)
  - Burn Rate Elevado (> 10% acima do planejado)
- Requisitos Funcionais:
  - RF042: Detectar runway crítico (< 3 meses)
  - RF043: Detectar burn rate elevado (> meta + 10%)
  - RF044: Calcular severidade (critical/high/medium)
  - RF045: Calcular tempo para agir
  - RF046: Gerar título e descrição do alerta
  - RF047: Armazenar alerta no banco
  - RF048: Notificar usuário (toast)
  - RF049: Marcar alerta como lido
  - RF050: Dispensar alerta
- Componentes: `AlertDetector`
- Serviços: `DetectionService` (existe) + sistema de alertas (criar)

**M1.5 - Recomendações Básicas** ⭐ NOVO

- Status: 🔴 Não funciona
- Prioridade: P0 - BLOQUEANTE
- Esforço: 30h
- Recomendações:
  - Cortar custos fixos em X%
  - Antecipar recebíveis
  - Renegociar prazos
- Requisitos Funcionais:
  - RF051: Gerar recomendação baseada em alerta
  - RF052: Calcular impacto esperado
  - RF053: Estimar prazo de execução
  - RF054: Definir complexidade (baixa/média/alta)
  - RF055: Listar ações concretas (checklist)
  - RF056: Exibir recomendação no drawer
  - RF057: Adicionar recomendação ao plano
  - RF058: Rastrear execução
- Componentes: `RecommendationEngine`, `RecommendationCard`
- Serviços: `recommendationService` (criar)

#### Fluxos Principais (3)

**F1.1 - Onboarding e Primeira Importação**

```
1. Usuário faz login
2. Vê dashboard vazio (empty state)
3. Clica em "Importar Dados"
4. Faz upload de extrato bancário (CSV/Excel)
5. Sistema mapeia colunas automaticamente
6. Usuário confirma mapeamento
7. Sistema calcula métricas
8. Dashboard atualiza com dados reais
9. Sistema detecta alertas
10. Usuário vê primeiro alerta crítico
Tempo: < 10 minutos
```

**F1.2 - Visualização de Saúde Financeira**

```
1. Usuário acessa dashboard
2. Vê tab "Saúde Financeira"
3. Visualiza 3 métricas principais
4. Vê status visual (cores)
5. Vê tendência (setas)
6. Clica em métrica para ver detalhes
7. Vê gráfico de evolução
8. Vê comparação com meta
Tempo: < 30 segundos
```

**F1.3 - Ação sobre Alerta Crítico**

```
1. Usuário vê alerta "Caixa Crítico"
2. Clica no alerta
3. Vê diagnóstico (causa raiz)
4. Vê recomendação (o que fazer)
5. Vê checklist de ações
6. Clica em "Adicionar ao Plano"
7. Alerta vira tarefa no plano
8. Usuário executa ações
9. Marca como concluído
10. Sistema valida se métrica melhorou
Tempo: < 5 minutos
```

#### Telas (6)

1. **Dashboard Principal** (refatorar)
   - Tab: Saúde Financeira
   - 3 MetricCards
   - Seção de Alertas
   - CTA: Importar Dados

2. **Upload de Dados** (criar)
   - Drag & drop de arquivo
   - Seletor de tipo (CSV/Excel/OFX)
   - Preview de arquivo
   - Botão: Próximo

3. **Mapeamento de Colunas** (criar)
   - Tabela de preview
   - Dropdowns de mapeamento
   - Validação em tempo real
   - Botão: Confirmar

4. **Validação de Dados** (criar)
   - Lista de erros/warnings
   - Opção de corrigir
   - Opção de ignorar
   - Botão: Importar

5. **Drawer de Alerta** (criar)
   - Título e severidade
   - Diagnóstico (causa raiz)
   - Recomendação (o que fazer)
   - Checklist de ações
   - CTAs: Adicionar ao Plano / Dispensar

6. **Plano de Ação** (criar básico)
   - Lista de ações
   - Status (pendente/em andamento/concluído)
   - Checkbox para marcar como feito
   - Filtros por status

#### Requisitos Não-Funcionais

- RNF001: Tempo de upload < 5s para arquivo de 1MB
- RNF002: Cálculo de métricas < 1s
- RNF003: Detecção de alertas < 2s
- RNF004: Interface responsiva (mobile/tablet/desktop)
- RNF005: Acessibilidade WCAG 2.1 AA
- RNF006: Suporte a navegadores modernos (Chrome, Firefox, Safari, Edge)

---

### FASE 2: PRODUCT-MARKET FIT (8 semanas)

**Duração:** 8 semanas (320h)  
**Objetivo:** Validar que o produto resolve o problema  
**Critério de Sucesso:** 50 empresas pagantes, churn <10%, NPS >40

#### Módulos (8)

**M2.1 - Integração Bancária** ⭐ NOVO

- Status: 🔴 Não existe
- Prioridade: P1 - IMPORTANTE
- Esforço: 60h
- Integrações:
  - Pluggy (agregador)
  - Belvo (agregador)
  - Open Banking Brasil
- Requisitos Funcionais:
  - RF059: Conectar com Pluggy API
  - RF060: Listar bancos disponíveis
  - RF061: Autenticar com banco
  - RF062: Sincronizar transações
  - RF063: Categorizar transações automaticamente
  - RF064: Atualizar saldo em tempo real
  - RF065: Sincronização automática (diária)
  - RF066: Notificar erros de sincronização
  - RF067: Revogar acesso ao banco
  - RF068: Histórico de sincronizações
- Componentes: `BankConnector`, `BankList`, `TransactionList`
- Serviços: `bankIntegrationService` (criar)

**M2.2 - Análise Comercial** ⭐ IMPLEMENTAR

- Status: ⚠️ Mockado
- Prioridade: P1 - IMPORTANTE
- Esforço: 40h
- Métricas:
  - Taxa de Conversão
  - CAC (Custo de Aquisição)
  - LTV (Lifetime Value)
  - Ticket Médio
- Requisitos Funcionais:
  - RF069: Calcular taxa de conversão por etapa
  - RF070: Calcular CAC (custos marketing / novos clientes)
  - RF071: Calcular LTV (ticket médio × tempo de vida)
  - RF072: Calcular ticket médio
  - RF073: Identificar gargalos no funil
  - RF074: Comparar com benchmarks
  - RF075: Detectar queda de conversão
  - RF076: Gerar alertas comerciais
- Componentes: `CommercialDashboard`, `FunnelChart`
- Serviços: `commercialAnalysisService` (criar)

**M2.3 - Integração com CRM** ⭐ NOVO

- Status: 🔴 Não existe
- Prioridade: P1 - IMPORTANTE
- Esforço: 60h
- Integrações:
  - Pipedrive
  - RD Station
  - HubSpot (futuro)
- Requisitos Funcionais:
  - RF077: Conectar com Pipedrive API
  - RF078: Importar deals e estágios
  - RF079: Calcular conversão por estágio
  - RF080: Identificar deals parados
  - RF081: Sincronizar em tempo real (webhooks)
  - RF082: Criar tarefas no CRM
  - RF083: Atualizar status de deals
  - RF084: Notificar mudanças
- Componentes: `CRMConnector`, `DealsList`, `FunnelAnalysis`
- Serviços: `crmIntegrationService` (criar)

**M2.4 - Radar de Alertas Completo** ⭐ IMPLEMENTAR

- Status: 🔴 Quebrado
- Prioridade: P1 - IMPORTANTE
- Esforço: 40h
- Tipos de Alerta:
  - Riscos Financeiros
  - Riscos Comerciais
  - Oportunidades de Melhoria
- Requisitos Funcionais:
  - RF085: Listar todos os alertas ativos
  - RF086: Filtrar por domínio (financeiro/comercial/operações)
  - RF087: Filtrar por tipo (risco/oportunidade)
  - RF088: Filtrar por prioridade (alta/média/baixa)
  - RF089: Ordenar por urgência
  - RF090: Abrir drawer com detalhes
  - RF091: Adicionar ao plano de ação
  - RF092: Dispensar alerta
  - RF093: Reativar alerta dispensado
  - RF094: Histórico de alertas
- Componentes: `RadarPage`, `RadarCard`, `RadarSideDrawer` (criar)
- Hooks: `useRadarItems` (implementar)

**M2.5 - Plano de Ação Completo** ⭐ IMPLEMENTAR

- Status: 🔴 Não funciona
- Prioridade: P1 - IMPORTANTE
- Esforço: 40h
- Requisitos Funcionais:
  - RF095: Criar ação manualmente
  - RF096: Criar ação a partir de alerta
  - RF097: Atribuir responsável
  - RF098: Definir prazo
  - RF099: Definir prioridade
  - RF100: Adicionar checklist de sub-tarefas
  - RF101: Marcar como concluída
  - RF102: Adicionar comentários
  - RF103: Anexar arquivos
  - RF104: Notificar responsável
  - RF105: Alertar sobre atrasos
  - RF106: Validar impacto (métrica melhorou?)
- Componentes: `ActionPlanPage`, `ActionCard`, `ActionDrawer`
- Hooks: `useActionItems` (implementar)

**M2.6 - Métricas Operacionais** ⭐ IMPLEMENTAR

- Status: ⚠️ Mockado
- Prioridade: P1 - IMPORTANTE
- Esforço: 30h
- Métricas:
  - Tempo de Atendimento
  - Taxa de Resolução
  - NPS
  - Churn
- Requisitos Funcionais:
  - RF107: Calcular tempo médio de atendimento
  - RF108: Calcular taxa de resolução no primeiro contato
  - RF109: Calcular NPS
  - RF110: Calcular churn mensal
  - RF111: Identificar clientes em risco
  - RF112: Gerar alertas operacionais
- Componentes: `OperationsDashboard`
- Serviços: `operationsAnalysisService` (criar)

**M2.7 - Relatórios Básicos** ⭐ IMPLEMENTAR

- Status: ⚠️ Parcial
- Prioridade: P1 - IMPORTANTE
- Esforço: 30h
- Tipos:
  - Relatório Financeiro
  - Relatório Comercial
  - Relatório Executivo
- Requisitos Funcionais:
  - RF113: Criar relatório a partir de template
  - RF114: Adicionar blocos (KPI, gráfico, texto)
  - RF115: Editar conteúdo de blocos
  - RF116: Reorganizar blocos (drag & drop)
  - RF117: Preview de relatório
  - RF118: Exportar para PDF
  - RF119: Compartilhar por link
  - RF120: Agendar envio automático
- Componentes: `ReportBuilder`, `ReportPreview`, `BlockEditor`
- Serviços: `reportGenerationService` (implementar)

**M2.8 - Notificações e Alertas** ⭐ NOVO

- Status: 🔴 Não existe
- Prioridade: P1 - IMPORTANTE
- Esforço: 20h
- Canais:
  - In-app (toast)
  - Email
  - Push (futuro)
- Requisitos Funcionais:
  - RF121: Notificar novo alerta crítico
  - RF122: Notificar ação atribuída
  - RF123: Notificar ação atrasada
  - RF124: Notificar sincronização falhada
  - RF125: Configurar preferências de notificação
  - RF126: Marcar notificação como lida
  - RF127: Histórico de notificações
- Componentes: `NotificationCenter`, `NotificationToast`
- Serviços: `notificationService` (criar)

#### Fluxos Principais (5)

**F2.1 - Conexão com Banco**

```
1. Usuário acessa "Fontes de Dados"
2. Clica em "Conectar Banco"
3. Seleciona banco da lista
4. Autentica com credenciais do banco
5. Autoriza acesso (Open Banking)
6. Sistema sincroniza transações
7. Sistema categoriza automaticamente
8. Dashboard atualiza com dados reais
9. Sistema detecta novos alertas
Tempo: < 5 minutos
```

**F2.2 - Conexão com CRM**

```
1. Usuário acessa "Integrações"
2. Clica em "Conectar Pipedrive"
3. Autentica com API key
4. Sistema importa deals
5. Sistema calcula métricas de funil
6. Dashboard comercial atualiza
7. Sistema detecta gargalos
8. Gera alertas comerciais
Tempo: < 3 minutos
```

**F2.3 - Gestão de Plano de Ação**

```
1. Usuário acessa "Plano de Ação"
2. Vê lista de ações (do radar + manuais)
3. Clica em ação para ver detalhes
4. Atribui responsável
5. Define prazo
6. Adiciona checklist de sub-tarefas
7. Responsável recebe notificação
8. Responsável marca sub-tarefas como feitas
9. Responsável marca ação como concluída
10. Sistema valida impacto
Tempo: variável
```

**F2.4 - Criação de Relatório**

```
1. Usuário acessa "Relatórios"
2. Clica em "Novo Relatório"
3. Seleciona template
4. Adiciona blocos (KPI, gráficos)
5. Edita conteúdo
6. Preview de relatório
7. Exporta para PDF
8. Compartilha por link
Tempo: < 15 minutos
```

**F2.5 - Análise de Funil Comercial**

```
1. Usuário acessa "Análise Comercial"
2. Vê funil de vendas
3. Identifica gargalo (ex: proposta)
4. Clica no gargalo
5. Vê deals parados nessa etapa
6. Vê tempo médio nessa etapa
7. Vê sugestões de ação
8. Cria ação para resolver gargalo
Tempo: < 5 minutos
```

#### Telas (12)

7. **Fontes de Dados** (criar)
8. **Conexão Bancária** (criar)
9. **Integrações** (criar)
10. **Análise Comercial** (refatorar)
11. **Radar Completo** (refatorar)
12. **Drawer de Alerta Completo** (criar)
13. **Plano de Ação Completo** (refatorar)
14. **Drawer de Ação** (criar)
15. **Análise Operacional** (criar)
16. **Relatórios** (refatorar)
17. **Editor de Relatório** (criar)
18. **Centro de Notificações** (criar)

---

### FASE 3: ESCALA (12 semanas)

**Duração:** 12 semanas (480h)  
**Objetivo:** Crescer mantendo qualidade  
**Critério de Sucesso:** 200 empresas, churn <5%, NPS >50, LTV/CAC >3x

#### Módulos (16)

**M3.1 - Configuração Avançada de Métricas**

- Esforço: 30h
- RF: Criar métricas customizadas, fórmulas, thresholds

**M3.2 - Analytics Avançado**

- Esforço: 40h
- RF: Correlações, análise preditiva, simulações

**M3.3 - Painel de Decisão**

- Esforço: 30h
- RF: Cenários, trade-offs, recomendações estratégicas

**M3.4 - Dashboard Consolidado**

- Esforço: 20h
- RF: Visão unificada multi-domínio

**M3.5 - Gestão de Riscos**

- Esforço: 40h
- RF: Matriz de riscos, mitigações, monitoramento

**M3.6 - Gestão de Fornecedores**

- Esforço: 30h
- RF: Scorecards, alertas, performance

**M3.7 - Gestão de Clientes**

- Esforço: 30h
- RF: Health score, churn risk, lifecycle

**M3.8 - Gestão de RH**

- Esforço: 30h
- RF: Custos, projeções, turnover

**M3.9 - Previsões**

- Esforço: 40h
- RF: Forecast de receita, caixa, vendas

**M3.10 - SWOT**

- Esforço: 20h
- RF: Análise SWOT, geração com IA

**M3.11 - Blueprint Organizacional**

- Esforço: 40h
- RF: Perfil completo da empresa, wizard

**M3.12 - Hierarquia Organizacional**

- Esforço: 30h
- RF: Unidades, departamentos, times, membros

**M3.13 - Permissões e Papéis**

- Esforço: 30h
- RF: RBAC, permissões granulares

**M3.14 - API Pública**

- Esforço: 60h
- RF: REST API, webhooks, documentação

**M3.15 - White-label**

- Esforço: 40h
- RF: Branding customizado, domínio próprio

**M3.16 - Mobile App**

- Esforço: 80h
- RF: App nativo iOS/Android, notificações push

#### Telas (20+)

19-38. Telas de módulos opcionais (detalhamento futuro)

---

## 📋 INVENTÁRIO COMPLETO DE REQUISITOS FUNCIONAIS

### Total: 127 Requisitos Funcionais Identificados

#### Autenticação e Autorização (RF001-RF005)

- RF001: Login com email/senha
- RF002: Autenticação via Supabase
- RF003: Modo demo (fallback)
- RF004: Proteção de rotas
- RF005: Gerenciamento de sessão

#### Internacionalização (RF006-RF010)

- RF006: Detecção automática de idioma
- RF007: Seletor de idioma
- RF008: Rotas localizadas
- RF009: Traduções de UI
- RF010: Traduções de conteúdo

#### Layout e Navegação (RF011-RF015)

- RF011: Layout responsivo
- RF012: Menu de navegação
- RF013: Breadcrumbs
- RF014: Lazy loading
- RF015: Error boundaries

#### Upload e Parsing (RF016-RF025)

- RF016: Upload de CSV
- RF017: Upload de Excel
- RF018: Upload de OFX
- RF019: Parser automático
- RF020: Mapeamento manual
- RF021: Validação de formato
- RF022: Validação de valores
- RF023: Preview de dados
- RF024: Confirmação de importação
- RF025: Histórico de uploads

#### Cálculo de Métricas (RF026-RF033)

- RF026: Calcular saldo de caixa
- RF027: Calcular burn rate
- RF028: Calcular receita mensal
- RF029: Calcular runway
- RF030: Detectar tendência
- RF031: Comparar com mês anterior
- RF032: Armazenar histórico
- RF033: Atualizar automaticamente

#### Dashboard (RF034-RF041)

- RF034: Exibir métricas principais
- RF035: Exibir status visual
- RF036: Exibir tendência
- RF037: Exibir comparação com meta
- RF038: Exibir gráfico de evolução
- RF039: Atualizar em tempo real
- RF040: Loading states
- RF041: Empty states

#### Detecção de Alertas (RF042-RF050)

- RF042: Detectar runway crítico
- RF043: Detectar burn rate elevado
- RF044: Calcular severidade
- RF045: Calcular tempo para agir
- RF046: Gerar título e descrição
- RF047: Armazenar alerta
- RF048: Notificar usuário
- RF049: Marcar como lido
- RF050: Dispensar alerta

#### Recomendações (RF051-RF058)

- RF051: Gerar recomendação
- RF052: Calcular impacto esperado
- RF053: Estimar prazo
- RF054: Definir complexidade
- RF055: Listar ações concretas
- RF056: Exibir no drawer
- RF057: Adicionar ao plano
- RF058: Rastrear execução

#### Integração Bancária (RF059-RF068)

- RF059: Conectar com Pluggy
- RF060: Listar bancos
- RF061: Autenticar com banco
- RF062: Sincronizar transações
- RF063: Categorizar automaticamente
- RF064: Atualizar saldo em tempo real
- RF065: Sincronização automática
- RF066: Notificar erros
- RF067: Revogar acesso
- RF068: Histórico de sincronizações

#### Análise Comercial (RF069-RF076)

- RF069: Calcular taxa de conversão
- RF070: Calcular CAC
- RF071: Calcular LTV
- RF072: Calcular ticket médio
- RF073: Identificar gargalos
- RF074: Comparar com benchmarks
- RF075: Detectar queda de conversão
- RF076: Gerar alertas comerciais

#### Integração CRM (RF077-RF084)

- RF077: Conectar com Pipedrive
- RF078: Importar deals
- RF079: Calcular conversão por estágio
- RF080: Identificar deals parados
- RF081: Sincronizar em tempo real
- RF082: Criar tarefas no CRM
- RF083: Atualizar status de deals
- RF084: Notificar mudanças

#### Radar de Alertas (RF085-RF094)

- RF085: Listar alertas ativos
- RF086: Filtrar por domínio
- RF087: Filtrar por tipo
- RF088: Filtrar por prioridade
- RF089: Ordenar por urgência
- RF090: Abrir drawer com detalhes
- RF091: Adicionar ao plano
- RF092: Dispensar alerta
- RF093: Reativar alerta
- RF094: Histórico de alertas

#### Plano de Ação (RF095-RF106)

- RF095: Criar ação manualmente
- RF096: Criar ação a partir de alerta
- RF097: Atribuir responsável
- RF098: Definir prazo
- RF099: Definir prioridade
- RF100: Adicionar checklist
- RF101: Marcar como concluída
- RF102: Adicionar comentários
- RF103: Anexar arquivos
- RF104: Notificar responsável
- RF105: Alertar sobre atrasos
- RF106: Validar impacto

#### Métricas Operacionais (RF107-RF112)

- RF107: Calcular tempo de atendimento
- RF108: Calcular taxa de resolução
- RF109: Calcular NPS
- RF110: Calcular churn
- RF111: Identificar clientes em risco
- RF112: Gerar alertas operacionais

#### Relatórios (RF113-RF120)

- RF113: Criar relatório de template
- RF114: Adicionar blocos
- RF115: Editar conteúdo
- RF116: Reorganizar blocos
- RF117: Preview de relatório
- RF118: Exportar para PDF
- RF119: Compartilhar por link
- RF120: Agendar envio automático

#### Notificações (RF121-RF127)

- RF121: Notificar novo alerta
- RF122: Notificar ação atribuída
- RF123: Notificar ação atrasada
- RF124: Notificar sincronização falhada
- RF125: Configurar preferências
- RF126: Marcar como lida
- RF127: Histórico de notificações

---

## 🎨 INVENTÁRIO DE COMPONENTES UI

### Total: 60+ Componentes Identificados

#### Componentes Base (Já Implementados)

1. `AuthContext` - Gerenciamento de autenticação
2. `ProtectedRoute` - Proteção de rotas
3. `Login` - Tela de login
4. `I18nRouter` - Roteamento internacionalizado
5. `LanguageToggle` - Seletor de idioma
6. `AppLayout` - Layout principal
7. `Header` - Cabeçalho
8. `PageLoader` - Loading de página
9. `ErrorBoundary` - Tratamento de erros

#### Componentes MVP (Criar/Refatorar)

10. `FileUploader` - Upload de arquivos
11. `ColumnMapper` - Mapeamento de colunas
12. `DataPreview` - Preview de dados
13. `MetricCalculator` - Calculadora de métricas
14. `HealthDashboard` - Dashboard de saúde
15. `MetricCard` - Card de métrica
16. `TrendChart` - Gráfico de tendência
17. `AlertDetector` - Detector de alertas
18. `RecommendationEngine` - Motor de recomendações
19. `RecommendationCard` - Card de recomendação

#### Componentes PMF (Criar)

20. `BankConnector` - Conector bancário
21. `BankList` - Lista de bancos
22. `TransactionList` - Lista de transações
23. `CommercialDashboard` - Dashboard comercial
24. `FunnelChart` - Gráfico de funil
25. `CRMConnector` - Conector de CRM
26. `DealsList` - Lista de deals
27. `FunnelAnalysis` - Análise de funil
28. `RadarPage` - Página do radar
29. `RadarCard` - Card de alerta
30. `RadarSideDrawer` - Drawer de alerta
31. `ActionPlanPage` - Página de plano de ação
32. `ActionCard` - Card de ação
33. `ActionDrawer` - Drawer de ação
34. `OperationsDashboard` - Dashboard operacional
35. `ReportBuilder` - Construtor de relatórios
36. `ReportPreview` - Preview de relatório
37. `BlockEditor` - Editor de blocos
38. `NotificationCenter` - Centro de notificações
39. `NotificationToast` - Toast de notificação

#### Componentes Escala (Futuro)

40-60. Componentes de módulos opcionais

---

## 🔧 INVENTÁRIO DE SERVIÇOS

### Total: 30+ Serviços Identificados

#### Serviços Base (Já Implementados)

1. `supabase` - Cliente Supabase
2. `authService` - Autenticação
3. `i18nService` - Internacionalização

#### Serviços MVP (Criar/Implementar)

4. `fileParserService` - Parser de arquivos ✅ EXISTE
5. `metricsCalculationService` - Cálculo de métricas ❌ NÃO EXISTE (serviço centralizado)
6. `DetectionService` - Detecção de desafios ✅ EXISTE (em `src/services/strategic/DetectionService.ts`)
7. `recommendationService` - Geração de recomendações ❌ NÃO EXISTE

#### Serviços PMF (Criar)

8. `bankIntegrationService` - Integração bancária
9. `commercialAnalysisService` - Análise comercial
10. `crmIntegrationService` - Integração CRM
11. `operationsAnalysisService` - Análise operacional
12. `reportGenerationService` - Geração de relatórios
13. `notificationService` - Notificações

#### Serviços Escala (Futuro)

14. `riskManagementService` - Gestão de riscos
15. `supplierManagementService` - Gestão de fornecedores
16. `customerManagementService` - Gestão de clientes
17. `hrManagementService` - Gestão de RH
18. `forecastingService` - Previsões
19. `swotAnalysisService` - Análise SWOT
20. `blueprintService` - Blueprint organizacional
21. `hierarchyService` - Hierarquia organizacional
22. `permissionsService` - Permissões e papéis
23. `apiService` - API pública
24. `whitelabelService` - White-label
    25-30. Serviços adicionais

---

## 📊 MATRIZ DE PRIORIZAÇÃO

### Critérios de Priorização

| Critério           | Peso | Descrição                   |
| ------------------ | ---- | --------------------------- |
| Valor para Usuário | 30%  | Resolve problema real?      |
| Bloqueante         | 25%  | Impede outras features?     |
| Esforço            | 20%  | Tempo de desenvolvimento    |
| Risco Técnico      | 15%  | Complexidade técnica        |
| Dependências       | 10%  | Depende de outras features? |

### Módulos Priorizados (Top 10)

| #   | Módulo              | Valor | Bloq | Esforço | Risco | Dep | Score | Fase |
| --- | ------------------- | ----- | ---- | ------- | ----- | --- | ----- | ---- |
| 1   | Upload de Dados     | 10    | 10   | 7       | 3     | 0   | 8.5   | MVP  |
| 2   | Cálculo de Métricas | 10    | 10   | 6       | 4     | 8   | 8.4   | MVP  |
| 3   | Detecção de Alertas | 9     | 9    | 7       | 5     | 8   | 8.0   | MVP  |
| 4   | Dashboard Saúde     | 9     | 8    | 5       | 2     | 8   | 7.8   | MVP  |
| 5   | Recomendações       | 9     | 8    | 6       | 6     | 9   | 7.7   | MVP  |
| 6   | Integração Bancária | 10    | 5    | 8       | 7     | 5   | 7.2   | PMF  |
| 7   | Plano de Ação       | 8     | 7    | 7       | 3     | 7   | 7.0   | MVP  |
| 8   | Radar Completo      | 8     | 6    | 7       | 4     | 7   | 6.8   | PMF  |
| 9   | Integração CRM      | 9     | 4    | 8       | 7     | 5   | 6.7   | PMF  |
| 10  | Análise Comercial   | 8     | 5    | 7       | 5     | 6   | 6.5   | PMF  |

---

## 🗺️ ROADMAP VISUAL

```
FASE 0: BASE (Concluído)
├── Autenticação ✅
├── I18n ✅
└── Layout ✅

FASE 1: MVP (4 semanas)
├── Semana 1: Upload + Parsing
│   ├── FileUploader
│   ├── ColumnMapper
│   └── DataPreview
├── Semana 2: Cálculo + Detecção
│   ├── MetricsCalculation
│   ├── AlertDetection
│   └── RecommendationEngine
├── Semana 3: Dashboard + Radar
│   ├── HealthDashboard
│   ├── RadarCard
│   └── RadarDrawer
└── Semana 4: Plano + Validação
    ├── ActionPlan
    ├── ActionCard
    └── Testes com 10 empresas

FASE 2: PMF (8 semanas)
├── Semanas 1-2: Integração Bancária
│   ├── Pluggy Integration
│   ├── Transaction Sync
│   └── Auto Categorization
├── Semanas 3-4: Integração CRM
│   ├── Pipedrive Integration
│   ├── Funnel Analysis
│   └── Deal Tracking
├── Semanas 5-6: Análise Completa
│   ├── Commercial Analysis
│   ├── Operations Analysis
│   └── Advanced Alerts
├── Semanas 7-8: Relatórios + Notificações
│   ├── Report Builder
│   ├── PDF Export
│   └── Notification System

FASE 3: ESCALA (12 semanas)
├── Semanas 1-4: Módulos Opcionais
│   ├── Risk Management
│   ├── Supplier Management
│   └── Customer Management
├── Semanas 5-8: Features Enterprise
│   ├── Advanced Analytics
│   ├── API Pública
│   └── RBAC
└── Semanas 9-12: Mobile + White-label
    ├── Mobile App (iOS/Android)
    ├── White-label
    └── Advanced Customization
```

---

## 📈 ESTIMATIVAS DE ESFORÇO

### Por Fase

| Fase      | Duração    | Esforço  | Módulos | Telas   | RFs      | Componentes | Serviços |
| --------- | ---------- | -------- | ------- | ------- | -------- | ----------- | -------- |
| Base      | Concluído  | -        | 3       | 3       | 15       | 9           | 3        |
| MVP       | 4 sem      | 160h     | 5       | 6       | 43       | 10          | 4        |
| PMF       | 8 sem      | 320h     | 8       | 12      | 69       | 20          | 6        |
| Escala    | 12 sem     | 480h     | 16      | 20+     | -        | 20+         | 17+      |
| **TOTAL** | **24 sem** | **960h** | **32**  | **41+** | **127+** | **59+**     | **30+**  |

### Por Tipo de Atividade

| Atividade    | % Esforço | Horas    | Descrição                   |
| ------------ | --------- | -------- | --------------------------- |
| Backend      | 40%       | 384h     | Serviços, APIs, integrações |
| Frontend     | 35%       | 336h     | Componentes, telas, UX      |
| Testes       | 15%       | 144h     | Unitários, integração, E2E  |
| Documentação | 5%        | 48h      | Docs técnicas, user guides  |
| DevOps       | 5%        | 48h      | CI/CD, deploy, monitoring   |
| **TOTAL**    | **100%**  | **960h** | -                           |

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: MVP (4 semanas)

#### Semana 1: Infraestrutura de Dados

- [ ] RF016-RF025: Upload e Parsing
- [ ] Componente: FileUploader
- [ ] Componente: ColumnMapper
- [ ] Componente: DataPreview
- [ ] Serviço: fileParserService
- [ ] Testes: Upload de CSV, Excel, OFX
- [ ] Validação: 10 arquivos de teste

#### Semana 2: Lógica de Negócio

- [ ] RF026-RF033: Cálculo de Métricas
- [ ] RF042-RF050: Detecção de Alertas
- [ ] RF051-RF058: Recomendações
- [ ] Serviço: cálculo de métricas (centralizar lógica existente)
- [ ] Serviço: `DetectionService` (validar/expandir)
- [ ] Serviço: recommendationService (criar)
- [ ] Testes: Cálculos, detecção, recomendações

#### Semana 3: Interface

- [ ] RF034-RF041: Dashboard
- [ ] Componente: HealthDashboard
- [ ] Componente: MetricCard
- [ ] Componente: TrendChart
- [ ] Componente: RadarCard
- [ ] Componente: RadarDrawer
- [ ] Hook: useFinancialMetrics
- [ ] Testes: Renderização, interação

#### Semana 4: Validação

- [ ] Plano de Ação básico
- [ ] Testes end-to-end
- [ ] Onboarding de 10 empresas
- [ ] Coleta de feedback
- [ ] Iteração rápida
- [ ] Documentação de uso

---

## 📚 DOCUMENTAÇÃO GERADA

Este inventário complementa os seguintes documentos:

1. `knowledge/AUDIT_COMPREHENSIVE_ANALYSIS.md` - Análise técnica
2. `knowledge/AUDIT_BUSINESS_USER_PERSPECTIVE.md` - Perspectiva de negócio
3. `knowledge/AUDIT_FINAL_REPORT.md` - Relatório consolidado
4. `knowledge/PRODUCT_INVENTORY_ROADMAP.md` - Este documento

---

**Documento gerado por:** Kiro AI Assistant  
**Data:** 03/04/2026  
**Versão:** 1.0  
**Status:** COMPLETO  
**Próxima Ação:** Iniciar Fase 1 (MVP)
