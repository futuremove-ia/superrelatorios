import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-i18n-report' }],
    ['json', { outputFile: 'i18n-test-results.json' }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'i18n-chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/internationalization.spec.ts',
    },
    {
      name: 'i18n-firefox',
      use: { ...devices['Desktop Firefox'] },
      testMatch: '**/internationalization.spec.ts',
    },
    {
      name: 'i18n-webkit',
      use: { ...devices['Desktop Safari'] },
      testMatch: '**/internationalization.spec.ts',
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
