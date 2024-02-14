const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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


console.log(productsWithVal)