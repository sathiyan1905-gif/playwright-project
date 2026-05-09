const { test, expect } = require('@playwright/test')

test.('autosuggestion fix', async ({ page }) => {

    await page.goto('https://jqueryui.com/datepicker/')

    const frame = page.frame({url: 'https://jqueryui.com/resources/demos/datepicker/default.html'})

    const month = "June"
    const year = "2026"
    const date = "10"

    await frame.locator('#datepicker').click()

    while (true)
    {
        const currentmonth = await frame.locator('.ui-datepicker-month').textContent()
        const currentyear = await frame.locator('.ui-datepicker-year').textContent()

        if (currentyear === year && currentmonth === month)
        {
            break;
        }
        else
        {
            await frame.locator('.ui-icon.ui-icon-circle-triangle-e').click()
        }
    }

    //await frame.locator("//a[normalize-space()='10']").click()
     const dateElements = await frame.locator('.ui-state-default').all()

    for (const dateElement of dateElements) 
    {
        const dateText = await dateElement.textContent()

        if (dateText.trim() === date)
        {
            await dateElement.click()
            break
        }
    }

    await page.waitForTimeout(3000)

})
test('autosuggestion fix1', async ({ page }) => {
    await page.goto('https://flatpickr.js.org/examples/')

    await page.locator("input[data-id='inline']").click()

    const month = "5"
    const year = "2026"
    const date = "10"

    while(true)
    {
        const currentmonth  = await page.locator("(//select[@aria-label='Month'])[1]").inputValue()
        const currentyear = await page.locator("(//input[@aria-label='Year'])[1]").inputValue()

        if (currentmonth === month && currentyear === year)
        {
            break;
        }
        
         await page.locator("(//span[@class='flatpickr-next-month'])[1]").click()
        
    }
    //await page.locator("//span[@aria-label='June 3, 2026']").click()
    const dateElements = await page.$$('span[class="flatpickr-day"]')
    
    for (const dateElement of dateElements) 
        {
        const dateText = await dateElement.textContent()
        if (dateText.trim() === date)
        {
            await dateElement.click()
            break
        }
    }

    await page.waitForTimeout(3000)

})