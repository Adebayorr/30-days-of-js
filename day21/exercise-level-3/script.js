const colors = [
    'cyan', 'pink', 'purple', 'red', 'orange', 'aquamarine',
    'green', 'blue', 'black', 'white', 'yellow', 'brown'
]

const date = new Date()
let year = date.getFullYear()
let mon = date.getMonth()
let day = date.getDate()
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
console.log(min,':', sec)

const months = [
    'January', 'February',
]

function time () {
    month < 10 ? month = `0${month}` : month
    day < 10 ? day = `0${day}` : day
    hr < 10 ? hr = `0${hr}` : hr
    min < 10 ? min = `0${min}` : min
    sec < 10 ? sec = `0${sec}` : sec

    return `${day}:${month}:${year} ${hr}:${min}:${sec}`
}

console.log(time())