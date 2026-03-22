# Plano de Implementação: Internacionalização (i18n)

## Objetivo
Preparar e estruturar o projeto SuperRelatórios de forma profissional para suportar múltiplos idiomas de maneira escalável, utilizando o ecossistema `i18next` e `react-i18next`.

## User Review Required
> [!IMPORTANT]
> Precisamos definir quais idiomas o MVP do i18n irá focar inicialmente. Planejo injetar os três mais óbvios da nossa formatação no `Settings.tsx` (Português, Inglês e Espanhol). Se você tiver algum outro que deseja focar agora, me avise. Além disso, as strings serão movidas localmente.

## Proposed Changes

### 1. Dependências do Sistema
Será necessário instalar o motor padrão do mercado para lidar com dicionários, detecção de navegador e a ponte com o React:
- `i18next` (Motor base)
- `react-i18next` (Bindings do React para usar hooks)
- `i18next-browser-languagedetector` (Detecta idioma automático do SO/Browser)

### 2. Nova Arquitetura de Pastas (Locales)
Centralizaremos os dicionários estáticos.
#### [NEW] `src/locales/pt-BR.json`
#### [NEW] `src/locales/en-US.json`
#### [NEW] `src/locales/es-ES.json`

### 3. Configuração Core do i18n
#### [NEW] `src/i18n/index.ts`
Script de fundação que vai inicializar o motor, definir o idioma de fallback para "pt-BR" e registrar os três dicionários nativos.

#### [MODIFY] `src/main.tsx` (ou `src/App.tsx`)
Apenas importar `import './i18n';` logo no início do documento para que todas as linguagens sejam providas para a árvore de componentes antes de sua renderização.

### 4. Refatoração de Componentes Estratégicos (Etapa 1)
Nesta fase inicial, substituiremos "textos engessados" por variáveis usando o hook `useTranslation()`:

#### [MODIFY] `src/pages/app/Settings.tsx`
Fazer o seletor de "Idioma" que o usuário clica efetivamente invocar `i18n.changeLanguage()`, aplicando o idioma em tempo real via Context.

#### [MODIFY] `src/components/BrandName.tsx` e Base Layout
Isolaremos as variáveis ali como provas de conceito (ex: "Relatórios Inteligentes" virando "Smart Reports").

#### [MODIFY] `src/pages/app/Dashboard.tsx`
Trocaremos strings pesadas e mapeadas em listas (como métricas e descrições) pelas chaves dinâmicas dos arquivos JSON.

## Verification Plan

### Automated Tests
- Validar se o TypeScript no `strict mode` não aponta nenhum erro na injeção do objeto de instâncias `i18n`.
- Testar a build rodando `npm run build` e confirmar que a injeção do pacote de idiomas não violou o peso (lazy loaded chunking) da aplicação de forma absurda.

### Manual Verification
- Testar alterar manualmente o "Idioma" nas Configurações, checando se a interface como um todo instantaneamente re-renderiza entre Inglês e Português sem precisar fazer reload do navegador (F5).
- Mudar temporariamente o idioma do Chrome/Edge para "Inglês", e acessar em guia limpa para garantir que o plug-in do `languagedetector` carregou o conteúdo diretamente e autonomamente em Inglês.
