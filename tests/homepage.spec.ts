import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load the homepage successfully", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect(page).toHaveTitle(/Playwright/);
    await page.screenshot({ path: "screenshots/homepage.png", fullPage: true });
  });

  test("should have a Get Started link", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    const getStarted = page.getByRole("link", { name: "Get started" });
    await expect(getStarted).toBeVisible();
    await page.screenshot({ path: "screenshots/get-started-visible.png" });
  });

  test("should navigate to the Get Started page", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.getByRole("link", { name: "Get started" }).click();
    await expect(page).toHaveURL(/.*intro/);
    await page.screenshot({
      path: "screenshots/get-started-page.png",
      fullPage: true,
    });
  });
});
