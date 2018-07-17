// arguments

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}

console.log(add(3, 8));

// this keyword

const user = {
    name: "knsonera",
    cities: ["one", "two"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
}

console.log(user.printPlacesLived());

// challenge area

const multiplier = {
    // numbers - array to multiply
    numbers: [1, 2, 4],
    // multiplyBy - single number
    multiplyBy: 4,
    // multiply - return a new array where numbers are multiplied
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());