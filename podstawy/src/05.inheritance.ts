class Animal {
    constructor(protected readonly sound: string) {
    }

    makeSound()
    {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(sound: string) {
        super(sound);
    }
}


class Lion extends Animal {
    constructor(sound: string) {
        super(sound);
    }

    makeSound()
    {
        console.log(`${this.sound}! I want to make sound on my own!!`)
    }
}

export default Lion;