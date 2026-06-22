import { test, expect } from "@playwright/test";

test.describe("Search Functionality", () => {
  test("should open search dialog", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("button", { name: "Search" }).click();
    const searchInput = page.getByPlaceholder("Search docs");
    await expect(searchInput).toBeVisible();
    await page.screenshot({ path: "screenshots/search-dialog.png" });
  });

  test("should return results when searching", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("button", { name: "Search" }).click();
    await page.getByPlaceholder("Search docs").fill("locator");
    await page.waitForTimeout(1000);
    await page.screenshot({ path: "screenshots/search-results.png" });
  });
});
