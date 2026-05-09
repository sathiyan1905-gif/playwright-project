const {test, expect} = require('@playwright/test')

test('demo', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/')
    const image = await page.getByAltText('nopCommerce demo store')
    await expect(image).toBeVisible()

    await page.locator('.ico-register').click()
    const title = page.locator('.page-title h1')
    await expect(title).toBeVisible()

    const dropdown = page.locator('#customerCurrency option')
    //await expect(dropdown).toHaveCount(2)
    const dropdowns = await dropdown.allTextContents()

    for (const noofdropdowns of dropdowns)
    {
        console.log(noofdropdowns)
    }


    const multiple = await page.$$ ('a')
    for (const multiples of multiple)
    {
        const multipleelements = await multiples.textContent()
        console.log(multipleelements)
    }

    const menu = page.locator('.menu__list-view')
    for (menu1 of menu)
    {
        const menu2 = await menu1.textContent()
        console.log(menu2)

    }


})
