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

const emptyArr = Array()
const arrayOfFiveElements = Array(8).fill("x")
console.log(arrayOfFiveElements.length)

const cities = ["Lagos", "Johannesburg", "Djibouti", "Los Angeles", "London"]
console.log(cities[0])
console.log(cities[2])
console.log(cities[cities.length - 1])


const mixedDataTypes = ["Oyewo", "Marvelous", "OAU", 5, true, {studentship: "active"}]

const Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] 

console.log(Companies)
console.log(Companies.length)
console.log(Companies[0])
console.log(Companies[3])
console.log(Companies[Companies.length -1])

console.log(Companies[0])
console.log(Companies[1])
console.log(Companies[2])
console.log(Companies[3])
console.log(Companies[4])
console.log(Companies[5])
console.log(Companies[6])

console.log(Companies[0].toUpperCase())
console.log(Companies[1].toUpperCase())
console.log(Companies[2].toUpperCase())
console.log(Companies[3].toUpperCase())
console.log(Companies[4].toUpperCase())
console.log(Companies[5].toUpperCase())
console.log(Companies[6].toUpperCase())


console.log(`${Companies[0]}, ${Companies[1]}, ${Companies[2]}, ${Companies[3]}, 
${Companies[4]}, ${Companies[5]} and ${Companies[6]} are all big IT companies`)

let company = "Ibm"

Companies.indexOf(company) >= 0 ? console.log(company) : console.log("Company is not found")

Companies.sort()
Companies.reverse()
console.log(Companies.slice(0, 3))
console.log(Companies)