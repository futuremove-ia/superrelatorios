

# Auditoria Completa & Plano de Continuidade — SuperRelatórios

## Estado Atual do Projeto

O projeto está funcional com uma Landing Page completa (8 seções), um App com 6 telas (Dashboard, ReportBuilder, ReportsList, ReportDetail, Folders, Settings), sistema de design com cores semânticas, componentes custom (KPICard, AISidebar, AISuggestion, FloatingButton, Paper, StepIndicator), e dados mock via `mockReports.ts`.

---

## Auditoria: Problemas Encontrados

### A. Funcionalidades Incompletas / Fictícias

1. **Sem autenticação** — Login/Signup não existe; "Sair" no menu redireciona para `/`; qualquer pessoa acessa `/app`
2. **Sem persistência de dados** — Tudo é mock; criar relatório gera objeto temporário e redireciona, mas nada é salvo
3. **Busca no header do AppLayout** — Input decorativo, não funciona
4. **Notificações** — Badge "3" hardcoded, sem dropdown, sem sistema real
5. **Botões "Ver Demonstração"** (Hero) — Não faz nada
6. **Botões "Download"** em ReportExamples — Ghost button sem ação
7. **Pricing "Falar com Vendas"** — Aponta para `#`
8. **Folders** — Links para `/app/pastas/nova` e `/app/pastas/:id` não existem como rotas (404)
9. **Settings** — Formulários decorativos, nada persiste; "Alterar Senha", "Ver Sessões", "Alterar Plano", "Ver Faturas", "Cancelar Assinatura" sem ação
10. **ReportDetail** — "Editar Relatório" e "Modo Apresentação" sem ação; dados de visualizações hardcoded ("24")
11. **AISidebar** — Botões "Configurar Automação", "Conectar Agora", "Criar Pasta" fazem `console.log`
12. **Drag & Drop** no ReportBuilder Step 3 — Mencionado no spec mas não implementado; step 3 é apenas formulário de título/categoria
13. **ReportBuilder Step 1 upload** — `handleFileUpload` captura o File mas não processa; drag & drop visual mas sem handler `onDrop`
14. **Template matching** — URLs como `?template=executivo` ou `?template=vendas` não correspondem aos IDs em `mockTemplates` (`executive-quarterly`, `sales-monthly`, `financial-monthly`)

### B. Bugs Técnicos

1. **Testimonials.tsx** — Componente importado mas NÃO usado em `Index.tsx`; conteúdo duplica Trust.tsx
2. **DocumentExamples.tsx** — Importado em Index mas não renderizado (removido do JSX em algum ponto)
3. **`hover:scale-105`** ainda presente em Features.tsx (l.38) e Benefits.tsx (l.52) — deveria ser `hover:scale-[1.02]`
4. **Features/Benefits/Trust cards** usam `border-0` — inconsistente com o design system
5. **Folders FloatingButton** — Usa `window.location.href` em vez de `navigate()` causando full page reload
6. **AppLayout mobile nav** inclui "Novo" apontando para `/app/novo-relatorio` — mas essa rota é standalone (fora do AppLayout), então o mobile nav não destaca corretamente
7. **`Testimonials` component** nunca usado — dead code

### C. UX & Design Issues

1. **Landing Page muito longa** — 8 seções + CTA, sem navegação visual entre seções; muita repetição (Trust ≈ Testimonials, DocumentExamples ≈ Step 1 do HowItWorks)
2. **ReportBuilder mobile** — Bottom nav buttons stack mas "Voltar" button appears/disappears causing layout shift
3. **Dashboard AISidebar** — `hidden xl:block` means invisible on most screens; no mobile equivalent
4. **ReportDetail mobile bottom bar** — `bottom-14` hardcoded instead of dynamic based on AppLayout bottom nav height
5. **Folders empty state CTA** — Links to `/app/pastas/nova` (nonexistent route)

---

## Plano de Continuidade — 6 Fases

### Fase 1: Fix Bugs & Dead Code (Quick Wins)

- Remove `Testimonials.tsx` (dead code, duplicates Trust)
- Fix template ID mismatch: Landing CTAs use `?template=executivo` but mockTemplates has `executive-quarterly` — normalize to consistent IDs
- Fix `hover:scale-105` → `hover:scale-[1.02]` in Features.tsx and Benefits.tsx
- Fix `border-0` → remove or add `border` consistently in Features, Benefits, Trust cards
- Fix Folders FloatingButton: replace `window.location.href` with React Router `useNavigate`
- Remove DocumentExamples from imports if not used, or add back to Index.tsx
- Fix ReportDetail mobile bottom bar positioning to account for AppLayout bottom nav

### Fase 2: Conectar Backend (Supabase/Lovable Cloud)

- Set up Lovable Cloud database with tables: `reports`, `folders`, `templates`
- Add authentication (email + Google sign-in)
- Replace `mockReports.ts` with real Supabase queries
- Implement CRUD: create, read, update, delete reports and folders
- Add user roles table (per security guidelines)
- Wire up Settings to persist user preferences

### Fase 3: Completar Funcionalidades Pendentes

- Implement missing routes: `/app/pastas/nova`, `/app/pastas/:id`
- Wire up search in AppLayout header (filter reports globally)
- Implement notification system (at minimum, toast-based activity feed)
- Connect "Ver Demonstração" button (scroll to ReportShowcase or open modal with video)
- Make AISidebar actions functional (create folder, navigate to template)
- Add export PDF functionality (html2pdf or server-side generation)
- Add share functionality (copy link, WhatsApp deep link)

### Fase 4: ReportBuilder Enhancement

- Step 1: Add real drag & drop zone with `onDrop` handler; add file type validation and size limits
- Step 2: Show actual data preview (parsed CSV/Excel columns); make template pre-selection work correctly from URL params
- Step 3: Add inline editing of report sections; add block reordering (up/down buttons on mobile, drag on desktop)
- Step 4: Show actual generated report preview in Paper component; implement Save (with folder picker) and Share (PDF, link, WhatsApp)
- Integrate Lovable AI for actual data analysis and report generation

### Fase 5: Landing Page Refinement

- Remove redundant sections (Testimonials, possibly DocumentExamples)
- Add real testimonials/social proof when available
- Add smooth scroll navigation with active section indicator
- Add hero animation or product screenshot/mockup
- Pricing "Falar com Vendas" → open contact form or mailto link
- Add FAQ section using Accordion component

### Fase 6: PWA & Polish

- Configure service worker for offline support
- Add app install prompt
- Implement dark mode toggle (next-themes already in dependencies)
- Add skeleton loading states consistently across all pages
- Add error boundaries
- Performance optimization: lazy load routes, optimize images
- Add onboarding flow for new users (first-time tooltip tour)

---

## Technical Notes

- **Database schema** needs: `reports` (id, user_id, title, description, category, status, template_id, data, folder_id, created_at, updated_at), `folders` (id, user_id, name, icon, color, description, created_at), `user_roles` (per security guidelines)
- **Authentication** should gate all `/app/*` routes with a redirect to `/login`
- **AI integration** via Lovable AI for report generation in ReportBuilder Step 3-4
- **File storage** via Supabase Storage for uploaded Excel/CSV/PDF files
- **15 files** need changes in Phase 1 alone; Phases 2-6 add ~20 new files

