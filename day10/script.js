// Level 1

const countries_data = [
	{
			"name": "Afghanistan",
			"capital": "Kabul",
			"languages": [
					"Pashto",
					"Uzbek",
					"Turkmen"
			],
			"population": 40218234,
			"flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
			"region": "Asia",
			"area": 652230
	},
	{
			"name": "Åland Islands",
			"capital": "Mariehamn",
			"languages": [
					"Swedish"
			],
			"population": 28875,
			"flag": "https://flagcdn.com/ax.svg",
			"region": "Europe",
			"area": 1580
	},
	{
			"name": "Albania",
			"capital": "Tirana",
			"languages": [
					"Albanian"
			],
			"population": 2837743,
			"flag": "https://flagcdn.com/al.svg",
			"region": "Europe",
			"area": 28748
	},
	{
			"name": "Algeria",
			"capital": "Algiers",
			"languages": [
					"Arabic"
			],
			"population": 43851043,
			"flag": "https://flagcdn.com/dz.svg",
			"region": "Africa",
			"area": 2381741
	},
	{
			"name": "American Samoa",
			"capital": "Pago Pago",
			"languages": [
					"English",
					"Samoan"
			],
			"population": 55197,
			"flag": "https://flagcdn.com/as.svg",
			"region": "Oceania",
			"area": 199
	},
	{
			"name": "Andorra",
			"capital": "Andorra la Vella",
			"languages": [
					"Catalan"
			],
			"population": 77265,
			"flag": "https://flagcdn.com/ad.svg",
			"region": "Europe",
			"area": 468
	},
	{
			"name": "Angola",
			"capital": "Luanda",
			"languages": [
					"Portuguese"
			],
			"population": 32866268,
			"flag": "https://flagcdn.com/ao.svg",
			"region": "Africa",
			"area": 1246700
	},
	{
			"name": "Anguilla",
			"capital": "The Valley",
			"languages": [
					"English"
			],
			"population": 13452,
			"flag": "https://flagcdn.com/ai.svg",
			"region": "Americas",
			"area": 91
	},
	{
			"name": "Antarctica",
			"languages": [
					"English",
					"Russian"
			],
			"population": 1000,
			"flag": "https://flagcdn.com/aq.svg",
			"region": "Polar",
			"area": 14000000
	},
	{
			"name": "Antigua and Barbuda",
			"capital": "Saint John's",
			"languages": [
					"English"
			],
			"population": 97928,
			"flag": "https://flagcdn.com/ag.svg",
			"region": "Americas",
			"area": 442
	},
	{
			"name": "Argentina",
			"capital": "Buenos Aires",
			"languages": [
					"Spanish",
					"Guaraní"
			],
			"population": 45376763,
			"flag": "https://flagcdn.com/ar.svg",
			"region": "Americas",
			"area": 2780400
	},
	{
			"name": "Armenia",
			"capital": "Yerevan",
			"languages": [
					"Armenian"
			],
			"population": 2963234,
			"flag": "https://flagcdn.com/am.svg",
			"region": "Asia",
			"area": 29743
	},
	{
			"name": "Aruba",
			"capital": "Oranjestad",
			"languages": [
					"Dutch",
					"(Eastern) Punjabi"
			],
			"population": 106766,
			"flag": "https://flagcdn.com/aw.svg",
			"region": "Americas",
			"area": 180
	},
	{
			"name": "Australia",
			"capital": "Canberra",
			"languages": [
					"English"
			],
			"population": 25687041,
			"flag": "https://flagcdn.com/au.svg",
			"region": "Oceania",
			"area": 7692024
	},
	{
			"name": "Austria",
			"capital": "Vienna",
			"languages": [
					"German"
			],
			"population": 8917205,
			"flag": "https://flagcdn.com/at.svg",
			"region": "Europe",
			"area": 83871
	},
	{
			"name": "Azerbaijan",
			"capital": "Baku",
			"languages": [
					"Azerbaijani"
			],
			"population": 10110116,
			"flag": "https://flagcdn.com/az.svg",
			"region": "Asia",
			"area": 86600
	},
	{
			"name": "Bahamas",
			"capital": "Nassau",
			"languages": [
					"English"
			],
			"population": 393248,
			"flag": "https://flagcdn.com/bs.svg",
			"region": "Americas",
			"area": 13943
	},
	{
			"name": "Bahrain",
			"capital": "Manama",
			"languages": [
					"Arabic"
			],
			"population": 1701583,
			"flag": "https://flagcdn.com/bh.svg",
			"region": "Asia",
			"area": 765
	},

]

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway', 'Burundi', 'Ecuador', 'Djibouti', 'Argentina']

// 1
const numSet = new Set()

// 2
for (let i = 0; i < 11; i++) {
    numSet.add(i)
}

// 3 
numSet.delete(0)

// 4
numSet.clear()

// 5

const barcaDefenders = ['Balde', 'Casado', 'Cubarsi', 'Eric Gracia', 'Joules kounde']
const barcaDefenderSet = new Set(barcaDefenders)

// 6
const mappedCountries = new Map()

for (let country of countries) {
    mappedCountries.set(country, country.length)
}


// Level 2
// 1
const AB = [...a, ...b]
const unionOfAB = new Set(AB)

// 2
const setOfB = new Set(b)
const setOfA = new Set(a)

const arrayIntersection = a.filter((n) => setOfB.has(n))
const intersectionOfAB = new Set(arrayIntersection)

// 3
const arrayDifferenceA = a.filter(n => !setOfB.has(n))
const arrayDifferenceB = b.filter(n => !setOfA.has(n))
const arrayDifferenceOfAB = [...arrayDifferenceA, ...arrayDifferenceB]
const differenceOfAB = new Set(arrayDifferenceOfAB)
console.log(differenceOfAB)


// Level 3




































































































// const newArr = ['Nigeria', 'Portugal', 'Zambia', 'CAR', 'Iran', 'India', 'Brazil', 'Iran']
// const uniqueItems = new Set(newArr)
// console.log(uniqueItems)

// let itemLength = []

// let count = 0

// // do {
// //     itemLength.push(newArr[count])
// //     count++
// // } while (count < newArr.length)
// // console.log(newArr)

// for (let i = 0; i < newArr.length; i++) {
//     console.log(newArr[i])
// }

// for (item of uniqueItems) {
//     itemLength.push(item.length)
// }
// console.log(itemLength)

// uniqueItems.forEach((item) => {
//     console.log(item)
// })
// const includeIA = newArr.filter((item) => {
//     item.includes('ia')
// })

// console.log(includeIA)

// console.log(typeof uniqueItems)


// const a = [1,2,3,4,5,6,7,7,8,12]
// const b = [5,6,7,8,9,9,10,11]
// let c = [...a, ...b]

// const setA = new Set(a)
// const setB = new Set(b)

// const union = new Set(c)
// console.log(union)

// c = b.filter((num) => setA.has(num))
// const intersect = new Set(c)

// console.log(intersect)

// c = b.filter((num) => !setA.has(num))
// const diff = new Set(c)
// console.log(diff)


// const newMap = new Map()
// .set('Nigeria', 'Abuja')

// const stack = [
//     ['FrontEnd', ['HTML', 'React', 'CSS', 'JavaScript']],
//     ['BackEnd', ['Python', 'Node.js', 'MongoDB', 'JavaScript']],
//     // ['FullStack', [...'Back End', ...'Front End']] //NOTE: this output will be unexpected. It will turn Full Stack
//     // into an array of the strings 'Back End' and 'Front End'
//     /** 
//      * It will be equivalent to:
//      * const ArrOfBackEndAndFrontEnd = [..."Back End", ..."Front End"]
//      *
//      */
//     //instead write it as:
//     ['FullStack', ['HTML', 'React', 'CSS', 'JavaScript', 'Python', 'Node.js', 'MongoDB', 'JavaScript']]
// ]
// const stackMap = new Map(stack)
// console.log(stackMap)

// newMap.clear()
// console.log(newMap)

// console.log(stackMap.has('Front End'))

// for (const [stack, skills] of stackMap) {
//     console.log(stack, skills)
// }

// for (const stacks of stackMap) {
//     console.log(stacks)
// }


// console.log(stackMap.get('FrontEnd'))