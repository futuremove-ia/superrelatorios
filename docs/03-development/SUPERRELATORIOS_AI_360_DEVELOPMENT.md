# Guia de Desenvolvimento - SuperRelatórios AI 360

## Overview

Guia completo para desenvolvedores trabalhando no SuperRelatórios AI 360, incluindo setup, estrutura, padrões e melhores práticas.

## 🚀 Setup Rápido

### Pré-requisitos

- Node.js 20+
- npm ou yarn
- Git
- VS Code (recomendado)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/futuremove-ia/superrelatorios.git
cd superrelatorios

# Instale dependências
npm install

# Configure environment variables
cp .env.example .env.local
# Edite .env.local com suas credenciais

# Inicie o desenvolvimento
npm run dev
```

### Environment Variables

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# AI Configuration (PROXIED)
# A GEMINI_API_KEY NÃO deve ser colocada no .env.local do frontend.
# Ela deve ser configurada apenas nas Environment Variables da Vercel para a Edge Function.

# Environment
VITE_ENV=development
```

---

## 📁 Estrutura do Projeto

```
superrelatorios/
├── src/
│   ├── components/          # Componentes UI
│   │   ├── benchmark/      # Componentes de benchmark
│   │   ├── risk/          # Componentes de risco
│   │   ├── strategy/      # Componentes estratégicos
│   │   └── ui/            # Componentes base (shadcn/ui)
│   ├── hooks/              # React hooks
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Services de API
│   ├── types/              # TypeScript types
│   ├── lib/                # Utilitários
│   └── utils/              # Funções auxiliares
├── docs/                   # Documentação
├── tests/                  # Testes
└── public/                 # Assets públicos
```

---

## 🏗️ Arquitetura

### Frontend Stack

- **React 18.3+** com TypeScript
- **Vite** - Build tool
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling
- **TanStack Query** - State management
- **React Router** - Routing
- **i18next** - Internacionalização

### Backend Stack

- **Supabase** - Backend as a Service
  - PostgreSQL Database
  - Authentication
  - Realtime
  - Storage
  - Edge Functions

### Database Schema

```sql
-- Tabelas principais
kpi_library                -- Biblioteca de KPIs
organization_kpis          -- KPIs das empresas
organization_benchmarks    -- Metas internas
market_benchmarks         -- Benchmarks de mercado
risk_registry             -- Registro de riscos
risk_mitigations          -- Planos de mitigação
```

---

## 🔧 Services Architecture

### Services Layer

```typescript
// src/services/
├── kpiLibraryService.ts      # Gestão de KPIs
├── organizationKPIService.ts  # KPIs das empresas
├── benchmarkService.ts       # Gestão de benchmarks
├── riskService.ts           # Gestão de riscos
├── strategyLibraryService.ts # Biblioteca estratégica
└── index.ts                 # Export centralizado
```

### Hooks Layer

```typescript
// src/hooks/
├── useKPIs.ts               # Hooks para KPIs
├── useOrganizationKPIs.ts   # Hooks para KPIs das empresas
├── useBenchmarks.ts         # Hooks para benchmarks
├── useRisks.ts             # Hooks para riscos
└── index.ts                # Export centralizado
```

### Component Layer

```typescript
// src/components/
├── benchmark/
│   ├── BenchmarkCard.tsx
│   └── index.ts
├── risk/
│   ├── RiskMatrix.tsx
│   ├── RiskList.tsx
│   └── index.ts
└── strategy/
    ├── ChallengeCard.tsx
    ├── GoalTracker.tsx
    ├── LeverCard.tsx
    └── index.ts
```

---

## 📋 Padrões de Código

### TypeScript Patterns

```typescript
// Service Pattern
export class KPILibraryService {
  private supabase = createClient(url, key)

  async getKPIs(): Promise<KPI[]> {
    const { data, error } = await this.supabase
      .from('kpi_library')
      .select('*')

    if (error) throw new Error(error.message)
    return kpiSchema.array().parse(data)
  }
}

// Hook Pattern
export function useKPIs() {
  return useQuery({
    queryKey: ['kpis'],
    queryFn: () => kpiLibraryService.getKPIs(),
    staleTime: 5 * 60 * 1000
  })
}

// Component Pattern
interface KPICardProps {
  title: string
  value: number
  benchmark?: number
}

export function KPICard({ title, value, benchmark }: KPICardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  )
}
```

### Error Handling

```typescript
// Service Error Handling
try {
  const result = await service.method()
  return result
} catch (error) {
  console.error('Service error:', error)
  throw new Error(`Failed to execute method: ${error.message}`)
}

// Component Error Handling
const { data, error, isLoading } = useKPIs()

if (error) {
  return <ErrorMessage error={error} />
}

if (isLoading) {
  return <LoadingSpinner />
}
```

### Validation Patterns

```typescript
// Zod Schema Validation
const kpiSchema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  title: z.string(),
  unit: z.string(),
  domain: z.enum([
    "finance",
    "sales",
    "marketing",
    "operations",
    "hr",
    "strategy",
  ]),
});

// Form Validation
const formSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  value: z.number().min(0, "Valor deve ser positivo"),
});
```

---

## 🎨 Component Development

### Component Structure

```typescript
// Component Template
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ComponentProps {
  prop1: string
  prop2?: number
  className?: string
}

export function Component({ prop1, prop2, className }: ComponentProps) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle>{prop1}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  )
}
```

### UI Components (shadcn/ui)

```typescript
// Using shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
```

---

## 🔄 State Management

### TanStack Query Patterns

```typescript
// Query Keys
export const KPI_KEYS = {
  all: ["kpis"] as const,
  byId: (id: string) => ["kpis", id] as const,
  byDomain: (domain: string) => ["kpis", "domain", domain] as const,
};

// Query Hook
export function useKPIs() {
  return useQuery({
    queryKey: KPI_KEYS.all,
    queryFn: () => kpiLibraryService.getKPIs(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

// Mutation Hook
export function useCreateKPI() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (kpi: Partial<KPI>) => kpiLibraryService.createKPI(kpi),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: KPI_KEYS.all });
      toast.success("KPI criado com sucesso!");
    },
    onError: (error) => {
      toast.error("Erro ao criar KPI");
      console.error("Create KPI error:", error);
    },
  });
}
```

### Context Patterns

```typescript
// Auth Context
interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signOut: () => Promise<void>
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Context implementation
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
```

---

## 🌍 Internacionalização

### i18n Setup

```typescript
// i18n configuration
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        "kpi.title": "KPIs",
        "risk.title": "Riscos",
        "benchmark.title": "Benchmarks",
      },
    },
    en: {
      translation: {
        "kpi.title": "KPIs",
        "risk.title": "Risks",
        "benchmark.title": "Benchmarks",
      },
    },
  },
  lng: "pt",
  fallbackLng: "pt",
});
```

### Using Translations

```typescript
import { useTranslation } from 'react-i18next'

export function Component() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('kpi.title')}</h1>
      <p>{t('common.description')}</p>
    </div>
  )
}
```

---

## 🧪 Testing

### Unit Tests

```typescript
// Component Test
import { render, screen } from '@testing-library/react'
import { KPICard } from '@/components/kpi/KPICard'

describe('KPICard', () => {
  it('renders KPI title and value', () => {
    render(<KPICard title="Revenue" value={100000} />)

    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('R$ 100.000')).toBeInTheDocument()
  })
})

// Service Test
import { kpiLibraryService } from '@/services/kpiLibraryService'

describe('KPILibraryService', () => {
  it('should fetch KPIs successfully', async () => {
    const kpis = await kpiLibraryService.getKPIs()

    expect(kpis).toBeInstanceOf(Array)
    expect(kpis[0]).toHaveProperty('id')
    expect(kpis[0]).toHaveProperty('title')
  })
})
```

### E2E Tests

```typescript
// Playwright Test
import { test, expect } from "@playwright/test";

test("should create and view KPI", async ({ page }) => {
  await page.goto("/kpis");

  await page.click('[data-testid="create-kpi-button"]');
  await page.fill('[data-testid="kpi-title"]', "Test KPI");
  await page.click('[data-testid="save-button"]');

  await expect(page.locator('[data-testid="kpi-list"]')).toContainText(
    "Test KPI",
  );
});
```

---

## 🚀 Deploy

### Build Process

```bash
# Build for production
npm run build

# Preview build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test
npm run test:e2e
```

### Environment Configuration

```bash
# Production
VITE_ENV=production
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-production-key

# Staging
VITE_ENV=staging
VITE_SUPABASE_URL=https://your-staging.supabase.co
VITE_SUPABASE_ANON_KEY=your-staging-key
```

---

## 🔧 Debugging

### Common Issues

1. **Supabase Connection**

   ```typescript
   // Check connection
   const { data, error } = await supabase.from("kpis").select("count");
   if (error) console.error("Supabase error:", error);
   ```

2. **Type Errors**

   ```typescript
   // Use type guards
   const isKPI = (obj: any): obj is KPI => {
     return kpiSchema.safeParse(obj).success;
   };
   ```

3. **Performance Issues**
   ```typescript
   // Use React.memo
   export const KPICard = React.memo(({ title, value }: KPICardProps) => {
     // Component implementation
   });
   ```

---

## 📚 Resources

### Documentation

- [API Documentation](../04-api/SUPERRELATORIOS_AI_360_API.md)
- [Database Schema](../../SUPERRELATORIOS_AI_360.sql)
- [Component Library](https://ui.shadcn.com)
- [Supabase Docs](https://supabase.com/docs)

### Tools

- [VS Code Extensions](https://marketplace.visualstudio.com/)
- [React DevTools](https://chrome.google.com/webstore/)
- [Supabase Dashboard](https://app.supabase.com)

### Community

- [GitHub Discussions](https://github.com/futuremove-ia/superrelatorios/discussions)
- [Discord Server](https://discord.gg/superrelatorios)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/superrelatorios)

---

## 🤝 Contributing

### Development Workflow

1. Fork o repositório
2. Crie branch feature: `git checkout -b feature/new-feature`
3. Faça as mudanças
4. Teste: `npm run test`
5. Commit: `git commit -m "feat: add new feature"`
6. Push: `git push origin feature/new-feature`
7. Pull Request

### Code Review Checklist

- [ ] Código segue padrões do projeto
- [ ] Testes passam
- [ ] Documentação atualizada
- [ ] TypeScript sem erros
- [ ] Componentes acessíveis
- [ ] Performance otimizada

### Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create release tag
4. Deploy to production
5. Update documentation
