const {test, expect} = require('@playwright/test')

test('Multiplelocators', async ({page})=>{

    await page.goto('https://www.orangehrm.com/')

    await page.locator('id=Form_submitForm_EmailHomePage').fill('sathiyan19@gmail.com')

    await page.locator('id=Form_submitForm_action_request').click()

    const name= await page.locator("//span[normalize-space()='30-Day Free Trial']")

    await expect (name).toBeVisible()

    await page.close()
})
