import { Page } from './page.js';
import { $ } from '@wdio/globals';

class CheckoutPage extends Page {
    get orderNumberLink() { return $('.order-number'); }
}

export default new CheckoutPage();
