# Test Setup and Configuration

## 📋 Quick Start

### 1. Install Testing Dependencies

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom @types/jest ts-jest playwright @playwright/test axe-playwright chromatic
```

### 2. Create Test Configuration

```bash
# Create test setup files
mkdir -p src/test src/__tests__ src/components/__tests__ src/hooks/__tests__ src/utils/__tests__ src/services/__tests__
```

### 3. Update package.json Scripts

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
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts,.tsx",
    "type-check": "tsc --noEmit"
  }
}
```

## 🛠️ Configuration Files

### jest.config.js

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/test/**/*',
    '!src/**/*.stories.tsx',
    '!src/**/index.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  }
};
```

### playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

## 🧪 Test Examples

### Component Test Example

```typescript
// src/components/Button/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Hook Test Example

```typescript
// src/hooks/__tests__/useI18nRouter.test.ts
import { renderHook } from '@testing-library/react';
import { useI18nRouter } from '../useI18nRouter';

describe('useI18nRouter Hook', () => {
  it('detects preferred language', () => {
    localStorage.setItem('preferred-language', 'pt-BR');
    const { result } = renderHook(() => useI18nRouter());
    expect(result.current.currentLanguage).toBe('pt-BR');
  });
});
```

### E2E Test Example

```typescript
// e2e/authentication.spec.ts
import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('/pt-BR/login');
  await page.fill('[data-testid="email-input"]', 'test@example.com');
  await page.fill('[data-testid="password-input"]', 'password123');
  await page.click('[data-testid="login-button"]');
  
  await expect(page).toHaveURL('/pt-BR/app');
});
```

## 📊 Coverage Reports

Run tests with coverage:

```bash
npm run test:coverage
```

View detailed coverage report:

```bash
open coverage/lcov-report/index.html
```

## 🚀 Running Tests

### All Tests
```bash
npm test
```

### Unit Tests Only
```bash
npm run test:unit
```

### E2E Tests
```bash
npm run test:e11e
```

### Watch Mode (Development)
```bash
npm run test:watch
```

## 🔧 Debugging Tests

### Jest Debugging
```bash
# Run specific test in debug mode
node --inspect-brk node_modules/.bin/jest --runInBand Button.test.tsx
```

### Playwright Debugging
```bash
# Run with UI
npx playwright test --ui

# Run with trace
npx playwright test --trace on
```

## 📋 Testing Checklist

Before committing code:

- [ ] All unit tests pass
- [ ] Integration tests pass
- [ ] E2E tests pass
- [ ] Coverage ≥95%
- [ ] No linting errors
- [ ] Type checking passes
- [ ] Accessibility tests pass
- [ ] Performance tests pass

## 🎯 Best Practices

1. **Test user behavior, not implementation**
2. **One assertion per test when possible**
3. **Use descriptive test names**
4. **Mock external dependencies**
5. **Keep tests fast and isolated**
6. **Use meaningful test data**
7. **Test error conditions**
8. **Test accessibility**

## 📚 Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Playwright Documentation](https://playwright.dev/)
- [Accessibility Testing](https://www.deque.com/axe/)

---

**Ready to start testing! 🧪**
