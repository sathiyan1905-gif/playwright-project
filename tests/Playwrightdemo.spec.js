const {test, expect} = require('@playwright/test')

test('demonew', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const name = await page.getByPlaceholder('Enter Name')
    await expect(name).toBeVisible()
    await expect(name).toBeEditable()
    await expect(name).toBeEnabled()
    await expect(name).toBeEmpty()
    await (name).fill('Sathiyan')
    const email = await page.locator('#email')
    await expect(email).toBeVisible()
    await expect(email).toBeEditable()
    await expect(email).toBeEnabled()
    await expect(email).toBeEmpty()
    await (email).fill('sathiyan1905@gmail.com')
    await expect(page.getByText('Name:')).toBeVisible()
    await expect(page.getByText('Phone:')).toBeVisible()
    await expect(name).toHaveValue('Sathiyan')
    await expect(email).toHaveValue('sathiyan1905@gmail.com')
    console.log('The name is:', await name.inputValue())
    console.log('The email is:', await email.inputValue())
    const radio = await page.locator('#male')
    await (radio).check()
    await expect(radio).toBeChecked()
    const radioall = await page.locator("input[type='radio']").all()
    const count = await (radioall).length
    await expect(count).toBe(2)
    for(const radiobutton of radioall)
    {
        const radiovalue  =await radiobutton.locator('+label').textContent()
        console.log('The radiobutton values are:', radiovalue)
    }
const checkbox = await page.locator('div[class = "form-group"] [type = "checkbox"]').all()
await page.locator('label[for="sunday"]').check()
await expect(page.locator('label[for="sunday"]')).toBeChecked()
const checkboxcount = await (checkbox).length
await expect(checkboxcount).toBe(7)
for( const checkboxname of checkbox)
{
    const checkboxvalue = await checkboxname.getAttribute('id')
    console.log('The checkbox valure are:', checkboxvalue)
}
const dropdown = await page.locator('#country option').allTextContents()
await page.locator('#country').selectOption({'value':'usa'})
await expect(page.locator('#country')).toHaveValue('usa')
const dropdowncount = await (dropdown).length
await expect(dropdowncount).toBe(10)
for( const dropdownname of dropdown)
{
    console.log('The dropdownvalue are:', dropdownname.trim())
}
await page.locator('#datepicker').click()
const month ='June'
const year = '2026'
const date = '28'
while(true)
{
    const currentmonth = await page.locator('.ui-datepicker-month').textContent()
    const currentyear = await page.locator('.ui-datepicker-year').textContent()
    if(currentmonth === month && currentyear === year)
    {
        break;
    }
    await page.locator('.ui-icon.ui-icon-circle-triangle-e').click()
}
const datelement = await page.locator('.ui-datepicker-calendar tbody tr td a').all()
for(const date1 of datelement)
{
    const datename = await date1.textContent()
    if(datename === date)
    {
        await date1.click();
    }
}
await expect(page.locator('#datepicker')).toHaveValue('06/28/2026')
console.log('The Date is:', await page.locator('#datepicker').inputValue())

await page.locator('#singleFileInput').setInputFiles('tests\\uploadfiles\\Receipt_261090910_05_04_2026.pdf')

const heading = await page.locator('table tbody tr th').all()
for(const heads of heading)
{
    const headname = await (heads).textContent()
    console.log('The heading name is:', headname)
}
const tablerows = await page.locator("table[name = 'BookTable'] tbody tr:not(:first-child)")
const tablerowscount = await (tablerows).count()
await expect(tablerowscount). toBe(6)

const tablecolumns = await page.locator("table[name = 'BookTable'] tbody tr td")
const tablecolumnscount = await (tablecolumns).count()
await expect(tablecolumnscount).toBe(24)

for(let i=0; i<tablerowscount; i++)
{
    console.log('The row name is:', await tablerows.nth(i).textContent())
}

for(let i=0; i<tablecolumnscount; i++)
{
    console.log('The column name is:', await tablecolumns.nth(i).textContent())
}

const specificname  = await page.locator("table[name = 'BookTable'] tbody tr:nth-child(4) td:nth-child(2)").textContent()
await expect(specificname).toBe('Animesh')
console.log('The specific name is:', specificname)

const pagecount = await page.locator("ul[class = 'pagination'] li")
const pagecountnumber  = await (pagecount).count()
await expect(pagecountnumber).toBe(4)

for(let i=0; i<pagecountnumber; i++)
{
    await pagecount.nth(i).click()
    const total = await page.locator("table[id = 'productTable'] tbody tr")
    const totalcount = await (total).count()
    console.log('The total count is:', totalcount)
    for(let j=0; j<totalcount; j++)
    {
        const countname = await total.nth(j).textContent()
        console.log('The count name is:', countname)
    }
}

page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await(dialog).accept()
})

await page.locator('#alertBtn').click()
await expect(page.locator('#alertBtn')).toHaveText('Simple Alert')

await page.locator('.dropbtn').hover()
const dropdownlinks = await page.locator("div[class = 'dropdown-content'] a").all()
const dropdownlinkscount = await (dropdownlinks).length
await expect(dropdownlinkscount).toBe(2)
for(const dropdownlink of dropdownlinks)
{
    const dropdownlinkname = await dropdownlink.textContent()
    console.log('The dropdown link name is:', dropdownlinkname)
}

const dblname1 =  await page.locator('#field1')
await expect(dblname1).toHaveValue('Hello World!')
await expect(dblname1).toBeEditable()
await (dblname1).dblclick()
await page.keyboard.press('Control+A')
await page.keyboard.press('Control+C')
await page.keyboard.press('Tab')
await page.keyboard.press('Control+V')
await expect(page.locator('#field2')).toHaveValue('Hello World!')

await page.locator("div[id='draggable'] p").hover()
await page.mouse.down()
await page.locator('#droppable').hover()
await page.mouse.up()

})
