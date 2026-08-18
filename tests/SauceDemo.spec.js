import {test, chromium} from '@playwright/test';

test("@Regression End to End flow",async() =>{

    const browser = await chromium.launch({headless : false});
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");

    await page.waitForTimeout(3000);
    await page.locator("#login-button").click();
    await page.waitForTimeout(6000);

})