# SuperRelatórios 📊

Plataforma inteligente para geração de relatórios estratégicos a partir de dados brutos (CSV, XLSX, JSON) usando IA (Gemini 2.0 Flash).

## 🚀 Arquitetura e Tecnologias

Este projeto segue princípios modernos de desenvolvimento web e padrões de Clean Architecture adaptados para ecossistema React.

- **Frontend**: Vite + React 18 + TypeScript (Strict Mode)
- **UI/UX**: Tailwind CSS + shadcn/ui + Lucide Icons
- **Estado Global & Dados**: TanStack Query (React Query) + Context API
- **IA**: Google Gemini 2.0 Flash API
- **Backend/DB**: Supabase (Auth, Storage, Database)
- **Internacionalização**: i18next (Suporte para pt-BR, en-US, es-ES)

## 🏗️ Estrutura do Projeto

```text
src/
├── components/     # Componentes de UI e Blocos de Relatório
├── contexts/       # Estado da Aplicação (ReportBuilderContext)
├── hooks/          # Hooks customizados (useReports, useAuth)
├── lib/            # Infraestrutura (Supabase client, utils)
├── locales/        # Arquivos de tradução (JSON)
├── pages/          # Páginas e Rotas (Dashboard, Builder)
├── services/       # Lógica de Aplicação (AI, File Parsing)
└── types/          # Domínio (Tipagem de Relatórios e Blocos)
```

## 🛠️ Configuração do Ambiente

1. Clone o repositório.
2. Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🧪 Qualidade e Regras

- **TypeScript**: `strict: true`, `noImplicitAny: true`.
- **Linting**: ESLint com regras para variáveis não utilizadas e hooks.
- **Auditoria**: Relatórios de arquitetura e decisões técnicas em `knowledge/`.

## 🎯 Features Implementadas

### ✅ Platform Transformation (Unicorn-Level UX)
- **Dashboard Avançado** - Stats cards, tabs, analytics
- **Componentes Modernos** - UI avançada e responsiva
- **Performance** - Build otimizado e rápido

### ✅ Sistema Estratégico Completo
- **13 KPIs Mestre** - Financeiros, Marketing, Vendas, Operacionais
- **Motor de Detecção** - Identificação automática de sintomas
- **3 Desafios Principais** - Cash Flow Crunch, Inefficient Sales, Commodity Trap
- **9 Alavancas Estratégicas** - Ações priorizadas por desafio

### ✅ Arquitetura Unificada
- **UnifiedMetricsEntity** - Entidade central para todas as métricas
- **Domain-Driven Design** - Separação clara de responsabilidades
- **Clean Architecture** - Dependências fluindo para dentro

## 📊 Estratégia Implementada

### Fundação Intelectual
- **Biblioteca de KPIs** - 13 indicadores mestres com thresholds realistas
- **Biblioteca de Desafios** - 3 problemas principais de PMEs
- **Biblioteca de Objetivos** - 3 destinos estratégicos claros
- **Benchmarks Setoriais** - Referências de mercado (IBGE, Sebrae, SaaS Capital)

### Motor de Inteligência
- **Detecção Automática** - 15 regras baseadas em thresholds
- **Diagnóstico Integrado** - Análise completa automática
- **Recomendações** - Desafio + objetivo + plano priorizado
- **Progresso Contínuo** - Vetor de tendência qualitativo

## 🚀 Deploy

### Produção
- **URL**: https://superrelatorios.vercel.app
- **GitHub Actions**: Deploy automático
- **Vercel**: Hosting e CDN

### Ambiente Local
```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
```

## 📋 Documentação Completa

### Design System
- **DESIGN_SYSTEM.md** - Sistema completo de design (600+ linhas)
- **Componentes** - BrandName, LogoIcon, Paper, UI avançada
- **Tokens** - Cores HSL, tipografia, espaçamento
- **Acessibilidade** - WCAG AA compliance

### Arquitetura
- **docs/unified-architecture.md** - Arquitetura unificada
- **STRATEGY_IMPLEMENTATION_SUMMARY.md** - Fundação estratégica
- **knowledge/** - Auditorias e relatórios técnicos

### Estratégia
- **IMPLEMENTACAO_v30_ALAVANCAS_ACOES.md** - Alavancas estratégicas
- **EXPANSAO_v21_RESUMO.md** - Planos de expansão
- **FASE1_PROGRESSO.md** - Progresso de implementação

## 🎯 Diferencial Competitivo

O SuperRelatórios é um **GPS Estratégico para PMEs**:

- **🤖 Detecção Automática** - IA identifica problemas sem intervenção manual
- **📈 Métricas Precisas** - Thresholds realistas baseados em dados de mercado
- **🎯 Ações Priorizadas** - Top 3 alavancas por desafio, não catálogos enormes
- **📋 Benchmarks Setoriais** - Referências de gestão empresarial adaptadas para PME
- **🔄 Feedback Contínuo** - Vetor de tendência qualitativo com narrativas

## 🏆 Status

- **Build**: ✅ SUCCESS (14.33s, 2694 modules)
- **Deploy**: ✅ PRODUCTION (https://superrelatorios.vercel.app)
- **Features**: ✅ PLATFORM TRANSFORMATION COMPLETE
- **Documentation**: ✅ RECOVERED & UPDATED

---

*SuperRelatórios - Transformando dados brutos em consultoria estratégica acionável*
