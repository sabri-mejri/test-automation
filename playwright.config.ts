import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./test-results",
  timeout: 30_000,
  retries: 0,
  reporter: [
    ["list"],
    ["junit", { outputFile: "reports/junit.xml" }],
    ["html", { open: "never", outputFolder: "reports/html" }],
  ],
  use: {
    screenshot: "on",
    video: "on",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
