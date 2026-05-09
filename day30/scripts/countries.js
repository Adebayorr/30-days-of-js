import countries_data from "../db/countries_data.js";

const inputElement = document.querySelector('input')
const inputContainer = document.querySelector('form')
const filterButtons = document.querySelectorAll('.input-btn')
const filterCapitalButton = document.querySelector('.by-capital')
const filterNameButton = document.querySelector('.by-name')
const filterPopulationButton = document.querySelector('.by-population')


inputContainer.addEventListener('submit', (e) => e.preventDefault())

let ascendingByName = false
let ascendingByCapital = false

let filterByName = false
let filterByCapital = true

function filterCountries () {
    if ((!filterByCapital && !filterByName) || filterByName) {

        const newCountries = countries_data.filter( country => country.name
        .toLowerCase().match(inputElement.value.toLocaleLowerCase()))

        console.log(newCountries)
        return newCountries
    } else if (filterByCapital && !filterByName) {
        const newCountries = countries_data.filter( country => country.capital)
        .filter( country => country.capital
        .toLowerCase().match(inputElement.value.toLocaleLowerCase()))

        console.log(newCountries)
        return newCountries
    }
}

inputElement.addEventListener('keyup', () => {
    filterCountries()
})

filterCapitalButton.addEventListener('click', () => {
    filterByCapital = !filterByCapital
    console.log(filterByCapital);
    filterCountries()
})

