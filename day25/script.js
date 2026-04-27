import countries_data from "./data/countries_data.js";
const buttonPopulation = document.querySelector('.pop-filter-btn')
const buttonLanguages = document.querySelector('.lang-filter-btn')
const filterDescElem = document.querySelector('.filter-desc')
const visualizerParentElem = document.querySelector('.data-visual-div')



document.title = 'Day 25: Visuali..'

function filterCountriesByPop () {

    let mostPopulous = countries_data.sort((a, b) => b.population - a.population).slice(0, 10)
    let worldPopulation = countries_data.reduce((acc, curr) => acc += curr.population, 0)
    console.log(mostPopulous, worldPopulation)
}

filterCountriesByPop()

const visualizerDiv = document.createElement('div')
const langOrPop = document.createElement('p')
const barWrapper = document.createElement('div')
const detail = document.createElement('p')
const barGraph = document.createElement('span')

visualizerDiv.setAttribute('class', 'visualizer')
langOrPop.setAttribute('class', 'filter')
barWrapper.setAttribute('class', 'bar-wrapper')
detail.setAttribute('class', 'detail')
barGraph.setAttribute('class', 'bar')


document.body.appendChild

console.log(barWrapper)
function filterCountriesByLang () {

// USING MAP METHOD

    // let languages = new Map()
    // countries_data.forEach(country => {
        // country.languages.forEach( lang => {
        //     if (languages.has(lang)) {
        //         let currentLang = languages.get(lang)
        //         languages.set(lang, currentLang + 1)
        //     } else {
        //         languages.set(lang, 1)
        //     }

        // })


// USING JS OBJECT

        const languages = {}
        countries_data.forEach( country => {
            
            country.languages.forEach(lang => {
            if (Object.hasOwn(languages, lang)) {
                languages[lang] += 1
            } else {
                languages[lang] = 1
            }

})})

    let mostSpoken = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 10)
    mostSpoken.forEach( lang => {
        

        console.log(lang[0], lang[1])
    })
}

console.log(filterCountriesByLang())
