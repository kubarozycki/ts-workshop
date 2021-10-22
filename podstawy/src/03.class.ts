//basic constructor

class Butter {
    constructor(price: number, producer: string) {
        this._price = price;
        this._producer = producer;
    }

    private readonly _price: number;
    private readonly _producer: string;

    getPrice()
    {
        return this._price;
    }

}

//parameter properties
class Bread {
    constructor(private readonly _price: number, readonly producer: string) {
    }

    getPrice()
    {
        return this._price;
    }
}


