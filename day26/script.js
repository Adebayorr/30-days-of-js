// import countries_data from './data/countries.js'
import { countries } from './data/countries.js'

const userInput = document.querySelector('input')
const exactMatchToggle = document.querySelector('.exact-match-btn')
const partialMatchToggle = document.querySelector('.partial-match-btn')
const sortToggle = document.querySelector('.sort-btn')
const countriesParent = document.querySelector('.countries-container')


let isExactMatch = false
let isAscending = false

function filterBy (criteria = '', isAscending = true) {
    countriesParent.textContent = ''
    let filteredCountries 
    if (isExactMatch) {
        const regEx = new RegExp(('^' + criteria), 'gi')
        filteredCountries = isAscending ? [...countries].filter(country => country.match(regEx)).sort() : [...countries].filter(country => country.match(regEx)).sort().reverse()

    } else {
        filteredCountries = isAscending ? 
        [...countries].filter(country => criteria.toLowerCase()
        .split('')
        .every(char => country.toLowerCase().includes(char)))
        .sort():
        [...countries].filter(country => criteria.toLowerCase()
        .split('')
        .every(char => country.toLowerCase().includes(char))).reverse()
    }

    return filteredCountries
    // console.log(filteredCountries)
    // filteredCountries.map( c => {
    //     const div = document.createElement('div')
    //     div.classList.add('country')
    //     div.textContent = c
    //     countriesParent.appendChild(div)
    // })
}

function generateCountries (criteria, isAscending) {

    const country = filterBy(criteria, isAscending)

    country.forEach(c => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.textContent = c
        document.querySelector('.countries-container').appendChild(div)
    })
}

generateCountries()

userInput.addEventListener('keyup', () => {
    console.log('key up')
    generateCountries(userInput.value)
})

exactMatchToggle.addEventListener('click', () => {
    console.log('clicked')
    isExactMatch = !isExactMatch
    if (isExactMatch) {
        generateCountries(userInput.value)
        exactMatchToggle.classList.add('ON')
        partialMatchToggle.classList.remove('ON')
    }
})

partialMatchToggle.addEventListener('click', () => {
    console.log('clicked')
    isExactMatch = !isExactMatch
    if (!isExactMatch) {
        generateCountries(userInput.value)
        partialMatchToggle.classList.add('ON')
        exactMatchToggle.classList.remove('ON')

    } 
})

sortToggle.addEventListener('click', () => {

    generateCountries(userInput.value , isAscending)
    isAscending = !isAscending
})





