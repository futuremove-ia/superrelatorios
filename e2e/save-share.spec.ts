import { test, expect } from '@playwright/test';

test.describe('Save and Share Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Mock authentication
    await page.goto('/pt-BR/login');
    await page.evaluate(() => {
      localStorage.setItem('supabase.auth.token', 'mock-token');
      localStorage.setItem('supabase.auth.user', JSON.stringify({
        id: 'test-user-id',
        email: 'test@example.com'
      }));
    });
  });

  test('saves report successfully', async ({ page }) => {
    // Step 1: Go to report builder
    await page.goto('/pt-BR/app/novo-relatorio');
    
    // Step 2: Complete all steps to reach preview
    await page.click('[data-testid="upload-source"]');
    await page.setInputFiles('input[type="file"]', 'test-files/sample.xlsx');
    await page.waitForSelector('[data-testid="file-success"]');
    
    await page.click('[data-testid="template-executive"]');
    await page.click('[data-testid="next-button"]');
    
    await page.fill('[data-testid="report-title"]', 'Test Report');
    await page.selectOption('[data-testid="report-category"]', 'Executivo');
    await page.click('[data-testid="next-button"]');
    
    await page.click('[data-testid="generate-button"]');
    await page.waitForSelector('[data-testid="report-preview"]');
    
    // Step 3: Save the report
    await page.click('[data-testid="save-button"]');
    
    // Step 4: Should show success message
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="success-message"]')).toContainText('relatório salvo');
    
    // Step 5: Should redirect to reports list
    await expect(page).toHaveURL('/pt-BR/app');
  });

  test('shares report with public link', async ({ page }) => {
    // Step 1: Go to an existing report
    await page.goto('/pt-BR/app/reports/test-report-id');
    
    // Step 2: Click share button
    await page.click('[data-testid="share-button"]');
    
    // Step 3: Should open share modal
    await expect(page.locator('[data-testid="share-modal"]')).toBeVisible();
    
    // Step 4: Enable public sharing
    await page.check('[data-testid="public-share-toggle"]');
    
    // Step 5: Copy share link
    await page.click('[data-testid="copy-link-button"]');
    
    // Step 6: Should show copied confirmation
    await expect(page.locator('[data-testid="copy-confirmation"]')).toBeVisible();
    await expect(page.locator('[data-testid="copy-confirmation"]')).toContainText('link copiado');
  });

  test('exports report to PDF', async ({ page }) => {
    // Step 1: Go to report detail
    await page.goto('/pt-BR/app/reports/test-report-id');
    
    // Step 2: Click export button
    await page.click('[data-testid="export-button"]');
    
    // Step 3: Select PDF format
    await page.click('[data-testid="export-pdf"]');
    
    // Step 4: Should trigger download
    const downloadPromise = page.waitForEvent('download');
    await page.click('[data-testid="confirm-export"]');
    
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toContain('.pdf');
  });

  test('exports report to Excel', async ({ page }) => {
    // Step 1: Go to report detail
    await page.goto('/pt-BR/app/reports/test-report-id');
    
    // Step 2: Click export button
    await page.click('[data-testid="export-button"]');
    
    // Step 3: Select Excel format
    await page.click('[data-testid="export-excel"]');
    
    // Step 4: Should trigger download
    const downloadPromise = page.waitForEvent('download');
    await page.click('[data-testid="confirm-export"]');
    
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toContain('.xlsx');
  });

  test('shares with specific permissions', async ({ page }) => {
    // Step 1: Go to report detail
    await page.goto('/pt-BR/app/reports/test-report-id');
    
    // Step 2: Click share button
    await page.click('[data-testid="share-button"]');
    
    // Step 3: Set specific permissions
    await page.click('[data-testid="permissions-settings"]');
    
    // Step 4: Allow view only
    await page.click('[data-testid="permission-view-only"]');
    
    // Step 5: Generate share link
    await page.click('[data-testid="generate-link"]');
    
    // Step 6: Should show share link with restrictions
    await expect(page.locator('[data-testid="share-link"]')).toBeVisible();
    await expect(page.locator('[data-testid="permission-badge"]')).toContainText('somente visualização');
  });

  test('handles share link expiration', async ({ page }) => {
    // Step 1: Go to report detail
    await page.goto('/pt-BR/app/reports/test-report-id');
    
    // Step 2: Click share button
    await page.click('[data-testid="share-button"]');
    
    // Step 3: Set expiration
    await page.click('[data-testid="expiration-settings"]');
    await page.selectOption('[data-testid="expiration-period"]', '7 dias');
    
    // Step 4: Generate link
    await page.click('[data-testid="generate-link"]');
    
    // Step 5: Should show expiration info
    await expect(page.locator('[data-testid="expiration-info"]')).toBeVisible();
    await expect(page.locator('[data-testid="expiration-info"])).toContainText('7 dias');
  });

  test('saves report with metrics', async ({ page }) => {
    // Step 1: Go to report builder
    await page.goto('/pt-BR/app/novo-relatorio');
    
    // Step 2: Complete flow with data
    await page.click('[data-testid="upload-source"]');
    await page.setInputFiles('input[type="file"]', 'test-files/sample.xlsx');
    await page.waitForSelector('[data-testid="file-success"]');
    
    await page.click('[data-testid="template-executive"]');
    await page.click('[data-testid="next-button"]');
    
    await page.fill('[data-testid="report-title"]', 'Test Report');
    await page.click('[data-testid="next-button"]');
    
    await page.click('[data-testid="generate-button"]');
    await page.waitForSelector('[data-testid="metrics-summary"]');
    
    // Step 3: Save with metrics
    await page.click('[data-testid="save-with-metrics"]');
    
    // Step 4: Should show metrics in confirmation
    await expect(page.locator('[data-testid="metrics-count"]')).toBeVisible();
    await expect(page.locator('[data-testid="kpis-extracted"]')).toBeVisible();
    
    // Step 5: Confirm save
    await page.click('[data-testid="confirm-save"]');
    
    // Step 6: Should show success with metrics info
    await expect(page.locator('[data-testid="success-message"]')).toContainText('métricas extraídas');
  });

  test('handles save error gracefully', async ({ page }) => {
    // Step 1: Mock save failure
    await page.route('/api/reports', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Failed to save report' })
      });
    });
    
    // Step 2: Try to save
    await page.goto('/pt-BR/app/novo-relatorio');
    await page.click('[data-testid="upload-source"]');
    await page.setInputFiles('input[type="file"]', 'test-files/sample.xlsx');
    await page.waitForSelector('[data-testid="file-success"]');
    
    await page.click('[data-testid="template-executive"]');
    await page.click('[data-testid="next-button"]');
    
    await page.fill('[data-testid="report-title"]', 'Test Report');
    await page.click('[data-testid="next-button"]');
    
    await page.click('[data-testid="generate-button"]');
    await page.waitForSelector('[data-testid="report-preview"]');
    
    await page.click('[data-testid="save-button"]');
    
    // Step 3: Should show error message
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toContainText('Erro ao salvar');
    
    // Step 4: Should not redirect
    await expect(page).toHaveURL('/pt-BR/app/novo-relatorio');
  });

  test('persists report in folder structure', async ({ page }) => {
    // Step 1: Go to report builder with folder selection
    await page.goto('/pt-BR/app/novo-relatorio');
    
    // Step 2: Select folder
    await page.click('[data-testid="folder-selector"]');
    await page.click('[data-testid="folder-reports-2024"]');
    
    // Step 3: Complete and save
    await page.click('[data-testid="upload-source"]');
    await page.setInputFiles('input[type="file"]', 'test-files/sample.xlsx');
    await page.waitForSelector('[data-testid="file-success"]');
    
    await page.click('[data-testid="template-executive"]');
    await page.click('[data-testid="next-button"]');
    
    await page.fill('[data-testid="report-title"]', 'Q1 2024 Report');
    await page.click('[data-testid="next-button"]');
    
    await page.click('[data-testid="generate-button"]');
    await page.waitForSelector('[data-testid="report-preview"]');
    
    await page.click('[data-testid="save-button"]');
    
    // Step 4: Should save in correct folder
    await expect(page.locator('[data-testid="success-message"])).toContainText('salvo em Relatórios 2024');
    
    // Step 5: Navigate to folder to verify
    await page.goto('/pt-BR/app/folders/2024-reports');
    await expect(page.locator('[data-testid="report-q1-2024"]')).toBeVisible();
  });
});
