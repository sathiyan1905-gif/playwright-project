const {test, expect} = require('@playwright/test')

test('demo2', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/login')

    await page.waitForTimeout(3000)

    await expect(page.locator('#username')).toBeVisible()
    await expect(page.locator('#username')).toBeEmpty()
    await expect(page.locator('#username')).toBeEditable()
    await expect(page.locator('#username')).toBeEnabled()

    await page.locator('#username').fill('scs01')

        await page.waitForTimeout(3000)


    await page.locator('#password').fill('19052001')

        await page.waitForTimeout(3000)


    await page.locator('#submit-login').click()

        await page.waitForTimeout(3000)


    await expect(page.locator('.icon-2x.icon-signout')).toBeVisible()

    await page.locator('.icon-2x.icon-signout').click()


    await page.waitForTimeout(5000)





})