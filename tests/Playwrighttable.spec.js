const { test, expect } = require('@playwright/test')

test('autosuggestion fix', async ({ page }) => {

    await page.goto('https://testing.qaautomationlabs.com/web-table.php')
    const table = await page.locator('#dataTable')
    const column = await table.locator('thead tr th')
    const row = await table.locator('tbody tr')
    const columnCount = await (column).count()
    const rowCount = await (row).count()
    console.log('No of columns:', columnCount)
    console.log('No of rows:', rowCount)

    for (let i = 0; i < rowCount; i++)
    {

    const currentRow = row.nth(i);
    const tds = currentRow.locator('td');
    const colCount = await tds.count();

    for (let j = 0; j < colCount; j++)
     {
        console.log(await tds.nth(j).textContent());
    }
}
})