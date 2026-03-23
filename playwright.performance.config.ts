import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1, // Performance tests precisam ser sequenciais
  reporter: [
    ['html', { outputFolder: 'playwright-performance-report' }],
    ['json', { outputFile: 'performance-test-results.json' }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'performance-chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/performance.spec.ts',
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  timeout: 60 * 1000, // Timeout maior para testes de performance
});
