import { test, expect } from "@playwright/test";

test.describe("Onboarding Journey", () => {
  test("should load onboarding wizard with 4 flow options", async ({
    page,
  }) => {
    await page.goto("/onboarding");

    await expect(page.locator("text=Diagnóstico Instantâneo")).toBeVisible();
    await expect(page.locator("text=Onboarding Guiado")).toBeVisible();
    await expect(page.locator("text=Conexão Directa")).toBeVisible();
    await expect(
      page.locator("text=Explorar com Dados de Exemplo"),
    ).toBeVisible();
  });

  test("should show descriptions for each flow", async ({ page }) => {
    await page.goto("/onboarding");

    await expect(
      page.locator("text=Upload rápido → Impacto em 30 segundos"),
    ).toBeVisible();
    await expect(
      page.locator("text=Caminho estratégico com contexto e documentos"),
    ).toBeVisible();
    await expect(page.locator("text=Google Drive ou OneDrive")).toBeVisible();
    await expect(
      page.locator("text=Testar a plataforma sem carregar dados"),
    ).toBeVisible();
  });

  test("should navigate to step 1 when instant flow is selected", async ({
    page,
  }) => {
    await page.goto("/onboarding");

    await page.click("text=Diagnóstico Instantâneo");

    await expect(page.locator("text=Dados da Empresa")).toBeVisible();
    await expect(
      page.locator('input[placeholder*="Minha Empresa"]'),
    ).toBeVisible();
  });

  test("should navigate to step 1 when strategic flow is selected", async ({
    page,
  }) => {
    await page.goto("/onboarding");

    await page.click("text=Onboarding Guiado");

    await expect(page.locator("text=Dados da Empresa")).toBeVisible();
  });

  test("should navigate to step 1 when cloud flow is selected", async ({
    page,
  }) => {
    await page.goto("/onboarding");

    await page.click("text=Conexão Directa");

    await expect(page.locator("text=Dados da Empresa")).toBeVisible();
  });

  test("should navigate to step 1 when demo flow is selected", async ({
    page,
  }) => {
    await page.goto("/onboarding");

    await page.click("text=Explorar com Dados de Exemplo");

    await expect(page.locator("text=Dados da Empresa")).toBeVisible();
  });
});
