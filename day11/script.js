let title = document.createElement('h2')
title.textContent = 'Destructuring And Spread Operator';
const document1 = document.body
document.body.appendChild(title)

const textArr = ['Economic', 'History', 'Geography', 'Agricultural Science', 'Physic', 'Biology', 'Chemistry', 'Government']

const [econ, his, geo, agric, ...scienceSubjects] = textArr

console.log(econ, his, geo, agric)

const [,,,, phy, bio, chem, gov] = textArr
console.log(scienceSubjects)


// Testing the slice() array Method
const textArrCopy = textArr.slice(0, -3)

console.log(textArrCopy)
console.log(textArr)

//DEstructuring an Object

const {PI} = Math
console.log(PI) ///Note: The name of the variable you use to destructure an object 
//should be exactly the same with the object property

const rectangle = {
    length: 24,
    breadth: 18,
    // area: this.length * this.breadth,
    // perimeter: 2 * (this.length + this.breadth)

} 

const {length, breadth, area, perimeter} = rectangle

console.log(length, breadth, area, perimeter)

//Renaming  during restructuring

const {length: l, breadth: b} = rectangle

console.log(b, l)


const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }

  //Using the person object without destructuring

  const getPersonInfo = () => {
    let fullName = person.firstName + " " + person.lastName
    let job = person.job
    let frontend = person.skills.slice(0, 4).join(', ')
    let backend = person.skills.slice(4).join(', ')

    console.log(`My name is ${fullName}, I am a ${job}. I am a fullstack developer. My frontend skills include ${frontend} and my backend includes ${backend}`)
  }

  getPersonInfo()

  // Using Object with destructuring

function printPersonInfo () {
    let {
        firstName,
        lastName,
        skills,
        job,
        age, 
        country,
        languages
    } = person

    let stringSkills = skills.slice(0, -1).join(', ') + ` and ${skills[skills.length -1]}`
    let langString = languages.slice(0, -1).join(', ') + ` and ${languages[languages.length -1]}`
    let fullName = firstName +' ' + lastName

    let output = `I'm ${fullName} from ${country} and I am ${age} and a polyglot. I speak ${langString}. I work as a ${job} with proficiency in ${stringSkills}`
    return output
}

console.log(printPersonInfo())

//Destructuring Array using Iteration

const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]

for (const {task, time, completed} of todoList) {
    console.log(task, time, completed)
}

for (let i = 0; i < todoList.length; i++) {
    const {task, time, completed} = todoList[i]
    console.log(`${i + 1}:`, task, time, completed)
}

//Spread Or Rest Operator 

//When we destructure an array we use the spread operator(...) to get the rest elements as array. 
//In addition to that we use spread operator to spread array elements to another array.

//Spread operator to get the rest of array elements
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(rest)

// Spread Operator to copy arrays

const odds = [1,3,5,7,9,11]
const evens = [2,4,6,8,10]

const evenCopy = [...evens]
const oneToEleven = [...odds,...evens].sort((a, b ) =>  a - b)///Notice the output without the function
console.log(oneToEleven)
console.log(evenCopy)


//copying objects with spread
const bread = {
    bread: true
}

const butter = {
    butter: true
}

const breadAndButter = {...bread, ...butter}

console.log(breadAndButter)

//Spread operator with arrow function
//Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. 
//If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

const sumAll = (...args) => {
    let sum = 0
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    return sum
}

console.log(sumAll(1,2,3,4,5,6,7))
