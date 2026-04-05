---
title: E2E Tests Plan - Cloud Storage Features
version: 1.0.0
updated: 2026-04-05
status: active
---

# E2E Tests Plan - Cloud Storage Features

## Overview

Este documento estabelece a estratégia completa de testes E2E para as funcionalidades de Cloud Storage (Google Drive + OneDrive) e RAG, seguindo as melhores práticas de testing e os princípios do projeto.

---

## 1. Test Strategy

### 1.1 Philosophy

| Princípio         | Aplicação                              |
| ----------------- | -------------------------------------- |
| **TDD**           | Testes escritos antes da implementação |
| **AAA**           | Arrange → Act → Assert bem definido    |
| **Isolation**     | Cada teste independente dos outros     |
| **Idempotency**   | Pode ser executado múltiplas vezes     |
| **Fast Feedback** | Resultados em < 5 minutos              |

### 1.2 Test Pyramid

```
        /\
       /E2E\        ← Poucos, críticos (10-15)
      /-----\
     /      \
    /Integration\   ← Média quantidade (30-40)
   /-------------
  /   Unit Tests    ← Muitos, rápidos (100+)
 /_________________
```

**Prioridade:** E2E para fluxos críticos de usuário

---

## 2. Test Scenarios

### 2.1 Cloud Storage - OAuth Flow

| ID         | Scenario                   | Priority | Complexity |
| ---------- | -------------------------- | -------- | ---------- |
| CS-E2E-001 | Google Drive OAuth Connect | P0       | Medium     |
| CS-E2E-002 | OneDrive OAuth Connect     | P0       | Medium     |
| CS-E2E-003 | OAuth Redirect with Code   | P0       | High       |
| CS-E2E-004 | Token Storage in Supabase  | P0       | High       |
| CS-E2E-005 | Disconnect Google Drive    | P1       | Low        |
| CS-E2E-006 | Disconnect OneDrive        | P1       | Low        |

### 2.2 Cloud Storage - File Operations

| ID         | Scenario                | Priority | Complexity |
| ---------- | ----------------------- | -------- | ---------- |
| CS-E2E-007 | List Google Drive Files | P0       | Medium     |
| CS-E2E-008 | List OneDrive Files     | P0       | Medium     |
| CS-E2E-009 | Navigate Folders        | P1       | Medium     |
| CS-E2E-010 | Read Google Sheet       | P0       | High       |
| CS-E2E-011 | Read CSV File           | P0       | High       |
| CS-E2E-012 | Import Data to System   | P0       | High       |

### 2.3 Cloud Storage - Error Handling

| ID         | Scenario               | Priority | Complexity |
| ---------- | ---------------------- | -------- | ---------- |
| CS-E2E-013 | Expired Token Refresh  | P1       | High       |
| CS-E2E-014 | Invalid Credentials    | P1       | Medium     |
| CS-E2E-015 | Network Error Handling | P1       | Medium     |
| CS-E2E-016 | Rate Limit Handling    | P2       | Low        |

### 2.4 RAG Module

| ID          | Scenario             | Priority | Complexity |
| ----------- | -------------------- | -------- | ---------- |
| RAG-E2E-001 | Upload Document      | P0       | High       |
| RAG-E2E-002 | Index Document       | P0       | High       |
| RAG-E2E-003 | Chat with AI Analyst | P0       | High       |
| RAG-E2E-004 | Context Retrieval    | P0       | High       |

---

## 3. Test Implementation

### 3.1 Structure

```
e2e/
├── cloud-storage/
│   ├── oauth.spec.ts
│   ├── files.spec.ts
│   └── errors.spec.ts
├── rag/
│   ├── chat.spec.ts
│   └── document.spec.ts
├── fixtures/
│   ├── test-sheet.csv
│   ├── test-sheet.xlsx
│   └── test-document.pdf
├── pages/
│   ├── SettingsPage.ts
│   ├── CloudStoragePage.ts
│   └── AIAnalystPage.ts
└── utils/
    ├── api.ts
    ├── auth.ts
    └── mock-oauth.ts
```

### 3.2 Page Objects

```typescript
// e2e/pages/SettingsPage.ts
import { Page, Locator } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly cloudConnectionsTab: Locator;
  readonly connectGoogleDriveBtn: Locator;
  readonly connectOneDriveBtn: Locator;
  readonly googleDriveStatus: Locator;
  readonly oneDriveStatus: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cloudConnectionsTab = page.getByRole("tab", {
      name: /conexões na nuvem/i,
    });
    this.connectGoogleDriveBtn = page.getByTestId("connect-google-drive");
    this.connectOneDriveBtn = page.getByTestId("connect-onedrive");
    this.googleDriveStatus = page.getByTestId("google-drive-status");
    this.oneDriveStatus = page.getByTestId("onedrive-status");
  }

  async goto(): Promise<void> {
    await this.page.goto("/app/settings");
    await this.cloudConnectionsTab.click();
  }

  async connectGoogleDrive(): Promise<void> {
    await this.connectGoogleDriveBtn.click();
    // Handle popup/redirect
    await this.page.waitForURL(/accounts.google.com/);
  }

  async disconnectGoogleDrive(): Promise<void> {
    await this.page.getByTestId("disconnect-google-drive").click();
    await this.page.getByRole("button", { name: /confirmar/i }).click();
  }

  async isGoogleConnected(): Promise<boolean> {
    const status = await this.googleDriveStatus.textContent();
    return status?.toLowerCase().includes("conectado") ?? false;
  }
}
```

### 3.3 Test Cases

#### CS-E2E-001: Google Drive OAuth Connect

```typescript
// e2e/cloud-storage/oauth.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Cloud Storage OAuth", () => {
  test.beforeEach(async ({ page }) => {
    // Setup: Login as tenant admin
    await page.loginAsTenantAdmin();
  });

  test("CS-E2E-001: should connect Google Drive", async ({ page }) => {
    // Arrange
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();

    // Act
    await settingsPage.connectGoogleDrive();

    // Simulate OAuth flow (in real test, would use proper auth)
    await page.evaluate(() => {
      window.location.href = "/app/settings?oauth=success&provider=google";
    });

    // Assert
    await expect(settingsPage.googleDriveStatus).toContainText("Conectado");

    // Verify in database
    const config = await api.getCloudConfig("google_drive");
    expect(config).toBeDefined();
    expect(config.provider).toBe("google_drive");
  });

  test("CS-E2E-002: should connect OneDrive", async ({ page }) => {
    // Arrange
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();

    // Act
    await settingsPage.connectOneDrive();

    // Simulate OAuth flow
    await page.evaluate(() => {
      window.location.href = "/app/settings?oauth=success&provider=microsoft";
    });

    // Assert
    await expect(settingsPage.oneDriveStatus).toContainText("Conectado");
  });

  test("CS-E2E-005: should disconnect Google Drive", async ({ page }) => {
    // Arrange
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();

    // Pre-condition: Connected
    await api.connectCloudStorage("google_drive", testUser.tokens.google);
    await settingsPage.goto();

    // Act
    await settingsPage.disconnectGoogleDrive();

    // Assert
    await expect(settingsPage.googleDriveStatus).toContainText("Desconectado");

    // Verify removed from database
    const config = await api.getCloudConfig("google_drive");
    expect(config).toBeNull();
  });
});
```

#### CS-E2E-007: List Files

```typescript
// e2e/cloud-storage/files.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Cloud Storage Files", () => {
  test.beforeEach(async ({ page }) => {
    await page.loginAsTenantAdmin();
    await api.connectCloudStorage("google_drive", testUser.tokens.google);
  });

  test("CS-E2E-007: should list Google Drive files", async ({ page }) => {
    // Arrange
    const cloudPage = new CloudStoragePage(page);
    await cloudPage.goto();

    // Act
    await cloudPage.selectProvider("google_drive");
    await cloudPage.waitForFilesToLoad();

    // Assert
    await expect(cloudPage.fileList).not.toBeEmpty();

    const firstFile = await cloudPage.fileList.first();
    await expect(firstFile).toHaveAttribute("data-type", "file");
  });

  test("CS-E2E-009: should navigate folders", async ({ page }) => {
    // Arrange
    const cloudPage = new CloudStoragePage(page);
    await cloudPage.goto();
    await cloudPage.selectProvider("google_drive");

    // Act
    await cloudPage.openFolder("My Documents");
    await cloudPage.waitForFilesToLoad();

    // Assert
    await expect(cloudPage.breadcrumb).toContainText("My Documents");
    await expect(cloudPage.backButton).toBeVisible();
  });

  test("CS-E2E-010: should read Google Sheet", async ({ page }) => {
    // Arrange
    const cloudPage = new CloudStoragePage(page);
    await cloudPage.goto();
    await cloudPage.selectProvider("google_drive");

    // Act
    await cloudPage.selectFile("test-sheet.xlsx");
    await cloudPage.clickImport();

    // Assert
    await expect(cloudPage.importSuccessMessage).toBeVisible();
    await expect(cloudPage.importSuccessMessage).toContainText(
      "linhas importadas",
    );

    // Verify data imported
    const metrics = await api.getUserMetrics();
    expect(metrics.length).toBeGreaterThan(0);
  });
});
```

#### RAG-E2E-003: Chat with AI Analyst

```typescript
// e2e/rag/chat.spec.ts
import { test, expect } from "@playwright/test";

test.describe("AI Analyst Chat", () => {
  test.beforeEach(async ({ page }) => {
    await page.loginAsTenantUser();

    // Pre-condition: Documents indexed
    await api.indexDocument({
      title: "Relatório Financeiro Q1 2026",
      content: "Receita: R$ 1.2M, Custos: R$ 800K, Lucro: R$ 400K",
    });
  });

  test("RAG-E2E-003: should get answer from AI Analyst", async ({ page }) => {
    // Arrange
    const aiPage = new AIAnalystPage(page);
    await aiPage.goto();

    // Act
    await aiPage.sendMessage("Qual foi o lucro do Q1?");
    await aiPage.waitForResponse();

    // Assert
    const lastMessage = await aiPage.getLastMessage();
    await expect(lastMessage).toContainText("R$ 400K");
    await expect(lastMessage).not.toContainText("desculpe");
  });

  test("RAG-E2E-004: should retrieve relevant context", async ({ page }) => {
    // Arrange
    const aiPage = new AIAnalystPage(page);
    await aiPage.goto();

    // Act
    await aiPage.sendMessage("Me fale sobre os custos");
    await aiPage.waitForResponse();

    // Assert
    const contextChips = await aiPage.getContextChips();
    expect(contextChips).toHaveLength(await api.getIndexedDocuments().length);
  });
});
```

---

## 4. Fixtures & Helpers

### 4.1 Test Data Fixtures

```typescript
// e2e/fixtures/test-data.ts
export const testUser = {
  id: "test-user-id",
  email: "test@superrelatorios.com",
  organizationId: "test-org-id",
  role: "tenant_admin",
  tokens: {
    google: {
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
    },
    microsoft: {
      accessToken: "mock-ms-access-token",
      refreshToken: "mock-ms-refresh-token",
    },
  },
};

export const testFiles = {
  googleSheet: {
    id: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2uT3M",
    name: "Test Financial Report.xlsx",
    mimeType: "application/vnd.google-apps.spreadsheet",
  },
  onedriveCsv: {
    id: "onedrive-file-id",
    name: "test-data.csv",
    mimeType: "text/csv",
  },
};
```

### 4.2 API Helpers

```typescript
// e2e/utils/api.ts
import { supabase } from "@/lib/supabase";

export const api = {
  async connectCloudStorage(
    provider: "google_drive" | "onedrive",
    tokens: { accessToken: string; refreshToken: string },
  ): Promise<void> {
    await supabase.from("cloud_storage_configs").upsert({
      organization_id: testUser.organizationId,
      provider,
      credentials: JSON.stringify(tokens),
      is_valid: true,
    });
  },

  async getCloudConfig(provider: string) {
    return supabase
      .from("cloud_storage_configs")
      .select("*")
      .eq("organization_id", testUser.organizationId)
      .eq("provider", provider)
      .single();
  },

  async indexDocument(doc: { title: string; content: string }) {
    // Implementation for indexing test documents
  },

  async getIndexedDocuments() {
    return supabase
      .from("rag_documents")
      .select("*")
      .eq("organization_id", testUser.organizationId);
  },
};
```

---

## 5. CI/CD Integration

### 5.1 GitHub Actions

```yaml
# .github/workflows/e2e.yml
name: E2E Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npm run test:e2e
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
```

### 5.2 Playwright Config

```typescript
// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html", { outputFolder: "playwright-report" }],
    ["json", { outputFile: "playwright-report/results.json" }],
  ],

  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
```

---

## 6. Execution & Reporting

### 6.1 Running Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run specific test file
npm run test:e2e -- cloud-storage/oauth.spec.ts

# Run with UI
npm run test:e2e -- --ui

# Run with trace
npm run test:e2e -- --trace on
```

### 6.2 Expected Results

| Metric         | Target               |
| -------------- | -------------------- |
| Pass Rate      | > 95%                |
| Execution Time | < 5 min              |
| Flakiness      | < 2%                 |
| Coverage       | 100% of P0 scenarios |

### 6.3 Test Report Sample

```
=============================== test session starts ===============================
platform darwin -- Node.js v20.x.x, Playwright v1.42.x
...
e2e/cloud-storage/oauth.spec.ts
  ✓ CS-E2E-001: should connect Google Drive (2.3s)
  ✓ CS-E2E-002: should connect OneDrive (2.1s)
  ✓ CS-E2E-005: should disconnect Google Drive (1.8s)

e2e/cloud-storage/files.spec.ts
  ✓ CS-E2E-007: should list Google Drive files (1.5s)
  ✓ CS-E2E-009: should navigate folders (2.0s)
  ✓ CS-E2E-010: should read Google Sheet (3.2s)

e2e/rag/chat.spec.ts
  ✓ RAG-E2E-003: should get answer from AI Analyst (4.5s)
  ✓ RAG-E2E-004: should retrieve relevant context (3.8s)

======================== 11 passed, 0 failed in 28.4s ===========================
```

---

## 7. Maintenance

### 7.1 When to Update Tests

| Trigger     | Action                       |
| ----------- | ---------------------------- |
| New feature | Add corresponding E2E test   |
| Bug report  | Add regression test          |
| UX change   | Update Page Object selectors |
| API change  | Update API helpers           |

### 7.2 Troubleshooting

| Issue          | Solution               |
| -------------- | ---------------------- |
| Test flaking   | Add explicit waits     |
| Auth issues    | Check session handling |
| Timeout        | Increase test timeout  |
| Database state | Use test isolation     |

---

## 8. Checklist

### Setup

- [ ] Playwright installed
- [ ] Test database configured
- [ ] Page Objects implemented
- [ ] Fixtures created

### Cloud Storage Tests

- [ ] CS-E2E-001 OAuth Connect Google
- [ ] CS-E2E-002 OAuth Connect OneDrive
- [ ] CS-E2E-005 Disconnect
- [ ] CS-E2E-007 List Files
- [ ] CS-E2E-010 Read Sheet

### RAG Tests

- [ ] RAG-E2E-003 Chat with AI
- [ ] RAG-E2E-004 Context Retrieval

### CI/CD

- [ ] GitHub Actions workflow
- [ ] Test reports configured
- [ ] Slack notifications
