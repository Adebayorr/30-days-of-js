const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

//1. 

//ForEach function is used to loop through an array. It takes three parameters. the first is the element parameter, followed by the optional
//parameters for the index and the array

//The Map callback function is used to loop through an array and modify the content of an array. It takes three arguments like ForEach

//The filter high order function loops through an array and return the elements that meet a specified condition

//The Reduce function takes three arguments: The accumulator, the curently iterated element and the initial value for the accumulator
//It returns a single value

const cb = e => {
    console.log(e)
}

countries.forEach(country => {
    console.log(country)
})

names.forEach(name => {
    console.log(name)
})

numbers.forEach(cb)

let upperCaseCountry = countries.map(country => country.toUpperCase())
let countriesLength = countries.map(country => country.length)
let numbersSqr = numbers.map(num => num **2)
let upperCaseNames = names.map(name => name.toUpperCase())
let productAndPrice = products.map(product => [product.product, product.price])
let countriesWithLand = countries.filter(country => country.includes("land"))
let sixCharsCountries = countries.filter(country => country.length === 6)
let sixCharsOrMoreCountries = countries.filter(country => country.length >= 6)
let E_countries = countries.filter(country => country.startsWith('E'))
let productsWithVal = products.filter(product => product.price != "")

function getStringLists  (arr) {
    let strings = arr.filter(a => typeof a === "string")
    return strings
}

let sumOfNumbers = numbers.reduce((acc, curr) => acc + curr, 0)

function countriesStatement (countries) {
    let cwl = countries.slice(0, countries.length -1)
    let cwls = cwl.reduce((acc, curr) => acc + curr + ", ", "")
    let statement = `${cwls}and ${countries[countries.length - 1]} are north European countries`
    return statement
}



console.log(countriesStatement(countries))

//19.
//the some method is used to check if items of an array share some similar charcteristics. It returns true if the items share the stated
//argument otherwise false

//The every method works similarly like the some method. The major different is the every method only returns true if all the elements
//of the array meets the specified condition

console.log(names.some(name => name.length > 7))
console.log(countries.every(country => country.includes("land")))

//22

//The find method checks if an element of an array satisfies a condition and returns the first element that satisfy the condition
//The findIndex method finds the index of the first element that meet a specified condition and return the index

let countryWithSixLetters = countries.find((country) => country.length == 6)
let iocwsl = countries.findIndex(country => country.length == 6)
let findNorway = countries.findIndex(country => country == "Norway")
let findRussia = countries.findIndex(country => country === "Russia")

console.log(findRussia)

