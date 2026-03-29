// Level 1

// The forEach() iterates through an array. It takes a callback function with three parameters: element,index and array
// The Map() iterates and modify an array and returns an  array. It takes a callback with element, index and array as parameters
// The filter() filters out elements of an array that fulfill as specified condition and returns an array containing eligible elements
// The reduce() function reduce an array to a single value and returns the value. It takes a callback and initial value as parameter

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Spain', 'England', "Austia",
    'Kazakhstan', 'Libya', 'Jamaica', 'South Korea', 'Algeria', 'Trinidad and Tobago', 'Ecuador', 
    'Mexico', 'Pakistan', 'Honduras', 'Nigeria', 'Palestine', 'Ireland', 'Russia', 'Mali', 'Australia'
]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 2 

function logElements (e) {
    console.log(e.toUpperCase())
}

countries.forEach(e => logElements(e))

function sqr (num) {
   return num**2
}

const sqrdNum = numbers.map(num => sqr(num))

console.log(sqrdNum)

function filterLand (e)  {
    if (e.toLowerCase().includes('land')) return e
}

const countryWithLand = countries.filter(c => filterLand(c))

console.log(countryWithLand)

const accumulator = (acc, cur) => acc += cur

let numbersTotal = numbers.reduce((acc, cur) => accumulator(acc, cur), 0)

console.log(numbersTotal)

// 3

countries.forEach(e => console.log(e))

// 4
names.forEach(n => console.log(n))

// 5
numbers.forEach(num => console.log(num))

// 6
const newCountries = countries.map(country => country.toUpperCase())

// 7
const countryLength = countries.map(country => country.length)

// 8
const newNumbers = numbers.map(num => num ** 2)

// 9
const nameToUppercase = names.map(name => name.toUpperCase())

// 10

const mappedPrice = products.map((product, i, arr) => {
    return product.price
})

// 11
const withLand = countries.filter(country => country.toLowerCase().includes("land"))

// 12
function withFiveChars (e) {
    return e.length === 6
}
const countriesWithFiveChars = countries.filter(country => withFiveChars(country))

// 13
const countriesAboveSixChars = countries.filter(country => country.length > 6)
// 14
const countryStartsWithE = countries.filter(country => country[0].toLowerCase() === "e")

// 15
const pricesWithValue = products.filter(product => product.price > 0) 

// 16
 const getStringList = (arr) => {
    return arr.filter(e => typeof e === "string")
 }

 console.log(getStringList(["Lion", 200, "London", "Agent 04", true]))

// 17
let sum = numbers.reduce((acc, cur) => {
    return acc += cur
}, 0)

// 18
const countryStatement = function (c) {

    let statement = c.reduce((acc, cur) => {
        return acc += `${cur}, `
    }, "")

    return `${statement} are European countries`
}

// 19 
//  some() finds some elements that are similar in one aspect while every() 
//  find all element that are similar in one aspect. They both return boolean

// 20
let someNameWithSeven = names.some(e => e.length > 7)

//21
let allCountriesHasLand = countries.every(e => e.toLowerCase().includes("land"))

// 22
// find() finds the element that fulfill the find condition and return the element while
//  findIndex do the same but returns the index of the element

// 23
let countryWithWithSix = countries.find(country => country.length === 6)

// 24
let indexOfCountryWithWithSix = countries.findIndex(country => country.length === 6)

// 25
let indexOfNorway = countries.findIndex(country => country.toLowerCase() === "norway")

// 26
let indexOfRussia = countries.findIndex(country => country.toLowerCase() === "russia")

console.log(indexOfRussia)

// Level 2
// 1
let productTotal = products.filter(e => e.price > 0).reduce((acc, cur) => {
    return acc += cur.price
}, 0)


// 2
// let sumOfProducts = products.reduce((acc, cur))
// console.log(productTotal)

// 3
function catergorizeCountries (filter, arr = countries) {
    const countriesWith = arr.filter(c => c.toLowerCase().includes(filter))
    // const countriesWithLand = arr.filter(c => c.toLowerCase().includes('land'))
    // const countriesWithStan = arr.filter(c => c.toLowerCase().includes('stan'))
    // const countriesWithIsland = arr.filter(c => c.toLowerCase().includes('island'))


    return countriesWith
}

console.log(catergorizeCountries('stan'))

// 4
function initialCounter (data) {
    const initials = data.map(d => d[0].toUpperCase())
    const initialsCountObj = {}
    for (let init of initials ) {
        if (initialsCountObj[init]) {
            initialsCountObj[init]++
        }  else if (!initialsCountObj[init]) {
            initialsCountObj[init] = 1
        }
    }

    const counter = Object.entries(initialsCountObj)
    console.log(counter)
}

initialCounter(countries)

// 5
function getFirstTen (data) {
    let result = data.filter((d, i) => i < 10)
    return result
}

console.log(getFirstTen(countries))

// 6
function getLastTen (data) {
    let result = data.filter((e, i, arr) => i >= arr.length - 10)
    return result
}

console.log(getLastTen(countries))

// 7
function mostFrequentLetter (data) {
    const initials = data.map(d => d[0].toUpperCase())
    const initialsCountObj = {}
    for (let init of initials ) {
        if (initialsCountObj[init]) {
            initialsCountObj[init]++
        }  else if (!initialsCountObj[init]) {
            initialsCountObj[init] = 1
        }
    }

    const counter = Object.entries(initialsCountObj)
    const sorted = counter.sort((a, b) =>  {
        return b[1] - a[1]
    })
    let maxOccur = sorted[0][1]
    const mostFreq = sorted.filter(e => e[1] === maxOccur).reduce((acc, cur) => {
        return acc += `${cur[0]},`
    }, "")

    let statement = mostFreq
    console.log(mostFreq)
}

mostFrequentLetter(countries)