import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  testMatch: /ui-a11y\.spec\.ts/,
  timeout: 45000,
  retries: 0,
  workers: 1,
  reporter: [["list"], ["json", { outputFile: "ui-a11y-results.json" }]],
  use: { baseURL: process.env.BASE_URL || "http://localhost:3000", browserName: "chromium" },
});
