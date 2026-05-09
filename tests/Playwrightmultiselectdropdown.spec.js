const { test, expect } = require('@playwright/test')

test('dropdown - exclude placeholder', async ({ page }) => {

    await page.goto('https://testing.qaautomationlabs.com/dropdown.php')
    const dd = await page.locator('#countryDropdown')
    await expect(dd).toBeVisible()
    await expect(dd).toBeEnabled()
    await (dd).selectOption('India','USA')
    const dd2 =  await page.locator('#countryDropdown option:not(:first-child)').allTextContents()
    const placeholder =  await page.locator('#countryDropdown option').first().textContent()
    await expect(placeholder).toContain('Select Country')
    console.log('Placeholder is:', placeholder)
    await expect(dd2).toHaveLength(5)
    console.log('Total No of options:', dd2.length)
    console.log('Total No of options:', dd2)
    const alloptions =  await page.$$('#countryDropdown option')
    for (const options of alloptions)
    {
        const text = await options.textContent()
        if (text.includes('UK') || text.includes('Canada'))
        {
            await options.click()
        }
    }

})