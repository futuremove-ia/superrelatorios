import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pt-BR/login');
  });

  test('successful login and redirect to dashboard', async ({ page }) => {
    // Preencher formulário de login
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');

    // Verificar redirecionamento
    await expect(page).toHaveURL('/pt-BR/app');
    await expect(page.locator('h1')).toContainText('Painel Principal');
  });

  test('displays error message for invalid credentials', async ({ page }) => {
    await page.fill('[data-testid="email-input"]', 'invalid@example.com');
    await page.fill('[data-testid="password-input"]', 'wrongpassword');
    await page.click('[data-testid="login-button"]');

    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toHaveText('Credenciais inválidas');
  });

  test('supports internationalization during login', async ({ page }) => {
    // Mudar para inglês
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');

    await expect(page.locator('h1')).toHaveText('Sign in to your account');
    await expect(page.locator('[data-testid="email-label"]')).toHaveText('Professional email');
  });

  test('form validation works correctly', async ({ page }) => {
    // Tentar submit sem preencher campos
    await page.click('[data-testid="login-button"]');

    // Verificar mensagens de validação
    await expect(page.locator('[data-testid="email-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="password-error"]')).toBeVisible();
  });

  test('password visibility toggle works', async ({ page }) => {
    await page.fill('[data-testid="password-input"]', 'password123');
    
    const passwordInput = page.locator('[data-testid="password-input"]');
    const toggleButton = page.locator('[data-testid="password-toggle"]');
    
    // Verificar se está oculto inicialmente
    await expect(passwordInput).toHaveAttribute('type', 'password');
    
    // Clicar para mostrar
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'text');
    
    // Clicar para ocultar novamente
    await toggleButton.click();
    await expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('remembers language preference after login', async ({ page }) => {
    // Mudar para espanhol
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-es-ES"]');
    
    // Fazer login
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');

    // Verificar que idioma foi mantido após redirecionamento
    await expect(page).toHaveURL('/es-ES/app');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('handles network errors gracefully', async ({ page }) => {
    // Simular erro de rede
    await page.route('/api/auth/login', route => {
      route.abort('failed');
    });

    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');

    await expect(page.locator('[data-testid="network-error"]')).toBeVisible();
  });

  test('supports keyboard navigation', async ({ page }) => {
    // Navegação por tab
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="email-input"]')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="password-input"]')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="login-button"]')).toBeFocused();
    
    // Submit com Enter
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.keyboard.press('Enter');
    
    await expect(page).toHaveURL('/pt-BR/app');
  });
});
