// HTML Elements

const wrapper = document.querySelector('.wrapper')
const headingOne = document.querySelector('h1')
const headingTwo = document.querySelector('h2')
const lists = document.querySelector('ul')
const listElements = document.querySelectorAll('li')
const span = document.querySelector('span')

let newContent = `<time><time>`
headingTwo.insertAdjacentHTML('afterend', newContent)

const dateElement = document.querySelector('time')
console.log(dateElement)


// Functions
const generateHexCode = () => {
    const chars = '0123456789abcdef'
    let hex = '#'
    while (hex.length < 7) {
        hex += chars[Math.floor(Math.random() * chars.length )]
    }
    return hex
}

generateHexCode()


function GetTimeDate () {
    const date = new Date()
    let year = date.getFullYear()
    let mon = date.getMonth()
    let day = date.getDate()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    const months = [
        'January', 'February', 'February', 'March', 'April', "May", 'June', 
        "July", "August", "September", "October", 'November', 'December'
    ]

    mon = months[mon]
    day < 10 ? day = `0${day}` : day
    hr < 10 ? hr = `0${hr}` : hr
    min < 10 ? min = `0${min}` : min
    sec < 10 ? sec = `0${sec}` : sec

    return `${mon} ${day}, ${year} ${hr}:${min}:${sec}`
}

const updateElements = ()  => {
    span.style.color = `${generateHexCode()}`
    dateElement.textContent = GetTimeDate()
    dateElement.style.background = `${generateHexCode()}`

}
updateElements()

document.body.style.fontFamily = 'Arial, verdana, san-serif'

// wrapper style
wrapper.style.textAlign = 'center'
wrapper.style.margin = '40px auto'
wrapper.style.display = 'flex'
wrapper.style.flexDirection = 'column'
wrapper.style.gap = '0px'
wrapper.style.maxWidth = '800px'

// span style
span.style.fontSize = '60px'


// heading Two Style
headingTwo.style.fontWeight = 'normal'
headingTwo.style.textDecoration = 'underline'

// dateElement Style
dateElement.style.padding = '8px'
dateElement.style.background = `${generateHexCode()}`
dateElement.style.width = '200px'
dateElement.style.margin = '0 auto'


setInterval(updateElements, 1000)
console.log(GetTimeDate())


// List Parent style
lists.style.listStyle = 'none'

// // List Items Style
// listElements.forEach((element) => {
//     element.style.padding = '20px'
//     element.style.backgroundColor = 'red'
//     element.style.marginBottom = '2px'
//     element.style.fontSize = '1.2rem'
//     element.style.textAlign = 'left'
// })

// Style for completed and Ongoing style
listElements[0].classList.add('completed')
listElements[1].classList.add('on-going')

for (let i = 0; i < listElements.length; i++) {
    listElements[i].style.padding = '20px'
    listElements[i].style.backgroundColor = 'red'
    listElements[i].style.marginBottom = '2px'
    listElements[i].style.fontSize = '1.2rem'
    listElements[i].style.textAlign = 'left'

    if (listElements[i].classList.contains('completed')) {
        listElements[i].style.backgroundColor = 'green'
    }

    if (listElements[i].classList.contains('on-going')) {
        listElements[i].style.backgroundColor = 'yellow'
    }
}