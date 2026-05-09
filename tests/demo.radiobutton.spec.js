const {test, expect} = require('@playwright/test')

test ('radio button', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/radio-buttons')

    await page.locator('#yellow').check()

    //await expect(await page.locator('#yellow')).toBeChecked()

    const constant = await page.locator('#yellow').isChecked()
    expect(constant).toBeTruthy()

})