import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    await injectAxe(page);
  });

  test('homepage meets WCAG 2.1 AA standards', async ({ page }) => {
    await page.goto('/pt-BR');
    
    await checkA11y(page, {
      detailedReport: true,
      rules: {
        'color-contrast': { enabled: true },
        'keyboard-navigation': { enabled: true },
        'aria-labels': { enabled: true },
        'focus-management': { enabled: true }
      }
    });
  });

  test('dashboard accessibility', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    await checkA11y(page, {
      detailedReport: true,
      rules: {
        'landmark-unique': { enabled: true },
        'region': { enabled: true },
        'heading-order': { enabled: true }
      }
    });
  });

  test('keyboard navigation works properly', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    // Testar navegação por teclado
    await page.keyboard.press('Tab');
    
    // Verificar se elemento focado é visível
    const focusedElement = await page.evaluate(() => document.activeElement);
    expect(focusedElement).toBeTruthy();
    
    // Verificar se elemento focado tem foco visível
    const hasFocusStyles = await page.evaluate((el) => {
      const styles = window.getComputedStyle(el as Element);
      return styles.outline !== 'none' || styles.boxShadow !== 'none';
    }, focusedElement);
    
    expect(hasFocusStyles).toBe(true);
    
    // Testar navegação completa
    let tabCount = 0;
    const maxTabs = 20; // Limite para evitar loop infinito
    
    while (tabCount < maxTabs) {
      await page.keyboard.press('Tab');
      tabCount++;
      
      // Verificar se voltou ao início
      const currentFocused = await page.evaluate(() => document.activeElement);
      if (currentFocused === focusedElement) {
        break;
      }
    }
    
    expect(tabCount).toBeGreaterThan(0);
  });

  test('screen reader compatibility', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    // Verificar ARIA labels
    const buttons = await page.locator('button').all();
    
    for (const button of buttons) {
      const hasAccessibleName = await button.evaluate((el) => {
        const hasText = el.textContent?.trim().length > 0;
        const hasAriaLabel = el.getAttribute('aria-label');
        const hasAriaLabelledBy = el.getAttribute('aria-labelledby');
        const hasTitle = el.getAttribute('title');
        
        return hasText || hasAriaLabel || hasAriaLabelledBy || hasTitle;
      });
      
      expect(hasAccessibleName).toBe(true);
    }
    
    // Verificar landmarks
    const landmarks = await page.locator('main, nav, header, footer, aside, section[aria-label], section[title]').all();
    expect(landmarks.length).toBeGreaterThan(0);
    
    // Verificar headings hierarchy
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
    if (headings.length > 0) {
      // Deve ter pelo menos um h1
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBeGreaterThanOrEqual(1);
    }
  });

  test('form accessibility', async ({ page }) => {
    await page.goto('/pt-BR/login');
    
    // Verificar associações label-input
    const inputs = await page.locator('input').all();
    
    for (const input of inputs) {
      const hasLabel = await input.evaluate((el) => {
        const id = el.getAttribute('id');
        if (id) {
          const label = document.querySelector(`label[for="${id}"]`);
          return !!label;
        }
        
        // Verificar aria-label
        const ariaLabel = el.getAttribute('aria-label');
        const ariaLabelledBy = el.getAttribute('aria-labelledby');
        
        return !!(ariaLabel || ariaLabelledBy);
      });
      
      expect(hasLabel).toBe(true);
    }
    
    // Verificar mensagens de erro
    await page.click('[data-testid="login-button"]');
    
    const errorMessages = await page.locator('[data-testid*="error"]').all();
    for (const error of errorMessages) {
      const hasAriaLive = await error.getAttribute('aria-live');
      const hasRole = await error.getAttribute('role');
      
      expect(hasAriaLive === 'polite' || hasRole === 'alert').toBe(true);
    }
  });

  test('color contrast requirements', async ({ page }) => {
    await page.goto('/pt-BR');
    
    // Função para calcular contraste (simplificada)
    const checkContrast = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const contrastIssues = [];
      
      for (const element of elements) {
        const styles = window.getComputedStyle(element);
        const color = styles.color;
        const backgroundColor = styles.backgroundColor;
        
        if (color && backgroundColor && backgroundColor !== 'rgba(0, 0, 0, 0)') {
          // Simplificado - usar biblioteca real em produção
          const rgbColor = color.match(/\d+/g);
          const rgbBg = backgroundColor.match(/\d+/g);
          
          if (rgbColor && rgbBg) {
            // Calcular luminosidade (simplificado)
            const luminance1 = (0.299 * parseInt(rgbColor[0]) + 0.587 * parseInt(rgbColor[1]) + 0.114 * parseInt(rgbColor[2])) / 255;
            const luminance2 = (0.299 * parseInt(rgbBg[0]) + 0.587 * parseInt(rgbBg[1]) + 0.114 * parseInt(rgbBg[2])) / 255;
            
            const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
            
            if (contrast < 4.5) { // WCAG AA standard
              contrastIssues.push({
                element: element.tagName,
                contrast,
                color,
                backgroundColor
              });
            }
          }
        }
      }
      
      return contrastIssues;
    });
    
    expect(checkContrast).toHaveLength(0);
  });

  test('focus management in modals', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    // Abrir modal (se existir)
    const modalTrigger = page.locator('[data-testid="modal-trigger"]');
    if (await modalTrigger.count() > 0) {
      await modalTrigger.click();
      
      // Verificar se foco está dentro do modal
      const modal = page.locator('[data-testid="modal"]');
      await expect(modal).toBeVisible();
      
      const focusedElement = await page.evaluate(() => document.activeElement);
      const isInsideModal = await modal.evaluate((modal, focused) => {
        return modal.contains(focused as Node);
      }, focusedElement);
      
      expect(isInsideModal).toBe(true);
      
      // Testar trap de foco
      await page.keyboard.press('Tab');
      const newFocusedElement = await page.evaluate(() => document.activeElement);
      const isStillInsideModal = await modal.evaluate((modal, focused) => {
        return modal.contains(focused as Node);
      }, newFocusedElement);
      
      expect(isStillInsideModal).toBe(true);
    }
  });

  test('responsive design accessibility', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    // Testar em diferentes tamanhos
    const viewports = [
      { width: 320, height: 568 },  // Mobile
      { width: 768, height: 1024 }, // Tablet
      { width: 1920, height: 1080 } // Desktop
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      
      // Verificar se elementos ainda são acessíveis
      await checkA11y(page, {
        rules: {
          'touch-target-size': { enabled: viewport.width < 768 },
          'bypass': { enabled: true }
        }
      });
    }
  });

  test('accessibility of dynamic content', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    // Simular carregamento de conteúdo dinâmico
    await page.evaluate(() => {
      const dynamicContent = document.createElement('div');
      dynamicContent.setAttribute('data-testid', 'dynamic-content');
      dynamicContent.setAttribute('aria-live', 'polite');
      dynamicContent.textContent = 'Novo conteúdo carregado';
      document.body.appendChild(dynamicContent);
    });
    
    // Verificar se conteúdo dinâmico é anunciado
    const dynamicContent = page.locator('[data-testid="dynamic-content"]');
    await expect(dynamicContent).toHaveAttribute('aria-live', 'polite');
    
    // Verificar se não há problemas de acessibilidade
    await checkA11y(page, {
      include: '[data-testid="dynamic-content"]'
    });
  });

  test('language accessibility', async ({ page }) => {
    const languages = ['pt-BR', 'en-US', 'es-ES'];
    
    for (const lang of languages) {
      await page.goto(`/${lang}`);
      
      // Verificar atributo lang
      const htmlLang = await page.locator('html').getAttribute('lang');
      expect(htmlLang).toBe(lang.toLowerCase());
      
      // Verificar se direção do texto está correta
      const htmlDir = await page.locator('html').getAttribute('dir');
      expect(htmlDir).toBe('ltr'); // Para idiomas ocidentais
      
      // Verificar acessibilidade básica
      await checkA11y(page, {
        rules: {
          'html-has-lang': { enabled: true },
          'valid-lang': { enabled: true }
        }
      });
    }
  });
});
