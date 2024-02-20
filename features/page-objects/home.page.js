import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {
    async open() {
        await browser.navigateTo('https://magento.softwaretestingboard.com/');
    }
}

export default new HomePage();
