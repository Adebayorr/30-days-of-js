import isPrime from './utils/script.js'

console.log(isPrime(7) )
const feedbackElem = document.querySelector('.input-feedback')
const inputElem = document.querySelector('#length')
const buttonElem = document.querySelector('button')
const numbersWrapper = document.querySelector('.numbers')


buttonElem.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputElem.value === '') {
        feedbackElem.textContent = `Field can't be empty`
        feedbackElem.classList.remove('invalid')
    } else if (inputElem.value.match(/^[0-9]+$/)) {
        feedbackElem.classList.add('invalid')
        generateNumbers(Number(inputElem.value))
        console.log('Generating...')
    } else {
        feedbackElem.textContent = `error: input can only be numbers`
        feedbackElem.classList.remove('invalid')
    }
})


function generateNumbers (countTo) {
    let primeNums = []
    for (let i = 1; i <= countTo; i++) {
        const span = document.createElement('span')
        span.classList.add('number')
        span.style.textAlign = 'center' 
        span.style.padding = '12px'
        span.style.fontSize = '1.5rem'
        span.style.fontWeight = 'bold'
        span.style.color = '#fefefe'
        
        span.textContent = i
        numbersWrapper.appendChild(span)
       if (isPrime(i)) {
            primeNums.push(i)
            span.style.backgroundColor = '#EB695B'

        }  else if (i % 2 === 1) {
            span.style.backgroundColor = '#F7DC5C'
        }  else if (i % 2 === 0) {
            span.style.backgroundColor = '#5BBC7A'
        }
    }
    console.log(primeNums)
}
