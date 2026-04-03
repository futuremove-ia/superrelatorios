# Plano de Testes - SuperRelatórios

## Test-Driven Development (TDD) Strategy

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estratégia de TDD](#estratégia-de-tdd)
3. [Stack de Testes](#stack-de-testes)
4. [Testes Unitários](#testes-unitários)
5. [Testes de Integração](#testes-de-integração)
6. [Testes E2E](#testes-e2e)
7. [Testes de Performance](#testes-de-performance)
8. [Testes de Acessibilidade](#testes-de-acessibilidade)
9. [Testes de Internacionalização](#testes-de-internacionalização)
10. [Testes de Segurança](#testes-de-segurança)
11. [CI/CD Pipeline](#cicd-pipeline)
12. [Cobertura de Código](#cobertura-de-código)
13. [Documentação](#documentação)

---

## 🎯 Visão Geral

### Objetivos

- **Qualidade**: 95%+ cobertura de código
- **Confiabilidade**: Zero bugs críticos em produção
- **Performance**: <2s load time para core features
- **Acessibilidade**: 100% WCAG 2.1 AA compliance
- **Internacionalização**: 100% coverage para 3 idiomas

### Escopo

- ✅ Componentes UI (React/TypeScript)
- ✅ Lógica de Negócio (Services/Utils)
- ✅ APIs e Integrações
- ✅ Internacionalização (i18n)
- ✅ Autenticação e Autorização
- ✅ Performance e SEO
- ✅ Acessibilidade

---

## 🔧 Estratégia de TDD

### Ciclo Red-Green-Refactor

1. **Red**: Escrever teste que falha
2. **Green**: Implementar código mínimo para passar
3. **Refactor**: Melhorar código mantendo testes verdes

### Pirâmide de Testes

```
    E2E Tests (5%)
   ───────────────
  Integration Tests (15%)
 ─────────────────────────
Unit Tests (80%)
```

---

## 🛠️ Stack de Testes

### Frameworks e Ferramentas

```json
{
  "testing": {
    "unit": ["Jest", "React Testing Library", "MSW"],
    "integration": ["Jest", "Supertest", "MSW"],
    "e2e": ["Playwright", "Cypress"],
    "performance": ["Lighthouse", "Web Vitals"],
    "accessibility": ["axe-core", "pa11y"],
    "visual": ["Chromatic", "Storybook"],
    "security": ["OWASP ZAP", "Snyk"]
  },
  "coverage": {
    "tool": "Istanbul",
    "threshold": 95,
    "reporters": ["text", "html", "lcov", "codecov"]
  }
}
```

---

## 🧪 Testes Unitários

### 1. Componentes UI

#### Test Strategy

```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  // Test 1: Renderização básica
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  // Test 2: Event handlers
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 3: Variantes e estilos
  it('applies correct variant styles', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive');
  });

  // Test 4: Accessibility
  it('has proper ARIA attributes', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  // Test 5: Internacionalização
  it('displays translated text', () => {
    render(<Button>{t('common.save')}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Salvar');
  });
});
```

### 2. Hooks Customizados

#### Test Strategy

```typescript
// src/hooks/__tests__/useI18nRouter.test.ts
import { renderHook } from "@testing-library/react";
import { useI18nRouter } from "../useI18nRouter";

describe("useI18nRouter Hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Test 1: Detecção de idioma preferido
  it("detects preferred language from localStorage", () => {
    localStorage.setItem("preferred-language", "pt-BR");
    const { result } = renderHook(() => useI18nRouter());
    expect(result.current.currentLanguage).toBe("pt-BR");
  });

  // Test 2: Mudança de idioma
  it("changes language and redirects", () => {
    const { result } = renderHook(() => useI18nRouter());
    const mockNavigate = jest.fn();

    act(() => {
      result.current.changeLanguage("en-US");
    });

    expect(mockNavigate).toHaveBeenCalledWith("/en-US/app", { replace: true });
  });

  // Test 3: Geração de URLs localizadas
  it("generates localized URLs correctly", () => {
    const { result } = renderHook(() => useI18nRouter());
    expect(result.current.getLocalizedRoute("/app")).toBe("/pt-BR/app");
  });
});
```

### 3. Utilitários e Funções

#### Test Strategy

```typescript
// src/utils/__tests__/formatCurrency.test.ts
import { formatCurrency } from "../formatCurrency";

describe("formatCurrency Utility", () => {
  // Test 1: Formatação básica
  it("formats currency with default locale", () => {
    expect(formatCurrency(1234.56)).toBe("R$ 1.234,56");
  });

  // Test 2: Diferentes locales
  it("formats currency for different locales", () => {
    expect(formatCurrency(1234.56, "en-US")).toBe("$1,234.56");
    expect(formatCurrency(1234.56, "es-ES")).toBe("1.234,56 €");
  });

  // Test 3: Edge cases
  it("handles zero and negative values", () => {
    expect(formatCurrency(0)).toBe("R$ 0,00");
    expect(formatCurrency(-100)).toBe("-R$ 100,00");
  });

  // Test 4: Invalid inputs
  it("handles invalid inputs gracefully", () => {
    expect(formatCurrency(NaN)).toBe("R$ 0,00");
    expect(formatCurrency(null as any)).toBe("R$ 0,00");
  });
});
```

---

## 🔗 Testes de Integração

### 1. API Integration

#### Test Strategy

```typescript
// src/services/__tests__/authService.test.ts
import { setupServer } from "msw/node";
import { rest } from "msw";
import { authService } from "../authService";

const server = setupServer(
  rest.post("/api/auth/login", (req, res, ctx) => {
    return res(
      ctx.json({
        token: "mock-token",
        user: { id: 1, email: "test@example.com" },
      }),
    );
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("AuthService Integration", () => {
  // Test 1: Login bem-sucedido
  it("successfully logs in user", async () => {
    const result = await authService.login("test@example.com", "password");
    expect(result.token).toBe("mock-token");
    expect(result.user.email).toBe("test@example.com");
  });

  // Test 2: Tratamento de erros
  it("handles login failure", async () => {
    server.use(
      rest.post("/api/auth/login", (req, res, ctx) => {
        return res(ctx.status(401), ctx.json({ error: "Invalid credentials" }));
      }),
    );

    await expect(
      authService.login("test@example.com", "wrong"),
    ).rejects.toThrow("Invalid credentials");
  });

  // Test 3: Network errors
  it("handles network errors", async () => {
    server.use(
      rest.post("/api/auth/login", (req, res, ctx) => {
        return res.networkError("Network error");
      }),
    );

    await expect(
      authService.login("test@example.com", "password"),
    ).rejects.toThrow();
  });
});
```

### 2. Component Integration

#### Test Strategy

```typescript
// src/pages/__tests__/DecisionPanel.integration.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { DecisionPanel } from '../DecisionPanel';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false },
  },
});

const renderWithProviders = (component: React.ReactElement) => {
  const queryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe('DecisionPanel Integration', () => {
  // Test 1: Renderização completa
  it('renders complete dashboard with data', async () => {
    renderWithProviders(<DecisionPanel />);

    await waitFor(() => {
      expect(screen.getByText('Painel de Decisão')).toBeInTheDocument();
      expect(screen.getByText('Visão Geral')).toBeInTheDocument();
    });
  });

  // Test 2: Interação com abas
  it('switches between tabs correctly', async () => {
    renderWithProviders(<DecisionPanel />);

    const recommendationsTab = screen.getByText('Recomendações');
    fireEvent.click(recommendationsTab);

    await waitFor(() => {
      expect(screen.getByText('Recomendações Estratégicas')).toBeInTheDocument();
    });
  });

  // Test 3: Internacionalização
  it('displays content in correct language', async () => {
    // Mock i18n language
    renderWithProviders(<DecisionPanel />);

    await waitFor(() => {
      expect(screen.getByText('Painel de Decisão')).toBeInTheDocument();
    });
  });
});
```

---

## 🌐 Testes E2E

### 1. User Journeys

#### Test Strategy (Playwright)

```typescript
// e2e/user-journeys/authentication.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Authentication Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/pt-BR/login");
  });

  test("successful login and redirect to dashboard", async ({ page }) => {
    // Preencher formulário de login
    await page.fill('[data-testid="email-input"]', "test@example.com");
    await page.fill('[data-testid="password-input"]', "password123");
    await page.click('[data-testid="login-button"]');

    // Verificar redirecionamento
    await expect(page).toHaveURL("/pt-BR/app");
    await expect(page.locator('[data-testid="dashboard-title"]')).toBeVisible();
  });

  test("displays error message for invalid credentials", async ({ page }) => {
    await page.fill('[data-testid="email-input"]', "invalid@example.com");
    await page.fill('[data-testid="password-input"]', "wrongpassword");
    await page.click('[data-testid="login-button"]');

    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toHaveText(
      "Credenciais inválidas",
    );
  });

  test("supports internationalization during login", async ({ page }) => {
    // Mudar para inglês
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');

    await expect(page.locator("h1")).toHaveText("Sign in to your account");
    await expect(page.locator('[data-testid="email-label"]')).toHaveText(
      "Professional email",
    );
  });
});
```

### 2. Critical Business Flows

#### Test Strategy

```typescript
// e2e/business-flows/report-generation.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Report Generation Flow", () => {
  test("complete report generation workflow", async ({ page }) => {
    // 1. Login
    await page.goto("/pt-BR/login");
    await page.fill('[data-testid="email-input"]', "test@example.com");
    await page.fill('[data-testid="password-input"]', "password123");
    await page.click('[data-testid="login-button"]');

    // 2. Navegar para criação de relatório
    await page.click('[data-testid="nav-reports"]');
    await page.click('[data-testid="new-report-button"]');

    // 3. Preencher dados do relatório
    await page.fill(
      '[data-testid="report-title"]',
      "Relatório de Vendas Q3 2024",
    );
    await page.selectOption('[data-testid="report-template"]', "sales");
    await page.fill(
      '[data-testid="report-description"]',
      "Análise completa das vendas do terceiro trimestre",
    );

    // 4. Upload de arquivo
    const fileInput = page.locator('[data-testid="file-upload"]');
    await fileInput.setInputFiles("test-data/sales-data.csv");

    // 5. Gerar relatório
    await page.click('[data-testid="generate-button"]');

    // 6. Verificar resultado
    await expect(page.locator('[data-testid="report-preview"]')).toBeVisible();
    await expect(page.locator('[data-testid="export-button"]')).toBeEnabled();
  });

  test("report generation with internationalization", async ({ page }) => {
    // Testar em todos os idiomas
    const languages = ["pt-BR", "en-US", "es-ES"];

    for (const lang of languages) {
      await page.goto(`/${lang}/app/novo-relatorio`);

      // Verificar elementos traduzidos
      if (lang === "pt-BR") {
        await expect(page.locator("h1")).toHaveText("Criar Novo Relatório");
      } else if (lang === "en-US") {
        await expect(page.locator("h1")).toHaveText("Create New Report");
      } else if (lang === "es-ES") {
        await expect(page.locator("h1")).toHaveText("Crear Nuevo Informe");
      }
    }
  });
});
```

---

## ⚡ Testes de Performance

### 1. Load Time e Core Web Vitals

#### Test Strategy

```typescript
// performance/__tests__/core-web-vitals.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Performance Tests", () => {
  test("meets Core Web Vitals thresholds", async ({ page }) => {
    const startTime = Date.now();

    await page.goto("/pt-BR");

    // Aguardar carregamento completo
    await page.waitForLoadState("networkidle");

    const loadTime = Date.now() - startTime;

    // LCP (Largest Contentful Paint) < 2.5s
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ entryTypes: ["largest-contentful-paint"] });
      });
    });

    expect(lcp).toBeLessThan(2500);
    expect(loadTime).toBeLessThan(3000);
  });

  test("dashboard performance with large datasets", async ({ page }) => {
    // Simular dataset grande
    await page.route("/api/dashboard/metrics", (route) => {
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(generateLargeMetricsDataset(10000)),
      });
    });

    await page.goto("/pt-BR/app");

    // Medir tempo de renderização
    const renderStart = Date.now();
    await page.waitForSelector('[data-testid="metrics-grid"]');
    const renderTime = Date.now() - renderStart;

    expect(renderTime).toBeLessThan(1000);
  });
});

function generateLargeMetricsDataset(size: number) {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    name: `Metric ${i}`,
    value: Math.random() * 100,
    trend: Math.random() > 0.5 ? "up" : "down",
  }));
}
```

### 2. Memory Leaks

#### Test Strategy

```typescript
// performance/__tests__/memory-leaks.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Memory Leak Tests", () => {
  test("does not leak memory during navigation", async ({ page }) => {
    const initialMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0;
    });

    // Simular navegação intensa
    for (let i = 0; i < 50; i++) {
      await page.goto("/pt-BR/app");
      await page.goto("/pt-BR/app/metricas");
      await page.goto("/pt-BR/app/painel-decisao");
    }

    // Forçar garbage collection
    await page.evaluate(() => {
      if (window.gc) {
        window.gc();
      }
    });

    const finalMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0;
    });

    const memoryIncrease = finalMemory - initialMemory;
    const memoryIncreasePercent = (memoryIncrease / initialMemory) * 100;

    // Aumento de memória deve ser < 20%
    expect(memoryIncreasePercent).toBeLessThan(20);
  });
});
```

---

## ♿ Testes de Acessibilidade

### 1. WCAG 2.1 AA Compliance

#### Test Strategy

```typescript
// accessibility/__tests__/wcag-compliance.spec.ts
import { injectAxe, checkA11y } from "axe-playwright";
import { test, expect } from "@playwright/test";

test.describe("Accessibility Tests", () => {
  test.beforeEach(async ({ page }) => {
    await injectAxe(page);
  });

  test("homepage meets WCAG 2.1 AA standards", async ({ page }) => {
    await page.goto("/pt-BR");

    await checkA11y(page, {
      detailedReport: true,
      rules: {
        "color-contrast": { enabled: true },
        "keyboard-navigation": { enabled: true },
        "aria-labels": { enabled: true },
        "focus-management": { enabled: true },
      },
    });
  });

  test("keyboard navigation works properly", async ({ page }) => {
    await page.goto("/pt-BR/app");

    // Testar navegação por teclado
    await page.keyboard.press("Tab");

    // Verificar se elemento focado é visível
    const focusedElement = await page.evaluate(() => document.activeElement);
    expect(focusedElement).toBeTruthy();

    // Verificar se elemento focado tem foco visível
    const hasFocusStyles = await page.evaluate((el) => {
      const styles = window.getComputedStyle(el as Element);
      return styles.outline !== "none" || styles.boxShadow !== "none";
    }, focusedElement);

    expect(hasFocusStyles).toBe(true);
  });

  test("screen reader compatibility", async ({ page }) => {
    await page.goto("/pt-BR/app");

    // Verificar ARIA labels
    const buttons = await page.locator("button").all();

    for (const button of buttons) {
      const hasAccessibleName = await button.evaluate((el) => {
        const hasText = el.textContent?.trim().length > 0;
        const hasAriaLabel = el.getAttribute("aria-label");
        const hasAriaLabelledBy = el.getAttribute("aria-labelledby");

        return hasText || hasAriaLabel || hasAriaLabelledBy;
      });

      expect(hasAccessibleName).toBe(true);
    }
  });

  test("color contrast requirements", async ({ page }) => {
    await page.goto("/pt-BR");

    const contrastResults = await page.evaluate(() => {
      const elements = document.querySelectorAll("*");
      const contrastIssues = [];

      for (const element of elements) {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;

        // Simplificado - usar biblioteca real em produção
        if (
          color &&
          backgroundColor &&
          backgroundColor !== "rgba(0, 0, 0, 0)"
        ) {
          const contrast = calculateContrast(color, backgroundColor);
          if (contrast < 4.5) {
            // WCAG AA standard
            contrastIssues.push({
              element: element.tagName,
              contrast,
              color,
              backgroundColor,
            });
          }
        }
      }

      return contrastIssues;
    });

    expect(contrastResults).toHaveLength(0);
  });
});

function calculateContrast(color1: string, color2: string): number {
  // Implementação real de cálculo de contraste
  // Simplificado para exemplo
  return 5.0; // Valor mock
}
```

---

## 🌍 Testes de Internacionalização

### 1. i18n Coverage Completo

#### Test Strategy

```typescript
// i18n/__tests__/internationalization.spec.ts
import { test, expect } from "@playwright/test";

const languages = ["pt-BR", "en-US", "es-ES"] as const;

test.describe("Internationalization Tests", () => {
  test("all pages load correctly in all languages", async ({ page }) => {
    const pages = [
      "/",
      "/app",
      "/app/painel-decisao",
      "/app/metricas",
      "/login",
    ];

    for (const lang of languages) {
      for (const pagePath of pages) {
        await page.goto(`/${lang}${pagePath}`);

        // Verificar se não há textos não traduzidos
        const untranslatedElements = await page
          .locator("[data-untranslated]")
          .count();
        expect(untranslatedElements).toBe(0);

        // Verificar se idioma está correto no HTML
        const htmlLang = await page.locator("html").getAttribute("lang");
        expect(htmlLang).toBe(lang.toLowerCase());
      }
    }
  });

  test("language switching preserves user context", async ({ page }) => {
    // Login em português
    await page.goto("/pt-BR/login");
    await page.fill('[data-testid="email-input"]', "test@example.com");
    await page.fill('[data-testid="password-input"]', "password123");
    await page.click('[data-testid="login-button"]');

    await expect(page).toHaveURL("/pt-BR/app");

    // Mudar para inglês
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');

    // Verificar redirecionamento e contexto mantido
    await expect(page).toHaveURL("/en-US/app");
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
  });

  test("URLs are properly localized", async ({ page }) => {
    const urlTests = [
      {
        lang: "pt-BR",
        path: "/app/painel-decisao",
        expected: "/pt-BR/app/painel-decisao",
      },
      {
        lang: "en-US",
        path: "/app/decision-panel",
        expected: "/en-US/app/decision-panel",
      },
      {
        lang: "es-ES",
        path: "/app/panel-decision",
        expected: "/es-ES/app/panel-decision",
      },
    ];

    for (const { lang, path, expected } of urlTests) {
      await page.goto(`/${lang}${path}`);
      await expect(page).toHaveURL(expected);
    }
  });

  test("date and number formatting by locale", async ({ page }) => {
    const formatTests = [
      {
        lang: "pt-BR",
        expectedDate: "01/12/2024",
        expectedNumber: "1.234,56",
        expectedCurrency: "R$ 1.234,56",
      },
      {
        lang: "en-US",
        expectedDate: "12/1/2024",
        expectedNumber: "1,234.56",
        expectedCurrency: "$1,234.56",
      },
      {
        lang: "es-ES",
        expectedDate: "1/12/2024",
        expectedNumber: "1.234,56",
        expectedCurrency: "1.234,56 €",
      },
    ];

    for (const {
      lang,
      expectedDate,
      expectedNumber,
      expectedCurrency,
    } of formatTests) {
      await page.goto(`/${lang}/app`);

      // Verificar formatação (implementar elementos de teste específicos)
      const dateElement = await page.locator('[data-testid="formatted-date"]');
      const numberElement = await page.locator(
        '[data-testid="formatted-number"]',
      );
      const currencyElement = await page.locator(
        '[data-testid="formatted-currency"]',
      );

      if ((await dateElement.count()) > 0) {
        await expect(dateElement).toContainText(expectedDate);
      }
      if ((await numberElement.count()) > 0) {
        await expect(numberElement).toContainText(expectedNumber);
      }
      if ((await currencyElement.count()) > 0) {
        await expect(currencyElement).toContainText(expectedCurrency);
      }
    }
  });

  test("RTL languages support (future)", async ({ page }) => {
    // Preparar para futuros idiomas RTL
    await page.goto("/ar-SA/app"); // Árabe (exemplo)

    // Verificar direção do texto
    const htmlDir = await page.locator("html").getAttribute("dir");
    expect(htmlDir).toBe("rtl");

    // Verificar layout RTL
    const rtlElements = await page.locator('[data-rtl="true"]').count();
    expect(rtlElements).toBeGreaterThan(0);
  });
});
```

---

## 🔒 Testes de Segurança

### 1. OWASP Top 10

#### Test Strategy

```typescript
// security/__tests__/owasp-tests.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Security Tests", () => {
  test("prevents XSS attacks", async ({ page }) => {
    await page.goto("/pt-BR/login");

    // Tentar injetar script
    const xssPayload = '<script>alert("XSS")</script>';
    await page.fill('[data-testid="email-input"]', xssPayload);
    await page.fill('[data-testid="password-input"]', "password");
    await page.click('[data-testid="login-button"]');

    // Verificar se script não foi executado
    page.on("dialog", () => {
      throw new Error("XSS attack succeeded!");
    });

    // Verificar se payload foi escapado
    const emailValue = await page
      .locator('[data-testid="email-input"]')
      .inputValue();
    expect(emailValue).not.toContain("<script>");
  });

  test("prevents CSRF attacks", async ({ page }) => {
    // Verificar presença de CSRF tokens
    await page.goto("/pt-BR/login");

    const csrfToken = await page
      .locator('[data-testid="csrf-token"]')
      .getAttribute("value");
    expect(csrfToken).toBeTruthy();
    expect(csrfToken?.length).toBeGreaterThan(20);
  });

  test("secure headers are present", async ({ page }) => {
    const response = await page.goto("/pt-BR");

    const headers = response?.headers();
    expect(headers?.["x-frame-options"]).toBe("DENY");
    expect(headers?.["x-content-type-options"]).toBe("nosniff");
    expect(headers?.["x-xss-protection"]).toBe("1; mode=block");
    expect(headers?.["strict-transport-security"]).toBeTruthy();
  });

  test("authentication security", async ({ page }) => {
    // Testar rate limiting
    await page.goto("/pt-BR/login");

    for (let i = 0; i < 10; i++) {
      await page.fill('[data-testid="email-input"]', "test@example.com");
      await page.fill('[data-testid="password-input"]', "wrongpassword");
      await page.click('[data-testid="login-button"]');
      await page.waitForTimeout(100);
    }

    // Verificar se foi bloqueado
    await expect(
      page.locator('[data-testid="rate-limit-message"]'),
    ).toBeVisible();
  });

  test("session security", async ({ page }) => {
    // Login
    await page.goto("/pt-BR/login");
    await page.fill('[data-testid="email-input"]', "test@example.com");
    await page.fill('[data-testid="password-input"]', "password123");
    await page.click('[data-testid="login-button"]');

    // Verificar cookies seguros
    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find((c) => c.name === "session");

    expect(sessionCookie?.secure).toBe(true);
    expect(sessionCookie?.httpOnly).toBe(true);
    expect(sessionCookie?.sameSite).toBe("Strict");
  });
});
```

---

## 🔄 CI/CD Pipeline

### 1. GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Test Suite

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run linting
        run: npm run lint

      - name: Run type checking
        run: npm run type-check

      - name: Run unit tests
        run: npm run test:unit -- --coverage

      - name: Run integration tests
        run: npm run test:integration

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Run accessibility tests
        run: npm run test:a11y

      - name: Run performance tests
        run: npm run test:performance

      - name: Run security audit
        run: npm audit --audit-level high

  visual-testing:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20.x"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Run visual tests
        run: npm run test:visual

      - name: Publish Chromatic
        run: npx chromatic --project-token=${{ secrets.CHROMATIC_TOKEN }}
```

---

## 📊 Cobertura de Código

### 1. Configuração Jest

```javascript
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/test/**/*",
    "!src/**/*.stories.tsx",
    "!src/**/index.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
    "src/components/**/*.{ts,tsx}": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
    "src/utils/**/*.ts": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{ts,tsx}",
    "<rootDir>/src/**/*.{test,spec}.{ts,tsx}",
  ],
};
```

### 2. Scripts de Teste

```json
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --testPathPattern=__tests__ --coverage",
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "playwright test",
    "test:a11y": "playwright test --config=playwright.a11y.config.ts",
    "test:performance": "playwright test --config=playwright.performance.config.ts",
    "test:visual": "chromatic test",
    "test:security": "npm audit && owasp-zap",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts,.tsx",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 📚 Documentação

### 1. Test Documentation

````markdown
# Testing Guidelines

## Writing Tests

### Test Naming

- Use descriptive names: `should [expected behavior] when [condition]`
- Include what, why, and expected result
- Example: `should redirect to login when accessing protected route without authentication`

### Test Structure

```typescript
describe('Component/Feature', () => {
  // Arrange
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Component />);
  });

  // Act & Assert
  it('should do something', () => {
    // Test implementation
  });
});
```
````

### Best Practices

1. **One assertion per test** when possible
2. **Test user behavior**, not implementation details
3. **Use meaningful test data**
4. **Mock external dependencies**
5. **Keep tests fast and isolated**

## Coverage Requirements

- Minimum 95% coverage
- 100% for critical paths
- All public APIs tested

````

### 2. Component Testing Guide

```markdown
# Component Testing Guide

## React Components

### Testing Checklist
- [ ] Renders without crashing
- [ ] Handles props correctly
- [ ] Manages state properly
- [ ] Triggers events correctly
- [ ] Accessible attributes
- [ ] Internationalization support
- [ ] Error boundaries

### Example
```typescript
describe('Button Component', () => {
  it('renders with correct props', () => {
    render(<Button variant="primary">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-primary');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
````

```

---

## 🎯 Implementação Roadmap

### Phase 1: Foundation (Week 1-2)
- [ ] Setup Jest e Testing Library
- [ ] Configurar coverage reporting
- [ ] Criar test utilities e helpers
- [ ] Implementar testes básicos de componentes

### Phase 2: Core Features (Week 3-4)
- [ ] Testes de autenticação
- [ ] Testes de internacionalização
- [ ] Testes de navegação
- [ ] Testes de formulários

### Phase 3: Advanced Testing (Week 5-6)
- [ ] Testes E2E com Playwright
- [ ] Testes de performance
- [ ] Testes de acessibilidade
- [ ] Testes de segurança

### Phase 4: CI/CD Integration (Week 7-8)
- [ ] GitHub Actions setup
- [ ] Automated testing pipeline
- [ ] Coverage reporting
- [ ] Visual testing integration

---

## 📈 Métricas e KPIs

### Quality Metrics
- **Coverage**: ≥95%
- **Test Pass Rate**: 100%
- **Build Time**: <5 minutes
- **Test Execution Time**: <3 minutes
- **Flaky Tests**: 0%

### Performance Metrics
- **LCP**: <2.5s
- **FID**: <100ms
- **CLS**: <0.1
- **Bundle Size**: <500KB (gzipped)

### Accessibility Metrics
- **WCAG Compliance**: 100%
- **Keyboard Navigation**: 100%
- **Screen Reader Support**: 100%
- **Color Contrast**: 100%

---

## 🔧 Ferramentas e Recomendações

### Libraries Essenciais
- **Jest**: Framework de testes
- **React Testing Library**: Testes de componentes
- **Playwright**: Testes E2E
- **MSW**: Mock de APIs
- **axe-core**: Testes de acessibilidade
- **Chromatic**: Testes visuais

### Ferramentas de Desenvolvimento
- **VS Code**: Configurações de debugging
- **React DevTools**: Inspeção de componentes
- **Playwright Inspector**: Debug E2E tests
- **Jest Watch Mode**: Desenvolvimento rápido

### Integrações
- **GitHub Actions**: CI/CD
- **Codecov**: Coverage reporting
- **Sentry**: Error tracking
- **Lighthouse**: Performance monitoring

---

## 📝 Conclusão

Este plano de testes estabelece uma base sólida para garantir a qualidade, confiabilidade e performance da SuperRelatórios. A implementação seguindo as melhores práticas de TDD assegura:

1. **Qualidade Consistente**: Testes em todos os níveis
2. **Confiança nas Mudanças**: Refactoring seguro
3. **Performance Garantida**: Monitoramento contínuo
4. **Acessibilidade Universal**: Inclusão para todos
5. **Internacionalização Completa**: Experiência global

A adoção deste plano posicionará a SuperRelatórios como referência em qualidade de software no mercado de BI e analytics.
```
