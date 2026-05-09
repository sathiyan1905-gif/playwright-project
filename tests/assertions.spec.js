const {test, expect} = require('@playwright/test')

test ('assertions', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/')

    await expect(page).toHaveTitle('nopCommerce demo store. Home page title')

    const text= await page.locator("//div[@class='header-logo']")
    await expect(text).toBeVisible()

    const enable = await page.locator("//input[@id='small-searchterms']")
    await expect(enable).toBeEnabled()

    const radio = await page.locator("//label[normalize-space()='Male']")
    await expect(radio).toBeChecked



})