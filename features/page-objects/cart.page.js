import { Page } from './page.js';
import { browser, $ } from '@wdio/globals';

class CartPage extends Page {
    get firstRemoveItemButton() { return $('.actions-toolbar [title="Remove Item"]'); }
    get pageTitle() { return $('.page-title'); }
    async open() {
        await browser.navigateTo('https://magento.softwaretestingboard.com/checkout/cart/');
        await expect(this.pageTitle).toHaveText("Shopping Cart");
    }
    async removeAllProducts() {
        await browser.waitUntil(async () => {
            try {
                await this.firstRemoveItemButton.waitForDisplayed({ timeout: 2000 });
                await this.firstRemoveItemButton.click();
                return false;
            }
            catch {
                return true;
            }
        }, {
            timeout: 30000
        });
    }
}

export default new CartPage();
