import { test, expect } from "@playwright/test";

/**
 * Regressão: rotas /:locale/app/* devem redirecionar ao login com locale e redirect preservado
 * (correções OP-005 e navegação localizada).
 */
test.describe("App navigation and auth gate", () => {
  test("pt-BR /app/metrics redirects to pt-BR login with redirect containing metrics path", async ({
    page,
  }) => {
    await page.goto("/pt-BR/app/metrics");
    await expect(page).toHaveURL(/\/pt-BR\/login/);
    const redirect = new URL(page.url()).searchParams.get("redirect");
    expect(redirect).toBeTruthy();
    expect(decodeURIComponent(redirect!)).toContain("/pt-BR/app/metrics");
  });

  test("en-US /app/reports redirects to en-US login with redirect", async ({ page }) => {
    await page.goto("/en-US/app/reports");
    await expect(page).toHaveURL(/\/en-US\/login/);
    const redirect = new URL(page.url()).searchParams.get("redirect");
    expect(redirect).toBeTruthy();
    expect(decodeURIComponent(redirect!)).toContain("/en-US/app/reports");
  });

  test("es-ES /app/metrics redirects to es-ES login with redirect", async ({ page }) => {
    await page.goto("/es-ES/app/metrics");
    await expect(page).toHaveURL(/\/es-ES\/login/);
    const redirect = new URL(page.url()).searchParams.get("redirect");
    expect(redirect).toBeTruthy();
    expect(decodeURIComponent(redirect!)).toContain("/es-ES/app/metrics");
  });

  test("pt-BR /app/settings redirects to login with settings path", async ({ page }) => {
    await page.goto("/pt-BR/app/settings");
    await expect(page).toHaveURL(/\/pt-BR\/login/);
    const redirect = new URL(page.url()).searchParams.get("redirect");
    expect(decodeURIComponent(redirect!)).toContain("/pt-BR/app/settings");
  });
});

/**
 * Quando há sessão (ex.: modo demo sem Supabase), banners de demonstração devem aparecer.
 * Em ambientes só com login real, estes testes são ignorados.
 */
test.describe("Demo transparency banners (when app is reachable)", () => {
  test("decision panel shows demo notice when not on login", async ({ page }) => {
    await page.goto("/pt-BR/app/decision-panel");
    if (page.url().includes("/login")) {
      test.skip();
      return;
    }
    await expect(page.getByTestId("decision-panel-demo-banner")).toBeVisible();
  });

  test("metrics dashboard shows demo KPI notice when not on login", async ({ page }) => {
    await page.goto("/pt-BR/app/metrics");
    if (page.url().includes("/login")) {
      test.skip();
      return;
    }
    await expect(page.getByTestId("metrics-demo-kpis-banner")).toBeVisible();
  });
});
