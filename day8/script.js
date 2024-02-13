// const player = {
//     id: "a284sby435",
//     userName: "adebayorr",
//     townHall: "Level 12",
//     Heroes: ["Barbarian King", "Archer Queen", "Grand Warden"],
//     clanName: null,
//     league: "Crystal"
// }

// const copyPlayer = Object.assign({}, player)

// console.log(copyPlayer)

const dog = {
    name : "stuffy",
    leg : 4,
    color : "brown",
    age : 2,
    bark : "bow-wow"
}

console.log(dog)

console.log(dog.name,
    dog.leg,
    dog.color,
    dog.age ,
    dog.bark
)
dog.breed = "chihuahua"
dog.getDogInfo = function  () {
    return `This is ${this.name}, a ${this.age} years old ${this.breed} with ${this.color} fur`
}

console.log(dog)
console.log(dog.getDogInfo())



//Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

/**
 * Find the person who has many skills in the users object.
 * Count logged in users, count users having greater than equal to 50 points from the following object. 
 */

//1
let userMap =  Object.entries(users)
let mostSkills 
for (let i = 1; i < userMap.length; i++) {
  if (userMap[i][1].skills.length > userMap[i - 1][1].skills.length) {
    mostSkills = userMap[i]
  }
}

console.log(mostSkills)

//2 
let loggedIn = 0
for (let i = 0; i < userMap.length; i++) {
  console.log(userMap)
  if (userMap[i][1].isLoggedIn === true) {
    loggedIn++
  }
}
console.log(loggedIn)

//3. Find people who are MERN stack developer from the users object
let i = 0
let mernStackUsersCount = 0
let mernStackUsers = []
do {
  if (userMap[i][1].skills.includes("MongoDB") &&
  userMap[i][1].skills.includes("MongoDB") &&
  userMap[i][1].skills.includes("MongoDB") &&
  userMap[i][1].skills.includes("MongoDB")
  ) {
    mernStackUsersCount++
    mernStackUsers.push(userMap[i])
  }
  console.log(userMap[i])
  i++
} while(i < userMap.length)
let output = `${mernStackUsers[0][0]} and ${mernStackUsers[1][0]} are mernStack developers`
console.log(output)

const newUsers = Object.assign({}, users)
const bayor = {
  email: "bayor@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Sass"],
  age: 19,
  isLoggedIn : true,
  points: 35
}
newUsers.bayor = bayor
console.log(newUsers)

let keysOfUsers = Object.keys(users)
let valuesOfUsers = Object.values(users)
console.log(keysOfUsers)
console.log(valuesOfUsers)



//7. Use the countries object to print a country name, capital, populations and languages.
const countries = {
  Austria : {
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
Bahamas : {
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
"Cayman Islands": {
  "name": "Cayman Islands",
  "capital": "George Town",
  "languages": [
      "English"
  ],
  "population": 65720,
  "flag": "https://flagcdn.com/ky.svg",
  "region": "Americas",
  "area": 264
},
Ecuador: {
  "name": "Ecuador",
  "capital": "Quito",
  "languages": [
      "Spanish"
  ],
  "population": 17643060,
  "flag": "https://flagcdn.com/ec.svg",
  "region": "Americas",
  "area": 276841
},
}

let countriesCopy = Object.entries(countries)

let y = 0

while (y < countriesCopy.length) {
  let details = `${countriesCopy[y][0]}\'s, capital is ${countriesCopy[y][1].capital}. It has a population of
   ${countriesCopy[y][1].population} people. ${countriesCopy[y][1].languages } is the official language`
  console.log(details)
  y++
}
console.log(countriesCopy)


//Level 3

/**
 * Create an object literal called personAccount. It has firstName, lastName, incomes, 
 * expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense 
 * and accountBalance methods. Incomes is a set of incomes and its description and expenses is 
 * a set of incomes and its description.
 */

const personAccount = {
  firstName: "AbdulFatai",
  lastName: "AbdulRaheem",
  incomes: [
    {fedSalary: 33000},
    {stateSalary: 15000}, 
    {Misc: 20000}
  ],
  expenses: [
    {Data: 10000}, 
    {others: 15000}
  ],
  totalExpense: function () {
    let total 
    for (let i = 0; i < this.expenses.length; i++) {
      total += this.expenses[i]
    }
    return total
  },
  totalIncome: function () {
    let total 
    let i = 0
    while (i < this.incomes.length) {
      total += this.incomes[i]
    }
    return total
  }

}