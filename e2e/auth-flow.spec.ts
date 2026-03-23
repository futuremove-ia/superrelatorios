import { test, expect } from '@playwright/test';

test.describe('Authentication Redirect Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Clear any existing session
    await page.goto('/login');
    await page.evaluate(() => {
      localStorage.clear();
      sessionStorage.clear();
    });
  });

  test('redirects to original destination after login', async ({ page }) => {
    // Step 1: Try to access protected route with redirect
    await page.goto('/pt-BR/app/novo-relatorio?template=executive');
    
    // Should redirect to login with redirect parameter
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    const redirectParam = new URL(page.url()).searchParams.get('redirect');
    expect(redirectParam).toContain('/pt-BR/app/novo-relatorio');
  });

  test('preserves query parameters in redirect', async ({ page }) => {
    // Step 1: Access protected route with query params
    await page.goto('/pt-BR/app/novo-relatorio?template=executive&source=lp');
    
    // Should redirect to login preserving all params
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    const redirectParam = new URL(page.url()).searchParams.get('redirect');
    expect(redirectParam).toContain('template=executive');
    expect(redirectParam).toContain('source=lp');
  });

  test('handles signup flow with redirect', async ({ page }) => {
    // Step 1: Start with redirect
    await page.goto('/pt-BR/app/novo-relatorio');
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    // Step 2: Switch to signup
    await page.click('[data-testid="signup-toggle"]');
    
    // Step 3: Fill signup form
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="signup-button"]');
    
    // Step 4: Should redirect to login with same redirect
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    const redirectParam = new URL(page.url()).searchParams.get('redirect');
    expect(redirectParam).toContain('/pt-BR/app/novo-relatorio');
  });

  test('handles login flow with redirect', async ({ page }) => {
    // Step 1: Start with redirect
    await page.goto('/pt-BR/app/novo-relatorio');
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    // Step 2: Fill login form
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    // Step 3: Should redirect to original destination
    await expect(page).toHaveURL('/pt-BR/app/novo-relatorio');
  });

  test('handles OAuth redirect flow', async ({ page }) => {
    // Step 1: Start with redirect
    await page.goto('/pt-BR/app/novo-relatorio');
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    // Step 2: Click Google OAuth
    await page.click('[data-testid="google-login"]');
    
    // Step 3: Mock OAuth callback (in real test, this would be handled by OAuth provider)
    // For now, just test that redirect parameter is preserved in the callback URL
    await page.goto('/auth/callback?redirect=%2Fpt-BR%2Fapp%2Fnovo-relatorio');
    
    // Should redirect to original destination after OAuth processing
    await expect(page).toHaveURL('/pt-BR/app/novo-relatorio');
  });

  test('handles invalid redirect gracefully', async ({ page }) => {
    // Step 1: Access with malformed redirect
    await page.goto('/login?redirect=invalid-url');
    
    // Should still work but fallback to default
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    // Should redirect to default app route
    await expect(page).toHaveURL('/pt-BR/app');
  });

  test('preserves language context in redirect', async ({ page }) => {
    // Step 1: Try English route
    await page.goto('/en-US/app/novo-relatorio');
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    const redirectParam = new URL(page.url()).searchParams.get('redirect');
    expect(redirectParam).toContain('/en-US/app/novo-relatorio');
    
    // Step 2: Login
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    // Should maintain English language
    await expect(page).toHaveURL('/en-US/app/novo-relatorio');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en-us');
  });
});

test.describe('Report Builder Flow Integration', () => {
  test('complete flow from LP to report generation', async ({ page }) => {
    // Step 1: Start from LP
    await page.goto('/pt-BR');
    
    // Step 2: Click CTA
    await page.click('[data-testid="cta-create-report"]');
    await expect(page).toHaveURL(/\/login\?redirect=/);
    
    // Step 3: Login
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    // Step 4: Should be in report builder
    await expect(page).toHaveURL('/pt-BR/app/novo-relatorio');
    await expect(page.locator('h1')).toContainText('builder.steps.data.title');
  });

  test('handles file upload in report builder', async ({ page }) => {
    // Step 1: Go directly to report builder (authenticated)
    await page.goto('/pt-BR/app/novo-relatorio');
    
    // Mock authentication for testing
    await page.evaluate(() => {
      localStorage.setItem('supabase.auth.token', 'mock-token');
    });
    await page.reload();
    
    // Step 2: Select upload option
    await page.click('[data-testid="upload-source"]');
    
    // Step 3: Upload file
    const fileInput = page.locator('input[type="file"]');
    await fileInput.setInputFiles('test-files/sample.xlsx');
    
    // Step 4: Should show file uploaded
    await expect(page.locator('[data-testid="file-success"]')).toBeVisible();
    await expect(page.locator('[data-testid="template-selection"]')).toBeVisible();
  });

  test('navigates through all report builder steps', async ({ page }) => {
    // Step 1: Go to report builder
    await page.goto('/pt-BR/app/novo-relatorio');
    
    // Mock authentication
    await page.evaluate(() => {
      localStorage.setItem('supabase.auth.token', 'mock-token');
    });
    await page.reload();
    
    // Step 2: Skip to template selection (mock data)
    await page.evaluate(() => {
      window.dispatchEvent(new CustomEvent('data-uploaded', { detail: { hasData: true } }));
    });
    
    // Step 3: Select template
    await page.click('[data-testid="template-executive"]');
    await page.click('[data-testid="next-button"]');
    
    // Step 4: Should be in generation step
    await expect(page.locator('h2')).toContainText('builder.steps.generation.title');
    
    // Step 5: Fill form
    await page.fill('[data-testid="report-title"]', 'Test Report');
    await page.selectOption('[data-testid="report-category"]', 'Executivo');
    await page.click('[data-testid="next-button"]');
    
    // Step 6: Should be in preview step
    await expect(page.locator('h2')).toContainText('builder.steps.preview.title');
    await page.click('[data-testid="generate-button"]');
    
    // Step 7: Should show processing
    await expect(page.locator('[data-testid="ai-processing"]')).toBeVisible();
  });
});
