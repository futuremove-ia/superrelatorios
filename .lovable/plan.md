

# Plano de Continuidade Frontend — Fases 3, 4 e 5

## Escopo: Completar todos os fluxos frontend antes de integrar backend

---

## Fase A: Rotas e Navegação Faltantes

### A1. Criar página FolderDetail (`/app/pastas/:id`)
- Nova página que exibe relatórios dentro de uma pasta
- Header com nome da pasta, ícone e botão voltar
- Grid de relatórios filtrados por pasta (mock)
- Empty state com CTA para criar relatório
- Ações: Renomear pasta, Excluir pasta (modais com Dialog)

### A2. Criar modal/dialog "Nova Pasta"
- Em vez de rota separada, usar Dialog acessível de Folders.tsx
- Campos: nome, ícone (emoji picker simples), cor, descrição
- Toast de confirmação ao criar
- Atualizar botão "Nova Pasta" em Folders.tsx para abrir o dialog

### A3. Criar páginas Auth (Login/Signup) — apenas UI
- `/login` e `/signup` — formulários completos sem backend
- Email + senha, botão Google (desabilitado por ora)
- Link "Esqueci minha senha" → toast placeholder
- Redirect para `/app` ao submeter
- "Sair" no AppLayout redireciona para `/login`

---

## Fase B: Funcionalidades Pendentes do App

### B1. Busca global funcional no AppLayout
- Transformar input decorativo em busca real
- Filtrar relatórios mock por título/descrição/categoria
- Dropdown de resultados com links para relatórios
- Mobile: abrir search overlay ao clicar no ícone

### B2. Sistema de notificações (UI)
- Dropdown no ícone Bell do header
- Lista de notificações mock (relatório concluído, compartilhamento, etc.)
- Badge dinâmico baseado em notificações não lidas
- Botão "Marcar todas como lidas"

### B3. Ações funcionais em ReportDetail
- "Editar Relatório" → navegar para `/app/novo-relatorio?edit={id}`
- "Modo Apresentação" → Dialog fullscreen com o Paper
- "Compartilhar" → Dialog com opções: copiar link, WhatsApp, email
- "Download PDF" → usar `window.print()` ou html2canvas como placeholder

### B4. AISidebar ações funcionais
- "Configurar Automação" → toast + navegar para Settings
- "Conectar Agora" → toast placeholder
- "Criar Pasta" → abrir o dialog Nova Pasta
- "Usar Template" → navegar para ReportBuilder com template

---

## Fase C: ReportBuilder Enhancement

### C1. Step 1 — Upload real com drag & drop
- Implementar `onDragOver`, `onDragLeave`, `onDrop` handlers no drop zone
- Validação de tipo de arquivo e tamanho (max 10MB)
- Progress bar simulada durante "processamento"
- Preview do arquivo: nome, tipo, tamanho, ícone por extensão

### C2. Step 2 — Preview de dados e seleção inteligente
- Mostrar tabela simplificada com preview dos dados (mock: 5 linhas × 4 colunas)
- Highlight no template recomendado pela "IA" com badge "Recomendado"
- Sugestão automática de audiência: "Diretoria", "Equipe", "Cliente"
- Card de contexto: "A IA identificou X registros em Y categorias"

### C3. Step 3 — Edição de blocos do relatório
- Lista de seções editáveis com toggle on/off para cada bloco
- Edição inline do título de cada seção
- Botões de reordenação (mover para cima/baixo) em cada bloco
- Preview compacto do conteúdo de cada seção
- Em desktop: drag handles visuais (sem lib externa, apenas botões)

### C4. Step 4 — Visualização final completa
- Renderizar relatório real no componente Paper com todos os blocos ativos
- Modal de "Salvar": campo nome (pré-preenchido), seletor de pasta, botão salvar
- Modal de "Compartilhar": copiar link, enviar por WhatsApp (deep link), email
- Animação de sucesso após salvar (confetti ou checkmark animado simples)

---

## Fase D: Landing Page — Funcionalidades Faltantes

### D1. "Ver Demonstração" funcional
- Scroll suave até `#exemplos` (ReportShowcase) — já parcialmente feito
- Alternativa: abrir modal com screenshots/mockup do produto

### D2. FAQ Section
- Nova seção com Accordion entre Pricing e CTA
- 6-8 perguntas frequentes sobre o produto
- Estilo consistente com o design system

### D3. Smooth scroll navigation
- Header links scroll para seções da landing (Funcionalidades, Como Funciona, Preços)
- Active state no header baseado na seção visível (IntersectionObserver)

---

## Fase E: Settings Funcional (UI completa)

### E1. "Alterar Senha" → Dialog com campos: senha atual, nova senha, confirmar
### E2. "Ver Sessões" → Dialog com lista de dispositivos mock
### E3. "Alterar Plano" → Dialog com cards dos 3 planos (Free, Pro, Enterprise)
### E4. "Ver Faturas" → Dialog/tabela com histórico de faturas mock
### E5. "Cancelar Assinatura" → AlertDialog de confirmação com warning

---

## Resumo de Arquivos

| Novo | Arquivo |
|------|---------|
| ✅ | `src/pages/app/FolderDetail.tsx` |
| ✅ | `src/pages/Auth.tsx` (Login + Signup) |
| ✅ | `src/components/SearchOverlay.tsx` |
| ✅ | `src/components/NotificationsDropdown.tsx` |
| ✅ | `src/components/CreateFolderDialog.tsx` |
| ✅ | `src/components/ShareDialog.tsx` |
| ✅ | `src/components/PresentationMode.tsx` |
| ✅ | `src/components/FAQ.tsx` |

| Editado | Arquivo |
|---------|---------|
| ✏️ | `src/App.tsx` — adicionar rotas `/login`, `/signup`, `/app/pastas/:id` |
| ✏️ | `src/components/AppLayout.tsx` — integrar busca, notificações, link sair→login |
| ✏️ | `src/pages/app/Folders.tsx` — dialog nova pasta |
| ✏️ | `src/pages/app/ReportBuilder.tsx` — drag & drop, preview, edição blocos, salvar |
| ✏️ | `src/pages/app/ReportDetail.tsx` — ações funcionais, share dialog, apresentação |
| ✏️ | `src/pages/app/Settings.tsx` — dialogs para cada ação |
| ✏️ | `src/pages/Index.tsx` — adicionar FAQ section |
| ✏️ | `src/components/Header.tsx` — smooth scroll navigation |
| ✏️ | `src/components/ai/AISidebar.tsx` — ações funcionais |

### Ordem de implementação: A → B → C → D → E (prioridade por impacto no fluxo principal)

