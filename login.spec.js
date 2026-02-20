const {test,expect}=require('@playwright/test')
test("Valid Login", async function({page}){
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input[id='username']").fill("student")
    await page.locator("input[id='password']").fill("Password123")
    await page.locator("button[id='submit']").click()
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    expect ("Logged In Successfully").toBeTruthy()
    console.log("Congratulations student. You successfully logged in!")
})
    test("Invalid Login", async function({page}){
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input[id='username']").fill("Student")
    await page.locator("input[id='password']").fill("Password1234")
    await page.locator("button[id='submit']").click()
    expect ("Logged In Successfully").toBeFalsy
    console.log("Error!Inavlid username and password!")
})