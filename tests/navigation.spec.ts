import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to API docs", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("link", { name: "API", exact: true }).click();
    await expect(page).toHaveURL(/.*api\/class-playwright/);
    await page.screenshot({
      path: "screenshots/api-docs.png",
      fullPage: true,
    });
  });

  test("should navigate to Community page", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("link", { name: "Community" }).click();
    await expect(page).toHaveURL(/.*community/);
    await page.screenshot({
      path: "screenshots/community-page.png",
      fullPage: true,
    });
  });

  test("should toggle dark mode", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.screenshot({ path: "screenshots/light-mode.png" });
    const toggle = page.locator('button[class*="toggle"]').first();
    if (await toggle.isVisible()) {
      await toggle.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: "screenshots/dark-mode.png" });
    }
  });
});
