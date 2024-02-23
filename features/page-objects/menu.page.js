import { Page } from './page.js';
import { browser, $$ } from '@wdio/globals';

class MenuPage extends Page {
    async selectMenuItem(menuItemNames) {
        for (const [i, menuItemName] of menuItemNames.entries()) {
            let el;

            await browser.waitUntil(async function() {
                const elements = await $$(`//nav//span[text()="${menuItemName}"]`);

                for (const element of elements) {
                    const isDisplayed = await element.isDisplayed();
                    if (isDisplayed) {
                        el = element;
                        return true;
                    }
                }

                return false;
            });

            if (i === menuItemNames.length - 1) {
                await el.click();
            }
            else {
                await el.moveTo();
            }
        }
    }
}

export default new MenuPage();
