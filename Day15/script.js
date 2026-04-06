//  Level 1

// 1
class Animal {
    constructor (name, breed, sex, age, color, favoriteMeal) {
        this.name = name,
        this.breed = breed,
        this.sex = sex,
        this.age = age,
        this.color = color,
        this.favoriteMeal = favoriteMeal
    }

    
    animalInfo () {
        return `${this.name} is a breed of ${this.breed} with ${this.color} fur. ${this.name} loves ${this.favoriteMeal}`
    }
    get getName () {
        return this.name
    }

    static specie () {
        return 'Animalia'
    }
}

// 2
class Dog extends Animal {
    constructor (name, breed, sex, age, color, favoriteMeal) {
        super (name, breed, sex, age, color, favoriteMeal) 
    }
}

class Cat extends Animal {
    constructor (name, breed, sex, age, color, favoriteMeal) {
        super (name, breed, sex, age, color, favoriteMeal )
    }

    animalInfo () {
        return `${this.name} is a ${this.sex} ${this.breed} with ${this.color} fur. ${this.name} likes ${this.favoriteMeal}.`
    }
}

const bingo = new Dog(
    'Bingo',
    'Labrador',
    'female',
    1,
    'brown',
    'cheese'
)

const maya = new Cat(
    'Maya',
    'Bengal',
    'male',
    '1.5',
    'brown and white',
    'tofu'
)

console.log(maya)
console.log(Cat.specie())
console.log(maya.animalInfo())
console.log(bingo)
console.log(bingo.animalInfo())



// Level 3

let age = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
// let sum = age.reduce((acc, curr) => {
//     return acc += curr
// }, 0)
// console.log(sum)
class Stastistics {
    constructor (data) {
        this.data = data
    }

    count () {
        return this.data.length
    }

    sum () {
        return this.data.reduce((acc, curr) => acc += curr, 0)
    }

    max () {
        if (this.data.length === 0) return 0
        
        if (this.data.length >= 1) return this.data.sort((a, b) => b - a)[0] //.slice(0, 1)
    }

    min () {
        if (this.data.length === 0) return 0
        if (this.data.length >= 1) return this.data.sort((a, b) => b - a ).slice(-1) // [0]
    }

    range () {
        return (this.max() - this.min())
    }

    mean () {
        if (this.data.length === 0) return 0
        if (this.data.length >= 1) return this.data.reduce((acc, curr) => acc += curr, 0) / this.data.length
    }

    median () {
        if (this.data.length === 0) return 0
        let sorted = this.data.sort((a, b) => b - a)
        console.log(Math.ceil(sorted.length / 2))
        if (sorted.length % 2 === 1) return sorted[Math.ceil(sorted.length / 2)] 
        if (sorted.length % 2 === 0) return (sorted[sorted.length / 2] + sorted[(sorted.length / 2) -1]) / 2
    }

    // mode () {
    //     const uniqueAge = new Set(this.data)
    //     console.log(uniqueAge)
    //     const mostFreq = []
    //     this.data.forEach(num => {
    //         let count = a === 
    //     })
    // }
}

const statistics = new Stastistics(age)

console.log(statistics.mode())