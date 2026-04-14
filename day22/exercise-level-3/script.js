import asabenehChallenges2026 from "../../others/data.js"

const months = [
    'January', 'February', 'February', 'March', 'April', "May", 'June', 
    "July", "August", "September", "October", 'November', 'December'
]

// create New Elements
const headingOne = document.createElement('h1')
const subtitle = document.createElement('h2')
let displayTime = document.createElement('div')
const challengesContainer = document.createElement('div')
const firstNameElem = document.createElement('span')
const lasstNameElem = document.createElement('span')
const authorDesc = document.createElement('p')
const skillTitleDiv = document.createElement('div')
const authorTitlesDiv = document.createElement('div')
const authorSkillsDiv = document.createElement('div')
const authorQualDiv = document.createElement('div')


const authorDiv = document.createElement('div')
let headingSpan = document.createElement('span')

function time () {
    const date = new Date()
    let year = date.getFullYear()
    let mon = date.getMonth()
    let day = date.getDate()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    months < 10 ? months = `0${months}` : months
    day < 10 ? day = `0${day}` : day
    hr < 10 ? hr = `0${hr}` : hr
    min < 10 ? min = `0${min}` : min
    sec < 10 ? sec = `0${sec}` : sec

    return `${months[mon]} ${day},  ${year} ${hr}:${min}:${sec}`
}

const setTime = function () {
    displayTime.textContent = time()
}


function hexColor () {
    const hexChars = '0123456789abcdef'
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += hexChars[Math.floor(Math.random() * 16)]
    }
    return hexCode
}

console.log(hexColor())

const updateTimeAndColor = function () {
    setTime()
    displayTime.style.backgroundColor = hexColor()
    headingSpan.style.color = displayTime.style.backgroundColor //hexColor()
}
updateTimeAndColor()


headingOne.setAttribute('class', 'title')
subtitle.setAttribute('class', 'sub-title')
challengesContainer.setAttribute('class', 'container')
displayTime.setAttribute('class', 'time')


// Body Style

document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
// document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.gap = '16px'
document.body.style.fontFamily = 'verdana, sans-serif'



// H1 Styling
headingOne.textContent = `
    ${asabenehChallenges2026.challengeTitle} in

`

headingSpan.textContent = asabenehChallenges2026.challengeYear
headingOne.appendChild(headingSpan)
headingSpan.style.fontSize = '3rem'

console.log(headingSpan)
// H2 Styling
subtitle.textContent = `
    ${asabenehChallenges2026.challengeSubtitle}
`

subtitle.style.textDecoration = 'underline'
subtitle.style.fontWeight = 'normal'
console.log(`${asabenehChallenges2026.challengeTitle} in ${asabenehChallenges2026.challengeYear}`
);


// time element style

displayTime.innerHTML = time()
displayTime.style.padding = '8px 12px'
displayTime.style.border = '2px solid #0e0e0e23'


// Challenge Container  style
challengesContainer.style.width = '80%'
challengesContainer.style.margin = '0 auto'
challengesContainer.style.border = '2px solid #0e0e0e23'


// Generating Container Div Children 
let challengesArr = asabenehChallenges2026.challenges
for (let i = 0; i < challengesArr.length; i++) {
    let detailWrapper = document.createElement('div')
    let detailElement = document.createElement('details')
    let detailTitle = document.createElement('h4')
    let status = document.createElement('p')
    let summary = document.createElement('summary')

    if (i === 0) {
        status.textContent = 'Done'
        detailWrapper.style.backgroundColor = 'green'
    }

    if (i === 1) {
        status.textContent = 'Ongoing'
        detailWrapper.style.backgroundColor = 'yellow'

    }
    
    if (i > 1) {
        status.textContent = 'Coming'
        detailWrapper.style.backgroundColor = 'red'

    }

    summary.textContent = challengesArr[i].topics[0]
    console.log(challengesArr)
    detailTitle.textContent = challengesArr[i].name
    detailTitle.style.fontWeight = 'normal'
    detailTitle.style.color = 'blue'
    detailTitle.style.textDecoration = 'underline'
    detailElement.appendChild(summary)
    detailWrapper.appendChild(detailTitle)
    detailWrapper.appendChild(detailElement)
    detailWrapper.appendChild(status)

    // detailElement.
    challengesArr[i].topics.forEach(topic => {
        let list = document.createElement('li')
        list.textContent = topic
        list.style.listStyle = 'none'
        list.style.margin = '8px 0'
        detailElement.appendChild(list)
        console.log(list)
    })

    challengesContainer.appendChild(detailWrapper)
    console.log(i)

    // Detail Title Style
    detailTitle.style.width = '35%'

    // detailElement Style
    // detailElement.style.width = '10%'

    // Summary Element Style
    // summary.style.width = '25%'
    summary.style.textAlign = 'right'
    // Div Wrapper Styles
    detailWrapper.style.display = 'flex'
    detailWrapper.style.justifyContent = 'space-between'
    detailWrapper.style.alignItems = 'center'
    detailWrapper.style.padding = '12px 20px'
    detailWrapper.style.gap = '5%'
    detailWrapper.style.fontSize = '1.2rem'

    
    
}

document.body.appendChild(headingOne)
document.body.appendChild(subtitle)
document.body.appendChild(displayTime)
document.body.appendChild(challengesContainer)

setInterval(updateTimeAndColor, 1000)


// class Course {
//     constructor (name, link, module, status) {
//         this.name = name,
//         this.link = link,
//         this.module = module,
//         this.status = status
//     }
// }

// const pyModule = ['Python', 'Flask', 'Numpy', 'Pandas', 'Statistics', 'API', 'MongoDB']
// const jsModule = ['JavaScript', 'ES6', 'Promise', 'Async and Await', 'DOM']
// const hcModule = ['HTML', 'CSS', 'Flex', 'Grid', 'CSS Animation']
// const jsxModule = ['JSX', 'Props', 'Components', 'React state', 'Hooks', 'conditional Rendering']
// const nativeModule = ['React UI', 'Props', 'Flexbox', 'Styling', 'State']
// const fullModule = ['HTML', 'CSS', 'JavaScript', 'Python', 'Node.js', 'MySQL', 'Express.js']
// const mlModule = ['Machine Learning', 'Deep neural network', 'Artificial Intelligence', 'Algorithm', 'Linear Regression']
// const daModule = ['Machine Learning', 'Statistics', 'Data Visualisation', 'Data Mining', 'Numpy', 'Qualitative Research']


// const modules = [pyModule, jsModule, hcModule, jsxModule, nativeModule, fullModule, daModule, mlModule]



// const python = new Course('Python', '30 Days Of Python', pyModule, 'Done' )
// const javaScript = new Course('JavaScript', '30 Days Of JavaScript', jsModule, 'Ongoing') 
// const htmlCss = new Course('HTML & CSS', '30 Days Of HTML & CSS', hcModule, 'incoming')
// const React = new Course('React', '30 Days OfReact', jsxModule, 'incoming')
// const Native = new Course('React Native', '30 Days Of React Native', nativeModule, 'incoming')
// const DA = new Course('Data Analysis', '30 Days Of Data Analysis', hcModule, 'incoming')
// const ML = new Course('Machine Learning', '30 Days OfMAchine Learning', mlModule, 'incoming')
// const courses = [python, javaScript, htmlCss, React, Native, DA, ML] //arrays of courses's object
// const cc = document.createElement('div')
// document.body.appendChild(cc)
// cc.setAttribute('class', 'container')
// console.log(courses)
// let courseDiv;

// console.log(python, javaScript)

// const courseClasses = ['py', 'js', 'hc', 'jsx', 'native', 'full', 'da', 'ml']
// for (let i = 0; i < 7; i++) {
//     courseDiv = document.createElement('div')
//     courseDiv.setAttribute('class', 'course')
//     courseDiv.classList.add(courseClasses[i - 1])
//     for (let j = 0; j <= 2; j++) {
//         let innerCD;
//         if (j === 1) {
//             innerCD = document.createElement('details')
//             let summary = document.createElement('summary')
//             innerCD.appendChild(summary)
//             let moduleList = document.createElement('li')
//             for (let k = 0; k < courses[i].module.length; k++) {
//                 innerCD.appendChild(moduleList)
//                 console.log(innerCD)
//                 innerCD.textContent = courses[i].module[k]

//             }
//         }
//         innerCD = document.createElement('div')
//         courseDiv.appendChild(innerCD)
//     }
//     cc.appendChild(courseDiv)
    

// }

// console.log(cc.innerHTML)