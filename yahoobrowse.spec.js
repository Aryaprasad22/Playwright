const{test,expect}=require('@playwright/test')
test("Verify Apllication title", async function ({page}) {
    await page.goto ("https://in.search.yahoo.com/?fr2=inr")
    const URL2 = await page.url()
    console.log("URL2 is  " +URL2)
    const pagetitle = await page.title()
    console.log("Page title is " +pagetitle)
})