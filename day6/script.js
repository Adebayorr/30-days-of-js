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

// 1a
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// 1b
let i = 0

while (i <= 10) {
    console.log(i)
    i++
}

// 1c
let j = 0

do {
    console.log(j)
    j++
} while (j <= 10)

    
// 2a

for (let i = 10; i >= 0; i--) {
    console.log(i)
}


//  2b
let k = 10
while (k >= 0) {
    console.log(k)
    k--
}

// 2c
let l =  10

do {
    console.log(l)
    l--
} while (l >= 0)


// 3a

let n = 5

for (let i = 0; i <= n; i++) {
    console.log(i)
}

// 4

let hash = "#"

for (let i = 1; i <= 7; i++) {
    console.log(hash.repeat(i))
}

// 5
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

// 6
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${Math.pow(i, 3)}`)
}

// 7 

for (let i = 0; i <= 100; i++) {
    i%2 == 0 ? console.log(i) : i;
}

// 8 
for (let i =  0; i <= 100; i++) {
    i % 2 == 1 ? console.log(i) : i;
}

// 9

for (let i = 0; i <= 100; i++) {

    
    if (i < 2) continue

    let isPrime = true

    for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
                break
            }
    }
    isPrime == true ? console.log(i) : i;
}

// 10

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}

console.log(sum)

// 11

let sumOfOdds = 0
let sumOfEven = 0
for (let i = 1;  i <= 100; i += 1) {

    i % 2 === 0 ? sumOfEven += i : sumOfOdds += i
}

console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from 0 to 100 is ${sumOfOdds}.`)

// 12 
let sumOfEvenAndOdds = [0, 0]

for (let i = 1; i <= 100; i++) {
    i % 2 === 0 ? sumOfEvenAndOdds[0] += i: sumOfEvenAndOdds[1] += i
}

console.log(sumOfEvenAndOdds)

//  13

let p = 0 
let arr = []
do {
    arr.push(Math.round(Math.random() * 10))
    p++
} while (p < 5)

console.log(arr)

// 14

let randomArr = []
while (randomArr.length < 5)  {

    randomNum = Math.round(Math.random() * 10)
    randomArr.includes(randomNum) ? randomArr : randomArr.push(randomNum)
}

console.log(randomArr)

//  15 

let chars = `abcdefghijklmnopqrstuvwxyz`
let r = 0
let randomId = ''
while (r < 5) {
    randomId += chars[Math.round(Math.random() * 25)]
    r++
}
console.log(randomId)


// Section 2
// 1
let randomChars = ''
let charLength = Math.floor(Math.random() * 24)
let randomCharId = ""
for (let i = 0; i <= charLength; i++) {
    randomChars += chars[Math.floor(Math.random() * 26)]
}

console.log(randomChars)

// 2
let randomHex = "#"
let hexChars = 'a1b2c3d4e5f67890'
for (let i = 0; i < 6; i++) {
    randomHex += hexChars[Math.floor(Math.random() * 16)]
}

console.log(randomHex)

// 3 

function rgb () {
    let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

    console.log(rgb)
}

// 4
let newCountry = []
for (country of countries) {
    newCountry.push(country.toUpperCase())
}

console.log(newCountry)

// 5 
let countriesLength = []

for (let country of countries) {
    countriesLength.push(country.length)
}

console.log(countriesLength)

//6 

let countryInfo = []

for (let i = 0; i < countries.length; i++) {
    countryInfo.push([countries[i], countries[i].slice(0, 3), countries[i].length])
}

console.log(countryInfo)

// 7
let cwl = []
for (let country of countries) {
    if (country.toLowerCase().includes('land')) {
        cwl.push(country)
    }
}

cwl.length > 0 ? console.log(cwl): console.log('All these countries are without land');

// 8

let cwia = []  // Countries With 'ia'

for (let c of countries) {
    if (c.toLowerCase().includes('ia')) {
        cwia.push(c)
    }
}

cwia.length ? console.log(cwia) : console.log('These are countries ends without ia')

// 9

let mostChar = ""
let count = 0
for (let c of countries) {

    if (c.length > count) {
        count = c.length
        mostChar = c
        // console.log(mostChar)
    }
}

console.log(mostChar)

// 10

let s = 0
let countriesWithFiveChars = []
do {
    if (countries[s].length === 5) {
        countriesWithFiveChars.push(countries[s])
    }
    s++
} while (s < countries.length)

console.log(countriesWithFiveChars)

// 11

let charCount = 0
let longestWord = ''

for (let tech of webTechs) {
    if (tech.length > charCount) {
        charCount = tech.length
        longestWord = tech
    }
}

console.log(longestWord)