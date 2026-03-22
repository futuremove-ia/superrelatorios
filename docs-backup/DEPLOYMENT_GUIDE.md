# Guia de Deploy - SuperRelatórios

## Overview

Deploy automatizado e escalável para ambiente de produção com CI/CD, monitoramento e rollback automático.

## 🚀 Arquitetura de Deploy

### Ambientes

| Ambiente | URL | Propósito | Branch |
|-----------|-----|-----------|--------|
| **Development** | dev.superrelatorios.com | Desenvolvimento e testes | `develop` |
| **Staging** | staging.superrelatorios.com | Homologação final | `main` |
| **Production** | superrelatorios.com | Produção oficial | `main` (tagged) |

### Stack Tecnológico

- **Frontend:** Vite + React 18 + TypeScript
- **Backend:** Supabase (PostgreSQL + Auth + Storage)
- **Hosting:** Vercel (Frontend) + Supabase (Backend)
- **CI/CD:** GitHub Actions
- **Monitoring:** Vercel Analytics + Supabase Logs
- **CDN:** Vercel Edge Network
- **DNS:** Cloudflare

## 📋 Pré-requisitos

### 1. Configuração Inicial

```bash
# Clone o repositório
git clone https://github.com/futuremove-ia/superrelatorios.git
cd superrelatorios

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env.local
```

### 2. Variáveis de Ambiente

```bash
# .env.local
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GTM_ID=your_google_tag_manager_id
VITE_SENTRY_DSN=your_sentry_dsn
VITE_API_BASE_URL=https://api.superrelatorios.com/v1
```

### 3. Configuração do Supabase

```bash
# Instale CLI do Supabase
npm install -g supabase

# Faça login
supabase login

# Link com projeto
supabase link --project-ref your-project-ref

# Aplique migrations
supabase db push
supabase db seed
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
  VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Type checking
        run: npm run type-check
      
      - name: Linting
        run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build application
        run: npm run build
      
      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: build-files
          path: dist/

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-files
          path: dist/
      
      - name: Deploy to Vercel Staging
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    if: startsWith(github.ref, 'refs/tags/')
    steps:
      - uses: actions/checkout@v4
      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: build-files
          path: dist/
      
      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod --scope production'
      
      - name: Notify deployment
        run: |
          curl -X POST "https://api.slack.com/webhooks/YOUR_SLACK_WEBHOOK" \
          -H 'Content-type: application/json' \
          --data '{"text":"🚀 SuperRelatórios deployed to production!"}'
```

## 🌐 Deploy Manual

### 1. Deploy de Desenvolvimento

```bash
# Instale Vercel CLI
npm install -g vercel

# Faça login
vercel login

# Deploy para desenvolvimento
vercel --env VERCEL_ENV=development
```

### 2. Deploy de Staging

```bash
# Build da aplicação
npm run build

# Deploy para staging
vercel --prod --env VERCEL_ENV=staging
```

### 3. Deploy de Produção

```bash
# Crie tag de release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Deploy automático via GitHub Actions
# Ou manual:
vercel --prod --env VERCEL_ENV=production
```

## 📊 Monitoramento e Logging

### 1. Configuração do Sentry

```typescript
// src/sentry.ts
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
});
```

### 2. Analytics Vercel

```typescript
// src/analytics.ts
import { Analytics } from '@vercel/analytics/react';

export function App() {
  return (
    <>
      <Analytics />
      {/* Rest of app */}
    </>
  );
}
```

### 3. Performance Monitoring

```typescript
// src/performance.ts
export const reportWebVitals = (onPerfEntry?: (metric: any) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
```

## 🔒 Segurança

### 1. Environment Variables

```bash
# .env.production (seguro)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_GTM_ID=GTM-XXXXXXX
VITE_SENTRY_DSN=https://your-sentry-dsn
```

### 2. CORS Configuration

```sql
-- Supabase CORS
ALTER TABLE auth.users
ADD CONSTRAINT email_check 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

### 3. Rate Limiting

```typescript
// src/middleware.ts
export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for');
  
  // Implement rate limiting logic
  const rateLimit = checkRateLimit(ip);
  
  if (!rateLimit.allowed) {
    return new Response('Too Many Requests', { status: 429 });
  }
  
  return NextResponse.next();
}
```

## 🚀 Rollback Automático

### 1. GitHub Actions Rollback

```yaml
# .github/workflows/rollback.yml
name: Emergency Rollback

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Version to rollback to'
        required: true

jobs:
  rollback:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.event.inputs.version }}
      
      - name: Deploy rollback version
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 2. Script de Rollback

```bash
#!/bin/bash
# scripts/rollback.sh

VERSION=$1
if [ -z "$VERSION" ]; then
    echo "Usage: ./rollback.sh <version>"
    exit 1
fi

echo "Rolling back to version: $VERSION"

# Checkout da versão
git checkout $VERSION

# Deploy
vercel --prod

# Notificar rollback
curl -X POST "https://api.slack.com/webhooks/YOUR_SLACK_WEBHOOK" \
  -H 'Content-type: application/json' \
  --data "{\"text\":\"🔄 Emergency rollback to version $VERSION completed!\"}"

echo "Rollback completed!"
```

## 📈 Performance Optimization

### 1. Build Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-tabs'],
          charts: ['recharts', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
```

### 2. Cache Strategy

```typescript
// src/cache.ts
export const cacheConfig = {
  // KPIs: 5 minutos
  kpi: { ttl: 300000 },
  
  // Templates: 1 hora
  templates: { ttl: 3600000 },
  
  // Relatórios: 30 minutos
  reports: { ttl: 1800000 },
  
  // Análises: 15 minutos
  analytics: { ttl: 900000 },
};
```

### 3. Image Optimization

```typescript
// src/components/OptimizedImage.tsx
export const OptimizedImage = ({ src, alt, ...props }) => {
  return (
    <picture>
      <source srcSet={`${src}?format=webp`} type="image/webp" />
      <source srcSet={`${src}?format=avif`} type="image/avif" />
      <img
        src={`${src}?format=auto&quality=80`}
        alt={alt}
        loading="lazy"
        {...props}
      />
    </picture>
  );
};
```

## 🔧 Troubleshooting

### Problemas Comuns

#### 1. Build Falhando
```bash
# Limpe cache
npm run clean

# Reinstale dependências
rm -rf node_modules package-lock.json
npm install

# Verifique TypeScript
npm run type-check
```

#### 2. Deploy Lento
```bash
# Verifique bundle size
npm run build --analyze

# Otimize imports
npm run optimize

# Configure cache
vercel env add CACHE_DURATION
```

#### 3. Erros de Runtime
```bash
# Verifique logs
vercel logs

# Debug localmente
npm run dev

# Teste em staging
vercel --prod --env VERCEL_ENV=staging
```

### Health Checks

```bash
# Verifique saúde da aplicação
curl https://superrelatorios.com/api/health

# Verifique status do deploy
vercel ls

# Monitore performance
curl https://vitals.vercel.app/
```

## 📋 Checklist de Deploy

### Pre-Deploy
- [ ] Testes unitários passando
- [ ] Testes E2E passando
- [ ] Build sem erros
- [ ] Type checking OK
- [ ] Linting OK
- [ ] Variáveis de ambiente configuradas
- [ ] Backup do banco de dados
- [ ] Documentação atualizada

### Post-Deploy
- [ ] Verificar funcionamento da aplicação
- [ ] Testar login e autenticação
- [ ] Validar integrações
- [ ] Checar performance
- [ ] Monitorar erros (Sentry)
- [ ] Verificar analytics
- [ ] Notificar equipe
- [ ] Atualizar documentação

### Emergência
- [ ] Identificar causa raiz
- [ ] Executar rollback se necessário
- [ ] Comunicar stakeholders
- [ ] Documentar incidente
- [ ] Implementar prevenção

---

**Deploy automatizado e monitorado para máxima confiabilidade e performance!**
