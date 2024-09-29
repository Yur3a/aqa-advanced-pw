import { test, expect } from '@playwright/test';


test.describe('Sign up tests', () => {
  test.beforeEach('Authorization', async ({ page }) => {
    page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
    await page.getByRole('button', { name: 'Sign up' }).click();
  });

  test('Should register New user', async ({ page }) => {

    const uniqueEmail = `test+${Date.now()}@example.com`;

    await page.fill('input[name="name"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', uniqueEmail);
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password123!');
    await page.click('.btn-primary:nth-child(1)');

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');
    await expect(page.locator('text=You don’t have any cars in your garage')).toBeVisible();
  });
});


test.describe('Sign up tests', () => {
  test.beforeEach('Authorization', async ({ page }) => {
    page.goto("https://guest:welcome2qauto@qauto.forstudy.space/");
    await page.getByRole('button', { name: 'Sign up' }).click();
  });

  test('Should show "Name is invalid" for wrong data', async ({ page }) => {
    await page.fill('input[name="name"]', '1234');
    await page.click('input[name="lastName"]');

    const form = page.locator('form');
    await expect(form).toContainText('Name is invalid');
  });

  test('should show "Name has to be from 2 to 20 characters long" for wrong length', async ({ page }) => {
    await page.fill('input[name="name"]', 'LoremIpsumDolorSitAmet');
    await page.click('input[name="lastName"]');

    const form = page.locator('form');
    await expect(form).toContainText('Name has to be from 2 to 20 characters long');
  });

  test('should show "Email required" for empty email', async ({ page }) => {
    await page.click('input[name="email"]');
    await page.click('input[name="lastName"]');

    const form = page.locator('form');
    await expect(form).toContainText('Email required');
  });

  test('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" for password field', async ({ page }) => {
    await page.fill('input[name="password"]', '1234567890');
    await page.click('input[name="lastName"]');

    const form = page.locator('form');
    await expect(form).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
  });

  test('should show "Passwords do not match"', async ({ page }) => {

    const uniqueEmail = `test+${Date.now()}@example.com`;

    await page.fill('input[name="name"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', uniqueEmail);
    await page.fill('input[name="password"]', 'Password123!');
    await page.fill('input[name="repeatPassword"]', 'Password123!!');
    await page.click('input[name="lastName"]');

    const form = page.locator('form');
    await page.waitForTimeout(1000);
    await expect(form).toContainText('Passwords do not match');
  });
});
















