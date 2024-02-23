import { Page } from './page.js';
import { $ } from '@wdio/globals';

class ReviewPage extends Page {
    get placeOrderButton() { return $('button[title="Place Order"]'); }
}

export default new ReviewPage();
