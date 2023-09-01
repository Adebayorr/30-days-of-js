const newArr = ['Nigeria', 'Portugal', 'Zambia', 'CAR', 'Iran', 'India', 'Brazil', 'Iran']
const uniqueItems = new Set(newArr)
console.log(uniqueItems)

let itemLength = []

let count = 0

// do {
//     itemLength.push(newArr[count])
//     count++
// } while (count < newArr.length)
// console.log(newArr)

for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
}

for (item of uniqueItems) {
    itemLength.push(item.length)
}
console.log(itemLength)

uniqueItems.forEach((item) => {
    console.log(item)
})
const includeIA = newArr.filter((item) => {
    item.includes('ia')
})

console.log(includeIA)

console.log(typeof uniqueItems)


const a = [1,2,3,4,5,6,7,7,8,12]
const b = [5,6,7,8,9,9,10,11]
let c = [...a, ...b]

const setA = new Set(a)
const setB = new Set(b)

const union = new Set(c)
console.log(union)

c = b.filter((num) => setA.has(num))
const intersect = new Set(c)

console.log(intersect)

c = b.filter((num) => !setA.has(num))
const diff = new Set(c)
console.log(diff)


const newMap = new Map()
.set('Nigeria', 'Abuja')

const stack = [
    ['FrontEnd', ['HTML', 'React', 'CSS', 'JavaScript']],
    ['BackEnd', ['Python', 'Node.js', 'MongoDB', 'JavaScript']],
    // ['FullStack', [...'Back End', ...'Front End']] //NOTE: this output will be unexpected. It will turn Full Stack
    // into an array of the strings 'Back End' and 'Front End'
    /** 
     * It will be equivalent to:
     * const ArrOfBackEndAndFrontEnd = [..."Back End", ..."Front End"]
     *
     */
    //instead write it as:
    ['FullStack', ['HTML', 'React', 'CSS', 'JavaScript', 'Python', 'Node.js', 'MongoDB', 'JavaScript']]
]
const stackMap = new Map(stack)
console.log(stackMap)

newMap.clear()
console.log(newMap)

console.log(stackMap.has('Front End'))

for (const [stack, skills] of stackMap) {
    console.log(stack, skills)
}

for (const stacks of stackMap) {
    console.log(stacks)
}


console.log(stackMap.get('FrontEnd'))