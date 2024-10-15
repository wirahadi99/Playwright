import { test, expect } from '@playwright/test';

test('Checkout in saucedemo', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    expect (page.url()).toBe('https://www.saucedemo.com/inventory.html')
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await page.locator('[data-test="shopping-cart-link"]').click();

    expect (page.url()).toBe('https://www.saucedemo.com/cart.html')
    await page.locator('[data-test="checkout"]').click();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('mail');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('lee');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('564556');
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();
    expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});