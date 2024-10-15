import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const dataTest = [
    'standard_user', 'lololo'
  ]

  await page.goto('https://www.saucedemo.com/');

  for (let index = 0; index < dataTest.length; index++) {
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(dataTest[index]);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  }
});