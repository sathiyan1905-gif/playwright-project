const {test, expect} = require('@playwright/test')

test ('locators',async ({page})=>{

    await page.goto("https://www.demoblaze.com/")

    await page.locator('id=login2').click()

    await page.locator('id=loginusername').fill('sathiyan19@gmail.com')

    await page.locator('id=loginpassword'). fill('Argentina@2001')

    await page.locator("//button[normalize-space()='Log in']").click()

    const logoutlink= await page.locator('id=logout2')

    await expect(logoutlink).toBeVisible();

    await page.close()


} )
