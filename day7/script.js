// function fullName () {
//     let firstName = "AbdulFatai"
//     let lastName = "AbdulRaheem"
//     return (`${firstName} ${lastName}`)
// }
{{

function fullName (lastName, firstName) {
    return `${firstName} ${lastName}`

}
console.log(fullName("Raheem", "Fatai"))

function addNumbers (num1, num2) {
    let sum = num1 + num2
    return sum
}

console.log(addNumbers(2,3))

function areaOfRectangle (l, b) {
    let area = l * b
    return area
}

function perimeterOfRectangle (l, b) {
    let perimeter = 2 * (l + b)
    return perimeter
}


function volumeOfRectPrism (l, h, w) {
    let volume = l * w * h
    return volume
}

function AreaOfCircle (pi = 3.14, r) {
    let area = pi * r * r
    return area
}

let circumOfCircle = function (pi = 3.14, r) {
    let circumference = 2 * (r * r)
    return circumference
}

function density (mass, volume) {
    let d = mass / volume
    return p
}

let speed = (distance, time) => {
    let s = distance / time
    return s
}

function weight (mass, gravity) {
    let w = mass * gravity
    return w
}

function convertCelsiusToFahrenheit (celsius) { 
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit

}

console.log(convertCelsiusToFahrenheit(67))

function checkWeight (weight, height) {
    let bmi = weight / (height * height) * 10000

    let result 
    if (bmi < 18.5) {
        result = `Result: ${bmi.toFixed(1)} \nYou are Underweight`
    } else if (bmi === 18.5 || bmi <= 24.9){
        result = `Result: ${bmi.toFixed(1)} \n You have a normal weight`
    } else if (bmi === 25 || bmi <= 29.9) {
        result = `Result: ${bmi.toFixed(1)} \n You are overweight`
    } else {
        result = `Result: ${bmi.toFixed(1)} \n You are obese`
    }
    return result
}

console.log(checkWeight(70, 172))

const checkSeason =  function(month) {
    let summer = ["june", "july", "august"]
    let autumn = ["september", "october", "november"]
    let spring = ["march", "april", "may"]
    let winter = ["december", "january", "february"]

    if (summer.includes(month.toLowerCase())) {
        return `The season is summer`
    } else if (autumn.includes(month.toLowerCase())) {
        return `The season is autumn`
    } else if (spring.includes(month.toLowerCase())) {
        return `The season is spring`
    } else if (winter.includes(month.toLowerCase())) {
        return `The season is winter`
    } else {
        return  `Not a valid month`
    }
}

console.log(checkSeason("March"))

function findMax (num1, num2, num3) {

    return Math.max(num1, num2, num3)
}
console.log(findMax(2, 9, 4))


}}

