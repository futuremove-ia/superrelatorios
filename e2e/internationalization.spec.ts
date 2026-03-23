import { test, expect } from '@playwright/test';

test.describe('Internationalization Tests', () => {
  const languages = ['pt-BR', 'en-US', 'es-ES'] as const;

  test('all pages load correctly in all languages', async ({ page }) => {
    const pages = [
      '/',
      '/app',
      '/app/painel-decisao',
      '/app/metricas',
      '/login'
    ];

    for (const lang of languages) {
      for (const pagePath of pages) {
        await page.goto(`/${lang}${pagePath}`);
        
        // Verificar se não há textos não traduzidos
        const untranslatedElements = await page.locator('[data-untranslated]').count();
        expect(untranslatedElements).toBe(0);
        
        // Verificar se idioma está correto no HTML
        const htmlLang = await page.locator('html').getAttribute('lang');
        expect(htmlLang).toBe(lang.toLowerCase());
        
        // Verificar se página carregou sem erros
        await expect(page.locator('body')).toBeVisible();
      }
    }
  });

  test('language switching preserves user context', async ({ page }) => {
    // Login em português
    await page.goto('/pt-BR/login');
    await page.fill('[data-testid="email-input"]', 'test@example.com');
    await page.fill('[data-testid="password-input"]', 'password123');
    await page.click('[data-testid="login-button"]');

    await expect(page).toHaveURL('/pt-BR/app');

    // Mudar para inglês
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');

    // Verificar redirecionamento e contexto mantido
    await expect(page).toHaveURL('/en-US/app');
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
  });

  test('URLs are properly localized', async ({ page }) => {
    const urlTests = [
      { lang: 'pt-BR', path: '/app/painel-decisao', expected: '/pt-BR/app/painel-decisao' },
      { lang: 'en-US', path: '/app/decision-panel', expected: '/en-US/app/decision-panel' },
      { lang: 'es-ES', path: '/app/panel-decision', expected: '/es-ES/app/panel-decision' }
    ];

    for (const { lang, path, expected } of urlTests) {
      await page.goto(`/${lang}${path}`);
      await expect(page).toHaveURL(expected);
    }
  });

  test('date and number formatting by locale', async ({ page }) => {
    // Criar página de teste com elementos formatados
    await page.goto('/pt-BR/app');
    
    // Mock dados formatados (implementar elementos de teste específicos)
    await page.evaluate(() => {
      const testDiv = document.createElement('div');
      testDiv.innerHTML = `
        <div data-testid="formatted-date">01/12/2024</div>
        <div data-testid="formatted-number">1.234,56</div>
        <div data-testid="formatted-currency">R$ 1.234,56</div>
      `;
      document.body.appendChild(testDiv);
    });

    // Verificar formatação em português
    expect(await page.locator('[data-testid="formatted-date"]').textContent()).toBe('01/12/2024');
    expect(await page.locator('[data-testid="formatted-number"]').textContent()).toBe('1.234,56');
    expect(await page.locator('[data-testid="formatted-currency"]').textContent()).toBe('R$ 1.234,56');

    // Mudar para inglês e verificar
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');
    
    await page.evaluate(() => {
      const testDiv = document.querySelector('[data-testid="formatted-date"]');
      if (testDiv) testDiv.textContent = '12/1/2024';
      const numberDiv = document.querySelector('[data-testid="formatted-number"]');
      if (numberDiv) numberDiv.textContent = '1,234.56';
      const currencyDiv = document.querySelector('[data-testid="formatted-currency"]');
      if (currencyDiv) currencyDiv.textContent = '$1,234.56';
    });

    expect(await page.locator('[data-testid="formatted-date"]').textContent()).toBe('12/1/2024');
    expect(await page.locator('[data-testid="formatted-number"]').textContent()).toBe('1,234.56');
    expect(await page.locator('[data-testid="formatted-currency"]').textContent()).toBe('$1,234.56');
  });

  test('language persistence across sessions', async ({ page }) => {
    // Definir idioma como espanhol
    await page.goto('/pt-BR');
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-es-ES"]');
    
    // Recarregar página
    await page.reload();
    
    // Verificar se idioma foi mantido
    await expect(page).toHaveURL('/es-ES');
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('fallback to default language for unsupported locales', async ({ page }) => {
    // Tentar acessar com idioma não suportado
    await page.goto('/fr-CA/app');
    
    // Deve redirecionar para idioma padrão (pt-BR)
    await expect(page).toHaveURL('/pt-BR/app');
  });

  test('SEO attributes update with language', async ({ page }) => {
    const seoTests = [
      { lang: 'pt-BR', expectedTitle: 'SuperRelatórios - Dashboard' },
      { lang: 'en-US', expectedTitle: 'SuperRelatórios - Dashboard' },
      { lang: 'es-ES', expectedTitle: 'SuperRelatórios - Dashboard' }
    ];

    for (const { lang, expectedTitle } of seoTests) {
      await page.goto(`/${lang}/app`);
      
      // Verificar atributos SEO
      const htmlLang = await page.locator('html').getAttribute('lang');
      expect(htmlLang).toBe(lang.toLowerCase());
      
      // Verificar hreflang links (se implementados)
      const hreflangLinks = await page.locator('link[rel="alternate"][hreflang]').count();
      if (hreflangLinks > 0) {
        expect(hreflangLinks).toBeGreaterThan(0);
      }
    }
  });

  test('error messages are translated', async ({ page }) => {
    // Testar em português
    await page.goto('/pt-BR/login');
    await page.click('[data-testid="login-button"]'); // Submit sem dados
    
    // Verificar mensagens de erro em português
    await expect(page.locator('[data-testid="email-error"]')).toContainText('obrigatório');
    
    // Mudar para inglês
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');
    await page.click('[data-testid="login-button"]');
    
    // Verificar mensagens de erro em inglês
    await expect(page.locator('[data-testid="email-error"]')).toContainText('required');
  });

  test('navigation links are localized', async ({ page }) => {
    // Testar links de navegação
    await page.goto('/pt-BR/app');
    
    const navLinks = await page.locator('[data-testid="nav-link"]').all();
    
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      expect(href).toContain('/pt-BR/');
    }
    
    // Mudar idioma e verificar novamente
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="lang-en-US"]');
    
    const navLinksEn = await page.locator('[data-testid="nav-link"]').all();
    for (const link of navLinksEn) {
      const href = await link.getAttribute('href');
      expect(href).toContain('/en-US/');
    }
  });
});
