const {test,expect} = require('@playwright/test');
const { waitForDebugger } = require('node:inspector');
class HomePage {

    // Constructor
    constructor(page) {
        this.page = page;

//locators
this.signIn =  page.getByRole('link', { name: 'Hello, sign in Account & Lists' });
this.fillEmail = page.getByRole('textbox', { name: 'Enter mobile number or email' });
this.clickContinue = page.getByRole('button', { name: 'Continue' });
this.fillPassword = page.getByRole('textbox', { name: 'Password' });
this.clickSignIn = page.getByRole('button', { name: 'Sign in', exact: true });
this.verifySignIn = page.locator('#nav-link-accountList-nav-line-1');
this.bestSellerclick =  page.getByRole('link', { name: 'Best Sellers', exact: true });


 }       

//action methods
async goTo() {
    await this.page.goto('https://www.amazon.com/');
}
 async singin(){
    await this.signIn.click();
    await this.fillEmail.fill('shaladong53@gmail.com');
    await this.clickContinue.click();
    await this.fillPassword.fill('Test123$');
    await this.clickSignIn.click();
    await this.page.waitForTimeout(5000);
    await expect(this.verifySignIn).toBeVisible();
 } 
 async bestSeller(){
    await expect(this.bestSellerclick).toBeVisible();
    await this.bestSellerclick.click();
 }
}

module.exports = {HomePage};
