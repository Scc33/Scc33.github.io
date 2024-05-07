import { playAudit } from "playwright-lighthouse";
import { test, expect, chromium } from "@playwright/test";

test.describe("audit", () => {
  test("run lighthouse", async () => {
    const browser = await chromium.launch({
      args: ["--remote-debugging-port=9222"],
      headless: true
    });
    const page = await browser.newPage();
    await page.goto("http://localhost:4173/");

    expect(await page.title()).toBe("Sean Coughlin | Software Engineer");

    await playAudit({
      page: page,
      thresholds: {
        performance: 50,
        accessibility: 100,
        "best-practices": 100,
        seo: 100
      },
      reports: {
        formats: {
          json: true, //defaults to false
          html: false, //defaults to false
          csv: false //defaults to false
        },
        name: "lighthouse", //defaults to `lighthouse-${new Date().getTime()}`
        directory: "lighthouse-reports" //defaults to `${process.cwd()}/lighthouse`
      },
      port: 9222
    });

    await browser.close();
  });
});
