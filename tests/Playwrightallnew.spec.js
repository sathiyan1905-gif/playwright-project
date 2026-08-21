const { test, expect } = require('@playwright/test')


test('button1', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const input1 = page.getByPlaceholder('Enter Name')
    await expect(input1).toBeVisible()
    await expect(input1).toBeEmpty()
    await expect(input1).toBeEditable()
    await expect(input1).toBeEnabled()
    await (input1).fill('Sathiyan')
    await expect(input1).toHaveValue('Sathiyan')
    console.log('input1 value is:', await input1.inputValue())

})