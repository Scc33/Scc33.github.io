import { test, expect } from "@playwright/test";

test.describe("home page", () => {
  test("has title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Sean Coughlin | Software/);
  });

  test("has header", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "Sean Coughlin", exact: true })
    ).toBeVisible();
  });

  test("has navigation only on desktop", async ({ page }) => {
    test.skip(
      page.viewportSize().width !== 1280,
      "Skipping this test for mobile viewports"
    );
    await page.goto("/");

    await expect(page.getByRole("link", { name: "About me" })).toBeVisible();
    await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();
    await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Technical Blog" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Personal Blog" })
    ).toBeVisible();
    await expect(
      page.getByLabel("Resume").getByRole("link", { name: "Resume" })
    ).toBeVisible();
  });

  test("has main content", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByText(
        "Want to know more? A bit about me. I am . . . 01 a developer Presently, I work"
      )
    ).toBeVisible();
    await expect(page.getByText("I am . . .")).toBeVisible();
  });

  test("has footer", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Email coughlinscc33@gmail.com")).toBeVisible();
    await expect(page.getByRole("link", { name: "Scc33" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "sean-m-coughlin" })
    ).toBeVisible();
    await expect(
      page
        .locator("p")
        .filter({ hasText: "Technical Blog Hashnode" })
        .getByRole("link")
    ).toBeVisible();
    await expect(
      page
        .locator("p")
        .filter({ hasText: "Personal Blog Hashnode" })
        .getByRole("link")
    ).toBeVisible();
    await expect(
      page.getByRole("contentinfo").getByRole("link", { name: "Resume" })
    ).toBeVisible();
  });
});
