# 🤝 Guidelines de Contribuição SuperRelatórios

## Visão Geral

Este documento define as diretrizes, processos e padrões para contribuições ao projeto SuperRelatórios, garantindo qualidade, consistência e colaboração efetiva entre todos os membros da equipe e a comunidade.

## Contexto e Importância

As guidelines são cruciais porque:
- **Garantem qualidade** consistente em todo o código
- **Facilitam onboarding** de novos contribuidores
- **Padronizam processos** e práticas de desenvolvimento
- **Melhoram colaboração** e comunicação
- **Reduzem conflitos** e retrabalho

## Processo de Contribuição

### 🎯 Fluxo de Trabalho

#### 1. Setup Inicial
```bash
# Clone do repositório
git clone https://github.com/your-org/superrelatorios.git
cd superrelatorios

# Instalação de dependências
npm install

# Configuração de ambiente
cp .env.example .env.local
# Editar .env.local com suas configurações

# Setup de hooks
npm run setup:hooks

# Verificação do setup
npm run dev
# Deverá iniciar o servidor de desenvolvimento
```

#### 2. Branch Strategy
```bash
# Branches principais
main          # Produção - protegido
develop       # Desenvolvimento - integrado
feature/*     # Features novas
bugfix/*      # Correções de bugs
hotfix/*      # Correções urgentes
release/*     # Preparação de release

# Criação de branch de feature
git checkout develop
git pull origin develop
git checkout -b feature/nome-da-feature

# Criação de branch de bugfix
git checkout develop
git pull origin develop
git checkout -b bugfix/descricao-do-bug
```

#### 3. Desenvolvimento
```typescript
// Exemplo de estrutura de código
// src/components/MetricsCard/MetricsCard.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { KPIValue } from '@/domain/metrics/value-objects/KPIValue';

interface MetricsCardProps {
  title: string;
  value: KPIValue;
  trend?: 'up' | 'down' | 'stable';
  className?: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  trend,
  className
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      case 'stable': return '→';
      default: return '';
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {value.value} {value.unit}
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm">
              {getTrendIcon(trend)}
            </span>
            <span className={`text-sm ${getStatusColor(value.getStatus())}`}>
              {value.getStatus()}
            </span>
          </div>
        </div>
        {value.previousValue && (
          <div className="mt-1 text-xs text-gray-500">
            Anterior: {value.previousValue} {value.unit}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
```

#### 4. Testes
```typescript
// src/components/MetricsCard/MetricsCard.test.tsx
import { render, screen } from '@testing-library/react';
import { MetricsCard } from './MetricsCard';
import { KPIValue } from '@/domain/metrics/value-objects/KPIValue';

describe('MetricsCard', () => {
  const mockKPIValue = KPIValue.create({
    value: 6.5,
    unit: 'meses',
    threshold: { critical: 1, warning: 3, good: 6 },
    trend: 'stable'
  }).getValue();

  it('should render correctly', () => {
    render(
      <MetricsCard
        title="Runway"
        value={mockKPIValue}
        trend="up"
      />
    );

    expect(screen.getByText('Runway')).toBeInTheDocument();
    expect(screen.getByText('6.5 meses')).toBeInTheDocument();
    expect(screen.getByText('↗️')).toBeInTheDocument();
    expect(screen.getByText('good')).toBeInTheDocument();
  });

  it('should show previous value when available', () => {
    const kpiWithPrevious = KPIValue.create({
      value: 7.0,
      unit: 'meses',
      threshold: { critical: 1, warning: 3, good: 6 },
      trend: 'up',
      previousValue: 6.5
    }).getValue();

    render(
      <MetricsCard
        title="Runway"
        value={kpiWithPrevious}
      />
    );

    expect(screen.getByText('Anterior: 6.5 meses')).toBeInTheDocument();
  });

  it('should apply correct status colors', () => {
    const criticalKPI = KPIValue.create({
      value: 0.5,
      unit: 'meses',
      threshold: { critical: 1, warning: 3, good: 6 },
      trend: 'down'
    }).getValue();

    render(
      <MetricsCard
        title="Runway"
        value={criticalKPI}
      />
    );

    const statusElement = screen.getByText('critical');
    expect(statusElement).toHaveClass('text-red-600');
  });
});
```

#### 5. Commit e Push
```bash
# Adicionar arquivos
git add .

# Commit message seguindo padrão
git commit -m "feat(metrics): add MetricsCard component

- Add responsive MetricsCard component
- Implement status color coding
- Add trend indicators
- Add previous value display
- Include comprehensive tests

Fixes #123"

# Push para branch remoto
git push origin feature/nome-da-feature
```

#### 6. Pull Request
```markdown
## Descrição
Adiciona componente MetricsCard para exibição de KPIs com status visual e tendências.

## Mudanças
- ✅ Componente MetricsCard responsivo
- ✅ Indicadores de status baseados em thresholds
- ✅ Ícones de tendência
- ✅ Exibição de valor anterior
- ✅ Testes unitários completos

## Testes
- ✅ Unit tests passando
- ✅ Integration tests passando
- ✅ E2E tests passando
- ✅ Accessibility tests passando

## Screenshots
[Adicionar screenshots da implementação]

## Checklist
- [ ] Código segue padrões de estilo
- [ ] Testes implementados e passando
- [ ] Documentação atualizada
- [ ] Accessibility validado
- [ ] Performance testada
- [ ] Security review realizado

## Issues Relacionados
Closes #123
```

## Padrões de Código

### 🎯 TypeScript Standards

#### 1. Configuração do TypeScript
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/domain/*": ["./src/domain/*"],
      "@/application/*": ["./src/application/*"],
      "@/infrastructure/*": ["./src/infrastructure/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

#### 2. Interfaces e Types
```typescript
// Preferir interfaces para objetos
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

// Usar types para unions e tipos primitivos
type UserRole = 'admin' | 'manager' | 'analyst' | 'viewer';
type Status = 'pending' | 'in-progress' | 'completed';

// Generic types com constraints
interface Repository<T, ID> {
  findById(id: ID): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: ID): Promise<void>;
}

// Utility types
type PartialUser = Partial<User>;
type UserWithoutId = Omit<User, 'id'>;
type UserWithId = User & { id: string };
```

#### 3. Classes e Construtores
```typescript
// Classes com validação no construtor
export class KPIValue {
  private constructor(
    private readonly value: number,
    private readonly unit: string,
    private readonly threshold: Threshold,
    private readonly trend: Trend
  ) {}

  static create(props: CreateKPIValueProps): Result<KPIValue> {
    // Validações
    if (typeof props.value !== 'number' || isNaN(props.value)) {
      return Result.fail('Value must be a valid number');
    }
    
    if (!props.unit || props.unit.trim() === '') {
      return Result.fail('Unit is required');
    }
    
    return Result.ok(new KPIValue(
      props.value,
      props.unit,
      props.threshold,
      props.trend
    ));
  }

  // Getters para encapsulamento
  get value(): number { return this.value; }
  get unit(): string { return this.unit; }
  get threshold(): Threshold { return this.threshold; }
  get trend(): Trend { return this.trend; }

  // Métodos de negócio
  public getStatus(): Status {
    if (this.value <= this.threshold.critical) return 'critical';
    if (this.value <= this.threshold.warning) return 'warning';
    return 'good';
  }
}
```

#### 4. Functions e Arrow Functions
```typescript
// Arrow functions para callbacks e funções simples
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Named functions para lógica complexa
function calculateRunway(
  cashBalance: number,
  monthlyBurnRate: number
): Result<number> {
  if (monthlyBurnRate <= 0) {
    return Result.fail('Burn rate must be positive');
  }
  
  return Result.ok(cashBalance / monthlyBurnRate);
}

// Higher-order functions
const withErrorHandling = <T extends any[], R>(
  fn: (...args: T) => R
) => {
  return (...args: T): R | null => {
    try {
      return fn(...args);
    } catch (error) {
      console.error('Error in function:', error);
      return null;
    }
  };
};
```

### 🎯 React Standards

#### 1. Component Structure
```typescript
// src/components/ComponentName/ComponentName.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Interface para props
interface ComponentNameProps {
  title: string;
  data: any[];
  onAction?: (item: any) => void;
  className?: string;
}

// Componente principal
export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  data,
  onAction,
  className
}) => {
  // Estado local
  const [isLoading, setIsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Effects
  useEffect(() => {
    // Lógica de efeito
  }, [data]);

  // Callbacks memoizados
  const handleAction = useCallback((item: any) => {
    setSelectedItem(item);
    onAction?.(item);
  }, [onAction]);

  // Render
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Component content */}
      </CardContent>
    </Card>
  );
};

// Export default para lazy loading
export default ComponentName;
```

#### 2. Hooks Personalizados
```typescript
// src/hooks/useMetrics.ts
import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import { GetUnifiedMetricsUseCase } from '@/application/use-cases/GetUnifiedMetricsUseCase';
import { UnifiedMetricsResponse } from '@/application/dto/UnifiedMetricsResponse';

interface UseMetricsOptions {
  domain?: string;
  period?: string;
  autoRefresh?: boolean;
  refreshInterval?: number;
}

export const useMetrics = (options: UseMetricsOptions = {}) => {
  const {
    domain = 'financial',
    period = '2024-03',
    autoRefresh = false,
    refreshInterval = 30000
  } = options;

  const useCase = new GetUnifiedMetricsUseCase();

  const {
    data: metrics,
    isLoading,
    error,
    refetch
  } = useQuery({
    queryKey: ['metrics', domain, period],
    queryFn: () => useCase.execute({ domain, period }),
    enabled: true,
    refetchInterval: autoRefresh ? refreshInterval : false,
    staleTime: 5000
  });

  const refresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    metrics,
    isLoading,
    error,
    refresh,
    isSuccess: !!metrics
  };
};
```

#### 3. Error Boundaries
```typescript
// src/components/ErrorBoundary/ErrorBoundary.tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // Enviar para serviço de logging
    if (process.env.NODE_ENV === 'production') {
      // Sentry.captureException(error);
    }
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Oops! Algo deu errado
            </h1>
            <p className="text-gray-600 mb-4">
              Ocorreu um erro inesperado. Por favor, tente novamente.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Recarregar Página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 🎯 CSS e Styling Standards

#### 1. Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
```

#### 2. Component Styling
```typescript
// src/components/MetricsCard/MetricsCard.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MetricsCardProps {
  title: string;
  value: KPIValue;
  trend?: 'up' | 'down' | 'stable';
  className?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  trend,
  className,
  variant = 'default'
}) => {
  const baseClasses = cn(
    'transition-all duration-200 hover:shadow-md',
    className
  );

  const variantClasses = cn({
    'p-6': variant === 'default',
    'p-4': variant === 'compact',
    'p-8': variant === 'detailed',
  });

  const statusClasses = cn({
    'text-green-600': value.getStatus() === 'good',
    'text-yellow-600': value.getStatus() === 'warning',
    'text-red-600': value.getStatus() === 'critical',
  });

  const trendClasses = cn({
    'text-green-500': trend === 'up',
    'text-red-500': trend === 'down',
    'text-gray-500': trend === 'stable',
  });

  return (
    <Card className={cn(baseClasses, variantClasses)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {value.value} {value.unit}
          </div>
          <div className="flex items-center space-x-1">
            {trend && (
              <span className={cn('text-sm', trendClasses)}>
                {getTrendIcon(trend)}
              </span>
            )}
            <span className={cn('text-sm font-medium', statusClasses)}>
              {value.getStatus()}
            </span>
          </div>
        </div>
        {value.previousValue && variant === 'detailed' && (
          <div className="mt-2 text-xs text-gray-500">
            Anterior: {value.previousValue} {value.unit}
            <span className={cn('ml-1', trendClasses)}>
              ({getChangePercentage(value)})
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Helper functions
const getTrendIcon = (trend: string): string => {
  switch (trend) {
    case 'up': return '↗️';
    case 'down': return '↘️';
    case 'stable': return '→';
    default: return '';
  }
};

const getChangePercentage = (value: KPIValue): string => {
  if (!value.previousValue) return '';
  
  const change = ((value.value - value.previousValue) / value.previousValue) * 100;
  const sign = change >= 0 ? '+' : '';
  
  return `${sign}${change.toFixed(1)}%`;
};
```

## Testes

### 🧪 Testing Standards

#### 1. Unit Tests
```typescript
// src/__tests__/domain/KPIValue.test.ts
import { KPIValue } from '@/domain/metrics/value-objects/KPIValue';
import { Threshold } from '@/domain/metrics/value-objects/Threshold';

describe('KPIValue', () => {
  const validThreshold = Threshold.create({
    critical: 1,
    warning: 3,
    good: 6
  }).getValue();

  describe('create', () => {
    it('should create valid KPIValue', () => {
      const result = KPIValue.create({
        value: 6.5,
        unit: 'meses',
        threshold: validThreshold,
        trend: 'stable'
      });

      expect(result.isSuccess).toBe(true);
      expect(result.getValue().value).toBe(6.5);
      expect(result.getValue().unit).toBe('meses');
    });

    it('should fail with invalid value', () => {
      const result = KPIValue.create({
        value: NaN,
        unit: 'meses',
        threshold: validThreshold,
        trend: 'stable'
      });

      expect(result.isFailure).toBe(true);
      expect(result.error).toBe('Value must be a valid number');
    });

    it('should fail with empty unit', () => {
      const result = KPIValue.create({
        value: 6.5,
        unit: '',
        threshold: validThreshold,
        trend: 'stable'
      });

      expect(result.isFailure).toBe(true);
      expect(result.error).toBe('Unit is required');
    });
  });

  describe('getStatus', () => {
    it('should return critical when value <= critical', () => {
      const kpi = KPIValue.create({
        value: 0.5,
        unit: 'meses',
        threshold: validThreshold,
        trend: 'down'
      }).getValue();

      expect(kpi.getStatus()).toBe('critical');
    });

    it('should return warning when value <= warning', () => {
      const kpi = KPIValue.create({
        value: 2,
        unit: 'meses',
        threshold: validThreshold,
        trend: 'stable'
      }).getValue();

      expect(kpi.getStatus()).toBe('warning');
    });

    it('should return good when value > good', () => {
      const kpi = KPIValue.create({
        value: 8,
        unit: 'meses',
        threshold: validThreshold,
        trend: 'up'
      }).getValue();

      expect(kpi.getStatus()).toBe('good');
    });
  });

  describe('isImproving', () => {
    it('should return true when value improved for positive metrics', () => {
      const kpi = KPIValue.create({
        value: 8,
        unit: 'meses',
        threshold: validThreshold,
        trend: 'up',
        previousValue: 6
      }).getValue();

      expect(kpi.isImproving()).toBe(true);
    });

    it('should return true when value decreased for negative metrics', () => {
      const burnRateThreshold = Threshold.create({
        critical: 100000,
        warning: 50000,
        good: 30000
      }).getValue();

      const kpi = KPIValue.create({
        value: 40000,
        unit: 'R$',
        threshold: burnRateThreshold,
        trend: 'down',
        previousValue: 60000
      }).getValue();

      expect(kpi.isImproving()).toBe(true);
    });
  });
});
```

#### 2. Integration Tests
```typescript
// src/__tests__/integration/GetUnifiedMetricsUseCase.test.ts
import { GetUnifiedMetricsUseCase } from '@/application/use-cases/GetUnifiedMetricsUseCase';
import { InMemoryMetricsRepository } from '@/infrastructure/repositories/InMemoryMetricsRepository';
import { MetricsCalculationService } from '@/domain/metrics/services/MetricsCalculationService';

describe('GetUnifiedMetricsUseCase Integration', () => {
  let useCase: GetUnifiedMetricsUseCase;
  let repository: InMemoryMetricsRepository;
  let calculationService: MetricsCalculationService;

  beforeEach(() => {
    repository = new InMemoryMetricsRepository();
    calculationService = new MetricsCalculationService();
    useCase = new GetUnifiedMetricsUseCase(repository, calculationService);
  });

  it('should return enriched metrics', async () => {
    // Setup
    const mockMetrics = {
      id: 'test-id',
      domain: 'financial',
      period: '2024-03',
      kpis: {
        CASH_BALANCE: {
          value: 100000,
          unit: 'R$',
          threshold: { critical: 10000, warning: 30000, good: 50000 },
          trend: 'stable'
        },
        BURN_RATE: {
          value: 15000,
          unit: 'R$',
          threshold: { critical: 100000, warning: 50000, good: 30000 },
          trend: 'down'
        }
      }
    };

    repository.save(mockMetrics);

    // Execute
    const result = await useCase.execute({
      domain: 'financial',
      period: '2024-03'
    });

    // Verify
    expect(result.isSuccess).toBe(true);
    const metrics = result.getValue();
    
    // Should have calculated RUNWAY
    expect(metrics.kpis.RUNWAY).toBeDefined();
    expect(metrics.kpis.RUNWAY.value).toBe(6.67); // 100000 / 15000
    
    // Should maintain original KPIs
    expect(metrics.kpis.CASH_BALANCE.value).toBe(100000);
    expect(metrics.kpis.BURN_RATE.value).toBe(15000);
  });

  it('should handle missing data gracefully', async () => {
    const result = await useCase.execute({
      domain: 'financial',
      period: '2024-03'
    });

    expect(result.isFailure).toBe(true);
    expect(result.error).toContain('not found');
  });
});
```

#### 3. E2E Tests
```typescript
// src/__tests__/e2e/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.fill('[data-testid=email]', 'test@example.com');
    await page.fill('[data-testid=password]', 'password');
    await page.click('[data-testid=login-button]');
    await page.waitForURL('/dashboard');
  });

  test('should display metrics correctly', async ({ page }) => {
    // Verify metrics are displayed
    await expect(page.locator('[data-testid=runway-metric]')).toBeVisible();
    await expect(page.locator('[data-testid=ltv-cac-ratio]')).toBeVisible();
    await expect(page.locator('[data-testid=net-profit-margin]')).toBeVisible();
    
    // Verify values are formatted
    await expect(page.locator('[data-testid=runway-value]')).toContainText('meses');
    await expect(page.locator('[data-testid=ltv-cac-ratio-value]')).toContainText('x');
    await expect(page.locator('[data-testid=net-profit-margin-value]')).toContainText('%');
  });

  test('should handle period change', async ({ page }) => {
    // Change period
    await page.selectOption('[data-testid=period-selector]', '2024-02');
    
    // Wait for loading
    await page.waitForLoadState('networkidle');
    
    // Verify data updated
    await expect(page.locator('[data-testid=runway-value]')).not.toHaveText('6.5');
  });

  test('should export metrics to PDF', async ({ page }) => {
    // Click export button
    const downloadPromise = page.waitForEvent('download');
    await page.click('[data-testid=export-button]');
    const download = await downloadPromise;
    
    // Verify download
    expect(download.suggestedFilename()).toMatch(/metrics.*\.pdf/);
  });

  test('should be accessible', async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toBeVisible();
    
    // Test ARIA labels
    const runwayMetric = page.locator('[data-testid=runway-metric]');
    await expect(runwayMetric).toHaveAttribute('aria-label');
    
    // Test color contrast (simplified check)
    const runwayValue = page.locator('[data-testid=runway-value]');
    const color = await runwayValue.evaluate(el => 
      window.getComputedStyle(el).color
    );
    expect(color).not.toBe('rgb(128, 128, 128)'); // Not gray
  });
});
```

## Padrões de Git

### 🎯 Commit Message Standards

#### 1. Conventional Commits
```bash
# Format
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

# Types
feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style changes (formatting, missing semi-colons, etc)
refactor: Code refactoring without changing functionality
test:     Adding or updating tests
chore:    Changes to build process, dependency management, etc

# Examples
feat(metrics): add runway calculation feature

- Add runway calculation service
- Implement threshold-based status
- Add trend indicators
- Include comprehensive tests

Fixes #123

fix(auth): resolve JWT token expiration issue

- Update token refresh logic
- Add proper error handling
- Improve user feedback

Closes #456

docs(readme): update installation instructions

- Add Node.js version requirement
- Update environment setup steps
- Fix broken links
```

#### 2. Branch Naming
```bash
# Feature branches
feature/user-authentication
feature/metrics-dashboard
feature/export-functionality

# Bugfix branches
bugfix/login-validation-error
bugfix/chart-rendering-issue
bugfix/calculation-bug

# Hotfix branches
hotfix/security-vulnerability
hotfix/critical-bug-production
hotfix/performance-issue

# Release branches
release/v1.2.0
release/v2.0.0-beta

# Chore branches
chore/update-dependencies
chore/cleanup-code
chore/update-documentation
```

#### 3. Pull Request Template
```markdown
<!-- 
PR Template - Copie e cole este template
-->

## 📝 Descrição
[Breve descrição da mudança]

## 🔄 Tipo de Mudança
- [ ] 🐛 Bug fix
- [ ] ✨ Nova feature
- [ ] 💄 Mudança de estilo
- [ ] ♻️ Refactoring
- [ ] 📝 Documentação
- [ ] 🔧 Configuração/Chore
- [ ] ⚡ Performance
- [ ] 🧪 Testes

## 🧪 Testes
- [ ] Unit tests implementados
- [ ] Integration tests implementados
- [ ] E2E tests implementados
- [ ] Todos os testes passando

## 📸 Screenshots
[Adicionar screenshots se aplicável]

## 🔗 Issues Relacionados
Closes #<issue_number>
Fixes #<issue_number>

## ✅ Checklist
- [ ] Código segue os padrões do projeto
- [ ] Auto-formatação aplicada (Prettier)
- [ ] Linting passando (ESLint)
- [ ] Testes implementados e passando
- [ ] Documentação atualizada
- [ ] Accessibility validado
- [ ] Performance testada
- [ ] Security review realizado

## 📋 Mudanças
- [ ] Mudança 1
- [ ] Mudança 2
- [ ] Mudança 3

## 🚀 Como Testar
1. Passo 1
2. Passo 2
3. Passo 3

## 💬 Observações
[Observações adicionais]
```

## Code Review

### 🎯 Review Process

#### 1. Review Guidelines
```typescript
// Checklist de Code Review

interface CodeReviewChecklist {
  // Funcionalidade
  functionality: {
    codeWorks: boolean;           // O código funciona como esperado?
    requirementsMet: boolean;     // Requisitos implementados?
    edgeCasesHandled: boolean;     // Edge cases considerados?
    errorHandling: boolean;       // Tratamento de erros adequado?
  };
  
  // Qualidade do Código
  codeQuality: {
    readability: boolean;         // Código legível?
    maintainability: boolean;     // Fácil de manter?
    performance: boolean;         // Performance considerada?
    security: boolean;           // Segurança considerada?
  };
  
  // Testes
  testing: {
    testsAdded: boolean;          // Testes adicionados?
    testsComprehensive: boolean;   // Testes abrangentes?
    testsPassing: boolean;        // Testes passando?
    testQuality: boolean;          // Qualidade dos testes?
  };
  
  // Documentação
  documentation: {
    codeCommented: boolean;       // Código comentado?
    docsUpdated: boolean;         // Documentação atualizada?
    apiDocs: boolean;             // API docs atualizadas?
    readmeUpdated: boolean;       // README atualizado?
  };
}
```

#### 2. Review Comments
```typescript
// Exemplos de comentários construtivos

// ✅ Bom comentário
/*
Sugestão: Considerar extrair a lógica de cálculo para um service separado
Isso melhoraria a testabilidade e reusabilidade do código.

Motivo:
- Separação de responsabilidades
- Facilitaria testes unitários
- Poderia ser reutilizado em outros lugares

Exemplo:
```typescript
class MetricsCalculationService {
  calculateRunway(cashBalance: number, burnRate: number): number {
    return cashBalance / burnRate;
  }
}
```
*/

// ❌ Comentário a evitar
/*
Isso está errado. Mude isso.
*/

// ✅ Comentário construtivo
/*
Observação: Esta função pode causar performance issues com arrays grandes.

Sugestão:
1. Considerar usar memoização
2. Implementar paginação ou virtual scrolling
3. Adicionar loading states

Posso ajudar com a implementação se necessário.
*/
```

#### 3. Approval Process
```typescript
// Processo de Aprovação
interface ApprovalProcess {
  requirements: {
    minimumApprovals: 2;         // Mínimo de aprovações
    codeOwnerApproval: boolean;   // Aprovação do code owner
    testsPassing: boolean;        // Todos os testes passando
    noConflicts: boolean;         // Sem conflitos de merge
    documentationUpdated: boolean; // Documentação atualizada
  };
  
  approvers: {
    techLead: boolean;            // Tech Lead deve aprovar
    peerDeveloper: boolean;       // Outro desenvolvedor
    codeOwner: boolean;           // Code owner quando aplicável
    productManager: boolean;      // PM para features significativas
  };
  
  conditions: {
    autoMerge: boolean;           // Auto-merge se critérios atendidos
    manualMerge: boolean;         // Merge manual necessário
    blocked: boolean;              // Bloqueado até correções
  };
}
```

## Security

### 🔒 Security Guidelines

#### 1. Code Security
```typescript
// ✅ Boas práticas de segurança

// Input validation
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/),
  name: z.string().min(2).max(50)
});

// SQL Injection prevention
// Usar parameterized queries
const getUserById = async (id: string) => {
  const query = 'SELECT * FROM users WHERE id = $1';
  return db.query(query, [id]);
};

// XSS prevention
import DOMPurify from 'dompurify';

const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};

// CSRF protection
import csrf from 'csurf';
const csrfProtection = csrf({ cookie: true });

// Authentication check
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

// Rate limiting
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests'
});
```

#### 2. Environment Variables
```bash
# .env.example
# Never commit real secrets
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
JWT_SECRET=your-super-secret-jwt-key
ENCRYPTION_KEY=your-encryption-key
API_KEY=your-api-key
SMTP_PASSWORD=your-smtp-password

# Development
NODE_ENV=development
DEBUG=true

# Production
NODE_ENV=production
DEBUG=false
```

#### 3. Dependency Security
```bash
# Security audit
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## Performance

### ⚡ Performance Guidelines

#### 1. Frontend Performance
```typescript
// ✅ Performance optimizations

// Lazy loading de componentes
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Memoization de componentes pesados
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});

// Virtual scrolling para grandes listas
import { FixedSizeList as List } from 'react-window';

// Debounce para inputs
import { useDebounce } from './hooks/useDebounce';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  
  useEffect(() => {
    if (debouncedSearch) {
      // Perform search
    }
  }, [debouncedSearch]);
};

// Code splitting
const Dashboard = () => (
  <div>
    <LazyComponent />
    <OtherComponent />
  </div>
);
```

#### 2. Backend Performance
```typescript
// ✅ Backend optimizations

// Database connection pooling
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Caching
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

const getCachedData = async (key: string) => {
  const cached = await redis.get(key);
  return cached ? JSON.parse(cached) : null;
};

// Batch operations
const batchUpdate = async (items: any[]) => {
  const queries = items.map(item => 
    db.query('UPDATE table SET field = $1 WHERE id = $2', [item.field, item.id])
  );
  await Promise.all(queries);
};

// Pagination
const getPaginatedResults = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  const query = 'SELECT * FROM table LIMIT $1 OFFSET $2';
  return db.query(query, [limit, offset]);
};
```

## Ferramentas e Configuração

### 🛠️ Development Setup

#### 1. ESLint Configuration
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    'react/prop-types': 'off', // TypeScript handles this
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
```

#### 2. Prettier Configuration
```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

#### 3. Husky Configuration
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm run test",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write",
      "git add"
    ]
  }
}
```

## Troubleshooting

### 🔧 Common Issues

#### 1. Build Issues
```bash
# Limpar cache
npm run clean
rm -rf node_modules package-lock.json
npm install

# Verificar tipos
npm run type-check

# Verificar linting
npm run lint

# Verificar testes
npm run test
```

#### 2. Environment Issues
```bash
# Verificar variáveis de ambiente
npm run env:check

# Validar configuração
npm run config:validate

# Resetar ambiente
npm run env:reset
```

#### 3. Performance Issues
```bash
# Analizar bundle size
npm run analyze:bundle

# Performance profiling
npm run profile:performance

# Memory leak detection
npm run profile:memory
```

## Recursos e Referências

### 📚 Documentação Útil

#### Internas
- **[Arquitetura de Software](./01-software-architecture.md)** - Arquitetura detalhada
- **[Auditoria de Arquitetura](./02-architecture-audit.md)** - Análise técnica
- **[Relatório de Refactoring](./04-refactoring-report.md)** - Melhorias implementadas

#### Externas
- **[TypeScript Handbook](https://www.typescriptlang.org/docs/)** - Guia TypeScript
- **[React Documentation](https://react.dev/)** - Documentação React
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Documentação Tailwind
- **[Testing Library](https://testing-library.com/)** - Guia de testes

### 🛠️ Ferramentas Recomendadas

#### Development
- **VS Code** - Editor recomendado
- **Postman** - API testing
- **DBeaver** - Database management
- **GitKraken** - Git GUI

#### Productivity
- **Fig** - Design review
- **Linear** - Issue tracking
- **Notion** - Documentation
- **Slack** - Communication

---

## Considerações Importantes

### 🔄 Evolução das Guidelines

#### Processo de Atualização
1. **Review trimestral** das guidelines
2. **Feedback da equipe** incorporado
3. **Novas tecnologias** avaliadas
4. **Best practices** atualizadas

#### Contribuição para Guidelines
- **Sugestões bem-vindas** via issues
- **Discussões abertas** para mudanças
- **Votação da equipe** para decisões
- **Documentação de mudanças** implementadas

### 🌍 Impacto na Comunidade

#### Benefícios Esperados
- **Qualidade consistente** em todo o código
- **Onboarding mais rápido** para novos membros
- **Colaboração mais eficiente** entre equipe
- **Manutenibilidade melhorada** do código
- **Redução de bugs** e regressões

---

*Última atualização: 22/03/2026*  
*Versão: 2.0*  
*Status: Active*  
*Maintainer: Development Team SuperRelatórios*
