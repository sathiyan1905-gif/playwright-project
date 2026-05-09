const { test, expect } = require('@playwright/test')

test('autosuggestion fix', async ({ page }) => {
    await page.goto('https://testing.qaautomationlabs.com/radio-button.php')
    const radiobutton = await page.locator("input[value='Male'][name='gender']")
    const heading = await(page.getByText('Click on button to get the selected value.'))
    await expect(heading).toBeVisible()
    const headingname = await (heading).textContent()
    console.log('heading:', headingname)
    const options = await page.$$("input[type='radio'][name='gender']")
    await expect(options.length).toBe(2)
    for(const option of options)
    {
        const text = await option.textContent()
        console.log('options:', text)
    }
    await (radiobutton).check()
    await expect (radiobutton).toBeChecked()

})
