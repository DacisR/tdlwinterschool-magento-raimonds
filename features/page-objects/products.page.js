import { Page } from './page.js';
import { $ } from '@wdio/globals';

class ProductsPage extends Page {
    get firstProductPhoto() { return $('.products .product-image-photo'); }
}

export default new ProductsPage();