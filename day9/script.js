// const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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

// function countriesStatement (countries) {
//     let cwl = countries.slice(0, countries.length -1)
//     let cwls = cwl.reduce((acc, curr) => acc + curr + ", ", "")
//     let statement = `${cwls}and ${countries[countries.length - 1]} are north European countries`
//     return statement
// }



// console.log(countriesStatement(countries))

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


//Level 2

const totalPrice = products.filter(p => typeof p.price != "string").reduce((acc, curr) => acc + curr.price, 0)
const sumTotal = products.reduce((acc, curr) => typeof curr.price === "string" ? acc + 0 : acc + curr.price, 0)
console.log(sumTotal)


const categorizeCountries  = () => {
    const countryCategory = []

    const withIA = countries.filter(c => c.includes("ia"))
    const withLand = countries.filter(c => c.includes("land"))
    const withStan = countries.filter(c => c.includes("stan"))
    const withIsland = countries.filter(c => c.includes("Islands"))

    countryCategory.push(withIA)
    countryCategory.push(withLand)
    countryCategory.push(withStan)
    countryCategory.push(withIsland)

    return countryCategory

}

function initialCounts () {
    
    return countries.reduce((letterCounts, country) => {
        let firstLetter = country[0].toUpperCase()
        letterCounts[firstLetter] = (letterCounts[firstLetter] || 0) + 1
        return letterCounts
    }, {})
}
console.log(initialCounts())

const getFirstTenCountries = function () {
    const firstTen = countries.filter((e, i) => i < 10)
    return firstTen
}

const getLastTenCountries  = () => {
    const lastTen = countries.filter((element, index) => {
        if (index > countries.length - 11) {
            return index
        }
    })
    return lastTen
}

console.log(getFirstTenCountries())

const getLetterCounts = (countries) => {
    let letterCountsObject = countries.reduce((letterCounts, country) => {
        let letter = country[0].toUpperCase()
        letterCounts[letter] = (letterCounts[letter] || 0) + 1
        return letterCounts
    }, {})

    let letterCount = Object.entries(letterCountsObject)
    let maxLetterCount = 0
    let mostFrequentLetter

    for (let i  = 0; i < letterCount.length; i++) {
        if (letterCount[i][1] > maxLetterCount) {
            maxLetterCount = letterCount[i][1]
            mostFrequentLetter = letterCount[i][0]
            console.log(i)
        }
    }
    console.log("The letter used most frequently as the initial for country names is:", mostFrequentLetter, "with", maxLetterCount, "occurrences.");
}

getLetterCounts(countries)



function sortCountry (sortParam = "population") {
    let countries = countries_data
    if (sortParam.toLowerCase() === "population") {
        let sortByPop = countries.sort((a, b) => {
            if (a.population < b.population) return 1
            if (a.population > b.population) return -1
            return 0
        })
        return sortByPop
    } else if (sortParam.toLowerCase() === "capital") {
        let sortByCapital = countries.sort((a, b)  => {
            if (a.capital > b.capital) return 1
            if (a.capital < b.capital) return -1
            return 0
        })
        return sortByCapital
    } else if (sortParam.toLowerCase() === "name") {
        let sortByName = countries.sort((a, b) => {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0
        })
        return sortByName
    } else {
        return `Enter a valid filter option such as name or population`
    }
} 

console.log(sortCountry("names"))


const mostSpokenLanguage = (number) => {
    let countries = countries_data
    let msl = countries.reduce((languageCount, country) => {
        let languages = country.languages
        // console.log(languages)
        for (let i = 0; i < languages.length; i++) {
            let language = languages[i] 
            languageCount[language] = (languageCount[language] || 0) + 1
            return languageCount
        }

        
}, {})
let sortedLanguages = Object.entries(msl).sort()
let mappedlanguageCounts = sortedLanguages.map(mappedlanguage => {
    return {
        "language": mappedlanguage[0],
        count: mappedlanguage[1]
    }
}).splice(0, number) 
    return msl
} 
console.log(mostSpokenLanguage(4)) 

const mostPopulousCountry = (num) => {
    let countries = countries_data
    let sortedCountry = countries.sort((a, b) => b.population - a.population)

    let topCountriesByPop = sortedCountry.splice(0, num).map(country => {
        return {
            "country" : country.name,
            "population": country.population

        }
    })
    return topCountriesByPop
}

console.log(mostPopulousCountry(10))

let arr = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics =  {
    data : arr,

    count: function () {
        return this.data.length
    },

    sum : function () {
        return this.data.reduce((acc, curr) => acc + curr, 0)
    },

    min: function () {
        return +this.data.sort((a, b) => a - b).splice(0, 1).join("")
    },

    max: function () {
        return this.data.sort((a, b) => a - b).splice(this.data.length - 1)
    },

    range : function () {
        return (
            this.max() - this.min()
        )
    },

    mean : function () {
        return (
            this.sum() / this.count()
        )
    },

    median: function () {
        let n = this.data.length
        if (this.data.length % 2 === 1) {
            return (n + 1) / 2
        } else {
            return (
                ((n / 2) + ((n / 2) + 1)) / 2
            )
        }
    }


} 

console.log(statistics.range())