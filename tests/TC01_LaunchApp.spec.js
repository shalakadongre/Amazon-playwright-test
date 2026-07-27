const {test,expect} = require('@playwright/test');
const {HomePage} = require('../pages/HomePage');

test('@regression @sanity @all TC01_LaunchApp', async function({page})
{
const home = new HomePage(page);

await home.goTo();

await page.title();
console.log(await page.title());
await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.");

});