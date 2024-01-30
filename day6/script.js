const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let j = 0
// do {
//     console.log(j)
//     j++
// } while (j <= 10)

// let k = 0 

// while (k <= 10) {
//     console.log(k)
//     k++
// }

//2

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let x = 10

// do {
//     console.log(x)
//     x--
// } while (x >= 0)

// {{  
//     let y = 10

//     while (y >= 0) {
//         console.log(y)
//         y--
//     }
// }}

// let n = 25
// let m = 0

// do {
//     console.log(m)
//     m++
// } while(m <= n )

// let hash = "#"

// for (let i = 0; i <= 15; i++) {
//     console.log(hash.repeat(i))
// }


//5
{{
// let counter = 0
// while (counter <= 10) {
//     console.log(`${counter} x ${counter} = ${counter * counter}`)
//     counter++
// }


//6
// let num = 0

// do {
//     console.log(`${num} ${num ** 2} ${num ** 3}`)
//     num++
// } while (num <= 10)

//

//7
let num = 0

// do {
//     if (num != 0 && num % 2 === 0) {
//         console.log(num)
//     }
//     num++
// } while (num <= 100)

//8

// while (num <= 100) {
//     if (num % 2 === 1) {
//         console.log(num)
//     }
//     num++
// }

//10

let sum = 0
let sumEven = 0
let sumOdd = 0

// do {
//     sum += num
//     console.log(sum)
//     num++
// } while (num <= 100)


//11
// do {
//     if (num != 0 && num % 2 === 0) {
//         sumEven += num
//         // console.log(sumEven)
//     } else if (num % 2 === 1) {
//         sumOdd += num
//         // console.log(sum)
//     }
//     num++
// } while (num <= 100)

// console.log(sumEven, sumOdd)

//12
// let totals = []
// do {
//     if (num != 0 && num % 2 === 0) {
//         sumEven += num

//     } else if (num % 2 === 1) {
//         sumOdd += num
//     }
//     if (num === 100) {
//         totals.push(sumOdd)
//         totals.push(sumEven)
//     }
//     num++
   
// } while (num <= 100)

// console.log(totals)

// let randomNums = []

// for (let i = 0; randomNums.length <= 4; i++) {
//     let randomNum = Math.round(Math.random() * 256)
//     randomNums.push(randomNum)
// }

// console.log(randomNums)

// let uniqueRandomNums = []

// for (let i = 0; uniqueRandomNums.length <= 4; i++) {
//     let uniqueRandomNum = Math.round(Math.random() * 4)
//     if (uniqueRandomNums.includes(uniqueRandomNum)) {
//         continue
//     } else {
//         uniqueRandomNums.push(uniqueRandomNum)
//     }
// }
// console.log(uniqueRandomNums)

// let chars = "12345678abcdefghijklmnwxyz"

// let randomID = ""

// let init = 0
// do {
//     randomID += chars[Math.round(Math.random() * 25)]
//     init++
// } while (randomID.length <= 5)

// console.log(randomID)
// }}

//Level 2


// let randomId = ""
// let chars = "12345678abcd90efghijopqrstuvklmnwxyz"
// let length = Math.round((Math.random() * 30) + 4)
// let count = 0

// while (count <= length) {
//     randomId += chars[Math.round(Math.random() * 34)]
//     count++
// }
// console.log(randomId)


// let randomHex = "#"
// let hexChars = "0a1b2c3d4f5e6789"
// for (let i = 0; i < 6; i++) {
//     randomHex += hexChars[Math.round(Math.random() * 15)]
// }

// randomHex

// let rgbColor = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`

// rgbColor

// // for (let i = 0; i < countries.length; i++) {
// //     countries[i] = countries[i].toUpperCase()
// // }

// countries

// let countriesLengthArr = []

// for (let i = 0; i < countries.length; i++) {
//     countriesLengthArr.push(countries[i].length)
// }
// countriesLengthArr

// let countriesDetailsArr = []

// let counter = 0

// do {
//     let countryDetails = []
//     countryDetails.push(countries[counter])
//     countryDetails.push(countries[counter].toUpperCase().substring(0, 3))
//     countryDetails.push(countries[counter].length)
//     countriesDetailsArr.push(countryDetails)
//     counter++
// } while(counter < countries.length)

// countriesDetailsArr

// let countrieswithIA = []
// let countrieswithLand = []
// let count = 0
// while(count < countries.length) {
//     if (countries[count].includes("land")) {
//         countrieswithLand.push(countries[count])
//     } else {
//         countries
//     }
//     count++
// }
// countrieswithLand.length > 0 ? console.log(countrieswithLand) : console.log(countries)


// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].endsWith("ia")) {
//         countrieswithIA.push(countries[i])
//         console.log(countrieswithIA)
//     } else {
//         console.log(countries)
//     }
// }

// let longestCountry = countries[0].length

// for (let i = 0; i < countries.length; i++) {
//     if (countries[i].length > longestCountry) {
//         longestCountry = countries[i]
//     }
// }
// console.log(longestCountry)

// let counter = 0
// let countriesWithFiveLetters = []

// do {
//     if (countries[counter].length === 5) {
//         countriesWithFiveLetters.push(countries[counter])
//     }
//     counter++
// } while (counter < countries.length)
// countriesWithFiveLetters

let longestWord = webTechs[0]
longestWord
let count = 0

while(count < webTechs.length) {
    webTechs[count].length > longestWord.length ? longestWord = webTechs[count] : longestWord
    count++
}

console.log(longestWord)

let techPairs = []

for (let i = 0; i < webTechs.length; i++) {
    let techPair = []
    techPair[0] = webTechs[i]
    techPair[1] = webTechs[i].length
    techPairs.push(techPair)
}
techPairs


let mern = `${mernStack[0][0]}${mernStack[1][0]}${mernStack[2][0]}${mernStack[3][0]}`
mern

let mern2  = ""

for (let i = 0; i < mernStack.length; i++) {
    mern2 += mernStack[i][0]
}
mern2


for (let i = 0; i < webTechs.length; i++) {
    console.log(webTechs[i])
}

let fruits = ['banana', 'orange', 'mango', 'lemon']
let reverseFruit = []
for (let i = 0; i < fruits.length; i++) {
    reverseFruit.push(fruits[3 - i])
}
reverseFruit

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j])
    }
}
}}
