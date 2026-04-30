// import countries_data from './data/countries.js'
import { countries } from './data/countries.js'

const userInput = document.querySelector('input')
const exactMatchToggle = document.querySelector('.exact-match-btn')
const partialMatchToggle = document.querySelector('.partial-match-btn')
const sortToggle = document.querySelector('.sort-btn')

exactMatchToggle.addEventListener('click', () => {
    console.log('clicked')
    isExactMatch = !isExactMatch
    if (isExactMatch) {
        filterBy(userInput.value)
        exactMatchToggle.classList.add('ON')
        partialMatchToggle.classList.remove('ON')
    }
})

partialMatchToggle.addEventListener('click', () => {
    console.log('clicked')
    isExactMatch = !isExactMatch
    if (!isExactMatch) {
        filterBy(userInput.value)
        partialMatchToggle.classList.add('ON')
        exactMatchToggle.classList.remove('ON')

    } 
})

sortToggle.addEventListener('click', () => {
    isAscending = !isAscending
    filterBy(userInput.value , isAscending)
})


let isExactMatch = false
let isAscending = false

function filterBy (criteria = '', isAscending = true) {
    
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

    filteredCountries.forEach(c => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.textContent = c
        document.querySelector('.countries-container').appendChild(div)
    })
}

filterBy()


// function generateCountries (criteria, isAscending) {

//     const country = filterBy(criteria, isAscending)

//     country.forEach(c => {
//         const div = document.createElement('div')
//         div.classList.add('country')
//         div.textContent = c
//         document.querySelector('.countries-container').appendChild(div)
//     })
// }

userInput.addEventListener('keyup', () => {
    console.log('key up')
    filterBy(userInput.value)
    // console.log(filterBy(userInput.value))
})

const chars = ['q', 'j', 'l', 'u', 'w', 'p'].sort().reverse()

