const { test, expect } = require('@playwright/test')

test('sample', async ({ page }) => {
  await page.goto('https://www.qaplayground.com/practice/input-fields')

  const movieInput = page.locator('#movieName')

  await expect(movieInput).toBeEditable()
  await expect(movieInput).toBeEnabled()
  await expect(movieInput).toBeEmpty()

  await movieInput.fill('Ayan')
  await expect(movieInput).toHaveValue('Ayan')

  await expect(page.getByText('Scenario 1: Movie Name Input')).toBeVisible()
  await expect(page.getByPlaceholder('Enter hollywood movie name')).toBeVisible()

  const TC01 =  page.locator('#appendText')
  await expect(TC01).toBeEditable()
  await expect(TC01).toBeEnabled()
  await expect(TC01).toHaveValue('I am good')
  await expect(page.getByText('Tab', { exact: true })).toBeVisible()
  //await TC01.clear()
  //await expect(TC01).toBeEmpty()
  //await TC01.fill('Sathiyan')
  //await expect(TC01).toHaveValue('Sathiyan')
  const Value = await TC01.inputValue()
  console.log('Current Value:', Value)
  if (Value === 'I am good') {
    await TC01.fill('Sathiyan')
    await expect(TC01).toHaveValue('Sathiyan')
    const updatedValue = await TC01.inputValue()
    console.log('New Value:', updatedValue)
  }

  const TC02 = await page.locator('#disabledInput')
  await expect(TC02).toBeDisabled()

  const TC03 = await page.locator('#readonlyInput')
  await expect(TC03).toBeDisabled
  await expect(TC03).toHaveValue('This text is readonly')
  console.log('Readonly value:', await TC03.inputValue())
  await expect(page.getByText('Scenario 6: Check text is readonly')).toBeVisible()
})