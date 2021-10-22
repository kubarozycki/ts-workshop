import waitForElementToRender from "../utils/waitForElementToRender";
import ProductsPresenter from "../presenters/Products.Presenter";
import './index.scss';

(async function () {
    const body = <HTMLElement>(await waitForElementToRender('body'));

    const presenter = new ProductsPresenter(body);
    presenter.init();    
})();