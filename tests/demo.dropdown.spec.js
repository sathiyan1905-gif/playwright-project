const {test, expect} = require('@playwright/test')

test ('checkboxes', async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dropdown')
    await page.locator ('#dropdown').selectOption('Option 1')

    const value = await page.locator ("//select[@id='dropdown']/option[@value='1' or @value='2']")
    await expect (value).toHaveCount(2)
    const text = await page.locator ("//select[@id='dropdown']/option[@value='1' or @value='2']").allTextContents()
    console.log('No of options:', text)

    //preseence of dropdown values
    const text2 = await page.locator ('#dropdown').textContent()
    await expect (text2.includes('Option 1')).toBeTruthy()

    const country = await page.locator('#country option')

    let status = false

    for (const country1 of await country.all())
    {
        const text = await country1.textContent()
        if(text.includes('Bangladesh'))
        {
            status = true
            break
        }
    }


})