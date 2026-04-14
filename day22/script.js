import countries from "../others/countries.js"

// Level 1

// document.body.style.display = 'flex'
// document.body.style.justifyContent = 'center'
// document.body.style.alignItems = 'center'
// const container = document.querySelector('.container')
// container.style.width = '80vw'
// container.style.display = 'flex'
// container.style.justifyContent = 'space-between'
// container.style.flexWrap = 'wrap'
// container.style.gap = '6px'

/*
++Create a div container on HTML document and create 0 to 101 numbers dynamically and append to the container div.
++Even numbers background is green
++Odd numbers background is yellow
++Prime numbers background is purple
*/

function isPrime (num) {
    if (num < 2) return false
    if (num === 2) return true
    let is_prime = true

    for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                // console.log(j)
                is_prime = false
                break
            }
    }
    
    if (is_prime) return true
}



// for (let i = 0; i <= 101; i++) {
//     let div;
//     div = document.createElement('div')
//     let number = document.createElement('p')
//     number.innerText = i
//     number.style.textAlign = 'center'
//     number.style.fontWeight = 'bold'
//     number.style.fontFamily = 'Roboto'
//     div.appendChild(number)
//     container.appendChild(div)
//     if (i%2 === 0) {
//         div.style.backgroundColor = 'green'
//     }
    
//     if (i % 2 === 1) {
//         div.style.backgroundColor = 'yellow'
//     } 
    
//     if (isPrime(i)) {
//         div.style.backgroundColor = 'purple'
//     }
//     div.style.height = '80px'
//     div.style.fontSize = '2rem'
//     div.style.fontFamily = 'verdana, san-serif'
//     div.style.width = '16%'
//     div.style.color = '#ffffff'
//     div.style.display = 'flex'
//     div.style.justifyContent = 'center'
//     div.style.alignItems = 'center'
//     container.appendChild(div)
// }



// Level 2
const container = document.querySelector('.container')
const headingOne = `<h1 id="title">World Countries List</h1>`
const headingTwo = `<h2 id="sub-title">Total Numbers of countries: ${countries.length}</h2>`
const paragraphOne =`<p class="text">#30DaysOfJavaScript: JavaScript DOM-Day-2</p>`
const paragraphTwo = `<p class="text">Author: Adebayor</p>`

container.insertAdjacentHTML('beforebegin', headingOne)
container.insertAdjacentHTML('beforebegin', headingTwo)
container.insertAdjacentHTML('beforebegin', paragraphOne)
container.insertAdjacentHTML('beforebegin', paragraphTwo)




container
countries.forEach(country => {
    let div = document.createElement('div')
    div.textContent = country
    div.setAttribute('class', 'country')
    container.appendChild(div)
    console.log(div)
})