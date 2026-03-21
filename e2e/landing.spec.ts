import { test, expect } from '@playwright/test';

test('landing page loads and has brand name', async ({ page }) => {
  await page.goto('/');
  // Wait for the server to be ready and brand name to appear
  await expect(page.locator('body')).toContainText(/Super.*Relatórios/i);
});

test('can navigate to login flow via CTA', async ({ page }) => {
  await page.goto('/');
  // The hero CTA is usually the first big button
  const startButton = page.getByRole('link', { name: /Criar.*Relatório/i }).first();
  await expect(startButton).toBeVisible();
  await startButton.click();
  
  // Should redirect to login since /app path is protected
  await expect(page).toHaveURL(/.*login/);
  // Look for any text indicating login page
  await expect(page.locator('body')).toContainText(/Entrar|Login/i);
});
