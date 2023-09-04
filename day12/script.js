// const h2 = document.createElement('h2')
// h2.innerText = 'Regular Expression In JavaScript'
// document.body.appendChild(h2)

const regEx = new RegExp('live', 'gi')
const claim = 'I live and breath JavaScript as I do the air'
console.log(regEx.test(claim))

const findLove = /love/gi
const sentence = 'My favorite programming language is JavaScript. The love of it is the beginning of awesome web design'
const loveIsPresent = findLove.test(sentence)
const loveIndex = sentence.search(findLove)
console.log(loveIsPresent)
console.log(loveIndex)

const editedSent = sentence.replace(/JavaScript/gi, 'Python')
editedSent

let txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
txt = txt.replace(/%/g, '')
txt

const changeText = txt.match(/motivate/)
changeText

const earningStatement = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const earnings = /\d{3,5}/g
const earningsArr = earningStatement.match(earnings)
const annualIncome = () => {
    let sum = 0
    for (let i = 0; i < earningsArr.length; i++) {
        if (i === 0) {
            sum = Number(earningsArr[i]) * 12
        } else {
            sum += Number(earningsArr[i])
        }

    }
    return sum
}
console.log(annualIncome())
console.log(earningsArr)