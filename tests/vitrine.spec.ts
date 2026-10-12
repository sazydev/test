import { test, expect } from "@playwright/test";

test("catalogue : filtres et programmes complets", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page).toHaveTitle(/DIGITAL\$/);
  await expect(page.locator(".formation-card")).toHaveCount(4);
  const filters = page.getByRole("group", { name: "Filtrer les formations" });
  for (const category of ["Web", "IA", "Design", "Social"]) {
    await filters.getByRole("button", { name: category, exact: true }).click();
    await expect(page.locator(".formation-card")).toHaveCount(1);
    await expect(page.locator(".card-category")).toHaveText(category);
    const opener = page.getByRole("button", { name: "Voir le programme" });
    await opener.click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(page.locator(".program-list li")).toHaveCount(4);
    await expect(page.locator(".final-project")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Fermer le programme" }),
    ).toBeFocused();
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() => !!document.activeElement?.closest("dialog")),
    ).toBe(true);
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).not.toBeVisible();
    await expect(opener).toBeFocused();
  }
  await filters.getByRole("button", { name: "Toutes", exact: true }).click();
  await expect(page.locator(".formation-card")).toHaveCount(4);
  await expect(
    page.locator(".formation-card .beacons-button:disabled"),
  ).toHaveCount(4);
  expect(errors).toEqual([]);
});

test("fermeture par bouton et clic sur le fond", async ({ page }) => {
  await page.goto("/");
  const opener = page
    .getByRole("button", { name: "Voir le programme" })
    .first();
  await opener.click();
  await page.getByRole("button", { name: "Fermer le programme" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(opener).toBeFocused();
  await opener.click();
  await page.mouse.click(5, 5);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(opener).toBeFocused();
});

test("FAQ accessible au clavier et accordéon exclusif", async ({ page }) => {
  await page.goto("/");
  const first = page.locator(".faq-list summary").first();
  await first.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".faq-list details").first()).toHaveAttribute(
    "open",
    "",
  );
  await expect(
    page.locator(".faq-list details").first().locator("p"),
  ).toBeVisible();
  await page.locator(".faq-list summary").nth(1).click();
  await expect(page.locator(".faq-list details[open]")).toHaveCount(1);
  await expect(page.locator(".faq-list details").first()).not.toHaveAttribute(
    "open",
  );
});

test("mobile 360 px : menu, ancres et absence de débordement", async ({
  page,
}) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  const toggle = page.locator(".menu-toggle");
  await toggle.click();
  await expect(
    page.getByRole("navigation", { name: "Navigation principale" }),
  ).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Navigation principale" })
    .getByRole("link", { name: "Formations", exact: true })
    .click();
  await expect(page).toHaveURL(/#formations$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Voir le programme" }).first().click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const box = await page.getByRole("dialog").boundingBox();
  expect(box!.width).toBeLessThanOrEqual(360);
  await page.keyboard.press("Escape");
  await page.locator(".faq-list summary").first().click();
  await expect(page.locator(".faq-list details[open]")).toHaveCount(1);
});

for (const width of [360, 390, 768, 1024, 1440]) {
  test(`rendu ${width} px : contenu, image et ancres`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator(".hero-art")
        .evaluate(
          (image) =>
            (image as HTMLImageElement).complete &&
            (image as HTMLImageElement).naturalWidth > 0,
        ),
    ).toBe(true);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(await page.locator('a[href="#"]').count()).toBe(0);
    if (width === 1440 || width === 360)
      await page.screenshot({
        path: `test-results/vitrine-${width}.png`,
        fullPage: true,
        animations: "disabled",
      });
  });
}
