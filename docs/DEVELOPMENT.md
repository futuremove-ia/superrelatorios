# 📋 Guia de Desenvolvimento

## 🌐 Internacionalização (i18n)

### Sistema de Roteamento Híbrido

O projeto implementa um sistema avançado de roteamento internacionalizado que suporta:

#### **🔧 Funcionalidades Principais**
- **Detecção automática de idioma**: Browser, localStorage, geolocalização
- **Redirecionamento inteligente**: Rotas canônicas vs localizadas
- **Navegação localizada**: Sidebar, mobile, breadcrumbs com tradução
- **Seletor de idiomas**: Dropdown no header com alternância instantânea
- **SEO otimizado**: Canonical URLs, hreflang, Open Graph, structured data
- **TypeScript seguro**: Tipagem forte e validação de rotas

#### **📂 Estrutura de Arquivos**
```
src/
├── routes/
│   └── routes.ts              # Mapa de rotas internacionalizadas
├── hooks/
│   └── useI18nRouter.ts     # Hook personalizado para i18n routing
├── components/
│   ├── I18nRouter.tsx         # Componente principal de inicialização
│   ├── navigation/
│   │   ├── LocalizedNavigation.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── LocalizedBreadcrumbs.tsx
│   └── SEO/
│       └── I18nSEO.tsx      # SEO multilíngue dinâmico
└── locales/
    ├── pt-BR.json              # Traduções português
    └── en-US.json              # Traduções inglês
```

#### **🌐 Uso no App.tsx**
```tsx
<I18nRouter>
  <BrowserRouter>
    <Routes>
      {/* Rotas existentes */}
    </Routes>
  </BrowserRouter>
</I18nRouter>
```

#### **🔧 Configuração de Rotas**
As rotas são definidas em `routes.ts` com suporte para:
- Rotas canônicas (ex: `/app/dashboard`)
- Rotas localizadas (ex: `/app/painel`, `/app/reports`)
- Redirecionamento automático baseado no idioma

#### **📝 Exemplo de Implementação**
```typescript
// Hook personalizado
const { currentLanguage, changeLanguage, navigateLocalized } = useI18nRouter();

// Navegação localizada
<LocalizedNavigation className="space-y-2" />
<LanguageSwitcher variant="ghost" />
<LocalizedBreadcrumbs />
```

#### **🎯 Boas Práticas**
1. **Sempre usar `navigateLocalized()`** para navegação
2. **Manter traduções sincronizadas** entre arquivos de locale
3. **Usar tipagem forte** para segurança de rotas
4. **Testar redirecionamento** em diferentes cenários
5. **Validar SEO metadata** para cada idioma

## 🚀 Fluxo de Trabalho

### 1. Setup Inicial
```bash
# Clonar repositório
git clone https://github.com/futuremove-ia/superrelatorios.git
cd superrelatorios

# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run dev
```

### 2. Branch Strategy
- **`main`**: Produção (protegido)
- **`develop`**: Desenvolvimento principal
- **`feature/*`**: Funcionalidades específicas
- **`hotfix/*`**: Correções urgentes

### 3. Processo de Desenvolvimento

#### Criar Nova Funcionalidade
```bash
# Criar branch a partir do develop
git checkout develop
git pull origin develop
git checkout -b feature/nova-funcionalidade

# Desenvolver...
# Fazer commits com mensagens padronizadas
git add .
git commit -m "feat: adicionar nova funcionalidade"

# Push para branch remoto
git push origin feature/nova-funcionalidade
```

#### Pull Request
1. Criar PR no GitHub
2. Usar template padrão
3. Aguardar revisão
4. Aprovação necessária
5. Merge automático

#### Deploy
- **Develop**: Deploy automático para preview
- **Main**: Deploy automático para produção

## 📝 Convenção de Commits

### Tipo de Commit
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação/CSS
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Build/dependências
- `i18n`: Implementação de internacionalização

### Formato
```
tipo: descrição curta

descrição detalhada se necessário

closes #(issue)
```

### Exemplo de Commits para i18n
```bash
# Adicionar nova tradução
git add src/locales/pt-BR.json src/locales/en-US.json
git commit -m "i18n: adicionar traduções para navegação e rotas"

# Implementar componente de navegação
git add src/components/navigation/
git commit -m "i18n: implementar LocalizedNavigation component"

# Configurar SEO multilíngue
git add src/components/SEO/
git commit -m "i18n: implementar I18nSEO component"
```

## 🧪 Testes

### Executar Testes
```bash
# Testes unitários
npm run test

# Testes com UI
npm run test:ui

# Testes de i18n
npm run test:i18n

# Lint
npm run lint

# Build
npm run build
```

### Testes Manuais
1. Testar todas as telas
2. Validar responsividade
3. Testar navegação
4. Verificar performance

## 🚀 Deploy

### Automático
- **PR**: Deploy preview automático
- **Main**: Deploy produção automático

### Manual
```bash
# Deploy para produção
npx vercel --prod

# Deploy preview
npx vercel
```

## 📊 CI/CD Pipeline

### Jobs
1. **Test & Lint**: Testes automatizados
2. **Security**: Auditoria de segurança
3. **Performance**: Análise de performance
4. **Deploy**: Deploy automático

### Status Checks
- ✅ Testes passam
- ✅ Build funciona
- ✅ Lint sem erros
- ✅ Security audit OK
- ✅ Performance aceitável

## 🔧 Configuração

### Environment Variables
```bash
# Desenvolvimento
cp .env.example .env.local

# Produção (Vercel)
VERCEL_TOKEN=xxx
VERCEL_ORG_ID=xxx
VERCEL_PROJECT_ID=xxx
```

### Vercel
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Node Version: 20.x

## 🎨 Design System

### Componentes
- **KPICard**: Cards com métricas
- **Card**: Container genérico
- **Button**: Botões estilizados
- **Badge**: Tags e status
- **Tabs**: Navegação por abas

### Tokens
- Cores em `src/styles/tokens.css`
- Tipografia Inter/Montserrat
- Espaçamento consistente

## 📱 Estrutura de Telas

### Principais
- **Dashboard**: Visão geral
- **Metrics**: Indicadores detalhados
- **DecisionPanel**: Análise inteligente
- **Analytics**: Insights avançados

### Secundárias
- **Reports**: Relatórios
- **Settings**: Configurações
- **Profile**: Perfil do usuário

## 🔍 Debug

### Logs Vercel
```bash
# Ver logs de deploy
npx vercel logs

# Verificar build
npx vercel inspect
```

### Local
```bash
# Dev server
npm run dev

# Preview build
npm run build && npm run preview
```

## 📈 Performance

### Métricas
- Lighthouse score > 80
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

### Otimizações
- Lazy loading de componentes
- Code splitting por rota
- Otimização de imagens
- Cache estratégico

## 🔒 Segurança

### Auditoria
```bash
# Verificar vulnerabilidades
npm audit

# Corrigir automaticamente
npm audit fix
```

### Headers
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Content Security Policy

## 📞 Suporte

### Issues
1. Criar issue no GitHub
2. Descrever problema detalhadamente
3. Adicionar screenshots se necessário
4. Informar ambiente/testes realizados

### Contato
- GitHub Issues
- Email da equipe
- Slack do projeto
