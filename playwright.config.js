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
    trace: "on-first-retry"
  },

  projects: [
    /* Health check */
    {
      name: "healthCheck",
      testMatch: "healthCheck.test.js",
      use: { baseURL: "https://seancoughlin.me" }
    },

    /* Test against lighthouse. */
    {
      name: "lighthouse",
      testMatch: "lighthouse.test.js",
      use: { baseURL: "http://localhost:4173" }
    },

    /* Test against desktop viewports. */
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], baseURL: "http://localhost:4173" },
      testIgnore: ["lighthouse.test.js", "healthCheck.test.js"]
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], baseURL: "http://localhost:4173" },
      testIgnore: ["lighthouse.test.js", "healthCheck.test.js"]
    },

    /* Test against mobile viewports. */
    {
      name: "mobileChrome",
      use: {
        ...devices["Pixel 5"],
        channel: "chrome",
        baseURL: "http://localhost:4173"
      },
      testIgnore: ["lighthouse.test.js", "healthCheck.test.js"]
    },

    {
      name: "mobileSafari",
      use: { ...devices["iPhone 12"], baseURL: "http://localhost:4173" },
      testIgnore: ["lighthouse.test.js", "healthCheck.test.js"]
    },

    /* Test against branded browsers. */
    {
      name: "googleChrome",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
        baseURL: "http://localhost:4173"
      },
      testIgnore: ["lighthouse.test.js", "healthCheck.test.js"]
    }
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "bun run start --port 4173",
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe"
  }
});
