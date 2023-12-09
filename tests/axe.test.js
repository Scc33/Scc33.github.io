import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y, getViolations } from "axe-playwright";

test.describe("Accessibility Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await injectAxe(page);
  });

  test("simple accessibility run", async ({ page }) => {
    await checkA11y(page, null, {
      detailedReport: true
    });
    const violations = await getViolations(page, null);

    expect(violations.length).toBe(0);
  });
});
