import { test, expect } from "@playwright/test";

test.describe("Smoke check", () => {
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

  test("should respond with 200 accepted HTTP response", async ({ page }) => {
    const response = await page.goto("/");
    expect(response.ok()).toBe(true);
  });
});
