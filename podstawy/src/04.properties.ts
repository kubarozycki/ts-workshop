class Product {
    private _name: string;

    get name(): string {
        return this._name;
    }

    protected set name(newName: string) {
        this._name = newName;
    }
}

