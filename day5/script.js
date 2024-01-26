const emptyArr = Array()
const arrayOfFiveElements = Array(8).fill("x")
console.log(arrayOfFiveElements.length)

const cities = ["Lagos", "Johannesburg", "Djibouti", "Los Angeles", "London"]
console.log(cities[0])
console.log(cities[2])
console.log(cities[cities.length - 1])


const mixedDataTypes = ["Oyewo", "Marvelous", "OAU", 5, true, {studentship: "active"}]

const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] 

console.log(companies)
console.log(companies.length)
console.log(companies[0])
console.log(companies[3])
console.log(companies[companies.length -1])

console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])
console.log(companies[4])
console.log(companies[5])
console.log(companies[6])

console.log(companies[0].toUpperCase())
console.log(companies[1].toUpperCase())
console.log(companies[2].toUpperCase())
console.log(companies[3].toUpperCase())
console.log(companies[4].toUpperCase())
console.log(companies[5].toUpperCase())
console.log(companies[6].toUpperCase())


console.log(`${companies[0]}, ${companies[1]}, ${companies[2]}, ${companies[3]}, 
${companies[4]}, ${companies[5]} and ${companies[6]} are all big IT companies`)

let company = "Ibm"

companies.indexOf(company) >= 0 ? console.log(company) : console.log("Company is not found")

// companies.sort()
// companies.reverse()

// const firstThree = companies.slice(0, 3)
// console.log(firstThree)

// const lastThree = companies.slice(companies.length - 3)
// console.log(lastThree)

// let middleCompanies

// companies.length % 2 == 0 ? middleCompanies = [companies[(companies.length / 2) - 1], companies[companies.length / 2]] : 
// middleCompanies = companies[(companies.length - 1) / 2]


// console.log(middleCompanies)
// console.log(companies.shift())

if (companies.length / 2 == 0) {
  companies.splice((companies.length / 2 )- 1, 2)
} else {
  companies.splice((companies.length - 1)/2, 1)
}

companies.pop()
companies.splice(0)
console.log(companies)

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const cleanedText = text.replace(/[^\w\s]/g, '').toLowerCase()
let arrayOfWords = cleanedText.split(" ")
console.log(arrayOfWords)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.includes("Meat") ? shoppingCart : shoppingCart.unshift("Meat")

shoppingCart.includes("Sugar") ? shoppingCart : shoppingCart.push("Sugar")

let allergy = "Honey"

shoppingCart.includes(allergy) ? shoppingCart.splice(shoppingCart.indexOf(allergy), 1):
shoppingCart

shoppingCart.indexOf("Tea") != -1 ? shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea":
shoppingCart

console.log(shoppingCart)


countries.includes("Ethiopia") ? console.log("Ethiopia".toUpperCase()) : 
countries.push("Ethiopia")

console.log(countries)


webTechs.includes("Sass") ? console.log("Sass is a CSS pre-processor"):
webTechs.push("Sass")
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd).sort()
console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] 

let minAge = ages.sort()[1]
let maxAge = ages.sort()[ages.length -1]
console.log(maxAge)

let median

ages.length % 2 == 0 ? median = (ages[((ages.length / 2) -1)] + ages[(ages.length / 2)]) /2 :
median = ages[(ages.length -1) /2]

console.log((ages[((ages.length / 2) -1)] + ages[(ages.length / 2)]) /2)
console.log(ages[(ages.length / 2)])

console.log(ages)

let sumTotal = ages.reduce((sum, age) => sum + age, 0)

let average = sumTotal / ages.length
console.log(average)

let range = maxAge - minAge

Math.abs(minAge - average)
Math.abs(maxAge - average)


let countryCopy = countries.slice(0, 10)

let middleCountry_ies 
countries.length % 2 == 0 ? middleCountry_ies = [countries[(countries.length / 2)] - 1, countries[(countries.length / 2)]] :
middleCountry_ies = countries[(countries.length - 1) / 2]
console.log(middleCountry_ies)

let countriesListOne 
let countriesListTwo

if (countries.length % 2 == 0) {
  countriesListOne = countries.slice(0, countries.length /2)
  countriesListTwo = countries.slice(countries.length /2)
} else {
  countriesListOne = countries.slice(0, (countries.length /2) + 1)
  countriesListTwo = countries.slice((countries.length /2) + 1)
}

console.log(countriesListOne)
console.log(countriesListTwo)
