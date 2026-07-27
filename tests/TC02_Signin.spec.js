const {test,expect} = require('@playwright/test');
const { waitForDebugger } = require('node:inspector');
const {HomePage} = require('../pages/HomePage');

test('@regression @TC02_Signin', async function({page})
{
    const home = new HomePage(page);
await home.goTo();
await home.singin();

});
