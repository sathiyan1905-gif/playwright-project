const { test, expect } = require('@playwright/test')

test.skip('autosuggestion fix', async ({ page }) => {
    await page.goto('https://testing.qaautomationlabs.com/javaScript-alert.php')

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('This is an alert message!')
        await dialog.accept()
    })

    await page.locator("//button[normalize-space()='Show Alert']").click()
    await expect(page.locator('.btn.btn-primary.btn-sm')).toBeVisible()
    await expect(page.locator('.btn.btn-primary.btn-sm')).toHaveText('Show Alert')
    await expect(page.locator('#output')).toHaveText('Alert shown.')
})
test.skip('autosuggestion fix1', async ({ page }) => {


    await page.goto('https://testing.qaautomationlabs.com/javaScript-alert.php')

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Do you confirm this action?')
        await dialog.accept()
    })

    await page.locator("//button[normalize-space()='Show Confirm']").click()
    await expect(page.locator("//button[normalize-space()='Show Confirm']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Show Confirm']")).toHaveText('Show Confirm')
    await expect(page.locator('#output')).toHaveText('You clicked OK on confirm button.')

})
test('autosuggestion fix2', async ({ page }) => {


    await page.goto('https://testing.qaautomationlabs.com/javaScript-alert.php')

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('What is your name?')
        await dialog.accept('Sathiyan')
    })

    await page.locator("//button[normalize-space()='Show Prompt']").click()
    await expect(page.locator("//button[normalize-space()='Show Prompt']")).toBeVisible()
    await expect(page.locator("//button[normalize-space()='Show Prompt']")).toHaveText('Show Prompt')
    await expect(page.locator('#output')).toHaveText('You entered: Sathiyan')



})


