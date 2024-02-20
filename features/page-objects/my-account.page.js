import { Page } from './page.js';
import { $ } from '@wdio/globals';

class MyAccountPage extends Page {
    get contactInformationContent() { return $('.box-information p'); }
}

export default new MyAccountPage();
