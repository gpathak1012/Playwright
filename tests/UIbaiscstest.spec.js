const { test } = require("@playwright/test"); 

test("First Playwright test", async  ({browser})=> {
  //playwright code

  const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto

});
