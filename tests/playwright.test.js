import { playAudit } from "playwright-lighthouse";
import { test, chromium } from "@playwright/test";

test.describe("audit example", () => {
  test("open browser", async () => {
    const browser = await chromium.launch({
      args: ["--remote-debugging-port=9222"],
      headless: true
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:4173/");

    await playAudit({
      page: page,
      thresholds: {
        performance: 50,
        accessibility: 100,
        "best-practices": 100,
        seo: 100
      },
      port: 9222
    });

    await browser.close();
  });
});
