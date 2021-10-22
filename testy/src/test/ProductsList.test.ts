import { JSDOM } from 'jsdom';
import ProductsRepository from '../products/ProductsRepository';
import { mocked } from 'ts-jest/utils'
import ProductsPresenter from '../presenters/Products.Presenter';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import waitForDomToLoad from '../utils/waitForDomToLoad';

jest.mock('../products/ProductsRepository');
const mockedGetAllAsync = mocked(ProductsRepository.getAllAsync, true);

describe('Check if presenter render products properly', () => {
    afterEach(() => {
        mockedGetAllAsync.mockClear();
    })

    it('Should display no products message if repository returns no products', async () => {
        mockedGetAllAsync.mockResolvedValue([]);
        const anchorElMock: HTMLElement = { innerHTML: 'initial' } as unknown as HTMLElement;
        const presenter = new ProductsPresenter(anchorElMock);
        await presenter.init();

        expect(anchorElMock.innerHTML.replace(/\s/g, "")).toEqual('<h1>No products</h1>'.replace(/\s/g, ""));
    });

    it('Should display products list if repository returns some products', async () => {
        mockedGetAllAsync.mockResolvedValue([
            { name: 'bread', price: 4, },
            { name: 'butter', price: 6, }]);

        const anchorElMock = { innerHTML: 'initial' } as unknown as HTMLElement;
        const presenter = new ProductsPresenter(anchorElMock);
        await presenter.init();

        expect(anchorElMock.innerHTML.replace(/\s/g, "")).toEqual('<ul><li>Product: bread Cena: 4</li><li>Product: butter Cena: 6</li></ul>'.replace(/\s/g, ""));
    });

    it('Should display as many li items as returned from the repository', async () => {

        const toBeResolvedFromMock = [
            { name: 'bread', price: 4, },
            { name: 'butter', price: 6, },
            { name: 'orange', price: 6, }
        ];

        mockedGetAllAsync.mockResolvedValue(toBeResolvedFromMock);

        const anchorElMock = { innerHTML: 'initial' } as unknown as HTMLElement;
        const presenter = new ProductsPresenter(anchorElMock);
        await presenter.init();

        const dom = new JSDOM(anchorElMock.innerHTML);
        const liItemsRenderedCount = dom.window.document.querySelectorAll('li').length;

        expect(liItemsRenderedCount).toEqual(toBeResolvedFromMock.length);
    });

});