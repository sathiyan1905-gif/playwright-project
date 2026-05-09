const { test, expect } = require('@playwright/test')

test('autosuggestion fix', async ({ page }) => {

    await page.goto('https://www.redbus.in/')
    const autosuggestion = await page.locator('#srcinput').fill('Coimbatore')
    await page.waitForSelector('div[aria-label*="Coimbatore"]')
    const options =await page.locator('div[aria-label*="Coimbatore"]').allTextContents()
    console.log('Autosuggestion options are:', options)
    
})