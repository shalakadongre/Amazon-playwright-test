const {test,expect} = require('@playwright/test');
const { waitForDebugger } = require('node:inspector');
const {HomePage} = require('../pages/HomePage');
const {BestSellersBaby} = require('../pages/BestSellersBaby');
 

test('@regression @all TC03_addToCart', async function({page})
{
 const home = new HomePage(page);
await home.goTo();
await home.singin();
await home.bestSeller();
const bestSellersBaby = new BestSellersBaby(page);
await bestSellersBaby.clickOnBabyBestSellers();


});
