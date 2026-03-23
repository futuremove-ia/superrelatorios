import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('meets Core Web Vitals thresholds', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/pt-BR');
    
    // Aguardar carregamento completo
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // LCP (Largest Contentful Paint) < 2.5s
    const lcp = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });
    });
    
    expect(lcp).toBeLessThan(2500);
    expect(loadTime).toBeLessThan(3000);
  });

  test('dashboard performance with large datasets', async ({ page }) => {
    // Simular dataset grande
    await page.route('/api/dashboard/metrics', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(generateLargeMetricsDataset(10000))
      });
    });

    await page.goto('/pt-BR/app');
    
    // Medir tempo de renderização
    const renderStart = Date.now();
    await page.waitForSelector('[data-testid="metrics-grid"]');
    const renderTime = Date.now() - renderStart;
    
    expect(renderTime).toBeLessThan(1000);
  });

  test('memory usage during navigation', async ({ page }) => {
    const initialMemory = await page.evaluate(() => {
      return (performance as any).memory?.usedJSHeapSize || 0;
    });

    // Simular navegação intensa
    for (let i = 0; i < 20; i++) {
      await page.goto('/pt-BR/app');
      await page.goto('/pt-BR/app/metricas');
      await page.goto('/pt-BR/app/painel-decisao');
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

    // Aumento de memória deve ser < 50%
    expect(memoryIncreasePercent).toBeLessThan(50);
  });

  test('bundle size and loading performance', async ({ page }) => {
    const responses: any[] = [];
    
    page.on('response', response => {
      if (response.url().includes('.js') || response.url().includes('.css')) {
        responses.push({
          url: response.url(),
          size: response.headers()['content-length'] || 0
        });
      }
    });

    await page.goto('/pt-BR');
    await page.waitForLoadState('networkidle');

    const totalSize = responses.reduce((sum, response) => sum + parseInt(response.size || '0'), 0);
    
    // Bundle size deve ser < 1MB (não gzipped)
    expect(totalSize).toBeLessThan(1000000);
    
    // Número de requests deve ser razoável
    expect(responses.length).toBeLessThan(50);
  });

  test('image optimization', async ({ page }) => {
    await page.goto('/pt-BR');
    
    const images = await page.locator('img').all();
    
    for (const image of images) {
      // Verificar se imagens têm dimensions
      const hasWidth = await image.getAttribute('width');
      const hasHeight = await image.getAttribute('height');
      
      expect(hasWidth || hasHeight).toBeTruthy();
      
      // Verificar se têm alt text (exceto decorativas)
      const alt = await image.getAttribute('alt');
      const role = await image.getAttribute('role');
      
      if (role !== 'presentation') {
        expect(alt).toBeTruthy();
      }
      
      // Verificar se estão carregando
      await expect(image).toBeVisible();
    }
  });

  test('font loading performance', async ({ page }) => {
    await page.goto('/pt-BR');
    
    // Verificar se fonts carregaram
    const fontFaces = await page.evaluate(() => {
      return (document as any).fonts ? (document as any).fonts.size : 0;
    });
    
    expect(fontFaces).toBeGreaterThan(0);
    
    // Verificar se não há FOUT (Flash of Unstyled Text)
    const hasFout = await page.evaluate(() => {
      const textElements = document.querySelectorAll('h1, h2, h3, p, span');
      return Array.from(textElements).some(el => {
        const styles = window.getComputedStyle(el);
        return styles.fontFamily.includes('system-ui') || styles.fontFamily.includes('Arial');
      });
    });
    
    expect(hasFout).toBe(false);
  });

  test('API response times', async ({ page }) => {
    const responseTimes: number[] = [];
    
    page.on('response', async (response) => {
      if (response.url().includes('/api/')) {
        // Usar performance timing em vez de response.timing
        const responseTime = await page.evaluate((url) => {
          const entries = performance.getEntriesByName(url, 'resource') as PerformanceResourceTiming[];
          if (entries.length > 0) {
            const entry = entries[entries.length - 1];
            return entry.responseEnd - entry.requestStart;
          }
          return 0;
        }, response.url());
        
        if (responseTime > 0) {
          responseTimes.push(responseTime);
        }
      }
    });

    await page.goto('/pt-BR/app');
    await page.waitForLoadState('networkidle');

    if (responseTimes.length > 0) {
      const avgResponseTime = responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length;
      
      // API responses devem ser < 1s
      expect(avgResponseTime).toBeLessThan(1000);
    }
  });

  test('lazy loading performance', async ({ page }) => {
    await page.goto('/pt-BR/app');
    
    // Verificar se elementos abaixo do fold não são carregados inicialmente
    const belowFoldElements = page.locator('[data-lazy="true"]');
    
    if (await belowFoldElements.count() > 0) {
      // Verificar se não estão visíveis inicialmente
      const firstElement = belowFoldElements.first();
      await expect(firstElement).not.toBeInViewport();
      
      // Scroll para carregar
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1000);
      
      // Verificar se carregaram após scroll
      await expect(firstElement).toBeInViewport();
    }
  });

  test('caching effectiveness', async ({ page }) => {
    // Primeira visita
    const startTime1 = Date.now();
    await page.goto('/pt-BR');
    await page.waitForLoadState('networkidle');
    const firstVisitTime = Date.now() - startTime1;
    
    // Segunda visita (deve usar cache)
    const startTime2 = Date.now();
    await page.goto('/pt-BR');
    await page.waitForLoadState('networkidle');
    const secondVisitTime = Date.now() - startTime2;
    
    // Segunda visita deve ser significativamente mais rápida
    expect(secondVisitTime).toBeLessThan(firstVisitTime * 0.5);
  });

  test('performance monitoring integration', async ({ page }) => {
    await page.goto('/pt-BR');
    
    // Verificar se monitoring tools estão presentes
    const hasAnalytics = await page.evaluate(() => {
      return !!(window as any).gtag || !!(window as any).ga || !!(window as any).dataLayer;
    });
    
    const hasPerformanceMonitoring = await page.evaluate(() => {
      return !!(window.performance && window.performance.getEntriesByType);
    });
    
    expect(hasAnalytics).toBe(true);
    expect(hasPerformanceMonitoring).toBe(true);
  });

  test('error handling performance', async ({ page }) => {
    // Simular erro de API
    await page.route('/api/dashboard/metrics', route => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal Server Error' })
      });
    });

    const startTime = Date.now();
    await page.goto('/pt-BR/app');
    
    // Verificar se erro é tratado rapidamente
    await expect(page.locator('[data-testid="error-message"]')).toBeVisible({ timeout: 5000 });
    
    const errorHandlingTime = Date.now() - startTime;
    expect(errorHandlingTime).toBeLessThan(3000);
  });
});

function generateLargeMetricsDataset(size: number) {
  return Array.from({ length: size }, (_, i) => ({
    id: i,
    name: `Metric ${i}`,
    value: Math.random() * 100,
    trend: Math.random() > 0.5 ? 'up' : 'down',
    category: ['sales', 'marketing', 'operations', 'finance'][Math.floor(Math.random() * 4)]
  }));
}
