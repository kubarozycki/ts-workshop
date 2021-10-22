
function intercept(runsBeforeFn: () => void) {
    return function (target: any, propertyKey: string) {
        const initialFn = target[propertyKey];
        target[propertyKey] = () => {
            runsBeforeFn();
            const initialResult = initialFn();
            return initialResult;
        }
    };
}


class ProductsRepository {
    
    @intercept(() => console.log('running before function'))
    getProducts() {
        console.log('actual function execution');
        return ['product1', 'product2'];
    }
}

new ProductsRepository().getProducts();
