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
