const { test, expect} = require('@playwright/test')

test ('Multiple Elemnts', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    /*const links =await page.$$('a')

    for(const link of links)
    {
        const linktext= await link.textContent()
        console.log(linktext)

    }
    */
     await page.waitForSelector("//div[@id='tbodyid']//div//h4/a")

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const productname of products)
    {
       const producttext= await productname.textContent()
       console.log(producttext)
    }

})
