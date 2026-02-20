const{test, expect} = require ('@playwright/test')
    test("First test", async function ({page}) {
        expect(12).toBe(12)
        
    })
    test("second test", async function ({page}){
    expect(100).toBe(101)
        
    })
test("third test", async function ({page}){
    expect("Arya P Nair").toContain("Arya")
    expect("true").toBeTruthy()
})
test("fourth test", async function ({page}){
expect("Arya P Nair").toContain("Dev")
    expect("false").toBeFalsy()
})
test("fifth test", async function ({page}){
    expect("Arya P Nair".includes("Arya")).toBeTruthy()

    
})