document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.width = '90vw'
const container = document.querySelector('.container')
container.style.width = '70vw'
// container.style.height = '90vh' 
console.log(container.style.width)
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.gap = '3px'

/*

++Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
++Even numbers background is green
++Odd numbers background is yellow
++Prime numbers background is red

*/
let div;
for (let i = 0; i < 100; i++) {
    div = document.createElement('div')
    let number = document.createElement('p')
    number.innerText = i + 1
    number.style.textAlign = 'center'
    number.style.fontWeight = 'bold'
    number.style.fontFamily = 'Roboto'
    div.appendChild(number)
    container.appendChild(div)
    if (i%2 === 0) {
        div.style.backgroundColor = 'green'
    } else {
        div.style.backgroundColor = 'yellow'
    }
    div.style.height = '50px'
    div.style.width = '19%'
    div.style.color = '#ffffff'
    container.appendChild(div)
}

// function isPrime (number) {
//     let products = []
//     let result;
//     for (let i = 1; i <= number; i++) {
//         if (number % i === 0) {
//             if (number <= 1) {
//                 return false
//             } else {
//                 products.push(i)
//             }   
            
//         }
//     } 
    
//     if (products.length === 2) {
//         result = products
//     } else {
//         result =  false
//     }
    
//     return products.length
// }

// console.log(isPrime(95))
