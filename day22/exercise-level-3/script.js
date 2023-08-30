let h1 = document.createElement('h1')
h1.innerHTML = `Asabeneh Yetayeh Challenges in <span id="year">2023</span>`
document.body.appendChild(h1)
let currentYear = document.getElementById('year')
// console.log(currentYear.innerHTML)

let link = document.createElement('a')
link.className = 'subtitle-link'
link.textContent = '30DaysOfJavaScriptChallenge'
link.setAttribute('href', 'https://github.com/Asabeneh/30-Days-Of-JavaScript/tree/master')
console.log(link.innerHTML)
document.body.appendChild(link)

const date = new Date()
let year = date.getFullYear()
let mon = date.getMonth()
let day = date.getDate()
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
console.log(min,':', sec)

const months = [
    'January', 'February', 'February', 'March', 'April', "May", 'June', 
    "July", "August", "September", "October", 'November', 'December'
]

function time () {
    months < 10 ? months = `0${months}` : months
    day < 10 ? day = `0${day}` : day
    hr < 10 ? hr = `0${hr}` : hr
    min < 10 ? min = `0${min}` : min
    sec < 10 ? sec = `0${sec}` : sec

    return `${months[mon]} ${day},  ${year} ${hr}:${min}:${sec}`
}

console.log(time())

const displayTime = document.createElement('p')
displayTime.innerText = time()
document.body.appendChild(displayTime)
console.log(displayTime.innerHTML)

// function updateTime () {
//     time()
//     // console.log(time())
//     displayTime.innerText = time()

//    console.log(displayTime.innerText)
// }
// setInterval(updateTime, 1000)

class Course {
    constructor (name, link, module, status) {
        this.name = name,
        this.link = link,
        this.module = module,
        this.status = status
    }
}

const pyModule = ['Python', 'Flask', 'Numpy', 'Pandas', 'Statistics', 'API', 'MongoDB']
const jsModule = ['JavaScript', 'ES6', 'Promise', 'Async and Await', 'DOM']
const hcModule = ['HTML', 'CSS', 'Flex', 'Grid', 'CSS Animation']
const jsxModule = ['JSX', 'Props', 'Components', 'React state', 'Hooks', 'conditional Rendering']
const nativeModule = ['React UI', 'Props', 'Flexbox', 'Styling', 'State']
const fullModule = ['HTML', 'CSS', 'JavaScript', 'Python', 'Node.js', 'MySQL', 'Express.js']
const mlModule = ['Machine Learning', 'Deep neural network', 'Artificial Intelligence', 'Algorithm', 'Linear Regression']
const daModule = ['Machine Learning', 'Statistics', 'Data Visualisation', 'Data Mining', 'Numpy', 'Qualitative Research']


const modules = [pyModule, jsModule, hcModule, jsxModule, nativeModule, fullModule, daModule, mlModule]



const python = new Course('Python', '30 Days Of Python', pyModule, 'Done' )
const javaScript = new Course('JavaScript', '30 Days Of JavaScript', jsModule, 'Ongoing') 
const htmlCss = new Course('HTML & CSS', '30 Days Of HTML & CSS', hcModule, 'incoming')
const React = new Course('React', '30 Days OfReact', jsxModule, 'incoming')
const Native = new Course('React Native', '30 Days Of React Native', nativeModule, 'incoming')
const DA = new Course('Data Analysis', '30 Days Of Data Analysis', hcModule, 'incoming')
const ML = new Course('Machine Learning', '30 Days OfMAchine Learning', mlModule, 'incoming')
const courses = [python, javaScript, htmlCss, React, Native, DA, ML]
const cc = document.createElement('div')
cc.setAttribute('class', 'container')
console.log(cc)
let courseDiv;

console.log(python, javaScript)

const courseClasses = ['py', 'js', 'hc', 'jsx', 'native', 'full', 'da', 'ml']
for (let i = 1; i <= 8; i++) {
    courseDiv = document.createElement('div')
    courseDiv.setAttribute('class', 'course')
    courseDiv.classList.add(courseClasses[i - 1])

    

}