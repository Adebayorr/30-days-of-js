const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// let j = 0
// do {
//     console.log(j)
//     j++
// } while (j <= 10)

// let k = 0 

// while (k <= 10) {
//     console.log(k)
//     k++
// }

//2

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let x = 10

// do {
//     console.log(x)
//     x--
// } while (x >= 0)

// {{  
//     let y = 10

//     while (y >= 0) {
//         console.log(y)
//         y--
//     }
// }}

// let n = 25
// let m = 0

// do {
//     console.log(m)
//     m++
// } while(m <= n )

// let hash = "#"

// for (let i = 0; i <= 15; i++) {
//     console.log(hash.repeat(i))
// }


//5
{{
// let counter = 0
// while (counter <= 10) {
//     console.log(`${counter} x ${counter} = ${counter * counter}`)
//     counter++
// }


//6
// let num = 0

// do {
//     console.log(`${num} ${num ** 2} ${num ** 3}`)
//     num++
// } while (num <= 10)

//

//7
let num = 0

// do {
//     if (num != 0 && num % 2 === 0) {
//         console.log(num)
//     }
//     num++
// } while (num <= 100)

//8

// while (num <= 100) {
//     if (num % 2 === 1) {
//         console.log(num)
//     }
//     num++
// }

//10

let sum = 0
let sumEven = 0
let sumOdd = 0

// do {
//     sum += num
//     console.log(sum)
//     num++
// } while (num <= 100)


//11
// do {
//     if (num != 0 && num % 2 === 0) {
//         sumEven += num
//         // console.log(sumEven)
//     } else if (num % 2 === 1) {
//         sumOdd += num
//         // console.log(sum)
//     }
//     num++
// } while (num <= 100)

// console.log(sumEven, sumOdd)

//12
let totals = []
do {
    if (num != 0 && num % 2 === 0) {
        sumEven += num

    } else if (num % 2 === 1) {
        sumOdd += num
    }
    if (num === 100) {
        totals.push(sumOdd)
        totals.push(sumEven)
    }
    num++
   
} while (num <= 100)

console.log(totals)

let randomNums = []

for (let i = 0; randomNums.length <= 4; i++) {
    let randomNum = Math.round(Math.random() * 256)
    randomNums.push(randomNum)
}

console.log(randomNums)

let uniqueRandomNums = []

for (let i = 0; uniqueRandomNums.length <= 4; i++) {
    let uniqueRandomNum = Math.round(Math.random() * 4)
    if (uniqueRandomNums.includes(uniqueRandomNum)) {
        continue
    } else {
        uniqueRandomNums.push(uniqueRandomNum)
    }
}
console.log(uniqueRandomNums)

let chars = "12345678abcdefghijklmnwxyz"

let randomID = ""

let init = 0
do {
    randomID += chars[Math.round(Math.random() * 26)]
    init++
} while (randomID.length <= 5)

console.log(randomID)
}}
 
