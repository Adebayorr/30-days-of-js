document.title = 'Day 24'

const button = document.querySelector('button')
const massInput = document.querySelector('.mass-input')
const planetsOption = document.querySelector('select')
const outputWrapperDiv = document.querySelector('.output-wrapper')
const weightStatement = document.querySelector('.weight-statement')
const imageWrapper = document.querySelector('.img-wrapper')
const planetImage = document.querySelector('img')
const planetTextSpan = document.querySelector('#planet')
const result = document.querySelector('.result')

const planetWeight = {
    mercury: 1.5,
    venus: 4.5,
    earth: 9.8,
    mars: 12,
    jupiter: 3,
    saturn: 6.9,
    uranus: 9,
    neptune: 4.8,
    pluto: 0.8
}

let planetName = ''
let planetNames = []
console.log(result)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
})

button.addEventListener('click', () => {
    if (massInput.value === '') {
        result.textContent = 'Mass is required'
        weightStatement.classList.add('hidden')
        document.querySelector('.weight-output').classList.remove('hidden')
        return
    }
    
    document.querySelectorAll('option').forEach( opt => planetNames.push(opt.textContent))
    planetName = ''
    planetName = planetNames.filter(opt => (opt === planetsOption.value ))
    planetImage.setAttribute('src', `./day24/images/${planetName}.png`)
    planetImage.setAttribute('alt', `planet ${planetName} image`)
    weightStatement.classList.remove('hidden')
    document.querySelector('.weight-output').classList.remove('hidden')
    planetTextSpan.textContent = planetName
    result.textContent = `${(massInput.value * Number(planetWeight[planetName])).toFixed(2)} N`
    planetNames.splice(0)
})


planetsOption.addEventListener('change', (e) => {
    planetName = ''
    document.querySelectorAll('option').forEach( opt => planetNames.push(opt.textContent))
    planetName = planetNames.filter(opt => (opt === planetsOption.value ))
    planetImage.setAttribute('src', `./day24/images/${planetName}.png`)
    planetNames.splice(0)
})

