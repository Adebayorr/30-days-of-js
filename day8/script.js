// Section  1

// 1, 2, 3
const dog = {
    name: "Speedy",
    legs: "4",
    color: "brown",
    age: 3,
    bark: "woof woof!",
    breed: 'Siberian Husky',
    getDogInfo: function () {
        return `${this.name} is a ${this.age} years old ${this.breed} with a ${this.color} fur`
    }
}

console.log(dog)
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark)
console.log(dog.getDogInfo())


// Section 2

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


// 1

function userWithManySkills () {
    let keys = Object.keys(users)
    
    let uwms = []
    for (let key of keys) {
        
        if (users[key].skills.length > 3)  {
            uwms.push(key)
        }
        
    }
    console.log(uwms)
    let phraseOne = uwms.splice(0, uwms.length - 1)
    let phraseTwo = `and ${uwms[uwms.length - 1]}`
    console.log(`${phraseOne.join(', ')} ${phraseTwo} are users with many skills`)
    
}

userWithManySkills()


// 2

function LoggedInUserWithFifty () {

    let values = Object.values(users)
    let usercount = 0
    console.log(values)
    for (let value of values) {
        console.log(value.isLoggedIn)
        if (value.isLoggedIn && value.points >= 50) usercount++
    }

    return `The number of logged-in users with 50 points or more: ${usercount}`
}

console.log(LoggedInUserWithFifty())

// 3 

function mernStackDevs () {
    let keys = Object.keys(users)
    const mernUsers = []

    for (let key of keys) {

        if (
            users[key].skills.includes('React') &&
            users[key].skills.includes('MongoDB') &&
            users[key].skills.includes('Express') &&
            users[key].skills.includes('Node')
        )
        mernUsers.push(key)

    }        
    console.log(mernUsers)

    let count = mernUsers.length
    let phrase1 = mernUsers.splice(0, mernUsers.length -1).join('')
    let phrase2 = `${mernUsers[mernUsers.length -1]}`

    console.log(phrase1, phrase2, mernUsers)
    if (count === 0) return 'No MERN stack developer'

    if (count === 1) return `${phrase1} is the only MERN stack Developer`
    
    if (count > 1) return `${phrase1} and ${phrase2} are the MERN stack Developer`
}

console.log(mernStackDevs())

// 4

const usersCopy = Object.assign({}, users)

console.log(usersCopy)

usersCopy.Fatai = {
    email: "raheemadebayorr@gmail.com",
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
    age: 25,
    isLoggedIn: false,
    points: 40
}

console.log(usersCopy)


// 5

const usersKeys = Object.keys(users)


// 6 

const usersValues = Object.values(users)


console.log(usersKeys)
console.log(usersValues)


// Section 3

// 1

const personAccount = {
    firstName: "John",
    LastName: "Glover",
    incomes: {
        salary: 45000,
        sideGigs: 21000,
        gifts: 2000
    },
    expenses: {
        rent: 6800,
        foodNGroceries: 5750,
        utils: 3760,
        studentTuition: 12000
    },

    looper: function (prop) {
        console.log(prop)
        let arr = Object.keys(prop)
        let sum = 0
        for (let a of arr) {
            sum += prop[a]
        }
        return sum
    },
    totalIncome: function () {
        return this.looper(this.incomes) 
    },
    totalExpenses: function () {
        return this.looper(this.expenses)
    },
    accountInfo: function () {

    },
    addIncome: function (income) {
        return this.incomes + income
    },
    addExpense: function (e) {
        return this.expenses + e
    },
    accountBalance: function () {
        return (this.totalIncome() - this.totalExpenses())
    }

}

console.log(personAccount.accountBalance())


// 2

const siteUsers = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
   },
  {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
  },
  {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
  }
]


// 2a
function signUp (email, password) {
    let i = 0
    let arr = []
    
    let existingUser = siteUsers.find(user => user.email === email)

    if (existingUser) return `Email is already registered`
    if (!existingUser) {
        siteUsers.push({
            email: email,
            password: password
        })
        return `Account successfully created`
    }
}

console.log(signUp("bayor@mailer.com", "ai7hejy3"))
console.log(siteUsers)

// 2b

const signIn = function (username, password) {
    let UserCheck = siteUsers.find(user => user.username === username && user.password === password)
    
    if (!UserCheck) return `Incorrect log in details`
    if (UserCheck) return `You're signed in`

}

console.log(signIn("Thomas", "123333"))