# 🎯 Plano de Implementação: Onboarding Flow (v2.0)

## Visão Geral

O Onboarding Flow segue o modelo **"Triagem Híbrida"**: você pergunta o "Caminho" (Dor/Objetivo) e a IA descobre o "Mapa" (Dados/Documentos).

---

## 1. O Conceito: "The Fast Lane & The Deep Dive"

### Três Portas de Entrada na Tela Inicial

```
┌─────────────────────────────────────────────────────────────────┐
│                    SUPERRELATÓRIOS                               │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐ │
│  │  🪄 DIAGNÓSTICO  │  │  📋 ONBOARDING   │  │  🔗 INTEGRAR    │ │
│  │   INSTANTÂNEO   │  │     GUIADO      │  │     DIRETO      │ │
│  │                  │  │                  │  │                  │ │
│  │ "Quero ver a    │  │ "Quero estruturar│  │ "Já tenho dados │ │
│  │   mágica agora" │  │   minha gestão"  │  │   no meu ERP"   │ │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘ │
│                                                                  │
│  A) Magic Button   B) Strategic Path   C) Native Connect       │
└─────────────────────────────────────────────────────────────────┘
```

### Porta A: "Diagnóstico Instantâneo" (The Magic Button)

- **Foco:** Aliviar uma dor específica
- **Fluxo:** Upload DRE/Extrato → IA processa → Card de Impacto em 30s
- **Estratégia:** Captura atenção pelo "Uau"

### Porta B: "Onboarding Guiado" (The Strategic Path)

- **Foco:** Configurar o SuperRelatórios como SO da empresa
- **Fluxo:** Contexto + Documentos por Domínio
- **Estratégia:** Constrói confiança e autoridade

### Porta C: "Integração Direta" (The Native Connect)

- **Foco:** Conectar com ERP (Omie, ContaAzul, QuickBooks) ou Google Drive
- **Foco:** Empresas de 20-50 funcionários com processos digitais
- **Estratégia:** Fidelização - vira monitor oficial

---

## 2. Fluxo "Context-First, Data-Second"

### Passo 0: A Pergunta de Ouro (Filtro de Persona)

```
Qual o seu objetivo hoje?

[ ] Resolver um problema urgente     → Porta A (Diagnóstico Instantâneo)
[ ] Estruturar a gestão              → Porta B (Onboarding Completo)
[ ] Explorar com dados de exemplo    → Modo Demo
```

### Passo 1: O "Gancho" de Contexto Mínimo (3 perguntas, 15 segundos)

| Pergunta          | Opções                          | Propósito           |
| ----------------- | ------------------------------- | ------------------- |
| Nome da empresa   | texto                           | Personalizar output |
| Setor             | Varejo/Serviço/Indústria/Outros | Template de KPIs    |
| Modelo de Receita | Recorrente/Venda Única          | Calibrar métricas   |

### Passo 2: O Foco (Domínio)

```
Qual área do seu negócio requer atenção prioritária agora?

[ ] Financeiro (Fundação/Caixa)
[ ] Comercial (Vendas/Conversão)
[ ] Marketing (Atração/Custo por Lead)
[ ] Operações (Logística/Compras/Margem)
[ ] Gente (Equipe/Cultura)
```

### Passo 3: Upload Inteligente

- "Drag & Drop" de qualquer arquivo
- IA identifica se é Financeiro, Comercial ou Operacional
- Se o arquivo não bater com o domínio selecionado:
  - "Identificamos dados de Operações. Gostaria de incluir esse domínio no diagnóstico?"

---

## 3. Fluxo Detalhado por Porta

### Porta A: Diagnóstico Instantâneo

```
[Escolhe "Problema Urgente"]
  → Define contexto mínimo (3 perguntas)
  → Upload de arquivo
  → IA processa e detecta domínio
  → Card de Impacto em 30s
  → "Quer refinar com mais contexto?" → leva para Porta B
```

### Porta B: Onboarding Guiado (The Deep Dive)

```
[Escolhe "Estruturar Gestão"]
  → Contexto Mínimo (3 perguntas)
  → Define Domínio Prioritário
  → Step 1: Company Info
  → Step 2: Industry Config
  → Step 3: Data Goals
  → Step 4: First Data Import (por domínio)
  → Step 5: First Radar
  → Completion
```

### Porta C: Integração Direta

```
[Escolhe "Já tenho dados"]
  → Contexto Mínimo
  → Seleciona ERP/Source
  → OAuth/Token
  → Sincronização automática
  → Dashboard com dados reais
```

---

## 4. Features por Porta

### RF001 - Porta A: Diagnóstico Instantâneo

- [ ] Landing page com 3 portas
- [ ] Context-minimo (3 perguntas)
- [ ] Upload inteligente
- [ ] IA detecta domínio do arquivo
- [ ] Card de impacto em 30s
- [ ] Cross-sell para Porta B

### RF002 - Porta B: Onboarding Guiado

- [ ] Welcome screen
- [ ] Company info (nome, setor, tamanho)
- [ ] Industry config (thresholds padrões)
- [ ] Data goals (objetivos, KPIs)
- [ ] Importação por domínio
- [ ] First radar gerado

### RF003 - Porta C: Integração Direta

- [ ] Lista de conectores (Omie, ContaAzul, etc)
- [ ] OAuth flow
- [ ] Sync status
- [ ] Error handling

### RF004 - Cross-cutting

- [ ] Estado persiste entre sessões
- [ ] Resume de onde parou
- [ ] Skip possível (exceto contexto mínimo)
- [ ] Tour opcional após completion

---

## 5. Edge Cases e Fallbacks

| Cenário                      | Tratamento                                                    |
| ---------------------------- | ------------------------------------------------------------- |
| Usuário não sabe o que subir | "Sugestão baseada no seu domínio: DRE para Financeiro"        |
| Upload não é do domínio      | Elegant question: "Este arquivo é de outro domínio. Incluir?" |
| API de integração falha      | Retry + fallback manual                                       |
| Sessão expira                | Salvar estado, permitir resume                                |
| Usuário já onboarded         | Redirect para dashboard                                       |

---

## 6. Estrutura de Arquivos

```
src/
├── types/
│   └── onboarding.ts           # Tipos + portas + fluxos
├── services/
│   ├── onboardingService.ts   # FSM completo
│   └── __tests__/
├── hooks/
│   └── useOnboarding.ts      # + useOnboardingDoors
├── components/
│   └── onboarding/
│       ├── OnboardingLanding.tsx    # 3 portas
│       ├── ContextMinimo.tsx        # 3 perguntas
│       ├── DomainSelector.tsx       # 5 domínios
│       ├── DiagnosticCard.tsx       # Card de impacto
│       ├── WizardSteps/             # Pasos do B
│       └── IntegrationConnect.tsx    # Conectores
└── pages/
    └── OnboardingPage.tsx
```

---

**Versão:** 2.0  
**Baseado em:** Modelo Triagem Híbrida + Fast Lane & Deep Dive  
**Status:** Pronto para implementação
