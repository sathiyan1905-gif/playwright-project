const { test, expect } = require('@playwright/test')

test('dropdown - exclude placeholder', async ({ page }) => {
  await page.goto('https://testing.qaautomationlabs.com/dropdown.php')
  // const dd = await page.locator('#fruitDropdown')
  //await expect(dd).toBeVisible()
  //await expect(dd).toBeEnabled()
  //await (dd).selectOption({label: 'Apple'})
  ///await expect(dd).toHaveValue('Apple')
  //console.log('Value is:', 'Apple')
  //const option = await page.locator('#fruitDropdown option').first().textContent()
  //await expect(option).toContain('Select Fruit')
  //console.log('First option is:', option)
  //const options = await page.locator('#fruitDropdown option:not(:first-child)').allTextContents()
  //await expect(options).toHaveLength(4)
  //console.log('No of options:', options)
  const dd  = await page.locator('#fruitDropdown option:not(:first-child)').allTextContents()
  const placeholder  = await page.locator('#fruitDropdown option').first().textContent()
  await expect(placeholder).toContain('Select Fruit')
  console.log('Placeholder is :', placeholder)
  for (const options of dd)
  {
    console.log('options:', options)
  }
  console.log('Total No of Options:', dd.length)
  



})
