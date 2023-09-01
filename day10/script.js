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


const a = [1,2,3,4,5,6,7,7,8]
const b = [5,6,7,8,9,9,10,11]