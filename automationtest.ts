import{test,expect} from"@playwright/test";
test("fileuploading",async({page})=>{
test.slow();
await page.goto("https://testautomationpractice.blogspot.com/");
await page.setInputFiles("#singleFileInput",'C://playwright script//testdata//test.txt')
 page.setDefaultTimeout(3000);
await page.locator("//button[contains(text(),'Upload Single File')]").click();
await page.locator("#singleFileStatus").waitFor({state:'visible'})
await page.waitForTimeout(5000);
 const text=await page.locator("#singleFileStatus").textContent();
 console.log(text);
 expect(text).toContain("Single file selected: test.txt, Size: 0 bytes, Type: text/plain")




})