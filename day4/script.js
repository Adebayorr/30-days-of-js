// let input =  prompt("Enter your age:")
// console.log(input)
// let age = +input
// age >= 18 ? console.log("You are old enough to drive"): 
// console.log(`You are left with ${18 - age} years to drive`)

// let myAge = 23
// // let input = 27// +prompt("Enter your age:")
// // console.log(input)
// let yourAge = parseInt(input)
// if (myAge > yourAge) {
//     console.log(`I am ${myAge - yourAge} older than you`)
// } else {
//     console.log(`You are ${yourAge - myAge} older than me`)
// }

// let a = 4
// let b = 3
// a > b ? console.log(`${a} is greater than ${b}`): console.log(`${b} is greater than ${a}`)

// let number = 2 //+prompt("Enter a number") 

// number % 2 === 0 ? console.log(`${number} is an even number`):
// console.log(`${number} is an odd number`)

// let score = 77
// let grade 
// switch (true)  {
//     case (score >= 50 && score < 60) :
//         grade = "D"
//         break
//     case (score >= 60 && score < 70) :
//         grade = "C"
//         break
//     case (score >= 70 && score < 80) : 
//         grade = "B"
//         break
//     case (score >= 80) :
//         grade = "A"
//         break
//     default :
//         grade = "F"
// }

// console.log(grade)


// let input = "Febuary".toLowerCase()

// if (input == "october" || input == "september" || input == "november") {
//     console.log("The season is Autumn")
// } else if(input == "december" || input == "january" || input == "february") {
//     console.log("The season is Winter")
// } else if (input == "march" || input == "april" || input == "may") {
//     console.log("The season is Spring")
// } else if (input == "june" || input == "july" || input == "august") {
//     console.log("The season is Summer")
// } else {
//     console.log(`${input} is not a valid month`)
// }

// let input = "Friday".toLowerCase()

// if (input == "monday" || input == "tuesday" || input == "wednesday" || input == "thursday" || input == "friday") {
//     console.log(`${input} is a weekday`)
// } else if(input == "saturday" || input == "sunday") {
//     console.log(`${input} is a weekend`)
// } else {
//     console.log(`${input} is not a valid week`)
// }



// let input = "June".toLowerCase()

// if (input == "january" || input == "march" || input == "may" || input == "july" || input == "august" || input == "october" || input == "december") {
//     console.log(`${input} has 31 days`)
// } else if(input == "september" || input == "april" || input == "june" || input == "November") {
//     console.log(`${input} has 30 days`)
// } else if (input == "february") {
//     console.log(`${input} has 28 days`)
// } else {
//     console.log(`${input} is not a valid month`)
// }

let input = "June".toLowerCase()

if (input == "january" || input == "march" || input == "may" || input == "july" || input == "august" || input == "october" || input == "december") {
    console.log(`${input} has 31 days`)
} else if(input == "september" || input == "april" || input == "june" || input == "November") {
    console.log(`${input} has 30 days`)
} else if (input == "february") {
    console.log(`${input} has 28 or 29 days`)
} else {
    console.log(`${input} is not a valid month`)
}