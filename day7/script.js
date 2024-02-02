// function fullName () {
//     let firstName = "AbdulFatai"
//     let lastName = "AbdulRaheem"
//     return (`${firstName} ${lastName}`)
// }
{{

// function fullName (lastName, firstName) {
//     return `${firstName} ${lastName}`

// }
// console.log(fullName("Raheem", "Fatai"))

// function addNumbers (num1, num2) {
//     let sum = num1 + num2
//     return sum
// }

// console.log(addNumbers(2,3))

// function areaOfRectangle (l, b) {
//     let area = l * b
//     return area
// }

// function perimeterOfRectangle (l, b) {
//     let perimeter = 2 * (l + b)
//     return perimeter
// }


// function volumeOfRectPrism (l, h, w) {
//     let volume = l * w * h
//     return volume
// }

// function AreaOfCircle (pi = 3.14, r) {
//     let area = pi * r * r
//     return area
// }

// let circumOfCircle = function (pi = 3.14, r) {
//     let circumference = 2 * (r * r)
//     return circumference
// }

// function density (mass, volume) {
//     let d = mass / volume
//     return p
// }

// let speed = (distance, time) => {
//     let s = distance / time
//     return s
// }

// function weight (mass, gravity) {
//     let w = mass * gravity
//     return w
// }

// function convertCelsiusToFahrenheit (celsius) { 
//     let fahrenheit = (celsius * 9 / 5) + 32
//     return fahrenheit

// }

// console.log(convertCelsiusToFahrenheit(67))

// function checkWeight (weight, height) {
//     let bmi = weight / (height * height) * 10000

//     let result 
//     if (bmi < 18.5) {
//         result = `Result: ${bmi.toFixed(1)} \nYou are Underweight`
//     } else if (bmi === 18.5 || bmi <= 24.9){
//         result = `Result: ${bmi.toFixed(1)} \n You have a normal weight`
//     } else if (bmi === 25 || bmi <= 29.9) {
//         result = `Result: ${bmi.toFixed(1)} \n You are overweight`
//     } else {
//         result = `Result: ${bmi.toFixed(1)} \n You are obese`
//     }
//     return result
// }

// console.log(checkWeight(70, 172))

// const checkSeason =  function(month) {
//     let summer = ["june", "july", "august"]
//     let autumn = ["september", "october", "november"]
//     let spring = ["march", "april", "may"]
//     let winter = ["december", "january", "february"]

//     if (summer.includes(month.toLowerCase())) {
//         return `The season is summer`
//     } else if (autumn.includes(month.toLowerCase())) {
//         return `The season is autumn`
//     } else if (spring.includes(month.toLowerCase())) {
//         return `The season is spring`
//     } else if (winter.includes(month.toLowerCase())) {
//         return `The season is winter`
//     } else {
//         return  `Not a valid month`
//     }
// }

// console.log(checkSeason("March"))

// function findMax (num1, num2, num3) {

//     return Math.max(num1, num2, num3)
// }
// console.log(findMax(2, 9, 4))


//Level 2 

// function solveLinEquation (a, b, c) {

// }


const printArray = function () {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
printArray([1, 2, 3, 4, 5])

function showDateTime () {
    let now = new Date()
    let year = now.getFullYear() 
    let month = now.getMonth()
    let date = now.getDate()
    let hour = now.getHours()
    let minutes = now.getMinutes()

    month = month < 10 ? `0${month}` : month
    date = date < 10 ? `0${date}` : date
    hour = hour < 10 ? `0${hour}` : hour
    minutes = minutes < 10 ? `0${minutes}` : minutes
    
    let dateAndTime = `${date}/${month}/${year} ${hour}:${minutes}`
    return dateAndTime
}

console.log(showDateTime())

let swapValues = (x, y) => {
    let holdX = x
    let holdY = y
    x = holdY
    y = holdX
    return  [x, y]

}
console.log(swapValues(3, 5))

const reversedArray = function (arr) {
    let reverse = []
    let i = 0
    do {
        reverse.push(arr[(arr.length - 1) - i])
        reverse
        console.log((arr.length - 1) - i)
        i++
        console.log(i)
    } while (i < arr.length)

    return reverse
}
console.log(reversedArray([1, 2, 3, 4, 5]))

const capitalizeArray = (arr) => {
    let toCapital = []
    let i = 0
    while(i < arr.length) {
        toCapital.push(arr[i].toUpperCase())
        i++
    }
    return toCapital

}

console.log(capitalizeArray(["ola", "Ayanfe", "Collins"]))

let items = ["Books", "Pencils", "Eraser"]
function addItem (item) {
    
    items.push(item)
    items
    return items

}

addItem("Ruler")
addItem("Pen")

function removeItem (index) {
    items.splice(index, 1)
    items
} 
removeItem(1)

function sumOfNumbers (num) {
    let i = 0
    let sum = 0
    while (i <= num) {
        sum += i
        i++
    }
    return sum
}

console.log(sumOfNumbers(100))

function sumOfOdds (num) {
    let sum = 0
    let i = 0
    while (i <= num) {
        if (i % 2 === 1) {
            sum += i
            
        }
        i++
    }
    return sum
}

console.log(sumOfOdds(100))

function sumOfEvens (num) {
    let sum = 0
    let i = 0

    while (i <= num) {
        if (i % 2 === 0) {
            sum += i
        }
        i++
    }
    return sum
}
console.log(sumOfEvens(100))

function evensAndOdds (num) {
    let evenCounts = 0
    let oddCounts = 0
    let i = 0
    while (i <= num) {
        if (i % 2 === 0) {
            evenCounts++
        } else {
            oddCounts++
        }
        i++
    }
    return `evensAndOdds(${num}) \n The numbers of odds are ${oddCounts} \n
        The number of evens are ${evenCounts}`
}

console.log(evensAndOdds(100))

function addAll () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(addAll(1, 2, 3, 4))

const  randomUserIp = () => {
    return `${Math.round(Math.random() * 255)}.
    ${Math.round(Math.random() * 255)}.
    ${Math.round(Math.random() * 255)}.
    ${Math.round(Math.random() * 255)}.
    ${Math.round(Math.random() * 254)}`
}

console.log(randomUserIp())

// const randomMacAddress = (function () {
//     let hexChars = "0123456789abcdef"
//     let macAddress = []
//     let count = 0
//     while (macAddress.length < 17) {
//        if (macAddress.length % 2 === 0)
//     }
   
//     return macAddress
// })()
// console.log(randomMacAddress)

function randomMacAddress() {
    let mac = [];
    for (let i = 0; i < 6; i++) {
        mac.push(Math.floor(Math.random() * 256).toString(16).padStart(2, '0'));
    }
    mac[0] = (parseInt(mac[0], 16) & 0xfc | 0x02).toString(16).padStart(2, '0');
    return mac.join(':');
}

// Example usage
console.log(randomMacAddress());
}}


