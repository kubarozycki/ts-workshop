import ProductModel from "./ProductModel";


const realApiCall = () => new Promise<Array<ProductModel>>((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

const products = new Array<ProductModel>(
    { name: 'bread', price: 2 },
    { name: 'butter', price: 5 },
);


const getAllAsync = async () => await realApiCall();

const addAsync = () => {
    throw new Error('Not implemented');
}

export default {
    getAllAsync,
    addAsync,
};