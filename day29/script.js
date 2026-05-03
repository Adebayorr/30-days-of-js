const text = '30 days of javascript challenge 2026 Asabeneh Yetayeh'

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

console.log(generateHexColor())



const fonts = ['Arial', 'Helvetica', 'Trebuchet MS', 'Verdana', 
    'Lucida Sans', 'Courier New', 'Monospace', 'Franklin Gothic Medium', 
    'Geneva', 'Tahoma', 'Georgia', 'Segoe UI', 'Cambria', 'Lucida Sans'
]

let count = 0 

function generateTexts () {
    const font = fonts[count]
    count = (count + 1) % fonts.length
    console.log(font)
    document.body.textContent = ''
    document.body.style.backgroundColor = generateHexColor()
    for (const t in text) {

        const char = document.createElement('span')
        char.textContent = text[t]
        char.classList.add('text')
        char.classList.add('animate')
        char.style.color = generateHexColor()
        char.style.fontFamily = font
        document.body.appendChild(char)

    }
}

generateTexts()

setInterval(() => {
    generateTexts()
}, 4000)
