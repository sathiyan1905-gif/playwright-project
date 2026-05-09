const { test, expect } = require('@playwright/test')

test('checkbox', async ({ page }) => {
    await page.goto('https://testing.qaautomationlabs.com/checkbox.php')
    await page.locator("//input[@type = 'checkbox' and @id='multichk1']").check()
    await expect(page.locator("//input[@type = 'checkbox' and @id='multichk1']")).toBeChecked()

    await page.locator("//input[@type = 'checkbox' and @id='multichk1']").uncheck()
    await expect(page.locator("//input[@type = 'checkbox' and @id='multichk1']")).not.toBeChecked()
    const allcheckboxes = ["//input[@type = 'checkbox' and @id='multichk1']", 
                       "//input[@type = 'checkbox' and @id='multichk2']",
                       "//input[@type = 'checkbox' and @id='multichk3']",
                       "//input[@type = 'checkbox' and @id='multichk4']"]
    for(const checkbox of allcheckboxes)
    {
        await page.locator(checkbox).check()
    }
    const alloptions = await page.locator("input[class*='myCheckbox']")
    await expect(alloptions).toHaveCount(4)
    const count  = await alloptions.count()
    for(let i=0; i<count; i++)
    {
        const name = await alloptions.nth(i).evaluate(el => el.innerText)
        console.log('name:', name)
    }

    
    
    



})