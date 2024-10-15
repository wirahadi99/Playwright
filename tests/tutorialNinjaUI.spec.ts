import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('http://tutorialsninja.com/demo/,');
  });

test('Adds any item from the catalog page to cart', async ({ page }) => {
    await expect(page).toHaveTitle('Your Store');

    // save product before add to cart
    const productName = await page.textContent('//*[@id="content"]/div[2]/div[1]/div/div[2]/h4/a')

    //add to cart button
    await page.click('//*[@id="content"]/div[2]/div[1]/div/div[3]/button[1]')

    //open shopping cart page
    await page.click('//*[@id="top-links"]/ul/li[4]/a/span')

    // Capture the product name from the shopping cart page
    const cartProductName = await page.textContent('//*[@id="content"]/form/div/table/tbody/tr/td[2]/a')

    // Assert that the product name matches
    await expect (productName).toBe(cartProductName)

    //this line for the next question
    await test.step('Input invalid coupon', async () => {
        // open togle to input coupun
        await page.click('//*[@id="accordion"]/div[1]/div[1]/h4/a')
        // input random text
        await page.fill('#input-coupon', 'random')
        //apply coupon 
        await page.click('#button-coupon')
        // assert the alert message
        await page.waitForSelector('.alert');
        const alert = page.getByText('Warning: Coupon is either')
        await expect(alert).toBeVisible();
    })

});