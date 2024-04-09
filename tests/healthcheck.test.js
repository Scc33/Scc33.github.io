import { test, expect } from "@playwright/test";

test.describe("Health Check", () => {
  test("should ensure the website is alive", async ({ page }) => {
    await page.goto("/");
    const title = await page.title();
    expect(title).toBe("Sean Coughlin | Software Engineer");
  });

  test("should ensure the website has a header", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Sean Coughlin", exact: true })
    ).toBeVisible();
  });

  test("should take a screenshot", async ({ page }) => {
    const date = new Date();
    const photoPath = `./screenshots/healthcheck-${date.toISOString()}.png`;

    await page.goto("/");
    await page.screenshot({ path: photoPath });
  });
});
