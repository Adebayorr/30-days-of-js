import countries_data from "./data/countries_data.js";
document.title = 'Day 25: Visuali..'

function filterCountriesByPop () {

    let mostPopulous = countries_data.sort((a, b) => b.population - a.population).slice(0, 10)

    console.log(mostPopulous)
}

filterCountriesByPop()

function filterCountriesByLang () {
    let languages = {

    }

    countries_data.forEach(country => {
        country.languages.forEach(lang => {
            console.log(lang)
        })
    })
}

filterCountriesByLang()