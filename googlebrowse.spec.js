const {test, expect} = require("@playwright/test")
test("Verify application Title", async function ({page}) {

    await page.goto("https://www.google.com/")
    const URL= await page.url()
    console.log ("URL is " +URL)
const Title = await page.title()
console.log("Page Title is " +Title)
})
