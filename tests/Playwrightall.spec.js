const { test, expect } = require('@playwright/test') 


test('button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
    const input1 = page.getByPlaceholder('Enter Name')
    await expect(input1).toBeVisible()
    await expect(input1).toBeEmpty()
    await expect(input1).toBeEditable()
    await expect(input1).toBeEnabled()
    await (input1).fill('Sathiyan')
    await expect(input1).toHaveValue('Sathiyan')
    console.log('input1 value is:', await input1.inputValue())
    const input2 = await page.locator('#email')
    await (input2).fill('sathiyan1905@gmail.com')
    const radiocounts = await page.locator("input[type='radio']").all()
    await expect(radiocounts.length).toBe(2)
    for(const radioname of radiocounts)
    {
        const name = await radioname.getAttribute('value')
        console.log('radiobutton names:', name)
    }
    const radio1 = await page.locator("input[id='male']")
    await (radio1).check()
    await expect(radio1).toBeChecked()
    await page.locator('#sunday').check()
    await expect(page.locator('#sunday')).toBeChecked()
    const checkboxes = await page.locator("input[class='form-check-input'][type='checkbox']").all()
    const count = await (checkboxes).length
    await expect(count).toBe(7)
    console.log('Total no of checkboxes:', count)
    for(const checkbox of checkboxes)
    {
         const checkboxname = await checkbox.locator('+label').textContent()
         console.log('no of checkboxes:', checkboxname)
    }
    const dropdown = await page.locator("select[id='country'] option").allTextContents()
    await page.locator("select[id='country']").selectOption({ label: 'India' })
    const countdd = await(dropdown).length
    await expect(countdd).toBe(10)
    const dropdowntrim = await (dropdown).map(text => text.trim())
    console.log('Total no of dropdown options:', dropdowntrim)
    const dd2 = await page.locator('select[id="colors"] option').allTextContents()
    await page.locator('select[id="colors"]').selectOption({value: 'red'})
    const dd2trim = await (dd2).map(text => text.trim())
    const dd2count = await (dd2).length
    await expect (dd2count).toBe(7)
    console.log('Total no of dd2:', dd2count)
    console.log('Total no of dd2options:', dd2trim)
    await page.locator('#datepicker').click()
    const month = 'June'
    const year = '2026'
    const date = '28'
    while(true)
    {
        const currentyear = await page.locator('.ui-datepicker-year').textContent()
        const currentmonth = await page.locator('.ui-datepicker-month').textContent()
        if (currentyear === year && currentmonth === month)
        {
            break;
        }
        await page.locator("//a[@title='Next']").click()
    }
    const dateelement = await page.locator('.ui-datepicker-calendar tbody tr td a').all()
    for (const datedd of dateelement)
    {
        const text = await (datedd).textContent()
        if( text === date)
        {
           await datedd.click() 
        }
    }


    

})
