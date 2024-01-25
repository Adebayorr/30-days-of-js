// let lastName = "Abdul-Raheem"
// let firstName = "Abdul-Fatai"
// let country = "Nigeria"
// let city = "Oyo"
// let isMarried = false
// let year = 2024

// console.log(typeof lastName)
// console.log(typeof firstName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof isMarried)
// console.log(typeof year)

// console.log("10" == 10)
// console.log(parseInt(9.8) == 10)

// console.log(1 == true)
// console.log(0 == false)
// console.log("boy".length == 3 )

// console.log(0n == true)
// console.log(5 > 12)
// console.log([] == [])

// console.log(4 > 3) //true
// console.log(4 >= 3) //true
// console.log(4 < 3) //false
// console.log(4 <= 3) //false
// console.log(4 == 4) //true
// console.log(4 === 4) //true
// console.log(4 != 4) // false
// console.log(4 !== 4) //false
// console.log(4 != '4') //false
// console.log(4 == '4') //true
// console.log(4 === '4')// false
// console.log("python".length != "jargon".length)


// console.log(4 > 3 && 10 < 12) //true
// console.log(4 > 3 && 10 > 12) //false
// console.log(4 > 3 || 10 < 12) //true
// console.log(4 > 3 || 10 > 12) //true
// console.log(!(4 > 3)) //false
// console.log(!(4 < 3)) //true
// console.log(!(false)) // true
// console.log(!(4 > 3 && 10 < 12)) //false
// console.log(!(4 > 3 && 10 > 12)) //true
// console.log(!(4 === '4')) //true
// console.log(!("dragon".includes("on") && "python".includes("on")))// false


// let now = new Date()
// let year = now.getFullYear()
// let month = now.getMonth()
// let date = now.getDate()
// let day = now.getDay()
// let hour = now.getHours()
// let minutes = now.getMinutes()
// let timeInMilli = Date.now()

// console.log(timeInMilli)

// Level 2

// let base = prompt("Enter the base of a triangle")
// let height = prompt("Enter the height of a triangle")
// alert(`Area of a Triangle = ${0.5 * +base * +height}`)

// let a = prompt("Enter the side a of a triangle")
// let b = prompt("Enter the side b of a triangle")
// let c = prompt("Enter the side c of a triangle")
// alert(`Perimeter of a Triangle = ${+a + +b + +c}`)

// let length = prompt("Enter the length of a rectangle")
// let width = prompt("Enter the width of a rectangle")
// alert(`Perimeter of a Triangle = ${+length * +width}`)

// let length = prompt("Enter the length of a rectangle")
// let width = prompt("Enter the width of a rectangle")
// alert(`Perimeter of a Triangle = ${2 * (+length + +width)}`)

// let radius = prompt("Enter the radius of a circle")
// // let width = prompt("Enter the width of a circle")
// alert(`Area of a circle = ${2 * (Math.pi *(2* +radius) )}`)

// let radius = prompt("Enter the radius of a circle")
// alert(`Circumference of a circle = ${2 * (2 * Math.pi * +radius )}`)

// let hrs = prompt("Enter hours")
// let rate = prompt("Enter rate per hour")
// console.log(parseInt(hrs) * +rate)

let myName = "Abdul-Fatai"
myName.length > 7 ? console.log("Name has more than seven letters"):
console.log("Name is short")

let firstName = "Abdul-Fatai"
let lastName = "Abdul-Raheem"

firstName > lastName? 
console.log(`Your first name, ${firstName} is longer than your last name, ${lastName}`):
console.log(`Your first name, ${firstName} is not longer than your last name, ${lastName}`)

let myAge  = 23
let yourAge = 27

myAge > yourAge ? console.log(`I am ${myAge - yourAge} years older than you`):
console.log(`You are ${yourAge - myAge} older than me`)

// let age = prompt("Enter your Age")
// console.log(age)
// +age >= 18 ? console.log(`Your are ${age}. You're old enough to drive` ):
// console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years`)

// let age = prompt("Enter the number of years you've lived?")
// alert(`You've lived ${+age * 31536000} seconds`)

// let now = new Date()
// let year = now.getFullYear()
// let month = now.getMonth()
// let date = now.getDate()
// let day = now.getDay()
// let hour = now.getHours()
// let minutes = now.getMinutes()

// console.log(`${year}-${month}-${date} ${hour}:${minutes}`)
// console.log(`${date}-${month}-${year} ${hour}:${minutes}`)
// console.log(`${date}/${month}/${date} ${hour}:${minutes}`)

// let formattedHour = hour < 10 ? `0${hour}` : hour
// let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

// let time = `${year}-${month}-${date} ${hour}:${minutes}`
// console.log(time)
