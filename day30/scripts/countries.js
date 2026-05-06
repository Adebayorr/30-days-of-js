import countries_data from "../db/countries_data.js";

const inputElement = document.querySelector('input')
const inputContainer = document.querySelector('form')
const filterButtons = document.querySelectorAll('.input-btn')

inputContainer.addEventListener('submit', (e) => e.preventDefault())

let filteredByName = true
let filteredByPop = true
let filteredByCapital = true

// filterButtons.forEach( button => {
//     button.addEventListener('click', (e) => {
//         e.preventDefault()
//         console.log('clicked')
//         if (button.textContent.toLowerCase() === 'name') {
//             filteredByName = true
//             filteredByCapital = false

//         } 
        
//         if (button.textContent.toLowerCase() === 'capital') {
//             filteredByName = false
//             filteredByCapital = true

//         }

//         console.log(
//             `Pop: ${filteredByPop}, Name: ${filteredByName} Capital: ${filteredByCapital}`
//         )

// })
    
// })
// console.log(filterButtons)

// inputElement.addEventListener('keyup', (e) => {
//     if (filteredByName && filteredByPop ) {
//         let inputVal = new RegExp(inputElement.value, 'gi')
//         console.log(inputVal)
//         const filteredCountries = countries_data.filter(country => country.name.match(inputVal)).sort()
//         console.log(filteredCountries)
//         return filteredCountries
//     } 
//     else if (filteredByCapital) {
//         let inputVal = new RegExp(inputElement.value, 'gi')
//         const filteredCountries = countries_data.filter( country => country.capital)
//         .filter(country => country.capital.match(inputVal))
//         console.log(filteredCountries)
//         return filteredCountries
//     } else if (filteredByPop) {
        
//     }
    

//     // console.log(filteredCountries)
// })


function handleFiltering (
    input = inputElement.value, 
    filterCriteria = 'name'
) {
    const filteredCountries = countries_data.filter( country => country[filterCriteria])
    .filter( country => country[filterCriteria].toLowerCase().match(inputElement.value.toLowerCase()))
    return filteredCountries
}

// inputElement.addEventListener('keyup', (e) => {
//     handleFiltering()
// })



filterButtons.forEach( button => {
    if (button.textContent.toLowerCase() === 'name' && filteredByName) {
        console.log('clicked');
        
            button.addEventListener('click', () => {
            const newCountries = handleFiltering(inputElement.value, 'name')
            console.log(newCountries, filteredByName)
            filteredByName = !filteredByName
        })
    } else if (button.textContent.toLowerCase() === 'name' && !filteredByName ) {
            const newCountries = handleFiltering(inputElement.value, 'name').sort( (a, b) => b.name < a.name)
            console.log(newCountries, filteredByName)
            filteredByName = !filteredByName
    }
        
        
    // if (button.textContent.toLowerCase() === 'capital') {
    //         button.addEventListener('click', () => {
    //         const newCountries = handleFiltering(inputElement.value, 'capital') 
    //         console.log(newCountries)
    //         })
    // } else if (button.textContent.toLowerCase() === 'capital') {
    //         button.addEventListener('click', () => {
    //         const newCountries = handleFiltering(inputElement.value, 'capital') .reverse()
    //         console.log(newCountries)
    // })

        
    // } else if (button.textContent.toLowerCase() === 'population') {
    //     console.log(button.textContent.toLowerCase());
    //     button.addEventListener('click', () => {
    //         const output = handleFiltering()
    //     } )
        
    // }

})