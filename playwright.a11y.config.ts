import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-a11y-report' }],
    ['json', { outputFile: 'a11y-test-results.json' }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'accessibility-chromium',
      use: { ...devices['Desktop Chrome'] },
      testMatch: '**/accessibility.spec.ts',
    },
    {
      name: 'accessibility-firefox',
      use: { ...devices['Desktop Firefox'] },
      testMatch: '**/accessibility.spec.ts',
    },
    {
      name: 'accessibility-webkit',
      use: { ...devices['Desktop Safari'] },
      testMatch: '**/accessibility.spec.ts',
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
