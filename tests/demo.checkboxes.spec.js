const {test, expect} = require('@playwright/test')

test ('checkboxes', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/checkboxes')

    await page.locator('#checkbox1').check()
    await expect(await page.locator('#checkbox1')).toBeChecked()

    await page.locator('#checkbox2').uncheck()
    

    const multiple = ["//input[@type='checkbox' and @id='checkbox1']", "//input[@type='checkbox' and @id='checkbox2']"]


    for (const multiples of multiple)
    {
        await page.locator(multiples).check()
    }

    await page.waitForTimeout(3000)

    for (const multiples of multiple)
    {
        if(await page.locator(multiples).isChecked())
        {
            await page.locator(multiples).uncheck()
        }
    }

    
    await page.waitForTimeout(3000)



})