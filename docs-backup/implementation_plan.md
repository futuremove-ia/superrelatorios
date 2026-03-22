# Plano de Implementação: Correções da Auditoria SuperRelatórios

Este plano descreve os passos práticos para corrigir todas as dívidas técnicas levantadas na auditoria, melhorando a arquitetura, qualidade de código, segurança e performance do projeto.

## Mudanças Propostas

### 1. Configurações de Qualidade de Código (ESLint e TypeScript)
Iremos ativar o "strict mode" do TypeScript e ajustar as regras do ESLint para garantir que variáveis não utilizadas e tipagens incorretas sejam mitigadas a tempo de compilação.
- **Arquivos afetados:**
  - `tsconfig.json`
  - `eslint.config.js`
- **Ação:** Ligar `strictNullChecks`, `noImplicitAny` e avisar sobre `no-unused-vars`. Iremos também corrigir os erros que isso fatalmente revelará nos arquivos TypeScript do projeto.

### 2. Otimização de Performance (Lazy Loading)
O roteamento principal será atualizado para aproveitar o Code Splitting com `React.lazy` e `<Suspense>`.
- **Arquivos afetados:**
  - `src/App.tsx`
- **Ação:** Envolver componentes pesados como `Dashboard`, `ReportBuilder`, `ReportsList`, `ReportDetail` e as páginas dentro do layout do app com `React.lazy`.

### 3. Integração do Gerenciador de Estado de Servidor (React Query)
A busca de dados deixará de usar `useEffect` puros e dependerá do `@tanstack/react-query` que já está listado nas dependências.
- **Arquivos afetados:**
  - `src/pages/app/Dashboard.tsx`
  - `src/hooks/useReports.ts` (Novo)
- **Ação:** Criar o hook customizado e implementar as lógicas de carregamento no Dashboard.

### 4. Refatoração do `ReportBuilder.tsx` (Componente Monolítico)
O construtor de relatórios será completamente desacoplado utilizando a API de Contexto do React.
- **Arquivos Criados/Afetados:**
  - `src/contexts/ReportBuilderContext.tsx` [NOVO] - Para gerenciar o estado global do formulário e de qual etapa o usuário se encontra.
  - `src/pages/app/ReportBuilder.tsx` [MODIFICADO] - Passará a ser apenas um contêiner (wrapper) juntando as partes.
  - `src/pages/app/components/report-builder/DataInputStep.tsx` [NOVO]
  - `src/pages/app/components/report-builder/TemplateSelectionStep.tsx` [NOVO]
  - `src/pages/app/components/report-builder/GenerationStep.tsx` [NOVO]
  - `src/pages/app/components/report-builder/PreviewStep.tsx` [NOVO]

## Plano de Verificação

### Verificações Manuais
- Iniciar o servidor de desenvolvimento e verificar se o roteamento e lazy loading funcionam na raiz e nas rotas internas.
- Realizar o fluxo completo de criação de um novo relatório para assegurar que a separação de contexto do `ReportBuilder` manteve o funcionamento e a fluidez perfeitos.
- Monitorar aba "Rede" e comportamento visual dos loadings introduzidos com React Query.

### Qualidade Analisada por Ferramentas
- Rodar o linter (`npm run lint`) no final e garantir que o número de alertas de tipagem e unused variables está zerado (ou próximo de zero / justificado).
