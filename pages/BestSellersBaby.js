const {test,expect} = require('@playwright/test');
const { waitForDebugger } = require('node:inspector');
const {HomePage} = require('../pages/HomePage');

class BestSellersBaby {
    
    constructor(page) {
        this.page = page;
    
       //locators
        this.clickBaby = this.page.getByLabel('Navigation Tree').getByRole('link', { name: 'Baby' });
        this.item =  this.page.getByRole('link', { name: 'GROWNSY Nasal Aspirator for Baby, Electric Baby Nose Sucker with Larger Suction Chamber and More Powerful Suction, Automatic Nose Cleaner with Music and Light Soothing Function', exact: true });
        this.itemColor = this.page.getByRole('radio', { name: 'Grey $33.99 with 15 percent' });
        this.addToCart = this.page.getByRole('button', { name: 'Add to cart', exact: true });

    }

    async clickOnBabyBestSellers() {
        const home = new HomePage(this.page);
        await this.clickBaby.click();
        await this.item.click();
        await this.itemColor.click();
        await this.addToCart.click();
        await expect(this.page.getByRole('link', { name: 'items in cart' })).toBeVisible();

    }
}
module.exports = { BestSellersBaby };
