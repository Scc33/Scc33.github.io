import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 3 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  reporter: "html",
  use: {
    trace: "on-first-retry",
    baseURL: "http://localhost:4173"
  },

  projects: [
    /* Test against lighthouse. */
    {
      name: "lighthouse",
      testMatch: "playwright.test.js"
    },

    /* Test against desktop viewports. */
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
      testIgnore: "playwright.test.js"
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
      testIgnore: "playwright.test.js"
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
      testIgnore: "playwright.test.js"
    },

    /* Test against mobile viewports. */
    {
      name: "mobileChrome",
      use: { ...devices["Pixel 5"] },
      testIgnore: "playwright.test.js"
    },
    {
      name: "mobileSafari",
      use: { ...devices["iPhone 12"] },
      testIgnore: "playwright.test.js"
    },

    /* Test against branded browsers. */
    {
      name: "googleChrome",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
      testIgnore: "playwright.test.js"
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "yarn run dev --port 4173",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe"
  }
});
