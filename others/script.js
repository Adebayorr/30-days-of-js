const myCar = {
    'Brand': 'Toyota',
    'Model': 'Camry',
    'Year': 2021
}

console.log(myCar)

const chmod = mycar => {
    mycar.Model = "Sienna"
    return mycar
}

console.log(chmod(myCar))
console.log(myCar)

let v = 'boy'

function chV (input) {
    input = 'girl'
    return (input)
}
console.log(chV(v))
console.log(v)

const newArr = [1,2,3,4,5,6,7,8]
const modArr = arr => {
    arr[0] = 0
    return arr
}
console.log(modArr(newArr)) 
console.log(newArr)

//Function Hoisting ==> throws an error because it is a function expression
const sayHello = () => console.log('Hello!')
console.log(sayHello())


//Function Hoisting ==> This is achievable using the function keyword/ function declaration
console.log(square(5))
function square (n) {
    return n * 5
}


//Recursive Function
// let x = 0
// function recurse (arguments) {
//     arguments[x] * 2
//     x = x +1
//     if (x > 5) {
//         return
//     }
//     recurse()
// }



// recurse(1,2,3,4,5,6,6,7)

//The above code has issue with the Argument Object

class Car {
    constructor(maker, model, color, year, type) {
        this.maker = maker,
        this.model = model,
        this.color = color,
        this.year = year,
        this.type = type 
    }
}

const words = ['bat', 'batarang', 'lasso', 'nth metal', 'trident']

let withLetterO = words.map(function (word) {
   return word.includes('o')
})

console.log(withLetterO)

const smart = {
    smart: true,
    'AI': true
}

const phone = {
    call: true,
    internet: true,
    camera: true,
    'AI': false
}

const smartPhone = {...smart, ...phone}

console.log(smartPhone)

// function sqr (...arguments) {
//   const sqrd =  arguments.map((item) => {
//         return arguments[it] ** 2
//     })

//     return sqrd
// }

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14] 
// console.log(sqr(numbers))

const ultraPhone = {...smartPhone, 'Geolocation': true, 'NFC': true}
console.log(ultraPhone)