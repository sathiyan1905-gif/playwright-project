const { test, expect } = require('@playwright/test')

test('sample', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')

    await page.locator('#userName').fill('Sathiyan')

    await page.keyboard.press('Control+A')

    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)






})