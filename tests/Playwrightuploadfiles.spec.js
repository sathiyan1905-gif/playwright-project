const { test, expect } = require('@playwright/test')

test('sample', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.setInputFiles('#singleFileInput','tests\\uploadfiles\\Receipt_261090910_05_04_2026.pdf')


})