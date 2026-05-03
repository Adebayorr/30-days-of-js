const text = '30 days of javascript challenge 2026 Asabeneh Yetayeh'
const container = document.querySelector('.container')

function generateHexColor() {
    const hexChars = '0123456789abcdef'
    let count = 0
    let hexCode = '#'
    while (count < 6) {
        hexCode += hexChars[Math.floor(Math.random() * 16)]
        count++
    }

    return hexCode
}




const fonts = ['Arial', 'Helvetica', 'Trebuchet MS', 'Verdana', 
    'Lucida Sans', 'Courier New', 'Monospace', 'Franklin Gothic Medium', 
    'Geneva', 'Tahoma', 'Georgia', 'Segoe UI', 'Cambria', 'Lucida Sans'
]

let count = 0 

function generateTexts () {

    container.textContent = ''
    for (const t of text) {

        const char = document.createElement('span')
        char.textContent = t
        char.classList.add('text')
        char.style.color = generateHexColor()
        container.appendChild(char)

    }
    
}

generateTexts()
const spans = document.querySelectorAll('span')
console.log(spans)

function changeColorAndFont () {
    const font = fonts[count]
    count = (count + 1) % fonts.length
    container.style.backgroundColor = generateHexColor()
    container.style.color = generateHexColor()
    const spans = document.querySelectorAll('span')
    spans.forEach(span => {
        span.style.color = generateHexColor()
        span.style.fontFamily = font
    });
}
generateTexts()

setInterval(() => {
    changeColorAndFont()
}, 4000)
