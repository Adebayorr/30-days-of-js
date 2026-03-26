// 1
// const FullName = function () {
//     return 'Raheem Fatai Olalekan'
// }

// console.log(FullName())

// 2
const fullname = (firstName, lastName) => `${firstName} ${lastName}`

console.log(fullname('Adebayor', 'Raheem'))

// 3

const addNumbers = (num1, num2) => num1 + num2
console.log(addNumbers(4, 1))

//4

const areaOfRect = (l, b) => l * b

console.log(areaOfRect(4, 9))

//5

const perimeterOfCirc = (l, w) => 2 * (l * w)

console.log(perimeterOfCirc(4, 9))

//6

const VolumeOfRectPrism = (l, w, h) => l * w * h

console.log(VolumeOfRectPrism(12, 16, 10))

//7

const areaOfCirc = (r, pi = 3.14) => pi*r*r

console.log(areaOfCirc(4))

//8

const density = (volume, mass) => volume / mass

console.log(density(45, 17))

//9 

const circumOfCircle = (r) => 2 * 3.14 * (r * r) 

console.log(circumOfCircle(12))

//10 
const speed = (distance, time) => distance/time 

console.log(speed(1200, 56))

//11

const weight = (mass, gravity) => mass * gravity

console.log(weight(45, 5))

//12

const celsiusToFah = (celsius) => (celsius * 9 /5) + 32

console.log(celsiusToFah(23))

//13

const bmiFunc = (weight, height) => {
    
    let bmi = `${weight / (height * height)}`
    let result = ''

    if (bmi < 18.5) {
        result = 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'Normal weight'
    } else if (bmi >= 25  && bmi <= 29.9) {
        result = 'Overweight'
    } else {
        result = 'Obese'
    }

    return result
}

console.log(bmiFunc(64, 1.7))

//14

function checkSeason (mon) {
    let month = mon.toLowerCase()
    let output = ''

    if (['september', 'october', 'november'].includes(month)) {
        output = "Autumn"
    } else if (['december', 'january', 'february'].includes(month)) {
        output = "Winter"
    } else if (['march', 'april', 'may'].includes(month)) {
        output = "Spring"
    } else {
        output = "Summer"
    }

    return output
}

console.log(checkSeason('july'))

//15

const findMax = (...args) => Math.max(...args)

console.log(findMax(4, 8, 1))


// Section 2
//1

const solveLinEquation = (a,b,c,x,y) => (a*x) + (b*y) + c 

//2 
const solveQuadEquation = function (a, b, c,) {
    if (!a && !b && !c)  return 'Roots not provided'

    let d = b**2 - (4*a*c)

    if (d === 0) return (-b + Math.sqrt(b*b - (4*a*c))) / 2*a
    
    if (d > 0) {
        let x1 = (-b + Math.sqrt(b*b - (4*a*c))) / (2*a)
        let x2 = (-b - Math.sqrt(b*b - (4*a*c))) / (2*a)
        return {x1, x2}
    }

    if (d < 0) return 0
    
}
console.log(solveQuadEquation(1, -1, 0))

//3
const printArray = (...args) => {
    for (let arg of args) {
        console.log(arg)
    }
}

printArray("Mide", "Lagos", "Lexus", true, 345)

// 4

function showTimeDate () {
    const date = new Date()
    let minutes = date.getMinutes()
    let hour = date.getHours()
    let day = date.getDate() 
    let month = date.getMonth()
    let year = date.getFullYear()

    return (`${day}/${month + 1}/${year} ${hour}:${minutes}`)
}

console.log(showTimeDate())

// 5

const swapValues = function (x, y) {
    let [a, b] = [x, y]
    y = a
    x = b
    return {x, y}
}

console.log(swapValues(3, 4))

// 6

const reverseArray = (arr) => {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }

    return newArr
} 

console.log(reverseArray([1,2,3,4,5,6,7,8]))

// 7

function capitalizeArray (arr) {
    const newarr = []
    for (let a of arr ) {
        newarr.push(a.toUpperCase())
    }

    return newarr
}

console.log(capitalizeArray(["Winslow", "Sokovia", "Saturday", "Montreal", "Ferarri"]))

// 8
let items = ['Lettuce', "Cheese", "Milk", "Sausage"]
function addItem (item) {
    items.push(item)

    return items
}

console.log(addItem("Avocado"))
console.log(addItem("Juice"))





// Extra Challenge

function checkActivityStatus (stepTaken, waterDrank) {
    console.log(stepTaken)
    let output = ''

    if (stepTaken >= 5000 && waterDrank >= 2.5 ) {
        output = "Great job, Raheem! You are fit and hydrated."
    } else if (stepTaken >= 5000 && waterDrank < 2.5) {
        output = "You're active, but your blood needs more water. Drink up!"
    } else if (stepTaken < 5000) {
        output = "Time to step away from the code and move a bit."
    }
    
    return output
}

console.log(checkActivityStatus(500, 2.5))