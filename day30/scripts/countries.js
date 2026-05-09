import countries_data from "../db/countries_data.js";

const inputElement = document.querySelector('input')
const inputContainer = document.querySelector('form')
const filterButtons = document.querySelectorAll('.input-btn')
const filterCapitalButton = document.querySelector('.by-capital')
const filterNameButton = document.querySelector('.by-name')
const filterPopulationButton = document.querySelector('.by-population')

const countriesDivContainer = document.querySelector('.countries')

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
    countriesDivContainer.innerHTML = ''
    const newCountries =  filterCountries()
    generateCountries(newCountries)
})

filterCapitalButton.addEventListener('click', () => {
    countriesDivContainer.innerHTML = ''
    filterByCapital = !filterByCapital
    console.log(filterByCapital);
    const newCountries =  filterCountries()
    generateCountries(newCountries)
})

function generateCountries (countries) {

    countries.forEach( country => {
        const countryWrapper = document.createElement('div')
        const countryFlag = document.createElement('img')
        const countryName = document.createElement('h2')
        const countryDetailsWrapper = document.createElement('div')
        const countryCapital = document.createElement('p')
        const countryLanguages = document.createElement('p')
        const countryPopulation = document.createElement('p')

        countryWrapper.classList.add('country')
        countryFlag.classList.add('flag-image')
        countryName.classList.add('country-name')


        countryFlag.setAttribute('src', country.flag)
        countryFlag.setAttribute('alt', `Flag of ${country.name}`)
        countryName.textContent = country.name
        countryCapital.textContent = country.capital
        countryLanguages.textContent = listLanguages(country.languages)
        

        countriesDivContainer.appendChild(countryWrapper)
        countryWrapper.append(countryFlag, countryName, countryDetailsWrapper)
        countryDetailsWrapper.append(countryCapital, countryLanguages, countryPopulation)
    })
}


function listLanguages (languages) {
    let formatLanguages = '' 
    let lastLang
    if (languages.length === 1) {
        formatLanguages = languages[0]
        return formatLanguages
    }
    
    if (languages.length > 1){
        formatLanguages = languages.slice(0, languages.length - 1).join(' ')
        lastLang = ` and ${languages[languages.length - 1]} `
        return formatLanguages + lastLang
    }
}

console.log(listLanguages(['Yoruba', 'Fulfulde', 'Igbo']))