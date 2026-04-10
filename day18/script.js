const countriesAPI = 'https://restcountries.com/v3.1/all?fields=name'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

//  Level 1
// 1

let countries
fetch(countriesAPI).then((response) => response.json())
.then(data => {
    data.forEach(country => country)
    
}).catch(err => console.log(err))


// Level 2

// 1
let catArray 
const catNames = []
async function fetchCat (url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        catArray = data
        data.forEach(cat => {
            catNames.push(cat.name)
            
        })
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}


// Level 3

fetchCat(catsAPI)


function averageCatWeight () {
    const catWeightsMetricRange = []
    catArray.forEach(cat => catWeightsMetricRange.push(cat.weight.metric))

    let catweightsInMetric = catWeightsMetricRange.map(weightRange => {
        // console.log(weightRange)
        let weight = weightRange.split(/[- \s]/g)
        return weight
    }).map((weightRange) => {
        // console.log(weightRange)
        return Number(weightRange[3]) + Number(weightRange[0])
    }).reduce((acc, curr) => acc += curr, 0) / catWeightsMetricRange.length
    // console.log(catweightsInMetric)
    // console.log(catWeightsMetricRange)
    
    return `${catweightsInMetric}kg`
}
setTimeout(() => {
    console.log(averageCatWeight())
}, 3000)


const newAPI = 'https://restcountries.com/v3.1/all?fields'

let result = fetch(newAPI).then( (response) => response.json()
).then(data => console.log(data))
.catch(err => console.log(err))

console.log(result)