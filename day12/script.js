const h2 = document.createElement('h2')
h2.innerText = 'Regular Expression In JavaScript'
document.body.appendChild(h2)
console.log(document)
// const regEx = new RegExp('live', 'gi')
// const claim = 'I live and breath JavaScript as I do the air'
// console.log(regEx.test(claim))

// const findLove = /love/gi
// const sentence = 'My favorite programming language is JavaScript. The love of it is the beginning of awesome web design'
// const loveIsPresent = findLove.test(sentence)
// const loveIndex = sentence.search(findLove)
// console.log(loveIsPresent)
// console.log(loveIndex)

// const editedSent = sentence.replace(/JavaScript/gi, 'Python')
// editedSent

// let txt = `%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\n
// T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
// p%e%o%ple.\n
// I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\n
// D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.`
// txt = txt.replace(/%/g, '')
// console.log(txt)

// const changeText = txt.match(/motivate/)
// console.log(changeText)

// Level 1
// 1
const earningStatement = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const filterNums = /d/
const incomes    = earningStatement.match(/\d+/g)
console.log(incomes)

const totalIncome  = incomes.reduce((acc, cur) => acc += Number(cur), 0)

console.log(totalIncome)

// const earnings = /\d{3,5}/g
// const earningsArr = earningStatement.match(earnings)
// let sorted;
// function sortNumArr (arr) {
//   sorted =  arr.filter( (a, b) => a > b)
//   return sorted
// }

// console.log(sortNumArr(earningsArr))
// const annualIncome = (arr) => {
//     sortNumArr(arr)
//     let sum = 0
//     for (let i = 0; i < sorted.length; i++) {
//         if (i === 0) {
//             sum = Number(sorted[i]) * 12
//         } else {
//             sum += Number(sorted[i])
//         }

//     }
//     return sum
// }
// console.log(annualIncome(earningsArr))
// console.log(earningsArr)

// 2
const particlesStatement = `The position of some particles on the horizontal x-axis
 -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive 
 direction. Extract these numbers and find the distance between the two furthest particles.`
const pointsFilter = /[-]?\d+/g
const points = particlesStatement.match(pointsFilter)
const sortPoints = points.sort((a,b) => a - b)
const farthestDistance = Number(points[points.length -1] - Number(points[0])) 
console.log(farthestDistance)
// console.log(8 - -12)
// const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// // console.log(sortNumArr(points))
// const furthestDistance = () => {
//     let sorted = points.sort((a,b) => a - b)
//     let result = Number(sorted[0]) - Number(sorted[points.length - 1])
//     return Math.abs(result)
    
// }
// console.log(furthestDistance(points))


// 3
function isValidJsName (variableName) {
    const validJSName = /[^A-Za-z_]+/g 
    if (validJSName.test(variableName)) {
        return false
    } else {
        return true
    }
}

let statement2 = "+first_name"
  
console.log(isValidJsName(statement2))


// // const pattern2 = check2.test(statement2)
// // console.log(pattern2)

// function isValidVar (statement) {
//     const check2 = /^[^\d+][\w]{1,}$/
//     if (check2.test(statement) === true) {
//         return ('A valid JavaScript variable')
//     } else {
//         throw new SyntaxError()
//     }
// } 

// console.log(isValidVar('first_name'))


// Level 2
let paragraph = `I  love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const tenMostFrequentWords = function (paragraph, range = 10) {

    let lowerCaseP = paragraph.toLowerCase().replace(/\./g, '')
     const wordsInP = lowerCaseP.split(" ").filter(e => e !== '')
    const uniqueWordsInP = new Set(wordsInP)
    const uniqueWordsObj = []
    for(uniqueword of uniqueWordsInP) {
        uniqueWordsObj.push({word: uniqueword, count: 0})
    }

    for (word of uniqueWordsObj) {
        const count = wordsInP.filter(w => w === word.word)
        word.count = count.length
    }
   return uniqueWordsObj.sort((a, b) => b.count - a.count ).splice(0, range)
}

console.log(tenMostFrequentWords(paragraph))



// Level 3
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = (sentence, ) => {
    const charsToClean = /[&%@$#;?]+/g
    const newSentence = sentence.replace(charsToClean, "")
    console.log(tenMostFrequentWords(newSentence, 3))
    return (newSentence)
    
}


console.log(cleanText(sentence))