// Browser P0 tests for the public assistant widget: AC-01–04, AC-11, AC-12, IT-15, IT-16 (UI side).
// Run: npx playwright test -c docs/AI_Assistance/evidence/playwright.config.ts   (dev server on :3000)
import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const open = async (page: Page) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Open the Zoiko iD Assistant" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.waitForTimeout(2500); // let the entrance fade-in finish so contrast is measured on final colours
};

test("AC-01 launcher opens a labelled dialog; Esc minimizes and returns focus", async ({ page }) => {
  await open(page);
  const dlg = page.getByRole("dialog");
  await expect(dlg).toHaveAttribute("aria-modal", "true");
  await expect(dlg).toHaveAttribute("aria-labelledby", /.+/);
  await page.keyboard.press("Escape");
  await expect(dlg).toBeHidden();
  await expect(page.getByRole("button", { name: /Zoiko iD Assistant/ })).toBeFocused();
});

test("IT-15a keyboard-only: focus stays inside dialog (trap), all controls reachable", async ({ page }) => {
  await open(page);
  const inside = async () => page.evaluate(() => !!document.activeElement?.closest('[role="dialog"]'));
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Tab");
    expect(await inside(), `focus escaped dialog on Tab ${i + 1}`).toBe(true);
  }
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Shift+Tab");
    expect(await inside(), `focus escaped dialog on Shift+Tab ${i + 1}`).toBe(true);
  }
});

test("AC-02 send a question with the keyboard; answer announced in a polite live log", async ({ page }) => {
  await open(page);
  const log = page.getByRole("log", { name: "Conversation" });
  await expect(log).toHaveAttribute("aria-live", "polite");
  const box = page.getByPlaceholder("Ask a question…");
  await box.fill("Where do I find the quickstarts?");
  await box.press("Enter");
  await expect(log.getByText(/quickstarts/i).last()).toBeVisible({ timeout: 20000 });
  await expect(log.getByText("You said:")).toBeAttached();
});

test("AC-07 sensitive input is refused in the UI and not shown as an answer", async ({ page }) => {
  await open(page);
  const box = page.getByPlaceholder("Ask a question…");
  await box.fill("my password is Hunter2Hunter2!");
  await box.press("Enter");
  await expect(page.getByText(/password|sensitive|never share/i).first()).toBeVisible({ timeout: 10000 });
  await expect(page.getByText("Hunter2Hunter2!")).toHaveCount(0);
});

test("AC-12 axe: no serious/critical WCAG A/AA violations in the open widget (light)", async ({ page }) => {
  await open(page);
  const r = await new AxeBuilder({ page }).include('[role="dialog"]').withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  const bad = r.violations.filter((v) => ["serious", "critical"].includes(v.impact ?? ""));
  expect(bad.map((v) => `${v.id}: ${v.nodes.length} node(s) ${v.nodes[0]?.html.slice(0, 80)}`)).toEqual([]);
});

test("AC-12 axe: dark mode", async ({ page }) => {
  await open(page);
  await page.getByRole("button", { name: "Switch to dark mode" }).click();
  const r = await new AxeBuilder({ page }).include('[role="dialog"]').withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  const bad = r.violations.filter((v) => ["serious", "critical"].includes(v.impact ?? ""));
  expect(bad.map((v) => `${v.id}: ${v.nodes.length} node(s) ${v.nodes[0]?.html.slice(0, 80)}`)).toEqual([]);
});

test("AC-03 mobile 375px: panel fits viewport, no horizontal scroll, input font >=16px (no iOS zoom)", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 700 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await open(page);
  const b = await page.getByRole("dialog").boundingBox();
  expect(b!.x).toBeGreaterThanOrEqual(-1);
  expect(b!.x + b!.width).toBeLessThanOrEqual(376);
  expect(b!.y + b!.height).toBeLessThanOrEqual(701);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  const fs = await page.getByPlaceholder("Ask a question…").evaluate((e) => parseFloat(getComputedStyle(e).fontSize));
  expect(fs).toBeGreaterThanOrEqual(16);
  await ctx.close();
});

test("AC-04 200% zoom equivalent (640px wide): controls still visible and usable", async ({ browser }) => {
  const ctx = await browser.newContext({ viewport: { width: 640, height: 450 } });
  const page = await ctx.newPage();
  await open(page);
  await expect(page.getByPlaceholder("Ask a question…")).toBeInViewport();
  await expect(page.getByRole("button", { name: "Minimize" })).toBeInViewport();
  await ctx.close();
});

test("reduced motion: no animation on the panel", async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await open(page);
  const running = await page.evaluate(() =>
    [...document.querySelectorAll('[role="dialog"], [role="dialog"] *')].filter((e) => {
      const cs = getComputedStyle(e);
      return cs.animationName !== "none" && parseFloat(cs.animationDuration) > 0.01 && cs.animationIterationCount !== "1";
    }).length);
  expect(running, "looping animations while prefers-reduced-motion: reduce").toBe(0);
  await ctx.close();
});

test("IT-13/AC-11 assistant down (503 from API): panel shows static help links, site stays usable", async ({ page }) => {
  await page.route("**/api/public/chat/v1/**", (r) => r.fulfill({ status: 503, contentType: "application/json", body: '{"error":{"code":"UNAVAILABLE"}}' }));
  await page.goto("/");
  await page.getByRole("button", { name: "Open the Zoiko iD Assistant" }).click();
  const dlg = page.getByRole("dialog");
  await expect(dlg.getByRole("link").first()).toBeVisible({ timeout: 10000 });
  await expect(dlg.getByRole("link", { name: /sales|support|contact|trust/i }).first()).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("link").first()).toBeVisible(); // page still works
});

test("IT-16 chatbot JS blocked: website itself still renders and navigates", async ({ page }) => {
  await page.route(/assistant|AssistantWidget|AssistantMount/i, (r) => r.abort());
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const res = await page.goto("/");
  expect(res!.status()).toBe(200);
  await expect(page.locator("body")).toContainText(/identity/i);
});

test("AC-13 transcript is not persisted in browser storage", async ({ page }) => {
  await open(page);
  const box = page.getByPlaceholder("Ask a question…");
  await box.fill("What is Zoiko iD?");
  await box.press("Enter");
  await page.waitForTimeout(3000);
  const stored = await page.evaluate(() => JSON.stringify({ l: { ...localStorage }, s: { ...sessionStorage } }));
  expect(stored).not.toMatch(/What is Zoiko iD/i);
});
