# 🚀 Guia de Deploy SuperRelatórios

## Visão Geral

Guia completo de deployment automatizado e escalável para ambiente de produção com CI/CD, monitoramento, rollback automático e SRE practices.

## Contexto e Importância

Este guia é crucial porque:
- **Garante deploy seguro** e consistente
- **Minimiza downtime** e risco de falhas
- **Facilita escalabilidade** e crescimento
- **Automatiza processos** manuais
- **Fornece resiliência** e recuperação rápida

## Arquitetura de Deploy

### 🎯 Ambientes

#### Estrutura de Ambientes
```
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT                               │
├─────────────────────────────────────────────────────────────┤
│  • Branch: develop                                          │
│  • URL: dev.superrelatorios.com                           │
│  • Propósito: Desenvolvimento e testes                     │
│  • CI/CD: Deploy automático a cada push                    │
│  • Database: Dev (isolado)                                   │
│  • Features: Todas as features em desenvolvimento         │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    STAGING                                    │
├─────────────────────────────────────────────────────────────┤
│  • Branch: main (merge de develop)                         │
│  • URL: staging.superrelatorios.com                      │
│  • Propósito: Homologação final e QA                       │
│  • CI/CD: Deploy automático a cada merge                    │
│  • Database: Staging (clone de prod)                       │
│  • Features: Features completas para validação             │
└─────────────────────────────────────────────────────────────┘
                              │
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION                                 │
├─────────────────────────────────────────────────────────────┤
│  • Branch: main (tags de release)                         │
│  • URL: superrelatorios.com                               │
│  • Propósito: Produção oficial                             │
│  • CI/CD: Deploy manual com aprovação                      │
│  • Database: Production (backup diário)                   │
│  • Features: Features validadas e estáveis               │
└─────────────────────────────────────────────────────────────┘
```

#### Configuração de Ambientes
```typescript
// Configuração de ambientes
interface EnvironmentConfig {
  name: string;
  url: string;
  branch: string;
  deployTrigger: 'push' | 'merge' | 'manual' | 'tag';
  database: {
    type: 'postgresql';
    host: string;
    database: string;
    ssl: boolean;
    poolSize: number;
  };
  features: {
    analytics: boolean;
    monitoring: boolean;
    debugging: boolean;
    betaFeatures: boolean;
  };
  security: {
    ssl: boolean;
    cors: string[];
    rateLimit: {
      requests: number;
      window: number;
    };
  };
}

const environments: Record<string, EnvironmentConfig> = {
  development: {
    name: 'Development',
    url: 'https://dev.superrelatorios.com',
    branch: 'develop',
    deployTrigger: 'push',
    database: {
      type: 'postgresql',
      host: 'dev-db.supabase.co',
      database: 'dev_superrelatorios',
      ssl: true,
      poolSize: 5
    },
    features: {
      analytics: false,
      monitoring: true,
      debugging: true,
      betaFeatures: true
    },
    security: {
      ssl: true,
      cors: ['http://localhost:3000', 'https://dev.superrelatorios.com'],
      rateLimit: {
        requests: 1000,
        window: 60000
      }
    }
  },
  
  staging: {
    name: 'Staging',
    url: 'https://staging.superrelatorios.com',
    branch: 'main',
    deployTrigger: 'merge',
    database: {
      type: 'postgresql',
      host: 'staging-db.supabase.co',
      database: 'staging_superrelatorios',
      ssl: true,
      poolSize: 10
    },
    features: {
      analytics: true,
      monitoring: true,
      debugging: false,
      betaFeatures: true
    },
    security: {
      ssl: true,
      cors: ['https://staging.superrelatorios.com'],
      rateLimit: {
        requests: 500,
        window: 60000
      }
    }
  },
  
  production: {
    name: 'Production',
    url: 'https://superrelatorios.com',
    branch: 'main',
    deployTrigger: 'manual',
    database: {
      type: 'postgresql',
      host: 'db.supabase.co',
      database: 'superrelatorios',
      ssl: true,
      poolSize: 20
    },
    features: {
      analytics: true,
      monitoring: true,
      debugging: false,
      betaFeatures: false
    },
    security: {
      ssl: true,
      cors: ['https://superrelatorios.com'],
      rateLimit: {
        requests: 100,
        window: 60000
      }
    }
  }
};
```

## Stack Tecnológico

### 🛠️ Tecnologias de Deploy

#### Frontend Stack
```typescript
// Frontend deployment configuration
interface FrontendConfig {
  framework: 'React 18';
  language: 'TypeScript 5';
  buildTool: 'Vite 5';
  hosting: 'Vercel';
  
  build: {
    target: 'es2022';
    minify: true;
    sourcemap: false;
    treeshaking: true;
    chunking: {
      strategy: 'automatic';
      maxChunks: 20;
      minChunkSize: 20000;
    };
  };
  
  optimization: {
    bundleAnalysis: true;
    compression: true;
    caching: {
      browserCaching: '1y';
      cdnCaching: '30d';
    };
  };
}
```

#### Backend Stack
```typescript
// Backend deployment configuration
interface BackendConfig {
  database: 'Supabase (PostgreSQL 15)';
  auth: 'Supabase Auth';
  storage: 'Supabase Storage';
  functions: 'Supabase Edge Functions';
  
  database: {
    version: '15';
    extensions: ['uuid-ossp', 'pgcrypto', 'pg_stat_statements'];
    optimization: {
      indexing: 'automatic';
      vacuum: 'weekly';
      analyze: 'daily';
    };
  };
  
  security: {
    rowLevelSecurity: true;
    encryption: 'at-rest';
    backup: {
      frequency: 'daily';
      retention: '30d';
      pointInTimeRecovery: true;
    };
  };
}
```

#### CI/CD Stack
```typescript
// CI/CD configuration
interface CICDConfig {
  platform: 'GitHub Actions';
  runners: 'ubuntu-latest';
  
  pipeline: {
    triggers: ['push', 'pull_request', 'workflow_dispatch'];
    concurrency: 'deploy';
    timeout: '30m';
    
    stages: [
      'build',
      'test',
      'security-scan',
      'deploy-staging',
      'e2e-tests',
      'deploy-production'
    ];
  };
  
  artifacts: {
    retention: '30d';
    compression: true;
    upload: {
      build: true;
      coverage: true;
      reports: true;
    };
  };
}
```

## Pré-requisitos

### 🔧 Configuração Inicial

#### 1. Setup Local
```bash
# Clone do repositório
git clone https://github.com/your-org/superrelatorios.git
cd superrelatorios

# Instalação de dependências
npm install

# Configuração de ambiente
cp .env.example .env.local
# Editar .env.local com suas configurações

# Verificação do setup
npm run dev
# Deverá iniciar o servidor de desenvolvimento
```

#### 2. Configuração de Variáveis de Ambiente
```bash
# .env.example
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/superrelatorios
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-key

# Authentication
JWT_SECRET=your-super-secret-jwt-key
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-domain.com

# External Services
STRIPE_SECRET_KEY=sk_test_your-stripe-key
STRIPE_WEBHOOK_SECRET=whsec_your-webhook-secret
SENDGRID_API_KEY=SG.your-sendgrid-key

# Monitoring
SENTRY_DSN=https://your-sentry-dsn
VERCEL_ANALYTICS_ID=your-vercel-analytics-id

# Feature Flags
ENABLE_ANALYTICS=true
ENABLE_BETA_FEATURES=false
ENABLE_DEBUG_MODE=false
```

#### 3. Configuração de Secrets
```bash
# GitHub Secrets
gh secret set DATABASE_URL --body "postgresql://..."
gh secret set SUPABASE_URL --body "https://..."
gh secret set SUPABASE_ANON_KEY --body "your-anon-key"
gh secret set JWT_SECRET --body "your-jwt-secret"
gh secret set STRIPE_SECRET_KEY --body "sk_test_..."
gh secret set SENTRY_DSN --body "https://..."

# Vercel Environment Variables
vercel env add DATABASE_URL
vercel env add SUPABASE_URL
vercel env add JWT_SECRET
vercel env add STRIPE_SECRET_KEY
```

## CI/CD Pipeline

### 🔄 GitHub Actions Workflow

#### Pipeline Completo
```yaml
# .github/workflows/deploy.yml
name: Deploy SuperRelatórios

on:
  push:
    branches: [develop, main]
  pull_request:
    branches: [main]
  workflow_dispatch:
    inputs:
      environment:
        description: 'Environment to deploy to'
        required: true
        default: 'staging'
        type: choice
        options:
        - staging
        - production

env:
  NODE_VERSION: '20'
  CACHE_VERSION: 'v1'

jobs:
  build:
    name: Build and Test
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run linting
        run: npm run lint
        
      - name: Run type checking
        run: npm run type-check
        
      - name: Run unit tests
        run: npm run test:unit
        
      - name: Build application
        run: npm run build
        
      - name: Upload build artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/
          retention-days: 1

  security-scan:
    name: Security Scan
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Run security audit
        run: npm audit --audit-level high
        
      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
          
      - name: Run CodeQL Analysis
        uses: github/codeql-action/init@v2
        with:
          languages: javascript
          
      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v2

  deploy-staging:
    name: Deploy to Staging
    runs-on: ubuntu-latest
    needs: [build, security-scan]
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
          
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          
      - name: Run E2E tests
        run: npm run test:e2e:staging
        
      - name: Run performance tests
        run: npm run test:performance:staging

  deploy-production:
    name: Deploy to Production
    runs-on: ubuntu-latest
    needs: [build, security-scan]
    if: github.ref == 'refs/heads/main' && github.event_name == 'workflow_dispatch'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Download build artifacts
        uses: actions/download-artifact@v3
        with:
          name: build
          
      - name: Create deployment tag
        run: |
          TAG="v$(date +%Y%m%d-%H%M%S)"
          echo "TAG=$TAG" >> $GITHUB_ENV
          git tag $TAG
          git push origin $TAG
          
      - name: Deploy to Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          
      - name: Run smoke tests
        run: npm run test:smoke:production
        
      - name: Update deployment status
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `🚀 Production Deploy - ${{ env.TAG }}`,
              body: 'Deployment completed successfully!',
              labels: ['deployment', 'production']
            });

  rollback:
    name: Rollback Production
    runs-on: ubuntu-latest
    if: failure() && needs.deploy-production.result == 'failure'
    needs: deploy-production
    
    steps:
      - name: Rollback Vercel
        uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--rollback'
          
      - name: Notify rollback
        uses: actions/github-script@v6
        with:
          script: |
            github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: '🔄 Production Rollback',
              body: 'Automatic rollback triggered due to deployment failure',
              labels: ['deployment', 'rollback', 'incident']
            });
```

## Processo de Deploy

### 🚀 Deploy Manual (Produção)

#### 1. Preparação
```bash
# Verificar branch atual
git branch
# Deve estar em main

# Atualizar código
git pull origin main

# Verificar status
git status
# Não deve ter arquivos pendentes

# Verificar última tag
git tag --sort=-version:refname | head -1
# Anotar última versão
```

#### 2. Testes Locais
```bash
# Rodar todos os testes
npm run test:all

# Verificar build
npm run build

# Testar localmente
npm run dev
# Verificar se tudo funciona
```

#### 3. Deploy via GitHub Actions
```bash
# Iniciar workflow manual
gh workflow run deploy.yml --field environment=production

# Ou via interface web:
# 1. Acesse: https://github.com/your-org/superrelatorios/actions
# 2. Clique em "Deploy SuperRelatórios"
# 3. Selecione "Production"
# 4. Clique "Run workflow"
```

#### 4. Monitoramento
```bash
# Verificar status do deploy
gh run list --workflow="Deploy SuperRelatórios"

# Verificar logs em tempo real
gh run view --log --follow <run-id>

# Verificar deploy no Vercel
vercel ls
```

### 🔄 Deploy Automático (Staging)

#### Processo Automático
```typescript
// Deploy automático para staging
interface AutoDeployConfig {
  trigger: 'push to develop';
  conditions: [
    'All tests passing',
    'Security scan passing',
    'Build successful'
  ];
  
  process: [
    'Build application',
    'Run security scan',
    'Deploy to staging',
    'Run E2E tests',
    'Performance validation'
  ];
  
  notifications: {
    success: 'Slack #deployments',
    failure: 'Slack #alerts + PagerDuty'
  };
}
```

## Monitoramento e Observabilidade

### 📊 Métricas de Deploy

#### 1. Deploy Metrics
```typescript
// Métricas de deploy
interface DeployMetrics {
  frequency: {
    daily: number;           // Deploys por dia
    weekly: number;          // Deploys por semana
    monthly: number;         // Deploys por mês
  };
  
  duration: {
    average: number;        // Tempo médio de deploy
    p95: number;           // Tempo 95th percentile
    max: number;           // Tempo máximo
  };
  
  success: {
    rate: number;           // Taxa de sucesso (%)
    failures: number;       // Falhas no período
    rollbackRate: number;    // Taxa de rollback (%)
  };
  
  impact: {
    downtime: number;       // Downtime em minutos
    errorRate: number;      // Taxa de erro pós-deploy
    performanceImpact: number; // Impacto na performance
  };
}
```

#### 2. Health Checks
```typescript
// Health check endpoints
interface HealthCheck {
  endpoint: string;
  checks: {
    database: 'connectivity';
    cache: 'connectivity';
    external_apis: 'connectivity';
    disk_space: 'available';
    memory: 'available';
    cpu: 'available';
  };
  
  responses: {
    healthy: 200;
    degraded: 200;
    unhealthy: 503;
  };
  
  monitoring: {
    interval: '30s';
    timeout: '5s';
    retries: 3;
    alerting: true;
  };
}
```

### 📈 Dashboard de Deploy

#### Grafana Dashboard
```typescript
// Dashboard configuration
interface DeployDashboard {
  panels: [
    {
      title: 'Deploy Frequency';
      type: 'stat';
      metrics: ['deploy_count_total'];
      timeRange: '7d';
    },
    {
      title: 'Deploy Duration';
      type: 'graph';
      metrics: ['deploy_duration_seconds'];
      timeRange: '24h';
    },
    {
      title: 'Success Rate';
      type: 'gauge';
      metrics: ['deploy_success_rate'];
      timeRange: '30d';
    },
    {
      title: 'Error Rate';
      type: 'graph';
      metrics: ['error_rate_5m'];
      timeRange: '1h';
    },
    {
      title: 'System Health';
      type: 'table';
      metrics: ['health_status'];
      timeRange: '5m';
    }
  ];
  
  alerts: [
    {
      name: 'Deploy Failure';
      condition: 'deploy_success_rate < 95%';
      severity: 'critical';
      notification: 'slack + pagerduty';
    },
    {
      name: 'High Error Rate';
      condition: 'error_rate_5m > 5%';
      severity: 'warning';
      notification: 'slack';
    },
    {
      name: 'System Unhealthy';
      condition: 'health_status != 200';
      severity: 'critical';
      notification: 'slack + pagerduty';
    }
  ];
}
```

## Rollback e Recuperação

### 🔄 Estratégias de Rollback

#### 1. Automatic Rollback
```typescript
// Automatic rollback configuration
interface RollbackConfig {
  triggers: [
    'Error rate > 5%',
    'Response time > 2s',
    'Health check failure',
    'E2E test failures'
  ];
  
  actions: [
    'Immediate rollback to previous version',
    'Notify team via Slack',
    'Create incident in PagerDuty',
    'Run smoke tests on rollback'
  ];
  
  validation: [
    'Health checks passing',
    'Error rate < 1%',
    'Response time < 500ms',
    'E2E tests passing'
  ];
}
```

#### 2. Manual Rollback
```bash
# Rollback via CLI
vercel rollback --prod

# Rollback via GitHub Actions
gh workflow run rollback.yml

# Rollback via API
curl -X POST https://api.vercel.com/v1/deployments/rollback \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -d '{"deploymentId": "deployment_id"}'
```

#### 3. Blue-Green Deploy
```typescript
// Blue-Green deployment strategy
interface BlueGreenConfig {
  blue: {
    url: 'blue.superrelatorios.com';
    version: 'current';
    traffic: 100;
  };
  
  green: {
    url: 'green.superrelatorios.com';
    version: 'new';
    traffic: 0;
  };
  
  process: [
    'Deploy to green',
    'Run smoke tests on green',
    'Gradually shift traffic',
    'Monitor metrics',
    'Full cutover to green',
    'Decommission blue'
  ];
  
  rollback: {
    instant: true;
    traffic: '100% to blue';
    validation: 'Health checks on blue';
  };
}
```

## Security e Compliance

### 🔒 Security Measures

#### 1. Deploy Security
```typescript
// Security configuration
interface SecurityConfig {
  authentication: {
    mfa: true;
    roleBasedAccess: true;
    sessionTimeout: '8h';
  };
  
  network: {
    ssl: true;
    firewall: true;
    ddosProtection: true;
    ipWhitelist: ['allowed-ips'];
  };
  
  secrets: {
    encryption: 'AES-256';
    rotation: '90d';
    storage: 'HashiCorp Vault';
  };
  
  compliance: {
    gdpr: true;
    lgpd: true;
    ccpa: true;
    audit: 'continuous';
  };
}
```

#### 2. Compliance Checks
```bash
# Security scan
npm audit --audit-level high

# Dependency check
npm ls --depth=0 | grep -v "^npm@" | awk '{print $1 "@" $2}' | xargs npm audit

# OWASP ZAP scan
docker run -t owasp/zap2docker-stable zap-baseline.py -t http://target-url

# Snyk security scan
snyk test --severity-threshold=high

# CodeQL analysis
gh codeql scan
```

## Performance e Otimização

### ⚡ Performance Optimization

#### 1. Build Optimization
```typescript
// Build optimization configuration
interface BuildOptimization {
  bundling: {
    treeshaking: true;
    minification: true;
    compression: true;
    codeSplitting: true;
  };
  
  caching: {
    browserCaching: '1y';
    cdnCaching: '30d';
    serviceWorker: true;
  };
  
  optimization: {
    imageOptimization: true;
    fontOptimization: true;
    cssOptimization: true;
    jsOptimization: true;
  };
}
```

#### 2. Performance Monitoring
```typescript
// Performance monitoring
interface PerformanceMonitoring {
  webVitals: {
    lcp: '2.5s';           // Largest Contentful Paint
    fid: '100ms';          // First Input Delay
    cls: '0.1';           // Cumulative Layout Shift
    fcp: '1.8s';          // First Contentful Paint
    ttfb: '600ms';         // Time to First Byte
  };
  
  api: {
    responseTime: '200ms';
    throughput: '1000 req/s';
    errorRate: '1%';
    availability: '99.9%';
  };
  
  infrastructure: {
    cpu: '70%';
    memory: '80%';
    disk: '85%';
    network: '60%';
  };
}
```

## Troubleshooting

### 🔧 Common Issues

#### 1. Build Failures
```bash
# Clear cache
npm run clean
rm -rf node_modules package-lock.json
npm install

# Check dependencies
npm outdated
npm audit

# Verify TypeScript
npm run type-check

# Verify ESLint
npm run lint
```

#### 2. Deploy Failures
```bash
# Check Vercel logs
vercel logs

# Check GitHub Actions logs
gh run list --workflow="Deploy SuperRelatórios"
gh run view <run-id>

# Check environment variables
vercel env ls

# Check domain configuration
vercel domains ls
```

#### 3. Runtime Issues
```bash
# Check application logs
vercel logs --follow

# Check database connection
npm run db:check

# Check external services
npm run health-check

# Check performance
npm run performance-check
```

## Melhores Práticas

### 🎯 Best Practices

#### 1. Deploy Practices
- **Test before deploy** - Sempre rodar testes completos
- **Incremental deploys** - Pequenas mudanças frequentes
- **Rollback ready** - Sempre ter plano de rollback
- **Monitor continuously** - Observar métricas em tempo real
- **Document everything** - Manter logs detalhados

#### 2. Security Practices
- **Principle of least privilege** - Mínimo de permissões necessárias
- **Regular updates** - Manter dependências atualizadas
- **Security scans** - Scans regulares de vulnerabilidades
- **Secrets management** - Gerenciamento seguro de secrets
- **Compliance checks** - Verificação regular de compliance

#### 3. Performance Practices
- **Monitor metrics** - Monitorar métricas de performance
- **Optimize continuously** - Otimização contínua
- **Cache strategically** - Cache estratégico
- **Lazy loading** - Carregamento preguiçoso
- **Bundle optimization** - Otimização de bundle

## Considerações Importantes

### 🔄 Evolução Contínua

#### Processo de Melhoria
1. **Weekly reviews** - Revisão semanal de deploys
2. **Monthly metrics** - Análise mensal de métricas
3. **Quarterly audits** - Auditoria trimestral de processos
4. **Annual planning** - Planejamento anual de melhorias

#### Innovation Pipeline
- **New technologies** - Avaliação de novas tecnologias
- **Process automation** - Automação de processos manuais
- **Performance optimization** - Otimização contínua de performance
- **Security enhancements** - Melhorias de segurança

---

## Recursos Relacionados

### 📚 Documentação Complementar
- **[Performance Monitoring](./02-performance-monitoring.md)** - Monitoramento avançado
- **[Hierarchy Execution](./03-hierarchy-execution.md)** - Processos organizacionais
- **[API Reference](../04-api/01-api-reference.md)** - Documentação de APIs
- **[User Guide](../05-user-guides/02-complete-user-guide.md)** - Guia do usuário

### 🔗 Ferramentas e Recursos
- **Vercel Dashboard** - Monitoramento de deploys
- **GitHub Actions** - CI/CD pipeline
- **Grafana** - Métricas e dashboards
- **PagerDuty** - Alertas e incidentes

---

*Última atualização: 22/03/2026*  
*Versão: 2.0*  
*Status: Active*  
*Maintainer: DevOps Team SuperRelatórios*
