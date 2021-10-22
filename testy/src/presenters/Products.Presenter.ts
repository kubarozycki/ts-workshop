import ProductModel from "../products/ProductModel";
import ProductsRepository  from "../products/ProductsRepository";

export default class ProductsPresenter {

    constructor(private readonly anchorEl: HTMLElement) { }

    async init() {
        await this.fetchProducts();
    }

    async fetchProducts() {
        const products = await ProductsRepository.getAllAsync();

        (products && products.length) ?
            this.displayProducts(this.anchorEl, products) :
            this.displayNoProductsMessage(this.anchorEl);
    }

    displayNoProductsMessage(anchorElement: HTMLElement) {
        anchorElement.innerHTML = `<h1>No products</h1>`;
    }

    displayProducts(anchorElement: HTMLElement, products: ProductModel[]) {
        anchorElement.innerHTML = `
        <ul>
            ${(products.map(p => `<li>Product: ${p.name} Cena: ${p.price}</li>`).join(''))}
        </ul>
    `;
    }
}

