import countries_data from "./data/countries_data.js";



document.title = 'Day 25: Visuali..'

function filterCountriesByPop () {

    let mostPopulous = countries_data.sort((a, b) => b.population - a.population).slice(0, 10)

    console.log(mostPopulous)
}

filterCountriesByPop()

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

            let mostSpoken = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 10)
            return mostSpoken

})})

    
}

console.log(filterCountriesByLang())
